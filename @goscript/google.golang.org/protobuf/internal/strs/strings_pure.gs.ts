// Generated file based on strings_pure.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as pref from "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"
import "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"

$.registerTypePackagePath("google.golang.org/protobuf/internal/strs", ["strs.Builder"])

export class Builder {
	public _fields: {
	}

	constructor(init?: Partial<{}>, __goscriptValue?: boolean) {
		this._fields = {
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Builder {
		return new Builder(this, true)
	}

	public __goscriptAssign(source: Builder): void {
	}

	public AppendFullName(prefix: pref.FullName, name: pref.Name): pref.FullName {
		return pref.FullName_Append(prefix, name)
	}

	public MakeString(b: $.Slice<number>): string {
		return $.bytesToString(b)
	}

	static __typeInfo = $.registerStructType(
		"strs.Builder",
		() => new Builder(),
		() => [$.methodSignature("AppendFullName", [["prefix", /* @__PURE__ */ $.basicType("string", "protoreflect.FullName")], ["name", /* @__PURE__ */ $.basicType("string", "protoreflect.Name")]], [/* @__PURE__ */ $.basicType("string", "protoreflect.FullName")], true), $.methodSignature("MakeString", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("string")], true)],
		Builder,
		() => []
	)
}

export function UnsafeString(b: $.Slice<number>): string {
	return $.bytesToString(b)
}

export function UnsafeBytes(s: string): $.Slice<number> {
	return $.stringToBytes(s)
}
