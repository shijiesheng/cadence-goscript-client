// Generated file based on common.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as io from "@goscript/io/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as sort from "@goscript/sort/index.js"

import * as strconv from "@goscript/strconv/index.js"

import * as __goscript_bypasssafe from "./bypasssafe.gs.ts"

import * as __goscript_config from "./config.gs.ts"

import * as __goscript_spew from "./spew.gs.ts"
import "@goscript/bytes/index.js"
import "@goscript/fmt/index.js"
import "@goscript/io/index.js"
import "@goscript/reflect/index.js"
import "@goscript/sort/index.js"
import "@goscript/strconv/index.js"
import "./bypasssafe.gs.ts"
import "./config.gs.ts"
import "./spew.gs.ts"

$.registerTypePackagePath("github.com/davecgh/go-spew/spew", ["spew.valuesSorter"])

export class valuesSorter {
	public get values(): $.Slice<reflect.Value> {
		return this._fields.values
	}

	public set values(value: $.Slice<reflect.Value>) {
		this._fields.values = value
	}

	public get strings(): $.Slice<string> {
		return this._fields.strings
	}

	public set strings(value: $.Slice<string>) {
		this._fields.strings = value
	}

	public get cs(): __goscript_config.ConfigState | $.VarRef<__goscript_config.ConfigState> | null {
		return this._fields.cs
	}

	public set cs(value: __goscript_config.ConfigState | $.VarRef<__goscript_config.ConfigState> | null) {
		this._fields.cs = value
	}

	public _fields: {
		values: $.Slice<reflect.Value>
		strings: $.Slice<string>
		cs: __goscript_config.ConfigState | $.VarRef<__goscript_config.ConfigState> | null
	}

	constructor(init?: Partial<{values?: $.Slice<reflect.Value>, strings?: $.Slice<string>, cs?: __goscript_config.ConfigState | $.VarRef<__goscript_config.ConfigState> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			values: init?.values ?? (null! as $.Slice<reflect.Value>),
			strings: init?.strings ?? (null! as $.Slice<string>),
			cs: init?.cs ?? (null! as __goscript_config.ConfigState | $.VarRef<__goscript_config.ConfigState> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): valuesSorter {
		return new valuesSorter(this, true)
	}

	public __goscriptAssign(source: valuesSorter): void {
		const target = this._fields
		const values = source._fields
		target.values = values.values
		target.strings = values.strings
		target.cs = values.cs
	}

	public Len(): number {
		const s: valuesSorter | $.VarRef<valuesSorter> | null = this;
		return $.sliceLen($.pointerValue<valuesSorter>(s).values)
	}

	public Less(i: number, j: number): boolean {
		const s: valuesSorter | $.VarRef<valuesSorter> | null = this;
		const s$: valuesSorter = s == null ? $.pointerTarget<valuesSorter>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<valuesSorter>(s)
		if ((s$ as valuesSorter).strings == null) {
			return valueSortLess($.markAsStructValue($.cloneStructValue($.arrayIndex((s$ as valuesSorter).values!, i))), $.markAsStructValue($.cloneStructValue($.arrayIndex((s$ as valuesSorter).values!, j))))
		}
		return $.stringCompare($.arrayIndex((s$ as valuesSorter).strings!, i), $.arrayIndex((s$ as valuesSorter).strings!, j)) < 0
	}

	public Swap(i: number, j: number): void {
		let s: valuesSorter | $.VarRef<valuesSorter> | null = this;
		const s$: valuesSorter = s == null ? $.pointerTarget<valuesSorter>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<valuesSorter>(s)
		let __goscriptAssign0_0: reflect.Value = $.markAsStructValue($.cloneStructValue($.arrayIndex((s$ as valuesSorter).values!, j)))
		let __goscriptAssign0_1: reflect.Value = $.markAsStructValue($.cloneStructValue($.arrayIndex((s$ as valuesSorter).values!, i)))
		$.assignStruct($.sliceElems((s$ as valuesSorter).values!)[$.sliceSlot((s$ as valuesSorter).values!, i)], __goscriptAssign0_0)
		$.assignStruct($.sliceElems((s$ as valuesSorter).values!)[$.sliceSlot((s$ as valuesSorter).values!, j)], __goscriptAssign0_1)
		if ((s$ as valuesSorter).strings != null) {
			let __goscriptAssign1_0: string = $.arrayIndex((s$ as valuesSorter).strings!, j)
			let __goscriptAssign1_1: string = $.arrayIndex((s$ as valuesSorter).strings!, i)
			$.sliceElems((s$ as valuesSorter).strings!)[$.sliceSlot((s$ as valuesSorter).strings!, i)] = __goscriptAssign1_0
			$.sliceElems((s$ as valuesSorter).strings!)[$.sliceSlot((s$ as valuesSorter).strings!, j)] = __goscriptAssign1_1
		}
	}

	static __typeInfo = $.registerStructType(
		"spew.valuesSorter",
		() => new valuesSorter(),
		() => [$.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("Less", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Swap", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]], [], true)],
		valuesSorter,
		() => [/* @__PURE__ */ $.structField("values", /* @__PURE__ */ $.sliceType("reflect.Value"), [0], 0, false, { pkgPath: "github.com/davecgh/go-spew/spew" }), /* @__PURE__ */ $.structField("strings", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")), [1], 24, false, { pkgPath: "github.com/davecgh/go-spew/spew" }), /* @__PURE__ */ $.structField("cs", /* @__PURE__ */ $.pointerType("spew.ConfigState"), [2], 48, false, { pkgPath: "github.com/davecgh/go-spew/spew" })]
	)
}

export let panicBytes: $.Slice<number> = new Uint8Array([40, 80, 65, 78, 73, 67, 61])

export function __goscript_set_panicBytes(__goscriptValue: $.Slice<number>): void {
	panicBytes = __goscriptValue
}

export let plusBytes: $.Slice<number> = new Uint8Array([43])

export function __goscript_set_plusBytes(__goscriptValue: $.Slice<number>): void {
	plusBytes = __goscriptValue
}

export let iBytes: $.Slice<number> = new Uint8Array([105])

export function __goscript_set_iBytes(__goscriptValue: $.Slice<number>): void {
	iBytes = __goscriptValue
}

export let trueBytes: $.Slice<number> = new Uint8Array([116, 114, 117, 101])

export function __goscript_set_trueBytes(__goscriptValue: $.Slice<number>): void {
	trueBytes = __goscriptValue
}

export let falseBytes: $.Slice<number> = new Uint8Array([102, 97, 108, 115, 101])

export function __goscript_set_falseBytes(__goscriptValue: $.Slice<number>): void {
	falseBytes = __goscriptValue
}

export let interfaceBytes: $.Slice<number> = new Uint8Array([40, 105, 110, 116, 101, 114, 102, 97, 99, 101, 32, 123, 125, 41])

export function __goscript_set_interfaceBytes(__goscriptValue: $.Slice<number>): void {
	interfaceBytes = __goscriptValue
}

export let commaNewlineBytes: $.Slice<number> = new Uint8Array([44, 10])

export function __goscript_set_commaNewlineBytes(__goscriptValue: $.Slice<number>): void {
	commaNewlineBytes = __goscriptValue
}

export let newlineBytes: $.Slice<number> = new Uint8Array([10])

export function __goscript_set_newlineBytes(__goscriptValue: $.Slice<number>): void {
	newlineBytes = __goscriptValue
}

export let openBraceBytes: $.Slice<number> = new Uint8Array([123])

export function __goscript_set_openBraceBytes(__goscriptValue: $.Slice<number>): void {
	openBraceBytes = __goscriptValue
}

export let openBraceNewlineBytes: $.Slice<number> = new Uint8Array([123, 10])

export function __goscript_set_openBraceNewlineBytes(__goscriptValue: $.Slice<number>): void {
	openBraceNewlineBytes = __goscriptValue
}

export let closeBraceBytes: $.Slice<number> = new Uint8Array([125])

export function __goscript_set_closeBraceBytes(__goscriptValue: $.Slice<number>): void {
	closeBraceBytes = __goscriptValue
}

export let asteriskBytes: $.Slice<number> = new Uint8Array([42])

export function __goscript_set_asteriskBytes(__goscriptValue: $.Slice<number>): void {
	asteriskBytes = __goscriptValue
}

export let colonBytes: $.Slice<number> = new Uint8Array([58])

export function __goscript_set_colonBytes(__goscriptValue: $.Slice<number>): void {
	colonBytes = __goscriptValue
}

export let colonSpaceBytes: $.Slice<number> = new Uint8Array([58, 32])

export function __goscript_set_colonSpaceBytes(__goscriptValue: $.Slice<number>): void {
	colonSpaceBytes = __goscriptValue
}

export let openParenBytes: $.Slice<number> = new Uint8Array([40])

export function __goscript_set_openParenBytes(__goscriptValue: $.Slice<number>): void {
	openParenBytes = __goscriptValue
}

export let closeParenBytes: $.Slice<number> = new Uint8Array([41])

export function __goscript_set_closeParenBytes(__goscriptValue: $.Slice<number>): void {
	closeParenBytes = __goscriptValue
}

export let spaceBytes: $.Slice<number> = new Uint8Array([32])

export function __goscript_set_spaceBytes(__goscriptValue: $.Slice<number>): void {
	spaceBytes = __goscriptValue
}

export let pointerChainBytes: $.Slice<number> = new Uint8Array([45, 62])

export function __goscript_set_pointerChainBytes(__goscriptValue: $.Slice<number>): void {
	pointerChainBytes = __goscriptValue
}

export let nilAngleBytes: $.Slice<number> = new Uint8Array([60, 110, 105, 108, 62])

export function __goscript_set_nilAngleBytes(__goscriptValue: $.Slice<number>): void {
	nilAngleBytes = __goscriptValue
}

export let maxNewlineBytes: $.Slice<number> = new Uint8Array([60, 109, 97, 120, 32, 100, 101, 112, 116, 104, 32, 114, 101, 97, 99, 104, 101, 100, 62, 10])

export function __goscript_set_maxNewlineBytes(__goscriptValue: $.Slice<number>): void {
	maxNewlineBytes = __goscriptValue
}

export let maxShortBytes: $.Slice<number> = new Uint8Array([60, 109, 97, 120, 62])

export function __goscript_set_maxShortBytes(__goscriptValue: $.Slice<number>): void {
	maxShortBytes = __goscriptValue
}

export let circularBytes: $.Slice<number> = new Uint8Array([60, 97, 108, 114, 101, 97, 100, 121, 32, 115, 104, 111, 119, 110, 62])

export function __goscript_set_circularBytes(__goscriptValue: $.Slice<number>): void {
	circularBytes = __goscriptValue
}

export let circularShortBytes: $.Slice<number> = new Uint8Array([60, 115, 104, 111, 119, 110, 62])

export function __goscript_set_circularShortBytes(__goscriptValue: $.Slice<number>): void {
	circularShortBytes = __goscriptValue
}

export let invalidAngleBytes: $.Slice<number> = new Uint8Array([60, 105, 110, 118, 97, 108, 105, 100, 62])

export function __goscript_set_invalidAngleBytes(__goscriptValue: $.Slice<number>): void {
	invalidAngleBytes = __goscriptValue
}

export let openBracketBytes: $.Slice<number> = new Uint8Array([91])

export function __goscript_set_openBracketBytes(__goscriptValue: $.Slice<number>): void {
	openBracketBytes = __goscriptValue
}

export let closeBracketBytes: $.Slice<number> = new Uint8Array([93])

export function __goscript_set_closeBracketBytes(__goscriptValue: $.Slice<number>): void {
	closeBracketBytes = __goscriptValue
}

export let percentBytes: $.Slice<number> = new Uint8Array([37])

export function __goscript_set_percentBytes(__goscriptValue: $.Slice<number>): void {
	percentBytes = __goscriptValue
}

export let precisionBytes: $.Slice<number> = new Uint8Array([46])

export function __goscript_set_precisionBytes(__goscriptValue: $.Slice<number>): void {
	precisionBytes = __goscriptValue
}

export let openAngleBytes: $.Slice<number> = new Uint8Array([60])

export function __goscript_set_openAngleBytes(__goscriptValue: $.Slice<number>): void {
	openAngleBytes = __goscriptValue
}

export let closeAngleBytes: $.Slice<number> = new Uint8Array([62])

export function __goscript_set_closeAngleBytes(__goscriptValue: $.Slice<number>): void {
	closeAngleBytes = __goscriptValue
}

export let openMapBytes: $.Slice<number> = new Uint8Array([109, 97, 112, 91])

export function __goscript_set_openMapBytes(__goscriptValue: $.Slice<number>): void {
	openMapBytes = __goscriptValue
}

export let closeMapBytes: $.Slice<number> = new Uint8Array([93])

export function __goscript_set_closeMapBytes(__goscriptValue: $.Slice<number>): void {
	closeMapBytes = __goscriptValue
}

export let lenEqualsBytes: $.Slice<number> = new Uint8Array([108, 101, 110, 61])

export function __goscript_set_lenEqualsBytes(__goscriptValue: $.Slice<number>): void {
	lenEqualsBytes = __goscriptValue
}

export let capEqualsBytes: $.Slice<number> = new Uint8Array([99, 97, 112, 61])

export function __goscript_set_capEqualsBytes(__goscriptValue: $.Slice<number>): void {
	capEqualsBytes = __goscriptValue
}

export let hexDigits: string = "0123456789abcdef"

export function __goscript_set_hexDigits(__goscriptValue: string): void {
	hexDigits = __goscriptValue
}

export async function catchPanic(w: io.Writer | null, v: reflect.Value): globalThis.Promise<void> {
	{
		let err = $.recover()
		if (err != null) {
			await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? (w as Exclude<io.Writer, null>) : $.pointerValue<Exclude<io.Writer, null>>(w)).Write(panicBytes)
			await fmt.Fprintf($.pointerValueOrNil(w)!, "%v", err)
			await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? (w as Exclude<io.Writer, null>) : $.pointerValue<Exclude<io.Writer, null>>(w)).Write(closeParenBytes)
		}
	}
}

export async function handleMethods(cs: __goscript_config.ConfigState | $.VarRef<__goscript_config.ConfigState> | null, w: io.Writer | null, v: reflect.Value): globalThis.Promise<boolean> {
	let handled: boolean = false
	const __defer = new $.AsyncDisposableStack()
	try {
		const cs$: __goscript_config.ConfigState = cs == null ? $.pointerTarget<__goscript_config.ConfigState>(cs) : (cs as any).__isVarRef === true ? (cs as any).value : (cs as any).__goValue === undefined ? (cs as any) : $.pointerTarget<__goscript_config.ConfigState>(cs)
		// We need an interface to check if the type implements the error or
		// Stringer interface.  However, the reflect package won't give us an
		// interface on certain things like unexported struct fields in order
		// to enforce visibility rules.  We use unsafe, when it's available,
		// to bypass these restrictions since this package does not mutate the
		// values.
		if (!$.markAsStructValue($.cloneStructValue(v)).CanInterface()) {
			if (true) {
				return false
			}

			v = $.assignStruct(v, __goscript_bypasssafe.unsafeReflectValue(v))
		}

		// Choose whether or not to do error and Stringer interface lookups against
		// the base type or a pointer to the base type depending on settings.
		// Technically calling one of these methods with a pointer receiver can
		// mutate the value, however, types which choose to satisify an error or
		// Stringer interface with a pointer receiver should not be mutating their
		// state inside these interface methods.
		if ((!(cs$ as __goscript_config.ConfigState).DisablePointerMethods && !true) && !$.markAsStructValue($.cloneStructValue(v)).CanAddr()) {
			v = $.assignStruct(v, __goscript_bypasssafe.unsafeReflectValue(v))
		}
		if ($.markAsStructValue($.cloneStructValue(v)).CanAddr()) {
			v = $.assignStruct(v, $.markAsStructValue($.cloneStructValue(v)).Addr())
		}

		// Is it an error or Stringer?
		{
			const __goscriptTypeSwitchValue = $.markAsStructValue($.cloneStructValue(v)).Interface()
			switch (true) {
				case $.typeAssert<$.GoError>(__goscriptTypeSwitchValue, "error").ok:
					{
						let iface: $.GoError = $.typeAssert<$.GoError>(__goscriptTypeSwitchValue, "error").value
						const __goscriptDeferArg0 = w
						const __goscriptDeferArg1 = $.markAsStructValue($.cloneStructValue(v))
						__defer.defer(async () => { await catchPanic(__goscriptDeferArg0, __goscriptDeferArg1) })
						if ((cs$ as __goscript_config.ConfigState).ContinueOnMethod) {
							await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? (w as Exclude<io.Writer, null>) : $.pointerValue<Exclude<io.Writer, null>>(w)).Write(openParenBytes)
							await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? (w as Exclude<io.Writer, null>) : $.pointerValue<Exclude<io.Writer, null>>(w)).Write($.stringToBytes((__goscriptAwait = (iface !== null && (iface as any).__isVarRef !== true && (iface as any).__goValue === undefined ? (iface as Exclude<$.GoError, null>) : $.pointerValue<Exclude<$.GoError, null>>(iface)).Error(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)))
							await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? (w as Exclude<io.Writer, null>) : $.pointerValue<Exclude<io.Writer, null>>(w)).Write(closeParenBytes)
							await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? (w as Exclude<io.Writer, null>) : $.pointerValue<Exclude<io.Writer, null>>(w)).Write(spaceBytes)
							const __goscriptReturn0: boolean = false
							handled = __goscriptReturn0
							await __defer.dispose()
							return handled
						}

						await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? (w as Exclude<io.Writer, null>) : $.pointerValue<Exclude<io.Writer, null>>(w)).Write($.stringToBytes((__goscriptAwait = (iface !== null && (iface as any).__isVarRef !== true && (iface as any).__goValue === undefined ? (iface as Exclude<$.GoError, null>) : $.pointerValue<Exclude<$.GoError, null>>(iface)).Error(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)))
						const __goscriptReturn1: boolean = true
						handled = __goscriptReturn1
						await __defer.dispose()
						return handled
					}
					break
				case $.typeAssert<fmt.Stringer | null>(__goscriptTypeSwitchValue, "fmt.Stringer").ok:
					{
						let iface: fmt.Stringer | null = $.typeAssert<fmt.Stringer | null>(__goscriptTypeSwitchValue, "fmt.Stringer").value
						const __goscriptDeferArg2 = w
						const __goscriptDeferArg3 = $.markAsStructValue($.cloneStructValue(v))
						__defer.defer(async () => { await catchPanic(__goscriptDeferArg2, __goscriptDeferArg3) })
						if ((cs$ as __goscript_config.ConfigState).ContinueOnMethod) {
							await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? (w as Exclude<io.Writer, null>) : $.pointerValue<Exclude<io.Writer, null>>(w)).Write(openParenBytes)
							await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? (w as Exclude<io.Writer, null>) : $.pointerValue<Exclude<io.Writer, null>>(w)).Write($.stringToBytes((__goscriptAwait = (iface !== null && (iface as any).__isVarRef !== true && (iface as any).__goValue === undefined ? (iface as Exclude<fmt.Stringer, null>) : $.pointerValue<Exclude<fmt.Stringer, null>>(iface)).String(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)))
							await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? (w as Exclude<io.Writer, null>) : $.pointerValue<Exclude<io.Writer, null>>(w)).Write(closeParenBytes)
							await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? (w as Exclude<io.Writer, null>) : $.pointerValue<Exclude<io.Writer, null>>(w)).Write(spaceBytes)
							const __goscriptReturn2: boolean = false
							handled = __goscriptReturn2
							await __defer.dispose()
							return handled
						}
						await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? (w as Exclude<io.Writer, null>) : $.pointerValue<Exclude<io.Writer, null>>(w)).Write($.stringToBytes((__goscriptAwait = (iface !== null && (iface as any).__isVarRef !== true && (iface as any).__goValue === undefined ? (iface as Exclude<fmt.Stringer, null>) : $.pointerValue<Exclude<fmt.Stringer, null>>(iface)).String(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)))
						const __goscriptReturn3: boolean = true
						handled = __goscriptReturn3
						await __defer.dispose()
						return handled
					}
					break
			}
		}
		const __goscriptReturn4: boolean = false
		handled = __goscriptReturn4
		await __defer.dispose()
		return handled
		await __defer.dispose()
	} catch (e) {
		await __defer.disposePanic(e)
		if (!$.recovered(e)) {
			throw e
		}
	}
	return handled
}

export async function printBool(w: io.Writer | null, val: boolean): globalThis.Promise<void> {
	if (val) {
		await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? (w as Exclude<io.Writer, null>) : $.pointerValue<Exclude<io.Writer, null>>(w)).Write(trueBytes)
	} else {
		await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? (w as Exclude<io.Writer, null>) : $.pointerValue<Exclude<io.Writer, null>>(w)).Write(falseBytes)
	}
}

export async function printInt(w: io.Writer | null, val: bigint, base: number): globalThis.Promise<void> {
	await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? (w as Exclude<io.Writer, null>) : $.pointerValue<Exclude<io.Writer, null>>(w)).Write($.stringToBytes(strconv.FormatInt(val, base)))
}

export async function printUint(w: io.Writer | null, val: bigint, base: number): globalThis.Promise<void> {
	await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? (w as Exclude<io.Writer, null>) : $.pointerValue<Exclude<io.Writer, null>>(w)).Write($.stringToBytes(strconv.FormatUint(val, base)))
}

export async function printFloat(w: io.Writer | null, val: number, precision: number): globalThis.Promise<void> {
	await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? (w as Exclude<io.Writer, null>) : $.pointerValue<Exclude<io.Writer, null>>(w)).Write($.stringToBytes(strconv.FormatFloat(val, 103, -1, precision)))
}

export async function printComplex(w: io.Writer | null, c: $.Complex, floatPrecision: number): globalThis.Promise<void> {
	let r = $.real(c)
	await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? (w as Exclude<io.Writer, null>) : $.pointerValue<Exclude<io.Writer, null>>(w)).Write(openParenBytes)
	await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? (w as Exclude<io.Writer, null>) : $.pointerValue<Exclude<io.Writer, null>>(w)).Write($.stringToBytes(strconv.FormatFloat(r, 103, -1, floatPrecision)))
	let i = $.imag(c)
	if (i >= 0) {
		await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? (w as Exclude<io.Writer, null>) : $.pointerValue<Exclude<io.Writer, null>>(w)).Write(plusBytes)
	}
	await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? (w as Exclude<io.Writer, null>) : $.pointerValue<Exclude<io.Writer, null>>(w)).Write($.stringToBytes(strconv.FormatFloat(i, 103, -1, floatPrecision)))
	await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? (w as Exclude<io.Writer, null>) : $.pointerValue<Exclude<io.Writer, null>>(w)).Write(iBytes)
	await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? (w as Exclude<io.Writer, null>) : $.pointerValue<Exclude<io.Writer, null>>(w)).Write(closeParenBytes)
}

export async function printHexPtr(w: io.Writer | null, p: number): globalThis.Promise<void> {
	// Null pointer.
	let num = $.uint64(p)
	if (num == 0n) {
		await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? (w as Exclude<io.Writer, null>) : $.pointerValue<Exclude<io.Writer, null>>(w)).Write(nilAngleBytes)
		return
	}

	// Max uint64 is 16 bytes in hex + 2 bytes for '0x' prefix
	let buf: $.Slice<number> = $.makeSlice<number>(18, undefined, "byte")

	// It's simpler to construct the hex string right to left.
	let base = 16n
	let i: number = $.sliceLen(buf) - 1
	for (let __goscriptSliceWindow0 = $.sliceRange(buf); num >= base; ) {
		;(__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)] = $.indexString(hexDigits, globalThis.Number($.uint64Mod(num, base)))
		num = $.uint64Div(num, base)
		i--
	}
	$.sliceElems(buf!)[$.sliceSlot(buf!, i)] = $.indexString(hexDigits, globalThis.Number(num))

	// Add '0x' prefix.
	i--
	$.sliceElems(buf!)[$.sliceSlot(buf!, i)] = 120
	i--
	$.sliceElems(buf!)[$.sliceSlot(buf!, i)] = 48

	// Strip unused leading bytes.
	buf = $.goSlice(buf, i, undefined)
	await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? (w as Exclude<io.Writer, null>) : $.pointerValue<Exclude<io.Writer, null>>(w)).Write(buf)
}

export async function newValuesSorter(values: $.Slice<reflect.Value>, cs: __goscript_config.ConfigState | $.VarRef<__goscript_config.ConfigState> | null): globalThis.Promise<sort.Interface | null> {
	const cs$: __goscript_config.ConfigState = cs == null ? $.pointerTarget<__goscript_config.ConfigState>(cs) : (cs as any).__isVarRef === true ? (cs as any).value : (cs as any).__goValue === undefined ? (cs as any) : $.pointerTarget<__goscript_config.ConfigState>(cs)
	let vs: valuesSorter | $.VarRef<valuesSorter> | null = new valuesSorter({values: values, cs: cs})
	let vs$: valuesSorter = vs == null ? $.pointerTarget<valuesSorter>(vs) : (vs as any).__isVarRef === true ? (vs as any).value : (vs as any).__goValue === undefined ? (vs as any) : $.pointerTarget<valuesSorter>(vs)
	if (canSortSimply($.markAsStructValue($.cloneStructValue($.arrayIndex((vs$ as valuesSorter).values!, 0))).Kind())) {
		return $.interfaceValue<sort.Interface | null>(vs, "*spew.valuesSorter", /* @__PURE__ */ $.pointerType("spew.valuesSorter"))
	}
	if (!(cs$ as __goscript_config.ConfigState).DisableMethods) {
		;(vs$ as valuesSorter).strings = $.makeSlice<string>($.sliceLen(values), undefined, "string")
		for (let __goscriptRangeTarget0 = (vs$ as valuesSorter).values, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), i = 0; i < __goscriptRangeWindow0.length; i++) {
			let b = $.varRef($.markAsStructValue(new bytes.Buffer()))
			if (!await handleMethods(cs, $.interfaceValue<io.Writer | null>(b, "*bytes.Buffer", /* @__PURE__ */ $.pointerType("bytes.Buffer")), $.markAsStructValue($.cloneStructValue($.arrayIndex((vs$ as valuesSorter).values!, i))))) {
				;(vs$ as valuesSorter).strings = null
				break
			}
			$.sliceElems((vs$ as valuesSorter).strings!)[$.sliceSlot((vs$ as valuesSorter).strings!, i)] = b.value.String()
		}
	}
	if (((vs$ as valuesSorter).strings == null) && (cs$ as __goscript_config.ConfigState).SpewKeys) {
		;(vs$ as valuesSorter).strings = $.makeSlice<string>($.sliceLen(values), undefined, "string")
		for (let __goscriptRangeTarget1 = (vs$ as valuesSorter).values, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), i = 0; i < __goscriptRangeWindow1.length; i++) {
			$.sliceElems((vs$ as valuesSorter).strings!)[$.sliceSlot((vs$ as valuesSorter).strings!, i)] = await __goscript_spew.Sprintf("%#v", $.arrayToSlice<any>([$.markAsStructValue($.cloneStructValue($.arrayIndex((vs$ as valuesSorter).values!, i))).Interface()]))
		}
	}
	return $.interfaceValue<sort.Interface | null>(vs, "*spew.valuesSorter", /* @__PURE__ */ $.pointerType("spew.valuesSorter"))
}

export function canSortSimply(kind: reflect.Kind): boolean {
	// This switch parallels valueSortLess, except for the default case.
	switch (kind) {
		case reflect.Bool:
		{
			return true
			break
		}
		case reflect.Int8:
		case reflect.Int16:
		case reflect.Int32:
		case reflect.Int64:
		case reflect.Int:
		{
			return true
			break
		}
		case reflect.Uint8:
		case reflect.Uint16:
		case reflect.Uint32:
		case reflect.Uint64:
		case reflect.Uint:
		{
			return true
			break
		}
		case reflect.Float32:
		case reflect.Float64:
		{
			return true
			break
		}
		case reflect.String:
		{
			return true
			break
		}
		case reflect.Uintptr:
		{
			return true
			break
		}
		case reflect.Array:
		{
			return true
			break
		}
	}
	return false
}

export function valueSortLess(a: reflect.Value, b: reflect.Value): boolean {
	switch ($.markAsStructValue($.cloneStructValue(a)).Kind()) {
		case reflect.Bool:
		{
			return !$.markAsStructValue($.cloneStructValue(a)).Bool() && $.markAsStructValue($.cloneStructValue(b)).Bool()
			break
		}
		case reflect.Int8:
		case reflect.Int16:
		case reflect.Int32:
		case reflect.Int64:
		case reflect.Int:
		{
			return $.markAsStructValue($.cloneStructValue(a)).Int() < $.markAsStructValue($.cloneStructValue(b)).Int()
			break
		}
		case reflect.Uint8:
		case reflect.Uint16:
		case reflect.Uint32:
		case reflect.Uint64:
		case reflect.Uint:
		{
			return $.markAsStructValue($.cloneStructValue(a)).Uint() < $.markAsStructValue($.cloneStructValue(b)).Uint()
			break
		}
		case reflect.Float32:
		case reflect.Float64:
		{
			return $.markAsStructValue($.cloneStructValue(a)).Float() < $.markAsStructValue($.cloneStructValue(b)).Float()
			break
		}
		case reflect.String:
		{
			return $.stringCompare($.markAsStructValue($.cloneStructValue(a)).String(), $.markAsStructValue($.cloneStructValue(b)).String()) < 0
			break
		}
		case reflect.Uintptr:
		{
			return $.markAsStructValue($.cloneStructValue(a)).Uint() < $.markAsStructValue($.cloneStructValue(b)).Uint()
			break
		}
		case reflect.Array:
		{
			let l = $.markAsStructValue($.cloneStructValue(a)).Len()
			for (let i = 0; i < l; i++) {
				let av = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(a)).Index(i)))
				let bv = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(b)).Index(i)))
				if ($.comparableEqual($.markAsStructValue($.cloneStructValue(av)).Interface(), $.markAsStructValue($.cloneStructValue(bv)).Interface())) {
					continue
				}
				return valueSortLess(av, bv)
			}
			break
		}
	}
	return $.stringCompare($.markAsStructValue($.cloneStructValue(a)).String(), $.markAsStructValue($.cloneStructValue(b)).String()) < 0
}

export async function sortValues(values: $.Slice<reflect.Value>, cs: __goscript_config.ConfigState | $.VarRef<__goscript_config.ConfigState> | null): globalThis.Promise<void> {
	if ($.sliceLen(values) == 0) {
		return
	}
	await sort.Sort($.pointerValueOrNil(await newValuesSorter(values, cs))!)
}

var __goscriptAwait: any
