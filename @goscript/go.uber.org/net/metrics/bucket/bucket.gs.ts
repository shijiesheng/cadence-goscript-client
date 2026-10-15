// Generated file based on bucket.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as errors from "@goscript/errors/index.js"
import "@goscript/errors/index.js"

export function NewRPCLatency(): $.Slice<bigint> {
	return $.arrayToSlice<bigint>([1n, 2n, 3n, 4n, 5n, 6n, 7n, 8n, 9n, 10n, 12n, 14n, 16n, 18n, 20n, 25n, 30n, 35n, 40n, 45n, 50n, 60n, 70n, 80n, 90n, 100n, 120n, 140n, 160n, 180n, 200n, 250n, 300n, 350n, 400n, 450n, 500n, 600n, 700n, 800n, 900n, 1000n, 1500n, 2000n, 2500n, 3000n, 4000n, 5000n, 7500n, 10000n])
}

export function NewExponential(initial: bigint, factor: bigint, n: number): $.Slice<bigint> {
	if (((n < 1) || (initial < 1n)) || (factor < 2n)) {
		return null
	}
	let buckets: $.Slice<bigint> = $.makeSlice<bigint>(n, undefined, "number")
	$.sliceElems(buckets!)[$.sliceSlot(buckets!, 0)] = initial
	for (let __goscriptSliceWindow0 = $.sliceRange(buckets), i = 1; i < __goscriptSliceWindow0.length; i++) {
		;(__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)] = $.int64Mul(((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i - 1)] as bigint), factor)
	}
	return buckets
}

export function NewLinear(initial: bigint, width: bigint, n: number): $.Slice<bigint> {
	if ((n < 1) || (width < 1n)) {
		return null
	}
	let buckets: $.Slice<bigint> = $.makeSlice<bigint>(n, undefined, "number")
	$.sliceElems(buckets!)[$.sliceSlot(buckets!, 0)] = initial
	for (let __goscriptSliceWindow1 = $.sliceRange(buckets), i = 1; i < __goscriptSliceWindow1.length; i++) {
		;(__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, i)] = $.int64Add(((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, i - 1)] as bigint), width)
	}
	return buckets
}

export function Flatten(buckets: $.Slice<$.Slice<bigint>>): [$.Slice<bigint>, $.GoError] {
	let merged: $.Slice<bigint> = flatten(buckets)
	{
		let asc = isAscending(merged)
		if (!asc) {
			return [null, errors.New("after flattening, buckets are not strictly ascending")]
		}
	}
	return [merged, null]
}

export function isAscending(ints: $.Slice<bigint>): boolean {
	// Don't use sort.IsSorted, since it permits duplicate elements.
	if ($.sliceLen(ints) < 2) {
		return true
	}
	let prev = $.arrayIndex(ints!, 0)
	for (let __goscriptSliceWindow2 = $.sliceRange(ints), j = 1; j < __goscriptSliceWindow2.length; j++) {
		if (prev >= ((__goscriptSliceWindow2.backing as any[])[$.windowSlot(__goscriptSliceWindow2, j)] as bigint)) {
			return false
		}
		prev = ((__goscriptSliceWindow2.backing as any[])[$.windowSlot(__goscriptSliceWindow2, j)] as bigint)
	}
	return true
}

export function flatten(iss: $.Slice<$.Slice<bigint>>): $.Slice<bigint> {
	let n: number = 0
	for (let __goscriptRangeTarget0 = iss, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
		let _is = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as $.Slice<bigint>)
		n = n + ($.sliceLen(_is))
	}
	let flat: $.Slice<bigint> = $.makeSlice<bigint>(0, n, "number")
	for (let __goscriptRangeTarget1 = iss, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
		let _is = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as $.Slice<bigint>)
		flat = $.appendSlice(flat, _is)
	}
	return flat
}
