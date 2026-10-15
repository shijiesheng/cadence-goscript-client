// Generated file based on legacy.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

$.registerTypePackagePath("google.golang.org/protobuf/runtime/protoiface", ["protoiface.MessageV1", "protoiface.ExtensionRangeV1"])

export type MessageV1 = {
	ProtoMessage(): void
	Reset(): void
	String(): string | globalThis.Promise<string>
}

$.registerInterfaceType(
	"protoiface.MessageV1",
	null,
	[$.methodSignature("ProtoMessage"), $.methodSignature("Reset"), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

export class ExtensionRangeV1 {
	public get Start(): number {
		return this._fields.Start
	}

	public set Start(value: number) {
		this._fields.Start = value
	}

	public get End(): number {
		return this._fields.End
	}

	public set End(value: number) {
		this._fields.End = value
	}

	public _fields: {
		Start: number
		End: number
	}

	constructor(init?: Partial<{Start?: number, End?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Start: init?.Start ?? (0 as number),
			End: init?.End ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ExtensionRangeV1 {
		return new ExtensionRangeV1(this, true)
	}

	public __goscriptAssign(source: ExtensionRangeV1): void {
		const target = this._fields
		const values = source._fields
		target.Start = values.Start
		target.End = values.End
	}

	static __typeInfo = $.registerStructType(
		"protoiface.ExtensionRangeV1",
		() => new ExtensionRangeV1(),
		() => [],
		ExtensionRangeV1,
		() => [/* @__PURE__ */ $.structField("Start", /* @__PURE__ */ $.basicType("int32"), [0], 0, true), /* @__PURE__ */ $.structField("End", /* @__PURE__ */ $.basicType("int32"), [1], 4, true)]
	)
}
