// Generated file based on equal.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as protoreflect from "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"

import * as __goscript_proto from "./proto.gs.ts"
import "@goscript/reflect/index.js"
import "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"
import "./proto.gs.ts"

export async function Equal(x: __goscript_proto.Message | null, y: __goscript_proto.Message | null): globalThis.Promise<boolean> {
	if ((x == null) || (y == null)) {
		return (x == null) && (y == null)
	}
	if (((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>(reflect.TypeOf((x as any))).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 22) && ($.comparableEqual(x, y))) {
		// Avoid an expensive comparison if both inputs are identical pointers.
		return true
	}
	let mx = (__goscriptAwait = (x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? (x as Exclude<protoreflect.ProtoMessage, null>) : $.pointerValue<Exclude<protoreflect.ProtoMessage, null>>(x)).ProtoReflect(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	let my = (__goscriptAwait = (y !== null && (y as any).__isVarRef !== true && (y as any).__goValue === undefined ? (y as Exclude<protoreflect.ProtoMessage, null>) : $.pointerValue<Exclude<protoreflect.ProtoMessage, null>>(y)).ProtoReflect(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	if ((__goscriptAwait = (mx !== null && (mx as any).__isVarRef !== true && (mx as any).__goValue === undefined ? (mx as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(mx)).IsValid(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != (__goscriptAwait = (my !== null && (my as any).__isVarRef !== true && (my as any).__goValue === undefined ? (my as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(my)).IsValid(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
		return false
	}
	let vx = protoreflect.ValueOfMessage(mx)
	let vy = protoreflect.ValueOfMessage(my)
	return vx.Equal(vy)
}

var __goscriptAwait: any
