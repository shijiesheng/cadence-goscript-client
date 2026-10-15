// Generated file based on huffman.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as errors from "@goscript/errors/index.js"

import * as io from "@goscript/io/index.js"

import * as sync from "@goscript/sync/index.js"

import * as __goscript_hpack from "./hpack.gs.ts"

import * as __goscript_tables from "./tables.gs.ts"
import "@goscript/bytes/index.js"
import "@goscript/errors/index.js"
import "@goscript/io/index.js"
import "@goscript/sync/index.js"
import "./hpack.gs.ts"
import "./tables.gs.ts"

$.registerTypePackagePath("golang.org/x/net/http2/hpack", ["hpack.incomparable", "hpack.node"])

export type incomparable = ((() => void) | null)[]

$.registerNamedType("hpack.incomparable", /* @__PURE__ */ $.arrayType(({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), 0));

export class node {
	public get _blank0(): incomparable {
		return this._fields._blank0
	}

	public set _blank0(value: incomparable) {
		this._fields._blank0 = value
	}

	// children is non-nil for internal nodes
	public get children(): $.VarRef<(node | $.VarRef<node> | null)[]> | null {
		return this._fields.children
	}

	public set children(value: $.VarRef<(node | $.VarRef<node> | null)[]> | null) {
		this._fields.children = value
	}

	// The following are only valid if children is nil:
	public get codeLen(): number {
		return this._fields.codeLen
	}

	public set codeLen(value: number) {
		this._fields.codeLen = value
	}

	public get sym(): number {
		return this._fields.sym
	}

	public set sym(value: number) {
		this._fields.sym = value
	}

	public _fields: {
		_blank0: incomparable
		children: $.VarRef<(node | $.VarRef<node> | null)[]> | null
		codeLen: number
		sym: number
	}

	constructor(init?: Partial<{_blank0?: incomparable, children?: $.VarRef<(node | $.VarRef<node> | null)[]> | null, codeLen?: number, sym?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			_blank0: init?._blank0 !== undefined ? $.cloneArrayValue(init._blank0, "hpack.incomparable") : $.arrayValue(globalThis.Array.from({ length: 0 }, () => null)),
			children: init?.children ?? (null! as $.VarRef<(node | $.VarRef<node> | null)[]> | null),
			codeLen: init?.codeLen ?? (0 as number),
			sym: init?.sym ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): node {
		return new node(this, true)
	}

	public __goscriptAssign(source: node): void {
		const target = this._fields
		const values = source._fields
		target._blank0 = $.assignFieldValue(target._blank0, values._blank0, "hpack.incomparable")
		target.children = values.children
		target.codeLen = values.codeLen
		target.sym = values.sym
	}

	static __typeInfo = $.registerStructType(
		"hpack.node",
		() => new node(),
		() => [],
		node,
		() => [/* @__PURE__ */ $.structField("_", "hpack.incomparable", [0], 0, false, { key: "_blank0", pkgPath: "golang.org/x/net/http2/hpack" }), /* @__PURE__ */ $.structField("children", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.pointerType("hpack.node"), 256)), [1], 0, false, { pkgPath: "golang.org/x/net/http2/hpack" }), /* @__PURE__ */ $.structField("codeLen", /* @__PURE__ */ $.basicType("uint8"), [2], 8, false, { pkgPath: "golang.org/x/net/http2/hpack" }), /* @__PURE__ */ $.structField("sym", /* @__PURE__ */ $.basicType("uint8"), [3], 9, false, { pkgPath: "golang.org/x/net/http2/hpack" })]
	)
}

export let bufPool: $.VarRef<sync.Pool> = $.varRef($.markAsStructValue(new sync.Pool({New: $.functionValue((): any => {
	return $.interfaceValue(new bytes.Buffer(), "*bytes.Buffer", /* @__PURE__ */ $.pointerType("bytes.Buffer"))
}, ({ kind: $.TypeKind.Function, params: [], results: [{ kind: $.TypeKind.Interface, methods: [] }] } as $.FunctionTypeInfo))})))

export function __goscript_set_bufPool(__goscriptValue: sync.Pool): void {
	$.assignStruct(bufPool.value, __goscriptValue)
}

export async function HuffmanDecode(w: io.Writer | null, v: $.Slice<number>): globalThis.Promise<[number, $.GoError]> {
	using __defer = new $.DisposableStack()
	let buf: bytes.Buffer | $.VarRef<bytes.Buffer> | null = $.mustTypeAssert<bytes.Buffer | $.VarRef<bytes.Buffer> | null>(await bufPool.value.Get(), /* @__PURE__ */ $.pointerType("bytes.Buffer"))
	bytes.Buffer.prototype.Reset.call($.pointerValue<bytes.Buffer>(buf))
	const __goscriptDeferCallee0 = $.functionValue(((__receiver) => (x: any) => __receiver.Put(x))(bufPool.value), ({ kind: $.TypeKind.Function, params: [{ kind: $.TypeKind.Interface, methods: [] }], results: [] } as $.FunctionTypeInfo), "sync.(*Pool).Put-fm")
	const __goscriptDeferArg0 = $.interfaceValue(buf, "*bytes.Buffer", /* @__PURE__ */ $.pointerType("bytes.Buffer"))
	__defer.defer(() => { __goscriptDeferCallee0(__goscriptDeferArg0) })
	{
		let err = await huffmanDecode(buf, 0, v)
		if (err != null) {
			return [0, err]
		}
	}
	return await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? (w as Exclude<io.Writer, null>) : $.pointerValue<Exclude<io.Writer, null>>(w)).Write(bytes.Buffer.prototype.Bytes.call($.pointerValue<bytes.Buffer>(buf)))
}

export async function HuffmanDecodeToString(v: $.Slice<number>): globalThis.Promise<[string, $.GoError]> {
	using __defer = new $.DisposableStack()
	let buf: bytes.Buffer | $.VarRef<bytes.Buffer> | null = $.mustTypeAssert<bytes.Buffer | $.VarRef<bytes.Buffer> | null>(await bufPool.value.Get(), /* @__PURE__ */ $.pointerType("bytes.Buffer"))
	bytes.Buffer.prototype.Reset.call($.pointerValue<bytes.Buffer>(buf))
	const __goscriptDeferCallee1 = $.functionValue(((__receiver) => (x: any) => __receiver.Put(x))(bufPool.value), ({ kind: $.TypeKind.Function, params: [{ kind: $.TypeKind.Interface, methods: [] }], results: [] } as $.FunctionTypeInfo), "sync.(*Pool).Put-fm")
	const __goscriptDeferArg1 = $.interfaceValue(buf, "*bytes.Buffer", /* @__PURE__ */ $.pointerType("bytes.Buffer"))
	__defer.defer(() => { __goscriptDeferCallee1(__goscriptDeferArg1) })
	{
		let err = await huffmanDecode(buf, 0, v)
		if (err != null) {
			return ["", err]
		}
	}
	return [bytes.Buffer.prototype.String.call($.pointerValue<bytes.Buffer>(buf)), null]
}

export let ErrInvalidHuffman: $.GoError = errors.New("hpack: invalid Huffman-encoded data")

export function __goscript_set_ErrInvalidHuffman(__goscriptValue: $.GoError): void {
	ErrInvalidHuffman = __goscriptValue
}

export async function huffmanDecode(buf: bytes.Buffer | $.VarRef<bytes.Buffer> | null, maxLen: number, v: $.Slice<number>): globalThis.Promise<$.GoError> {
	let rootHuffmanNode: node | $.VarRef<node> | null = await getRootHuffmanNode()
	let n: node | $.VarRef<node> | null = rootHuffmanNode
	// cur is the bit buffer that has not been fed into n.
	// cbits is the number of low order bits in cur that are valid.
	// sbits is the number of bits of the symbol prefix being decoded.
	let cur = 0
	let cbits = 0
	let sbits = 0
	for (let __goscriptRangeTarget0 = v, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
		let b = $.uint((__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as number), 8)
		cur = $.uint($.uint64Or(($.uint($.uint64Shl(cur, 8n), 64)), $.uint(b, 64)), 64)
		cbits = $.uint(cbits + (8), 8)
		sbits = $.uint(sbits + (8), 8)
		while (cbits >= 8) {
			let idx = $.uint($.uint($.uint64Shr(cur, (((cbits - 8) & 0xff))), 64), 8)
			n = $.arrayIndex($.pointerValue<(node | $.VarRef<node> | null)[]>($.pointerValue<node>(n).children), idx)
			if (n == null) {
				return ErrInvalidHuffman
			}
			if ($.pointerValue<node>(n).children == null) {
				if ((maxLen != 0) && (bytes.Buffer.prototype.Len.call($.pointerValue<bytes.Buffer>(buf)) == maxLen)) {
					return __goscript_hpack.ErrStringLength
				}
				bytes.Buffer.prototype.WriteByte.call($.pointerValue<bytes.Buffer>(buf), $.pointerValue<node>(n).sym)
				cbits = $.uint(cbits - ($.pointerValue<node>(n).codeLen), 8)
				n = rootHuffmanNode
				sbits = cbits
			} else {
				cbits = $.uint(cbits - (8), 8)
			}
		}
	}
	while (cbits > 0) {
		n = $.arrayIndex($.pointerValue<(node | $.VarRef<node> | null)[]>($.pointerValue<node>(n).children), $.uint($.uint($.uint64Shl(cur, (((8 - cbits) & 0xff))), 64), 8))
		if (n == null) {
			return ErrInvalidHuffman
		}
		if (($.pointerValue<node>(n).children != null) || ($.pointerValue<node>(n).codeLen > cbits)) {
			break
		}
		if ((maxLen != 0) && (bytes.Buffer.prototype.Len.call($.pointerValue<bytes.Buffer>(buf)) == maxLen)) {
			return __goscript_hpack.ErrStringLength
		}
		bytes.Buffer.prototype.WriteByte.call($.pointerValue<bytes.Buffer>(buf), $.pointerValue<node>(n).sym)
		cbits = $.uint(cbits - ($.pointerValue<node>(n).codeLen), 8)
		n = rootHuffmanNode
		sbits = cbits
	}
	if (sbits > 7) {
		// Either there was an incomplete symbol, or overlong padding.
		// Both are decoding errors per RFC 7541 section 5.2.
		return ErrInvalidHuffman
	}
	{
		let mask = $.uint($.uint($.uint64Sub(($.uint($.uint64Shl(1n, cbits), 64)), 1n), 64), 64)
		if (($.uint($.uint64And(cur, mask), 64)) != mask) {
			// Trailing bits must be a prefix of EOS per RFC 7541 section 5.2.
			return ErrInvalidHuffman
		}
	}

	return null
}

export function newInternalNode(): node | $.VarRef<node> | null {
	return new node({children: $.varRef<(node | $.VarRef<node> | null)[]>($.arrayValue(globalThis.Array.from({ length: 256 }, () => null)))})
}

export let buildRootOnce: $.VarRef<sync.Once> = $.varRef($.markAsStructValue(new sync.Once()))

export function __goscript_set_buildRootOnce(__goscriptValue: sync.Once): void {
	$.assignStruct(buildRootOnce.value, __goscriptValue)
}

export let lazyRootHuffmanNode: node | $.VarRef<node> | null = null! as node | $.VarRef<node> | null

export function __goscript_set_lazyRootHuffmanNode(__goscriptValue: node | $.VarRef<node> | null): void {
	lazyRootHuffmanNode = __goscriptValue
}

export async function getRootHuffmanNode(): globalThis.Promise<node | $.VarRef<node> | null> {
	await buildRootOnce.value.Do(buildRootHuffmanNode)
	return lazyRootHuffmanNode
}

export function buildRootHuffmanNode(): void {
	if ((256 as number) != 256) {
		$.panic("unexpected size")
	}
	lazyRootHuffmanNode = newInternalNode()
	// allocate a leaf node for each of the 256 symbols
	let leaves: $.VarRef<node[]> | null = $.varRef<node[]>($.arrayValue(globalThis.Array.from({ length: 256 }, () => new node(undefined, true)), /* @__PURE__ */ $.arrayType("hpack.node", 256)))

	for (let __goscriptRangeTarget1 = __goscript_tables.huffmanCodes, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), sym = 0; sym < __goscriptRangeWindow1.length; sym++) {
		let code = $.uint((__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + sym] as number), 32)
		let codeLen = $.arrayIndex(__goscript_tables.huffmanCodeLen, sym)

		let cur: node | $.VarRef<node> | null = lazyRootHuffmanNode
		while (codeLen > 8) {
			codeLen = $.uint(codeLen - (8), 8)
			let i = $.uint($.uintShr(code, codeLen, 32), 8)
			if ($.arrayIndex($.pointerValue<(node | $.VarRef<node> | null)[]>($.pointerValue<node>(cur).children), i) == null) {
				$.pointerValue<(node | $.VarRef<node> | null)[]>($.pointerValue<node>(cur).children)[i] = newInternalNode()
			}
			cur = $.arrayIndex($.pointerValue<(node | $.VarRef<node> | null)[]>($.pointerValue<node>(cur).children), i)
		}
		let shift = $.uint(((8 - codeLen) & 0xff), 8)
		let start = $.int($.uint($.uint(((code << shift) >>> 0), 32), 8))
		let end = $.int(1 << shift)

		$.arrayIndex($.pointerValue<node[]>(leaves), sym).sym = $.uint(sym, 8)
		$.arrayIndex($.pointerValue<node[]>(leaves), sym).codeLen = codeLen
		for (let i = start; i < (start + end); i++) {
			$.pointerValue<(node | $.VarRef<node> | null)[]>($.pointerValue<node>(cur).children)[i] = $.indexRef($.pointerValue<node[]>(leaves), sym)
		}
	}
}

export function AppendHuffmanString(dst: $.Slice<number>, s: string): $.Slice<number> {
	// This relies on the maximum huffman code length being 30 (See tables.go huffmanCodeLen array)
	// So if a uint64 buffer has less than 32 valid bits can always accommodate another huffmanCode.
	let x: bigint = 0n
	let n: number = 0
	for (let i = 0; i < $.stringLen(s); i++) {
		let c = $.indexString(s, i)
		n = $.uint($.uint64Add(n, $.uint($.arrayIndex(__goscript_tables.huffmanCodeLen, c), 64)), 64)
		x = $.uint64Shl(x, $.uint64($.arrayIndex(__goscript_tables.huffmanCodeLen, c) % 64))
		x = $.uint64Or(x, $.uint64($.arrayIndex(__goscript_tables.huffmanCodes, c)))
		if (n >= 32) {
			n = $.uint($.uint64Mod(n, 32), 64)
			let y = $.uint($.uint64Shr(x, n), 32)
			dst = $.append(dst, $.uint($.uint($.uintShr(y, 24, 32), 8), 8), $.uint($.uint($.uintShr(y, 16, 32), 8), 8), $.uint($.uint($.uintShr(y, 8, 32), 8), 8), $.uint($.uint(y, 8), 8), $.byteSliceHint)
		}
	}
	// Add padding bits if necessary
	{
		let over = $.uint($.uint64Mod(n, 8n), 64)
		if (over > 0) {
			const eosCode: number = 1073741823
			const eosNBits: number = 30
			const eosPadByte: number = 255
			let pad = $.uint($.uint64Sub(8n, over), 64)
			x = $.uint64Or(($.uint64Shl(x, pad)), ($.uint64Shr(255n, over)))
			n = $.uint($.uint64Add(n, pad), 64)
		}
	}
	// n in (0, 8, 16, 24, 32)
	switch ($.uint($.uint64Div(n, 8n), 64)) {
		case 0:
		{
			return dst
			break
		}
		case 1:
		{
			return $.append(dst, $.uint($.uint(x, 8), 8), $.byteSliceHint)
			break
		}
		case 2:
		{
			let y = $.uint(x, 16)
			return $.append(dst, $.uint($.uint($.uintShr(y, 8, 16), 8), 8), $.uint($.uint(y, 8), 8), $.byteSliceHint)
			break
		}
		case 3:
		{
			let y = $.uint($.uint64Shr(x, 8n), 16)
			return $.append(dst, $.uint($.uint($.uintShr(y, 8, 16), 8), 8), $.uint($.uint(y, 8), 8), $.uint($.uint(x, 8), 8), $.byteSliceHint)
			break
		}
	}
	//	case 4:
	let y = $.uint(x, 32)
	return $.append(dst, $.uint($.uint($.uintShr(y, 24, 32), 8), 8), $.uint($.uint($.uintShr(y, 16, 32), 8), 8), $.uint($.uint($.uintShr(y, 8, 32), 8), 8), $.uint($.uint(y, 8), 8), $.byteSliceHint)
}

export function HuffmanEncodeLength(s: string): bigint {
	let n = 0n
	for (let i = 0; i < $.stringLen(s); i++) {
		n = $.uint64Add(n, $.uint64($.arrayIndex(__goscript_tables.huffmanCodeLen, $.indexString(s, i))))
	}
	return $.uint64Div(($.uint64Add(n, 7n)), 8n)
}
