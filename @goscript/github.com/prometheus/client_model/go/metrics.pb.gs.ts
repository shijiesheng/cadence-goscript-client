// Generated file based on metrics.pb.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as protoreflect from "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"

import * as protoimpl from "@goscript/google.golang.org/protobuf/runtime/protoimpl/index.js"

import * as timestamppb from "@goscript/google.golang.org/protobuf/types/known/timestamppb/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as sync from "@goscript/sync/index.js"

import * as filedesc from "@goscript/google.golang.org/protobuf/internal/filedesc/index.js"

import * as filetype from "@goscript/google.golang.org/protobuf/internal/filetype/index.js"

import * as impl from "@goscript/google.golang.org/protobuf/internal/impl/index.js"
import "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"
import "@goscript/google.golang.org/protobuf/runtime/protoimpl/index.js"
import "@goscript/google.golang.org/protobuf/types/known/timestamppb/index.js"
import "@goscript/reflect/index.js"
import "@goscript/sync/index.js"
import "@goscript/google.golang.org/protobuf/internal/filedesc/index.js"
import "@goscript/google.golang.org/protobuf/internal/filetype/index.js"
import "@goscript/google.golang.org/protobuf/internal/impl/index.js"

$.registerTypePackagePath("github.com/prometheus/client_model/go", ["io_prometheus_client.MetricType", "io_prometheus_client.LabelPair", "io_prometheus_client.Gauge", "io_prometheus_client.Counter", "io_prometheus_client.Quantile", "io_prometheus_client.Summary", "io_prometheus_client.Untyped", "io_prometheus_client.Histogram", "io_prometheus_client.Bucket", "io_prometheus_client.BucketSpan", "io_prometheus_client.Exemplar", "io_prometheus_client.Metric", "io_prometheus_client.MetricFamily", "io_prometheus_client.x"])

export type MetricType = number

$.registerNamedValueType(
	"io_prometheus_client.MetricType",
	{Descriptor: (receiver: any, ...args: any[]) => (MetricType_Descriptor as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Enum: (receiver: any, ...args: any[]) => (MetricType_Enum as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), EnumDescriptor: (receiver: any, ...args: any[]) => (MetricType_EnumDescriptor as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Number: (receiver: any, ...args: any[]) => (MetricType_Number as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (MetricType_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Type: (receiver: any, ...args: any[]) => (MetricType_Type as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Descriptor", [], ["protoreflect.EnumDescriptor"]), $.methodSignature("Enum", [], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32", "io_prometheus_client.MetricType"))]), $.methodSignature("EnumDescriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))]), $.methodSignature("Number", [], [/* @__PURE__ */ $.basicType("int32", "protoreflect.EnumNumber")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Type", [], ["protoreflect.EnumType"])]
);

$.registerNamedValueType(
	"*io_prometheus_client.MetricType",
	{Descriptor: (receiver: any, ...args: any[]) => (MetricType_Descriptor as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Enum: (receiver: any, ...args: any[]) => (MetricType_Enum as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), EnumDescriptor: (receiver: any, ...args: any[]) => (MetricType_EnumDescriptor as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Number: (receiver: any, ...args: any[]) => (MetricType_Number as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (MetricType_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Type: (receiver: any, ...args: any[]) => (MetricType_Type as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), UnmarshalJSON: (receiver: any, ...args: any[]) => (MetricType_UnmarshalJSON as any)(receiver, ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Descriptor", [], ["protoreflect.EnumDescriptor"]), $.methodSignature("Enum", [], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32", "io_prometheus_client.MetricType"))]), $.methodSignature("EnumDescriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))]), $.methodSignature("Number", [], [/* @__PURE__ */ $.basicType("int32", "protoreflect.EnumNumber")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Type", [], ["protoreflect.EnumType"]), $.methodSignature("UnmarshalJSON", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"])]
);

export class LabelPair {
	public get state(): protoimpl.MessageState {
		return this._fields.state
	}

	public set state(value: protoimpl.MessageState) {
		this._fields.state = value
	}

	public get sizeCache(): protoimpl.SizeCache {
		return this._fields.sizeCache
	}

	public set sizeCache(value: protoimpl.SizeCache) {
		this._fields.sizeCache = value
	}

	public get unknownFields(): protoimpl.UnknownFields {
		return this._fields.unknownFields
	}

	public set unknownFields(value: protoimpl.UnknownFields) {
		this._fields.unknownFields = value
	}

	public get Name(): $.VarRef<string> | null {
		return this._fields.Name
	}

	public set Name(value: $.VarRef<string> | null) {
		this._fields.Name = value
	}

	public get Value(): $.VarRef<string> | null {
		return this._fields.Value
	}

	public set Value(value: $.VarRef<string> | null) {
		this._fields.Value = value
	}

	public _fields: {
		state: protoimpl.MessageState
		sizeCache: protoimpl.SizeCache
		unknownFields: protoimpl.UnknownFields
		Name: $.VarRef<string> | null
		Value: $.VarRef<string> | null
	}

	constructor(init?: Partial<{state?: protoimpl.MessageState, sizeCache?: protoimpl.SizeCache, unknownFields?: protoimpl.UnknownFields, Name?: $.VarRef<string> | null, Value?: $.VarRef<string> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			state: init?.state ? init.state.clone() : new impl.MessageState(undefined, true),
			sizeCache: init?.sizeCache ?? (0 as protoimpl.SizeCache),
			unknownFields: init?.unknownFields ?? (null! as protoimpl.UnknownFields),
			Name: init?.Name ?? (null! as $.VarRef<string> | null),
			Value: init?.Value ?? (null! as $.VarRef<string> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): LabelPair {
		return new LabelPair(this, true)
	}

	public __goscriptAssign(source: LabelPair): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.state, values.state)
		target.sizeCache = values.sizeCache
		target.unknownFields = values.unknownFields
		target.Name = values.Name
		target.Value = values.Value
	}

	public async Descriptor(): globalThis.Promise<[$.Slice<number>, $.Slice<number>]> {
		return [await file_io_prometheus_client_metrics_proto_rawDescGZIP(), $.arrayToSlice<number>([0])]
	}

	public GetName(): string {
		const x: LabelPair | $.VarRef<LabelPair> | null = this;
		const x$: LabelPair = x == null ? $.pointerTarget<LabelPair>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<LabelPair>(x)
		if ((x != null) && ((x$ as LabelPair).Name != null)) {
			return $.pointerValue<string>((x$ as LabelPair).Name)
		}
		return ""
	}

	public GetValue(): string {
		const x: LabelPair | $.VarRef<LabelPair> | null = this;
		const x$: LabelPair = x == null ? $.pointerTarget<LabelPair>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<LabelPair>(x)
		if ((x != null) && ((x$ as LabelPair).Value != null)) {
			return $.pointerValue<string>((x$ as LabelPair).Value)
		}
		return ""
	}

	public ProtoMessage(): void {
	}

	public async ProtoReflect(): globalThis.Promise<protoreflect.Message | null> {
		const x: LabelPair | $.VarRef<LabelPair> | null = this;
		let mi: impl.MessageInfo | $.VarRef<impl.MessageInfo> | null = $.indexRef(file_io_prometheus_client_metrics_proto_msgTypes!, 0)
		if (protoimpl.UnsafeEnabled && (x != null)) {
			let ms: impl.messageState | $.VarRef<impl.messageState> | null = $.pointerValue<impl.Export>(protoimpl.X).MessageStateOf($.interfaceValue<protoimpl.Pointer | null>(x, "*io_prometheus_client.LabelPair", /* @__PURE__ */ $.pointerType("io_prometheus_client.LabelPair")))
			if ($.pointerValue<any>(ms).LoadMessageInfo() == null) {
				$.pointerValue<any>(ms).StoreMessageInfo(mi)
			}
			return $.interfaceValue<protoreflect.Message | null>(ms, "*impl.messageState", /* @__PURE__ */ $.pointerType("impl.messageState"))
		}
		return (mi !== null && (mi as any).__isVarRef !== true && (mi as any).__goValue === undefined ? ((mi as any) as impl.MessageInfo).MessageOf($.interfaceValue(x, "*io_prometheus_client.LabelPair", /* @__PURE__ */ $.pointerType("io_prometheus_client.LabelPair"))) : impl.MessageInfo.prototype.MessageOf.call(mi, $.interfaceValue(x, "*io_prometheus_client.LabelPair", /* @__PURE__ */ $.pointerType("io_prometheus_client.LabelPair"))))
	}

	public Reset(): void {
		let x: LabelPair | $.VarRef<LabelPair> | null = this;
		$.assignStruct($.pointerValue<LabelPair>(x), $.markAsStructValue(new LabelPair()))
		if (protoimpl.UnsafeEnabled) {
			let mi: impl.MessageInfo | $.VarRef<impl.MessageInfo> | null = $.indexRef(file_io_prometheus_client_metrics_proto_msgTypes!, 0)
			let ms: impl.messageState | $.VarRef<impl.messageState> | null = $.pointerValue<impl.Export>(protoimpl.X).MessageStateOf($.interfaceValue<protoimpl.Pointer | null>(x, "*io_prometheus_client.LabelPair", /* @__PURE__ */ $.pointerType("io_prometheus_client.LabelPair")))
			$.pointerValue<any>(ms).StoreMessageInfo(mi)
		}
	}

	public String(): string {
		const x: LabelPair | $.VarRef<LabelPair> | null = this;
		return await $.markAsStructValue($.cloneStructValue($.pointerValue<impl.Export>(protoimpl.X))).MessageStringOf($.interfaceValue<protoreflect.ProtoMessage | null>(x, "*io_prometheus_client.LabelPair", /* @__PURE__ */ $.pointerType("io_prometheus_client.LabelPair")))
	}

	static __typeInfo = $.registerStructType(
		"io_prometheus_client.LabelPair",
		() => new LabelPair(),
		() => [$.methodSignature("Descriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))], true), $.methodSignature("GetName", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("GetValue", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("ProtoMessage", [], [], true), $.methodSignature("ProtoReflect", [], ["protoreflect.Message"], true), $.methodSignature("Reset", [], [], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true)],
		LabelPair,
		() => [/* @__PURE__ */ $.structField("state", "impl.MessageState", [0], 0, false, { pkgPath: "github.com/prometheus/client_model/go" }), /* @__PURE__ */ $.structField("sizeCache", /* @__PURE__ */ $.basicType("int32"), [1], 8, false, { pkgPath: "github.com/prometheus/client_model/go" }), /* @__PURE__ */ $.structField("unknownFields", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [2], 16, false, { pkgPath: "github.com/prometheus/client_model/go" }), /* @__PURE__ */ $.structField("Name", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("string")), [3], 40, true, { tag: "protobuf:\"bytes,1,opt,name=name\" json:\"name,omitempty\"" }), /* @__PURE__ */ $.structField("Value", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("string")), [4], 48, true, { tag: "protobuf:\"bytes,2,opt,name=value\" json:\"value,omitempty\"" })]
	)
}

export class Gauge {
	public get state(): protoimpl.MessageState {
		return this._fields.state
	}

	public set state(value: protoimpl.MessageState) {
		this._fields.state = value
	}

	public get sizeCache(): protoimpl.SizeCache {
		return this._fields.sizeCache
	}

	public set sizeCache(value: protoimpl.SizeCache) {
		this._fields.sizeCache = value
	}

	public get unknownFields(): protoimpl.UnknownFields {
		return this._fields.unknownFields
	}

	public set unknownFields(value: protoimpl.UnknownFields) {
		this._fields.unknownFields = value
	}

	public get Value(): $.VarRef<number> | null {
		return this._fields.Value
	}

	public set Value(value: $.VarRef<number> | null) {
		this._fields.Value = value
	}

	public _fields: {
		state: protoimpl.MessageState
		sizeCache: protoimpl.SizeCache
		unknownFields: protoimpl.UnknownFields
		Value: $.VarRef<number> | null
	}

	constructor(init?: Partial<{state?: protoimpl.MessageState, sizeCache?: protoimpl.SizeCache, unknownFields?: protoimpl.UnknownFields, Value?: $.VarRef<number> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			state: init?.state ? init.state.clone() : new impl.MessageState(undefined, true),
			sizeCache: init?.sizeCache ?? (0 as protoimpl.SizeCache),
			unknownFields: init?.unknownFields ?? (null! as protoimpl.UnknownFields),
			Value: init?.Value ?? (null! as $.VarRef<number> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Gauge {
		return new Gauge(this, true)
	}

	public __goscriptAssign(source: Gauge): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.state, values.state)
		target.sizeCache = values.sizeCache
		target.unknownFields = values.unknownFields
		target.Value = values.Value
	}

	public async Descriptor(): globalThis.Promise<[$.Slice<number>, $.Slice<number>]> {
		return [await file_io_prometheus_client_metrics_proto_rawDescGZIP(), $.arrayToSlice<number>([1])]
	}

	public GetValue(): number {
		const x: Gauge | $.VarRef<Gauge> | null = this;
		const x$: Gauge = x == null ? $.pointerTarget<Gauge>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<Gauge>(x)
		if ((x != null) && ((x$ as Gauge).Value != null)) {
			return $.pointerValue<number>((x$ as Gauge).Value)
		}
		return 0
	}

	public ProtoMessage(): void {
	}

	public async ProtoReflect(): globalThis.Promise<protoreflect.Message | null> {
		const x: Gauge | $.VarRef<Gauge> | null = this;
		let mi: impl.MessageInfo | $.VarRef<impl.MessageInfo> | null = $.indexRef(file_io_prometheus_client_metrics_proto_msgTypes!, 1)
		if (protoimpl.UnsafeEnabled && (x != null)) {
			let ms: impl.messageState | $.VarRef<impl.messageState> | null = $.pointerValue<impl.Export>(protoimpl.X).MessageStateOf($.interfaceValue<protoimpl.Pointer | null>(x, "*io_prometheus_client.Gauge", /* @__PURE__ */ $.pointerType("io_prometheus_client.Gauge")))
			if ($.pointerValue<any>(ms).LoadMessageInfo() == null) {
				$.pointerValue<any>(ms).StoreMessageInfo(mi)
			}
			return $.interfaceValue<protoreflect.Message | null>(ms, "*impl.messageState", /* @__PURE__ */ $.pointerType("impl.messageState"))
		}
		return (mi !== null && (mi as any).__isVarRef !== true && (mi as any).__goValue === undefined ? ((mi as any) as impl.MessageInfo).MessageOf($.interfaceValue(x, "*io_prometheus_client.Gauge", /* @__PURE__ */ $.pointerType("io_prometheus_client.Gauge"))) : impl.MessageInfo.prototype.MessageOf.call(mi, $.interfaceValue(x, "*io_prometheus_client.Gauge", /* @__PURE__ */ $.pointerType("io_prometheus_client.Gauge"))))
	}

	public Reset(): void {
		let x: Gauge | $.VarRef<Gauge> | null = this;
		$.assignStruct($.pointerValue<Gauge>(x), $.markAsStructValue(new Gauge()))
		if (protoimpl.UnsafeEnabled) {
			let mi: impl.MessageInfo | $.VarRef<impl.MessageInfo> | null = $.indexRef(file_io_prometheus_client_metrics_proto_msgTypes!, 1)
			let ms: impl.messageState | $.VarRef<impl.messageState> | null = $.pointerValue<impl.Export>(protoimpl.X).MessageStateOf($.interfaceValue<protoimpl.Pointer | null>(x, "*io_prometheus_client.Gauge", /* @__PURE__ */ $.pointerType("io_prometheus_client.Gauge")))
			$.pointerValue<any>(ms).StoreMessageInfo(mi)
		}
	}

	public String(): string {
		const x: Gauge | $.VarRef<Gauge> | null = this;
		return await $.markAsStructValue($.cloneStructValue($.pointerValue<impl.Export>(protoimpl.X))).MessageStringOf($.interfaceValue<protoreflect.ProtoMessage | null>(x, "*io_prometheus_client.Gauge", /* @__PURE__ */ $.pointerType("io_prometheus_client.Gauge")))
	}

	static __typeInfo = $.registerStructType(
		"io_prometheus_client.Gauge",
		() => new Gauge(),
		() => [$.methodSignature("Descriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))], true), $.methodSignature("GetValue", [], [/* @__PURE__ */ $.basicType("float64")], true), $.methodSignature("ProtoMessage", [], [], true), $.methodSignature("ProtoReflect", [], ["protoreflect.Message"], true), $.methodSignature("Reset", [], [], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true)],
		Gauge,
		() => [/* @__PURE__ */ $.structField("state", "impl.MessageState", [0], 0, false, { pkgPath: "github.com/prometheus/client_model/go" }), /* @__PURE__ */ $.structField("sizeCache", /* @__PURE__ */ $.basicType("int32"), [1], 8, false, { pkgPath: "github.com/prometheus/client_model/go" }), /* @__PURE__ */ $.structField("unknownFields", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [2], 16, false, { pkgPath: "github.com/prometheus/client_model/go" }), /* @__PURE__ */ $.structField("Value", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("float64")), [3], 40, true, { tag: "protobuf:\"fixed64,1,opt,name=value\" json:\"value,omitempty\"" })]
	)
}

export class Counter {
	public get state(): protoimpl.MessageState {
		return this._fields.state
	}

	public set state(value: protoimpl.MessageState) {
		this._fields.state = value
	}

	public get sizeCache(): protoimpl.SizeCache {
		return this._fields.sizeCache
	}

	public set sizeCache(value: protoimpl.SizeCache) {
		this._fields.sizeCache = value
	}

	public get unknownFields(): protoimpl.UnknownFields {
		return this._fields.unknownFields
	}

	public set unknownFields(value: protoimpl.UnknownFields) {
		this._fields.unknownFields = value
	}

	public get Value(): $.VarRef<number> | null {
		return this._fields.Value
	}

	public set Value(value: $.VarRef<number> | null) {
		this._fields.Value = value
	}

	public get Exemplar(): Exemplar | $.VarRef<Exemplar> | null {
		return this._fields.Exemplar
	}

	public set Exemplar(value: Exemplar | $.VarRef<Exemplar> | null) {
		this._fields.Exemplar = value
	}

	public get CreatedTimestamp(): timestamppb.Timestamp | $.VarRef<timestamppb.Timestamp> | null {
		return this._fields.CreatedTimestamp
	}

	public set CreatedTimestamp(value: timestamppb.Timestamp | $.VarRef<timestamppb.Timestamp> | null) {
		this._fields.CreatedTimestamp = value
	}

	public _fields: {
		state: protoimpl.MessageState
		sizeCache: protoimpl.SizeCache
		unknownFields: protoimpl.UnknownFields
		Value: $.VarRef<number> | null
		Exemplar: Exemplar | $.VarRef<Exemplar> | null
		CreatedTimestamp: timestamppb.Timestamp | $.VarRef<timestamppb.Timestamp> | null
	}

	constructor(init?: Partial<{state?: protoimpl.MessageState, sizeCache?: protoimpl.SizeCache, unknownFields?: protoimpl.UnknownFields, Value?: $.VarRef<number> | null, Exemplar?: Exemplar | $.VarRef<Exemplar> | null, CreatedTimestamp?: timestamppb.Timestamp | $.VarRef<timestamppb.Timestamp> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			state: init?.state ? init.state.clone() : new impl.MessageState(undefined, true),
			sizeCache: init?.sizeCache ?? (0 as protoimpl.SizeCache),
			unknownFields: init?.unknownFields ?? (null! as protoimpl.UnknownFields),
			Value: init?.Value ?? (null! as $.VarRef<number> | null),
			Exemplar: init?.Exemplar ?? (null! as Exemplar | $.VarRef<Exemplar> | null),
			CreatedTimestamp: init?.CreatedTimestamp ?? (null! as timestamppb.Timestamp | $.VarRef<timestamppb.Timestamp> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Counter {
		return new Counter(this, true)
	}

	public __goscriptAssign(source: Counter): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.state, values.state)
		target.sizeCache = values.sizeCache
		target.unknownFields = values.unknownFields
		target.Value = values.Value
		target.Exemplar = values.Exemplar
		target.CreatedTimestamp = values.CreatedTimestamp
	}

	public async Descriptor(): globalThis.Promise<[$.Slice<number>, $.Slice<number>]> {
		return [await file_io_prometheus_client_metrics_proto_rawDescGZIP(), $.arrayToSlice<number>([2])]
	}

	public GetCreatedTimestamp(): timestamppb.Timestamp | $.VarRef<timestamppb.Timestamp> | null {
		const x: Counter | $.VarRef<Counter> | null = this;
		if (x != null) {
			return $.pointerValue<Counter>(x).CreatedTimestamp
		}
		return null
	}

	public GetExemplar(): Exemplar | $.VarRef<Exemplar> | null {
		const x: Counter | $.VarRef<Counter> | null = this;
		if (x != null) {
			return $.pointerValue<Counter>(x).Exemplar
		}
		return null
	}

	public GetValue(): number {
		const x: Counter | $.VarRef<Counter> | null = this;
		const x$: Counter = x == null ? $.pointerTarget<Counter>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<Counter>(x)
		if ((x != null) && ((x$ as Counter).Value != null)) {
			return $.pointerValue<number>((x$ as Counter).Value)
		}
		return 0
	}

	public ProtoMessage(): void {
	}

	public async ProtoReflect(): globalThis.Promise<protoreflect.Message | null> {
		const x: Counter | $.VarRef<Counter> | null = this;
		let mi: impl.MessageInfo | $.VarRef<impl.MessageInfo> | null = $.indexRef(file_io_prometheus_client_metrics_proto_msgTypes!, 2)
		if (protoimpl.UnsafeEnabled && (x != null)) {
			let ms: impl.messageState | $.VarRef<impl.messageState> | null = $.pointerValue<impl.Export>(protoimpl.X).MessageStateOf($.interfaceValue<protoimpl.Pointer | null>(x, "*io_prometheus_client.Counter", /* @__PURE__ */ $.pointerType("io_prometheus_client.Counter")))
			if ($.pointerValue<any>(ms).LoadMessageInfo() == null) {
				$.pointerValue<any>(ms).StoreMessageInfo(mi)
			}
			return $.interfaceValue<protoreflect.Message | null>(ms, "*impl.messageState", /* @__PURE__ */ $.pointerType("impl.messageState"))
		}
		return (mi !== null && (mi as any).__isVarRef !== true && (mi as any).__goValue === undefined ? ((mi as any) as impl.MessageInfo).MessageOf($.interfaceValue(x, "*io_prometheus_client.Counter", /* @__PURE__ */ $.pointerType("io_prometheus_client.Counter"))) : impl.MessageInfo.prototype.MessageOf.call(mi, $.interfaceValue(x, "*io_prometheus_client.Counter", /* @__PURE__ */ $.pointerType("io_prometheus_client.Counter"))))
	}

	public Reset(): void {
		let x: Counter | $.VarRef<Counter> | null = this;
		$.assignStruct($.pointerValue<Counter>(x), $.markAsStructValue(new Counter()))
		if (protoimpl.UnsafeEnabled) {
			let mi: impl.MessageInfo | $.VarRef<impl.MessageInfo> | null = $.indexRef(file_io_prometheus_client_metrics_proto_msgTypes!, 2)
			let ms: impl.messageState | $.VarRef<impl.messageState> | null = $.pointerValue<impl.Export>(protoimpl.X).MessageStateOf($.interfaceValue<protoimpl.Pointer | null>(x, "*io_prometheus_client.Counter", /* @__PURE__ */ $.pointerType("io_prometheus_client.Counter")))
			$.pointerValue<any>(ms).StoreMessageInfo(mi)
		}
	}

	public String(): string {
		const x: Counter | $.VarRef<Counter> | null = this;
		return await $.markAsStructValue($.cloneStructValue($.pointerValue<impl.Export>(protoimpl.X))).MessageStringOf($.interfaceValue<protoreflect.ProtoMessage | null>(x, "*io_prometheus_client.Counter", /* @__PURE__ */ $.pointerType("io_prometheus_client.Counter")))
	}

	static __typeInfo = $.registerStructType(
		"io_prometheus_client.Counter",
		() => new Counter(),
		() => [$.methodSignature("Descriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))], true), $.methodSignature("GetCreatedTimestamp", [], [/* @__PURE__ */ $.pointerType("timestamppb.Timestamp")], true), $.methodSignature("GetExemplar", [], [/* @__PURE__ */ $.pointerType("io_prometheus_client.Exemplar")], true), $.methodSignature("GetValue", [], [/* @__PURE__ */ $.basicType("float64")], true), $.methodSignature("ProtoMessage", [], [], true), $.methodSignature("ProtoReflect", [], ["protoreflect.Message"], true), $.methodSignature("Reset", [], [], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true)],
		Counter,
		() => [/* @__PURE__ */ $.structField("state", "impl.MessageState", [0], 0, false, { pkgPath: "github.com/prometheus/client_model/go" }), /* @__PURE__ */ $.structField("sizeCache", /* @__PURE__ */ $.basicType("int32"), [1], 8, false, { pkgPath: "github.com/prometheus/client_model/go" }), /* @__PURE__ */ $.structField("unknownFields", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [2], 16, false, { pkgPath: "github.com/prometheus/client_model/go" }), /* @__PURE__ */ $.structField("Value", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("float64")), [3], 40, true, { tag: "protobuf:\"fixed64,1,opt,name=value\" json:\"value,omitempty\"" }), /* @__PURE__ */ $.structField("Exemplar", /* @__PURE__ */ $.pointerType("io_prometheus_client.Exemplar"), [4], 48, true, { tag: "protobuf:\"bytes,2,opt,name=exemplar\" json:\"exemplar,omitempty\"" }), /* @__PURE__ */ $.structField("CreatedTimestamp", /* @__PURE__ */ $.pointerType("timestamppb.Timestamp"), [5], 56, true, { tag: "protobuf:\"bytes,3,opt,name=created_timestamp,json=createdTimestamp\" json:\"created_timestamp,omitempty\"" })]
	)
}

export class Quantile {
	public get state(): protoimpl.MessageState {
		return this._fields.state
	}

	public set state(value: protoimpl.MessageState) {
		this._fields.state = value
	}

	public get sizeCache(): protoimpl.SizeCache {
		return this._fields.sizeCache
	}

	public set sizeCache(value: protoimpl.SizeCache) {
		this._fields.sizeCache = value
	}

	public get unknownFields(): protoimpl.UnknownFields {
		return this._fields.unknownFields
	}

	public set unknownFields(value: protoimpl.UnknownFields) {
		this._fields.unknownFields = value
	}

	public get Quantile(): $.VarRef<number> | null {
		return this._fields.Quantile
	}

	public set Quantile(value: $.VarRef<number> | null) {
		this._fields.Quantile = value
	}

	public get Value(): $.VarRef<number> | null {
		return this._fields.Value
	}

	public set Value(value: $.VarRef<number> | null) {
		this._fields.Value = value
	}

	public _fields: {
		state: protoimpl.MessageState
		sizeCache: protoimpl.SizeCache
		unknownFields: protoimpl.UnknownFields
		Quantile: $.VarRef<number> | null
		Value: $.VarRef<number> | null
	}

	constructor(init?: Partial<{state?: protoimpl.MessageState, sizeCache?: protoimpl.SizeCache, unknownFields?: protoimpl.UnknownFields, Quantile?: $.VarRef<number> | null, Value?: $.VarRef<number> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			state: init?.state ? init.state.clone() : new impl.MessageState(undefined, true),
			sizeCache: init?.sizeCache ?? (0 as protoimpl.SizeCache),
			unknownFields: init?.unknownFields ?? (null! as protoimpl.UnknownFields),
			Quantile: init?.Quantile ?? (null! as $.VarRef<number> | null),
			Value: init?.Value ?? (null! as $.VarRef<number> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Quantile {
		return new Quantile(this, true)
	}

	public __goscriptAssign(source: Quantile): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.state, values.state)
		target.sizeCache = values.sizeCache
		target.unknownFields = values.unknownFields
		target.Quantile = values.Quantile
		target.Value = values.Value
	}

	public async Descriptor(): globalThis.Promise<[$.Slice<number>, $.Slice<number>]> {
		return [await file_io_prometheus_client_metrics_proto_rawDescGZIP(), $.arrayToSlice<number>([3])]
	}

	public GetQuantile(): number {
		const x: Quantile | $.VarRef<Quantile> | null = this;
		const x$: Quantile = x == null ? $.pointerTarget<Quantile>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<Quantile>(x)
		if ((x != null) && ((x$ as Quantile).Quantile != null)) {
			return $.pointerValue<number>((x$ as Quantile).Quantile)
		}
		return 0
	}

	public GetValue(): number {
		const x: Quantile | $.VarRef<Quantile> | null = this;
		const x$: Quantile = x == null ? $.pointerTarget<Quantile>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<Quantile>(x)
		if ((x != null) && ((x$ as Quantile).Value != null)) {
			return $.pointerValue<number>((x$ as Quantile).Value)
		}
		return 0
	}

	public ProtoMessage(): void {
	}

	public async ProtoReflect(): globalThis.Promise<protoreflect.Message | null> {
		const x: Quantile | $.VarRef<Quantile> | null = this;
		let mi: impl.MessageInfo | $.VarRef<impl.MessageInfo> | null = $.indexRef(file_io_prometheus_client_metrics_proto_msgTypes!, 3)
		if (protoimpl.UnsafeEnabled && (x != null)) {
			let ms: impl.messageState | $.VarRef<impl.messageState> | null = $.pointerValue<impl.Export>(protoimpl.X).MessageStateOf($.interfaceValue<protoimpl.Pointer | null>(x, "*io_prometheus_client.Quantile", /* @__PURE__ */ $.pointerType("io_prometheus_client.Quantile")))
			if ($.pointerValue<any>(ms).LoadMessageInfo() == null) {
				$.pointerValue<any>(ms).StoreMessageInfo(mi)
			}
			return $.interfaceValue<protoreflect.Message | null>(ms, "*impl.messageState", /* @__PURE__ */ $.pointerType("impl.messageState"))
		}
		return (mi !== null && (mi as any).__isVarRef !== true && (mi as any).__goValue === undefined ? ((mi as any) as impl.MessageInfo).MessageOf($.interfaceValue(x, "*io_prometheus_client.Quantile", /* @__PURE__ */ $.pointerType("io_prometheus_client.Quantile"))) : impl.MessageInfo.prototype.MessageOf.call(mi, $.interfaceValue(x, "*io_prometheus_client.Quantile", /* @__PURE__ */ $.pointerType("io_prometheus_client.Quantile"))))
	}

	public Reset(): void {
		let x: Quantile | $.VarRef<Quantile> | null = this;
		$.assignStruct($.pointerValue<Quantile>(x), $.markAsStructValue(new Quantile()))
		if (protoimpl.UnsafeEnabled) {
			let mi: impl.MessageInfo | $.VarRef<impl.MessageInfo> | null = $.indexRef(file_io_prometheus_client_metrics_proto_msgTypes!, 3)
			let ms: impl.messageState | $.VarRef<impl.messageState> | null = $.pointerValue<impl.Export>(protoimpl.X).MessageStateOf($.interfaceValue<protoimpl.Pointer | null>(x, "*io_prometheus_client.Quantile", /* @__PURE__ */ $.pointerType("io_prometheus_client.Quantile")))
			$.pointerValue<any>(ms).StoreMessageInfo(mi)
		}
	}

	public String(): string {
		const x: Quantile | $.VarRef<Quantile> | null = this;
		return await $.markAsStructValue($.cloneStructValue($.pointerValue<impl.Export>(protoimpl.X))).MessageStringOf($.interfaceValue<protoreflect.ProtoMessage | null>(x, "*io_prometheus_client.Quantile", /* @__PURE__ */ $.pointerType("io_prometheus_client.Quantile")))
	}

	static __typeInfo = $.registerStructType(
		"io_prometheus_client.Quantile",
		() => new Quantile(),
		() => [$.methodSignature("Descriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))], true), $.methodSignature("GetQuantile", [], [/* @__PURE__ */ $.basicType("float64")], true), $.methodSignature("GetValue", [], [/* @__PURE__ */ $.basicType("float64")], true), $.methodSignature("ProtoMessage", [], [], true), $.methodSignature("ProtoReflect", [], ["protoreflect.Message"], true), $.methodSignature("Reset", [], [], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true)],
		Quantile,
		() => [/* @__PURE__ */ $.structField("state", "impl.MessageState", [0], 0, false, { pkgPath: "github.com/prometheus/client_model/go" }), /* @__PURE__ */ $.structField("sizeCache", /* @__PURE__ */ $.basicType("int32"), [1], 8, false, { pkgPath: "github.com/prometheus/client_model/go" }), /* @__PURE__ */ $.structField("unknownFields", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [2], 16, false, { pkgPath: "github.com/prometheus/client_model/go" }), /* @__PURE__ */ $.structField("Quantile", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("float64")), [3], 40, true, { tag: "protobuf:\"fixed64,1,opt,name=quantile\" json:\"quantile,omitempty\"" }), /* @__PURE__ */ $.structField("Value", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("float64")), [4], 48, true, { tag: "protobuf:\"fixed64,2,opt,name=value\" json:\"value,omitempty\"" })]
	)
}

export class Summary {
	public get state(): protoimpl.MessageState {
		return this._fields.state
	}

	public set state(value: protoimpl.MessageState) {
		this._fields.state = value
	}

	public get sizeCache(): protoimpl.SizeCache {
		return this._fields.sizeCache
	}

	public set sizeCache(value: protoimpl.SizeCache) {
		this._fields.sizeCache = value
	}

	public get unknownFields(): protoimpl.UnknownFields {
		return this._fields.unknownFields
	}

	public set unknownFields(value: protoimpl.UnknownFields) {
		this._fields.unknownFields = value
	}

	public get SampleCount(): $.VarRef<bigint> | null {
		return this._fields.SampleCount
	}

	public set SampleCount(value: $.VarRef<bigint> | null) {
		this._fields.SampleCount = value
	}

	public get SampleSum(): $.VarRef<number> | null {
		return this._fields.SampleSum
	}

	public set SampleSum(value: $.VarRef<number> | null) {
		this._fields.SampleSum = value
	}

	public get Quantile(): $.Slice<Quantile | $.VarRef<Quantile> | null> {
		return this._fields.Quantile
	}

	public set Quantile(value: $.Slice<Quantile | $.VarRef<Quantile> | null>) {
		this._fields.Quantile = value
	}

	public get CreatedTimestamp(): timestamppb.Timestamp | $.VarRef<timestamppb.Timestamp> | null {
		return this._fields.CreatedTimestamp
	}

	public set CreatedTimestamp(value: timestamppb.Timestamp | $.VarRef<timestamppb.Timestamp> | null) {
		this._fields.CreatedTimestamp = value
	}

	public _fields: {
		state: protoimpl.MessageState
		sizeCache: protoimpl.SizeCache
		unknownFields: protoimpl.UnknownFields
		SampleCount: $.VarRef<bigint> | null
		SampleSum: $.VarRef<number> | null
		Quantile: $.Slice<Quantile | $.VarRef<Quantile> | null>
		CreatedTimestamp: timestamppb.Timestamp | $.VarRef<timestamppb.Timestamp> | null
	}

	constructor(init?: Partial<{state?: protoimpl.MessageState, sizeCache?: protoimpl.SizeCache, unknownFields?: protoimpl.UnknownFields, SampleCount?: $.VarRef<bigint> | null, SampleSum?: $.VarRef<number> | null, Quantile?: $.Slice<Quantile | $.VarRef<Quantile> | null>, CreatedTimestamp?: timestamppb.Timestamp | $.VarRef<timestamppb.Timestamp> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			state: init?.state ? init.state.clone() : new impl.MessageState(undefined, true),
			sizeCache: init?.sizeCache ?? (0 as protoimpl.SizeCache),
			unknownFields: init?.unknownFields ?? (null! as protoimpl.UnknownFields),
			SampleCount: init?.SampleCount ?? (null! as $.VarRef<bigint> | null),
			SampleSum: init?.SampleSum ?? (null! as $.VarRef<number> | null),
			Quantile: init?.Quantile ?? (null! as $.Slice<Quantile | $.VarRef<Quantile> | null>),
			CreatedTimestamp: init?.CreatedTimestamp ?? (null! as timestamppb.Timestamp | $.VarRef<timestamppb.Timestamp> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Summary {
		return new Summary(this, true)
	}

	public __goscriptAssign(source: Summary): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.state, values.state)
		target.sizeCache = values.sizeCache
		target.unknownFields = values.unknownFields
		target.SampleCount = values.SampleCount
		target.SampleSum = values.SampleSum
		target.Quantile = values.Quantile
		target.CreatedTimestamp = values.CreatedTimestamp
	}

	public async Descriptor(): globalThis.Promise<[$.Slice<number>, $.Slice<number>]> {
		return [await file_io_prometheus_client_metrics_proto_rawDescGZIP(), $.arrayToSlice<number>([4])]
	}

	public GetCreatedTimestamp(): timestamppb.Timestamp | $.VarRef<timestamppb.Timestamp> | null {
		const x: Summary | $.VarRef<Summary> | null = this;
		if (x != null) {
			return $.pointerValue<Summary>(x).CreatedTimestamp
		}
		return null
	}

	public GetQuantile(): $.Slice<Quantile | $.VarRef<Quantile> | null> {
		const x: Summary | $.VarRef<Summary> | null = this;
		if (x != null) {
			return $.pointerValue<Summary>(x).Quantile
		}
		return null
	}

	public GetSampleCount(): bigint {
		const x: Summary | $.VarRef<Summary> | null = this;
		const x$: Summary = x == null ? $.pointerTarget<Summary>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<Summary>(x)
		if ((x != null) && ((x$ as Summary).SampleCount != null)) {
			return $.pointerValue<bigint>((x$ as Summary).SampleCount)
		}
		return 0n
	}

	public GetSampleSum(): number {
		const x: Summary | $.VarRef<Summary> | null = this;
		const x$: Summary = x == null ? $.pointerTarget<Summary>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<Summary>(x)
		if ((x != null) && ((x$ as Summary).SampleSum != null)) {
			return $.pointerValue<number>((x$ as Summary).SampleSum)
		}
		return 0
	}

	public ProtoMessage(): void {
	}

	public async ProtoReflect(): globalThis.Promise<protoreflect.Message | null> {
		const x: Summary | $.VarRef<Summary> | null = this;
		let mi: impl.MessageInfo | $.VarRef<impl.MessageInfo> | null = $.indexRef(file_io_prometheus_client_metrics_proto_msgTypes!, 4)
		if (protoimpl.UnsafeEnabled && (x != null)) {
			let ms: impl.messageState | $.VarRef<impl.messageState> | null = $.pointerValue<impl.Export>(protoimpl.X).MessageStateOf($.interfaceValue<protoimpl.Pointer | null>(x, "*io_prometheus_client.Summary", /* @__PURE__ */ $.pointerType("io_prometheus_client.Summary")))
			if ($.pointerValue<any>(ms).LoadMessageInfo() == null) {
				$.pointerValue<any>(ms).StoreMessageInfo(mi)
			}
			return $.interfaceValue<protoreflect.Message | null>(ms, "*impl.messageState", /* @__PURE__ */ $.pointerType("impl.messageState"))
		}
		return (mi !== null && (mi as any).__isVarRef !== true && (mi as any).__goValue === undefined ? ((mi as any) as impl.MessageInfo).MessageOf($.interfaceValue(x, "*io_prometheus_client.Summary", /* @__PURE__ */ $.pointerType("io_prometheus_client.Summary"))) : impl.MessageInfo.prototype.MessageOf.call(mi, $.interfaceValue(x, "*io_prometheus_client.Summary", /* @__PURE__ */ $.pointerType("io_prometheus_client.Summary"))))
	}

	public Reset(): void {
		let x: Summary | $.VarRef<Summary> | null = this;
		$.assignStruct($.pointerValue<Summary>(x), $.markAsStructValue(new Summary()))
		if (protoimpl.UnsafeEnabled) {
			let mi: impl.MessageInfo | $.VarRef<impl.MessageInfo> | null = $.indexRef(file_io_prometheus_client_metrics_proto_msgTypes!, 4)
			let ms: impl.messageState | $.VarRef<impl.messageState> | null = $.pointerValue<impl.Export>(protoimpl.X).MessageStateOf($.interfaceValue<protoimpl.Pointer | null>(x, "*io_prometheus_client.Summary", /* @__PURE__ */ $.pointerType("io_prometheus_client.Summary")))
			$.pointerValue<any>(ms).StoreMessageInfo(mi)
		}
	}

	public String(): string {
		const x: Summary | $.VarRef<Summary> | null = this;
		return await $.markAsStructValue($.cloneStructValue($.pointerValue<impl.Export>(protoimpl.X))).MessageStringOf($.interfaceValue<protoreflect.ProtoMessage | null>(x, "*io_prometheus_client.Summary", /* @__PURE__ */ $.pointerType("io_prometheus_client.Summary")))
	}

	static __typeInfo = $.registerStructType(
		"io_prometheus_client.Summary",
		() => new Summary(),
		() => [$.methodSignature("Descriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))], true), $.methodSignature("GetCreatedTimestamp", [], [/* @__PURE__ */ $.pointerType("timestamppb.Timestamp")], true), $.methodSignature("GetQuantile", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("io_prometheus_client.Quantile"))], true), $.methodSignature("GetSampleCount", [], [/* @__PURE__ */ $.basicType("uint64")], true), $.methodSignature("GetSampleSum", [], [/* @__PURE__ */ $.basicType("float64")], true), $.methodSignature("ProtoMessage", [], [], true), $.methodSignature("ProtoReflect", [], ["protoreflect.Message"], true), $.methodSignature("Reset", [], [], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true)],
		Summary,
		() => [/* @__PURE__ */ $.structField("state", "impl.MessageState", [0], 0, false, { pkgPath: "github.com/prometheus/client_model/go" }), /* @__PURE__ */ $.structField("sizeCache", /* @__PURE__ */ $.basicType("int32"), [1], 8, false, { pkgPath: "github.com/prometheus/client_model/go" }), /* @__PURE__ */ $.structField("unknownFields", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [2], 16, false, { pkgPath: "github.com/prometheus/client_model/go" }), /* @__PURE__ */ $.structField("SampleCount", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint64")), [3], 40, true, { tag: "protobuf:\"varint,1,opt,name=sample_count,json=sampleCount\" json:\"sample_count,omitempty\"" }), /* @__PURE__ */ $.structField("SampleSum", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("float64")), [4], 48, true, { tag: "protobuf:\"fixed64,2,opt,name=sample_sum,json=sampleSum\" json:\"sample_sum,omitempty\"" }), /* @__PURE__ */ $.structField("Quantile", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("io_prometheus_client.Quantile")), [5], 56, true, { tag: "protobuf:\"bytes,3,rep,name=quantile\" json:\"quantile,omitempty\"" }), /* @__PURE__ */ $.structField("CreatedTimestamp", /* @__PURE__ */ $.pointerType("timestamppb.Timestamp"), [6], 80, true, { tag: "protobuf:\"bytes,4,opt,name=created_timestamp,json=createdTimestamp\" json:\"created_timestamp,omitempty\"" })]
	)
}

export class Untyped {
	public get state(): protoimpl.MessageState {
		return this._fields.state
	}

	public set state(value: protoimpl.MessageState) {
		this._fields.state = value
	}

	public get sizeCache(): protoimpl.SizeCache {
		return this._fields.sizeCache
	}

	public set sizeCache(value: protoimpl.SizeCache) {
		this._fields.sizeCache = value
	}

	public get unknownFields(): protoimpl.UnknownFields {
		return this._fields.unknownFields
	}

	public set unknownFields(value: protoimpl.UnknownFields) {
		this._fields.unknownFields = value
	}

	public get Value(): $.VarRef<number> | null {
		return this._fields.Value
	}

	public set Value(value: $.VarRef<number> | null) {
		this._fields.Value = value
	}

	public _fields: {
		state: protoimpl.MessageState
		sizeCache: protoimpl.SizeCache
		unknownFields: protoimpl.UnknownFields
		Value: $.VarRef<number> | null
	}

	constructor(init?: Partial<{state?: protoimpl.MessageState, sizeCache?: protoimpl.SizeCache, unknownFields?: protoimpl.UnknownFields, Value?: $.VarRef<number> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			state: init?.state ? init.state.clone() : new impl.MessageState(undefined, true),
			sizeCache: init?.sizeCache ?? (0 as protoimpl.SizeCache),
			unknownFields: init?.unknownFields ?? (null! as protoimpl.UnknownFields),
			Value: init?.Value ?? (null! as $.VarRef<number> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Untyped {
		return new Untyped(this, true)
	}

	public __goscriptAssign(source: Untyped): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.state, values.state)
		target.sizeCache = values.sizeCache
		target.unknownFields = values.unknownFields
		target.Value = values.Value
	}

	public async Descriptor(): globalThis.Promise<[$.Slice<number>, $.Slice<number>]> {
		return [await file_io_prometheus_client_metrics_proto_rawDescGZIP(), $.arrayToSlice<number>([5])]
	}

	public GetValue(): number {
		const x: Untyped | $.VarRef<Untyped> | null = this;
		const x$: Untyped = x == null ? $.pointerTarget<Untyped>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<Untyped>(x)
		if ((x != null) && ((x$ as Untyped).Value != null)) {
			return $.pointerValue<number>((x$ as Untyped).Value)
		}
		return 0
	}

	public ProtoMessage(): void {
	}

	public async ProtoReflect(): globalThis.Promise<protoreflect.Message | null> {
		const x: Untyped | $.VarRef<Untyped> | null = this;
		let mi: impl.MessageInfo | $.VarRef<impl.MessageInfo> | null = $.indexRef(file_io_prometheus_client_metrics_proto_msgTypes!, 5)
		if (protoimpl.UnsafeEnabled && (x != null)) {
			let ms: impl.messageState | $.VarRef<impl.messageState> | null = $.pointerValue<impl.Export>(protoimpl.X).MessageStateOf($.interfaceValue<protoimpl.Pointer | null>(x, "*io_prometheus_client.Untyped", /* @__PURE__ */ $.pointerType("io_prometheus_client.Untyped")))
			if ($.pointerValue<any>(ms).LoadMessageInfo() == null) {
				$.pointerValue<any>(ms).StoreMessageInfo(mi)
			}
			return $.interfaceValue<protoreflect.Message | null>(ms, "*impl.messageState", /* @__PURE__ */ $.pointerType("impl.messageState"))
		}
		return (mi !== null && (mi as any).__isVarRef !== true && (mi as any).__goValue === undefined ? ((mi as any) as impl.MessageInfo).MessageOf($.interfaceValue(x, "*io_prometheus_client.Untyped", /* @__PURE__ */ $.pointerType("io_prometheus_client.Untyped"))) : impl.MessageInfo.prototype.MessageOf.call(mi, $.interfaceValue(x, "*io_prometheus_client.Untyped", /* @__PURE__ */ $.pointerType("io_prometheus_client.Untyped"))))
	}

	public Reset(): void {
		let x: Untyped | $.VarRef<Untyped> | null = this;
		$.assignStruct($.pointerValue<Untyped>(x), $.markAsStructValue(new Untyped()))
		if (protoimpl.UnsafeEnabled) {
			let mi: impl.MessageInfo | $.VarRef<impl.MessageInfo> | null = $.indexRef(file_io_prometheus_client_metrics_proto_msgTypes!, 5)
			let ms: impl.messageState | $.VarRef<impl.messageState> | null = $.pointerValue<impl.Export>(protoimpl.X).MessageStateOf($.interfaceValue<protoimpl.Pointer | null>(x, "*io_prometheus_client.Untyped", /* @__PURE__ */ $.pointerType("io_prometheus_client.Untyped")))
			$.pointerValue<any>(ms).StoreMessageInfo(mi)
		}
	}

	public String(): string {
		const x: Untyped | $.VarRef<Untyped> | null = this;
		return await $.markAsStructValue($.cloneStructValue($.pointerValue<impl.Export>(protoimpl.X))).MessageStringOf($.interfaceValue<protoreflect.ProtoMessage | null>(x, "*io_prometheus_client.Untyped", /* @__PURE__ */ $.pointerType("io_prometheus_client.Untyped")))
	}

	static __typeInfo = $.registerStructType(
		"io_prometheus_client.Untyped",
		() => new Untyped(),
		() => [$.methodSignature("Descriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))], true), $.methodSignature("GetValue", [], [/* @__PURE__ */ $.basicType("float64")], true), $.methodSignature("ProtoMessage", [], [], true), $.methodSignature("ProtoReflect", [], ["protoreflect.Message"], true), $.methodSignature("Reset", [], [], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true)],
		Untyped,
		() => [/* @__PURE__ */ $.structField("state", "impl.MessageState", [0], 0, false, { pkgPath: "github.com/prometheus/client_model/go" }), /* @__PURE__ */ $.structField("sizeCache", /* @__PURE__ */ $.basicType("int32"), [1], 8, false, { pkgPath: "github.com/prometheus/client_model/go" }), /* @__PURE__ */ $.structField("unknownFields", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [2], 16, false, { pkgPath: "github.com/prometheus/client_model/go" }), /* @__PURE__ */ $.structField("Value", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("float64")), [3], 40, true, { tag: "protobuf:\"fixed64,1,opt,name=value\" json:\"value,omitempty\"" })]
	)
}

export class Histogram {
	public get state(): protoimpl.MessageState {
		return this._fields.state
	}

	public set state(value: protoimpl.MessageState) {
		this._fields.state = value
	}

	public get sizeCache(): protoimpl.SizeCache {
		return this._fields.sizeCache
	}

	public set sizeCache(value: protoimpl.SizeCache) {
		this._fields.sizeCache = value
	}

	public get unknownFields(): protoimpl.UnknownFields {
		return this._fields.unknownFields
	}

	public set unknownFields(value: protoimpl.UnknownFields) {
		this._fields.unknownFields = value
	}

	public get SampleCount(): $.VarRef<bigint> | null {
		return this._fields.SampleCount
	}

	public set SampleCount(value: $.VarRef<bigint> | null) {
		this._fields.SampleCount = value
	}

	public get SampleCountFloat(): $.VarRef<number> | null {
		return this._fields.SampleCountFloat
	}

	public set SampleCountFloat(value: $.VarRef<number> | null) {
		this._fields.SampleCountFloat = value
	}

	public get SampleSum(): $.VarRef<number> | null {
		return this._fields.SampleSum
	}

	public set SampleSum(value: $.VarRef<number> | null) {
		this._fields.SampleSum = value
	}

	// Buckets for the conventional histogram.
	public get Bucket(): $.Slice<Bucket | $.VarRef<Bucket> | null> {
		return this._fields.Bucket
	}

	public set Bucket(value: $.Slice<Bucket | $.VarRef<Bucket> | null>) {
		this._fields.Bucket = value
	}

	public get CreatedTimestamp(): timestamppb.Timestamp | $.VarRef<timestamppb.Timestamp> | null {
		return this._fields.CreatedTimestamp
	}

	public set CreatedTimestamp(value: timestamppb.Timestamp | $.VarRef<timestamppb.Timestamp> | null) {
		this._fields.CreatedTimestamp = value
	}

	// schema defines the bucket schema. Currently, valid numbers are -4 <= n <= 8.
	// They are all for base-2 bucket schemas, where 1 is a bucket boundary in each case, and
	// then each power of two is divided into 2^n logarithmic buckets.
	// Or in other words, each bucket boundary is the previous boundary times 2^(2^-n).
	// In the future, more bucket schemas may be added using numbers < -4 or > 8.
	public get Schema(): $.VarRef<number> | null {
		return this._fields.Schema
	}

	public set Schema(value: $.VarRef<number> | null) {
		this._fields.Schema = value
	}

	public get ZeroThreshold(): $.VarRef<number> | null {
		return this._fields.ZeroThreshold
	}

	public set ZeroThreshold(value: $.VarRef<number> | null) {
		this._fields.ZeroThreshold = value
	}

	public get ZeroCount(): $.VarRef<bigint> | null {
		return this._fields.ZeroCount
	}

	public set ZeroCount(value: $.VarRef<bigint> | null) {
		this._fields.ZeroCount = value
	}

	public get ZeroCountFloat(): $.VarRef<number> | null {
		return this._fields.ZeroCountFloat
	}

	public set ZeroCountFloat(value: $.VarRef<number> | null) {
		this._fields.ZeroCountFloat = value
	}

	// Negative buckets for the native histogram.
	public get NegativeSpan(): $.Slice<BucketSpan | $.VarRef<BucketSpan> | null> {
		return this._fields.NegativeSpan
	}

	public set NegativeSpan(value: $.Slice<BucketSpan | $.VarRef<BucketSpan> | null>) {
		this._fields.NegativeSpan = value
	}

	// Use either "negative_delta" or "negative_count", the former for
	// regular histograms with integer counts, the latter for float
	// histograms.
	public get NegativeDelta(): $.Slice<bigint> {
		return this._fields.NegativeDelta
	}

	public set NegativeDelta(value: $.Slice<bigint>) {
		this._fields.NegativeDelta = value
	}

	public get NegativeCount(): $.Slice<number> {
		return this._fields.NegativeCount
	}

	public set NegativeCount(value: $.Slice<number>) {
		this._fields.NegativeCount = value
	}

	// Positive buckets for the native histogram.
	// Use a no-op span (offset 0, length 0) for a native histogram without any
	// observations yet and with a zero_threshold of 0. Otherwise, it would be
	// indistinguishable from a classic histogram.
	public get PositiveSpan(): $.Slice<BucketSpan | $.VarRef<BucketSpan> | null> {
		return this._fields.PositiveSpan
	}

	public set PositiveSpan(value: $.Slice<BucketSpan | $.VarRef<BucketSpan> | null>) {
		this._fields.PositiveSpan = value
	}

	// Use either "positive_delta" or "positive_count", the former for
	// regular histograms with integer counts, the latter for float
	// histograms.
	public get PositiveDelta(): $.Slice<bigint> {
		return this._fields.PositiveDelta
	}

	public set PositiveDelta(value: $.Slice<bigint>) {
		this._fields.PositiveDelta = value
	}

	public get PositiveCount(): $.Slice<number> {
		return this._fields.PositiveCount
	}

	public set PositiveCount(value: $.Slice<number>) {
		this._fields.PositiveCount = value
	}

	// Only used for native histograms. These exemplars MUST have a timestamp.
	public get Exemplars(): $.Slice<Exemplar | $.VarRef<Exemplar> | null> {
		return this._fields.Exemplars
	}

	public set Exemplars(value: $.Slice<Exemplar | $.VarRef<Exemplar> | null>) {
		this._fields.Exemplars = value
	}

	public _fields: {
		state: protoimpl.MessageState
		sizeCache: protoimpl.SizeCache
		unknownFields: protoimpl.UnknownFields
		SampleCount: $.VarRef<bigint> | null
		SampleCountFloat: $.VarRef<number> | null
		SampleSum: $.VarRef<number> | null
		Bucket: $.Slice<Bucket | $.VarRef<Bucket> | null>
		CreatedTimestamp: timestamppb.Timestamp | $.VarRef<timestamppb.Timestamp> | null
		Schema: $.VarRef<number> | null
		ZeroThreshold: $.VarRef<number> | null
		ZeroCount: $.VarRef<bigint> | null
		ZeroCountFloat: $.VarRef<number> | null
		NegativeSpan: $.Slice<BucketSpan | $.VarRef<BucketSpan> | null>
		NegativeDelta: $.Slice<bigint>
		NegativeCount: $.Slice<number>
		PositiveSpan: $.Slice<BucketSpan | $.VarRef<BucketSpan> | null>
		PositiveDelta: $.Slice<bigint>
		PositiveCount: $.Slice<number>
		Exemplars: $.Slice<Exemplar | $.VarRef<Exemplar> | null>
	}

	constructor(init?: Partial<{state?: protoimpl.MessageState, sizeCache?: protoimpl.SizeCache, unknownFields?: protoimpl.UnknownFields, SampleCount?: $.VarRef<bigint> | null, SampleCountFloat?: $.VarRef<number> | null, SampleSum?: $.VarRef<number> | null, Bucket?: $.Slice<Bucket | $.VarRef<Bucket> | null>, CreatedTimestamp?: timestamppb.Timestamp | $.VarRef<timestamppb.Timestamp> | null, Schema?: $.VarRef<number> | null, ZeroThreshold?: $.VarRef<number> | null, ZeroCount?: $.VarRef<bigint> | null, ZeroCountFloat?: $.VarRef<number> | null, NegativeSpan?: $.Slice<BucketSpan | $.VarRef<BucketSpan> | null>, NegativeDelta?: $.Slice<bigint>, NegativeCount?: $.Slice<number>, PositiveSpan?: $.Slice<BucketSpan | $.VarRef<BucketSpan> | null>, PositiveDelta?: $.Slice<bigint>, PositiveCount?: $.Slice<number>, Exemplars?: $.Slice<Exemplar | $.VarRef<Exemplar> | null>}>, __goscriptValue?: boolean) {
		this._fields = {
			state: init?.state ? init.state.clone() : new impl.MessageState(undefined, true),
			sizeCache: init?.sizeCache ?? (0 as protoimpl.SizeCache),
			unknownFields: init?.unknownFields ?? (null! as protoimpl.UnknownFields),
			SampleCount: init?.SampleCount ?? (null! as $.VarRef<bigint> | null),
			SampleCountFloat: init?.SampleCountFloat ?? (null! as $.VarRef<number> | null),
			SampleSum: init?.SampleSum ?? (null! as $.VarRef<number> | null),
			Bucket: init?.Bucket ?? (null! as $.Slice<Bucket | $.VarRef<Bucket> | null>),
			CreatedTimestamp: init?.CreatedTimestamp ?? (null! as timestamppb.Timestamp | $.VarRef<timestamppb.Timestamp> | null),
			Schema: init?.Schema ?? (null! as $.VarRef<number> | null),
			ZeroThreshold: init?.ZeroThreshold ?? (null! as $.VarRef<number> | null),
			ZeroCount: init?.ZeroCount ?? (null! as $.VarRef<bigint> | null),
			ZeroCountFloat: init?.ZeroCountFloat ?? (null! as $.VarRef<number> | null),
			NegativeSpan: init?.NegativeSpan ?? (null! as $.Slice<BucketSpan | $.VarRef<BucketSpan> | null>),
			NegativeDelta: init?.NegativeDelta ?? (null! as $.Slice<bigint>),
			NegativeCount: init?.NegativeCount ?? (null! as $.Slice<number>),
			PositiveSpan: init?.PositiveSpan ?? (null! as $.Slice<BucketSpan | $.VarRef<BucketSpan> | null>),
			PositiveDelta: init?.PositiveDelta ?? (null! as $.Slice<bigint>),
			PositiveCount: init?.PositiveCount ?? (null! as $.Slice<number>),
			Exemplars: init?.Exemplars ?? (null! as $.Slice<Exemplar | $.VarRef<Exemplar> | null>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Histogram {
		return new Histogram(this, true)
	}

	public __goscriptAssign(source: Histogram): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.state, values.state)
		target.sizeCache = values.sizeCache
		target.unknownFields = values.unknownFields
		target.SampleCount = values.SampleCount
		target.SampleCountFloat = values.SampleCountFloat
		target.SampleSum = values.SampleSum
		target.Bucket = values.Bucket
		target.CreatedTimestamp = values.CreatedTimestamp
		target.Schema = values.Schema
		target.ZeroThreshold = values.ZeroThreshold
		target.ZeroCount = values.ZeroCount
		target.ZeroCountFloat = values.ZeroCountFloat
		target.NegativeSpan = values.NegativeSpan
		target.NegativeDelta = values.NegativeDelta
		target.NegativeCount = values.NegativeCount
		target.PositiveSpan = values.PositiveSpan
		target.PositiveDelta = values.PositiveDelta
		target.PositiveCount = values.PositiveCount
		target.Exemplars = values.Exemplars
	}

	public async Descriptor(): globalThis.Promise<[$.Slice<number>, $.Slice<number>]> {
		return [await file_io_prometheus_client_metrics_proto_rawDescGZIP(), $.arrayToSlice<number>([6])]
	}

	public GetBucket(): $.Slice<Bucket | $.VarRef<Bucket> | null> {
		const x: Histogram | $.VarRef<Histogram> | null = this;
		if (x != null) {
			return $.pointerValue<Histogram>(x).Bucket
		}
		return null
	}

	public GetCreatedTimestamp(): timestamppb.Timestamp | $.VarRef<timestamppb.Timestamp> | null {
		const x: Histogram | $.VarRef<Histogram> | null = this;
		if (x != null) {
			return $.pointerValue<Histogram>(x).CreatedTimestamp
		}
		return null
	}

	public GetExemplars(): $.Slice<Exemplar | $.VarRef<Exemplar> | null> {
		const x: Histogram | $.VarRef<Histogram> | null = this;
		if (x != null) {
			return $.pointerValue<Histogram>(x).Exemplars
		}
		return null
	}

	public GetNegativeCount(): $.Slice<number> {
		const x: Histogram | $.VarRef<Histogram> | null = this;
		if (x != null) {
			return $.pointerValue<Histogram>(x).NegativeCount
		}
		return null
	}

	public GetNegativeDelta(): $.Slice<bigint> {
		const x: Histogram | $.VarRef<Histogram> | null = this;
		if (x != null) {
			return $.pointerValue<Histogram>(x).NegativeDelta
		}
		return null
	}

	public GetNegativeSpan(): $.Slice<BucketSpan | $.VarRef<BucketSpan> | null> {
		const x: Histogram | $.VarRef<Histogram> | null = this;
		if (x != null) {
			return $.pointerValue<Histogram>(x).NegativeSpan
		}
		return null
	}

	public GetPositiveCount(): $.Slice<number> {
		const x: Histogram | $.VarRef<Histogram> | null = this;
		if (x != null) {
			return $.pointerValue<Histogram>(x).PositiveCount
		}
		return null
	}

	public GetPositiveDelta(): $.Slice<bigint> {
		const x: Histogram | $.VarRef<Histogram> | null = this;
		if (x != null) {
			return $.pointerValue<Histogram>(x).PositiveDelta
		}
		return null
	}

	public GetPositiveSpan(): $.Slice<BucketSpan | $.VarRef<BucketSpan> | null> {
		const x: Histogram | $.VarRef<Histogram> | null = this;
		if (x != null) {
			return $.pointerValue<Histogram>(x).PositiveSpan
		}
		return null
	}

	public GetSampleCount(): bigint {
		const x: Histogram | $.VarRef<Histogram> | null = this;
		const x$: Histogram = x == null ? $.pointerTarget<Histogram>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<Histogram>(x)
		if ((x != null) && ((x$ as Histogram).SampleCount != null)) {
			return $.pointerValue<bigint>((x$ as Histogram).SampleCount)
		}
		return 0n
	}

	public GetSampleCountFloat(): number {
		const x: Histogram | $.VarRef<Histogram> | null = this;
		const x$: Histogram = x == null ? $.pointerTarget<Histogram>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<Histogram>(x)
		if ((x != null) && ((x$ as Histogram).SampleCountFloat != null)) {
			return $.pointerValue<number>((x$ as Histogram).SampleCountFloat)
		}
		return 0
	}

	public GetSampleSum(): number {
		const x: Histogram | $.VarRef<Histogram> | null = this;
		const x$: Histogram = x == null ? $.pointerTarget<Histogram>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<Histogram>(x)
		if ((x != null) && ((x$ as Histogram).SampleSum != null)) {
			return $.pointerValue<number>((x$ as Histogram).SampleSum)
		}
		return 0
	}

	public GetSchema(): number {
		const x: Histogram | $.VarRef<Histogram> | null = this;
		const x$: Histogram = x == null ? $.pointerTarget<Histogram>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<Histogram>(x)
		if ((x != null) && ((x$ as Histogram).Schema != null)) {
			return $.pointerValue<number>((x$ as Histogram).Schema)
		}
		return 0
	}

	public GetZeroCount(): bigint {
		const x: Histogram | $.VarRef<Histogram> | null = this;
		const x$: Histogram = x == null ? $.pointerTarget<Histogram>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<Histogram>(x)
		if ((x != null) && ((x$ as Histogram).ZeroCount != null)) {
			return $.pointerValue<bigint>((x$ as Histogram).ZeroCount)
		}
		return 0n
	}

	public GetZeroCountFloat(): number {
		const x: Histogram | $.VarRef<Histogram> | null = this;
		const x$: Histogram = x == null ? $.pointerTarget<Histogram>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<Histogram>(x)
		if ((x != null) && ((x$ as Histogram).ZeroCountFloat != null)) {
			return $.pointerValue<number>((x$ as Histogram).ZeroCountFloat)
		}
		return 0
	}

	public GetZeroThreshold(): number {
		const x: Histogram | $.VarRef<Histogram> | null = this;
		const x$: Histogram = x == null ? $.pointerTarget<Histogram>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<Histogram>(x)
		if ((x != null) && ((x$ as Histogram).ZeroThreshold != null)) {
			return $.pointerValue<number>((x$ as Histogram).ZeroThreshold)
		}
		return 0
	}

	public ProtoMessage(): void {
	}

	public async ProtoReflect(): globalThis.Promise<protoreflect.Message | null> {
		const x: Histogram | $.VarRef<Histogram> | null = this;
		let mi: impl.MessageInfo | $.VarRef<impl.MessageInfo> | null = $.indexRef(file_io_prometheus_client_metrics_proto_msgTypes!, 6)
		if (protoimpl.UnsafeEnabled && (x != null)) {
			let ms: impl.messageState | $.VarRef<impl.messageState> | null = $.pointerValue<impl.Export>(protoimpl.X).MessageStateOf($.interfaceValue<protoimpl.Pointer | null>(x, "*io_prometheus_client.Histogram", /* @__PURE__ */ $.pointerType("io_prometheus_client.Histogram")))
			if ($.pointerValue<any>(ms).LoadMessageInfo() == null) {
				$.pointerValue<any>(ms).StoreMessageInfo(mi)
			}
			return $.interfaceValue<protoreflect.Message | null>(ms, "*impl.messageState", /* @__PURE__ */ $.pointerType("impl.messageState"))
		}
		return (mi !== null && (mi as any).__isVarRef !== true && (mi as any).__goValue === undefined ? ((mi as any) as impl.MessageInfo).MessageOf($.interfaceValue(x, "*io_prometheus_client.Histogram", /* @__PURE__ */ $.pointerType("io_prometheus_client.Histogram"))) : impl.MessageInfo.prototype.MessageOf.call(mi, $.interfaceValue(x, "*io_prometheus_client.Histogram", /* @__PURE__ */ $.pointerType("io_prometheus_client.Histogram"))))
	}

	public Reset(): void {
		let x: Histogram | $.VarRef<Histogram> | null = this;
		$.assignStruct($.pointerValue<Histogram>(x), $.markAsStructValue(new Histogram()))
		if (protoimpl.UnsafeEnabled) {
			let mi: impl.MessageInfo | $.VarRef<impl.MessageInfo> | null = $.indexRef(file_io_prometheus_client_metrics_proto_msgTypes!, 6)
			let ms: impl.messageState | $.VarRef<impl.messageState> | null = $.pointerValue<impl.Export>(protoimpl.X).MessageStateOf($.interfaceValue<protoimpl.Pointer | null>(x, "*io_prometheus_client.Histogram", /* @__PURE__ */ $.pointerType("io_prometheus_client.Histogram")))
			$.pointerValue<any>(ms).StoreMessageInfo(mi)
		}
	}

	public String(): string {
		const x: Histogram | $.VarRef<Histogram> | null = this;
		return await $.markAsStructValue($.cloneStructValue($.pointerValue<impl.Export>(protoimpl.X))).MessageStringOf($.interfaceValue<protoreflect.ProtoMessage | null>(x, "*io_prometheus_client.Histogram", /* @__PURE__ */ $.pointerType("io_prometheus_client.Histogram")))
	}

	static __typeInfo = $.registerStructType(
		"io_prometheus_client.Histogram",
		() => new Histogram(),
		() => [$.methodSignature("Descriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))], true), $.methodSignature("GetBucket", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("io_prometheus_client.Bucket"))], true), $.methodSignature("GetCreatedTimestamp", [], [/* @__PURE__ */ $.pointerType("timestamppb.Timestamp")], true), $.methodSignature("GetExemplars", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("io_prometheus_client.Exemplar"))], true), $.methodSignature("GetNegativeCount", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("float64"))], true), $.methodSignature("GetNegativeDelta", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int64"))], true), $.methodSignature("GetNegativeSpan", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("io_prometheus_client.BucketSpan"))], true), $.methodSignature("GetPositiveCount", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("float64"))], true), $.methodSignature("GetPositiveDelta", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int64"))], true), $.methodSignature("GetPositiveSpan", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("io_prometheus_client.BucketSpan"))], true), $.methodSignature("GetSampleCount", [], [/* @__PURE__ */ $.basicType("uint64")], true), $.methodSignature("GetSampleCountFloat", [], [/* @__PURE__ */ $.basicType("float64")], true), $.methodSignature("GetSampleSum", [], [/* @__PURE__ */ $.basicType("float64")], true), $.methodSignature("GetSchema", [], [/* @__PURE__ */ $.basicType("int32")], true), $.methodSignature("GetZeroCount", [], [/* @__PURE__ */ $.basicType("uint64")], true), $.methodSignature("GetZeroCountFloat", [], [/* @__PURE__ */ $.basicType("float64")], true), $.methodSignature("GetZeroThreshold", [], [/* @__PURE__ */ $.basicType("float64")], true), $.methodSignature("ProtoMessage", [], [], true), $.methodSignature("ProtoReflect", [], ["protoreflect.Message"], true), $.methodSignature("Reset", [], [], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true)],
		Histogram,
		() => [/* @__PURE__ */ $.structField("state", "impl.MessageState", [0], 0, false, { pkgPath: "github.com/prometheus/client_model/go" }), /* @__PURE__ */ $.structField("sizeCache", /* @__PURE__ */ $.basicType("int32"), [1], 8, false, { pkgPath: "github.com/prometheus/client_model/go" }), /* @__PURE__ */ $.structField("unknownFields", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [2], 16, false, { pkgPath: "github.com/prometheus/client_model/go" }), /* @__PURE__ */ $.structField("SampleCount", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint64")), [3], 40, true, { tag: "protobuf:\"varint,1,opt,name=sample_count,json=sampleCount\" json:\"sample_count,omitempty\"" }), /* @__PURE__ */ $.structField("SampleCountFloat", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("float64")), [4], 48, true, { tag: "protobuf:\"fixed64,4,opt,name=sample_count_float,json=sampleCountFloat\" json:\"sample_count_float,omitempty\"" }), /* @__PURE__ */ $.structField("SampleSum", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("float64")), [5], 56, true, { tag: "protobuf:\"fixed64,2,opt,name=sample_sum,json=sampleSum\" json:\"sample_sum,omitempty\"" }), /* @__PURE__ */ $.structField("Bucket", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("io_prometheus_client.Bucket")), [6], 64, true, { tag: "protobuf:\"bytes,3,rep,name=bucket\" json:\"bucket,omitempty\"" }), /* @__PURE__ */ $.structField("CreatedTimestamp", /* @__PURE__ */ $.pointerType("timestamppb.Timestamp"), [7], 88, true, { tag: "protobuf:\"bytes,15,opt,name=created_timestamp,json=createdTimestamp\" json:\"created_timestamp,omitempty\"" }), /* @__PURE__ */ $.structField("Schema", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32")), [8], 96, true, { tag: "protobuf:\"zigzag32,5,opt,name=schema\" json:\"schema,omitempty\"" }), /* @__PURE__ */ $.structField("ZeroThreshold", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("float64")), [9], 104, true, { tag: "protobuf:\"fixed64,6,opt,name=zero_threshold,json=zeroThreshold\" json:\"zero_threshold,omitempty\"" }), /* @__PURE__ */ $.structField("ZeroCount", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint64")), [10], 112, true, { tag: "protobuf:\"varint,7,opt,name=zero_count,json=zeroCount\" json:\"zero_count,omitempty\"" }), /* @__PURE__ */ $.structField("ZeroCountFloat", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("float64")), [11], 120, true, { tag: "protobuf:\"fixed64,8,opt,name=zero_count_float,json=zeroCountFloat\" json:\"zero_count_float,omitempty\"" }), /* @__PURE__ */ $.structField("NegativeSpan", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("io_prometheus_client.BucketSpan")), [12], 128, true, { tag: "protobuf:\"bytes,9,rep,name=negative_span,json=negativeSpan\" json:\"negative_span,omitempty\"" }), /* @__PURE__ */ $.structField("NegativeDelta", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int64")), [13], 152, true, { tag: "protobuf:\"zigzag64,10,rep,name=negative_delta,json=negativeDelta\" json:\"negative_delta,omitempty\"" }), /* @__PURE__ */ $.structField("NegativeCount", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("float64")), [14], 176, true, { tag: "protobuf:\"fixed64,11,rep,name=negative_count,json=negativeCount\" json:\"negative_count,omitempty\"" }), /* @__PURE__ */ $.structField("PositiveSpan", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("io_prometheus_client.BucketSpan")), [15], 200, true, { tag: "protobuf:\"bytes,12,rep,name=positive_span,json=positiveSpan\" json:\"positive_span,omitempty\"" }), /* @__PURE__ */ $.structField("PositiveDelta", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int64")), [16], 224, true, { tag: "protobuf:\"zigzag64,13,rep,name=positive_delta,json=positiveDelta\" json:\"positive_delta,omitempty\"" }), /* @__PURE__ */ $.structField("PositiveCount", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("float64")), [17], 248, true, { tag: "protobuf:\"fixed64,14,rep,name=positive_count,json=positiveCount\" json:\"positive_count,omitempty\"" }), /* @__PURE__ */ $.structField("Exemplars", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("io_prometheus_client.Exemplar")), [18], 272, true, { tag: "protobuf:\"bytes,16,rep,name=exemplars\" json:\"exemplars,omitempty\"" })]
	)
}

export class Bucket {
	public get state(): protoimpl.MessageState {
		return this._fields.state
	}

	public set state(value: protoimpl.MessageState) {
		this._fields.state = value
	}

	public get sizeCache(): protoimpl.SizeCache {
		return this._fields.sizeCache
	}

	public set sizeCache(value: protoimpl.SizeCache) {
		this._fields.sizeCache = value
	}

	public get unknownFields(): protoimpl.UnknownFields {
		return this._fields.unknownFields
	}

	public set unknownFields(value: protoimpl.UnknownFields) {
		this._fields.unknownFields = value
	}

	public get CumulativeCount(): $.VarRef<bigint> | null {
		return this._fields.CumulativeCount
	}

	public set CumulativeCount(value: $.VarRef<bigint> | null) {
		this._fields.CumulativeCount = value
	}

	public get CumulativeCountFloat(): $.VarRef<number> | null {
		return this._fields.CumulativeCountFloat
	}

	public set CumulativeCountFloat(value: $.VarRef<number> | null) {
		this._fields.CumulativeCountFloat = value
	}

	public get UpperBound(): $.VarRef<number> | null {
		return this._fields.UpperBound
	}

	public set UpperBound(value: $.VarRef<number> | null) {
		this._fields.UpperBound = value
	}

	public get Exemplar(): Exemplar | $.VarRef<Exemplar> | null {
		return this._fields.Exemplar
	}

	public set Exemplar(value: Exemplar | $.VarRef<Exemplar> | null) {
		this._fields.Exemplar = value
	}

	public _fields: {
		state: protoimpl.MessageState
		sizeCache: protoimpl.SizeCache
		unknownFields: protoimpl.UnknownFields
		CumulativeCount: $.VarRef<bigint> | null
		CumulativeCountFloat: $.VarRef<number> | null
		UpperBound: $.VarRef<number> | null
		Exemplar: Exemplar | $.VarRef<Exemplar> | null
	}

	constructor(init?: Partial<{state?: protoimpl.MessageState, sizeCache?: protoimpl.SizeCache, unknownFields?: protoimpl.UnknownFields, CumulativeCount?: $.VarRef<bigint> | null, CumulativeCountFloat?: $.VarRef<number> | null, UpperBound?: $.VarRef<number> | null, Exemplar?: Exemplar | $.VarRef<Exemplar> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			state: init?.state ? init.state.clone() : new impl.MessageState(undefined, true),
			sizeCache: init?.sizeCache ?? (0 as protoimpl.SizeCache),
			unknownFields: init?.unknownFields ?? (null! as protoimpl.UnknownFields),
			CumulativeCount: init?.CumulativeCount ?? (null! as $.VarRef<bigint> | null),
			CumulativeCountFloat: init?.CumulativeCountFloat ?? (null! as $.VarRef<number> | null),
			UpperBound: init?.UpperBound ?? (null! as $.VarRef<number> | null),
			Exemplar: init?.Exemplar ?? (null! as Exemplar | $.VarRef<Exemplar> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Bucket {
		return new Bucket(this, true)
	}

	public __goscriptAssign(source: Bucket): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.state, values.state)
		target.sizeCache = values.sizeCache
		target.unknownFields = values.unknownFields
		target.CumulativeCount = values.CumulativeCount
		target.CumulativeCountFloat = values.CumulativeCountFloat
		target.UpperBound = values.UpperBound
		target.Exemplar = values.Exemplar
	}

	public async Descriptor(): globalThis.Promise<[$.Slice<number>, $.Slice<number>]> {
		return [await file_io_prometheus_client_metrics_proto_rawDescGZIP(), $.arrayToSlice<number>([7])]
	}

	public GetCumulativeCount(): bigint {
		const x: Bucket | $.VarRef<Bucket> | null = this;
		const x$: Bucket = x == null ? $.pointerTarget<Bucket>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<Bucket>(x)
		if ((x != null) && ((x$ as Bucket).CumulativeCount != null)) {
			return $.pointerValue<bigint>((x$ as Bucket).CumulativeCount)
		}
		return 0n
	}

	public GetCumulativeCountFloat(): number {
		const x: Bucket | $.VarRef<Bucket> | null = this;
		const x$: Bucket = x == null ? $.pointerTarget<Bucket>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<Bucket>(x)
		if ((x != null) && ((x$ as Bucket).CumulativeCountFloat != null)) {
			return $.pointerValue<number>((x$ as Bucket).CumulativeCountFloat)
		}
		return 0
	}

	public GetExemplar(): Exemplar | $.VarRef<Exemplar> | null {
		const x: Bucket | $.VarRef<Bucket> | null = this;
		if (x != null) {
			return $.pointerValue<Bucket>(x).Exemplar
		}
		return null
	}

	public GetUpperBound(): number {
		const x: Bucket | $.VarRef<Bucket> | null = this;
		const x$: Bucket = x == null ? $.pointerTarget<Bucket>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<Bucket>(x)
		if ((x != null) && ((x$ as Bucket).UpperBound != null)) {
			return $.pointerValue<number>((x$ as Bucket).UpperBound)
		}
		return 0
	}

	public ProtoMessage(): void {
	}

	public async ProtoReflect(): globalThis.Promise<protoreflect.Message | null> {
		const x: Bucket | $.VarRef<Bucket> | null = this;
		let mi: impl.MessageInfo | $.VarRef<impl.MessageInfo> | null = $.indexRef(file_io_prometheus_client_metrics_proto_msgTypes!, 7)
		if (protoimpl.UnsafeEnabled && (x != null)) {
			let ms: impl.messageState | $.VarRef<impl.messageState> | null = $.pointerValue<impl.Export>(protoimpl.X).MessageStateOf($.interfaceValue<protoimpl.Pointer | null>(x, "*io_prometheus_client.Bucket", /* @__PURE__ */ $.pointerType("io_prometheus_client.Bucket")))
			if ($.pointerValue<any>(ms).LoadMessageInfo() == null) {
				$.pointerValue<any>(ms).StoreMessageInfo(mi)
			}
			return $.interfaceValue<protoreflect.Message | null>(ms, "*impl.messageState", /* @__PURE__ */ $.pointerType("impl.messageState"))
		}
		return (mi !== null && (mi as any).__isVarRef !== true && (mi as any).__goValue === undefined ? ((mi as any) as impl.MessageInfo).MessageOf($.interfaceValue(x, "*io_prometheus_client.Bucket", /* @__PURE__ */ $.pointerType("io_prometheus_client.Bucket"))) : impl.MessageInfo.prototype.MessageOf.call(mi, $.interfaceValue(x, "*io_prometheus_client.Bucket", /* @__PURE__ */ $.pointerType("io_prometheus_client.Bucket"))))
	}

	public Reset(): void {
		let x: Bucket | $.VarRef<Bucket> | null = this;
		$.assignStruct($.pointerValue<Bucket>(x), $.markAsStructValue(new Bucket()))
		if (protoimpl.UnsafeEnabled) {
			let mi: impl.MessageInfo | $.VarRef<impl.MessageInfo> | null = $.indexRef(file_io_prometheus_client_metrics_proto_msgTypes!, 7)
			let ms: impl.messageState | $.VarRef<impl.messageState> | null = $.pointerValue<impl.Export>(protoimpl.X).MessageStateOf($.interfaceValue<protoimpl.Pointer | null>(x, "*io_prometheus_client.Bucket", /* @__PURE__ */ $.pointerType("io_prometheus_client.Bucket")))
			$.pointerValue<any>(ms).StoreMessageInfo(mi)
		}
	}

	public String(): string {
		const x: Bucket | $.VarRef<Bucket> | null = this;
		return await $.markAsStructValue($.cloneStructValue($.pointerValue<impl.Export>(protoimpl.X))).MessageStringOf($.interfaceValue<protoreflect.ProtoMessage | null>(x, "*io_prometheus_client.Bucket", /* @__PURE__ */ $.pointerType("io_prometheus_client.Bucket")))
	}

	static __typeInfo = $.registerStructType(
		"io_prometheus_client.Bucket",
		() => new Bucket(),
		() => [$.methodSignature("Descriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))], true), $.methodSignature("GetCumulativeCount", [], [/* @__PURE__ */ $.basicType("uint64")], true), $.methodSignature("GetCumulativeCountFloat", [], [/* @__PURE__ */ $.basicType("float64")], true), $.methodSignature("GetExemplar", [], [/* @__PURE__ */ $.pointerType("io_prometheus_client.Exemplar")], true), $.methodSignature("GetUpperBound", [], [/* @__PURE__ */ $.basicType("float64")], true), $.methodSignature("ProtoMessage", [], [], true), $.methodSignature("ProtoReflect", [], ["protoreflect.Message"], true), $.methodSignature("Reset", [], [], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true)],
		Bucket,
		() => [/* @__PURE__ */ $.structField("state", "impl.MessageState", [0], 0, false, { pkgPath: "github.com/prometheus/client_model/go" }), /* @__PURE__ */ $.structField("sizeCache", /* @__PURE__ */ $.basicType("int32"), [1], 8, false, { pkgPath: "github.com/prometheus/client_model/go" }), /* @__PURE__ */ $.structField("unknownFields", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [2], 16, false, { pkgPath: "github.com/prometheus/client_model/go" }), /* @__PURE__ */ $.structField("CumulativeCount", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint64")), [3], 40, true, { tag: "protobuf:\"varint,1,opt,name=cumulative_count,json=cumulativeCount\" json:\"cumulative_count,omitempty\"" }), /* @__PURE__ */ $.structField("CumulativeCountFloat", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("float64")), [4], 48, true, { tag: "protobuf:\"fixed64,4,opt,name=cumulative_count_float,json=cumulativeCountFloat\" json:\"cumulative_count_float,omitempty\"" }), /* @__PURE__ */ $.structField("UpperBound", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("float64")), [5], 56, true, { tag: "protobuf:\"fixed64,2,opt,name=upper_bound,json=upperBound\" json:\"upper_bound,omitempty\"" }), /* @__PURE__ */ $.structField("Exemplar", /* @__PURE__ */ $.pointerType("io_prometheus_client.Exemplar"), [6], 64, true, { tag: "protobuf:\"bytes,3,opt,name=exemplar\" json:\"exemplar,omitempty\"" })]
	)
}

export class BucketSpan {
	public get state(): protoimpl.MessageState {
		return this._fields.state
	}

	public set state(value: protoimpl.MessageState) {
		this._fields.state = value
	}

	public get sizeCache(): protoimpl.SizeCache {
		return this._fields.sizeCache
	}

	public set sizeCache(value: protoimpl.SizeCache) {
		this._fields.sizeCache = value
	}

	public get unknownFields(): protoimpl.UnknownFields {
		return this._fields.unknownFields
	}

	public set unknownFields(value: protoimpl.UnknownFields) {
		this._fields.unknownFields = value
	}

	public get Offset(): $.VarRef<number> | null {
		return this._fields.Offset
	}

	public set Offset(value: $.VarRef<number> | null) {
		this._fields.Offset = value
	}

	public get Length(): $.VarRef<number> | null {
		return this._fields.Length
	}

	public set Length(value: $.VarRef<number> | null) {
		this._fields.Length = value
	}

	public _fields: {
		state: protoimpl.MessageState
		sizeCache: protoimpl.SizeCache
		unknownFields: protoimpl.UnknownFields
		Offset: $.VarRef<number> | null
		Length: $.VarRef<number> | null
	}

	constructor(init?: Partial<{state?: protoimpl.MessageState, sizeCache?: protoimpl.SizeCache, unknownFields?: protoimpl.UnknownFields, Offset?: $.VarRef<number> | null, Length?: $.VarRef<number> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			state: init?.state ? init.state.clone() : new impl.MessageState(undefined, true),
			sizeCache: init?.sizeCache ?? (0 as protoimpl.SizeCache),
			unknownFields: init?.unknownFields ?? (null! as protoimpl.UnknownFields),
			Offset: init?.Offset ?? (null! as $.VarRef<number> | null),
			Length: init?.Length ?? (null! as $.VarRef<number> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): BucketSpan {
		return new BucketSpan(this, true)
	}

	public __goscriptAssign(source: BucketSpan): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.state, values.state)
		target.sizeCache = values.sizeCache
		target.unknownFields = values.unknownFields
		target.Offset = values.Offset
		target.Length = values.Length
	}

	public async Descriptor(): globalThis.Promise<[$.Slice<number>, $.Slice<number>]> {
		return [await file_io_prometheus_client_metrics_proto_rawDescGZIP(), $.arrayToSlice<number>([8])]
	}

	public GetLength(): number {
		const x: BucketSpan | $.VarRef<BucketSpan> | null = this;
		const x$: BucketSpan = x == null ? $.pointerTarget<BucketSpan>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<BucketSpan>(x)
		if ((x != null) && ((x$ as BucketSpan).Length != null)) {
			return $.pointerValue<number>((x$ as BucketSpan).Length)
		}
		return 0
	}

	public GetOffset(): number {
		const x: BucketSpan | $.VarRef<BucketSpan> | null = this;
		const x$: BucketSpan = x == null ? $.pointerTarget<BucketSpan>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<BucketSpan>(x)
		if ((x != null) && ((x$ as BucketSpan).Offset != null)) {
			return $.pointerValue<number>((x$ as BucketSpan).Offset)
		}
		return 0
	}

	public ProtoMessage(): void {
	}

	public async ProtoReflect(): globalThis.Promise<protoreflect.Message | null> {
		const x: BucketSpan | $.VarRef<BucketSpan> | null = this;
		let mi: impl.MessageInfo | $.VarRef<impl.MessageInfo> | null = $.indexRef(file_io_prometheus_client_metrics_proto_msgTypes!, 8)
		if (protoimpl.UnsafeEnabled && (x != null)) {
			let ms: impl.messageState | $.VarRef<impl.messageState> | null = $.pointerValue<impl.Export>(protoimpl.X).MessageStateOf($.interfaceValue<protoimpl.Pointer | null>(x, "*io_prometheus_client.BucketSpan", /* @__PURE__ */ $.pointerType("io_prometheus_client.BucketSpan")))
			if ($.pointerValue<any>(ms).LoadMessageInfo() == null) {
				$.pointerValue<any>(ms).StoreMessageInfo(mi)
			}
			return $.interfaceValue<protoreflect.Message | null>(ms, "*impl.messageState", /* @__PURE__ */ $.pointerType("impl.messageState"))
		}
		return impl.MessageInfo.prototype.MessageOf.call(mi, $.interfaceValue(x, "*io_prometheus_client.BucketSpan", /* @__PURE__ */ $.pointerType("io_prometheus_client.BucketSpan")))
	}

	public Reset(): void {
		let x: BucketSpan | $.VarRef<BucketSpan> | null = this;
		$.assignStruct($.pointerValue<BucketSpan>(x), $.markAsStructValue(new BucketSpan()))
		if (protoimpl.UnsafeEnabled) {
			let mi: impl.MessageInfo | $.VarRef<impl.MessageInfo> | null = $.indexRef(file_io_prometheus_client_metrics_proto_msgTypes!, 8)
			let ms: impl.messageState | $.VarRef<impl.messageState> | null = $.pointerValue<impl.Export>(protoimpl.X).MessageStateOf($.interfaceValue<protoimpl.Pointer | null>(x, "*io_prometheus_client.BucketSpan", /* @__PURE__ */ $.pointerType("io_prometheus_client.BucketSpan")))
			$.pointerValue<any>(ms).StoreMessageInfo(mi)
		}
	}

	public String(): string {
		const x: BucketSpan | $.VarRef<BucketSpan> | null = this;
		return await $.markAsStructValue($.cloneStructValue($.pointerValue<impl.Export>(protoimpl.X))).MessageStringOf($.interfaceValue<protoreflect.ProtoMessage | null>(x, "*io_prometheus_client.BucketSpan", /* @__PURE__ */ $.pointerType("io_prometheus_client.BucketSpan")))
	}

	static __typeInfo = $.registerStructType(
		"io_prometheus_client.BucketSpan",
		() => new BucketSpan(),
		() => [$.methodSignature("Descriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))], true), $.methodSignature("GetLength", [], [/* @__PURE__ */ $.basicType("uint32")], true), $.methodSignature("GetOffset", [], [/* @__PURE__ */ $.basicType("int32")], true), $.methodSignature("ProtoMessage", [], [], true), $.methodSignature("ProtoReflect", [], ["protoreflect.Message"], true), $.methodSignature("Reset", [], [], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true)],
		BucketSpan,
		() => [/* @__PURE__ */ $.structField("state", "impl.MessageState", [0], 0, false, { pkgPath: "github.com/prometheus/client_model/go" }), /* @__PURE__ */ $.structField("sizeCache", /* @__PURE__ */ $.basicType("int32"), [1], 8, false, { pkgPath: "github.com/prometheus/client_model/go" }), /* @__PURE__ */ $.structField("unknownFields", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [2], 16, false, { pkgPath: "github.com/prometheus/client_model/go" }), /* @__PURE__ */ $.structField("Offset", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32")), [3], 40, true, { tag: "protobuf:\"zigzag32,1,opt,name=offset\" json:\"offset,omitempty\"" }), /* @__PURE__ */ $.structField("Length", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("uint32")), [4], 48, true, { tag: "protobuf:\"varint,2,opt,name=length\" json:\"length,omitempty\"" })]
	)
}

export class Exemplar {
	public get state(): protoimpl.MessageState {
		return this._fields.state
	}

	public set state(value: protoimpl.MessageState) {
		this._fields.state = value
	}

	public get sizeCache(): protoimpl.SizeCache {
		return this._fields.sizeCache
	}

	public set sizeCache(value: protoimpl.SizeCache) {
		this._fields.sizeCache = value
	}

	public get unknownFields(): protoimpl.UnknownFields {
		return this._fields.unknownFields
	}

	public set unknownFields(value: protoimpl.UnknownFields) {
		this._fields.unknownFields = value
	}

	public get Label(): $.Slice<LabelPair | $.VarRef<LabelPair> | null> {
		return this._fields.Label
	}

	public set Label(value: $.Slice<LabelPair | $.VarRef<LabelPair> | null>) {
		this._fields.Label = value
	}

	public get Value(): $.VarRef<number> | null {
		return this._fields.Value
	}

	public set Value(value: $.VarRef<number> | null) {
		this._fields.Value = value
	}

	public get Timestamp(): timestamppb.Timestamp | $.VarRef<timestamppb.Timestamp> | null {
		return this._fields.Timestamp
	}

	public set Timestamp(value: timestamppb.Timestamp | $.VarRef<timestamppb.Timestamp> | null) {
		this._fields.Timestamp = value
	}

	public _fields: {
		state: protoimpl.MessageState
		sizeCache: protoimpl.SizeCache
		unknownFields: protoimpl.UnknownFields
		Label: $.Slice<LabelPair | $.VarRef<LabelPair> | null>
		Value: $.VarRef<number> | null
		Timestamp: timestamppb.Timestamp | $.VarRef<timestamppb.Timestamp> | null
	}

	constructor(init?: Partial<{state?: protoimpl.MessageState, sizeCache?: protoimpl.SizeCache, unknownFields?: protoimpl.UnknownFields, Label?: $.Slice<LabelPair | $.VarRef<LabelPair> | null>, Value?: $.VarRef<number> | null, Timestamp?: timestamppb.Timestamp | $.VarRef<timestamppb.Timestamp> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			state: init?.state ? init.state.clone() : new impl.MessageState(undefined, true),
			sizeCache: init?.sizeCache ?? (0 as protoimpl.SizeCache),
			unknownFields: init?.unknownFields ?? (null! as protoimpl.UnknownFields),
			Label: init?.Label ?? (null! as $.Slice<LabelPair | $.VarRef<LabelPair> | null>),
			Value: init?.Value ?? (null! as $.VarRef<number> | null),
			Timestamp: init?.Timestamp ?? (null! as timestamppb.Timestamp | $.VarRef<timestamppb.Timestamp> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Exemplar {
		return new Exemplar(this, true)
	}

	public __goscriptAssign(source: Exemplar): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.state, values.state)
		target.sizeCache = values.sizeCache
		target.unknownFields = values.unknownFields
		target.Label = values.Label
		target.Value = values.Value
		target.Timestamp = values.Timestamp
	}

	public async Descriptor(): globalThis.Promise<[$.Slice<number>, $.Slice<number>]> {
		return [await file_io_prometheus_client_metrics_proto_rawDescGZIP(), $.arrayToSlice<number>([9])]
	}

	public GetLabel(): $.Slice<LabelPair | $.VarRef<LabelPair> | null> {
		const x: Exemplar | $.VarRef<Exemplar> | null = this;
		if (x != null) {
			return $.pointerValue<Exemplar>(x).Label
		}
		return null
	}

	public GetTimestamp(): timestamppb.Timestamp | $.VarRef<timestamppb.Timestamp> | null {
		const x: Exemplar | $.VarRef<Exemplar> | null = this;
		if (x != null) {
			return $.pointerValue<Exemplar>(x).Timestamp
		}
		return null
	}

	public GetValue(): number {
		const x: Exemplar | $.VarRef<Exemplar> | null = this;
		const x$: Exemplar = x == null ? $.pointerTarget<Exemplar>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<Exemplar>(x)
		if ((x != null) && ((x$ as Exemplar).Value != null)) {
			return $.pointerValue<number>((x$ as Exemplar).Value)
		}
		return 0
	}

	public ProtoMessage(): void {
	}

	public async ProtoReflect(): globalThis.Promise<protoreflect.Message | null> {
		const x: Exemplar | $.VarRef<Exemplar> | null = this;
		let mi: impl.MessageInfo | $.VarRef<impl.MessageInfo> | null = $.indexRef(file_io_prometheus_client_metrics_proto_msgTypes!, 9)
		if (protoimpl.UnsafeEnabled && (x != null)) {
			let ms: impl.messageState | $.VarRef<impl.messageState> | null = $.pointerValue<impl.Export>(protoimpl.X).MessageStateOf($.interfaceValue<protoimpl.Pointer | null>(x, "*io_prometheus_client.Exemplar", /* @__PURE__ */ $.pointerType("io_prometheus_client.Exemplar")))
			if ($.pointerValue<any>(ms).LoadMessageInfo() == null) {
				$.pointerValue<any>(ms).StoreMessageInfo(mi)
			}
			return $.interfaceValue<protoreflect.Message | null>(ms, "*impl.messageState", /* @__PURE__ */ $.pointerType("impl.messageState"))
		}
		return (mi !== null && (mi as any).__isVarRef !== true && (mi as any).__goValue === undefined ? ((mi as any) as impl.MessageInfo).MessageOf($.interfaceValue(x, "*io_prometheus_client.Exemplar", /* @__PURE__ */ $.pointerType("io_prometheus_client.Exemplar"))) : impl.MessageInfo.prototype.MessageOf.call(mi, $.interfaceValue(x, "*io_prometheus_client.Exemplar", /* @__PURE__ */ $.pointerType("io_prometheus_client.Exemplar"))))
	}

	public Reset(): void {
		let x: Exemplar | $.VarRef<Exemplar> | null = this;
		$.assignStruct($.pointerValue<Exemplar>(x), $.markAsStructValue(new Exemplar()))
		if (protoimpl.UnsafeEnabled) {
			let mi: impl.MessageInfo | $.VarRef<impl.MessageInfo> | null = $.indexRef(file_io_prometheus_client_metrics_proto_msgTypes!, 9)
			let ms: impl.messageState | $.VarRef<impl.messageState> | null = $.pointerValue<impl.Export>(protoimpl.X).MessageStateOf($.interfaceValue<protoimpl.Pointer | null>(x, "*io_prometheus_client.Exemplar", /* @__PURE__ */ $.pointerType("io_prometheus_client.Exemplar")))
			$.pointerValue<any>(ms).StoreMessageInfo(mi)
		}
	}

	public String(): string {
		const x: Exemplar | $.VarRef<Exemplar> | null = this;
		return await $.markAsStructValue($.cloneStructValue($.pointerValue<impl.Export>(protoimpl.X))).MessageStringOf($.interfaceValue<protoreflect.ProtoMessage | null>(x, "*io_prometheus_client.Exemplar", /* @__PURE__ */ $.pointerType("io_prometheus_client.Exemplar")))
	}

	static __typeInfo = $.registerStructType(
		"io_prometheus_client.Exemplar",
		() => new Exemplar(),
		() => [$.methodSignature("Descriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))], true), $.methodSignature("GetLabel", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("io_prometheus_client.LabelPair"))], true), $.methodSignature("GetTimestamp", [], [/* @__PURE__ */ $.pointerType("timestamppb.Timestamp")], true), $.methodSignature("GetValue", [], [/* @__PURE__ */ $.basicType("float64")], true), $.methodSignature("ProtoMessage", [], [], true), $.methodSignature("ProtoReflect", [], ["protoreflect.Message"], true), $.methodSignature("Reset", [], [], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true)],
		Exemplar,
		() => [/* @__PURE__ */ $.structField("state", "impl.MessageState", [0], 0, false, { pkgPath: "github.com/prometheus/client_model/go" }), /* @__PURE__ */ $.structField("sizeCache", /* @__PURE__ */ $.basicType("int32"), [1], 8, false, { pkgPath: "github.com/prometheus/client_model/go" }), /* @__PURE__ */ $.structField("unknownFields", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [2], 16, false, { pkgPath: "github.com/prometheus/client_model/go" }), /* @__PURE__ */ $.structField("Label", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("io_prometheus_client.LabelPair")), [3], 40, true, { tag: "protobuf:\"bytes,1,rep,name=label\" json:\"label,omitempty\"" }), /* @__PURE__ */ $.structField("Value", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("float64")), [4], 64, true, { tag: "protobuf:\"fixed64,2,opt,name=value\" json:\"value,omitempty\"" }), /* @__PURE__ */ $.structField("Timestamp", /* @__PURE__ */ $.pointerType("timestamppb.Timestamp"), [5], 72, true, { tag: "protobuf:\"bytes,3,opt,name=timestamp\" json:\"timestamp,omitempty\"" })]
	)
}

export class Metric {
	public get state(): protoimpl.MessageState {
		return this._fields.state
	}

	public set state(value: protoimpl.MessageState) {
		this._fields.state = value
	}

	public get sizeCache(): protoimpl.SizeCache {
		return this._fields.sizeCache
	}

	public set sizeCache(value: protoimpl.SizeCache) {
		this._fields.sizeCache = value
	}

	public get unknownFields(): protoimpl.UnknownFields {
		return this._fields.unknownFields
	}

	public set unknownFields(value: protoimpl.UnknownFields) {
		this._fields.unknownFields = value
	}

	public get Label(): $.Slice<LabelPair | $.VarRef<LabelPair> | null> {
		return this._fields.Label
	}

	public set Label(value: $.Slice<LabelPair | $.VarRef<LabelPair> | null>) {
		this._fields.Label = value
	}

	public get Gauge(): Gauge | $.VarRef<Gauge> | null {
		return this._fields.Gauge
	}

	public set Gauge(value: Gauge | $.VarRef<Gauge> | null) {
		this._fields.Gauge = value
	}

	public get Counter(): Counter | $.VarRef<Counter> | null {
		return this._fields.Counter
	}

	public set Counter(value: Counter | $.VarRef<Counter> | null) {
		this._fields.Counter = value
	}

	public get Summary(): Summary | $.VarRef<Summary> | null {
		return this._fields.Summary
	}

	public set Summary(value: Summary | $.VarRef<Summary> | null) {
		this._fields.Summary = value
	}

	public get Untyped(): Untyped | $.VarRef<Untyped> | null {
		return this._fields.Untyped
	}

	public set Untyped(value: Untyped | $.VarRef<Untyped> | null) {
		this._fields.Untyped = value
	}

	public get Histogram(): Histogram | $.VarRef<Histogram> | null {
		return this._fields.Histogram
	}

	public set Histogram(value: Histogram | $.VarRef<Histogram> | null) {
		this._fields.Histogram = value
	}

	public get TimestampMs(): $.VarRef<bigint> | null {
		return this._fields.TimestampMs
	}

	public set TimestampMs(value: $.VarRef<bigint> | null) {
		this._fields.TimestampMs = value
	}

	public _fields: {
		state: protoimpl.MessageState
		sizeCache: protoimpl.SizeCache
		unknownFields: protoimpl.UnknownFields
		Label: $.Slice<LabelPair | $.VarRef<LabelPair> | null>
		Gauge: Gauge | $.VarRef<Gauge> | null
		Counter: Counter | $.VarRef<Counter> | null
		Summary: Summary | $.VarRef<Summary> | null
		Untyped: Untyped | $.VarRef<Untyped> | null
		Histogram: Histogram | $.VarRef<Histogram> | null
		TimestampMs: $.VarRef<bigint> | null
	}

	constructor(init?: Partial<{state?: protoimpl.MessageState, sizeCache?: protoimpl.SizeCache, unknownFields?: protoimpl.UnknownFields, Label?: $.Slice<LabelPair | $.VarRef<LabelPair> | null>, Gauge?: Gauge | $.VarRef<Gauge> | null, Counter?: Counter | $.VarRef<Counter> | null, Summary?: Summary | $.VarRef<Summary> | null, Untyped?: Untyped | $.VarRef<Untyped> | null, Histogram?: Histogram | $.VarRef<Histogram> | null, TimestampMs?: $.VarRef<bigint> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			state: init?.state ? init.state.clone() : new impl.MessageState(undefined, true),
			sizeCache: init?.sizeCache ?? (0 as protoimpl.SizeCache),
			unknownFields: init?.unknownFields ?? (null! as protoimpl.UnknownFields),
			Label: init?.Label ?? (null! as $.Slice<LabelPair | $.VarRef<LabelPair> | null>),
			Gauge: init?.Gauge ?? (null! as Gauge | $.VarRef<Gauge> | null),
			Counter: init?.Counter ?? (null! as Counter | $.VarRef<Counter> | null),
			Summary: init?.Summary ?? (null! as Summary | $.VarRef<Summary> | null),
			Untyped: init?.Untyped ?? (null! as Untyped | $.VarRef<Untyped> | null),
			Histogram: init?.Histogram ?? (null! as Histogram | $.VarRef<Histogram> | null),
			TimestampMs: init?.TimestampMs ?? (null! as $.VarRef<bigint> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Metric {
		return new Metric(this, true)
	}

	public __goscriptAssign(source: Metric): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.state, values.state)
		target.sizeCache = values.sizeCache
		target.unknownFields = values.unknownFields
		target.Label = values.Label
		target.Gauge = values.Gauge
		target.Counter = values.Counter
		target.Summary = values.Summary
		target.Untyped = values.Untyped
		target.Histogram = values.Histogram
		target.TimestampMs = values.TimestampMs
	}

	public async Descriptor(): globalThis.Promise<[$.Slice<number>, $.Slice<number>]> {
		return [await file_io_prometheus_client_metrics_proto_rawDescGZIP(), $.arrayToSlice<number>([10])]
	}

	public GetCounter(): Counter | $.VarRef<Counter> | null {
		const x: Metric | $.VarRef<Metric> | null = this;
		if (x != null) {
			return $.pointerValue<Metric>(x).Counter
		}
		return null
	}

	public GetGauge(): Gauge | $.VarRef<Gauge> | null {
		const x: Metric | $.VarRef<Metric> | null = this;
		if (x != null) {
			return $.pointerValue<Metric>(x).Gauge
		}
		return null
	}

	public GetHistogram(): Histogram | $.VarRef<Histogram> | null {
		const x: Metric | $.VarRef<Metric> | null = this;
		if (x != null) {
			return $.pointerValue<Metric>(x).Histogram
		}
		return null
	}

	public GetLabel(): $.Slice<LabelPair | $.VarRef<LabelPair> | null> {
		const x: Metric | $.VarRef<Metric> | null = this;
		if (x != null) {
			return $.pointerValue<Metric>(x).Label
		}
		return null
	}

	public GetSummary(): Summary | $.VarRef<Summary> | null {
		const x: Metric | $.VarRef<Metric> | null = this;
		if (x != null) {
			return $.pointerValue<Metric>(x).Summary
		}
		return null
	}

	public GetTimestampMs(): bigint {
		const x: Metric | $.VarRef<Metric> | null = this;
		const x$: Metric = x == null ? $.pointerTarget<Metric>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<Metric>(x)
		if ((x != null) && ((x$ as Metric).TimestampMs != null)) {
			return $.pointerValue<bigint>((x$ as Metric).TimestampMs)
		}
		return 0n
	}

	public GetUntyped(): Untyped | $.VarRef<Untyped> | null {
		const x: Metric | $.VarRef<Metric> | null = this;
		if (x != null) {
			return $.pointerValue<Metric>(x).Untyped
		}
		return null
	}

	public ProtoMessage(): void {
	}

	public async ProtoReflect(): globalThis.Promise<protoreflect.Message | null> {
		const x: Metric | $.VarRef<Metric> | null = this;
		let mi: impl.MessageInfo | $.VarRef<impl.MessageInfo> | null = $.indexRef(file_io_prometheus_client_metrics_proto_msgTypes!, 10)
		if (protoimpl.UnsafeEnabled && (x != null)) {
			let ms: impl.messageState | $.VarRef<impl.messageState> | null = $.pointerValue<impl.Export>(protoimpl.X).MessageStateOf($.interfaceValue<protoimpl.Pointer | null>(x, "*io_prometheus_client.Metric", /* @__PURE__ */ $.pointerType("io_prometheus_client.Metric")))
			if ($.pointerValue<any>(ms).LoadMessageInfo() == null) {
				$.pointerValue<any>(ms).StoreMessageInfo(mi)
			}
			return $.interfaceValue<protoreflect.Message | null>(ms, "*impl.messageState", /* @__PURE__ */ $.pointerType("impl.messageState"))
		}
		return (mi !== null && (mi as any).__isVarRef !== true && (mi as any).__goValue === undefined ? ((mi as any) as impl.MessageInfo).MessageOf($.interfaceValue(x, "*io_prometheus_client.Metric", /* @__PURE__ */ $.pointerType("io_prometheus_client.Metric"))) : impl.MessageInfo.prototype.MessageOf.call(mi, $.interfaceValue(x, "*io_prometheus_client.Metric", /* @__PURE__ */ $.pointerType("io_prometheus_client.Metric"))))
	}

	public Reset(): void {
		let x: Metric | $.VarRef<Metric> | null = this;
		$.assignStruct($.pointerValue<Metric>(x), $.markAsStructValue(new Metric()))
		if (protoimpl.UnsafeEnabled) {
			let mi: impl.MessageInfo | $.VarRef<impl.MessageInfo> | null = $.indexRef(file_io_prometheus_client_metrics_proto_msgTypes!, 10)
			let ms: impl.messageState | $.VarRef<impl.messageState> | null = $.pointerValue<impl.Export>(protoimpl.X).MessageStateOf($.interfaceValue<protoimpl.Pointer | null>(x, "*io_prometheus_client.Metric", /* @__PURE__ */ $.pointerType("io_prometheus_client.Metric")))
			$.pointerValue<any>(ms).StoreMessageInfo(mi)
		}
	}

	public String(): string {
		const x: Metric | $.VarRef<Metric> | null = this;
		return await $.markAsStructValue($.cloneStructValue($.pointerValue<impl.Export>(protoimpl.X))).MessageStringOf($.interfaceValue<protoreflect.ProtoMessage | null>(x, "*io_prometheus_client.Metric", /* @__PURE__ */ $.pointerType("io_prometheus_client.Metric")))
	}

	static __typeInfo = $.registerStructType(
		"io_prometheus_client.Metric",
		() => new Metric(),
		() => [$.methodSignature("Descriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))], true), $.methodSignature("GetCounter", [], [/* @__PURE__ */ $.pointerType("io_prometheus_client.Counter")], true), $.methodSignature("GetGauge", [], [/* @__PURE__ */ $.pointerType("io_prometheus_client.Gauge")], true), $.methodSignature("GetHistogram", [], [/* @__PURE__ */ $.pointerType("io_prometheus_client.Histogram")], true), $.methodSignature("GetLabel", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("io_prometheus_client.LabelPair"))], true), $.methodSignature("GetSummary", [], [/* @__PURE__ */ $.pointerType("io_prometheus_client.Summary")], true), $.methodSignature("GetTimestampMs", [], [/* @__PURE__ */ $.basicType("int64")], true), $.methodSignature("GetUntyped", [], [/* @__PURE__ */ $.pointerType("io_prometheus_client.Untyped")], true), $.methodSignature("ProtoMessage", [], [], true), $.methodSignature("ProtoReflect", [], ["protoreflect.Message"], true), $.methodSignature("Reset", [], [], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true)],
		Metric,
		() => [/* @__PURE__ */ $.structField("state", "impl.MessageState", [0], 0, false, { pkgPath: "github.com/prometheus/client_model/go" }), /* @__PURE__ */ $.structField("sizeCache", /* @__PURE__ */ $.basicType("int32"), [1], 8, false, { pkgPath: "github.com/prometheus/client_model/go" }), /* @__PURE__ */ $.structField("unknownFields", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [2], 16, false, { pkgPath: "github.com/prometheus/client_model/go" }), /* @__PURE__ */ $.structField("Label", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("io_prometheus_client.LabelPair")), [3], 40, true, { tag: "protobuf:\"bytes,1,rep,name=label\" json:\"label,omitempty\"" }), /* @__PURE__ */ $.structField("Gauge", /* @__PURE__ */ $.pointerType("io_prometheus_client.Gauge"), [4], 64, true, { tag: "protobuf:\"bytes,2,opt,name=gauge\" json:\"gauge,omitempty\"" }), /* @__PURE__ */ $.structField("Counter", /* @__PURE__ */ $.pointerType("io_prometheus_client.Counter"), [5], 72, true, { tag: "protobuf:\"bytes,3,opt,name=counter\" json:\"counter,omitempty\"" }), /* @__PURE__ */ $.structField("Summary", /* @__PURE__ */ $.pointerType("io_prometheus_client.Summary"), [6], 80, true, { tag: "protobuf:\"bytes,4,opt,name=summary\" json:\"summary,omitempty\"" }), /* @__PURE__ */ $.structField("Untyped", /* @__PURE__ */ $.pointerType("io_prometheus_client.Untyped"), [7], 88, true, { tag: "protobuf:\"bytes,5,opt,name=untyped\" json:\"untyped,omitempty\"" }), /* @__PURE__ */ $.structField("Histogram", /* @__PURE__ */ $.pointerType("io_prometheus_client.Histogram"), [8], 96, true, { tag: "protobuf:\"bytes,7,opt,name=histogram\" json:\"histogram,omitempty\"" }), /* @__PURE__ */ $.structField("TimestampMs", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int64")), [9], 104, true, { tag: "protobuf:\"varint,6,opt,name=timestamp_ms,json=timestampMs\" json:\"timestamp_ms,omitempty\"" })]
	)
}

export class MetricFamily {
	public get state(): protoimpl.MessageState {
		return this._fields.state
	}

	public set state(value: protoimpl.MessageState) {
		this._fields.state = value
	}

	public get sizeCache(): protoimpl.SizeCache {
		return this._fields.sizeCache
	}

	public set sizeCache(value: protoimpl.SizeCache) {
		this._fields.sizeCache = value
	}

	public get unknownFields(): protoimpl.UnknownFields {
		return this._fields.unknownFields
	}

	public set unknownFields(value: protoimpl.UnknownFields) {
		this._fields.unknownFields = value
	}

	public get Name(): $.VarRef<string> | null {
		return this._fields.Name
	}

	public set Name(value: $.VarRef<string> | null) {
		this._fields.Name = value
	}

	public get Help(): $.VarRef<string> | null {
		return this._fields.Help
	}

	public set Help(value: $.VarRef<string> | null) {
		this._fields.Help = value
	}

	public get Type(): $.VarRef<MetricType> | null {
		return this._fields.Type
	}

	public set Type(value: $.VarRef<MetricType> | null) {
		this._fields.Type = value
	}

	public get Metric(): $.Slice<Metric | $.VarRef<Metric> | null> {
		return this._fields.Metric
	}

	public set Metric(value: $.Slice<Metric | $.VarRef<Metric> | null>) {
		this._fields.Metric = value
	}

	public get Unit(): $.VarRef<string> | null {
		return this._fields.Unit
	}

	public set Unit(value: $.VarRef<string> | null) {
		this._fields.Unit = value
	}

	public _fields: {
		state: protoimpl.MessageState
		sizeCache: protoimpl.SizeCache
		unknownFields: protoimpl.UnknownFields
		Name: $.VarRef<string> | null
		Help: $.VarRef<string> | null
		Type: $.VarRef<MetricType> | null
		Metric: $.Slice<Metric | $.VarRef<Metric> | null>
		Unit: $.VarRef<string> | null
	}

	constructor(init?: Partial<{state?: protoimpl.MessageState, sizeCache?: protoimpl.SizeCache, unknownFields?: protoimpl.UnknownFields, Name?: $.VarRef<string> | null, Help?: $.VarRef<string> | null, Type?: $.VarRef<MetricType> | null, Metric?: $.Slice<Metric | $.VarRef<Metric> | null>, Unit?: $.VarRef<string> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			state: init?.state ? init.state.clone() : new impl.MessageState(undefined, true),
			sizeCache: init?.sizeCache ?? (0 as protoimpl.SizeCache),
			unknownFields: init?.unknownFields ?? (null! as protoimpl.UnknownFields),
			Name: init?.Name ?? (null! as $.VarRef<string> | null),
			Help: init?.Help ?? (null! as $.VarRef<string> | null),
			Type: init?.Type ?? (null! as $.VarRef<MetricType> | null),
			Metric: init?.Metric ?? (null! as $.Slice<Metric | $.VarRef<Metric> | null>),
			Unit: init?.Unit ?? (null! as $.VarRef<string> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): MetricFamily {
		return new MetricFamily(this, true)
	}

	public __goscriptAssign(source: MetricFamily): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.state, values.state)
		target.sizeCache = values.sizeCache
		target.unknownFields = values.unknownFields
		target.Name = values.Name
		target.Help = values.Help
		target.Type = values.Type
		target.Metric = values.Metric
		target.Unit = values.Unit
	}

	public async Descriptor(): globalThis.Promise<[$.Slice<number>, $.Slice<number>]> {
		return [await file_io_prometheus_client_metrics_proto_rawDescGZIP(), $.arrayToSlice<number>([11])]
	}

	public GetHelp(): string {
		const x: MetricFamily | $.VarRef<MetricFamily> | null = this;
		const x$: MetricFamily = x == null ? $.pointerTarget<MetricFamily>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<MetricFamily>(x)
		if ((x != null) && ((x$ as MetricFamily).Help != null)) {
			return $.pointerValue<string>((x$ as MetricFamily).Help)
		}
		return ""
	}

	public GetMetric(): $.Slice<Metric | $.VarRef<Metric> | null> {
		const x: MetricFamily | $.VarRef<MetricFamily> | null = this;
		if (x != null) {
			return $.pointerValue<MetricFamily>(x).Metric
		}
		return null
	}

	public GetName(): string {
		const x: MetricFamily | $.VarRef<MetricFamily> | null = this;
		const x$: MetricFamily = x == null ? $.pointerTarget<MetricFamily>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<MetricFamily>(x)
		if ((x != null) && ((x$ as MetricFamily).Name != null)) {
			return $.pointerValue<string>((x$ as MetricFamily).Name)
		}
		return ""
	}

	public GetType(): MetricType {
		const x: MetricFamily | $.VarRef<MetricFamily> | null = this;
		const x$: MetricFamily = x == null ? $.pointerTarget<MetricFamily>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<MetricFamily>(x)
		if ((x != null) && ((x$ as MetricFamily).Type != null)) {
			return $.pointerValue<MetricType>((x$ as MetricFamily).Type)
		}
		return 0
	}

	public GetUnit(): string {
		const x: MetricFamily | $.VarRef<MetricFamily> | null = this;
		const x$: MetricFamily = x == null ? $.pointerTarget<MetricFamily>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<MetricFamily>(x)
		if ((x != null) && ((x$ as MetricFamily).Unit != null)) {
			return $.pointerValue<string>((x$ as MetricFamily).Unit)
		}
		return ""
	}

	public ProtoMessage(): void {
	}

	public async ProtoReflect(): globalThis.Promise<protoreflect.Message | null> {
		const x: MetricFamily | $.VarRef<MetricFamily> | null = this;
		let mi: impl.MessageInfo | $.VarRef<impl.MessageInfo> | null = $.indexRef(file_io_prometheus_client_metrics_proto_msgTypes!, 11)
		if (protoimpl.UnsafeEnabled && (x != null)) {
			let ms: impl.messageState | $.VarRef<impl.messageState> | null = $.pointerValue<impl.Export>(protoimpl.X).MessageStateOf($.interfaceValue<protoimpl.Pointer | null>(x, "*io_prometheus_client.MetricFamily", /* @__PURE__ */ $.pointerType("io_prometheus_client.MetricFamily")))
			if ($.pointerValue<any>(ms).LoadMessageInfo() == null) {
				$.pointerValue<any>(ms).StoreMessageInfo(mi)
			}
			return $.interfaceValue<protoreflect.Message | null>(ms, "*impl.messageState", /* @__PURE__ */ $.pointerType("impl.messageState"))
		}
		return impl.MessageInfo.prototype.MessageOf.call(mi, $.interfaceValue(x, "*io_prometheus_client.MetricFamily", /* @__PURE__ */ $.pointerType("io_prometheus_client.MetricFamily")))
	}

	public Reset(): void {
		let x: MetricFamily | $.VarRef<MetricFamily> | null = this;
		$.assignStruct($.pointerValue<MetricFamily>(x), $.markAsStructValue(new MetricFamily()))
		if (protoimpl.UnsafeEnabled) {
			let mi: impl.MessageInfo | $.VarRef<impl.MessageInfo> | null = $.indexRef(file_io_prometheus_client_metrics_proto_msgTypes!, 11)
			let ms: impl.messageState | $.VarRef<impl.messageState> | null = $.pointerValue<impl.Export>(protoimpl.X).MessageStateOf($.interfaceValue<protoimpl.Pointer | null>(x, "*io_prometheus_client.MetricFamily", /* @__PURE__ */ $.pointerType("io_prometheus_client.MetricFamily")))
			$.pointerValue<any>(ms).StoreMessageInfo(mi)
		}
	}

	public String(): string {
		const x: MetricFamily | $.VarRef<MetricFamily> | null = this;
		return await $.markAsStructValue($.cloneStructValue($.pointerValue<impl.Export>(protoimpl.X))).MessageStringOf($.interfaceValue<protoreflect.ProtoMessage | null>(x, "*io_prometheus_client.MetricFamily", /* @__PURE__ */ $.pointerType("io_prometheus_client.MetricFamily")))
	}

	static __typeInfo = $.registerStructType(
		"io_prometheus_client.MetricFamily",
		() => new MetricFamily(),
		() => [$.methodSignature("Descriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))], true), $.methodSignature("GetHelp", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("GetMetric", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("io_prometheus_client.Metric"))], true), $.methodSignature("GetName", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("GetType", [], [/* @__PURE__ */ $.basicType("int32", "io_prometheus_client.MetricType")], true), $.methodSignature("GetUnit", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("ProtoMessage", [], [], true), $.methodSignature("ProtoReflect", [], ["protoreflect.Message"], true), $.methodSignature("Reset", [], [], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true)],
		MetricFamily,
		() => [/* @__PURE__ */ $.structField("state", "impl.MessageState", [0], 0, false, { pkgPath: "github.com/prometheus/client_model/go" }), /* @__PURE__ */ $.structField("sizeCache", /* @__PURE__ */ $.basicType("int32"), [1], 8, false, { pkgPath: "github.com/prometheus/client_model/go" }), /* @__PURE__ */ $.structField("unknownFields", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [2], 16, false, { pkgPath: "github.com/prometheus/client_model/go" }), /* @__PURE__ */ $.structField("Name", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("string")), [3], 40, true, { tag: "protobuf:\"bytes,1,opt,name=name\" json:\"name,omitempty\"" }), /* @__PURE__ */ $.structField("Help", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("string")), [4], 48, true, { tag: "protobuf:\"bytes,2,opt,name=help\" json:\"help,omitempty\"" }), /* @__PURE__ */ $.structField("Type", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32", "io_prometheus_client.MetricType")), [5], 56, true, { tag: "protobuf:\"varint,3,opt,name=type,enum=io.prometheus.client.MetricType\" json:\"type,omitempty\"" }), /* @__PURE__ */ $.structField("Metric", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("io_prometheus_client.Metric")), [6], 64, true, { tag: "protobuf:\"bytes,4,rep,name=metric\" json:\"metric,omitempty\"" }), /* @__PURE__ */ $.structField("Unit", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("string")), [7], 88, true, { tag: "protobuf:\"bytes,5,opt,name=unit\" json:\"unit,omitempty\"" })]
	)
}

export const MetricType_COUNTER: MetricType = 0

export const MetricType_GAUGE: MetricType = 1

export const MetricType_SUMMARY: MetricType = 2

export const MetricType_UNTYPED: MetricType = 3

export const MetricType_HISTOGRAM: MetricType = 4

export const MetricType_GAUGE_HISTOGRAM: MetricType = 5

export let MetricType_name: globalThis.Map<number, string> | null = $.makeMap<number, string>([[0, "COUNTER"], [1, "GAUGE"], [2, "SUMMARY"], [3, "UNTYPED"], [4, "HISTOGRAM"], [5, "GAUGE_HISTOGRAM"]])

export function __goscript_set_MetricType_name(__goscriptValue: globalThis.Map<number, string> | null): void {
	MetricType_name = __goscriptValue
}

export let MetricType_value: globalThis.Map<string, number> | null = $.makeMap<string, number>([["COUNTER", 0], ["GAUGE", 1], ["SUMMARY", 2], ["UNTYPED", 3], ["HISTOGRAM", 4], ["GAUGE_HISTOGRAM", 5]])

export function __goscript_set_MetricType_value(__goscriptValue: globalThis.Map<string, number> | null): void {
	MetricType_value = __goscriptValue
}

export function MetricType_Enum(x: MetricType): $.VarRef<MetricType> | null {
	let p: $.VarRef<MetricType> | null = $.varRef<MetricType>(0)
	p!.value = x
	return p
}

export function MetricType_String(x: MetricType): string {
	return await $.markAsStructValue($.cloneStructValue($.pointerValue<impl.Export>(protoimpl.X))).EnumStringOf(MetricType_Descriptor(x), $.int(x, 32))
}

export function MetricType_Descriptor(recv: MetricType): protoreflect.EnumDescriptor | null {
	return $.arrayIndex(file_io_prometheus_client_metrics_proto_enumTypes!, 0).Descriptor()
}

export function MetricType_Type(recv: MetricType): protoreflect.EnumType | null {
	return $.interfaceValue<protoreflect.EnumType | null>($.indexRef(file_io_prometheus_client_metrics_proto_enumTypes!, 0), "*impl.EnumInfo", /* @__PURE__ */ $.pointerType("impl.EnumInfo"))
}

export function MetricType_Number(x: MetricType): protoreflect.EnumNumber {
	return $.int(x, 32)
}

export function MetricType_UnmarshalJSON(x: $.VarRef<MetricType> | null, b: $.Slice<number>): $.GoError {
	let [num, err] = await $.markAsStructValue($.cloneStructValue($.pointerValue<impl.Export>(protoimpl.X))).UnmarshalJSONEnum(MetricType_Descriptor($.pointerValue<MetricType>(x)), b)
	if (err != null) {
		return err
	}
	x!.value = $.int(num, 32)
	return null
}

export async function MetricType_EnumDescriptor(recv: MetricType): globalThis.Promise<[$.Slice<number>, $.Slice<number>]> {
	return [await file_io_prometheus_client_metrics_proto_rawDescGZIP(), $.arrayToSlice<number>([0])]
}

export let File_io_prometheus_client_metrics_proto: protoreflect.FileDescriptor | null = null! as protoreflect.FileDescriptor | null

export function __goscript_set_File_io_prometheus_client_metrics_proto(__goscriptValue: protoreflect.FileDescriptor | null): void {
	File_io_prometheus_client_metrics_proto = __goscriptValue
}

export let file_io_prometheus_client_metrics_proto_rawDesc: $.Slice<number> = new Uint8Array([10, 34, 105, 111, 47, 112, 114, 111, 109, 101, 116, 104, 101, 117, 115, 47, 99, 108, 105, 101, 110, 116, 47, 109, 101, 116, 114, 105, 99, 115, 46, 112, 114, 111, 116, 111, 18, 20, 105, 111, 46, 112, 114, 111, 109, 101, 116, 104, 101, 117, 115, 46, 99, 108, 105, 101, 110, 116, 26, 31, 103, 111, 111, 103, 108, 101, 47, 112, 114, 111, 116, 111, 98, 117, 102, 47, 116, 105, 109, 101, 115, 116, 97, 109, 112, 46, 112, 114, 111, 116, 111, 34, 53, 10, 9, 76, 97, 98, 101, 108, 80, 97, 105, 114, 18, 18, 10, 4, 110, 97, 109, 101, 24, 1, 32, 1, 40, 9, 82, 4, 110, 97, 109, 101, 18, 20, 10, 5, 118, 97, 108, 117, 101, 24, 2, 32, 1, 40, 9, 82, 5, 118, 97, 108, 117, 101, 34, 29, 10, 5, 71, 97, 117, 103, 101, 18, 20, 10, 5, 118, 97, 108, 117, 101, 24, 1, 32, 1, 40, 1, 82, 5, 118, 97, 108, 117, 101, 34, 164, 1, 10, 7, 67, 111, 117, 110, 116, 101, 114, 18, 20, 10, 5, 118, 97, 108, 117, 101, 24, 1, 32, 1, 40, 1, 82, 5, 118, 97, 108, 117, 101, 18, 58, 10, 8, 101, 120, 101, 109, 112, 108, 97, 114, 24, 2, 32, 1, 40, 11, 50, 30, 46, 105, 111, 46, 112, 114, 111, 109, 101, 116, 104, 101, 117, 115, 46, 99, 108, 105, 101, 110, 116, 46, 69, 120, 101, 109, 112, 108, 97, 114, 82, 8, 101, 120, 101, 109, 112, 108, 97, 114, 18, 71, 10, 17, 99, 114, 101, 97, 116, 101, 100, 95, 116, 105, 109, 101, 115, 116, 97, 109, 112, 24, 3, 32, 1, 40, 11, 50, 26, 46, 103, 111, 111, 103, 108, 101, 46, 112, 114, 111, 116, 111, 98, 117, 102, 46, 84, 105, 109, 101, 115, 116, 97, 109, 112, 82, 16, 99, 114, 101, 97, 116, 101, 100, 84, 105, 109, 101, 115, 116, 97, 109, 112, 34, 60, 10, 8, 81, 117, 97, 110, 116, 105, 108, 101, 18, 26, 10, 8, 113, 117, 97, 110, 116, 105, 108, 101, 24, 1, 32, 1, 40, 1, 82, 8, 113, 117, 97, 110, 116, 105, 108, 101, 18, 20, 10, 5, 118, 97, 108, 117, 101, 24, 2, 32, 1, 40, 1, 82, 5, 118, 97, 108, 117, 101, 34, 208, 1, 10, 7, 83, 117, 109, 109, 97, 114, 121, 18, 33, 10, 12, 115, 97, 109, 112, 108, 101, 95, 99, 111, 117, 110, 116, 24, 1, 32, 1, 40, 4, 82, 11, 115, 97, 109, 112, 108, 101, 67, 111, 117, 110, 116, 18, 29, 10, 10, 115, 97, 109, 112, 108, 101, 95, 115, 117, 109, 24, 2, 32, 1, 40, 1, 82, 9, 115, 97, 109, 112, 108, 101, 83, 117, 109, 18, 58, 10, 8, 113, 117, 97, 110, 116, 105, 108, 101, 24, 3, 32, 3, 40, 11, 50, 30, 46, 105, 111, 46, 112, 114, 111, 109, 101, 116, 104, 101, 117, 115, 46, 99, 108, 105, 101, 110, 116, 46, 81, 117, 97, 110, 116, 105, 108, 101, 82, 8, 113, 117, 97, 110, 116, 105, 108, 101, 18, 71, 10, 17, 99, 114, 101, 97, 116, 101, 100, 95, 116, 105, 109, 101, 115, 116, 97, 109, 112, 24, 4, 32, 1, 40, 11, 50, 26, 46, 103, 111, 111, 103, 108, 101, 46, 112, 114, 111, 116, 111, 98, 117, 102, 46, 84, 105, 109, 101, 115, 116, 97, 109, 112, 82, 16, 99, 114, 101, 97, 116, 101, 100, 84, 105, 109, 101, 115, 116, 97, 109, 112, 34, 31, 10, 7, 85, 110, 116, 121, 112, 101, 100, 18, 20, 10, 5, 118, 97, 108, 117, 101, 24, 1, 32, 1, 40, 1, 82, 5, 118, 97, 108, 117, 101, 34, 234, 5, 10, 9, 72, 105, 115, 116, 111, 103, 114, 97, 109, 18, 33, 10, 12, 115, 97, 109, 112, 108, 101, 95, 99, 111, 117, 110, 116, 24, 1, 32, 1, 40, 4, 82, 11, 115, 97, 109, 112, 108, 101, 67, 111, 117, 110, 116, 18, 44, 10, 18, 115, 97, 109, 112, 108, 101, 95, 99, 111, 117, 110, 116, 95, 102, 108, 111, 97, 116, 24, 4, 32, 1, 40, 1, 82, 16, 115, 97, 109, 112, 108, 101, 67, 111, 117, 110, 116, 70, 108, 111, 97, 116, 18, 29, 10, 10, 115, 97, 109, 112, 108, 101, 95, 115, 117, 109, 24, 2, 32, 1, 40, 1, 82, 9, 115, 97, 109, 112, 108, 101, 83, 117, 109, 18, 52, 10, 6, 98, 117, 99, 107, 101, 116, 24, 3, 32, 3, 40, 11, 50, 28, 46, 105, 111, 46, 112, 114, 111, 109, 101, 116, 104, 101, 117, 115, 46, 99, 108, 105, 101, 110, 116, 46, 66, 117, 99, 107, 101, 116, 82, 6, 98, 117, 99, 107, 101, 116, 18, 71, 10, 17, 99, 114, 101, 97, 116, 101, 100, 95, 116, 105, 109, 101, 115, 116, 97, 109, 112, 24, 15, 32, 1, 40, 11, 50, 26, 46, 103, 111, 111, 103, 108, 101, 46, 112, 114, 111, 116, 111, 98, 117, 102, 46, 84, 105, 109, 101, 115, 116, 97, 109, 112, 82, 16, 99, 114, 101, 97, 116, 101, 100, 84, 105, 109, 101, 115, 116, 97, 109, 112, 18, 22, 10, 6, 115, 99, 104, 101, 109, 97, 24, 5, 32, 1, 40, 17, 82, 6, 115, 99, 104, 101, 109, 97, 18, 37, 10, 14, 122, 101, 114, 111, 95, 116, 104, 114, 101, 115, 104, 111, 108, 100, 24, 6, 32, 1, 40, 1, 82, 13, 122, 101, 114, 111, 84, 104, 114, 101, 115, 104, 111, 108, 100, 18, 29, 10, 10, 122, 101, 114, 111, 95, 99, 111, 117, 110, 116, 24, 7, 32, 1, 40, 4, 82, 9, 122, 101, 114, 111, 67, 111, 117, 110, 116, 18, 40, 10, 16, 122, 101, 114, 111, 95, 99, 111, 117, 110, 116, 95, 102, 108, 111, 97, 116, 24, 8, 32, 1, 40, 1, 82, 14, 122, 101, 114, 111, 67, 111, 117, 110, 116, 70, 108, 111, 97, 116, 18, 69, 10, 13, 110, 101, 103, 97, 116, 105, 118, 101, 95, 115, 112, 97, 110, 24, 9, 32, 3, 40, 11, 50, 32, 46, 105, 111, 46, 112, 114, 111, 109, 101, 116, 104, 101, 117, 115, 46, 99, 108, 105, 101, 110, 116, 46, 66, 117, 99, 107, 101, 116, 83, 112, 97, 110, 82, 12, 110, 101, 103, 97, 116, 105, 118, 101, 83, 112, 97, 110, 18, 37, 10, 14, 110, 101, 103, 97, 116, 105, 118, 101, 95, 100, 101, 108, 116, 97, 24, 10, 32, 3, 40, 18, 82, 13, 110, 101, 103, 97, 116, 105, 118, 101, 68, 101, 108, 116, 97, 18, 37, 10, 14, 110, 101, 103, 97, 116, 105, 118, 101, 95, 99, 111, 117, 110, 116, 24, 11, 32, 3, 40, 1, 82, 13, 110, 101, 103, 97, 116, 105, 118, 101, 67, 111, 117, 110, 116, 18, 69, 10, 13, 112, 111, 115, 105, 116, 105, 118, 101, 95, 115, 112, 97, 110, 24, 12, 32, 3, 40, 11, 50, 32, 46, 105, 111, 46, 112, 114, 111, 109, 101, 116, 104, 101, 117, 115, 46, 99, 108, 105, 101, 110, 116, 46, 66, 117, 99, 107, 101, 116, 83, 112, 97, 110, 82, 12, 112, 111, 115, 105, 116, 105, 118, 101, 83, 112, 97, 110, 18, 37, 10, 14, 112, 111, 115, 105, 116, 105, 118, 101, 95, 100, 101, 108, 116, 97, 24, 13, 32, 3, 40, 18, 82, 13, 112, 111, 115, 105, 116, 105, 118, 101, 68, 101, 108, 116, 97, 18, 37, 10, 14, 112, 111, 115, 105, 116, 105, 118, 101, 95, 99, 111, 117, 110, 116, 24, 14, 32, 3, 40, 1, 82, 13, 112, 111, 115, 105, 116, 105, 118, 101, 67, 111, 117, 110, 116, 18, 60, 10, 9, 101, 120, 101, 109, 112, 108, 97, 114, 115, 24, 16, 32, 3, 40, 11, 50, 30, 46, 105, 111, 46, 112, 114, 111, 109, 101, 116, 104, 101, 117, 115, 46, 99, 108, 105, 101, 110, 116, 46, 69, 120, 101, 109, 112, 108, 97, 114, 82, 9, 101, 120, 101, 109, 112, 108, 97, 114, 115, 34, 198, 1, 10, 6, 66, 117, 99, 107, 101, 116, 18, 41, 10, 16, 99, 117, 109, 117, 108, 97, 116, 105, 118, 101, 95, 99, 111, 117, 110, 116, 24, 1, 32, 1, 40, 4, 82, 15, 99, 117, 109, 117, 108, 97, 116, 105, 118, 101, 67, 111, 117, 110, 116, 18, 52, 10, 22, 99, 117, 109, 117, 108, 97, 116, 105, 118, 101, 95, 99, 111, 117, 110, 116, 95, 102, 108, 111, 97, 116, 24, 4, 32, 1, 40, 1, 82, 20, 99, 117, 109, 117, 108, 97, 116, 105, 118, 101, 67, 111, 117, 110, 116, 70, 108, 111, 97, 116, 18, 31, 10, 11, 117, 112, 112, 101, 114, 95, 98, 111, 117, 110, 100, 24, 2, 32, 1, 40, 1, 82, 10, 117, 112, 112, 101, 114, 66, 111, 117, 110, 100, 18, 58, 10, 8, 101, 120, 101, 109, 112, 108, 97, 114, 24, 3, 32, 1, 40, 11, 50, 30, 46, 105, 111, 46, 112, 114, 111, 109, 101, 116, 104, 101, 117, 115, 46, 99, 108, 105, 101, 110, 116, 46, 69, 120, 101, 109, 112, 108, 97, 114, 82, 8, 101, 120, 101, 109, 112, 108, 97, 114, 34, 60, 10, 10, 66, 117, 99, 107, 101, 116, 83, 112, 97, 110, 18, 22, 10, 6, 111, 102, 102, 115, 101, 116, 24, 1, 32, 1, 40, 17, 82, 6, 111, 102, 102, 115, 101, 116, 18, 22, 10, 6, 108, 101, 110, 103, 116, 104, 24, 2, 32, 1, 40, 13, 82, 6, 108, 101, 110, 103, 116, 104, 34, 145, 1, 10, 8, 69, 120, 101, 109, 112, 108, 97, 114, 18, 53, 10, 5, 108, 97, 98, 101, 108, 24, 1, 32, 3, 40, 11, 50, 31, 46, 105, 111, 46, 112, 114, 111, 109, 101, 116, 104, 101, 117, 115, 46, 99, 108, 105, 101, 110, 116, 46, 76, 97, 98, 101, 108, 80, 97, 105, 114, 82, 5, 108, 97, 98, 101, 108, 18, 20, 10, 5, 118, 97, 108, 117, 101, 24, 2, 32, 1, 40, 1, 82, 5, 118, 97, 108, 117, 101, 18, 56, 10, 9, 116, 105, 109, 101, 115, 116, 97, 109, 112, 24, 3, 32, 1, 40, 11, 50, 26, 46, 103, 111, 111, 103, 108, 101, 46, 112, 114, 111, 116, 111, 98, 117, 102, 46, 84, 105, 109, 101, 115, 116, 97, 109, 112, 82, 9, 116, 105, 109, 101, 115, 116, 97, 109, 112, 34, 255, 2, 10, 6, 77, 101, 116, 114, 105, 99, 18, 53, 10, 5, 108, 97, 98, 101, 108, 24, 1, 32, 3, 40, 11, 50, 31, 46, 105, 111, 46, 112, 114, 111, 109, 101, 116, 104, 101, 117, 115, 46, 99, 108, 105, 101, 110, 116, 46, 76, 97, 98, 101, 108, 80, 97, 105, 114, 82, 5, 108, 97, 98, 101, 108, 18, 49, 10, 5, 103, 97, 117, 103, 101, 24, 2, 32, 1, 40, 11, 50, 27, 46, 105, 111, 46, 112, 114, 111, 109, 101, 116, 104, 101, 117, 115, 46, 99, 108, 105, 101, 110, 116, 46, 71, 97, 117, 103, 101, 82, 5, 103, 97, 117, 103, 101, 18, 55, 10, 7, 99, 111, 117, 110, 116, 101, 114, 24, 3, 32, 1, 40, 11, 50, 29, 46, 105, 111, 46, 112, 114, 111, 109, 101, 116, 104, 101, 117, 115, 46, 99, 108, 105, 101, 110, 116, 46, 67, 111, 117, 110, 116, 101, 114, 82, 7, 99, 111, 117, 110, 116, 101, 114, 18, 55, 10, 7, 115, 117, 109, 109, 97, 114, 121, 24, 4, 32, 1, 40, 11, 50, 29, 46, 105, 111, 46, 112, 114, 111, 109, 101, 116, 104, 101, 117, 115, 46, 99, 108, 105, 101, 110, 116, 46, 83, 117, 109, 109, 97, 114, 121, 82, 7, 115, 117, 109, 109, 97, 114, 121, 18, 55, 10, 7, 117, 110, 116, 121, 112, 101, 100, 24, 5, 32, 1, 40, 11, 50, 29, 46, 105, 111, 46, 112, 114, 111, 109, 101, 116, 104, 101, 117, 115, 46, 99, 108, 105, 101, 110, 116, 46, 85, 110, 116, 121, 112, 101, 100, 82, 7, 117, 110, 116, 121, 112, 101, 100, 18, 61, 10, 9, 104, 105, 115, 116, 111, 103, 114, 97, 109, 24, 7, 32, 1, 40, 11, 50, 31, 46, 105, 111, 46, 112, 114, 111, 109, 101, 116, 104, 101, 117, 115, 46, 99, 108, 105, 101, 110, 116, 46, 72, 105, 115, 116, 111, 103, 114, 97, 109, 82, 9, 104, 105, 115, 116, 111, 103, 114, 97, 109, 18, 33, 10, 12, 116, 105, 109, 101, 115, 116, 97, 109, 112, 95, 109, 115, 24, 6, 32, 1, 40, 3, 82, 11, 116, 105, 109, 101, 115, 116, 97, 109, 112, 77, 115, 34, 182, 1, 10, 12, 77, 101, 116, 114, 105, 99, 70, 97, 109, 105, 108, 121, 18, 18, 10, 4, 110, 97, 109, 101, 24, 1, 32, 1, 40, 9, 82, 4, 110, 97, 109, 101, 18, 18, 10, 4, 104, 101, 108, 112, 24, 2, 32, 1, 40, 9, 82, 4, 104, 101, 108, 112, 18, 52, 10, 4, 116, 121, 112, 101, 24, 3, 32, 1, 40, 14, 50, 32, 46, 105, 111, 46, 112, 114, 111, 109, 101, 116, 104, 101, 117, 115, 46, 99, 108, 105, 101, 110, 116, 46, 77, 101, 116, 114, 105, 99, 84, 121, 112, 101, 82, 4, 116, 121, 112, 101, 18, 52, 10, 6, 109, 101, 116, 114, 105, 99, 24, 4, 32, 3, 40, 11, 50, 28, 46, 105, 111, 46, 112, 114, 111, 109, 101, 116, 104, 101, 117, 115, 46, 99, 108, 105, 101, 110, 116, 46, 77, 101, 116, 114, 105, 99, 82, 6, 109, 101, 116, 114, 105, 99, 18, 18, 10, 4, 117, 110, 105, 116, 24, 5, 32, 1, 40, 9, 82, 4, 117, 110, 105, 116, 42, 98, 10, 10, 77, 101, 116, 114, 105, 99, 84, 121, 112, 101, 18, 11, 10, 7, 67, 79, 85, 78, 84, 69, 82, 16, 0, 18, 9, 10, 5, 71, 65, 85, 71, 69, 16, 1, 18, 11, 10, 7, 83, 85, 77, 77, 65, 82, 89, 16, 2, 18, 11, 10, 7, 85, 78, 84, 89, 80, 69, 68, 16, 3, 18, 13, 10, 9, 72, 73, 83, 84, 79, 71, 82, 65, 77, 16, 4, 18, 19, 10, 15, 71, 65, 85, 71, 69, 95, 72, 73, 83, 84, 79, 71, 82, 65, 77, 16, 5, 66, 82, 10, 20, 105, 111, 46, 112, 114, 111, 109, 101, 116, 104, 101, 117, 115, 46, 99, 108, 105, 101, 110, 116, 90, 58, 103, 105, 116, 104, 117, 98, 46, 99, 111, 109, 47, 112, 114, 111, 109, 101, 116, 104, 101, 117, 115, 47, 99, 108, 105, 101, 110, 116, 95, 109, 111, 100, 101, 108, 47, 103, 111, 59, 105, 111, 95, 112, 114, 111, 109, 101, 116, 104, 101, 117, 115, 95, 99, 108, 105, 101, 110, 116]) as $.Slice<number>

export function __goscript_set_file_io_prometheus_client_metrics_proto_rawDesc(__goscriptValue: $.Slice<number>): void {
	file_io_prometheus_client_metrics_proto_rawDesc = __goscriptValue
}

export let file_io_prometheus_client_metrics_proto_rawDescOnce: $.VarRef<sync.Once> = $.varRef($.markAsStructValue(new sync.Once()))

export function __goscript_set_file_io_prometheus_client_metrics_proto_rawDescOnce(__goscriptValue: sync.Once): void {
	$.assignStruct(file_io_prometheus_client_metrics_proto_rawDescOnce.value, __goscriptValue)
}

export let file_io_prometheus_client_metrics_proto_rawDescData: $.Slice<number> = file_io_prometheus_client_metrics_proto_rawDesc

export function __goscript_set_file_io_prometheus_client_metrics_proto_rawDescData(__goscriptValue: $.Slice<number>): void {
	file_io_prometheus_client_metrics_proto_rawDescData = __goscriptValue
}

export async function file_io_prometheus_client_metrics_proto_rawDescGZIP(): globalThis.Promise<$.Slice<number>> {
	await file_io_prometheus_client_metrics_proto_rawDescOnce.value.Do($.functionValue((): void => {
		file_io_prometheus_client_metrics_proto_rawDescData = $.pointerValue<impl.Export>(protoimpl.X).CompressGZIP(file_io_prometheus_client_metrics_proto_rawDescData)
	}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)))
	return file_io_prometheus_client_metrics_proto_rawDescData
}

export let file_io_prometheus_client_metrics_proto_enumTypes: $.Slice<protoimpl.EnumInfo> = $.makeSlice<protoimpl.EnumInfo>(1, undefined, undefined, () => new impl.EnumInfo(undefined, true))

export function __goscript_set_file_io_prometheus_client_metrics_proto_enumTypes(__goscriptValue: $.Slice<protoimpl.EnumInfo>): void {
	file_io_prometheus_client_metrics_proto_enumTypes = __goscriptValue
}

export let file_io_prometheus_client_metrics_proto_msgTypes: $.Slice<protoimpl.MessageInfo> = $.makeSlice<protoimpl.MessageInfo>(12, undefined, undefined, () => new impl.MessageInfo(undefined, true))

export function __goscript_set_file_io_prometheus_client_metrics_proto_msgTypes(__goscriptValue: $.Slice<protoimpl.MessageInfo>): void {
	file_io_prometheus_client_metrics_proto_msgTypes = __goscriptValue
}

export let file_io_prometheus_client_metrics_proto_goTypes: $.Slice<any> = $.arrayToSlice<any>([$.namedValueInterfaceValue<any>(0, "io_prometheus_client.MetricType", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), $.interfaceValue(null, "*io_prometheus_client.LabelPair", /* @__PURE__ */ $.pointerType("io_prometheus_client.LabelPair")), $.interfaceValue(null, "*io_prometheus_client.Gauge", /* @__PURE__ */ $.pointerType("io_prometheus_client.Gauge")), $.interfaceValue(null, "*io_prometheus_client.Counter", /* @__PURE__ */ $.pointerType("io_prometheus_client.Counter")), $.interfaceValue(null, "*io_prometheus_client.Quantile", /* @__PURE__ */ $.pointerType("io_prometheus_client.Quantile")), $.interfaceValue(null, "*io_prometheus_client.Summary", /* @__PURE__ */ $.pointerType("io_prometheus_client.Summary")), $.interfaceValue(null, "*io_prometheus_client.Untyped", /* @__PURE__ */ $.pointerType("io_prometheus_client.Untyped")), $.interfaceValue(null, "*io_prometheus_client.Histogram", /* @__PURE__ */ $.pointerType("io_prometheus_client.Histogram")), $.interfaceValue(null, "*io_prometheus_client.Bucket", /* @__PURE__ */ $.pointerType("io_prometheus_client.Bucket")), $.interfaceValue(null, "*io_prometheus_client.BucketSpan", /* @__PURE__ */ $.pointerType("io_prometheus_client.BucketSpan")), $.interfaceValue(null, "*io_prometheus_client.Exemplar", /* @__PURE__ */ $.pointerType("io_prometheus_client.Exemplar")), $.interfaceValue(null, "*io_prometheus_client.Metric", /* @__PURE__ */ $.pointerType("io_prometheus_client.Metric")), $.interfaceValue(null, "*io_prometheus_client.MetricFamily", /* @__PURE__ */ $.pointerType("io_prometheus_client.MetricFamily")), $.interfaceValue(null, "*timestamppb.Timestamp", /* @__PURE__ */ $.pointerType("timestamppb.Timestamp"))])

export function __goscript_set_file_io_prometheus_client_metrics_proto_goTypes(__goscriptValue: $.Slice<any>): void {
	file_io_prometheus_client_metrics_proto_goTypes = __goscriptValue
}

export let file_io_prometheus_client_metrics_proto_depIdxs: $.Slice<number> = $.arrayToSlice<number>([10, 13, 4, 13, 8, 13, 9, 9, 10, 10, 1, 13, 1, 2, 3, 5, 6, 7, 0, 11, 20, 20, 20, 20, 0])

export function __goscript_set_file_io_prometheus_client_metrics_proto_depIdxs(__goscriptValue: $.Slice<number>): void {
	file_io_prometheus_client_metrics_proto_depIdxs = __goscriptValue
}

async function __goscriptInit0(): globalThis.Promise<void> {
	await file_io_prometheus_client_metrics_proto_init()
}

export async function file_io_prometheus_client_metrics_proto_init(): globalThis.Promise<void> {
	if (File_io_prometheus_client_metrics_proto != null) {
		return
	}
	if (!protoimpl.UnsafeEnabled) {
		$.arrayIndex(file_io_prometheus_client_metrics_proto_msgTypes!, 0).Exporter = $.functionValue((v: any, i: number): any => {
			{
				let v: LabelPair | $.VarRef<LabelPair> | null = ((v as any)?.__goType === "*io_prometheus_client.LabelPair" && (v as any).__goValue === undefined && (v as any).__isTypedNil !== true ? ((v as any) as LabelPair | $.VarRef<LabelPair> | null) : $.mustTypeAssert<LabelPair | $.VarRef<LabelPair> | null>(v, /* @__PURE__ */ $.pointerType("io_prometheus_client.LabelPair")))
				switch (i) {
					case 0:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<LabelPair>(v)._fields, "state"), "*impl.MessageState", /* @__PURE__ */ $.pointerType("impl.MessageState"))
						break
					}
					case 1:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<LabelPair>(v)._fields, "sizeCache"), "*int32", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32")))
						break
					}
					case 2:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<LabelPair>(v)._fields, "unknownFields"), "*[]byte", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))))
						break
					}
					default:
					{
						return null
						break
					}
				}
			}
		}, ({ kind: $.TypeKind.Function, params: [{ kind: $.TypeKind.Interface, methods: [] }, /* @__PURE__ */ $.basicType("int")], results: [{ kind: $.TypeKind.Interface, methods: [] }] } as $.FunctionTypeInfo))
		$.arrayIndex(file_io_prometheus_client_metrics_proto_msgTypes!, 1).Exporter = $.functionValue((v: any, i: number): any => {
			{
				let v: Gauge | $.VarRef<Gauge> | null = ((v as any)?.__goType === "*io_prometheus_client.Gauge" && (v as any).__goValue === undefined && (v as any).__isTypedNil !== true ? ((v as any) as Gauge | $.VarRef<Gauge> | null) : $.mustTypeAssert<Gauge | $.VarRef<Gauge> | null>(v, /* @__PURE__ */ $.pointerType("io_prometheus_client.Gauge")))
				switch (i) {
					case 0:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<Gauge>(v)._fields, "state"), "*impl.MessageState", /* @__PURE__ */ $.pointerType("impl.MessageState"))
						break
					}
					case 1:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<Gauge>(v)._fields, "sizeCache"), "*int32", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32")))
						break
					}
					case 2:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<Gauge>(v)._fields, "unknownFields"), "*[]byte", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))))
						break
					}
					default:
					{
						return null
						break
					}
				}
			}
		}, ({ kind: $.TypeKind.Function, params: [{ kind: $.TypeKind.Interface, methods: [] }, /* @__PURE__ */ $.basicType("int")], results: [{ kind: $.TypeKind.Interface, methods: [] }] } as $.FunctionTypeInfo))
		$.arrayIndex(file_io_prometheus_client_metrics_proto_msgTypes!, 2).Exporter = $.functionValue((v: any, i: number): any => {
			{
				let v: Counter | $.VarRef<Counter> | null = ((v as any)?.__goType === "*io_prometheus_client.Counter" && (v as any).__goValue === undefined && (v as any).__isTypedNil !== true ? ((v as any) as Counter | $.VarRef<Counter> | null) : $.mustTypeAssert<Counter | $.VarRef<Counter> | null>(v, /* @__PURE__ */ $.pointerType("io_prometheus_client.Counter")))
				switch (i) {
					case 0:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<Counter>(v)._fields, "state"), "*impl.MessageState", /* @__PURE__ */ $.pointerType("impl.MessageState"))
						break
					}
					case 1:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<Counter>(v)._fields, "sizeCache"), "*int32", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32")))
						break
					}
					case 2:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<Counter>(v)._fields, "unknownFields"), "*[]byte", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))))
						break
					}
					default:
					{
						return null
						break
					}
				}
			}
		}, ({ kind: $.TypeKind.Function, params: [{ kind: $.TypeKind.Interface, methods: [] }, /* @__PURE__ */ $.basicType("int")], results: [{ kind: $.TypeKind.Interface, methods: [] }] } as $.FunctionTypeInfo))
		$.arrayIndex(file_io_prometheus_client_metrics_proto_msgTypes!, 3).Exporter = $.functionValue((v: any, i: number): any => {
			{
				let v: Quantile | $.VarRef<Quantile> | null = ((v as any)?.__goType === "*io_prometheus_client.Quantile" && (v as any).__goValue === undefined && (v as any).__isTypedNil !== true ? ((v as any) as Quantile | $.VarRef<Quantile> | null) : $.mustTypeAssert<Quantile | $.VarRef<Quantile> | null>(v, /* @__PURE__ */ $.pointerType("io_prometheus_client.Quantile")))
				switch (i) {
					case 0:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<Quantile>(v)._fields, "state"), "*impl.MessageState", /* @__PURE__ */ $.pointerType("impl.MessageState"))
						break
					}
					case 1:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<Quantile>(v)._fields, "sizeCache"), "*int32", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32")))
						break
					}
					case 2:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<Quantile>(v)._fields, "unknownFields"), "*[]byte", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))))
						break
					}
					default:
					{
						return null
						break
					}
				}
			}
		}, ({ kind: $.TypeKind.Function, params: [{ kind: $.TypeKind.Interface, methods: [] }, /* @__PURE__ */ $.basicType("int")], results: [{ kind: $.TypeKind.Interface, methods: [] }] } as $.FunctionTypeInfo))
		$.arrayIndex(file_io_prometheus_client_metrics_proto_msgTypes!, 4).Exporter = $.functionValue((v: any, i: number): any => {
			{
				let v: Summary | $.VarRef<Summary> | null = ((v as any)?.__goType === "*io_prometheus_client.Summary" && (v as any).__goValue === undefined && (v as any).__isTypedNil !== true ? ((v as any) as Summary | $.VarRef<Summary> | null) : $.mustTypeAssert<Summary | $.VarRef<Summary> | null>(v, /* @__PURE__ */ $.pointerType("io_prometheus_client.Summary")))
				switch (i) {
					case 0:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<Summary>(v)._fields, "state"), "*impl.MessageState", /* @__PURE__ */ $.pointerType("impl.MessageState"))
						break
					}
					case 1:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<Summary>(v)._fields, "sizeCache"), "*int32", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32")))
						break
					}
					case 2:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<Summary>(v)._fields, "unknownFields"), "*[]byte", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))))
						break
					}
					default:
					{
						return null
						break
					}
				}
			}
		}, ({ kind: $.TypeKind.Function, params: [{ kind: $.TypeKind.Interface, methods: [] }, /* @__PURE__ */ $.basicType("int")], results: [{ kind: $.TypeKind.Interface, methods: [] }] } as $.FunctionTypeInfo))
		$.arrayIndex(file_io_prometheus_client_metrics_proto_msgTypes!, 5).Exporter = $.functionValue((v: any, i: number): any => {
			{
				let v: Untyped | $.VarRef<Untyped> | null = ((v as any)?.__goType === "*io_prometheus_client.Untyped" && (v as any).__goValue === undefined && (v as any).__isTypedNil !== true ? ((v as any) as Untyped | $.VarRef<Untyped> | null) : $.mustTypeAssert<Untyped | $.VarRef<Untyped> | null>(v, /* @__PURE__ */ $.pointerType("io_prometheus_client.Untyped")))
				switch (i) {
					case 0:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<Untyped>(v)._fields, "state"), "*impl.MessageState", /* @__PURE__ */ $.pointerType("impl.MessageState"))
						break
					}
					case 1:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<Untyped>(v)._fields, "sizeCache"), "*int32", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32")))
						break
					}
					case 2:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<Untyped>(v)._fields, "unknownFields"), "*[]byte", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))))
						break
					}
					default:
					{
						return null
						break
					}
				}
			}
		}, ({ kind: $.TypeKind.Function, params: [{ kind: $.TypeKind.Interface, methods: [] }, /* @__PURE__ */ $.basicType("int")], results: [{ kind: $.TypeKind.Interface, methods: [] }] } as $.FunctionTypeInfo))
		$.arrayIndex(file_io_prometheus_client_metrics_proto_msgTypes!, 6).Exporter = $.functionValue((v: any, i: number): any => {
			{
				let v: Histogram | $.VarRef<Histogram> | null = ((v as any)?.__goType === "*io_prometheus_client.Histogram" && (v as any).__goValue === undefined && (v as any).__isTypedNil !== true ? ((v as any) as Histogram | $.VarRef<Histogram> | null) : $.mustTypeAssert<Histogram | $.VarRef<Histogram> | null>(v, /* @__PURE__ */ $.pointerType("io_prometheus_client.Histogram")))
				switch (i) {
					case 0:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<Histogram>(v)._fields, "state"), "*impl.MessageState", /* @__PURE__ */ $.pointerType("impl.MessageState"))
						break
					}
					case 1:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<Histogram>(v)._fields, "sizeCache"), "*int32", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32")))
						break
					}
					case 2:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<Histogram>(v)._fields, "unknownFields"), "*[]byte", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))))
						break
					}
					default:
					{
						return null
						break
					}
				}
			}
		}, ({ kind: $.TypeKind.Function, params: [{ kind: $.TypeKind.Interface, methods: [] }, /* @__PURE__ */ $.basicType("int")], results: [{ kind: $.TypeKind.Interface, methods: [] }] } as $.FunctionTypeInfo))
		$.arrayIndex(file_io_prometheus_client_metrics_proto_msgTypes!, 7).Exporter = $.functionValue((v: any, i: number): any => {
			{
				let v: Bucket | $.VarRef<Bucket> | null = ((v as any)?.__goType === "*io_prometheus_client.Bucket" && (v as any).__goValue === undefined && (v as any).__isTypedNil !== true ? ((v as any) as Bucket | $.VarRef<Bucket> | null) : $.mustTypeAssert<Bucket | $.VarRef<Bucket> | null>(v, /* @__PURE__ */ $.pointerType("io_prometheus_client.Bucket")))
				switch (i) {
					case 0:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<Bucket>(v)._fields, "state"), "*impl.MessageState", /* @__PURE__ */ $.pointerType("impl.MessageState"))
						break
					}
					case 1:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<Bucket>(v)._fields, "sizeCache"), "*int32", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32")))
						break
					}
					case 2:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<Bucket>(v)._fields, "unknownFields"), "*[]byte", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))))
						break
					}
					default:
					{
						return null
						break
					}
				}
			}
		}, ({ kind: $.TypeKind.Function, params: [{ kind: $.TypeKind.Interface, methods: [] }, /* @__PURE__ */ $.basicType("int")], results: [{ kind: $.TypeKind.Interface, methods: [] }] } as $.FunctionTypeInfo))
		$.arrayIndex(file_io_prometheus_client_metrics_proto_msgTypes!, 8).Exporter = $.functionValue((v: any, i: number): any => {
			{
				let v: BucketSpan | $.VarRef<BucketSpan> | null = ((v as any)?.__goType === "*io_prometheus_client.BucketSpan" && (v as any).__goValue === undefined && (v as any).__isTypedNil !== true ? ((v as any) as BucketSpan | $.VarRef<BucketSpan> | null) : $.mustTypeAssert<BucketSpan | $.VarRef<BucketSpan> | null>(v, /* @__PURE__ */ $.pointerType("io_prometheus_client.BucketSpan")))
				switch (i) {
					case 0:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<BucketSpan>(v)._fields, "state"), "*impl.MessageState", /* @__PURE__ */ $.pointerType("impl.MessageState"))
						break
					}
					case 1:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<BucketSpan>(v)._fields, "sizeCache"), "*int32", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32")))
						break
					}
					case 2:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<BucketSpan>(v)._fields, "unknownFields"), "*[]byte", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))))
						break
					}
					default:
					{
						return null
						break
					}
				}
			}
		}, ({ kind: $.TypeKind.Function, params: [{ kind: $.TypeKind.Interface, methods: [] }, /* @__PURE__ */ $.basicType("int")], results: [{ kind: $.TypeKind.Interface, methods: [] }] } as $.FunctionTypeInfo))
		$.arrayIndex(file_io_prometheus_client_metrics_proto_msgTypes!, 9).Exporter = $.functionValue((v: any, i: number): any => {
			{
				let v: Exemplar | $.VarRef<Exemplar> | null = ((v as any)?.__goType === "*io_prometheus_client.Exemplar" && (v as any).__goValue === undefined && (v as any).__isTypedNil !== true ? ((v as any) as Exemplar | $.VarRef<Exemplar> | null) : $.mustTypeAssert<Exemplar | $.VarRef<Exemplar> | null>(v, /* @__PURE__ */ $.pointerType("io_prometheus_client.Exemplar")))
				switch (i) {
					case 0:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<Exemplar>(v)._fields, "state"), "*impl.MessageState", /* @__PURE__ */ $.pointerType("impl.MessageState"))
						break
					}
					case 1:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<Exemplar>(v)._fields, "sizeCache"), "*int32", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32")))
						break
					}
					case 2:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<Exemplar>(v)._fields, "unknownFields"), "*[]byte", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))))
						break
					}
					default:
					{
						return null
						break
					}
				}
			}
		}, ({ kind: $.TypeKind.Function, params: [{ kind: $.TypeKind.Interface, methods: [] }, /* @__PURE__ */ $.basicType("int")], results: [{ kind: $.TypeKind.Interface, methods: [] }] } as $.FunctionTypeInfo))
		$.arrayIndex(file_io_prometheus_client_metrics_proto_msgTypes!, 10).Exporter = $.functionValue((v: any, i: number): any => {
			{
				let v: Metric | $.VarRef<Metric> | null = ((v as any)?.__goType === "*io_prometheus_client.Metric" && (v as any).__goValue === undefined && (v as any).__isTypedNil !== true ? ((v as any) as Metric | $.VarRef<Metric> | null) : $.mustTypeAssert<Metric | $.VarRef<Metric> | null>(v, /* @__PURE__ */ $.pointerType("io_prometheus_client.Metric")))
				switch (i) {
					case 0:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<Metric>(v)._fields, "state"), "*impl.MessageState", /* @__PURE__ */ $.pointerType("impl.MessageState"))
						break
					}
					case 1:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<Metric>(v)._fields, "sizeCache"), "*int32", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32")))
						break
					}
					case 2:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<Metric>(v)._fields, "unknownFields"), "*[]byte", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))))
						break
					}
					default:
					{
						return null
						break
					}
				}
			}
		}, ({ kind: $.TypeKind.Function, params: [{ kind: $.TypeKind.Interface, methods: [] }, /* @__PURE__ */ $.basicType("int")], results: [{ kind: $.TypeKind.Interface, methods: [] }] } as $.FunctionTypeInfo))
		$.arrayIndex(file_io_prometheus_client_metrics_proto_msgTypes!, 11).Exporter = $.functionValue((v: any, i: number): any => {
			{
				let v: MetricFamily | $.VarRef<MetricFamily> | null = ((v as any)?.__goType === "*io_prometheus_client.MetricFamily" && (v as any).__goValue === undefined && (v as any).__isTypedNil !== true ? ((v as any) as MetricFamily | $.VarRef<MetricFamily> | null) : $.mustTypeAssert<MetricFamily | $.VarRef<MetricFamily> | null>(v, /* @__PURE__ */ $.pointerType("io_prometheus_client.MetricFamily")))
				switch (i) {
					case 0:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<MetricFamily>(v)._fields, "state"), "*impl.MessageState", /* @__PURE__ */ $.pointerType("impl.MessageState"))
						break
					}
					case 1:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<MetricFamily>(v)._fields, "sizeCache"), "*int32", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32")))
						break
					}
					case 2:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<MetricFamily>(v)._fields, "unknownFields"), "*[]byte", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))))
						break
					}
					default:
					{
						return null
						break
					}
				}
			}
		}, ({ kind: $.TypeKind.Function, params: [{ kind: $.TypeKind.Interface, methods: [] }, /* @__PURE__ */ $.basicType("int")], results: [{ kind: $.TypeKind.Interface, methods: [] }] } as $.FunctionTypeInfo))
	}
	class x {
		public _fields: {
		}

		constructor(init?: Partial<{}>, __goscriptValue?: boolean) {
			this._fields = {
			}
			;(this as any)[$.structValueMarker] = __goscriptValue === true
		}

		public clone(): x {
			return new x(this, true)
		}

		public __goscriptAssign(source: x): void {
		}

		static __typeInfo = $.registerStructType(
			"io_prometheus_client.x",
			() => new x(),
			() => [],
			x,
			() => []
		)
	}
	let out = await $.markAsStructValue($.cloneStructValue(new filetype.Builder({File: (await (async () => { const __goscriptLiteralField0 = (__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>(reflect.TypeOf($.interfaceValue($.markAsStructValue(new x()), "io_prometheus_client.x", "io_prometheus_client.x"))).PkgPath(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); return new filedesc.Builder({GoPackagePath: __goscriptLiteralField0, RawDescriptor: file_io_prometheus_client_metrics_proto_rawDesc, NumEnums: 1, NumMessages: 12, NumExtensions: 0, NumServices: 0}, true) })()), GoTypes: file_io_prometheus_client_metrics_proto_goTypes, DependencyIndexes: file_io_prometheus_client_metrics_proto_depIdxs, EnumInfos: file_io_prometheus_client_metrics_proto_enumTypes, MessageInfos: file_io_prometheus_client_metrics_proto_msgTypes}, true))).Build()
	File_io_prometheus_client_metrics_proto = out.File
	file_io_prometheus_client_metrics_proto_rawDesc = null
	file_io_prometheus_client_metrics_proto_goTypes = null
	file_io_prometheus_client_metrics_proto_depIdxs = null
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({Descriptor: (receiver: any, ...args: any[]) => (MetricType_Descriptor as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Enum: (receiver: any, ...args: any[]) => (MetricType_Enum as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), EnumDescriptor: (receiver: any, ...args: any[]) => (MetricType_EnumDescriptor as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Number: (receiver: any, ...args: any[]) => (MetricType_Number as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (MetricType_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Type: (receiver: any, ...args: any[]) => (MetricType_Type as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.basicType("int32", "io_prometheus_client.MetricType"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("Descriptor", [], ["protoreflect.EnumDescriptor"]), $.methodSignature("Enum", [], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32", "io_prometheus_client.MetricType"))]), $.methodSignature("EnumDescriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))]), $.methodSignature("Number", [], [/* @__PURE__ */ $.basicType("int32", "protoreflect.EnumNumber")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Type", [], ["protoreflect.EnumType"])])
}

var __goscriptAwait: any

await __goscriptInit0()
