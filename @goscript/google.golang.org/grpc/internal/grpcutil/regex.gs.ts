// Generated file based on regex.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as regexp from "@goscript/regexp/index.js"
import "@goscript/regexp/index.js"

export async function FullMatchWithRegex(re: regexp.Regexp | $.VarRef<regexp.Regexp> | null, text: string): globalThis.Promise<boolean> {
	if ($.stringLen(text) == 0) {
		return (re !== null && (re as any).__isVarRef !== true && (re as any).__goValue === undefined ? ((re as any) as regexp.Regexp).MatchString(text) : regexp.Regexp.prototype.MatchString.call(re, text))
	}
	void (re !== null && (re as any).__isVarRef !== true && (re as any).__goValue === undefined ? ((re as any) as regexp.Regexp).Longest() : regexp.Regexp.prototype.Longest.call(re))
	let rem = await (re !== null && (re as any).__isVarRef !== true && (re as any).__goValue === undefined ? ((re as any) as regexp.Regexp).FindString(text) : regexp.Regexp.prototype.FindString.call(re, text))
	return $.stringLen(rem) == $.stringLen(text)
}
