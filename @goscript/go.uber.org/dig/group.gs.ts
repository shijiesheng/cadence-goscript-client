// Generated file based on group.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as io from "@goscript/io/index.js"

import * as strings from "@goscript/strings/index.js"

import * as __goscript_error from "./error.gs.ts"
import "@goscript/fmt/index.js"
import "@goscript/io/index.js"
import "@goscript/strings/index.js"
import "./error.gs.ts"

$.registerTypePackagePath("go.uber.org/dig", ["dig.group", "dig.errInvalidGroupOption"])

export class group {
	public get Name(): string {
		return this._fields.Name
	}

	public set Name(value: string) {
		this._fields.Name = value
	}

	public get Flatten(): boolean {
		return this._fields.Flatten
	}

	public set Flatten(value: boolean) {
		this._fields.Flatten = value
	}

	public get Soft(): boolean {
		return this._fields.Soft
	}

	public set Soft(value: boolean) {
		this._fields.Soft = value
	}

	public _fields: {
		Name: string
		Flatten: boolean
		Soft: boolean
	}

	constructor(init?: Partial<{Name?: string, Flatten?: boolean, Soft?: boolean}>, __goscriptValue?: boolean) {
		this._fields = {
			Name: init?.Name ?? ("" as string),
			Flatten: init?.Flatten ?? (false as boolean),
			Soft: init?.Soft ?? (false as boolean)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): group {
		return new group(this, true)
	}

	public __goscriptAssign(source: group): void {
		const target = this._fields
		const values = source._fields
		target.Name = values.Name
		target.Flatten = values.Flatten
		target.Soft = values.Soft
	}

	static __typeInfo = $.registerStructType(
		"dig.group",
		() => new group(),
		() => [],
		group,
		() => [/* @__PURE__ */ $.structField("Name", /* @__PURE__ */ $.basicType("string"), [0], 0, true), /* @__PURE__ */ $.structField("Flatten", /* @__PURE__ */ $.basicType("bool"), [1], 16, true), /* @__PURE__ */ $.structField("Soft", /* @__PURE__ */ $.basicType("bool"), [2], 17, true)]
	)
}

export class errInvalidGroupOption {
	public get Option(): string {
		return this._fields.Option
	}

	public set Option(value: string) {
		this._fields.Option = value
	}

	public _fields: {
		Option: string
	}

	constructor(init?: Partial<{Option?: string}>, __goscriptValue?: boolean) {
		this._fields = {
			Option: init?.Option ?? ("" as string)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): errInvalidGroupOption {
		return new errInvalidGroupOption(this, true)
	}

	public __goscriptAssign(source: errInvalidGroupOption): void {
		const target = this._fields
		const values = source._fields
		target.Option = values.Option
	}

	public async Error(): globalThis.Promise<string> {
		const e = this;
		return fmt.Sprint($.interfaceValue((e).clone(), "dig.errInvalidGroupOption", "dig.errInvalidGroupOption"))
	}

	public async Format(w: fmt.State | null, c: number): globalThis.Promise<void> {
		const e = this;
		await __goscript_error.formatError($.interfaceValue<__goscript_error.digError | null>((e).clone(), "dig.errInvalidGroupOption", "dig.errInvalidGroupOption"), w, c)
	}

	public async writeMessage(w: io.Writer | null, v: string): globalThis.Promise<void> {
		const e = this;
		await fmt.Fprintf($.pointerValueOrNil(w)!, "invalid option %q", e.Option)
	}

	static __typeInfo = $.registerStructType(
		"dig.errInvalidGroupOption",
		() => new errInvalidGroupOption(),
		() => [$.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Format", [["w", "fmt.State"], ["c", /* @__PURE__ */ $.basicType("int32")]]), $.methodSignature("writeMessage", [["w", "io.Writer"], ["v", /* @__PURE__ */ $.basicType("string")]])],
		errInvalidGroupOption,
		() => [/* @__PURE__ */ $.structField("Option", /* @__PURE__ */ $.basicType("string"), [0], 0, true)]
	)
}

export const _groupTag: string = "group"

export function parseGroupString(s: string): [group, $.GoError] {
	let components: $.Slice<string> = strings.Split(s, ",")
	let g = new group({Name: $.arrayIndex(components!, 0)}, true)
	for (let __goscriptRangeTarget0 = $.goSlice(components, 1, undefined), __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
		let c = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as string)
		switch (c) {
			case "flatten":
			{
				g.Flatten = true
				break
			}
			case "soft":
			{
				g.Soft = true
				break
			}
			default:
			{
				return [(g).clone(), $.interfaceValue<$.GoError>(new errInvalidGroupOption({Option: c}, true), "dig.errInvalidGroupOption", "dig.errInvalidGroupOption")]
				break
			}
		}
	}
	return [(g).clone(), null]
}
