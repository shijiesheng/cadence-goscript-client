// Generated file based on parse.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as strconv from "@goscript/strconv/index.js"

import * as strings from "@goscript/strings/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as runtime from "@goscript/runtime/index.js"

import * as __goscript_lex from "./lex.gs.ts"

import * as __goscript_node from "./node.gs.ts"
import "@goscript/fmt/index.js"
import "@goscript/strconv/index.js"
import "@goscript/strings/index.js"
import "@goscript/bytes/index.js"
import "@goscript/runtime/index.js"
import "./lex.gs.ts"
import "./node.gs.ts"

$.registerTypePackagePath("text/template/parse", ["parse.Tree", "parse.Mode"])

export type Mode = number

export class Tree {
	public get Name(): string {
		return this._fields.Name
	}

	public set Name(value: string) {
		this._fields.Name = value
	}

	public get ParseName(): string {
		return this._fields.ParseName
	}

	public set ParseName(value: string) {
		this._fields.ParseName = value
	}

	public get Root(): __goscript_node.ListNode | $.VarRef<__goscript_node.ListNode> | null {
		return this._fields.Root
	}

	public set Root(value: __goscript_node.ListNode | $.VarRef<__goscript_node.ListNode> | null) {
		this._fields.Root = value
	}

	public get Mode(): Mode {
		return this._fields.Mode
	}

	public set Mode(value: Mode) {
		this._fields.Mode = value
	}

	public get text(): string {
		return this._fields.text
	}

	public set text(value: string) {
		this._fields.text = value
	}

	// Parsing only; cleared after parse.
	public get funcs(): $.Slice<globalThis.Map<string, any> | null> {
		return this._fields.funcs
	}

	public set funcs(value: $.Slice<globalThis.Map<string, any> | null>) {
		this._fields.funcs = value
	}

	public get lex(): __goscript_lex.lexer | $.VarRef<__goscript_lex.lexer> | null {
		return this._fields.lex
	}

	public set lex(value: __goscript_lex.lexer | $.VarRef<__goscript_lex.lexer> | null) {
		this._fields.lex = value
	}

	public get token(): __goscript_lex.item[] {
		return this._fields.token
	}

	public set token(value: __goscript_lex.item[]) {
		this._fields.token = value
	}

	public get peekCount(): number {
		return this._fields.peekCount
	}

	public set peekCount(value: number) {
		this._fields.peekCount = value
	}

	public get vars(): $.Slice<string> {
		return this._fields.vars
	}

	public set vars(value: $.Slice<string>) {
		this._fields.vars = value
	}

	public get treeSet(): globalThis.Map<string, Tree | $.VarRef<Tree> | null> | null {
		return this._fields.treeSet
	}

	public set treeSet(value: globalThis.Map<string, Tree | $.VarRef<Tree> | null> | null) {
		this._fields.treeSet = value
	}

	public get actionLine(): number {
		return this._fields.actionLine
	}

	public set actionLine(value: number) {
		this._fields.actionLine = value
	}

	public get rangeDepth(): number {
		return this._fields.rangeDepth
	}

	public set rangeDepth(value: number) {
		this._fields.rangeDepth = value
	}

	public get stackDepth(): number {
		return this._fields.stackDepth
	}

	public set stackDepth(value: number) {
		this._fields.stackDepth = value
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
		Name: string
		ParseName: string
		Root: __goscript_node.ListNode | $.VarRef<__goscript_node.ListNode> | null
		Mode: Mode
		text: string
		funcs: $.Slice<globalThis.Map<string, any> | null>
		lex: __goscript_lex.lexer | $.VarRef<__goscript_lex.lexer> | null
		token: __goscript_lex.item[]
		peekCount: number
		vars: $.Slice<string>
		treeSet: globalThis.Map<string, Tree | $.VarRef<Tree> | null> | null
		actionLine: number
		rangeDepth: number
		stackDepth: number
		leftDelim: string
		rightDelim: string
	}

	constructor(init?: Partial<{Name?: string, ParseName?: string, Root?: __goscript_node.ListNode | $.VarRef<__goscript_node.ListNode> | null, Mode?: Mode, text?: string, funcs?: $.Slice<globalThis.Map<string, any> | null>, lex?: __goscript_lex.lexer | $.VarRef<__goscript_lex.lexer> | null, token?: __goscript_lex.item[], peekCount?: number, vars?: $.Slice<string>, treeSet?: globalThis.Map<string, Tree | $.VarRef<Tree> | null> | null, actionLine?: number, rangeDepth?: number, stackDepth?: number, leftDelim?: string, rightDelim?: string}>, __goscriptValue?: boolean) {
		this._fields = {
			Name: init?.Name ?? ("" as string),
			ParseName: init?.ParseName ?? ("" as string),
			Root: init?.Root ?? (null! as __goscript_node.ListNode | $.VarRef<__goscript_node.ListNode> | null),
			Mode: init?.Mode ?? (0 as Mode),
			text: init?.text ?? ("" as string),
			funcs: init?.funcs ?? (null! as $.Slice<globalThis.Map<string, any> | null>),
			lex: init?.lex ?? (null! as __goscript_lex.lexer | $.VarRef<__goscript_lex.lexer> | null),
			token: init?.token !== undefined ? $.cloneArrayValue(init.token, /* @__PURE__ */ $.arrayType("parse.item", 3)) : $.arrayValue(globalThis.Array.from({ length: 3 }, () => new __goscript_lex.item(undefined, true)), /* @__PURE__ */ $.arrayType("parse.item", 3)),
			peekCount: init?.peekCount ?? (0 as number),
			vars: init?.vars ?? (null! as $.Slice<string>),
			treeSet: init?.treeSet ?? (null! as globalThis.Map<string, Tree | $.VarRef<Tree> | null> | null),
			actionLine: init?.actionLine ?? (0 as number),
			rangeDepth: init?.rangeDepth ?? (0 as number),
			stackDepth: init?.stackDepth ?? (0 as number),
			leftDelim: init?.leftDelim ?? ("" as string),
			rightDelim: init?.rightDelim ?? ("" as string)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Tree {
		return new Tree(this, true)
	}

	public __goscriptAssign(source: Tree): void {
		const target = this._fields
		const values = source._fields
		target.Name = values.Name
		target.ParseName = values.ParseName
		target.Root = values.Root
		target.Mode = values.Mode
		target.text = values.text
		target.funcs = values.funcs
		target.lex = values.lex
		target.token = $.assignFieldValue(target.token, values.token, /* @__PURE__ */ $.arrayType("parse.item", 3))
		target.peekCount = values.peekCount
		target.vars = values.vars
		target.treeSet = values.treeSet
		target.actionLine = values.actionLine
		target.rangeDepth = values.rangeDepth
		target.stackDepth = values.stackDepth
		target.leftDelim = values.leftDelim
		target.rightDelim = values.rightDelim
	}

	public Copy(): Tree | $.VarRef<Tree> | null {
		const t: Tree | $.VarRef<Tree> | null = this;
		const t$: Tree = t == null ? $.pointerTarget<Tree>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<Tree>(t)
		if (t == null) {
			return null
		}
		return (() => { const __goscriptLiteralField0 = __goscript_node.ListNode.prototype.CopyList.call((t$ as Tree).Root); return new Tree({Name: (t$ as Tree).Name, ParseName: (t$ as Tree).ParseName, Root: __goscriptLiteralField0, text: (t$ as Tree).text, leftDelim: (t$ as Tree).leftDelim, rightDelim: (t$ as Tree).rightDelim}) })()
	}

	public async ErrorContext(n: __goscript_node.Node | null): globalThis.Promise<[string, string]> {
		const t: Tree | $.VarRef<Tree> | null = this;
		let location: string = ""
		let context: string = ""
		let pos = $.int((__goscriptAwait = (n !== null && (n as any).__isVarRef !== true && (n as any).__goValue === undefined ? (n as Exclude<__goscript_node.Node, null>) : $.pointerValue<Exclude<__goscript_node.Node, null>>(n)).Position(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
		let tree: Tree | $.VarRef<Tree> | null = ((__goscriptAwait = (n !== null && (n as any).__isVarRef !== true && (n as any).__goValue === undefined ? (n as Exclude<__goscript_node.Node, null>) : $.pointerValue<Exclude<__goscript_node.Node, null>>(n)).tree(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as Tree | $.VarRef<Tree> | null)
		if (tree == null) {
			tree = t
		}
		let text = $.sliceStringOrBytes($.pointerValue<Tree>(tree).text, undefined, pos)
		let byteNum = strings.LastIndex(text, "\n")
		if (byteNum == -1) {
			byteNum = pos
		} else {
			byteNum++
			byteNum = pos - byteNum
		}
		let lineNum = 1 + strings.Count(text, "\n")
		context = (__goscriptAwait = (n !== null && (n as any).__isVarRef !== true && (n as any).__goValue === undefined ? (n as Exclude<__goscript_node.Node, null>) : $.pointerValue<Exclude<__goscript_node.Node, null>>(n)).String(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		return [await fmt.Sprintf("%s:%d:%d", $.pointerValue<Tree>(tree).ParseName, $.basicInterfaceValue(lineNum, "int"), $.basicInterfaceValue(byteNum, "int")), context]
	}

	public async Parse(text: string, leftDelim: string, rightDelim: string, treeSet: globalThis.Map<string, Tree | $.VarRef<Tree> | null> | null, funcs: $.Slice<globalThis.Map<string, any> | null>): globalThis.Promise<[Tree | $.VarRef<Tree> | null, $.GoError]> {
		let t: Tree | $.VarRef<Tree> | null = this;
		let tree: Tree | $.VarRef<Tree> | null = null! as Tree | $.VarRef<Tree> | null
		let err: $.VarRef<$.GoError> = $.varRef(null! as $.GoError)
		const __defer = new $.DisposableStack()
		try {
			const t$: Tree = t == null ? $.pointerTarget<Tree>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<Tree>(t)
			const __goscriptDeferCallee0 = $.functionValue(((__receiver) => (errp: $.VarRef<$.GoError> | null) => __receiver.recover(errp))((t$ as Tree)), ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("error")], results: [] } as $.FunctionTypeInfo), "text/template/parse.(*Tree).recover-fm")
			const __goscriptDeferArg0 = err
			__defer.defer(() => { __goscriptDeferCallee0(__goscriptDeferArg0) });
			;(t$ as Tree).ParseName = (t$ as Tree).Name;
			;(t$ as Tree).leftDelim = leftDelim
			if ($.stringEqual((t$ as Tree).leftDelim, "")) {
				;(t$ as Tree).leftDelim = "{{"
			}
			;(t$ as Tree).rightDelim = rightDelim
			if ($.stringEqual((t$ as Tree).rightDelim, "")) {
				;(t$ as Tree).rightDelim = "}}"
			}
			let __goscriptShadow0: __goscript_lex.lexer | $.VarRef<__goscript_lex.lexer> | null = __goscript_lex.lex((t$ as Tree).Name, text, (t$ as Tree).leftDelim, (t$ as Tree).rightDelim)
			void (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Tree).startParse(funcs, __goscriptShadow0, treeSet) : Tree.prototype.startParse.call(t, funcs, __goscriptShadow0, treeSet));
			;(t$ as Tree).text = text
			await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Tree).parse() : Tree.prototype.parse.call(t))
			await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Tree).add() : Tree.prototype.add.call(t))
			void (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Tree).stopParse() : Tree.prototype.stopParse.call(t))
			const __goscriptReturn0: [Tree | $.VarRef<Tree> | null, $.GoError] = [t, null]
			tree = __goscriptReturn0[0]
			err.value = __goscriptReturn0[1]
			__defer.dispose()
			return [tree, err.value]
			__defer.dispose()
		} catch (e) {
			__defer.disposePanic(e)
			if (!$.recovered(e)) {
				throw e
			}
		}
		return [tree, err.value]
	}

	public async action(): globalThis.Promise<__goscript_node.Node | null> {
		const t: Tree | $.VarRef<Tree> | null = this;
		let n: __goscript_node.Node | null = null! as __goscript_node.Node | null
		{
			let token = await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Tree).nextNonSpace() : Tree.prototype.nextNonSpace.call(t))
			switch (token.typ) {
				case 23:
				{
					return (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Tree).blockControl() : Tree.prototype.blockControl.call(t))
					break
				}
				case 24:
				{
					return (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Tree).breakControl(token.pos, token.line) : Tree.prototype.breakControl.call(t, token.pos, token.line))
					break
				}
				case 25:
				{
					return (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Tree).continueControl(token.pos, token.line) : Tree.prototype.continueControl.call(t, token.pos, token.line))
					break
				}
				case 28:
				{
					return (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Tree).elseControl() : Tree.prototype.elseControl.call(t))
					break
				}
				case 29:
				{
					return (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Tree).endControl() : Tree.prototype.endControl.call(t))
					break
				}
				case 30:
				{
					return (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Tree).ifControl() : Tree.prototype.ifControl.call(t))
					break
				}
				case 32:
				{
					return (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Tree).rangeControl() : Tree.prototype.rangeControl.call(t))
					break
				}
				case 33:
				{
					return (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Tree).templateControl() : Tree.prototype.templateControl.call(t))
					break
				}
				case 34:
				{
					return (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Tree).withControl() : Tree.prototype.withControl.call(t))
					break
				}
			}
		}
		void (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Tree).backup() : Tree.prototype.backup.call(t))
		let token = await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Tree).peek() : Tree.prototype.peek.call(t))
		// Do not pop variables; they persist until "end".
		return $.interfaceValue<__goscript_node.Node | null>(Tree.prototype.newAction.call(t, token.pos, token.line, await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Tree).pipeline("command", 16) : Tree.prototype.pipeline.call(t, "command", 16))), "*parse.ActionNode", /* @__PURE__ */ $.pointerType("parse.ActionNode"))
	}

	public async add(): globalThis.Promise<void> {
		let t: Tree | $.VarRef<Tree> | null = this;
		const t$: Tree = t == null ? $.pointerTarget<Tree>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<Tree>(t)
		let tree: Tree | $.VarRef<Tree> | null = $.mapGet<string, Tree | $.VarRef<Tree> | null, Tree | $.VarRef<Tree> | null>((t$ as Tree).treeSet, (t$ as Tree).Name, null)[0]
		if ((tree == null) || await IsEmptyTree($.interfaceValue<__goscript_node.Node | null>($.pointerValue<Tree>(tree).Root, "*parse.ListNode", /* @__PURE__ */ $.pointerType("parse.ListNode")))) {
			$.mapSet((t$ as Tree).treeSet, (t$ as Tree).Name, t)
			return
		}
		if (!await IsEmptyTree($.interfaceValue<__goscript_node.Node | null>((t$ as Tree).Root, "*parse.ListNode", /* @__PURE__ */ $.pointerType("parse.ListNode")))) {
			await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Tree).errorf("template: multiple definition of template %q", $.arrayToSlice<any>([(t$ as Tree).Name])) : Tree.prototype.errorf.call(t, "template: multiple definition of template %q", $.arrayToSlice<any>([(t$ as Tree).Name])))
		}
	}

	public backup(): void {
		let t: Tree | $.VarRef<Tree> | null = this;
		const t$: Tree = t == null ? $.pointerTarget<Tree>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<Tree>(t);
		;(t$ as Tree).peekCount++
	}

	public backup2(t1: __goscript_lex.item): void {
		let t: Tree | $.VarRef<Tree> | null = this;
		const t$: Tree = t == null ? $.pointerTarget<Tree>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<Tree>(t)
		$.assignStruct((t$ as Tree).token[1], t1);
		;(t$ as Tree).peekCount = 2
	}

	public backup3(t2: __goscript_lex.item, t1: __goscript_lex.item): void {
		let t: Tree | $.VarRef<Tree> | null = this;
		const t$: Tree = t == null ? $.pointerTarget<Tree>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<Tree>(t)
		$.assignStruct((t$ as Tree).token[1], t1)
		$.assignStruct((t$ as Tree).token[2], t2);
		;(t$ as Tree).peekCount = 3
	}

	public async blockControl(): globalThis.Promise<__goscript_node.Node | null> {
		const t: Tree | $.VarRef<Tree> | null = this;
		const t$: Tree = t == null ? $.pointerTarget<Tree>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<Tree>(t)
		const context: string = "block clause"

		let token = await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Tree).nextNonSpace() : Tree.prototype.nextNonSpace.call(t))
		let name = await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Tree).parseTemplateName(token, "block clause") : Tree.prototype.parseTemplateName.call(t, token, "block clause"))
		let pipe: __goscript_node.PipeNode | $.VarRef<__goscript_node.PipeNode> | null = await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Tree).pipeline("block clause", 16) : Tree.prototype.pipeline.call(t, "block clause", 16))

		let block: Tree | $.VarRef<Tree> | null = New(name, null)
		let block$: Tree = block == null ? $.pointerTarget<Tree>(block) : (block as any).__isVarRef === true ? (block as any).value : (block as any).__goValue === undefined ? (block as any) : $.pointerTarget<Tree>(block);
		;(block$ as Tree).text = (t$ as Tree).text;
		;(block$ as Tree).Mode = (t$ as Tree).Mode;
		;(block$ as Tree).leftDelim = (t$ as Tree).leftDelim;
		;(block$ as Tree).rightDelim = (t$ as Tree).rightDelim;
		;(block$ as Tree).ParseName = (t$ as Tree).ParseName
		void (block !== null && (block as any).__isVarRef !== true && (block as any).__goValue === undefined ? ((block as any) as Tree).startParse((t$ as Tree).funcs, (t$ as Tree).lex, (t$ as Tree).treeSet) : Tree.prototype.startParse.call(block, (t$ as Tree).funcs, (t$ as Tree).lex, (t$ as Tree).treeSet))
		let end: __goscript_node.Node | null = null! as __goscript_node.Node | null
		let __goscriptTuple0: any = await (block !== null && (block as any).__isVarRef !== true && (block as any).__goValue === undefined ? ((block as any) as Tree).itemList() : Tree.prototype.itemList.call(block));
		;(block$ as Tree).Root = __goscriptTuple0[0]
		end = __goscriptTuple0[1]
		if ((__goscriptAwait = (end !== null && (end as any).__isVarRef !== true && (end as any).__goValue === undefined ? (end as Exclude<__goscript_node.Node, null>) : $.pointerValue<Exclude<__goscript_node.Node, null>>(end)).Type(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 7) {
			await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Tree).errorf("unexpected %s in %s", $.arrayToSlice<any>([(end as any), "block clause"])) : Tree.prototype.errorf.call(t, "unexpected %s in %s", $.arrayToSlice<any>([(end as any), "block clause"])))
		}
		await (block !== null && (block as any).__isVarRef !== true && (block as any).__goValue === undefined ? ((block as any) as Tree).add() : Tree.prototype.add.call(block))
		void (block !== null && (block as any).__isVarRef !== true && (block as any).__goValue === undefined ? ((block as any) as Tree).stopParse() : Tree.prototype.stopParse.call(block))

		return $.interfaceValue<__goscript_node.Node | null>((t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Tree).newTemplate(token.pos, token.line, name, pipe) : Tree.prototype.newTemplate.call(t, token.pos, token.line, name, pipe)), "*parse.TemplateNode", /* @__PURE__ */ $.pointerType("parse.TemplateNode"))
	}

	public async breakControl(pos: __goscript_node.Pos, line: number): globalThis.Promise<__goscript_node.Node | null> {
		const t: Tree | $.VarRef<Tree> | null = this;
		{
			let token = await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Tree).nextNonSpace() : Tree.prototype.nextNonSpace.call(t))
			if (token.typ != 16) {
				await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Tree).unexpected(token, "{{break}}") : Tree.prototype.unexpected.call(t, token, "{{break}}"))
			}
		}
		if ($.pointerValue<Tree>(t).rangeDepth == 0) {
			await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Tree).errorf("{{break}} outside {{range}}", null) : Tree.prototype.errorf.call(t, "{{break}} outside {{range}}", null))
		}
		return $.interfaceValue<__goscript_node.Node | null>((t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Tree).newBreak(pos, line) : Tree.prototype.newBreak.call(t, pos, line)), "*parse.BreakNode", /* @__PURE__ */ $.pointerType("parse.BreakNode"))
	}

	public async checkPipeline(pipe: __goscript_node.PipeNode | $.VarRef<__goscript_node.PipeNode> | null, context: string): globalThis.Promise<void> {
		const t: Tree | $.VarRef<Tree> | null = this;
		const pipe$: __goscript_node.PipeNode = pipe == null ? $.pointerTarget<__goscript_node.PipeNode>(pipe) : (pipe as any).__isVarRef === true ? (pipe as any).value : (pipe as any).__goValue === undefined ? (pipe as any) : $.pointerTarget<__goscript_node.PipeNode>(pipe)
		// Reject empty pipelines
		if ($.sliceLen((pipe$ as __goscript_node.PipeNode).Cmds) == 0) {
			await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Tree).errorf("missing value for %s", $.arrayToSlice<any>([context])) : Tree.prototype.errorf.call(t, "missing value for %s", $.arrayToSlice<any>([context])))
		}
		// Only the first command of a pipeline can start with a non executable operand
		for (let __goscriptRangeTarget0 = $.goSlice((pipe$ as __goscript_node.PipeNode).Cmds, 1, undefined), __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), i = 0; i < __goscriptRangeWindow0.length; i++) {
			let c = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + i] as __goscript_node.CommandNode | $.VarRef<__goscript_node.CommandNode> | null)
			switch ((__goscriptAwait = $.pointerValue<Exclude<__goscript_node.Node, null>>($.arrayIndex($.pointerValue<__goscript_node.CommandNode>(c).Args!, 0)).Type(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
				case 2:
				case 5:
				case 12:
				case 13:
				case 16:
				{
					await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Tree).errorf("non executable command in pipeline stage %d", $.arrayToSlice<any>([$.basicInterfaceValue(i + 2, "int")])) : Tree.prototype.errorf.call(t, "non executable command in pipeline stage %d", $.arrayToSlice<any>([$.basicInterfaceValue(i + 2, "int")])))
					break
				}
			}
		}
	}

	public clearActionLine(): void {
		let t: Tree | $.VarRef<Tree> | null = this;
		$.pointerValue<Tree>(t).actionLine = 0
	}

	public async command(): globalThis.Promise<__goscript_node.CommandNode | $.VarRef<__goscript_node.CommandNode> | null> {
		const t: Tree | $.VarRef<Tree> | null = this;
		let cmd: __goscript_node.CommandNode | $.VarRef<__goscript_node.CommandNode> | null = Tree.prototype.newCommand.call(t, (await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Tree).peekNonSpace() : Tree.prototype.peekNonSpace.call(t))).pos)
		while (true) {
			await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Tree).peekNonSpace() : Tree.prototype.peekNonSpace.call(t))
			let operand = await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Tree).operand() : Tree.prototype.operand.call(t))
			if (operand != null) {
				void (cmd !== null && (cmd as any).__isVarRef !== true && (cmd as any).__goValue === undefined ? ((cmd as any) as __goscript_node.CommandNode).append(operand) : __goscript_node.CommandNode.prototype.append.call(cmd, operand))
			}
			{
				let token = await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Tree).next() : Tree.prototype.next.call(t))
				switch (token.typ) {
					case 18:
					{
						continue
						break
					}
					case 16:
					case 17:
					{
						void (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Tree).backup() : Tree.prototype.backup.call(t))
						break
					}
					case 14:
					{
						break
					}
					default:
					{
						await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Tree).unexpected(token, "operand") : Tree.prototype.unexpected.call(t, token, "operand"))
						break
					}
				}
			}
			break
		}
		if ($.sliceLen($.pointerValue<__goscript_node.CommandNode>(cmd).Args) == 0) {
			await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Tree).errorf("empty command", null) : Tree.prototype.errorf.call(t, "empty command", null))
		}
		return cmd
	}

	public async continueControl(pos: __goscript_node.Pos, line: number): globalThis.Promise<__goscript_node.Node | null> {
		const t: Tree | $.VarRef<Tree> | null = this;
		{
			let token = await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Tree).nextNonSpace() : Tree.prototype.nextNonSpace.call(t))
			if (token.typ != 16) {
				await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Tree).unexpected(token, "{{continue}}") : Tree.prototype.unexpected.call(t, token, "{{continue}}"))
			}
		}
		if ($.pointerValue<Tree>(t).rangeDepth == 0) {
			await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Tree).errorf("{{continue}} outside {{range}}", null) : Tree.prototype.errorf.call(t, "{{continue}} outside {{range}}", null))
		}
		return $.interfaceValue<__goscript_node.Node | null>((t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Tree).newContinue(pos, line) : Tree.prototype.newContinue.call(t, pos, line)), "*parse.ContinueNode", /* @__PURE__ */ $.pointerType("parse.ContinueNode"))
	}

	public async elseControl(): globalThis.Promise<__goscript_node.Node | null> {
		const t: Tree | $.VarRef<Tree> | null = this;
		let peek = await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Tree).peekNonSpace() : Tree.prototype.peekNonSpace.call(t))
		// The "{{else if ... " and "{{else with ..." will be
		// treated as "{{else}}{{if ..." and "{{else}}{{with ...".
		// So return the else node here.
		if ((peek.typ == 30) || (peek.typ == 34)) {
			return $.interfaceValue<__goscript_node.Node | null>((t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Tree).newElse(peek.pos, peek.line) : Tree.prototype.newElse.call(t, peek.pos, peek.line)), "*parse.elseNode", /* @__PURE__ */ $.pointerType("parse.elseNode"))
		}
		let token = await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Tree).expect(16, "else") : Tree.prototype.expect.call(t, 16, "else"))
		return $.interfaceValue<__goscript_node.Node | null>((t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Tree).newElse(token.pos, token.line) : Tree.prototype.newElse.call(t, token.pos, token.line)), "*parse.elseNode", /* @__PURE__ */ $.pointerType("parse.elseNode"))
	}

	public async endControl(): globalThis.Promise<__goscript_node.Node | null> {
		const t: Tree | $.VarRef<Tree> | null = this;
		return $.interfaceValue<__goscript_node.Node | null>(Tree.prototype.newEnd.call(t, (await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Tree).expect(16, "end") : Tree.prototype.expect.call(t, 16, "end"))).pos), "*parse.endNode", /* @__PURE__ */ $.pointerType("parse.endNode"))
	}

	public async error(err: $.GoError): globalThis.Promise<void> {
		const t: Tree | $.VarRef<Tree> | null = this;
		await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Tree).errorf("%s", $.arrayToSlice<any>([(err as any)])) : Tree.prototype.errorf.call(t, "%s", $.arrayToSlice<any>([(err as any)])))
	}

	public async errorf(format: string, args: $.Slice<any>): globalThis.Promise<void> {
		let t: Tree | $.VarRef<Tree> | null = this;
		const t$: Tree = t == null ? $.pointerTarget<Tree>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<Tree>(t);
		;(t$ as Tree).Root = null
		format = await fmt.Sprintf("template: %s:%d: %s", (t$ as Tree).ParseName, $.basicInterfaceValue($.arrayIndex((t$ as Tree).token, 0).line, "int"), format)
		$.panic((fmt.Errorf(format, ...(args ?? [])) as any))
	}

	public async expect(expected: __goscript_lex.itemType, context: string): globalThis.Promise<__goscript_lex.item> {
		const t: Tree | $.VarRef<Tree> | null = this;
		let token = await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Tree).nextNonSpace() : Tree.prototype.nextNonSpace.call(t))
		if (token.typ != expected) {
			await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Tree).unexpected(token, context) : Tree.prototype.unexpected.call(t, token, context))
		}
		return (token).clone()
	}

	public async expectOneOf(expected1: __goscript_lex.itemType, expected2: __goscript_lex.itemType, context: string): globalThis.Promise<__goscript_lex.item> {
		const t: Tree | $.VarRef<Tree> | null = this;
		let token = await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Tree).nextNonSpace() : Tree.prototype.nextNonSpace.call(t))
		if ((token.typ != expected1) && (token.typ != expected2)) {
			await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Tree).unexpected(token, context) : Tree.prototype.unexpected.call(t, token, context))
		}
		return (token).clone()
	}

	public hasFunction(name: string): boolean {
		const t: Tree | $.VarRef<Tree> | null = this;
		for (let __goscriptRangeTarget1 = $.pointerValue<Tree>(t).funcs, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
			let funcMap = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as globalThis.Map<string, any> | null)
			if (funcMap == null) {
				continue
			}
			if ($.mapGet<string, any, any>(funcMap, name, null)[0] != null) {
				return true
			}
		}
		return false
	}

	public async ifControl(): globalThis.Promise<__goscript_node.Node | null> {
		const t: Tree | $.VarRef<Tree> | null = this;
		return $.interfaceValue<__goscript_node.Node | null>(Tree.prototype.newIf.call(t, ...((await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Tree).parseControl("if") : Tree.prototype.parseControl.call(t, "if"))) as [__goscript_node.Pos, number, __goscript_node.PipeNode | $.VarRef<__goscript_node.PipeNode> | null, __goscript_node.ListNode | $.VarRef<__goscript_node.ListNode> | null, __goscript_node.ListNode | $.VarRef<__goscript_node.ListNode> | null])), "*parse.IfNode", /* @__PURE__ */ $.pointerType("parse.IfNode"))
	}

	public async itemList(): globalThis.Promise<[__goscript_node.ListNode | $.VarRef<__goscript_node.ListNode> | null, __goscript_node.Node | null]> {
		const t: Tree | $.VarRef<Tree> | null = this;
		let list: __goscript_node.ListNode | $.VarRef<__goscript_node.ListNode> | null = null! as __goscript_node.ListNode | $.VarRef<__goscript_node.ListNode> | null
		let next: __goscript_node.Node | null = null! as __goscript_node.Node | null
		list = Tree.prototype.newList.call(t, (await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Tree).peekNonSpace() : Tree.prototype.peekNonSpace.call(t))).pos)
		while ((await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Tree).peekNonSpace() : Tree.prototype.peekNonSpace.call(t))).typ != 8) {
			let n = await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Tree).textOrAction() : Tree.prototype.textOrAction.call(t))
			switch ((__goscriptAwait = (n !== null && (n as any).__isVarRef !== true && (n as any).__goValue === undefined ? (n as Exclude<__goscript_node.Node, null>) : $.pointerValue<Exclude<__goscript_node.Node, null>>(n)).Type(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
				case 7:
				case 6:
				{
					return [list, n]
					break
				}
			}
			void (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? ((list as any) as __goscript_node.ListNode).append(n) : __goscript_node.ListNode.prototype.append.call(list, n))
		}
		await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Tree).errorf("unexpected EOF", null) : Tree.prototype.errorf.call(t, "unexpected EOF", null))
		return [list, next]
	}

	public newAction(pos: __goscript_node.Pos, line: number, pipe: __goscript_node.PipeNode | $.VarRef<__goscript_node.PipeNode> | null): __goscript_node.ActionNode | $.VarRef<__goscript_node.ActionNode> | null {
		const t: Tree | $.VarRef<Tree> | null = this;
		return new __goscript_node.ActionNode({tr: t, NodeType: 1, Pos: pos, Line: line, Pipe: pipe})
	}

	public newBool(pos: __goscript_node.Pos, _true: boolean): __goscript_node.BoolNode | $.VarRef<__goscript_node.BoolNode> | null {
		const t: Tree | $.VarRef<Tree> | null = this;
		return new __goscript_node.BoolNode({tr: t, NodeType: 2, Pos: pos, True: true})
	}

	public newBreak(pos: __goscript_node.Pos, line: number): __goscript_node.BreakNode | $.VarRef<__goscript_node.BreakNode> | null {
		const t: Tree | $.VarRef<Tree> | null = this;
		return new __goscript_node.BreakNode({tr: t, NodeType: 21, Pos: pos, Line: line})
	}

	public newChain(pos: __goscript_node.Pos, node: __goscript_node.Node | null): __goscript_node.ChainNode | $.VarRef<__goscript_node.ChainNode> | null {
		const t: Tree | $.VarRef<Tree> | null = this;
		return new __goscript_node.ChainNode({tr: t, NodeType: 3, Pos: pos, Node: node})
	}

	public newCommand(pos: __goscript_node.Pos): __goscript_node.CommandNode | $.VarRef<__goscript_node.CommandNode> | null {
		const t: Tree | $.VarRef<Tree> | null = this;
		return new __goscript_node.CommandNode({tr: t, NodeType: 4, Pos: pos})
	}

	public newComment(pos: __goscript_node.Pos, text: string): __goscript_node.CommentNode | $.VarRef<__goscript_node.CommentNode> | null {
		const t: Tree | $.VarRef<Tree> | null = this;
		return new __goscript_node.CommentNode({tr: t, NodeType: 20, Pos: pos, Text: text})
	}

	public newContinue(pos: __goscript_node.Pos, line: number): __goscript_node.ContinueNode | $.VarRef<__goscript_node.ContinueNode> | null {
		const t: Tree | $.VarRef<Tree> | null = this;
		return new __goscript_node.ContinueNode({tr: t, NodeType: 22, Pos: pos, Line: line})
	}

	public newDot(pos: __goscript_node.Pos): __goscript_node.DotNode | $.VarRef<__goscript_node.DotNode> | null {
		const t: Tree | $.VarRef<Tree> | null = this;
		return new __goscript_node.DotNode({tr: t, NodeType: 5, Pos: pos})
	}

	public newElse(pos: __goscript_node.Pos, line: number): __goscript_node.elseNode | $.VarRef<__goscript_node.elseNode> | null {
		const t: Tree | $.VarRef<Tree> | null = this;
		return new __goscript_node.elseNode({tr: t, NodeType: 6, Pos: pos, Line: line})
	}

	public newEnd(pos: __goscript_node.Pos): __goscript_node.endNode | $.VarRef<__goscript_node.endNode> | null {
		const t: Tree | $.VarRef<Tree> | null = this;
		return new __goscript_node.endNode({tr: t, NodeType: 7, Pos: pos})
	}

	public newField(pos: __goscript_node.Pos, ident: string): __goscript_node.FieldNode | $.VarRef<__goscript_node.FieldNode> | null {
		const t: Tree | $.VarRef<Tree> | null = this;
		return (() => { const __goscriptLiteralField1 = strings.Split($.sliceStringOrBytes(ident, 1, undefined), "."); return new __goscript_node.FieldNode({tr: t, NodeType: 8, Pos: pos, Ident: __goscriptLiteralField1}) })()
	}

	public newIf(pos: __goscript_node.Pos, line: number, pipe: __goscript_node.PipeNode | $.VarRef<__goscript_node.PipeNode> | null, list: __goscript_node.ListNode | $.VarRef<__goscript_node.ListNode> | null, elseList: __goscript_node.ListNode | $.VarRef<__goscript_node.ListNode> | null): __goscript_node.IfNode | $.VarRef<__goscript_node.IfNode> | null {
		const t: Tree | $.VarRef<Tree> | null = this;
		return new __goscript_node.IfNode({BranchNode: new __goscript_node.BranchNode({tr: t, NodeType: 10, Pos: pos, Line: line, Pipe: pipe, List: list, ElseList: elseList}, true)})
	}

	public newList(pos: __goscript_node.Pos): __goscript_node.ListNode | $.VarRef<__goscript_node.ListNode> | null {
		const t: Tree | $.VarRef<Tree> | null = this;
		return new __goscript_node.ListNode({tr: t, NodeType: 11, Pos: pos})
	}

	public newNil(pos: __goscript_node.Pos): __goscript_node.NilNode | $.VarRef<__goscript_node.NilNode> | null {
		const t: Tree | $.VarRef<Tree> | null = this;
		return new __goscript_node.NilNode({tr: t, NodeType: 12, Pos: pos})
	}

	public newNumber(pos: __goscript_node.Pos, text: string, typ: __goscript_lex.itemType): [__goscript_node.NumberNode | $.VarRef<__goscript_node.NumberNode> | null, $.GoError] {
		const t: Tree | $.VarRef<Tree> | null = this;
		let n: __goscript_node.NumberNode | $.VarRef<__goscript_node.NumberNode> | null = new __goscript_node.NumberNode({tr: t, NodeType: 13, Pos: pos, Text: text})
		let n$: __goscript_node.NumberNode = n == null ? $.pointerTarget<__goscript_node.NumberNode>(n) : (n as any).__isVarRef === true ? (n as any).value : (n as any).__goValue === undefined ? (n as any) : $.pointerTarget<__goscript_node.NumberNode>(n)
		switch (typ) {
			case 3:
			{
				let [rune, , tail, err] = strconv.UnquoteChar($.sliceStringOrBytes(text, 1, undefined), $.indexString(text, 0))
				if (err != null) {
					return [null, err]
				}
				if (!$.stringEqual(tail, "'")) {
					return [null, fmt.Errorf("malformed character constant: %s", text)]
				}
				;(n$ as __goscript_node.NumberNode).Int64 = $.int64(rune);
				;(n$ as __goscript_node.NumberNode).IsInt = true;
				;(n$ as __goscript_node.NumberNode).Uint64 = $.uint64(rune);
				;(n$ as __goscript_node.NumberNode).IsUint = true;
				;(n$ as __goscript_node.NumberNode).Float64 = rune;
				;(n$ as __goscript_node.NumberNode).IsFloat = true
				return [n, null]
				break
			}
			case 5:
			{
				{
					let [, err] = fmt.Sscan(text, $.interfaceValue($.fieldRef((n$ as __goscript_node.NumberNode)._fields, "Complex128"), "*complex128", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("complex128"))))
					if (err != null) {
						return [null, err]
					}
				}
				;(n$ as __goscript_node.NumberNode).IsComplex = true
				void (n !== null && (n as any).__isVarRef !== true && (n as any).__goValue === undefined ? ((n as any) as __goscript_node.NumberNode).simplifyComplex() : __goscript_node.NumberNode.prototype.simplifyComplex.call(n))
				return [n, null]
				break
			}
		}

		if (($.stringLen(text) > 0) && ($.indexString(text, $.stringLen(text) - 1) == 105)) {
			let [f, err] = strconv.ParseFloat($.sliceStringOrBytes(text, undefined, $.stringLen(text) - 1), 64)
			if (err == null) {
				;(n$ as __goscript_node.NumberNode).IsComplex = true;
				;(n$ as __goscript_node.NumberNode).Complex128 = $.complex(0, f)
				void (n !== null && (n as any).__isVarRef !== true && (n as any).__goValue === undefined ? ((n as any) as __goscript_node.NumberNode).simplifyComplex() : __goscript_node.NumberNode.prototype.simplifyComplex.call(n))
				return [n, null]
			}
		}

		let [u, err] = strconv.ParseUint(text, 0, 64)
		if (err == null) {
			;(n$ as __goscript_node.NumberNode).IsUint = true;
			;(n$ as __goscript_node.NumberNode).Uint64 = u
		}
		let __goscriptTuple1: any = strconv.ParseInt(text, 0, 64)
		let i = __goscriptTuple1[0]
		err = __goscriptTuple1[1]
		if (err == null) {
			;(n$ as __goscript_node.NumberNode).IsInt = true;
			;(n$ as __goscript_node.NumberNode).Int64 = i
			if (i == 0n) {
				;(n$ as __goscript_node.NumberNode).IsUint = true;
				;(n$ as __goscript_node.NumberNode).Uint64 = u
			}
		}

		if ((n$ as __goscript_node.NumberNode).IsInt) {
			;(n$ as __goscript_node.NumberNode).IsFloat = true;
			;(n$ as __goscript_node.NumberNode).Float64 = globalThis.Number((n$ as __goscript_node.NumberNode).Int64)
		} else {
			if ((n$ as __goscript_node.NumberNode).IsUint) {
				;(n$ as __goscript_node.NumberNode).IsFloat = true;
				;(n$ as __goscript_node.NumberNode).Float64 = globalThis.Number((n$ as __goscript_node.NumberNode).Uint64)
			} else {
				let [f, __goscriptShadow1] = strconv.ParseFloat(text, 64)
				if (__goscriptShadow1 == null) {

					// Do not pop variables; they persist until "end".
					if (!strings.ContainsAny(text, ".eEpP")) {
						return [null, fmt.Errorf("integer overflow: %q", text)]
					}
					;(n$ as __goscript_node.NumberNode).IsFloat = true;
					;(n$ as __goscript_node.NumberNode).Float64 = f

					if (!(n$ as __goscript_node.NumberNode).IsInt && (globalThis.Number($.int64(f)) == f)) {
						;(n$ as __goscript_node.NumberNode).IsInt = true;
						;(n$ as __goscript_node.NumberNode).Int64 = $.int64(f)
					}
					if (!(n$ as __goscript_node.NumberNode).IsUint && (globalThis.Number($.uint64(f)) == f)) {
						;(n$ as __goscript_node.NumberNode).IsUint = true;
						;(n$ as __goscript_node.NumberNode).Uint64 = $.uint64(f)
					}
				}
			}
		}
		if ((!(n$ as __goscript_node.NumberNode).IsInt && !(n$ as __goscript_node.NumberNode).IsUint) && !(n$ as __goscript_node.NumberNode).IsFloat) {
			return [null, fmt.Errorf("illegal number syntax: %q", text)]
		}
		return [n, null]
	}

	public newPipeline(pos: __goscript_node.Pos, line: number, vars: $.Slice<__goscript_node.VariableNode | $.VarRef<__goscript_node.VariableNode> | null>): __goscript_node.PipeNode | $.VarRef<__goscript_node.PipeNode> | null {
		const t: Tree | $.VarRef<Tree> | null = this;
		return new __goscript_node.PipeNode({tr: t, NodeType: 14, Pos: pos, Line: line, Decl: vars})
	}

	public newRange(pos: __goscript_node.Pos, line: number, pipe: __goscript_node.PipeNode | $.VarRef<__goscript_node.PipeNode> | null, list: __goscript_node.ListNode | $.VarRef<__goscript_node.ListNode> | null, elseList: __goscript_node.ListNode | $.VarRef<__goscript_node.ListNode> | null): __goscript_node.RangeNode | $.VarRef<__goscript_node.RangeNode> | null {
		const t: Tree | $.VarRef<Tree> | null = this;
		return new __goscript_node.RangeNode({BranchNode: new __goscript_node.BranchNode({tr: t, NodeType: 15, Pos: pos, Line: line, Pipe: pipe, List: list, ElseList: elseList}, true)})
	}

	public newString(pos: __goscript_node.Pos, orig: string, text: string): __goscript_node.StringNode | $.VarRef<__goscript_node.StringNode> | null {
		const t: Tree | $.VarRef<Tree> | null = this;
		return new __goscript_node.StringNode({tr: t, NodeType: 16, Pos: pos, Quoted: orig, Text: text})
	}

	public newTemplate(pos: __goscript_node.Pos, line: number, name: string, pipe: __goscript_node.PipeNode | $.VarRef<__goscript_node.PipeNode> | null): __goscript_node.TemplateNode | $.VarRef<__goscript_node.TemplateNode> | null {
		const t: Tree | $.VarRef<Tree> | null = this;
		return new __goscript_node.TemplateNode({tr: t, NodeType: 17, Pos: pos, Line: line, Name: name, Pipe: pipe})
	}

	public newText(pos: __goscript_node.Pos, text: string): __goscript_node.TextNode | $.VarRef<__goscript_node.TextNode> | null {
		const t: Tree | $.VarRef<Tree> | null = this;
		return new __goscript_node.TextNode({tr: t, NodeType: 0, Pos: pos, Text: $.stringToBytes(text)})
	}

	public newVariable(pos: __goscript_node.Pos, ident: string): __goscript_node.VariableNode | $.VarRef<__goscript_node.VariableNode> | null {
		const t: Tree | $.VarRef<Tree> | null = this;
		return (() => { const __goscriptLiteralField2 = strings.Split(ident, "."); return new __goscript_node.VariableNode({tr: t, NodeType: 18, Pos: pos, Ident: __goscriptLiteralField2}) })()
	}

	public newWith(pos: __goscript_node.Pos, line: number, pipe: __goscript_node.PipeNode | $.VarRef<__goscript_node.PipeNode> | null, list: __goscript_node.ListNode | $.VarRef<__goscript_node.ListNode> | null, elseList: __goscript_node.ListNode | $.VarRef<__goscript_node.ListNode> | null): __goscript_node.WithNode | $.VarRef<__goscript_node.WithNode> | null {
		const t: Tree | $.VarRef<Tree> | null = this;
		return new __goscript_node.WithNode({BranchNode: new __goscript_node.BranchNode({tr: t, NodeType: 19, Pos: pos, Line: line, Pipe: pipe, List: list, ElseList: elseList}, true)})
	}

	public async next(): globalThis.Promise<__goscript_lex.item> {
		let t: Tree | $.VarRef<Tree> | null = this;
		const t$: Tree = t == null ? $.pointerTarget<Tree>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<Tree>(t)
		if ((t$ as Tree).peekCount > 0) {
			;(t$ as Tree).peekCount--
		} else {
			$.assignStruct((t$ as Tree).token[0], await __goscript_lex.lexer.prototype.nextItem.call((t$ as Tree).lex))
		}
		return ($.arrayIndex((t$ as Tree).token, (t$ as Tree).peekCount)).clone()
	}

	public async nextNonSpace(): globalThis.Promise<__goscript_lex.item> {
		const t: Tree | $.VarRef<Tree> | null = this;
		let token: __goscript_lex.item = new __goscript_lex.item(undefined, true)
		while (true) {
			token = $.assignStruct(token, await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Tree).next() : Tree.prototype.next.call(t)))
			if (token.typ != 18) {
				break
			}
		}
		return (token).clone()
	}

	public async operand(): globalThis.Promise<__goscript_node.Node | null> {
		const t: Tree | $.VarRef<Tree> | null = this;
		let node = await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Tree).term() : Tree.prototype.term.call(t))
		if (node == null) {
			return null
		}
		if ((await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Tree).peek() : Tree.prototype.peek.call(t))).typ == 9) {
			let chain: __goscript_node.ChainNode | $.VarRef<__goscript_node.ChainNode> | null = Tree.prototype.newChain.call(t, (await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Tree).peek() : Tree.prototype.peek.call(t))).pos, node)
			while ((await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Tree).peek() : Tree.prototype.peek.call(t))).typ == 9) {
				__goscript_node.ChainNode.prototype.Add.call(chain, (await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Tree).next() : Tree.prototype.next.call(t))).val)
			}
			// Compatibility with original API: If the term is of type NodeField
			// or NodeVariable, just put more fields on the original.
			// Otherwise, keep the Chain node.
			// Obvious parsing errors involving literal values are detected here.
			// More complex error cases will have to be handled at execution time.
			switch ((__goscriptAwait = (node !== null && (node as any).__isVarRef !== true && (node as any).__goValue === undefined ? (node as Exclude<__goscript_node.Node, null>) : $.pointerValue<Exclude<__goscript_node.Node, null>>(node)).Type(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
				case 8:
				{
					node = $.interfaceValue<__goscript_node.Node | null>(Tree.prototype.newField.call(t, __goscript_node.Pos_Position($.pointerValue<__goscript_node.ChainNode>(chain).Pos), await (chain !== null && (chain as any).__isVarRef !== true && (chain as any).__goValue === undefined ? ((chain as any) as __goscript_node.ChainNode).String() : __goscript_node.ChainNode.prototype.String.call(chain))), "*parse.FieldNode", /* @__PURE__ */ $.pointerType("parse.FieldNode"))
					break
				}
				case 18:
				{
					node = $.interfaceValue<__goscript_node.Node | null>(Tree.prototype.newVariable.call(t, __goscript_node.Pos_Position($.pointerValue<__goscript_node.ChainNode>(chain).Pos), await (chain !== null && (chain as any).__isVarRef !== true && (chain as any).__goValue === undefined ? ((chain as any) as __goscript_node.ChainNode).String() : __goscript_node.ChainNode.prototype.String.call(chain))), "*parse.VariableNode", /* @__PURE__ */ $.pointerType("parse.VariableNode"))
					break
				}
				case 2:
				case 16:
				case 13:
				case 12:
				case 5:
				{
					await Tree.prototype.errorf.call(t, "unexpected . after term %q", $.arrayToSlice<any>([(__goscriptAwait = (node !== null && (node as any).__isVarRef !== true && (node as any).__goValue === undefined ? (node as Exclude<__goscript_node.Node, null>) : $.pointerValue<Exclude<__goscript_node.Node, null>>(node)).String(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)]))
					break
				}
				default:
				{
					node = $.interfaceValue<__goscript_node.Node | null>(chain, "*parse.ChainNode", /* @__PURE__ */ $.pointerType("parse.ChainNode"))
					break
				}
			}
		}
		return node
	}

	public async parse(): globalThis.Promise<void> {
		let t: Tree | $.VarRef<Tree> | null = this;
		const t$: Tree = t == null ? $.pointerTarget<Tree>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<Tree>(t);
		;(t$ as Tree).Root = Tree.prototype.newList.call(t, (await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Tree).peek() : Tree.prototype.peek.call(t))).pos)
		while ((await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Tree).peek() : Tree.prototype.peek.call(t))).typ != 8) {
			if ((await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Tree).peek() : Tree.prototype.peek.call(t))).typ == 11) {
				let delim = await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Tree).next() : Tree.prototype.next.call(t))
				if ((await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Tree).nextNonSpace() : Tree.prototype.nextNonSpace.call(t))).typ == 27) {
					let newT: Tree | $.VarRef<Tree> | null = New("definition", null)
					let newT$: Tree = newT == null ? $.pointerTarget<Tree>(newT) : (newT as any).__isVarRef === true ? (newT as any).value : (newT as any).__goValue === undefined ? (newT as any) : $.pointerTarget<Tree>(newT);
					;(newT$ as Tree).text = (t$ as Tree).text;
					;(newT$ as Tree).Mode = (t$ as Tree).Mode;
					;(newT$ as Tree).leftDelim = (t$ as Tree).leftDelim;
					;(newT$ as Tree).rightDelim = (t$ as Tree).rightDelim;
					;(newT$ as Tree).ParseName = (t$ as Tree).ParseName
					void (newT !== null && (newT as any).__isVarRef !== true && (newT as any).__goValue === undefined ? ((newT as any) as Tree).startParse((t$ as Tree).funcs, (t$ as Tree).lex, (t$ as Tree).treeSet) : Tree.prototype.startParse.call(newT, (t$ as Tree).funcs, (t$ as Tree).lex, (t$ as Tree).treeSet))
					await (newT !== null && (newT as any).__isVarRef !== true && (newT as any).__goValue === undefined ? ((newT as any) as Tree).parseDefinition() : Tree.prototype.parseDefinition.call(newT))
					continue
				}
				void (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Tree).backup2(delim) : Tree.prototype.backup2.call(t, delim))
			}
			{
				let n = await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Tree).textOrAction() : Tree.prototype.textOrAction.call(t))
				switch ((__goscriptAwait = (n !== null && (n as any).__isVarRef !== true && (n as any).__goValue === undefined ? (n as Exclude<__goscript_node.Node, null>) : $.pointerValue<Exclude<__goscript_node.Node, null>>(n)).Type(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
					case 7:
					case 6:
					{
						await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Tree).errorf("unexpected %s", $.arrayToSlice<any>([(n as any)])) : Tree.prototype.errorf.call(t, "unexpected %s", $.arrayToSlice<any>([(n as any)])))
						break
					}
					default:
					{
						__goscript_node.ListNode.prototype.append.call((t$ as Tree).Root, n)
						break
					}
				}
			}
		}
	}

	public async parseControl(context: string): globalThis.Promise<[__goscript_node.Pos, number, __goscript_node.PipeNode | $.VarRef<__goscript_node.PipeNode> | null, __goscript_node.ListNode | $.VarRef<__goscript_node.ListNode> | null, __goscript_node.ListNode | $.VarRef<__goscript_node.ListNode> | null]> {
		let t: Tree | $.VarRef<Tree> | null = this;
		let pos: __goscript_node.Pos = 0
		let line: number = 0
		let pipe: __goscript_node.PipeNode | $.VarRef<__goscript_node.PipeNode> | null = null! as __goscript_node.PipeNode | $.VarRef<__goscript_node.PipeNode> | null
		let list: __goscript_node.ListNode | $.VarRef<__goscript_node.ListNode> | null = null! as __goscript_node.ListNode | $.VarRef<__goscript_node.ListNode> | null
		let elseList: __goscript_node.ListNode | $.VarRef<__goscript_node.ListNode> | null = null! as __goscript_node.ListNode | $.VarRef<__goscript_node.ListNode> | null
		using __defer = new $.DisposableStack()
		const t$: Tree = t == null ? $.pointerTarget<Tree>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<Tree>(t)
		const __goscriptDeferCallee1 = $.functionValue(((__receiver) => (n: number) => __receiver.popVars(n))((t$ as Tree)), ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int")], results: [] } as $.FunctionTypeInfo), "text/template/parse.(*Tree).popVars-fm")
		const __goscriptDeferArg1 = $.sliceLen((t$ as Tree).vars)
		__defer.defer(() => { __goscriptDeferCallee1(__goscriptDeferArg1) })
		pipe = await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Tree).pipeline(context, 16) : Tree.prototype.pipeline.call(t, context, 16))
		if ($.stringEqual(context, "range")) {
			;(t$ as Tree).rangeDepth++
		}
		let next: __goscript_node.Node | null = null! as __goscript_node.Node | null
		let __goscriptTuple2: any = await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Tree).itemList() : Tree.prototype.itemList.call(t))
		list = __goscriptTuple2[0]
		next = __goscriptTuple2[1]
		if ($.stringEqual(context, "range")) {
			;(t$ as Tree).rangeDepth--
		}
		switch ((__goscriptAwait = (next !== null && (next as any).__isVarRef !== true && (next as any).__goValue === undefined ? (next as Exclude<__goscript_node.Node, null>) : $.pointerValue<Exclude<__goscript_node.Node, null>>(next)).Type(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
			case 7:
			{
				break
			}
			case 6:
			{
				if (($.stringEqual(context, "if")) && ((await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Tree).peek() : Tree.prototype.peek.call(t))).typ == 30)) {
					await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Tree).next() : Tree.prototype.next.call(t))
					elseList = Tree.prototype.newList.call(t, (__goscriptAwait = (next !== null && (next as any).__isVarRef !== true && (next as any).__goValue === undefined ? (next as Exclude<__goscript_node.Node, null>) : $.pointerValue<Exclude<__goscript_node.Node, null>>(next)).Position(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
					__goscript_node.ListNode.prototype.append.call(elseList, await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Tree).ifControl() : Tree.prototype.ifControl.call(t)))
				} else {
					if (($.stringEqual(context, "with")) && ((await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Tree).peek() : Tree.prototype.peek.call(t))).typ == 34)) {
						await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Tree).next() : Tree.prototype.next.call(t))
						elseList = Tree.prototype.newList.call(t, (__goscriptAwait = (next !== null && (next as any).__isVarRef !== true && (next as any).__goValue === undefined ? (next as Exclude<__goscript_node.Node, null>) : $.pointerValue<Exclude<__goscript_node.Node, null>>(next)).Position(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
						__goscript_node.ListNode.prototype.append.call(elseList, await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Tree).withControl() : Tree.prototype.withControl.call(t)))
					} else {
						let __goscriptTuple3: any = await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Tree).itemList() : Tree.prototype.itemList.call(t))
						elseList = __goscriptTuple3[0]
						next = __goscriptTuple3[1]
						if ((__goscriptAwait = (next !== null && (next as any).__isVarRef !== true && (next as any).__goValue === undefined ? (next as Exclude<__goscript_node.Node, null>) : $.pointerValue<Exclude<__goscript_node.Node, null>>(next)).Type(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 7) {
							await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Tree).errorf("expected end; found %s", $.arrayToSlice<any>([(next as any)])) : Tree.prototype.errorf.call(t, "expected end; found %s", $.arrayToSlice<any>([(next as any)])))
						}
					}
				}
				break
			}
		}
		const __goscriptReturn1: [__goscript_node.Pos, number, __goscript_node.PipeNode | $.VarRef<__goscript_node.PipeNode> | null, __goscript_node.ListNode | $.VarRef<__goscript_node.ListNode> | null, __goscript_node.ListNode | $.VarRef<__goscript_node.ListNode> | null] = [__goscript_node.Pos_Position($.pointerValue<__goscript_node.PipeNode>(pipe).Pos), $.pointerValue<__goscript_node.PipeNode>(pipe).Line, pipe, list, elseList]
		pos = __goscriptReturn1[0]
		line = __goscriptReturn1[1]
		pipe = __goscriptReturn1[2]
		list = __goscriptReturn1[3]
		elseList = __goscriptReturn1[4]
		__defer.dispose()
		return [pos, line, pipe, list, elseList]
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async parseDefinition(): globalThis.Promise<void> {
		let t: Tree | $.VarRef<Tree> | null = this;
		const t$: Tree = t == null ? $.pointerTarget<Tree>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<Tree>(t)
		const context: string = "define clause"
		let name = await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Tree).expectOneOf(19, 15, "define clause") : Tree.prototype.expectOneOf.call(t, 19, 15, "define clause"))
		let err: $.GoError = null! as $.GoError
		let __goscriptTuple4: any = strconv.Unquote(name.val);
		;(t$ as Tree).Name = __goscriptTuple4[0]
		err = __goscriptTuple4[1]
		if (err != null) {
			await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Tree).error(err) : Tree.prototype.error.call(t, err))
		}
		await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Tree).expect(16, "define clause") : Tree.prototype.expect.call(t, 16, "define clause"))
		let end: __goscript_node.Node | null = null! as __goscript_node.Node | null
		let __goscriptTuple5: any = await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Tree).itemList() : Tree.prototype.itemList.call(t));
		;(t$ as Tree).Root = __goscriptTuple5[0]
		end = __goscriptTuple5[1]
		if ((__goscriptAwait = (end !== null && (end as any).__isVarRef !== true && (end as any).__goValue === undefined ? (end as Exclude<__goscript_node.Node, null>) : $.pointerValue<Exclude<__goscript_node.Node, null>>(end)).Type(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 7) {
			await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Tree).errorf("unexpected %s in %s", $.arrayToSlice<any>([(end as any), "define clause"])) : Tree.prototype.errorf.call(t, "unexpected %s in %s", $.arrayToSlice<any>([(end as any), "define clause"])))
		}
		await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Tree).add() : Tree.prototype.add.call(t))
		void (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Tree).stopParse() : Tree.prototype.stopParse.call(t))
	}

	public async parseTemplateName(token: __goscript_lex.item, context: string): globalThis.Promise<string> {
		const t: Tree | $.VarRef<Tree> | null = this;
		let name: string = ""
		switch (token.typ) {
			case 19:
			case 15:
			{
				let [s, err] = strconv.Unquote(token.val)
				if (err != null) {
					await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Tree).error(err) : Tree.prototype.error.call(t, err))
				}
				name = s
				break
			}
			default:
			{
				await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Tree).unexpected(token, context) : Tree.prototype.unexpected.call(t, token, context))
				break
			}
		}
		return name
	}

	public async peek(): globalThis.Promise<__goscript_lex.item> {
		let t: Tree | $.VarRef<Tree> | null = this;
		const t$: Tree = t == null ? $.pointerTarget<Tree>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<Tree>(t)
		if ((t$ as Tree).peekCount > 0) {
			return ($.arrayIndex((t$ as Tree).token, (t$ as Tree).peekCount - 1)).clone()
		}
		;(t$ as Tree).peekCount = 1
		$.assignStruct((t$ as Tree).token[0], await __goscript_lex.lexer.prototype.nextItem.call((t$ as Tree).lex))
		return ($.arrayIndex((t$ as Tree).token, 0)).clone()
	}

	public async peekNonSpace(): globalThis.Promise<__goscript_lex.item> {
		const t: Tree | $.VarRef<Tree> | null = this;
		let token = await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Tree).nextNonSpace() : Tree.prototype.nextNonSpace.call(t))
		void (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Tree).backup() : Tree.prototype.backup.call(t))
		return (token).clone()
	}

	public async pipeline(context: string, end: __goscript_lex.itemType): globalThis.Promise<__goscript_node.PipeNode | $.VarRef<__goscript_node.PipeNode> | null> {
		let t: Tree | $.VarRef<Tree> | null = this;
		let pipe: __goscript_node.PipeNode | $.VarRef<__goscript_node.PipeNode> | null = null! as __goscript_node.PipeNode | $.VarRef<__goscript_node.PipeNode> | null
		const t$: Tree = t == null ? $.pointerTarget<Tree>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<Tree>(t)
		let token = await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Tree).peekNonSpace() : Tree.prototype.peekNonSpace.call(t))
		pipe = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Tree).newPipeline(token.pos, token.line, null) : Tree.prototype.newPipeline.call(t, token.pos, token.line, null))
		// Are there declarations or assignments?
		decls: while (true) {
			{
				var v = await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Tree).peekNonSpace() : Tree.prototype.peekNonSpace.call(t))
				if (v.typ == 21) {
					await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Tree).next() : Tree.prototype.next.call(t))
					// Since space is a token, we need 3-token look-ahead here in the worst case:
					// in "$x foo" we need to read "foo" (as opposed to ":=") to know that $x is an
					// argument variable rather than a declaration. So remember the token
					// adjacent to the variable so we can push it back if necessary.
					let tokenAfterVariable = await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Tree).peek() : Tree.prototype.peek.call(t))
					let next = await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Tree).peekNonSpace() : Tree.prototype.peekNonSpace.call(t))
					switch ((true as boolean)) {
						case next.typ == 6:
						case next.typ == 7:
						{
							$.pointerValue<__goscript_node.PipeNode>(pipe).IsAssign = next.typ == 6
							await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Tree).nextNonSpace() : Tree.prototype.nextNonSpace.call(t))
							$.pointerValue<__goscript_node.PipeNode>(pipe).Decl = $.appendOne($.pointerValue<__goscript_node.PipeNode>(pipe).Decl, (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Tree).newVariable(v.pos, v.val) : Tree.prototype.newVariable.call(t, v.pos, v.val)), $.appendZeros.nil);
							;(t$ as Tree).vars = $.appendOne((t$ as Tree).vars, v.val)
							break
						}
						case (next.typ == 2) && ($.stringEqual(next.val, ",")):
						{
							await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Tree).nextNonSpace() : Tree.prototype.nextNonSpace.call(t))
							$.pointerValue<__goscript_node.PipeNode>(pipe).Decl = $.appendOne($.pointerValue<__goscript_node.PipeNode>(pipe).Decl, (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Tree).newVariable(v.pos, v.val) : Tree.prototype.newVariable.call(t, v.pos, v.val)), $.appendZeros.nil);
							;(t$ as Tree).vars = $.appendOne((t$ as Tree).vars, v.val)
							if (($.stringEqual(context, "range")) && ($.sliceLen($.pointerValue<__goscript_node.PipeNode>(pipe).Decl) < 2)) {
								switch ((await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Tree).peekNonSpace() : Tree.prototype.peekNonSpace.call(t))).typ) {
									case 21:
									case 16:
									case 17:
									{
										continue decls
										break
									}
									default:
									{
										await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Tree).errorf("range can only initialize variables", null) : Tree.prototype.errorf.call(t, "range can only initialize variables", null))
										break
									}
								}
							}
							await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Tree).errorf("too many declarations in %s", $.arrayToSlice<any>([context])) : Tree.prototype.errorf.call(t, "too many declarations in %s", $.arrayToSlice<any>([context])))
							break
						}
						case tokenAfterVariable.typ == 18:
						{
							void (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Tree).backup3(v, tokenAfterVariable) : Tree.prototype.backup3.call(t, v, tokenAfterVariable))
							break
						}
						default:
						{
							void (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Tree).backup2(v) : Tree.prototype.backup2.call(t, v))
							break
						}
					}
				}
			}
			break
		}
		while (true) {
			{
				let token = await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Tree).nextNonSpace() : Tree.prototype.nextNonSpace.call(t))
				switch (token.typ) {
					case end:
					{
						await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Tree).checkPipeline(pipe, context) : Tree.prototype.checkPipeline.call(t, pipe, context))
						return pipe
						break
					}
					case 1:
					case 3:
					case 5:
					case 26:
					case 9:
					case 10:
					case 13:
					case 31:
					case 15:
					case 19:
					case 21:
					case 12:
					{
						void (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Tree).backup() : Tree.prototype.backup.call(t))
						__goscript_node.PipeNode.prototype.append.call(pipe, await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Tree).command() : Tree.prototype.command.call(t)))
						break
					}
					default:
					{
						await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Tree).unexpected(token, context) : Tree.prototype.unexpected.call(t, token, context))
						break
					}
				}
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public popVars(n: number): void {
		let t: Tree | $.VarRef<Tree> | null = this;
		const t$: Tree = t == null ? $.pointerTarget<Tree>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<Tree>(t);
		;(t$ as Tree).vars = $.goSlice((t$ as Tree).vars, undefined, n)
	}

	public async rangeControl(): globalThis.Promise<__goscript_node.Node | null> {
		const t: Tree | $.VarRef<Tree> | null = this;
		let r: __goscript_node.RangeNode | $.VarRef<__goscript_node.RangeNode> | null = Tree.prototype.newRange.call(t, ...((await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Tree).parseControl("range") : Tree.prototype.parseControl.call(t, "range"))) as [__goscript_node.Pos, number, __goscript_node.PipeNode | $.VarRef<__goscript_node.PipeNode> | null, __goscript_node.ListNode | $.VarRef<__goscript_node.ListNode> | null, __goscript_node.ListNode | $.VarRef<__goscript_node.ListNode> | null]))
		return $.interfaceValue<__goscript_node.Node | null>(r, "*parse.RangeNode", /* @__PURE__ */ $.pointerType("parse.RangeNode"))
	}

	public recover(errp: $.VarRef<$.GoError> | null): void {
		const t: Tree | $.VarRef<Tree> | null = this;
		let e = $.recover()
		if (e != null) {
			{
				let [, ok] = $.typeAssertTuple<runtime.Error | null>(e, "runtime.Error")
				if (ok) {
					$.panic(e)
				}
			}
			if (t != null) {
				void (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Tree).stopParse() : Tree.prototype.stopParse.call(t))
			}
			errp!.value = $.mustTypeAssert<$.GoError>(e, "error")
		}
	}

	public startParse(funcs: $.Slice<globalThis.Map<string, any> | null>, lex: __goscript_lex.lexer | $.VarRef<__goscript_lex.lexer> | null, treeSet: globalThis.Map<string, Tree | $.VarRef<Tree> | null> | null): void {
		let t: Tree | $.VarRef<Tree> | null = this;
		const t$: Tree = t == null ? $.pointerTarget<Tree>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<Tree>(t);
		;(t$ as Tree).Root = null;
		;(t$ as Tree).lex = lex;
		;(t$ as Tree).vars = $.arrayToSlice<string>(["$"]);
		;(t$ as Tree).funcs = funcs;
		;(t$ as Tree).treeSet = treeSet;
		;(t$ as Tree).stackDepth = 0
		$.assignStruct($.pointerValue<__goscript_lex.lexer>(lex).options, (() => { const __goscriptLiteralField3 = !(t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Tree).hasFunction("break") : Tree.prototype.hasFunction.call(t, "break")); const __goscriptLiteralField4 = !(t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Tree).hasFunction("continue") : Tree.prototype.hasFunction.call(t, "continue")); return new __goscript_lex.lexOptions({emitComment: ($.uint($.uint64And((t$ as Tree).Mode, 1n), 64)) != 0, breakOK: __goscriptLiteralField3, continueOK: __goscriptLiteralField4}, true) })())
	}

	public stopParse(): void {
		let t: Tree | $.VarRef<Tree> | null = this;
		const t$: Tree = t == null ? $.pointerTarget<Tree>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<Tree>(t);
		;(t$ as Tree).lex = null;
		;(t$ as Tree).vars = null;
		;(t$ as Tree).funcs = null;
		;(t$ as Tree).treeSet = null
	}

	public async templateControl(): globalThis.Promise<__goscript_node.Node | null> {
		const t: Tree | $.VarRef<Tree> | null = this;
		const context: string = "template clause"
		let token = await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Tree).nextNonSpace() : Tree.prototype.nextNonSpace.call(t))
		let name = await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Tree).parseTemplateName(token, "template clause") : Tree.prototype.parseTemplateName.call(t, token, "template clause"))
		let pipe: __goscript_node.PipeNode | $.VarRef<__goscript_node.PipeNode> | null = null! as __goscript_node.PipeNode | $.VarRef<__goscript_node.PipeNode> | null
		if ((await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Tree).nextNonSpace() : Tree.prototype.nextNonSpace.call(t))).typ != 16) {
			void (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Tree).backup() : Tree.prototype.backup.call(t))
			// Do not pop variables; they persist until "end".
			pipe = await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Tree).pipeline("template clause", 16) : Tree.prototype.pipeline.call(t, "template clause", 16))
		}
		return $.interfaceValue<__goscript_node.Node | null>((t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Tree).newTemplate(token.pos, token.line, name, pipe) : Tree.prototype.newTemplate.call(t, token.pos, token.line, name, pipe)), "*parse.TemplateNode", /* @__PURE__ */ $.pointerType("parse.TemplateNode"))
	}

	public async term(): globalThis.Promise<__goscript_node.Node | null> {
		let t: Tree | $.VarRef<Tree> | null = this;
		using __defer = new $.DisposableStack()
		const t$: Tree = t == null ? $.pointerTarget<Tree>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<Tree>(t)
		{
			let token = await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Tree).nextNonSpace() : Tree.prototype.nextNonSpace.call(t))
			switch (token.typ) {
				case 10:
				{
					let checkFunc = ($.uint($.uint64And((t$ as Tree).Mode, 2n), 64)) == 0
					if (checkFunc && !(t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Tree).hasFunction(token.val) : Tree.prototype.hasFunction.call(t, token.val))) {
						await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Tree).errorf("function %q not defined", $.arrayToSlice<any>([token.val])) : Tree.prototype.errorf.call(t, "function %q not defined", $.arrayToSlice<any>([token.val])))
					}
					return $.interfaceValue<__goscript_node.Node | null>(__goscript_node.IdentifierNode.prototype.SetPos.call(__goscript_node.IdentifierNode.prototype.SetTree.call(__goscript_node.NewIdentifier(token.val), t), token.pos), "*parse.IdentifierNode", /* @__PURE__ */ $.pointerType("parse.IdentifierNode"))
					break
				}
				case 26:
				{
					return $.interfaceValue<__goscript_node.Node | null>((t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Tree).newDot(token.pos) : Tree.prototype.newDot.call(t, token.pos)), "*parse.DotNode", /* @__PURE__ */ $.pointerType("parse.DotNode"))
					break
				}
				case 31:
				{
					return $.interfaceValue<__goscript_node.Node | null>((t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Tree).newNil(token.pos) : Tree.prototype.newNil.call(t, token.pos)), "*parse.NilNode", /* @__PURE__ */ $.pointerType("parse.NilNode"))
					break
				}
				case 21:
				{
					return (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Tree).useVar(token.pos, token.val) : Tree.prototype.useVar.call(t, token.pos, token.val))
					break
				}
				case 9:
				{
					return $.interfaceValue<__goscript_node.Node | null>((t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Tree).newField(token.pos, token.val) : Tree.prototype.newField.call(t, token.pos, token.val)), "*parse.FieldNode", /* @__PURE__ */ $.pointerType("parse.FieldNode"))
					break
				}
				case 1:
				{
					return $.interfaceValue<__goscript_node.Node | null>((t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Tree).newBool(token.pos, $.stringEqual(token.val, "true")) : Tree.prototype.newBool.call(t, token.pos, $.stringEqual(token.val, "true"))), "*parse.BoolNode", /* @__PURE__ */ $.pointerType("parse.BoolNode"))
					break
				}
				case 3:
				case 5:
				case 13:
				{
					let __goscriptTuple6: any = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Tree).newNumber(token.pos, token.val, token.typ) : Tree.prototype.newNumber.call(t, token.pos, token.val, token.typ))
					let _number: __goscript_node.NumberNode | $.VarRef<__goscript_node.NumberNode> | null = __goscriptTuple6[0]
					let err = __goscriptTuple6[1]
					if (err != null) {
						await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Tree).error(err) : Tree.prototype.error.call(t, err))
					}
					return $.interfaceValue<__goscript_node.Node | null>(_number, "*parse.NumberNode", /* @__PURE__ */ $.pointerType("parse.NumberNode"))
					break
				}
				case 12:
				{
					if ((t$ as Tree).stackDepth >= maxStackDepth) {
						await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Tree).errorf("max expression depth exceeded", null) : Tree.prototype.errorf.call(t, "max expression depth exceeded", null))
					}
					;(t$ as Tree).stackDepth++
					__defer.defer(() => { ((): void => {
						;(t$ as Tree).stackDepth--
					})() })
					return $.interfaceValue<__goscript_node.Node | null>(await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Tree).pipeline("parenthesized pipeline", 17) : Tree.prototype.pipeline.call(t, "parenthesized pipeline", 17)), "*parse.PipeNode", /* @__PURE__ */ $.pointerType("parse.PipeNode"))
					break
				}
				case 19:
				case 15:
				{
					let [s, err] = strconv.Unquote(token.val)
					if (err != null) {
						await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Tree).error(err) : Tree.prototype.error.call(t, err))
					}
					return $.interfaceValue<__goscript_node.Node | null>((t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Tree).newString(token.pos, token.val, s) : Tree.prototype.newString.call(t, token.pos, token.val, s)), "*parse.StringNode", /* @__PURE__ */ $.pointerType("parse.StringNode"))
					break
				}
			}
		}
		void (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Tree).backup() : Tree.prototype.backup.call(t))
		return null
	}

	public async textOrAction(): globalThis.Promise<__goscript_node.Node | null> {
		let t: Tree | $.VarRef<Tree> | null = this;
		using __defer = new $.DisposableStack()
		{
			let token = await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Tree).nextNonSpace() : Tree.prototype.nextNonSpace.call(t))
			switch (token.typ) {
				case 20:
				{
					return $.interfaceValue<__goscript_node.Node | null>((t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Tree).newText(token.pos, token.val) : Tree.prototype.newText.call(t, token.pos, token.val)), "*parse.TextNode", /* @__PURE__ */ $.pointerType("parse.TextNode"))
					break
				}
				case 11:
				{
					$.pointerValue<Tree>(t).actionLine = token.line
					const __goscriptDeferCallee2 = $.functionValue(((__receiver) => () => __receiver.clearActionLine())($.pointerValue<Tree>(t)), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "text/template/parse.(*Tree).clearActionLine-fm")
					__defer.defer(() => { __goscriptDeferCallee2() })
					return await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Tree).action() : Tree.prototype.action.call(t))
					break
				}
				case 4:
				{
					return $.interfaceValue<__goscript_node.Node | null>((t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Tree).newComment(token.pos, token.val) : Tree.prototype.newComment.call(t, token.pos, token.val)), "*parse.CommentNode", /* @__PURE__ */ $.pointerType("parse.CommentNode"))
					break
				}
				default:
				{
					await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Tree).unexpected(token, "input") : Tree.prototype.unexpected.call(t, token, "input"))
					break
				}
			}
		}
		return null
	}

	public async unexpected(token: __goscript_lex.item, context: string): globalThis.Promise<void> {
		const t: Tree | $.VarRef<Tree> | null = this;
		const t$: Tree = t == null ? $.pointerTarget<Tree>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<Tree>(t)
		if (token.typ == 0) {
			let extra = ""
			if (((t$ as Tree).actionLine != 0) && ((t$ as Tree).actionLine != token.line)) {
				extra = await fmt.Sprintf(" in action started at %s:%d", (t$ as Tree).ParseName, $.basicInterfaceValue((t$ as Tree).actionLine, "int"))
				if (strings.HasSuffix(token.val, " action")) {
					extra = $.sliceStringOrBytes(extra, 10, undefined)
				}
			}
			await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Tree).errorf("%s%s", $.arrayToSlice<any>([$.interfaceValue((token).clone(), "parse.item", "parse.item"), extra])) : Tree.prototype.errorf.call(t, "%s%s", $.arrayToSlice<any>([$.interfaceValue((token).clone(), "parse.item", "parse.item"), extra])))
		}
		await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Tree).errorf("unexpected %s in %s", $.arrayToSlice<any>([$.interfaceValue((token).clone(), "parse.item", "parse.item"), context])) : Tree.prototype.errorf.call(t, "unexpected %s in %s", $.arrayToSlice<any>([$.interfaceValue((token).clone(), "parse.item", "parse.item"), context])))
	}

	public async useVar(pos: __goscript_node.Pos, name: string): globalThis.Promise<__goscript_node.Node | null> {
		const t: Tree | $.VarRef<Tree> | null = this;
		let v: __goscript_node.VariableNode | $.VarRef<__goscript_node.VariableNode> | null = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Tree).newVariable(pos, name) : Tree.prototype.newVariable.call(t, pos, name))
		let v$: __goscript_node.VariableNode = v == null ? $.pointerTarget<__goscript_node.VariableNode>(v) : (v as any).__isVarRef === true ? (v as any).value : (v as any).__goValue === undefined ? (v as any) : $.pointerTarget<__goscript_node.VariableNode>(v)
		for (let __goscriptRangeTarget2 = $.pointerValue<Tree>(t).vars, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow2.length; __rangeIndex++) {
			let varName = (__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + __rangeIndex] as string)
			if ($.stringEqual(varName, $.arrayIndex((v$ as __goscript_node.VariableNode).Ident!, 0))) {
				return $.interfaceValue<__goscript_node.Node | null>(v, "*parse.VariableNode", /* @__PURE__ */ $.pointerType("parse.VariableNode"))
			}
		}
		await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Tree).errorf("undefined variable %q", $.arrayToSlice<any>([$.arrayIndex((v$ as __goscript_node.VariableNode).Ident!, 0)])) : Tree.prototype.errorf.call(t, "undefined variable %q", $.arrayToSlice<any>([$.arrayIndex((v$ as __goscript_node.VariableNode).Ident!, 0)])))
		return null
	}

	public async withControl(): globalThis.Promise<__goscript_node.Node | null> {
		const t: Tree | $.VarRef<Tree> | null = this;
		return $.interfaceValue<__goscript_node.Node | null>(Tree.prototype.newWith.call(t, ...((await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Tree).parseControl("with") : Tree.prototype.parseControl.call(t, "with"))) as [__goscript_node.Pos, number, __goscript_node.PipeNode | $.VarRef<__goscript_node.PipeNode> | null, __goscript_node.ListNode | $.VarRef<__goscript_node.ListNode> | null, __goscript_node.ListNode | $.VarRef<__goscript_node.ListNode> | null])), "*parse.WithNode", /* @__PURE__ */ $.pointerType("parse.WithNode"))
	}

	static __typeInfo = $.registerStructType(
		"parse.Tree",
		() => new Tree(),
		() => [$.methodSignature("Copy", [], [/* @__PURE__ */ $.pointerType("parse.Tree")], true), $.methodSignature("ErrorContext", [["n", "parse.Node"]], [["location", /* @__PURE__ */ $.basicType("string")], ["context", /* @__PURE__ */ $.basicType("string")]], true), $.methodSignature("Parse", [["text", /* @__PURE__ */ $.basicType("string")], ["leftDelim", /* @__PURE__ */ $.basicType("string")], ["rightDelim", /* @__PURE__ */ $.basicType("string")], ["treeSet", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.pointerType("parse.Tree"))], ["funcs", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), { kind: $.TypeKind.Interface, methods: [] }))]], [["tree", /* @__PURE__ */ $.pointerType("parse.Tree")], ["err", "error"]], true), $.methodSignature("action", [], [["n", "parse.Node"]], true), $.methodSignature("add", [], [], true), $.methodSignature("backup", [], [], true), $.methodSignature("backup2", [["t1", "parse.item"]], [], true), $.methodSignature("backup3", [["t2", "parse.item"], ["t1", "parse.item"]], [], true), $.methodSignature("blockControl", [], ["parse.Node"], true), $.methodSignature("breakControl", [["pos", /* @__PURE__ */ $.basicType("int", "parse.Pos")], ["line", /* @__PURE__ */ $.basicType("int")]], ["parse.Node"], true), $.methodSignature("checkPipeline", [["pipe", /* @__PURE__ */ $.pointerType("parse.PipeNode")], ["context", /* @__PURE__ */ $.basicType("string")]], [], true), $.methodSignature("clearActionLine", [], [], true), $.methodSignature("command", [], [/* @__PURE__ */ $.pointerType("parse.CommandNode")], true), $.methodSignature("continueControl", [["pos", /* @__PURE__ */ $.basicType("int", "parse.Pos")], ["line", /* @__PURE__ */ $.basicType("int")]], ["parse.Node"], true), $.methodSignature("elseControl", [], ["parse.Node"], true), $.methodSignature("endControl", [], ["parse.Node"], true), $.methodSignature("error", [["err", "error"]], [], true), $.methodSignature("errorf", [["format", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [], true), $.methodSignature("expect", [["expected", /* @__PURE__ */ $.basicType("int", "parse.itemType")], ["context", /* @__PURE__ */ $.basicType("string")]], ["parse.item"], true), $.methodSignature("expectOneOf", [["expected1", /* @__PURE__ */ $.basicType("int", "parse.itemType")], ["expected2", /* @__PURE__ */ $.basicType("int", "parse.itemType")], ["context", /* @__PURE__ */ $.basicType("string")]], ["parse.item"], true), $.methodSignature("hasFunction", [["name", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("ifControl", [], ["parse.Node"], true), $.methodSignature("itemList", [], [["list", /* @__PURE__ */ $.pointerType("parse.ListNode")], ["next", "parse.Node"]], true), $.methodSignature("newAction", [["pos", /* @__PURE__ */ $.basicType("int", "parse.Pos")], ["line", /* @__PURE__ */ $.basicType("int")], ["pipe", /* @__PURE__ */ $.pointerType("parse.PipeNode")]], [/* @__PURE__ */ $.pointerType("parse.ActionNode")], true), $.methodSignature("newBool", [["pos", /* @__PURE__ */ $.basicType("int", "parse.Pos")], ["true", /* @__PURE__ */ $.basicType("bool")]], [/* @__PURE__ */ $.pointerType("parse.BoolNode")], true), $.methodSignature("newBreak", [["pos", /* @__PURE__ */ $.basicType("int", "parse.Pos")], ["line", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.pointerType("parse.BreakNode")], true), $.methodSignature("newChain", [["pos", /* @__PURE__ */ $.basicType("int", "parse.Pos")], ["node", "parse.Node"]], [/* @__PURE__ */ $.pointerType("parse.ChainNode")], true), $.methodSignature("newCommand", [["pos", /* @__PURE__ */ $.basicType("int", "parse.Pos")]], [/* @__PURE__ */ $.pointerType("parse.CommandNode")], true), $.methodSignature("newComment", [["pos", /* @__PURE__ */ $.basicType("int", "parse.Pos")], ["text", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.pointerType("parse.CommentNode")], true), $.methodSignature("newContinue", [["pos", /* @__PURE__ */ $.basicType("int", "parse.Pos")], ["line", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.pointerType("parse.ContinueNode")], true), $.methodSignature("newDot", [["pos", /* @__PURE__ */ $.basicType("int", "parse.Pos")]], [/* @__PURE__ */ $.pointerType("parse.DotNode")], true), $.methodSignature("newElse", [["pos", /* @__PURE__ */ $.basicType("int", "parse.Pos")], ["line", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.pointerType("parse.elseNode")], true), $.methodSignature("newEnd", [["pos", /* @__PURE__ */ $.basicType("int", "parse.Pos")]], [/* @__PURE__ */ $.pointerType("parse.endNode")], true), $.methodSignature("newField", [["pos", /* @__PURE__ */ $.basicType("int", "parse.Pos")], ["ident", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.pointerType("parse.FieldNode")], true), $.methodSignature("newIf", [["pos", /* @__PURE__ */ $.basicType("int", "parse.Pos")], ["line", /* @__PURE__ */ $.basicType("int")], ["pipe", /* @__PURE__ */ $.pointerType("parse.PipeNode")], ["list", /* @__PURE__ */ $.pointerType("parse.ListNode")], ["elseList", /* @__PURE__ */ $.pointerType("parse.ListNode")]], [/* @__PURE__ */ $.pointerType("parse.IfNode")], true), $.methodSignature("newList", [["pos", /* @__PURE__ */ $.basicType("int", "parse.Pos")]], [/* @__PURE__ */ $.pointerType("parse.ListNode")], true), $.methodSignature("newNil", [["pos", /* @__PURE__ */ $.basicType("int", "parse.Pos")]], [/* @__PURE__ */ $.pointerType("parse.NilNode")], true), $.methodSignature("newNumber", [["pos", /* @__PURE__ */ $.basicType("int", "parse.Pos")], ["text", /* @__PURE__ */ $.basicType("string")], ["typ", /* @__PURE__ */ $.basicType("int", "parse.itemType")]], [/* @__PURE__ */ $.pointerType("parse.NumberNode"), "error"], true), $.methodSignature("newPipeline", [["pos", /* @__PURE__ */ $.basicType("int", "parse.Pos")], ["line", /* @__PURE__ */ $.basicType("int")], ["vars", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("parse.VariableNode"))]], [/* @__PURE__ */ $.pointerType("parse.PipeNode")], true), $.methodSignature("newRange", [["pos", /* @__PURE__ */ $.basicType("int", "parse.Pos")], ["line", /* @__PURE__ */ $.basicType("int")], ["pipe", /* @__PURE__ */ $.pointerType("parse.PipeNode")], ["list", /* @__PURE__ */ $.pointerType("parse.ListNode")], ["elseList", /* @__PURE__ */ $.pointerType("parse.ListNode")]], [/* @__PURE__ */ $.pointerType("parse.RangeNode")], true), $.methodSignature("newString", [["pos", /* @__PURE__ */ $.basicType("int", "parse.Pos")], ["orig", /* @__PURE__ */ $.basicType("string")], ["text", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.pointerType("parse.StringNode")], true), $.methodSignature("newTemplate", [["pos", /* @__PURE__ */ $.basicType("int", "parse.Pos")], ["line", /* @__PURE__ */ $.basicType("int")], ["name", /* @__PURE__ */ $.basicType("string")], ["pipe", /* @__PURE__ */ $.pointerType("parse.PipeNode")]], [/* @__PURE__ */ $.pointerType("parse.TemplateNode")], true), $.methodSignature("newText", [["pos", /* @__PURE__ */ $.basicType("int", "parse.Pos")], ["text", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.pointerType("parse.TextNode")], true), $.methodSignature("newVariable", [["pos", /* @__PURE__ */ $.basicType("int", "parse.Pos")], ["ident", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.pointerType("parse.VariableNode")], true), $.methodSignature("newWith", [["pos", /* @__PURE__ */ $.basicType("int", "parse.Pos")], ["line", /* @__PURE__ */ $.basicType("int")], ["pipe", /* @__PURE__ */ $.pointerType("parse.PipeNode")], ["list", /* @__PURE__ */ $.pointerType("parse.ListNode")], ["elseList", /* @__PURE__ */ $.pointerType("parse.ListNode")]], [/* @__PURE__ */ $.pointerType("parse.WithNode")], true), $.methodSignature("next", [], ["parse.item"], true), $.methodSignature("nextNonSpace", [], [["token", "parse.item"]], true), $.methodSignature("operand", [], ["parse.Node"], true), $.methodSignature("parse", [], [], true), $.methodSignature("parseControl", [["context", /* @__PURE__ */ $.basicType("string")]], [["pos", /* @__PURE__ */ $.basicType("int", "parse.Pos")], ["line", /* @__PURE__ */ $.basicType("int")], ["pipe", /* @__PURE__ */ $.pointerType("parse.PipeNode")], ["list", /* @__PURE__ */ $.pointerType("parse.ListNode")], ["elseList", /* @__PURE__ */ $.pointerType("parse.ListNode")]], true), $.methodSignature("parseDefinition", [], [], true), $.methodSignature("parseTemplateName", [["token", "parse.item"], ["context", /* @__PURE__ */ $.basicType("string")]], [["name", /* @__PURE__ */ $.basicType("string")]], true), $.methodSignature("peek", [], ["parse.item"], true), $.methodSignature("peekNonSpace", [], ["parse.item"], true), $.methodSignature("pipeline", [["context", /* @__PURE__ */ $.basicType("string")], ["end", /* @__PURE__ */ $.basicType("int", "parse.itemType")]], [["pipe", /* @__PURE__ */ $.pointerType("parse.PipeNode")]], true), $.methodSignature("popVars", [["n", /* @__PURE__ */ $.basicType("int")]], [], true), $.methodSignature("rangeControl", [], ["parse.Node"], true), $.methodSignature("recover", [["errp", /* @__PURE__ */ $.pointerType("error")]], [], true), $.methodSignature("startParse", [["funcs", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), { kind: $.TypeKind.Interface, methods: [] }))], ["lex", /* @__PURE__ */ $.pointerType("parse.lexer")], ["treeSet", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.pointerType("parse.Tree"))]], [], true), $.methodSignature("stopParse", [], [], true), $.methodSignature("templateControl", [], ["parse.Node"], true), $.methodSignature("term", [], ["parse.Node"], true), $.methodSignature("textOrAction", [], ["parse.Node"], true), $.methodSignature("unexpected", [["token", "parse.item"], ["context", /* @__PURE__ */ $.basicType("string")]], [], true), $.methodSignature("useVar", [["pos", /* @__PURE__ */ $.basicType("int", "parse.Pos")], ["name", /* @__PURE__ */ $.basicType("string")]], ["parse.Node"], true), $.methodSignature("withControl", [], ["parse.Node"], true)],
		Tree,
		() => [/* @__PURE__ */ $.structField("Name", /* @__PURE__ */ $.basicType("string"), [0], 0, true), /* @__PURE__ */ $.structField("ParseName", /* @__PURE__ */ $.basicType("string"), [1], 16, true), /* @__PURE__ */ $.structField("Root", /* @__PURE__ */ $.pointerType("parse.ListNode"), [2], 32, true), /* @__PURE__ */ $.structField("Mode", /* @__PURE__ */ $.basicType("uint", "parse.Mode"), [3], 40, true), /* @__PURE__ */ $.structField("text", /* @__PURE__ */ $.basicType("string"), [4], 48, false, { pkgPath: "text/template/parse" }), /* @__PURE__ */ $.structField("funcs", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), { kind: $.TypeKind.Interface, methods: [] })), [5], 64, false, { pkgPath: "text/template/parse" }), /* @__PURE__ */ $.structField("lex", /* @__PURE__ */ $.pointerType("parse.lexer"), [6], 88, false, { pkgPath: "text/template/parse" }), /* @__PURE__ */ $.structField("token", /* @__PURE__ */ $.arrayType("parse.item", 3), [7], 96, false, { pkgPath: "text/template/parse" }), /* @__PURE__ */ $.structField("peekCount", /* @__PURE__ */ $.basicType("int"), [8], 216, false, { pkgPath: "text/template/parse" }), /* @__PURE__ */ $.structField("vars", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")), [9], 224, false, { pkgPath: "text/template/parse" }), /* @__PURE__ */ $.structField("treeSet", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.pointerType("parse.Tree")), [10], 248, false, { pkgPath: "text/template/parse" }), /* @__PURE__ */ $.structField("actionLine", /* @__PURE__ */ $.basicType("int"), [11], 256, false, { pkgPath: "text/template/parse" }), /* @__PURE__ */ $.structField("rangeDepth", /* @__PURE__ */ $.basicType("int"), [12], 264, false, { pkgPath: "text/template/parse" }), /* @__PURE__ */ $.structField("stackDepth", /* @__PURE__ */ $.basicType("int"), [13], 272, false, { pkgPath: "text/template/parse" }), /* @__PURE__ */ $.structField("leftDelim", /* @__PURE__ */ $.basicType("string"), [14], 280, false, { pkgPath: "text/template/parse" }), /* @__PURE__ */ $.structField("rightDelim", /* @__PURE__ */ $.basicType("string"), [15], 296, false, { pkgPath: "text/template/parse" })]
	)
}

export const ParseComments: Mode = 1

export const SkipFuncCheck: Mode = 2

export let maxStackDepth: number = 10000

export function __goscript_set_maxStackDepth(__goscriptValue: number): void {
	maxStackDepth = __goscriptValue
}

function __goscriptInit0(): void {
	if ($.stringEqual(runtime.GOARCH, "wasm")) {
		maxStackDepth = 1000
	}
}

export async function Parse(name: string, text: string, leftDelim: string, rightDelim: string, funcs: $.Slice<globalThis.Map<string, any> | null>): globalThis.Promise<[globalThis.Map<string, Tree | $.VarRef<Tree> | null> | null, $.GoError]> {
	let treeSet: globalThis.Map<string, Tree | $.VarRef<Tree> | null> | null = $.makeMap<string, Tree | $.VarRef<Tree> | null>()
	let t: Tree | $.VarRef<Tree> | null = New(name, null)
	$.pointerValue<Tree>(t).text = text
	let [, err] = await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Tree).Parse(text, leftDelim, rightDelim, treeSet, funcs) : Tree.prototype.Parse.call(t, text, leftDelim, rightDelim, treeSet, funcs))
	return [treeSet, err]
}

export function New(name: string, funcs: $.Slice<globalThis.Map<string, any> | null>): Tree | $.VarRef<Tree> | null {
	return new Tree({Name: name, funcs: funcs})
}

export async function IsEmptyTree(n: __goscript_node.Node | null): globalThis.Promise<boolean> {
	{
		const __goscriptTypeSwitchValue = n
		switch (true) {
			case __goscriptTypeSwitchValue == null:
				{
					let n: any = __goscriptTypeSwitchValue
					return true
				}
				break
			case $.typeAssert<__goscript_node.ActionNode | $.VarRef<__goscript_node.ActionNode> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("parse.ActionNode")).ok:
				{
					let n: __goscript_node.ActionNode | $.VarRef<__goscript_node.ActionNode> | null = $.typeAssert<__goscript_node.ActionNode | $.VarRef<__goscript_node.ActionNode> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("parse.ActionNode")).value
				}
				break
			case $.typeAssert<__goscript_node.CommentNode | $.VarRef<__goscript_node.CommentNode> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("parse.CommentNode")).ok:
				{
					let n: __goscript_node.CommentNode | $.VarRef<__goscript_node.CommentNode> | null = $.typeAssert<__goscript_node.CommentNode | $.VarRef<__goscript_node.CommentNode> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("parse.CommentNode")).value
					return true
				}
				break
			case $.typeAssert<__goscript_node.IfNode | $.VarRef<__goscript_node.IfNode> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("parse.IfNode")).ok:
				{
					let n: __goscript_node.IfNode | $.VarRef<__goscript_node.IfNode> | null = $.typeAssert<__goscript_node.IfNode | $.VarRef<__goscript_node.IfNode> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("parse.IfNode")).value
				}
				break
			case $.typeAssert<__goscript_node.ListNode | $.VarRef<__goscript_node.ListNode> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("parse.ListNode")).ok:
				{
					let n: __goscript_node.ListNode | $.VarRef<__goscript_node.ListNode> | null = $.typeAssert<__goscript_node.ListNode | $.VarRef<__goscript_node.ListNode> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("parse.ListNode")).value
					for (let __goscriptRangeTarget3 = $.pointerValue<__goscript_node.ListNode>(n).Nodes, __goscriptRangeWindow3 = $.sliceRange(__goscriptRangeTarget3), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow3.length; __rangeIndex++) {
						let node = (__goscriptRangeWindow3.backing[__goscriptRangeWindow3.offset + __rangeIndex] as __goscript_node.Node | null)
						if (!await IsEmptyTree(node)) {
							return false
						}
					}
					return true
				}
				break
			case $.typeAssert<__goscript_node.RangeNode | $.VarRef<__goscript_node.RangeNode> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("parse.RangeNode")).ok:
				{
					let n: __goscript_node.RangeNode | $.VarRef<__goscript_node.RangeNode> | null = $.typeAssert<__goscript_node.RangeNode | $.VarRef<__goscript_node.RangeNode> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("parse.RangeNode")).value
				}
				break
			case $.typeAssert<__goscript_node.TemplateNode | $.VarRef<__goscript_node.TemplateNode> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("parse.TemplateNode")).ok:
				{
					let n: __goscript_node.TemplateNode | $.VarRef<__goscript_node.TemplateNode> | null = $.typeAssert<__goscript_node.TemplateNode | $.VarRef<__goscript_node.TemplateNode> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("parse.TemplateNode")).value
				}
				break
			case $.typeAssert<__goscript_node.TextNode | $.VarRef<__goscript_node.TextNode> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("parse.TextNode")).ok:
				{
					let n: __goscript_node.TextNode | $.VarRef<__goscript_node.TextNode> | null = $.typeAssert<__goscript_node.TextNode | $.VarRef<__goscript_node.TextNode> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("parse.TextNode")).value
					return $.sliceLen(bytes.TrimSpace($.pointerValue<__goscript_node.TextNode>(n).Text)) == 0
				}
				break
			case $.typeAssert<__goscript_node.WithNode | $.VarRef<__goscript_node.WithNode> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("parse.WithNode")).ok:
				{
					let n: __goscript_node.WithNode | $.VarRef<__goscript_node.WithNode> | null = $.typeAssert<__goscript_node.WithNode | $.VarRef<__goscript_node.WithNode> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("parse.WithNode")).value
				}
				break
			default:
				{
					let n: any = __goscriptTypeSwitchValue
					$.panic($.concatString("unknown node: ", (__goscriptAwait = (n !== null && (n as any).__isVarRef !== true && (n as any).__goValue === undefined ? (n as Exclude<__goscript_node.Node, null>) : $.pointerValue<Exclude<__goscript_node.Node, null>>(n)).String(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)))
				}
				break
		}
	}
	return false
}

var __goscriptAwait: any

export { __goscriptInit0 }
