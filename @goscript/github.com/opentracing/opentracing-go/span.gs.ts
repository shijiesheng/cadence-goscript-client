// Generated file based on span.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as time from "@goscript/time/index.js"

import * as log from "@goscript/github.com/opentracing/opentracing-go/log/index.js"

import * as __goscript_tracer from "./tracer.gs.ts"
import "@goscript/time/index.js"
import "@goscript/github.com/opentracing/opentracing-go/log/index.js"
import "./tracer.gs.ts"

$.registerTypePackagePath("github.com/opentracing/opentracing-go", ["opentracing.SpanContext", "opentracing.Span", "opentracing.LogRecord", "opentracing.FinishOptions", "opentracing.LogData"])

export type SpanContext = {
	ForeachBaggageItem(handler: ((k: string, v: string) => boolean | globalThis.Promise<boolean>) | null): void
}

$.registerInterfaceType(
	"opentracing.SpanContext",
	null,
	[$.methodSignature("ForeachBaggageItem", [["handler", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)]])]
);

export type Span = {
	BaggageItem(restrictedKey: string): string
	Context(): SpanContext | null
	Finish(): void
	FinishWithOptions(opts: FinishOptions): void
	Log(data: LogData): void
	LogEvent(event: string): void
	LogEventWithPayload(event: string, payload: any): void
	LogFields(fields: $.Slice<log.Field>): void
	LogKV(alternatingKeyValues: $.Slice<any>): void
	SetBaggageItem(restrictedKey: string, value: string): Span | null
	SetOperationName(operationName: string): Span | null
	SetTag(key: string, value: any): Span | null
	Tracer(): __goscript_tracer.Tracer | null
}

$.registerInterfaceType(
	"opentracing.Span",
	null,
	[$.methodSignature("BaggageItem", [["restrictedKey", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Context", [], ["opentracing.SpanContext"]), $.methodSignature("Finish"), $.methodSignature("FinishWithOptions", [["opts", "opentracing.FinishOptions"]]), $.methodSignature("Log", [["data", "opentracing.LogData"]]), $.methodSignature("LogEvent", [["event", /* @__PURE__ */ $.basicType("string")]]), $.methodSignature("LogEventWithPayload", [["event", /* @__PURE__ */ $.basicType("string")], ["payload", { kind: $.TypeKind.Interface, methods: [] }]]), $.methodSignature("LogFields", [["fields", /* @__PURE__ */ $.sliceType("log.Field")]]), $.methodSignature("LogKV", [["alternatingKeyValues", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]]), $.methodSignature("SetBaggageItem", [["restrictedKey", /* @__PURE__ */ $.basicType("string")], ["value", /* @__PURE__ */ $.basicType("string")]], ["opentracing.Span"]), $.methodSignature("SetOperationName", [["operationName", /* @__PURE__ */ $.basicType("string")]], ["opentracing.Span"]), $.methodSignature("SetTag", [["key", /* @__PURE__ */ $.basicType("string")], ["value", { kind: $.TypeKind.Interface, methods: [] }]], ["opentracing.Span"]), $.methodSignature("Tracer", [], ["opentracing.Tracer"])]
);

export class LogRecord {
	public get Timestamp(): time.Time {
		return this._fields.Timestamp
	}

	public set Timestamp(value: time.Time) {
		this._fields.Timestamp = value
	}

	public get Fields(): $.Slice<log.Field> {
		return this._fields.Fields
	}

	public set Fields(value: $.Slice<log.Field>) {
		this._fields.Fields = value
	}

	public _fields: {
		Timestamp: time.Time
		Fields: $.Slice<log.Field>
	}

	constructor(init?: Partial<{Timestamp?: time.Time, Fields?: $.Slice<log.Field>}>, __goscriptValue?: boolean) {
		this._fields = {
			Timestamp: init?.Timestamp ? $.markAsStructValue($.cloneStructValue(init.Timestamp)) : $.markAsStructValue(new time.Time()),
			Fields: init?.Fields ?? (null! as $.Slice<log.Field>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): LogRecord {
		return new LogRecord(this, true)
	}

	public __goscriptAssign(source: LogRecord): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.Timestamp, values.Timestamp)
		target.Fields = values.Fields
	}

	static __typeInfo = $.registerStructType(
		"opentracing.LogRecord",
		() => new LogRecord(),
		() => [],
		LogRecord,
		() => [/* @__PURE__ */ $.structField("Timestamp", "time.Time", [0], 0, true), /* @__PURE__ */ $.structField("Fields", /* @__PURE__ */ $.sliceType("log.Field"), [1], 24, true)]
	)
}

export class FinishOptions {
	// FinishTime overrides the Span's finish time, or implicitly becomes
	// time.Now() if FinishTime.IsZero().
	//
	// FinishTime must resolve to a timestamp that's >= the Span's StartTime
	// (per StartSpanOptions).
	public get FinishTime(): time.Time {
		return this._fields.FinishTime
	}

	public set FinishTime(value: time.Time) {
		this._fields.FinishTime = value
	}

	// LogRecords allows the caller to specify the contents of many LogFields()
	// calls with a single slice. May be nil.
	//
	// None of the LogRecord.Timestamp values may be .IsZero() (i.e., they must
	// be set explicitly). Also, they must be >= the Span's start timestamp and
	// <= the FinishTime (or time.Now() if FinishTime.IsZero()). Otherwise the
	// behavior of FinishWithOptions() is undefined.
	//
	// If specified, the caller hands off ownership of LogRecords at
	// FinishWithOptions() invocation time.
	//
	// If specified, the (deprecated) BulkLogData must be nil or empty.
	public get LogRecords(): $.Slice<LogRecord> {
		return this._fields.LogRecords
	}

	public set LogRecords(value: $.Slice<LogRecord>) {
		this._fields.LogRecords = value
	}

	// BulkLogData is DEPRECATED.
	public get BulkLogData(): $.Slice<LogData> {
		return this._fields.BulkLogData
	}

	public set BulkLogData(value: $.Slice<LogData>) {
		this._fields.BulkLogData = value
	}

	public _fields: {
		FinishTime: time.Time
		LogRecords: $.Slice<LogRecord>
		BulkLogData: $.Slice<LogData>
	}

	constructor(init?: Partial<{FinishTime?: time.Time, LogRecords?: $.Slice<LogRecord>, BulkLogData?: $.Slice<LogData>}>, __goscriptValue?: boolean) {
		this._fields = {
			FinishTime: init?.FinishTime ? $.markAsStructValue($.cloneStructValue(init.FinishTime)) : $.markAsStructValue(new time.Time()),
			LogRecords: init?.LogRecords ?? (null! as $.Slice<LogRecord>),
			BulkLogData: init?.BulkLogData ?? (null! as $.Slice<LogData>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): FinishOptions {
		return new FinishOptions(this, true)
	}

	public __goscriptAssign(source: FinishOptions): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.FinishTime, values.FinishTime)
		target.LogRecords = values.LogRecords
		target.BulkLogData = values.BulkLogData
	}

	static __typeInfo = $.registerStructType(
		"opentracing.FinishOptions",
		() => new FinishOptions(),
		() => [],
		FinishOptions,
		() => [/* @__PURE__ */ $.structField("FinishTime", "time.Time", [0], 0, true), /* @__PURE__ */ $.structField("LogRecords", /* @__PURE__ */ $.sliceType("opentracing.LogRecord"), [1], 24, true), /* @__PURE__ */ $.structField("BulkLogData", /* @__PURE__ */ $.sliceType("opentracing.LogData"), [2], 48, true)]
	)
}

export class LogData {
	public get Timestamp(): time.Time {
		return this._fields.Timestamp
	}

	public set Timestamp(value: time.Time) {
		this._fields.Timestamp = value
	}

	public get Event(): string {
		return this._fields.Event
	}

	public set Event(value: string) {
		this._fields.Event = value
	}

	public get Payload(): any {
		return this._fields.Payload
	}

	public set Payload(value: any) {
		this._fields.Payload = value
	}

	public _fields: {
		Timestamp: time.Time
		Event: string
		Payload: any
	}

	constructor(init?: Partial<{Timestamp?: time.Time, Event?: string, Payload?: any}>, __goscriptValue?: boolean) {
		this._fields = {
			Timestamp: init?.Timestamp ? $.markAsStructValue($.cloneStructValue(init.Timestamp)) : $.markAsStructValue(new time.Time()),
			Event: init?.Event ?? ("" as string),
			Payload: init?.Payload ?? (null! as any)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): LogData {
		return new LogData(this, true)
	}

	public __goscriptAssign(source: LogData): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.Timestamp, values.Timestamp)
		target.Event = values.Event
		target.Payload = $.assignFieldValue(target.Payload, values.Payload, { kind: $.TypeKind.Interface, methods: [] })
	}

	public ToLogRecord(): LogRecord {
		const ld: LogData | $.VarRef<LogData> | null = this;
		const ld$: LogData = ld == null ? $.pointerTarget<LogData>(ld) : (ld as any).__isVarRef === true ? (ld as any).value : (ld as any).__goValue === undefined ? (ld as any) : $.pointerTarget<LogData>(ld)
		let literalTimestamp: time.Time = $.markAsStructValue(new time.Time())
		if ($.markAsStructValue($.cloneStructValue((ld$ as LogData).Timestamp)).IsZero()) {
			literalTimestamp = $.assignStruct(literalTimestamp, time.Now())
		} else {
			literalTimestamp = $.assignStruct(literalTimestamp, (ld$ as LogData).Timestamp)
		}
		let rval = new LogRecord({Timestamp: $.markAsStructValue($.cloneStructValue(literalTimestamp))}, true)
		if ((ld$ as LogData).Payload == null) {
			rval.Fields = $.arrayToSlice<log.Field>([log.String("event", (ld$ as LogData).Event)])
		} else {
			rval.Fields = $.arrayToSlice<log.Field>([log.String("event", (ld$ as LogData).Event), log.Object("payload", (ld$ as LogData).Payload)])
		}
		return (rval).clone()
	}

	static __typeInfo = $.registerStructType(
		"opentracing.LogData",
		() => new LogData(),
		() => [$.methodSignature("ToLogRecord", [], ["opentracing.LogRecord"], true)],
		LogData,
		() => [/* @__PURE__ */ $.structField("Timestamp", "time.Time", [0], 0, true), /* @__PURE__ */ $.structField("Event", /* @__PURE__ */ $.basicType("string"), [1], 24, true), /* @__PURE__ */ $.structField("Payload", { kind: $.TypeKind.Interface, methods: [] }, [2], 40, true)]
	)
}
