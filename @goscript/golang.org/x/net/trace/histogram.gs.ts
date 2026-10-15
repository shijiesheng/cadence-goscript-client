// Generated file based on histogram.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as template from "@goscript/html/template/index.js"

import * as log from "@goscript/log/index.js"

import * as math from "@goscript/math/index.js"

import * as sync from "@goscript/sync/index.js"

import * as timeseries from "@goscript/golang.org/x/net/internal/timeseries/index.js"

import type * as io from "@goscript/io/index.js"
import "@goscript/bytes/index.js"
import "@goscript/fmt/index.js"
import "@goscript/html/template/index.js"
import "@goscript/log/index.js"
import "@goscript/math/index.js"
import "@goscript/sync/index.js"
import "@goscript/golang.org/x/net/internal/timeseries/index.js"

$.registerTypePackagePath("golang.org/x/net/trace", ["trace.histogram", "trace.bucketData", "trace.data"])

export class histogram {
	public get sum(): bigint {
		return this._fields.sum
	}

	public set sum(value: bigint) {
		this._fields.sum = value
	}

	public get sumOfSquares(): number {
		return this._fields.sumOfSquares
	}

	public set sumOfSquares(value: number) {
		this._fields.sumOfSquares = value
	}

	public get buckets(): $.Slice<bigint> {
		return this._fields.buckets
	}

	public set buckets(value: $.Slice<bigint>) {
		this._fields.buckets = value
	}

	public get value(): number {
		return this._fields.value
	}

	public set value(value: number) {
		this._fields.value = value
	}

	public get valueCount(): bigint {
		return this._fields.valueCount
	}

	public set valueCount(value: bigint) {
		this._fields.valueCount = value
	}

	public _fields: {
		sum: bigint
		sumOfSquares: number
		buckets: $.Slice<bigint>
		value: number
		valueCount: bigint
	}

	constructor(init?: Partial<{sum?: bigint, sumOfSquares?: number, buckets?: $.Slice<bigint>, value?: number, valueCount?: bigint}>, __goscriptValue?: boolean) {
		this._fields = {
			sum: init?.sum ?? (0n as bigint),
			sumOfSquares: init?.sumOfSquares ?? (0 as number),
			buckets: init?.buckets ?? (null! as $.Slice<bigint>),
			value: init?.value ?? (0 as number),
			valueCount: init?.valueCount ?? (0n as bigint)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): histogram {
		return new histogram(this, true)
	}

	public __goscriptAssign(source: histogram): void {
		const target = this._fields
		const values = source._fields
		target.sum = values.sum
		target.sumOfSquares = values.sumOfSquares
		target.buckets = values.buckets
		target.value = values.value
		target.valueCount = values.valueCount
	}

	public Add(other: timeseries.Observable | null): void {
		let h: histogram | $.VarRef<histogram> | null = this;
		const h$: histogram = h == null ? $.pointerTarget<histogram>(h) : (h as any).__isVarRef === true ? (h as any).value : (h as any).__goValue === undefined ? (h as any) : $.pointerTarget<histogram>(h)
		let o: histogram | $.VarRef<histogram> | null = ((other as any)?.__goType === "*trace.histogram" && (other as any).__goValue === undefined && (other as any).__isTypedNil !== true ? ((other as any) as histogram | $.VarRef<histogram> | null) : $.mustTypeAssert<histogram | $.VarRef<histogram> | null>(other, /* @__PURE__ */ $.pointerType("trace.histogram")))
		let o$: histogram = o == null ? $.pointerTarget<histogram>(o) : (o as any).__isVarRef === true ? (o as any).value : (o as any).__goValue === undefined ? (o as any) : $.pointerTarget<histogram>(o)
		if ((o$ as histogram).valueCount == 0n) {
		} else {
			if ((((h$ as histogram).valueCount >= 0n) && ((o$ as histogram).valueCount > 0n)) && ((h$ as histogram).value == (o$ as histogram).value)) {
				// Both have a single bucketed value, aggregate them
				;(h$ as histogram).valueCount = $.int64Add((h$ as histogram).valueCount, (o$ as histogram).valueCount)
			} else {
				// Two different values necessitate buckets in this histogram
				void (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? ((h as any) as histogram).allocateBuckets() : histogram.prototype.allocateBuckets.call(h))
				if ((o$ as histogram).valueCount >= 0n) {
					$.sliceElems((h$ as histogram).buckets!)[$.sliceSlot((h$ as histogram).buckets!, (o$ as histogram).value)] = $.int64Add($.sliceElems((h$ as histogram).buckets!)[$.sliceSlot((h$ as histogram).buckets!, (o$ as histogram).value)], (o$ as histogram).valueCount)
				} else {
					for (let __goscriptRangeTarget0 = (h$ as histogram).buckets, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), i = 0; i < __goscriptRangeWindow0.length; i++) {
						$.sliceElems((h$ as histogram).buckets!)[$.sliceSlot((h$ as histogram).buckets!, i)] = $.int64Add($.sliceElems((h$ as histogram).buckets!)[$.sliceSlot((h$ as histogram).buckets!, i)], $.arrayIndex((o$ as histogram).buckets!, i))
					}
				}
			}
		}
		;(h$ as histogram).sumOfSquares = (h$ as histogram).sumOfSquares + ((o$ as histogram).sumOfSquares);
		;(h$ as histogram).sum = $.int64Add((h$ as histogram).sum, (o$ as histogram).sum)
	}

	public Clear(): void {
		let h: histogram | $.VarRef<histogram> | null = this;
		const h$: histogram = h == null ? $.pointerTarget<histogram>(h) : (h as any).__isVarRef === true ? (h as any).value : (h as any).__goValue === undefined ? (h as any) : $.pointerTarget<histogram>(h);
		;(h$ as histogram).buckets = null;
		;(h$ as histogram).value = 0;
		;(h$ as histogram).valueCount = 0n;
		;(h$ as histogram).sum = 0n;
		;(h$ as histogram).sumOfSquares = 0
	}

	public CopyFrom(other: timeseries.Observable | null): void {
		let h: histogram | $.VarRef<histogram> | null = this;
		const h$: histogram = h == null ? $.pointerTarget<histogram>(h) : (h as any).__isVarRef === true ? (h as any).value : (h as any).__goValue === undefined ? (h as any) : $.pointerTarget<histogram>(h)
		let o: histogram | $.VarRef<histogram> | null = ((other as any)?.__goType === "*trace.histogram" && (other as any).__goValue === undefined && (other as any).__isTypedNil !== true ? ((other as any) as histogram | $.VarRef<histogram> | null) : $.mustTypeAssert<histogram | $.VarRef<histogram> | null>(other, /* @__PURE__ */ $.pointerType("trace.histogram")))
		let o$: histogram = o == null ? $.pointerTarget<histogram>(o) : (o as any).__isVarRef === true ? (o as any).value : (o as any).__goValue === undefined ? (o as any) : $.pointerTarget<histogram>(o)
		if ((o$ as histogram).valueCount == -1n) {
			void (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? ((h as any) as histogram).allocateBuckets() : histogram.prototype.allocateBuckets.call(h))
			$.copy((h$ as histogram).buckets, (o$ as histogram).buckets)
		}
		;(h$ as histogram).sum = (o$ as histogram).sum;
		;(h$ as histogram).sumOfSquares = (o$ as histogram).sumOfSquares;
		;(h$ as histogram).value = (o$ as histogram).value;
		;(h$ as histogram).valueCount = (o$ as histogram).valueCount
	}

	public Multiply(ratio: number): void {
		let h: histogram | $.VarRef<histogram> | null = this;
		const h$: histogram = h == null ? $.pointerTarget<histogram>(h) : (h as any).__isVarRef === true ? (h as any).value : (h as any).__goValue === undefined ? (h as any) : $.pointerTarget<histogram>(h)
		if ((h$ as histogram).valueCount == -1n) {
			for (let __goscriptRangeTarget1 = (h$ as histogram).buckets, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), i = 0; i < __goscriptRangeWindow1.length; i++) {
				$.sliceElems((h$ as histogram).buckets!)[$.sliceSlot((h$ as histogram).buckets!, i)] = $.int64(globalThis.Number($.arrayIndex((h$ as histogram).buckets!, i)) * ratio)
			}
		} else {
			;(h$ as histogram).valueCount = $.int64(globalThis.Number((h$ as histogram).valueCount) * ratio)
		}
		;(h$ as histogram).sum = $.int64(globalThis.Number((h$ as histogram).sum) * ratio);
		;(h$ as histogram).sumOfSquares = (h$ as histogram).sumOfSquares * ratio
	}

	public New(): timeseries.Observable | null {
		const h: histogram | $.VarRef<histogram> | null = this;
		let r: histogram | $.VarRef<histogram> | null = new histogram()
		void (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as histogram).Clear() : histogram.prototype.Clear.call(r))
		return $.interfaceValue<timeseries.Observable | null>(r, "*trace.histogram", /* @__PURE__ */ $.pointerType("trace.histogram"))
	}

	public async String(): globalThis.Promise<string> {
		const h: histogram | $.VarRef<histogram> | null = this;
		const h$: histogram = h == null ? $.pointerTarget<histogram>(h) : (h as any).__isVarRef === true ? (h as any).value : (h as any).__goValue === undefined ? (h as any) : $.pointerTarget<histogram>(h)
		return fmt.Sprintf("%d, %f, %d, %d, %v", $.basicInterfaceValue((h$ as histogram).sum, "int64"), $.basicInterfaceValue((h$ as histogram).sumOfSquares, "float64"), $.basicInterfaceValue((h$ as histogram).value, "int"), $.basicInterfaceValue((h$ as histogram).valueCount, "int64"), $.interfaceValue((h$ as histogram).buckets, "[]int64", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int64"))))
	}

	public addMeasurement(value: bigint): void {
		let h: histogram | $.VarRef<histogram> | null = this;
		const h$: histogram = h == null ? $.pointerTarget<histogram>(h) : (h as any).__isVarRef === true ? (h as any).value : (h as any).__goValue === undefined ? (h as any) : $.pointerTarget<histogram>(h);
		// TODO: assert invariant
		;(h$ as histogram).sum = $.int64Add((h$ as histogram).sum, value);
		;(h$ as histogram).sumOfSquares = (h$ as histogram).sumOfSquares + (globalThis.Number(value) * globalThis.Number(value))

		let bucketIndex = getBucket(value)

		if (((h$ as histogram).valueCount == 0n) || (((h$ as histogram).valueCount > 0n) && ((h$ as histogram).value == bucketIndex))) {
			;(h$ as histogram).value = bucketIndex;
			;(h$ as histogram).valueCount++
		} else {
			void (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? ((h as any) as histogram).allocateBuckets() : histogram.prototype.allocateBuckets.call(h))
			$.sliceElems((h$ as histogram).buckets!)[$.sliceSlot((h$ as histogram).buckets!, bucketIndex)]++
		}
	}

	public allocateBuckets(): void {
		let h: histogram | $.VarRef<histogram> | null = this;
		const h$: histogram = h == null ? $.pointerTarget<histogram>(h) : (h as any).__isVarRef === true ? (h as any).value : (h as any).__goValue === undefined ? (h as any) : $.pointerTarget<histogram>(h)
		if ((h$ as histogram).buckets == null) {
			;(h$ as histogram).buckets = $.makeSlice<bigint>(38, undefined, "number")
			$.sliceElems((h$ as histogram).buckets!)[$.sliceSlot((h$ as histogram).buckets!, (h$ as histogram).value)] = (h$ as histogram).valueCount;
			;(h$ as histogram).value = 0;
			;(h$ as histogram).valueCount = -1n
		}
	}

	public average(): number {
		const h: histogram | $.VarRef<histogram> | null = this;
		let t = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? ((h as any) as histogram).total() : histogram.prototype.total.call(h))
		if (t == 0n) {
			return 0
		}
		return globalThis.Number($.pointerValue<histogram>(h).sum) / globalThis.Number(t)
	}

	public async html(): globalThis.Promise<template.HTML> {
		const h: histogram | $.VarRef<histogram> | null = this;
		let buf: bytes.Buffer | $.VarRef<bytes.Buffer> | null = new bytes.Buffer()
		{
			let err = await template.Template.prototype.Execute.call(await distTmpl(), $.interfaceValue<io.Writer | null>(buf, "*bytes.Buffer", /* @__PURE__ */ $.pointerType("bytes.Buffer")), $.interfaceValue((h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? ((h as any) as histogram).newData() : histogram.prototype.newData.call(h)), "*trace.data", /* @__PURE__ */ $.pointerType("trace.data")))
			if (err != null) {
				bytes.Buffer.prototype.Reset.call($.pointerValue<bytes.Buffer>(buf))
				await log.Printf("net/trace: couldn't execute template: %v", $.arrayToSlice<any>([(err as any)]))
			}
		}
		return bytes.Buffer.prototype.String.call($.pointerValue<bytes.Buffer>(buf))
	}

	public median(): bigint {
		const h: histogram | $.VarRef<histogram> | null = this;
		return (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? ((h as any) as histogram).percentileBoundary(0.5) : histogram.prototype.percentileBoundary.call(h, 0.5))
	}

	public newData(): data | $.VarRef<data> | null {
		const h: histogram | $.VarRef<histogram> | null = this;
		const h$: histogram = h == null ? $.pointerTarget<histogram>(h) : (h as any).__isVarRef === true ? (h as any).value : (h as any).__goValue === undefined ? (h as any) : $.pointerTarget<histogram>(h)
		// Force the allocation of buckets to simplify the rendering implementation
		void (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? ((h as any) as histogram).allocateBuckets() : histogram.prototype.allocateBuckets.call(h))
		// We scale the bars on the right so that the largest bar is
		// maxHTMLBarWidth pixels in width.
		let maxBucket = 0n
		for (let __goscriptRangeTarget2 = (h$ as histogram).buckets, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow2.length; __rangeIndex++) {
			let n = (__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + __rangeIndex] as bigint)
			if (n > maxBucket) {
				maxBucket = n
			}
		}
		let total = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? ((h as any) as histogram).total() : histogram.prototype.total.call(h))
		let barsizeMult = 350 / globalThis.Number(maxBucket)
		let pctMult: number = 0
		if (total == 0n) {
			pctMult = 1.0
		} else {
			pctMult = 100.0 / globalThis.Number(total)
		}

		let buckets: $.Slice<bucketData | $.VarRef<bucketData> | null> = $.makeSlice<bucketData | $.VarRef<bucketData> | null>($.sliceLen((h$ as histogram).buckets))
		let runningTotal = 0n
		for (let __goscriptRangeTarget3 = (h$ as histogram).buckets, __goscriptRangeWindow3 = $.sliceRange(__goscriptRangeTarget3), __goscriptSliceWindow0 = $.sliceRange(buckets), i = 0; i < __goscriptRangeWindow3.length; i++) {
			let n = (__goscriptRangeWindow3.backing[__goscriptRangeWindow3.offset + i] as bigint)
			if (n == 0n) {
				continue
			}
			runningTotal = $.int64Add(runningTotal, n)
			let upperBound: bigint = 0n
			if (i < 37) {
				upperBound = bucketBoundary($.uint(i + 1, 8))
			} else {
				upperBound = 9223372036854775807n
			}
			;(__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)] = (() => { const __goscriptLiteralField0 = bucketBoundary($.uint(i, 8)); return new bucketData({Lower: __goscriptLiteralField0, Upper: upperBound, N: n, Pct: globalThis.Number(n) * pctMult, CumulativePct: globalThis.Number(runningTotal) * pctMult, GraphWidth: $.int(globalThis.Number(n) * barsizeMult)}) })()
		}
		return (() => { const __goscriptLiteralField1 = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? ((h as any) as histogram).median() : histogram.prototype.median.call(h)); const __goscriptLiteralField2 = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? ((h as any) as histogram).average() : histogram.prototype.average.call(h)); const __goscriptLiteralField3 = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? ((h as any) as histogram).standardDeviation() : histogram.prototype.standardDeviation.call(h)); return new data({Buckets: buckets, Count: total, Median: __goscriptLiteralField1, Mean: __goscriptLiteralField2, StandardDeviation: __goscriptLiteralField3}) })()
	}

	public percentileBoundary(percentile: number): bigint {
		const h: histogram | $.VarRef<histogram> | null = this;
		const h$: histogram = h == null ? $.pointerTarget<histogram>(h) : (h as any).__isVarRef === true ? (h as any).value : (h as any).__goValue === undefined ? (h as any) : $.pointerTarget<histogram>(h)
		let total = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? ((h as any) as histogram).total() : histogram.prototype.total.call(h))

		// Corner cases (make sure result is strictly less than Total())
		if (total == 0n) {
			return 0n
		} else {
			if (total == 1n) {
				return $.int64((h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? ((h as any) as histogram).average() : histogram.prototype.average.call(h)))
			}
		}

		let percentOfTotal = round(globalThis.Number(total) * percentile)
		let runningTotal: bigint = 0n

		for (let __goscriptRangeTarget4 = (h$ as histogram).buckets, __goscriptRangeWindow4 = $.sliceRange(__goscriptRangeTarget4), i = 0; i < __goscriptRangeWindow4.length; i++) {
			let value = $.arrayIndex((h$ as histogram).buckets!, i)
			runningTotal = $.int64Add(runningTotal, value)
			if (runningTotal == percentOfTotal) {
				// We hit an exact bucket boundary. If the next bucket has data, it is a
				// good estimate of the value. If the bucket is empty, we interpolate the
				// midpoint between the next bucket's boundary and the next non-zero
				// bucket. If the remaining buckets are all empty, then we use the
				// boundary for the next bucket as the estimate.
				let j = $.uint(i + 1, 8)
				let min = bucketBoundary(j)
				if (runningTotal < total) {
					while ($.arrayIndex((h$ as histogram).buckets!, j) == 0n) {
						j = ((j + 1) & 0xff)
					}
				}
				let max = bucketBoundary(j)
				return $.int64Add(min, round(globalThis.Number($.int64Sub(max, min)) / 2))
			} else {
				if (runningTotal > percentOfTotal) {
					// The value is in this bucket. Interpolate the value.
					let delta = $.int64Sub(runningTotal, percentOfTotal)
					let percentBucket = globalThis.Number($.int64Sub(value, delta)) / globalThis.Number(value)
					let bucketMin = bucketBoundary($.uint(i, 8))
					let nextBucketMin = bucketBoundary($.uint(i + 1, 8))
					let bucketSize = $.int64Sub(nextBucketMin, bucketMin)
					return $.int64Add(bucketMin, round(percentBucket * globalThis.Number(bucketSize)))
				}
			}
		}
		return bucketBoundary(37)
	}

	public standardDeviation(): number {
		const h: histogram | $.VarRef<histogram> | null = this;
		return math.Sqrt((h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? ((h as any) as histogram).variance() : histogram.prototype.variance.call(h)))
	}

	public total(): bigint {
		const h: histogram | $.VarRef<histogram> | null = this;
		let total: bigint = 0n
		const h$: histogram = h == null ? $.pointerTarget<histogram>(h) : (h as any).__isVarRef === true ? (h as any).value : (h as any).__goValue === undefined ? (h as any) : $.pointerTarget<histogram>(h)
		if ((h$ as histogram).valueCount >= 0n) {
			total = (h$ as histogram).valueCount
		}
		for (let __goscriptRangeTarget5 = (h$ as histogram).buckets, __goscriptRangeWindow5 = $.sliceRange(__goscriptRangeTarget5), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow5.length; __rangeIndex++) {
			let val = (__goscriptRangeWindow5.backing[__goscriptRangeWindow5.offset + __rangeIndex] as bigint)
			total = $.int64Add(total, $.int64(val))
		}
		return total
	}

	public variance(): number {
		const h: histogram | $.VarRef<histogram> | null = this;
		const h$: histogram = h == null ? $.pointerTarget<histogram>(h) : (h as any).__isVarRef === true ? (h as any).value : (h as any).__goValue === undefined ? (h as any) : $.pointerTarget<histogram>(h)
		let t = globalThis.Number((h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? ((h as any) as histogram).total() : histogram.prototype.total.call(h)))
		if (t == 0) {
			return 0
		}
		let s = globalThis.Number((h$ as histogram).sum) / t
		return ((h$ as histogram).sumOfSquares / t) - (s * s)
	}

	static __typeInfo = $.registerStructType(
		"trace.histogram",
		() => new histogram(),
		() => [$.methodSignature("Add", [["other", "timeseries.Observable"]], [], true), $.methodSignature("Clear", [], [], true), $.methodSignature("CopyFrom", [["other", "timeseries.Observable"]], [], true), $.methodSignature("Multiply", [["ratio", /* @__PURE__ */ $.basicType("float64")]], [], true), $.methodSignature("New", [], ["timeseries.Observable"], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("addMeasurement", [["value", /* @__PURE__ */ $.basicType("int64")]], [], true), $.methodSignature("allocateBuckets", [], [], true), $.methodSignature("average", [], [/* @__PURE__ */ $.basicType("float64")], true), $.methodSignature("html", [], [/* @__PURE__ */ $.basicType("string", "template.HTML")], true), $.methodSignature("median", [], [/* @__PURE__ */ $.basicType("int64")], true), $.methodSignature("newData", [], [/* @__PURE__ */ $.pointerType("trace.data")], true), $.methodSignature("percentileBoundary", [["percentile", /* @__PURE__ */ $.basicType("float64")]], [/* @__PURE__ */ $.basicType("int64")], true), $.methodSignature("standardDeviation", [], [/* @__PURE__ */ $.basicType("float64")], true), $.methodSignature("total", [], [["total", /* @__PURE__ */ $.basicType("int64")]], true), $.methodSignature("variance", [], [/* @__PURE__ */ $.basicType("float64")], true)],
		histogram,
		() => [/* @__PURE__ */ $.structField("sum", /* @__PURE__ */ $.basicType("int64"), [0], 0, false, { pkgPath: "golang.org/x/net/trace" }), /* @__PURE__ */ $.structField("sumOfSquares", /* @__PURE__ */ $.basicType("float64"), [1], 8, false, { pkgPath: "golang.org/x/net/trace" }), /* @__PURE__ */ $.structField("buckets", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int64")), [2], 16, false, { pkgPath: "golang.org/x/net/trace" }), /* @__PURE__ */ $.structField("value", /* @__PURE__ */ $.basicType("int"), [3], 40, false, { pkgPath: "golang.org/x/net/trace" }), /* @__PURE__ */ $.structField("valueCount", /* @__PURE__ */ $.basicType("int64"), [4], 48, false, { pkgPath: "golang.org/x/net/trace" })]
	)
}

export class bucketData {
	public get Lower(): bigint {
		return this._fields.Lower
	}

	public set Lower(value: bigint) {
		this._fields.Lower = value
	}

	public get Upper(): bigint {
		return this._fields.Upper
	}

	public set Upper(value: bigint) {
		this._fields.Upper = value
	}

	public get N(): bigint {
		return this._fields.N
	}

	public set N(value: bigint) {
		this._fields.N = value
	}

	public get Pct(): number {
		return this._fields.Pct
	}

	public set Pct(value: number) {
		this._fields.Pct = value
	}

	public get CumulativePct(): number {
		return this._fields.CumulativePct
	}

	public set CumulativePct(value: number) {
		this._fields.CumulativePct = value
	}

	public get GraphWidth(): number {
		return this._fields.GraphWidth
	}

	public set GraphWidth(value: number) {
		this._fields.GraphWidth = value
	}

	public _fields: {
		Lower: bigint
		Upper: bigint
		N: bigint
		Pct: number
		CumulativePct: number
		GraphWidth: number
	}

	constructor(init?: Partial<{Lower?: bigint, Upper?: bigint, N?: bigint, Pct?: number, CumulativePct?: number, GraphWidth?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Lower: init?.Lower ?? (0n as bigint),
			Upper: init?.Upper ?? (0n as bigint),
			N: init?.N ?? (0n as bigint),
			Pct: init?.Pct ?? (0 as number),
			CumulativePct: init?.CumulativePct ?? (0 as number),
			GraphWidth: init?.GraphWidth ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): bucketData {
		return new bucketData(this, true)
	}

	public __goscriptAssign(source: bucketData): void {
		const target = this._fields
		const values = source._fields
		target.Lower = values.Lower
		target.Upper = values.Upper
		target.N = values.N
		target.Pct = values.Pct
		target.CumulativePct = values.CumulativePct
		target.GraphWidth = values.GraphWidth
	}

	static __typeInfo = $.registerStructType(
		"trace.bucketData",
		() => new bucketData(),
		() => [],
		bucketData,
		() => [/* @__PURE__ */ $.structField("Lower", /* @__PURE__ */ $.basicType("int64"), [0], 0, true), /* @__PURE__ */ $.structField("Upper", /* @__PURE__ */ $.basicType("int64"), [1], 8, true), /* @__PURE__ */ $.structField("N", /* @__PURE__ */ $.basicType("int64"), [2], 16, true), /* @__PURE__ */ $.structField("Pct", /* @__PURE__ */ $.basicType("float64"), [3], 24, true), /* @__PURE__ */ $.structField("CumulativePct", /* @__PURE__ */ $.basicType("float64"), [4], 32, true), /* @__PURE__ */ $.structField("GraphWidth", /* @__PURE__ */ $.basicType("int"), [5], 40, true)]
	)
}

export class data {
	public get Buckets(): $.Slice<bucketData | $.VarRef<bucketData> | null> {
		return this._fields.Buckets
	}

	public set Buckets(value: $.Slice<bucketData | $.VarRef<bucketData> | null>) {
		this._fields.Buckets = value
	}

	public get Count(): bigint {
		return this._fields.Count
	}

	public set Count(value: bigint) {
		this._fields.Count = value
	}

	public get Median(): bigint {
		return this._fields.Median
	}

	public set Median(value: bigint) {
		this._fields.Median = value
	}

	public get Mean(): number {
		return this._fields.Mean
	}

	public set Mean(value: number) {
		this._fields.Mean = value
	}

	public get StandardDeviation(): number {
		return this._fields.StandardDeviation
	}

	public set StandardDeviation(value: number) {
		this._fields.StandardDeviation = value
	}

	public _fields: {
		Buckets: $.Slice<bucketData | $.VarRef<bucketData> | null>
		Count: bigint
		Median: bigint
		Mean: number
		StandardDeviation: number
	}

	constructor(init?: Partial<{Buckets?: $.Slice<bucketData | $.VarRef<bucketData> | null>, Count?: bigint, Median?: bigint, Mean?: number, StandardDeviation?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Buckets: init?.Buckets ?? (null! as $.Slice<bucketData | $.VarRef<bucketData> | null>),
			Count: init?.Count ?? (0n as bigint),
			Median: init?.Median ?? (0n as bigint),
			Mean: init?.Mean ?? (0 as number),
			StandardDeviation: init?.StandardDeviation ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): data {
		return new data(this, true)
	}

	public __goscriptAssign(source: data): void {
		const target = this._fields
		const values = source._fields
		target.Buckets = values.Buckets
		target.Count = values.Count
		target.Median = values.Median
		target.Mean = values.Mean
		target.StandardDeviation = values.StandardDeviation
	}

	static __typeInfo = $.registerStructType(
		"trace.data",
		() => new data(),
		() => [],
		data,
		() => [/* @__PURE__ */ $.structField("Buckets", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("trace.bucketData")), [0], 0, true), /* @__PURE__ */ $.structField("Count", /* @__PURE__ */ $.basicType("int64"), [1], 24, true), /* @__PURE__ */ $.structField("Median", /* @__PURE__ */ $.basicType("int64"), [2], 32, true), /* @__PURE__ */ $.structField("Mean", /* @__PURE__ */ $.basicType("float64"), [3], 40, true), /* @__PURE__ */ $.structField("StandardDeviation", /* @__PURE__ */ $.basicType("float64"), [4], 48, true)]
	)
}

export const bucketCount: number = 38

export const maxHTMLBarWidth: number = 350

export function log2(i: bigint): number {
	let n = 0
	for (; i >= 256n; i = $.int64Shr(i, 8n)) {
		n = n + (8)
	}
	for (; i > 0n; i = $.int64Shr(i, 1n)) {
		n = n + (1)
	}
	return n
}

export function getBucket(i: bigint): number {
	let index: number = 0
	index = log2(i) - 1
	if (index < 0) {
		index = 0
	}
	if (index >= 38) {
		index = 37
	}
	return index
}

export function round(_in: number): bigint {
	return $.int64(math.Floor(_in + 0.5))
}

export function bucketBoundary(bucket: number): bigint {
	if (bucket == 0) {
		return 0n
	}
	return $.int64Shl(1n, bucket)
}

export let distTmplCache: template.Template | $.VarRef<template.Template> | null = null! as template.Template | $.VarRef<template.Template> | null

export function __goscript_set_distTmplCache(__goscriptValue: template.Template | $.VarRef<template.Template> | null): void {
	distTmplCache = __goscriptValue
}

export let distTmplOnce: $.VarRef<sync.Once> = $.varRef($.markAsStructValue(new sync.Once()))

export function __goscript_set_distTmplOnce(__goscriptValue: sync.Once): void {
	$.assignStruct(distTmplOnce.value, __goscriptValue)
}

export async function distTmpl(): globalThis.Promise<template.Template | $.VarRef<template.Template> | null> {
	await distTmplOnce.value.Do($.functionValue(async (): globalThis.Promise<void> => {
		// Input: data
		distTmplCache = template.Must(...((await template.Template.prototype.Parse.call(template.New("distTmpl"), "\n<table>\n<tr>\n    <td style=\"padding:0.25em\">Count: {{.Count}}</td>\n    <td style=\"padding:0.25em\">Mean: {{printf \"%.0f\" .Mean}}</td>\n    <td style=\"padding:0.25em\">StdDev: {{printf \"%.0f\" .StandardDeviation}}</td>\n    <td style=\"padding:0.25em\">Median: {{.Median}}</td>\n</tr>\n</table>\n<hr>\n<table>\n{{range $b := .Buckets}}\n{{if $b}}\n  <tr>\n    <td style=\"padding:0 0 0 0.25em\">[</td>\n    <td style=\"text-align:right;padding:0 0.25em\">{{.Lower}},</td>\n    <td style=\"text-align:right;padding:0 0.25em\">{{.Upper}})</td>\n    <td style=\"text-align:right;padding:0 0.25em\">{{.N}}</td>\n    <td style=\"text-align:right;padding:0 0.25em\">{{printf \"%#.3f\" .Pct}}%</td>\n    <td style=\"text-align:right;padding:0 0.25em\">{{printf \"%#.3f\" .CumulativePct}}%</td>\n    <td><div style=\"background-color: blue; height: 1em; width: {{.GraphWidth}};\"></div></td>\n  </tr>\n{{end}}\n{{end}}\n</table>\n")) as [template.Template | $.VarRef<template.Template> | null, $.GoError]))
	}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)))
	return distTmplCache
}
