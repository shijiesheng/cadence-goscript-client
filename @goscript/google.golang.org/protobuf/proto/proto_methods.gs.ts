// Generated file based on proto_methods.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as protoreflect from "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"

import * as protoiface from "@goscript/google.golang.org/protobuf/runtime/protoiface/index.js"

import type * as protowire from "@goscript/google.golang.org/protobuf/encoding/protowire/index.js"

import type * as pragma from "@goscript/google.golang.org/protobuf/internal/pragma/index.js"
import "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"
import "@goscript/google.golang.org/protobuf/runtime/protoiface/index.js"

export const hasProtoMethods: boolean = true

export async function protoMethods(m: protoreflect.Message | null): globalThis.Promise<$.VarRef<protoiface.Methods> | null> {
	return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(m)).ProtoMethods()
}

var __goscriptAwait: any
