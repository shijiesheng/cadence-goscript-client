// Generated file based on convert.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as proto from "@goscript/google.golang.org/protobuf/proto/index.js"

import * as protoiface from "@goscript/google.golang.org/protobuf/runtime/protoiface/index.js"

import * as protoimpl from "@goscript/google.golang.org/protobuf/runtime/protoimpl/index.js"

import * as impl from "@goscript/google.golang.org/protobuf/internal/impl/index.js"

import * as protoreflect from "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"
import "@goscript/google.golang.org/protobuf/proto/index.js"
import "@goscript/google.golang.org/protobuf/runtime/protoiface/index.js"
import "@goscript/google.golang.org/protobuf/runtime/protoimpl/index.js"
import "@goscript/google.golang.org/protobuf/internal/impl/index.js"
import "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"

export type MessageV1 = protoiface.MessageV1 | null

export type MessageV2 = proto.Message | null

export async function MessageV1Of(m: MessageV2 | null): globalThis.Promise<MessageV1 | null> {
	return $.markAsStructValue($.cloneStructValue($.pointerValue<impl.Export>(protoimpl.X))).ProtoMessageV1Of((m as impl.message | null))
}

export async function MessageV2Of(m: MessageV1 | null): globalThis.Promise<MessageV2 | null> {
	return $.markAsStructValue($.cloneStructValue($.pointerValue<impl.Export>(protoimpl.X))).ProtoMessageV2Of((m as impl.message | null))
}
