// Generated file based on enum.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as protoreflect from "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"
import "@goscript/reflect/index.js"
import "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"

$.registerTypePackagePath("google.golang.org/protobuf/internal/impl", ["impl.EnumInfo"])

export class EnumInfo {
	public get GoReflectType(): reflect.Type | null {
		return this._fields.GoReflectType
	}

	public set GoReflectType(value: reflect.Type | null) {
		this._fields.GoReflectType = value
	}

	public get Desc(): protoreflect.EnumDescriptor | null {
		return this._fields.Desc
	}

	public set Desc(value: protoreflect.EnumDescriptor | null) {
		this._fields.Desc = value
	}

	public _fields: {
		GoReflectType: reflect.Type | null
		Desc: protoreflect.EnumDescriptor | null
	}

	constructor(init?: Partial<{GoReflectType?: reflect.Type | null, Desc?: protoreflect.EnumDescriptor | null}>, __goscriptValue?: boolean) {
		this._fields = {
			GoReflectType: init?.GoReflectType ?? (null! as reflect.Type | null),
			Desc: init?.Desc ?? (null! as protoreflect.EnumDescriptor | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): EnumInfo {
		return new EnumInfo(this, true)
	}

	public __goscriptAssign(source: EnumInfo): void {
		const target = this._fields
		const values = source._fields
		target.GoReflectType = $.assignFieldValue(target.GoReflectType, values.GoReflectType, "reflect.Type")
		target.Desc = $.assignFieldValue(target.Desc, values.Desc, "protoreflect.EnumDescriptor")
	}

	public Descriptor(): protoreflect.EnumDescriptor | null {
		const t: EnumInfo | $.VarRef<EnumInfo> | null = this;
		return $.pointerValue<EnumInfo>(t).Desc
	}

	public New(n: protoreflect.EnumNumber): protoreflect.Enum | null {
		const t: EnumInfo | $.VarRef<EnumInfo> | null = this;
		return $.mustTypeAssert<protoreflect.Enum | null>($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(reflect.ValueOf($.namedValueInterfaceValue<any>(n, "protoreflect.EnumNumber", {}, /* @__PURE__ */ $.basicType("int32", "protoreflect.EnumNumber"))))).Convert($.pointerValueOrNil($.pointerValue<EnumInfo>(t).GoReflectType)!))).Interface(), "protoreflect.Enum")
	}

	static __typeInfo = $.registerStructType(
		"impl.EnumInfo",
		() => new EnumInfo(),
		() => [$.methodSignature("Descriptor", [], ["protoreflect.EnumDescriptor"], true), $.methodSignature("New", [["n", /* @__PURE__ */ $.basicType("int32", "protoreflect.EnumNumber")]], ["protoreflect.Enum"], true)],
		EnumInfo,
		() => [/* @__PURE__ */ $.structField("GoReflectType", "reflect.Type", [0], 0, true), /* @__PURE__ */ $.structField("Desc", "protoreflect.EnumDescriptor", [1], 16, true)]
	)
}
