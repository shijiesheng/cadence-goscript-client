// Generated file based on decode.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as encoding from "@goscript/encoding/index.js"

import * as base64 from "@goscript/encoding/base64/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as io from "@goscript/io/index.js"

import * as math from "@goscript/math/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as strconv from "@goscript/strconv/index.js"

import * as time from "@goscript/time/index.js"

import * as __goscript_apic from "./apic.gs.ts"

import * as __goscript_parserc from "./parserc.gs.ts"

import * as __goscript_resolve from "./resolve.gs.ts"

import * as __goscript_yaml from "./yaml.gs.ts"

import * as __goscript_yamlh from "./yamlh.gs.ts"
import "@goscript/encoding/index.js"
import "@goscript/encoding/base64/index.js"
import "@goscript/fmt/index.js"
import "@goscript/io/index.js"
import "@goscript/math/index.js"
import "@goscript/reflect/index.js"
import "@goscript/strconv/index.js"
import "@goscript/time/index.js"
import "./apic.gs.ts"
import "./parserc.gs.ts"
import "./resolve.gs.ts"
import "./yaml.gs.ts"
import "./yamlh.gs.ts"

$.registerTypePackagePath("gopkg.in/yaml.v3", ["yaml.parser", "yaml.decoder"])

export class parser {
	public get parser(): __goscript_yamlh.yaml_parser_t {
		return this._fields.parser
	}

	public set parser(value: __goscript_yamlh.yaml_parser_t) {
		this._fields.parser = value
	}

	public get event(): __goscript_yamlh.yaml_event_t {
		return this._fields.event
	}

	public set event(value: __goscript_yamlh.yaml_event_t) {
		this._fields.event = value
	}

	public get doc(): __goscript_yaml.Node | $.VarRef<__goscript_yaml.Node> | null {
		return this._fields.doc
	}

	public set doc(value: __goscript_yaml.Node | $.VarRef<__goscript_yaml.Node> | null) {
		this._fields.doc = value
	}

	public get anchors(): globalThis.Map<string, __goscript_yaml.Node | $.VarRef<__goscript_yaml.Node> | null> | null {
		return this._fields.anchors
	}

	public set anchors(value: globalThis.Map<string, __goscript_yaml.Node | $.VarRef<__goscript_yaml.Node> | null> | null) {
		this._fields.anchors = value
	}

	public get doneInit(): boolean {
		return this._fields.doneInit
	}

	public set doneInit(value: boolean) {
		this._fields.doneInit = value
	}

	public get textless(): boolean {
		return this._fields.textless
	}

	public set textless(value: boolean) {
		this._fields.textless = value
	}

	public _fields: {
		parser: __goscript_yamlh.yaml_parser_t
		event: __goscript_yamlh.yaml_event_t
		doc: __goscript_yaml.Node | $.VarRef<__goscript_yaml.Node> | null
		anchors: globalThis.Map<string, __goscript_yaml.Node | $.VarRef<__goscript_yaml.Node> | null> | null
		doneInit: boolean
		textless: boolean
	}

	constructor(init?: Partial<{parser?: __goscript_yamlh.yaml_parser_t, event?: __goscript_yamlh.yaml_event_t, doc?: __goscript_yaml.Node | $.VarRef<__goscript_yaml.Node> | null, anchors?: globalThis.Map<string, __goscript_yaml.Node | $.VarRef<__goscript_yaml.Node> | null> | null, doneInit?: boolean, textless?: boolean}>, __goscriptValue?: boolean) {
		this._fields = {
			parser: init?.parser ? init.parser.clone() : new __goscript_yamlh.yaml_parser_t(undefined, true),
			event: init?.event ? init.event.clone() : new __goscript_yamlh.yaml_event_t(undefined, true),
			doc: init?.doc ?? (null! as __goscript_yaml.Node | $.VarRef<__goscript_yaml.Node> | null),
			anchors: init?.anchors ?? (null! as globalThis.Map<string, __goscript_yaml.Node | $.VarRef<__goscript_yaml.Node> | null> | null),
			doneInit: init?.doneInit ?? (false as boolean),
			textless: init?.textless ?? (false as boolean)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): parser {
		return new parser(this, true)
	}

	public __goscriptAssign(source: parser): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.parser, values.parser)
		$.assignStruct(target.event, values.event)
		target.doc = values.doc
		target.anchors = values.anchors
		target.doneInit = values.doneInit
		target.textless = values.textless
	}

	public async alias(): globalThis.Promise<__goscript_yaml.Node | $.VarRef<__goscript_yaml.Node> | null> {
		const p: parser | $.VarRef<parser> | null = this;
		const p$: parser = p == null ? $.pointerTarget<parser>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<parser>(p)
		let n: __goscript_yaml.Node | $.VarRef<__goscript_yaml.Node> | null = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as parser).node(16, "", "", $.bytesToString((p$ as parser).event.anchor)) : parser.prototype.node.call(p, 16, "", "", $.bytesToString((p$ as parser).event.anchor)))
		let n$: __goscript_yaml.Node = n == null ? $.pointerTarget<__goscript_yaml.Node>(n) : (n as any).__isVarRef === true ? (n as any).value : (n as any).__goValue === undefined ? (n as any) : $.pointerTarget<__goscript_yaml.Node>(n);
		;(n$ as __goscript_yaml.Node).Alias = $.mapGet<string, __goscript_yaml.Node | $.VarRef<__goscript_yaml.Node> | null, __goscript_yaml.Node | $.VarRef<__goscript_yaml.Node> | null>((p$ as parser).anchors, (n$ as __goscript_yaml.Node).Value, null)[0]
		if ((n$ as __goscript_yaml.Node).Alias == null) {
			__goscript_yaml.failf("unknown anchor '%s' referenced", $.arrayToSlice<any>([(n$ as __goscript_yaml.Node).Value]))
		}
		await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as parser).expect(5) : parser.prototype.expect.call(p, 5))
		return n
	}

	public anchor(n: __goscript_yaml.Node | $.VarRef<__goscript_yaml.Node> | null, anchor: $.Slice<number>): void {
		let p: parser | $.VarRef<parser> | null = this;
		const n$: __goscript_yaml.Node = n == null ? $.pointerTarget<__goscript_yaml.Node>(n) : (n as any).__isVarRef === true ? (n as any).value : (n as any).__goValue === undefined ? (n as any) : $.pointerTarget<__goscript_yaml.Node>(n)
		if (anchor != null) {
			;(n$ as __goscript_yaml.Node).Anchor = $.bytesToString(anchor)
			$.mapSet($.pointerValue<parser>(p).anchors, (n$ as __goscript_yaml.Node).Anchor, n)
		}
	}

	public destroy(): void {
		const p: parser | $.VarRef<parser> | null = this;
		const p$: parser = p == null ? $.pointerTarget<parser>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<parser>(p)
		if ((p$ as parser).event.typ != 0) {
			__goscript_apic.yaml_event_delete($.fieldRef((p$ as parser)._fields, "event"))
		}
		__goscript_apic.yaml_parser_delete($.fieldRef((p$ as parser)._fields, "parser"))
	}

	public async document(): globalThis.Promise<__goscript_yaml.Node | $.VarRef<__goscript_yaml.Node> | null> {
		let p: parser | $.VarRef<parser> | null = this;
		const p$: parser = p == null ? $.pointerTarget<parser>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<parser>(p)
		let n: __goscript_yaml.Node | $.VarRef<__goscript_yaml.Node> | null = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as parser).node(1, "", "", "") : parser.prototype.node.call(p, 1, "", "", ""));
		;(p$ as parser).doc = n
		await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as parser).expect(3) : parser.prototype.expect.call(p, 3))
		await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as parser).parseChild(n) : parser.prototype.parseChild.call(p, n))
		if (await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as parser).peek() : parser.prototype.peek.call(p)) == 4) {
			$.pointerValue<__goscript_yaml.Node>(n).FootComment = $.bytesToString((p$ as parser).event.foot_comment)
		}
		await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as parser).expect(4) : parser.prototype.expect.call(p, 4))
		return n
	}

	public async expect(e: __goscript_yamlh.yaml_event_type_t): globalThis.Promise<void> {
		let p: parser | $.VarRef<parser> | null = this;
		const p$: parser = p == null ? $.pointerTarget<parser>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<parser>(p)
		if ((p$ as parser).event.typ == 0) {
			if (!await __goscript_parserc.yaml_parser_parse($.fieldRef((p$ as parser)._fields, "parser"), $.fieldRef((p$ as parser)._fields, "event"))) {
				void (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as parser).fail() : parser.prototype.fail.call(p))
			}
		}
		if ((p$ as parser).event.typ == 2) {
			__goscript_yaml.failf("attempted to go past the end of stream; corrupted value?", null)
		}
		if ((p$ as parser).event.typ != e) {
			;(p$ as parser).parser.problem = await fmt.Sprintf("expected %s event but got %s", $.namedValueInterfaceValue<any>(e, "yaml.yaml_event_type_t", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), $.namedValueInterfaceValue<any>((p$ as parser).event.typ, "yaml.yaml_event_type_t", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()))
			void (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as parser).fail() : parser.prototype.fail.call(p))
		}
		__goscript_apic.yaml_event_delete($.fieldRef((p$ as parser)._fields, "event"));
		;(p$ as parser).event.typ = 0
	}

	public fail(): void {
		const p: parser | $.VarRef<parser> | null = this;
		const p$: parser = p == null ? $.pointerTarget<parser>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<parser>(p)
		let where: string = ""
		let line: number = 0
		if ((p$ as parser).parser.context_mark.line != 0) {
			line = (p$ as parser).parser.context_mark.line
			// Scanner errors don't iterate line before returning error
			if ((p$ as parser).parser.error == 3) {
				line++
			}
		} else {
			if ((p$ as parser).parser.problem_mark.line != 0) {
				line = (p$ as parser).parser.problem_mark.line
				// Scanner errors don't iterate line before returning error
				if ((p$ as parser).parser.error == 3) {
					line++
				}
			}
		}
		if (line != 0) {
			where = $.concatString(($.concatString("line ", strconv.Itoa(line))), ": ")
		}
		let msg: string = ""
		if ($.stringLen((p$ as parser).parser.problem) > 0) {
			msg = (p$ as parser).parser.problem
		} else {
			msg = "unknown problem parsing YAML content"
		}
		__goscript_yaml.failf("%s%s", $.arrayToSlice<any>([where, msg]))
	}

	public async init(): globalThis.Promise<void> {
		let p: parser | $.VarRef<parser> | null = this;
		const p$: parser = p == null ? $.pointerTarget<parser>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<parser>(p)
		if ((p$ as parser).doneInit) {
			return
		}
		;(p$ as parser).anchors = $.makeMap<string, __goscript_yaml.Node | $.VarRef<__goscript_yaml.Node> | null>()
		await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as parser).expect(1) : parser.prototype.expect.call(p, 1));
		;(p$ as parser).doneInit = true
	}

	public async mapping(): globalThis.Promise<__goscript_yaml.Node | $.VarRef<__goscript_yaml.Node> | null> {
		const p: parser | $.VarRef<parser> | null = this;
		const p$: parser = p == null ? $.pointerTarget<parser>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<parser>(p)
		let n: __goscript_yaml.Node | $.VarRef<__goscript_yaml.Node> | null = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as parser).node(4, "!!map", $.bytesToString((p$ as parser).event.tag), "") : parser.prototype.node.call(p, 4, "!!map", $.bytesToString((p$ as parser).event.tag), ""))
		let n$: __goscript_yaml.Node = n == null ? $.pointerTarget<__goscript_yaml.Node>(n) : (n as any).__isVarRef === true ? (n as any).value : (n as any).__goValue === undefined ? (n as any) : $.pointerTarget<__goscript_yaml.Node>(n)
		let block = true
		if ($.int(((p$ as parser).event.mapping_style() & 2), 8) != 0) {
			block = false;
			;(n$ as __goscript_yaml.Node).Style = (n$ as __goscript_yaml.Node).Style | (32)
		}
		void (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as parser).anchor(n, (p$ as parser).event.anchor) : parser.prototype.anchor.call(p, n, (p$ as parser).event.anchor))
		await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as parser).expect(9) : parser.prototype.expect.call(p, 9))
		while (await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as parser).peek() : parser.prototype.peek.call(p)) != 10) {
			let k: __goscript_yaml.Node | $.VarRef<__goscript_yaml.Node> | null = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as parser).parseChild(n) : parser.prototype.parseChild.call(p, n))
			let k$: __goscript_yaml.Node = k == null ? $.pointerTarget<__goscript_yaml.Node>(k) : (k as any).__isVarRef === true ? (k as any).value : (k as any).__goValue === undefined ? (k as any) : $.pointerTarget<__goscript_yaml.Node>(k)
			if (block && (!$.stringEqual((k$ as __goscript_yaml.Node).FootComment, ""))) {
				// Must be a foot comment for the prior value when being dedented.
				if ($.sliceLen((n$ as __goscript_yaml.Node).Content) > 2) {
					$.pointerValue<__goscript_yaml.Node>($.arrayIndex((n$ as __goscript_yaml.Node).Content!, $.sliceLen((n$ as __goscript_yaml.Node).Content) - 3)).FootComment = (k$ as __goscript_yaml.Node).FootComment;
					;(k$ as __goscript_yaml.Node).FootComment = ""
				}
			}
			let v: __goscript_yaml.Node | $.VarRef<__goscript_yaml.Node> | null = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as parser).parseChild(n) : parser.prototype.parseChild.call(p, n))
			let v$: __goscript_yaml.Node = v == null ? $.pointerTarget<__goscript_yaml.Node>(v) : (v as any).__isVarRef === true ? (v as any).value : (v as any).__goValue === undefined ? (v as any) : $.pointerTarget<__goscript_yaml.Node>(v)
			if (($.stringEqual((k$ as __goscript_yaml.Node).FootComment, "")) && (!$.stringEqual((v$ as __goscript_yaml.Node).FootComment, ""))) {
				;(k$ as __goscript_yaml.Node).FootComment = (v$ as __goscript_yaml.Node).FootComment;
				;(v$ as __goscript_yaml.Node).FootComment = ""
			}
			if (await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as parser).peek() : parser.prototype.peek.call(p)) == 11) {
				if ($.stringEqual((k$ as __goscript_yaml.Node).FootComment, "")) {
					;(k$ as __goscript_yaml.Node).FootComment = $.bytesToString((p$ as parser).event.foot_comment)
				}
				await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as parser).expect(11) : parser.prototype.expect.call(p, 11))
			}
		}
		;(n$ as __goscript_yaml.Node).LineComment = $.bytesToString((p$ as parser).event.line_comment);
		;(n$ as __goscript_yaml.Node).FootComment = $.bytesToString((p$ as parser).event.foot_comment)
		if ((($.uint(((n$ as __goscript_yaml.Node).Style & 32), 32) == 0) && (!$.stringEqual((n$ as __goscript_yaml.Node).FootComment, ""))) && ($.sliceLen((n$ as __goscript_yaml.Node).Content) > 1)) {
			$.pointerValue<__goscript_yaml.Node>($.arrayIndex((n$ as __goscript_yaml.Node).Content!, $.sliceLen((n$ as __goscript_yaml.Node).Content) - 2)).FootComment = (n$ as __goscript_yaml.Node).FootComment;
			;(n$ as __goscript_yaml.Node).FootComment = ""
		}
		await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as parser).expect(10) : parser.prototype.expect.call(p, 10))
		return n
	}

	public async node(kind: __goscript_yaml.Kind, defaultTag: string, tag: string, value: string): globalThis.Promise<__goscript_yaml.Node | $.VarRef<__goscript_yaml.Node> | null> {
		const p: parser | $.VarRef<parser> | null = this;
		const p$: parser = p == null ? $.pointerTarget<parser>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<parser>(p)
		let style: __goscript_yaml.Style = 0
		if ((!$.stringEqual(tag, "")) && (!$.stringEqual(tag, "!"))) {
			tag = __goscript_resolve.shortTag(tag)
			style = 1
		} else {
			if (!$.stringEqual(defaultTag, "")) {
				tag = defaultTag
			} else {
				if (kind == 8) {
					let __goscriptTuple0: any = await __goscript_resolve.resolve("", value)
					tag = __goscriptTuple0[0]
				}
			}
		}
		let n: __goscript_yaml.Node | $.VarRef<__goscript_yaml.Node> | null = new __goscript_yaml.Node({Kind: kind, Tag: tag, Value: value, Style: style})
		let n$: __goscript_yaml.Node = n == null ? $.pointerTarget<__goscript_yaml.Node>(n) : (n as any).__isVarRef === true ? (n as any).value : (n as any).__goValue === undefined ? (n as any) : $.pointerTarget<__goscript_yaml.Node>(n)
		if (!(p$ as parser).textless) {
			;(n$ as __goscript_yaml.Node).Line = (p$ as parser).event.start_mark.line + 1;
			;(n$ as __goscript_yaml.Node).Column = (p$ as parser).event.start_mark.column + 1;
			;(n$ as __goscript_yaml.Node).HeadComment = $.bytesToString((p$ as parser).event.head_comment);
			;(n$ as __goscript_yaml.Node).LineComment = $.bytesToString((p$ as parser).event.line_comment);
			;(n$ as __goscript_yaml.Node).FootComment = $.bytesToString((p$ as parser).event.foot_comment)
		}
		return n
	}

	public async parse(): globalThis.Promise<__goscript_yaml.Node | $.VarRef<__goscript_yaml.Node> | null> {
		const p: parser | $.VarRef<parser> | null = this;
		await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as parser).init() : parser.prototype.init.call(p))
		switch (await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as parser).peek() : parser.prototype.peek.call(p))) {
			case 6:
			{
				return (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as parser).scalar() : parser.prototype.scalar.call(p))
				break
			}
			case 5:
			{
				return (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as parser).alias() : parser.prototype.alias.call(p))
				break
			}
			case 9:
			{
				return (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as parser).mapping() : parser.prototype.mapping.call(p))
				break
			}
			case 7:
			{
				return (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as parser).sequence() : parser.prototype.sequence.call(p))
				break
			}
			case 3:
			{
				return (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as parser).document() : parser.prototype.document.call(p))
				break
			}
			case 2:
			{
				return null
				break
			}
			case 11:
			{
				$.panic("internal error: unexpected tail comment event (please report)")
				break
			}
			default:
			{
				$.panic($.concatString("internal error: attempted to parse unknown event (please report): ", await __goscript_yamlh.yaml_event_type_t_String($.pointerValue<parser>(p).event.typ)))
				break
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async parseChild(parent: __goscript_yaml.Node | $.VarRef<__goscript_yaml.Node> | null): globalThis.Promise<__goscript_yaml.Node | $.VarRef<__goscript_yaml.Node> | null> {
		const p: parser | $.VarRef<parser> | null = this;
		const parent$: __goscript_yaml.Node = parent == null ? $.pointerTarget<__goscript_yaml.Node>(parent) : (parent as any).__isVarRef === true ? (parent as any).value : (parent as any).__goValue === undefined ? (parent as any) : $.pointerTarget<__goscript_yaml.Node>(parent)
		let child: __goscript_yaml.Node | $.VarRef<__goscript_yaml.Node> | null = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as parser).parse() : parser.prototype.parse.call(p));
		;(parent$ as __goscript_yaml.Node).Content = $.appendOne((parent$ as __goscript_yaml.Node).Content, child, $.appendZeros.nil)
		return child
	}

	public async peek(): globalThis.Promise<__goscript_yamlh.yaml_event_type_t> {
		const p: parser | $.VarRef<parser> | null = this;
		const p$: parser = p == null ? $.pointerTarget<parser>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<parser>(p)
		if ((p$ as parser).event.typ != 0) {
			return (p$ as parser).event.typ
		}
		// It's curious choice from the underlying API to generally return a
		// positive result on success, but on this case return true in an error
		// scenario. This was the source of bugs in the past (issue #666).
		if (!await __goscript_parserc.yaml_parser_parse($.fieldRef((p$ as parser)._fields, "parser"), $.fieldRef((p$ as parser)._fields, "event")) || ((p$ as parser).parser.error != 0)) {
			void (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as parser).fail() : parser.prototype.fail.call(p))
		}
		return (p$ as parser).event.typ
	}

	public async scalar(): globalThis.Promise<__goscript_yaml.Node | $.VarRef<__goscript_yaml.Node> | null> {
		const p: parser | $.VarRef<parser> | null = this;
		const p$: parser = p == null ? $.pointerTarget<parser>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<parser>(p)
		let parsedStyle: __goscript_yamlh.yaml_scalar_style_t = (p$ as parser).event.scalar_style()
		let nodeStyle: __goscript_yaml.Style = 0
		switch ((true as boolean)) {
			case $.int((parsedStyle & 8), 8) != 0:
			{
				nodeStyle = 2
				break
			}
			case $.int((parsedStyle & 4), 8) != 0:
			{
				nodeStyle = 4
				break
			}
			case $.int((parsedStyle & 16), 8) != 0:
			{
				nodeStyle = 8
				break
			}
			case $.int((parsedStyle & 32), 8) != 0:
			{
				nodeStyle = 16
				break
			}
		}
		let nodeValue: string = $.bytesToString((p$ as parser).event.value)
		let nodeTag: string = $.bytesToString((p$ as parser).event.tag)
		let defaultTag: string = ""
		if (nodeStyle == 0) {
			if ($.stringEqual(nodeValue, "<<")) {
				defaultTag = "!!merge"
			}
		} else {
			defaultTag = "!!str"
		}
		let n: __goscript_yaml.Node | $.VarRef<__goscript_yaml.Node> | null = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as parser).node(8, defaultTag, nodeTag, nodeValue) : parser.prototype.node.call(p, 8, defaultTag, nodeTag, nodeValue))
		let n$: __goscript_yaml.Node = n == null ? $.pointerTarget<__goscript_yaml.Node>(n) : (n as any).__isVarRef === true ? (n as any).value : (n as any).__goValue === undefined ? (n as any) : $.pointerTarget<__goscript_yaml.Node>(n);
		;(n$ as __goscript_yaml.Node).Style = (n$ as __goscript_yaml.Node).Style | (nodeStyle)
		void (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as parser).anchor(n, (p$ as parser).event.anchor) : parser.prototype.anchor.call(p, n, (p$ as parser).event.anchor))
		await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as parser).expect(6) : parser.prototype.expect.call(p, 6))
		return n
	}

	public async sequence(): globalThis.Promise<__goscript_yaml.Node | $.VarRef<__goscript_yaml.Node> | null> {
		const p: parser | $.VarRef<parser> | null = this;
		const p$: parser = p == null ? $.pointerTarget<parser>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<parser>(p)
		let n: __goscript_yaml.Node | $.VarRef<__goscript_yaml.Node> | null = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as parser).node(2, "!!seq", $.bytesToString((p$ as parser).event.tag), "") : parser.prototype.node.call(p, 2, "!!seq", $.bytesToString((p$ as parser).event.tag), ""))
		let n$: __goscript_yaml.Node = n == null ? $.pointerTarget<__goscript_yaml.Node>(n) : (n as any).__isVarRef === true ? (n as any).value : (n as any).__goValue === undefined ? (n as any) : $.pointerTarget<__goscript_yaml.Node>(n)
		if ($.int(((p$ as parser).event.sequence_style() & 2), 8) != 0) {
			;(n$ as __goscript_yaml.Node).Style = (n$ as __goscript_yaml.Node).Style | (32)
		}
		void (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as parser).anchor(n, (p$ as parser).event.anchor) : parser.prototype.anchor.call(p, n, (p$ as parser).event.anchor))
		await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as parser).expect(7) : parser.prototype.expect.call(p, 7))
		while (await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as parser).peek() : parser.prototype.peek.call(p)) != 8) {
			await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as parser).parseChild(n) : parser.prototype.parseChild.call(p, n))
		}
		;(n$ as __goscript_yaml.Node).LineComment = $.bytesToString((p$ as parser).event.line_comment);
		;(n$ as __goscript_yaml.Node).FootComment = $.bytesToString((p$ as parser).event.foot_comment)
		await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as parser).expect(8) : parser.prototype.expect.call(p, 8))
		return n
	}

	static __typeInfo = $.registerStructType(
		"yaml.parser",
		() => new parser(),
		() => [$.methodSignature("alias", [], [/* @__PURE__ */ $.pointerType("yaml.Node")], true), $.methodSignature("anchor", [["n", /* @__PURE__ */ $.pointerType("yaml.Node")], ["anchor", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [], true), $.methodSignature("destroy", [], [], true), $.methodSignature("document", [], [/* @__PURE__ */ $.pointerType("yaml.Node")], true), $.methodSignature("expect", [["e", /* @__PURE__ */ $.basicType("int8", "yaml.yaml_event_type_t")]], [], true), $.methodSignature("fail", [], [], true), $.methodSignature("init", [], [], true), $.methodSignature("mapping", [], [/* @__PURE__ */ $.pointerType("yaml.Node")], true), $.methodSignature("node", [["kind", /* @__PURE__ */ $.basicType("uint32", "yaml.Kind")], ["defaultTag", /* @__PURE__ */ $.basicType("string")], ["tag", /* @__PURE__ */ $.basicType("string")], ["value", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.pointerType("yaml.Node")], true), $.methodSignature("parse", [], [/* @__PURE__ */ $.pointerType("yaml.Node")], true), $.methodSignature("parseChild", [["parent", /* @__PURE__ */ $.pointerType("yaml.Node")]], [/* @__PURE__ */ $.pointerType("yaml.Node")], true), $.methodSignature("peek", [], [/* @__PURE__ */ $.basicType("int8", "yaml.yaml_event_type_t")], true), $.methodSignature("scalar", [], [/* @__PURE__ */ $.pointerType("yaml.Node")], true), $.methodSignature("sequence", [], [/* @__PURE__ */ $.pointerType("yaml.Node")], true)],
		parser,
		() => [/* @__PURE__ */ $.structField("parser", "yaml.yaml_parser_t", [0], 0, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("event", "yaml.yaml_event_t", [1], 688, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("doc", /* @__PURE__ */ $.pointerType("yaml.Node"), [2], 960, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("anchors", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.pointerType("yaml.Node")), [3], 968, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("doneInit", /* @__PURE__ */ $.basicType("bool"), [4], 976, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("textless", /* @__PURE__ */ $.basicType("bool"), [5], 977, false, { pkgPath: "gopkg.in/yaml.v3" })]
	)
}

export class decoder {
	public get doc(): __goscript_yaml.Node | $.VarRef<__goscript_yaml.Node> | null {
		return this._fields.doc
	}

	public set doc(value: __goscript_yaml.Node | $.VarRef<__goscript_yaml.Node> | null) {
		this._fields.doc = value
	}

	public get aliases(): globalThis.Map<__goscript_yaml.Node | $.VarRef<__goscript_yaml.Node> | null, boolean> | null {
		return this._fields.aliases
	}

	public set aliases(value: globalThis.Map<__goscript_yaml.Node | $.VarRef<__goscript_yaml.Node> | null, boolean> | null) {
		this._fields.aliases = value
	}

	public get terrors(): $.Slice<string> {
		return this._fields.terrors
	}

	public set terrors(value: $.Slice<string>) {
		this._fields.terrors = value
	}

	public get stringMapType(): reflect.Type | null {
		return this._fields.stringMapType
	}

	public set stringMapType(value: reflect.Type | null) {
		this._fields.stringMapType = value
	}

	public get generalMapType(): reflect.Type | null {
		return this._fields.generalMapType
	}

	public set generalMapType(value: reflect.Type | null) {
		this._fields.generalMapType = value
	}

	public get knownFields(): boolean {
		return this._fields.knownFields
	}

	public set knownFields(value: boolean) {
		this._fields.knownFields = value
	}

	public get uniqueKeys(): boolean {
		return this._fields.uniqueKeys
	}

	public set uniqueKeys(value: boolean) {
		this._fields.uniqueKeys = value
	}

	public get decodeCount(): number {
		return this._fields.decodeCount
	}

	public set decodeCount(value: number) {
		this._fields.decodeCount = value
	}

	public get aliasCount(): number {
		return this._fields.aliasCount
	}

	public set aliasCount(value: number) {
		this._fields.aliasCount = value
	}

	public get aliasDepth(): number {
		return this._fields.aliasDepth
	}

	public set aliasDepth(value: number) {
		this._fields.aliasDepth = value
	}

	public get mergedFields(): globalThis.Map<any, boolean> | null {
		return this._fields.mergedFields
	}

	public set mergedFields(value: globalThis.Map<any, boolean> | null) {
		this._fields.mergedFields = value
	}

	public _fields: {
		doc: __goscript_yaml.Node | $.VarRef<__goscript_yaml.Node> | null
		aliases: globalThis.Map<__goscript_yaml.Node | $.VarRef<__goscript_yaml.Node> | null, boolean> | null
		terrors: $.Slice<string>
		stringMapType: reflect.Type | null
		generalMapType: reflect.Type | null
		knownFields: boolean
		uniqueKeys: boolean
		decodeCount: number
		aliasCount: number
		aliasDepth: number
		mergedFields: globalThis.Map<any, boolean> | null
	}

	constructor(init?: Partial<{doc?: __goscript_yaml.Node | $.VarRef<__goscript_yaml.Node> | null, aliases?: globalThis.Map<__goscript_yaml.Node | $.VarRef<__goscript_yaml.Node> | null, boolean> | null, terrors?: $.Slice<string>, stringMapType?: reflect.Type | null, generalMapType?: reflect.Type | null, knownFields?: boolean, uniqueKeys?: boolean, decodeCount?: number, aliasCount?: number, aliasDepth?: number, mergedFields?: globalThis.Map<any, boolean> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			doc: init?.doc ?? (null! as __goscript_yaml.Node | $.VarRef<__goscript_yaml.Node> | null),
			aliases: init?.aliases ?? (null! as globalThis.Map<__goscript_yaml.Node | $.VarRef<__goscript_yaml.Node> | null, boolean> | null),
			terrors: init?.terrors ?? (null! as $.Slice<string>),
			stringMapType: init?.stringMapType ?? (null! as reflect.Type | null),
			generalMapType: init?.generalMapType ?? (null! as reflect.Type | null),
			knownFields: init?.knownFields ?? (false as boolean),
			uniqueKeys: init?.uniqueKeys ?? (false as boolean),
			decodeCount: init?.decodeCount ?? (0 as number),
			aliasCount: init?.aliasCount ?? (0 as number),
			aliasDepth: init?.aliasDepth ?? (0 as number),
			mergedFields: init?.mergedFields ?? (null! as globalThis.Map<any, boolean> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): decoder {
		return new decoder(this, true)
	}

	public __goscriptAssign(source: decoder): void {
		const target = this._fields
		const values = source._fields
		target.doc = values.doc
		target.aliases = values.aliases
		target.terrors = values.terrors
		target.stringMapType = $.assignFieldValue(target.stringMapType, values.stringMapType, "reflect.Type")
		target.generalMapType = $.assignFieldValue(target.generalMapType, values.generalMapType, "reflect.Type")
		target.knownFields = values.knownFields
		target.uniqueKeys = values.uniqueKeys
		target.decodeCount = values.decodeCount
		target.aliasCount = values.aliasCount
		target.aliasDepth = values.aliasDepth
		target.mergedFields = values.mergedFields
	}

	public async alias(n: __goscript_yaml.Node | $.VarRef<__goscript_yaml.Node> | null, out: reflect.Value): globalThis.Promise<boolean> {
		let d: decoder | $.VarRef<decoder> | null = this;
		let good: boolean = false
		const d$: decoder = d == null ? $.pointerTarget<decoder>(d) : (d as any).__isVarRef === true ? (d as any).value : (d as any).__goValue === undefined ? (d as any) : $.pointerTarget<decoder>(d)
		const n$: __goscript_yaml.Node = n == null ? $.pointerTarget<__goscript_yaml.Node>(n) : (n as any).__isVarRef === true ? (n as any).value : (n as any).__goValue === undefined ? (n as any) : $.pointerTarget<__goscript_yaml.Node>(n)
		if ($.mapGet<__goscript_yaml.Node | $.VarRef<__goscript_yaml.Node> | null, boolean, boolean>((d$ as decoder).aliases, n, false)[0]) {
			// TODO this could actually be allowed in some circumstances.
			__goscript_yaml.failf("anchor '%s' value contains itself", $.arrayToSlice<any>([(n$ as __goscript_yaml.Node).Value]))
		}
		$.mapSet((d$ as decoder).aliases, n, true);
		;(d$ as decoder).aliasDepth++
		good = await (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as decoder).unmarshal((n$ as __goscript_yaml.Node).Alias, $.markAsStructValue($.cloneStructValue(out))) : decoder.prototype.unmarshal.call(d, (n$ as __goscript_yaml.Node).Alias, $.markAsStructValue($.cloneStructValue(out))));
		;(d$ as decoder).aliasDepth--
		$.deleteMapEntry((d$ as decoder).aliases, n)
		return good
	}

	public async callObsoleteUnmarshaler(n: __goscript_yaml.Node | $.VarRef<__goscript_yaml.Node> | null, u: __goscript_yaml.obsoleteUnmarshaler | null): globalThis.Promise<boolean> {
		let d: decoder | $.VarRef<decoder> | null = this;
		let good: boolean = false
		const d$: decoder = d == null ? $.pointerTarget<decoder>(d) : (d as any).__isVarRef === true ? (d as any).value : (d as any).__goValue === undefined ? (d as any) : $.pointerTarget<decoder>(d)
		let terrlen = $.sliceLen((d$ as decoder).terrors)
		let err = (__goscriptAwait = (u !== null && (u as any).__isVarRef !== true && (u as any).__goValue === undefined ? (u as Exclude<__goscript_yaml.obsoleteUnmarshaler, null>) : $.pointerValue<Exclude<__goscript_yaml.obsoleteUnmarshaler, null>>(u)).UnmarshalYAML($.functionValue(async (v: any): globalThis.Promise<$.GoError> => {
			let err: $.VarRef<$.GoError> = $.varRef(null! as $.GoError)
			const __defer = new $.DisposableStack()
			try {
				const __goscriptDeferArg0 = err
				__defer.defer(() => { __goscript_yaml.handleErr(__goscriptDeferArg0) })
				await (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as decoder).unmarshal(n, $.markAsStructValue($.cloneStructValue(reflect.ValueOf(v)))) : decoder.prototype.unmarshal.call(d, n, $.markAsStructValue($.cloneStructValue(reflect.ValueOf(v)))))
				if ($.sliceLen((d$ as decoder).terrors) > terrlen) {
					let issues: $.Slice<string> = $.goSlice((d$ as decoder).terrors, terrlen, undefined);
					;(d$ as decoder).terrors = $.goSlice((d$ as decoder).terrors, undefined, terrlen)
					const __goscriptReturn0: $.GoError = $.interfaceValue<$.GoError>(new __goscript_yaml.TypeError({Errors: issues}), "*yaml.TypeError", /* @__PURE__ */ $.pointerType("yaml.TypeError"))
					err.value = __goscriptReturn0
					__defer.dispose()
					return err.value
				}
				const __goscriptReturn1: $.GoError = null
				err.value = __goscriptReturn1
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
		}, ({ kind: $.TypeKind.Function, params: [{ kind: $.TypeKind.Interface, methods: [] }], results: ["error"] } as $.FunctionTypeInfo))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		{
			let __goscriptTuple1: any = $.typeAssertTuple<__goscript_yaml.TypeError | $.VarRef<__goscript_yaml.TypeError> | null>(err, /* @__PURE__ */ $.pointerType("yaml.TypeError"))
			let e: __goscript_yaml.TypeError | $.VarRef<__goscript_yaml.TypeError> | null = __goscriptTuple1[0]
			let ok = __goscriptTuple1[1]
			if (ok) {
				;(d$ as decoder).terrors = $.appendSlice((d$ as decoder).terrors, $.pointerValue<__goscript_yaml.TypeError>(e).Errors)
				return false
			}
		}
		if (err != null) {
			__goscript_yaml.fail(err)
		}
		return true
	}

	public async callUnmarshaler(n: __goscript_yaml.Node | $.VarRef<__goscript_yaml.Node> | null, u: __goscript_yaml.Unmarshaler | null): globalThis.Promise<boolean> {
		let d: decoder | $.VarRef<decoder> | null = this;
		let good: boolean = false
		const d$: decoder = d == null ? $.pointerTarget<decoder>(d) : (d as any).__isVarRef === true ? (d as any).value : (d as any).__goValue === undefined ? (d as any) : $.pointerTarget<decoder>(d)
		let err = (__goscriptAwait = (u !== null && (u as any).__isVarRef !== true && (u as any).__goValue === undefined ? (u as Exclude<__goscript_yaml.Unmarshaler, null>) : $.pointerValue<Exclude<__goscript_yaml.Unmarshaler, null>>(u)).UnmarshalYAML(n), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		{
			let __goscriptTuple2: any = $.typeAssertTuple<__goscript_yaml.TypeError | $.VarRef<__goscript_yaml.TypeError> | null>(err, /* @__PURE__ */ $.pointerType("yaml.TypeError"))
			let e: __goscript_yaml.TypeError | $.VarRef<__goscript_yaml.TypeError> | null = __goscriptTuple2[0]
			let ok = __goscriptTuple2[1]
			if (ok) {
				;(d$ as decoder).terrors = $.appendSlice((d$ as decoder).terrors, $.pointerValue<__goscript_yaml.TypeError>(e).Errors)
				return false
			}
		}
		if (err != null) {
			__goscript_yaml.fail(err)
		}
		return true
	}

	public async document(n: __goscript_yaml.Node | $.VarRef<__goscript_yaml.Node> | null, out: reflect.Value): globalThis.Promise<boolean> {
		let d: decoder | $.VarRef<decoder> | null = this;
		let good: boolean = false
		const n$: __goscript_yaml.Node = n == null ? $.pointerTarget<__goscript_yaml.Node>(n) : (n as any).__isVarRef === true ? (n as any).value : (n as any).__goValue === undefined ? (n as any) : $.pointerTarget<__goscript_yaml.Node>(n)
		if ($.sliceLen((n$ as __goscript_yaml.Node).Content) == 1) {
			$.pointerValue<decoder>(d).doc = n
			await (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as decoder).unmarshal($.arrayIndex((n$ as __goscript_yaml.Node).Content!, 0), $.markAsStructValue($.cloneStructValue(out))) : decoder.prototype.unmarshal.call(d, $.arrayIndex((n$ as __goscript_yaml.Node).Content!, 0), $.markAsStructValue($.cloneStructValue(out))))
			return true
		}
		return false
	}

	public async fieldByIndex(n: __goscript_yaml.Node | $.VarRef<__goscript_yaml.Node> | null, v: reflect.Value, index: $.Slice<number>): globalThis.Promise<reflect.Value> {
		const d: decoder | $.VarRef<decoder> | null = this;
		let field: reflect.Value = $.markAsStructValue(new reflect.Value())
		if ($.stringEqual(await (n !== null && (n as any).__isVarRef !== true && (n as any).__goValue === undefined ? ((n as any) as __goscript_yaml.Node).ShortTag() : __goscript_yaml.Node.prototype.ShortTag.call(n)), "!!null")) {
			return $.markAsStructValue(new reflect.Value())
		}
		for (let __goscriptRangeTarget0 = index, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
			let num = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as number)
			while (true) {
				if ($.markAsStructValue($.cloneStructValue(v)).Kind() == 22) {
					if ($.markAsStructValue($.cloneStructValue(v)).IsNil()) {
						$.markAsStructValue($.cloneStructValue(v)).Set($.markAsStructValue($.cloneStructValue(reflect.New($.pointerValueOrNil((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>($.markAsStructValue($.cloneStructValue(v)).Type()).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))!))))
					}
					v = $.assignStruct(v, $.markAsStructValue($.cloneStructValue(v)).Elem())
					continue
				}
				break
			}
			v = $.assignStruct(v, $.markAsStructValue($.cloneStructValue(v)).Field(num))
		}
		return $.markAsStructValue($.cloneStructValue(v))
	}

	public async mapping(n: __goscript_yaml.Node | $.VarRef<__goscript_yaml.Node> | null, out: reflect.Value): globalThis.Promise<boolean> {
		let d: decoder | $.VarRef<decoder> | null = this;
		let good: boolean = false
		const d$: decoder = d == null ? $.pointerTarget<decoder>(d) : (d as any).__isVarRef === true ? (d as any).value : (d as any).__goValue === undefined ? (d as any) : $.pointerTarget<decoder>(d)
		const n$: __goscript_yaml.Node = n == null ? $.pointerTarget<__goscript_yaml.Node>(n) : (n as any).__isVarRef === true ? (n as any).value : (n as any).__goValue === undefined ? (n as any) : $.pointerTarget<__goscript_yaml.Node>(n)
		let l = $.sliceLen((n$ as __goscript_yaml.Node).Content)
		if ((d$ as decoder).uniqueKeys) {
			let nerrs = $.sliceLen((d$ as decoder).terrors)
			for (let i = 0; i < l; i = i + (2)) {
				let ni: __goscript_yaml.Node | $.VarRef<__goscript_yaml.Node> | null = $.arrayIndex((n$ as __goscript_yaml.Node).Content!, i)
				let ni$: __goscript_yaml.Node = ni == null ? $.pointerTarget<__goscript_yaml.Node>(ni) : (ni as any).__isVarRef === true ? (ni as any).value : (ni as any).__goValue === undefined ? (ni as any) : $.pointerTarget<__goscript_yaml.Node>(ni)
				for (let j = i + 2; j < l; j = j + (2)) {
					let nj: __goscript_yaml.Node | $.VarRef<__goscript_yaml.Node> | null = $.arrayIndex((n$ as __goscript_yaml.Node).Content!, j)
					let nj$: __goscript_yaml.Node = nj == null ? $.pointerTarget<__goscript_yaml.Node>(nj) : (nj as any).__isVarRef === true ? (nj as any).value : (nj as any).__goValue === undefined ? (nj as any) : $.pointerTarget<__goscript_yaml.Node>(nj)
					if (((ni$ as __goscript_yaml.Node).Kind == (nj$ as __goscript_yaml.Node).Kind) && ($.stringEqual((ni$ as __goscript_yaml.Node).Value, (nj$ as __goscript_yaml.Node).Value))) {
						;(d$ as decoder).terrors = $.appendOne((d$ as decoder).terrors, await fmt.Sprintf("line %d: mapping key %#v already defined at line %d", $.basicInterfaceValue((nj$ as __goscript_yaml.Node).Line, "int"), (nj$ as __goscript_yaml.Node).Value, $.basicInterfaceValue((ni$ as __goscript_yaml.Node).Line, "int")))
					}
				}
			}
			if ($.sliceLen((d$ as decoder).terrors) > nerrs) {
				return false
			}
		}
		switch ($.markAsStructValue($.cloneStructValue(out)).Kind()) {
			case reflect.Struct:
			{
				return (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as decoder).mappingStruct(n, out) : decoder.prototype.mappingStruct.call(d, n, out))
				break
			}
			case reflect.Map:
			{
				break
			}
			case reflect.Interface:
			{
				let iface = $.markAsStructValue($.cloneStructValue(out))
				if (await isStringMap(n)) {
					out = $.assignStruct(out, reflect.MakeMap($.pointerValueOrNil((d$ as decoder).stringMapType)!))
				} else {
					out = $.assignStruct(out, reflect.MakeMap($.pointerValueOrNil((d$ as decoder).generalMapType)!))
				}
				$.markAsStructValue($.cloneStructValue(iface)).Set($.markAsStructValue($.cloneStructValue(out)))
				break
			}
			default:
			{
				await (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as decoder).terror(n, "!!map", out) : decoder.prototype.terror.call(d, n, "!!map", out))
				return false
				break
			}
		}

		let outt = $.markAsStructValue($.cloneStructValue(out)).Type()
		let kt = (__goscriptAwait = (outt !== null && (outt as any).__isVarRef !== true && (outt as any).__goValue === undefined ? (outt as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(outt)).Key(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		let et = (__goscriptAwait = (outt !== null && (outt as any).__isVarRef !== true && (outt as any).__goValue === undefined ? (outt as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(outt)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)

		let stringMapType = (d$ as decoder).stringMapType
		let generalMapType = (d$ as decoder).generalMapType
		if ($.comparableEqual((__goscriptAwait = (outt !== null && (outt as any).__isVarRef !== true && (outt as any).__goValue === undefined ? (outt as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(outt)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), ifaceType)) {
			if ((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>((__goscriptAwait = (outt !== null && (outt as any).__isVarRef !== true && (outt as any).__goValue === undefined ? (outt as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(outt)).Key(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 24) {
				;(d$ as decoder).stringMapType = outt
			} else {
				if ($.comparableEqual((__goscriptAwait = (outt !== null && (outt as any).__isVarRef !== true && (outt as any).__goValue === undefined ? (outt as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(outt)).Key(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), ifaceType)) {
					;(d$ as decoder).generalMapType = outt
				}
			}
		}

		let mergedFields: globalThis.Map<any, boolean> | null = (d$ as decoder).mergedFields;
		;(d$ as decoder).mergedFields = null

		let mergeNode: __goscript_yaml.Node | $.VarRef<__goscript_yaml.Node> | null = null! as __goscript_yaml.Node | $.VarRef<__goscript_yaml.Node> | null

		let mapIsNew = false
		if ($.markAsStructValue($.cloneStructValue(out)).IsNil()) {
			$.markAsStructValue($.cloneStructValue(out)).Set($.markAsStructValue($.cloneStructValue(reflect.MakeMap($.pointerValueOrNil(outt)!))))
			mapIsNew = true
		}
		for (let i = 0; i < l; i = i + (2)) {
			if (isMerge($.arrayIndex((n$ as __goscript_yaml.Node).Content!, i))) {
				mergeNode = $.arrayIndex((n$ as __goscript_yaml.Node).Content!, i + 1)
				continue
			}
			let k = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(reflect.New($.pointerValueOrNil(kt)!))).Elem()))
			if (await (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as decoder).unmarshal($.arrayIndex((n$ as __goscript_yaml.Node).Content!, i), $.markAsStructValue($.cloneStructValue(k))) : decoder.prototype.unmarshal.call(d, $.arrayIndex((n$ as __goscript_yaml.Node).Content!, i), $.markAsStructValue($.cloneStructValue(k))))) {
				if (mergedFields != null) {
					let ki = $.markAsStructValue($.cloneStructValue(k)).Interface()
					if ($.mapGet<any, boolean, boolean>(mergedFields, ki, false)[0]) {
						continue
					}
					$.mapSet(mergedFields, ki, true)
				}
				let kkind = $.markAsStructValue($.cloneStructValue(k)).Kind()
				if (kkind == 20) {
					kkind = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(k)).Elem())).Kind()
				}
				if ((kkind == 21) || (kkind == 23)) {
					__goscript_yaml.failf("invalid map key: %#v", $.arrayToSlice<any>([$.markAsStructValue($.cloneStructValue(k)).Interface()]))
				}
				let e = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(reflect.New($.pointerValueOrNil(et)!))).Elem()))
				if (await (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as decoder).unmarshal($.arrayIndex((n$ as __goscript_yaml.Node).Content!, i + 1), $.markAsStructValue($.cloneStructValue(e))) : decoder.prototype.unmarshal.call(d, $.arrayIndex((n$ as __goscript_yaml.Node).Content!, i + 1), $.markAsStructValue($.cloneStructValue(e)))) || (($.stringEqual(await __goscript_yaml.Node.prototype.ShortTag.call($.arrayIndex((n$ as __goscript_yaml.Node).Content!, i + 1)), "!!null")) && (mapIsNew || !$.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(out)).MapIndex($.markAsStructValue($.cloneStructValue(k))))).IsValid()))) {
					$.markAsStructValue($.cloneStructValue(out)).SetMapIndex($.markAsStructValue($.cloneStructValue(k)), $.markAsStructValue($.cloneStructValue(e)))
				}
			}
		}

		;(d$ as decoder).mergedFields = mergedFields
		if (mergeNode != null) {
			await (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as decoder).merge(n, mergeNode, out) : decoder.prototype.merge.call(d, n, mergeNode, out))
		}

		;(d$ as decoder).stringMapType = stringMapType;
		;(d$ as decoder).generalMapType = generalMapType
		return true
	}

	public async mappingStruct(n: __goscript_yaml.Node | $.VarRef<__goscript_yaml.Node> | null, out: reflect.Value): globalThis.Promise<boolean> {
		let d: decoder | $.VarRef<decoder> | null = this;
		let good: boolean = false
		const d$: decoder = d == null ? $.pointerTarget<decoder>(d) : (d as any).__isVarRef === true ? (d as any).value : (d as any).__goValue === undefined ? (d as any) : $.pointerTarget<decoder>(d)
		const n$: __goscript_yaml.Node = n == null ? $.pointerTarget<__goscript_yaml.Node>(n) : (n as any).__isVarRef === true ? (n as any).value : (n as any).__goValue === undefined ? (n as any) : $.pointerTarget<__goscript_yaml.Node>(n)
		let __goscriptTuple3: any = await __goscript_yaml.getStructInfo($.markAsStructValue($.cloneStructValue(out)).Type())
		let sinfo: __goscript_yaml.structInfo | $.VarRef<__goscript_yaml.structInfo> | null = __goscriptTuple3[0]
		let err = __goscriptTuple3[1]
		let sinfo$: __goscript_yaml.structInfo = sinfo == null ? $.pointerTarget<__goscript_yaml.structInfo>(sinfo) : (sinfo as any).__isVarRef === true ? (sinfo as any).value : (sinfo as any).__goValue === undefined ? (sinfo as any) : $.pointerTarget<__goscript_yaml.structInfo>(sinfo)
		if (err != null) {
			$.panic((err as any))
		}

		let inlineMap: reflect.Value = $.markAsStructValue(new reflect.Value())
		let elemType: reflect.Type | null = null! as reflect.Type | null
		if ((sinfo$ as __goscript_yaml.structInfo).InlineMap != -1) {
			inlineMap = $.assignStruct(inlineMap, $.markAsStructValue($.cloneStructValue(out)).Field((sinfo$ as __goscript_yaml.structInfo).InlineMap))
			elemType = (__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>($.markAsStructValue($.cloneStructValue(inlineMap)).Type()).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}

		for (let __goscriptRangeTarget1 = (sinfo$ as __goscript_yaml.structInfo).InlineUnmarshalers, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
			let index = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as $.Slice<number>)
			let field = await (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as decoder).fieldByIndex(n, $.markAsStructValue($.cloneStructValue(out)), index) : decoder.prototype.fieldByIndex.call(d, n, $.markAsStructValue($.cloneStructValue(out)), index))
			await (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as decoder).prepare(n, $.markAsStructValue($.cloneStructValue(field))) : decoder.prototype.prepare.call(d, n, $.markAsStructValue($.cloneStructValue(field))))
		}

		let mergedFields: globalThis.Map<any, boolean> | null = (d$ as decoder).mergedFields;
		;(d$ as decoder).mergedFields = null
		let mergeNode: __goscript_yaml.Node | $.VarRef<__goscript_yaml.Node> | null = null! as __goscript_yaml.Node | $.VarRef<__goscript_yaml.Node> | null
		let doneFields: $.Slice<boolean> = null! as $.Slice<boolean>
		if ((d$ as decoder).uniqueKeys) {
			doneFields = $.makeSlice<boolean>($.sliceLen((sinfo$ as __goscript_yaml.structInfo).FieldsList), undefined, "boolean")
		}
		let name = settableValueOf("")
		let l = $.sliceLen((n$ as __goscript_yaml.Node).Content)
		for (let __goscriptSliceWindow0 = $.sliceRange(doneFields), i = 0; i < l; i = i + (2)) {
			let ni: __goscript_yaml.Node | $.VarRef<__goscript_yaml.Node> | null = $.arrayIndex((n$ as __goscript_yaml.Node).Content!, i)
			let ni$: __goscript_yaml.Node = ni == null ? $.pointerTarget<__goscript_yaml.Node>(ni) : (ni as any).__isVarRef === true ? (ni as any).value : (ni as any).__goValue === undefined ? (ni as any) : $.pointerTarget<__goscript_yaml.Node>(ni)
			if (isMerge(ni)) {
				mergeNode = $.arrayIndex((n$ as __goscript_yaml.Node).Content!, i + 1)
				continue
			}
			if (!await (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as decoder).unmarshal(ni, $.markAsStructValue($.cloneStructValue(name))) : decoder.prototype.unmarshal.call(d, ni, $.markAsStructValue($.cloneStructValue(name))))) {
				continue
			}
			let sname = $.markAsStructValue($.cloneStructValue(name)).String()
			if (mergedFields != null) {
				if ($.mapGet<any, boolean, boolean>(mergedFields, sname, false)[0]) {
					continue
				}
				$.mapSet(mergedFields, sname, true)
			}
			{
				let [info, ok] = $.mapGet<string, __goscript_yaml.fieldInfo, __goscript_yaml.fieldInfo>((sinfo$ as __goscript_yaml.structInfo).FieldsMap, sname, new __goscript_yaml.fieldInfo(undefined, true))
				if (ok) {
					if ((d$ as decoder).uniqueKeys) {
						if (((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, info.Id)] as boolean)) {
							;(d$ as decoder).terrors = $.appendOne((d$ as decoder).terrors, await fmt.Sprintf("line %d: field %s already set in type %s", $.basicInterfaceValue((ni$ as __goscript_yaml.Node).Line, "int"), $.markAsStructValue($.cloneStructValue(name)).String(), ($.markAsStructValue($.cloneStructValue(out)).Type() as any)))
							continue
						}
						;(__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, info.Id)] = true
					}
					let field: reflect.Value = $.markAsStructValue(new reflect.Value())
					if (info.Inline == null) {
						field = $.assignStruct(field, $.markAsStructValue($.cloneStructValue(out)).Field(info.Num))
					} else {
						field = $.assignStruct(field, await (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as decoder).fieldByIndex(n, $.markAsStructValue($.cloneStructValue(out)), info.Inline) : decoder.prototype.fieldByIndex.call(d, n, $.markAsStructValue($.cloneStructValue(out)), info.Inline)))
					}
					await (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as decoder).unmarshal($.arrayIndex((n$ as __goscript_yaml.Node).Content!, i + 1), $.markAsStructValue($.cloneStructValue(field))) : decoder.prototype.unmarshal.call(d, $.arrayIndex((n$ as __goscript_yaml.Node).Content!, i + 1), $.markAsStructValue($.cloneStructValue(field))))
				} else {
					if ((sinfo$ as __goscript_yaml.structInfo).InlineMap != -1) {
						if ($.markAsStructValue($.cloneStructValue(inlineMap)).IsNil()) {
							$.markAsStructValue($.cloneStructValue(inlineMap)).Set($.markAsStructValue($.cloneStructValue(reflect.MakeMap($.pointerValueOrNil($.markAsStructValue($.cloneStructValue(inlineMap)).Type())!))))
						}
						let value = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(reflect.New($.pointerValueOrNil(elemType)!))).Elem()))
						await (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as decoder).unmarshal($.arrayIndex((n$ as __goscript_yaml.Node).Content!, i + 1), $.markAsStructValue($.cloneStructValue(value))) : decoder.prototype.unmarshal.call(d, $.arrayIndex((n$ as __goscript_yaml.Node).Content!, i + 1), $.markAsStructValue($.cloneStructValue(value))))
						$.markAsStructValue($.cloneStructValue(inlineMap)).SetMapIndex($.markAsStructValue($.cloneStructValue(name)), $.markAsStructValue($.cloneStructValue(value)))
					} else {
						if ((d$ as decoder).knownFields) {
							;(d$ as decoder).terrors = $.appendOne((d$ as decoder).terrors, await fmt.Sprintf("line %d: field %s not found in type %s", $.basicInterfaceValue((ni$ as __goscript_yaml.Node).Line, "int"), $.markAsStructValue($.cloneStructValue(name)).String(), ($.markAsStructValue($.cloneStructValue(out)).Type() as any)))
						}
					}
				}
			}
		}

		;(d$ as decoder).mergedFields = mergedFields
		if (mergeNode != null) {
			await (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as decoder).merge(n, mergeNode, out) : decoder.prototype.merge.call(d, n, mergeNode, out))
		}
		return true
	}

	public async merge(parent: __goscript_yaml.Node | $.VarRef<__goscript_yaml.Node> | null, merge: __goscript_yaml.Node | $.VarRef<__goscript_yaml.Node> | null, out: reflect.Value): globalThis.Promise<void> {
		let d: decoder | $.VarRef<decoder> | null = this;
		const d$: decoder = d == null ? $.pointerTarget<decoder>(d) : (d as any).__isVarRef === true ? (d as any).value : (d as any).__goValue === undefined ? (d as any) : $.pointerTarget<decoder>(d)
		const parent$: __goscript_yaml.Node = parent == null ? $.pointerTarget<__goscript_yaml.Node>(parent) : (parent as any).__isVarRef === true ? (parent as any).value : (parent as any).__goValue === undefined ? (parent as any) : $.pointerTarget<__goscript_yaml.Node>(parent)
		const merge$: __goscript_yaml.Node = merge == null ? $.pointerTarget<__goscript_yaml.Node>(merge) : (merge as any).__isVarRef === true ? (merge as any).value : (merge as any).__goValue === undefined ? (merge as any) : $.pointerTarget<__goscript_yaml.Node>(merge)
		let mergedFields: globalThis.Map<any, boolean> | null = (d$ as decoder).mergedFields
		if (mergedFields == null) {
			;(d$ as decoder).mergedFields = $.makeMap<any, boolean>()
			for (let i = 0; i < $.sliceLen((parent$ as __goscript_yaml.Node).Content); i = i + (2)) {
				let k = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(reflect.New($.pointerValueOrNil(ifaceType)!))).Elem()))
				if (await (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as decoder).unmarshal($.arrayIndex((parent$ as __goscript_yaml.Node).Content!, i), $.markAsStructValue($.cloneStructValue(k))) : decoder.prototype.unmarshal.call(d, $.arrayIndex((parent$ as __goscript_yaml.Node).Content!, i), $.markAsStructValue($.cloneStructValue(k))))) {
					$.mapSet((d$ as decoder).mergedFields, $.markAsStructValue($.cloneStructValue(k)).Interface(), true)
				}
			}
		}

		switch ((merge$ as __goscript_yaml.Node).Kind) {
			case 4:
			{
				await (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as decoder).unmarshal(merge, $.markAsStructValue($.cloneStructValue(out))) : decoder.prototype.unmarshal.call(d, merge, $.markAsStructValue($.cloneStructValue(out))))
				break
			}
			case 16:
			{
				if (((merge$ as __goscript_yaml.Node).Alias != null) && ($.pointerValue<__goscript_yaml.Node>((merge$ as __goscript_yaml.Node).Alias).Kind != 4)) {
					failWantMap()
				}
				await (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as decoder).unmarshal(merge, $.markAsStructValue($.cloneStructValue(out))) : decoder.prototype.unmarshal.call(d, merge, $.markAsStructValue($.cloneStructValue(out))))
				break
			}
			case 2:
			{
				for (let i = 0; i < $.sliceLen((merge$ as __goscript_yaml.Node).Content); i++) {
					let ni: __goscript_yaml.Node | $.VarRef<__goscript_yaml.Node> | null = $.arrayIndex((merge$ as __goscript_yaml.Node).Content!, i)
					let ni$: __goscript_yaml.Node = ni == null ? $.pointerTarget<__goscript_yaml.Node>(ni) : (ni as any).__isVarRef === true ? (ni as any).value : (ni as any).__goValue === undefined ? (ni as any) : $.pointerTarget<__goscript_yaml.Node>(ni)
					if ((ni$ as __goscript_yaml.Node).Kind == 16) {
						if (((ni$ as __goscript_yaml.Node).Alias != null) && ($.pointerValue<__goscript_yaml.Node>((ni$ as __goscript_yaml.Node).Alias).Kind != 4)) {
							failWantMap()
						}
					} else {
						if ((ni$ as __goscript_yaml.Node).Kind != 4) {
							failWantMap()
						}
					}
					await (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as decoder).unmarshal(ni, $.markAsStructValue($.cloneStructValue(out))) : decoder.prototype.unmarshal.call(d, ni, $.markAsStructValue($.cloneStructValue(out))))
				}
				break
			}
			default:
			{
				failWantMap()
				break
			}
		}

		;(d$ as decoder).mergedFields = mergedFields
	}

	public ["null"](out: reflect.Value): boolean {
		const d: decoder | $.VarRef<decoder> | null = this;
		if ($.markAsStructValue($.cloneStructValue(out)).CanAddr()) {
			switch ($.markAsStructValue($.cloneStructValue(out)).Kind()) {
				case reflect.Interface:
				case reflect.Ptr:
				case reflect.Map:
				case reflect.Slice:
				{
					$.markAsStructValue($.cloneStructValue(out)).Set($.markAsStructValue($.cloneStructValue(reflect.Zero($.pointerValueOrNil($.markAsStructValue($.cloneStructValue(out)).Type())!))))
					return true
					break
				}
			}
		}
		return false
	}

	public async prepare(n: __goscript_yaml.Node | $.VarRef<__goscript_yaml.Node> | null, out: reflect.Value): globalThis.Promise<[reflect.Value, boolean, boolean]> {
		const d: decoder | $.VarRef<decoder> | null = this;
		let newout: reflect.Value = $.markAsStructValue(new reflect.Value())
		let unmarshaled: boolean = false
		let good: boolean = false
		if ($.stringEqual(await (n !== null && (n as any).__isVarRef !== true && (n as any).__goValue === undefined ? ((n as any) as __goscript_yaml.Node).ShortTag() : __goscript_yaml.Node.prototype.ShortTag.call(n)), "!!null")) {
			return [$.markAsStructValue($.cloneStructValue(out)), false, false]
		}
		let again = true
		while (again) {
			again = false
			if ($.markAsStructValue($.cloneStructValue(out)).Kind() == 22) {
				if ($.markAsStructValue($.cloneStructValue(out)).IsNil()) {
					$.markAsStructValue($.cloneStructValue(out)).Set($.markAsStructValue($.cloneStructValue(reflect.New($.pointerValueOrNil((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>($.markAsStructValue($.cloneStructValue(out)).Type()).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))!))))
				}
				out = $.assignStruct(out, $.markAsStructValue($.cloneStructValue(out)).Elem())
				again = true
			}
			if ($.markAsStructValue($.cloneStructValue(out)).CanAddr()) {
				let outi = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(out)).Addr())).Interface()
				{
					let [u, ok] = $.typeAssertTuple<__goscript_yaml.Unmarshaler | null>(outi, "yaml.Unmarshaler")
					if (ok) {
						good = await (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as decoder).callUnmarshaler(n, u) : decoder.prototype.callUnmarshaler.call(d, n, u))
						return [$.markAsStructValue($.cloneStructValue(out)), true, good]
					}
				}
				{
					let [u, ok] = $.typeAssertTuple<__goscript_yaml.obsoleteUnmarshaler | null>(outi, "yaml.obsoleteUnmarshaler")
					if (ok) {
						good = await (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as decoder).callObsoleteUnmarshaler(n, u) : decoder.prototype.callObsoleteUnmarshaler.call(d, n, u))
						return [$.markAsStructValue($.cloneStructValue(out)), true, good]
					}
				}
			}
		}
		return [$.markAsStructValue($.cloneStructValue(out)), false, false]
	}

	public async scalar(n: __goscript_yaml.Node | $.VarRef<__goscript_yaml.Node> | null, out: reflect.Value): globalThis.Promise<boolean> {
		const d: decoder | $.VarRef<decoder> | null = this;
		const n$: __goscript_yaml.Node = n == null ? $.pointerTarget<__goscript_yaml.Node>(n) : (n as any).__isVarRef === true ? (n as any).value : (n as any).__goValue === undefined ? (n as any) : $.pointerTarget<__goscript_yaml.Node>(n)
		let tag: string = ""
		let resolved: any = null! as any
		if ((n !== null && (n as any).__isVarRef !== true && (n as any).__goValue === undefined ? ((n as any) as __goscript_yaml.Node).indicatedString() : __goscript_yaml.Node.prototype.indicatedString.call(n))) {
			tag = "!!str"
			resolved = (n$ as __goscript_yaml.Node).Value
		} else {
			let __goscriptTuple4: any = await __goscript_resolve.resolve((n$ as __goscript_yaml.Node).Tag, (n$ as __goscript_yaml.Node).Value)
			tag = __goscriptTuple4[0]
			resolved = __goscriptTuple4[1]
			if ($.stringEqual(tag, "!!binary")) {
				let __goscriptTuple5: any = base64.Encoding.prototype.DecodeString.call(base64.StdEncoding, $.mustTypeAssert<string>(resolved, /* @__PURE__ */ $.basicType("string")))
				let data: $.Slice<number> = __goscriptTuple5[0]
				let err = __goscriptTuple5[1]
				if (err != null) {
					__goscript_yaml.failf("!!binary value contains invalid base64 data", null)
				}
				resolved = $.bytesToString(data)
			}
		}
		if (resolved == null) {
			return (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as decoder)["null"](out) : decoder.prototype.null.call(d, out))
		}
		{
			let resolvedv = $.markAsStructValue($.cloneStructValue(reflect.ValueOf(resolved)))
			if ($.comparableEqual($.markAsStructValue($.cloneStructValue(out)).Type(), $.markAsStructValue($.cloneStructValue(resolvedv)).Type())) {
				// We've resolved to exactly the type we want, so use that.
				$.markAsStructValue($.cloneStructValue(out)).Set($.markAsStructValue($.cloneStructValue(resolvedv)))
				return true
			}
		}
		// Perhaps we can use the value as a TextUnmarshaler to
		// set its value.
		if ($.markAsStructValue($.cloneStructValue(out)).CanAddr()) {
			let [u, ok] = $.typeAssertTuple<encoding.TextUnmarshaler | null>($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(out)).Addr())).Interface(), "encoding.TextUnmarshaler")
			if (ok) {
				let text: $.Slice<number> = null! as $.Slice<number>
				if ($.stringEqual(tag, "!!binary")) {
					text = $.stringToBytes($.mustTypeAssert<string>(resolved, /* @__PURE__ */ $.basicType("string")))
				} else {
					// We let any value be unmarshaled into TextUnmarshaler.
					// That might be more lax than we'd like, but the
					// TextUnmarshaler itself should bowl out any dubious values.
					text = $.stringToBytes((n$ as __goscript_yaml.Node).Value)
				}
				let err = (__goscriptAwait = (u !== null && (u as any).__isVarRef !== true && (u as any).__goValue === undefined ? (u as Exclude<encoding.TextUnmarshaler, null>) : $.pointerValue<Exclude<encoding.TextUnmarshaler, null>>(u)).UnmarshalText(text), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (err != null) {
					__goscript_yaml.fail(err)
				}
				return true
			}
		}
		switch ($.markAsStructValue($.cloneStructValue(out)).Kind()) {
			case reflect.String:
			{
				if ($.stringEqual(tag, "!!binary")) {
					$.markAsStructValue($.cloneStructValue(out)).SetString($.mustTypeAssert<string>(resolved, /* @__PURE__ */ $.basicType("string")))
					return true
				}
				$.markAsStructValue($.cloneStructValue(out)).SetString((n$ as __goscript_yaml.Node).Value)
				return true
				break
			}
			case reflect.Interface:
			{
				$.markAsStructValue($.cloneStructValue(out)).Set($.markAsStructValue($.cloneStructValue(reflect.ValueOf(resolved))))
				return true
				break
			}
			case reflect.Int:
			case reflect.Int8:
			case reflect.Int16:
			case reflect.Int32:
			case reflect.Int64:
			{
				let isDuration = $.comparableEqual($.markAsStructValue($.cloneStructValue(out)).Type(), durationType)

				{
					const __goscriptTypeSwitchValue = resolved
					switch (true) {
						case $.typeAssert<number>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("int")).ok:
							{
								let resolved: number = $.typeAssert<number>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("int")).value
								if (!isDuration && !$.markAsStructValue($.cloneStructValue(out)).OverflowInt($.int64(resolved))) {
									$.markAsStructValue($.cloneStructValue(out)).SetInt($.int64(resolved))
									return true
								}
							}
							break
						case $.typeAssert<bigint>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("int64")).ok:
							{
								let resolved: bigint = $.typeAssert<bigint>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("int64")).value
								if (!isDuration && !$.markAsStructValue($.cloneStructValue(out)).OverflowInt(resolved)) {
									$.markAsStructValue($.cloneStructValue(out)).SetInt(resolved)
									return true
								}
							}
							break
						case $.typeAssert<bigint>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("uint64")).ok:
							{
								let resolved: bigint = $.typeAssert<bigint>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("uint64")).value
								if ((!isDuration && (resolved <= 9223372036854775807n)) && !$.markAsStructValue($.cloneStructValue(out)).OverflowInt($.int64(resolved))) {
									$.markAsStructValue($.cloneStructValue(out)).SetInt($.int64(resolved))
									return true
								}
							}
							break
						case $.typeAssert<number>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("float64")).ok:
							{
								let resolved: number = $.typeAssert<number>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("float64")).value
								if ((!isDuration && (resolved <= math.MaxInt64)) && !$.markAsStructValue($.cloneStructValue(out)).OverflowInt($.int64(resolved))) {
									$.markAsStructValue($.cloneStructValue(out)).SetInt($.int64(resolved))
									return true
								}
							}
							break
						case $.typeAssert<string>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("string")).ok:
							{
								let resolved: string = $.typeAssert<string>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("string")).value
								if ($.comparableEqual($.markAsStructValue($.cloneStructValue(out)).Type(), durationType)) {
									let [__goscriptShadow0, err] = time.ParseDuration(resolved)
									if (err == null) {
										$.markAsStructValue($.cloneStructValue(out)).SetInt($.int64(__goscriptShadow0))
										return true
									}
								}
							}
							break
					}
				}
				break
			}
			case reflect.Uint:
			case reflect.Uint8:
			case reflect.Uint16:
			case reflect.Uint32:
			case reflect.Uint64:
			case reflect.Uintptr:
			{
				{
					const __goscriptTypeSwitchValue = resolved
					switch (true) {
						case $.typeAssert<number>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("int")).ok:
							{
								let resolved: number = $.typeAssert<number>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("int")).value
								if ((resolved >= 0) && !$.markAsStructValue($.cloneStructValue(out)).OverflowUint($.uint64(resolved))) {
									$.markAsStructValue($.cloneStructValue(out)).SetUint($.uint64(resolved))
									return true
								}
							}
							break
						case $.typeAssert<bigint>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("int64")).ok:
							{
								let resolved: bigint = $.typeAssert<bigint>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("int64")).value
								if ((resolved >= 0n) && !$.markAsStructValue($.cloneStructValue(out)).OverflowUint($.uint64(resolved))) {
									$.markAsStructValue($.cloneStructValue(out)).SetUint($.uint64(resolved))
									return true
								}
							}
							break
						case $.typeAssert<bigint>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("uint64")).ok:
							{
								let resolved: bigint = $.typeAssert<bigint>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("uint64")).value
								if (!$.markAsStructValue($.cloneStructValue(out)).OverflowUint($.uint64(resolved))) {
									$.markAsStructValue($.cloneStructValue(out)).SetUint($.uint64(resolved))
									return true
								}
							}
							break
						case $.typeAssert<number>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("float64")).ok:
							{
								let resolved: number = $.typeAssert<number>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("float64")).value
								if ((resolved <= math.MaxUint64) && !$.markAsStructValue($.cloneStructValue(out)).OverflowUint($.uint64(resolved))) {
									$.markAsStructValue($.cloneStructValue(out)).SetUint($.uint64(resolved))
									return true
								}
							}
							break
					}
				}
				break
			}
			case reflect.Bool:
			{
				{
					const __goscriptTypeSwitchValue = resolved
					switch (true) {
						case $.typeAssert<boolean>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("bool")).ok:
							{
								let resolved: boolean = $.typeAssert<boolean>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("bool")).value
								$.markAsStructValue($.cloneStructValue(out)).SetBool(resolved)
								return true
							}
							break
						case $.typeAssert<string>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("string")).ok:
							{
								let resolved: string = $.typeAssert<string>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("string")).value
								switch (resolved) {
									case "y":
									case "Y":
									case "yes":
									case "Yes":
									case "YES":
									case "on":
									case "On":
									case "ON":
									{
										$.markAsStructValue($.cloneStructValue(out)).SetBool(true)
										return true
										break
									}
									case "n":
									case "N":
									case "no":
									case "No":
									case "NO":
									case "off":
									case "Off":
									case "OFF":
									{
										$.markAsStructValue($.cloneStructValue(out)).SetBool(false)
										return true
										break
									}
								}
							}
							break
					}
				}
				break
			}
			case reflect.Float32:
			case reflect.Float64:
			{
				{
					const __goscriptTypeSwitchValue = resolved
					switch (true) {
						case $.typeAssert<number>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("int")).ok:
							{
								let resolved: number = $.typeAssert<number>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("int")).value
								$.markAsStructValue($.cloneStructValue(out)).SetFloat(resolved)
								return true
							}
							break
						case $.typeAssert<bigint>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("int64")).ok:
							{
								let resolved: bigint = $.typeAssert<bigint>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("int64")).value
								$.markAsStructValue($.cloneStructValue(out)).SetFloat(globalThis.Number(resolved))
								return true
							}
							break
						case $.typeAssert<bigint>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("uint64")).ok:
							{
								let resolved: bigint = $.typeAssert<bigint>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("uint64")).value
								$.markAsStructValue($.cloneStructValue(out)).SetFloat(globalThis.Number(resolved))
								return true
							}
							break
						case $.typeAssert<number>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("float64")).ok:
							{
								let resolved: number = $.typeAssert<number>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("float64")).value
								$.markAsStructValue($.cloneStructValue(out)).SetFloat(resolved)
								return true
							}
							break
					}
				}
				break
			}
			case reflect.Struct:
			{
				{
					let resolvedv = $.markAsStructValue($.cloneStructValue(reflect.ValueOf(resolved)))
					if ($.comparableEqual($.markAsStructValue($.cloneStructValue(out)).Type(), $.markAsStructValue($.cloneStructValue(resolvedv)).Type())) {
						$.markAsStructValue($.cloneStructValue(out)).Set($.markAsStructValue($.cloneStructValue(resolvedv)))
						return true
					}
				}
				break
			}
			case reflect.Ptr:
			{
				$.panic("yaml internal error: please report the issue")
				break
			}
		}
		await (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as decoder).terror(n, tag, out) : decoder.prototype.terror.call(d, n, tag, out))
		return false
	}

	public async sequence(n: __goscript_yaml.Node | $.VarRef<__goscript_yaml.Node> | null, out: reflect.Value): globalThis.Promise<boolean> {
		const d: decoder | $.VarRef<decoder> | null = this;
		let good: boolean = false
		const n$: __goscript_yaml.Node = n == null ? $.pointerTarget<__goscript_yaml.Node>(n) : (n as any).__isVarRef === true ? (n as any).value : (n as any).__goValue === undefined ? (n as any) : $.pointerTarget<__goscript_yaml.Node>(n)
		let l = $.sliceLen((n$ as __goscript_yaml.Node).Content)

		let iface: reflect.Value = $.markAsStructValue(new reflect.Value())
		switch ($.markAsStructValue($.cloneStructValue(out)).Kind()) {
			case reflect.Slice:
			{
				$.markAsStructValue($.cloneStructValue(out)).Set($.markAsStructValue($.cloneStructValue(reflect.MakeSlice($.pointerValueOrNil($.markAsStructValue($.cloneStructValue(out)).Type())!, l, l))))
				break
			}
			case reflect.Array:
			{
				if (l != $.markAsStructValue($.cloneStructValue(out)).Len()) {
					__goscript_yaml.failf("invalid array: want %d elements but got %d", $.arrayToSlice<any>([$.basicInterfaceValue($.markAsStructValue($.cloneStructValue(out)).Len(), "int"), $.basicInterfaceValue(l, "int")]))
				}
				break
			}
			case reflect.Interface:
			{
				iface = $.assignStruct(iface, out)
				out = $.assignStruct(out, settableValueOf($.interfaceValue($.makeSlice<any>(l), "[]interface{}", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] }))))
				break
			}
			default:
			{
				await (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as decoder).terror(n, "!!seq", out) : decoder.prototype.terror.call(d, n, "!!seq", out))
				return false
				break
			}
		}
		let et = (__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>($.markAsStructValue($.cloneStructValue(out)).Type()).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)

		let j = 0
		for (let i = 0; i < l; i++) {
			let e = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(reflect.New($.pointerValueOrNil(et)!))).Elem()))
			{
				let ok = await (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as decoder).unmarshal($.arrayIndex((n$ as __goscript_yaml.Node).Content!, i), $.markAsStructValue($.cloneStructValue(e))) : decoder.prototype.unmarshal.call(d, $.arrayIndex((n$ as __goscript_yaml.Node).Content!, i), $.markAsStructValue($.cloneStructValue(e))))
				if (ok) {
					$.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(out)).Index(j))).Set($.markAsStructValue($.cloneStructValue(e)))
					j++
				}
			}
		}
		if ($.markAsStructValue($.cloneStructValue(out)).Kind() != 17) {
			$.markAsStructValue($.cloneStructValue(out)).Set($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(out)).Slice(0, j))))
		}
		if ($.markAsStructValue($.cloneStructValue(iface)).IsValid()) {
			$.markAsStructValue($.cloneStructValue(iface)).Set($.markAsStructValue($.cloneStructValue(out)))
		}
		return true
	}

	public async terror(n: __goscript_yaml.Node | $.VarRef<__goscript_yaml.Node> | null, tag: string, out: reflect.Value): globalThis.Promise<void> {
		let d: decoder | $.VarRef<decoder> | null = this;
		const d$: decoder = d == null ? $.pointerTarget<decoder>(d) : (d as any).__isVarRef === true ? (d as any).value : (d as any).__goValue === undefined ? (d as any) : $.pointerTarget<decoder>(d)
		const n$: __goscript_yaml.Node = n == null ? $.pointerTarget<__goscript_yaml.Node>(n) : (n as any).__isVarRef === true ? (n as any).value : (n as any).__goValue === undefined ? (n as any) : $.pointerTarget<__goscript_yaml.Node>(n)
		if (!$.stringEqual((n$ as __goscript_yaml.Node).Tag, "")) {
			tag = (n$ as __goscript_yaml.Node).Tag
		}
		let value = (n$ as __goscript_yaml.Node).Value
		if ((!$.stringEqual(tag, "!!seq")) && (!$.stringEqual(tag, "!!map"))) {
			if ($.stringLen(value) > 10) {
				value = $.concatString(($.concatString(" `", $.sliceStringOrBytes(value, undefined, 7))), "...`")
			} else {
				value = $.concatString(($.concatString(" `", value)), "`")
			}
		}
		;(d$ as decoder).terrors = $.appendOne((d$ as decoder).terrors, await fmt.Sprintf("line %d: cannot unmarshal %s%s into %s", $.basicInterfaceValue((n$ as __goscript_yaml.Node).Line, "int"), __goscript_resolve.shortTag(tag), value, ($.markAsStructValue($.cloneStructValue(out)).Type() as any)))
	}

	public async unmarshal(n: __goscript_yaml.Node | $.VarRef<__goscript_yaml.Node> | null, out: reflect.Value): globalThis.Promise<boolean> {
		let d: decoder | $.VarRef<decoder> | null = this;
		let good: boolean = false
		const d$: decoder = d == null ? $.pointerTarget<decoder>(d) : (d as any).__isVarRef === true ? (d as any).value : (d as any).__goValue === undefined ? (d as any) : $.pointerTarget<decoder>(d)
		const n$: __goscript_yaml.Node = n == null ? $.pointerTarget<__goscript_yaml.Node>(n) : (n as any).__isVarRef === true ? (n as any).value : (n as any).__goValue === undefined ? (n as any) : $.pointerTarget<__goscript_yaml.Node>(n);
		;(d$ as decoder).decodeCount++
		if ((d$ as decoder).aliasDepth > 0) {
			;(d$ as decoder).aliasCount++
		}
		if ((((d$ as decoder).aliasCount > 100) && ((d$ as decoder).decodeCount > 1000)) && (((d$ as decoder).aliasCount / (d$ as decoder).decodeCount) > allowedAliasRatio((d$ as decoder).decodeCount))) {
			__goscript_yaml.failf("document contains excessive aliasing", null)
		}
		if ($.comparableEqual($.markAsStructValue($.cloneStructValue(out)).Type(), __goscript_get_nodeType())) {
			$.markAsStructValue($.cloneStructValue(out)).Set($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(reflect.ValueOf($.interfaceValue(n, "*yaml.Node", /* @__PURE__ */ $.pointerType("yaml.Node"))))).Elem())))
			return true
		}
		switch ((n$ as __goscript_yaml.Node).Kind) {
			case 1:
			{
				return (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as decoder).document(n, out) : decoder.prototype.document.call(d, n, out))
				break
			}
			case 16:
			{
				return (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as decoder).alias(n, out) : decoder.prototype.alias.call(d, n, out))
				break
			}
		}
		let __goscriptTuple6: any = await (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as decoder).prepare(n, $.markAsStructValue($.cloneStructValue(out))) : decoder.prototype.prepare.call(d, n, $.markAsStructValue($.cloneStructValue(out))))
		out = $.assignStruct(out, __goscriptTuple6[0])
		let unmarshaled = __goscriptTuple6[1]
		good = __goscriptTuple6[2]
		if (unmarshaled) {
			return good
		}
		switch ((n$ as __goscript_yaml.Node).Kind) {
			case 8:
			{
				good = await (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as decoder).scalar(n, out) : decoder.prototype.scalar.call(d, n, out))
				break
			}
			case 4:
			{
				good = await (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as decoder).mapping(n, $.markAsStructValue($.cloneStructValue(out))) : decoder.prototype.mapping.call(d, n, $.markAsStructValue($.cloneStructValue(out))))
				break
			}
			case 2:
			{
				good = await (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as decoder).sequence(n, $.markAsStructValue($.cloneStructValue(out))) : decoder.prototype.sequence.call(d, n, $.markAsStructValue($.cloneStructValue(out))))
				break
			}
			case 0:
			{
				if ((n !== null && (n as any).__isVarRef !== true && (n as any).__goValue === undefined ? ((n as any) as __goscript_yaml.Node).IsZero() : __goscript_yaml.Node.prototype.IsZero.call(n))) {
					return (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as decoder)["null"](out) : decoder.prototype.null.call(d, out))
				}
			}
			default:
			{
				__goscript_yaml.failf("cannot decode node with unknown kind %d", $.arrayToSlice<any>([$.namedValueInterfaceValue<any>((n$ as __goscript_yaml.Node).Kind, "yaml.Kind", {}, /* @__PURE__ */ $.basicType("uint32", "yaml.Kind"))]))
				break
			}
		}
		return good
	}

	static __typeInfo = $.registerStructType(
		"yaml.decoder",
		() => new decoder(),
		() => [$.methodSignature("alias", [["n", /* @__PURE__ */ $.pointerType("yaml.Node")], ["out", "reflect.Value"]], [["good", /* @__PURE__ */ $.basicType("bool")]], true), $.methodSignature("callObsoleteUnmarshaler", [["n", /* @__PURE__ */ $.pointerType("yaml.Node")], ["u", "yaml.obsoleteUnmarshaler"]], [["good", /* @__PURE__ */ $.basicType("bool")]], true), $.methodSignature("callUnmarshaler", [["n", /* @__PURE__ */ $.pointerType("yaml.Node")], ["u", "yaml.Unmarshaler"]], [["good", /* @__PURE__ */ $.basicType("bool")]], true), $.methodSignature("document", [["n", /* @__PURE__ */ $.pointerType("yaml.Node")], ["out", "reflect.Value"]], [["good", /* @__PURE__ */ $.basicType("bool")]], true), $.methodSignature("fieldByIndex", [["n", /* @__PURE__ */ $.pointerType("yaml.Node")], ["v", "reflect.Value"], ["index", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))]], [["field", "reflect.Value"]], true), $.methodSignature("mapping", [["n", /* @__PURE__ */ $.pointerType("yaml.Node")], ["out", "reflect.Value"]], [["good", /* @__PURE__ */ $.basicType("bool")]], true), $.methodSignature("mappingStruct", [["n", /* @__PURE__ */ $.pointerType("yaml.Node")], ["out", "reflect.Value"]], [["good", /* @__PURE__ */ $.basicType("bool")]], true), $.methodSignature("merge", [["parent", /* @__PURE__ */ $.pointerType("yaml.Node")], ["merge", /* @__PURE__ */ $.pointerType("yaml.Node")], ["out", "reflect.Value"]], [], true), $.methodSignature("null", [["out", "reflect.Value"]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("prepare", [["n", /* @__PURE__ */ $.pointerType("yaml.Node")], ["out", "reflect.Value"]], [["newout", "reflect.Value"], ["unmarshaled", /* @__PURE__ */ $.basicType("bool")], ["good", /* @__PURE__ */ $.basicType("bool")]], true), $.methodSignature("scalar", [["n", /* @__PURE__ */ $.pointerType("yaml.Node")], ["out", "reflect.Value"]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("sequence", [["n", /* @__PURE__ */ $.pointerType("yaml.Node")], ["out", "reflect.Value"]], [["good", /* @__PURE__ */ $.basicType("bool")]], true), $.methodSignature("terror", [["n", /* @__PURE__ */ $.pointerType("yaml.Node")], ["tag", /* @__PURE__ */ $.basicType("string")], ["out", "reflect.Value"]], [], true), $.methodSignature("unmarshal", [["n", /* @__PURE__ */ $.pointerType("yaml.Node")], ["out", "reflect.Value"]], [["good", /* @__PURE__ */ $.basicType("bool")]], true)],
		decoder,
		() => [/* @__PURE__ */ $.structField("doc", /* @__PURE__ */ $.pointerType("yaml.Node"), [0], 0, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("aliases", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.pointerType("yaml.Node"), /* @__PURE__ */ $.basicType("bool")), [1], 8, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("terrors", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")), [2], 16, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("stringMapType", "reflect.Type", [3], 40, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("generalMapType", "reflect.Type", [4], 56, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("knownFields", /* @__PURE__ */ $.basicType("bool"), [5], 72, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("uniqueKeys", /* @__PURE__ */ $.basicType("bool"), [6], 73, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("decodeCount", /* @__PURE__ */ $.basicType("int"), [7], 80, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("aliasCount", /* @__PURE__ */ $.basicType("int"), [8], 88, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("aliasDepth", /* @__PURE__ */ $.basicType("int"), [9], 96, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("mergedFields", /* @__PURE__ */ $.mapType({ kind: $.TypeKind.Interface, methods: [] }, /* @__PURE__ */ $.basicType("bool")), [10], 104, false, { pkgPath: "gopkg.in/yaml.v3" })]
	)
}

export const alias_ratio_range_low: number = 400000

export const alias_ratio_range_high: number = 4000000

export const alias_ratio_range: number = 3600000

export function newParser(b: $.Slice<number>): parser | $.VarRef<parser> | null {
	let p = $.varRef(new parser(undefined, true))
	if (!__goscript_apic.yaml_parser_initialize($.fieldRef(p.value._fields, "parser"))) {
		$.panic("failed to initialize YAML emitter")
	}
	if ($.sliceLen(b) == 0) {
		b = new Uint8Array([10]) as $.Slice<number>
	}
	__goscript_apic.yaml_parser_set_input_string($.fieldRef(p.value._fields, "parser"), b)
	return p
}

export function newParserFromReader(r: io.Reader | null): parser | $.VarRef<parser> | null {
	let p = $.varRef(new parser(undefined, true))
	if (!__goscript_apic.yaml_parser_initialize($.fieldRef(p.value._fields, "parser"))) {
		$.panic("failed to initialize YAML emitter")
	}
	__goscript_apic.yaml_parser_set_input_reader($.fieldRef(p.value._fields, "parser"), r)
	return p
}

export var nodeType: reflect.Type | null

export function __goscript_init_nodeType(): void {
	if (((nodeType) as any) === undefined) {
		nodeType = reflect.TypeOf($.interfaceValue(new __goscript_yaml.Node(undefined, true), "yaml.Node", "yaml.Node"))
	}
}

export function __goscript_get_nodeType(): reflect.Type | null {
	if (((nodeType) as any) === undefined) {
		__goscript_init_nodeType()
	}
	return nodeType
}

export function __goscript_set_nodeType(__goscriptValue: reflect.Type | null): void {
	nodeType = __goscriptValue
}

export let durationType: reflect.Type | null = reflect.TypeOf($.namedValueInterfaceValue<any>(0n, "time.Duration", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic5()))

export function __goscript_set_durationType(__goscriptValue: reflect.Type | null): void {
	durationType = __goscriptValue
}

export let stringMapType: reflect.Type | null = reflect.TypeOf($.interfaceValue($.makeMap<string, any>([]), "map[string]interface{}", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), { kind: $.TypeKind.Interface, methods: [] })))

export function __goscript_set_stringMapType(__goscriptValue: reflect.Type | null): void {
	stringMapType = __goscriptValue
}

export let generalMapType: reflect.Type | null = reflect.TypeOf($.interfaceValue($.makeMap<any, any>([]), "map[interface{}]interface{}", /* @__PURE__ */ $.mapType({ kind: $.TypeKind.Interface, methods: [] }, { kind: $.TypeKind.Interface, methods: [] })))

export function __goscript_set_generalMapType(__goscriptValue: reflect.Type | null): void {
	generalMapType = __goscriptValue
}

export let ifaceType: reflect.Type | null = (generalMapType !== null && (generalMapType as any).__isVarRef !== true && (generalMapType as any).__goValue === undefined ? (generalMapType as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(generalMapType)).Elem()

export function __goscript_set_ifaceType(__goscriptValue: reflect.Type | null): void {
	ifaceType = __goscriptValue
}

export let timeType: reflect.Type | null = reflect.TypeOf($.interfaceValue($.markAsStructValue(new time.Time()), "time.Time", "time.Time"))

export function __goscript_set_timeType(__goscriptValue: reflect.Type | null): void {
	timeType = __goscriptValue
}

export let ptrTimeType: reflect.Type | null = reflect.TypeOf($.interfaceValue(new time.Time(), "*time.Time", /* @__PURE__ */ $.pointerType("time.Time")))

export function __goscript_set_ptrTimeType(__goscriptValue: reflect.Type | null): void {
	ptrTimeType = __goscriptValue
}

export function newDecoder(): decoder | $.VarRef<decoder> | null {
	let d: decoder | $.VarRef<decoder> | null = new decoder({stringMapType: stringMapType, generalMapType: generalMapType, uniqueKeys: true})
	$.pointerValue<decoder>(d).aliases = $.makeMap<__goscript_yaml.Node | $.VarRef<__goscript_yaml.Node> | null, boolean>(undefined, /* @__PURE__ */ $.pointerType("yaml.Node"))
	return d
}

export function allowedAliasRatio(decodeCount: number): number {
	switch ((true as boolean)) {
		case decodeCount <= 400000:
		{
			return 0.99
			break
		}
		case decodeCount >= 4000000:
		{
			return 0.10
			break
		}
		default:
		{
			return 0.99 - (0.89 * ((decodeCount - 400000) / 3600000))
			break
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export let zeroValue: reflect.Value = $.markAsStructValue(new reflect.Value())

export function __goscript_set_zeroValue(__goscriptValue: reflect.Value): void {
	$.assignStruct(zeroValue, __goscriptValue)
}

export function resetMap(out: reflect.Value): void {
	for (let __goscriptRangeTarget2 = $.markAsStructValue($.cloneStructValue(out)).MapKeys(), __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow2.length; __rangeIndex++) {
		let k = $.markAsStructValue($.cloneStructValue((__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + __rangeIndex] as reflect.Value)))
		$.markAsStructValue($.cloneStructValue(out)).SetMapIndex($.markAsStructValue($.cloneStructValue(k)), $.markAsStructValue($.cloneStructValue(zeroValue)))
	}
}

export function settableValueOf(i: any): reflect.Value {
	let v = $.markAsStructValue($.cloneStructValue(reflect.ValueOf(i)))
	let sv = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(reflect.New($.pointerValueOrNil($.markAsStructValue($.cloneStructValue(v)).Type())!))).Elem()))
	$.markAsStructValue($.cloneStructValue(sv)).Set($.markAsStructValue($.cloneStructValue(v)))
	return $.markAsStructValue($.cloneStructValue(sv))
}

export async function isStringMap(n: __goscript_yaml.Node | $.VarRef<__goscript_yaml.Node> | null): globalThis.Promise<boolean> {
	const n$: __goscript_yaml.Node = n == null ? $.pointerTarget<__goscript_yaml.Node>(n) : (n as any).__isVarRef === true ? (n as any).value : (n as any).__goValue === undefined ? (n as any) : $.pointerTarget<__goscript_yaml.Node>(n)
	if ((n$ as __goscript_yaml.Node).Kind != 4) {
		return false
	}
	let l = $.sliceLen((n$ as __goscript_yaml.Node).Content)
	for (let i = 0; i < l; i = i + (2)) {
		let shortTag = await __goscript_yaml.Node.prototype.ShortTag.call($.arrayIndex((n$ as __goscript_yaml.Node).Content!, i))
		if ((!$.stringEqual(shortTag, "!!str")) && (!$.stringEqual(shortTag, "!!merge"))) {
			return false
		}
	}
	return true
}

export function failWantMap(): void {
	__goscript_yaml.failf("map merge requires map or sequence of maps as the value", null)
}

export function isMerge(n: __goscript_yaml.Node | $.VarRef<__goscript_yaml.Node> | null): boolean {
	const n$: __goscript_yaml.Node = n == null ? $.pointerTarget<__goscript_yaml.Node>(n) : (n as any).__isVarRef === true ? (n as any).value : (n as any).__goValue === undefined ? (n as any) : $.pointerTarget<__goscript_yaml.Node>(n)
	return (((n$ as __goscript_yaml.Node).Kind == 8) && ($.stringEqual((n$ as __goscript_yaml.Node).Value, "<<"))) && ((($.stringEqual((n$ as __goscript_yaml.Node).Tag, "")) || ($.stringEqual((n$ as __goscript_yaml.Node).Tag, "!"))) || ($.stringEqual(__goscript_resolve.shortTag((n$ as __goscript_yaml.Node).Tag), "!!merge")))
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({String: (receiver: any, ...args: any[]) => (__goscript_yamlh.yaml_event_type_t_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.basicType("int8", "yaml.yaml_event_type_t"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])])
}

var __goscriptStatic3$value: any
function __goscriptStatic3(): any {
	return __goscriptStatic3$value ??= ({Abs: (receiver: any, ...args: any[]) => (time.Duration_Abs as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Hours: (receiver: any, ...args: any[]) => (time.Duration_Hours as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Microseconds: (receiver: any, ...args: any[]) => (time.Duration_Microseconds as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Milliseconds: (receiver: any, ...args: any[]) => (time.Duration_Milliseconds as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Minutes: (receiver: any, ...args: any[]) => (time.Duration_Minutes as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Nanoseconds: (receiver: any, ...args: any[]) => (time.Duration_Nanoseconds as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Round: (receiver: any, ...args: any[]) => (time.Duration_Round as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Seconds: (receiver: any, ...args: any[]) => (time.Duration_Seconds as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (time.Duration_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Truncate: (receiver: any, ...args: any[]) => (time.Duration_Truncate as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), format: (receiver: any, ...args: any[]) => (time.Duration_format as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic4$value: any
function __goscriptStatic4(): any {
	return __goscriptStatic4$value ??= (/* @__PURE__ */ $.basicType("int64", "time.Duration"))
}

var __goscriptStatic5$value: any
function __goscriptStatic5(): any {
	return __goscriptStatic5$value ??= ([$.methodSignature("Abs", [], [/* @__PURE__ */ $.basicType("int64", "time.Duration")]), $.methodSignature("Hours", [], [/* @__PURE__ */ $.basicType("float64")]), $.methodSignature("Microseconds", [], [/* @__PURE__ */ $.basicType("int64")]), $.methodSignature("Milliseconds", [], [/* @__PURE__ */ $.basicType("int64")]), $.methodSignature("Minutes", [], [/* @__PURE__ */ $.basicType("float64")]), $.methodSignature("Nanoseconds", [], [/* @__PURE__ */ $.basicType("int64")]), $.methodSignature("Round", [["m", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], [/* @__PURE__ */ $.basicType("int64", "time.Duration")]), $.methodSignature("Seconds", [], [/* @__PURE__ */ $.basicType("float64")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Truncate", [["m", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], [/* @__PURE__ */ $.basicType("int64", "time.Duration")]), $.methodSignature("format", [["buf", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 32))]], [/* @__PURE__ */ $.basicType("int")])])
}

var __goscriptAwait: any
