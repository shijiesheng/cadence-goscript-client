// Generated file based on channelstate_string.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as __goscript_channel from "./channel.gs.ts"
import "@goscript/fmt/index.js"
import "./channel.gs.ts"

export const _ChannelState_name: string = "ChannelClientChannelListeningChannelStartCloseChannelInboundClosedChannelClosed"

export let _ChannelState_index: Uint8Array = $.arrayValue(new Uint8Array([0, 13, 29, 46, 66, 79]))

export function __goscript_set__ChannelState_index(__goscriptValue: Uint8Array): void {
	_ChannelState_index = __goscriptValue
}

export async function ChannelState_String(i: __goscript_channel.ChannelState): globalThis.Promise<string> {
	i = i - (1)
	if ((i < 0) || ((i + 1) >= 6)) {
		return fmt.Sprintf("ChannelState(%d)", $.namedValueInterfaceValue<any>(i + 1, "tchannel.ChannelState", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()))
	}
	return $.sliceStringOrBytes("ChannelClientChannelListeningChannelStartCloseChannelInboundClosedChannelClosed", $.arrayIndex(_ChannelState_index, i), $.arrayIndex(_ChannelState_index, i + 1))
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({String: (receiver: any, ...args: any[]) => (ChannelState_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.basicType("int", "tchannel.ChannelState"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])])
}
