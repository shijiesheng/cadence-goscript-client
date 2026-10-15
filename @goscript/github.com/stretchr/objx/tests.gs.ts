// Generated file based on tests.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import type * as url from "@goscript/net/url/index.js"

import * as __goscript_accessors from "./accessors.gs.ts"

import type * as __goscript_conversions from "./conversions.gs.ts"

import * as __goscript_map from "./map.gs.ts"

import type * as __goscript_mutations from "./mutations.gs.ts"

import type * as __goscript_type_specific from "./type_specific.gs.ts"

import type * as __goscript_type_specific_codegen from "./type_specific_codegen.gs.ts"

import * as __goscript_value from "./value.gs.ts"
import "./accessors.gs.ts"
import "./map.gs.ts"
import "./value.gs.ts"

export async function Map_Has(m: __goscript_map.Map, selector: string): globalThis.Promise<boolean> {
	if (m == null) {
		return false
	}
	return !__goscript_value.Value.prototype.IsNil.call(await __goscript_accessors.Map_Get(m, selector))
}
