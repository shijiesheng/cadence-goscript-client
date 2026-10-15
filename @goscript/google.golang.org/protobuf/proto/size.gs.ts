// Generated file based on size.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as protowire from "@goscript/google.golang.org/protobuf/encoding/protowire/index.js"

import * as messageset from "@goscript/google.golang.org/protobuf/internal/encoding/messageset/index.js"

import * as protoreflect from "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"

import * as protoiface from "@goscript/google.golang.org/protobuf/runtime/protoiface/index.js"

import * as pragma from "@goscript/google.golang.org/protobuf/internal/pragma/index.js"

import * as __goscript_encode from "./encode.gs.ts"

import * as __goscript_encode_gen from "./encode_gen.gs.ts"

import * as __goscript_messageset from "./messageset.gs.ts"

import * as __goscript_proto from "./proto.gs.ts"

import * as __goscript_proto_methods from "./proto_methods.gs.ts"

import * as __goscript_size_gen from "./size_gen.gs.ts"
import "@goscript/google.golang.org/protobuf/encoding/protowire/index.js"
import "@goscript/google.golang.org/protobuf/internal/encoding/messageset/index.js"
import "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"
import "@goscript/google.golang.org/protobuf/runtime/protoiface/index.js"
import "@goscript/google.golang.org/protobuf/internal/pragma/index.js"
import "./encode.gs.ts"
import "./encode_gen.gs.ts"
import "./messageset.gs.ts"
import "./proto.gs.ts"
import "./proto_methods.gs.ts"
import "./size_gen.gs.ts"

export async function Size(m: __goscript_proto.Message | null): globalThis.Promise<number> {
	return $.markAsStructValue($.cloneStructValue(new __goscript_encode.MarshalOptions(undefined, true))).Size(m)
}
