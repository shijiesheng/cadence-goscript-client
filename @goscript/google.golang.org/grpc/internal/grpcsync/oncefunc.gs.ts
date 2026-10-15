// Generated file based on oncefunc.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as sync from "@goscript/sync/index.js"
import "@goscript/sync/index.js"

export function OnceFunc(f: (() => void) | null): (() => void) | null {
	let once: $.VarRef<sync.Once> = $.varRef($.markAsStructValue(new sync.Once()))
	return $.functionValue(async (): globalThis.Promise<void> => {
		await once.value.Do(f)
	}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo))
}
