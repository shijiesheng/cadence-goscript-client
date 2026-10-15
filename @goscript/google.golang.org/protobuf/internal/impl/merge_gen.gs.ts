// Generated file based on merge_gen.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as protowire from "@goscript/google.golang.org/protobuf/encoding/protowire/index.js"

import type * as pragma from "@goscript/google.golang.org/protobuf/internal/pragma/index.js"

import type * as proto from "@goscript/google.golang.org/protobuf/proto/index.js"

import * as protoreflect from "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"

import * as protoiface from "@goscript/google.golang.org/protobuf/runtime/protoiface/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as sync from "@goscript/sync/index.js"

import * as __goscript_checkinit from "./checkinit.gs.ts"

import * as __goscript_codec_extension from "./codec_extension.gs.ts"

import * as __goscript_codec_field from "./codec_field.gs.ts"

import * as __goscript_codec_message from "./codec_message.gs.ts"

import * as __goscript_codec_tables from "./codec_tables.gs.ts"

import * as __goscript_decode from "./decode.gs.ts"

import * as __goscript_encode from "./encode.gs.ts"

import * as __goscript_merge from "./merge.gs.ts"

import * as __goscript_message from "./message.gs.ts"

import * as __goscript_message_reflect from "./message_reflect.gs.ts"

import * as __goscript_message_reflect_field from "./message_reflect_field.gs.ts"

import * as __goscript_message_reflect_gen from "./message_reflect_gen.gs.ts"

import * as __goscript_pointer_reflect from "./pointer_reflect.gs.ts"

import * as __goscript_validate from "./validate.gs.ts"

import type * as __goscript_weak from "./weak.gs.ts"
import "@goscript/google.golang.org/protobuf/encoding/protowire/index.js"
import "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"
import "@goscript/google.golang.org/protobuf/runtime/protoiface/index.js"
import "@goscript/reflect/index.js"
import "@goscript/sync/index.js"
import "./checkinit.gs.ts"
import "./codec_extension.gs.ts"
import "./codec_field.gs.ts"
import "./codec_message.gs.ts"
import "./codec_tables.gs.ts"
import "./decode.gs.ts"
import "./encode.gs.ts"
import "./merge.gs.ts"
import "./message.gs.ts"
import "./message_reflect.gs.ts"
import "./message_reflect_field.gs.ts"
import "./message_reflect_gen.gs.ts"
import "./pointer_reflect.gs.ts"
import "./validate.gs.ts"

export function mergeBool(dst: __goscript_pointer_reflect.pointer, src: __goscript_pointer_reflect.pointer, _p2: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, _p3: __goscript_merge.mergeOptions): void {
	dst.Bool()!.value = $.pointerValue<boolean>(src.Bool())
}

export function mergeBoolNoZero(dst: __goscript_pointer_reflect.pointer, src: __goscript_pointer_reflect.pointer, _p2: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, _p3: __goscript_merge.mergeOptions): void {
	let v = $.pointerValue<boolean>(src.Bool())
	if (v != false) {
		dst.Bool()!.value = v
	}
}

export function mergeBoolPtr(dst: __goscript_pointer_reflect.pointer, src: __goscript_pointer_reflect.pointer, _p2: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, _p3: __goscript_merge.mergeOptions): void {
	let p = $.pointerValue<$.VarRef<boolean> | null>(src.BoolPtr())
	if (p != null) {
		let v = $.varRef($.pointerValue<boolean>(p))
		dst.BoolPtr()!.value = v
	}
}

export function mergeBoolSlice(dst: __goscript_pointer_reflect.pointer, src: __goscript_pointer_reflect.pointer, _p2: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, _p3: __goscript_merge.mergeOptions): void {
	let ds = dst.BoolSlice()
	let ss = src.BoolSlice()
	ds!.value = $.appendSlice($.pointerValue<$.Slice<boolean>>(ds), $.pointerValue<$.Slice<boolean>>(ss))
}

export function mergeInt32(dst: __goscript_pointer_reflect.pointer, src: __goscript_pointer_reflect.pointer, _p2: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, _p3: __goscript_merge.mergeOptions): void {
	dst.Int32()!.value = $.int($.pointerValue<number>(src.Int32()), 32)
}

export function mergeInt32NoZero(dst: __goscript_pointer_reflect.pointer, src: __goscript_pointer_reflect.pointer, _p2: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, _p3: __goscript_merge.mergeOptions): void {
	let v = $.int($.pointerValue<number>(src.Int32()), 32)
	if (v != 0) {
		dst.Int32()!.value = v
	}
}

export function mergeInt32Ptr(dst: __goscript_pointer_reflect.pointer, src: __goscript_pointer_reflect.pointer, _p2: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, _p3: __goscript_merge.mergeOptions): void {
	let p = $.pointerValue<$.VarRef<number> | null>(src.Int32Ptr())
	if (p != null) {
		let v = $.varRef($.pointerValue<number>(p))
		dst.Int32Ptr()!.value = v
	}
}

export function mergeInt32Slice(dst: __goscript_pointer_reflect.pointer, src: __goscript_pointer_reflect.pointer, _p2: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, _p3: __goscript_merge.mergeOptions): void {
	let ds = dst.Int32Slice()
	let ss = src.Int32Slice()
	ds!.value = $.appendSlice($.pointerValue<$.Slice<number>>(ds), $.pointerValue<$.Slice<number>>(ss))
}

export function mergeUint32(dst: __goscript_pointer_reflect.pointer, src: __goscript_pointer_reflect.pointer, _p2: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, _p3: __goscript_merge.mergeOptions): void {
	dst.Uint32()!.value = $.uint($.pointerValue<number>(src.Uint32()), 32)
}

export function mergeUint32NoZero(dst: __goscript_pointer_reflect.pointer, src: __goscript_pointer_reflect.pointer, _p2: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, _p3: __goscript_merge.mergeOptions): void {
	let v = $.uint($.pointerValue<number>(src.Uint32()), 32)
	if (v != 0) {
		dst.Uint32()!.value = v
	}
}

export function mergeUint32Ptr(dst: __goscript_pointer_reflect.pointer, src: __goscript_pointer_reflect.pointer, _p2: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, _p3: __goscript_merge.mergeOptions): void {
	let p = $.pointerValue<$.VarRef<number> | null>(src.Uint32Ptr())
	if (p != null) {
		let v = $.varRef($.pointerValue<number>(p))
		dst.Uint32Ptr()!.value = v
	}
}

export function mergeUint32Slice(dst: __goscript_pointer_reflect.pointer, src: __goscript_pointer_reflect.pointer, _p2: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, _p3: __goscript_merge.mergeOptions): void {
	let ds = dst.Uint32Slice()
	let ss = src.Uint32Slice()
	ds!.value = $.appendSlice($.pointerValue<$.Slice<number>>(ds), $.pointerValue<$.Slice<number>>(ss))
}

export function mergeInt64(dst: __goscript_pointer_reflect.pointer, src: __goscript_pointer_reflect.pointer, _p2: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, _p3: __goscript_merge.mergeOptions): void {
	dst.Int64()!.value = $.pointerValue<bigint>(src.Int64())
}

export function mergeInt64NoZero(dst: __goscript_pointer_reflect.pointer, src: __goscript_pointer_reflect.pointer, _p2: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, _p3: __goscript_merge.mergeOptions): void {
	let v = $.pointerValue<bigint>(src.Int64())
	if (v != 0n) {
		dst.Int64()!.value = v
	}
}

export function mergeInt64Ptr(dst: __goscript_pointer_reflect.pointer, src: __goscript_pointer_reflect.pointer, _p2: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, _p3: __goscript_merge.mergeOptions): void {
	let p = $.pointerValue<$.VarRef<bigint> | null>(src.Int64Ptr())
	if (p != null) {
		let v = $.varRef($.pointerValue<bigint>(p))
		dst.Int64Ptr()!.value = v
	}
}

export function mergeInt64Slice(dst: __goscript_pointer_reflect.pointer, src: __goscript_pointer_reflect.pointer, _p2: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, _p3: __goscript_merge.mergeOptions): void {
	let ds = dst.Int64Slice()
	let ss = src.Int64Slice()
	ds!.value = $.appendSlice($.pointerValue<$.Slice<bigint>>(ds), $.pointerValue<$.Slice<bigint>>(ss))
}

export function mergeUint64(dst: __goscript_pointer_reflect.pointer, src: __goscript_pointer_reflect.pointer, _p2: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, _p3: __goscript_merge.mergeOptions): void {
	dst.Uint64()!.value = $.pointerValue<bigint>(src.Uint64())
}

export function mergeUint64NoZero(dst: __goscript_pointer_reflect.pointer, src: __goscript_pointer_reflect.pointer, _p2: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, _p3: __goscript_merge.mergeOptions): void {
	let v = $.pointerValue<bigint>(src.Uint64())
	if (v != 0n) {
		dst.Uint64()!.value = v
	}
}

export function mergeUint64Ptr(dst: __goscript_pointer_reflect.pointer, src: __goscript_pointer_reflect.pointer, _p2: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, _p3: __goscript_merge.mergeOptions): void {
	let p = $.pointerValue<$.VarRef<bigint> | null>(src.Uint64Ptr())
	if (p != null) {
		let v = $.varRef($.pointerValue<bigint>(p))
		dst.Uint64Ptr()!.value = v
	}
}

export function mergeUint64Slice(dst: __goscript_pointer_reflect.pointer, src: __goscript_pointer_reflect.pointer, _p2: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, _p3: __goscript_merge.mergeOptions): void {
	let ds = dst.Uint64Slice()
	let ss = src.Uint64Slice()
	ds!.value = $.appendSlice($.pointerValue<$.Slice<bigint>>(ds), $.pointerValue<$.Slice<bigint>>(ss))
}

export function mergeFloat32(dst: __goscript_pointer_reflect.pointer, src: __goscript_pointer_reflect.pointer, _p2: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, _p3: __goscript_merge.mergeOptions): void {
	dst.Float32()!.value = $.pointerValue<number>(src.Float32())
}

export function mergeFloat32NoZero(dst: __goscript_pointer_reflect.pointer, src: __goscript_pointer_reflect.pointer, _p2: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, _p3: __goscript_merge.mergeOptions): void {
	let v = $.pointerValue<number>(src.Float32())
	if (v != 0) {
		dst.Float32()!.value = v
	}
}

export function mergeFloat32Ptr(dst: __goscript_pointer_reflect.pointer, src: __goscript_pointer_reflect.pointer, _p2: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, _p3: __goscript_merge.mergeOptions): void {
	let p = $.pointerValue<$.VarRef<number> | null>(src.Float32Ptr())
	if (p != null) {
		let v = $.varRef($.pointerValue<number>(p))
		dst.Float32Ptr()!.value = v
	}
}

export function mergeFloat32Slice(dst: __goscript_pointer_reflect.pointer, src: __goscript_pointer_reflect.pointer, _p2: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, _p3: __goscript_merge.mergeOptions): void {
	let ds = dst.Float32Slice()
	let ss = src.Float32Slice()
	ds!.value = $.appendSlice($.pointerValue<$.Slice<number>>(ds), $.pointerValue<$.Slice<number>>(ss))
}

export function mergeFloat64(dst: __goscript_pointer_reflect.pointer, src: __goscript_pointer_reflect.pointer, _p2: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, _p3: __goscript_merge.mergeOptions): void {
	dst.Float64()!.value = $.pointerValue<number>(src.Float64())
}

export function mergeFloat64NoZero(dst: __goscript_pointer_reflect.pointer, src: __goscript_pointer_reflect.pointer, _p2: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, _p3: __goscript_merge.mergeOptions): void {
	let v = $.pointerValue<number>(src.Float64())
	if (v != 0) {
		dst.Float64()!.value = v
	}
}

export function mergeFloat64Ptr(dst: __goscript_pointer_reflect.pointer, src: __goscript_pointer_reflect.pointer, _p2: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, _p3: __goscript_merge.mergeOptions): void {
	let p = $.pointerValue<$.VarRef<number> | null>(src.Float64Ptr())
	if (p != null) {
		let v = $.varRef($.pointerValue<number>(p))
		dst.Float64Ptr()!.value = v
	}
}

export function mergeFloat64Slice(dst: __goscript_pointer_reflect.pointer, src: __goscript_pointer_reflect.pointer, _p2: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, _p3: __goscript_merge.mergeOptions): void {
	let ds = dst.Float64Slice()
	let ss = src.Float64Slice()
	ds!.value = $.appendSlice($.pointerValue<$.Slice<number>>(ds), $.pointerValue<$.Slice<number>>(ss))
}

export function mergeString(dst: __goscript_pointer_reflect.pointer, src: __goscript_pointer_reflect.pointer, _p2: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, _p3: __goscript_merge.mergeOptions): void {
	dst.String()!.value = $.pointerValue<string>(src.String())
}

export function mergeStringNoZero(dst: __goscript_pointer_reflect.pointer, src: __goscript_pointer_reflect.pointer, _p2: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, _p3: __goscript_merge.mergeOptions): void {
	let v = $.pointerValue<string>(src.String())
	if (!$.stringEqual(v, "")) {
		dst.String()!.value = v
	}
}

export function mergeStringPtr(dst: __goscript_pointer_reflect.pointer, src: __goscript_pointer_reflect.pointer, _p2: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, _p3: __goscript_merge.mergeOptions): void {
	let p = $.pointerValue<$.VarRef<string> | null>(src.StringPtr())
	if (p != null) {
		let v = $.varRef($.pointerValue<string>(p))
		dst.StringPtr()!.value = v
	}
}

export function mergeStringSlice(dst: __goscript_pointer_reflect.pointer, src: __goscript_pointer_reflect.pointer, _p2: __goscript_codec_message.coderFieldInfo | $.VarRef<__goscript_codec_message.coderFieldInfo> | null, _p3: __goscript_merge.mergeOptions): void {
	let ds = dst.StringSlice()
	let ss = src.StringSlice()
	ds!.value = $.appendSlice($.pointerValue<$.Slice<string>>(ds), $.pointerValue<$.Slice<string>>(ss))
}
