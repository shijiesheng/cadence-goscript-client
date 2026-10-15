// Generated file based on skip_gogo.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as io from "@goscript/io/index.js"
import "@goscript/fmt/index.js"
import "@goscript/io/index.js"

export function Skip(data: $.Slice<number>): [number, $.GoError] {
	let n: number = 0
	let err: $.GoError = null! as $.GoError
	let l = $.sliceLen(data)
	let index = 0
	for (let __goscriptSliceWindow0 = $.sliceRange(data); index < l; ) {
		let wire: bigint = 0n
		for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
			if (index >= l) {
				return [0, io.ErrUnexpectedEOF]
			}
			let b = ((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, index)] as number)
			index++
			wire = $.uint64Or(wire, $.uint64Shl(($.uint64And($.uint64(b), 127n)), shift))
			if (b < 0x80) {
				break
			}
		}
		let wireType = $.int($.uint64And(wire, 7n))
		switch (wireType) {
			case 0:
			{
				while (true) {
					if (index >= l) {
						return [0, io.ErrUnexpectedEOF]
					}
					index++
					if (((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, index - 1)] as number) < 0x80) {
						break
					}
				}
				return [index, null]
				break
			}
			case 1:
			{
				index = index + (8)
				return [index, null]
				break
			}
			case 2:
			{
				let length: number = 0
				for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
					if (index >= l) {
						return [0, io.ErrUnexpectedEOF]
					}
					let b = ((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, index)] as number)
					index++
					length = length | (($.int(b) & 0x7F) << shift)
					if (b < 0x80) {
						break
					}
				}
				index = index + (length)
				return [index, null]
				break
			}
			case 3:
			{
				while (true) {
					let innerWire: bigint = 0n
					let start: number = index
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (index >= l) {
							return [0, io.ErrUnexpectedEOF]
						}
						let b = ((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, index)] as number)
						index++
						innerWire = $.uint64Or(innerWire, $.uint64Shl(($.uint64And($.uint64(b), 127n)), shift))
						if (b < 0x80) {
							break
						}
					}
					let innerWireType = $.int($.uint64And(innerWire, 7n))
					if (innerWireType == 4) {
						break
					}
					let [next, __goscriptShadow0] = Skip($.goSlice(data, start, undefined))
					if (__goscriptShadow0 != null) {
						return [0, __goscriptShadow0]
					}
					index = start + next
				}
				return [index, null]
				break
			}
			case 4:
			{
				return [index, null]
				break
			}
			case 5:
			{
				index = index + (4)
				return [index, null]
				break
			}
			default:
			{
				return [0, fmt.Errorf("proto: illegal wireType %d", $.basicInterfaceValue(wireType, "int"))]
				break
			}
		}
	}
	$.panic("unreachable")
	throw new globalThis.Error("goscript: unreachable return")
}
