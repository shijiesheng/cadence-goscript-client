// Generated file based on option.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as strings from "@goscript/strings/index.js"

import type * as io from "@goscript/io/index.js"

import type * as fs from "@goscript/io/fs/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as sync from "@goscript/sync/index.js"

import * as parse from "@goscript/text/template/parse/index.js"

import * as __goscript_exec from "./exec.gs.ts"

import * as __goscript_funcs from "./funcs.gs.ts"

import * as __goscript_helper from "./helper.gs.ts"

import * as __goscript_template from "./template.gs.ts"
import "@goscript/strings/index.js"
import "@goscript/reflect/index.js"
import "@goscript/sync/index.js"
import "@goscript/text/template/parse/index.js"
import "./exec.gs.ts"
import "./funcs.gs.ts"
import "./helper.gs.ts"
import "./template.gs.ts"

$.registerTypePackagePath("text/template", ["template.missingKeyAction", "template.option"])

export type missingKeyAction = number

export class option {
	public get missingKey(): missingKeyAction {
		return this._fields.missingKey
	}

	public set missingKey(value: missingKeyAction) {
		this._fields.missingKey = value
	}

	public _fields: {
		missingKey: missingKeyAction
	}

	constructor(init?: Partial<{missingKey?: missingKeyAction}>, __goscriptValue?: boolean) {
		this._fields = {
			missingKey: init?.missingKey ?? (0 as missingKeyAction)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): option {
		return new option(this, true)
	}

	public __goscriptAssign(source: option): void {
		const target = this._fields
		const values = source._fields
		target.missingKey = values.missingKey
	}

	static __typeInfo = $.registerStructType(
		"template.option",
		() => new option(),
		() => [],
		option,
		() => [/* @__PURE__ */ $.structField("missingKey", /* @__PURE__ */ $.basicType("int", "template.missingKeyAction"), [0], 0, false, { pkgPath: "text/template" })]
	)
}

export const mapInvalid: missingKeyAction = 0

export const mapZeroValue: missingKeyAction = 1

export const mapError: missingKeyAction = 2
