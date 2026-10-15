// Generated file based on error.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as parse from "@goscript/text/template/parse/index.js"
import "@goscript/fmt/index.js"
import "@goscript/text/template/parse/index.js"

$.registerTypePackagePath("html/template", ["template.Error", "template.ErrorCode"])

export type ErrorCode = number

export class Error {
	// ErrorCode describes the kind of error.
	public get ErrorCode(): ErrorCode {
		return this._fields.ErrorCode
	}

	public set ErrorCode(value: ErrorCode) {
		this._fields.ErrorCode = value
	}

	// Node is the node that caused the problem, if known.
	// If not nil, it overrides Name and Line.
	public get Node(): parse.Node | null {
		return this._fields.Node
	}

	public set Node(value: parse.Node | null) {
		this._fields.Node = value
	}

	// Name is the name of the template in which the error was encountered.
	public get Name(): string {
		return this._fields.Name
	}

	public set Name(value: string) {
		this._fields.Name = value
	}

	// Line is the line number of the error in the template source or 0.
	public get Line(): number {
		return this._fields.Line
	}

	public set Line(value: number) {
		this._fields.Line = value
	}

	// Description is a human-readable description of the problem.
	public get Description(): string {
		return this._fields.Description
	}

	public set Description(value: string) {
		this._fields.Description = value
	}

	public _fields: {
		ErrorCode: ErrorCode
		Node: parse.Node | null
		Name: string
		Line: number
		Description: string
	}

	constructor(init?: Partial<{ErrorCode?: ErrorCode, Node?: parse.Node | null, Name?: string, Line?: number, Description?: string}>, __goscriptValue?: boolean) {
		this._fields = {
			ErrorCode: init?.ErrorCode ?? (0 as ErrorCode),
			Node: init?.Node ?? (null! as parse.Node | null),
			Name: init?.Name ?? ("" as string),
			Line: init?.Line ?? (0 as number),
			Description: init?.Description ?? ("" as string)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Error {
		return new Error(this, true)
	}

	public __goscriptAssign(source: Error): void {
		const target = this._fields
		const values = source._fields
		target.ErrorCode = values.ErrorCode
		target.Node = $.assignFieldValue(target.Node, values.Node, "parse.Node")
		target.Name = values.Name
		target.Line = values.Line
		target.Description = values.Description
	}

	public async Error(): globalThis.Promise<string> {
		const e: Error | $.VarRef<Error> | null = this;
		const e$: Error = e == null ? $.pointerTarget<Error>(e) : (e as any).__isVarRef === true ? (e as any).value : (e as any).__goValue === undefined ? (e as any) : $.pointerTarget<Error>(e)
		switch ((true as boolean)) {
			case (e$ as Error).Node != null:
			{
				let [loc, ] = await (null !== null && (null as any).__isVarRef !== true && (null as any).__goValue === undefined ? ((null as any) as parse.Tree).ErrorContext((e$ as Error).Node) : parse.Tree.prototype.ErrorContext.call(null, (e$ as Error).Node))
				return fmt.Sprintf("html/template:%s: %s", loc, (e$ as Error).Description)
				break
			}
			case (e$ as Error).Line != 0:
			{
				return fmt.Sprintf("html/template:%s:%d: %s", (e$ as Error).Name, $.basicInterfaceValue((e$ as Error).Line, "int"), (e$ as Error).Description)
				break
			}
			case !$.stringEqual((e$ as Error).Name, ""):
			{
				return fmt.Sprintf("html/template:%s: %s", (e$ as Error).Name, (e$ as Error).Description)
				break
			}
		}
		return $.concatString("html/template: ", (e$ as Error).Description)
	}

	static __typeInfo = $.registerStructType(
		"template.Error",
		() => new Error(),
		() => [$.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")], true)],
		Error,
		() => [/* @__PURE__ */ $.structField("ErrorCode", /* @__PURE__ */ $.basicType("int", "template.ErrorCode"), [0], 0, true), /* @__PURE__ */ $.structField("Node", "parse.Node", [1], 8, true), /* @__PURE__ */ $.structField("Name", /* @__PURE__ */ $.basicType("string"), [2], 24, true), /* @__PURE__ */ $.structField("Line", /* @__PURE__ */ $.basicType("int"), [3], 40, true), /* @__PURE__ */ $.structField("Description", /* @__PURE__ */ $.basicType("string"), [4], 48, true)]
	)
}

export const OK: ErrorCode = 0

export const ErrAmbigContext: ErrorCode = 1

export const ErrBadHTML: ErrorCode = 2

export const ErrBranchEnd: ErrorCode = 3

export const ErrEndContext: ErrorCode = 4

export const ErrNoSuchTemplate: ErrorCode = 5

export const ErrOutputContext: ErrorCode = 6

export const ErrPartialCharset: ErrorCode = 7

export const ErrPartialEscape: ErrorCode = 8

export const ErrRangeLoopReentry: ErrorCode = 9

export const ErrSlashAmbig: ErrorCode = 10

export const ErrPredefinedEscaper: ErrorCode = 11

export const ErrJSTemplate: ErrorCode = 12

export async function errorf(k: ErrorCode, node: parse.Node | null, line: number, f: string, args: $.Slice<any>): globalThis.Promise<Error | $.VarRef<Error> | null> {
	return (await (async () => { const __goscriptLiteralField0 = await fmt.Sprintf(f, ...(args ?? [])); return new Error({ErrorCode: k, Node: node, Name: "", Line: line, Description: __goscriptLiteralField0}) })())
}
