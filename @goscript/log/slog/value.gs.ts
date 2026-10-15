// Generated file based on value.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as math from "@goscript/math/index.js"

import * as runtime from "@goscript/runtime/index.js"

import * as slices from "@goscript/slices/index.js"

import * as strconv from "@goscript/strconv/index.js"

import * as strings from "@goscript/strings/index.js"

import * as time2 from "@goscript/time/index.js"

import * as unsafe from "@goscript/unsafe/index.js"

import type * as io from "@goscript/io/index.js"

import * as __goscript_attr from "./attr.gs.ts"
import "@goscript/fmt/index.js"
import "@goscript/math/index.js"
import "@goscript/runtime/index.js"
import "@goscript/slices/index.js"
import "@goscript/strconv/index.js"
import "@goscript/strings/index.js"
import "@goscript/time/index.js"
import "@goscript/unsafe/index.js"
import "./attr.gs.ts"

$.registerTypePackagePath("log/slog", ["slog.Value", "slog.stringptr", "slog.groupptr", "slog.Kind", "slog.kind", "slog.timeLocation", "slog.timeTime", "slog.LogValuer"])

export type stringptr = $.VarRef<number> | null

export type groupptr = __goscript_attr.Attr | $.VarRef<__goscript_attr.Attr> | null

export type Kind = number

$.registerNamedValueType(
	"slog.Kind",
	{String: (receiver: any, ...args: any[]) => (Kind_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

$.registerNamedValueType(
	"*slog.Kind",
	{String: (receiver: any, ...args: any[]) => (Kind_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

export type kind = number

export type timeLocation = time2.Location | $.VarRef<time2.Location> | null

export type LogValuer = {
	LogValue(): Value
}

$.registerInterfaceType(
	"slog.LogValuer",
	null,
	[$.methodSignature("LogValue", [], ["slog.Value"])]
);

export class Value {
	public get _blank0(): ((() => void) | null)[] {
		return this._fields._blank0
	}

	public set _blank0(value: ((() => void) | null)[]) {
		this._fields._blank0 = value
	}

	// num holds the value for Kinds Int64, Uint64, Float64, Bool and Duration,
	// the string length for KindString, and nanoseconds since the epoch for KindTime.
	public get num(): bigint {
		return this._fields.num
	}

	public set num(value: bigint) {
		this._fields.num = value
	}

	// If any is of type Kind, then the value is in num as described above.
	// If any is of type *time.Location, then the Kind is Time and time.Time value
	// can be constructed from the Unix nanos in num and the location (monotonic time
	// is not preserved).
	// If any is of type stringptr, then the Kind is String and the string value
	// consists of the length in num and the pointer in any.
	// Otherwise, the Kind is Any and any is the value.
	// (This implies that Attrs cannot store values of type Kind, *time.Location
	// or stringptr.)
	public get _any(): any {
		return this._fields._any
	}

	public set _any(value: any) {
		this._fields._any = value
	}

	public _fields: {
		_blank0: ((() => void) | null)[]
		num: bigint
		_any: any
	}

	constructor(init?: Partial<{_blank0?: ((() => void) | null)[], num?: bigint, _any?: any}>, __goscriptValue?: boolean) {
		this._fields = {
			_blank0: init?._blank0 !== undefined ? $.cloneArrayValue(init._blank0, /* @__PURE__ */ $.arrayType(({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), 0)) : $.arrayValue(globalThis.Array.from({ length: 0 }, () => null)),
			num: init?.num ?? (0n as bigint),
			_any: init?._any ?? (null! as any)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Value {
		return new Value(this, true)
	}

	public __goscriptAssign(source: Value): void {
		const target = this._fields
		const values = source._fields
		target._blank0 = $.assignFieldValue(target._blank0, values._blank0, /* @__PURE__ */ $.arrayType(({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), 0))
		target.num = values.num
		target._any = $.assignFieldValue(target._any, values._any, { kind: $.TypeKind.Interface, methods: [] })
	}

	public async Any(): globalThis.Promise<any> {
		const v = this;
		switch (v.Kind()) {
			case 0:
			{
				{
					let [k, ok] = $.typeAssertTuple<kind>(v._any, /* @__PURE__ */ $.basicType("int", "slog.kind"))
					if (ok) {
						return $.namedValueInterfaceValue<any>($.int(k), "slog.Kind", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())
					}
				}
				return v._any
				break
			}
			case 9:
			{
				return v._any
				break
			}
			case 8:
			{
				return $.interfaceValue(v.group(), "[]slog.Attr", /* @__PURE__ */ $.sliceType("slog.Attr"))
				break
			}
			case 4:
			{
				return $.basicInterfaceValue($.int64(v.num), "int64")
				break
			}
			case 7:
			{
				return $.basicInterfaceValue(v.num, "uint64")
				break
			}
			case 3:
			{
				return $.basicInterfaceValue(v.float(), "float64")
				break
			}
			case 5:
			{
				return v.str()
				break
			}
			case 1:
			{
				return v.bool()
				break
			}
			case 2:
			{
				return $.namedValueInterfaceValue<any>(v.duration(), "time.Duration", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic5())
				break
			}
			case 6:
			{
				return $.interfaceValue(await v.time(), "time.Time", "time.Time")
				break
			}
			default:
			{
				$.panic(await fmt.Sprintf("bad kind: %s", $.namedValueInterfaceValue<any>(v.Kind(), "slog.Kind", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())))
				break
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async Bool(): globalThis.Promise<boolean> {
		const v = this;
		{
			let g = v.Kind()
			let w = 1
			if (g != w) {
				$.panic(await fmt.Sprintf("Value kind is %s, not %s", $.namedValueInterfaceValue<any>(g, "slog.Kind", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), $.namedValueInterfaceValue<any>(w, "slog.Kind", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())))
			}
		}
		return v.bool()
	}

	public async Duration(): globalThis.Promise<time2.Duration> {
		const v = this;
		{
			let g = v.Kind()
			let w = 2
			if (g != w) {
				$.panic(await fmt.Sprintf("Value kind is %s, not %s", $.namedValueInterfaceValue<any>(g, "slog.Kind", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), $.namedValueInterfaceValue<any>(w, "slog.Kind", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())))
			}
		}

		return v.duration()
	}

	public async Equal(w: Value): globalThis.Promise<boolean> {
		const v = this;
		let k1 = v.Kind()
		let k2 = w.Kind()
		if (k1 != k2) {
			return false
		}
		switch (k1) {
			case 4:
			case 7:
			case 1:
			case 2:
			{
				return v.num == w.num
				break
			}
			case 5:
			{
				return $.stringEqual(v.str(), w.str())
				break
			}
			case 3:
			{
				return v.float() == w.float()
				break
			}
			case 6:
			{
				return $.markAsStructValue($.cloneStructValue((await v.time()))).Equal(await w.time())
				break
			}
			case 0:
			case 9:
			{
				return $.comparableEqual(v._any, w._any)
				break
			}
			case 8:
			{
				return slices.EqualFunc(v.group(), w.group(), $.functionValue(async (a: __goscript_attr.Attr, b: __goscript_attr.Attr): globalThis.Promise<boolean> => await $.pointerValue<__goscript_attr.Attr>(a).Equal(b), ({ kind: $.TypeKind.Function, params: ["slog.Attr", "slog.Attr"], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)))
				break
			}
			default:
			{
				$.panic(await fmt.Sprintf("bad kind: %s", $.namedValueInterfaceValue<any>(k1, "slog.Kind", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())))
				break
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async Float64(): globalThis.Promise<number> {
		const v = this;
		{
			let g = v.Kind()
			let w = 3
			if (g != w) {
				$.panic(await fmt.Sprintf("Value kind is %s, not %s", $.namedValueInterfaceValue<any>(g, "slog.Kind", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), $.namedValueInterfaceValue<any>(w, "slog.Kind", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())))
			}
		}

		return v.float()
	}

	public Group(): $.Slice<__goscript_attr.Attr> {
		const v = this;
		{
			let __goscriptTuple0: any = $.typeAssertTuple<groupptr>(v._any, "slog.groupptr")
			let sp: groupptr = __goscriptTuple0[0]
			let ok = __goscriptTuple0[1]
			if (ok) {
				return (unsafe.Slice!(sp, v.num) as $.Slice<__goscript_attr.Attr>)
			}
		}
		$.panic("Group: bad kind")
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async Int64(): globalThis.Promise<bigint> {
		const v = this;
		{
			let g = v.Kind()
			let w = 4
			if (g != w) {
				$.panic(await fmt.Sprintf("Value kind is %s, not %s", $.namedValueInterfaceValue<any>(g, "slog.Kind", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), $.namedValueInterfaceValue<any>(w, "slog.Kind", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())))
			}
		}
		return $.int64(v.num)
	}

	public Kind(): Kind {
		const v = this;
		{
			const __goscriptTypeSwitchValue = v._any
			switch (true) {
				case $.typeAssert<Kind>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("int", "slog.Kind")).ok:
					{
						let x: Kind = $.typeAssert<Kind>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("int", "slog.Kind")).value
						return x
					}
					break
				case $.typeAssert<stringptr>(__goscriptTypeSwitchValue, "slog.stringptr").ok:
					{
						let x: stringptr = $.typeAssert<stringptr>(__goscriptTypeSwitchValue, "slog.stringptr").value
						return 5
					}
					break
				case $.is(__goscriptTypeSwitchValue, "slog.timeLocation") || $.is(__goscriptTypeSwitchValue, "slog.timeTime"):
					{
						let x = __goscriptTypeSwitchValue
						return 6
					}
					break
				case $.typeAssert<groupptr>(__goscriptTypeSwitchValue, "slog.groupptr").ok:
					{
						let x: groupptr = $.typeAssert<groupptr>(__goscriptTypeSwitchValue, "slog.groupptr").value
						return 8
					}
					break
				case $.typeAssert<LogValuer | null>(__goscriptTypeSwitchValue, "slog.LogValuer").ok:
					{
						let x: LogValuer | null = $.typeAssert<LogValuer | null>(__goscriptTypeSwitchValue, "slog.LogValuer").value
						return 9
					}
					break
				case $.typeAssert<kind>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("int", "slog.kind")).ok:
					{
						let x: kind = $.typeAssert<kind>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("int", "slog.kind")).value
						return 0
					}
					break
				default:
					{
						let x: any = __goscriptTypeSwitchValue
						return 0
					}
					break
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public LogValuer(): LogValuer | null {
		const v = this;
		return $.mustTypeAssert<LogValuer | null>(v._any, "slog.LogValuer")
	}

	public async Resolve(): globalThis.Promise<Value> {
		let v: Value = this;
		let rv: Value = new Value(undefined, true)
		const __defer = new $.AsyncDisposableStack()
		try {
			let orig = (v).clone()
			__defer.defer(async () => { await (async (): globalThis.Promise<void> => {
				{
					let r = $.recover()
					if (r != null) {
						rv = $.assignStruct(rv, AnyValue((fmt.Errorf("LogValue panicked\n%s", await stack(3, 5)) as any)))
					}
				}
			})() })

			for (let i = 0; i < 100; i++) {
				if (v.Kind() != 9) {
					const __goscriptReturn0: Value = (v).clone()
					rv = __goscriptReturn0
					await __defer.dispose()
					return (rv).clone()
				}
				v = $.assignStruct(v, ((__goscriptAwait = $.pointerValue<Exclude<LogValuer, null>>(v.LogValuer()).LogValue(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as Value))
			}
			let err = fmt.Errorf("LogValue called too many times on Value of type %T", await orig.Any())
			const __goscriptReturn1: Value = AnyValue((err as any))
			rv = __goscriptReturn1
			await __defer.dispose()
			return (rv).clone()
			await __defer.dispose()
		} catch (e) {
			await __defer.disposePanic(e)
			if (!$.recovered(e)) {
				throw e
			}
		}
		return (rv).clone()
	}

	public async String(): globalThis.Promise<string> {
		const v = this;
		{
			let [sp, ok] = $.typeAssertTuple<stringptr>(v._any, "slog.stringptr")
			if (ok) {
				return unsafe.String!(sp, v.num)
			}
		}
		let buf: $.Slice<number> = null! as $.Slice<number>
		return $.bytesToString(await v.append(buf))
	}

	public async Time(): globalThis.Promise<time2.Time> {
		const v = this;
		{
			let g = v.Kind()
			let w = 6
			if (g != w) {
				$.panic(await fmt.Sprintf("Value kind is %s, not %s", $.namedValueInterfaceValue<any>(g, "slog.Kind", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), $.namedValueInterfaceValue<any>(w, "slog.Kind", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())))
			}
		}
		return v.time()
	}

	public async Uint64(): globalThis.Promise<bigint> {
		const v = this;
		{
			let g = v.Kind()
			let w = 7
			if (g != w) {
				$.panic(await fmt.Sprintf("Value kind is %s, not %s", $.namedValueInterfaceValue<any>(g, "slog.Kind", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), $.namedValueInterfaceValue<any>(w, "slog.Kind", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())))
			}
		}
		return v.num
	}

	public async append(dst: $.Slice<number>): globalThis.Promise<$.Slice<number>> {
		const v = this;
		switch (v.Kind()) {
			case 5:
			{
				return $.appendSlice(dst, $.stringToBytes(v.str()), $.byteSliceHint)
				break
			}
			case 4:
			{
				return strconv.AppendInt(dst, $.int64(v.num), 10)
				break
			}
			case 7:
			{
				return strconv.AppendUint(dst, v.num, 10)
				break
			}
			case 3:
			{
				return strconv.AppendFloat(dst, v.float(), 103, -1, 64)
				break
			}
			case 1:
			{
				return strconv.AppendBool(dst, v.bool())
				break
			}
			case 2:
			{
				return $.appendSlice(dst, $.stringToBytes(time2.Duration_String(v.duration())), $.byteSliceHint)
				break
			}
			case 6:
			{
				return $.markAsStructValue($.cloneStructValue((await v.time()))).AppendFormat(dst, "2006-01-02 15:04:05.999999999 -0700 MST")
				break
			}
			case 8:
			{
				return fmt.Append(dst, $.interfaceValue(v.group(), "[]slog.Attr", /* @__PURE__ */ $.sliceType("slog.Attr")))
				break
			}
			case 0:
			case 9:
			{
				return fmt.Append(dst, v._any)
				break
			}
			default:
			{
				$.panic(await fmt.Sprintf("bad kind: %s", $.namedValueInterfaceValue<any>(v.Kind(), "slog.Kind", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())))
				break
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public bool(): boolean {
		const v = this;
		return v.num == 1n
	}

	public duration(): time2.Duration {
		const v = this;
		return $.int64($.int64(v.num))
	}

	public float(): number {
		const v = this;
		return math.Float64frombits(v.num)
	}

	public group(): $.Slice<__goscript_attr.Attr> {
		const v = this;
		return (unsafe.Slice!($.mustTypeAssert<groupptr>(v._any, "slog.groupptr"), v.num) as $.Slice<__goscript_attr.Attr>)
	}

	public isEmptyGroup(): boolean {
		const v = this;
		if (v.Kind() != 8) {
			return false
		}
		// We do not need to recursively examine the group's Attrs for emptiness,
		// because GroupValue removed them when the group was constructed, and
		// groups are immutable.
		return $.sliceLen(v.group()) == 0
	}

	public str(): string {
		const v = this;
		return unsafe.String!($.mustTypeAssert<stringptr>(v._any, "slog.stringptr"), v.num)
	}

	public async time(): globalThis.Promise<time2.Time> {
		const v = this;
		{
			const __goscriptTypeSwitchValue = v._any
			switch (true) {
				case $.typeAssert<timeLocation>(__goscriptTypeSwitchValue, "slog.timeLocation").ok:
					{
						let a: timeLocation = $.typeAssert<timeLocation>(__goscriptTypeSwitchValue, "slog.timeLocation").value
						if (a == null) {
							return $.markAsStructValue(new time2.Time())
						}
						return $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(time2.Unix(0n, $.int64(v.num)))).In(a)))
					}
					break
				case $.typeAssert<timeTime>(__goscriptTypeSwitchValue, "slog.timeTime").ok:
					{
						let a: timeTime = $.markAsStructValue($.cloneStructValue($.typeAssert<timeTime>(__goscriptTypeSwitchValue, "slog.timeTime").value))
						return $.markAsStructValue($.cloneStructValue($.namedStructConversion<time2.Time>(a)))
					}
					break
				default:
					{
						let a: any = __goscriptTypeSwitchValue
						$.panic(await fmt.Sprintf("bad time type %T", v._any))
					}
					break
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	static __typeInfo = $.registerStructType(
		"slog.Value",
		() => new Value(),
		() => [$.methodSignature("Any", [], [{ kind: $.TypeKind.Interface, methods: [] }]), $.methodSignature("Bool", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Duration", [], [/* @__PURE__ */ $.basicType("int64", "time.Duration")]), $.methodSignature("Equal", [["w", "slog.Value"]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Float64", [], [/* @__PURE__ */ $.basicType("float64")]), $.methodSignature("Group", [], [/* @__PURE__ */ $.sliceType("slog.Attr")]), $.methodSignature("Int64", [], [/* @__PURE__ */ $.basicType("int64")]), $.methodSignature("Kind", [], [/* @__PURE__ */ $.basicType("int", "slog.Kind")]), $.methodSignature("LogValuer", [], ["slog.LogValuer"]), $.methodSignature("Resolve", [], [["rv", "slog.Value"]]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Time", [], ["time.Time"]), $.methodSignature("Uint64", [], [/* @__PURE__ */ $.basicType("uint64")]), $.methodSignature("append", [["dst", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("bool", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("duration", [], [/* @__PURE__ */ $.basicType("int64", "time.Duration")]), $.methodSignature("float", [], [/* @__PURE__ */ $.basicType("float64")]), $.methodSignature("group", [], [/* @__PURE__ */ $.sliceType("slog.Attr")]), $.methodSignature("isEmptyGroup", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("str", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("time", [], ["time.Time"])],
		Value,
		() => [/* @__PURE__ */ $.structField("_", /* @__PURE__ */ $.arrayType(({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), 0), [0], 0, false, { key: "_blank0", pkgPath: "log/slog" }), /* @__PURE__ */ $.structField("num", /* @__PURE__ */ $.basicType("uint64"), [1], 0, false, { pkgPath: "log/slog" }), /* @__PURE__ */ $.structField("any", { kind: $.TypeKind.Interface, methods: [] }, [2], 8, false, { key: "_any", pkgPath: "log/slog" })]
	)
}

export class timeTime {
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

	public get loc(): time2.Location | $.VarRef<time2.Location> | null {
		return this._fields.loc
	}

	public set loc(value: time2.Location | $.VarRef<time2.Location> | null) {
		this._fields.loc = value
	}

	public _fields: {
		wall: bigint
		ext: bigint
		loc: time2.Location | $.VarRef<time2.Location> | null
	}

	constructor(init?: Partial<{wall?: bigint, ext?: bigint, loc?: time2.Location | $.VarRef<time2.Location> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			wall: init?.wall ?? (0n as bigint),
			ext: init?.ext ?? (0n as bigint),
			loc: init?.loc ?? (null! as time2.Location | $.VarRef<time2.Location> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): timeTime {
		return new timeTime(this, true)
	}

	public __goscriptAssign(source: timeTime): void {
		const target = this._fields
		const values = source._fields
		target.wall = values.wall
		target.ext = values.ext
		target.loc = values.loc
	}

	static __typeInfo = $.registerStructType(
		"slog.timeTime",
		() => new timeTime(),
		() => [],
		timeTime,
		() => [/* @__PURE__ */ $.structField("wall", /* @__PURE__ */ $.basicType("uint64"), [0], 0, false, { pkgPath: "time" }), /* @__PURE__ */ $.structField("ext", /* @__PURE__ */ $.basicType("int64"), [1], 8, false, { pkgPath: "time" }), /* @__PURE__ */ $.structField("loc", /* @__PURE__ */ $.pointerType("time.Location"), [2], 16, false, { pkgPath: "time" })]
	)
}

export const KindAny: Kind = 0

export const KindBool: Kind = 1

export const KindDuration: Kind = 2

export const KindFloat64: Kind = 3

export const KindInt64: Kind = 4

export const KindString: Kind = 5

export const KindTime: Kind = 6

export const KindUint64: Kind = 7

export const KindGroup: Kind = 8

export const KindLogValuer: Kind = 9

export const maxLogValues: number = 100

export let kindStrings: $.Slice<string> = $.arrayToSlice<string>(["Any", "Bool", "Duration", "Float64", "Int64", "String", "Time", "Uint64", "Group", "LogValuer"])

export function __goscript_set_kindStrings(__goscriptValue: $.Slice<string>): void {
	kindStrings = __goscriptValue
}

export function Kind_String(k: Kind): string {
	if ((k >= 0) && ($.int(k) < $.sliceLen(kindStrings))) {
		return $.arrayIndex(kindStrings!, k)
	}
	return "<unknown slog.Kind>"
}

export function StringValue(value: string): Value {
	return (() => { const __goscriptLiteralField0 = $.interfaceValue(unsafe.StringData!(value), "slog.stringptr", "slog.stringptr"); return new Value({num: $.uint64($.stringLen(value)), _any: __goscriptLiteralField0}, true) })()
}

export function IntValue(v: number): Value {
	return Int64Value($.int64(v))
}

export function Int64Value(v: bigint): Value {
	return new Value({num: $.uint64(v), _any: $.namedValueInterfaceValue<any>(4, "slog.Kind", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())}, true)
}

export function Uint64Value(v: bigint): Value {
	return new Value({num: v, _any: $.namedValueInterfaceValue<any>(7, "slog.Kind", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())}, true)
}

export function Float64Value(v: number): Value {
	return (() => { const __goscriptLiteralField1 = math.Float64bits(v); return new Value({num: __goscriptLiteralField1, _any: $.namedValueInterfaceValue<any>(3, "slog.Kind", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())}, true) })()
}

export function BoolValue(v: boolean): Value {
	let u = 0n
	if (v) {
		u = 1n
	}
	return new Value({num: u, _any: $.namedValueInterfaceValue<any>(1, "slog.Kind", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())}, true)
}

export function TimeValue(v: time2.Time): Value {
	if ($.markAsStructValue($.cloneStructValue(v)).IsZero()) {
		// UnixNano on the zero time is undefined, so represent the zero time
		// with a nil *time.Location instead. time.Time.Location method never
		// returns nil, so a Value with any == timeLocation(nil) cannot be
		// mistaken for any other Value, time.Time or otherwise.
		return new Value({_any: $.interfaceValue(null, "slog.timeLocation", "slog.timeLocation")}, true)
	}
	let nsec = $.markAsStructValue($.cloneStructValue(v)).UnixNano()
	let t = $.markAsStructValue($.cloneStructValue(time2.Unix(0n, nsec)))
	if ($.markAsStructValue($.cloneStructValue(v)).Equal($.markAsStructValue($.cloneStructValue(t)))) {
		// UnixNano correctly represents the time, so use a zero-alloc representation.
		return (() => { const __goscriptLiteralField2 = $.interfaceValue($.markAsStructValue($.cloneStructValue(v)).Location(), "slog.timeLocation", "slog.timeLocation"); return new Value({num: $.uint64(nsec), _any: __goscriptLiteralField2}, true) })()
	}
	// Fall back to the general form.
	// Strip the monotonic portion to match the other representation.
	return (() => { const __goscriptLiteralField3 = $.interfaceValue(($.namedStructConversion<timeTime>($.markAsStructValue($.cloneStructValue(v)).Round(0n))).clone(), "slog.timeTime", "slog.timeTime"); return new Value({_any: __goscriptLiteralField3}, true) })()
}

export function DurationValue(v: time2.Duration): Value {
	return (() => { const __goscriptLiteralField4 = $.uint64(time2.Duration_Nanoseconds(v)); return new Value({num: __goscriptLiteralField4, _any: $.namedValueInterfaceValue<any>(2, "slog.Kind", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())}, true) })()
}

export function GroupValue(_as: $.Slice<__goscript_attr.Attr>): Value {
	// Remove empty groups.
	// It is simpler overall to do this at construction than
	// to check each Group recursively for emptiness.
	{
		let n = countEmptyGroups(_as)
		if (n > 0) {
			let as2: $.Slice<__goscript_attr.Attr> = $.makeSlice<__goscript_attr.Attr>(0, $.sliceLen(_as) - n, undefined, () => new __goscript_attr.Attr(undefined, true))
			for (let __goscriptRangeTarget0 = _as, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
				let a = ((__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as __goscript_attr.Attr)).clone()
				if (!$.markAsStructValue($.cloneStructValue(a.Value)).isEmptyGroup()) {
					as2 = $.appendOne(as2, (a).clone())
				}
			}
			_as = as2
		}
	}
	return (() => { const __goscriptLiteralField5 = $.interfaceValue(unsafe.SliceData!(_as), "slog.groupptr", "slog.groupptr"); return new Value({num: $.uint64($.sliceLen(_as)), _any: __goscriptLiteralField5}, true) })()
}

export function countEmptyGroups(_as: $.Slice<__goscript_attr.Attr>): number {
	let n = 0
	for (let __goscriptRangeTarget1 = _as, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
		let a = ((__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as __goscript_attr.Attr)).clone()
		if ($.markAsStructValue($.cloneStructValue(a.Value)).isEmptyGroup()) {
			n++
		}
	}
	return n
}

export function AnyValue(v: any): Value {
	{
		const __goscriptTypeSwitchValue = v
		switch (true) {
			case $.typeAssert<string>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("string")).ok:
				{
					let v: string = $.typeAssert<string>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("string")).value
					return StringValue(v)
				}
				break
			case $.typeAssert<number>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("int")).ok:
				{
					let v: number = $.typeAssert<number>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("int")).value
					return Int64Value($.int64(v))
				}
				break
			case $.typeAssert<number>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("uint")).ok:
				{
					let v: number = $.typeAssert<number>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("uint")).value
					return Uint64Value($.uint64(v))
				}
				break
			case $.typeAssert<bigint>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("int64")).ok:
				{
					let v: bigint = $.typeAssert<bigint>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("int64")).value
					return Int64Value(v)
				}
				break
			case $.typeAssert<bigint>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("uint64")).ok:
				{
					let v: bigint = $.typeAssert<bigint>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("uint64")).value
					return Uint64Value(v)
				}
				break
			case $.typeAssert<boolean>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("bool")).ok:
				{
					let v: boolean = $.typeAssert<boolean>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("bool")).value
					return BoolValue(v)
				}
				break
			case $.typeAssert<time2.Duration>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("int64", "time.Duration")).ok:
				{
					let v: time2.Duration = $.typeAssert<time2.Duration>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("int64", "time.Duration")).value
					return DurationValue(v)
				}
				break
			case $.typeAssert<time2.Time>(__goscriptTypeSwitchValue, "time.Time").ok:
				{
					let v: time2.Time = $.markAsStructValue($.cloneStructValue($.typeAssert<time2.Time>(__goscriptTypeSwitchValue, "time.Time").value))
					return TimeValue(v)
				}
				break
			case $.typeAssert<number>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("uint8")).ok:
				{
					let v: number = $.typeAssert<number>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("uint8")).value
					return Uint64Value($.uint64(v))
				}
				break
			case $.typeAssert<number>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("uint16")).ok:
				{
					let v: number = $.typeAssert<number>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("uint16")).value
					return Uint64Value($.uint64(v))
				}
				break
			case $.typeAssert<number>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("uint32")).ok:
				{
					let v: number = $.typeAssert<number>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("uint32")).value
					return Uint64Value($.uint64(v))
				}
				break
			case $.typeAssert<number>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("uintptr")).ok:
				{
					let v: number = $.typeAssert<number>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("uintptr")).value
					return Uint64Value($.uint64(v))
				}
				break
			case $.typeAssert<number>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("int8")).ok:
				{
					let v: number = $.typeAssert<number>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("int8")).value
					return Int64Value($.int64(v))
				}
				break
			case $.typeAssert<number>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("int16")).ok:
				{
					let v: number = $.typeAssert<number>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("int16")).value
					return Int64Value($.int64(v))
				}
				break
			case $.typeAssert<number>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("int32")).ok:
				{
					let v: number = $.typeAssert<number>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("int32")).value
					return Int64Value($.int64(v))
				}
				break
			case $.typeAssert<number>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("float64")).ok:
				{
					let v: number = $.typeAssert<number>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("float64")).value
					return Float64Value(v)
				}
				break
			case $.typeAssert<number>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("float32")).ok:
				{
					let v: number = $.typeAssert<number>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("float32")).value
					return Float64Value(v)
				}
				break
			case $.typeAssert<$.Slice<__goscript_attr.Attr>>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.sliceType("slog.Attr")).ok:
				{
					let v: $.Slice<__goscript_attr.Attr> = $.typeAssert<$.Slice<__goscript_attr.Attr>>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.sliceType("slog.Attr")).value
					return GroupValue(v)
				}
				break
			case $.typeAssert<Kind>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("int", "slog.Kind")).ok:
				{
					let v: Kind = $.typeAssert<Kind>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("int", "slog.Kind")).value
					return new Value({_any: $.namedValueInterfaceValue<any>($.int(v), "slog.kind", {}, /* @__PURE__ */ $.basicType("int", "slog.kind"))}, true)
				}
				break
			case $.typeAssert<Value>(__goscriptTypeSwitchValue, "slog.Value").ok:
				{
					let v: Value = $.markAsStructValue($.cloneStructValue($.typeAssert<Value>(__goscriptTypeSwitchValue, "slog.Value").value))
					return (v).clone()
				}
				break
			default:
				{
					let v: any = __goscriptTypeSwitchValue
					return new Value({_any: v}, true)
				}
				break
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export async function stack(skip: number, nFrames: number): globalThis.Promise<string> {
	let pcs: $.Slice<number> = $.makeSlice<number>(nFrames + 1, undefined, "number")
	let n = runtime.Callers(skip + 1, pcs)
	if (n == 0) {
		return "(no stack)"
	}
	let frames: runtime.Frames | $.VarRef<runtime.Frames> | null = runtime.CallersFrames($.goSlice(pcs, undefined, n))
	let b: $.VarRef<strings.Builder> = $.varRef($.markAsStructValue(new strings.Builder()))
	let i = 0
	while (true) {
		let [frame, more] = runtime.Frames.prototype.Next.call($.pointerValue<runtime.Frames>(frames))
		await fmt.Fprintf($.pointerValueOrNil($.interfaceValue<io.Writer | null>(b, "*strings.Builder", /* @__PURE__ */ $.pointerType("strings.Builder")))!, "called from %s (%s:%d)\n", frame.Function, frame.File, $.basicInterfaceValue(frame.Line, "int"))
		if (!more) {
			break
		}
		i++
		if (i >= nFrames) {
			await fmt.Fprintf($.pointerValueOrNil($.interfaceValue<io.Writer | null>(b, "*strings.Builder", /* @__PURE__ */ $.pointerType("strings.Builder")))!, "(rest of stack elided)\n")
			break
		}
	}
	return b.value.String()
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({String: (receiver: any, ...args: any[]) => (Kind_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.basicType("int", "slog.Kind"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])])
}

var __goscriptStatic3$value: any
function __goscriptStatic3(): any {
	return __goscriptStatic3$value ??= ({Abs: (receiver: any, ...args: any[]) => (time2.Duration_Abs as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Hours: (receiver: any, ...args: any[]) => (time2.Duration_Hours as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Microseconds: (receiver: any, ...args: any[]) => (time2.Duration_Microseconds as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Milliseconds: (receiver: any, ...args: any[]) => (time2.Duration_Milliseconds as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Minutes: (receiver: any, ...args: any[]) => (time2.Duration_Minutes as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Nanoseconds: (receiver: any, ...args: any[]) => (time2.Duration_Nanoseconds as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Round: (receiver: any, ...args: any[]) => (time2.Duration_Round as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Seconds: (receiver: any, ...args: any[]) => (time2.Duration_Seconds as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (time2.Duration_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Truncate: (receiver: any, ...args: any[]) => (time2.Duration_Truncate as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), format: (receiver: any, ...args: any[]) => (time2.Duration_format as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic4$value: any
function __goscriptStatic4(): any {
	return __goscriptStatic4$value ??= (/* @__PURE__ */ $.basicType("int64", "time.Duration"))
}

var __goscriptStatic5$value: any
function __goscriptStatic5(): any {
	return __goscriptStatic5$value ??= ([$.methodSignature("Abs", [], [/* @__PURE__ */ $.basicType("int64", "time.Duration")]), $.methodSignature("Hours", [], [/* @__PURE__ */ $.basicType("float64")]), $.methodSignature("Microseconds", [], [/* @__PURE__ */ $.basicType("int64")]), $.methodSignature("Milliseconds", [], [/* @__PURE__ */ $.basicType("int64")]), $.methodSignature("Minutes", [], [/* @__PURE__ */ $.basicType("float64")]), $.methodSignature("Nanoseconds", [], [/* @__PURE__ */ $.basicType("int64")]), $.methodSignature("Round", [["m", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], [/* @__PURE__ */ $.basicType("int64", "time.Duration")]), $.methodSignature("Seconds", [], [/* @__PURE__ */ $.basicType("float64")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Truncate", [["m", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], [/* @__PURE__ */ $.basicType("int64", "time.Duration")]), $.methodSignature("format", [["buf", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 32))]], [/* @__PURE__ */ $.basicType("int")])])
}

var __goscriptAwait: any
