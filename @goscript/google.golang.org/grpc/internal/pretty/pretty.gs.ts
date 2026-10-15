// Generated file based on pretty.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as json from "@goscript/encoding/json/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as protojson from "@goscript/google.golang.org/protobuf/encoding/protojson/index.js"

import * as protoadapt from "@goscript/google.golang.org/protobuf/protoadapt/index.js"

import * as proto from "@goscript/google.golang.org/protobuf/proto/index.js"

import * as protoreflect from "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"

import * as protoiface from "@goscript/google.golang.org/protobuf/runtime/protoiface/index.js"
import "@goscript/bytes/index.js"
import "@goscript/encoding/json/index.js"
import "@goscript/fmt/index.js"
import "@goscript/google.golang.org/protobuf/encoding/protojson/index.js"
import "@goscript/google.golang.org/protobuf/protoadapt/index.js"
import "@goscript/google.golang.org/protobuf/proto/index.js"
import "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"
import "@goscript/google.golang.org/protobuf/runtime/protoiface/index.js"

export const jsonIndent: string = "  "

export async function ToJSON(e: any): globalThis.Promise<string> {
	{
		let [ee, ok] = $.typeAssertTuple<protoadapt.MessageV1 | null>(e, "protoiface.MessageV1")
		if (ok) {
			e = (await protoadapt.MessageV2Of(ee) as any)
		}
	}

	{
		let [ee, ok] = $.typeAssertTuple<protoadapt.MessageV2 | null>(e, "protoreflect.ProtoMessage")
		if (ok) {
			let mm = new protojson.MarshalOptions({Indent: "  ", Multiline: true}, true)
			let __goscriptTuple0: any = await mm.Marshal(ee)
			let ret: $.Slice<number> = __goscriptTuple0[0]
			let err = __goscriptTuple0[1]
			if (err != null) {
				// This may fail for proto.Anys, e.g. for xDS v2, LDS, the v2
				// messages are not imported, and this will fail because the message
				// is not found.
				return fmt.Sprintf("%+v", (ee as any))
			}
			return $.bytesToString(ret)
		}
	}

	let __goscriptTuple1: any = await json.MarshalIndent(e, "", "  ")
	let ret: $.Slice<number> = __goscriptTuple1[0]
	let err = __goscriptTuple1[1]
	if (err != null) {
		return fmt.Sprintf("%+v", e)
	}
	return $.bytesToString(ret)
}

export function FormatJSON(b: $.Slice<number>): string {
	let out: $.VarRef<bytes.Buffer> = $.varRef($.markAsStructValue(new bytes.Buffer()))
	let err = json.Indent(out, b, "", "  ")
	if (err != null) {
		return $.bytesToString(b)
	}
	return out.value.String()
}
