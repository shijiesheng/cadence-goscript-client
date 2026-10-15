// Generated file based on tempfile.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as os from "@goscript/os/index.js"
import "@goscript/os/index.js"

export async function TempFile(dir: string, pattern: string): globalThis.Promise<[os.File | $.VarRef<os.File> | null, $.GoError]> {
	let f: os.File | $.VarRef<os.File> | null = null! as os.File | $.VarRef<os.File> | null
	let err: $.GoError = null! as $.GoError
	return os.CreateTemp(dir, pattern)
}

export async function TempDir(dir: string, pattern: string): globalThis.Promise<[string, $.GoError]> {
	let name: string = ""
	let err: $.GoError = null! as $.GoError
	return os.MkdirTemp(dir, pattern)
}
