// Generated file based on encode.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as math from "@goscript/math/index.js"

import * as sort from "@goscript/sort/index.js"

import * as atomic from "@goscript/sync/atomic/index.js"

import * as flags2 from "@goscript/google.golang.org/protobuf/internal/flags/index.js"

import * as proto from "@goscript/google.golang.org/protobuf/proto/index.js"

import * as piface from "@goscript/google.golang.org/protobuf/runtime/protoiface/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as sync from "@goscript/sync/index.js"

import * as __goscript_checkinit from "./checkinit.gs.ts"

import * as __goscript_codec_extension from "./codec_extension.gs.ts"

import * as __goscript_codec_field from "./codec_field.gs.ts"

import * as __goscript_codec_message from "./codec_message.gs.ts"

import * as __goscript_codec_messageset from "./codec_messageset.gs.ts"

import * as __goscript_codec_tables from "./codec_tables.gs.ts"

import * as __goscript_decode from "./decode.gs.ts"

import * as __goscript_merge from "./merge.gs.ts"

import * as __goscript_message from "./message.gs.ts"

import * as __goscript_message_reflect from "./message_reflect.gs.ts"

import * as __goscript_message_reflect_field from "./message_reflect_field.gs.ts"

import * as __goscript_message_reflect_gen from "./message_reflect_gen.gs.ts"

import * as __goscript_pointer_reflect from "./pointer_reflect.gs.ts"

import * as __goscript_validate from "./validate.gs.ts"

import type * as __goscript_weak from "./weak.gs.ts"
import "@goscript/math/index.js"
import "@goscript/sort/index.js"
import "@goscript/sync/atomic/index.js"
import "@goscript/google.golang.org/protobuf/internal/flags/index.js"
import "@goscript/google.golang.org/protobuf/proto/index.js"
import "@goscript/google.golang.org/protobuf/runtime/protoiface/index.js"
import "@goscript/reflect/index.js"
import "@goscript/sync/index.js"
import "./checkinit.gs.ts"
import "./codec_extension.gs.ts"
import "./codec_field.gs.ts"
import "./codec_message.gs.ts"
import "./codec_messageset.gs.ts"
import "./codec_tables.gs.ts"
import "./decode.gs.ts"
import "./merge.gs.ts"
import "./message.gs.ts"
import "./message_reflect.gs.ts"
import "./message_reflect_field.gs.ts"
import "./message_reflect_gen.gs.ts"
import "./pointer_reflect.gs.ts"
import "./validate.gs.ts"

$.registerTypePackagePath("google.golang.org/protobuf/internal/impl", ["impl.marshalOptions"])

export class marshalOptions {
	public get flags(): piface.MarshalInputFlags {
		return this._fields.flags
	}

	public set flags(value: piface.MarshalInputFlags) {
		this._fields.flags = value
	}

	public _fields: {
		flags: piface.MarshalInputFlags
	}

	constructor(init?: Partial<{flags?: piface.MarshalInputFlags}>, __goscriptValue?: boolean) {
		this._fields = {
			flags: init?.flags ?? (0 as piface.MarshalInputFlags)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): marshalOptions {
		return new marshalOptions(this, true)
	}

	public __goscriptAssign(source: marshalOptions): void {
		const target = this._fields
		const values = source._fields
		target.flags = values.flags
	}

	public Deterministic(): boolean {
		const o = this;
		return $.uint((o.flags & piface.MarshalDeterministic), 8) != 0
	}

	public Options(): proto.MarshalOptions {
		const o = this;
		return (() => { const __goscriptLiteralField0 = o.Deterministic(); const __goscriptLiteralField1 = o.UseCachedSize(); return new proto.MarshalOptions({AllowPartial: true, Deterministic: __goscriptLiteralField0, UseCachedSize: __goscriptLiteralField1}, true) })()
	}

	public UseCachedSize(): boolean {
		const o = this;
		return $.uint((o.flags & piface.MarshalUseCachedSize), 8) != 0
	}

	static __typeInfo = $.registerStructType(
		"impl.marshalOptions",
		() => new marshalOptions(),
		() => [{ name: "Deterministic", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("bool") }] }, { name: "Options", args: [], returns: [{ type: "proto.MarshalOptions" }] }, { name: "UseCachedSize", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("bool") }] }],
		marshalOptions,
		() => [{ name: "flags", key: "flags", type: /* @__PURE__ */ $.basicType("uint8") }]
	)
}

export function fullyLazyExtensions(opts: marshalOptions): boolean {
	// When deterministic marshaling is requested, force an unmarshal for lazy
	// extensions to produce a deterministic result, instead of passing through
	// bytes lazily that may or may not match what Go Protobuf would produce.
	return $.uint((opts.flags & piface.MarshalDeterministic), 8) == 0
}
