// Generated file based on context.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as strconv from "@goscript/strconv/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as slices from "@goscript/slices/index.js"

import * as parse from "@goscript/text/template/parse/index.js"

import * as __goscript_attr_string from "./attr_string.gs.ts"

import * as __goscript_delim_string from "./delim_string.gs.ts"

import * as __goscript_element_string from "./element_string.gs.ts"

import * as __goscript_error from "./error.gs.ts"

import * as __goscript_jsctx_string from "./jsctx_string.gs.ts"

import * as __goscript_state_string from "./state_string.gs.ts"

import * as __goscript_urlpart_string from "./urlpart_string.gs.ts"
import "@goscript/strconv/index.js"
import "@goscript/fmt/index.js"
import "@goscript/slices/index.js"
import "@goscript/text/template/parse/index.js"
import "./attr_string.gs.ts"
import "./delim_string.gs.ts"
import "./element_string.gs.ts"
import "./error.gs.ts"
import "./jsctx_string.gs.ts"
import "./state_string.gs.ts"
import "./urlpart_string.gs.ts"

$.registerTypePackagePath("html/template", ["template.context", "template.state", "template.delim", "template.urlPart", "template.jsCtx", "template.element", "template.attr"])

export type state = number

$.registerNamedValueType(
	"template.state",
	{String: (receiver: any, ...args: any[]) => (__goscript_state_string.state_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

$.registerNamedValueType(
	"*template.state",
	{String: (receiver: any, ...args: any[]) => (__goscript_state_string.state_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

export type delim = number

$.registerNamedValueType(
	"template.delim",
	{String: (receiver: any, ...args: any[]) => (__goscript_delim_string.delim_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

$.registerNamedValueType(
	"*template.delim",
	{String: (receiver: any, ...args: any[]) => (__goscript_delim_string.delim_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

export type urlPart = number

$.registerNamedValueType(
	"template.urlPart",
	{String: (receiver: any, ...args: any[]) => (__goscript_urlpart_string.urlPart_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

$.registerNamedValueType(
	"*template.urlPart",
	{String: (receiver: any, ...args: any[]) => (__goscript_urlpart_string.urlPart_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

export type jsCtx = number

$.registerNamedValueType(
	"template.jsCtx",
	{String: (receiver: any, ...args: any[]) => (__goscript_jsctx_string.jsCtx_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

$.registerNamedValueType(
	"*template.jsCtx",
	{String: (receiver: any, ...args: any[]) => (__goscript_jsctx_string.jsCtx_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

export type element = number

$.registerNamedValueType(
	"template.element",
	{String: (receiver: any, ...args: any[]) => (__goscript_element_string.element_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

$.registerNamedValueType(
	"*template.element",
	{String: (receiver: any, ...args: any[]) => (__goscript_element_string.element_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

export type attr = number

$.registerNamedValueType(
	"template.attr",
	{String: (receiver: any, ...args: any[]) => (__goscript_attr_string.attr_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

$.registerNamedValueType(
	"*template.attr",
	{String: (receiver: any, ...args: any[]) => (__goscript_attr_string.attr_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

export class context {
	public get state(): state {
		return this._fields.state
	}

	public set state(value: state) {
		this._fields.state = value
	}

	public get delim(): delim {
		return this._fields.delim
	}

	public set delim(value: delim) {
		this._fields.delim = value
	}

	public get urlPart(): urlPart {
		return this._fields.urlPart
	}

	public set urlPart(value: urlPart) {
		this._fields.urlPart = value
	}

	public get jsCtx(): jsCtx {
		return this._fields.jsCtx
	}

	public set jsCtx(value: jsCtx) {
		this._fields.jsCtx = value
	}

	// jsBraceDepth contains the current depth, for each JS template literal
	// string interpolation expression, of braces we've seen. This is used to
	// determine if the next } will close a JS template literal string
	// interpolation expression or not.
	public get jsBraceDepth(): $.Slice<number> {
		return this._fields.jsBraceDepth
	}

	public set jsBraceDepth(value: $.Slice<number>) {
		this._fields.jsBraceDepth = value
	}

	public get attr(): attr {
		return this._fields.attr
	}

	public set attr(value: attr) {
		this._fields.attr = value
	}

	public get element(): element {
		return this._fields.element
	}

	public set element(value: element) {
		this._fields.element = value
	}

	public get n(): parse.Node | null {
		return this._fields.n
	}

	public set n(value: parse.Node | null) {
		this._fields.n = value
	}

	public get err(): __goscript_error.Error | $.VarRef<__goscript_error.Error> | null {
		return this._fields.err
	}

	public set err(value: __goscript_error.Error | $.VarRef<__goscript_error.Error> | null) {
		this._fields.err = value
	}

	public _fields: {
		state: state
		delim: delim
		urlPart: urlPart
		jsCtx: jsCtx
		jsBraceDepth: $.Slice<number>
		attr: attr
		element: element
		n: parse.Node | null
		err: __goscript_error.Error | $.VarRef<__goscript_error.Error> | null
	}

	constructor(init?: Partial<{state?: state, delim?: delim, urlPart?: urlPart, jsCtx?: jsCtx, jsBraceDepth?: $.Slice<number>, attr?: attr, element?: element, n?: parse.Node | null, err?: __goscript_error.Error | $.VarRef<__goscript_error.Error> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			state: init?.state ?? (0 as state),
			delim: init?.delim ?? (0 as delim),
			urlPart: init?.urlPart ?? (0 as urlPart),
			jsCtx: init?.jsCtx ?? (0 as jsCtx),
			jsBraceDepth: init?.jsBraceDepth ?? (null! as $.Slice<number>),
			attr: init?.attr ?? (0 as attr),
			element: init?.element ?? (0 as element),
			n: init?.n ?? (null! as parse.Node | null),
			err: init?.err ?? (null! as __goscript_error.Error | $.VarRef<__goscript_error.Error> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public __goscriptClone(): context {
		return new context(this, true)
	}

	public __goscriptAssign(source: context): void {
		const target = this._fields
		const values = source._fields
		target.state = values.state
		target.delim = values.delim
		target.urlPart = values.urlPart
		target.jsCtx = values.jsCtx
		target.jsBraceDepth = values.jsBraceDepth
		target.attr = values.attr
		target.element = values.element
		target.n = $.assignFieldValue(target.n, values.n, "parse.Node")
		target.err = values.err
	}

	public async String(): globalThis.Promise<string> {
		const c = this;
		let err: $.GoError = null! as $.GoError
		if (c.err != null) {
			err = $.interfaceValue<$.GoError>(c.err, "*template.Error", /* @__PURE__ */ $.pointerType("template.Error"))
		}
		return fmt.Sprintf("{%v %v %v %v %v %v %v %v}", $.namedValueInterfaceValue<any>(c.state, "template.state", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), $.namedValueInterfaceValue<any>(c.delim, "template.delim", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic2()), $.namedValueInterfaceValue<any>(c.urlPart, "template.urlPart", __goscriptStatic5(), __goscriptStatic6(), __goscriptStatic2()), $.namedValueInterfaceValue<any>(c.jsCtx, "template.jsCtx", __goscriptStatic7(), __goscriptStatic8(), __goscriptStatic2()), $.interfaceValue(c.jsBraceDepth, "[]int", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))), $.namedValueInterfaceValue<any>(c.attr, "template.attr", __goscriptStatic9(), __goscriptStatic10(), __goscriptStatic2()), $.namedValueInterfaceValue<any>(c.element, "template.element", __goscriptStatic11(), __goscriptStatic12(), __goscriptStatic2()), (err as any))
	}

	public clone(): context {
		const c = this;
		let clone = $.markAsStructValue($.cloneStructValue(c))
		clone.jsBraceDepth = (slices.Clone(c.jsBraceDepth) as $.Slice<number>)
		return $.markAsStructValue($.cloneStructValue(clone))
	}

	public eq(d: context): boolean {
		const c = this;
		return (((((((c.state == d.state) && (c.delim == d.delim)) && (c.urlPart == d.urlPart)) && (c.jsCtx == d.jsCtx)) && slices.Equal(c.jsBraceDepth, d.jsBraceDepth)) && (c.attr == d.attr)) && (c.element == d.element)) && ($.pointerEqual(c.err, d.err))
	}

	public async mangle(templateName: string): globalThis.Promise<string> {
		const c = this;
		// The mangled name for the default context is the input templateName.
		if (c.state == 0) {
			return templateName
		}
		let s = $.concatString(($.concatString(templateName, "$htmltemplate_")), __goscript_state_string.state_String(c.state))
		if (c.delim != 0) {
			s = $.concatString(s, $.concatString("_", __goscript_delim_string.delim_String(c.delim)))
		}
		if (c.urlPart != 0) {
			s = $.concatString(s, $.concatString("_", __goscript_urlpart_string.urlPart_String(c.urlPart)))
		}
		if (c.jsCtx != 0) {
			s = $.concatString(s, $.concatString("_", __goscript_jsctx_string.jsCtx_String(c.jsCtx)))
		}
		if (c.jsBraceDepth != null) {
			s = $.concatString(s, await fmt.Sprintf("_jsBraceDepth(%v)", $.interfaceValue(c.jsBraceDepth, "[]int", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")))))
		}
		if (c.attr != 0) {
			s = $.concatString(s, $.concatString("_", __goscript_attr_string.attr_String(c.attr)))
		}
		if (c.element != 0) {
			s = $.concatString(s, $.concatString("_", __goscript_element_string.element_String(c.element)))
		}
		return s
	}

	static __typeInfo = $.registerStructType(
		"template.context",
		() => new context(),
		() => [$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("clone", [], ["template.context"]), $.methodSignature("eq", [["d", "template.context"]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("mangle", [["templateName", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.basicType("string")])],
		context,
		() => [/* @__PURE__ */ $.structField("state", /* @__PURE__ */ $.basicType("uint8", "template.state"), [0], 0, false, { pkgPath: "html/template" }), /* @__PURE__ */ $.structField("delim", /* @__PURE__ */ $.basicType("uint8", "template.delim"), [1], 1, false, { pkgPath: "html/template" }), /* @__PURE__ */ $.structField("urlPart", /* @__PURE__ */ $.basicType("uint8", "template.urlPart"), [2], 2, false, { pkgPath: "html/template" }), /* @__PURE__ */ $.structField("jsCtx", /* @__PURE__ */ $.basicType("uint8", "template.jsCtx"), [3], 3, false, { pkgPath: "html/template" }), /* @__PURE__ */ $.structField("jsBraceDepth", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")), [4], 8, false, { pkgPath: "html/template" }), /* @__PURE__ */ $.structField("attr", /* @__PURE__ */ $.basicType("uint8", "template.attr"), [5], 32, false, { pkgPath: "html/template" }), /* @__PURE__ */ $.structField("element", /* @__PURE__ */ $.basicType("uint8", "template.element"), [6], 33, false, { pkgPath: "html/template" }), /* @__PURE__ */ $.structField("n", "parse.Node", [7], 40, false, { pkgPath: "html/template" }), /* @__PURE__ */ $.structField("err", /* @__PURE__ */ $.pointerType("template.Error"), [8], 56, false, { pkgPath: "html/template" })]
	)
}

export const stateText: state = 0

export const stateTag: state = 1

export const stateAttrName: state = 2

export const stateAfterName: state = 3

export const stateBeforeValue: state = 4

export const stateHTMLCmt: state = 5

export const stateRCDATA: state = 6

export const stateAttr: state = 7

export const stateURL: state = 8

export const stateSrcset: state = 9

export const stateJS: state = 10

export const stateJSDqStr: state = 11

export const stateJSSqStr: state = 12

export const stateJSTmplLit: state = 13

export const stateJSRegexp: state = 14

export const stateJSBlockCmt: state = 15

export const stateJSLineCmt: state = 16

export const stateJSHTMLOpenCmt: state = 17

export const stateJSHTMLCloseCmt: state = 18

export const stateCSS: state = 19

export const stateCSSDqStr: state = 20

export const stateCSSSqStr: state = 21

export const stateCSSDqURL: state = 22

export const stateCSSSqURL: state = 23

export const stateCSSURL: state = 24

export const stateCSSBlockCmt: state = 25

export const stateCSSLineCmt: state = 26

export const stateError: state = 27

export const stateMetaContent: state = 28

export const stateMetaContentURL: state = 29

export const stateDead: state = 30

export const delimNone: delim = 0

export const delimDoubleQuote: delim = 1

export const delimSingleQuote: delim = 2

export const delimSpaceOrTagEnd: delim = 3

export const urlPartNone: urlPart = 0

export const urlPartPreQuery: urlPart = 1

export const urlPartQueryOrFrag: urlPart = 2

export const urlPartUnknown: urlPart = 3

export const jsCtxRegexp: jsCtx = 0

export const jsCtxDivOp: jsCtx = 1

export const jsCtxUnknown: jsCtx = 2

export const elementNone: element = 0

export const elementScript: element = 1

export const elementStyle: element = 2

export const elementTextarea: element = 3

export const elementTitle: element = 4

export const elementMeta: element = 5

export const attrNone: attr = 0

export const attrScript: attr = 1

export const attrScriptType: attr = 2

export const attrStyle: attr = 3

export const attrURL: attr = 4

export const attrSrcset: attr = 5

export const attrMetaContent: attr = 6

export function isComment(s: state): boolean {
	switch (s) {
		case 5:
		case 15:
		case 16:
		case 17:
		case 18:
		case 25:
		case 26:
		{
			return true
			break
		}
	}
	return false
}

export function isInTag(s: state): boolean {
	switch (s) {
		case 1:
		case 2:
		case 3:
		case 4:
		case 7:
		{
			return true
			break
		}
	}
	return false
}

export function isInScriptLiteral(s: state): boolean {
	// Ignore the comment states (stateJSBlockCmt, stateJSLineCmt,
	// stateJSHTMLOpenCmt, stateJSHTMLCloseCmt) because their content is already
	// omitted from the output.
	switch (s) {
		case 11:
		case 12:
		case 13:
		case 14:
		{
			return true
			break
		}
	}
	return false
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({String: (receiver: any, ...args: any[]) => (__goscript_state_string.state_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.basicType("uint8", "template.state"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])])
}

var __goscriptStatic3$value: any
function __goscriptStatic3(): any {
	return __goscriptStatic3$value ??= ({String: (receiver: any, ...args: any[]) => (__goscript_delim_string.delim_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic4$value: any
function __goscriptStatic4(): any {
	return __goscriptStatic4$value ??= (/* @__PURE__ */ $.basicType("uint8", "template.delim"))
}

var __goscriptStatic5$value: any
function __goscriptStatic5(): any {
	return __goscriptStatic5$value ??= ({String: (receiver: any, ...args: any[]) => (__goscript_urlpart_string.urlPart_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic6$value: any
function __goscriptStatic6(): any {
	return __goscriptStatic6$value ??= (/* @__PURE__ */ $.basicType("uint8", "template.urlPart"))
}

var __goscriptStatic7$value: any
function __goscriptStatic7(): any {
	return __goscriptStatic7$value ??= ({String: (receiver: any, ...args: any[]) => (__goscript_jsctx_string.jsCtx_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic8$value: any
function __goscriptStatic8(): any {
	return __goscriptStatic8$value ??= (/* @__PURE__ */ $.basicType("uint8", "template.jsCtx"))
}

var __goscriptStatic9$value: any
function __goscriptStatic9(): any {
	return __goscriptStatic9$value ??= ({String: (receiver: any, ...args: any[]) => (__goscript_attr_string.attr_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic10$value: any
function __goscriptStatic10(): any {
	return __goscriptStatic10$value ??= (/* @__PURE__ */ $.basicType("uint8", "template.attr"))
}

var __goscriptStatic11$value: any
function __goscriptStatic11(): any {
	return __goscriptStatic11$value ??= ({String: (receiver: any, ...args: any[]) => (__goscript_element_string.element_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic12$value: any
function __goscriptStatic12(): any {
	return __goscriptStatic12$value ??= (/* @__PURE__ */ $.basicType("uint8", "template.element"))
}
