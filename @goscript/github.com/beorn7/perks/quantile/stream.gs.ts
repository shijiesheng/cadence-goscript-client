// Generated file based on stream.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as math from "@goscript/math/index.js"

import * as sort from "@goscript/sort/index.js"
import "@goscript/math/index.js"
import "@goscript/sort/index.js"

$.registerTypePackagePath("github.com/beorn7/perks/quantile", ["quantile.Sample", "quantile.Samples", "quantile.invariant", "quantile.target", "quantile.Stream", "quantile.stream"])

export type Samples = $.Slice<Sample>

$.registerNamedType("quantile.Samples", /* @__PURE__ */ $.sliceType("quantile.Sample"));

$.registerNamedValueType(
	"quantile.Samples",
	{Len: (receiver: any, ...args: any[]) => (Samples_Len as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Less: (receiver: any, ...args: any[]) => (Samples_Less as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Swap: (receiver: any, ...args: any[]) => (Samples_Swap as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Less", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Swap", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]])]
);

$.registerNamedValueType(
	"*quantile.Samples",
	{Len: (receiver: any, ...args: any[]) => (Samples_Len as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Less: (receiver: any, ...args: any[]) => (Samples_Less as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Swap: (receiver: any, ...args: any[]) => (Samples_Swap as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Less", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Swap", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]])]
);

export type invariant = ((s: stream | $.VarRef<stream> | null, r: number) => number | globalThis.Promise<number>) | null

export class Sample {
	public get Value(): number {
		return this._fields.Value
	}

	public set Value(value: number) {
		this._fields.Value = value
	}

	public get Width(): number {
		return this._fields.Width
	}

	public set Width(value: number) {
		this._fields.Width = value
	}

	public get Delta(): number {
		return this._fields.Delta
	}

	public set Delta(value: number) {
		this._fields.Delta = value
	}

	public _fields: {
		Value: number
		Width: number
		Delta: number
	}

	constructor(init?: Partial<{Value?: number, Width?: number, Delta?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Value: init?.Value ?? (0 as number),
			Width: init?.Width ?? (0 as number),
			Delta: init?.Delta ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Sample {
		return new Sample(this, true)
	}

	public __goscriptAssign(source: Sample): void {
		const target = this._fields
		const values = source._fields
		target.Value = values.Value
		target.Width = values.Width
		target.Delta = values.Delta
	}

	static __typeInfo = $.registerStructType(
		"quantile.Sample",
		() => new Sample(),
		() => [],
		Sample,
		() => [/* @__PURE__ */ $.structField("Value", /* @__PURE__ */ $.basicType("float64"), [0], 0, true, { tag: "json:\",string\"" }), /* @__PURE__ */ $.structField("Width", /* @__PURE__ */ $.basicType("float64"), [1], 8, true, { tag: "json:\",string\"" }), /* @__PURE__ */ $.structField("Delta", /* @__PURE__ */ $.basicType("float64"), [2], 16, true, { tag: "json:\",string\"" })]
	)
}

export class target {
	public get quantile(): number {
		return this._fields.quantile
	}

	public set quantile(value: number) {
		this._fields.quantile = value
	}

	public get epsilon(): number {
		return this._fields.epsilon
	}

	public set epsilon(value: number) {
		this._fields.epsilon = value
	}

	public _fields: {
		quantile: number
		epsilon: number
	}

	constructor(init?: Partial<{quantile?: number, epsilon?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			quantile: init?.quantile ?? (0 as number),
			epsilon: init?.epsilon ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): target {
		return new target(this, true)
	}

	public __goscriptAssign(source: target): void {
		const target = this._fields
		const values = source._fields
		target.quantile = values.quantile
		target.epsilon = values.epsilon
	}

	static __typeInfo = $.registerStructType(
		"quantile.target",
		() => new target(),
		() => [],
		target,
		() => [/* @__PURE__ */ $.structField("quantile", /* @__PURE__ */ $.basicType("float64"), [0], 0, false, { pkgPath: "github.com/beorn7/perks/quantile" }), /* @__PURE__ */ $.structField("epsilon", /* @__PURE__ */ $.basicType("float64"), [1], 8, false, { pkgPath: "github.com/beorn7/perks/quantile" })]
	)
}

export class Stream {
	public get stream(): stream | $.VarRef<stream> | null {
		return this._fields.stream
	}

	public set stream(value: stream | $.VarRef<stream> | null) {
		this._fields.stream = value
	}

	public get b(): Samples {
		return this._fields.b
	}

	public set b(value: Samples) {
		this._fields.b = value
	}

	public get sorted(): boolean {
		return this._fields.sorted
	}

	public set sorted(value: boolean) {
		this._fields.sorted = value
	}

	public _fields: {
		stream: stream | $.VarRef<stream> | null
		b: Samples
		sorted: boolean
	}

	constructor(init?: Partial<{stream?: stream | $.VarRef<stream> | null, b?: Samples, sorted?: boolean}>, __goscriptValue?: boolean) {
		this._fields = {
			stream: init?.stream ?? (null! as stream | $.VarRef<stream> | null),
			b: init?.b ?? (null! as Samples),
			sorted: init?.sorted ?? (false as boolean)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Stream {
		return new Stream(this, true)
	}

	public __goscriptAssign(source: Stream): void {
		const target = this._fields
		const values = source._fields
		target.stream = values.stream
		target.b = values.b
		target.sorted = values.sorted
	}

	public Count(): number {
		const s: Stream | $.VarRef<Stream> | null = this;
		const s$: Stream = s == null ? $.pointerTarget<Stream>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<Stream>(s)
		return $.sliceLen(((s$ as Stream).b as Samples)) + stream.prototype.count.call((s$ as Stream).stream)
	}

	public async Insert(v: number): globalThis.Promise<void> {
		const s: Stream | $.VarRef<Stream> | null = this;
		await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as Stream).insert(new Sample({Value: v, Width: 1}, true)) : Stream.prototype.insert.call(s, new Sample({Value: v, Width: 1}, true)))
	}

	public async Merge(samples: Samples): globalThis.Promise<void> {
		const s: Stream | $.VarRef<Stream> | null = this;
		await sort.Sort($.pointerValueOrNil($.namedValueInterfaceValue<sort.Interface | null>(samples, "quantile.Samples", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()))!)
		await stream.prototype.merge.call($.pointerValue<Stream>(s).stream, (samples as Samples))
	}

	public async Query(q: number): globalThis.Promise<number> {
		const s: Stream | $.VarRef<Stream> | null = this;
		const s$: Stream = s == null ? $.pointerTarget<Stream>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<Stream>(s)
		if (!(s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as Stream).flushed() : Stream.prototype.flushed.call(s))) {
			// Fast path when there hasn't been enough data for a flush;
			// this also yields better accuracy for small sets of data.
			let l = $.sliceLen(((s$ as Stream).b as Samples))
			if (l == 0) {
				return 0
			}
			let i = $.int(math.Ceil(l * q))
			if (i > 0) {
				i = i - (1)
			}
			await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as Stream).maybeSort() : Stream.prototype.maybeSort.call(s))
			return $.arrayIndex((s$ as Stream).b!, i).Value
		}
		await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as Stream).flush() : Stream.prototype.flush.call(s))
		return stream.prototype.query.call((s$ as Stream).stream, q)
	}

	public Reset(): void {
		let s: Stream | $.VarRef<Stream> | null = this;
		const s$: Stream = s == null ? $.pointerTarget<Stream>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<Stream>(s)
		stream.prototype.reset.call((s$ as Stream).stream);
		;(s$ as Stream).b = ($.goSlice((s$ as Stream).b, undefined, 0) as Samples)
	}

	public async Samples(): globalThis.Promise<Samples> {
		const s: Stream | $.VarRef<Stream> | null = this;
		const s$: Stream = s == null ? $.pointerTarget<Stream>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<Stream>(s)
		if (!(s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as Stream).flushed() : Stream.prototype.flushed.call(s))) {
			return ((s$ as Stream).b as Samples)
		}
		await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as Stream).flush() : Stream.prototype.flush.call(s))
		return (stream.prototype.samples.call((s$ as Stream).stream) as Samples)
	}

	public async flush(): globalThis.Promise<void> {
		let s: Stream | $.VarRef<Stream> | null = this;
		const s$: Stream = s == null ? $.pointerTarget<Stream>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<Stream>(s)
		await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as Stream).maybeSort() : Stream.prototype.maybeSort.call(s))
		await stream.prototype.merge.call((s$ as Stream).stream, ((s$ as Stream).b as Samples));
		;(s$ as Stream).b = ($.goSlice((s$ as Stream).b, undefined, 0) as Samples)
	}

	public flushed(): boolean {
		const s: Stream | $.VarRef<Stream> | null = this;
		return $.sliceLen($.pointerValue<stream>($.pointerValue<Stream>(s).stream).l) > 0
	}

	public async insert(sample: Sample): globalThis.Promise<void> {
		let s: Stream | $.VarRef<Stream> | null = this;
		const s$: Stream = s == null ? $.pointerTarget<Stream>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<Stream>(s);
		;(s$ as Stream).b = ($.appendOne(((s$ as Stream).b as Samples), (sample).clone()) as Samples);
		;(s$ as Stream).sorted = false
		if ($.sliceLen(((s$ as Stream).b as Samples)) == $.cap(((s$ as Stream).b as Samples))) {
			await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as Stream).flush() : Stream.prototype.flush.call(s))
		}
	}

	public async maybeSort(): globalThis.Promise<void> {
		let s: Stream | $.VarRef<Stream> | null = this;
		const s$: Stream = s == null ? $.pointerTarget<Stream>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<Stream>(s)
		if (!(s$ as Stream).sorted) {
			;(s$ as Stream).sorted = true
			await sort.Sort($.pointerValueOrNil($.namedValueInterfaceValue<sort.Interface | null>((s$ as Stream).b, "quantile.Samples", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()))!)
		}
	}

	public async compress(): globalThis.Promise<any> {
		return await $.pointerValue<stream>(this.stream).compress()
	}

	public count(): any {
		return $.pointerValue<stream>(this.stream).count()
	}

	public async merge(samples: any): globalThis.Promise<any> {
		return await $.pointerValue<stream>(this.stream).merge(samples)
	}

	public async query(q: any): globalThis.Promise<any> {
		return await $.pointerValue<stream>(this.stream).query(q)
	}

	public reset(): any {
		return $.pointerValue<stream>(this.stream).reset()
	}

	public samples(): any {
		return $.pointerValue<stream>(this.stream).samples()
	}

	static __typeInfo = $.registerStructType(
		"quantile.Stream",
		() => new Stream(),
		() => [$.methodSignature("Count", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("Insert", [["v", /* @__PURE__ */ $.basicType("float64")]], [], true), $.methodSignature("Merge", [["samples", /* @__PURE__ */ $.sliceType("quantile.Sample", "quantile.Samples")]], [], true), $.methodSignature("Query", [["q", /* @__PURE__ */ $.basicType("float64")]], [/* @__PURE__ */ $.basicType("float64")], true), $.methodSignature("Reset", [], [], true), $.methodSignature("Samples", [], [/* @__PURE__ */ $.sliceType("quantile.Sample", "quantile.Samples")], true), $.methodSignature("flush", [], [], true), $.methodSignature("flushed", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("insert", [["sample", "quantile.Sample"]], [], true), $.methodSignature("maybeSort", [], [], true), $.methodSignature("compress"), $.methodSignature("count", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("merge", [["samples", /* @__PURE__ */ $.sliceType("quantile.Sample", "quantile.Samples")]]), $.methodSignature("query", [["q", /* @__PURE__ */ $.basicType("float64")]], [/* @__PURE__ */ $.basicType("float64")]), $.methodSignature("reset"), $.methodSignature("samples", [], [/* @__PURE__ */ $.sliceType("quantile.Sample", "quantile.Samples")])],
		Stream,
		() => [/* @__PURE__ */ $.structField("stream", /* @__PURE__ */ $.pointerType("quantile.stream"), [0], 0, false, { pkgPath: "github.com/beorn7/perks/quantile", anonymous: true }), /* @__PURE__ */ $.structField("b", /* @__PURE__ */ $.sliceType("quantile.Sample", "quantile.Samples"), [1], 8, false, { pkgPath: "github.com/beorn7/perks/quantile" }), /* @__PURE__ */ $.structField("sorted", /* @__PURE__ */ $.basicType("bool"), [2], 32, false, { pkgPath: "github.com/beorn7/perks/quantile" })]
	)
}

export class stream {
	public get n(): number {
		return this._fields.n
	}

	public set n(value: number) {
		this._fields.n = value
	}

	public get l(): $.Slice<Sample> {
		return this._fields.l
	}

	public set l(value: $.Slice<Sample>) {
		this._fields.l = value
	}

	public get _u192(): ((s: stream | $.VarRef<stream> | null, r: number) => number | globalThis.Promise<number>) | null {
		return this._fields._u192
	}

	public set _u192(value: ((s: stream | $.VarRef<stream> | null, r: number) => number | globalThis.Promise<number>) | null) {
		this._fields._u192 = value
	}

	public _fields: {
		n: number
		l: $.Slice<Sample>
		_u192: ((s: stream | $.VarRef<stream> | null, r: number) => number | globalThis.Promise<number>) | null
	}

	constructor(init?: Partial<{n?: number, l?: $.Slice<Sample>, _u192?: ((s: stream | $.VarRef<stream> | null, r: number) => number | globalThis.Promise<number>) | null}>, __goscriptValue?: boolean) {
		this._fields = {
			n: init?.n ?? (0 as number),
			l: init?.l ?? (null! as $.Slice<Sample>),
			_u192: init?._u192 ?? (null! as ((s: stream | $.VarRef<stream> | null, r: number) => number | globalThis.Promise<number>) | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): stream {
		return new stream(this, true)
	}

	public __goscriptAssign(source: stream): void {
		const target = this._fields
		const values = source._fields
		target.n = values.n
		target.l = values.l
		target._u192 = values._u192
	}

	public async compress(): globalThis.Promise<void> {
		let s: stream | $.VarRef<stream> | null = this;
		const s$: stream = s == null ? $.pointerTarget<stream>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<stream>(s)
		if ($.sliceLen((s$ as stream).l) < 2) {
			return
		}
		let x = ($.arrayIndex((s$ as stream).l!, $.sliceLen((s$ as stream).l) - 1)).clone()
		let xi = $.sliceLen((s$ as stream).l) - 1
		let r = ((s$ as stream).n - 1) - x.Width

		for (let i = $.sliceLen((s$ as stream).l) - 2; i >= 0; i--) {
			let c = ($.arrayIndex((s$ as stream).l!, i)).clone()
			if (((c.Width + x.Width) + x.Delta) <= (__goscriptAwait = (s$ as stream)._u192!(s, r), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
				x.Width = x.Width + (c.Width)
				$.assignStruct($.sliceElems((s$ as stream).l!)[$.sliceSlot((s$ as stream).l!, xi)], x)
				// Remove element at i.
				$.copy($.goSlice((s$ as stream).l, i, undefined), $.goSlice((s$ as stream).l, i + 1, undefined));
				;(s$ as stream).l = $.goSlice((s$ as stream).l, undefined, $.sliceLen((s$ as stream).l) - 1)
				xi = xi - (1)
			} else {
				x = $.assignStruct(x, c)
				xi = i
			}
			r = r - (c.Width)
		}
	}

	public count(): number {
		const s: stream | $.VarRef<stream> | null = this;
		return $.int($.pointerValue<stream>(s).n)
	}

	public async insert(v: number): globalThis.Promise<void> {
		const s: stream | $.VarRef<stream> | null = this;
		await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as stream).merge(($.arrayToSlice<Sample>([new Sample({Value: v, Width: 1, Delta: 0}, true)]) as Samples)) : stream.prototype.merge.call(s, ($.arrayToSlice<Sample>([new Sample({Value: v, Width: 1, Delta: 0}, true)]) as Samples)))
	}

	public async merge(samples: Samples): globalThis.Promise<void> {
		let s: stream | $.VarRef<stream> | null = this;
		const s$: stream = s == null ? $.pointerTarget<stream>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<stream>(s)
		// TODO(beorn7): This tries to merge not only individual samples, but
		// whole summaries. The paper doesn't mention merging summaries at
		// all. Unittests show that the merging is inaccurate. Find out how to
		// do merges properly.
		let r: number = 0
		let i = 0
		for (let __goscriptRangeTarget1 = samples, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
			let sample = ((__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as Sample)).clone()
			inserted: {
				for (; i < $.sliceLen((s$ as stream).l); i++) {
					let c = ($.arrayIndex((s$ as stream).l!, i)).clone()
					if (c.Value > sample.Value) {
						// Insert at position i.
						;(s$ as stream).l = $.appendOne((s$ as stream).l, new Sample(undefined, true))
						$.copy($.goSlice((s$ as stream).l, i + 1, undefined), $.goSlice((s$ as stream).l, i, undefined))
						$.assignStruct($.sliceElems((s$ as stream).l!)[$.sliceSlot((s$ as stream).l!, i)], (await (async () => { const __goscriptLiteralField0 = math.Max(sample.Delta, math.Floor((__goscriptAwait = (s$ as stream)._u192!(s, r), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) - 1); return new Sample({Value: sample.Value, Width: sample.Width, Delta: __goscriptLiteralField0}, true) })()))
						i++
						break inserted
					}
					r = r + (c.Width)
				}
				;(s$ as stream).l = $.appendOne((s$ as stream).l, new Sample({Value: sample.Value, Width: sample.Width, Delta: 0}, true))
				i++
			}
			;(s$ as stream).n = (s$ as stream).n + (sample.Width)
			r = r + (sample.Width)
		}
		await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as stream).compress() : stream.prototype.compress.call(s))
	}

	public async query(q: number): globalThis.Promise<number> {
		const s: stream | $.VarRef<stream> | null = this;
		const s$: stream = s == null ? $.pointerTarget<stream>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<stream>(s)
		let t = math.Ceil(q * (s$ as stream).n)
		t = t + (math.Ceil((__goscriptAwait = (s$ as stream)._u192!(s, t), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) / 2))
		let p = ($.arrayIndex((s$ as stream).l!, 0)).clone()
		let r: number = 0
		for (let __goscriptRangeTarget2 = $.goSlice((s$ as stream).l, 1, undefined), __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow2.length; __rangeIndex++) {
			let c = ((__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + __rangeIndex] as Sample)).clone()
			r = r + (p.Width)
			if (((r + c.Width) + c.Delta) > t) {
				return p.Value
			}
			p = $.assignStruct(p, c)
		}
		return p.Value
	}

	public reset(): void {
		let s: stream | $.VarRef<stream> | null = this;
		const s$: stream = s == null ? $.pointerTarget<stream>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<stream>(s);
		;(s$ as stream).l = $.goSlice((s$ as stream).l, undefined, 0);
		;(s$ as stream).n = 0
	}

	public samples(): Samples {
		const s: stream | $.VarRef<stream> | null = this;
		const s$: stream = s == null ? $.pointerTarget<stream>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<stream>(s)
		let samples: Samples = ($.makeSlice<Sample>($.sliceLen((s$ as stream).l), undefined, undefined, () => new Sample(undefined, true)) as Samples)
		$.copy((samples as Samples), (s$ as stream).l)
		return (samples as Samples)
	}

	static __typeInfo = $.registerStructType(
		"quantile.stream",
		() => new stream(),
		() => [$.methodSignature("compress", [], [], true), $.methodSignature("count", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("insert", [["v", /* @__PURE__ */ $.basicType("float64")]], [], true), $.methodSignature("merge", [["samples", /* @__PURE__ */ $.sliceType("quantile.Sample", "quantile.Samples")]], [], true), $.methodSignature("query", [["q", /* @__PURE__ */ $.basicType("float64")]], [/* @__PURE__ */ $.basicType("float64")], true), $.methodSignature("reset", [], [], true), $.methodSignature("samples", [], [/* @__PURE__ */ $.sliceType("quantile.Sample", "quantile.Samples")], true)],
		stream,
		() => [/* @__PURE__ */ $.structField("n", /* @__PURE__ */ $.basicType("float64"), [0], 0, false, { pkgPath: "github.com/beorn7/perks/quantile" }), /* @__PURE__ */ $.structField("l", /* @__PURE__ */ $.sliceType("quantile.Sample"), [1], 8, false, { pkgPath: "github.com/beorn7/perks/quantile" }), /* @__PURE__ */ $.structField("ƒ", ({ kind: $.TypeKind.Function, name: "quantile.invariant", params: [/* @__PURE__ */ $.pointerType("quantile.stream"), /* @__PURE__ */ $.basicType("float64")], results: [/* @__PURE__ */ $.basicType("float64")] } as $.FunctionTypeInfo), [2], 32, false, { key: "_u192", pkgPath: "github.com/beorn7/perks/quantile" })]
	)
}

export function Samples_Len(a: Samples): number {
	return $.sliceLen((a as Samples))
}

export function Samples_Less(a: Samples, i: number, j: number): boolean {
	return $.arrayIndex(a!, i).Value < $.arrayIndex(a!, j).Value
}

export function Samples_Swap(a: Samples, i: number, j: number): void {
	let __goscriptAssign0_0: Sample = ($.arrayIndex(a!, j)).clone()
	let __goscriptAssign0_1: Sample = ($.arrayIndex(a!, i)).clone()
	$.assignStruct($.sliceElems(a!)[$.sliceSlot(a!, i)], __goscriptAssign0_0)
	$.assignStruct($.sliceElems(a!)[$.sliceSlot(a!, j)], __goscriptAssign0_1)
}

export function NewLowBiased(epsilon: number): Stream | $.VarRef<Stream> | null {
	let _u192: ((s: stream | $.VarRef<stream> | null, r: number) => number | globalThis.Promise<number>) | null = $.functionValue((s: stream | $.VarRef<stream> | null, r: number): number => {
		return (2 * epsilon) * r
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("quantile.stream"), /* @__PURE__ */ $.basicType("float64")], results: [/* @__PURE__ */ $.basicType("float64")] } as $.FunctionTypeInfo))
	return newStream(_u192)
}

export function NewHighBiased(epsilon: number): Stream | $.VarRef<Stream> | null {
	let _u192: ((s: stream | $.VarRef<stream> | null, r: number) => number | globalThis.Promise<number>) | null = $.functionValue((s: stream | $.VarRef<stream> | null, r: number): number => {
		return (2 * epsilon) * ($.pointerValue<stream>(s).n - r)
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("quantile.stream"), /* @__PURE__ */ $.basicType("float64")], results: [/* @__PURE__ */ $.basicType("float64")] } as $.FunctionTypeInfo))
	return newStream(_u192)
}

export function NewTargeted(targetMap: globalThis.Map<number, number> | null): Stream | $.VarRef<Stream> | null {
	// Convert map to slice to avoid slow iterations on a map.
	// ƒ is called on the hot path, so converting the map to a slice
	// beforehand results in significant CPU savings.
	let targets: $.Slice<target> = targetMapToSlice(targetMap)

	let _u192: ((s: stream | $.VarRef<stream> | null, r: number) => number | globalThis.Promise<number>) | null = $.functionValue((s: stream | $.VarRef<stream> | null, r: number): number => {
		let m: number = math.MaxFloat64
		let f: number = 0
		for (let __goscriptRangeTarget0 = targets, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
			let t = ((__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as target)).clone()
			if ((t.quantile * $.pointerValue<stream>(s).n) <= r) {
				f = ((2 * t.epsilon) * r) / t.quantile
			} else {
				f = ((2 * t.epsilon) * ($.pointerValue<stream>(s).n - r)) / (1 - t.quantile)
			}
			if (f < m) {
				m = f
			}
		}
		return m
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("quantile.stream"), /* @__PURE__ */ $.basicType("float64")], results: [/* @__PURE__ */ $.basicType("float64")] } as $.FunctionTypeInfo))
	return newStream(_u192)
}

export function targetMapToSlice(targetMap: globalThis.Map<number, number> | null): $.Slice<target> {
	let targets: $.Slice<target> = $.makeSlice<target>(0, $.len(targetMap), undefined, () => new target(undefined, true))

	for (const [quantile, epsilon] of targetMap?.entries() ?? []) {
		let t = new target({quantile: quantile, epsilon: epsilon}, true)
		targets = $.appendOne(targets, (t).clone())
	}

	return targets
}

export function newStream(_u192: invariant | null): Stream | $.VarRef<Stream> | null {
	let x: stream | $.VarRef<stream> | null = new stream({_u192: _u192})
	return new Stream({stream: x, b: ($.makeSlice<Sample>(0, 500, undefined, () => new Sample(undefined, true)) as Samples), sorted: true})
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({Len: (receiver: any, ...args: any[]) => (Samples_Len as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Less: (receiver: any, ...args: any[]) => (Samples_Less as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Swap: (receiver: any, ...args: any[]) => (Samples_Swap as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.sliceType("quantile.Sample", "quantile.Samples"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Less", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Swap", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]])])
}

var __goscriptAwait: any
