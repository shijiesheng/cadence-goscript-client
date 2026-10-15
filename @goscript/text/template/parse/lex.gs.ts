// Generated file based on lex.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as strings from "@goscript/strings/index.js"

import * as unicode from "@goscript/unicode/index.js"

import * as utf8 from "@goscript/unicode/utf8/index.js"

import * as __goscript_node from "./node.gs.ts"
import "@goscript/fmt/index.js"
import "@goscript/strings/index.js"
import "@goscript/unicode/index.js"
import "@goscript/unicode/utf8/index.js"
import "./node.gs.ts"

$.registerTypePackagePath("text/template/parse", ["parse.item", "parse.itemType", "parse.stateFn", "parse.lexer", "parse.lexOptions"])

export type itemType = number

export type stateFn = ((_p0: lexer | $.VarRef<lexer> | null) => stateFn | null | globalThis.Promise<stateFn | null>) | null

export class item {
	public get typ(): itemType {
		return this._fields.typ
	}

	public set typ(value: itemType) {
		this._fields.typ = value
	}

	public get pos(): __goscript_node.Pos {
		return this._fields.pos
	}

	public set pos(value: __goscript_node.Pos) {
		this._fields.pos = value
	}

	public get val(): string {
		return this._fields.val
	}

	public set val(value: string) {
		this._fields.val = value
	}

	public get line(): number {
		return this._fields.line
	}

	public set line(value: number) {
		this._fields.line = value
	}

	public _fields: {
		typ: itemType
		pos: __goscript_node.Pos
		val: string
		line: number
	}

	constructor(init?: Partial<{typ?: itemType, pos?: __goscript_node.Pos, val?: string, line?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			typ: init?.typ ?? (0 as itemType),
			pos: init?.pos ?? (0 as __goscript_node.Pos),
			val: init?.val ?? ("" as string),
			line: init?.line ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): item {
		return new item(this, true)
	}

	public __goscriptAssign(source: item): void {
		const target = this._fields
		const values = source._fields
		target.typ = values.typ
		target.pos = values.pos
		target.val = values.val
		target.line = values.line
	}

	public async String(): globalThis.Promise<string> {
		const i = this;
		switch ((true as boolean)) {
			case i.typ == 8:
			{
				return "EOF"
				break
			}
			case i.typ == 0:
			{
				return i.val
				break
			}
			case i.typ > 22:
			{
				return fmt.Sprintf("<%s>", i.val)
				break
			}
			case $.stringLen(i.val) > 10:
			{
				return fmt.Sprintf("%.10q...", i.val)
				break
			}
		}
		return fmt.Sprintf("%q", i.val)
	}

	static __typeInfo = $.registerStructType(
		"parse.item",
		() => new item(),
		() => [$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])],
		item,
		() => [/* @__PURE__ */ $.structField("typ", /* @__PURE__ */ $.basicType("int", "parse.itemType"), [0], 0, false, { pkgPath: "text/template/parse" }), /* @__PURE__ */ $.structField("pos", /* @__PURE__ */ $.basicType("int", "parse.Pos"), [1], 8, false, { pkgPath: "text/template/parse" }), /* @__PURE__ */ $.structField("val", /* @__PURE__ */ $.basicType("string"), [2], 16, false, { pkgPath: "text/template/parse" }), /* @__PURE__ */ $.structField("line", /* @__PURE__ */ $.basicType("int"), [3], 32, false, { pkgPath: "text/template/parse" })]
	)
}

export class lexOptions {
	public get emitComment(): boolean {
		return this._fields.emitComment
	}

	public set emitComment(value: boolean) {
		this._fields.emitComment = value
	}

	public get breakOK(): boolean {
		return this._fields.breakOK
	}

	public set breakOK(value: boolean) {
		this._fields.breakOK = value
	}

	public get continueOK(): boolean {
		return this._fields.continueOK
	}

	public set continueOK(value: boolean) {
		this._fields.continueOK = value
	}

	public _fields: {
		emitComment: boolean
		breakOK: boolean
		continueOK: boolean
	}

	constructor(init?: Partial<{emitComment?: boolean, breakOK?: boolean, continueOK?: boolean}>, __goscriptValue?: boolean) {
		this._fields = {
			emitComment: init?.emitComment ?? (false as boolean),
			breakOK: init?.breakOK ?? (false as boolean),
			continueOK: init?.continueOK ?? (false as boolean)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): lexOptions {
		return new lexOptions(this, true)
	}

	public __goscriptAssign(source: lexOptions): void {
		const target = this._fields
		const values = source._fields
		target.emitComment = values.emitComment
		target.breakOK = values.breakOK
		target.continueOK = values.continueOK
	}

	static __typeInfo = $.registerStructType(
		"parse.lexOptions",
		() => new lexOptions(),
		() => [],
		lexOptions,
		() => [/* @__PURE__ */ $.structField("emitComment", /* @__PURE__ */ $.basicType("bool"), [0], 0, false, { pkgPath: "text/template/parse" }), /* @__PURE__ */ $.structField("breakOK", /* @__PURE__ */ $.basicType("bool"), [1], 1, false, { pkgPath: "text/template/parse" }), /* @__PURE__ */ $.structField("continueOK", /* @__PURE__ */ $.basicType("bool"), [2], 2, false, { pkgPath: "text/template/parse" })]
	)
}

export class lexer {
	public get name(): string {
		return this._fields.name
	}

	public set name(value: string) {
		this._fields.name = value
	}

	public get input(): string {
		return this._fields.input
	}

	public set input(value: string) {
		this._fields.input = value
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

	public get pos(): __goscript_node.Pos {
		return this._fields.pos
	}

	public set pos(value: __goscript_node.Pos) {
		this._fields.pos = value
	}

	public get start(): __goscript_node.Pos {
		return this._fields.start
	}

	public set start(value: __goscript_node.Pos) {
		this._fields.start = value
	}

	public get atEOF(): boolean {
		return this._fields.atEOF
	}

	public set atEOF(value: boolean) {
		this._fields.atEOF = value
	}

	public get parenDepth(): number {
		return this._fields.parenDepth
	}

	public set parenDepth(value: number) {
		this._fields.parenDepth = value
	}

	public get line(): number {
		return this._fields.line
	}

	public set line(value: number) {
		this._fields.line = value
	}

	public get startLine(): number {
		return this._fields.startLine
	}

	public set startLine(value: number) {
		this._fields.startLine = value
	}

	public get item(): item {
		return this._fields.item
	}

	public set item(value: item) {
		this._fields.item = value
	}

	public get insideAction(): boolean {
		return this._fields.insideAction
	}

	public set insideAction(value: boolean) {
		this._fields.insideAction = value
	}

	public get options(): lexOptions {
		return this._fields.options
	}

	public set options(value: lexOptions) {
		this._fields.options = value
	}

	public _fields: {
		name: string
		input: string
		leftDelim: string
		rightDelim: string
		pos: __goscript_node.Pos
		start: __goscript_node.Pos
		atEOF: boolean
		parenDepth: number
		line: number
		startLine: number
		item: item
		insideAction: boolean
		options: lexOptions
	}

	constructor(init?: Partial<{name?: string, input?: string, leftDelim?: string, rightDelim?: string, pos?: __goscript_node.Pos, start?: __goscript_node.Pos, atEOF?: boolean, parenDepth?: number, line?: number, startLine?: number, item?: item, insideAction?: boolean, options?: lexOptions}>, __goscriptValue?: boolean) {
		this._fields = {
			name: init?.name ?? ("" as string),
			input: init?.input ?? ("" as string),
			leftDelim: init?.leftDelim ?? ("" as string),
			rightDelim: init?.rightDelim ?? ("" as string),
			pos: init?.pos ?? (0 as __goscript_node.Pos),
			start: init?.start ?? (0 as __goscript_node.Pos),
			atEOF: init?.atEOF ?? (false as boolean),
			parenDepth: init?.parenDepth ?? (0 as number),
			line: init?.line ?? (0 as number),
			startLine: init?.startLine ?? (0 as number),
			item: init?.item ? init.item.clone() : new item(undefined, true),
			insideAction: init?.insideAction ?? (false as boolean),
			options: init?.options ? init.options.clone() : new lexOptions(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): lexer {
		return new lexer(this, true)
	}

	public __goscriptAssign(source: lexer): void {
		const target = this._fields
		const values = source._fields
		target.name = values.name
		target.input = values.input
		target.leftDelim = values.leftDelim
		target.rightDelim = values.rightDelim
		target.pos = values.pos
		target.start = values.start
		target.atEOF = values.atEOF
		target.parenDepth = values.parenDepth
		target.line = values.line
		target.startLine = values.startLine
		$.assignStruct(target.item, values.item)
		target.insideAction = values.insideAction
		$.assignStruct(target.options, values.options)
	}

	public accept(valid: string): boolean {
		const l: lexer | $.VarRef<lexer> | null = this;
		if (strings.ContainsRune(valid, (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as lexer).next() : lexer.prototype.next.call(l)))) {
			return true
		}
		void (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as lexer).backup() : lexer.prototype.backup.call(l))
		return false
	}

	public acceptRun(valid: string): void {
		const l: lexer | $.VarRef<lexer> | null = this;
		while (strings.ContainsRune(valid, (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as lexer).next() : lexer.prototype.next.call(l)))) {
		}
		void (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as lexer).backup() : lexer.prototype.backup.call(l))
	}

	public atRightDelim(): [boolean, boolean] {
		const l: lexer | $.VarRef<lexer> | null = this;
		let delim: boolean = false
		let trimSpaces: boolean = false
		const l$: lexer = l == null ? $.pointerTarget<lexer>(l) : (l as any).__isVarRef === true ? (l as any).value : (l as any).__goValue === undefined ? (l as any) : $.pointerTarget<lexer>(l)
		if (hasRightTrimMarker($.sliceStringOrBytes((l$ as lexer).input, (l$ as lexer).pos, undefined)) && strings.HasPrefix($.sliceStringOrBytes((l$ as lexer).input, (l$ as lexer).pos + 2, undefined), (l$ as lexer).rightDelim)) {
			return [true, true]
		}
		if (strings.HasPrefix($.sliceStringOrBytes((l$ as lexer).input, (l$ as lexer).pos, undefined), (l$ as lexer).rightDelim)) {
			return [true, false]
		}
		return [false, false]
	}

	public atTerminator(): boolean {
		const l: lexer | $.VarRef<lexer> | null = this;
		const l$: lexer = l == null ? $.pointerTarget<lexer>(l) : (l as any).__isVarRef === true ? (l as any).value : (l as any).__goValue === undefined ? (l as any) : $.pointerTarget<lexer>(l)
		let r = (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as lexer).peek() : lexer.prototype.peek.call(l))
		if (isSpace(r)) {
			return true
		}
		switch (r) {
			case -1:
			case 46:
			case 44:
			case 124:
			case 58:
			case 41:
			case 40:
			{
				return true
				break
			}
		}
		return strings.HasPrefix($.sliceStringOrBytes((l$ as lexer).input, (l$ as lexer).pos, undefined), (l$ as lexer).rightDelim)
	}

	public backup(): void {
		let l: lexer | $.VarRef<lexer> | null = this;
		const l$: lexer = l == null ? $.pointerTarget<lexer>(l) : (l as any).__isVarRef === true ? (l as any).value : (l as any).__goValue === undefined ? (l as any) : $.pointerTarget<lexer>(l)
		if (!(l$ as lexer).atEOF && ((l$ as lexer).pos > 0)) {
			let [r, w] = utf8.DecodeLastRuneInString($.sliceStringOrBytes((l$ as lexer).input, undefined, (l$ as lexer).pos));
			;(l$ as lexer).pos = (l$ as lexer).pos - ($.int(w))
			// Correct newline count.
			if (r == 10) {
				;(l$ as lexer).line--
			}
		}
	}

	public emit(t: itemType): stateFn | null {
		const l: lexer | $.VarRef<lexer> | null = this;
		return lexer.prototype.emitItem.call(l, (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as lexer).thisItem(t) : lexer.prototype.thisItem.call(l, t)))
	}

	public emitItem(i: item): stateFn | null {
		let l: lexer | $.VarRef<lexer> | null = this;
		$.assignStruct($.pointerValue<lexer>(l).item, i)
		return (null as stateFn | null)
	}

	public async errorf(format: string, args: $.Slice<any>): globalThis.Promise<stateFn | null> {
		let l: lexer | $.VarRef<lexer> | null = this;
		const l$: lexer = l == null ? $.pointerTarget<lexer>(l) : (l as any).__isVarRef === true ? (l as any).value : (l as any).__goValue === undefined ? (l as any) : $.pointerTarget<lexer>(l)
		$.assignStruct((l$ as lexer).item, (await (async () => { const __goscriptLiteralField0 = await fmt.Sprintf(format, ...(args ?? [])); return new item({typ: 0, pos: (l$ as lexer).start, val: __goscriptLiteralField0, line: (l$ as lexer).startLine}, true) })()));
		;(l$ as lexer).start = 0;
		;(l$ as lexer).pos = 0;
		;(l$ as lexer).input = $.sliceStringOrBytes((l$ as lexer).input, undefined, 0)
		return (null as stateFn | null)
	}

	public ignore(): void {
		let l: lexer | $.VarRef<lexer> | null = this;
		const l$: lexer = l == null ? $.pointerTarget<lexer>(l) : (l as any).__isVarRef === true ? (l as any).value : (l as any).__goValue === undefined ? (l as any) : $.pointerTarget<lexer>(l);
		;(l$ as lexer).line = (l$ as lexer).line + (strings.Count($.sliceStringOrBytes((l$ as lexer).input, (l$ as lexer).start, (l$ as lexer).pos), "\n"));
		;(l$ as lexer).start = (l$ as lexer).pos;
		;(l$ as lexer).startLine = (l$ as lexer).line
	}

	public next(): number {
		let l: lexer | $.VarRef<lexer> | null = this;
		const l$: lexer = l == null ? $.pointerTarget<lexer>(l) : (l as any).__isVarRef === true ? (l as any).value : (l as any).__goValue === undefined ? (l as any) : $.pointerTarget<lexer>(l)
		if ($.int((l$ as lexer).pos) >= $.stringLen((l$ as lexer).input)) {
			;(l$ as lexer).atEOF = true
			return -1
		}
		let [r, w] = utf8.DecodeRuneInString($.sliceStringOrBytes((l$ as lexer).input, (l$ as lexer).pos, undefined));
		;(l$ as lexer).pos = (l$ as lexer).pos + ($.int(w))
		if (r == 10) {
			;(l$ as lexer).line++
		}
		return r
	}

	public async nextItem(): globalThis.Promise<item> {
		let l: lexer | $.VarRef<lexer> | null = this;
		const l$: lexer = l == null ? $.pointerTarget<lexer>(l) : (l as any).__isVarRef === true ? (l as any).value : (l as any).__goValue === undefined ? (l as any) : $.pointerTarget<lexer>(l)
		$.assignStruct((l$ as lexer).item, new item({typ: 8, pos: (l$ as lexer).pos, val: "EOF", line: (l$ as lexer).startLine}, true))
		let state: ((l: lexer | $.VarRef<lexer> | null) => stateFn | null | globalThis.Promise<stateFn | null>) | null = lexText
		if ((l$ as lexer).insideAction) {
			state = lexInsideAction
		}
		while (true) {
			state = ((__goscriptAwait = state!(l), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as stateFn | null)
			if (state == null) {
				return ((l$ as lexer).item).clone()
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public peek(): number {
		const l: lexer | $.VarRef<lexer> | null = this;
		let r = (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as lexer).next() : lexer.prototype.next.call(l))
		void (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as lexer).backup() : lexer.prototype.backup.call(l))
		return r
	}

	public scanNumber(): boolean {
		const l: lexer | $.VarRef<lexer> | null = this;
		// Optional leading sign.
		void (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as lexer).accept("+-") : lexer.prototype.accept.call(l, "+-"))
		// Is it hex?
		let digits = "0123456789_"
		if ((l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as lexer).accept("0") : lexer.prototype.accept.call(l, "0"))) {
			// Note: Leading 0 does not mean octal in floats.
			if ((l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as lexer).accept("xX") : lexer.prototype.accept.call(l, "xX"))) {
				digits = "0123456789abcdefABCDEF_"
			} else {
				if ((l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as lexer).accept("oO") : lexer.prototype.accept.call(l, "oO"))) {
					digits = "01234567_"
				} else {
					if ((l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as lexer).accept("bB") : lexer.prototype.accept.call(l, "bB"))) {
						digits = "01_"
					}
				}
			}
		}
		void (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as lexer).acceptRun(digits) : lexer.prototype.acceptRun.call(l, digits))
		if ((l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as lexer).accept(".") : lexer.prototype.accept.call(l, "."))) {
			void (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as lexer).acceptRun(digits) : lexer.prototype.acceptRun.call(l, digits))
		}
		if (($.stringLen(digits) == 11) && (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as lexer).accept("eE") : lexer.prototype.accept.call(l, "eE"))) {
			void (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as lexer).accept("+-") : lexer.prototype.accept.call(l, "+-"))
			void (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as lexer).acceptRun("0123456789_") : lexer.prototype.acceptRun.call(l, "0123456789_"))
		}
		if (($.stringLen(digits) == 23) && (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as lexer).accept("pP") : lexer.prototype.accept.call(l, "pP"))) {
			void (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as lexer).accept("+-") : lexer.prototype.accept.call(l, "+-"))
			void (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as lexer).acceptRun("0123456789_") : lexer.prototype.acceptRun.call(l, "0123456789_"))
		}
		// Is it imaginary?
		void (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as lexer).accept("i") : lexer.prototype.accept.call(l, "i"))
		// Next thing mustn't be alphanumeric.
		if (isAlphaNumeric((l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as lexer).peek() : lexer.prototype.peek.call(l)))) {
			void (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as lexer).next() : lexer.prototype.next.call(l))
			return false
		}
		return true
	}

	public thisItem(t: itemType): item {
		let l: lexer | $.VarRef<lexer> | null = this;
		const l$: lexer = l == null ? $.pointerTarget<lexer>(l) : (l as any).__isVarRef === true ? (l as any).value : (l as any).__goValue === undefined ? (l as any) : $.pointerTarget<lexer>(l)
		let i = new item({typ: t, pos: (l$ as lexer).start, val: $.sliceStringOrBytes((l$ as lexer).input, (l$ as lexer).start, (l$ as lexer).pos), line: (l$ as lexer).startLine}, true);
		;(l$ as lexer).start = (l$ as lexer).pos;
		;(l$ as lexer).startLine = (l$ as lexer).line
		return (i).clone()
	}

	static __typeInfo = $.registerStructType(
		"parse.lexer",
		() => new lexer(),
		() => [$.methodSignature("accept", [["valid", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("acceptRun", [["valid", /* @__PURE__ */ $.basicType("string")]], [], true), $.methodSignature("atRightDelim", [], [["delim", /* @__PURE__ */ $.basicType("bool")], ["trimSpaces", /* @__PURE__ */ $.basicType("bool")]], true), $.methodSignature("atTerminator", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("backup", [], [], true), $.methodSignature("emit", [["t", /* @__PURE__ */ $.basicType("int", "parse.itemType")]], [({ kind: $.TypeKind.Function, name: "parse.stateFn", params: [/* @__PURE__ */ $.pointerType("parse.lexer")], results: [{ kind: $.TypeKind.Function, params: [], results: [] }] } as $.FunctionTypeInfo)], true), $.methodSignature("emitItem", [["i", "parse.item"]], [({ kind: $.TypeKind.Function, name: "parse.stateFn", params: [/* @__PURE__ */ $.pointerType("parse.lexer")], results: [{ kind: $.TypeKind.Function, params: [], results: [] }] } as $.FunctionTypeInfo)], true), $.methodSignature("errorf", [["format", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [({ kind: $.TypeKind.Function, name: "parse.stateFn", params: [/* @__PURE__ */ $.pointerType("parse.lexer")], results: [{ kind: $.TypeKind.Function, params: [], results: [] }] } as $.FunctionTypeInfo)], true), $.methodSignature("ignore", [], [], true), $.methodSignature("next", [], [/* @__PURE__ */ $.basicType("int32")], true), $.methodSignature("nextItem", [], ["parse.item"], true), $.methodSignature("peek", [], [/* @__PURE__ */ $.basicType("int32")], true), $.methodSignature("scanNumber", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("thisItem", [["t", /* @__PURE__ */ $.basicType("int", "parse.itemType")]], ["parse.item"], true)],
		lexer,
		() => [/* @__PURE__ */ $.structField("name", /* @__PURE__ */ $.basicType("string"), [0], 0, false, { pkgPath: "text/template/parse" }), /* @__PURE__ */ $.structField("input", /* @__PURE__ */ $.basicType("string"), [1], 16, false, { pkgPath: "text/template/parse" }), /* @__PURE__ */ $.structField("leftDelim", /* @__PURE__ */ $.basicType("string"), [2], 32, false, { pkgPath: "text/template/parse" }), /* @__PURE__ */ $.structField("rightDelim", /* @__PURE__ */ $.basicType("string"), [3], 48, false, { pkgPath: "text/template/parse" }), /* @__PURE__ */ $.structField("pos", /* @__PURE__ */ $.basicType("int", "parse.Pos"), [4], 64, false, { pkgPath: "text/template/parse" }), /* @__PURE__ */ $.structField("start", /* @__PURE__ */ $.basicType("int", "parse.Pos"), [5], 72, false, { pkgPath: "text/template/parse" }), /* @__PURE__ */ $.structField("atEOF", /* @__PURE__ */ $.basicType("bool"), [6], 80, false, { pkgPath: "text/template/parse" }), /* @__PURE__ */ $.structField("parenDepth", /* @__PURE__ */ $.basicType("int"), [7], 88, false, { pkgPath: "text/template/parse" }), /* @__PURE__ */ $.structField("line", /* @__PURE__ */ $.basicType("int"), [8], 96, false, { pkgPath: "text/template/parse" }), /* @__PURE__ */ $.structField("startLine", /* @__PURE__ */ $.basicType("int"), [9], 104, false, { pkgPath: "text/template/parse" }), /* @__PURE__ */ $.structField("item", "parse.item", [10], 112, false, { pkgPath: "text/template/parse" }), /* @__PURE__ */ $.structField("insideAction", /* @__PURE__ */ $.basicType("bool"), [11], 152, false, { pkgPath: "text/template/parse" }), /* @__PURE__ */ $.structField("options", "parse.lexOptions", [12], 153, false, { pkgPath: "text/template/parse" })]
	)
}

export const itemError: itemType = 0

export const itemBool: itemType = 1

export const itemChar: itemType = 2

export const itemCharConstant: itemType = 3

export const itemComment: itemType = 4

export const itemComplex: itemType = 5

export const itemAssign: itemType = 6

export const itemDeclare: itemType = 7

export const itemEOF: itemType = 8

export const itemField: itemType = 9

export const itemIdentifier: itemType = 10

export const itemLeftDelim: itemType = 11

export const itemLeftParen: itemType = 12

export const itemNumber: itemType = 13

export const itemPipe: itemType = 14

export const itemRawString: itemType = 15

export const itemRightDelim: itemType = 16

export const itemRightParen: itemType = 17

export const itemSpace: itemType = 18

export const itemString: itemType = 19

export const itemText: itemType = 20

export const itemVariable: itemType = 21

export const itemKeyword: itemType = 22

export const itemBlock: itemType = 23

export const itemBreak: itemType = 24

export const itemContinue: itemType = 25

export const itemDot: itemType = 26

export const itemDefine: itemType = 27

export const itemElse: itemType = 28

export const itemEnd: itemType = 29

export const itemIf: itemType = 30

export const itemNil: itemType = 31

export const itemRange: itemType = 32

export const itemTemplate: itemType = 33

export const itemWith: itemType = 34

export const eof: number = -1

export const spaceChars: string = " \t\r\n"

export const trimMarker: number = 45

export const trimMarkerLen: __goscript_node.Pos = 2

export const defaultLeftDelim: string = "{{"

export const defaultRightDelim: string = "}}"

export const leftComment: string = "/*"

export const rightComment: string = "*/"

export let key: globalThis.Map<string, itemType> | null = $.makeMap<string, itemType>([[".", 26], ["block", 23], ["break", 24], ["continue", 25], ["define", 27], ["else", 28], ["end", 29], ["if", 30], ["range", 32], ["nil", 31], ["template", 33], ["with", 34]])

export function __goscript_set_key(__goscriptValue: globalThis.Map<string, itemType> | null): void {
	key = __goscriptValue
}

export function lex(name: string, input: string, left: string, right: string): lexer | $.VarRef<lexer> | null {
	if ($.stringEqual(left, "")) {
		left = "{{"
	}
	if ($.stringEqual(right, "")) {
		right = "}}"
	}
	let l: lexer | $.VarRef<lexer> | null = new lexer({name: name, input: input, leftDelim: left, rightDelim: right, line: 1, startLine: 1, insideAction: false})
	return l
}

export function lexText(l: lexer | $.VarRef<lexer> | null): stateFn | null {
	const l$: lexer = l == null ? $.pointerTarget<lexer>(l) : (l as any).__isVarRef === true ? (l as any).value : (l as any).__goValue === undefined ? (l as any) : $.pointerTarget<lexer>(l)
	{
		let x = strings.Index($.sliceStringOrBytes((l$ as lexer).input, (l$ as lexer).pos, undefined), (l$ as lexer).leftDelim)
		if (x >= 0) {
			if (x > 0) {
				;(l$ as lexer).pos = (l$ as lexer).pos + ($.int(x))
				// Do we trim any trailing space?
				let trimLength = 0
				let delimEnd = (l$ as lexer).pos + $.int($.stringLen((l$ as lexer).leftDelim))
				if (hasLeftTrimMarker($.sliceStringOrBytes((l$ as lexer).input, delimEnd, undefined))) {
					trimLength = rightTrimLength($.sliceStringOrBytes((l$ as lexer).input, (l$ as lexer).start, (l$ as lexer).pos))
				}
				;(l$ as lexer).pos = (l$ as lexer).pos - (trimLength);
				;(l$ as lexer).line = (l$ as lexer).line + (strings.Count($.sliceStringOrBytes((l$ as lexer).input, (l$ as lexer).start, (l$ as lexer).pos), "\n"))
				let i = (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as lexer).thisItem(20) : lexer.prototype.thisItem.call(l, 20));
				;(l$ as lexer).pos = (l$ as lexer).pos + (trimLength)
				void (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as lexer).ignore() : lexer.prototype.ignore.call(l))
				if ($.stringLen(i.val) > 0) {
					return (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as lexer).emitItem(i) : lexer.prototype.emitItem.call(l, i))
				}
			}
			return lexLeftDelim
		}
	}
	;(l$ as lexer).pos = $.int($.stringLen((l$ as lexer).input))
	// Correctly reached EOF.
	if ((l$ as lexer).pos > (l$ as lexer).start) {
		;(l$ as lexer).line = (l$ as lexer).line + (strings.Count($.sliceStringOrBytes((l$ as lexer).input, (l$ as lexer).start, (l$ as lexer).pos), "\n"))
		return (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as lexer).emit(20) : lexer.prototype.emit.call(l, 20))
	}
	return (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as lexer).emit(8) : lexer.prototype.emit.call(l, 8))
}

export function rightTrimLength(s: string): __goscript_node.Pos {
	return $.int($.stringLen(s) - $.stringLen(strings.TrimRight(s, " \t\r\n")))
}

export function leftTrimLength(s: string): __goscript_node.Pos {
	return $.int($.stringLen(s) - $.stringLen(strings.TrimLeft(s, " \t\r\n")))
}

export function lexLeftDelim(l: lexer | $.VarRef<lexer> | null): stateFn | null {
	const l$: lexer = l == null ? $.pointerTarget<lexer>(l) : (l as any).__isVarRef === true ? (l as any).value : (l as any).__goValue === undefined ? (l as any) : $.pointerTarget<lexer>(l);
	;(l$ as lexer).pos = (l$ as lexer).pos + ($.int($.stringLen((l$ as lexer).leftDelim)))
	let trimSpace = hasLeftTrimMarker($.sliceStringOrBytes((l$ as lexer).input, (l$ as lexer).pos, undefined))
	let afterMarker = 0
	if (trimSpace) {
		afterMarker = 2
	}
	if (strings.HasPrefix($.sliceStringOrBytes((l$ as lexer).input, (l$ as lexer).pos + afterMarker, undefined), "/*")) {
		;(l$ as lexer).pos = (l$ as lexer).pos + (afterMarker)
		void (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as lexer).ignore() : lexer.prototype.ignore.call(l))
		return lexComment
	}
	let i = (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as lexer).thisItem(11) : lexer.prototype.thisItem.call(l, 11));
	;(l$ as lexer).insideAction = true;
	;(l$ as lexer).pos = (l$ as lexer).pos + (afterMarker)
	void (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as lexer).ignore() : lexer.prototype.ignore.call(l));
	;(l$ as lexer).parenDepth = 0
	return (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as lexer).emitItem(i) : lexer.prototype.emitItem.call(l, i))
}

export async function lexComment(l: lexer | $.VarRef<lexer> | null): globalThis.Promise<stateFn | null> {
	const l$: lexer = l == null ? $.pointerTarget<lexer>(l) : (l as any).__isVarRef === true ? (l as any).value : (l as any).__goValue === undefined ? (l as any) : $.pointerTarget<lexer>(l);
	;(l$ as lexer).pos = (l$ as lexer).pos + (2)
	let x = strings.Index($.sliceStringOrBytes((l$ as lexer).input, (l$ as lexer).pos, undefined), "*/")
	if (x < 0) {
		return (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as lexer).errorf("unclosed comment", null) : lexer.prototype.errorf.call(l, "unclosed comment", null))
	}
	;(l$ as lexer).pos = (l$ as lexer).pos + ($.int(x + 2))
	let [delim, trimSpace] = (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as lexer).atRightDelim() : lexer.prototype.atRightDelim.call(l))
	if (!delim) {
		return (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as lexer).errorf("comment ends before closing delimiter", null) : lexer.prototype.errorf.call(l, "comment ends before closing delimiter", null))
	}
	;(l$ as lexer).line = (l$ as lexer).line + (strings.Count($.sliceStringOrBytes((l$ as lexer).input, (l$ as lexer).start, (l$ as lexer).pos), "\n"))
	let i = (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as lexer).thisItem(4) : lexer.prototype.thisItem.call(l, 4))
	if (trimSpace) {
		;(l$ as lexer).pos = (l$ as lexer).pos + (2)
	}
	;(l$ as lexer).pos = (l$ as lexer).pos + ($.int($.stringLen((l$ as lexer).rightDelim)))
	if (trimSpace) {
		;(l$ as lexer).pos = (l$ as lexer).pos + (leftTrimLength($.sliceStringOrBytes((l$ as lexer).input, (l$ as lexer).pos, undefined)))
	}
	void (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as lexer).ignore() : lexer.prototype.ignore.call(l))
	if ((l$ as lexer).options.emitComment) {
		return (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as lexer).emitItem(i) : lexer.prototype.emitItem.call(l, i))
	}
	return lexText
}

export function lexRightDelim(l: lexer | $.VarRef<lexer> | null): stateFn | null {
	const l$: lexer = l == null ? $.pointerTarget<lexer>(l) : (l as any).__isVarRef === true ? (l as any).value : (l as any).__goValue === undefined ? (l as any) : $.pointerTarget<lexer>(l)
	let [, trimSpace] = (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as lexer).atRightDelim() : lexer.prototype.atRightDelim.call(l))
	if (trimSpace) {
		;(l$ as lexer).pos = (l$ as lexer).pos + (2)
		void (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as lexer).ignore() : lexer.prototype.ignore.call(l))
	}
	;(l$ as lexer).pos = (l$ as lexer).pos + ($.int($.stringLen((l$ as lexer).rightDelim)))
	let i = (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as lexer).thisItem(16) : lexer.prototype.thisItem.call(l, 16))
	if (trimSpace) {
		;(l$ as lexer).pos = (l$ as lexer).pos + (leftTrimLength($.sliceStringOrBytes((l$ as lexer).input, (l$ as lexer).pos, undefined)))
		void (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as lexer).ignore() : lexer.prototype.ignore.call(l))
	}
	;(l$ as lexer).insideAction = false
	return (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as lexer).emitItem(i) : lexer.prototype.emitItem.call(l, i))
}

export async function lexInsideAction(l: lexer | $.VarRef<lexer> | null): globalThis.Promise<stateFn | null> {
	const l$: lexer = l == null ? $.pointerTarget<lexer>(l) : (l as any).__isVarRef === true ? (l as any).value : (l as any).__goValue === undefined ? (l as any) : $.pointerTarget<lexer>(l)
	// Either number, quoted string, or identifier.
	// Spaces separate arguments; runs of spaces turn into itemSpace.
	// Pipe symbols separate and are emitted.
	let [delim, ] = (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as lexer).atRightDelim() : lexer.prototype.atRightDelim.call(l))
	if (delim) {
		if ((l$ as lexer).parenDepth == 0) {
			return lexRightDelim
		}
		return (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as lexer).errorf("unclosed left paren", null) : lexer.prototype.errorf.call(l, "unclosed left paren", null))
	}
	{
		let r = (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as lexer).next() : lexer.prototype.next.call(l))
		switch ((true as boolean)) {
			case r == -1:
			{
				return (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as lexer).errorf("unclosed action", null) : lexer.prototype.errorf.call(l, "unclosed action", null))
				break
			}
			case isSpace(r):
			{
				void (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as lexer).backup() : lexer.prototype.backup.call(l))
				return lexSpace
				break
			}
			case r == 61:
			{
				return (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as lexer).emit(6) : lexer.prototype.emit.call(l, 6))
				break
			}
			case r == 58:
			{
				if ((l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as lexer).next() : lexer.prototype.next.call(l)) != 61) {
					return (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as lexer).errorf("expected :=", null) : lexer.prototype.errorf.call(l, "expected :=", null))
				}
				return (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as lexer).emit(7) : lexer.prototype.emit.call(l, 7))
				break
			}
			case r == 124:
			{
				return (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as lexer).emit(14) : lexer.prototype.emit.call(l, 14))
				break
			}
			case r == 34:
			{
				return lexQuote
				break
			}
			case r == 96:
			{
				return lexRawQuote
				break
			}
			case r == 36:
			{
				return lexVariable
				break
			}
			case r == 39:
			{
				return lexChar
				break
			}
			case r == 46:
			{
				if ((l$ as lexer).pos < $.int($.stringLen((l$ as lexer).input))) {
					let __goscriptShadow0 = $.indexString((l$ as lexer).input, (l$ as lexer).pos)
					if ((__goscriptShadow0 < 48) || (57 < __goscriptShadow0)) {
						return lexField
					}
				}
			}
			case ((r == 43) || (r == 45)) || ((48 <= r) && (r <= 57)):
			{
				void (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as lexer).backup() : lexer.prototype.backup.call(l))
				return lexNumber
				break
			}
			case isAlphaNumeric(r):
			{
				void (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as lexer).backup() : lexer.prototype.backup.call(l))
				return lexIdentifier
				break
			}
			case r == 40:
			{
				;(l$ as lexer).parenDepth++
				return (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as lexer).emit(12) : lexer.prototype.emit.call(l, 12))
				break
			}
			case r == 41:
			{
				;(l$ as lexer).parenDepth--
				if ((l$ as lexer).parenDepth < 0) {
					return (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as lexer).errorf("unexpected right paren", null) : lexer.prototype.errorf.call(l, "unexpected right paren", null))
				}
				return (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as lexer).emit(17) : lexer.prototype.emit.call(l, 17))
				break
			}
			case (r <= 127) && unicode.IsPrint(r):
			{
				return (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as lexer).emit(2) : lexer.prototype.emit.call(l, 2))
				break
			}
			default:
			{
				return (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as lexer).errorf("unrecognized character in action: %#U", $.arrayToSlice<any>([$.basicInterfaceValue(r, "rune", "int32")])) : lexer.prototype.errorf.call(l, "unrecognized character in action: %#U", $.arrayToSlice<any>([$.basicInterfaceValue(r, "rune", "int32")])))
				break
			}
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export function lexSpace(l: lexer | $.VarRef<lexer> | null): stateFn | null {
	const l$: lexer = l == null ? $.pointerTarget<lexer>(l) : (l as any).__isVarRef === true ? (l as any).value : (l as any).__goValue === undefined ? (l as any) : $.pointerTarget<lexer>(l)
	let r: number = 0
	let numSpaces: number = 0
	while (true) {
		r = (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as lexer).peek() : lexer.prototype.peek.call(l))
		if (!isSpace(r)) {
			break
		}
		void (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as lexer).next() : lexer.prototype.next.call(l))
		numSpaces++
	}
	// Be careful about a trim-marked closing delimiter, which has a minus
	// after a space. We know there is a space, so check for the '-' that might follow.
	if (hasRightTrimMarker($.sliceStringOrBytes((l$ as lexer).input, (l$ as lexer).pos - 1, undefined)) && strings.HasPrefix($.sliceStringOrBytes((l$ as lexer).input, ((l$ as lexer).pos - 1) + 2, undefined), (l$ as lexer).rightDelim)) {
		void (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as lexer).backup() : lexer.prototype.backup.call(l))
		if (numSpaces == 1) {
			return lexRightDelim
		}
	}
	return (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as lexer).emit(18) : lexer.prototype.emit.call(l, 18))
}

export async function lexIdentifier(l: lexer | $.VarRef<lexer> | null): globalThis.Promise<stateFn | null> {
	const l$: lexer = l == null ? $.pointerTarget<lexer>(l) : (l as any).__isVarRef === true ? (l as any).value : (l as any).__goValue === undefined ? (l as any) : $.pointerTarget<lexer>(l)
	while (true) {
		{
			let r = (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as lexer).next() : lexer.prototype.next.call(l))
			switch ((true as boolean)) {
				case isAlphaNumeric(r):
				{
					break
				}
				default:
				{
					void (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as lexer).backup() : lexer.prototype.backup.call(l))
					let word = $.sliceStringOrBytes((l$ as lexer).input, (l$ as lexer).start, (l$ as lexer).pos)
					if (!(l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as lexer).atTerminator() : lexer.prototype.atTerminator.call(l))) {
						return (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as lexer).errorf("bad character %#U", $.arrayToSlice<any>([$.basicInterfaceValue(r, "rune", "int32")])) : lexer.prototype.errorf.call(l, "bad character %#U", $.arrayToSlice<any>([$.basicInterfaceValue(r, "rune", "int32")])))
					}
					switch ((true as boolean)) {
						case $.mapGet<string, itemType, itemType>(key, word, 0)[0] > 22:
						{
							let __goscriptShadow1 = $.mapGet<string, itemType, itemType>(key, word, 0)[0]
							if (((__goscriptShadow1 == 24) && !(l$ as lexer).options.breakOK) || ((__goscriptShadow1 == 25) && !(l$ as lexer).options.continueOK)) {
								return (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as lexer).emit(10) : lexer.prototype.emit.call(l, 10))
							}
							return (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as lexer).emit(__goscriptShadow1) : lexer.prototype.emit.call(l, __goscriptShadow1))
							break
						}
						case $.indexString(word, 0) == 46:
						{
							return (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as lexer).emit(9) : lexer.prototype.emit.call(l, 9))
							break
						}
						case $.stringEqual(word, "true"):
						case $.stringEqual(word, "false"):
						{
							return (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as lexer).emit(1) : lexer.prototype.emit.call(l, 1))
							break
						}
						default:
						{
							return (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as lexer).emit(10) : lexer.prototype.emit.call(l, 10))
							break
						}
					}
					break
				}
			}
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export async function lexField(l: lexer | $.VarRef<lexer> | null): globalThis.Promise<stateFn | null> {
	return lexFieldOrVariable(l, 9)
}

export async function lexVariable(l: lexer | $.VarRef<lexer> | null): globalThis.Promise<stateFn | null> {
	if ((l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as lexer).atTerminator() : lexer.prototype.atTerminator.call(l))) {
		return (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as lexer).emit(21) : lexer.prototype.emit.call(l, 21))
	}
	return lexFieldOrVariable(l, 21)
}

export async function lexFieldOrVariable(l: lexer | $.VarRef<lexer> | null, typ: itemType): globalThis.Promise<stateFn | null> {
	if ((l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as lexer).atTerminator() : lexer.prototype.atTerminator.call(l))) {
		if (typ == 21) {
			return (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as lexer).emit(21) : lexer.prototype.emit.call(l, 21))
		}
		return (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as lexer).emit(26) : lexer.prototype.emit.call(l, 26))
	}
	let r: number = 0
	while (true) {
		r = (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as lexer).next() : lexer.prototype.next.call(l))
		if (!isAlphaNumeric(r)) {
			void (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as lexer).backup() : lexer.prototype.backup.call(l))
			break
		}
	}
	if (!(l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as lexer).atTerminator() : lexer.prototype.atTerminator.call(l))) {
		return (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as lexer).errorf("bad character %#U", $.arrayToSlice<any>([$.basicInterfaceValue(r, "rune", "int32")])) : lexer.prototype.errorf.call(l, "bad character %#U", $.arrayToSlice<any>([$.basicInterfaceValue(r, "rune", "int32")])))
	}
	return (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as lexer).emit(typ) : lexer.prototype.emit.call(l, typ))
}

export async function lexChar(l: lexer | $.VarRef<lexer> | null): globalThis.Promise<stateFn | null> {
	Loop: while (true) {
		switch ((l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as lexer).next() : lexer.prototype.next.call(l))) {
			case 92:
			{
				{
					let r = (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as lexer).next() : lexer.prototype.next.call(l))
					if ((r != -1) && (r != 10)) {
						break
					}
				}
			}
			case -1:
			case 10:
			{
				return (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as lexer).errorf("unterminated character constant", null) : lexer.prototype.errorf.call(l, "unterminated character constant", null))
				break
			}
			case 39:
			{
				break Loop
				break
			}
		}
	}
	return (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as lexer).emit(3) : lexer.prototype.emit.call(l, 3))
}

export async function lexNumber(l: lexer | $.VarRef<lexer> | null): globalThis.Promise<stateFn | null> {
	const l$: lexer = l == null ? $.pointerTarget<lexer>(l) : (l as any).__isVarRef === true ? (l as any).value : (l as any).__goValue === undefined ? (l as any) : $.pointerTarget<lexer>(l)
	if (!(l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as lexer).scanNumber() : lexer.prototype.scanNumber.call(l))) {
		return lexer.prototype.errorf.call(l, "bad number syntax: %q", $.arrayToSlice<any>([$.sliceStringOrBytes((l$ as lexer).input, (l$ as lexer).start, (l$ as lexer).pos)]))
	}
	{
		let sign = (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as lexer).peek() : lexer.prototype.peek.call(l))
		if ((sign == 43) || (sign == 45)) {
			// Complex: 1+2i. No spaces, must end in 'i'.
			if (!(l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as lexer).scanNumber() : lexer.prototype.scanNumber.call(l)) || ($.indexString((l$ as lexer).input, (l$ as lexer).pos - 1) != 105)) {
				return lexer.prototype.errorf.call(l, "bad number syntax: %q", $.arrayToSlice<any>([$.sliceStringOrBytes((l$ as lexer).input, (l$ as lexer).start, (l$ as lexer).pos)]))
			}
			return (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as lexer).emit(5) : lexer.prototype.emit.call(l, 5))
		}
	}
	return (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as lexer).emit(13) : lexer.prototype.emit.call(l, 13))
}

export async function lexQuote(l: lexer | $.VarRef<lexer> | null): globalThis.Promise<stateFn | null> {
	Loop: while (true) {
		switch ((l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as lexer).next() : lexer.prototype.next.call(l))) {
			case 92:
			{
				{
					let r = (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as lexer).next() : lexer.prototype.next.call(l))
					if ((r != -1) && (r != 10)) {
						break
					}
				}
			}
			case -1:
			case 10:
			{
				return (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as lexer).errorf("unterminated quoted string", null) : lexer.prototype.errorf.call(l, "unterminated quoted string", null))
				break
			}
			case 34:
			{
				break Loop
				break
			}
		}
	}
	return (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as lexer).emit(19) : lexer.prototype.emit.call(l, 19))
}

export async function lexRawQuote(l: lexer | $.VarRef<lexer> | null): globalThis.Promise<stateFn | null> {
	Loop: while (true) {
		switch ((l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as lexer).next() : lexer.prototype.next.call(l))) {
			case -1:
			{
				return (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as lexer).errorf("unterminated raw quoted string", null) : lexer.prototype.errorf.call(l, "unterminated raw quoted string", null))
				break
			}
			case 96:
			{
				break Loop
				break
			}
		}
	}
	return (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as lexer).emit(15) : lexer.prototype.emit.call(l, 15))
}

export function isSpace(r: number): boolean {
	return (((r == 32) || (r == 9)) || (r == 13)) || (r == 10)
}

export function isAlphaNumeric(r: number): boolean {
	return ((r == 95) || unicode.IsLetter(r)) || unicode.IsDigit(r)
}

export function hasLeftTrimMarker(s: string): boolean {
	return (($.stringLen(s) >= 2) && ($.indexString(s, 0) == 45)) && isSpace($.int($.indexString(s, 1), 32))
}

export function hasRightTrimMarker(s: string): boolean {
	return (($.stringLen(s) >= 2) && isSpace($.int($.indexString(s, 0), 32))) && ($.indexString(s, 1) == 45)
}

var __goscriptAwait: any
