// Generated file based on checksum.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as hash2 from "@goscript/hash/index.js"

import * as crc32 from "@goscript/hash/crc32/index.js"

import * as sync from "@goscript/sync/index.js"

import * as io from "@goscript/io/index.js"
import "@goscript/hash/index.js"
import "@goscript/hash/crc32/index.js"
import "@goscript/sync/index.js"
import "@goscript/io/index.js"

$.registerTypePackagePath("github.com/uber/tchannel-go", ["tchannel.ChecksumType", "tchannel.Checksum", "tchannel.nullChecksum", "tchannel.hashChecksum", "tchannel.noReleaseChecksum"])

export type ChecksumType = number

$.registerNamedValueType(
	"tchannel.ChecksumType",
	{ChecksumSize: (receiver: any, ...args: any[]) => (ChecksumType_ChecksumSize as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), New: (receiver: any, ...args: any[]) => (ChecksumType_New as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Release: (receiver: any, ...args: any[]) => (ChecksumType_Release as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), pool: (receiver: any, ...args: any[]) => (ChecksumType_pool as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("ChecksumSize", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("New", [], ["tchannel.Checksum"]), $.methodSignature("Release", [["checksum", "tchannel.Checksum"]]), $.methodSignature("pool", [], [/* @__PURE__ */ $.pointerType("sync.Pool")])]
);

$.registerNamedValueType(
	"*tchannel.ChecksumType",
	{ChecksumSize: (receiver: any, ...args: any[]) => (ChecksumType_ChecksumSize as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), New: (receiver: any, ...args: any[]) => (ChecksumType_New as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Release: (receiver: any, ...args: any[]) => (ChecksumType_Release as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), pool: (receiver: any, ...args: any[]) => (ChecksumType_pool as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("ChecksumSize", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("New", [], ["tchannel.Checksum"]), $.methodSignature("Release", [["checksum", "tchannel.Checksum"]]), $.methodSignature("pool", [], [/* @__PURE__ */ $.pointerType("sync.Pool")])]
);

export type Checksum = {
	Add(b: $.Slice<number>): $.Slice<number> | globalThis.Promise<$.Slice<number>>
	Release(): void
	Reset(): void
	Size(): number | globalThis.Promise<number>
	Sum(): $.Slice<number> | globalThis.Promise<$.Slice<number>>
	TypeCode(): ChecksumType
}

$.registerInterfaceType(
	"tchannel.Checksum",
	null,
	[$.methodSignature("Add", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("Release"), $.methodSignature("Reset"), $.methodSignature("Size", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Sum", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("TypeCode", [], [/* @__PURE__ */ $.basicType("uint8", "tchannel.ChecksumType")])]
);

export class nullChecksum {
	public _fields: {
	}

	constructor(init?: Partial<{}>, __goscriptValue?: boolean) {
		this._fields = {
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): nullChecksum {
		return new nullChecksum(this, true)
	}

	public __goscriptAssign(source: nullChecksum): void {
	}

	public Add(b: $.Slice<number>): $.Slice<number> {
		const c = this;
		return null
	}

	public Release(): void {
		const c = this;
		ChecksumType_Release(c.TypeCode(), $.interfaceValue<Checksum | null>((c).clone(), "tchannel.nullChecksum", "tchannel.nullChecksum"))
	}

	public Reset(): void {
		const c = this;
	}

	public Size(): number {
		const c = this;
		return 0
	}

	public Sum(): $.Slice<number> {
		const c = this;
		return null
	}

	public TypeCode(): ChecksumType {
		const c = this;
		return 0
	}

	static __typeInfo = $.registerStructType(
		"tchannel.nullChecksum",
		() => new nullChecksum(),
		() => [$.methodSignature("Add", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("Release"), $.methodSignature("Reset"), $.methodSignature("Size", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Sum", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("TypeCode", [], [/* @__PURE__ */ $.basicType("uint8", "tchannel.ChecksumType")])],
		nullChecksum,
		() => []
	)
}

export class hashChecksum {
	public get checksumType(): ChecksumType {
		return this._fields.checksumType
	}

	public set checksumType(value: ChecksumType) {
		this._fields.checksumType = value
	}

	public get hash(): hash2.Hash | null {
		return this._fields.hash
	}

	public set hash(value: hash2.Hash | null) {
		this._fields.hash = value
	}

	public get sumCache(): $.Slice<number> {
		return this._fields.sumCache
	}

	public set sumCache(value: $.Slice<number>) {
		this._fields.sumCache = value
	}

	public _fields: {
		checksumType: ChecksumType
		hash: hash2.Hash | null
		sumCache: $.Slice<number>
	}

	constructor(init?: Partial<{checksumType?: ChecksumType, hash?: hash2.Hash | null, sumCache?: $.Slice<number>}>, __goscriptValue?: boolean) {
		this._fields = {
			checksumType: init?.checksumType ?? (0 as ChecksumType),
			hash: init?.hash ?? (null! as hash2.Hash | null),
			sumCache: init?.sumCache ?? (null! as $.Slice<number>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): hashChecksum {
		return new hashChecksum(this, true)
	}

	public __goscriptAssign(source: hashChecksum): void {
		const target = this._fields
		const values = source._fields
		target.checksumType = values.checksumType
		target.hash = $.assignFieldValue(target.hash, values.hash, "hash.Hash")
		target.sumCache = values.sumCache
	}

	public async Add(b: $.Slice<number>): globalThis.Promise<$.Slice<number>> {
		const h: hashChecksum | $.VarRef<hashChecksum> | null = this;
		await $.pointerValue<Exclude<hash2.Hash, null>>($.pointerValue<hashChecksum>(h).hash).Write(b)
		return (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? ((h as any) as hashChecksum).Sum() : hashChecksum.prototype.Sum.call(h))
	}

	public Release(): void {
		const h: hashChecksum | $.VarRef<hashChecksum> | null = this;
		ChecksumType_Release((h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? ((h as any) as hashChecksum).TypeCode() : hashChecksum.prototype.TypeCode.call(h)), $.interfaceValue<Checksum | null>(h, "*tchannel.hashChecksum", /* @__PURE__ */ $.pointerType("tchannel.hashChecksum")))
	}

	public async Reset(): globalThis.Promise<void> {
		const h: hashChecksum | $.VarRef<hashChecksum> | null = this;
		void (__goscriptAwait = $.pointerValue<Exclude<hash2.Hash, null>>($.pointerValue<hashChecksum>(h).hash).Reset(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	public async Size(): globalThis.Promise<number> {
		const h: hashChecksum | $.VarRef<hashChecksum> | null = this;
		return $.pointerValue<Exclude<hash2.Hash, null>>($.pointerValue<hashChecksum>(h).hash).Size()
	}

	public async Sum(): globalThis.Promise<$.Slice<number>> {
		const h: hashChecksum | $.VarRef<hashChecksum> | null = this;
		const h$: hashChecksum = h == null ? $.pointerTarget<hashChecksum>(h) : (h as any).__isVarRef === true ? (h as any).value : (h as any).__goValue === undefined ? (h as any) : $.pointerTarget<hashChecksum>(h)
		return $.pointerValue<Exclude<hash2.Hash, null>>((h$ as hashChecksum).hash).Sum((h$ as hashChecksum).sumCache)
	}

	public TypeCode(): ChecksumType {
		const h: hashChecksum | $.VarRef<hashChecksum> | null = this;
		return $.pointerValue<hashChecksum>(h).checksumType
	}

	static __typeInfo = $.registerStructType(
		"tchannel.hashChecksum",
		() => new hashChecksum(),
		() => [$.methodSignature("Add", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true), $.methodSignature("Release", [], [], true), $.methodSignature("Reset", [], [], true), $.methodSignature("Size", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("Sum", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true), $.methodSignature("TypeCode", [], [/* @__PURE__ */ $.basicType("uint8", "tchannel.ChecksumType")], true)],
		hashChecksum,
		() => [/* @__PURE__ */ $.structField("checksumType", /* @__PURE__ */ $.basicType("uint8", "tchannel.ChecksumType"), [0], 0, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("hash", "hash.Hash", [1], 8, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("sumCache", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [2], 24, false, { pkgPath: "github.com/uber/tchannel-go" })]
	)
}

export class noReleaseChecksum {
	public get Checksum(): Checksum | null {
		return this._fields.Checksum
	}

	public set Checksum(value: Checksum | null) {
		this._fields.Checksum = value
	}

	public _fields: {
		Checksum: Checksum | null
	}

	constructor(init?: Partial<{Checksum?: Checksum | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Checksum: init?.Checksum ?? (null! as Checksum | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): noReleaseChecksum {
		return new noReleaseChecksum(this, true)
	}

	public __goscriptAssign(source: noReleaseChecksum): void {
		const target = this._fields
		const values = source._fields
		target.Checksum = $.assignFieldValue(target.Checksum, values.Checksum, "tchannel.Checksum")
	}

	public Release(): void {
		const n: noReleaseChecksum | $.VarRef<noReleaseChecksum> | null = this;
	}

	public async Add(b: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<Checksum | null, null>>(this.Checksum).Add(b)
	}

	public async Reset(): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<Checksum | null, null>>(this.Checksum).Reset()
	}

	public async Size(): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<Checksum | null, null>>(this.Checksum).Size()
	}

	public async Sum(): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<Checksum | null, null>>(this.Checksum).Sum()
	}

	public TypeCode(): any {
		return $.pointerValue<Exclude<Checksum | null, null>>(this.Checksum).TypeCode()
	}

	static __typeInfo = $.registerStructType(
		"tchannel.noReleaseChecksum",
		() => new noReleaseChecksum(),
		() => [$.methodSignature("Release", [], [], true), $.methodSignature("Add", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("Reset"), $.methodSignature("Size", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Sum", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("TypeCode", [], [/* @__PURE__ */ $.basicType("uint8", "tchannel.ChecksumType")])],
		noReleaseChecksum,
		() => [/* @__PURE__ */ $.structField("Checksum", "tchannel.Checksum", [0], 0, true, { anonymous: true })]
	)
}

export const ChecksumTypeNone: ChecksumType = 0

export const ChecksumTypeCrc32: ChecksumType = 1

export const ChecksumTypeFarmhash: ChecksumType = 2

export const ChecksumTypeCrc32C: ChecksumType = 3

export const checksumCount: number = 4

export let checksumPools: sync.Pool[] = $.arrayValue(globalThis.Array.from({ length: 4 }, () => $.markAsStructValue(new sync.Pool())), /* @__PURE__ */ $.arrayType("sync.Pool", 4))

export function __goscript_set_checksumPools(__goscriptValue: sync.Pool[]): void {
	checksumPools = __goscriptValue
}

function __goscriptInit0(): void {
	let crc32CastagnoliTable: $.VarRef<crc32.Table> | null = crc32.MakeTable(2197175160)

	$.pointerValue<sync.Pool>(ChecksumType_pool(0)).New = $.functionValue((): any => {
		return $.interfaceValue(new nullChecksum(undefined, true), "tchannel.nullChecksum", "tchannel.nullChecksum")
	}, ({ kind: $.TypeKind.Function, params: [], results: [{ kind: $.TypeKind.Interface, methods: [] }] } as $.FunctionTypeInfo))
	$.pointerValue<sync.Pool>(ChecksumType_pool(1)).New = $.functionValue((): any => {
		return $.interfaceValue(newHashChecksum(1, (crc32.NewIEEE() as hash2.Hash | null)), "*tchannel.hashChecksum", /* @__PURE__ */ $.pointerType("tchannel.hashChecksum"))
	}, ({ kind: $.TypeKind.Function, params: [], results: [{ kind: $.TypeKind.Interface, methods: [] }] } as $.FunctionTypeInfo))
	$.pointerValue<sync.Pool>(ChecksumType_pool(3)).New = $.functionValue((): any => {
		return $.interfaceValue(newHashChecksum(3, (crc32.New(crc32CastagnoliTable) as hash2.Hash | null)), "*tchannel.hashChecksum", /* @__PURE__ */ $.pointerType("tchannel.hashChecksum"))
	}, ({ kind: $.TypeKind.Function, params: [], results: [{ kind: $.TypeKind.Interface, methods: [] }] } as $.FunctionTypeInfo))

	// TODO: Implement farm hash.
	$.pointerValue<sync.Pool>(ChecksumType_pool(2)).New = $.functionValue((): any => {
		return $.interfaceValue(new nullChecksum(undefined, true), "tchannel.nullChecksum", "tchannel.nullChecksum")
	}, ({ kind: $.TypeKind.Function, params: [], results: [{ kind: $.TypeKind.Interface, methods: [] }] } as $.FunctionTypeInfo))
}

export function ChecksumType_ChecksumSize(t: ChecksumType): number {
	switch (t) {
		case 0:
		{
			return 0
			break
		}
		case 1:
		case 3:
		{
			return 4
			break
		}
		case 2:
		{
			return 4
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

export function ChecksumType_pool(t: ChecksumType): sync.Pool | $.VarRef<sync.Pool> | null {
	return $.indexRef(checksumPools, $.int(t))
}

export async function ChecksumType_New(t: ChecksumType): globalThis.Promise<Checksum | null> {
	let s = $.mustTypeAssert<Checksum | null>(await sync.Pool.prototype.Get.call($.pointerValue<sync.Pool>(ChecksumType_pool(t))), "tchannel.Checksum")
	void (__goscriptAwait = (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? (s as Exclude<Checksum, null>) : $.pointerValue<Exclude<Checksum, null>>(s)).Reset(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	return s
}

export function ChecksumType_Release(t: ChecksumType, checksum: Checksum | null): void {
	sync.Pool.prototype.Put.call($.pointerValue<sync.Pool>(ChecksumType_pool(t)), (checksum as any))
}

export function newHashChecksum(t: ChecksumType, hash: hash2.Hash | null): hashChecksum | $.VarRef<hashChecksum> | null {
	return new hashChecksum({checksumType: t, hash: hash, sumCache: $.makeSlice<number>(0, 4, "byte")})
}

var __goscriptAwait: any

export { __goscriptInit0 }
