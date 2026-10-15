// Generated file based on graph.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as reflect from "@goscript/reflect/index.js"
import "@goscript/fmt/index.js"
import "@goscript/reflect/index.js"

$.registerTypePackagePath("go.uber.org/dig/internal/dot", ["dot.ErrorType", "dot.CtorID", "dot.Ctor", "dot.nodeKey", "dot.Node", "dot.Param", "dot.Result", "dot.Group", "dot.Graph", "dot.FailedNodes"])

export type ErrorType = number

$.registerNamedValueType(
	"dot.ErrorType",
	{Color: (receiver: any, ...args: any[]) => (ErrorType_Color as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Color", [], [/* @__PURE__ */ $.basicType("string")])]
);

$.registerNamedValueType(
	"*dot.ErrorType",
	{Color: (receiver: any, ...args: any[]) => (ErrorType_Color as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Color", [], [/* @__PURE__ */ $.basicType("string")])]
);

export type CtorID = number

export class Ctor {
	public get Name(): string {
		return this._fields.Name
	}

	public set Name(value: string) {
		this._fields.Name = value
	}

	public get Package(): string {
		return this._fields.Package
	}

	public set Package(value: string) {
		this._fields.Package = value
	}

	public get File(): string {
		return this._fields.File
	}

	public set File(value: string) {
		this._fields.File = value
	}

	public get Line(): number {
		return this._fields.Line
	}

	public set Line(value: number) {
		this._fields.Line = value
	}

	public get ID(): CtorID {
		return this._fields.ID
	}

	public set ID(value: CtorID) {
		this._fields.ID = value
	}

	public get Params(): $.Slice<Param | $.VarRef<Param> | null> {
		return this._fields.Params
	}

	public set Params(value: $.Slice<Param | $.VarRef<Param> | null>) {
		this._fields.Params = value
	}

	public get GroupParams(): $.Slice<Group | $.VarRef<Group> | null> {
		return this._fields.GroupParams
	}

	public set GroupParams(value: $.Slice<Group | $.VarRef<Group> | null>) {
		this._fields.GroupParams = value
	}

	public get Results(): $.Slice<Result | $.VarRef<Result> | null> {
		return this._fields.Results
	}

	public set Results(value: $.Slice<Result | $.VarRef<Result> | null>) {
		this._fields.Results = value
	}

	public get ErrorType(): ErrorType {
		return this._fields.ErrorType
	}

	public set ErrorType(value: ErrorType) {
		this._fields.ErrorType = value
	}

	public _fields: {
		Name: string
		Package: string
		File: string
		Line: number
		ID: CtorID
		Params: $.Slice<Param | $.VarRef<Param> | null>
		GroupParams: $.Slice<Group | $.VarRef<Group> | null>
		Results: $.Slice<Result | $.VarRef<Result> | null>
		ErrorType: ErrorType
	}

	constructor(init?: Partial<{Name?: string, Package?: string, File?: string, Line?: number, ID?: CtorID, Params?: $.Slice<Param | $.VarRef<Param> | null>, GroupParams?: $.Slice<Group | $.VarRef<Group> | null>, Results?: $.Slice<Result | $.VarRef<Result> | null>, ErrorType?: ErrorType}>, __goscriptValue?: boolean) {
		this._fields = {
			Name: init?.Name ?? ("" as string),
			Package: init?.Package ?? ("" as string),
			File: init?.File ?? ("" as string),
			Line: init?.Line ?? (0 as number),
			ID: init?.ID ?? (0 as CtorID),
			Params: init?.Params ?? (null! as $.Slice<Param | $.VarRef<Param> | null>),
			GroupParams: init?.GroupParams ?? (null! as $.Slice<Group | $.VarRef<Group> | null>),
			Results: init?.Results ?? (null! as $.Slice<Result | $.VarRef<Result> | null>),
			ErrorType: init?.ErrorType ?? (0 as ErrorType)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Ctor {
		return new Ctor(this, true)
	}

	public __goscriptAssign(source: Ctor): void {
		const target = this._fields
		const values = source._fields
		target.Name = values.Name
		target.Package = values.Package
		target.File = values.File
		target.Line = values.Line
		target.ID = values.ID
		target.Params = values.Params
		target.GroupParams = values.GroupParams
		target.Results = values.Results
		target.ErrorType = values.ErrorType
	}

	public removeParam(k: nodeKey): void {
		let c: Ctor | $.VarRef<Ctor> | null = this;
		const c$: Ctor = c == null ? $.pointerTarget<Ctor>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<Ctor>(c)
		let pruned: $.Slice<Param | $.VarRef<Param> | null> = null! as $.Slice<Param | $.VarRef<Param> | null>
		for (let __goscriptRangeTarget0 = (c$ as Ctor).Params, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
			let p = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as Param | $.VarRef<Param> | null)
			if (!$.structEqual(k, $.pointerValue<Node>($.pointerValue<Param>(p).Node).nodeKey())) {
				pruned = $.appendOne(pruned, p, $.appendZeros.nil)
			}
		}
		;(c$ as Ctor).Params = pruned
	}

	static __typeInfo = $.registerStructType(
		"dot.Ctor",
		() => new Ctor(),
		() => [$.methodSignature("removeParam", [["k", "dot.nodeKey"]], [], true)],
		Ctor,
		() => [/* @__PURE__ */ $.structField("Name", /* @__PURE__ */ $.basicType("string"), [0], 0, true), /* @__PURE__ */ $.structField("Package", /* @__PURE__ */ $.basicType("string"), [1], 16, true), /* @__PURE__ */ $.structField("File", /* @__PURE__ */ $.basicType("string"), [2], 32, true), /* @__PURE__ */ $.structField("Line", /* @__PURE__ */ $.basicType("int"), [3], 48, true), /* @__PURE__ */ $.structField("ID", /* @__PURE__ */ $.basicType("uintptr", "dot.CtorID"), [4], 56, true), /* @__PURE__ */ $.structField("Params", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("dot.Param")), [5], 64, true), /* @__PURE__ */ $.structField("GroupParams", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("dot.Group")), [6], 88, true), /* @__PURE__ */ $.structField("Results", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("dot.Result")), [7], 112, true), /* @__PURE__ */ $.structField("ErrorType", /* @__PURE__ */ $.basicType("int", "dot.ErrorType"), [8], 136, true)]
	)
}

export class nodeKey {
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

	public clone(): nodeKey {
		return new nodeKey(this, true)
	}

	public __goscriptAssign(source: nodeKey): void {
		const target = this._fields
		const values = source._fields
		target.t = $.assignFieldValue(target.t, values.t, "reflect.Type")
		target.name = values.name
		target.group = values.group
	}

	static __typeInfo = $.registerStructType(
		"dot.nodeKey",
		() => new nodeKey(),
		() => [],
		nodeKey,
		() => [/* @__PURE__ */ $.structField("t", "reflect.Type", [0], 0, false, { pkgPath: "go.uber.org/dig/internal/dot" }), /* @__PURE__ */ $.structField("name", /* @__PURE__ */ $.basicType("string"), [1], 16, false, { pkgPath: "go.uber.org/dig/internal/dot" }), /* @__PURE__ */ $.structField("group", /* @__PURE__ */ $.basicType("string"), [2], 32, false, { pkgPath: "go.uber.org/dig/internal/dot" })]
	)
}

export class Node {
	public get Type(): reflect.Type | null {
		return this._fields.Type
	}

	public set Type(value: reflect.Type | null) {
		this._fields.Type = value
	}

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

	public _fields: {
		Type: reflect.Type | null
		Name: string
		Group: string
	}

	constructor(init?: Partial<{Type?: reflect.Type | null, Name?: string, Group?: string}>, __goscriptValue?: boolean) {
		this._fields = {
			Type: init?.Type ?? (null! as reflect.Type | null),
			Name: init?.Name ?? ("" as string),
			Group: init?.Group ?? ("" as string)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Node {
		return new Node(this, true)
	}

	public __goscriptAssign(source: Node): void {
		const target = this._fields
		const values = source._fields
		target.Type = $.assignFieldValue(target.Type, values.Type, "reflect.Type")
		target.Name = values.Name
		target.Group = values.Group
	}

	public nodeKey(): nodeKey {
		const n: Node | $.VarRef<Node> | null = this;
		const n$: Node = n == null ? $.pointerTarget<Node>(n) : (n as any).__isVarRef === true ? (n as any).value : (n as any).__goValue === undefined ? (n as any) : $.pointerTarget<Node>(n)
		return new nodeKey({t: (n$ as Node).Type, name: (n$ as Node).Name, group: (n$ as Node).Group}, true)
	}

	static __typeInfo = $.registerStructType(
		"dot.Node",
		() => new Node(),
		() => [$.methodSignature("nodeKey", [], ["dot.nodeKey"], true)],
		Node,
		() => [/* @__PURE__ */ $.structField("Type", "reflect.Type", [0], 0, true), /* @__PURE__ */ $.structField("Name", /* @__PURE__ */ $.basicType("string"), [1], 16, true), /* @__PURE__ */ $.structField("Group", /* @__PURE__ */ $.basicType("string"), [2], 32, true)]
	)
}

export class Param {
	public get Node(): Node | $.VarRef<Node> | null {
		return this._fields.Node
	}

	public set Node(value: Node | $.VarRef<Node> | null) {
		this._fields.Node = value
	}

	public get Optional(): boolean {
		return this._fields.Optional
	}

	public set Optional(value: boolean) {
		this._fields.Optional = value
	}

	public _fields: {
		Node: Node | $.VarRef<Node> | null
		Optional: boolean
	}

	constructor(init?: Partial<{Node?: Node | $.VarRef<Node> | null, Optional?: boolean}>, __goscriptValue?: boolean) {
		this._fields = {
			Node: init?.Node ?? (null! as Node | $.VarRef<Node> | null),
			Optional: init?.Optional ?? (false as boolean)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Param {
		return new Param(this, true)
	}

	public __goscriptAssign(source: Param): void {
		const target = this._fields
		const values = source._fields
		target.Node = values.Node
		target.Optional = values.Optional
	}

	public async String(): globalThis.Promise<string> {
		const p: Param | $.VarRef<Param> | null = this;
		const p$: Param = p == null ? $.pointerTarget<Param>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<Param>(p)
		if (!$.stringEqual($.pointerValue<Node>((p$ as Param).Node).Name, "")) {
			return fmt.Sprintf("%v[name=%v]", (__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>($.pointerValue<Node>((p$ as Param).Node).Type).String(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), $.pointerValue<Node>((p$ as Param).Node).Name)
		}
		return $.pointerValue<Exclude<reflect.Type, null>>($.pointerValue<Node>((p$ as Param).Node).Type).String()
	}

	public nodeKey(): any {
		return $.pointerValue<Node>(this.Node).nodeKey()
	}

	static __typeInfo = $.registerStructType(
		"dot.Param",
		() => new Param(),
		() => [$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("nodeKey", [], ["dot.nodeKey"])],
		Param,
		() => [/* @__PURE__ */ $.structField("Node", /* @__PURE__ */ $.pointerType("dot.Node"), [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Optional", /* @__PURE__ */ $.basicType("bool"), [1], 8, true)]
	)
}

export class Result {
	public get Node(): Node | $.VarRef<Node> | null {
		return this._fields.Node
	}

	public set Node(value: Node | $.VarRef<Node> | null) {
		this._fields.Node = value
	}

	// GroupIndex is added to differentiate grouped values from one another.
	// Since grouped values have the same type and group, their Node / string
	// representations are the same so we need indices to uniquely identify
	// the values.
	public get GroupIndex(): number {
		return this._fields.GroupIndex
	}

	public set GroupIndex(value: number) {
		this._fields.GroupIndex = value
	}

	public _fields: {
		Node: Node | $.VarRef<Node> | null
		GroupIndex: number
	}

	constructor(init?: Partial<{Node?: Node | $.VarRef<Node> | null, GroupIndex?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Node: init?.Node ?? (null! as Node | $.VarRef<Node> | null),
			GroupIndex: init?.GroupIndex ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Result {
		return new Result(this, true)
	}

	public __goscriptAssign(source: Result): void {
		const target = this._fields
		const values = source._fields
		target.Node = values.Node
		target.GroupIndex = values.GroupIndex
	}

	public async Attributes(): globalThis.Promise<string> {
		const r: Result | $.VarRef<Result> | null = this;
		const r$: Result = r == null ? $.pointerTarget<Result>(r) : (r as any).__isVarRef === true ? (r as any).value : (r as any).__goValue === undefined ? (r as any) : $.pointerTarget<Result>(r)
		switch ((true as boolean)) {
			case !$.stringEqual($.pointerValue<Node>((r$ as Result).Node).Name, ""):
			{
				return fmt.Sprintf("label=<%v<BR /><FONT POINT-SIZE=\"10\">Name: %v</FONT>>", ($.pointerValue<Node>((r$ as Result).Node).Type as any), $.pointerValue<Node>((r$ as Result).Node).Name)
				break
			}
			case !$.stringEqual($.pointerValue<Node>((r$ as Result).Node).Group, ""):
			{
				return fmt.Sprintf("label=<%v<BR /><FONT POINT-SIZE=\"10\">Group: %v</FONT>>", ($.pointerValue<Node>((r$ as Result).Node).Type as any), $.pointerValue<Node>((r$ as Result).Node).Group)
				break
			}
			default:
			{
				return fmt.Sprintf("label=<%v>", ($.pointerValue<Node>((r$ as Result).Node).Type as any))
				break
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async String(): globalThis.Promise<string> {
		const r: Result | $.VarRef<Result> | null = this;
		const r$: Result = r == null ? $.pointerTarget<Result>(r) : (r as any).__isVarRef === true ? (r as any).value : (r as any).__goValue === undefined ? (r as any) : $.pointerTarget<Result>(r)
		switch ((true as boolean)) {
			case !$.stringEqual($.pointerValue<Node>((r$ as Result).Node).Name, ""):
			{
				return fmt.Sprintf("%v[name=%v]", (__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>($.pointerValue<Node>((r$ as Result).Node).Type).String(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), $.pointerValue<Node>((r$ as Result).Node).Name)
				break
			}
			case !$.stringEqual($.pointerValue<Node>((r$ as Result).Node).Group, ""):
			{
				return fmt.Sprintf("%v[group=%v]%v", (__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>($.pointerValue<Node>((r$ as Result).Node).Type).String(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), $.pointerValue<Node>((r$ as Result).Node).Group, $.basicInterfaceValue((r$ as Result).GroupIndex, "int"))
				break
			}
			default:
			{
				return $.pointerValue<Exclude<reflect.Type, null>>($.pointerValue<Node>((r$ as Result).Node).Type).String()
				break
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public nodeKey(): any {
		return $.pointerValue<Node>(this.Node).nodeKey()
	}

	static __typeInfo = $.registerStructType(
		"dot.Result",
		() => new Result(),
		() => [$.methodSignature("Attributes", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("nodeKey", [], ["dot.nodeKey"])],
		Result,
		() => [/* @__PURE__ */ $.structField("Node", /* @__PURE__ */ $.pointerType("dot.Node"), [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("GroupIndex", /* @__PURE__ */ $.basicType("int"), [1], 8, true)]
	)
}

export class Group {
	// Type is the type of values in the group.
	public get Type(): reflect.Type | null {
		return this._fields.Type
	}

	public set Type(value: reflect.Type | null) {
		this._fields.Type = value
	}

	public get Name(): string {
		return this._fields.Name
	}

	public set Name(value: string) {
		this._fields.Name = value
	}

	public get Results(): $.Slice<Result | $.VarRef<Result> | null> {
		return this._fields.Results
	}

	public set Results(value: $.Slice<Result | $.VarRef<Result> | null>) {
		this._fields.Results = value
	}

	public get ErrorType(): ErrorType {
		return this._fields.ErrorType
	}

	public set ErrorType(value: ErrorType) {
		this._fields.ErrorType = value
	}

	public _fields: {
		Type: reflect.Type | null
		Name: string
		Results: $.Slice<Result | $.VarRef<Result> | null>
		ErrorType: ErrorType
	}

	constructor(init?: Partial<{Type?: reflect.Type | null, Name?: string, Results?: $.Slice<Result | $.VarRef<Result> | null>, ErrorType?: ErrorType}>, __goscriptValue?: boolean) {
		this._fields = {
			Type: init?.Type ?? (null! as reflect.Type | null),
			Name: init?.Name ?? ("" as string),
			Results: init?.Results ?? (null! as $.Slice<Result | $.VarRef<Result> | null>),
			ErrorType: init?.ErrorType ?? (0 as ErrorType)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Group {
		return new Group(this, true)
	}

	public __goscriptAssign(source: Group): void {
		const target = this._fields
		const values = source._fields
		target.Type = $.assignFieldValue(target.Type, values.Type, "reflect.Type")
		target.Name = values.Name
		target.Results = values.Results
		target.ErrorType = values.ErrorType
	}

	public async Attributes(): globalThis.Promise<string> {
		const g: Group | $.VarRef<Group> | null = this;
		const g$: Group = g == null ? $.pointerTarget<Group>(g) : (g as any).__isVarRef === true ? (g as any).value : (g as any).__goValue === undefined ? (g as any) : $.pointerTarget<Group>(g)
		let attr = await fmt.Sprintf("shape=diamond label=<%v<BR /><FONT POINT-SIZE=\"10\">Group: %v</FONT>>", ((g$ as Group).Type as any), (g$ as Group).Name)
		if ((g$ as Group).ErrorType != 0) {
			attr = $.concatString(attr, $.concatString(" color=", ErrorType_Color((g$ as Group).ErrorType)))
		}
		return attr
	}

	public async String(): globalThis.Promise<string> {
		const g: Group | $.VarRef<Group> | null = this;
		const g$: Group = g == null ? $.pointerTarget<Group>(g) : (g as any).__isVarRef === true ? (g as any).value : (g as any).__goValue === undefined ? (g as any) : $.pointerTarget<Group>(g)
		return fmt.Sprintf("[type=%v group=%v]", (__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>((g$ as Group).Type).String(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), (g$ as Group).Name)
	}

	public nodeKey(): nodeKey {
		const g: Group | $.VarRef<Group> | null = this;
		const g$: Group = g == null ? $.pointerTarget<Group>(g) : (g as any).__isVarRef === true ? (g as any).value : (g as any).__goValue === undefined ? (g as any) : $.pointerTarget<Group>(g)
		return new nodeKey({t: (g$ as Group).Type, group: (g$ as Group).Name}, true)
	}

	public removeResult(r: Result | $.VarRef<Result> | null): void {
		let g: Group | $.VarRef<Group> | null = this;
		const g$: Group = g == null ? $.pointerTarget<Group>(g) : (g as any).__isVarRef === true ? (g as any).value : (g as any).__goValue === undefined ? (g as any) : $.pointerTarget<Group>(g)
		let pruned: $.Slice<Result | $.VarRef<Result> | null> = null! as $.Slice<Result | $.VarRef<Result> | null>
		for (let __goscriptRangeTarget1 = (g$ as Group).Results, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
			let rg = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as Result | $.VarRef<Result> | null)
			if ($.pointerValue<Result>(r).GroupIndex != $.pointerValue<Result>(rg).GroupIndex) {
				pruned = $.appendOne(pruned, rg, $.appendZeros.nil)
			}
		}
		;(g$ as Group).Results = pruned
	}

	static __typeInfo = $.registerStructType(
		"dot.Group",
		() => new Group(),
		() => [$.methodSignature("Attributes", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("nodeKey", [], ["dot.nodeKey"], true), $.methodSignature("removeResult", [["r", /* @__PURE__ */ $.pointerType("dot.Result")]], [], true)],
		Group,
		() => [/* @__PURE__ */ $.structField("Type", "reflect.Type", [0], 0, true), /* @__PURE__ */ $.structField("Name", /* @__PURE__ */ $.basicType("string"), [1], 16, true), /* @__PURE__ */ $.structField("Results", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("dot.Result")), [2], 32, true), /* @__PURE__ */ $.structField("ErrorType", /* @__PURE__ */ $.basicType("int", "dot.ErrorType"), [3], 56, true)]
	)
}

export class Graph {
	public get Ctors(): $.Slice<Ctor | $.VarRef<Ctor> | null> {
		return this._fields.Ctors
	}

	public set Ctors(value: $.Slice<Ctor | $.VarRef<Ctor> | null>) {
		this._fields.Ctors = value
	}

	public get ctorMap(): globalThis.Map<CtorID, Ctor | $.VarRef<Ctor> | null> | null {
		return this._fields.ctorMap
	}

	public set ctorMap(value: globalThis.Map<CtorID, Ctor | $.VarRef<Ctor> | null> | null) {
		this._fields.ctorMap = value
	}

	public get Groups(): $.Slice<Group | $.VarRef<Group> | null> {
		return this._fields.Groups
	}

	public set Groups(value: $.Slice<Group | $.VarRef<Group> | null>) {
		this._fields.Groups = value
	}

	public get groupMap(): globalThis.Map<nodeKey, Group | $.VarRef<Group> | null> | null {
		return this._fields.groupMap
	}

	public set groupMap(value: globalThis.Map<nodeKey, Group | $.VarRef<Group> | null> | null) {
		this._fields.groupMap = value
	}

	public get consumers(): globalThis.Map<nodeKey, $.Slice<Ctor | $.VarRef<Ctor> | null>> | null {
		return this._fields.consumers
	}

	public set consumers(value: globalThis.Map<nodeKey, $.Slice<Ctor | $.VarRef<Ctor> | null>> | null) {
		this._fields.consumers = value
	}

	public get Failed(): FailedNodes | $.VarRef<FailedNodes> | null {
		return this._fields.Failed
	}

	public set Failed(value: FailedNodes | $.VarRef<FailedNodes> | null) {
		this._fields.Failed = value
	}

	public _fields: {
		Ctors: $.Slice<Ctor | $.VarRef<Ctor> | null>
		ctorMap: globalThis.Map<CtorID, Ctor | $.VarRef<Ctor> | null> | null
		Groups: $.Slice<Group | $.VarRef<Group> | null>
		groupMap: globalThis.Map<nodeKey, Group | $.VarRef<Group> | null> | null
		consumers: globalThis.Map<nodeKey, $.Slice<Ctor | $.VarRef<Ctor> | null>> | null
		Failed: FailedNodes | $.VarRef<FailedNodes> | null
	}

	constructor(init?: Partial<{Ctors?: $.Slice<Ctor | $.VarRef<Ctor> | null>, ctorMap?: globalThis.Map<CtorID, Ctor | $.VarRef<Ctor> | null> | null, Groups?: $.Slice<Group | $.VarRef<Group> | null>, groupMap?: globalThis.Map<nodeKey, Group | $.VarRef<Group> | null> | null, consumers?: globalThis.Map<nodeKey, $.Slice<Ctor | $.VarRef<Ctor> | null>> | null, Failed?: FailedNodes | $.VarRef<FailedNodes> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Ctors: init?.Ctors ?? (null! as $.Slice<Ctor | $.VarRef<Ctor> | null>),
			ctorMap: init?.ctorMap ?? (null! as globalThis.Map<CtorID, Ctor | $.VarRef<Ctor> | null> | null),
			Groups: init?.Groups ?? (null! as $.Slice<Group | $.VarRef<Group> | null>),
			groupMap: init?.groupMap ?? (null! as globalThis.Map<nodeKey, Group | $.VarRef<Group> | null> | null),
			consumers: init?.consumers ?? (null! as globalThis.Map<nodeKey, $.Slice<Ctor | $.VarRef<Ctor> | null>> | null),
			Failed: init?.Failed ?? (null! as FailedNodes | $.VarRef<FailedNodes> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Graph {
		return new Graph(this, true)
	}

	public __goscriptAssign(source: Graph): void {
		const target = this._fields
		const values = source._fields
		target.Ctors = values.Ctors
		target.ctorMap = values.ctorMap
		target.Groups = values.Groups
		target.groupMap = values.groupMap
		target.consumers = values.consumers
		target.Failed = values.Failed
	}

	public async AddCtor(c: Ctor | $.VarRef<Ctor> | null, paramList: $.Slice<Param | $.VarRef<Param> | null>, resultList: $.Slice<Result | $.VarRef<Result> | null>): globalThis.Promise<void> {
		let dg: Graph | $.VarRef<Graph> | null = this;
		const dg$: Graph = dg == null ? $.pointerTarget<Graph>(dg) : (dg as any).__isVarRef === true ? (dg as any).value : (dg as any).__goValue === undefined ? (dg as any) : $.pointerTarget<Graph>(dg)
		const c$: Ctor = c == null ? $.pointerTarget<Ctor>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<Ctor>(c)
		let params: $.Slice<Param | $.VarRef<Param> | null> = null! as $.Slice<Param | $.VarRef<Param> | null>
		let groupParams: $.Slice<Group | $.VarRef<Group> | null> = null! as $.Slice<Group | $.VarRef<Group> | null>

		// Loop through the paramList to separate them into regular params and
		// grouped params. For grouped params, we use getGroup to find the actual
		// group.
		for (let __goscriptRangeTarget2 = paramList, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow2.length; __rangeIndex++) {
			let param = (__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + __rangeIndex] as Param | $.VarRef<Param> | null)
			if ($.stringEqual($.pointerValue<Node>($.pointerValue<Param>(param).Node).Group, "")) {
				// Not a value group.
				params = $.appendOne(params, param, $.appendZeros.nil)
				continue
			}

			let k = (await (async () => { const __goscriptLiteralField0 = (__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>($.pointerValue<Node>($.pointerValue<Param>(param).Node).Type).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); return new nodeKey({t: __goscriptLiteralField0, group: $.pointerValue<Node>($.pointerValue<Param>(param).Node).Group}, true) })())
			let group: Group | $.VarRef<Group> | null = (dg !== null && (dg as any).__isVarRef !== true && (dg as any).__goValue === undefined ? ((dg as any) as Graph).getGroup(k) : Graph.prototype.getGroup.call(dg, k))
			groupParams = $.appendOne(groupParams, group, $.appendZeros.nil)
		}

		for (let __goscriptRangeTarget3 = resultList, __goscriptRangeWindow3 = $.sliceRange(__goscriptRangeTarget3), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow3.length; __rangeIndex++) {
			let result = (__goscriptRangeWindow3.backing[__goscriptRangeWindow3.offset + __rangeIndex] as Result | $.VarRef<Result> | null)
			// If the result is a grouped value, we want to update its GroupIndex
			// and add it to the Group.
			if (!$.stringEqual($.pointerValue<Node>($.pointerValue<Result>(result).Node).Group, "")) {
				void (dg !== null && (dg as any).__isVarRef !== true && (dg as any).__goValue === undefined ? ((dg as any) as Graph).addToGroup(result, (c$ as Ctor).ID) : Graph.prototype.addToGroup.call(dg, result, (c$ as Ctor).ID))
			}
		}

		;(c$ as Ctor).Params = params;
		;(c$ as Ctor).GroupParams = groupParams;
		;(c$ as Ctor).Results = resultList

		// Track which constructors consume a parameter.
		for (let __goscriptRangeTarget4 = paramList, __goscriptRangeWindow4 = $.sliceRange(__goscriptRangeTarget4), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow4.length; __rangeIndex++) {
			let p = (__goscriptRangeWindow4.backing[__goscriptRangeWindow4.offset + __rangeIndex] as Param | $.VarRef<Param> | null)
			let k = $.pointerValue<Node>($.pointerValue<Param>(p).Node).nodeKey()
			$.mapSet((dg$ as Graph).consumers, (k).clone(), $.appendOne($.mapGet<nodeKey, $.Slice<Ctor | $.VarRef<Ctor> | null>, $.Slice<Ctor | $.VarRef<Ctor> | null>>((dg$ as Graph).consumers, k, null)[0], c, $.appendZeros.nil))
		}

		;(dg$ as Graph).Ctors = $.appendOne((dg$ as Graph).Ctors, c, $.appendZeros.nil)
		$.mapSet((dg$ as Graph).ctorMap, (c$ as Ctor).ID, c)
	}

	public AddMissingNodes(results: $.Slice<Result | $.VarRef<Result> | null>): void {
		const dg: Graph | $.VarRef<Graph> | null = this;
		// The failure(s) are root causes if there are no other failures.
		let isRootCause = $.sliceLen($.pointerValue<FailedNodes>($.pointerValue<Graph>(dg).Failed).RootCauses) == 0

		for (let __goscriptRangeTarget5 = results, __goscriptRangeWindow5 = $.sliceRange(__goscriptRangeTarget5), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow5.length; __rangeIndex++) {
			let r = (__goscriptRangeWindow5.backing[__goscriptRangeWindow5.offset + __rangeIndex] as Result | $.VarRef<Result> | null)
			void (dg !== null && (dg as any).__isVarRef !== true && (dg as any).__goValue === undefined ? ((dg as any) as Graph).failNode(r, isRootCause) : Graph.prototype.failNode.call(dg, r, isRootCause))
		}
	}

	public FailGroupNodes(name: string, t: reflect.Type | null, id: CtorID): void {
		let dg: Graph | $.VarRef<Graph> | null = this;
		const dg$: Graph = dg == null ? $.pointerTarget<Graph>(dg) : (dg as any).__isVarRef === true ? (dg as any).value : (dg as any).__goValue === undefined ? (dg as any) : $.pointerTarget<Graph>(dg)
		// This failure is the root cause if there are no other failures.
		let isRootCause = $.sliceLen($.pointerValue<FailedNodes>((dg$ as Graph).Failed).RootCauses) == 0

		let k = new nodeKey({t: t, group: name}, true)
		let group: Group | $.VarRef<Group> | null = (dg !== null && (dg as any).__isVarRef !== true && (dg as any).__goValue === undefined ? ((dg as any) as Graph).getGroup(k) : Graph.prototype.getGroup.call(dg, k))
		let group$: Group = group == null ? $.pointerTarget<Group>(group) : (group as any).__isVarRef === true ? (group as any).value : (group as any).__goValue === undefined ? (group as any) : $.pointerTarget<Group>(group)

		// If the ctor does not exist it cannot be failed.
		{
			let [, ok] = $.mapGet<CtorID, Ctor | $.VarRef<Ctor> | null, Ctor | $.VarRef<Ctor> | null>((dg$ as Graph).ctorMap, id, null)
			if (!ok) {
				return
			}
		}

		// Track which constructors and groups have failed.
		$.mapSet($.pointerValue<FailedNodes>((dg$ as Graph).Failed).ctors, id, {})
		$.mapSet($.pointerValue<FailedNodes>((dg$ as Graph).Failed).groups, (k).clone(), {})

		for (let __goscriptRangeTarget6 = $.pointerValue<Ctor>($.mapGet<CtorID, Ctor | $.VarRef<Ctor> | null, Ctor | $.VarRef<Ctor> | null>((dg$ as Graph).ctorMap, id, null)[0]).Results, __goscriptRangeWindow6 = $.sliceRange(__goscriptRangeTarget6), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow6.length; __rangeIndex++) {
			let r = (__goscriptRangeWindow6.backing[__goscriptRangeWindow6.offset + __rangeIndex] as Result | $.VarRef<Result> | null)
			if (($.comparableEqual($.pointerValue<Node>($.pointerValue<Result>(r).Node).Type, t)) && ($.stringEqual($.pointerValue<Node>($.pointerValue<Result>(r).Node).Group, name))) {
				void (dg !== null && (dg as any).__isVarRef !== true && (dg as any).__goValue === undefined ? ((dg as any) as Graph).failNode(r, isRootCause) : Graph.prototype.failNode.call(dg, r, isRootCause))
			}
		}

		{
			let __goscriptTuple0: any = $.mapGet<CtorID, Ctor | $.VarRef<Ctor> | null, Ctor | $.VarRef<Ctor> | null>((dg$ as Graph).ctorMap, id, null)
			let c: Ctor | $.VarRef<Ctor> | null = __goscriptTuple0[0]
			let ok = __goscriptTuple0[1]
			if (ok) {
				if (isRootCause) {
					;(group$ as Group).ErrorType = 1
					$.pointerValue<Ctor>(c).ErrorType = 1
				} else {
					;(group$ as Group).ErrorType = 2
					$.pointerValue<Ctor>(c).ErrorType = 2
				}
			}
		}
	}

	public FailNodes(results: $.Slice<Result | $.VarRef<Result> | null>, id: CtorID): void {
		let dg: Graph | $.VarRef<Graph> | null = this;
		const dg$: Graph = dg == null ? $.pointerTarget<Graph>(dg) : (dg as any).__isVarRef === true ? (dg as any).value : (dg as any).__goValue === undefined ? (dg as any) : $.pointerTarget<Graph>(dg)
		// This failure is the root cause if there are no other failures.
		let isRootCause = $.sliceLen($.pointerValue<FailedNodes>((dg$ as Graph).Failed).RootCauses) == 0
		$.mapSet($.pointerValue<FailedNodes>((dg$ as Graph).Failed).ctors, id, {})

		for (let __goscriptRangeTarget7 = results, __goscriptRangeWindow7 = $.sliceRange(__goscriptRangeTarget7), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow7.length; __rangeIndex++) {
			let r = (__goscriptRangeWindow7.backing[__goscriptRangeWindow7.offset + __rangeIndex] as Result | $.VarRef<Result> | null)
			void (dg !== null && (dg as any).__isVarRef !== true && (dg as any).__goValue === undefined ? ((dg as any) as Graph).failNode(r, isRootCause) : Graph.prototype.failNode.call(dg, r, isRootCause))
		}

		{
			let __goscriptTuple1: any = $.mapGet<CtorID, Ctor | $.VarRef<Ctor> | null, Ctor | $.VarRef<Ctor> | null>((dg$ as Graph).ctorMap, id, null)
			let c: Ctor | $.VarRef<Ctor> | null = __goscriptTuple1[0]
			let ok = __goscriptTuple1[1]
			if (ok) {
				if (isRootCause) {
					$.pointerValue<Ctor>(c).ErrorType = 1
				} else {
					$.pointerValue<Ctor>(c).ErrorType = 2
				}
			}
		}
	}

	public PruneSuccess(): void {
		const dg: Graph | $.VarRef<Graph> | null = this;
		const dg$: Graph = dg == null ? $.pointerTarget<Graph>(dg) : (dg as any).__isVarRef === true ? (dg as any).value : (dg as any).__goValue === undefined ? (dg as any) : $.pointerTarget<Graph>(dg)
		void (dg !== null && (dg as any).__isVarRef !== true && (dg as any).__goValue === undefined ? ((dg as any) as Graph).pruneCtors($.pointerValue<FailedNodes>((dg$ as Graph).Failed).ctors) : Graph.prototype.pruneCtors.call(dg, $.pointerValue<FailedNodes>((dg$ as Graph).Failed).ctors))
		void (dg !== null && (dg as any).__isVarRef !== true && (dg as any).__goValue === undefined ? ((dg as any) as Graph).pruneGroups($.pointerValue<FailedNodes>((dg$ as Graph).Failed).groups) : Graph.prototype.pruneGroups.call(dg, $.pointerValue<FailedNodes>((dg$ as Graph).Failed).groups))
	}

	public addRootCause(r: Result | $.VarRef<Result> | null): void {
		let dg: Graph | $.VarRef<Graph> | null = this;
		const dg$: Graph = dg == null ? $.pointerTarget<Graph>(dg) : (dg as any).__isVarRef === true ? (dg as any).value : (dg as any).__goValue === undefined ? (dg as any) : $.pointerTarget<Graph>(dg)
		$.pointerValue<FailedNodes>((dg$ as Graph).Failed).RootCauses = $.appendOne($.pointerValue<FailedNodes>((dg$ as Graph).Failed).RootCauses, r, $.appendZeros.nil)
	}

	public addToGroup(r: Result | $.VarRef<Result> | null, id: CtorID): void {
		const dg: Graph | $.VarRef<Graph> | null = this;
		const r$: Result = r == null ? $.pointerTarget<Result>(r) : (r as any).__isVarRef === true ? (r as any).value : (r as any).__goValue === undefined ? (r as any) : $.pointerTarget<Result>(r)
		let k = new nodeKey({t: $.pointerValue<Node>((r$ as Result).Node).Type, group: $.pointerValue<Node>((r$ as Result).Node).Group}, true)
		let group: Group | $.VarRef<Group> | null = (dg !== null && (dg as any).__isVarRef !== true && (dg as any).__goValue === undefined ? ((dg as any) as Graph).getGroup(k) : Graph.prototype.getGroup.call(dg, k))
		let group$: Group = group == null ? $.pointerTarget<Group>(group) : (group as any).__isVarRef === true ? (group as any).value : (group as any).__goValue === undefined ? (group as any) : $.pointerTarget<Group>(group);

		;(r$ as Result).GroupIndex = $.sliceLen((group$ as Group).Results);
		;(group$ as Group).Results = $.appendOne((group$ as Group).Results, r, $.appendZeros.nil)
	}

	public addTransitiveFailure(r: Result | $.VarRef<Result> | null): void {
		let dg: Graph | $.VarRef<Graph> | null = this;
		const dg$: Graph = dg == null ? $.pointerTarget<Graph>(dg) : (dg as any).__isVarRef === true ? (dg as any).value : (dg as any).__goValue === undefined ? (dg as any) : $.pointerTarget<Graph>(dg)
		$.pointerValue<FailedNodes>((dg$ as Graph).Failed).TransitiveFailures = $.appendOne($.pointerValue<FailedNodes>((dg$ as Graph).Failed).TransitiveFailures, r, $.appendZeros.nil)
	}

	public failNode(r: Result | $.VarRef<Result> | null, isRootCause: boolean): void {
		const dg: Graph | $.VarRef<Graph> | null = this;
		if (isRootCause) {
			void (dg !== null && (dg as any).__isVarRef !== true && (dg as any).__goValue === undefined ? ((dg as any) as Graph).addRootCause(r) : Graph.prototype.addRootCause.call(dg, r))
		} else {
			void (dg !== null && (dg as any).__isVarRef !== true && (dg as any).__goValue === undefined ? ((dg as any) as Graph).addTransitiveFailure(r) : Graph.prototype.addTransitiveFailure.call(dg, r))
		}
	}

	public getGroup(k: nodeKey): Group | $.VarRef<Group> | null {
		let dg: Graph | $.VarRef<Graph> | null = this;
		const dg$: Graph = dg == null ? $.pointerTarget<Graph>(dg) : (dg as any).__isVarRef === true ? (dg as any).value : (dg as any).__goValue === undefined ? (dg as any) : $.pointerTarget<Graph>(dg)
		let __goscriptTuple2: any = $.mapGet<nodeKey, Group | $.VarRef<Group> | null, Group | $.VarRef<Group> | null>((dg$ as Graph).groupMap, k, null)
		let g: Group | $.VarRef<Group> | null = __goscriptTuple2[0]
		let ok = __goscriptTuple2[1]
		if (!ok) {
			g = NewGroup(k)
			$.mapSet((dg$ as Graph).groupMap, (k).clone(), g);
			;(dg$ as Graph).Groups = $.appendOne((dg$ as Graph).Groups, g, $.appendZeros.nil)
		}
		return g
	}

	public pruneCtorGroupParams(groups: globalThis.Map<nodeKey, Group | $.VarRef<Group> | null> | null): void {
		const dg: Graph | $.VarRef<Graph> | null = this;
		for (let __goscriptRangeTarget9 = $.pointerValue<Graph>(dg).Ctors, __goscriptRangeWindow8 = $.sliceRange(__goscriptRangeTarget9), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow8.length; __rangeIndex++) {
			let c = (__goscriptRangeWindow8.backing[__goscriptRangeWindow8.offset + __rangeIndex] as Ctor | $.VarRef<Ctor> | null)
			let pruned: $.Slice<Group | $.VarRef<Group> | null> = null! as $.Slice<Group | $.VarRef<Group> | null>
			for (let __goscriptRangeTarget8 = $.pointerValue<Ctor>(c).GroupParams, __goscriptRangeWindow9 = $.sliceRange(__goscriptRangeTarget8), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow9.length; __rangeIndex++) {
				let gp = (__goscriptRangeWindow9.backing[__goscriptRangeWindow9.offset + __rangeIndex] as Group | $.VarRef<Group> | null)
				let k = (gp !== null && (gp as any).__isVarRef !== true && (gp as any).__goValue === undefined ? ((gp as any) as Group).nodeKey() : Group.prototype.nodeKey.call(gp))
				{
					let [, ok] = $.mapGet<nodeKey, Group | $.VarRef<Group> | null, Group | $.VarRef<Group> | null>(groups, k, null)
					if (ok) {
						pruned = $.appendOne(pruned, gp, $.appendZeros.nil)
					}
				}
			}
			$.pointerValue<Ctor>(c).GroupParams = pruned
		}
	}

	public pruneCtorParams(c: Ctor | $.VarRef<Ctor> | null, consumers: globalThis.Map<nodeKey, $.Slice<Ctor | $.VarRef<Ctor> | null>> | null): void {
		const dg: Graph | $.VarRef<Graph> | null = this;
		for (let __goscriptRangeTarget11 = $.pointerValue<Ctor>(c).Results, __goscriptRangeWindow10 = $.sliceRange(__goscriptRangeTarget11), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow10.length; __rangeIndex++) {
			let r = (__goscriptRangeWindow10.backing[__goscriptRangeWindow10.offset + __rangeIndex] as Result | $.VarRef<Result> | null)
			for (let __goscriptRangeTarget10 = $.mapGet<nodeKey, $.Slice<Ctor | $.VarRef<Ctor> | null>, $.Slice<Ctor | $.VarRef<Ctor> | null>>(consumers, $.pointerValue<Node>($.pointerValue<Result>(r).Node).nodeKey(), null)[0], __goscriptRangeWindow11 = $.sliceRange(__goscriptRangeTarget10), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow11.length; __rangeIndex++) {
				let ctor = (__goscriptRangeWindow11.backing[__goscriptRangeWindow11.offset + __rangeIndex] as Ctor | $.VarRef<Ctor> | null)
				void (ctor !== null && (ctor as any).__isVarRef !== true && (ctor as any).__goValue === undefined ? ((ctor as any) as Ctor).removeParam($.pointerValue<Node>($.pointerValue<Result>(r).Node).nodeKey()) : Ctor.prototype.removeParam.call(ctor, $.pointerValue<Node>($.pointerValue<Result>(r).Node).nodeKey()))
			}
		}
	}

	public pruneCtors(failed: globalThis.Map<CtorID, {}> | null): void {
		let dg: Graph | $.VarRef<Graph> | null = this;
		const dg$: Graph = dg == null ? $.pointerTarget<Graph>(dg) : (dg as any).__isVarRef === true ? (dg as any).value : (dg as any).__goValue === undefined ? (dg as any) : $.pointerTarget<Graph>(dg)
		let pruned: $.Slice<Ctor | $.VarRef<Ctor> | null> = null! as $.Slice<Ctor | $.VarRef<Ctor> | null>
		for (let __goscriptRangeTarget12 = (dg$ as Graph).Ctors, __goscriptRangeWindow12 = $.sliceRange(__goscriptRangeTarget12), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow12.length; __rangeIndex++) {
			let c = (__goscriptRangeWindow12.backing[__goscriptRangeWindow12.offset + __rangeIndex] as Ctor | $.VarRef<Ctor> | null)
			{
				let [, ok] = $.mapGet<CtorID, {}, {}>(failed, $.pointerValue<Ctor>(c).ID, {})
				if (ok) {
					pruned = $.appendOne(pruned, c, $.appendZeros.nil)
					continue
				}
			}
			// If a constructor is deleted, the constructor's stale result references need to
			// be removed from that result's Group and/or consuming constructor.
			void (dg !== null && (dg as any).__isVarRef !== true && (dg as any).__goValue === undefined ? ((dg as any) as Graph).pruneCtorParams(c, (dg$ as Graph).consumers) : Graph.prototype.pruneCtorParams.call(dg, c, (dg$ as Graph).consumers))
			void (dg !== null && (dg as any).__isVarRef !== true && (dg as any).__goValue === undefined ? ((dg as any) as Graph).pruneGroupResults(c, (dg$ as Graph).groupMap) : Graph.prototype.pruneGroupResults.call(dg, c, (dg$ as Graph).groupMap))
			$.deleteMapEntry((dg$ as Graph).ctorMap, $.pointerValue<Ctor>(c).ID)
		}

		;(dg$ as Graph).Ctors = pruned
	}

	public pruneGroupResults(c: Ctor | $.VarRef<Ctor> | null, groups: globalThis.Map<nodeKey, Group | $.VarRef<Group> | null> | null): void {
		const dg: Graph | $.VarRef<Graph> | null = this;
		for (let __goscriptRangeTarget13 = $.pointerValue<Ctor>(c).Results, __goscriptRangeWindow13 = $.sliceRange(__goscriptRangeTarget13), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow13.length; __rangeIndex++) {
			let r = (__goscriptRangeWindow13.backing[__goscriptRangeWindow13.offset + __rangeIndex] as Result | $.VarRef<Result> | null)
			let k = $.pointerValue<Node>($.pointerValue<Result>(r).Node).nodeKey()
			if ($.stringEqual(k.group, "")) {
				continue
			}

			let __goscriptTuple3: any = $.mapGet<nodeKey, Group | $.VarRef<Group> | null, Group | $.VarRef<Group> | null>(groups, k, null)
			let g: Group | $.VarRef<Group> | null = __goscriptTuple3[0]
			let ok = __goscriptTuple3[1]
			if (ok) {
				void (g !== null && (g as any).__isVarRef !== true && (g as any).__goValue === undefined ? ((g as any) as Group).removeResult(r) : Group.prototype.removeResult.call(g, r))
			}
		}
	}

	public pruneGroups(failed: globalThis.Map<nodeKey, {}> | null): void {
		let dg: Graph | $.VarRef<Graph> | null = this;
		const dg$: Graph = dg == null ? $.pointerTarget<Graph>(dg) : (dg as any).__isVarRef === true ? (dg as any).value : (dg as any).__goValue === undefined ? (dg as any) : $.pointerTarget<Graph>(dg)
		let pruned: $.Slice<Group | $.VarRef<Group> | null> = null! as $.Slice<Group | $.VarRef<Group> | null>
		for (let __goscriptRangeTarget14 = (dg$ as Graph).Groups, __goscriptRangeWindow14 = $.sliceRange(__goscriptRangeTarget14), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow14.length; __rangeIndex++) {
			let g = (__goscriptRangeWindow14.backing[__goscriptRangeWindow14.offset + __rangeIndex] as Group | $.VarRef<Group> | null)
			let k = (g !== null && (g as any).__isVarRef !== true && (g as any).__goValue === undefined ? ((g as any) as Group).nodeKey() : Group.prototype.nodeKey.call(g))
			{
				let [, ok] = $.mapGet<nodeKey, {}, {}>(failed, k, {})
				if (ok) {
					pruned = $.appendOne(pruned, g, $.appendZeros.nil)
					continue
				}
			}
			$.deleteMapEntry((dg$ as Graph).groupMap, (k).clone())
		}
		;(dg$ as Graph).Groups = pruned

		void (dg !== null && (dg as any).__isVarRef !== true && (dg as any).__goValue === undefined ? ((dg as any) as Graph).pruneCtorGroupParams((dg$ as Graph).groupMap) : Graph.prototype.pruneCtorGroupParams.call(dg, (dg$ as Graph).groupMap))
	}

	static __typeInfo = $.registerStructType(
		"dot.Graph",
		() => new Graph(),
		() => [$.methodSignature("AddCtor", [["c", /* @__PURE__ */ $.pointerType("dot.Ctor")], ["paramList", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("dot.Param"))], ["resultList", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("dot.Result"))]], [], true), $.methodSignature("AddMissingNodes", [["results", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("dot.Result"))]], [], true), $.methodSignature("FailGroupNodes", [["name", /* @__PURE__ */ $.basicType("string")], ["t", "reflect.Type"], ["id", /* @__PURE__ */ $.basicType("uintptr", "dot.CtorID")]], [], true), $.methodSignature("FailNodes", [["results", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("dot.Result"))], ["id", /* @__PURE__ */ $.basicType("uintptr", "dot.CtorID")]], [], true), $.methodSignature("PruneSuccess", [], [], true), $.methodSignature("addRootCause", [["r", /* @__PURE__ */ $.pointerType("dot.Result")]], [], true), $.methodSignature("addToGroup", [["r", /* @__PURE__ */ $.pointerType("dot.Result")], ["id", /* @__PURE__ */ $.basicType("uintptr", "dot.CtorID")]], [], true), $.methodSignature("addTransitiveFailure", [["r", /* @__PURE__ */ $.pointerType("dot.Result")]], [], true), $.methodSignature("failNode", [["r", /* @__PURE__ */ $.pointerType("dot.Result")], ["isRootCause", /* @__PURE__ */ $.basicType("bool")]], [], true), $.methodSignature("getGroup", [["k", "dot.nodeKey"]], [/* @__PURE__ */ $.pointerType("dot.Group")], true), $.methodSignature("pruneCtorGroupParams", [["groups", /* @__PURE__ */ $.mapType("dot.nodeKey", /* @__PURE__ */ $.pointerType("dot.Group"))]], [], true), $.methodSignature("pruneCtorParams", [["c", /* @__PURE__ */ $.pointerType("dot.Ctor")], ["consumers", /* @__PURE__ */ $.mapType("dot.nodeKey", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("dot.Ctor")))]], [], true), $.methodSignature("pruneCtors", [["failed", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("uintptr", "dot.CtorID"), { kind: $.TypeKind.Struct, methods: [], fields: [] })]], [], true), $.methodSignature("pruneGroupResults", [["c", /* @__PURE__ */ $.pointerType("dot.Ctor")], ["groups", /* @__PURE__ */ $.mapType("dot.nodeKey", /* @__PURE__ */ $.pointerType("dot.Group"))]], [], true), $.methodSignature("pruneGroups", [["failed", /* @__PURE__ */ $.mapType("dot.nodeKey", { kind: $.TypeKind.Struct, methods: [], fields: [] })]], [], true)],
		Graph,
		() => [/* @__PURE__ */ $.structField("Ctors", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("dot.Ctor")), [0], 0, true), /* @__PURE__ */ $.structField("ctorMap", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("uintptr", "dot.CtorID"), /* @__PURE__ */ $.pointerType("dot.Ctor")), [1], 24, false, { pkgPath: "go.uber.org/dig/internal/dot" }), /* @__PURE__ */ $.structField("Groups", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("dot.Group")), [2], 32, true), /* @__PURE__ */ $.structField("groupMap", /* @__PURE__ */ $.mapType("dot.nodeKey", /* @__PURE__ */ $.pointerType("dot.Group")), [3], 56, false, { pkgPath: "go.uber.org/dig/internal/dot" }), /* @__PURE__ */ $.structField("consumers", /* @__PURE__ */ $.mapType("dot.nodeKey", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("dot.Ctor"))), [4], 64, false, { pkgPath: "go.uber.org/dig/internal/dot" }), /* @__PURE__ */ $.structField("Failed", /* @__PURE__ */ $.pointerType("dot.FailedNodes"), [5], 72, true)]
	)
}

export class FailedNodes {
	// RootCauses is a list of the point of failures. They are the root causes
	// of failed invokes and can be either missing types (not provided) or
	// error types (error providing).
	public get RootCauses(): $.Slice<Result | $.VarRef<Result> | null> {
		return this._fields.RootCauses
	}

	public set RootCauses(value: $.Slice<Result | $.VarRef<Result> | null>) {
		this._fields.RootCauses = value
	}

	// TransitiveFailures is the list of nodes that failed to build due to
	// missing/failed dependencies.
	public get TransitiveFailures(): $.Slice<Result | $.VarRef<Result> | null> {
		return this._fields.TransitiveFailures
	}

	public set TransitiveFailures(value: $.Slice<Result | $.VarRef<Result> | null>) {
		this._fields.TransitiveFailures = value
	}

	// ctors is a collection of failed constructors IDs that are populated as the graph is
	// traversed for errors.
	public get ctors(): globalThis.Map<CtorID, {}> | null {
		return this._fields.ctors
	}

	public set ctors(value: globalThis.Map<CtorID, {}> | null) {
		this._fields.ctors = value
	}

	// Groups is a collection of failed groupKeys that is populated as the graph is traversed
	// for errors.
	public get groups(): globalThis.Map<nodeKey, {}> | null {
		return this._fields.groups
	}

	public set groups(value: globalThis.Map<nodeKey, {}> | null) {
		this._fields.groups = value
	}

	public _fields: {
		RootCauses: $.Slice<Result | $.VarRef<Result> | null>
		TransitiveFailures: $.Slice<Result | $.VarRef<Result> | null>
		ctors: globalThis.Map<CtorID, {}> | null
		groups: globalThis.Map<nodeKey, {}> | null
	}

	constructor(init?: Partial<{RootCauses?: $.Slice<Result | $.VarRef<Result> | null>, TransitiveFailures?: $.Slice<Result | $.VarRef<Result> | null>, ctors?: globalThis.Map<CtorID, {}> | null, groups?: globalThis.Map<nodeKey, {}> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			RootCauses: init?.RootCauses ?? (null! as $.Slice<Result | $.VarRef<Result> | null>),
			TransitiveFailures: init?.TransitiveFailures ?? (null! as $.Slice<Result | $.VarRef<Result> | null>),
			ctors: init?.ctors ?? (null! as globalThis.Map<CtorID, {}> | null),
			groups: init?.groups ?? (null! as globalThis.Map<nodeKey, {}> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): FailedNodes {
		return new FailedNodes(this, true)
	}

	public __goscriptAssign(source: FailedNodes): void {
		const target = this._fields
		const values = source._fields
		target.RootCauses = values.RootCauses
		target.TransitiveFailures = values.TransitiveFailures
		target.ctors = values.ctors
		target.groups = values.groups
	}

	static __typeInfo = $.registerStructType(
		"dot.FailedNodes",
		() => new FailedNodes(),
		() => [],
		FailedNodes,
		() => [/* @__PURE__ */ $.structField("RootCauses", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("dot.Result")), [0], 0, true), /* @__PURE__ */ $.structField("TransitiveFailures", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("dot.Result")), [1], 24, true), /* @__PURE__ */ $.structField("ctors", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("uintptr", "dot.CtorID"), { kind: $.TypeKind.Struct, methods: [], fields: [] }), [2], 48, false, { pkgPath: "go.uber.org/dig/internal/dot" }), /* @__PURE__ */ $.structField("groups", /* @__PURE__ */ $.mapType("dot.nodeKey", { kind: $.TypeKind.Struct, methods: [], fields: [] }), [3], 56, false, { pkgPath: "go.uber.org/dig/internal/dot" })]
	)
}

export const noError: ErrorType = 0

export const rootCause: ErrorType = 1

export const transitiveFailure: ErrorType = 2

export function NewGraph(): Graph | $.VarRef<Graph> | null {
	return new Graph({ctorMap: $.makeMap<CtorID, Ctor | $.VarRef<Ctor> | null>(), groupMap: $.makeMap<nodeKey, Group | $.VarRef<Group> | null>(), consumers: $.makeMap<nodeKey, $.Slice<Ctor | $.VarRef<Ctor> | null>>(), Failed: new FailedNodes({ctors: $.makeMap<CtorID, {}>(), groups: $.makeMap<nodeKey, {}>()})})
}

export function NewGroup(k: nodeKey): Group | $.VarRef<Group> | null {
	return new Group({Type: k.t, Name: k.group})
}

export function ErrorType_Color(s: ErrorType): string {
	switch (s) {
		case 1:
		{
			return "red"
			break
		}
		case 2:
		{
			return "orange"
			break
		}
		default:
		{
			return "black"
			break
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

var __goscriptAwait: any
