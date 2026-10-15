// Generated file based on parser.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as math from "@goscript/math/index.js"

import * as strconv from "@goscript/strconv/index.js"

import * as strings from "@goscript/strings/index.js"

import * as time from "@goscript/time/index.js"

import * as __goscript_constantdelay from "./constantdelay.gs.ts"

import * as __goscript_cron from "./cron.gs.ts"

import * as __goscript_spec from "./spec.gs.ts"
import "@goscript/fmt/index.js"
import "@goscript/math/index.js"
import "@goscript/strconv/index.js"
import "@goscript/strings/index.js"
import "@goscript/time/index.js"
import "./constantdelay.gs.ts"
import "./cron.gs.ts"
import "./spec.gs.ts"

$.registerTypePackagePath("github.com/robfig/cron", ["cron.ParseOption", "cron.Parser"])

export type ParseOption = number

export class Parser {
	public get options(): ParseOption {
		return this._fields.options
	}

	public set options(value: ParseOption) {
		this._fields.options = value
	}

	public get optionals(): number {
		return this._fields.optionals
	}

	public set optionals(value: number) {
		this._fields.optionals = value
	}

	public _fields: {
		options: ParseOption
		optionals: number
	}

	constructor(init?: Partial<{options?: ParseOption, optionals?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			options: init?.options ?? (0 as ParseOption),
			optionals: init?.optionals ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Parser {
		return new Parser(this, true)
	}

	public __goscriptAssign(source: Parser): void {
		const target = this._fields
		const values = source._fields
		target.options = values.options
		target.optionals = values.optionals
	}

	public async Parse(spec: string): globalThis.Promise<[__goscript_cron.Schedule | null, $.GoError]> {
		const p = this;
		if ($.stringLen(spec) == 0) {
			return [null, fmt.Errorf("Empty spec string")]
		}
		if (($.indexString(spec, 0) == 64) && ((p.options & 128) > 0)) {
			return parseDescriptor(spec)
		}

		// Figure out how many fields we need
		let max = 0
		for (let __goscriptRangeTarget0 = places, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
			let place = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as ParseOption)
			if ((p.options & place) > 0) {
				max++
			}
		}
		let min = max - p.optionals

		// Split fields on whitespace
		let fields: $.Slice<string> = strings.Fields(spec)

		// Validate number of fields
		{
			let count = $.sliceLen(fields)
			if ((count < min) || (count > max)) {
				if (min == max) {
					return [null, fmt.Errorf("Expected exactly %d fields, found %d: %s", $.basicInterfaceValue(min, "int"), $.basicInterfaceValue(count, "int"), spec)]
				}
				return [null, fmt.Errorf("Expected %d to %d fields, found %d: %s", $.basicInterfaceValue(min, "int"), $.basicInterfaceValue(max, "int"), $.basicInterfaceValue(count, "int"), spec)]
			}
		}

		// Fill in missing fields
		fields = expandFields(fields, p.options)

		let err: $.GoError = null! as $.GoError
		let field: ((field: string, r: __goscript_spec.bounds) => bigint | globalThis.Promise<bigint>) | null = $.functionValue((field: string, r: __goscript_spec.bounds): bigint => {
			if (err != null) {
				return 0n
			}
			let bits: bigint = 0n
			let __goscriptTuple0: any = getField(field, r)
			bits = __goscriptTuple0[0]
			err = __goscriptTuple0[1]
			return bits
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("string"), "cron.bounds"], results: [/* @__PURE__ */ $.basicType("uint64")] } as $.FunctionTypeInfo))

		let second: bigint = (__goscriptAwait = field!($.arrayIndex(fields!, 0), (__goscript_spec.seconds).clone()), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		let minute: bigint = (__goscriptAwait = field!($.arrayIndex(fields!, 1), (__goscript_spec.minutes).clone()), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		let hour: bigint = (__goscriptAwait = field!($.arrayIndex(fields!, 2), (__goscript_spec.hours).clone()), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		let dayofmonth: bigint = (__goscriptAwait = field!($.arrayIndex(fields!, 3), (__goscript_spec.dom).clone()), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		let month: bigint = (__goscriptAwait = field!($.arrayIndex(fields!, 4), (__goscript_spec.months).clone()), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		let dayofweek: bigint = (__goscriptAwait = field!($.arrayIndex(fields!, 5), (__goscript_spec.dow).clone()), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		if (err != null) {
			return [null, err]
		}

		return [$.interfaceValue<__goscript_cron.Schedule | null>(new __goscript_spec.SpecSchedule({Second: second, Minute: minute, Hour: hour, Dom: dayofmonth, Month: month, Dow: dayofweek}), "*cron.SpecSchedule", /* @__PURE__ */ $.pointerType("cron.SpecSchedule")), null]
	}

	static __typeInfo = $.registerStructType(
		"cron.Parser",
		() => new Parser(),
		() => [$.methodSignature("Parse", [["spec", /* @__PURE__ */ $.basicType("string")]], ["cron.Schedule", "error"])],
		Parser,
		() => [/* @__PURE__ */ $.structField("options", /* @__PURE__ */ $.basicType("int", "cron.ParseOption"), [0], 0, false, { pkgPath: "github.com/robfig/cron" }), /* @__PURE__ */ $.structField("optionals", /* @__PURE__ */ $.basicType("int"), [1], 8, false, { pkgPath: "github.com/robfig/cron" })]
	)
}

export const Second: ParseOption = 1

export const Minute: ParseOption = 2

export const Hour: ParseOption = 4

export const Dom: ParseOption = 8

export const Month: ParseOption = 16

export const Dow: ParseOption = 32

export const DowOptional: ParseOption = 64

export const Descriptor: ParseOption = 128

export let places: $.Slice<ParseOption> = $.arrayToSlice<ParseOption>([1, 2, 4, 8, 16, 32])

export function __goscript_set_places(__goscriptValue: $.Slice<ParseOption>): void {
	places = __goscriptValue
}

export let defaults: $.Slice<string> = $.arrayToSlice<string>(["0", "0", "0", "*", "*", "*"])

export function __goscript_set_defaults(__goscriptValue: $.Slice<string>): void {
	defaults = __goscriptValue
}

export function NewParser(options: ParseOption): Parser {
	let optionals = 0
	if ((options & 64) > 0) {
		options = options | (32)
		optionals++
	}
	return new Parser({options: options, optionals: optionals}, true)
}

export function expandFields(fields: $.Slice<string>, options: ParseOption): $.Slice<string> {
	let n = 0
	let count = $.sliceLen(fields)
	let expFields: $.Slice<string> = $.makeSlice<string>($.sliceLen(places), undefined, "string")
	$.copy(expFields, defaults)
	for (let __goscriptRangeTarget1 = places, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __goscriptSliceWindow0 = $.sliceRange(expFields), __goscriptSliceWindow1 = $.sliceRange(fields), i = 0; i < __goscriptRangeWindow1.length; i++) {
		let place = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + i] as ParseOption)
		if ((options & place) > 0) {
			;(__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)] = ((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, n)] as string)
			n++
		}
		if (n == count) {
			break
		}
	}
	return expFields
}

export let standardParser: Parser = NewParser(190)

export function __goscript_set_standardParser(__goscriptValue: Parser): void {
	$.assignStruct(standardParser, __goscriptValue)
}

export async function ParseStandard(standardSpec: string): globalThis.Promise<[__goscript_cron.Schedule | null, $.GoError]> {
	return $.markAsStructValue($.cloneStructValue(standardParser)).Parse(standardSpec)
}

export let defaultParser: Parser = NewParser(223)

export function __goscript_set_defaultParser(__goscriptValue: Parser): void {
	$.assignStruct(defaultParser, __goscriptValue)
}

export async function Parse(spec: string): globalThis.Promise<[__goscript_cron.Schedule | null, $.GoError]> {
	return $.markAsStructValue($.cloneStructValue(defaultParser)).Parse(spec)
}

export function getField(field: string, r: __goscript_spec.bounds): [bigint, $.GoError] {
	let bits: bigint = 0n
	let ranges: $.Slice<string> = strings.FieldsFunc(field, $.functionValue((r: number): boolean => {
		return r == 44
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int32")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)))
	for (let __goscriptRangeTarget2 = ranges, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow2.length; __rangeIndex++) {
		let expr = (__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + __rangeIndex] as string)
		let [bit, err] = getRange(expr, r)
		if (err != null) {
			return [bits, err]
		}
		bits = $.uint64Or(bits, bit)
	}
	return [bits, null]
}

export function getRange(expr: string, r: __goscript_spec.bounds): [bigint, $.GoError] {
	let start: number = 0
	let end: number = 0
	let step: number = 0
	let rangeAndStep: $.Slice<string> = strings.Split(expr, "/")
	let lowAndHigh: $.Slice<string> = strings.Split($.arrayIndex(rangeAndStep!, 0), "-")
	let singleDigit: boolean = $.sliceLen(lowAndHigh) == 1
	let err: $.GoError = null! as $.GoError

	let extra: bigint = 0n
	if (($.stringEqual($.arrayIndex(lowAndHigh!, 0), "*")) || ($.stringEqual($.arrayIndex(lowAndHigh!, 0), "?"))) {
		start = r.min
		end = r.max
		extra = 9223372036854775808n
	} else {
		let __goscriptTuple1: any = parseIntOrName($.arrayIndex(lowAndHigh!, 0), r.names)
		start = __goscriptTuple1[0]
		err = __goscriptTuple1[1]
		if (err != null) {
			return [0n, err]
		}
		switch ($.sliceLen(lowAndHigh)) {
			case 1:
			{
				end = start
				break
			}
			case 2:
			{
				let __goscriptTuple2: any = parseIntOrName($.arrayIndex(lowAndHigh!, 1), r.names)
				end = __goscriptTuple2[0]
				err = __goscriptTuple2[1]
				if (err != null) {
					return [0n, err]
				}
				break
			}
			default:
			{
				return [0n, fmt.Errorf("Too many hyphens: %s", expr)]
				break
			}
		}
	}

	switch ($.sliceLen(rangeAndStep)) {
		case 1:
		{
			step = 1
			break
		}
		case 2:
		{
			let __goscriptTuple3: any = mustParseInt($.arrayIndex(rangeAndStep!, 1))
			step = __goscriptTuple3[0]
			err = __goscriptTuple3[1]
			if (err != null) {
				return [0n, err]
			}

			// Special handling: "N/step" means "N-max/step".
			if (singleDigit) {
				end = r.max
			}
			break
		}
		default:
		{
			return [0n, fmt.Errorf("Too many slashes: %s", expr)]
			break
		}
	}

	if (start < r.min) {
		return [0n, fmt.Errorf("Beginning of range (%d) below minimum (%d): %s", $.basicInterfaceValue(start, "uint"), $.basicInterfaceValue(r.min, "uint"), expr)]
	}
	if (end > r.max) {
		return [0n, fmt.Errorf("End of range (%d) above maximum (%d): %s", $.basicInterfaceValue(end, "uint"), $.basicInterfaceValue(r.max, "uint"), expr)]
	}
	if (start > end) {
		return [0n, fmt.Errorf("Beginning of range (%d) beyond end of range (%d): %s", $.basicInterfaceValue(start, "uint"), $.basicInterfaceValue(end, "uint"), expr)]
	}
	if (step == 0) {
		return [0n, fmt.Errorf("Step of range should be a positive number: %s", expr)]
	}

	return [$.uint64Or(getBits(start, end, step), extra), null]
}

export function parseIntOrName(expr: string, names: globalThis.Map<string, number> | null): [number, $.GoError] {
	if (names != null) {
		{
			let [namedInt, ok] = $.mapGet<string, number, number>(names, strings.ToLower(expr), 0)
			if (ok) {
				return [namedInt, null]
			}
		}
	}
	return mustParseInt(expr)
}

export function mustParseInt(expr: string): [number, $.GoError] {
	let [num, err] = strconv.Atoi(expr)
	if (err != null) {
		return [0, fmt.Errorf("Failed to parse int from %s: %s", expr, (err as any))]
	}
	if (num < 0) {
		return [0, fmt.Errorf("Negative number (%d) not allowed: %s", $.basicInterfaceValue(num, "int"), expr)]
	}

	return [$.uint(num, 64), null]
}

export function getBits(min: number, max: number, step: number): bigint {
	let bits: bigint = 0n

	// If step is 1, use shifts.
	if (step == 1) {
		return $.uint64And($.uint64Xor(($.uint64Shl(18446744073709551615n, ($.uint($.uint64Add(max, 1n), 64)))), -1n), ($.uint64Shl(18446744073709551615n, min)))
	}

	// Else, use a simple loop.
	for (let i = min; i <= max; i = $.uint($.uint64Add(i, step), 64)) {
		bits = $.uint64Or(bits, $.uint64Shl(1n, i))
	}
	return bits
}

export function all(r: __goscript_spec.bounds): bigint {
	return $.uint64Or(getBits(r.min, r.max, 1), 9223372036854775808n)
}

export function parseDescriptor(descriptor: string): [__goscript_cron.Schedule | null, $.GoError] {
	switch (descriptor) {
		case "@yearly":
		case "@annually":
		{
			return [$.interfaceValue<__goscript_cron.Schedule | null>((() => { const __goscriptLiteralField0 = all(__goscript_spec.dow); return new __goscript_spec.SpecSchedule({Second: $.uint64Shl(1n, __goscript_spec.seconds.min), Minute: $.uint64Shl(1n, __goscript_spec.minutes.min), Hour: $.uint64Shl(1n, __goscript_spec.hours.min), Dom: $.uint64Shl(1n, __goscript_spec.dom.min), Month: $.uint64Shl(1n, __goscript_spec.months.min), Dow: __goscriptLiteralField0}) })(), "*cron.SpecSchedule", /* @__PURE__ */ $.pointerType("cron.SpecSchedule")), null]
			break
		}
		case "@monthly":
		{
			return [$.interfaceValue<__goscript_cron.Schedule | null>((() => { const __goscriptLiteralField1 = all(__goscript_spec.months); const __goscriptLiteralField2 = all(__goscript_spec.dow); return new __goscript_spec.SpecSchedule({Second: $.uint64Shl(1n, __goscript_spec.seconds.min), Minute: $.uint64Shl(1n, __goscript_spec.minutes.min), Hour: $.uint64Shl(1n, __goscript_spec.hours.min), Dom: $.uint64Shl(1n, __goscript_spec.dom.min), Month: __goscriptLiteralField1, Dow: __goscriptLiteralField2}) })(), "*cron.SpecSchedule", /* @__PURE__ */ $.pointerType("cron.SpecSchedule")), null]
			break
		}
		case "@weekly":
		{
			return [$.interfaceValue<__goscript_cron.Schedule | null>((() => { const __goscriptLiteralField3 = all(__goscript_spec.dom); const __goscriptLiteralField4 = all(__goscript_spec.months); return new __goscript_spec.SpecSchedule({Second: $.uint64Shl(1n, __goscript_spec.seconds.min), Minute: $.uint64Shl(1n, __goscript_spec.minutes.min), Hour: $.uint64Shl(1n, __goscript_spec.hours.min), Dom: __goscriptLiteralField3, Month: __goscriptLiteralField4, Dow: $.uint64Shl(1n, __goscript_spec.dow.min)}) })(), "*cron.SpecSchedule", /* @__PURE__ */ $.pointerType("cron.SpecSchedule")), null]
			break
		}
		case "@daily":
		case "@midnight":
		{
			return [$.interfaceValue<__goscript_cron.Schedule | null>((() => { const __goscriptLiteralField5 = all(__goscript_spec.dom); const __goscriptLiteralField6 = all(__goscript_spec.months); const __goscriptLiteralField7 = all(__goscript_spec.dow); return new __goscript_spec.SpecSchedule({Second: $.uint64Shl(1n, __goscript_spec.seconds.min), Minute: $.uint64Shl(1n, __goscript_spec.minutes.min), Hour: $.uint64Shl(1n, __goscript_spec.hours.min), Dom: __goscriptLiteralField5, Month: __goscriptLiteralField6, Dow: __goscriptLiteralField7}) })(), "*cron.SpecSchedule", /* @__PURE__ */ $.pointerType("cron.SpecSchedule")), null]
			break
		}
		case "@hourly":
		{
			return [$.interfaceValue<__goscript_cron.Schedule | null>((() => { const __goscriptLiteralField8 = all(__goscript_spec.hours); const __goscriptLiteralField9 = all(__goscript_spec.dom); const __goscriptLiteralField10 = all(__goscript_spec.months); const __goscriptLiteralField11 = all(__goscript_spec.dow); return new __goscript_spec.SpecSchedule({Second: $.uint64Shl(1n, __goscript_spec.seconds.min), Minute: $.uint64Shl(1n, __goscript_spec.minutes.min), Hour: __goscriptLiteralField8, Dom: __goscriptLiteralField9, Month: __goscriptLiteralField10, Dow: __goscriptLiteralField11}) })(), "*cron.SpecSchedule", /* @__PURE__ */ $.pointerType("cron.SpecSchedule")), null]
			break
		}
	}

	const every: string = "@every "
	if (strings.HasPrefix(descriptor, "@every ")) {
		let [duration, err] = time.ParseDuration($.sliceStringOrBytes(descriptor, 7, undefined))
		if (err != null) {
			return [null, fmt.Errorf("Failed to parse duration %s: %s", descriptor, (err as any))]
		}
		return [$.interfaceValue<__goscript_cron.Schedule | null>(__goscript_constantdelay.Every(duration), "cron.ConstantDelaySchedule", "cron.ConstantDelaySchedule"), null]
	}

	return [null, fmt.Errorf("Unrecognized descriptor: %s", descriptor)]
}

var __goscriptAwait: any
