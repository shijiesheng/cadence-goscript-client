// Generated file based on tabwriter.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as io from "@goscript/io/index.js"

import * as utf8 from "@goscript/unicode/utf8/index.js"
import "@goscript/fmt/index.js"
import "@goscript/io/index.js"
import "@goscript/unicode/utf8/index.js"

$.registerTypePackagePath("text/tabwriter", ["tabwriter.cell", "tabwriter.Writer", "tabwriter.osError"])

export class cell {
	public get size(): number {
		return this._fields.size
	}

	public set size(value: number) {
		this._fields.size = value
	}

	public get width(): number {
		return this._fields.width
	}

	public set width(value: number) {
		this._fields.width = value
	}

	public get htab(): boolean {
		return this._fields.htab
	}

	public set htab(value: boolean) {
		this._fields.htab = value
	}

	public _fields: {
		size: number
		width: number
		htab: boolean
	}

	constructor(init?: Partial<{size?: number, width?: number, htab?: boolean}>, __goscriptValue?: boolean) {
		this._fields = {
			size: init?.size ?? (0 as number),
			width: init?.width ?? (0 as number),
			htab: init?.htab ?? (false as boolean)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): cell {
		return new cell(this, true)
	}

	public __goscriptAssign(source: cell): void {
		const target = this._fields
		const values = source._fields
		target.size = values.size
		target.width = values.width
		target.htab = values.htab
	}

	static __typeInfo = $.registerStructType(
		"tabwriter.cell",
		() => new cell(),
		() => [],
		cell,
		() => [/* @__PURE__ */ $.structField("size", /* @__PURE__ */ $.basicType("int"), [0], 0, false, { pkgPath: "text/tabwriter" }), /* @__PURE__ */ $.structField("width", /* @__PURE__ */ $.basicType("int"), [1], 8, false, { pkgPath: "text/tabwriter" }), /* @__PURE__ */ $.structField("htab", /* @__PURE__ */ $.basicType("bool"), [2], 16, false, { pkgPath: "text/tabwriter" })]
	)
}

export class Writer {
	// configuration
	public get output(): io.Writer | null {
		return this._fields.output
	}

	public set output(value: io.Writer | null) {
		this._fields.output = value
	}

	public get minwidth(): number {
		return this._fields.minwidth
	}

	public set minwidth(value: number) {
		this._fields.minwidth = value
	}

	public get tabwidth(): number {
		return this._fields.tabwidth
	}

	public set tabwidth(value: number) {
		this._fields.tabwidth = value
	}

	public get padding(): number {
		return this._fields.padding
	}

	public set padding(value: number) {
		this._fields.padding = value
	}

	public get padbytes(): Uint8Array {
		return this._fields.padbytes
	}

	public set padbytes(value: Uint8Array) {
		this._fields.padbytes = value
	}

	public get flags(): number {
		return this._fields.flags
	}

	public set flags(value: number) {
		this._fields.flags = value
	}

	// current state
	public get buf(): $.Slice<number> {
		return this._fields.buf
	}

	public set buf(value: $.Slice<number>) {
		this._fields.buf = value
	}

	public get pos(): number {
		return this._fields.pos
	}

	public set pos(value: number) {
		this._fields.pos = value
	}

	public get cell(): cell {
		return this._fields.cell
	}

	public set cell(value: cell) {
		this._fields.cell = value
	}

	public get endChar(): number {
		return this._fields.endChar
	}

	public set endChar(value: number) {
		this._fields.endChar = value
	}

	public get lines(): $.Slice<$.Slice<cell>> {
		return this._fields.lines
	}

	public set lines(value: $.Slice<$.Slice<cell>>) {
		this._fields.lines = value
	}

	public get widths(): $.Slice<number> {
		return this._fields.widths
	}

	public set widths(value: $.Slice<number>) {
		this._fields.widths = value
	}

	public _fields: {
		output: io.Writer | null
		minwidth: number
		tabwidth: number
		padding: number
		padbytes: Uint8Array
		flags: number
		buf: $.Slice<number>
		pos: number
		cell: cell
		endChar: number
		lines: $.Slice<$.Slice<cell>>
		widths: $.Slice<number>
	}

	constructor(init?: Partial<{output?: io.Writer | null, minwidth?: number, tabwidth?: number, padding?: number, padbytes?: Uint8Array, flags?: number, buf?: $.Slice<number>, pos?: number, cell?: cell, endChar?: number, lines?: $.Slice<$.Slice<cell>>, widths?: $.Slice<number>}>, __goscriptValue?: boolean) {
		this._fields = {
			output: init?.output ?? (null! as io.Writer | null),
			minwidth: init?.minwidth ?? (0 as number),
			tabwidth: init?.tabwidth ?? (0 as number),
			padding: init?.padding ?? (0 as number),
			padbytes: init?.padbytes !== undefined ? $.cloneArrayValue(init.padbytes, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 8)) : $.arrayValue(new Uint8Array(8)),
			flags: init?.flags ?? (0 as number),
			buf: init?.buf ?? (null! as $.Slice<number>),
			pos: init?.pos ?? (0 as number),
			cell: init?.cell ? init.cell.clone() : new cell(undefined, true),
			endChar: init?.endChar ?? (0 as number),
			lines: init?.lines ?? (null! as $.Slice<$.Slice<cell>>),
			widths: init?.widths ?? (null! as $.Slice<number>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Writer {
		return new Writer(this, true)
	}

	public __goscriptAssign(source: Writer): void {
		const target = this._fields
		const values = source._fields
		target.output = $.assignFieldValue(target.output, values.output, "io.Writer")
		target.minwidth = values.minwidth
		target.tabwidth = values.tabwidth
		target.padding = values.padding
		target.padbytes = $.assignFieldValue(target.padbytes, values.padbytes, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 8))
		target.flags = values.flags
		target.buf = values.buf
		target.pos = values.pos
		$.assignStruct(target.cell, values.cell)
		target.endChar = values.endChar
		target.lines = values.lines
		target.widths = values.widths
	}

	public async Flush(): globalThis.Promise<$.GoError> {
		const b: Writer | $.VarRef<Writer> | null = this;
		return (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as Writer).flush() : Writer.prototype.flush.call(b))
	}

	public Init(output: io.Writer | null, minwidth: number, tabwidth: number, padding: number, padchar: number, flags: number): Writer | $.VarRef<Writer> | null {
		let b: Writer | $.VarRef<Writer> | null = this;
		const b$: Writer = b == null ? $.pointerTarget<Writer>(b) : (b as any).__isVarRef === true ? (b as any).value : (b as any).__goValue === undefined ? (b as any) : $.pointerTarget<Writer>(b)
		if (((minwidth < 0) || (tabwidth < 0)) || (padding < 0)) {
			$.panic("negative minwidth, tabwidth, or padding")
		}
		;(b$ as Writer).output = output;
		;(b$ as Writer).minwidth = minwidth;
		;(b$ as Writer).tabwidth = tabwidth;
		;(b$ as Writer).padding = padding
		for (let __goscriptRangeTarget0 = (b$ as Writer).padbytes, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), i = 0; i < __goscriptRangeWindow0.length; i++) {
			;(b$ as Writer).padbytes[i] = padchar
		}
		if (padchar == 9) {
			// tab padding enforces left-alignment
			flags = $.uint($.uint64AndNot(flags, 4), 64)
		}
		;(b$ as Writer).flags = flags

		void (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as Writer).reset() : Writer.prototype.reset.call(b))

		return b
	}

	public async Write(buf: $.Slice<number>): globalThis.Promise<[number, $.GoError]> {
		const b: Writer | $.VarRef<Writer> | null = this;
		let n: number = 0
		let err: $.VarRef<$.GoError> = $.varRef(null! as $.GoError)
		const __defer = new $.AsyncDisposableStack()
		try {
			const b$: Writer = b == null ? $.pointerTarget<Writer>(b) : (b as any).__isVarRef === true ? (b as any).value : (b as any).__goValue === undefined ? (b as any) : $.pointerTarget<Writer>(b)
			const __goscriptDeferCallee0 = $.functionValue(((__receiver) => (err: $.VarRef<$.GoError> | null, op: string) => __receiver.handlePanic(err, op))((b$ as Writer)), ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("error"), /* @__PURE__ */ $.basicType("string")], results: [] } as $.FunctionTypeInfo), "text/tabwriter.(*Writer).handlePanic-fm")
			const __goscriptDeferArg0 = err
			__defer.defer(async () => { await __goscriptDeferCallee0(__goscriptDeferArg0, "Write") })

			// split text into cells
			n = 0
			for (let __goscriptRangeTarget1 = buf, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), i = 0; i < __goscriptRangeWindow1.length; i++) {
				let ch = $.uint((__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + i] as number), 8)
				if ((b$ as Writer).endChar == 0) {
					// outside escape
					switch (ch) {
						case 9:
						case 11:
						case 10:
						case 12:
						{
							void (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as Writer).append($.goSlice(buf, n, i)) : Writer.prototype.append.call(b, $.goSlice(buf, n, i)))
							void (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as Writer).updateWidth() : Writer.prototype.updateWidth.call(b))
							n = i + 1
							let ncells = (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as Writer).terminateCell(ch == 9) : Writer.prototype.terminateCell.call(b, ch == 9))
							if ((ch == 10) || (ch == 12)) {
								// terminate line
								void (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as Writer).addLine(ch == 12) : Writer.prototype.addLine.call(b, ch == 12))
								if ((ch == 12) || (ncells == 1)) {
									// A '\f' always forces a flush. Otherwise, if the previous
									// line has only one cell which does not have an impact on
									// the formatting of the following lines (the last cell per
									// line is ignored by format()), thus we can flush the
									// Writer contents.
									await (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as Writer).flushNoDefers() : Writer.prototype.flushNoDefers.call(b))
									if ((ch == 12) && (($.uint($.uint64And((b$ as Writer).flags, 32n), 64)) != 0)) {
										// indicate section break
										await (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as Writer).write0(hbar) : Writer.prototype.write0.call(b, hbar))
									}
								}
							}
							break
						}
						case 255:
						{
							void (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as Writer).append($.goSlice(buf, n, i)) : Writer.prototype.append.call(b, $.goSlice(buf, n, i)))
							void (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as Writer).updateWidth() : Writer.prototype.updateWidth.call(b))
							n = i
							if (($.uint($.uint64And((b$ as Writer).flags, 2n), 64)) != 0) {
								n++
							}
							void (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as Writer).startEscape(255) : Writer.prototype.startEscape.call(b, 255))
							break
						}
						case 60:
						case 38:
						{
							if (($.uint($.uint64And((b$ as Writer).flags, 1n), 64)) != 0) {
								// begin of tag/entity
								void (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as Writer).append($.goSlice(buf, n, i)) : Writer.prototype.append.call(b, $.goSlice(buf, n, i)))
								void (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as Writer).updateWidth() : Writer.prototype.updateWidth.call(b))
								n = i
								void (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as Writer).startEscape(ch) : Writer.prototype.startEscape.call(b, ch))
							}
							break
						}
					}
				} else {
					// inside escape
					if (ch == (b$ as Writer).endChar) {
						// end of tag/entity
						let j = i + 1
						if ((ch == 255) && (($.uint($.uint64And((b$ as Writer).flags, 2n), 64)) != 0)) {
							j = i
						}
						void (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as Writer).append($.goSlice(buf, n, j)) : Writer.prototype.append.call(b, $.goSlice(buf, n, j)))
						n = i + 1
						void (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as Writer).endEscape() : Writer.prototype.endEscape.call(b))
					}
				}
			}

			// append leftover text
			void (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as Writer).append($.goSlice(buf, n, undefined)) : Writer.prototype.append.call(b, $.goSlice(buf, n, undefined)))
			n = $.sliceLen(buf)
			await __defer.dispose()
			return [n, err.value]
			await __defer.dispose()
		} catch (e) {
			await __defer.disposePanic(e)
			if (!$.recovered(e)) {
				throw e
			}
		}
		return [n, err.value]
	}

	public addLine(flushed: boolean): void {
		let b: Writer | $.VarRef<Writer> | null = this;
		const b$: Writer = b == null ? $.pointerTarget<Writer>(b) : (b as any).__isVarRef === true ? (b as any).value : (b as any).__goValue === undefined ? (b as any) : $.pointerTarget<Writer>(b)
		// Grow slice instead of appending,
		// as that gives us an opportunity
		// to re-use an existing []cell.
		{
			let n = $.sliceLen((b$ as Writer).lines) + 1
			if (n <= $.cap((b$ as Writer).lines)) {
				;(b$ as Writer).lines = $.goSlice((b$ as Writer).lines, undefined, n)
				$.sliceElems((b$ as Writer).lines!)[$.sliceSlot((b$ as Writer).lines!, n - 1)] = $.goSlice($.arrayIndex((b$ as Writer).lines!, n - 1), undefined, 0)
			} else {
				;(b$ as Writer).lines = $.appendOne((b$ as Writer).lines, null, $.appendZeros.nil)
			}
		}

		if (!flushed) {
			// The previous line is probably a good indicator
			// of how many cells the current line will have.
			// If the current line's capacity is smaller than that,
			// abandon it and make a new one.
			{
				let n = $.sliceLen((b$ as Writer).lines)
				if (n >= 2) {
					{
						let prev = $.sliceLen($.arrayIndex((b$ as Writer).lines!, n - 2))
						if (prev > $.cap($.arrayIndex((b$ as Writer).lines!, n - 1))) {
							$.sliceElems((b$ as Writer).lines!)[$.sliceSlot((b$ as Writer).lines!, n - 1)] = $.makeSlice<cell>(0, prev, undefined, () => new cell(undefined, true))
						}
					}
				}
			}
		}
	}

	public append(text: $.Slice<number>): void {
		let b: Writer | $.VarRef<Writer> | null = this;
		const b$: Writer = b == null ? $.pointerTarget<Writer>(b) : (b as any).__isVarRef === true ? (b as any).value : (b as any).__goValue === undefined ? (b as any) : $.pointerTarget<Writer>(b);
		;(b$ as Writer).buf = $.appendSlice((b$ as Writer).buf, text, $.byteSliceHint);
		;(b$ as Writer).cell.size = (b$ as Writer).cell.size + ($.sliceLen(text))
	}

	public async dump(): globalThis.Promise<void> {
		const b: Writer | $.VarRef<Writer> | null = this;
		const b$: Writer = b == null ? $.pointerTarget<Writer>(b) : (b as any).__isVarRef === true ? (b as any).value : (b as any).__goValue === undefined ? (b as any) : $.pointerTarget<Writer>(b)
		let pos = 0
		for (let __goscriptRangeTarget3 = (b$ as Writer).lines, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget3), i = 0; i < __goscriptRangeWindow2.length; i++) {
			let line = (__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + i] as $.Slice<cell>)
			await $.print("(", i, ") ")
			for (let __goscriptRangeTarget2 = line, __goscriptRangeWindow3 = $.sliceRange(__goscriptRangeTarget2), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow3.length; __rangeIndex++) {
				let c = ((__goscriptRangeWindow3.backing[__goscriptRangeWindow3.offset + __rangeIndex] as cell)).clone()
				await $.print("[", $.bytesToString($.goSlice((b$ as Writer).buf, pos, pos + c.size)), "]")
				pos = pos + (c.size)
			}
			await $.print("\n")
		}
		await $.print("\n")
	}

	public endEscape(): void {
		let b: Writer | $.VarRef<Writer> | null = this;
		const b$: Writer = b == null ? $.pointerTarget<Writer>(b) : (b as any).__isVarRef === true ? (b as any).value : (b as any).__goValue === undefined ? (b as any) : $.pointerTarget<Writer>(b)
		switch ((b$ as Writer).endChar) {
			case 255:
			{
				void (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as Writer).updateWidth() : Writer.prototype.updateWidth.call(b))
				if (($.uint($.uint64And((b$ as Writer).flags, 2n), 64)) == 0) {
					;(b$ as Writer).cell.width = (b$ as Writer).cell.width - (2)
				}
				break
			}
			case 62:
			{
				break
			}
			case 59:
			{
				;(b$ as Writer).cell.width++
				break
			}
		}
		;(b$ as Writer).pos = $.sliceLen((b$ as Writer).buf);
		;(b$ as Writer).endChar = 0
	}

	public async flush(): globalThis.Promise<$.GoError> {
		const b: Writer | $.VarRef<Writer> | null = this;
		let err: $.VarRef<$.GoError> = $.varRef(null! as $.GoError)
		const __defer = new $.AsyncDisposableStack()
		try {
			const __goscriptDeferCallee1 = $.functionValue(((__receiver) => (err: $.VarRef<$.GoError> | null, op: string) => __receiver.handlePanic(err, op))($.pointerValue<Writer>(b)), ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("error"), /* @__PURE__ */ $.basicType("string")], results: [] } as $.FunctionTypeInfo), "text/tabwriter.(*Writer).handlePanic-fm")
			const __goscriptDeferArg1 = err
			__defer.defer(async () => { await __goscriptDeferCallee1(__goscriptDeferArg1, "Flush") })
			await (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as Writer).flushNoDefers() : Writer.prototype.flushNoDefers.call(b))
			const __goscriptReturn0: $.GoError = null
			err.value = __goscriptReturn0
			await __defer.dispose()
			return err.value
			await __defer.dispose()
		} catch (e) {
			await __defer.disposePanic(e)
			if (!$.recovered(e)) {
				throw e
			}
		}
		return err.value
	}

	public async flushNoDefers(): globalThis.Promise<void> {
		const b: Writer | $.VarRef<Writer> | null = this;
		const b$: Writer = b == null ? $.pointerTarget<Writer>(b) : (b as any).__isVarRef === true ? (b as any).value : (b as any).__goValue === undefined ? (b as any) : $.pointerTarget<Writer>(b)
		// add current cell if not empty
		if ((b$ as Writer).cell.size > 0) {
			if ((b$ as Writer).endChar != 0) {
				// inside escape - terminate it even if incomplete
				void (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as Writer).endEscape() : Writer.prototype.endEscape.call(b))
			}
			void (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as Writer).terminateCell(false) : Writer.prototype.terminateCell.call(b, false))
		}

		// format contents of buffer
		await (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as Writer).format(0, 0, $.sliceLen((b$ as Writer).lines)) : Writer.prototype.format.call(b, 0, 0, $.sliceLen((b$ as Writer).lines)))
		void (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as Writer).reset() : Writer.prototype.reset.call(b))
	}

	public async format(pos0: number, line0: number, line1: number): globalThis.Promise<number> {
		let b: Writer | $.VarRef<Writer> | null = this;
		let pos: number = 0
		const b$: Writer = b == null ? $.pointerTarget<Writer>(b) : (b as any).__isVarRef === true ? (b as any).value : (b as any).__goValue === undefined ? (b as any) : $.pointerTarget<Writer>(b)
		pos = pos0
		let column = $.sliceLen((b$ as Writer).widths)
		for (let _this: number = line0; _this < line1; _this++) {
			let line: $.Slice<cell> = $.arrayIndex((b$ as Writer).lines!, _this)

			if (column >= ($.sliceLen(line) - 1)) {
				continue
			}
			// cell exists in this column => this line
			// has more cells than the previous line
			// (the last cell per line is ignored because cells are
			// tab-terminated; the last cell per line describes the
			// text before the newline/formfeed and does not belong
			// to a column)

			// print unprinted lines until beginning of block
			pos = await (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as Writer).writeLines(pos, line0, _this) : Writer.prototype.writeLines.call(b, pos, line0, _this))
			line0 = _this

			// column block begin
			let width = (b$ as Writer).minwidth
			let discardable = true
			for (; _this < line1; _this++) {
				line = $.arrayIndex((b$ as Writer).lines!, _this)
				if (column >= ($.sliceLen(line) - 1)) {
					break
				}
				// cell exists in this column
				let c = ($.arrayIndex(line!, column)).clone()
				// update width
				{
					let w = c.width + (b$ as Writer).padding
					if (w > width) {
						width = w
					}
				}
				// update discardable
				if ((c.width > 0) || c.htab) {
					discardable = false
				}
			}
			// column block end

			// discard empty columns if necessary
			if (discardable && (($.uint($.uint64And((b$ as Writer).flags, 8n), 64)) != 0)) {
				width = 0
			}

			// format and print all columns to the right of this column
			// (we know the widths of this column and all columns to the left)
			;(b$ as Writer).widths = $.appendOne((b$ as Writer).widths, width)
			pos = await (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as Writer).format(pos, line0, _this) : Writer.prototype.format.call(b, pos, line0, _this));
			;(b$ as Writer).widths = $.goSlice((b$ as Writer).widths, 0, $.sliceLen((b$ as Writer).widths) - 1)
			line0 = _this
		}

		// print unprinted lines until end
		return (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as Writer).writeLines(pos, line0, line1) : Writer.prototype.writeLines.call(b, pos, line0, line1))
	}

	public async handlePanic(err: $.VarRef<$.GoError> | null, op: string): globalThis.Promise<void> {
		const b: Writer | $.VarRef<Writer> | null = this;
		{
			let e = $.recover()
			if (e != null) {
				if ($.stringEqual(op, "Flush")) {
					// If Flush ran into a panic, we still need to reset.
					void (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as Writer).reset() : Writer.prototype.reset.call(b))
				}
				{
					let [nerr, ok] = $.typeAssertTuple<osError>(e, "tabwriter.osError")
					if (ok) {
						err!.value = nerr.err
						return
					}
				}
				$.panic(await fmt.Sprintf("tabwriter: panic during %s (%v)", op, e))
			}
		}
	}

	public reset(): void {
		let b: Writer | $.VarRef<Writer> | null = this;
		const b$: Writer = b == null ? $.pointerTarget<Writer>(b) : (b as any).__isVarRef === true ? (b as any).value : (b as any).__goValue === undefined ? (b as any) : $.pointerTarget<Writer>(b);
		;(b$ as Writer).buf = $.goSlice((b$ as Writer).buf, undefined, 0);
		;(b$ as Writer).pos = 0
		$.assignStruct((b$ as Writer).cell, new cell(undefined, true));
		;(b$ as Writer).endChar = 0;
		;(b$ as Writer).lines = $.goSlice((b$ as Writer).lines, 0, 0);
		;(b$ as Writer).widths = $.goSlice((b$ as Writer).widths, 0, 0)
		void (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as Writer).addLine(true) : Writer.prototype.addLine.call(b, true))
	}

	public startEscape(ch: number): void {
		let b: Writer | $.VarRef<Writer> | null = this;
		const b$: Writer = b == null ? $.pointerTarget<Writer>(b) : (b as any).__isVarRef === true ? (b as any).value : (b as any).__goValue === undefined ? (b as any) : $.pointerTarget<Writer>(b)
		switch (ch) {
			case 255:
			{
				;(b$ as Writer).endChar = 255
				break
			}
			case 60:
			{
				;(b$ as Writer).endChar = 62
				break
			}
			case 38:
			{
				;(b$ as Writer).endChar = 59
				break
			}
		}
	}

	public terminateCell(htab: boolean): number {
		let b: Writer | $.VarRef<Writer> | null = this;
		const b$: Writer = b == null ? $.pointerTarget<Writer>(b) : (b as any).__isVarRef === true ? (b as any).value : (b as any).__goValue === undefined ? (b as any) : $.pointerTarget<Writer>(b);
		;(b$ as Writer).cell.htab = htab
		let line = $.indexRef((b$ as Writer).lines!, $.sliceLen((b$ as Writer).lines) - 1)
		line!.value = $.appendOne($.pointerValue<$.Slice<cell>>(line), ((b$ as Writer).cell).clone())
		$.assignStruct((b$ as Writer).cell, new cell(undefined, true))
		return $.sliceLen($.pointerValue<$.Slice<cell>>(line))
	}

	public updateWidth(): void {
		let b: Writer | $.VarRef<Writer> | null = this;
		const b$: Writer = b == null ? $.pointerTarget<Writer>(b) : (b as any).__isVarRef === true ? (b as any).value : (b as any).__goValue === undefined ? (b as any) : $.pointerTarget<Writer>(b);
		;(b$ as Writer).cell.width = (b$ as Writer).cell.width + (utf8.RuneCount($.goSlice((b$ as Writer).buf, (b$ as Writer).pos, undefined)));
		;(b$ as Writer).pos = $.sliceLen((b$ as Writer).buf)
	}

	public async write0(buf: $.Slice<number>): globalThis.Promise<void> {
		const b: Writer | $.VarRef<Writer> | null = this;
		let [n, err] = await $.pointerValue<Exclude<io.Writer, null>>($.pointerValue<Writer>(b).output).Write(buf)
		if ((n != $.sliceLen(buf)) && (err == null)) {
			err = io.ErrShortWrite
		}
		if (err != null) {
			$.panic($.interfaceValue(new osError({err: err}, true), "tabwriter.osError", "tabwriter.osError"))
		}
	}

	public async writeLines(pos0: number, line0: number, line1: number): globalThis.Promise<number> {
		const b: Writer | $.VarRef<Writer> | null = this;
		let pos: number = 0
		const b$: Writer = b == null ? $.pointerTarget<Writer>(b) : (b as any).__isVarRef === true ? (b as any).value : (b as any).__goValue === undefined ? (b as any) : $.pointerTarget<Writer>(b)
		pos = pos0
		for (let i = line0; i < line1; i++) {
			let line: $.Slice<cell> = $.arrayIndex((b$ as Writer).lines!, i)

			// if TabIndent is set, use tabs to pad leading empty cells
			let useTabs = ($.uint($.uint64And((b$ as Writer).flags, 16n), 64)) != 0

			for (let __goscriptRangeTarget4 = line, __goscriptRangeWindow4 = $.sliceRange(__goscriptRangeTarget4), j = 0; j < __goscriptRangeWindow4.length; j++) {
				let c = ((__goscriptRangeWindow4.backing[__goscriptRangeWindow4.offset + j] as cell)).clone()
				if ((j > 0) && (($.uint($.uint64And((b$ as Writer).flags, 32n), 64)) != 0)) {
					// indicate column break
					await (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as Writer).write0(vbar) : Writer.prototype.write0.call(b, vbar))
				}

				if (c.size == 0) {
					// empty cell
					if (j < $.sliceLen((b$ as Writer).widths)) {
						await (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as Writer).writePadding(c.width, $.arrayIndex((b$ as Writer).widths!, j), useTabs) : Writer.prototype.writePadding.call(b, c.width, $.arrayIndex((b$ as Writer).widths!, j), useTabs))
					}
				} else {
					// non-empty cell
					useTabs = false
					if (($.uint($.uint64And((b$ as Writer).flags, 4n), 64)) == 0) {
						await (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as Writer).write0($.goSlice((b$ as Writer).buf, pos, pos + c.size)) : Writer.prototype.write0.call(b, $.goSlice((b$ as Writer).buf, pos, pos + c.size)))
						pos = pos + (c.size)
						if (j < $.sliceLen((b$ as Writer).widths)) {
							await (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as Writer).writePadding(c.width, $.arrayIndex((b$ as Writer).widths!, j), false) : Writer.prototype.writePadding.call(b, c.width, $.arrayIndex((b$ as Writer).widths!, j), false))
						}
					} else {
						if (j < $.sliceLen((b$ as Writer).widths)) {
							await (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as Writer).writePadding(c.width, $.arrayIndex((b$ as Writer).widths!, j), false) : Writer.prototype.writePadding.call(b, c.width, $.arrayIndex((b$ as Writer).widths!, j), false))
						}
						await (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as Writer).write0($.goSlice((b$ as Writer).buf, pos, pos + c.size)) : Writer.prototype.write0.call(b, $.goSlice((b$ as Writer).buf, pos, pos + c.size)))
						pos = pos + (c.size)
					}
				}
			}

			if ((i + 1) == $.sliceLen((b$ as Writer).lines)) {
				// last buffered line - we don't have a newline, so just write
				// any outstanding buffered data
				await (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as Writer).write0($.goSlice((b$ as Writer).buf, pos, pos + (b$ as Writer).cell.size)) : Writer.prototype.write0.call(b, $.goSlice((b$ as Writer).buf, pos, pos + (b$ as Writer).cell.size)))
				pos = pos + ((b$ as Writer).cell.size)
			} else {
				// not the last line - write newline
				await (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as Writer).write0(newline) : Writer.prototype.write0.call(b, newline))
			}
		}
		return pos
	}

	public async writeN(src: $.Slice<number>, n: number): globalThis.Promise<void> {
		const b: Writer | $.VarRef<Writer> | null = this;
		while (n > $.sliceLen(src)) {
			await (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as Writer).write0(src) : Writer.prototype.write0.call(b, src))
			n = n - ($.sliceLen(src))
		}
		await (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as Writer).write0($.goSlice(src, 0, n)) : Writer.prototype.write0.call(b, $.goSlice(src, 0, n)))
	}

	public async writePadding(textw: number, cellw: number, useTabs: boolean): globalThis.Promise<void> {
		const b: Writer | $.VarRef<Writer> | null = this;
		const b$: Writer = b == null ? $.pointerTarget<Writer>(b) : (b as any).__isVarRef === true ? (b as any).value : (b as any).__goValue === undefined ? (b as any) : $.pointerTarget<Writer>(b)
		if (($.arrayIndex((b$ as Writer).padbytes, 0) == 9) || useTabs) {
			// padding is done with tabs
			if ((b$ as Writer).tabwidth == 0) {
				return
			}
			// make cellw the smallest multiple of b.tabwidth
			cellw = (globalThis.Math.trunc(((cellw + (b$ as Writer).tabwidth) - 1) / (b$ as Writer).tabwidth)) * (b$ as Writer).tabwidth
			let n = cellw - textw
			if (n < 0) {
				$.panic("internal error")
			}
			await (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as Writer).writeN(tabs, globalThis.Math.trunc(((n + (b$ as Writer).tabwidth) - 1) / (b$ as Writer).tabwidth)) : Writer.prototype.writeN.call(b, tabs, globalThis.Math.trunc(((n + (b$ as Writer).tabwidth) - 1) / (b$ as Writer).tabwidth)))
			return
		}

		// padding is done with non-tab characters
		await (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as Writer).writeN($.goSlice((b$ as Writer).padbytes, 0, undefined), cellw - textw) : Writer.prototype.writeN.call(b, $.goSlice((b$ as Writer).padbytes, 0, undefined), cellw - textw))
	}

	static __typeInfo = $.registerStructType(
		"tabwriter.Writer",
		() => new Writer(),
		() => [$.methodSignature("Flush", [], ["error"], true), $.methodSignature("Init", [["output", "io.Writer"], ["minwidth", /* @__PURE__ */ $.basicType("int")], ["tabwidth", /* @__PURE__ */ $.basicType("int")], ["padding", /* @__PURE__ */ $.basicType("int")], ["padchar", /* @__PURE__ */ $.basicType("uint8")], ["flags", /* @__PURE__ */ $.basicType("uint")]], [/* @__PURE__ */ $.pointerType("tabwriter.Writer")], true), $.methodSignature("Write", [["buf", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]], true), $.methodSignature("addLine", [["flushed", /* @__PURE__ */ $.basicType("bool")]], [], true), $.methodSignature("append", [["text", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [], true), $.methodSignature("dump", [], [], true), $.methodSignature("endEscape", [], [], true), $.methodSignature("flush", [], [["err", "error"]], true), $.methodSignature("flushNoDefers", [], [], true), $.methodSignature("format", [["pos0", /* @__PURE__ */ $.basicType("int")], ["line0", /* @__PURE__ */ $.basicType("int")], ["line1", /* @__PURE__ */ $.basicType("int")]], [["pos", /* @__PURE__ */ $.basicType("int")]], true), $.methodSignature("handlePanic", [["err", /* @__PURE__ */ $.pointerType("error")], ["op", /* @__PURE__ */ $.basicType("string")]], [], true), $.methodSignature("reset", [], [], true), $.methodSignature("startEscape", [["ch", /* @__PURE__ */ $.basicType("uint8")]], [], true), $.methodSignature("terminateCell", [["htab", /* @__PURE__ */ $.basicType("bool")]], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("updateWidth", [], [], true), $.methodSignature("write0", [["buf", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [], true), $.methodSignature("writeLines", [["pos0", /* @__PURE__ */ $.basicType("int")], ["line0", /* @__PURE__ */ $.basicType("int")], ["line1", /* @__PURE__ */ $.basicType("int")]], [["pos", /* @__PURE__ */ $.basicType("int")]], true), $.methodSignature("writeN", [["src", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["n", /* @__PURE__ */ $.basicType("int")]], [], true), $.methodSignature("writePadding", [["textw", /* @__PURE__ */ $.basicType("int")], ["cellw", /* @__PURE__ */ $.basicType("int")], ["useTabs", /* @__PURE__ */ $.basicType("bool")]], [], true)],
		Writer,
		() => [/* @__PURE__ */ $.structField("output", "io.Writer", [0], 0, false, { pkgPath: "text/tabwriter" }), /* @__PURE__ */ $.structField("minwidth", /* @__PURE__ */ $.basicType("int"), [1], 16, false, { pkgPath: "text/tabwriter" }), /* @__PURE__ */ $.structField("tabwidth", /* @__PURE__ */ $.basicType("int"), [2], 24, false, { pkgPath: "text/tabwriter" }), /* @__PURE__ */ $.structField("padding", /* @__PURE__ */ $.basicType("int"), [3], 32, false, { pkgPath: "text/tabwriter" }), /* @__PURE__ */ $.structField("padbytes", /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 8), [4], 40, false, { pkgPath: "text/tabwriter" }), /* @__PURE__ */ $.structField("flags", /* @__PURE__ */ $.basicType("uint"), [5], 48, false, { pkgPath: "text/tabwriter" }), /* @__PURE__ */ $.structField("buf", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [6], 56, false, { pkgPath: "text/tabwriter" }), /* @__PURE__ */ $.structField("pos", /* @__PURE__ */ $.basicType("int"), [7], 80, false, { pkgPath: "text/tabwriter" }), /* @__PURE__ */ $.structField("cell", "tabwriter.cell", [8], 88, false, { pkgPath: "text/tabwriter" }), /* @__PURE__ */ $.structField("endChar", /* @__PURE__ */ $.basicType("uint8"), [9], 112, false, { pkgPath: "text/tabwriter" }), /* @__PURE__ */ $.structField("lines", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.sliceType("tabwriter.cell")), [10], 120, false, { pkgPath: "text/tabwriter" }), /* @__PURE__ */ $.structField("widths", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")), [11], 144, false, { pkgPath: "text/tabwriter" })]
	)
}

export class osError {
	public get err(): $.GoError {
		return this._fields.err
	}

	public set err(value: $.GoError) {
		this._fields.err = value
	}

	public _fields: {
		err: $.GoError
	}

	constructor(init?: Partial<{err?: $.GoError}>, __goscriptValue?: boolean) {
		this._fields = {
			err: init?.err ?? (null! as $.GoError)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): osError {
		return new osError(this, true)
	}

	public __goscriptAssign(source: osError): void {
		const target = this._fields
		const values = source._fields
		target.err = $.assignFieldValue(target.err, values.err, "error")
	}

	static __typeInfo = $.registerStructType(
		"tabwriter.osError",
		() => new osError(),
		() => [],
		osError,
		() => [/* @__PURE__ */ $.structField("err", "error", [0], 0, false, { pkgPath: "text/tabwriter" })]
	)
}

export const FilterHTML: number = 1

export const StripEscape: number = 2

export const AlignRight: number = 4

export const DiscardEmptyColumns: number = 8

export const TabIndent: number = 16

export const Debug: number = 32

export const Escape: number = 255

export let newline: $.Slice<number> = new Uint8Array([10]) as $.Slice<number>

export function __goscript_set_newline(__goscriptValue: $.Slice<number>): void {
	newline = __goscriptValue
}

export let tabs: $.Slice<number> = new Uint8Array([9, 9, 9, 9, 9, 9, 9, 9])

export function __goscript_set_tabs(__goscriptValue: $.Slice<number>): void {
	tabs = __goscriptValue
}

export let vbar: $.Slice<number> = new Uint8Array([124]) as $.Slice<number>

export function __goscript_set_vbar(__goscriptValue: $.Slice<number>): void {
	vbar = __goscriptValue
}

export let hbar: $.Slice<number> = new Uint8Array([45, 45, 45, 10])

export function __goscript_set_hbar(__goscriptValue: $.Slice<number>): void {
	hbar = __goscriptValue
}

export function NewWriter(output: io.Writer | null, minwidth: number, tabwidth: number, padding: number, padchar: number, flags: number): Writer | $.VarRef<Writer> | null {
	return Writer.prototype.Init.call(new Writer(), output, minwidth, tabwidth, padding, padchar, flags)
}
