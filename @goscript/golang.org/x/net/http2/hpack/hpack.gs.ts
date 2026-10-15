// Generated file based on hpack.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as errors from "@goscript/errors/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as sync from "@goscript/sync/index.js"

import * as __goscript_huffman from "./huffman.gs.ts"

import * as __goscript_static_table from "./static_table.gs.ts"

import * as __goscript_tables from "./tables.gs.ts"
import "@goscript/bytes/index.js"
import "@goscript/errors/index.js"
import "@goscript/fmt/index.js"
import "@goscript/sync/index.js"
import "./huffman.gs.ts"
import "./static_table.gs.ts"
import "./tables.gs.ts"

$.registerTypePackagePath("golang.org/x/net/http2/hpack", ["hpack.DecodingError", "hpack.InvalidIndexError", "hpack.HeaderField", "hpack.Decoder", "hpack.dynamicTable", "hpack.indexType", "hpack.undecodedString"])

export type InvalidIndexError = number

$.registerNamedValueType(
	"hpack.InvalidIndexError",
	{Error: (receiver: any, ...args: any[]) => (InvalidIndexError_Error as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")])]
);

$.registerNamedValueType(
	"*hpack.InvalidIndexError",
	{Error: (receiver: any, ...args: any[]) => (InvalidIndexError_Error as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")])]
);

export type indexType = number

$.registerNamedValueType(
	"hpack.indexType",
	{indexed: (receiver: any, ...args: any[]) => (indexType_indexed as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), sensitive: (receiver: any, ...args: any[]) => (indexType_sensitive as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("indexed", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("sensitive", [], [/* @__PURE__ */ $.basicType("bool")])]
);

$.registerNamedValueType(
	"*hpack.indexType",
	{indexed: (receiver: any, ...args: any[]) => (indexType_indexed as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), sensitive: (receiver: any, ...args: any[]) => (indexType_sensitive as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("indexed", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("sensitive", [], [/* @__PURE__ */ $.basicType("bool")])]
);

export class DecodingError {
	public get Err(): $.GoError {
		return this._fields.Err
	}

	public set Err(value: $.GoError) {
		this._fields.Err = value
	}

	public _fields: {
		Err: $.GoError
	}

	constructor(init?: Partial<{Err?: $.GoError}>, __goscriptValue?: boolean) {
		this._fields = {
			Err: init?.Err ?? (null! as $.GoError)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): DecodingError {
		return new DecodingError(this, true)
	}

	public __goscriptAssign(source: DecodingError): void {
		const target = this._fields
		const values = source._fields
		target.Err = $.assignFieldValue(target.Err, values.Err, "error")
	}

	public async Error(): globalThis.Promise<string> {
		const de = this;
		return fmt.Sprintf("decoding error: %v", (de.Err as any))
	}

	static __typeInfo = $.registerStructType(
		"hpack.DecodingError",
		() => new DecodingError(),
		() => [$.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")])],
		DecodingError,
		() => [/* @__PURE__ */ $.structField("Err", "error", [0], 0, true)]
	)
}

export class HeaderField {
	public get Name(): string {
		return this._fields.Name
	}

	public set Name(value: string) {
		this._fields.Name = value
	}

	public get Value(): string {
		return this._fields.Value
	}

	public set Value(value: string) {
		this._fields.Value = value
	}

	// Sensitive means that this header field should never be
	// indexed.
	public get Sensitive(): boolean {
		return this._fields.Sensitive
	}

	public set Sensitive(value: boolean) {
		this._fields.Sensitive = value
	}

	public _fields: {
		Name: string
		Value: string
		Sensitive: boolean
	}

	constructor(init?: Partial<{Name?: string, Value?: string, Sensitive?: boolean}>, __goscriptValue?: boolean) {
		this._fields = {
			Name: init?.Name ?? ("" as string),
			Value: init?.Value ?? ("" as string),
			Sensitive: init?.Sensitive ?? (false as boolean)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): HeaderField {
		return new HeaderField(this, true)
	}

	public __goscriptAssign(source: HeaderField): void {
		const target = this._fields
		const values = source._fields
		target.Name = values.Name
		target.Value = values.Value
		target.Sensitive = values.Sensitive
	}

	public IsPseudo(): boolean {
		const hf = this;
		return ($.stringLen(hf.Name) != 0) && ($.indexString(hf.Name, 0) == 58)
	}

	public Size(): number {
		const hf = this;
		// https://httpwg.org/specs/rfc7541.html#rfc.section.4.1
		// "The size of the dynamic table is the sum of the size of
		// its entries. The size of an entry is the sum of its name's
		// length in octets (as defined in Section 5.2), its value's
		// length in octets (see Section 5.2), plus 32.  The size of
		// an entry is calculated using the length of the name and
		// value without any Huffman encoding applied."

		// This can overflow if somebody makes a large HeaderField
		// Name and/or Value by hand, but we don't care, because that
		// won't happen on the wire because the encoding doesn't allow
		// it.
		return $.uint(($.stringLen(hf.Name) + $.stringLen(hf.Value)) + 32, 32)
	}

	public async String(): globalThis.Promise<string> {
		const hf = this;
		let suffix: string = ""
		if (hf.Sensitive) {
			suffix = " (sensitive)"
		}
		return fmt.Sprintf("header field %q = %q%s", hf.Name, hf.Value, suffix)
	}

	static __typeInfo = $.registerStructType(
		"hpack.HeaderField",
		() => new HeaderField(),
		() => [$.methodSignature("IsPseudo", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Size", [], [/* @__PURE__ */ $.basicType("uint32")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])],
		HeaderField,
		() => [/* @__PURE__ */ $.structField("Name", /* @__PURE__ */ $.basicType("string"), [0], 0, true), /* @__PURE__ */ $.structField("Value", /* @__PURE__ */ $.basicType("string"), [1], 16, true), /* @__PURE__ */ $.structField("Sensitive", /* @__PURE__ */ $.basicType("bool"), [2], 32, true)]
	)
}

export class dynamicTable {
	// https://httpwg.org/specs/rfc7541.html#rfc.section.2.3.2
	public get table(): __goscript_tables.headerFieldTable {
		return this._fields.table
	}

	public set table(value: __goscript_tables.headerFieldTable) {
		this._fields.table = value
	}

	public get size(): number {
		return this._fields.size
	}

	public set size(value: number) {
		this._fields.size = value
	}

	public get maxSize(): number {
		return this._fields.maxSize
	}

	public set maxSize(value: number) {
		this._fields.maxSize = value
	}

	public get allowedMaxSize(): number {
		return this._fields.allowedMaxSize
	}

	public set allowedMaxSize(value: number) {
		this._fields.allowedMaxSize = value
	}

	public _fields: {
		table: __goscript_tables.headerFieldTable
		size: number
		maxSize: number
		allowedMaxSize: number
	}

	constructor(init?: Partial<{table?: __goscript_tables.headerFieldTable, size?: number, maxSize?: number, allowedMaxSize?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			table: init?.table ? init.table.clone() : new __goscript_tables.headerFieldTable(undefined, true),
			size: init?.size ?? (0 as number),
			maxSize: init?.maxSize ?? (0 as number),
			allowedMaxSize: init?.allowedMaxSize ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): dynamicTable {
		return new dynamicTable(this, true)
	}

	public __goscriptAssign(source: dynamicTable): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.table, values.table)
		target.size = values.size
		target.maxSize = values.maxSize
		target.allowedMaxSize = values.allowedMaxSize
	}

	public async add(f: HeaderField): globalThis.Promise<void> {
		let dt: dynamicTable | $.VarRef<dynamicTable> | null = this;
		const dt$: dynamicTable = dt == null ? $.pointerTarget<dynamicTable>(dt) : (dt as any).__isVarRef === true ? (dt as any).value : (dt as any).__goValue === undefined ? (dt as any) : $.pointerTarget<dynamicTable>(dt)
		void (dt$ as dynamicTable).table.addEntry(f);
		;(dt$ as dynamicTable).size = $.uint((dt$ as dynamicTable).size + (f.Size()), 32)
		await (dt !== null && (dt as any).__isVarRef !== true && (dt as any).__goValue === undefined ? ((dt as any) as dynamicTable).evict() : dynamicTable.prototype.evict.call(dt))
	}

	public async evict(): globalThis.Promise<void> {
		let dt: dynamicTable | $.VarRef<dynamicTable> | null = this;
		const dt$: dynamicTable = dt == null ? $.pointerTarget<dynamicTable>(dt) : (dt as any).__isVarRef === true ? (dt as any).value : (dt as any).__goValue === undefined ? (dt as any) : $.pointerTarget<dynamicTable>(dt)
		let n: number = 0
		while (((dt$ as dynamicTable).size > (dt$ as dynamicTable).maxSize) && (n < (dt$ as dynamicTable).table.len())) {
			;(dt$ as dynamicTable).size = $.uint((dt$ as dynamicTable).size - ($.arrayIndex((dt$ as dynamicTable).table.ents!, n).Size()), 32)
			n++
		}
		await (dt$ as dynamicTable).table.evictOldest(n)
	}

	public async setMaxSize(v: number): globalThis.Promise<void> {
		let dt: dynamicTable | $.VarRef<dynamicTable> | null = this;
		$.pointerValue<dynamicTable>(dt).maxSize = v
		await (dt !== null && (dt as any).__isVarRef !== true && (dt as any).__goValue === undefined ? ((dt as any) as dynamicTable).evict() : dynamicTable.prototype.evict.call(dt))
	}

	static __typeInfo = $.registerStructType(
		"hpack.dynamicTable",
		() => new dynamicTable(),
		() => [$.methodSignature("add", [["f", "hpack.HeaderField"]], [], true), $.methodSignature("evict", [], [], true), $.methodSignature("setMaxSize", [["v", /* @__PURE__ */ $.basicType("uint32")]], [], true)],
		dynamicTable,
		() => [/* @__PURE__ */ $.structField("table", "hpack.headerFieldTable", [0], 0, false, { pkgPath: "golang.org/x/net/http2/hpack" }), /* @__PURE__ */ $.structField("size", /* @__PURE__ */ $.basicType("uint32"), [1], 48, false, { pkgPath: "golang.org/x/net/http2/hpack" }), /* @__PURE__ */ $.structField("maxSize", /* @__PURE__ */ $.basicType("uint32"), [2], 52, false, { pkgPath: "golang.org/x/net/http2/hpack" }), /* @__PURE__ */ $.structField("allowedMaxSize", /* @__PURE__ */ $.basicType("uint32"), [3], 56, false, { pkgPath: "golang.org/x/net/http2/hpack" })]
	)
}

export class Decoder {
	public get dynTab(): dynamicTable {
		return this._fields.dynTab
	}

	public set dynTab(value: dynamicTable) {
		this._fields.dynTab = value
	}

	public get emit(): ((f: HeaderField) => void) | null {
		return this._fields.emit
	}

	public set emit(value: ((f: HeaderField) => void) | null) {
		this._fields.emit = value
	}

	public get emitEnabled(): boolean {
		return this._fields.emitEnabled
	}

	public set emitEnabled(value: boolean) {
		this._fields.emitEnabled = value
	}

	public get maxStrLen(): number {
		return this._fields.maxStrLen
	}

	public set maxStrLen(value: number) {
		this._fields.maxStrLen = value
	}

	// buf is the unparsed buffer. It's only written to
	// saveBuf if it was truncated in the middle of a header
	// block. Because it's usually not owned, we can only
	// process it under Write.
	public get buf(): $.Slice<number> {
		return this._fields.buf
	}

	public set buf(value: $.Slice<number>) {
		this._fields.buf = value
	}

	// saveBuf is previous data passed to Write which we weren't able
	// to fully parse before. Unlike buf, we own this data.
	public get saveBuf(): bytes.Buffer {
		return this._fields.saveBuf
	}

	public set saveBuf(value: bytes.Buffer) {
		this._fields.saveBuf = value
	}

	public get firstField(): boolean {
		return this._fields.firstField
	}

	public set firstField(value: boolean) {
		this._fields.firstField = value
	}

	public _fields: {
		dynTab: dynamicTable
		emit: ((f: HeaderField) => void) | null
		emitEnabled: boolean
		maxStrLen: number
		buf: $.Slice<number>
		saveBuf: bytes.Buffer
		firstField: boolean
	}

	constructor(init?: Partial<{dynTab?: dynamicTable, emit?: ((f: HeaderField) => void) | null, emitEnabled?: boolean, maxStrLen?: number, buf?: $.Slice<number>, saveBuf?: bytes.Buffer, firstField?: boolean}>, __goscriptValue?: boolean) {
		this._fields = {
			dynTab: init?.dynTab ? init.dynTab.clone() : new dynamicTable(undefined, true),
			emit: init?.emit ?? (null! as ((f: HeaderField) => void) | null),
			emitEnabled: init?.emitEnabled ?? (false as boolean),
			maxStrLen: init?.maxStrLen ?? (0 as number),
			buf: init?.buf ?? (null! as $.Slice<number>),
			saveBuf: init?.saveBuf ? $.markAsStructValue($.cloneStructValue(init.saveBuf)) : $.markAsStructValue(new bytes.Buffer()),
			firstField: init?.firstField ?? (false as boolean)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Decoder {
		return new Decoder(this, true)
	}

	public __goscriptAssign(source: Decoder): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.dynTab, values.dynTab)
		target.emit = values.emit
		target.emitEnabled = values.emitEnabled
		target.maxStrLen = values.maxStrLen
		target.buf = values.buf
		$.assignStruct(target.saveBuf, values.saveBuf)
		target.firstField = values.firstField
	}

	public Close(): $.GoError {
		let d: Decoder | $.VarRef<Decoder> | null = this;
		const d$: Decoder = d == null ? $.pointerTarget<Decoder>(d) : (d as any).__isVarRef === true ? (d as any).value : (d as any).__goValue === undefined ? (d as any) : $.pointerTarget<Decoder>(d)
		if ((d$ as Decoder).saveBuf.Len() > 0) {
			void (d$ as Decoder).saveBuf.Reset()
			return $.interfaceValue<$.GoError>((() => { const __goscriptLiteralField0 = errors.New("truncated headers"); return new DecodingError({Err: __goscriptLiteralField0}, true) })(), "hpack.DecodingError", "hpack.DecodingError")
		}
		;(d$ as Decoder).firstField = true
		return null
	}

	public async DecodeFull(p: $.Slice<number>): globalThis.Promise<[$.Slice<HeaderField>, $.GoError]> {
		let d: Decoder | $.VarRef<Decoder> | null = this;
		using __defer = new $.DisposableStack()
		const d$: Decoder = d == null ? $.pointerTarget<Decoder>(d) : (d as any).__isVarRef === true ? (d as any).value : (d as any).__goValue === undefined ? (d as any) : $.pointerTarget<Decoder>(d)
		let hf: $.Slice<HeaderField> = null! as $.Slice<HeaderField>
		let saveFunc: ((f: HeaderField) => void) | null = (d$ as Decoder).emit
		__defer.defer(() => { ((): void => {
			;(d$ as Decoder).emit = saveFunc
		})() });
		;(d$ as Decoder).emit = $.functionValue((f: HeaderField): void => {
			hf = $.appendOne(hf, (f).clone())
		}, ({ kind: $.TypeKind.Function, params: ["hpack.HeaderField"], results: [] } as $.FunctionTypeInfo))
		{
			let [, err] = await (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Decoder).Write(p) : Decoder.prototype.Write.call(d, p))
			if (err != null) {
				return [null, err]
			}
		}
		{
			let err = (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Decoder).Close() : Decoder.prototype.Close.call(d))
			if (err != null) {
				return [null, err]
			}
		}
		return [hf, null]
	}

	public EmitEnabled(): boolean {
		const d: Decoder | $.VarRef<Decoder> | null = this;
		return $.pointerValue<Decoder>(d).emitEnabled
	}

	public SetAllowedMaxDynamicTableSize(v: number): void {
		let d: Decoder | $.VarRef<Decoder> | null = this;
		$.pointerValue<Decoder>(d).dynTab.allowedMaxSize = v
	}

	public SetEmitEnabled(v: boolean): void {
		let d: Decoder | $.VarRef<Decoder> | null = this;
		$.pointerValue<Decoder>(d).emitEnabled = v
	}

	public async SetEmitFunc(emitFunc: ((f: HeaderField) => void) | null): globalThis.Promise<void> {
		let d: Decoder | $.VarRef<Decoder> | null = this;
		$.pointerValue<Decoder>(d).emit = emitFunc
	}

	public async SetMaxDynamicTableSize(v: number): globalThis.Promise<void> {
		const d: Decoder | $.VarRef<Decoder> | null = this;
		await $.pointerValue<Decoder>(d).dynTab.setMaxSize(v)
	}

	public SetMaxStringLength(n: number): void {
		let d: Decoder | $.VarRef<Decoder> | null = this;
		$.pointerValue<Decoder>(d).maxStrLen = n
	}

	public async Write(p: $.Slice<number>): globalThis.Promise<[number, $.GoError]> {
		let d: Decoder | $.VarRef<Decoder> | null = this;
		let n: number = 0
		let err: $.GoError = null! as $.GoError
		const d$: Decoder = d == null ? $.pointerTarget<Decoder>(d) : (d as any).__isVarRef === true ? (d as any).value : (d as any).__goValue === undefined ? (d as any) : $.pointerTarget<Decoder>(d)
		if ($.sliceLen(p) == 0) {
			// Prevent state machine CPU attacks (making us redo
			// work up to the point of finding out we don't have
			// enough data)
			return [n, err]
		}
		// Only copy the data if we have to. Optimistically assume
		// that p will contain a complete header block.
		if ((d$ as Decoder).saveBuf.Len() == 0) {
			;(d$ as Decoder).buf = p
		} else {
			void (d$ as Decoder).saveBuf.Write(p);
			;(d$ as Decoder).buf = (d$ as Decoder).saveBuf.Bytes()
			void (d$ as Decoder).saveBuf.Reset()
		}

		while ($.sliceLen((d$ as Decoder).buf) > 0) {
			err = await (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Decoder).parseHeaderFieldRepr() : Decoder.prototype.parseHeaderFieldRepr.call(d))
			if ($.comparableEqual(err, errNeedMore)) {
				// Extra paranoia, making sure saveBuf won't
				// get too large. All the varint and string
				// reading code earlier should already catch
				// overlong things and return ErrStringLength,
				// but keep this as a last resort.
				const varIntOverhead: number = 8
				if (((d$ as Decoder).maxStrLen != 0) && ($.int64($.sliceLen((d$ as Decoder).buf)) > ($.int64Mul(2n, ($.int64Add($.int64((d$ as Decoder).maxStrLen), 8n)))))) {
					return [0, ErrStringLength]
				}
				void (d$ as Decoder).saveBuf.Write((d$ as Decoder).buf)
				return [$.sliceLen(p), null]
			}
			;(d$ as Decoder).firstField = false
			if (err != null) {
				break
			}
		}
		return [$.sliceLen(p), err]
	}

	public at(i: bigint): [HeaderField, boolean] {
		const d: Decoder | $.VarRef<Decoder> | null = this;
		let hf: HeaderField = new HeaderField(undefined, true)
		let ok: boolean = false
		// See Section 2.3.3.
		if (i == 0n) {
			return [hf, ok]
		}
		if (i <= $.uint64(__goscript_tables.headerFieldTable.prototype.len.call(__goscript_static_table.__goscript_get_staticTable()))) {
			return [($.arrayIndex($.pointerValue<__goscript_tables.headerFieldTable>(__goscript_static_table.__goscript_get_staticTable()).ents!, globalThis.Number($.uint64Sub(i, 1n)))).clone(), true]
		}
		if (i > $.uint64((d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Decoder).maxTableIndex() : Decoder.prototype.maxTableIndex.call(d)))) {
			return [hf, ok]
		}
		// In the dynamic table, newer entries have lower indices.
		// However, dt.ents[0] is the oldest entry. Hence, dt.ents is
		// the reversed dynamic table.
		let dt = $.varRef(($.pointerValue<Decoder>(d).dynTab.table).clone())
		return [($.arrayIndex(dt.value.ents!, dt.value.len() - ($.int(i) - __goscript_tables.headerFieldTable.prototype.len.call(__goscript_static_table.__goscript_get_staticTable())))).clone(), true]
	}

	public async callEmit(hf: HeaderField): globalThis.Promise<$.GoError> {
		const d: Decoder | $.VarRef<Decoder> | null = this;
		const d$: Decoder = d == null ? $.pointerTarget<Decoder>(d) : (d as any).__isVarRef === true ? (d as any).value : (d as any).__goValue === undefined ? (d as any) : $.pointerTarget<Decoder>(d)
		if ((d$ as Decoder).maxStrLen != 0) {
			if (($.stringLen(hf.Name) > (d$ as Decoder).maxStrLen) || ($.stringLen(hf.Value) > (d$ as Decoder).maxStrLen)) {
				return ErrStringLength
			}
		}
		if ((d$ as Decoder).emitEnabled) {
			void (__goscriptAwait = (d$ as Decoder).emit!((hf).clone()), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		return null
	}

	public async decodeString(u: undecodedString): globalThis.Promise<[string, $.GoError]> {
		const d: Decoder | $.VarRef<Decoder> | null = this;
		if (!u.isHuff) {
			return [$.bytesToString(u.b), null]
		}
		let buf: bytes.Buffer | $.VarRef<bytes.Buffer> | null = $.mustTypeAssert<bytes.Buffer | $.VarRef<bytes.Buffer> | null>(await $.pointerValue<sync.Pool>(__goscript_huffman.bufPool).Get(), /* @__PURE__ */ $.pointerType("bytes.Buffer"))
		bytes.Buffer.prototype.Reset.call($.pointerValue<bytes.Buffer>(buf))
		let s: string = ""
		let err = await __goscript_huffman.huffmanDecode(buf, $.pointerValue<Decoder>(d).maxStrLen, u.b)
		if (err == null) {
			s = bytes.Buffer.prototype.String.call($.pointerValue<bytes.Buffer>(buf))
		}
		bytes.Buffer.prototype.Reset.call($.pointerValue<bytes.Buffer>(buf))
		$.pointerValue<sync.Pool>(__goscript_huffman.bufPool).Put($.interfaceValue(buf, "*bytes.Buffer", /* @__PURE__ */ $.pointerType("bytes.Buffer")))
		return [s, err]
	}

	public maxTableIndex(): number {
		const d: Decoder | $.VarRef<Decoder> | null = this;
		// This should never overflow. RFC 7540 Section 6.5.2 limits the size of
		// the dynamic table to 2^32 bytes, where each entry will occupy more than
		// one byte. Further, the staticTable has a fixed, small length.
		return $.pointerValue<Decoder>(d).dynTab.table.len() + __goscript_tables.headerFieldTable.prototype.len.call(__goscript_static_table.__goscript_get_staticTable())
	}

	public async parseDynamicTableSizeUpdate(): globalThis.Promise<$.GoError> {
		let d: Decoder | $.VarRef<Decoder> | null = this;
		const d$: Decoder = d == null ? $.pointerTarget<Decoder>(d) : (d as any).__isVarRef === true ? (d as any).value : (d as any).__goValue === undefined ? (d as any) : $.pointerTarget<Decoder>(d)
		// RFC 7541, sec 4.2: This dynamic table size update MUST occur at the
		// beginning of the first header block following the change to the dynamic table size.
		if (!(d$ as Decoder).firstField && ((d$ as Decoder).dynTab.size > 0)) {
			return $.interfaceValue<$.GoError>((() => { const __goscriptLiteralField1 = errors.New("dynamic table size update MUST occur at the beginning of a header block"); return new DecodingError({Err: __goscriptLiteralField1}, true) })(), "hpack.DecodingError", "hpack.DecodingError")
		}

		let buf: $.Slice<number> = (d$ as Decoder).buf
		let __goscriptTuple0: any = readVarInt(5, buf)
		let size = __goscriptTuple0[0]
		buf = __goscriptTuple0[1]
		let err = __goscriptTuple0[2]
		if (err != null) {
			return err
		}
		if (size > $.uint64((d$ as Decoder).dynTab.allowedMaxSize)) {
			return $.interfaceValue<$.GoError>((() => { const __goscriptLiteralField2 = errors.New("dynamic table size update too large"); return new DecodingError({Err: __goscriptLiteralField2}, true) })(), "hpack.DecodingError", "hpack.DecodingError")
		}
		await (d$ as Decoder).dynTab.setMaxSize($.uint(size, 32));
		;(d$ as Decoder).buf = buf
		return null
	}

	public async parseFieldIndexed(): globalThis.Promise<$.GoError> {
		let d: Decoder | $.VarRef<Decoder> | null = this;
		const d$: Decoder = d == null ? $.pointerTarget<Decoder>(d) : (d as any).__isVarRef === true ? (d as any).value : (d as any).__goValue === undefined ? (d as any) : $.pointerTarget<Decoder>(d)
		let buf: $.Slice<number> = (d$ as Decoder).buf
		let __goscriptTuple1: any = readVarInt(7, buf)
		let idx = __goscriptTuple1[0]
		buf = __goscriptTuple1[1]
		let err = __goscriptTuple1[2]
		if (err != null) {
			return err
		}
		let [hf, ok] = (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Decoder).at(idx) : Decoder.prototype.at.call(d, idx))
		if (!ok) {
			return $.interfaceValue<$.GoError>(new DecodingError({Err: $.namedValueInterfaceValue<$.GoError>($.int(idx), "hpack.InvalidIndexError", {"Error": InvalidIndexError_Error}, /* @__PURE__ */ $.basicType("int", "hpack.InvalidIndexError"))}, true), "hpack.DecodingError", "hpack.DecodingError")
		}
		;(d$ as Decoder).buf = buf
		return (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Decoder).callEmit(new HeaderField({Name: hf.Name, Value: hf.Value}, true)) : Decoder.prototype.callEmit.call(d, new HeaderField({Name: hf.Name, Value: hf.Value}, true)))
	}

	public async parseFieldLiteral(n: number, it: indexType): globalThis.Promise<$.GoError> {
		let d: Decoder | $.VarRef<Decoder> | null = this;
		const d$: Decoder = d == null ? $.pointerTarget<Decoder>(d) : (d as any).__isVarRef === true ? (d as any).value : (d as any).__goValue === undefined ? (d as any) : $.pointerTarget<Decoder>(d)
		let buf: $.Slice<number> = (d$ as Decoder).buf
		let __goscriptTuple2: any = readVarInt(n, buf)
		let nameIdx = __goscriptTuple2[0]
		buf = __goscriptTuple2[1]
		let err = __goscriptTuple2[2]
		if (err != null) {
			return err
		}

		let hf: HeaderField = new HeaderField(undefined, true)
		let wantStr = (d$ as Decoder).emitEnabled || indexType_indexed(it)
		let undecodedName: undecodedString = new undecodedString(undefined, true)
		if (nameIdx > 0n) {
			let [ihf, ok] = (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Decoder).at(nameIdx) : Decoder.prototype.at.call(d, nameIdx))
			if (!ok) {
				return $.interfaceValue<$.GoError>(new DecodingError({Err: $.namedValueInterfaceValue<$.GoError>($.int(nameIdx), "hpack.InvalidIndexError", {"Error": InvalidIndexError_Error}, /* @__PURE__ */ $.basicType("int", "hpack.InvalidIndexError"))}, true), "hpack.DecodingError", "hpack.DecodingError")
			}
			hf.Name = ihf.Name
		} else {
			let __goscriptTuple3: any = (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Decoder).readString(buf) : Decoder.prototype.readString.call(d, buf))
			undecodedName = $.assignStruct(undecodedName, __goscriptTuple3[0])
			buf = __goscriptTuple3[1]
			err = __goscriptTuple3[2]
			if (err != null) {
				return err
			}
		}
		let __goscriptTuple4: any = (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Decoder).readString(buf) : Decoder.prototype.readString.call(d, buf))
		let undecodedValue = __goscriptTuple4[0]
		buf = __goscriptTuple4[1]
		err = __goscriptTuple4[2]
		if (err != null) {
			return err
		}
		if (wantStr) {
			if (nameIdx <= 0n) {
				let __goscriptTuple5: any = await (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Decoder).decodeString(undecodedName) : Decoder.prototype.decodeString.call(d, undecodedName))
				hf.Name = __goscriptTuple5[0]
				err = __goscriptTuple5[1]
				if (err != null) {
					return err
				}
			}
			let __goscriptTuple6: any = await (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Decoder).decodeString(undecodedValue) : Decoder.prototype.decodeString.call(d, undecodedValue))
			hf.Value = __goscriptTuple6[0]
			err = __goscriptTuple6[1]
			if (err != null) {
				return err
			}
		}
		;(d$ as Decoder).buf = buf
		if (indexType_indexed(it)) {
			await (d$ as Decoder).dynTab.add(hf)
		}
		hf.Sensitive = indexType_sensitive(it)
		return (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Decoder).callEmit(hf) : Decoder.prototype.callEmit.call(d, hf))
	}

	public async parseHeaderFieldRepr(): globalThis.Promise<$.GoError> {
		const d: Decoder | $.VarRef<Decoder> | null = this;
		let b = $.arrayIndex($.pointerValue<Decoder>(d).buf!, 0)
		switch ((true as boolean)) {
			case $.uint((b & 128), 8) != 0:
			{
				return (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Decoder).parseFieldIndexed() : Decoder.prototype.parseFieldIndexed.call(d))
				break
			}
			case $.uint((b & 192), 8) == 64:
			{
				return (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Decoder).parseFieldLiteral(6, 0) : Decoder.prototype.parseFieldLiteral.call(d, 6, 0))
				break
			}
			case $.uint((b & 240), 8) == 0:
			{
				return (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Decoder).parseFieldLiteral(4, 1) : Decoder.prototype.parseFieldLiteral.call(d, 4, 1))
				break
			}
			case $.uint((b & 240), 8) == 16:
			{
				return (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Decoder).parseFieldLiteral(4, 2) : Decoder.prototype.parseFieldLiteral.call(d, 4, 2))
				break
			}
			case $.uint((b & 224), 8) == 32:
			{
				return (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Decoder).parseDynamicTableSizeUpdate() : Decoder.prototype.parseDynamicTableSizeUpdate.call(d))
				break
			}
		}

		return $.interfaceValue<$.GoError>((() => { const __goscriptLiteralField3 = errors.New("invalid encoding"); return new DecodingError({Err: __goscriptLiteralField3}, true) })(), "hpack.DecodingError", "hpack.DecodingError")
	}

	public readString(p: $.Slice<number>): [undecodedString, $.Slice<number>, $.GoError] {
		const d: Decoder | $.VarRef<Decoder> | null = this;
		let u: undecodedString = new undecodedString(undefined, true)
		let remain: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		const d$: Decoder = d == null ? $.pointerTarget<Decoder>(d) : (d as any).__isVarRef === true ? (d as any).value : (d as any).__goValue === undefined ? (d as any) : $.pointerTarget<Decoder>(d)
		if ($.sliceLen(p) == 0) {
			return [(u).clone(), p, errNeedMore]
		}
		let isHuff = $.uint(($.arrayIndex(p!, 0) & 128), 8) != 0
		let __goscriptTuple7: any = readVarInt(7, p)
		let strLen = __goscriptTuple7[0]
		p = __goscriptTuple7[1]
		err = __goscriptTuple7[2]
		if (err != null) {
			return [(u).clone(), p, err]
		}
		if (((d$ as Decoder).maxStrLen != 0) && (strLen > $.uint64((d$ as Decoder).maxStrLen))) {
			// Returning an error here means Huffman decoding errors
			// for non-indexed strings past the maximum string length
			// are ignored, but the server is returning an error anyway
			// and because the string is not indexed the error will not
			// affect the decoding state.
			return [(u).clone(), null, ErrStringLength]
		}
		if ($.uint64($.sliceLen(p)) < strLen) {
			return [(u).clone(), p, errNeedMore]
		}
		u.isHuff = isHuff
		u.b = $.goSlice(p, undefined, globalThis.Number(strLen))
		return [(u).clone(), $.goSlice(p, globalThis.Number(strLen), undefined), null]
	}

	static __typeInfo = $.registerStructType(
		"hpack.Decoder",
		() => new Decoder(),
		() => [$.methodSignature("Close", [], ["error"], true), $.methodSignature("DecodeFull", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType("hpack.HeaderField"), "error"], true), $.methodSignature("EmitEnabled", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("SetAllowedMaxDynamicTableSize", [["v", /* @__PURE__ */ $.basicType("uint32")]], [], true), $.methodSignature("SetEmitEnabled", [["v", /* @__PURE__ */ $.basicType("bool")]], [], true), $.methodSignature("SetEmitFunc", [["emitFunc", ({ kind: $.TypeKind.Function, params: ["hpack.HeaderField"], results: [] } as $.FunctionTypeInfo)]], [], true), $.methodSignature("SetMaxDynamicTableSize", [["v", /* @__PURE__ */ $.basicType("uint32")]], [], true), $.methodSignature("SetMaxStringLength", [["n", /* @__PURE__ */ $.basicType("int")]], [], true), $.methodSignature("Write", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]], true), $.methodSignature("at", [["i", /* @__PURE__ */ $.basicType("uint64")]], [["hf", "hpack.HeaderField"], ["ok", /* @__PURE__ */ $.basicType("bool")]], true), $.methodSignature("callEmit", [["hf", "hpack.HeaderField"]], ["error"], true), $.methodSignature("decodeString", [["u", "hpack.undecodedString"]], [/* @__PURE__ */ $.basicType("string"), "error"], true), $.methodSignature("maxTableIndex", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("parseDynamicTableSizeUpdate", [], ["error"], true), $.methodSignature("parseFieldIndexed", [], ["error"], true), $.methodSignature("parseFieldLiteral", [["n", /* @__PURE__ */ $.basicType("uint8")], ["it", /* @__PURE__ */ $.basicType("int", "hpack.indexType")]], ["error"], true), $.methodSignature("parseHeaderFieldRepr", [], ["error"], true), $.methodSignature("readString", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["u", "hpack.undecodedString"], ["remain", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["err", "error"]], true)],
		Decoder,
		() => [/* @__PURE__ */ $.structField("dynTab", "hpack.dynamicTable", [0], 0, false, { pkgPath: "golang.org/x/net/http2/hpack" }), /* @__PURE__ */ $.structField("emit", ({ kind: $.TypeKind.Function, params: ["hpack.HeaderField"], results: [] } as $.FunctionTypeInfo), [1], 64, false, { pkgPath: "golang.org/x/net/http2/hpack" }), /* @__PURE__ */ $.structField("emitEnabled", /* @__PURE__ */ $.basicType("bool"), [2], 72, false, { pkgPath: "golang.org/x/net/http2/hpack" }), /* @__PURE__ */ $.structField("maxStrLen", /* @__PURE__ */ $.basicType("int"), [3], 80, false, { pkgPath: "golang.org/x/net/http2/hpack" }), /* @__PURE__ */ $.structField("buf", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [4], 88, false, { pkgPath: "golang.org/x/net/http2/hpack" }), /* @__PURE__ */ $.structField("saveBuf", "bytes.Buffer", [5], 112, false, { pkgPath: "golang.org/x/net/http2/hpack" }), /* @__PURE__ */ $.structField("firstField", /* @__PURE__ */ $.basicType("bool"), [6], 152, false, { pkgPath: "golang.org/x/net/http2/hpack" })]
	)
}

export class undecodedString {
	public get isHuff(): boolean {
		return this._fields.isHuff
	}

	public set isHuff(value: boolean) {
		this._fields.isHuff = value
	}

	public get b(): $.Slice<number> {
		return this._fields.b
	}

	public set b(value: $.Slice<number>) {
		this._fields.b = value
	}

	public _fields: {
		isHuff: boolean
		b: $.Slice<number>
	}

	constructor(init?: Partial<{isHuff?: boolean, b?: $.Slice<number>}>, __goscriptValue?: boolean) {
		this._fields = {
			isHuff: init?.isHuff ?? (false as boolean),
			b: init?.b ?? (null! as $.Slice<number>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): undecodedString {
		return new undecodedString(this, true)
	}

	public __goscriptAssign(source: undecodedString): void {
		const target = this._fields
		const values = source._fields
		target.isHuff = values.isHuff
		target.b = values.b
	}

	static __typeInfo = $.registerStructType(
		"hpack.undecodedString",
		() => new undecodedString(),
		() => [],
		undecodedString,
		() => [/* @__PURE__ */ $.structField("isHuff", /* @__PURE__ */ $.basicType("bool"), [0], 0, false, { pkgPath: "golang.org/x/net/http2/hpack" }), /* @__PURE__ */ $.structField("b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [1], 8, false, { pkgPath: "golang.org/x/net/http2/hpack" })]
	)
}

export const indexedTrue: indexType = 0

export const indexedFalse: indexType = 1

export const indexedNever: indexType = 2

export async function InvalidIndexError_Error(e: InvalidIndexError): globalThis.Promise<string> {
	return fmt.Sprintf("invalid indexed representation index %d", $.basicInterfaceValue($.int(e), "int"))
}

export async function NewDecoder(maxDynamicTableSize: number, emitFunc: ((f: HeaderField) => void) | null): globalThis.Promise<Decoder | $.VarRef<Decoder> | null> {
	let d: Decoder | $.VarRef<Decoder> | null = new Decoder({emit: emitFunc, emitEnabled: true, firstField: true})
	let d$: Decoder = d == null ? $.pointerTarget<Decoder>(d) : (d as any).__isVarRef === true ? (d as any).value : (d as any).__goValue === undefined ? (d as any) : $.pointerTarget<Decoder>(d)
	void (d$ as Decoder).dynTab.table.init();
	;(d$ as Decoder).dynTab.allowedMaxSize = maxDynamicTableSize
	await (d$ as Decoder).dynTab.setMaxSize(maxDynamicTableSize)
	return d
}

export let ErrStringLength: $.GoError = errors.New("hpack: string too long")

export function __goscript_set_ErrStringLength(__goscriptValue: $.GoError): void {
	ErrStringLength = __goscriptValue
}

export let errNeedMore: $.GoError = errors.New("need more data")

export function __goscript_set_errNeedMore(__goscriptValue: $.GoError): void {
	errNeedMore = __goscriptValue
}

export function indexType_indexed(v: indexType): boolean {
	return v == 0
}

export function indexType_sensitive(v: indexType): boolean {
	return v == 2
}

export let errVarintOverflow: DecodingError = (() => { const __goscriptLiteralField4 = errors.New("varint integer overflow"); return new DecodingError({Err: __goscriptLiteralField4}, true) })()

export function __goscript_set_errVarintOverflow(__goscriptValue: DecodingError): void {
	$.assignStruct(errVarintOverflow, __goscriptValue)
}

export function readVarInt(n: number, p: $.Slice<number>): [bigint, $.Slice<number>, $.GoError] {
	let i: bigint = 0n
	let remain: $.Slice<number> = null! as $.Slice<number>
	let err: $.GoError = null! as $.GoError
	if ((n < 1) || (n > 8)) {
		$.panic("bad n")
	}
	if ($.sliceLen(p) == 0) {
		return [0n, p, errNeedMore]
	}
	i = $.uint64($.arrayIndex(p!, 0))
	if (n < 8) {
		i = $.uint64And(i, $.uint64Sub(($.uint64Shl(1n, $.uint64(n))), 1n))
	}
	if (i < ($.uint64Sub(($.uint64Shl(1n, $.uint64(n))), 1n))) {
		return [i, $.goSlice(p, 1, undefined), null]
	}

	let origP: $.Slice<number> = p
	p = $.goSlice(p, 1, undefined)
	let m: bigint = 0n
	while ($.sliceLen(p) > 0) {
		let b = $.arrayIndex(p!, 0)
		p = $.goSlice(p, 1, undefined)
		i = $.uint64Add(i, $.uint64Shl($.uint64(b & 127), m))
		if ($.uint((b & 128), 8) == 0) {
			return [i, p, null]
		}
		m = $.uint64Add(m, 7n)
		if (m >= 63n) {
			return [0n, origP, $.interfaceValue<$.GoError>((errVarintOverflow).clone(), "hpack.DecodingError", "hpack.DecodingError")]
		}
	}
	return [0n, origP, errNeedMore]
}

var __goscriptAwait: any
