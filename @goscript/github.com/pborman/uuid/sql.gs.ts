// Generated file based on sql.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as errors from "@goscript/errors/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as __goscript_dce from "./dce.gs.ts"

import * as __goscript_json from "./json.gs.ts"

import * as __goscript_node from "./node.gs.ts"

import * as __goscript_time from "./time.gs.ts"

import * as __goscript_uuid from "./uuid.gs.ts"
import "@goscript/errors/index.js"
import "@goscript/fmt/index.js"
import "./dce.gs.ts"
import "./json.gs.ts"
import "./node.gs.ts"
import "./time.gs.ts"
import "./uuid.gs.ts"

export function UUID_Scan(uuid: $.VarRef<__goscript_uuid.UUID> | null, src: any): $.GoError {
	{
		const __goscriptTypeSwitchValue = src
		switch (true) {
			case $.typeAssert<string>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("string")).ok:
				{
					if ($.stringEqual($.mustTypeAssert<string>(src, /* @__PURE__ */ $.basicType("string")), "")) {
						return null
					}

					// see uuid.Parse for required string format
					let parsed: __goscript_uuid.UUID = (__goscript_uuid.Parse($.mustTypeAssert<string>(src, /* @__PURE__ */ $.basicType("string"))) as __goscript_uuid.UUID)

					if (parsed == null) {
						return errors.New("Scan: invalid UUID format")
					}

					uuid!.value = (parsed as __goscript_uuid.UUID)
				}
				break
			case $.typeAssert<$.Slice<number>>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))).ok:
				{
					let b: $.Slice<number> = $.mustTypeAssert<$.Slice<number>>(src, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))

					// if an empty UUID comes from a table, we return a null UUID
					if ($.sliceLen(b) == 0) {
						return null
					}

					// assumes a simple slice of bytes if 16 bytes
					// otherwise attempts to parse
					if ($.sliceLen(b) == 16) {
						uuid!.value = ((b as __goscript_uuid.UUID) as __goscript_uuid.UUID)
					} else {
						let u: __goscript_uuid.UUID = (__goscript_uuid.Parse($.bytesToString(b)) as __goscript_uuid.UUID)

						if (u == null) {
							return errors.New("Scan: invalid UUID format")
						}

						uuid!.value = (u as __goscript_uuid.UUID)
					}
				}
				break
			default:
				{
					return fmt.Errorf("Scan: unable to scan type %T into UUID", src)
				}
				break
		}
	}

	return null
}
