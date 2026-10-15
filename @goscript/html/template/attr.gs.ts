// Generated file based on attr.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as strings from "@goscript/strings/index.js"

import * as __goscript_content from "./content.gs.ts"
import "@goscript/strings/index.js"
import "./content.gs.ts"

export var attrTypeMap: globalThis.Map<string, __goscript_content.contentType> | null

export function __goscript_init_attrTypeMap(): void {
	if (((attrTypeMap) as any) === undefined) {
		attrTypeMap = $.makeMap<string, __goscript_content.contentType>([["accept", 0], ["accept-charset", 8], ["action", 6], ["alt", 0], ["archive", 6], ["async", 8], ["autocomplete", 0], ["autofocus", 0], ["autoplay", 0], ["background", 6], ["border", 0], ["checked", 0], ["cite", 6], ["challenge", 8], ["charset", 8], ["class", 0], ["classid", 6], ["codebase", 6], ["cols", 0], ["colspan", 0], ["content", 8], ["contenteditable", 0], ["contextmenu", 0], ["controls", 0], ["coords", 0], ["crossorigin", 8], ["data", 6], ["datetime", 0], ["default", 0], ["defer", 8], ["dir", 0], ["dirname", 0], ["disabled", 0], ["draggable", 0], ["dropzone", 0], ["enctype", 8], ["for", 0], ["form", 8], ["formaction", 6], ["formenctype", 8], ["formmethod", 8], ["formnovalidate", 8], ["formtarget", 0], ["headers", 0], ["height", 0], ["hidden", 0], ["high", 0], ["href", 6], ["hreflang", 0], ["http-equiv", 8], ["icon", 6], ["id", 0], ["ismap", 0], ["keytype", 8], ["kind", 0], ["label", 0], ["lang", 0], ["language", 8], ["list", 0], ["longdesc", 6], ["loop", 0], ["low", 0], ["manifest", 6], ["max", 0], ["maxlength", 0], ["media", 0], ["mediagroup", 0], ["method", 8], ["min", 0], ["multiple", 0], ["name", 0], ["novalidate", 8], ["open", 0], ["optimum", 0], ["pattern", 8], ["placeholder", 0], ["poster", 6], ["profile", 6], ["preload", 0], ["pubdate", 0], ["radiogroup", 0], ["readonly", 0], ["rel", 8], ["required", 0], ["reversed", 0], ["rows", 0], ["rowspan", 0], ["sandbox", 8], ["spellcheck", 0], ["scope", 0], ["scoped", 0], ["seamless", 0], ["selected", 0], ["shape", 0], ["size", 0], ["sizes", 0], ["span", 0], ["src", 6], ["srcdoc", 2], ["srclang", 0], ["srcset", 7], ["start", 0], ["step", 0], ["style", 1], ["tabindex", 0], ["target", 0], ["title", 0], ["type", 8], ["usemap", 6], ["value", 8], ["width", 0], ["wrap", 0], ["xmlns", 6]])
	}
}

export function __goscript_get_attrTypeMap(): globalThis.Map<string, __goscript_content.contentType> | null {
	if (((attrTypeMap) as any) === undefined) {
		__goscript_init_attrTypeMap()
	}
	return attrTypeMap
}

export function __goscript_set_attrTypeMap(__goscriptValue: globalThis.Map<string, __goscript_content.contentType> | null): void {
	attrTypeMap = __goscriptValue
}

export function attrType(name: string): __goscript_content.contentType {
	if (strings.HasPrefix(name, "data-")) {
		// Strip data- so that custom attribute heuristics below are
		// widely applied.
		// Treat data-action as URL below.
		name = $.sliceStringOrBytes(name, 5, undefined)
	} else {
		{
			let [prefix, short, ok] = strings.Cut(name, ":")
			if (ok) {
				if ($.stringEqual(prefix, "xmlns")) {
					return 6
				}
				// Treat svg:href and xlink:href as href below.
				name = short
			}
		}
	}
	{
		let [t, ok] = $.mapGet<string, __goscript_content.contentType, __goscript_content.contentType>(__goscript_get_attrTypeMap(), name, 0)
		if (ok) {
			return t
		}
	}
	// Treat partial event handler names as script.
	if (strings.HasPrefix(name, "on")) {
		return 4
	}

	// Heuristics to prevent "javascript:..." injection in custom
	// data attributes and custom attributes like g:tweetUrl.
	// https://www.w3.org/TR/html5/dom.html#embedding-custom-non-visible-data-with-the-data-*-attributes
	// "Custom data attributes are intended to store custom data
	//  private to the page or application, for which there are no
	//  more appropriate attributes or elements."
	// Developers seem to store URL content in data URLs that start
	// or end with "URI" or "URL".
	if ((strings.Contains(name, "src") || strings.Contains(name, "uri")) || strings.Contains(name, "url")) {
		return 6
	}
	return 0
}
