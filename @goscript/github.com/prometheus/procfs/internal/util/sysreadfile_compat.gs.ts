// Generated file based on sysreadfile_compat.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"
import "@goscript/fmt/index.js"

export function SysReadFile(file: string): [string, $.GoError] {
	return ["", fmt.Errorf("not supported on this platform")]
}
