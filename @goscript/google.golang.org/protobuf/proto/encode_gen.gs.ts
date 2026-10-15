// Generated file based on encode_gen.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as math from "@goscript/math/index.js"

import * as utf8 from "@goscript/unicode/utf8/index.js"

import * as protowire from "@goscript/google.golang.org/protobuf/encoding/protowire/index.js"

import * as errors from "@goscript/google.golang.org/protobuf/internal/errors/index.js"

import * as strs from "@goscript/google.golang.org/protobuf/internal/strs/index.js"

import * as protoreflect from "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"

import * as pragma from "@goscript/google.golang.org/protobuf/internal/pragma/index.js"

import type * as protoiface from "@goscript/google.golang.org/protobuf/runtime/protoiface/index.js"

import * as __goscript_encode from "./encode.gs.ts"

import type * as __goscript_messageset from "./messageset.gs.ts"

import type * as __goscript_proto from "./proto.gs.ts"

import type * as __goscript_size from "./size.gs.ts"

import type * as __goscript_size_gen from "./size_gen.gs.ts"
import "@goscript/math/index.js"
import "@goscript/unicode/utf8/index.js"
import "@goscript/google.golang.org/protobuf/encoding/protowire/index.js"
import "@goscript/google.golang.org/protobuf/internal/errors/index.js"
import "@goscript/google.golang.org/protobuf/internal/strs/index.js"
import "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"
import "@goscript/google.golang.org/protobuf/internal/pragma/index.js"
import "./encode.gs.ts"

export let wireTypes: globalThis.Map<protoreflect.Kind, protowire.Type> | null = $.makeMap<protoreflect.Kind, protowire.Type>([[8, 0], [14, 0], [5, 0], [17, 0], [13, 0], [3, 0], [18, 0], [4, 0], [15, 5], [7, 5], [2, 5], [16, 1], [6, 1], [1, 1], [9, 2], [12, 2], [11, 2], [10, 3]])

export function __goscript_set_wireTypes(__goscriptValue: globalThis.Map<protoreflect.Kind, protowire.Type> | null): void {
	wireTypes = __goscriptValue
}
