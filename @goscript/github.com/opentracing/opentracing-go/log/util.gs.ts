// Generated file based on util.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as __goscript_field from "./field.gs.ts"
import "@goscript/fmt/index.js"
import "@goscript/reflect/index.js"
import "./field.gs.ts"

export async function InterleavedKVToFields(keyValues: $.Slice<any>): globalThis.Promise<[$.Slice<__goscript_field.Field>, $.GoError]> {
	if (($.sliceLen(keyValues) % 2) != 0) {
		return [null, fmt.Errorf("non-even keyValues len: %d", $.basicInterfaceValue($.sliceLen(keyValues), "int"))]
	}
	let fields: $.Slice<__goscript_field.Field> = $.makeSlice<__goscript_field.Field>(globalThis.Math.trunc($.sliceLen(keyValues) / 2), undefined, undefined, () => new __goscript_field.Field(undefined, true))
	for (let __goscriptSliceWindow0 = $.sliceRange(keyValues), __goscriptSliceWindow1 = $.sliceRange(fields), i = 0; (i * 2) < __goscriptSliceWindow0.length; i++) {
		let [key, ok] = $.typeAssertTuple<string>(((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i * 2)] as any), /* @__PURE__ */ $.basicType("string"))
		if (!ok) {
			return [null, fmt.Errorf("non-string key (pair #%d): %T", $.basicInterfaceValue(i, "int"), ((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i * 2)] as any))]
		}
		{
			const __goscriptTypeSwitchValue = ((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, (i * 2) + 1)] as any)
			switch (true) {
				case $.typeAssert<boolean>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("bool")).ok:
					{
						let typedVal: boolean = $.typeAssert<boolean>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("bool")).value
						$.assignStruct((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, i)], __goscript_field.Bool(key, typedVal))
					}
					break
				case $.typeAssert<string>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("string")).ok:
					{
						let typedVal: string = $.typeAssert<string>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("string")).value
						$.assignStruct((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, i)], __goscript_field.String(key, typedVal))
					}
					break
				case $.typeAssert<number>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("int")).ok:
					{
						let typedVal: number = $.typeAssert<number>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("int")).value
						$.assignStruct((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, i)], __goscript_field.Int(key, typedVal))
					}
					break
				case $.typeAssert<number>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("int8")).ok:
					{
						let typedVal: number = $.typeAssert<number>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("int8")).value
						$.assignStruct((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, i)], __goscript_field.Int32(key, $.int(typedVal, 32)))
					}
					break
				case $.typeAssert<number>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("int16")).ok:
					{
						let typedVal: number = $.typeAssert<number>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("int16")).value
						$.assignStruct((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, i)], __goscript_field.Int32(key, $.int(typedVal, 32)))
					}
					break
				case $.typeAssert<number>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("int32")).ok:
					{
						let typedVal: number = $.typeAssert<number>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("int32")).value
						$.assignStruct((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, i)], __goscript_field.Int32(key, typedVal))
					}
					break
				case $.typeAssert<bigint>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("int64")).ok:
					{
						let typedVal: bigint = $.typeAssert<bigint>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("int64")).value
						$.assignStruct((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, i)], __goscript_field.Int64(key, typedVal))
					}
					break
				case $.typeAssert<number>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("uint")).ok:
					{
						let typedVal: number = $.typeAssert<number>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("uint")).value
						$.assignStruct((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, i)], __goscript_field.Uint64(key, $.uint64(typedVal)))
					}
					break
				case $.typeAssert<bigint>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("uint64")).ok:
					{
						let typedVal: bigint = $.typeAssert<bigint>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("uint64")).value
						$.assignStruct((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, i)], __goscript_field.Uint64(key, typedVal))
					}
					break
				case $.typeAssert<number>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("uint8")).ok:
					{
						let typedVal: number = $.typeAssert<number>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("uint8")).value
						$.assignStruct((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, i)], __goscript_field.Uint32(key, $.uint(typedVal, 32)))
					}
					break
				case $.typeAssert<number>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("uint16")).ok:
					{
						let typedVal: number = $.typeAssert<number>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("uint16")).value
						$.assignStruct((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, i)], __goscript_field.Uint32(key, $.uint(typedVal, 32)))
					}
					break
				case $.typeAssert<number>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("uint32")).ok:
					{
						let typedVal: number = $.typeAssert<number>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("uint32")).value
						$.assignStruct((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, i)], __goscript_field.Uint32(key, typedVal))
					}
					break
				case $.typeAssert<number>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("float32")).ok:
					{
						let typedVal: number = $.typeAssert<number>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("float32")).value
						$.assignStruct((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, i)], __goscript_field.Float32(key, typedVal))
					}
					break
				case $.typeAssert<number>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("float64")).ok:
					{
						let typedVal: number = $.typeAssert<number>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("float64")).value
						$.assignStruct((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, i)], __goscript_field.Float64(key, typedVal))
					}
					break
				default:
					{
						let typedVal: any = __goscriptTypeSwitchValue
						if ((typedVal == null) || (($.markAsStructValue($.cloneStructValue(reflect.ValueOf(typedVal))).Kind() == 22) && $.markAsStructValue($.cloneStructValue(reflect.ValueOf(typedVal))).IsNil())) {
							$.assignStruct((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, i)], __goscript_field.String(key, "nil"))
							continue
						}
						// When in doubt, coerce to a string
						$.assignStruct((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, i)], __goscript_field.String(key, await fmt.Sprint(typedVal)))
					}
					break
			}
		}
	}
	return [fields, null]
}
