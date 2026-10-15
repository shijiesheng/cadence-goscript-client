// Generated file based on tracer.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as time from "@goscript/time/index.js"

import * as log from "@goscript/github.com/opentracing/opentracing-go/log/index.js"

import * as __goscript_span from "./span.gs.ts"
import "@goscript/time/index.js"
import "@goscript/github.com/opentracing/opentracing-go/log/index.js"
import "./span.gs.ts"

$.registerTypePackagePath("github.com/opentracing/opentracing-go", ["opentracing.Tracer", "opentracing.StartSpanOptions", "opentracing.StartSpanOption", "opentracing.SpanReferenceType", "opentracing.SpanReference", "opentracing.StartTime", "opentracing.Tags", "opentracing.Tag"])

export type Tracer = {
	Extract(format: any, carrier: any): [__goscript_span.SpanContext | null, $.GoError]
	Inject(sm: __goscript_span.SpanContext | null, format: any, carrier: any): $.GoError
	StartSpan(operationName: string, opts: $.Slice<StartSpanOption | null>): __goscript_span.Span | null
}

$.registerInterfaceType(
	"opentracing.Tracer",
	null,
	[$.methodSignature("Extract", [["format", { kind: $.TypeKind.Interface, methods: [] }], ["carrier", { kind: $.TypeKind.Interface, methods: [] }]], ["opentracing.SpanContext", "error"]), $.methodSignature("Inject", [["sm", "opentracing.SpanContext"], ["format", { kind: $.TypeKind.Interface, methods: [] }], ["carrier", { kind: $.TypeKind.Interface, methods: [] }]], ["error"]), $.methodSignature("StartSpan", [["operationName", /* @__PURE__ */ $.basicType("string")], ["opts", /* @__PURE__ */ $.sliceType("opentracing.StartSpanOption")]], ["opentracing.Span"])]
);

export type StartSpanOption = {
	Apply(_p0: StartSpanOptions | $.VarRef<StartSpanOptions> | null): void
}

$.registerInterfaceType(
	"opentracing.StartSpanOption",
	null,
	[$.methodSignature("Apply", [/* @__PURE__ */ $.pointerType("opentracing.StartSpanOptions")])]
);

export type SpanReferenceType = number

export type Tags = globalThis.Map<string, any> | null

$.registerNamedType("opentracing.Tags", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), { kind: $.TypeKind.Interface, methods: [] }));

$.registerNamedValueType(
	"opentracing.Tags",
	{Apply: (receiver: any, ...args: any[]) => (Tags_Apply as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Apply", [["o", /* @__PURE__ */ $.pointerType("opentracing.StartSpanOptions")]])]
);

$.registerNamedValueType(
	"*opentracing.Tags",
	{Apply: (receiver: any, ...args: any[]) => (Tags_Apply as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Apply", [["o", /* @__PURE__ */ $.pointerType("opentracing.StartSpanOptions")]])]
);

export class StartSpanOptions {
	// Zero or more causal references to other Spans (via their SpanContext).
	// If empty, start a "root" Span (i.e., start a new trace).
	public get References(): $.Slice<SpanReference> {
		return this._fields.References
	}

	public set References(value: $.Slice<SpanReference>) {
		this._fields.References = value
	}

	// StartTime overrides the Span's start time, or implicitly becomes
	// time.Now() if StartTime.IsZero().
	public get StartTime(): time.Time {
		return this._fields.StartTime
	}

	public set StartTime(value: time.Time) {
		this._fields.StartTime = value
	}

	// Tags may have zero or more entries; the restrictions on map values are
	// identical to those for Span.SetTag(). May be nil.
	//
	// If specified, the caller hands off ownership of Tags at
	// StartSpan() invocation time.
	public get Tags(): globalThis.Map<string, any> | null {
		return this._fields.Tags
	}

	public set Tags(value: globalThis.Map<string, any> | null) {
		this._fields.Tags = value
	}

	public _fields: {
		References: $.Slice<SpanReference>
		StartTime: time.Time
		Tags: globalThis.Map<string, any> | null
	}

	constructor(init?: Partial<{References?: $.Slice<SpanReference>, StartTime?: time.Time, Tags?: globalThis.Map<string, any> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			References: init?.References ?? (null! as $.Slice<SpanReference>),
			StartTime: init?.StartTime ? $.markAsStructValue($.cloneStructValue(init.StartTime)) : $.markAsStructValue(new time.Time()),
			Tags: init?.Tags ?? (null! as globalThis.Map<string, any> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): StartSpanOptions {
		return new StartSpanOptions(this, true)
	}

	public __goscriptAssign(source: StartSpanOptions): void {
		const target = this._fields
		const values = source._fields
		target.References = values.References
		$.assignStruct(target.StartTime, values.StartTime)
		target.Tags = values.Tags
	}

	static __typeInfo = $.registerStructType(
		"opentracing.StartSpanOptions",
		() => new StartSpanOptions(),
		() => [],
		StartSpanOptions,
		() => [/* @__PURE__ */ $.structField("References", /* @__PURE__ */ $.sliceType("opentracing.SpanReference"), [0], 0, true), /* @__PURE__ */ $.structField("StartTime", "time.Time", [1], 24, true), /* @__PURE__ */ $.structField("Tags", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), { kind: $.TypeKind.Interface, methods: [] }), [2], 48, true)]
	)
}

export class SpanReference {
	public get Type(): SpanReferenceType {
		return this._fields.Type
	}

	public set Type(value: SpanReferenceType) {
		this._fields.Type = value
	}

	public get ReferencedContext(): __goscript_span.SpanContext | null {
		return this._fields.ReferencedContext
	}

	public set ReferencedContext(value: __goscript_span.SpanContext | null) {
		this._fields.ReferencedContext = value
	}

	public _fields: {
		Type: SpanReferenceType
		ReferencedContext: __goscript_span.SpanContext | null
	}

	constructor(init?: Partial<{Type?: SpanReferenceType, ReferencedContext?: __goscript_span.SpanContext | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Type: init?.Type ?? (0 as SpanReferenceType),
			ReferencedContext: init?.ReferencedContext ?? (null! as __goscript_span.SpanContext | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): SpanReference {
		return new SpanReference(this, true)
	}

	public __goscriptAssign(source: SpanReference): void {
		const target = this._fields
		const values = source._fields
		target.Type = values.Type
		target.ReferencedContext = $.assignFieldValue(target.ReferencedContext, values.ReferencedContext, "opentracing.SpanContext")
	}

	public Apply(o: StartSpanOptions | $.VarRef<StartSpanOptions> | null): void {
		const r = this;
		const o$: StartSpanOptions = o == null ? $.pointerTarget<StartSpanOptions>(o) : (o as any).__isVarRef === true ? (o as any).value : (o as any).__goValue === undefined ? (o as any) : $.pointerTarget<StartSpanOptions>(o)
		if (r.ReferencedContext != null) {
			;(o$ as StartSpanOptions).References = $.appendOne((o$ as StartSpanOptions).References, (r).clone())
		}
	}

	static __typeInfo = $.registerStructType(
		"opentracing.SpanReference",
		() => new SpanReference(),
		() => [$.methodSignature("Apply", [["o", /* @__PURE__ */ $.pointerType("opentracing.StartSpanOptions")]])],
		SpanReference,
		() => [/* @__PURE__ */ $.structField("Type", /* @__PURE__ */ $.basicType("int", "opentracing.SpanReferenceType"), [0], 0, true), /* @__PURE__ */ $.structField("ReferencedContext", "opentracing.SpanContext", [1], 8, true)]
	)
}

export class StartTime {
	public get wall(): bigint {
		return this._fields.wall
	}

	public set wall(value: bigint) {
		this._fields.wall = value
	}

	public get ext(): bigint {
		return this._fields.ext
	}

	public set ext(value: bigint) {
		this._fields.ext = value
	}

	public get loc(): time.Location | $.VarRef<time.Location> | null {
		return this._fields.loc
	}

	public set loc(value: time.Location | $.VarRef<time.Location> | null) {
		this._fields.loc = value
	}

	public _fields: {
		wall: bigint
		ext: bigint
		loc: time.Location | $.VarRef<time.Location> | null
	}

	constructor(init?: Partial<{wall?: bigint, ext?: bigint, loc?: time.Location | $.VarRef<time.Location> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			wall: init?.wall ?? (0n as bigint),
			ext: init?.ext ?? (0n as bigint),
			loc: init?.loc ?? (null! as time.Location | $.VarRef<time.Location> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): StartTime {
		return new StartTime(this, true)
	}

	public __goscriptAssign(source: StartTime): void {
		const target = this._fields
		const values = source._fields
		target.wall = values.wall
		target.ext = values.ext
		target.loc = values.loc
	}

	public Apply(o: StartSpanOptions | $.VarRef<StartSpanOptions> | null): void {
		const t = this;
		$.assignStruct($.pointerValue<StartSpanOptions>(o).StartTime, $.namedStructConversion<time.Time>(t))
	}

	static __typeInfo = $.registerStructType(
		"opentracing.StartTime",
		() => new StartTime(),
		() => [$.methodSignature("Apply", [["o", /* @__PURE__ */ $.pointerType("opentracing.StartSpanOptions")]])],
		StartTime,
		() => [/* @__PURE__ */ $.structField("wall", /* @__PURE__ */ $.basicType("uint64"), [0], 0, false, { pkgPath: "time" }), /* @__PURE__ */ $.structField("ext", /* @__PURE__ */ $.basicType("int64"), [1], 8, false, { pkgPath: "time" }), /* @__PURE__ */ $.structField("loc", /* @__PURE__ */ $.pointerType("time.Location"), [2], 16, false, { pkgPath: "time" })]
	)
}

export class Tag {
	public get Key(): string {
		return this._fields.Key
	}

	public set Key(value: string) {
		this._fields.Key = value
	}

	public get Value(): any {
		return this._fields.Value
	}

	public set Value(value: any) {
		this._fields.Value = value
	}

	public _fields: {
		Key: string
		Value: any
	}

	constructor(init?: Partial<{Key?: string, Value?: any}>, __goscriptValue?: boolean) {
		this._fields = {
			Key: init?.Key ?? ("" as string),
			Value: init?.Value ?? (null! as any)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Tag {
		return new Tag(this, true)
	}

	public __goscriptAssign(source: Tag): void {
		const target = this._fields
		const values = source._fields
		target.Key = values.Key
		target.Value = $.assignFieldValue(target.Value, values.Value, { kind: $.TypeKind.Interface, methods: [] })
	}

	public Apply(o: StartSpanOptions | $.VarRef<StartSpanOptions> | null): void {
		let t: Tag = this;
		const o$: StartSpanOptions = o == null ? $.pointerTarget<StartSpanOptions>(o) : (o as any).__isVarRef === true ? (o as any).value : (o as any).__goValue === undefined ? (o as any) : $.pointerTarget<StartSpanOptions>(o)
		if ((o$ as StartSpanOptions).Tags == null) {
			;(o$ as StartSpanOptions).Tags = $.makeMap<string, any>()
		}
		$.mapSet((o$ as StartSpanOptions).Tags, t.Key, t.Value)
	}

	public async Set(s: __goscript_span.Span | null): globalThis.Promise<void> {
		const t = this;
		void (__goscriptAwait = (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? (s as Exclude<__goscript_span.Span, null>) : $.pointerValue<Exclude<__goscript_span.Span, null>>(s)).SetTag(t.Key, t.Value), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	static __typeInfo = $.registerStructType(
		"opentracing.Tag",
		() => new Tag(),
		() => [$.methodSignature("Apply", [["o", /* @__PURE__ */ $.pointerType("opentracing.StartSpanOptions")]]), $.methodSignature("Set", [["s", "opentracing.Span"]])],
		Tag,
		() => [/* @__PURE__ */ $.structField("Key", /* @__PURE__ */ $.basicType("string"), [0], 0, true), /* @__PURE__ */ $.structField("Value", { kind: $.TypeKind.Interface, methods: [] }, [1], 16, true)]
	)
}

export const ChildOfRef: SpanReferenceType = 0

export const FollowsFromRef: SpanReferenceType = 1

export function ChildOf(sc: __goscript_span.SpanContext | null): SpanReference {
	return new SpanReference({Type: 0, ReferencedContext: sc}, true)
}

export function FollowsFrom(sc: __goscript_span.SpanContext | null): SpanReference {
	return new SpanReference({Type: 1, ReferencedContext: sc}, true)
}

export function Tags_Apply(t: Tags, o: StartSpanOptions | $.VarRef<StartSpanOptions> | null): void {
	const o$: StartSpanOptions = o == null ? $.pointerTarget<StartSpanOptions>(o) : (o as any).__isVarRef === true ? (o as any).value : (o as any).__goValue === undefined ? (o as any) : $.pointerTarget<StartSpanOptions>(o)
	if ((o$ as StartSpanOptions).Tags == null) {
		;(o$ as StartSpanOptions).Tags = $.makeMap<string, any>()
	}
	for (let [k, v] of t?.entries() ?? []) {
		$.mapSet((o$ as StartSpanOptions).Tags, k, v)
	}
}

var __goscriptAwait: any
