// Generated file based on format.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as strconv from "@goscript/strconv/index.js"

import * as strings from "@goscript/strings/index.js"

import type * as io from "@goscript/io/index.js"

import * as __goscript_common from "./common.gs.ts"

import * as __goscript_config from "./config.gs.ts"
import "@goscript/bytes/index.js"
import "@goscript/fmt/index.js"
import "@goscript/reflect/index.js"
import "@goscript/strconv/index.js"
import "@goscript/strings/index.js"
import "./common.gs.ts"
import "./config.gs.ts"

$.registerTypePackagePath("github.com/davecgh/go-spew/spew", ["spew.formatState"])

export class formatState {
	public get value(): any {
		return this._fields.value
	}

	public set value(value: any) {
		this._fields.value = value
	}

	public get fs(): fmt.State | null {
		return this._fields.fs
	}

	public set fs(value: fmt.State | null) {
		this._fields.fs = value
	}

	public get depth(): number {
		return this._fields.depth
	}

	public set depth(value: number) {
		this._fields.depth = value
	}

	public get pointers(): globalThis.Map<number, number> | null {
		return this._fields.pointers
	}

	public set pointers(value: globalThis.Map<number, number> | null) {
		this._fields.pointers = value
	}

	public get ignoreNextType(): boolean {
		return this._fields.ignoreNextType
	}

	public set ignoreNextType(value: boolean) {
		this._fields.ignoreNextType = value
	}

	public get cs(): __goscript_config.ConfigState | $.VarRef<__goscript_config.ConfigState> | null {
		return this._fields.cs
	}

	public set cs(value: __goscript_config.ConfigState | $.VarRef<__goscript_config.ConfigState> | null) {
		this._fields.cs = value
	}

	public _fields: {
		value: any
		fs: fmt.State | null
		depth: number
		pointers: globalThis.Map<number, number> | null
		ignoreNextType: boolean
		cs: __goscript_config.ConfigState | $.VarRef<__goscript_config.ConfigState> | null
	}

	constructor(init?: Partial<{value?: any, fs?: fmt.State | null, depth?: number, pointers?: globalThis.Map<number, number> | null, ignoreNextType?: boolean, cs?: __goscript_config.ConfigState | $.VarRef<__goscript_config.ConfigState> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			value: init?.value ?? (null! as any),
			fs: init?.fs ?? (null! as fmt.State | null),
			depth: init?.depth ?? (0 as number),
			pointers: init?.pointers ?? (null! as globalThis.Map<number, number> | null),
			ignoreNextType: init?.ignoreNextType ?? (false as boolean),
			cs: init?.cs ?? (null! as __goscript_config.ConfigState | $.VarRef<__goscript_config.ConfigState> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): formatState {
		return new formatState(this, true)
	}

	public __goscriptAssign(source: formatState): void {
		const target = this._fields
		const values = source._fields
		target.value = $.assignFieldValue(target.value, values.value, { kind: $.TypeKind.Interface, methods: [] })
		target.fs = $.assignFieldValue(target.fs, values.fs, "fmt.State")
		target.depth = values.depth
		target.pointers = values.pointers
		target.ignoreNextType = values.ignoreNextType
		target.cs = values.cs
	}

	public async Format(fs: fmt.State | null, verb: number): globalThis.Promise<void> {
		let f: formatState | $.VarRef<formatState> | null = this;
		const f$: formatState = f == null ? $.pointerTarget<formatState>(f) : (f as any).__isVarRef === true ? (f as any).value : (f as any).__goValue === undefined ? (f as any) : $.pointerTarget<formatState>(f);
		;(f$ as formatState).fs = fs

		// Use standard formatting for verbs that are not v.
		if (verb != 118) {
			let format = await (f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as formatState).constructOrigFormat(verb) : formatState.prototype.constructOrigFormat.call(f, verb))
			await fmt.Fprintf($.pointerValueOrNil((fs as io.Writer | null))!, format, (f$ as formatState).value)
			return
		}

		if ((f$ as formatState).value == null) {
			if ((__goscriptAwait = (fs !== null && (fs as any).__isVarRef !== true && (fs as any).__goValue === undefined ? (fs as Exclude<fmt.State, null>) : $.pointerValue<Exclude<fmt.State, null>>(fs)).Flag(35), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
				await (fs !== null && (fs as any).__isVarRef !== true && (fs as any).__goValue === undefined ? (fs as Exclude<fmt.State, null>) : $.pointerValue<Exclude<fmt.State, null>>(fs)).Write(__goscript_common.interfaceBytes)
			}
			await (fs !== null && (fs as any).__isVarRef !== true && (fs as any).__goValue === undefined ? (fs as Exclude<fmt.State, null>) : $.pointerValue<Exclude<fmt.State, null>>(fs)).Write(__goscript_common.nilAngleBytes)
			return
		}

		await (f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as formatState).format($.markAsStructValue($.cloneStructValue(reflect.ValueOf((f$ as formatState).value)))) : formatState.prototype.format.call(f, $.markAsStructValue($.cloneStructValue(reflect.ValueOf((f$ as formatState).value)))))
	}

	public async buildDefaultFormat(): globalThis.Promise<string> {
		const f: formatState | $.VarRef<formatState> | null = this;
		let format: string = ""
		let buf: bytes.Buffer | $.VarRef<bytes.Buffer> | null = bytes.NewBuffer(__goscript_common.percentBytes)

		for (let __goscriptRunes0 = $.stringRunes("0-+# "); __goscriptRunes0.next(); ) {
			const flag = __goscriptRunes0.rune
			if ((__goscriptAwait = $.pointerValue<Exclude<fmt.State, null>>($.pointerValue<formatState>(f).fs).Flag($.int(flag)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
				bytes.Buffer.prototype.WriteRune.call($.pointerValue<bytes.Buffer>(buf), flag)
			}
		}

		bytes.Buffer.prototype.WriteRune.call($.pointerValue<bytes.Buffer>(buf), 118)

		format = bytes.Buffer.prototype.String.call($.pointerValue<bytes.Buffer>(buf))
		return format
	}

	public async constructOrigFormat(verb: number): globalThis.Promise<string> {
		const f: formatState | $.VarRef<formatState> | null = this;
		let format: string = ""
		const f$: formatState = f == null ? $.pointerTarget<formatState>(f) : (f as any).__isVarRef === true ? (f as any).value : (f as any).__goValue === undefined ? (f as any) : $.pointerTarget<formatState>(f)
		let buf: bytes.Buffer | $.VarRef<bytes.Buffer> | null = bytes.NewBuffer(__goscript_common.percentBytes)

		for (let __goscriptRunes1 = $.stringRunes("0-+# "); __goscriptRunes1.next(); ) {
			const flag = __goscriptRunes1.rune
			if ((__goscriptAwait = $.pointerValue<Exclude<fmt.State, null>>((f$ as formatState).fs).Flag($.int(flag)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
				bytes.Buffer.prototype.WriteRune.call($.pointerValue<bytes.Buffer>(buf), flag)
			}
		}

		{
			let [width, ok] = await $.pointerValue<Exclude<fmt.State, null>>((f$ as formatState).fs).Width()
			if (ok) {
				bytes.Buffer.prototype.WriteString.call($.pointerValue<bytes.Buffer>(buf), strconv.Itoa(width))
			}
		}

		{
			let [precision, ok] = await $.pointerValue<Exclude<fmt.State, null>>((f$ as formatState).fs).Precision()
			if (ok) {
				bytes.Buffer.prototype.Write.call($.pointerValue<bytes.Buffer>(buf), __goscript_common.precisionBytes)
				bytes.Buffer.prototype.WriteString.call($.pointerValue<bytes.Buffer>(buf), strconv.Itoa(precision))
			}
		}

		bytes.Buffer.prototype.WriteRune.call($.pointerValue<bytes.Buffer>(buf), verb)

		format = bytes.Buffer.prototype.String.call($.pointerValue<bytes.Buffer>(buf))
		return format
	}

	public async format(v: reflect.Value): globalThis.Promise<void> {
		let f: formatState | $.VarRef<formatState> | null = this;
		const f$: formatState = f == null ? $.pointerTarget<formatState>(f) : (f as any).__isVarRef === true ? (f as any).value : (f as any).__goValue === undefined ? (f as any) : $.pointerTarget<formatState>(f)
		// Handle invalid reflect values immediately.
		let kind = $.markAsStructValue($.cloneStructValue(v)).Kind()
		if (kind == 0) {
			await $.pointerValue<Exclude<fmt.State, null>>((f$ as formatState).fs).Write(__goscript_common.invalidAngleBytes)
			return
		}

		// Handle pointers specially.
		if (kind == 22) {
			await (f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as formatState).formatPtr(v) : formatState.prototype.formatPtr.call(f, v))
			return
		}

		// Print type information unless already handled elsewhere.
		if (!(f$ as formatState).ignoreNextType && (__goscriptAwait = $.pointerValue<Exclude<fmt.State, null>>((f$ as formatState).fs).Flag(35), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
			await $.pointerValue<Exclude<fmt.State, null>>((f$ as formatState).fs).Write(__goscript_common.openParenBytes)
			await $.pointerValue<Exclude<fmt.State, null>>((f$ as formatState).fs).Write($.stringToBytes((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>($.markAsStructValue($.cloneStructValue(v)).Type()).String(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)))
			await $.pointerValue<Exclude<fmt.State, null>>((f$ as formatState).fs).Write(__goscript_common.closeParenBytes)
		}
		;(f$ as formatState).ignoreNextType = false

		// Call Stringer/error interfaces if they exist and the handle methods
		// flag is enabled.
		if (!$.pointerValue<__goscript_config.ConfigState>((f$ as formatState).cs).DisableMethods) {
			if ((kind != 0) && (kind != 20)) {
				{
					let handled = await __goscript_common.handleMethods((f$ as formatState).cs, ((f$ as formatState).fs as io.Writer | null), $.markAsStructValue($.cloneStructValue(v)))
					if (handled) {
						return
					}
				}
			}
		}

		switch (kind) {
			case reflect.Invalid:
			{
				break
			}
			case reflect.Bool:
			{
				await __goscript_common.printBool(((f$ as formatState).fs as io.Writer | null), $.markAsStructValue($.cloneStructValue(v)).Bool())
				break
			}
			case reflect.Int8:
			case reflect.Int16:
			case reflect.Int32:
			case reflect.Int64:
			case reflect.Int:
			{
				await __goscript_common.printInt(((f$ as formatState).fs as io.Writer | null), $.markAsStructValue($.cloneStructValue(v)).Int(), 10)
				break
			}
			case reflect.Uint8:
			case reflect.Uint16:
			case reflect.Uint32:
			case reflect.Uint64:
			case reflect.Uint:
			{
				await __goscript_common.printUint(((f$ as formatState).fs as io.Writer | null), $.markAsStructValue($.cloneStructValue(v)).Uint(), 10)
				break
			}
			case reflect.Float32:
			{
				await __goscript_common.printFloat(((f$ as formatState).fs as io.Writer | null), $.markAsStructValue($.cloneStructValue(v)).Float(), 32)
				break
			}
			case reflect.Float64:
			{
				await __goscript_common.printFloat(((f$ as formatState).fs as io.Writer | null), $.markAsStructValue($.cloneStructValue(v)).Float(), 64)
				break
			}
			case reflect.Complex64:
			{
				await __goscript_common.printComplex(((f$ as formatState).fs as io.Writer | null), $.markAsStructValue($.cloneStructValue(v)).Complex(), 32)
				break
			}
			case reflect.Complex128:
			{
				await __goscript_common.printComplex(((f$ as formatState).fs as io.Writer | null), $.markAsStructValue($.cloneStructValue(v)).Complex(), 64)
				break
			}
			case reflect.Slice:
			{
				if ($.markAsStructValue($.cloneStructValue(v)).IsNil()) {
					await $.pointerValue<Exclude<fmt.State, null>>((f$ as formatState).fs).Write(__goscript_common.nilAngleBytes)
					break
				}
			}
			case reflect.Array:
			{
				await $.pointerValue<Exclude<fmt.State, null>>((f$ as formatState).fs).Write(__goscript_common.openBracketBytes);
				;(f$ as formatState).depth++
				if (($.pointerValue<__goscript_config.ConfigState>((f$ as formatState).cs).MaxDepth != 0) && ((f$ as formatState).depth > $.pointerValue<__goscript_config.ConfigState>((f$ as formatState).cs).MaxDepth)) {
					await $.pointerValue<Exclude<fmt.State, null>>((f$ as formatState).fs).Write(__goscript_common.maxShortBytes)
				} else {
					let numEntries = $.markAsStructValue($.cloneStructValue(v)).Len()
					for (let i = 0; i < numEntries; i++) {
						if (i > 0) {
							await $.pointerValue<Exclude<fmt.State, null>>((f$ as formatState).fs).Write(__goscript_common.spaceBytes)
						}
						;(f$ as formatState).ignoreNextType = true
						await formatState.prototype.format.call(f, (f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as formatState).unpackValue($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(v)).Index(i)))) : formatState.prototype.unpackValue.call(f, $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(v)).Index(i))))))
					}
				}
				;(f$ as formatState).depth--
				await $.pointerValue<Exclude<fmt.State, null>>((f$ as formatState).fs).Write(__goscript_common.closeBracketBytes)
				break
			}
			case reflect.String:
			{
				await $.pointerValue<Exclude<fmt.State, null>>((f$ as formatState).fs).Write($.stringToBytes($.markAsStructValue($.cloneStructValue(v)).String()))
				break
			}
			case reflect.Interface:
			{
				if ($.markAsStructValue($.cloneStructValue(v)).IsNil()) {
					await $.pointerValue<Exclude<fmt.State, null>>((f$ as formatState).fs).Write(__goscript_common.nilAngleBytes)
				}
				break
			}
			case reflect.Ptr:
			{
				break
			}
			case reflect.Map:
			{
				if ($.markAsStructValue($.cloneStructValue(v)).IsNil()) {
					await $.pointerValue<Exclude<fmt.State, null>>((f$ as formatState).fs).Write(__goscript_common.nilAngleBytes)
					break
				}

				await $.pointerValue<Exclude<fmt.State, null>>((f$ as formatState).fs).Write(__goscript_common.openMapBytes);
				;(f$ as formatState).depth++
				if (($.pointerValue<__goscript_config.ConfigState>((f$ as formatState).cs).MaxDepth != 0) && ((f$ as formatState).depth > $.pointerValue<__goscript_config.ConfigState>((f$ as formatState).cs).MaxDepth)) {
					await $.pointerValue<Exclude<fmt.State, null>>((f$ as formatState).fs).Write(__goscript_common.maxShortBytes)
				} else {
					let keys: $.Slice<reflect.Value> = $.markAsStructValue($.cloneStructValue(v)).MapKeys()
					if ($.pointerValue<__goscript_config.ConfigState>((f$ as formatState).cs).SortKeys) {
						await __goscript_common.sortValues(keys, (f$ as formatState).cs)
					}
					for (let __goscriptRangeTarget0 = keys, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), i = 0; i < __goscriptRangeWindow0.length; i++) {
						let key = $.markAsStructValue($.cloneStructValue((__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + i] as reflect.Value)))
						if (i > 0) {
							await $.pointerValue<Exclude<fmt.State, null>>((f$ as formatState).fs).Write(__goscript_common.spaceBytes)
						}
						;(f$ as formatState).ignoreNextType = true
						await formatState.prototype.format.call(f, (f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as formatState).unpackValue($.markAsStructValue($.cloneStructValue(key))) : formatState.prototype.unpackValue.call(f, $.markAsStructValue($.cloneStructValue(key)))))
						await $.pointerValue<Exclude<fmt.State, null>>((f$ as formatState).fs).Write(__goscript_common.colonBytes);
						;(f$ as formatState).ignoreNextType = true
						await formatState.prototype.format.call(f, formatState.prototype.unpackValue.call(f, $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(v)).MapIndex($.markAsStructValue($.cloneStructValue(key)))))))
					}
				}
				;(f$ as formatState).depth--
				await $.pointerValue<Exclude<fmt.State, null>>((f$ as formatState).fs).Write(__goscript_common.closeMapBytes)
				break
			}
			case reflect.Struct:
			{
				let numFields = $.markAsStructValue($.cloneStructValue(v)).NumField()
				await $.pointerValue<Exclude<fmt.State, null>>((f$ as formatState).fs).Write(__goscript_common.openBraceBytes);
				;(f$ as formatState).depth++
				if (($.pointerValue<__goscript_config.ConfigState>((f$ as formatState).cs).MaxDepth != 0) && ((f$ as formatState).depth > $.pointerValue<__goscript_config.ConfigState>((f$ as formatState).cs).MaxDepth)) {
					await $.pointerValue<Exclude<fmt.State, null>>((f$ as formatState).fs).Write(__goscript_common.maxShortBytes)
				} else {
					let vt = $.markAsStructValue($.cloneStructValue(v)).Type()
					for (let i = 0; i < numFields; i++) {
						if (i > 0) {
							await $.pointerValue<Exclude<fmt.State, null>>((f$ as formatState).fs).Write(__goscript_common.spaceBytes)
						}
						let vtf = $.markAsStructValue($.cloneStructValue(((__goscriptAwait = (vt !== null && (vt as any).__isVarRef !== true && (vt as any).__goValue === undefined ? (vt as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(vt)).Field(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as reflect.StructField)))
						if ((__goscriptAwait = $.pointerValue<Exclude<fmt.State, null>>((f$ as formatState).fs).Flag(43), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) || (__goscriptAwait = $.pointerValue<Exclude<fmt.State, null>>((f$ as formatState).fs).Flag(35), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
							await $.pointerValue<Exclude<fmt.State, null>>((f$ as formatState).fs).Write($.stringToBytes(vtf.Name))
							await $.pointerValue<Exclude<fmt.State, null>>((f$ as formatState).fs).Write(__goscript_common.colonBytes)
						}
						await formatState.prototype.format.call(f, (f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as formatState).unpackValue($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(v)).Field(i)))) : formatState.prototype.unpackValue.call(f, $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(v)).Field(i))))))
					}
				}
				;(f$ as formatState).depth--
				await $.pointerValue<Exclude<fmt.State, null>>((f$ as formatState).fs).Write(__goscript_common.closeBraceBytes)
				break
			}
			case reflect.Uintptr:
			{
				await __goscript_common.printHexPtr(((f$ as formatState).fs as io.Writer | null), $.uint($.markAsStructValue($.cloneStructValue(v)).Uint(), 64))
				break
			}
			case reflect.UnsafePointer:
			case reflect.Chan:
			case reflect.Func:
			{
				await __goscript_common.printHexPtr(((f$ as formatState).fs as io.Writer | null), $.markAsStructValue($.cloneStructValue(v)).Pointer())
				break
			}
			default:
			{
				let format = await (f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as formatState).buildDefaultFormat() : formatState.prototype.buildDefaultFormat.call(f))
				if ($.markAsStructValue($.cloneStructValue(v)).CanInterface()) {
					await fmt.Fprintf($.pointerValueOrNil(((f$ as formatState).fs as io.Writer | null))!, format, $.markAsStructValue($.cloneStructValue(v)).Interface())
				} else {
					await fmt.Fprintf($.pointerValueOrNil(((f$ as formatState).fs as io.Writer | null))!, format, $.markAsStructValue($.cloneStructValue(v)).String())
				}
				break
			}
		}
	}

	public async formatPtr(v: reflect.Value): globalThis.Promise<void> {
		let f: formatState | $.VarRef<formatState> | null = this;
		const f$: formatState = f == null ? $.pointerTarget<formatState>(f) : (f as any).__isVarRef === true ? (f as any).value : (f as any).__goValue === undefined ? (f as any) : $.pointerTarget<formatState>(f)
		// Display nil if top level pointer is nil.
		let showTypes = (__goscriptAwait = $.pointerValue<Exclude<fmt.State, null>>((f$ as formatState).fs).Flag(35), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		if ($.markAsStructValue($.cloneStructValue(v)).IsNil() && (!showTypes || (f$ as formatState).ignoreNextType)) {
			await $.pointerValue<Exclude<fmt.State, null>>((f$ as formatState).fs).Write(__goscript_common.nilAngleBytes)
			return
		}

		// Remove pointers at or below the current depth from map used to detect
		// circular refs.
		for (const [k, depth] of (f$ as formatState).pointers?.entries() ?? []) {
			if (depth >= (f$ as formatState).depth) {
				$.deleteMapEntry((f$ as formatState).pointers, k)
			}
		}

		// Keep list of all dereferenced pointers to possibly show later.
		let pointerChain: $.Slice<number> = $.makeSlice<number>(0, undefined, "number")

		// Figure out how many levels of indirection there are by derferencing
		// pointers and unpacking interfaces down the chain while detecting circular
		// references.
		let nilFound = false
		let cycleFound = false
		let indirects = 0
		let ve = $.markAsStructValue($.cloneStructValue(v))
		while ($.markAsStructValue($.cloneStructValue(ve)).Kind() == 22) {
			if ($.markAsStructValue($.cloneStructValue(ve)).IsNil()) {
				nilFound = true
				break
			}
			indirects++
			let addr = $.markAsStructValue($.cloneStructValue(ve)).Pointer()
			pointerChain = $.appendOne(pointerChain, $.uint(addr, 64))
			{
				let [pd, ok] = $.mapGet<number, number, number>((f$ as formatState).pointers, addr, 0)
				if (ok && (pd < (f$ as formatState).depth)) {
					cycleFound = true
					indirects--
					break
				}
			}
			$.mapSet((f$ as formatState).pointers, addr, (f$ as formatState).depth)

			ve = $.assignStruct(ve, $.markAsStructValue($.cloneStructValue(ve)).Elem())
			if ($.markAsStructValue($.cloneStructValue(ve)).Kind() == 20) {
				if ($.markAsStructValue($.cloneStructValue(ve)).IsNil()) {
					nilFound = true
					break
				}
				ve = $.assignStruct(ve, $.markAsStructValue($.cloneStructValue(ve)).Elem())
			}
		}

		// Display type or indirection level depending on flags.
		if (showTypes && !(f$ as formatState).ignoreNextType) {
			await $.pointerValue<Exclude<fmt.State, null>>((f$ as formatState).fs).Write(__goscript_common.openParenBytes)
			await $.pointerValue<Exclude<fmt.State, null>>((f$ as formatState).fs).Write(bytes.Repeat(__goscript_common.asteriskBytes, indirects))
			await $.pointerValue<Exclude<fmt.State, null>>((f$ as formatState).fs).Write($.stringToBytes((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>($.markAsStructValue($.cloneStructValue(ve)).Type()).String(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)))
			await $.pointerValue<Exclude<fmt.State, null>>((f$ as formatState).fs).Write(__goscript_common.closeParenBytes)
		} else {
			if (nilFound || cycleFound) {
				indirects = indirects + (strings.Count((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>($.markAsStructValue($.cloneStructValue(ve)).Type()).String(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), "*"))
			}
			await $.pointerValue<Exclude<fmt.State, null>>((f$ as formatState).fs).Write(__goscript_common.openAngleBytes)
			await $.pointerValue<Exclude<fmt.State, null>>((f$ as formatState).fs).Write($.stringToBytes(strings.Repeat("*", indirects)))
			await $.pointerValue<Exclude<fmt.State, null>>((f$ as formatState).fs).Write(__goscript_common.closeAngleBytes)
		}

		// Display pointer information depending on flags.
		if ((__goscriptAwait = $.pointerValue<Exclude<fmt.State, null>>((f$ as formatState).fs).Flag(43), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) && ($.sliceLen(pointerChain) > 0)) {
			await $.pointerValue<Exclude<fmt.State, null>>((f$ as formatState).fs).Write(__goscript_common.openParenBytes)
			for (let __goscriptRangeTarget1 = pointerChain, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), i = 0; i < __goscriptRangeWindow1.length; i++) {
				let addr = $.uint((__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + i] as number), 64)
				if (i > 0) {
					await $.pointerValue<Exclude<fmt.State, null>>((f$ as formatState).fs).Write(__goscript_common.pointerChainBytes)
				}
				await __goscript_common.printHexPtr(((f$ as formatState).fs as io.Writer | null), addr)
			}
			await $.pointerValue<Exclude<fmt.State, null>>((f$ as formatState).fs).Write(__goscript_common.closeParenBytes)
		}

		// Display dereferenced value.
		switch ((true as boolean)) {
			case nilFound:
			{
				await $.pointerValue<Exclude<fmt.State, null>>((f$ as formatState).fs).Write(__goscript_common.nilAngleBytes)
				break
			}
			case cycleFound:
			{
				await $.pointerValue<Exclude<fmt.State, null>>((f$ as formatState).fs).Write(__goscript_common.circularShortBytes)
				break
			}
			default:
			{
				;(f$ as formatState).ignoreNextType = true
				await (f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as formatState).format(ve) : formatState.prototype.format.call(f, ve))
				break
			}
		}
	}

	public unpackValue(v: reflect.Value): reflect.Value {
		let f: formatState | $.VarRef<formatState> | null = this;
		if ($.markAsStructValue($.cloneStructValue(v)).Kind() == 20) {
			$.pointerValue<formatState>(f).ignoreNextType = false
			if (!$.markAsStructValue($.cloneStructValue(v)).IsNil()) {
				v = $.assignStruct(v, $.markAsStructValue($.cloneStructValue(v)).Elem())
			}
		}
		return $.markAsStructValue($.cloneStructValue(v))
	}

	static __typeInfo = $.registerStructType(
		"spew.formatState",
		() => new formatState(),
		() => [$.methodSignature("Format", [["fs", "fmt.State"], ["verb", /* @__PURE__ */ $.basicType("int32")]], [], true), $.methodSignature("buildDefaultFormat", [], [["format", /* @__PURE__ */ $.basicType("string")]], true), $.methodSignature("constructOrigFormat", [["verb", /* @__PURE__ */ $.basicType("int32")]], [["format", /* @__PURE__ */ $.basicType("string")]], true), $.methodSignature("format", [["v", "reflect.Value"]], [], true), $.methodSignature("formatPtr", [["v", "reflect.Value"]], [], true), $.methodSignature("unpackValue", [["v", "reflect.Value"]], ["reflect.Value"], true)],
		formatState,
		() => [/* @__PURE__ */ $.structField("value", { kind: $.TypeKind.Interface, methods: [] }, [0], 0, false, { pkgPath: "github.com/davecgh/go-spew/spew" }), /* @__PURE__ */ $.structField("fs", "fmt.State", [1], 16, false, { pkgPath: "github.com/davecgh/go-spew/spew" }), /* @__PURE__ */ $.structField("depth", /* @__PURE__ */ $.basicType("int"), [2], 32, false, { pkgPath: "github.com/davecgh/go-spew/spew" }), /* @__PURE__ */ $.structField("pointers", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("uintptr"), /* @__PURE__ */ $.basicType("int")), [3], 40, false, { pkgPath: "github.com/davecgh/go-spew/spew" }), /* @__PURE__ */ $.structField("ignoreNextType", /* @__PURE__ */ $.basicType("bool"), [4], 48, false, { pkgPath: "github.com/davecgh/go-spew/spew" }), /* @__PURE__ */ $.structField("cs", /* @__PURE__ */ $.pointerType("spew.ConfigState"), [5], 56, false, { pkgPath: "github.com/davecgh/go-spew/spew" })]
	)
}

export const supportedFlags: string = "0-+# "

export function newFormatter(cs: __goscript_config.ConfigState | $.VarRef<__goscript_config.ConfigState> | null, v: any): fmt.Formatter | null {
	let fs: formatState | $.VarRef<formatState> | null = new formatState({value: v, cs: cs})
	$.pointerValue<formatState>(fs).pointers = $.makeMap<number, number>()
	return $.interfaceValue<fmt.Formatter | null>(fs, "*spew.formatState", /* @__PURE__ */ $.pointerType("spew.formatState"))
}

export function NewFormatter(v: any): fmt.Formatter | null {
	return newFormatter(__goscript_config.Config, v)
}

var __goscriptAwait: any
