// Generated file based on util.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as sync from "@goscript/sync/index.js"

import * as time from "@goscript/time/index.js"
import "@goscript/reflect/index.js"
import "@goscript/sync/index.js"
import "@goscript/time/index.js"

export function MergeDictoRight(src: globalThis.Map<string, string> | null, dest: globalThis.Map<string, string> | null): void {
	for (let [k, v] of src?.entries() ?? []) {
		$.mapSet(dest, k, v)
	}
}

export function MergeDicts(dic1: globalThis.Map<string, string> | null, dic2: globalThis.Map<string, string> | null): globalThis.Map<string, string> | null {
	let resultDict: globalThis.Map<string, string> | null = null! as globalThis.Map<string, string> | null
	resultDict = $.makeMap<string, string>()
	MergeDictoRight(dic1, resultDict)
	MergeDictoRight(dic2, resultDict)
	return resultDict
}

export async function AwaitWaitGroup(wg: sync.WaitGroup | $.VarRef<sync.WaitGroup> | null, timeout: time.Duration): globalThis.Promise<boolean> {

	let doneC: $.Channel<{}> | null = $.makeChannel<{}>(0, {}, "both")

	queueMicrotask(async () => { await (async (): globalThis.Promise<void> => {
		await sync.WaitGroup.prototype.Wait.call($.pointerValue<sync.WaitGroup>(wg))
		doneC!.close()
	})() })

	const [__goscriptSelect0HasReturn, __goscriptSelect0Value] = await $.selectStatement<any, boolean>([
		{
			id: 0,
			isSend: false,
			channel: doneC,
			onSelected: async (__goscriptSelect0Result) => {
				return true
			}
		},
		{
			id: 1,
			isSend: false,
			channel: time.After(timeout),
			onSelected: async (__goscriptSelect0Result) => {
				return false
			}
		}
	], false)
	if (__goscriptSelect0HasReturn) {
		return __goscriptSelect0Value
	}
	throw new globalThis.Error("unreachable select")
	throw new globalThis.Error("goscript: unreachable return")
}

export let typeOfByteSlice: reflect.Type | null = reflect.TypeOf($.interfaceValue(null, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))))

export function __goscript_set_typeOfByteSlice(__goscriptValue: reflect.Type | null): void {
	typeOfByteSlice = __goscriptValue
}

export function IsTypeByteSlice(inType: reflect.Type | null): boolean {
	return ($.comparableEqual(inType, typeOfByteSlice)) || ($.comparableEqual(inType, reflect.PtrTo($.pointerValueOrNil(typeOfByteSlice)!)))
}
