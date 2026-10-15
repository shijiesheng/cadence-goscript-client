// Generated file based on dump.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as hex from "@goscript/encoding/hex/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as io from "@goscript/io/index.js"

import * as os from "@goscript/os/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as regexp from "@goscript/regexp/index.js"

import * as strconv from "@goscript/strconv/index.js"

import * as strings from "@goscript/strings/index.js"

import * as __goscript_bypasssafe from "./bypasssafe.gs.ts"

import * as __goscript_common from "./common.gs.ts"

import * as __goscript_config from "./config.gs.ts"
import "@goscript/bytes/index.js"
import "@goscript/encoding/hex/index.js"
import "@goscript/fmt/index.js"
import "@goscript/io/index.js"
import "@goscript/os/index.js"
import "@goscript/reflect/index.js"
import "@goscript/regexp/index.js"
import "@goscript/strconv/index.js"
import "@goscript/strings/index.js"
import "./bypasssafe.gs.ts"
import "./common.gs.ts"
import "./config.gs.ts"

$.registerTypePackagePath("github.com/davecgh/go-spew/spew", ["spew.dumpState"])

export class dumpState {
	public get w(): io.Writer | null {
		return this._fields.w
	}

	public set w(value: io.Writer | null) {
		this._fields.w = value
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

	public get ignoreNextIndent(): boolean {
		return this._fields.ignoreNextIndent
	}

	public set ignoreNextIndent(value: boolean) {
		this._fields.ignoreNextIndent = value
	}

	public get cs(): __goscript_config.ConfigState | $.VarRef<__goscript_config.ConfigState> | null {
		return this._fields.cs
	}

	public set cs(value: __goscript_config.ConfigState | $.VarRef<__goscript_config.ConfigState> | null) {
		this._fields.cs = value
	}

	public _fields: {
		w: io.Writer | null
		depth: number
		pointers: globalThis.Map<number, number> | null
		ignoreNextType: boolean
		ignoreNextIndent: boolean
		cs: __goscript_config.ConfigState | $.VarRef<__goscript_config.ConfigState> | null
	}

	constructor(init?: Partial<{w?: io.Writer | null, depth?: number, pointers?: globalThis.Map<number, number> | null, ignoreNextType?: boolean, ignoreNextIndent?: boolean, cs?: __goscript_config.ConfigState | $.VarRef<__goscript_config.ConfigState> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			w: init?.w ?? (null! as io.Writer | null),
			depth: init?.depth ?? (0 as number),
			pointers: init?.pointers ?? (null! as globalThis.Map<number, number> | null),
			ignoreNextType: init?.ignoreNextType ?? (false as boolean),
			ignoreNextIndent: init?.ignoreNextIndent ?? (false as boolean),
			cs: init?.cs ?? (null! as __goscript_config.ConfigState | $.VarRef<__goscript_config.ConfigState> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): dumpState {
		return new dumpState(this, true)
	}

	public __goscriptAssign(source: dumpState): void {
		const target = this._fields
		const values = source._fields
		target.w = $.assignFieldValue(target.w, values.w, "io.Writer")
		target.depth = values.depth
		target.pointers = values.pointers
		target.ignoreNextType = values.ignoreNextType
		target.ignoreNextIndent = values.ignoreNextIndent
		target.cs = values.cs
	}

	public async dump(v: reflect.Value): globalThis.Promise<void> {
		let d: dumpState | $.VarRef<dumpState> | null = this;
		const d$: dumpState = d == null ? $.pointerTarget<dumpState>(d) : (d as any).__isVarRef === true ? (d as any).value : (d as any).__goValue === undefined ? (d as any) : $.pointerTarget<dumpState>(d)
		// Handle invalid reflect values immediately.
		let kind = $.markAsStructValue($.cloneStructValue(v)).Kind()
		if (kind == 0) {
			await $.pointerValue<Exclude<io.Writer, null>>((d$ as dumpState).w).Write(__goscript_common.invalidAngleBytes)
			return
		}

		// Handle pointers specially.
		if (kind == 22) {
			await (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as dumpState).indent() : dumpState.prototype.indent.call(d))
			await (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as dumpState).dumpPtr(v) : dumpState.prototype.dumpPtr.call(d, v))
			return
		}

		// Print type information unless already handled elsewhere.
		if (!(d$ as dumpState).ignoreNextType) {
			await (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as dumpState).indent() : dumpState.prototype.indent.call(d))
			await $.pointerValue<Exclude<io.Writer, null>>((d$ as dumpState).w).Write(__goscript_common.openParenBytes)
			await $.pointerValue<Exclude<io.Writer, null>>((d$ as dumpState).w).Write($.stringToBytes((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>($.markAsStructValue($.cloneStructValue(v)).Type()).String(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)))
			await $.pointerValue<Exclude<io.Writer, null>>((d$ as dumpState).w).Write(__goscript_common.closeParenBytes)
			await $.pointerValue<Exclude<io.Writer, null>>((d$ as dumpState).w).Write(__goscript_common.spaceBytes)
		}
		;(d$ as dumpState).ignoreNextType = false

		// Display length and capacity if the built-in len and cap functions
		// work with the value's kind and the len/cap itself is non-zero.
		let valueLen = 0
		let valueCap = 0
		switch ($.markAsStructValue($.cloneStructValue(v)).Kind()) {
			case reflect.Array:
			case reflect.Slice:
			case reflect.Chan:
			{
				let __goscriptAssign0_0: number = $.markAsStructValue($.cloneStructValue(v)).Len()
				let __goscriptAssign0_1: number = $.markAsStructValue($.cloneStructValue(v)).Cap()
				valueLen = __goscriptAssign0_0
				valueCap = __goscriptAssign0_1
				break
			}
			case reflect.Map:
			case reflect.String:
			{
				valueLen = $.markAsStructValue($.cloneStructValue(v)).Len()
				break
			}
		}
		if ((valueLen != 0) || (!$.pointerValue<__goscript_config.ConfigState>((d$ as dumpState).cs).DisableCapacities && (valueCap != 0))) {
			await $.pointerValue<Exclude<io.Writer, null>>((d$ as dumpState).w).Write(__goscript_common.openParenBytes)
			if (valueLen != 0) {
				await $.pointerValue<Exclude<io.Writer, null>>((d$ as dumpState).w).Write(__goscript_common.lenEqualsBytes)
				await __goscript_common.printInt((d$ as dumpState).w, $.int64(valueLen), 10)
			}
			if (!$.pointerValue<__goscript_config.ConfigState>((d$ as dumpState).cs).DisableCapacities && (valueCap != 0)) {
				if (valueLen != 0) {
					await $.pointerValue<Exclude<io.Writer, null>>((d$ as dumpState).w).Write(__goscript_common.spaceBytes)
				}
				await $.pointerValue<Exclude<io.Writer, null>>((d$ as dumpState).w).Write(__goscript_common.capEqualsBytes)
				await __goscript_common.printInt((d$ as dumpState).w, $.int64(valueCap), 10)
			}
			await $.pointerValue<Exclude<io.Writer, null>>((d$ as dumpState).w).Write(__goscript_common.closeParenBytes)
			await $.pointerValue<Exclude<io.Writer, null>>((d$ as dumpState).w).Write(__goscript_common.spaceBytes)
		}

		// Call Stringer/error interfaces if they exist and the handle methods flag
		// is enabled
		if (!$.pointerValue<__goscript_config.ConfigState>((d$ as dumpState).cs).DisableMethods) {
			if ((kind != 0) && (kind != 20)) {
				{
					let handled = await __goscript_common.handleMethods((d$ as dumpState).cs, (d$ as dumpState).w, $.markAsStructValue($.cloneStructValue(v)))
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
				await __goscript_common.printBool((d$ as dumpState).w, $.markAsStructValue($.cloneStructValue(v)).Bool())
				break
			}
			case reflect.Int8:
			case reflect.Int16:
			case reflect.Int32:
			case reflect.Int64:
			case reflect.Int:
			{
				await __goscript_common.printInt((d$ as dumpState).w, $.markAsStructValue($.cloneStructValue(v)).Int(), 10)
				break
			}
			case reflect.Uint8:
			case reflect.Uint16:
			case reflect.Uint32:
			case reflect.Uint64:
			case reflect.Uint:
			{
				await __goscript_common.printUint((d$ as dumpState).w, $.markAsStructValue($.cloneStructValue(v)).Uint(), 10)
				break
			}
			case reflect.Float32:
			{
				await __goscript_common.printFloat((d$ as dumpState).w, $.markAsStructValue($.cloneStructValue(v)).Float(), 32)
				break
			}
			case reflect.Float64:
			{
				await __goscript_common.printFloat((d$ as dumpState).w, $.markAsStructValue($.cloneStructValue(v)).Float(), 64)
				break
			}
			case reflect.Complex64:
			{
				await __goscript_common.printComplex((d$ as dumpState).w, $.markAsStructValue($.cloneStructValue(v)).Complex(), 32)
				break
			}
			case reflect.Complex128:
			{
				await __goscript_common.printComplex((d$ as dumpState).w, $.markAsStructValue($.cloneStructValue(v)).Complex(), 64)
				break
			}
			case reflect.Slice:
			{
				if ($.markAsStructValue($.cloneStructValue(v)).IsNil()) {
					await $.pointerValue<Exclude<io.Writer, null>>((d$ as dumpState).w).Write(__goscript_common.nilAngleBytes)
					break
				}
			}
			case reflect.Array:
			{
				await $.pointerValue<Exclude<io.Writer, null>>((d$ as dumpState).w).Write(__goscript_common.openBraceNewlineBytes);
				;(d$ as dumpState).depth++
				if (($.pointerValue<__goscript_config.ConfigState>((d$ as dumpState).cs).MaxDepth != 0) && ((d$ as dumpState).depth > $.pointerValue<__goscript_config.ConfigState>((d$ as dumpState).cs).MaxDepth)) {
					await (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as dumpState).indent() : dumpState.prototype.indent.call(d))
					await $.pointerValue<Exclude<io.Writer, null>>((d$ as dumpState).w).Write(__goscript_common.maxNewlineBytes)
				} else {
					await (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as dumpState).dumpSlice(v) : dumpState.prototype.dumpSlice.call(d, v))
				}
				;(d$ as dumpState).depth--
				await (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as dumpState).indent() : dumpState.prototype.indent.call(d))
				await $.pointerValue<Exclude<io.Writer, null>>((d$ as dumpState).w).Write(__goscript_common.closeBraceBytes)
				break
			}
			case reflect.String:
			{
				await $.pointerValue<Exclude<io.Writer, null>>((d$ as dumpState).w).Write($.stringToBytes(strconv.Quote($.markAsStructValue($.cloneStructValue(v)).String())))
				break
			}
			case reflect.Interface:
			{
				if ($.markAsStructValue($.cloneStructValue(v)).IsNil()) {
					await $.pointerValue<Exclude<io.Writer, null>>((d$ as dumpState).w).Write(__goscript_common.nilAngleBytes)
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
					await $.pointerValue<Exclude<io.Writer, null>>((d$ as dumpState).w).Write(__goscript_common.nilAngleBytes)
					break
				}

				await $.pointerValue<Exclude<io.Writer, null>>((d$ as dumpState).w).Write(__goscript_common.openBraceNewlineBytes);
				;(d$ as dumpState).depth++
				if (($.pointerValue<__goscript_config.ConfigState>((d$ as dumpState).cs).MaxDepth != 0) && ((d$ as dumpState).depth > $.pointerValue<__goscript_config.ConfigState>((d$ as dumpState).cs).MaxDepth)) {
					await (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as dumpState).indent() : dumpState.prototype.indent.call(d))
					await $.pointerValue<Exclude<io.Writer, null>>((d$ as dumpState).w).Write(__goscript_common.maxNewlineBytes)
				} else {
					let numEntries = $.markAsStructValue($.cloneStructValue(v)).Len()
					let keys: $.Slice<reflect.Value> = $.markAsStructValue($.cloneStructValue(v)).MapKeys()
					if ($.pointerValue<__goscript_config.ConfigState>((d$ as dumpState).cs).SortKeys) {
						await __goscript_common.sortValues(keys, (d$ as dumpState).cs)
					}
					for (let __goscriptRangeTarget0 = keys, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), i = 0; i < __goscriptRangeWindow0.length; i++) {
						let key = $.markAsStructValue($.cloneStructValue((__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + i] as reflect.Value)))
						await dumpState.prototype.dump.call(d, (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as dumpState).unpackValue($.markAsStructValue($.cloneStructValue(key))) : dumpState.prototype.unpackValue.call(d, $.markAsStructValue($.cloneStructValue(key)))))
						await $.pointerValue<Exclude<io.Writer, null>>((d$ as dumpState).w).Write(__goscript_common.colonSpaceBytes);
						;(d$ as dumpState).ignoreNextIndent = true
						await dumpState.prototype.dump.call(d, dumpState.prototype.unpackValue.call(d, $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(v)).MapIndex($.markAsStructValue($.cloneStructValue(key)))))))
						if (i < (numEntries - 1)) {
							await $.pointerValue<Exclude<io.Writer, null>>((d$ as dumpState).w).Write(__goscript_common.commaNewlineBytes)
						} else {
							await $.pointerValue<Exclude<io.Writer, null>>((d$ as dumpState).w).Write(__goscript_common.newlineBytes)
						}
					}
				}
				;(d$ as dumpState).depth--
				await (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as dumpState).indent() : dumpState.prototype.indent.call(d))
				await $.pointerValue<Exclude<io.Writer, null>>((d$ as dumpState).w).Write(__goscript_common.closeBraceBytes)
				break
			}
			case reflect.Struct:
			{
				await $.pointerValue<Exclude<io.Writer, null>>((d$ as dumpState).w).Write(__goscript_common.openBraceNewlineBytes);
				;(d$ as dumpState).depth++
				if (($.pointerValue<__goscript_config.ConfigState>((d$ as dumpState).cs).MaxDepth != 0) && ((d$ as dumpState).depth > $.pointerValue<__goscript_config.ConfigState>((d$ as dumpState).cs).MaxDepth)) {
					await (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as dumpState).indent() : dumpState.prototype.indent.call(d))
					await $.pointerValue<Exclude<io.Writer, null>>((d$ as dumpState).w).Write(__goscript_common.maxNewlineBytes)
				} else {
					let vt = $.markAsStructValue($.cloneStructValue(v)).Type()
					let numFields = $.markAsStructValue($.cloneStructValue(v)).NumField()
					for (let i = 0; i < numFields; i++) {
						await (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as dumpState).indent() : dumpState.prototype.indent.call(d))
						let vtf = $.markAsStructValue($.cloneStructValue(((__goscriptAwait = (vt !== null && (vt as any).__isVarRef !== true && (vt as any).__goValue === undefined ? (vt as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(vt)).Field(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as reflect.StructField)))
						await $.pointerValue<Exclude<io.Writer, null>>((d$ as dumpState).w).Write($.stringToBytes(vtf.Name))
						await $.pointerValue<Exclude<io.Writer, null>>((d$ as dumpState).w).Write(__goscript_common.colonSpaceBytes);
						;(d$ as dumpState).ignoreNextIndent = true
						await dumpState.prototype.dump.call(d, (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as dumpState).unpackValue($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(v)).Field(i)))) : dumpState.prototype.unpackValue.call(d, $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(v)).Field(i))))))
						if (i < (numFields - 1)) {
							await $.pointerValue<Exclude<io.Writer, null>>((d$ as dumpState).w).Write(__goscript_common.commaNewlineBytes)
						} else {
							await $.pointerValue<Exclude<io.Writer, null>>((d$ as dumpState).w).Write(__goscript_common.newlineBytes)
						}
					}
				}
				;(d$ as dumpState).depth--
				await (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as dumpState).indent() : dumpState.prototype.indent.call(d))
				await $.pointerValue<Exclude<io.Writer, null>>((d$ as dumpState).w).Write(__goscript_common.closeBraceBytes)
				break
			}
			case reflect.Uintptr:
			{
				await __goscript_common.printHexPtr((d$ as dumpState).w, $.uint($.markAsStructValue($.cloneStructValue(v)).Uint(), 64))
				break
			}
			case reflect.UnsafePointer:
			case reflect.Chan:
			case reflect.Func:
			{
				await __goscript_common.printHexPtr((d$ as dumpState).w, $.markAsStructValue($.cloneStructValue(v)).Pointer())
				break
			}
			default:
			{
				if ($.markAsStructValue($.cloneStructValue(v)).CanInterface()) {
					await fmt.Fprintf($.pointerValueOrNil((d$ as dumpState).w)!, "%v", $.markAsStructValue($.cloneStructValue(v)).Interface())
				} else {
					await fmt.Fprintf($.pointerValueOrNil((d$ as dumpState).w)!, "%v", $.markAsStructValue($.cloneStructValue(v)).String())
				}
				break
			}
		}
	}

	public async dumpPtr(v: reflect.Value): globalThis.Promise<void> {
		let d: dumpState | $.VarRef<dumpState> | null = this;
		const d$: dumpState = d == null ? $.pointerTarget<dumpState>(d) : (d as any).__isVarRef === true ? (d as any).value : (d as any).__goValue === undefined ? (d as any) : $.pointerTarget<dumpState>(d)
		// Remove pointers at or below the current depth from map used to detect
		// circular refs.
		for (const [k, depth] of (d$ as dumpState).pointers?.entries() ?? []) {
			if (depth >= (d$ as dumpState).depth) {
				$.deleteMapEntry((d$ as dumpState).pointers, k)
			}
		}

		// Keep list of all dereferenced pointers to show later.
		let pointerChain: $.Slice<number> = $.makeSlice<number>(0, undefined, "number")

		// Figure out how many levels of indirection there are by dereferencing
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
				let [pd, ok] = $.mapGet<number, number, number>((d$ as dumpState).pointers, addr, 0)
				if (ok && (pd < (d$ as dumpState).depth)) {
					cycleFound = true
					indirects--
					break
				}
			}
			$.mapSet((d$ as dumpState).pointers, addr, (d$ as dumpState).depth)

			ve = $.assignStruct(ve, $.markAsStructValue($.cloneStructValue(ve)).Elem())
			if ($.markAsStructValue($.cloneStructValue(ve)).Kind() == 20) {
				if ($.markAsStructValue($.cloneStructValue(ve)).IsNil()) {
					nilFound = true
					break
				}
				ve = $.assignStruct(ve, $.markAsStructValue($.cloneStructValue(ve)).Elem())
			}
		}

		// Display type information.
		await $.pointerValue<Exclude<io.Writer, null>>((d$ as dumpState).w).Write(__goscript_common.openParenBytes)
		await $.pointerValue<Exclude<io.Writer, null>>((d$ as dumpState).w).Write(bytes.Repeat(__goscript_common.asteriskBytes, indirects))
		await $.pointerValue<Exclude<io.Writer, null>>((d$ as dumpState).w).Write($.stringToBytes((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>($.markAsStructValue($.cloneStructValue(ve)).Type()).String(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)))
		await $.pointerValue<Exclude<io.Writer, null>>((d$ as dumpState).w).Write(__goscript_common.closeParenBytes)

		// Display pointer information.
		if (!$.pointerValue<__goscript_config.ConfigState>((d$ as dumpState).cs).DisablePointerAddresses && ($.sliceLen(pointerChain) > 0)) {
			await $.pointerValue<Exclude<io.Writer, null>>((d$ as dumpState).w).Write(__goscript_common.openParenBytes)
			for (let __goscriptRangeTarget1 = pointerChain, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), i = 0; i < __goscriptRangeWindow1.length; i++) {
				let addr = $.uint((__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + i] as number), 64)
				if (i > 0) {
					await $.pointerValue<Exclude<io.Writer, null>>((d$ as dumpState).w).Write(__goscript_common.pointerChainBytes)
				}
				await __goscript_common.printHexPtr((d$ as dumpState).w, addr)
			}
			await $.pointerValue<Exclude<io.Writer, null>>((d$ as dumpState).w).Write(__goscript_common.closeParenBytes)
		}

		// Display dereferenced value.
		await $.pointerValue<Exclude<io.Writer, null>>((d$ as dumpState).w).Write(__goscript_common.openParenBytes)
		switch ((true as boolean)) {
			case nilFound:
			{
				await $.pointerValue<Exclude<io.Writer, null>>((d$ as dumpState).w).Write(__goscript_common.nilAngleBytes)
				break
			}
			case cycleFound:
			{
				await $.pointerValue<Exclude<io.Writer, null>>((d$ as dumpState).w).Write(__goscript_common.circularBytes)
				break
			}
			default:
			{
				;(d$ as dumpState).ignoreNextType = true
				await (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as dumpState).dump(ve) : dumpState.prototype.dump.call(d, ve))
				break
			}
		}
		await $.pointerValue<Exclude<io.Writer, null>>((d$ as dumpState).w).Write(__goscript_common.closeParenBytes)
	}

	public async dumpSlice(v: reflect.Value): globalThis.Promise<void> {
		const d: dumpState | $.VarRef<dumpState> | null = this;
		const d$: dumpState = d == null ? $.pointerTarget<dumpState>(d) : (d as any).__isVarRef === true ? (d as any).value : (d as any).__goValue === undefined ? (d as any) : $.pointerTarget<dumpState>(d)
		// Determine whether this type should be hex dumped or not.  Also,
		// for types which should be hexdumped, try to use the underlying data
		// first, then fall back to trying to convert them to a uint8 slice.
		let buf: $.Slice<number> = null! as $.Slice<number>
		let doConvert = false
		let doHexDump = false
		let numEntries = $.markAsStructValue($.cloneStructValue(v)).Len()
		if (numEntries > 0) {
			let vt = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(v)).Index(0))).Type()
			let vts = (__goscriptAwait = (vt !== null && (vt as any).__isVarRef !== true && (vt as any).__goValue === undefined ? (vt as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(vt)).String(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			switch ((true as boolean)) {
				case await (cCharRE !== null && (cCharRE as any).__isVarRef !== true && (cCharRE as any).__goValue === undefined ? ((cCharRE as any) as regexp.Regexp).MatchString(vts) : regexp.Regexp.prototype.MatchString.call(cCharRE, vts)):
				{
				}
				case await (cUnsignedCharRE !== null && (cUnsignedCharRE as any).__isVarRef !== true && (cUnsignedCharRE as any).__goValue === undefined ? ((cUnsignedCharRE as any) as regexp.Regexp).MatchString(vts) : regexp.Regexp.prototype.MatchString.call(cUnsignedCharRE, vts)):
				{
				}
				case await (cUint8tCharRE !== null && (cUint8tCharRE as any).__isVarRef !== true && (cUint8tCharRE as any).__goValue === undefined ? ((cUint8tCharRE as any) as regexp.Regexp).MatchString(vts) : regexp.Regexp.prototype.MatchString.call(cUint8tCharRE, vts)):
				{
					doConvert = true
					break
				}
				case (__goscriptAwait = (vt !== null && (vt as any).__isVarRef !== true && (vt as any).__goValue === undefined ? (vt as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(vt)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 8:
				{
					let vs = $.markAsStructValue($.cloneStructValue(v))
					if (!$.markAsStructValue($.cloneStructValue(vs)).CanInterface() || !$.markAsStructValue($.cloneStructValue(vs)).CanAddr()) {
						vs = $.assignStruct(vs, __goscript_bypasssafe.unsafeReflectValue(vs))
					}
					if (!true) {
						vs = $.assignStruct(vs, $.markAsStructValue($.cloneStructValue(vs)).Slice(0, numEntries))

						// Use the existing uint8 slice if it can be
						// type asserted.
						let iface = $.markAsStructValue($.cloneStructValue(vs)).Interface()
						{
							let __goscriptTuple0: any = $.typeAssertTuple<$.Slice<number>>(iface, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))
							let slice: $.Slice<number> = __goscriptTuple0[0]
							let ok = __goscriptTuple0[1]
							if (ok) {
								buf = slice
								doHexDump = true
								break
							}
						}
					}

					// The underlying data needs to be converted if it can't
					// be type asserted to a uint8 slice.
					doConvert = true
					break
				}
			}

			// Copy and convert the underlying type if needed.
			if (doConvert && (__goscriptAwait = (vt !== null && (vt as any).__isVarRef !== true && (vt as any).__goValue === undefined ? (vt as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(vt)).ConvertibleTo($.pointerValueOrNil(uint8Type)!), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
				// Convert and copy each element into a uint8 byte
				// slice.
				buf = $.makeSlice<number>(numEntries, undefined, "byte")
				for (let __goscriptSliceWindow0 = $.sliceRange(buf), i = 0; i < numEntries; i++) {
					let vv = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(v)).Index(i)));
					;(__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)] = $.uint($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(vv)).Convert($.pointerValueOrNil(uint8Type)!))).Uint(), 8)
				}
				doHexDump = true
			}
		}

		// Hexdump the entire slice as needed.
		if (doHexDump) {
			let indent = strings.Repeat($.pointerValue<__goscript_config.ConfigState>((d$ as dumpState).cs).Indent, (d$ as dumpState).depth)
			let str = $.concatString(indent, await hex.Dump(buf))
			str = strings.Replace(str, "\n", $.concatString("\n", indent), -1)
			str = strings.TrimRight(str, $.pointerValue<__goscript_config.ConfigState>((d$ as dumpState).cs).Indent)
			await $.pointerValue<Exclude<io.Writer, null>>((d$ as dumpState).w).Write($.stringToBytes(str))
			return
		}

		// Recursively call dump for each item.
		for (let i = 0; i < numEntries; i++) {
			await dumpState.prototype.dump.call(d, (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as dumpState).unpackValue($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(v)).Index(i)))) : dumpState.prototype.unpackValue.call(d, $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(v)).Index(i))))))
			if (i < (numEntries - 1)) {
				await $.pointerValue<Exclude<io.Writer, null>>((d$ as dumpState).w).Write(__goscript_common.commaNewlineBytes)
			} else {
				await $.pointerValue<Exclude<io.Writer, null>>((d$ as dumpState).w).Write(__goscript_common.newlineBytes)
			}
		}
	}

	public async indent(): globalThis.Promise<void> {
		let d: dumpState | $.VarRef<dumpState> | null = this;
		const d$: dumpState = d == null ? $.pointerTarget<dumpState>(d) : (d as any).__isVarRef === true ? (d as any).value : (d as any).__goValue === undefined ? (d as any) : $.pointerTarget<dumpState>(d)
		if ((d$ as dumpState).ignoreNextIndent) {
			;(d$ as dumpState).ignoreNextIndent = false
			return
		}
		await $.pointerValue<Exclude<io.Writer, null>>((d$ as dumpState).w).Write(bytes.Repeat($.stringToBytes($.pointerValue<__goscript_config.ConfigState>((d$ as dumpState).cs).Indent), (d$ as dumpState).depth))
	}

	public unpackValue(v: reflect.Value): reflect.Value {
		const d: dumpState | $.VarRef<dumpState> | null = this;
		if (($.markAsStructValue($.cloneStructValue(v)).Kind() == 20) && !$.markAsStructValue($.cloneStructValue(v)).IsNil()) {
			v = $.assignStruct(v, $.markAsStructValue($.cloneStructValue(v)).Elem())
		}
		return $.markAsStructValue($.cloneStructValue(v))
	}

	static __typeInfo = $.registerStructType(
		"spew.dumpState",
		() => new dumpState(),
		() => [$.methodSignature("dump", [["v", "reflect.Value"]], [], true), $.methodSignature("dumpPtr", [["v", "reflect.Value"]], [], true), $.methodSignature("dumpSlice", [["v", "reflect.Value"]], [], true), $.methodSignature("indent", [], [], true), $.methodSignature("unpackValue", [["v", "reflect.Value"]], ["reflect.Value"], true)],
		dumpState,
		() => [/* @__PURE__ */ $.structField("w", "io.Writer", [0], 0, false, { pkgPath: "github.com/davecgh/go-spew/spew" }), /* @__PURE__ */ $.structField("depth", /* @__PURE__ */ $.basicType("int"), [1], 16, false, { pkgPath: "github.com/davecgh/go-spew/spew" }), /* @__PURE__ */ $.structField("pointers", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("uintptr"), /* @__PURE__ */ $.basicType("int")), [2], 24, false, { pkgPath: "github.com/davecgh/go-spew/spew" }), /* @__PURE__ */ $.structField("ignoreNextType", /* @__PURE__ */ $.basicType("bool"), [3], 32, false, { pkgPath: "github.com/davecgh/go-spew/spew" }), /* @__PURE__ */ $.structField("ignoreNextIndent", /* @__PURE__ */ $.basicType("bool"), [4], 33, false, { pkgPath: "github.com/davecgh/go-spew/spew" }), /* @__PURE__ */ $.structField("cs", /* @__PURE__ */ $.pointerType("spew.ConfigState"), [5], 40, false, { pkgPath: "github.com/davecgh/go-spew/spew" })]
	)
}

export let uint8Type: reflect.Type | null = reflect.TypeOf($.basicInterfaceValue($.uint(0, 8), "uint8"))

export function __goscript_set_uint8Type(__goscriptValue: reflect.Type | null): void {
	uint8Type = __goscriptValue
}

export let cCharRE: regexp.Regexp | $.VarRef<regexp.Regexp> | null = await regexp.MustCompile("^.*\\._Ctype_char$")

export function __goscript_set_cCharRE(__goscriptValue: regexp.Regexp | $.VarRef<regexp.Regexp> | null): void {
	cCharRE = __goscriptValue
}

export let cUnsignedCharRE: regexp.Regexp | $.VarRef<regexp.Regexp> | null = await regexp.MustCompile("^.*\\._Ctype_unsignedchar$")

export function __goscript_set_cUnsignedCharRE(__goscriptValue: regexp.Regexp | $.VarRef<regexp.Regexp> | null): void {
	cUnsignedCharRE = __goscriptValue
}

export let cUint8tCharRE: regexp.Regexp | $.VarRef<regexp.Regexp> | null = await regexp.MustCompile("^.*\\._Ctype_uint8_t$")

export function __goscript_set_cUint8tCharRE(__goscriptValue: regexp.Regexp | $.VarRef<regexp.Regexp> | null): void {
	cUint8tCharRE = __goscriptValue
}

export async function fdump(cs: __goscript_config.ConfigState | $.VarRef<__goscript_config.ConfigState> | null, w: io.Writer | null, a: $.Slice<any>): globalThis.Promise<void> {
	for (let __goscriptRangeTarget2 = a, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow2.length; __rangeIndex++) {
		let arg = (__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + __rangeIndex] as any)
		if (arg == null) {
			await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? (w as Exclude<io.Writer, null>) : $.pointerValue<Exclude<io.Writer, null>>(w)).Write(__goscript_common.interfaceBytes)
			await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? (w as Exclude<io.Writer, null>) : $.pointerValue<Exclude<io.Writer, null>>(w)).Write(__goscript_common.spaceBytes)
			await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? (w as Exclude<io.Writer, null>) : $.pointerValue<Exclude<io.Writer, null>>(w)).Write(__goscript_common.nilAngleBytes)
			await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? (w as Exclude<io.Writer, null>) : $.pointerValue<Exclude<io.Writer, null>>(w)).Write(__goscript_common.newlineBytes)
			continue
		}

		let d = $.varRef(new dumpState({w: w, cs: cs}, true))
		d.value.pointers = $.makeMap<number, number>()
		await d.value.dump($.markAsStructValue($.cloneStructValue(reflect.ValueOf(arg))))
		await $.pointerValue<Exclude<io.Writer, null>>(d.value.w).Write(__goscript_common.newlineBytes)
	}
}

export async function Fdump(w: io.Writer | null, a: $.Slice<any>): globalThis.Promise<void> {
	await fdump(__goscript_config.Config, w, a)
}

export async function Sdump(a: $.Slice<any>): globalThis.Promise<string> {
	let buf: $.VarRef<bytes.Buffer> = $.varRef($.markAsStructValue(new bytes.Buffer()))
	await fdump(__goscript_config.Config, $.interfaceValue<io.Writer | null>(buf, "*bytes.Buffer", /* @__PURE__ */ $.pointerType("bytes.Buffer")), a)
	return buf.value.String()
}

export async function Dump(a: $.Slice<any>): globalThis.Promise<void> {
	await fdump(__goscript_config.Config, $.interfaceValue<io.Writer | null>(os.Stdout, "*os.File", /* @__PURE__ */ $.pointerType("os.File")), a)
}

var __goscriptAwait: any
