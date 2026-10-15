// Generated file based on proto.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as errors from "@goscript/google.golang.org/protobuf/internal/errors/index.js"

import * as protoreflect from "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"
import "@goscript/google.golang.org/protobuf/internal/errors/index.js"
import "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"

export type Message = protoreflect.ProtoMessage | null

export let Error: $.GoError = null! as $.GoError

export function __goscript_set_Error(__goscriptValue: $.GoError): void {
	Error = __goscriptValue
}

function __goscriptInit0(): void {
	Error = errors.Error
}

export async function MessageName(m: Message | null): globalThis.Promise<protoreflect.FullName> {
	if (m == null) {
		return ""
	}
	return (__goscriptAwait = $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>((__goscriptAwait = $.pointerValue<Exclude<protoreflect.Message, null>>((__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoreflect.ProtoMessage, null>) : $.pointerValue<Exclude<protoreflect.ProtoMessage, null>>(m)).ProtoReflect(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Descriptor(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
}

var __goscriptAwait: any

export { __goscriptInit0 }
