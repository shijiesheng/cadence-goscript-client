// Generated file based on errors.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"
import "@goscript/fmt/index.js"

export async function BugPanicf(msg: string, args: $.Slice<any>): globalThis.Promise<void> {
	$.panic(await fmt.Sprintf($.concatString(($.concatString(($.concatString("It looks like you have found a bug in dig. ", "Please file an issue at https://github.com/uber-go/dig/issues/new ")), "and provide the following message: ")), msg), ...(args ?? [])))
}
