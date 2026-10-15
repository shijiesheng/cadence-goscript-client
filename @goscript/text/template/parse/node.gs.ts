// Generated file based on node.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as strconv from "@goscript/strconv/index.js"

import * as strings from "@goscript/strings/index.js"

import * as __goscript_lex from "./lex.gs.ts"

import * as __goscript_parse from "./parse.gs.ts"
import "@goscript/fmt/index.js"
import "@goscript/strconv/index.js"
import "@goscript/strings/index.js"
import "./lex.gs.ts"
import "./parse.gs.ts"

$.registerTypePackagePath("text/template/parse", ["parse.Node", "parse.NodeType", "parse.Pos", "parse.ListNode", "parse.TextNode", "parse.CommentNode", "parse.PipeNode", "parse.ActionNode", "parse.CommandNode", "parse.IdentifierNode", "parse.VariableNode", "parse.DotNode", "parse.NilNode", "parse.FieldNode", "parse.ChainNode", "parse.BoolNode", "parse.NumberNode", "parse.StringNode", "parse.endNode", "parse.elseNode", "parse.BranchNode", "parse.IfNode", "parse.BreakNode", "parse.ContinueNode", "parse.RangeNode", "parse.WithNode", "parse.TemplateNode"])

export type Node = {
	Copy(): Node | null
	Position(): Pos
	String(): string | globalThis.Promise<string>
	Type(): NodeType
	tree(): __goscript_parse.Tree | $.VarRef<__goscript_parse.Tree> | null
	writeTo(_p0: strings.Builder | $.VarRef<strings.Builder> | null): void
}

$.registerInterfaceType(
	"parse.Node",
	null,
	[$.methodSignature("Copy", [], ["parse.Node"]), $.methodSignature("Position", [], [/* @__PURE__ */ $.basicType("int", "parse.Pos")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Type", [], [/* @__PURE__ */ $.basicType("int", "parse.NodeType")]), $.methodSignature("tree", [], [/* @__PURE__ */ $.pointerType("parse.Tree")]), $.methodSignature("writeTo", [/* @__PURE__ */ $.pointerType("strings.Builder")])]
);

export type NodeType = number

$.registerNamedValueType(
	"parse.NodeType",
	{Type: (receiver: any, ...args: any[]) => (NodeType_Type as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Type", [], [/* @__PURE__ */ $.basicType("int", "parse.NodeType")])]
);

$.registerNamedValueType(
	"*parse.NodeType",
	{Type: (receiver: any, ...args: any[]) => (NodeType_Type as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Type", [], [/* @__PURE__ */ $.basicType("int", "parse.NodeType")])]
);

export type Pos = number

$.registerNamedValueType(
	"parse.Pos",
	{Position: (receiver: any, ...args: any[]) => (Pos_Position as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Position", [], [/* @__PURE__ */ $.basicType("int", "parse.Pos")])]
);

$.registerNamedValueType(
	"*parse.Pos",
	{Position: (receiver: any, ...args: any[]) => (Pos_Position as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Position", [], [/* @__PURE__ */ $.basicType("int", "parse.Pos")])]
);

export class ListNode {
	public get NodeType(): NodeType {
		return this._fields.NodeType
	}

	public set NodeType(value: NodeType) {
		this._fields.NodeType = value
	}

	public get Pos(): Pos {
		return this._fields.Pos
	}

	public set Pos(value: Pos) {
		this._fields.Pos = value
	}

	public get tr(): __goscript_parse.Tree | $.VarRef<__goscript_parse.Tree> | null {
		return this._fields.tr
	}

	public set tr(value: __goscript_parse.Tree | $.VarRef<__goscript_parse.Tree> | null) {
		this._fields.tr = value
	}

	public get Nodes(): $.Slice<Node | null> {
		return this._fields.Nodes
	}

	public set Nodes(value: $.Slice<Node | null>) {
		this._fields.Nodes = value
	}

	public _fields: {
		NodeType: NodeType
		Pos: Pos
		tr: __goscript_parse.Tree | $.VarRef<__goscript_parse.Tree> | null
		Nodes: $.Slice<Node | null>
	}

	constructor(init?: Partial<{NodeType?: NodeType, Pos?: Pos, tr?: __goscript_parse.Tree | $.VarRef<__goscript_parse.Tree> | null, Nodes?: $.Slice<Node | null>}>, __goscriptValue?: boolean) {
		this._fields = {
			NodeType: init?.NodeType ?? (0 as NodeType),
			Pos: init?.Pos ?? (0 as Pos),
			tr: init?.tr ?? (null! as __goscript_parse.Tree | $.VarRef<__goscript_parse.Tree> | null),
			Nodes: init?.Nodes ?? (null! as $.Slice<Node | null>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ListNode {
		return new ListNode(this, true)
	}

	public __goscriptAssign(source: ListNode): void {
		const target = this._fields
		const values = source._fields
		target.NodeType = values.NodeType
		target.Pos = values.Pos
		target.tr = values.tr
		target.Nodes = values.Nodes
	}

	public Copy(): Node | null {
		const l: ListNode | $.VarRef<ListNode> | null = this;
		return $.interfaceValue<Node | null>((l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as ListNode).CopyList() : ListNode.prototype.CopyList.call(l)), "*parse.ListNode", /* @__PURE__ */ $.pointerType("parse.ListNode"))
	}

	public CopyList(): ListNode | $.VarRef<ListNode> | null {
		const l: ListNode | $.VarRef<ListNode> | null = this;
		const l$: ListNode = l == null ? $.pointerTarget<ListNode>(l) : (l as any).__isVarRef === true ? (l as any).value : (l as any).__goValue === undefined ? (l as any) : $.pointerTarget<ListNode>(l)
		if (l == null) {
			return l
		}
		let n: ListNode | $.VarRef<ListNode> | null = __goscript_parse.Tree.prototype.newList.call((l$ as ListNode).tr, (l$ as ListNode).Pos)
		for (let __goscriptRangeTarget0 = (l$ as ListNode).Nodes, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
			let elem = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as Node | null)
			ListNode.prototype.append.call(n, (elem !== null && (elem as any).__isVarRef !== true && (elem as any).__goValue === undefined ? (elem as Exclude<Node, null>) : $.pointerValue<Exclude<Node, null>>(elem)).Copy())
		}
		return n
	}

	public async String(): globalThis.Promise<string> {
		const l: ListNode | $.VarRef<ListNode> | null = this;
		let sb: $.VarRef<strings.Builder> = $.varRef($.markAsStructValue(new strings.Builder()))
		await (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as ListNode).writeTo(sb) : ListNode.prototype.writeTo.call(l, sb))
		return sb.value.String()
	}

	public append(n: Node | null): void {
		let l: ListNode | $.VarRef<ListNode> | null = this;
		const l$: ListNode = l == null ? $.pointerTarget<ListNode>(l) : (l as any).__isVarRef === true ? (l as any).value : (l as any).__goValue === undefined ? (l as any) : $.pointerTarget<ListNode>(l);
		;(l$ as ListNode).Nodes = $.appendOne((l$ as ListNode).Nodes, n, $.appendZeros.nil)
	}

	public tree(): __goscript_parse.Tree | $.VarRef<__goscript_parse.Tree> | null {
		const l: ListNode | $.VarRef<ListNode> | null = this;
		return $.pointerValue<ListNode>(l).tr
	}

	public async writeTo(sb: strings.Builder | $.VarRef<strings.Builder> | null): globalThis.Promise<void> {
		const l: ListNode | $.VarRef<ListNode> | null = this;
		for (let __goscriptRangeTarget1 = $.pointerValue<ListNode>(l).Nodes, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
			let n = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as Node | null)
			void (__goscriptAwait = (n !== null && (n as any).__isVarRef !== true && (n as any).__goValue === undefined ? (n as Exclude<Node, null>) : $.pointerValue<Exclude<Node, null>>(n)).writeTo(sb), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}

	public Type(): any {
		return NodeType_Type(this.NodeType)
	}

	public Position(): any {
		return Pos_Position(this.Pos)
	}

	static __typeInfo = $.registerStructType(
		"parse.ListNode",
		() => new ListNode(),
		() => [$.methodSignature("Copy", [], ["parse.Node"], true), $.methodSignature("CopyList", [], [/* @__PURE__ */ $.pointerType("parse.ListNode")], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("append", [["n", "parse.Node"]], [], true), $.methodSignature("tree", [], [/* @__PURE__ */ $.pointerType("parse.Tree")], true), $.methodSignature("writeTo", [["sb", /* @__PURE__ */ $.pointerType("strings.Builder")]], [], true), $.methodSignature("Type", [], [/* @__PURE__ */ $.basicType("int", "parse.NodeType")]), $.methodSignature("Position", [], [/* @__PURE__ */ $.basicType("int", "parse.Pos")])],
		ListNode,
		() => [/* @__PURE__ */ $.structField("NodeType", /* @__PURE__ */ $.basicType("int", "parse.NodeType"), [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Pos", /* @__PURE__ */ $.basicType("int", "parse.Pos"), [1], 8, true, { anonymous: true }), /* @__PURE__ */ $.structField("tr", /* @__PURE__ */ $.pointerType("parse.Tree"), [2], 16, false, { pkgPath: "text/template/parse" }), /* @__PURE__ */ $.structField("Nodes", /* @__PURE__ */ $.sliceType("parse.Node"), [3], 24, true)]
	)
}

export class TextNode {
	public get NodeType(): NodeType {
		return this._fields.NodeType
	}

	public set NodeType(value: NodeType) {
		this._fields.NodeType = value
	}

	public get Pos(): Pos {
		return this._fields.Pos
	}

	public set Pos(value: Pos) {
		this._fields.Pos = value
	}

	public get tr(): __goscript_parse.Tree | $.VarRef<__goscript_parse.Tree> | null {
		return this._fields.tr
	}

	public set tr(value: __goscript_parse.Tree | $.VarRef<__goscript_parse.Tree> | null) {
		this._fields.tr = value
	}

	public get Text(): $.Slice<number> {
		return this._fields.Text
	}

	public set Text(value: $.Slice<number>) {
		this._fields.Text = value
	}

	public _fields: {
		NodeType: NodeType
		Pos: Pos
		tr: __goscript_parse.Tree | $.VarRef<__goscript_parse.Tree> | null
		Text: $.Slice<number>
	}

	constructor(init?: Partial<{NodeType?: NodeType, Pos?: Pos, tr?: __goscript_parse.Tree | $.VarRef<__goscript_parse.Tree> | null, Text?: $.Slice<number>}>, __goscriptValue?: boolean) {
		this._fields = {
			NodeType: init?.NodeType ?? (0 as NodeType),
			Pos: init?.Pos ?? (0 as Pos),
			tr: init?.tr ?? (null! as __goscript_parse.Tree | $.VarRef<__goscript_parse.Tree> | null),
			Text: init?.Text ?? (null! as $.Slice<number>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): TextNode {
		return new TextNode(this, true)
	}

	public __goscriptAssign(source: TextNode): void {
		const target = this._fields
		const values = source._fields
		target.NodeType = values.NodeType
		target.Pos = values.Pos
		target.tr = values.tr
		target.Text = values.Text
	}

	public Copy(): Node | null {
		const t: TextNode | $.VarRef<TextNode> | null = this;
		const t$: TextNode = t == null ? $.pointerTarget<TextNode>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<TextNode>(t)
		return $.interfaceValue<Node | null>(new TextNode({tr: (t$ as TextNode).tr, NodeType: 0, Pos: (t$ as TextNode).Pos, Text: $.appendSlice(new Uint8Array([]) as $.Slice<number>, (t$ as TextNode).Text, $.byteSliceHint)}), "*parse.TextNode", /* @__PURE__ */ $.pointerType("parse.TextNode"))
	}

	public async String(): globalThis.Promise<string> {
		const t: TextNode | $.VarRef<TextNode> | null = this;
		return fmt.Sprintf(textFormat, $.interfaceValue($.pointerValue<TextNode>(t).Text, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))))
	}

	public tree(): __goscript_parse.Tree | $.VarRef<__goscript_parse.Tree> | null {
		const t: TextNode | $.VarRef<TextNode> | null = this;
		return $.pointerValue<TextNode>(t).tr
	}

	public async writeTo(sb: strings.Builder | $.VarRef<strings.Builder> | null): globalThis.Promise<void> {
		const t: TextNode | $.VarRef<TextNode> | null = this;
		strings.Builder.prototype.WriteString.call($.pointerValue<strings.Builder>(sb), await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as TextNode).String() : TextNode.prototype.String.call(t)))
	}

	public Type(): any {
		return NodeType_Type(this.NodeType)
	}

	public Position(): any {
		return Pos_Position(this.Pos)
	}

	static __typeInfo = $.registerStructType(
		"parse.TextNode",
		() => new TextNode(),
		() => [$.methodSignature("Copy", [], ["parse.Node"], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("tree", [], [/* @__PURE__ */ $.pointerType("parse.Tree")], true), $.methodSignature("writeTo", [["sb", /* @__PURE__ */ $.pointerType("strings.Builder")]], [], true), $.methodSignature("Type", [], [/* @__PURE__ */ $.basicType("int", "parse.NodeType")]), $.methodSignature("Position", [], [/* @__PURE__ */ $.basicType("int", "parse.Pos")])],
		TextNode,
		() => [/* @__PURE__ */ $.structField("NodeType", /* @__PURE__ */ $.basicType("int", "parse.NodeType"), [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Pos", /* @__PURE__ */ $.basicType("int", "parse.Pos"), [1], 8, true, { anonymous: true }), /* @__PURE__ */ $.structField("tr", /* @__PURE__ */ $.pointerType("parse.Tree"), [2], 16, false, { pkgPath: "text/template/parse" }), /* @__PURE__ */ $.structField("Text", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [3], 24, true)]
	)
}

export class CommentNode {
	public get NodeType(): NodeType {
		return this._fields.NodeType
	}

	public set NodeType(value: NodeType) {
		this._fields.NodeType = value
	}

	public get Pos(): Pos {
		return this._fields.Pos
	}

	public set Pos(value: Pos) {
		this._fields.Pos = value
	}

	public get tr(): __goscript_parse.Tree | $.VarRef<__goscript_parse.Tree> | null {
		return this._fields.tr
	}

	public set tr(value: __goscript_parse.Tree | $.VarRef<__goscript_parse.Tree> | null) {
		this._fields.tr = value
	}

	public get Text(): string {
		return this._fields.Text
	}

	public set Text(value: string) {
		this._fields.Text = value
	}

	public _fields: {
		NodeType: NodeType
		Pos: Pos
		tr: __goscript_parse.Tree | $.VarRef<__goscript_parse.Tree> | null
		Text: string
	}

	constructor(init?: Partial<{NodeType?: NodeType, Pos?: Pos, tr?: __goscript_parse.Tree | $.VarRef<__goscript_parse.Tree> | null, Text?: string}>, __goscriptValue?: boolean) {
		this._fields = {
			NodeType: init?.NodeType ?? (0 as NodeType),
			Pos: init?.Pos ?? (0 as Pos),
			tr: init?.tr ?? (null! as __goscript_parse.Tree | $.VarRef<__goscript_parse.Tree> | null),
			Text: init?.Text ?? ("" as string)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): CommentNode {
		return new CommentNode(this, true)
	}

	public __goscriptAssign(source: CommentNode): void {
		const target = this._fields
		const values = source._fields
		target.NodeType = values.NodeType
		target.Pos = values.Pos
		target.tr = values.tr
		target.Text = values.Text
	}

	public Copy(): Node | null {
		const c: CommentNode | $.VarRef<CommentNode> | null = this;
		const c$: CommentNode = c == null ? $.pointerTarget<CommentNode>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<CommentNode>(c)
		return $.interfaceValue<Node | null>(new CommentNode({tr: (c$ as CommentNode).tr, NodeType: 20, Pos: (c$ as CommentNode).Pos, Text: (c$ as CommentNode).Text}), "*parse.CommentNode", /* @__PURE__ */ $.pointerType("parse.CommentNode"))
	}

	public String(): string {
		const c: CommentNode | $.VarRef<CommentNode> | null = this;
		let sb: $.VarRef<strings.Builder> = $.varRef($.markAsStructValue(new strings.Builder()))
		void (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as CommentNode).writeTo(sb) : CommentNode.prototype.writeTo.call(c, sb))
		return sb.value.String()
	}

	public tree(): __goscript_parse.Tree | $.VarRef<__goscript_parse.Tree> | null {
		const c: CommentNode | $.VarRef<CommentNode> | null = this;
		return $.pointerValue<CommentNode>(c).tr
	}

	public writeTo(sb: strings.Builder | $.VarRef<strings.Builder> | null): void {
		const c: CommentNode | $.VarRef<CommentNode> | null = this;
		const c$: CommentNode = c == null ? $.pointerTarget<CommentNode>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<CommentNode>(c)
		strings.Builder.prototype.WriteString.call($.pointerValue<strings.Builder>(sb), $.pointerValue<__goscript_parse.Tree>((c$ as CommentNode).tr).leftDelim)
		strings.Builder.prototype.WriteString.call($.pointerValue<strings.Builder>(sb), (c$ as CommentNode).Text)
		strings.Builder.prototype.WriteString.call($.pointerValue<strings.Builder>(sb), $.pointerValue<__goscript_parse.Tree>((c$ as CommentNode).tr).rightDelim)
	}

	public Type(): any {
		return NodeType_Type(this.NodeType)
	}

	public Position(): any {
		return Pos_Position(this.Pos)
	}

	static __typeInfo = $.registerStructType(
		"parse.CommentNode",
		() => new CommentNode(),
		() => [$.methodSignature("Copy", [], ["parse.Node"], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("tree", [], [/* @__PURE__ */ $.pointerType("parse.Tree")], true), $.methodSignature("writeTo", [["sb", /* @__PURE__ */ $.pointerType("strings.Builder")]], [], true), $.methodSignature("Type", [], [/* @__PURE__ */ $.basicType("int", "parse.NodeType")]), $.methodSignature("Position", [], [/* @__PURE__ */ $.basicType("int", "parse.Pos")])],
		CommentNode,
		() => [/* @__PURE__ */ $.structField("NodeType", /* @__PURE__ */ $.basicType("int", "parse.NodeType"), [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Pos", /* @__PURE__ */ $.basicType("int", "parse.Pos"), [1], 8, true, { anonymous: true }), /* @__PURE__ */ $.structField("tr", /* @__PURE__ */ $.pointerType("parse.Tree"), [2], 16, false, { pkgPath: "text/template/parse" }), /* @__PURE__ */ $.structField("Text", /* @__PURE__ */ $.basicType("string"), [3], 24, true)]
	)
}

export class PipeNode {
	public get NodeType(): NodeType {
		return this._fields.NodeType
	}

	public set NodeType(value: NodeType) {
		this._fields.NodeType = value
	}

	public get Pos(): Pos {
		return this._fields.Pos
	}

	public set Pos(value: Pos) {
		this._fields.Pos = value
	}

	public get tr(): __goscript_parse.Tree | $.VarRef<__goscript_parse.Tree> | null {
		return this._fields.tr
	}

	public set tr(value: __goscript_parse.Tree | $.VarRef<__goscript_parse.Tree> | null) {
		this._fields.tr = value
	}

	public get Line(): number {
		return this._fields.Line
	}

	public set Line(value: number) {
		this._fields.Line = value
	}

	public get IsAssign(): boolean {
		return this._fields.IsAssign
	}

	public set IsAssign(value: boolean) {
		this._fields.IsAssign = value
	}

	public get Decl(): $.Slice<VariableNode | $.VarRef<VariableNode> | null> {
		return this._fields.Decl
	}

	public set Decl(value: $.Slice<VariableNode | $.VarRef<VariableNode> | null>) {
		this._fields.Decl = value
	}

	public get Cmds(): $.Slice<CommandNode | $.VarRef<CommandNode> | null> {
		return this._fields.Cmds
	}

	public set Cmds(value: $.Slice<CommandNode | $.VarRef<CommandNode> | null>) {
		this._fields.Cmds = value
	}

	public _fields: {
		NodeType: NodeType
		Pos: Pos
		tr: __goscript_parse.Tree | $.VarRef<__goscript_parse.Tree> | null
		Line: number
		IsAssign: boolean
		Decl: $.Slice<VariableNode | $.VarRef<VariableNode> | null>
		Cmds: $.Slice<CommandNode | $.VarRef<CommandNode> | null>
	}

	constructor(init?: Partial<{NodeType?: NodeType, Pos?: Pos, tr?: __goscript_parse.Tree | $.VarRef<__goscript_parse.Tree> | null, Line?: number, IsAssign?: boolean, Decl?: $.Slice<VariableNode | $.VarRef<VariableNode> | null>, Cmds?: $.Slice<CommandNode | $.VarRef<CommandNode> | null>}>, __goscriptValue?: boolean) {
		this._fields = {
			NodeType: init?.NodeType ?? (0 as NodeType),
			Pos: init?.Pos ?? (0 as Pos),
			tr: init?.tr ?? (null! as __goscript_parse.Tree | $.VarRef<__goscript_parse.Tree> | null),
			Line: init?.Line ?? (0 as number),
			IsAssign: init?.IsAssign ?? (false as boolean),
			Decl: init?.Decl ?? (null! as $.Slice<VariableNode | $.VarRef<VariableNode> | null>),
			Cmds: init?.Cmds ?? (null! as $.Slice<CommandNode | $.VarRef<CommandNode> | null>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): PipeNode {
		return new PipeNode(this, true)
	}

	public __goscriptAssign(source: PipeNode): void {
		const target = this._fields
		const values = source._fields
		target.NodeType = values.NodeType
		target.Pos = values.Pos
		target.tr = values.tr
		target.Line = values.Line
		target.IsAssign = values.IsAssign
		target.Decl = values.Decl
		target.Cmds = values.Cmds
	}

	public Copy(): Node | null {
		const p: PipeNode | $.VarRef<PipeNode> | null = this;
		return $.interfaceValue<Node | null>((p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as PipeNode).CopyPipe() : PipeNode.prototype.CopyPipe.call(p)), "*parse.PipeNode", /* @__PURE__ */ $.pointerType("parse.PipeNode"))
	}

	public CopyPipe(): PipeNode | $.VarRef<PipeNode> | null {
		const p: PipeNode | $.VarRef<PipeNode> | null = this;
		const p$: PipeNode = p == null ? $.pointerTarget<PipeNode>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<PipeNode>(p)
		if (p == null) {
			return p
		}
		let vars: $.Slice<VariableNode | $.VarRef<VariableNode> | null> = $.makeSlice<VariableNode | $.VarRef<VariableNode> | null>($.sliceLen((p$ as PipeNode).Decl))
		for (let __goscriptRangeTarget2 = (p$ as PipeNode).Decl, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), __goscriptSliceWindow0 = $.sliceRange(vars), i = 0; i < __goscriptRangeWindow2.length; i++) {
			let d = (__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + i] as VariableNode | $.VarRef<VariableNode> | null);
			;(__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)] = $.mustTypeAssert<VariableNode | $.VarRef<VariableNode> | null>((d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as VariableNode).Copy() : VariableNode.prototype.Copy.call(d)), /* @__PURE__ */ $.pointerType("parse.VariableNode"))
		}
		let n: PipeNode | $.VarRef<PipeNode> | null = __goscript_parse.Tree.prototype.newPipeline.call((p$ as PipeNode).tr, (p$ as PipeNode).Pos, (p$ as PipeNode).Line, vars)
		$.pointerValue<PipeNode>(n).IsAssign = (p$ as PipeNode).IsAssign
		for (let __goscriptRangeTarget3 = (p$ as PipeNode).Cmds, __goscriptRangeWindow3 = $.sliceRange(__goscriptRangeTarget3), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow3.length; __rangeIndex++) {
			let c = (__goscriptRangeWindow3.backing[__goscriptRangeWindow3.offset + __rangeIndex] as CommandNode | $.VarRef<CommandNode> | null)
			PipeNode.prototype.append.call(n, $.mustTypeAssert<CommandNode | $.VarRef<CommandNode> | null>((c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as CommandNode).Copy() : CommandNode.prototype.Copy.call(c)), /* @__PURE__ */ $.pointerType("parse.CommandNode")))
		}
		return n
	}

	public async String(): globalThis.Promise<string> {
		const p: PipeNode | $.VarRef<PipeNode> | null = this;
		let sb: $.VarRef<strings.Builder> = $.varRef($.markAsStructValue(new strings.Builder()))
		await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as PipeNode).writeTo(sb) : PipeNode.prototype.writeTo.call(p, sb))
		return sb.value.String()
	}

	public append(command: CommandNode | $.VarRef<CommandNode> | null): void {
		let p: PipeNode | $.VarRef<PipeNode> | null = this;
		const p$: PipeNode = p == null ? $.pointerTarget<PipeNode>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<PipeNode>(p);
		;(p$ as PipeNode).Cmds = $.appendOne((p$ as PipeNode).Cmds, command, $.appendZeros.nil)
	}

	public tree(): __goscript_parse.Tree | $.VarRef<__goscript_parse.Tree> | null {
		const p: PipeNode | $.VarRef<PipeNode> | null = this;
		return $.pointerValue<PipeNode>(p).tr
	}

	public async writeTo(sb: strings.Builder | $.VarRef<strings.Builder> | null): globalThis.Promise<void> {
		const p: PipeNode | $.VarRef<PipeNode> | null = this;
		const p$: PipeNode = p == null ? $.pointerTarget<PipeNode>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<PipeNode>(p)
		if ($.sliceLen((p$ as PipeNode).Decl) > 0) {
			for (let __goscriptRangeTarget4 = (p$ as PipeNode).Decl, __goscriptRangeWindow4 = $.sliceRange(__goscriptRangeTarget4), i = 0; i < __goscriptRangeWindow4.length; i++) {
				let v = (__goscriptRangeWindow4.backing[__goscriptRangeWindow4.offset + i] as VariableNode | $.VarRef<VariableNode> | null)
				if (i > 0) {
					strings.Builder.prototype.WriteString.call($.pointerValue<strings.Builder>(sb), ", ")
				}
				void (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as VariableNode).writeTo(sb) : VariableNode.prototype.writeTo.call(v, sb))
			}
			if ((p$ as PipeNode).IsAssign) {
				strings.Builder.prototype.WriteString.call($.pointerValue<strings.Builder>(sb), " = ")
			} else {
				strings.Builder.prototype.WriteString.call($.pointerValue<strings.Builder>(sb), " := ")
			}
		}
		for (let __goscriptRangeTarget5 = (p$ as PipeNode).Cmds, __goscriptRangeWindow5 = $.sliceRange(__goscriptRangeTarget5), i = 0; i < __goscriptRangeWindow5.length; i++) {
			let c = (__goscriptRangeWindow5.backing[__goscriptRangeWindow5.offset + i] as CommandNode | $.VarRef<CommandNode> | null)
			if (i > 0) {
				strings.Builder.prototype.WriteString.call($.pointerValue<strings.Builder>(sb), " | ")
			}
			await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as CommandNode).writeTo(sb) : CommandNode.prototype.writeTo.call(c, sb))
		}
	}

	public Type(): any {
		return NodeType_Type(this.NodeType)
	}

	public Position(): any {
		return Pos_Position(this.Pos)
	}

	static __typeInfo = $.registerStructType(
		"parse.PipeNode",
		() => new PipeNode(),
		() => [$.methodSignature("Copy", [], ["parse.Node"], true), $.methodSignature("CopyPipe", [], [/* @__PURE__ */ $.pointerType("parse.PipeNode")], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("append", [["command", /* @__PURE__ */ $.pointerType("parse.CommandNode")]], [], true), $.methodSignature("tree", [], [/* @__PURE__ */ $.pointerType("parse.Tree")], true), $.methodSignature("writeTo", [["sb", /* @__PURE__ */ $.pointerType("strings.Builder")]], [], true), $.methodSignature("Type", [], [/* @__PURE__ */ $.basicType("int", "parse.NodeType")]), $.methodSignature("Position", [], [/* @__PURE__ */ $.basicType("int", "parse.Pos")])],
		PipeNode,
		() => [/* @__PURE__ */ $.structField("NodeType", /* @__PURE__ */ $.basicType("int", "parse.NodeType"), [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Pos", /* @__PURE__ */ $.basicType("int", "parse.Pos"), [1], 8, true, { anonymous: true }), /* @__PURE__ */ $.structField("tr", /* @__PURE__ */ $.pointerType("parse.Tree"), [2], 16, false, { pkgPath: "text/template/parse" }), /* @__PURE__ */ $.structField("Line", /* @__PURE__ */ $.basicType("int"), [3], 24, true), /* @__PURE__ */ $.structField("IsAssign", /* @__PURE__ */ $.basicType("bool"), [4], 32, true), /* @__PURE__ */ $.structField("Decl", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("parse.VariableNode")), [5], 40, true), /* @__PURE__ */ $.structField("Cmds", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("parse.CommandNode")), [6], 64, true)]
	)
}

export class ActionNode {
	public get NodeType(): NodeType {
		return this._fields.NodeType
	}

	public set NodeType(value: NodeType) {
		this._fields.NodeType = value
	}

	public get Pos(): Pos {
		return this._fields.Pos
	}

	public set Pos(value: Pos) {
		this._fields.Pos = value
	}

	public get tr(): __goscript_parse.Tree | $.VarRef<__goscript_parse.Tree> | null {
		return this._fields.tr
	}

	public set tr(value: __goscript_parse.Tree | $.VarRef<__goscript_parse.Tree> | null) {
		this._fields.tr = value
	}

	public get Line(): number {
		return this._fields.Line
	}

	public set Line(value: number) {
		this._fields.Line = value
	}

	public get Pipe(): PipeNode | $.VarRef<PipeNode> | null {
		return this._fields.Pipe
	}

	public set Pipe(value: PipeNode | $.VarRef<PipeNode> | null) {
		this._fields.Pipe = value
	}

	public _fields: {
		NodeType: NodeType
		Pos: Pos
		tr: __goscript_parse.Tree | $.VarRef<__goscript_parse.Tree> | null
		Line: number
		Pipe: PipeNode | $.VarRef<PipeNode> | null
	}

	constructor(init?: Partial<{NodeType?: NodeType, Pos?: Pos, tr?: __goscript_parse.Tree | $.VarRef<__goscript_parse.Tree> | null, Line?: number, Pipe?: PipeNode | $.VarRef<PipeNode> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			NodeType: init?.NodeType ?? (0 as NodeType),
			Pos: init?.Pos ?? (0 as Pos),
			tr: init?.tr ?? (null! as __goscript_parse.Tree | $.VarRef<__goscript_parse.Tree> | null),
			Line: init?.Line ?? (0 as number),
			Pipe: init?.Pipe ?? (null! as PipeNode | $.VarRef<PipeNode> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ActionNode {
		return new ActionNode(this, true)
	}

	public __goscriptAssign(source: ActionNode): void {
		const target = this._fields
		const values = source._fields
		target.NodeType = values.NodeType
		target.Pos = values.Pos
		target.tr = values.tr
		target.Line = values.Line
		target.Pipe = values.Pipe
	}

	public Copy(): Node | null {
		const a: ActionNode | $.VarRef<ActionNode> | null = this;
		const a$: ActionNode = a == null ? $.pointerTarget<ActionNode>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<ActionNode>(a)
		return $.interfaceValue<Node | null>(__goscript_parse.Tree.prototype.newAction.call((a$ as ActionNode).tr, (a$ as ActionNode).Pos, (a$ as ActionNode).Line, PipeNode.prototype.CopyPipe.call((a$ as ActionNode).Pipe)), "*parse.ActionNode", /* @__PURE__ */ $.pointerType("parse.ActionNode"))
	}

	public async String(): globalThis.Promise<string> {
		const a: ActionNode | $.VarRef<ActionNode> | null = this;
		let sb: $.VarRef<strings.Builder> = $.varRef($.markAsStructValue(new strings.Builder()))
		await (a !== null && (a as any).__isVarRef !== true && (a as any).__goValue === undefined ? ((a as any) as ActionNode).writeTo(sb) : ActionNode.prototype.writeTo.call(a, sb))
		return sb.value.String()
	}

	public tree(): __goscript_parse.Tree | $.VarRef<__goscript_parse.Tree> | null {
		const a: ActionNode | $.VarRef<ActionNode> | null = this;
		return $.pointerValue<ActionNode>(a).tr
	}

	public async writeTo(sb: strings.Builder | $.VarRef<strings.Builder> | null): globalThis.Promise<void> {
		const a: ActionNode | $.VarRef<ActionNode> | null = this;
		const a$: ActionNode = a == null ? $.pointerTarget<ActionNode>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<ActionNode>(a)
		strings.Builder.prototype.WriteString.call($.pointerValue<strings.Builder>(sb), $.pointerValue<__goscript_parse.Tree>((a$ as ActionNode).tr).leftDelim)
		await PipeNode.prototype.writeTo.call((a$ as ActionNode).Pipe, sb)
		strings.Builder.prototype.WriteString.call($.pointerValue<strings.Builder>(sb), $.pointerValue<__goscript_parse.Tree>((a$ as ActionNode).tr).rightDelim)
	}

	public Type(): any {
		return NodeType_Type(this.NodeType)
	}

	public Position(): any {
		return Pos_Position(this.Pos)
	}

	static __typeInfo = $.registerStructType(
		"parse.ActionNode",
		() => new ActionNode(),
		() => [$.methodSignature("Copy", [], ["parse.Node"], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("tree", [], [/* @__PURE__ */ $.pointerType("parse.Tree")], true), $.methodSignature("writeTo", [["sb", /* @__PURE__ */ $.pointerType("strings.Builder")]], [], true), $.methodSignature("Type", [], [/* @__PURE__ */ $.basicType("int", "parse.NodeType")]), $.methodSignature("Position", [], [/* @__PURE__ */ $.basicType("int", "parse.Pos")])],
		ActionNode,
		() => [/* @__PURE__ */ $.structField("NodeType", /* @__PURE__ */ $.basicType("int", "parse.NodeType"), [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Pos", /* @__PURE__ */ $.basicType("int", "parse.Pos"), [1], 8, true, { anonymous: true }), /* @__PURE__ */ $.structField("tr", /* @__PURE__ */ $.pointerType("parse.Tree"), [2], 16, false, { pkgPath: "text/template/parse" }), /* @__PURE__ */ $.structField("Line", /* @__PURE__ */ $.basicType("int"), [3], 24, true), /* @__PURE__ */ $.structField("Pipe", /* @__PURE__ */ $.pointerType("parse.PipeNode"), [4], 32, true)]
	)
}

export class CommandNode {
	public get NodeType(): NodeType {
		return this._fields.NodeType
	}

	public set NodeType(value: NodeType) {
		this._fields.NodeType = value
	}

	public get Pos(): Pos {
		return this._fields.Pos
	}

	public set Pos(value: Pos) {
		this._fields.Pos = value
	}

	public get tr(): __goscript_parse.Tree | $.VarRef<__goscript_parse.Tree> | null {
		return this._fields.tr
	}

	public set tr(value: __goscript_parse.Tree | $.VarRef<__goscript_parse.Tree> | null) {
		this._fields.tr = value
	}

	public get Args(): $.Slice<Node | null> {
		return this._fields.Args
	}

	public set Args(value: $.Slice<Node | null>) {
		this._fields.Args = value
	}

	public _fields: {
		NodeType: NodeType
		Pos: Pos
		tr: __goscript_parse.Tree | $.VarRef<__goscript_parse.Tree> | null
		Args: $.Slice<Node | null>
	}

	constructor(init?: Partial<{NodeType?: NodeType, Pos?: Pos, tr?: __goscript_parse.Tree | $.VarRef<__goscript_parse.Tree> | null, Args?: $.Slice<Node | null>}>, __goscriptValue?: boolean) {
		this._fields = {
			NodeType: init?.NodeType ?? (0 as NodeType),
			Pos: init?.Pos ?? (0 as Pos),
			tr: init?.tr ?? (null! as __goscript_parse.Tree | $.VarRef<__goscript_parse.Tree> | null),
			Args: init?.Args ?? (null! as $.Slice<Node | null>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): CommandNode {
		return new CommandNode(this, true)
	}

	public __goscriptAssign(source: CommandNode): void {
		const target = this._fields
		const values = source._fields
		target.NodeType = values.NodeType
		target.Pos = values.Pos
		target.tr = values.tr
		target.Args = values.Args
	}

	public Copy(): Node | null {
		const c: CommandNode | $.VarRef<CommandNode> | null = this;
		const c$: CommandNode = c == null ? $.pointerTarget<CommandNode>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<CommandNode>(c)
		if (c == null) {
			return $.interfaceValue<Node | null>(c, "*parse.CommandNode", /* @__PURE__ */ $.pointerType("parse.CommandNode"))
		}
		let n: CommandNode | $.VarRef<CommandNode> | null = __goscript_parse.Tree.prototype.newCommand.call((c$ as CommandNode).tr, (c$ as CommandNode).Pos)
		for (let __goscriptRangeTarget6 = (c$ as CommandNode).Args, __goscriptRangeWindow6 = $.sliceRange(__goscriptRangeTarget6), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow6.length; __rangeIndex++) {
			let __goscriptRangeShadow0 = (__goscriptRangeWindow6.backing[__goscriptRangeWindow6.offset + __rangeIndex] as Node | null)
			CommandNode.prototype.append.call(n, (__goscriptRangeShadow0 !== null && (__goscriptRangeShadow0 as any).__isVarRef !== true && (__goscriptRangeShadow0 as any).__goValue === undefined ? (__goscriptRangeShadow0 as Exclude<Node, null>) : $.pointerValue<Exclude<Node, null>>(__goscriptRangeShadow0)).Copy())
		}
		return $.interfaceValue<Node | null>(n, "*parse.CommandNode", /* @__PURE__ */ $.pointerType("parse.CommandNode"))
	}

	public async String(): globalThis.Promise<string> {
		const c: CommandNode | $.VarRef<CommandNode> | null = this;
		let sb: $.VarRef<strings.Builder> = $.varRef($.markAsStructValue(new strings.Builder()))
		await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as CommandNode).writeTo(sb) : CommandNode.prototype.writeTo.call(c, sb))
		return sb.value.String()
	}

	public append(arg: Node | null): void {
		let c: CommandNode | $.VarRef<CommandNode> | null = this;
		const c$: CommandNode = c == null ? $.pointerTarget<CommandNode>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<CommandNode>(c);
		;(c$ as CommandNode).Args = $.appendOne((c$ as CommandNode).Args, arg, $.appendZeros.nil)
	}

	public tree(): __goscript_parse.Tree | $.VarRef<__goscript_parse.Tree> | null {
		const c: CommandNode | $.VarRef<CommandNode> | null = this;
		return $.pointerValue<CommandNode>(c).tr
	}

	public async writeTo(sb: strings.Builder | $.VarRef<strings.Builder> | null): globalThis.Promise<void> {
		const c: CommandNode | $.VarRef<CommandNode> | null = this;
		for (let __goscriptRangeTarget7 = $.pointerValue<CommandNode>(c).Args, __goscriptRangeWindow7 = $.sliceRange(__goscriptRangeTarget7), i = 0; i < __goscriptRangeWindow7.length; i++) {
			let arg = (__goscriptRangeWindow7.backing[__goscriptRangeWindow7.offset + i] as Node | null)
			if (i > 0) {
				strings.Builder.prototype.WriteByte.call($.pointerValue<strings.Builder>(sb), 32)
			}
			let __goscriptShadow0 = arg
			{
				let __goscriptTuple0: any = $.typeAssertTuple<PipeNode | $.VarRef<PipeNode> | null>(__goscriptShadow0, /* @__PURE__ */ $.pointerType("parse.PipeNode"))
				let __goscriptShadow1: PipeNode | $.VarRef<PipeNode> | null = __goscriptTuple0[0]
				let ok = __goscriptTuple0[1]
				if (ok) {
					strings.Builder.prototype.WriteByte.call($.pointerValue<strings.Builder>(sb), 40)
					await (__goscriptShadow1 !== null && (__goscriptShadow1 as any).__isVarRef !== true && (__goscriptShadow1 as any).__goValue === undefined ? ((__goscriptShadow1 as any) as PipeNode).writeTo(sb) : PipeNode.prototype.writeTo.call(__goscriptShadow1, sb))
					strings.Builder.prototype.WriteByte.call($.pointerValue<strings.Builder>(sb), 41)
					continue
				}
			}
			void (__goscriptAwait = (arg !== null && (arg as any).__isVarRef !== true && (arg as any).__goValue === undefined ? (arg as Exclude<Node, null>) : $.pointerValue<Exclude<Node, null>>(arg)).writeTo(sb), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}

	public Type(): any {
		return NodeType_Type(this.NodeType)
	}

	public Position(): any {
		return Pos_Position(this.Pos)
	}

	static __typeInfo = $.registerStructType(
		"parse.CommandNode",
		() => new CommandNode(),
		() => [$.methodSignature("Copy", [], ["parse.Node"], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("append", [["arg", "parse.Node"]], [], true), $.methodSignature("tree", [], [/* @__PURE__ */ $.pointerType("parse.Tree")], true), $.methodSignature("writeTo", [["sb", /* @__PURE__ */ $.pointerType("strings.Builder")]], [], true), $.methodSignature("Type", [], [/* @__PURE__ */ $.basicType("int", "parse.NodeType")]), $.methodSignature("Position", [], [/* @__PURE__ */ $.basicType("int", "parse.Pos")])],
		CommandNode,
		() => [/* @__PURE__ */ $.structField("NodeType", /* @__PURE__ */ $.basicType("int", "parse.NodeType"), [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Pos", /* @__PURE__ */ $.basicType("int", "parse.Pos"), [1], 8, true, { anonymous: true }), /* @__PURE__ */ $.structField("tr", /* @__PURE__ */ $.pointerType("parse.Tree"), [2], 16, false, { pkgPath: "text/template/parse" }), /* @__PURE__ */ $.structField("Args", /* @__PURE__ */ $.sliceType("parse.Node"), [3], 24, true)]
	)
}

export class IdentifierNode {
	public get NodeType(): NodeType {
		return this._fields.NodeType
	}

	public set NodeType(value: NodeType) {
		this._fields.NodeType = value
	}

	public get Pos(): Pos {
		return this._fields.Pos
	}

	public set Pos(value: Pos) {
		this._fields.Pos = value
	}

	public get tr(): __goscript_parse.Tree | $.VarRef<__goscript_parse.Tree> | null {
		return this._fields.tr
	}

	public set tr(value: __goscript_parse.Tree | $.VarRef<__goscript_parse.Tree> | null) {
		this._fields.tr = value
	}

	public get Ident(): string {
		return this._fields.Ident
	}

	public set Ident(value: string) {
		this._fields.Ident = value
	}

	public _fields: {
		NodeType: NodeType
		Pos: Pos
		tr: __goscript_parse.Tree | $.VarRef<__goscript_parse.Tree> | null
		Ident: string
	}

	constructor(init?: Partial<{NodeType?: NodeType, Pos?: Pos, tr?: __goscript_parse.Tree | $.VarRef<__goscript_parse.Tree> | null, Ident?: string}>, __goscriptValue?: boolean) {
		this._fields = {
			NodeType: init?.NodeType ?? (0 as NodeType),
			Pos: init?.Pos ?? (0 as Pos),
			tr: init?.tr ?? (null! as __goscript_parse.Tree | $.VarRef<__goscript_parse.Tree> | null),
			Ident: init?.Ident ?? ("" as string)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): IdentifierNode {
		return new IdentifierNode(this, true)
	}

	public __goscriptAssign(source: IdentifierNode): void {
		const target = this._fields
		const values = source._fields
		target.NodeType = values.NodeType
		target.Pos = values.Pos
		target.tr = values.tr
		target.Ident = values.Ident
	}

	public Copy(): Node | null {
		const i: IdentifierNode | $.VarRef<IdentifierNode> | null = this;
		const i$: IdentifierNode = i == null ? $.pointerTarget<IdentifierNode>(i) : (i as any).__isVarRef === true ? (i as any).value : (i as any).__goValue === undefined ? (i as any) : $.pointerTarget<IdentifierNode>(i)
		return $.interfaceValue<Node | null>(IdentifierNode.prototype.SetPos.call(IdentifierNode.prototype.SetTree.call(NewIdentifier((i$ as IdentifierNode).Ident), (i$ as IdentifierNode).tr), (i$ as IdentifierNode).Pos), "*parse.IdentifierNode", /* @__PURE__ */ $.pointerType("parse.IdentifierNode"))
	}

	public SetPos(pos: Pos): IdentifierNode | $.VarRef<IdentifierNode> | null {
		let i: IdentifierNode | $.VarRef<IdentifierNode> | null = this;
		$.pointerValue<IdentifierNode>(i).Pos = pos
		return i
	}

	public SetTree(t: __goscript_parse.Tree | $.VarRef<__goscript_parse.Tree> | null): IdentifierNode | $.VarRef<IdentifierNode> | null {
		let i: IdentifierNode | $.VarRef<IdentifierNode> | null = this;
		$.pointerValue<IdentifierNode>(i).tr = t
		return i
	}

	public String(): string {
		const i: IdentifierNode | $.VarRef<IdentifierNode> | null = this;
		return $.pointerValue<IdentifierNode>(i).Ident
	}

	public tree(): __goscript_parse.Tree | $.VarRef<__goscript_parse.Tree> | null {
		const i: IdentifierNode | $.VarRef<IdentifierNode> | null = this;
		return $.pointerValue<IdentifierNode>(i).tr
	}

	public writeTo(sb: strings.Builder | $.VarRef<strings.Builder> | null): void {
		const i: IdentifierNode | $.VarRef<IdentifierNode> | null = this;
		strings.Builder.prototype.WriteString.call($.pointerValue<strings.Builder>(sb), (i !== null && (i as any).__isVarRef !== true && (i as any).__goValue === undefined ? ((i as any) as IdentifierNode).String() : IdentifierNode.prototype.String.call(i)))
	}

	public Type(): any {
		return NodeType_Type(this.NodeType)
	}

	public Position(): any {
		return Pos_Position(this.Pos)
	}

	static __typeInfo = $.registerStructType(
		"parse.IdentifierNode",
		() => new IdentifierNode(),
		() => [$.methodSignature("Copy", [], ["parse.Node"], true), $.methodSignature("SetPos", [["pos", /* @__PURE__ */ $.basicType("int", "parse.Pos")]], [/* @__PURE__ */ $.pointerType("parse.IdentifierNode")], true), $.methodSignature("SetTree", [["t", /* @__PURE__ */ $.pointerType("parse.Tree")]], [/* @__PURE__ */ $.pointerType("parse.IdentifierNode")], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("tree", [], [/* @__PURE__ */ $.pointerType("parse.Tree")], true), $.methodSignature("writeTo", [["sb", /* @__PURE__ */ $.pointerType("strings.Builder")]], [], true), $.methodSignature("Type", [], [/* @__PURE__ */ $.basicType("int", "parse.NodeType")]), $.methodSignature("Position", [], [/* @__PURE__ */ $.basicType("int", "parse.Pos")])],
		IdentifierNode,
		() => [/* @__PURE__ */ $.structField("NodeType", /* @__PURE__ */ $.basicType("int", "parse.NodeType"), [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Pos", /* @__PURE__ */ $.basicType("int", "parse.Pos"), [1], 8, true, { anonymous: true }), /* @__PURE__ */ $.structField("tr", /* @__PURE__ */ $.pointerType("parse.Tree"), [2], 16, false, { pkgPath: "text/template/parse" }), /* @__PURE__ */ $.structField("Ident", /* @__PURE__ */ $.basicType("string"), [3], 24, true)]
	)
}

export class VariableNode {
	public get NodeType(): NodeType {
		return this._fields.NodeType
	}

	public set NodeType(value: NodeType) {
		this._fields.NodeType = value
	}

	public get Pos(): Pos {
		return this._fields.Pos
	}

	public set Pos(value: Pos) {
		this._fields.Pos = value
	}

	public get tr(): __goscript_parse.Tree | $.VarRef<__goscript_parse.Tree> | null {
		return this._fields.tr
	}

	public set tr(value: __goscript_parse.Tree | $.VarRef<__goscript_parse.Tree> | null) {
		this._fields.tr = value
	}

	public get Ident(): $.Slice<string> {
		return this._fields.Ident
	}

	public set Ident(value: $.Slice<string>) {
		this._fields.Ident = value
	}

	public _fields: {
		NodeType: NodeType
		Pos: Pos
		tr: __goscript_parse.Tree | $.VarRef<__goscript_parse.Tree> | null
		Ident: $.Slice<string>
	}

	constructor(init?: Partial<{NodeType?: NodeType, Pos?: Pos, tr?: __goscript_parse.Tree | $.VarRef<__goscript_parse.Tree> | null, Ident?: $.Slice<string>}>, __goscriptValue?: boolean) {
		this._fields = {
			NodeType: init?.NodeType ?? (0 as NodeType),
			Pos: init?.Pos ?? (0 as Pos),
			tr: init?.tr ?? (null! as __goscript_parse.Tree | $.VarRef<__goscript_parse.Tree> | null),
			Ident: init?.Ident ?? (null! as $.Slice<string>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): VariableNode {
		return new VariableNode(this, true)
	}

	public __goscriptAssign(source: VariableNode): void {
		const target = this._fields
		const values = source._fields
		target.NodeType = values.NodeType
		target.Pos = values.Pos
		target.tr = values.tr
		target.Ident = values.Ident
	}

	public Copy(): Node | null {
		const v: VariableNode | $.VarRef<VariableNode> | null = this;
		const v$: VariableNode = v == null ? $.pointerTarget<VariableNode>(v) : (v as any).__isVarRef === true ? (v as any).value : (v as any).__goValue === undefined ? (v as any) : $.pointerTarget<VariableNode>(v)
		return $.interfaceValue<Node | null>(new VariableNode({tr: (v$ as VariableNode).tr, NodeType: 18, Pos: (v$ as VariableNode).Pos, Ident: $.appendSlice($.arrayToSlice<string>([]), (v$ as VariableNode).Ident)}), "*parse.VariableNode", /* @__PURE__ */ $.pointerType("parse.VariableNode"))
	}

	public String(): string {
		const v: VariableNode | $.VarRef<VariableNode> | null = this;
		let sb: $.VarRef<strings.Builder> = $.varRef($.markAsStructValue(new strings.Builder()))
		void (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as VariableNode).writeTo(sb) : VariableNode.prototype.writeTo.call(v, sb))
		return sb.value.String()
	}

	public tree(): __goscript_parse.Tree | $.VarRef<__goscript_parse.Tree> | null {
		const v: VariableNode | $.VarRef<VariableNode> | null = this;
		return $.pointerValue<VariableNode>(v).tr
	}

	public writeTo(sb: strings.Builder | $.VarRef<strings.Builder> | null): void {
		const v: VariableNode | $.VarRef<VariableNode> | null = this;
		for (let __goscriptRangeTarget8 = $.pointerValue<VariableNode>(v).Ident, __goscriptRangeWindow8 = $.sliceRange(__goscriptRangeTarget8), i = 0; i < __goscriptRangeWindow8.length; i++) {
			let id = (__goscriptRangeWindow8.backing[__goscriptRangeWindow8.offset + i] as string)
			if (i > 0) {
				strings.Builder.prototype.WriteByte.call($.pointerValue<strings.Builder>(sb), 46)
			}
			strings.Builder.prototype.WriteString.call($.pointerValue<strings.Builder>(sb), id)
		}
	}

	public Type(): any {
		return NodeType_Type(this.NodeType)
	}

	public Position(): any {
		return Pos_Position(this.Pos)
	}

	static __typeInfo = $.registerStructType(
		"parse.VariableNode",
		() => new VariableNode(),
		() => [$.methodSignature("Copy", [], ["parse.Node"], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("tree", [], [/* @__PURE__ */ $.pointerType("parse.Tree")], true), $.methodSignature("writeTo", [["sb", /* @__PURE__ */ $.pointerType("strings.Builder")]], [], true), $.methodSignature("Type", [], [/* @__PURE__ */ $.basicType("int", "parse.NodeType")]), $.methodSignature("Position", [], [/* @__PURE__ */ $.basicType("int", "parse.Pos")])],
		VariableNode,
		() => [/* @__PURE__ */ $.structField("NodeType", /* @__PURE__ */ $.basicType("int", "parse.NodeType"), [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Pos", /* @__PURE__ */ $.basicType("int", "parse.Pos"), [1], 8, true, { anonymous: true }), /* @__PURE__ */ $.structField("tr", /* @__PURE__ */ $.pointerType("parse.Tree"), [2], 16, false, { pkgPath: "text/template/parse" }), /* @__PURE__ */ $.structField("Ident", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")), [3], 24, true)]
	)
}

export class DotNode {
	public get NodeType(): NodeType {
		return this._fields.NodeType
	}

	public set NodeType(value: NodeType) {
		this._fields.NodeType = value
	}

	public get Pos(): Pos {
		return this._fields.Pos
	}

	public set Pos(value: Pos) {
		this._fields.Pos = value
	}

	public get tr(): __goscript_parse.Tree | $.VarRef<__goscript_parse.Tree> | null {
		return this._fields.tr
	}

	public set tr(value: __goscript_parse.Tree | $.VarRef<__goscript_parse.Tree> | null) {
		this._fields.tr = value
	}

	public _fields: {
		NodeType: NodeType
		Pos: Pos
		tr: __goscript_parse.Tree | $.VarRef<__goscript_parse.Tree> | null
	}

	constructor(init?: Partial<{NodeType?: NodeType, Pos?: Pos, tr?: __goscript_parse.Tree | $.VarRef<__goscript_parse.Tree> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			NodeType: init?.NodeType ?? (0 as NodeType),
			Pos: init?.Pos ?? (0 as Pos),
			tr: init?.tr ?? (null! as __goscript_parse.Tree | $.VarRef<__goscript_parse.Tree> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): DotNode {
		return new DotNode(this, true)
	}

	public __goscriptAssign(source: DotNode): void {
		const target = this._fields
		const values = source._fields
		target.NodeType = values.NodeType
		target.Pos = values.Pos
		target.tr = values.tr
	}

	public Copy(): Node | null {
		const d: DotNode | $.VarRef<DotNode> | null = this;
		const d$: DotNode = d == null ? $.pointerTarget<DotNode>(d) : (d as any).__isVarRef === true ? (d as any).value : (d as any).__goValue === undefined ? (d as any) : $.pointerTarget<DotNode>(d)
		return $.interfaceValue<Node | null>(__goscript_parse.Tree.prototype.newDot.call((d$ as DotNode).tr, (d$ as DotNode).Pos), "*parse.DotNode", /* @__PURE__ */ $.pointerType("parse.DotNode"))
	}

	public String(): string {
		const d: DotNode | $.VarRef<DotNode> | null = this;
		return "."
	}

	public Type(): NodeType {
		const d: DotNode | $.VarRef<DotNode> | null = this;
		// Override method on embedded NodeType for API compatibility.
		// TODO: Not really a problem; could change API without effect but
		// api tool complains.
		return 5
	}

	public tree(): __goscript_parse.Tree | $.VarRef<__goscript_parse.Tree> | null {
		const d: DotNode | $.VarRef<DotNode> | null = this;
		return $.pointerValue<DotNode>(d).tr
	}

	public writeTo(sb: strings.Builder | $.VarRef<strings.Builder> | null): void {
		const d: DotNode | $.VarRef<DotNode> | null = this;
		strings.Builder.prototype.WriteString.call($.pointerValue<strings.Builder>(sb), (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as DotNode).String() : DotNode.prototype.String.call(d)))
	}

	public Position(): any {
		return Pos_Position(this.Pos)
	}

	static __typeInfo = $.registerStructType(
		"parse.DotNode",
		() => new DotNode(),
		() => [$.methodSignature("Copy", [], ["parse.Node"], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Type", [], [/* @__PURE__ */ $.basicType("int", "parse.NodeType")], true), $.methodSignature("tree", [], [/* @__PURE__ */ $.pointerType("parse.Tree")], true), $.methodSignature("writeTo", [["sb", /* @__PURE__ */ $.pointerType("strings.Builder")]], [], true), $.methodSignature("Position", [], [/* @__PURE__ */ $.basicType("int", "parse.Pos")])],
		DotNode,
		() => [/* @__PURE__ */ $.structField("NodeType", /* @__PURE__ */ $.basicType("int", "parse.NodeType"), [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Pos", /* @__PURE__ */ $.basicType("int", "parse.Pos"), [1], 8, true, { anonymous: true }), /* @__PURE__ */ $.structField("tr", /* @__PURE__ */ $.pointerType("parse.Tree"), [2], 16, false, { pkgPath: "text/template/parse" })]
	)
}

export class NilNode {
	public get NodeType(): NodeType {
		return this._fields.NodeType
	}

	public set NodeType(value: NodeType) {
		this._fields.NodeType = value
	}

	public get Pos(): Pos {
		return this._fields.Pos
	}

	public set Pos(value: Pos) {
		this._fields.Pos = value
	}

	public get tr(): __goscript_parse.Tree | $.VarRef<__goscript_parse.Tree> | null {
		return this._fields.tr
	}

	public set tr(value: __goscript_parse.Tree | $.VarRef<__goscript_parse.Tree> | null) {
		this._fields.tr = value
	}

	public _fields: {
		NodeType: NodeType
		Pos: Pos
		tr: __goscript_parse.Tree | $.VarRef<__goscript_parse.Tree> | null
	}

	constructor(init?: Partial<{NodeType?: NodeType, Pos?: Pos, tr?: __goscript_parse.Tree | $.VarRef<__goscript_parse.Tree> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			NodeType: init?.NodeType ?? (0 as NodeType),
			Pos: init?.Pos ?? (0 as Pos),
			tr: init?.tr ?? (null! as __goscript_parse.Tree | $.VarRef<__goscript_parse.Tree> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): NilNode {
		return new NilNode(this, true)
	}

	public __goscriptAssign(source: NilNode): void {
		const target = this._fields
		const values = source._fields
		target.NodeType = values.NodeType
		target.Pos = values.Pos
		target.tr = values.tr
	}

	public Copy(): Node | null {
		const n: NilNode | $.VarRef<NilNode> | null = this;
		const n$: NilNode = n == null ? $.pointerTarget<NilNode>(n) : (n as any).__isVarRef === true ? (n as any).value : (n as any).__goValue === undefined ? (n as any) : $.pointerTarget<NilNode>(n)
		return $.interfaceValue<Node | null>(__goscript_parse.Tree.prototype.newNil.call((n$ as NilNode).tr, (n$ as NilNode).Pos), "*parse.NilNode", /* @__PURE__ */ $.pointerType("parse.NilNode"))
	}

	public String(): string {
		const n: NilNode | $.VarRef<NilNode> | null = this;
		return "nil"
	}

	public Type(): NodeType {
		const n: NilNode | $.VarRef<NilNode> | null = this;
		// Override method on embedded NodeType for API compatibility.
		// TODO: Not really a problem; could change API without effect but
		// api tool complains.
		return 12
	}

	public tree(): __goscript_parse.Tree | $.VarRef<__goscript_parse.Tree> | null {
		const n: NilNode | $.VarRef<NilNode> | null = this;
		return $.pointerValue<NilNode>(n).tr
	}

	public writeTo(sb: strings.Builder | $.VarRef<strings.Builder> | null): void {
		const n: NilNode | $.VarRef<NilNode> | null = this;
		strings.Builder.prototype.WriteString.call($.pointerValue<strings.Builder>(sb), (n !== null && (n as any).__isVarRef !== true && (n as any).__goValue === undefined ? ((n as any) as NilNode).String() : NilNode.prototype.String.call(n)))
	}

	public Position(): any {
		return Pos_Position(this.Pos)
	}

	static __typeInfo = $.registerStructType(
		"parse.NilNode",
		() => new NilNode(),
		() => [$.methodSignature("Copy", [], ["parse.Node"], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Type", [], [/* @__PURE__ */ $.basicType("int", "parse.NodeType")], true), $.methodSignature("tree", [], [/* @__PURE__ */ $.pointerType("parse.Tree")], true), $.methodSignature("writeTo", [["sb", /* @__PURE__ */ $.pointerType("strings.Builder")]], [], true), $.methodSignature("Position", [], [/* @__PURE__ */ $.basicType("int", "parse.Pos")])],
		NilNode,
		() => [/* @__PURE__ */ $.structField("NodeType", /* @__PURE__ */ $.basicType("int", "parse.NodeType"), [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Pos", /* @__PURE__ */ $.basicType("int", "parse.Pos"), [1], 8, true, { anonymous: true }), /* @__PURE__ */ $.structField("tr", /* @__PURE__ */ $.pointerType("parse.Tree"), [2], 16, false, { pkgPath: "text/template/parse" })]
	)
}

export class FieldNode {
	public get NodeType(): NodeType {
		return this._fields.NodeType
	}

	public set NodeType(value: NodeType) {
		this._fields.NodeType = value
	}

	public get Pos(): Pos {
		return this._fields.Pos
	}

	public set Pos(value: Pos) {
		this._fields.Pos = value
	}

	public get tr(): __goscript_parse.Tree | $.VarRef<__goscript_parse.Tree> | null {
		return this._fields.tr
	}

	public set tr(value: __goscript_parse.Tree | $.VarRef<__goscript_parse.Tree> | null) {
		this._fields.tr = value
	}

	public get Ident(): $.Slice<string> {
		return this._fields.Ident
	}

	public set Ident(value: $.Slice<string>) {
		this._fields.Ident = value
	}

	public _fields: {
		NodeType: NodeType
		Pos: Pos
		tr: __goscript_parse.Tree | $.VarRef<__goscript_parse.Tree> | null
		Ident: $.Slice<string>
	}

	constructor(init?: Partial<{NodeType?: NodeType, Pos?: Pos, tr?: __goscript_parse.Tree | $.VarRef<__goscript_parse.Tree> | null, Ident?: $.Slice<string>}>, __goscriptValue?: boolean) {
		this._fields = {
			NodeType: init?.NodeType ?? (0 as NodeType),
			Pos: init?.Pos ?? (0 as Pos),
			tr: init?.tr ?? (null! as __goscript_parse.Tree | $.VarRef<__goscript_parse.Tree> | null),
			Ident: init?.Ident ?? (null! as $.Slice<string>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): FieldNode {
		return new FieldNode(this, true)
	}

	public __goscriptAssign(source: FieldNode): void {
		const target = this._fields
		const values = source._fields
		target.NodeType = values.NodeType
		target.Pos = values.Pos
		target.tr = values.tr
		target.Ident = values.Ident
	}

	public Copy(): Node | null {
		const f: FieldNode | $.VarRef<FieldNode> | null = this;
		const f$: FieldNode = f == null ? $.pointerTarget<FieldNode>(f) : (f as any).__isVarRef === true ? (f as any).value : (f as any).__goValue === undefined ? (f as any) : $.pointerTarget<FieldNode>(f)
		return $.interfaceValue<Node | null>(new FieldNode({tr: (f$ as FieldNode).tr, NodeType: 8, Pos: (f$ as FieldNode).Pos, Ident: $.appendSlice($.arrayToSlice<string>([]), (f$ as FieldNode).Ident)}), "*parse.FieldNode", /* @__PURE__ */ $.pointerType("parse.FieldNode"))
	}

	public String(): string {
		const f: FieldNode | $.VarRef<FieldNode> | null = this;
		let sb: $.VarRef<strings.Builder> = $.varRef($.markAsStructValue(new strings.Builder()))
		void (f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as FieldNode).writeTo(sb) : FieldNode.prototype.writeTo.call(f, sb))
		return sb.value.String()
	}

	public tree(): __goscript_parse.Tree | $.VarRef<__goscript_parse.Tree> | null {
		const f: FieldNode | $.VarRef<FieldNode> | null = this;
		return $.pointerValue<FieldNode>(f).tr
	}

	public writeTo(sb: strings.Builder | $.VarRef<strings.Builder> | null): void {
		const f: FieldNode | $.VarRef<FieldNode> | null = this;
		for (let __goscriptRangeTarget9 = $.pointerValue<FieldNode>(f).Ident, __goscriptRangeWindow9 = $.sliceRange(__goscriptRangeTarget9), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow9.length; __rangeIndex++) {
			let id = (__goscriptRangeWindow9.backing[__goscriptRangeWindow9.offset + __rangeIndex] as string)
			strings.Builder.prototype.WriteByte.call($.pointerValue<strings.Builder>(sb), 46)
			strings.Builder.prototype.WriteString.call($.pointerValue<strings.Builder>(sb), id)
		}
	}

	public Type(): any {
		return NodeType_Type(this.NodeType)
	}

	public Position(): any {
		return Pos_Position(this.Pos)
	}

	static __typeInfo = $.registerStructType(
		"parse.FieldNode",
		() => new FieldNode(),
		() => [$.methodSignature("Copy", [], ["parse.Node"], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("tree", [], [/* @__PURE__ */ $.pointerType("parse.Tree")], true), $.methodSignature("writeTo", [["sb", /* @__PURE__ */ $.pointerType("strings.Builder")]], [], true), $.methodSignature("Type", [], [/* @__PURE__ */ $.basicType("int", "parse.NodeType")]), $.methodSignature("Position", [], [/* @__PURE__ */ $.basicType("int", "parse.Pos")])],
		FieldNode,
		() => [/* @__PURE__ */ $.structField("NodeType", /* @__PURE__ */ $.basicType("int", "parse.NodeType"), [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Pos", /* @__PURE__ */ $.basicType("int", "parse.Pos"), [1], 8, true, { anonymous: true }), /* @__PURE__ */ $.structField("tr", /* @__PURE__ */ $.pointerType("parse.Tree"), [2], 16, false, { pkgPath: "text/template/parse" }), /* @__PURE__ */ $.structField("Ident", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")), [3], 24, true)]
	)
}

export class ChainNode {
	public get NodeType(): NodeType {
		return this._fields.NodeType
	}

	public set NodeType(value: NodeType) {
		this._fields.NodeType = value
	}

	public get Pos(): Pos {
		return this._fields.Pos
	}

	public set Pos(value: Pos) {
		this._fields.Pos = value
	}

	public get tr(): __goscript_parse.Tree | $.VarRef<__goscript_parse.Tree> | null {
		return this._fields.tr
	}

	public set tr(value: __goscript_parse.Tree | $.VarRef<__goscript_parse.Tree> | null) {
		this._fields.tr = value
	}

	public get Node(): Node | null {
		return this._fields.Node
	}

	public set Node(value: Node | null) {
		this._fields.Node = value
	}

	public get Field(): $.Slice<string> {
		return this._fields.Field
	}

	public set Field(value: $.Slice<string>) {
		this._fields.Field = value
	}

	public _fields: {
		NodeType: NodeType
		Pos: Pos
		tr: __goscript_parse.Tree | $.VarRef<__goscript_parse.Tree> | null
		Node: Node | null
		Field: $.Slice<string>
	}

	constructor(init?: Partial<{NodeType?: NodeType, Pos?: Pos, tr?: __goscript_parse.Tree | $.VarRef<__goscript_parse.Tree> | null, Node?: Node | null, Field?: $.Slice<string>}>, __goscriptValue?: boolean) {
		this._fields = {
			NodeType: init?.NodeType ?? (0 as NodeType),
			Pos: init?.Pos ?? (0 as Pos),
			tr: init?.tr ?? (null! as __goscript_parse.Tree | $.VarRef<__goscript_parse.Tree> | null),
			Node: init?.Node ?? (null! as Node | null),
			Field: init?.Field ?? (null! as $.Slice<string>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ChainNode {
		return new ChainNode(this, true)
	}

	public __goscriptAssign(source: ChainNode): void {
		const target = this._fields
		const values = source._fields
		target.NodeType = values.NodeType
		target.Pos = values.Pos
		target.tr = values.tr
		target.Node = $.assignFieldValue(target.Node, values.Node, "parse.Node")
		target.Field = values.Field
	}

	public Add(field: string): void {
		let c: ChainNode | $.VarRef<ChainNode> | null = this;
		const c$: ChainNode = c == null ? $.pointerTarget<ChainNode>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<ChainNode>(c)
		if (($.stringLen(field) == 0) || ($.indexString(field, 0) != 46)) {
			$.panic("no dot in field")
		}
		field = $.sliceStringOrBytes(field, 1, undefined)
		if ($.stringEqual(field, "")) {
			$.panic("empty field")
		}
		;(c$ as ChainNode).Field = $.appendOne((c$ as ChainNode).Field, field)
	}

	public Copy(): Node | null {
		const c: ChainNode | $.VarRef<ChainNode> | null = this;
		const c$: ChainNode = c == null ? $.pointerTarget<ChainNode>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<ChainNode>(c)
		return $.interfaceValue<Node | null>(new ChainNode({tr: (c$ as ChainNode).tr, NodeType: 3, Pos: (c$ as ChainNode).Pos, Node: (c$ as ChainNode).Node, Field: $.appendSlice($.arrayToSlice<string>([]), (c$ as ChainNode).Field)}), "*parse.ChainNode", /* @__PURE__ */ $.pointerType("parse.ChainNode"))
	}

	public async String(): globalThis.Promise<string> {
		const c: ChainNode | $.VarRef<ChainNode> | null = this;
		let sb: $.VarRef<strings.Builder> = $.varRef($.markAsStructValue(new strings.Builder()))
		await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as ChainNode).writeTo(sb) : ChainNode.prototype.writeTo.call(c, sb))
		return sb.value.String()
	}

	public tree(): __goscript_parse.Tree | $.VarRef<__goscript_parse.Tree> | null {
		const c: ChainNode | $.VarRef<ChainNode> | null = this;
		return $.pointerValue<ChainNode>(c).tr
	}

	public async writeTo(sb: strings.Builder | $.VarRef<strings.Builder> | null): globalThis.Promise<void> {
		const c: ChainNode | $.VarRef<ChainNode> | null = this;
		const c$: ChainNode = c == null ? $.pointerTarget<ChainNode>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<ChainNode>(c)
		{
			let [, ok] = $.typeAssertTuple<PipeNode | $.VarRef<PipeNode> | null>((c$ as ChainNode).Node, /* @__PURE__ */ $.pointerType("parse.PipeNode"))
			if (ok) {
				strings.Builder.prototype.WriteByte.call($.pointerValue<strings.Builder>(sb), 40)
				void (__goscriptAwait = $.pointerValue<Exclude<Node, null>>((c$ as ChainNode).Node).writeTo(sb), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				strings.Builder.prototype.WriteByte.call($.pointerValue<strings.Builder>(sb), 41)
			} else {
				void (__goscriptAwait = $.pointerValue<Exclude<Node, null>>((c$ as ChainNode).Node).writeTo(sb), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		for (let __goscriptRangeTarget10 = (c$ as ChainNode).Field, __goscriptRangeWindow10 = $.sliceRange(__goscriptRangeTarget10), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow10.length; __rangeIndex++) {
			let field = (__goscriptRangeWindow10.backing[__goscriptRangeWindow10.offset + __rangeIndex] as string)
			strings.Builder.prototype.WriteByte.call($.pointerValue<strings.Builder>(sb), 46)
			strings.Builder.prototype.WriteString.call($.pointerValue<strings.Builder>(sb), field)
		}
	}

	public Type(): any {
		return NodeType_Type(this.NodeType)
	}

	public Position(): any {
		return Pos_Position(this.Pos)
	}

	static __typeInfo = $.registerStructType(
		"parse.ChainNode",
		() => new ChainNode(),
		() => [$.methodSignature("Add", [["field", /* @__PURE__ */ $.basicType("string")]], [], true), $.methodSignature("Copy", [], ["parse.Node"], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("tree", [], [/* @__PURE__ */ $.pointerType("parse.Tree")], true), $.methodSignature("writeTo", [["sb", /* @__PURE__ */ $.pointerType("strings.Builder")]], [], true), $.methodSignature("Type", [], [/* @__PURE__ */ $.basicType("int", "parse.NodeType")]), $.methodSignature("Position", [], [/* @__PURE__ */ $.basicType("int", "parse.Pos")])],
		ChainNode,
		() => [/* @__PURE__ */ $.structField("NodeType", /* @__PURE__ */ $.basicType("int", "parse.NodeType"), [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Pos", /* @__PURE__ */ $.basicType("int", "parse.Pos"), [1], 8, true, { anonymous: true }), /* @__PURE__ */ $.structField("tr", /* @__PURE__ */ $.pointerType("parse.Tree"), [2], 16, false, { pkgPath: "text/template/parse" }), /* @__PURE__ */ $.structField("Node", "parse.Node", [3], 24, true), /* @__PURE__ */ $.structField("Field", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")), [4], 40, true)]
	)
}

export class BoolNode {
	public get NodeType(): NodeType {
		return this._fields.NodeType
	}

	public set NodeType(value: NodeType) {
		this._fields.NodeType = value
	}

	public get Pos(): Pos {
		return this._fields.Pos
	}

	public set Pos(value: Pos) {
		this._fields.Pos = value
	}

	public get tr(): __goscript_parse.Tree | $.VarRef<__goscript_parse.Tree> | null {
		return this._fields.tr
	}

	public set tr(value: __goscript_parse.Tree | $.VarRef<__goscript_parse.Tree> | null) {
		this._fields.tr = value
	}

	public get True(): boolean {
		return this._fields.True
	}

	public set True(value: boolean) {
		this._fields.True = value
	}

	public _fields: {
		NodeType: NodeType
		Pos: Pos
		tr: __goscript_parse.Tree | $.VarRef<__goscript_parse.Tree> | null
		True: boolean
	}

	constructor(init?: Partial<{NodeType?: NodeType, Pos?: Pos, tr?: __goscript_parse.Tree | $.VarRef<__goscript_parse.Tree> | null, True?: boolean}>, __goscriptValue?: boolean) {
		this._fields = {
			NodeType: init?.NodeType ?? (0 as NodeType),
			Pos: init?.Pos ?? (0 as Pos),
			tr: init?.tr ?? (null! as __goscript_parse.Tree | $.VarRef<__goscript_parse.Tree> | null),
			True: init?.True ?? (false as boolean)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): BoolNode {
		return new BoolNode(this, true)
	}

	public __goscriptAssign(source: BoolNode): void {
		const target = this._fields
		const values = source._fields
		target.NodeType = values.NodeType
		target.Pos = values.Pos
		target.tr = values.tr
		target.True = values.True
	}

	public Copy(): Node | null {
		const b: BoolNode | $.VarRef<BoolNode> | null = this;
		const b$: BoolNode = b == null ? $.pointerTarget<BoolNode>(b) : (b as any).__isVarRef === true ? (b as any).value : (b as any).__goValue === undefined ? (b as any) : $.pointerTarget<BoolNode>(b)
		return $.interfaceValue<Node | null>(__goscript_parse.Tree.prototype.newBool.call((b$ as BoolNode).tr, (b$ as BoolNode).Pos, (b$ as BoolNode).True), "*parse.BoolNode", /* @__PURE__ */ $.pointerType("parse.BoolNode"))
	}

	public String(): string {
		const b: BoolNode | $.VarRef<BoolNode> | null = this;
		if ($.pointerValue<BoolNode>(b).True) {
			return "true"
		}
		return "false"
	}

	public tree(): __goscript_parse.Tree | $.VarRef<__goscript_parse.Tree> | null {
		const b: BoolNode | $.VarRef<BoolNode> | null = this;
		return $.pointerValue<BoolNode>(b).tr
	}

	public writeTo(sb: strings.Builder | $.VarRef<strings.Builder> | null): void {
		const b: BoolNode | $.VarRef<BoolNode> | null = this;
		strings.Builder.prototype.WriteString.call($.pointerValue<strings.Builder>(sb), (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as BoolNode).String() : BoolNode.prototype.String.call(b)))
	}

	public Type(): any {
		return NodeType_Type(this.NodeType)
	}

	public Position(): any {
		return Pos_Position(this.Pos)
	}

	static __typeInfo = $.registerStructType(
		"parse.BoolNode",
		() => new BoolNode(),
		() => [$.methodSignature("Copy", [], ["parse.Node"], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("tree", [], [/* @__PURE__ */ $.pointerType("parse.Tree")], true), $.methodSignature("writeTo", [["sb", /* @__PURE__ */ $.pointerType("strings.Builder")]], [], true), $.methodSignature("Type", [], [/* @__PURE__ */ $.basicType("int", "parse.NodeType")]), $.methodSignature("Position", [], [/* @__PURE__ */ $.basicType("int", "parse.Pos")])],
		BoolNode,
		() => [/* @__PURE__ */ $.structField("NodeType", /* @__PURE__ */ $.basicType("int", "parse.NodeType"), [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Pos", /* @__PURE__ */ $.basicType("int", "parse.Pos"), [1], 8, true, { anonymous: true }), /* @__PURE__ */ $.structField("tr", /* @__PURE__ */ $.pointerType("parse.Tree"), [2], 16, false, { pkgPath: "text/template/parse" }), /* @__PURE__ */ $.structField("True", /* @__PURE__ */ $.basicType("bool"), [3], 24, true)]
	)
}

export class NumberNode {
	public get NodeType(): NodeType {
		return this._fields.NodeType
	}

	public set NodeType(value: NodeType) {
		this._fields.NodeType = value
	}

	public get Pos(): Pos {
		return this._fields.Pos
	}

	public set Pos(value: Pos) {
		this._fields.Pos = value
	}

	public get tr(): __goscript_parse.Tree | $.VarRef<__goscript_parse.Tree> | null {
		return this._fields.tr
	}

	public set tr(value: __goscript_parse.Tree | $.VarRef<__goscript_parse.Tree> | null) {
		this._fields.tr = value
	}

	public get IsInt(): boolean {
		return this._fields.IsInt
	}

	public set IsInt(value: boolean) {
		this._fields.IsInt = value
	}

	public get IsUint(): boolean {
		return this._fields.IsUint
	}

	public set IsUint(value: boolean) {
		this._fields.IsUint = value
	}

	public get IsFloat(): boolean {
		return this._fields.IsFloat
	}

	public set IsFloat(value: boolean) {
		this._fields.IsFloat = value
	}

	public get IsComplex(): boolean {
		return this._fields.IsComplex
	}

	public set IsComplex(value: boolean) {
		this._fields.IsComplex = value
	}

	public get Int64(): bigint {
		return this._fields.Int64
	}

	public set Int64(value: bigint) {
		this._fields.Int64 = value
	}

	public get Uint64(): bigint {
		return this._fields.Uint64
	}

	public set Uint64(value: bigint) {
		this._fields.Uint64 = value
	}

	public get Float64(): number {
		return this._fields.Float64
	}

	public set Float64(value: number) {
		this._fields.Float64 = value
	}

	public get Complex128(): $.Complex {
		return this._fields.Complex128
	}

	public set Complex128(value: $.Complex) {
		this._fields.Complex128 = value
	}

	public get Text(): string {
		return this._fields.Text
	}

	public set Text(value: string) {
		this._fields.Text = value
	}

	public _fields: {
		NodeType: NodeType
		Pos: Pos
		tr: __goscript_parse.Tree | $.VarRef<__goscript_parse.Tree> | null
		IsInt: boolean
		IsUint: boolean
		IsFloat: boolean
		IsComplex: boolean
		Int64: bigint
		Uint64: bigint
		Float64: number
		Complex128: $.Complex
		Text: string
	}

	constructor(init?: Partial<{NodeType?: NodeType, Pos?: Pos, tr?: __goscript_parse.Tree | $.VarRef<__goscript_parse.Tree> | null, IsInt?: boolean, IsUint?: boolean, IsFloat?: boolean, IsComplex?: boolean, Int64?: bigint, Uint64?: bigint, Float64?: number, Complex128?: $.Complex, Text?: string}>, __goscriptValue?: boolean) {
		this._fields = {
			NodeType: init?.NodeType ?? (0 as NodeType),
			Pos: init?.Pos ?? (0 as Pos),
			tr: init?.tr ?? (null! as __goscript_parse.Tree | $.VarRef<__goscript_parse.Tree> | null),
			IsInt: init?.IsInt ?? (false as boolean),
			IsUint: init?.IsUint ?? (false as boolean),
			IsFloat: init?.IsFloat ?? (false as boolean),
			IsComplex: init?.IsComplex ?? (false as boolean),
			Int64: init?.Int64 ?? (0n as bigint),
			Uint64: init?.Uint64 ?? (0n as bigint),
			Float64: init?.Float64 ?? (0 as number),
			Complex128: init?.Complex128 ?? ($.complex(0, 0) as $.Complex),
			Text: init?.Text ?? ("" as string)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): NumberNode {
		return new NumberNode(this, true)
	}

	public __goscriptAssign(source: NumberNode): void {
		const target = this._fields
		const values = source._fields
		target.NodeType = values.NodeType
		target.Pos = values.Pos
		target.tr = values.tr
		target.IsInt = values.IsInt
		target.IsUint = values.IsUint
		target.IsFloat = values.IsFloat
		target.IsComplex = values.IsComplex
		target.Int64 = values.Int64
		target.Uint64 = values.Uint64
		target.Float64 = values.Float64
		target.Complex128 = values.Complex128
		target.Text = values.Text
	}

	public Copy(): Node | null {
		const n: NumberNode | $.VarRef<NumberNode> | null = this;
		let nn: NumberNode | $.VarRef<NumberNode> | null = new NumberNode()
		$.assignStruct($.pointerValue<NumberNode>(nn), $.pointerValue<NumberNode>(n))
		return $.interfaceValue<Node | null>(nn, "*parse.NumberNode", /* @__PURE__ */ $.pointerType("parse.NumberNode"))
	}

	public String(): string {
		const n: NumberNode | $.VarRef<NumberNode> | null = this;
		return $.pointerValue<NumberNode>(n).Text
	}

	public simplifyComplex(): void {
		let n: NumberNode | $.VarRef<NumberNode> | null = this;
		const n$: NumberNode = n == null ? $.pointerTarget<NumberNode>(n) : (n as any).__isVarRef === true ? (n as any).value : (n as any).__goValue === undefined ? (n as any) : $.pointerTarget<NumberNode>(n);
		;(n$ as NumberNode).IsFloat = $.imag((n$ as NumberNode).Complex128) == 0
		if ((n$ as NumberNode).IsFloat) {
			;(n$ as NumberNode).Float64 = $.real((n$ as NumberNode).Complex128);
			;(n$ as NumberNode).IsInt = globalThis.Number($.int64((n$ as NumberNode).Float64)) == (n$ as NumberNode).Float64
			if ((n$ as NumberNode).IsInt) {
				;(n$ as NumberNode).Int64 = $.int64((n$ as NumberNode).Float64)
			}
			;(n$ as NumberNode).IsUint = globalThis.Number($.uint64((n$ as NumberNode).Float64)) == (n$ as NumberNode).Float64
			if ((n$ as NumberNode).IsUint) {
				;(n$ as NumberNode).Uint64 = $.uint64((n$ as NumberNode).Float64)
			}
		}
	}

	public tree(): __goscript_parse.Tree | $.VarRef<__goscript_parse.Tree> | null {
		const n: NumberNode | $.VarRef<NumberNode> | null = this;
		return $.pointerValue<NumberNode>(n).tr
	}

	public writeTo(sb: strings.Builder | $.VarRef<strings.Builder> | null): void {
		const n: NumberNode | $.VarRef<NumberNode> | null = this;
		strings.Builder.prototype.WriteString.call($.pointerValue<strings.Builder>(sb), (n !== null && (n as any).__isVarRef !== true && (n as any).__goValue === undefined ? ((n as any) as NumberNode).String() : NumberNode.prototype.String.call(n)))
	}

	public Type(): any {
		return NodeType_Type(this.NodeType)
	}

	public Position(): any {
		return Pos_Position(this.Pos)
	}

	static __typeInfo = $.registerStructType(
		"parse.NumberNode",
		() => new NumberNode(),
		() => [$.methodSignature("Copy", [], ["parse.Node"], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("simplifyComplex", [], [], true), $.methodSignature("tree", [], [/* @__PURE__ */ $.pointerType("parse.Tree")], true), $.methodSignature("writeTo", [["sb", /* @__PURE__ */ $.pointerType("strings.Builder")]], [], true), $.methodSignature("Type", [], [/* @__PURE__ */ $.basicType("int", "parse.NodeType")]), $.methodSignature("Position", [], [/* @__PURE__ */ $.basicType("int", "parse.Pos")])],
		NumberNode,
		() => [/* @__PURE__ */ $.structField("NodeType", /* @__PURE__ */ $.basicType("int", "parse.NodeType"), [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Pos", /* @__PURE__ */ $.basicType("int", "parse.Pos"), [1], 8, true, { anonymous: true }), /* @__PURE__ */ $.structField("tr", /* @__PURE__ */ $.pointerType("parse.Tree"), [2], 16, false, { pkgPath: "text/template/parse" }), /* @__PURE__ */ $.structField("IsInt", /* @__PURE__ */ $.basicType("bool"), [3], 24, true), /* @__PURE__ */ $.structField("IsUint", /* @__PURE__ */ $.basicType("bool"), [4], 25, true), /* @__PURE__ */ $.structField("IsFloat", /* @__PURE__ */ $.basicType("bool"), [5], 26, true), /* @__PURE__ */ $.structField("IsComplex", /* @__PURE__ */ $.basicType("bool"), [6], 27, true), /* @__PURE__ */ $.structField("Int64", /* @__PURE__ */ $.basicType("int64"), [7], 32, true), /* @__PURE__ */ $.structField("Uint64", /* @__PURE__ */ $.basicType("uint64"), [8], 40, true), /* @__PURE__ */ $.structField("Float64", /* @__PURE__ */ $.basicType("float64"), [9], 48, true), /* @__PURE__ */ $.structField("Complex128", /* @__PURE__ */ $.basicType("complex128"), [10], 56, true), /* @__PURE__ */ $.structField("Text", /* @__PURE__ */ $.basicType("string"), [11], 72, true)]
	)
}

export class StringNode {
	public get NodeType(): NodeType {
		return this._fields.NodeType
	}

	public set NodeType(value: NodeType) {
		this._fields.NodeType = value
	}

	public get Pos(): Pos {
		return this._fields.Pos
	}

	public set Pos(value: Pos) {
		this._fields.Pos = value
	}

	public get tr(): __goscript_parse.Tree | $.VarRef<__goscript_parse.Tree> | null {
		return this._fields.tr
	}

	public set tr(value: __goscript_parse.Tree | $.VarRef<__goscript_parse.Tree> | null) {
		this._fields.tr = value
	}

	public get Quoted(): string {
		return this._fields.Quoted
	}

	public set Quoted(value: string) {
		this._fields.Quoted = value
	}

	public get Text(): string {
		return this._fields.Text
	}

	public set Text(value: string) {
		this._fields.Text = value
	}

	public _fields: {
		NodeType: NodeType
		Pos: Pos
		tr: __goscript_parse.Tree | $.VarRef<__goscript_parse.Tree> | null
		Quoted: string
		Text: string
	}

	constructor(init?: Partial<{NodeType?: NodeType, Pos?: Pos, tr?: __goscript_parse.Tree | $.VarRef<__goscript_parse.Tree> | null, Quoted?: string, Text?: string}>, __goscriptValue?: boolean) {
		this._fields = {
			NodeType: init?.NodeType ?? (0 as NodeType),
			Pos: init?.Pos ?? (0 as Pos),
			tr: init?.tr ?? (null! as __goscript_parse.Tree | $.VarRef<__goscript_parse.Tree> | null),
			Quoted: init?.Quoted ?? ("" as string),
			Text: init?.Text ?? ("" as string)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): StringNode {
		return new StringNode(this, true)
	}

	public __goscriptAssign(source: StringNode): void {
		const target = this._fields
		const values = source._fields
		target.NodeType = values.NodeType
		target.Pos = values.Pos
		target.tr = values.tr
		target.Quoted = values.Quoted
		target.Text = values.Text
	}

	public Copy(): Node | null {
		const s: StringNode | $.VarRef<StringNode> | null = this;
		const s$: StringNode = s == null ? $.pointerTarget<StringNode>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<StringNode>(s)
		return $.interfaceValue<Node | null>(__goscript_parse.Tree.prototype.newString.call((s$ as StringNode).tr, (s$ as StringNode).Pos, (s$ as StringNode).Quoted, (s$ as StringNode).Text), "*parse.StringNode", /* @__PURE__ */ $.pointerType("parse.StringNode"))
	}

	public String(): string {
		const s: StringNode | $.VarRef<StringNode> | null = this;
		return $.pointerValue<StringNode>(s).Quoted
	}

	public tree(): __goscript_parse.Tree | $.VarRef<__goscript_parse.Tree> | null {
		const s: StringNode | $.VarRef<StringNode> | null = this;
		return $.pointerValue<StringNode>(s).tr
	}

	public writeTo(sb: strings.Builder | $.VarRef<strings.Builder> | null): void {
		const s: StringNode | $.VarRef<StringNode> | null = this;
		strings.Builder.prototype.WriteString.call($.pointerValue<strings.Builder>(sb), (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as StringNode).String() : StringNode.prototype.String.call(s)))
	}

	public Type(): any {
		return NodeType_Type(this.NodeType)
	}

	public Position(): any {
		return Pos_Position(this.Pos)
	}

	static __typeInfo = $.registerStructType(
		"parse.StringNode",
		() => new StringNode(),
		() => [$.methodSignature("Copy", [], ["parse.Node"], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("tree", [], [/* @__PURE__ */ $.pointerType("parse.Tree")], true), $.methodSignature("writeTo", [["sb", /* @__PURE__ */ $.pointerType("strings.Builder")]], [], true), $.methodSignature("Type", [], [/* @__PURE__ */ $.basicType("int", "parse.NodeType")]), $.methodSignature("Position", [], [/* @__PURE__ */ $.basicType("int", "parse.Pos")])],
		StringNode,
		() => [/* @__PURE__ */ $.structField("NodeType", /* @__PURE__ */ $.basicType("int", "parse.NodeType"), [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Pos", /* @__PURE__ */ $.basicType("int", "parse.Pos"), [1], 8, true, { anonymous: true }), /* @__PURE__ */ $.structField("tr", /* @__PURE__ */ $.pointerType("parse.Tree"), [2], 16, false, { pkgPath: "text/template/parse" }), /* @__PURE__ */ $.structField("Quoted", /* @__PURE__ */ $.basicType("string"), [3], 24, true), /* @__PURE__ */ $.structField("Text", /* @__PURE__ */ $.basicType("string"), [4], 40, true)]
	)
}

export class endNode {
	public get NodeType(): NodeType {
		return this._fields.NodeType
	}

	public set NodeType(value: NodeType) {
		this._fields.NodeType = value
	}

	public get Pos(): Pos {
		return this._fields.Pos
	}

	public set Pos(value: Pos) {
		this._fields.Pos = value
	}

	public get tr(): __goscript_parse.Tree | $.VarRef<__goscript_parse.Tree> | null {
		return this._fields.tr
	}

	public set tr(value: __goscript_parse.Tree | $.VarRef<__goscript_parse.Tree> | null) {
		this._fields.tr = value
	}

	public _fields: {
		NodeType: NodeType
		Pos: Pos
		tr: __goscript_parse.Tree | $.VarRef<__goscript_parse.Tree> | null
	}

	constructor(init?: Partial<{NodeType?: NodeType, Pos?: Pos, tr?: __goscript_parse.Tree | $.VarRef<__goscript_parse.Tree> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			NodeType: init?.NodeType ?? (0 as NodeType),
			Pos: init?.Pos ?? (0 as Pos),
			tr: init?.tr ?? (null! as __goscript_parse.Tree | $.VarRef<__goscript_parse.Tree> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): endNode {
		return new endNode(this, true)
	}

	public __goscriptAssign(source: endNode): void {
		const target = this._fields
		const values = source._fields
		target.NodeType = values.NodeType
		target.Pos = values.Pos
		target.tr = values.tr
	}

	public Copy(): Node | null {
		const e: endNode | $.VarRef<endNode> | null = this;
		const e$: endNode = e == null ? $.pointerTarget<endNode>(e) : (e as any).__isVarRef === true ? (e as any).value : (e as any).__goValue === undefined ? (e as any) : $.pointerTarget<endNode>(e)
		return $.interfaceValue<Node | null>(__goscript_parse.Tree.prototype.newEnd.call((e$ as endNode).tr, (e$ as endNode).Pos), "*parse.endNode", /* @__PURE__ */ $.pointerType("parse.endNode"))
	}

	public String(): string {
		const e: endNode | $.VarRef<endNode> | null = this;
		const e$: endNode = e == null ? $.pointerTarget<endNode>(e) : (e as any).__isVarRef === true ? (e as any).value : (e as any).__goValue === undefined ? (e as any) : $.pointerTarget<endNode>(e)
		return $.concatString(($.concatString($.pointerValue<__goscript_parse.Tree>((e$ as endNode).tr).leftDelim, "end")), $.pointerValue<__goscript_parse.Tree>((e$ as endNode).tr).rightDelim)
	}

	public tree(): __goscript_parse.Tree | $.VarRef<__goscript_parse.Tree> | null {
		const e: endNode | $.VarRef<endNode> | null = this;
		return $.pointerValue<endNode>(e).tr
	}

	public writeTo(sb: strings.Builder | $.VarRef<strings.Builder> | null): void {
		const e: endNode | $.VarRef<endNode> | null = this;
		strings.Builder.prototype.WriteString.call($.pointerValue<strings.Builder>(sb), (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as endNode).String() : endNode.prototype.String.call(e)))
	}

	public Type(): any {
		return NodeType_Type(this.NodeType)
	}

	public Position(): any {
		return Pos_Position(this.Pos)
	}

	static __typeInfo = $.registerStructType(
		"parse.endNode",
		() => new endNode(),
		() => [$.methodSignature("Copy", [], ["parse.Node"], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("tree", [], [/* @__PURE__ */ $.pointerType("parse.Tree")], true), $.methodSignature("writeTo", [["sb", /* @__PURE__ */ $.pointerType("strings.Builder")]], [], true), $.methodSignature("Type", [], [/* @__PURE__ */ $.basicType("int", "parse.NodeType")]), $.methodSignature("Position", [], [/* @__PURE__ */ $.basicType("int", "parse.Pos")])],
		endNode,
		() => [/* @__PURE__ */ $.structField("NodeType", /* @__PURE__ */ $.basicType("int", "parse.NodeType"), [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Pos", /* @__PURE__ */ $.basicType("int", "parse.Pos"), [1], 8, true, { anonymous: true }), /* @__PURE__ */ $.structField("tr", /* @__PURE__ */ $.pointerType("parse.Tree"), [2], 16, false, { pkgPath: "text/template/parse" })]
	)
}

export class elseNode {
	public get NodeType(): NodeType {
		return this._fields.NodeType
	}

	public set NodeType(value: NodeType) {
		this._fields.NodeType = value
	}

	public get Pos(): Pos {
		return this._fields.Pos
	}

	public set Pos(value: Pos) {
		this._fields.Pos = value
	}

	public get tr(): __goscript_parse.Tree | $.VarRef<__goscript_parse.Tree> | null {
		return this._fields.tr
	}

	public set tr(value: __goscript_parse.Tree | $.VarRef<__goscript_parse.Tree> | null) {
		this._fields.tr = value
	}

	public get Line(): number {
		return this._fields.Line
	}

	public set Line(value: number) {
		this._fields.Line = value
	}

	public _fields: {
		NodeType: NodeType
		Pos: Pos
		tr: __goscript_parse.Tree | $.VarRef<__goscript_parse.Tree> | null
		Line: number
	}

	constructor(init?: Partial<{NodeType?: NodeType, Pos?: Pos, tr?: __goscript_parse.Tree | $.VarRef<__goscript_parse.Tree> | null, Line?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			NodeType: init?.NodeType ?? (0 as NodeType),
			Pos: init?.Pos ?? (0 as Pos),
			tr: init?.tr ?? (null! as __goscript_parse.Tree | $.VarRef<__goscript_parse.Tree> | null),
			Line: init?.Line ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): elseNode {
		return new elseNode(this, true)
	}

	public __goscriptAssign(source: elseNode): void {
		const target = this._fields
		const values = source._fields
		target.NodeType = values.NodeType
		target.Pos = values.Pos
		target.tr = values.tr
		target.Line = values.Line
	}

	public Copy(): Node | null {
		const e: elseNode | $.VarRef<elseNode> | null = this;
		const e$: elseNode = e == null ? $.pointerTarget<elseNode>(e) : (e as any).__isVarRef === true ? (e as any).value : (e as any).__goValue === undefined ? (e as any) : $.pointerTarget<elseNode>(e)
		return $.interfaceValue<Node | null>(__goscript_parse.Tree.prototype.newElse.call((e$ as elseNode).tr, (e$ as elseNode).Pos, (e$ as elseNode).Line), "*parse.elseNode", /* @__PURE__ */ $.pointerType("parse.elseNode"))
	}

	public String(): string {
		const e: elseNode | $.VarRef<elseNode> | null = this;
		const e$: elseNode = e == null ? $.pointerTarget<elseNode>(e) : (e as any).__isVarRef === true ? (e as any).value : (e as any).__goValue === undefined ? (e as any) : $.pointerTarget<elseNode>(e)
		return $.concatString(($.concatString($.pointerValue<__goscript_parse.Tree>((e$ as elseNode).tr).leftDelim, "else")), $.pointerValue<__goscript_parse.Tree>((e$ as elseNode).tr).rightDelim)
	}

	public Type(): NodeType {
		const e: elseNode | $.VarRef<elseNode> | null = this;
		return 6
	}

	public tree(): __goscript_parse.Tree | $.VarRef<__goscript_parse.Tree> | null {
		const e: elseNode | $.VarRef<elseNode> | null = this;
		return $.pointerValue<elseNode>(e).tr
	}

	public writeTo(sb: strings.Builder | $.VarRef<strings.Builder> | null): void {
		const e: elseNode | $.VarRef<elseNode> | null = this;
		strings.Builder.prototype.WriteString.call($.pointerValue<strings.Builder>(sb), (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as elseNode).String() : elseNode.prototype.String.call(e)))
	}

	public Position(): any {
		return Pos_Position(this.Pos)
	}

	static __typeInfo = $.registerStructType(
		"parse.elseNode",
		() => new elseNode(),
		() => [$.methodSignature("Copy", [], ["parse.Node"], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Type", [], [/* @__PURE__ */ $.basicType("int", "parse.NodeType")], true), $.methodSignature("tree", [], [/* @__PURE__ */ $.pointerType("parse.Tree")], true), $.methodSignature("writeTo", [["sb", /* @__PURE__ */ $.pointerType("strings.Builder")]], [], true), $.methodSignature("Position", [], [/* @__PURE__ */ $.basicType("int", "parse.Pos")])],
		elseNode,
		() => [/* @__PURE__ */ $.structField("NodeType", /* @__PURE__ */ $.basicType("int", "parse.NodeType"), [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Pos", /* @__PURE__ */ $.basicType("int", "parse.Pos"), [1], 8, true, { anonymous: true }), /* @__PURE__ */ $.structField("tr", /* @__PURE__ */ $.pointerType("parse.Tree"), [2], 16, false, { pkgPath: "text/template/parse" }), /* @__PURE__ */ $.structField("Line", /* @__PURE__ */ $.basicType("int"), [3], 24, true)]
	)
}

export class BranchNode {
	public get NodeType(): NodeType {
		return this._fields.NodeType
	}

	public set NodeType(value: NodeType) {
		this._fields.NodeType = value
	}

	public get Pos(): Pos {
		return this._fields.Pos
	}

	public set Pos(value: Pos) {
		this._fields.Pos = value
	}

	public get tr(): __goscript_parse.Tree | $.VarRef<__goscript_parse.Tree> | null {
		return this._fields.tr
	}

	public set tr(value: __goscript_parse.Tree | $.VarRef<__goscript_parse.Tree> | null) {
		this._fields.tr = value
	}

	public get Line(): number {
		return this._fields.Line
	}

	public set Line(value: number) {
		this._fields.Line = value
	}

	public get Pipe(): PipeNode | $.VarRef<PipeNode> | null {
		return this._fields.Pipe
	}

	public set Pipe(value: PipeNode | $.VarRef<PipeNode> | null) {
		this._fields.Pipe = value
	}

	public get List(): ListNode | $.VarRef<ListNode> | null {
		return this._fields.List
	}

	public set List(value: ListNode | $.VarRef<ListNode> | null) {
		this._fields.List = value
	}

	public get ElseList(): ListNode | $.VarRef<ListNode> | null {
		return this._fields.ElseList
	}

	public set ElseList(value: ListNode | $.VarRef<ListNode> | null) {
		this._fields.ElseList = value
	}

	public _fields: {
		NodeType: NodeType
		Pos: Pos
		tr: __goscript_parse.Tree | $.VarRef<__goscript_parse.Tree> | null
		Line: number
		Pipe: PipeNode | $.VarRef<PipeNode> | null
		List: ListNode | $.VarRef<ListNode> | null
		ElseList: ListNode | $.VarRef<ListNode> | null
	}

	constructor(init?: Partial<{NodeType?: NodeType, Pos?: Pos, tr?: __goscript_parse.Tree | $.VarRef<__goscript_parse.Tree> | null, Line?: number, Pipe?: PipeNode | $.VarRef<PipeNode> | null, List?: ListNode | $.VarRef<ListNode> | null, ElseList?: ListNode | $.VarRef<ListNode> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			NodeType: init?.NodeType ?? (0 as NodeType),
			Pos: init?.Pos ?? (0 as Pos),
			tr: init?.tr ?? (null! as __goscript_parse.Tree | $.VarRef<__goscript_parse.Tree> | null),
			Line: init?.Line ?? (0 as number),
			Pipe: init?.Pipe ?? (null! as PipeNode | $.VarRef<PipeNode> | null),
			List: init?.List ?? (null! as ListNode | $.VarRef<ListNode> | null),
			ElseList: init?.ElseList ?? (null! as ListNode | $.VarRef<ListNode> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): BranchNode {
		return new BranchNode(this, true)
	}

	public __goscriptAssign(source: BranchNode): void {
		const target = this._fields
		const values = source._fields
		target.NodeType = values.NodeType
		target.Pos = values.Pos
		target.tr = values.tr
		target.Line = values.Line
		target.Pipe = values.Pipe
		target.List = values.List
		target.ElseList = values.ElseList
	}

	public Copy(): Node | null {
		const b: BranchNode | $.VarRef<BranchNode> | null = this;
		const b$: BranchNode = b == null ? $.pointerTarget<BranchNode>(b) : (b as any).__isVarRef === true ? (b as any).value : (b as any).__goValue === undefined ? (b as any) : $.pointerTarget<BranchNode>(b)
		switch ((b$ as BranchNode).NodeType) {
			case 10:
			{
				return $.interfaceValue<Node | null>(__goscript_parse.Tree.prototype.newIf.call((b$ as BranchNode).tr, (b$ as BranchNode).Pos, (b$ as BranchNode).Line, (b$ as BranchNode).Pipe, (b$ as BranchNode).List, (b$ as BranchNode).ElseList), "*parse.IfNode", /* @__PURE__ */ $.pointerType("parse.IfNode"))
				break
			}
			case 15:
			{
				return $.interfaceValue<Node | null>(__goscript_parse.Tree.prototype.newRange.call((b$ as BranchNode).tr, (b$ as BranchNode).Pos, (b$ as BranchNode).Line, (b$ as BranchNode).Pipe, (b$ as BranchNode).List, (b$ as BranchNode).ElseList), "*parse.RangeNode", /* @__PURE__ */ $.pointerType("parse.RangeNode"))
				break
			}
			case 19:
			{
				return $.interfaceValue<Node | null>(__goscript_parse.Tree.prototype.newWith.call((b$ as BranchNode).tr, (b$ as BranchNode).Pos, (b$ as BranchNode).Line, (b$ as BranchNode).Pipe, (b$ as BranchNode).List, (b$ as BranchNode).ElseList), "*parse.WithNode", /* @__PURE__ */ $.pointerType("parse.WithNode"))
				break
			}
			default:
			{
				$.panic("unknown branch type")
				break
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async String(): globalThis.Promise<string> {
		const b: BranchNode | $.VarRef<BranchNode> | null = this;
		let sb: $.VarRef<strings.Builder> = $.varRef($.markAsStructValue(new strings.Builder()))
		await (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as BranchNode).writeTo(sb) : BranchNode.prototype.writeTo.call(b, sb))
		return sb.value.String()
	}

	public tree(): __goscript_parse.Tree | $.VarRef<__goscript_parse.Tree> | null {
		const b: BranchNode | $.VarRef<BranchNode> | null = this;
		return $.pointerValue<BranchNode>(b).tr
	}

	public async writeTo(sb: strings.Builder | $.VarRef<strings.Builder> | null): globalThis.Promise<void> {
		const b: BranchNode | $.VarRef<BranchNode> | null = this;
		const b$: BranchNode = b == null ? $.pointerTarget<BranchNode>(b) : (b as any).__isVarRef === true ? (b as any).value : (b as any).__goValue === undefined ? (b as any) : $.pointerTarget<BranchNode>(b)
		let name = ""
		switch ((b$ as BranchNode).NodeType) {
			case 10:
			{
				name = "if"
				break
			}
			case 15:
			{
				name = "range"
				break
			}
			case 19:
			{
				name = "with"
				break
			}
			default:
			{
				$.panic("unknown branch type")
				break
			}
		}
		strings.Builder.prototype.WriteString.call($.pointerValue<strings.Builder>(sb), $.pointerValue<__goscript_parse.Tree>((b$ as BranchNode).tr).leftDelim)
		strings.Builder.prototype.WriteString.call($.pointerValue<strings.Builder>(sb), name)
		strings.Builder.prototype.WriteByte.call($.pointerValue<strings.Builder>(sb), 32)
		await PipeNode.prototype.writeTo.call((b$ as BranchNode).Pipe, sb)
		strings.Builder.prototype.WriteString.call($.pointerValue<strings.Builder>(sb), $.pointerValue<__goscript_parse.Tree>((b$ as BranchNode).tr).rightDelim)
		await ListNode.prototype.writeTo.call((b$ as BranchNode).List, sb)
		if ((b$ as BranchNode).ElseList != null) {
			strings.Builder.prototype.WriteString.call($.pointerValue<strings.Builder>(sb), $.pointerValue<__goscript_parse.Tree>((b$ as BranchNode).tr).leftDelim)
			strings.Builder.prototype.WriteString.call($.pointerValue<strings.Builder>(sb), "else")
			strings.Builder.prototype.WriteString.call($.pointerValue<strings.Builder>(sb), $.pointerValue<__goscript_parse.Tree>((b$ as BranchNode).tr).rightDelim)
			await ListNode.prototype.writeTo.call((b$ as BranchNode).ElseList, sb)
		}
		strings.Builder.prototype.WriteString.call($.pointerValue<strings.Builder>(sb), $.pointerValue<__goscript_parse.Tree>((b$ as BranchNode).tr).leftDelim)
		strings.Builder.prototype.WriteString.call($.pointerValue<strings.Builder>(sb), "end")
		strings.Builder.prototype.WriteString.call($.pointerValue<strings.Builder>(sb), $.pointerValue<__goscript_parse.Tree>((b$ as BranchNode).tr).rightDelim)
	}

	public Type(): any {
		return NodeType_Type(this.NodeType)
	}

	public Position(): any {
		return Pos_Position(this.Pos)
	}

	static __typeInfo = $.registerStructType(
		"parse.BranchNode",
		() => new BranchNode(),
		() => [$.methodSignature("Copy", [], ["parse.Node"], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("tree", [], [/* @__PURE__ */ $.pointerType("parse.Tree")], true), $.methodSignature("writeTo", [["sb", /* @__PURE__ */ $.pointerType("strings.Builder")]], [], true), $.methodSignature("Type", [], [/* @__PURE__ */ $.basicType("int", "parse.NodeType")]), $.methodSignature("Position", [], [/* @__PURE__ */ $.basicType("int", "parse.Pos")])],
		BranchNode,
		() => [/* @__PURE__ */ $.structField("NodeType", /* @__PURE__ */ $.basicType("int", "parse.NodeType"), [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Pos", /* @__PURE__ */ $.basicType("int", "parse.Pos"), [1], 8, true, { anonymous: true }), /* @__PURE__ */ $.structField("tr", /* @__PURE__ */ $.pointerType("parse.Tree"), [2], 16, false, { pkgPath: "text/template/parse" }), /* @__PURE__ */ $.structField("Line", /* @__PURE__ */ $.basicType("int"), [3], 24, true), /* @__PURE__ */ $.structField("Pipe", /* @__PURE__ */ $.pointerType("parse.PipeNode"), [4], 32, true), /* @__PURE__ */ $.structField("List", /* @__PURE__ */ $.pointerType("parse.ListNode"), [5], 40, true), /* @__PURE__ */ $.structField("ElseList", /* @__PURE__ */ $.pointerType("parse.ListNode"), [6], 48, true)]
	)
}

export class IfNode {
	public get BranchNode(): BranchNode {
		return this._fields.BranchNode
	}

	public set BranchNode(value: BranchNode) {
		this._fields.BranchNode = value
	}

	public _fields: {
		BranchNode: BranchNode
	}

	constructor(init?: Partial<{BranchNode?: BranchNode}>, __goscriptValue?: boolean) {
		this._fields = {
			BranchNode: init?.BranchNode ? init.BranchNode.clone() : new BranchNode(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): IfNode {
		return new IfNode(this, true)
	}

	public __goscriptAssign(source: IfNode): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.BranchNode, values.BranchNode)
	}

	public Copy(): Node | null {
		const i: IfNode | $.VarRef<IfNode> | null = this;
		const i$: IfNode = i == null ? $.pointerTarget<IfNode>(i) : (i as any).__isVarRef === true ? (i as any).value : (i as any).__goValue === undefined ? (i as any) : $.pointerTarget<IfNode>(i)
		return $.interfaceValue<Node | null>(__goscript_parse.Tree.prototype.newIf.call((i$ as IfNode).BranchNode.tr, (i$ as IfNode).BranchNode.Pos, (i$ as IfNode).BranchNode.Line, PipeNode.prototype.CopyPipe.call((i$ as IfNode).BranchNode.Pipe), ListNode.prototype.CopyList.call((i$ as IfNode).BranchNode.List), ListNode.prototype.CopyList.call((i$ as IfNode).BranchNode.ElseList)), "*parse.IfNode", /* @__PURE__ */ $.pointerType("parse.IfNode"))
	}

	public Position(): any {
		return Pos_Position($.pointerValue<BranchNode>(this.BranchNode).Pos)
	}

	public async String(): globalThis.Promise<any> {
		return await $.pointerValue<BranchNode>(this.BranchNode).String()
	}

	public Type(): any {
		return NodeType_Type($.pointerValue<BranchNode>(this.BranchNode).NodeType)
	}

	public tree(): any {
		return $.pointerValue<BranchNode>(this.BranchNode).tree()
	}

	public async writeTo(sb: any): globalThis.Promise<any> {
		return await $.pointerValue<BranchNode>(this.BranchNode).writeTo(sb)
	}

	static __typeInfo = $.registerStructType(
		"parse.IfNode",
		() => new IfNode(),
		() => [$.methodSignature("Copy", [], ["parse.Node"], true), $.methodSignature("Position", [], [/* @__PURE__ */ $.basicType("int", "parse.Pos")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Type", [], [/* @__PURE__ */ $.basicType("int", "parse.NodeType")]), $.methodSignature("tree", [], [/* @__PURE__ */ $.pointerType("parse.Tree")], true), $.methodSignature("writeTo", [["sb", /* @__PURE__ */ $.pointerType("strings.Builder")]], [], true)],
		IfNode,
		() => [/* @__PURE__ */ $.structField("BranchNode", "parse.BranchNode", [0], 0, true, { anonymous: true })]
	)
}

export class BreakNode {
	public get tr(): __goscript_parse.Tree | $.VarRef<__goscript_parse.Tree> | null {
		return this._fields.tr
	}

	public set tr(value: __goscript_parse.Tree | $.VarRef<__goscript_parse.Tree> | null) {
		this._fields.tr = value
	}

	public get NodeType(): NodeType {
		return this._fields.NodeType
	}

	public set NodeType(value: NodeType) {
		this._fields.NodeType = value
	}

	public get Pos(): Pos {
		return this._fields.Pos
	}

	public set Pos(value: Pos) {
		this._fields.Pos = value
	}

	public get Line(): number {
		return this._fields.Line
	}

	public set Line(value: number) {
		this._fields.Line = value
	}

	public _fields: {
		tr: __goscript_parse.Tree | $.VarRef<__goscript_parse.Tree> | null
		NodeType: NodeType
		Pos: Pos
		Line: number
	}

	constructor(init?: Partial<{tr?: __goscript_parse.Tree | $.VarRef<__goscript_parse.Tree> | null, NodeType?: NodeType, Pos?: Pos, Line?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			tr: init?.tr ?? (null! as __goscript_parse.Tree | $.VarRef<__goscript_parse.Tree> | null),
			NodeType: init?.NodeType ?? (0 as NodeType),
			Pos: init?.Pos ?? (0 as Pos),
			Line: init?.Line ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): BreakNode {
		return new BreakNode(this, true)
	}

	public __goscriptAssign(source: BreakNode): void {
		const target = this._fields
		const values = source._fields
		target.tr = values.tr
		target.NodeType = values.NodeType
		target.Pos = values.Pos
		target.Line = values.Line
	}

	public Copy(): Node | null {
		const b: BreakNode | $.VarRef<BreakNode> | null = this;
		const b$: BreakNode = b == null ? $.pointerTarget<BreakNode>(b) : (b as any).__isVarRef === true ? (b as any).value : (b as any).__goValue === undefined ? (b as any) : $.pointerTarget<BreakNode>(b)
		return $.interfaceValue<Node | null>(__goscript_parse.Tree.prototype.newBreak.call((b$ as BreakNode).tr, (b$ as BreakNode).Pos, (b$ as BreakNode).Line), "*parse.BreakNode", /* @__PURE__ */ $.pointerType("parse.BreakNode"))
	}

	public String(): string {
		const b: BreakNode | $.VarRef<BreakNode> | null = this;
		const b$: BreakNode = b == null ? $.pointerTarget<BreakNode>(b) : (b as any).__isVarRef === true ? (b as any).value : (b as any).__goValue === undefined ? (b as any) : $.pointerTarget<BreakNode>(b)
		return $.concatString(($.concatString($.pointerValue<__goscript_parse.Tree>((b$ as BreakNode).tr).leftDelim, "break")), $.pointerValue<__goscript_parse.Tree>((b$ as BreakNode).tr).rightDelim)
	}

	public tree(): __goscript_parse.Tree | $.VarRef<__goscript_parse.Tree> | null {
		const b: BreakNode | $.VarRef<BreakNode> | null = this;
		return $.pointerValue<BreakNode>(b).tr
	}

	public writeTo(sb: strings.Builder | $.VarRef<strings.Builder> | null): void {
		const b: BreakNode | $.VarRef<BreakNode> | null = this;
		strings.Builder.prototype.WriteString.call($.pointerValue<strings.Builder>(sb), (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as BreakNode).String() : BreakNode.prototype.String.call(b)))
	}

	public Type(): any {
		return NodeType_Type(this.NodeType)
	}

	public Position(): any {
		return Pos_Position(this.Pos)
	}

	static __typeInfo = $.registerStructType(
		"parse.BreakNode",
		() => new BreakNode(),
		() => [$.methodSignature("Copy", [], ["parse.Node"], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("tree", [], [/* @__PURE__ */ $.pointerType("parse.Tree")], true), $.methodSignature("writeTo", [["sb", /* @__PURE__ */ $.pointerType("strings.Builder")]], [], true), $.methodSignature("Type", [], [/* @__PURE__ */ $.basicType("int", "parse.NodeType")]), $.methodSignature("Position", [], [/* @__PURE__ */ $.basicType("int", "parse.Pos")])],
		BreakNode,
		() => [/* @__PURE__ */ $.structField("tr", /* @__PURE__ */ $.pointerType("parse.Tree"), [0], 0, false, { pkgPath: "text/template/parse" }), /* @__PURE__ */ $.structField("NodeType", /* @__PURE__ */ $.basicType("int", "parse.NodeType"), [1], 8, true, { anonymous: true }), /* @__PURE__ */ $.structField("Pos", /* @__PURE__ */ $.basicType("int", "parse.Pos"), [2], 16, true, { anonymous: true }), /* @__PURE__ */ $.structField("Line", /* @__PURE__ */ $.basicType("int"), [3], 24, true)]
	)
}

export class ContinueNode {
	public get tr(): __goscript_parse.Tree | $.VarRef<__goscript_parse.Tree> | null {
		return this._fields.tr
	}

	public set tr(value: __goscript_parse.Tree | $.VarRef<__goscript_parse.Tree> | null) {
		this._fields.tr = value
	}

	public get NodeType(): NodeType {
		return this._fields.NodeType
	}

	public set NodeType(value: NodeType) {
		this._fields.NodeType = value
	}

	public get Pos(): Pos {
		return this._fields.Pos
	}

	public set Pos(value: Pos) {
		this._fields.Pos = value
	}

	public get Line(): number {
		return this._fields.Line
	}

	public set Line(value: number) {
		this._fields.Line = value
	}

	public _fields: {
		tr: __goscript_parse.Tree | $.VarRef<__goscript_parse.Tree> | null
		NodeType: NodeType
		Pos: Pos
		Line: number
	}

	constructor(init?: Partial<{tr?: __goscript_parse.Tree | $.VarRef<__goscript_parse.Tree> | null, NodeType?: NodeType, Pos?: Pos, Line?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			tr: init?.tr ?? (null! as __goscript_parse.Tree | $.VarRef<__goscript_parse.Tree> | null),
			NodeType: init?.NodeType ?? (0 as NodeType),
			Pos: init?.Pos ?? (0 as Pos),
			Line: init?.Line ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ContinueNode {
		return new ContinueNode(this, true)
	}

	public __goscriptAssign(source: ContinueNode): void {
		const target = this._fields
		const values = source._fields
		target.tr = values.tr
		target.NodeType = values.NodeType
		target.Pos = values.Pos
		target.Line = values.Line
	}

	public Copy(): Node | null {
		const c: ContinueNode | $.VarRef<ContinueNode> | null = this;
		const c$: ContinueNode = c == null ? $.pointerTarget<ContinueNode>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<ContinueNode>(c)
		return $.interfaceValue<Node | null>(__goscript_parse.Tree.prototype.newContinue.call((c$ as ContinueNode).tr, (c$ as ContinueNode).Pos, (c$ as ContinueNode).Line), "*parse.ContinueNode", /* @__PURE__ */ $.pointerType("parse.ContinueNode"))
	}

	public String(): string {
		const c: ContinueNode | $.VarRef<ContinueNode> | null = this;
		const c$: ContinueNode = c == null ? $.pointerTarget<ContinueNode>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<ContinueNode>(c)
		return $.concatString(($.concatString($.pointerValue<__goscript_parse.Tree>((c$ as ContinueNode).tr).leftDelim, "continue")), $.pointerValue<__goscript_parse.Tree>((c$ as ContinueNode).tr).rightDelim)
	}

	public tree(): __goscript_parse.Tree | $.VarRef<__goscript_parse.Tree> | null {
		const c: ContinueNode | $.VarRef<ContinueNode> | null = this;
		return $.pointerValue<ContinueNode>(c).tr
	}

	public writeTo(sb: strings.Builder | $.VarRef<strings.Builder> | null): void {
		const c: ContinueNode | $.VarRef<ContinueNode> | null = this;
		strings.Builder.prototype.WriteString.call($.pointerValue<strings.Builder>(sb), (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as ContinueNode).String() : ContinueNode.prototype.String.call(c)))
	}

	public Type(): any {
		return NodeType_Type(this.NodeType)
	}

	public Position(): any {
		return Pos_Position(this.Pos)
	}

	static __typeInfo = $.registerStructType(
		"parse.ContinueNode",
		() => new ContinueNode(),
		() => [$.methodSignature("Copy", [], ["parse.Node"], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("tree", [], [/* @__PURE__ */ $.pointerType("parse.Tree")], true), $.methodSignature("writeTo", [["sb", /* @__PURE__ */ $.pointerType("strings.Builder")]], [], true), $.methodSignature("Type", [], [/* @__PURE__ */ $.basicType("int", "parse.NodeType")]), $.methodSignature("Position", [], [/* @__PURE__ */ $.basicType("int", "parse.Pos")])],
		ContinueNode,
		() => [/* @__PURE__ */ $.structField("tr", /* @__PURE__ */ $.pointerType("parse.Tree"), [0], 0, false, { pkgPath: "text/template/parse" }), /* @__PURE__ */ $.structField("NodeType", /* @__PURE__ */ $.basicType("int", "parse.NodeType"), [1], 8, true, { anonymous: true }), /* @__PURE__ */ $.structField("Pos", /* @__PURE__ */ $.basicType("int", "parse.Pos"), [2], 16, true, { anonymous: true }), /* @__PURE__ */ $.structField("Line", /* @__PURE__ */ $.basicType("int"), [3], 24, true)]
	)
}

export class RangeNode {
	public get BranchNode(): BranchNode {
		return this._fields.BranchNode
	}

	public set BranchNode(value: BranchNode) {
		this._fields.BranchNode = value
	}

	public _fields: {
		BranchNode: BranchNode
	}

	constructor(init?: Partial<{BranchNode?: BranchNode}>, __goscriptValue?: boolean) {
		this._fields = {
			BranchNode: init?.BranchNode ? init.BranchNode.clone() : new BranchNode(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): RangeNode {
		return new RangeNode(this, true)
	}

	public __goscriptAssign(source: RangeNode): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.BranchNode, values.BranchNode)
	}

	public Copy(): Node | null {
		const r: RangeNode | $.VarRef<RangeNode> | null = this;
		const r$: RangeNode = r == null ? $.pointerTarget<RangeNode>(r) : (r as any).__isVarRef === true ? (r as any).value : (r as any).__goValue === undefined ? (r as any) : $.pointerTarget<RangeNode>(r)
		return $.interfaceValue<Node | null>(__goscript_parse.Tree.prototype.newRange.call((r$ as RangeNode).BranchNode.tr, (r$ as RangeNode).BranchNode.Pos, (r$ as RangeNode).BranchNode.Line, PipeNode.prototype.CopyPipe.call((r$ as RangeNode).BranchNode.Pipe), ListNode.prototype.CopyList.call((r$ as RangeNode).BranchNode.List), ListNode.prototype.CopyList.call((r$ as RangeNode).BranchNode.ElseList)), "*parse.RangeNode", /* @__PURE__ */ $.pointerType("parse.RangeNode"))
	}

	public Position(): any {
		return Pos_Position($.pointerValue<BranchNode>(this.BranchNode).Pos)
	}

	public async String(): globalThis.Promise<any> {
		return await $.pointerValue<BranchNode>(this.BranchNode).String()
	}

	public Type(): any {
		return NodeType_Type($.pointerValue<BranchNode>(this.BranchNode).NodeType)
	}

	public tree(): any {
		return $.pointerValue<BranchNode>(this.BranchNode).tree()
	}

	public async writeTo(sb: any): globalThis.Promise<any> {
		return await $.pointerValue<BranchNode>(this.BranchNode).writeTo(sb)
	}

	static __typeInfo = $.registerStructType(
		"parse.RangeNode",
		() => new RangeNode(),
		() => [$.methodSignature("Copy", [], ["parse.Node"], true), $.methodSignature("Position", [], [/* @__PURE__ */ $.basicType("int", "parse.Pos")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Type", [], [/* @__PURE__ */ $.basicType("int", "parse.NodeType")]), $.methodSignature("tree", [], [/* @__PURE__ */ $.pointerType("parse.Tree")], true), $.methodSignature("writeTo", [["sb", /* @__PURE__ */ $.pointerType("strings.Builder")]], [], true)],
		RangeNode,
		() => [/* @__PURE__ */ $.structField("BranchNode", "parse.BranchNode", [0], 0, true, { anonymous: true })]
	)
}

export class WithNode {
	public get BranchNode(): BranchNode {
		return this._fields.BranchNode
	}

	public set BranchNode(value: BranchNode) {
		this._fields.BranchNode = value
	}

	public _fields: {
		BranchNode: BranchNode
	}

	constructor(init?: Partial<{BranchNode?: BranchNode}>, __goscriptValue?: boolean) {
		this._fields = {
			BranchNode: init?.BranchNode ? init.BranchNode.clone() : new BranchNode(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): WithNode {
		return new WithNode(this, true)
	}

	public __goscriptAssign(source: WithNode): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.BranchNode, values.BranchNode)
	}

	public Copy(): Node | null {
		const w: WithNode | $.VarRef<WithNode> | null = this;
		const w$: WithNode = w == null ? $.pointerTarget<WithNode>(w) : (w as any).__isVarRef === true ? (w as any).value : (w as any).__goValue === undefined ? (w as any) : $.pointerTarget<WithNode>(w)
		return $.interfaceValue<Node | null>(__goscript_parse.Tree.prototype.newWith.call((w$ as WithNode).BranchNode.tr, (w$ as WithNode).BranchNode.Pos, (w$ as WithNode).BranchNode.Line, PipeNode.prototype.CopyPipe.call((w$ as WithNode).BranchNode.Pipe), ListNode.prototype.CopyList.call((w$ as WithNode).BranchNode.List), ListNode.prototype.CopyList.call((w$ as WithNode).BranchNode.ElseList)), "*parse.WithNode", /* @__PURE__ */ $.pointerType("parse.WithNode"))
	}

	public Position(): any {
		return Pos_Position($.pointerValue<BranchNode>(this.BranchNode).Pos)
	}

	public async String(): globalThis.Promise<any> {
		return await $.pointerValue<BranchNode>(this.BranchNode).String()
	}

	public Type(): any {
		return NodeType_Type($.pointerValue<BranchNode>(this.BranchNode).NodeType)
	}

	public tree(): any {
		return $.pointerValue<BranchNode>(this.BranchNode).tree()
	}

	public async writeTo(sb: any): globalThis.Promise<any> {
		return await $.pointerValue<BranchNode>(this.BranchNode).writeTo(sb)
	}

	static __typeInfo = $.registerStructType(
		"parse.WithNode",
		() => new WithNode(),
		() => [$.methodSignature("Copy", [], ["parse.Node"], true), $.methodSignature("Position", [], [/* @__PURE__ */ $.basicType("int", "parse.Pos")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Type", [], [/* @__PURE__ */ $.basicType("int", "parse.NodeType")]), $.methodSignature("tree", [], [/* @__PURE__ */ $.pointerType("parse.Tree")], true), $.methodSignature("writeTo", [["sb", /* @__PURE__ */ $.pointerType("strings.Builder")]], [], true)],
		WithNode,
		() => [/* @__PURE__ */ $.structField("BranchNode", "parse.BranchNode", [0], 0, true, { anonymous: true })]
	)
}

export class TemplateNode {
	public get NodeType(): NodeType {
		return this._fields.NodeType
	}

	public set NodeType(value: NodeType) {
		this._fields.NodeType = value
	}

	public get Pos(): Pos {
		return this._fields.Pos
	}

	public set Pos(value: Pos) {
		this._fields.Pos = value
	}

	public get tr(): __goscript_parse.Tree | $.VarRef<__goscript_parse.Tree> | null {
		return this._fields.tr
	}

	public set tr(value: __goscript_parse.Tree | $.VarRef<__goscript_parse.Tree> | null) {
		this._fields.tr = value
	}

	public get Line(): number {
		return this._fields.Line
	}

	public set Line(value: number) {
		this._fields.Line = value
	}

	public get Name(): string {
		return this._fields.Name
	}

	public set Name(value: string) {
		this._fields.Name = value
	}

	public get Pipe(): PipeNode | $.VarRef<PipeNode> | null {
		return this._fields.Pipe
	}

	public set Pipe(value: PipeNode | $.VarRef<PipeNode> | null) {
		this._fields.Pipe = value
	}

	public _fields: {
		NodeType: NodeType
		Pos: Pos
		tr: __goscript_parse.Tree | $.VarRef<__goscript_parse.Tree> | null
		Line: number
		Name: string
		Pipe: PipeNode | $.VarRef<PipeNode> | null
	}

	constructor(init?: Partial<{NodeType?: NodeType, Pos?: Pos, tr?: __goscript_parse.Tree | $.VarRef<__goscript_parse.Tree> | null, Line?: number, Name?: string, Pipe?: PipeNode | $.VarRef<PipeNode> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			NodeType: init?.NodeType ?? (0 as NodeType),
			Pos: init?.Pos ?? (0 as Pos),
			tr: init?.tr ?? (null! as __goscript_parse.Tree | $.VarRef<__goscript_parse.Tree> | null),
			Line: init?.Line ?? (0 as number),
			Name: init?.Name ?? ("" as string),
			Pipe: init?.Pipe ?? (null! as PipeNode | $.VarRef<PipeNode> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): TemplateNode {
		return new TemplateNode(this, true)
	}

	public __goscriptAssign(source: TemplateNode): void {
		const target = this._fields
		const values = source._fields
		target.NodeType = values.NodeType
		target.Pos = values.Pos
		target.tr = values.tr
		target.Line = values.Line
		target.Name = values.Name
		target.Pipe = values.Pipe
	}

	public Copy(): Node | null {
		const t: TemplateNode | $.VarRef<TemplateNode> | null = this;
		const t$: TemplateNode = t == null ? $.pointerTarget<TemplateNode>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<TemplateNode>(t)
		return $.interfaceValue<Node | null>(__goscript_parse.Tree.prototype.newTemplate.call((t$ as TemplateNode).tr, (t$ as TemplateNode).Pos, (t$ as TemplateNode).Line, (t$ as TemplateNode).Name, PipeNode.prototype.CopyPipe.call((t$ as TemplateNode).Pipe)), "*parse.TemplateNode", /* @__PURE__ */ $.pointerType("parse.TemplateNode"))
	}

	public async String(): globalThis.Promise<string> {
		const t: TemplateNode | $.VarRef<TemplateNode> | null = this;
		let sb: $.VarRef<strings.Builder> = $.varRef($.markAsStructValue(new strings.Builder()))
		await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as TemplateNode).writeTo(sb) : TemplateNode.prototype.writeTo.call(t, sb))
		return sb.value.String()
	}

	public tree(): __goscript_parse.Tree | $.VarRef<__goscript_parse.Tree> | null {
		const t: TemplateNode | $.VarRef<TemplateNode> | null = this;
		return $.pointerValue<TemplateNode>(t).tr
	}

	public async writeTo(sb: strings.Builder | $.VarRef<strings.Builder> | null): globalThis.Promise<void> {
		const t: TemplateNode | $.VarRef<TemplateNode> | null = this;
		const t$: TemplateNode = t == null ? $.pointerTarget<TemplateNode>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<TemplateNode>(t)
		strings.Builder.prototype.WriteString.call($.pointerValue<strings.Builder>(sb), $.pointerValue<__goscript_parse.Tree>((t$ as TemplateNode).tr).leftDelim)
		strings.Builder.prototype.WriteString.call($.pointerValue<strings.Builder>(sb), "template ")
		strings.Builder.prototype.WriteString.call($.pointerValue<strings.Builder>(sb), strconv.Quote((t$ as TemplateNode).Name))
		if ((t$ as TemplateNode).Pipe != null) {
			strings.Builder.prototype.WriteByte.call($.pointerValue<strings.Builder>(sb), 32)
			await PipeNode.prototype.writeTo.call((t$ as TemplateNode).Pipe, sb)
		}
		strings.Builder.prototype.WriteString.call($.pointerValue<strings.Builder>(sb), $.pointerValue<__goscript_parse.Tree>((t$ as TemplateNode).tr).rightDelim)
	}

	public Type(): any {
		return NodeType_Type(this.NodeType)
	}

	public Position(): any {
		return Pos_Position(this.Pos)
	}

	static __typeInfo = $.registerStructType(
		"parse.TemplateNode",
		() => new TemplateNode(),
		() => [$.methodSignature("Copy", [], ["parse.Node"], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("tree", [], [/* @__PURE__ */ $.pointerType("parse.Tree")], true), $.methodSignature("writeTo", [["sb", /* @__PURE__ */ $.pointerType("strings.Builder")]], [], true), $.methodSignature("Type", [], [/* @__PURE__ */ $.basicType("int", "parse.NodeType")]), $.methodSignature("Position", [], [/* @__PURE__ */ $.basicType("int", "parse.Pos")])],
		TemplateNode,
		() => [/* @__PURE__ */ $.structField("NodeType", /* @__PURE__ */ $.basicType("int", "parse.NodeType"), [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Pos", /* @__PURE__ */ $.basicType("int", "parse.Pos"), [1], 8, true, { anonymous: true }), /* @__PURE__ */ $.structField("tr", /* @__PURE__ */ $.pointerType("parse.Tree"), [2], 16, false, { pkgPath: "text/template/parse" }), /* @__PURE__ */ $.structField("Line", /* @__PURE__ */ $.basicType("int"), [3], 24, true), /* @__PURE__ */ $.structField("Name", /* @__PURE__ */ $.basicType("string"), [4], 32, true), /* @__PURE__ */ $.structField("Pipe", /* @__PURE__ */ $.pointerType("parse.PipeNode"), [5], 48, true)]
	)
}

export const NodeText: NodeType = 0

export const NodeAction: NodeType = 1

export const NodeBool: NodeType = 2

export const NodeChain: NodeType = 3

export const NodeCommand: NodeType = 4

export const NodeDot: NodeType = 5

export const nodeElse: NodeType = 6

export const nodeEnd: NodeType = 7

export const NodeField: NodeType = 8

export const NodeIdentifier: NodeType = 9

export const NodeIf: NodeType = 10

export const NodeList: NodeType = 11

export const NodeNil: NodeType = 12

export const NodeNumber: NodeType = 13

export const NodePipe: NodeType = 14

export const NodeRange: NodeType = 15

export const NodeString: NodeType = 16

export const NodeTemplate: NodeType = 17

export const NodeVariable: NodeType = 18

export const NodeWith: NodeType = 19

export const NodeComment: NodeType = 20

export const NodeBreak: NodeType = 21

export const NodeContinue: NodeType = 22

export let textFormat: string = "%s"

export function __goscript_set_textFormat(__goscriptValue: string): void {
	textFormat = __goscriptValue
}

export function Pos_Position(p: Pos): Pos {
	return p
}

export function NodeType_Type(t: NodeType): NodeType {
	return t
}

export function NewIdentifier(ident: string): IdentifierNode | $.VarRef<IdentifierNode> | null {
	return new IdentifierNode({NodeType: 9, Ident: ident})
}

var __goscriptAwait: any
