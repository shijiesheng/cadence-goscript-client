// Generated file based on databuffer.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as errors from "@goscript/errors/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as sync from "@goscript/sync/index.js"
import "@goscript/errors/index.js"
import "@goscript/fmt/index.js"
import "@goscript/sync/index.js"

$.registerTypePackagePath("golang.org/x/net/http2", ["http2.dataBuffer"])

export class dataBuffer {
	public get chunks(): $.Slice<$.Slice<number>> {
		return this._fields.chunks
	}

	public set chunks(value: $.Slice<$.Slice<number>>) {
		this._fields.chunks = value
	}

	public get r(): number {
		return this._fields.r
	}

	public set r(value: number) {
		this._fields.r = value
	}

	public get w(): number {
		return this._fields.w
	}

	public set w(value: number) {
		this._fields.w = value
	}

	public get size(): number {
		return this._fields.size
	}

	public set size(value: number) {
		this._fields.size = value
	}

	public get expected(): bigint {
		return this._fields.expected
	}

	public set expected(value: bigint) {
		this._fields.expected = value
	}

	public _fields: {
		chunks: $.Slice<$.Slice<number>>
		r: number
		w: number
		size: number
		expected: bigint
	}

	constructor(init?: Partial<{chunks?: $.Slice<$.Slice<number>>, r?: number, w?: number, size?: number, expected?: bigint}>, __goscriptValue?: boolean) {
		this._fields = {
			chunks: init?.chunks ?? (null! as $.Slice<$.Slice<number>>),
			r: init?.r ?? (0 as number),
			w: init?.w ?? (0 as number),
			size: init?.size ?? (0 as number),
			expected: init?.expected ?? (0n as bigint)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): dataBuffer {
		return new dataBuffer(this, true)
	}

	public __goscriptAssign(source: dataBuffer): void {
		const target = this._fields
		const values = source._fields
		target.chunks = values.chunks
		target.r = values.r
		target.w = values.w
		target.size = values.size
		target.expected = values.expected
	}

	public Len(): number {
		const b: dataBuffer | $.VarRef<dataBuffer> | null = this;
		return $.pointerValue<dataBuffer>(b).size
	}

	public async Read(p: $.Slice<number>): globalThis.Promise<[number, $.GoError]> {
		let b: dataBuffer | $.VarRef<dataBuffer> | null = this;
		const b$: dataBuffer = b == null ? $.pointerTarget<dataBuffer>(b) : (b as any).__isVarRef === true ? (b as any).value : (b as any).__goValue === undefined ? (b as any) : $.pointerTarget<dataBuffer>(b)
		if ((b$ as dataBuffer).size == 0) {
			return [0, errReadEmpty]
		}
		let ntotal: number = 0
		while (($.sliceLen(p) > 0) && ((b$ as dataBuffer).size > 0)) {
			let readFrom: $.Slice<number> = (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as dataBuffer).bytesFromFirstChunk() : dataBuffer.prototype.bytesFromFirstChunk.call(b))
			let n: number = $.copy(p, readFrom)
			p = $.goSlice(p, n, undefined)
			ntotal = ntotal + (n);
			;(b$ as dataBuffer).r = (b$ as dataBuffer).r + (n);
			;(b$ as dataBuffer).size = (b$ as dataBuffer).size - (n)
			// If the first chunk has been consumed, advance to the next chunk.
			if ((b$ as dataBuffer).r == $.sliceLen($.arrayIndex((b$ as dataBuffer).chunks!, 0))) {
				await putDataBufferChunk($.arrayIndex((b$ as dataBuffer).chunks!, 0))
				let end = $.sliceLen((b$ as dataBuffer).chunks) - 1
				$.copy($.goSlice((b$ as dataBuffer).chunks, undefined, end), $.goSlice((b$ as dataBuffer).chunks, 1, undefined))
				$.sliceElems((b$ as dataBuffer).chunks!)[$.sliceSlot((b$ as dataBuffer).chunks!, end)] = null;
				;(b$ as dataBuffer).chunks = $.goSlice((b$ as dataBuffer).chunks, undefined, end);
				;(b$ as dataBuffer).r = 0
			}
		}
		return [ntotal, null]
	}

	public async Write(p: $.Slice<number>): globalThis.Promise<[number, $.GoError]> {
		let b: dataBuffer | $.VarRef<dataBuffer> | null = this;
		const b$: dataBuffer = b == null ? $.pointerTarget<dataBuffer>(b) : (b as any).__isVarRef === true ? (b as any).value : (b as any).__goValue === undefined ? (b as any) : $.pointerTarget<dataBuffer>(b)
		let ntotal = $.sliceLen(p)
		while ($.sliceLen(p) > 0) {
			// If the last chunk is empty, allocate a new chunk. Try to allocate
			// enough to fully copy p plus any additional bytes we expect to
			// receive. However, this may allocate less than len(p).
			let want = $.int64($.sliceLen(p))
			if ((b$ as dataBuffer).expected > want) {
				want = (b$ as dataBuffer).expected
			}
			let chunk: $.Slice<number> = await (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as dataBuffer).lastChunkOrAlloc(want) : dataBuffer.prototype.lastChunkOrAlloc.call(b, want))
			let n: number = $.copy($.goSlice(chunk, (b$ as dataBuffer).w, undefined), p)
			p = $.goSlice(p, n, undefined);
			;(b$ as dataBuffer).w = (b$ as dataBuffer).w + (n);
			;(b$ as dataBuffer).size = (b$ as dataBuffer).size + (n);
			;(b$ as dataBuffer).expected = $.int64Sub((b$ as dataBuffer).expected, $.int64(n))
		}
		return [ntotal, null]
	}

	public bytesFromFirstChunk(): $.Slice<number> {
		const b: dataBuffer | $.VarRef<dataBuffer> | null = this;
		const b$: dataBuffer = b == null ? $.pointerTarget<dataBuffer>(b) : (b as any).__isVarRef === true ? (b as any).value : (b as any).__goValue === undefined ? (b as any) : $.pointerTarget<dataBuffer>(b)
		if ($.sliceLen((b$ as dataBuffer).chunks) == 1) {
			return $.goSlice($.arrayIndex((b$ as dataBuffer).chunks!, 0), (b$ as dataBuffer).r, (b$ as dataBuffer).w)
		}
		return $.goSlice($.arrayIndex((b$ as dataBuffer).chunks!, 0), (b$ as dataBuffer).r, undefined)
	}

	public async lastChunkOrAlloc(want: bigint): globalThis.Promise<$.Slice<number>> {
		let b: dataBuffer | $.VarRef<dataBuffer> | null = this;
		const b$: dataBuffer = b == null ? $.pointerTarget<dataBuffer>(b) : (b as any).__isVarRef === true ? (b as any).value : (b as any).__goValue === undefined ? (b as any) : $.pointerTarget<dataBuffer>(b)
		if ($.sliceLen((b$ as dataBuffer).chunks) != 0) {
			let last: $.Slice<number> = $.arrayIndex((b$ as dataBuffer).chunks!, $.sliceLen((b$ as dataBuffer).chunks) - 1)
			if ((b$ as dataBuffer).w < $.sliceLen(last)) {
				return last
			}
		}
		let chunk: $.Slice<number> = await getDataBufferChunk(want);
		;(b$ as dataBuffer).chunks = $.appendOne((b$ as dataBuffer).chunks, chunk, $.appendZeros.nil);
		;(b$ as dataBuffer).w = 0
		return chunk
	}

	static __typeInfo = $.registerStructType(
		"http2.dataBuffer",
		() => new dataBuffer(),
		() => [$.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("Read", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("Write", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("bytesFromFirstChunk", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true), $.methodSignature("lastChunkOrAlloc", [["want", /* @__PURE__ */ $.basicType("int64")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true)],
		dataBuffer,
		() => [/* @__PURE__ */ $.structField("chunks", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))), [0], 0, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("r", /* @__PURE__ */ $.basicType("int"), [1], 24, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("w", /* @__PURE__ */ $.basicType("int"), [2], 32, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("size", /* @__PURE__ */ $.basicType("int"), [3], 40, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("expected", /* @__PURE__ */ $.basicType("int64"), [4], 48, false, { pkgPath: "golang.org/x/net/http2" })]
	)
}

export let dataChunkPools: sync.Pool[] = $.arrayValue([$.markAsStructValue(new sync.Pool({New: $.functionValue((): any => {
	return $.interfaceValue($.varRef<Uint8Array>($.arrayValue(new Uint8Array(1024))), "*[1024]byte", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 1024)))
}, ({ kind: $.TypeKind.Function, params: [], results: [{ kind: $.TypeKind.Interface, methods: [] }] } as $.FunctionTypeInfo))})), $.markAsStructValue(new sync.Pool({New: $.functionValue((): any => {
	return $.interfaceValue($.varRef<Uint8Array>($.arrayValue(new Uint8Array(2048))), "*[2048]byte", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 2048)))
}, ({ kind: $.TypeKind.Function, params: [], results: [{ kind: $.TypeKind.Interface, methods: [] }] } as $.FunctionTypeInfo))})), $.markAsStructValue(new sync.Pool({New: $.functionValue((): any => {
	return $.interfaceValue($.varRef<Uint8Array>($.arrayValue(new Uint8Array(4096))), "*[4096]byte", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 4096)))
}, ({ kind: $.TypeKind.Function, params: [], results: [{ kind: $.TypeKind.Interface, methods: [] }] } as $.FunctionTypeInfo))})), $.markAsStructValue(new sync.Pool({New: $.functionValue((): any => {
	return $.interfaceValue($.varRef<Uint8Array>($.arrayValue(new Uint8Array(8192))), "*[8192]byte", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 8192)))
}, ({ kind: $.TypeKind.Function, params: [], results: [{ kind: $.TypeKind.Interface, methods: [] }] } as $.FunctionTypeInfo))})), $.markAsStructValue(new sync.Pool({New: $.functionValue((): any => {
	return $.interfaceValue($.varRef<Uint8Array>($.arrayValue(new Uint8Array(16384))), "*[16384]byte", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 16384)))
}, ({ kind: $.TypeKind.Function, params: [], results: [{ kind: $.TypeKind.Interface, methods: [] }] } as $.FunctionTypeInfo))}))], /* @__PURE__ */ $.arrayType("sync.Pool", 5))

export function __goscript_set_dataChunkPools(__goscriptValue: sync.Pool[]): void {
	dataChunkPools = __goscriptValue
}

export async function getDataBufferChunk(size: bigint): globalThis.Promise<$.Slice<number>> {
	switch ((true as boolean)) {
		case size <= 1024n:
		{
			return $.goSlice($.pointerValue<Uint8Array>($.mustTypeAssert<$.VarRef<Uint8Array> | null>(await $.arrayIndex(dataChunkPools, 0).Get(), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 1024)))), undefined, undefined)
			break
		}
		case size <= 2048n:
		{
			return $.goSlice($.pointerValue<Uint8Array>($.mustTypeAssert<$.VarRef<Uint8Array> | null>(await $.arrayIndex(dataChunkPools, 1).Get(), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 2048)))), undefined, undefined)
			break
		}
		case size <= 4096n:
		{
			return $.goSlice($.pointerValue<Uint8Array>($.mustTypeAssert<$.VarRef<Uint8Array> | null>(await $.arrayIndex(dataChunkPools, 2).Get(), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 4096)))), undefined, undefined)
			break
		}
		case size <= 8192n:
		{
			return $.goSlice($.pointerValue<Uint8Array>($.mustTypeAssert<$.VarRef<Uint8Array> | null>(await $.arrayIndex(dataChunkPools, 3).Get(), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 8192)))), undefined, undefined)
			break
		}
		default:
		{
			return $.goSlice($.pointerValue<Uint8Array>($.mustTypeAssert<$.VarRef<Uint8Array> | null>(await $.arrayIndex(dataChunkPools, 4).Get(), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 16384)))), undefined, undefined)
			break
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export async function putDataBufferChunk(p: $.Slice<number>): globalThis.Promise<void> {
	switch ($.sliceLen(p)) {
		case 1024:
		{
			$.arrayIndex(dataChunkPools, 0).Put($.interfaceValue(($.sliceToArrayPointer<number>(p, 1024, "byte") as $.VarRef<Uint8Array> | null), "*[1024]byte", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 1024))))
			break
		}
		case 2048:
		{
			$.arrayIndex(dataChunkPools, 1).Put($.interfaceValue(($.sliceToArrayPointer<number>(p, 2048, "byte") as $.VarRef<Uint8Array> | null), "*[2048]byte", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 2048))))
			break
		}
		case 4096:
		{
			$.arrayIndex(dataChunkPools, 2).Put($.interfaceValue(($.sliceToArrayPointer<number>(p, 4096, "byte") as $.VarRef<Uint8Array> | null), "*[4096]byte", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 4096))))
			break
		}
		case 8192:
		{
			$.arrayIndex(dataChunkPools, 3).Put($.interfaceValue(($.sliceToArrayPointer<number>(p, 8192, "byte") as $.VarRef<Uint8Array> | null), "*[8192]byte", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 8192))))
			break
		}
		case 16384:
		{
			$.arrayIndex(dataChunkPools, 4).Put($.interfaceValue(($.sliceToArrayPointer<number>(p, 16384, "byte") as $.VarRef<Uint8Array> | null), "*[16384]byte", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 16384))))
			break
		}
		default:
		{
			$.panic(await fmt.Sprintf("unexpected buffer len=%v", $.basicInterfaceValue($.sliceLen(p), "int")))
			break
		}
	}
}

export let errReadEmpty: $.GoError = errors.New("read from empty dataBuffer")

export function __goscript_set_errReadEmpty(__goscriptValue: $.GoError): void {
	errReadEmpty = __goscriptValue
}
