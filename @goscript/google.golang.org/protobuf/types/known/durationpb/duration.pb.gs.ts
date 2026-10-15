// Generated file based on duration.pb.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as protoreflect from "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"

import * as protoimpl from "@goscript/google.golang.org/protobuf/runtime/protoimpl/index.js"

import * as math from "@goscript/math/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as sync from "@goscript/sync/index.js"

import * as time from "@goscript/time/index.js"
import "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"
import "@goscript/google.golang.org/protobuf/runtime/protoimpl/index.js"
import "@goscript/math/index.js"
import "@goscript/reflect/index.js"
import "@goscript/sync/index.js"
import "@goscript/time/index.js"

$.registerTypePackagePath("google.golang.org/protobuf/types/known/durationpb", ["durationpb.Duration", "durationpb.x"])

export class Duration {
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

	// Signed seconds of the span of time. Must be from -315,576,000,000
	// to +315,576,000,000 inclusive. Note: these bounds are computed from:
	// 60 sec/min * 60 min/hr * 24 hr/day * 365.25 days/year * 10000 years
	public get Seconds(): bigint {
		return this._fields.Seconds
	}

	public set Seconds(value: bigint) {
		this._fields.Seconds = value
	}

	// Signed fractions of a second at nanosecond resolution of the span
	// of time. Durations less than one second are represented with a 0
	// `seconds` field and a positive or negative `nanos` field. For durations
	// of one second or more, a non-zero value for the `nanos` field must be
	// of the same sign as the `seconds` field. Must be from -999,999,999
	// to +999,999,999 inclusive.
	public get Nanos(): number {
		return this._fields.Nanos
	}

	public set Nanos(value: number) {
		this._fields.Nanos = value
	}

	public _fields: {
		state: protoimpl.MessageState
		sizeCache: protoimpl.SizeCache
		unknownFields: protoimpl.UnknownFields
		Seconds: bigint
		Nanos: number
	}

	constructor(init?: Partial<{state?: protoimpl.MessageState, sizeCache?: protoimpl.SizeCache, unknownFields?: protoimpl.UnknownFields, Seconds?: bigint, Nanos?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			state: init?.state ?? (undefined as any as protoimpl.MessageState),
			sizeCache: init?.sizeCache ?? (0 as protoimpl.SizeCache),
			unknownFields: init?.unknownFields ?? (null! as protoimpl.UnknownFields),
			Seconds: init?.Seconds ?? (0n as bigint),
			Nanos: init?.Nanos ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Duration {
		return new Duration(this, true)
	}

	public __goscriptAssign(source: Duration): void {
		const target = this._fields
		const values = source._fields
		target.state = $.assignFieldValue(target.state, values.state, "impl.MessageState")
		target.sizeCache = values.sizeCache
		target.unknownFields = values.unknownFields
		target.Seconds = values.Seconds
		target.Nanos = values.Nanos
	}

	public AsDuration(): time.Duration {
		const x: Duration | $.VarRef<Duration> | null = this;
		let secs = (x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as Duration).GetSeconds() : Duration.prototype.GetSeconds.call(x))
		let nanos = (x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as Duration).GetNanos() : Duration.prototype.GetNanos.call(x))
		let d = $.int64Mul($.int64(secs), 1000000000n)
		let overflow = ($.int64Div(d, 1000000000n)) != $.int64(secs)
		d = $.int64Add(d, $.int64Mul($.int64(nanos), 1n))
		overflow = overflow || (((secs < 0n) && (nanos < 0)) && (d > 0n))
		overflow = overflow || (((secs > 0n) && (nanos > 0)) && (d < 0n))
		if (overflow) {
			switch ((true as boolean)) {
				case secs < 0n:
				{
					return -9223372036854775808n
					break
				}
				case secs > 0n:
				{
					return 9223372036854775807n
					break
				}
			}
		}
		return d
	}

	public CheckValid(): $.GoError {
		const x: Duration | $.VarRef<Duration> | null = this;
		switch ((x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as Duration).check() : Duration.prototype.check.call(x))) {
			case 1:
			{
				return $.markAsStructValue($.cloneStructValue($.pointerValue<any>(protoimpl.X))).NewError("invalid nil Duration", null)
				break
			}
			case 2:
			{
				return $.markAsStructValue($.cloneStructValue($.pointerValue<any>(protoimpl.X))).NewError("duration (%v) exceeds -10000 years", $.arrayToSlice<any>([$.interfaceValue(x, "*durationpb.Duration", /* @__PURE__ */ $.pointerType("durationpb.Duration"))]))
				break
			}
			case 3:
			{
				return $.markAsStructValue($.cloneStructValue($.pointerValue<any>(protoimpl.X))).NewError("duration (%v) exceeds +10000 years", $.arrayToSlice<any>([$.interfaceValue(x, "*durationpb.Duration", /* @__PURE__ */ $.pointerType("durationpb.Duration"))]))
				break
			}
			case 4:
			{
				return $.markAsStructValue($.cloneStructValue($.pointerValue<any>(protoimpl.X))).NewError("duration (%v) has out-of-range nanos", $.arrayToSlice<any>([$.interfaceValue(x, "*durationpb.Duration", /* @__PURE__ */ $.pointerType("durationpb.Duration"))]))
				break
			}
			case 5:
			{
				return $.markAsStructValue($.cloneStructValue($.pointerValue<any>(protoimpl.X))).NewError("duration (%v) has seconds and nanos with different signs", $.arrayToSlice<any>([$.interfaceValue(x, "*durationpb.Duration", /* @__PURE__ */ $.pointerType("durationpb.Duration"))]))
				break
			}
			default:
			{
				return null
				break
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async Descriptor(): globalThis.Promise<[$.Slice<number>, $.Slice<number>]> {
		return [await file_google_protobuf_duration_proto_rawDescGZIP(), $.arrayToSlice<number>([0])]
	}

	public GetNanos(): number {
		const x: Duration | $.VarRef<Duration> | null = this;
		if (x != null) {
			return $.pointerValue<Duration>(x).Nanos
		}
		return 0
	}

	public GetSeconds(): bigint {
		const x: Duration | $.VarRef<Duration> | null = this;
		if (x != null) {
			return $.pointerValue<Duration>(x).Seconds
		}
		return 0n
	}

	public IsValid(): boolean {
		const x: Duration | $.VarRef<Duration> | null = this;
		return (x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as Duration).check() : Duration.prototype.check.call(x)) == 0
	}

	public ProtoMessage(): void {
	}

	public ProtoReflect(): protoreflect.Message | null {
		const x: Duration | $.VarRef<Duration> | null = this;
		let mi: any = $.indexRef(file_google_protobuf_duration_proto_msgTypes!, 0)
		if (protoimpl.UnsafeEnabled && (x != null)) {
			let ms: any = $.markAsStructValue($.cloneStructValue($.pointerValue<any>(protoimpl.X))).MessageStateOf($.interfaceValue<protoimpl.Pointer | null>(x, "*durationpb.Duration", /* @__PURE__ */ $.pointerType("durationpb.Duration")))
			if (ms.LoadMessageInfo() == null) {
				ms.StoreMessageInfo(mi)
			}
			return $.interfaceValue<protoreflect.Message | null>(ms, "*impl.messageState", /* @__PURE__ */ $.pointerType("impl.messageState"))
		}
		return mi.MessageOf($.interfaceValue(x, "*durationpb.Duration", /* @__PURE__ */ $.pointerType("durationpb.Duration")))
	}

	public Reset(): void {
		let x: Duration | $.VarRef<Duration> | null = this;
		$.assignStruct($.pointerValue<Duration>(x), $.markAsStructValue(new Duration()))
		if (protoimpl.UnsafeEnabled) {
			let mi: any = $.indexRef(file_google_protobuf_duration_proto_msgTypes!, 0)
			let ms: any = $.markAsStructValue($.cloneStructValue($.pointerValue<any>(protoimpl.X))).MessageStateOf($.interfaceValue<protoimpl.Pointer | null>(x, "*durationpb.Duration", /* @__PURE__ */ $.pointerType("durationpb.Duration")))
			ms.StoreMessageInfo(mi)
		}
	}

	public String(): string {
		const x: Duration | $.VarRef<Duration> | null = this;
		return $.markAsStructValue($.cloneStructValue($.pointerValue<any>(protoimpl.X))).MessageStringOf($.interfaceValue<protoreflect.ProtoMessage | null>(x, "*durationpb.Duration", /* @__PURE__ */ $.pointerType("durationpb.Duration")))
	}

	public check(): number {
		const x: Duration | $.VarRef<Duration> | null = this;
		const absDuration: number = 315576000000
		let secs = (x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as Duration).GetSeconds() : Duration.prototype.GetSeconds.call(x))
		let nanos = (x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as Duration).GetNanos() : Duration.prototype.GetNanos.call(x))
		switch ((true as boolean)) {
			case x == null:
			{
				return 1
				break
			}
			case secs < -315576000000n:
			{
				return 2
				break
			}
			case secs > 315576000000n:
			{
				return 3
				break
			}
			case (nanos <= -1000000000) || (nanos >= 1000000000):
			{
				return 4
				break
			}
			case ((secs > 0n) && (nanos < 0)) || ((secs < 0n) && (nanos > 0)):
			{
				return 5
				break
			}
			default:
			{
				return 0
				break
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	static __typeInfo = $.registerStructType(
		"durationpb.Duration",
		() => new Duration(),
		() => [{ name: "AsDuration", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int64", "time.Duration") }], pointerReceiver: true }, { name: "CheckValid", args: [], returns: [{ type: "error" }], pointerReceiver: true }, { name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "GetNanos", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int32") }], pointerReceiver: true }, { name: "GetSeconds", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int64") }], pointerReceiver: true }, { name: "IsValid", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("bool") }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "ProtoReflect", args: [], returns: [{ type: "protoreflect.Message" }], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "check", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("uint") }], pointerReceiver: true }],
		Duration,
		() => [{ name: "state", key: "state", type: "impl.MessageState" }, { name: "sizeCache", key: "sizeCache", type: /* @__PURE__ */ $.basicType("int32") }, { name: "unknownFields", key: "unknownFields", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { name: "Seconds", key: "Seconds", type: /* @__PURE__ */ $.basicType("int64"), tag: "protobuf:\"varint,1,opt,name=seconds,proto3\" json:\"seconds,omitempty\"" }, { name: "Nanos", key: "Nanos", type: /* @__PURE__ */ $.basicType("int32"), tag: "protobuf:\"varint,2,opt,name=nanos,proto3\" json:\"nanos,omitempty\"" }]
	)
}

export const invalidNil: number = 1

export const invalidUnderflow: number = 2

export const invalidOverflow: number = 3

export const invalidNanosRange: number = 4

export const invalidNanosSign: number = 5

export function New(d: time.Duration): Duration | $.VarRef<Duration> | null {
	let nanos = time.Duration_Nanoseconds(d)
	let secs = $.int64Div(nanos, 1000000000n)
	nanos = $.int64Sub(nanos, $.int64Mul(secs, 1000000000n))
	return new Duration({Seconds: $.int64(secs), Nanos: $.int(nanos, 32)})
}

export let File_google_protobuf_duration_proto: protoreflect.FileDescriptor | null = null! as protoreflect.FileDescriptor | null

export function __goscript_set_File_google_protobuf_duration_proto(__goscriptValue: protoreflect.FileDescriptor | null): void {
	File_google_protobuf_duration_proto = __goscriptValue
}

export let file_google_protobuf_duration_proto_rawDesc: $.Slice<number> = new Uint8Array([10, 30, 103, 111, 111, 103, 108, 101, 47, 112, 114, 111, 116, 111, 98, 117, 102, 47, 100, 117, 114, 97, 116, 105, 111, 110, 46, 112, 114, 111, 116, 111, 18, 15, 103, 111, 111, 103, 108, 101, 46, 112, 114, 111, 116, 111, 98, 117, 102, 34, 58, 10, 8, 68, 117, 114, 97, 116, 105, 111, 110, 18, 24, 10, 7, 115, 101, 99, 111, 110, 100, 115, 24, 1, 32, 1, 40, 3, 82, 7, 115, 101, 99, 111, 110, 100, 115, 18, 20, 10, 5, 110, 97, 110, 111, 115, 24, 2, 32, 1, 40, 5, 82, 5, 110, 97, 110, 111, 115, 66, 131, 1, 10, 19, 99, 111, 109, 46, 103, 111, 111, 103, 108, 101, 46, 112, 114, 111, 116, 111, 98, 117, 102, 66, 13, 68, 117, 114, 97, 116, 105, 111, 110, 80, 114, 111, 116, 111, 80, 1, 90, 49, 103, 111, 111, 103, 108, 101, 46, 103, 111, 108, 97, 110, 103, 46, 111, 114, 103, 47, 112, 114, 111, 116, 111, 98, 117, 102, 47, 116, 121, 112, 101, 115, 47, 107, 110, 111, 119, 110, 47, 100, 117, 114, 97, 116, 105, 111, 110, 112, 98, 248, 1, 1, 162, 2, 3, 71, 80, 66, 170, 2, 30, 71, 111, 111, 103, 108, 101, 46, 80, 114, 111, 116, 111, 98, 117, 102, 46, 87, 101, 108, 108, 75, 110, 111, 119, 110, 84, 121, 112, 101, 115, 98, 6, 112, 114, 111, 116, 111, 51]) as $.Slice<number>

export function __goscript_set_file_google_protobuf_duration_proto_rawDesc(__goscriptValue: $.Slice<number>): void {
	file_google_protobuf_duration_proto_rawDesc = __goscriptValue
}

export let file_google_protobuf_duration_proto_rawDescOnce: $.VarRef<sync.Once> = $.varRef($.markAsStructValue(new sync.Once()))

export function __goscript_set_file_google_protobuf_duration_proto_rawDescOnce(__goscriptValue: sync.Once): void {
	$.assignStruct(file_google_protobuf_duration_proto_rawDescOnce.value, __goscriptValue)
}

export let file_google_protobuf_duration_proto_rawDescData: $.Slice<number> = file_google_protobuf_duration_proto_rawDesc

export function __goscript_set_file_google_protobuf_duration_proto_rawDescData(__goscriptValue: $.Slice<number>): void {
	file_google_protobuf_duration_proto_rawDescData = __goscriptValue
}

export async function file_google_protobuf_duration_proto_rawDescGZIP(): globalThis.Promise<$.Slice<number>> {
	await file_google_protobuf_duration_proto_rawDescOnce.value.Do($.functionValue((): void => {
		file_google_protobuf_duration_proto_rawDescData = $.markAsStructValue($.cloneStructValue($.pointerValue<any>(protoimpl.X))).CompressGZIP(file_google_protobuf_duration_proto_rawDescData)
	}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)))
	return file_google_protobuf_duration_proto_rawDescData
}

export let file_google_protobuf_duration_proto_msgTypes: $.Slice<protoimpl.MessageInfo> = $.makeSlice<protoimpl.MessageInfo>(1, undefined, undefined, () => new protoimpl.MessageInfo(undefined, true))

export function __goscript_set_file_google_protobuf_duration_proto_msgTypes(__goscriptValue: $.Slice<protoimpl.MessageInfo>): void {
	file_google_protobuf_duration_proto_msgTypes = __goscriptValue
}

export let file_google_protobuf_duration_proto_goTypes: $.Slice<any> = $.arrayToSlice<any>([$.interfaceValue(null, "*durationpb.Duration", /* @__PURE__ */ $.pointerType("durationpb.Duration"))])

export function __goscript_set_file_google_protobuf_duration_proto_goTypes(__goscriptValue: $.Slice<any>): void {
	file_google_protobuf_duration_proto_goTypes = __goscriptValue
}

export let file_google_protobuf_duration_proto_depIdxs: $.Slice<number> = $.arrayToSlice<number>([0, 0, 0, 0, 0])

export function __goscript_set_file_google_protobuf_duration_proto_depIdxs(__goscriptValue: $.Slice<number>): void {
	file_google_protobuf_duration_proto_depIdxs = __goscriptValue
}

async function __goscriptInit0(): globalThis.Promise<void> {
	await file_google_protobuf_duration_proto_init()
}

export async function file_google_protobuf_duration_proto_init(): globalThis.Promise<void> {
	if (File_google_protobuf_duration_proto != null) {
		return
	}
	if (!protoimpl.UnsafeEnabled) {
		$.arrayIndex(file_google_protobuf_duration_proto_msgTypes!, 0).Exporter = $.functionValue((v: any, i: number): any => {
			{
				let v: Duration | $.VarRef<Duration> | null = ((v as any)?.__goType === "*durationpb.Duration" && (v as any).__goValue === undefined && (v as any).__isTypedNil !== true ? ((v as any) as Duration | $.VarRef<Duration> | null) : $.mustTypeAssert<Duration | $.VarRef<Duration> | null>(v, /* @__PURE__ */ $.pointerType("durationpb.Duration")))
				switch (i) {
					case 0:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<Duration>(v)._fields, "state"), "*impl.MessageState", /* @__PURE__ */ $.pointerType("impl.MessageState"))
						break
					}
					case 1:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<Duration>(v)._fields, "sizeCache"), "*int32", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32")))
						break
					}
					case 2:
					{
						return $.interfaceValue($.fieldRef($.pointerValue<Duration>(v)._fields, "unknownFields"), "*[]byte", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))))
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
			"durationpb.x",
			() => new x(),
			() => [],
			x,
			() => []
		)
	}
	let out = await $.markAsStructValue($.cloneStructValue(new protoimpl.TypeBuilder({File: (await (async () => { const __goscriptLiteralField0 = (__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>(reflect.TypeOf($.interfaceValue($.markAsStructValue(new x()), "durationpb.x", "durationpb.x"))).PkgPath(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); return new protoimpl.DescBuilder({GoPackagePath: __goscriptLiteralField0, RawDescriptor: file_google_protobuf_duration_proto_rawDesc, NumEnums: 0, NumMessages: 1, NumExtensions: 0, NumServices: 0}, true) })()), GoTypes: file_google_protobuf_duration_proto_goTypes, DependencyIndexes: file_google_protobuf_duration_proto_depIdxs, MessageInfos: file_google_protobuf_duration_proto_msgTypes}, true))).Build()
	File_google_protobuf_duration_proto = out.File
	file_google_protobuf_duration_proto_rawDesc = null
	file_google_protobuf_duration_proto_goTypes = null
	file_google_protobuf_duration_proto_depIdxs = null
}

var __goscriptAwait: any

await __goscriptInit0()
