// Generated file based on messagetype_string.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as strconv from "@goscript/strconv/index.js"

import * as __goscript_messages from "./messages.gs.ts"
import "@goscript/strconv/index.js"
import "./messages.gs.ts"

export const _messageType_name_0: string = "messageTypeInitReqmessageTypeInitResmessageTypeCallReqmessageTypeCallRes"

export const _messageType_name_1: string = "messageTypeCallReqContinuemessageTypeCallResContinue"

export const _messageType_name_2: string = "messageTypeCancel"

export const _messageType_name_3: string = "messageTypePingReqmessageTypePingRes"

export const _messageType_name_4: string = "messageTypeError"

function __goscriptBlankFunc0(): void {
	// An "invalid array index" compiler error signifies that the constant values have changed.
	// Re-run the stringer command to generate them again.
	let x: {}[] = $.arrayValue(globalThis.Array.from({ length: 1 }, () => ({})), /* @__PURE__ */ $.arrayType({ kind: $.TypeKind.Struct, methods: [], fields: [] }, 1))
	$.arrayIndex(x, ((1 - 1) & 0xff))
	$.arrayIndex(x, ((2 - 2) & 0xff))
	$.arrayIndex(x, ((3 - 3) & 0xff))
	$.arrayIndex(x, ((4 - 4) & 0xff))
	$.arrayIndex(x, ((19 - 19) & 0xff))
	$.arrayIndex(x, ((20 - 20) & 0xff))
	$.arrayIndex(x, ((192 - 192) & 0xff))
	$.arrayIndex(x, ((208 - 208) & 0xff))
	$.arrayIndex(x, ((209 - 209) & 0xff))
	$.arrayIndex(x, ((255 - 255) & 0xff))
}

export let _messageType_index_0: Uint8Array = $.arrayValue(new Uint8Array([0, 18, 36, 54, 72]))

export function __goscript_set__messageType_index_0(__goscriptValue: Uint8Array): void {
	_messageType_index_0 = __goscriptValue
}

export let _messageType_index_1: Uint8Array = $.arrayValue(new Uint8Array([0, 26, 52]))

export function __goscript_set__messageType_index_1(__goscriptValue: Uint8Array): void {
	_messageType_index_1 = __goscriptValue
}

export let _messageType_index_3: Uint8Array = $.arrayValue(new Uint8Array([0, 18, 36]))

export function __goscript_set__messageType_index_3(__goscriptValue: Uint8Array): void {
	_messageType_index_3 = __goscriptValue
}

export function messageType_String(i: __goscript_messages.messageType): string {
	switch ((true as boolean)) {
		case (1 <= i) && (i <= 4):
		{
			i = $.uint(i - (1), 8)
			return $.sliceStringOrBytes("messageTypeInitReqmessageTypeInitResmessageTypeCallReqmessageTypeCallRes", $.arrayIndex(_messageType_index_0, i), $.arrayIndex(_messageType_index_0, ((i + 1) & 0xff)))
			break
		}
		case (19 <= i) && (i <= 20):
		{
			i = $.uint(i - (19), 8)
			return $.sliceStringOrBytes("messageTypeCallReqContinuemessageTypeCallResContinue", $.arrayIndex(_messageType_index_1, i), $.arrayIndex(_messageType_index_1, ((i + 1) & 0xff)))
			break
		}
		case i == 192:
		{
			return "messageTypeCancel"
			break
		}
		case (208 <= i) && (i <= 209):
		{
			i = $.uint(i - (208), 8)
			return $.sliceStringOrBytes("messageTypePingReqmessageTypePingRes", $.arrayIndex(_messageType_index_3, i), $.arrayIndex(_messageType_index_3, ((i + 1) & 0xff)))
			break
		}
		case i == 255:
		{
			return "messageTypeError"
			break
		}
		default:
		{
			return $.concatString(($.concatString("messageType(", strconv.FormatInt($.int64(i), 10))), ")")
			break
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}
