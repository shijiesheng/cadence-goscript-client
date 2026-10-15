// Generated file based on flags.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

$.registerTypePackagePath("internal/goexperiment", ["goexperiment.Flags"])

export class Flags {
	public get FieldTrack(): boolean {
		return this._fields.FieldTrack
	}

	public set FieldTrack(value: boolean) {
		this._fields.FieldTrack = value
	}

	public get PreemptibleLoops(): boolean {
		return this._fields.PreemptibleLoops
	}

	public set PreemptibleLoops(value: boolean) {
		this._fields.PreemptibleLoops = value
	}

	public get StaticLockRanking(): boolean {
		return this._fields.StaticLockRanking
	}

	public set StaticLockRanking(value: boolean) {
		this._fields.StaticLockRanking = value
	}

	public get BoringCrypto(): boolean {
		return this._fields.BoringCrypto
	}

	public set BoringCrypto(value: boolean) {
		this._fields.BoringCrypto = value
	}

	// RegabiWrappers enables ABI wrappers for calling between
	// ABI0 and ABIInternal functions. Without this, the ABIs are
	// assumed to be identical so cross-ABI calls are direct.
	public get RegabiWrappers(): boolean {
		return this._fields.RegabiWrappers
	}

	public set RegabiWrappers(value: boolean) {
		this._fields.RegabiWrappers = value
	}

	// RegabiArgs enables register arguments/results in all
	// compiled Go functions.
	//
	// Requires wrappers (to do ABI translation), and reflect (so
	// reflection calls use registers).
	public get RegabiArgs(): boolean {
		return this._fields.RegabiArgs
	}

	public set RegabiArgs(value: boolean) {
		this._fields.RegabiArgs = value
	}

	// HeapMinimum512KiB reduces the minimum heap size to 512 KiB.
	//
	// This was originally reduced as part of PacerRedesign, but
	// has been broken out to its own experiment that is disabled
	// by default.
	public get HeapMinimum512KiB(): boolean {
		return this._fields.HeapMinimum512KiB
	}

	public set HeapMinimum512KiB(value: boolean) {
		this._fields.HeapMinimum512KiB = value
	}

	// Arenas causes the "arena" standard library package to be visible
	// to the outside world.
	public get Arenas(): boolean {
		return this._fields.Arenas
	}

	public set Arenas(value: boolean) {
		this._fields.Arenas = value
	}

	// CgoCheck2 enables an expensive cgo rule checker.
	// When this experiment is enabled, cgo rule checks occur regardless
	// of the GODEBUG=cgocheck setting provided at runtime.
	public get CgoCheck2(): boolean {
		return this._fields.CgoCheck2
	}

	public set CgoCheck2(value: boolean) {
		this._fields.CgoCheck2 = value
	}

	// LoopVar changes loop semantics so that each iteration gets its own
	// copy of the iteration variable.
	public get LoopVar(): boolean {
		return this._fields.LoopVar
	}

	public set LoopVar(value: boolean) {
		this._fields.LoopVar = value
	}

	// NewInliner enables a new+improved version of the function
	// inlining phase within the Go compiler.
	public get NewInliner(): boolean {
		return this._fields.NewInliner
	}

	public set NewInliner(value: boolean) {
		this._fields.NewInliner = value
	}

	// Dwarf5 enables DWARF version 5 debug info generation.
	public get Dwarf5(): boolean {
		return this._fields.Dwarf5
	}

	public set Dwarf5(value: boolean) {
		this._fields.Dwarf5 = value
	}

	// JSONv2 enables the json/v2 package.
	public get JSONv2(): boolean {
		return this._fields.JSONv2
	}

	public set JSONv2(value: boolean) {
		this._fields.JSONv2 = value
	}

	// GreenTeaGC enables the Green Tea GC implementation.
	public get GreenTeaGC(): boolean {
		return this._fields.GreenTeaGC
	}

	public set GreenTeaGC(value: boolean) {
		this._fields.GreenTeaGC = value
	}

	// RandomizedHeapBase enables heap base address randomization on 64-bit
	// platforms.
	public get RandomizedHeapBase64(): boolean {
		return this._fields.RandomizedHeapBase64
	}

	public set RandomizedHeapBase64(value: boolean) {
		this._fields.RandomizedHeapBase64 = value
	}

	// RuntimeFreegc enables the runtime to free and reuse memory more eagerly in some circumstances with compiler help.
	public get RuntimeFreegc(): boolean {
		return this._fields.RuntimeFreegc
	}

	public set RuntimeFreegc(value: boolean) {
		this._fields.RuntimeFreegc = value
	}

	// SizeSpecializedMalloc enables malloc implementations that are specialized per size class.
	public get SizeSpecializedMalloc(): boolean {
		return this._fields.SizeSpecializedMalloc
	}

	public set SizeSpecializedMalloc(value: boolean) {
		this._fields.SizeSpecializedMalloc = value
	}

	// SIMD enables the simd package and the compiler's handling
	// of SIMD intrinsics.
	public get SIMD(): boolean {
		return this._fields.SIMD
	}

	public set SIMD(value: boolean) {
		this._fields.SIMD = value
	}

	// RuntimeSecret enables the runtime/secret package.
	public get RuntimeSecret(): boolean {
		return this._fields.RuntimeSecret
	}

	public set RuntimeSecret(value: boolean) {
		this._fields.RuntimeSecret = value
	}

	// MapSplitGroup changes the internal representation of map groups
	// from interleaved key/elem slots (KVKVKVKV) to split key and elem
	// arrays (KKKKVVVV).
	public get MapSplitGroup(): boolean {
		return this._fields.MapSplitGroup
	}

	public set MapSplitGroup(value: boolean) {
		this._fields.MapSplitGroup = value
	}

	public _fields: {
		FieldTrack: boolean
		PreemptibleLoops: boolean
		StaticLockRanking: boolean
		BoringCrypto: boolean
		RegabiWrappers: boolean
		RegabiArgs: boolean
		HeapMinimum512KiB: boolean
		Arenas: boolean
		CgoCheck2: boolean
		LoopVar: boolean
		NewInliner: boolean
		Dwarf5: boolean
		JSONv2: boolean
		GreenTeaGC: boolean
		RandomizedHeapBase64: boolean
		RuntimeFreegc: boolean
		SizeSpecializedMalloc: boolean
		SIMD: boolean
		RuntimeSecret: boolean
		MapSplitGroup: boolean
	}

	constructor(init?: Partial<{FieldTrack?: boolean, PreemptibleLoops?: boolean, StaticLockRanking?: boolean, BoringCrypto?: boolean, RegabiWrappers?: boolean, RegabiArgs?: boolean, HeapMinimum512KiB?: boolean, Arenas?: boolean, CgoCheck2?: boolean, LoopVar?: boolean, NewInliner?: boolean, Dwarf5?: boolean, JSONv2?: boolean, GreenTeaGC?: boolean, RandomizedHeapBase64?: boolean, RuntimeFreegc?: boolean, SizeSpecializedMalloc?: boolean, SIMD?: boolean, RuntimeSecret?: boolean, MapSplitGroup?: boolean}>, __goscriptValue?: boolean) {
		this._fields = {
			FieldTrack: init?.FieldTrack ?? (false as boolean),
			PreemptibleLoops: init?.PreemptibleLoops ?? (false as boolean),
			StaticLockRanking: init?.StaticLockRanking ?? (false as boolean),
			BoringCrypto: init?.BoringCrypto ?? (false as boolean),
			RegabiWrappers: init?.RegabiWrappers ?? (false as boolean),
			RegabiArgs: init?.RegabiArgs ?? (false as boolean),
			HeapMinimum512KiB: init?.HeapMinimum512KiB ?? (false as boolean),
			Arenas: init?.Arenas ?? (false as boolean),
			CgoCheck2: init?.CgoCheck2 ?? (false as boolean),
			LoopVar: init?.LoopVar ?? (false as boolean),
			NewInliner: init?.NewInliner ?? (false as boolean),
			Dwarf5: init?.Dwarf5 ?? (false as boolean),
			JSONv2: init?.JSONv2 ?? (false as boolean),
			GreenTeaGC: init?.GreenTeaGC ?? (false as boolean),
			RandomizedHeapBase64: init?.RandomizedHeapBase64 ?? (false as boolean),
			RuntimeFreegc: init?.RuntimeFreegc ?? (false as boolean),
			SizeSpecializedMalloc: init?.SizeSpecializedMalloc ?? (false as boolean),
			SIMD: init?.SIMD ?? (false as boolean),
			RuntimeSecret: init?.RuntimeSecret ?? (false as boolean),
			MapSplitGroup: init?.MapSplitGroup ?? (false as boolean)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Flags {
		return new Flags(this, true)
	}

	public __goscriptAssign(source: Flags): void {
		const target = this._fields
		const values = source._fields
		target.FieldTrack = values.FieldTrack
		target.PreemptibleLoops = values.PreemptibleLoops
		target.StaticLockRanking = values.StaticLockRanking
		target.BoringCrypto = values.BoringCrypto
		target.RegabiWrappers = values.RegabiWrappers
		target.RegabiArgs = values.RegabiArgs
		target.HeapMinimum512KiB = values.HeapMinimum512KiB
		target.Arenas = values.Arenas
		target.CgoCheck2 = values.CgoCheck2
		target.LoopVar = values.LoopVar
		target.NewInliner = values.NewInliner
		target.Dwarf5 = values.Dwarf5
		target.JSONv2 = values.JSONv2
		target.GreenTeaGC = values.GreenTeaGC
		target.RandomizedHeapBase64 = values.RandomizedHeapBase64
		target.RuntimeFreegc = values.RuntimeFreegc
		target.SizeSpecializedMalloc = values.SizeSpecializedMalloc
		target.SIMD = values.SIMD
		target.RuntimeSecret = values.RuntimeSecret
		target.MapSplitGroup = values.MapSplitGroup
	}

	static __typeInfo = $.registerStructType(
		"goexperiment.Flags",
		() => new Flags(),
		() => [],
		Flags,
		() => [/* @__PURE__ */ $.structField("FieldTrack", /* @__PURE__ */ $.basicType("bool"), [0], 0, true), /* @__PURE__ */ $.structField("PreemptibleLoops", /* @__PURE__ */ $.basicType("bool"), [1], 1, true), /* @__PURE__ */ $.structField("StaticLockRanking", /* @__PURE__ */ $.basicType("bool"), [2], 2, true), /* @__PURE__ */ $.structField("BoringCrypto", /* @__PURE__ */ $.basicType("bool"), [3], 3, true), /* @__PURE__ */ $.structField("RegabiWrappers", /* @__PURE__ */ $.basicType("bool"), [4], 4, true), /* @__PURE__ */ $.structField("RegabiArgs", /* @__PURE__ */ $.basicType("bool"), [5], 5, true), /* @__PURE__ */ $.structField("HeapMinimum512KiB", /* @__PURE__ */ $.basicType("bool"), [6], 6, true), /* @__PURE__ */ $.structField("Arenas", /* @__PURE__ */ $.basicType("bool"), [7], 7, true), /* @__PURE__ */ $.structField("CgoCheck2", /* @__PURE__ */ $.basicType("bool"), [8], 8, true), /* @__PURE__ */ $.structField("LoopVar", /* @__PURE__ */ $.basicType("bool"), [9], 9, true), /* @__PURE__ */ $.structField("NewInliner", /* @__PURE__ */ $.basicType("bool"), [10], 10, true), /* @__PURE__ */ $.structField("Dwarf5", /* @__PURE__ */ $.basicType("bool"), [11], 11, true), /* @__PURE__ */ $.structField("JSONv2", /* @__PURE__ */ $.basicType("bool"), [12], 12, true), /* @__PURE__ */ $.structField("GreenTeaGC", /* @__PURE__ */ $.basicType("bool"), [13], 13, true), /* @__PURE__ */ $.structField("RandomizedHeapBase64", /* @__PURE__ */ $.basicType("bool"), [14], 14, true), /* @__PURE__ */ $.structField("RuntimeFreegc", /* @__PURE__ */ $.basicType("bool"), [15], 15, true), /* @__PURE__ */ $.structField("SizeSpecializedMalloc", /* @__PURE__ */ $.basicType("bool"), [16], 16, true), /* @__PURE__ */ $.structField("SIMD", /* @__PURE__ */ $.basicType("bool"), [17], 17, true), /* @__PURE__ */ $.structField("RuntimeSecret", /* @__PURE__ */ $.basicType("bool"), [18], 18, true), /* @__PURE__ */ $.structField("MapSplitGroup", /* @__PURE__ */ $.basicType("bool"), [19], 19, true)]
	)
}
