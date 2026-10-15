// Generated file based on cpu.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import "@goscript/unsafe/index.js"

import * as __goscript_cpu_wasm from "./cpu_wasm.gs.ts"
import "./cpu_wasm.gs.ts"

$.registerTypePackagePath("internal/cpu", ["cpu.CacheLinePad", "cpu.option"])

export class CacheLinePad {
	public get _blank0(): Uint8Array {
		return this._fields._blank0
	}

	public set _blank0(value: Uint8Array) {
		this._fields._blank0 = value
	}

	public _fields: {
		_blank0: Uint8Array
	}

	constructor(init?: Partial<{_blank0?: Uint8Array}>, __goscriptValue?: boolean) {
		this._fields = {
			_blank0: init?._blank0 !== undefined ? $.cloneArrayValue(init._blank0, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 64)) : $.arrayValue(new Uint8Array(64))
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): CacheLinePad {
		return new CacheLinePad(this, true)
	}

	public __goscriptAssign(source: CacheLinePad): void {
		const target = this._fields
		const values = source._fields
		target._blank0 = $.assignFieldValue(target._blank0, values._blank0, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 64))
	}

	static __typeInfo = $.registerStructType(
		"cpu.CacheLinePad",
		() => new CacheLinePad(),
		() => [],
		CacheLinePad,
		() => [/* @__PURE__ */ $.structField("_", /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 64), [0], 0, false, { key: "_blank0", pkgPath: "internal/cpu" })]
	)
}

export class option {
	public get Name(): string {
		return this._fields.Name
	}

	public set Name(value: string) {
		this._fields.Name = value
	}

	public get Feature(): $.VarRef<boolean> | null {
		return this._fields.Feature
	}

	public set Feature(value: $.VarRef<boolean> | null) {
		this._fields.Feature = value
	}

	public get Specified(): boolean {
		return this._fields.Specified
	}

	public set Specified(value: boolean) {
		this._fields.Specified = value
	}

	public get Enable(): boolean {
		return this._fields.Enable
	}

	public set Enable(value: boolean) {
		this._fields.Enable = value
	}

	public _fields: {
		Name: string
		Feature: $.VarRef<boolean> | null
		Specified: boolean
		Enable: boolean
	}

	constructor(init?: Partial<{Name?: string, Feature?: $.VarRef<boolean> | null, Specified?: boolean, Enable?: boolean}>, __goscriptValue?: boolean) {
		this._fields = {
			Name: init?.Name ?? ("" as string),
			Feature: init?.Feature ?? (null! as $.VarRef<boolean> | null),
			Specified: init?.Specified ?? (false as boolean),
			Enable: init?.Enable ?? (false as boolean)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): option {
		return new option(this, true)
	}

	public __goscriptAssign(source: option): void {
		const target = this._fields
		const values = source._fields
		target.Name = values.Name
		target.Feature = values.Feature
		target.Specified = values.Specified
		target.Enable = values.Enable
	}

	static __typeInfo = $.registerStructType(
		"cpu.option",
		() => new option(),
		() => [],
		option,
		() => [/* @__PURE__ */ $.structField("Name", /* @__PURE__ */ $.basicType("string"), [0], 0, true), /* @__PURE__ */ $.structField("Feature", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("bool")), [1], 16, true), /* @__PURE__ */ $.structField("Specified", /* @__PURE__ */ $.basicType("bool"), [2], 24, true), /* @__PURE__ */ $.structField("Enable", /* @__PURE__ */ $.basicType("bool"), [3], 25, true)]
	)
}

export var CacheLineSize: number

export function __goscript_init_CacheLineSize(): void {
	if (((CacheLineSize) as any) === undefined) {
		CacheLineSize = 64
	}
}

export function __goscript_get_CacheLineSize(): number {
	if (((CacheLineSize) as any) === undefined) {
		__goscript_init_CacheLineSize()
	}
	return CacheLineSize
}

export function __goscript_set_CacheLineSize(__goscriptValue: number): void {
	CacheLineSize = __goscriptValue
}

export let X86: {"_blank0": CacheLinePad, "HasAES": boolean, "HasADX": boolean, "HasAVX": boolean, "HasAVXVNNI": boolean, "HasAVX2": boolean, "HasAVX512": boolean, "HasAVX512F": boolean, "HasAVX512CD": boolean, "HasAVX512BW": boolean, "HasAVX512DQ": boolean, "HasAVX512VL": boolean, "HasAVX512GFNI": boolean, "HasAVX512VAES": boolean, "HasAVX512VNNI": boolean, "HasAVX512VBMI": boolean, "HasAVX512VBMI2": boolean, "HasAVX512BITALG": boolean, "HasAVX512VPOPCNTDQ": boolean, "HasAVX512VPCLMULQDQ": boolean, "HasBMI1": boolean, "HasBMI2": boolean, "HasERMS": boolean, "HasFSRM": boolean, "HasFMA": boolean, "HasGFNI": boolean, "HasOSXSAVE": boolean, "HasPCLMULQDQ": boolean, "HasPOPCNT": boolean, "HasRDTSCP": boolean, "HasSHA": boolean, "HasSSE3": boolean, "HasSSSE3": boolean, "HasSSE41": boolean, "HasSSE42": boolean, "HasVAES": boolean, "HasVPCLMULQDQ": boolean, "_blank37": CacheLinePad} = $.anonymousStructValue({"_blank0": new CacheLinePad(undefined, true), "HasAES": false, "HasADX": false, "HasAVX": false, "HasAVXVNNI": false, "HasAVX2": false, "HasAVX512": false, "HasAVX512F": false, "HasAVX512CD": false, "HasAVX512BW": false, "HasAVX512DQ": false, "HasAVX512VL": false, "HasAVX512GFNI": false, "HasAVX512VAES": false, "HasAVX512VNNI": false, "HasAVX512VBMI": false, "HasAVX512VBMI2": false, "HasAVX512BITALG": false, "HasAVX512VPOPCNTDQ": false, "HasAVX512VPCLMULQDQ": false, "HasBMI1": false, "HasBMI2": false, "HasERMS": false, "HasFSRM": false, "HasFMA": false, "HasGFNI": false, "HasOSXSAVE": false, "HasPCLMULQDQ": false, "HasPOPCNT": false, "HasRDTSCP": false, "HasSHA": false, "HasSSE3": false, "HasSSSE3": false, "HasSSE41": false, "HasSSE42": false, "HasVAES": false, "HasVPCLMULQDQ": false, "_blank37": new CacheLinePad(undefined, true)}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("_", "cpu.CacheLinePad", [0], 0, false, { key: "_blank0", pkgPath: "internal/cpu" }), /* @__PURE__ */ $.structField("HasAES", /* @__PURE__ */ $.basicType("bool"), [1], 64, true), /* @__PURE__ */ $.structField("HasADX", /* @__PURE__ */ $.basicType("bool"), [2], 65, true), /* @__PURE__ */ $.structField("HasAVX", /* @__PURE__ */ $.basicType("bool"), [3], 66, true), /* @__PURE__ */ $.structField("HasAVXVNNI", /* @__PURE__ */ $.basicType("bool"), [4], 67, true), /* @__PURE__ */ $.structField("HasAVX2", /* @__PURE__ */ $.basicType("bool"), [5], 68, true), /* @__PURE__ */ $.structField("HasAVX512", /* @__PURE__ */ $.basicType("bool"), [6], 69, true), /* @__PURE__ */ $.structField("HasAVX512F", /* @__PURE__ */ $.basicType("bool"), [7], 70, true), /* @__PURE__ */ $.structField("HasAVX512CD", /* @__PURE__ */ $.basicType("bool"), [8], 71, true), /* @__PURE__ */ $.structField("HasAVX512BW", /* @__PURE__ */ $.basicType("bool"), [9], 72, true), /* @__PURE__ */ $.structField("HasAVX512DQ", /* @__PURE__ */ $.basicType("bool"), [10], 73, true), /* @__PURE__ */ $.structField("HasAVX512VL", /* @__PURE__ */ $.basicType("bool"), [11], 74, true), /* @__PURE__ */ $.structField("HasAVX512GFNI", /* @__PURE__ */ $.basicType("bool"), [12], 75, true), /* @__PURE__ */ $.structField("HasAVX512VAES", /* @__PURE__ */ $.basicType("bool"), [13], 76, true), /* @__PURE__ */ $.structField("HasAVX512VNNI", /* @__PURE__ */ $.basicType("bool"), [14], 77, true), /* @__PURE__ */ $.structField("HasAVX512VBMI", /* @__PURE__ */ $.basicType("bool"), [15], 78, true), /* @__PURE__ */ $.structField("HasAVX512VBMI2", /* @__PURE__ */ $.basicType("bool"), [16], 79, true), /* @__PURE__ */ $.structField("HasAVX512BITALG", /* @__PURE__ */ $.basicType("bool"), [17], 80, true), /* @__PURE__ */ $.structField("HasAVX512VPOPCNTDQ", /* @__PURE__ */ $.basicType("bool"), [18], 81, true), /* @__PURE__ */ $.structField("HasAVX512VPCLMULQDQ", /* @__PURE__ */ $.basicType("bool"), [19], 82, true), /* @__PURE__ */ $.structField("HasBMI1", /* @__PURE__ */ $.basicType("bool"), [20], 83, true), /* @__PURE__ */ $.structField("HasBMI2", /* @__PURE__ */ $.basicType("bool"), [21], 84, true), /* @__PURE__ */ $.structField("HasERMS", /* @__PURE__ */ $.basicType("bool"), [22], 85, true), /* @__PURE__ */ $.structField("HasFSRM", /* @__PURE__ */ $.basicType("bool"), [23], 86, true), /* @__PURE__ */ $.structField("HasFMA", /* @__PURE__ */ $.basicType("bool"), [24], 87, true), /* @__PURE__ */ $.structField("HasGFNI", /* @__PURE__ */ $.basicType("bool"), [25], 88, true), /* @__PURE__ */ $.structField("HasOSXSAVE", /* @__PURE__ */ $.basicType("bool"), [26], 89, true), /* @__PURE__ */ $.structField("HasPCLMULQDQ", /* @__PURE__ */ $.basicType("bool"), [27], 90, true), /* @__PURE__ */ $.structField("HasPOPCNT", /* @__PURE__ */ $.basicType("bool"), [28], 91, true), /* @__PURE__ */ $.structField("HasRDTSCP", /* @__PURE__ */ $.basicType("bool"), [29], 92, true), /* @__PURE__ */ $.structField("HasSHA", /* @__PURE__ */ $.basicType("bool"), [30], 93, true), /* @__PURE__ */ $.structField("HasSSE3", /* @__PURE__ */ $.basicType("bool"), [31], 94, true), /* @__PURE__ */ $.structField("HasSSSE3", /* @__PURE__ */ $.basicType("bool"), [32], 95, true), /* @__PURE__ */ $.structField("HasSSE41", /* @__PURE__ */ $.basicType("bool"), [33], 96, true), /* @__PURE__ */ $.structField("HasSSE42", /* @__PURE__ */ $.basicType("bool"), [34], 97, true), /* @__PURE__ */ $.structField("HasVAES", /* @__PURE__ */ $.basicType("bool"), [35], 98, true), /* @__PURE__ */ $.structField("HasVPCLMULQDQ", /* @__PURE__ */ $.basicType("bool"), [36], 99, true), /* @__PURE__ */ $.structField("_", "cpu.CacheLinePad", [37], 100, false, { key: "_blank37", pkgPath: "internal/cpu" })] })

export function __goscript_set_X86(__goscriptValue: {"_blank0": CacheLinePad, "HasAES": boolean, "HasADX": boolean, "HasAVX": boolean, "HasAVXVNNI": boolean, "HasAVX2": boolean, "HasAVX512": boolean, "HasAVX512F": boolean, "HasAVX512CD": boolean, "HasAVX512BW": boolean, "HasAVX512DQ": boolean, "HasAVX512VL": boolean, "HasAVX512GFNI": boolean, "HasAVX512VAES": boolean, "HasAVX512VNNI": boolean, "HasAVX512VBMI": boolean, "HasAVX512VBMI2": boolean, "HasAVX512BITALG": boolean, "HasAVX512VPOPCNTDQ": boolean, "HasAVX512VPCLMULQDQ": boolean, "HasBMI1": boolean, "HasBMI2": boolean, "HasERMS": boolean, "HasFSRM": boolean, "HasFMA": boolean, "HasGFNI": boolean, "HasOSXSAVE": boolean, "HasPCLMULQDQ": boolean, "HasPOPCNT": boolean, "HasRDTSCP": boolean, "HasSHA": boolean, "HasSSE3": boolean, "HasSSSE3": boolean, "HasSSE41": boolean, "HasSSE42": boolean, "HasVAES": boolean, "HasVPCLMULQDQ": boolean, "_blank37": CacheLinePad}): void {
	$.assignStruct(X86, __goscriptValue)
}

export let ARM: {"_blank0": CacheLinePad, "HasVFPv4": boolean, "HasIDIVA": boolean, "HasV7Atomics": boolean, "_blank4": CacheLinePad} = $.anonymousStructValue({"_blank0": new CacheLinePad(undefined, true), "HasVFPv4": false, "HasIDIVA": false, "HasV7Atomics": false, "_blank4": new CacheLinePad(undefined, true)}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("_", "cpu.CacheLinePad", [0], 0, false, { key: "_blank0", pkgPath: "internal/cpu" }), /* @__PURE__ */ $.structField("HasVFPv4", /* @__PURE__ */ $.basicType("bool"), [1], 64, true), /* @__PURE__ */ $.structField("HasIDIVA", /* @__PURE__ */ $.basicType("bool"), [2], 65, true), /* @__PURE__ */ $.structField("HasV7Atomics", /* @__PURE__ */ $.basicType("bool"), [3], 66, true), /* @__PURE__ */ $.structField("_", "cpu.CacheLinePad", [4], 67, false, { key: "_blank4", pkgPath: "internal/cpu" })] })

export function __goscript_set_ARM(__goscriptValue: {"_blank0": CacheLinePad, "HasVFPv4": boolean, "HasIDIVA": boolean, "HasV7Atomics": boolean, "_blank4": CacheLinePad}): void {
	$.assignStruct(ARM, __goscriptValue)
}

export let ARM64: {"_blank0": CacheLinePad, "HasAES": boolean, "HasPMULL": boolean, "HasSHA1": boolean, "HasSHA2": boolean, "HasSHA512": boolean, "HasSHA3": boolean, "HasCRC32": boolean, "HasATOMICS": boolean, "HasCPUID": boolean, "HasDIT": boolean, "HasSB": boolean, "IsNeoverse": boolean, "_blank13": CacheLinePad} = $.anonymousStructValue({"_blank0": new CacheLinePad(undefined, true), "HasAES": false, "HasPMULL": false, "HasSHA1": false, "HasSHA2": false, "HasSHA512": false, "HasSHA3": false, "HasCRC32": false, "HasATOMICS": false, "HasCPUID": false, "HasDIT": false, "HasSB": false, "IsNeoverse": false, "_blank13": new CacheLinePad(undefined, true)}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("_", "cpu.CacheLinePad", [0], 0, false, { key: "_blank0", pkgPath: "internal/cpu" }), /* @__PURE__ */ $.structField("HasAES", /* @__PURE__ */ $.basicType("bool"), [1], 64, true), /* @__PURE__ */ $.structField("HasPMULL", /* @__PURE__ */ $.basicType("bool"), [2], 65, true), /* @__PURE__ */ $.structField("HasSHA1", /* @__PURE__ */ $.basicType("bool"), [3], 66, true), /* @__PURE__ */ $.structField("HasSHA2", /* @__PURE__ */ $.basicType("bool"), [4], 67, true), /* @__PURE__ */ $.structField("HasSHA512", /* @__PURE__ */ $.basicType("bool"), [5], 68, true), /* @__PURE__ */ $.structField("HasSHA3", /* @__PURE__ */ $.basicType("bool"), [6], 69, true), /* @__PURE__ */ $.structField("HasCRC32", /* @__PURE__ */ $.basicType("bool"), [7], 70, true), /* @__PURE__ */ $.structField("HasATOMICS", /* @__PURE__ */ $.basicType("bool"), [8], 71, true), /* @__PURE__ */ $.structField("HasCPUID", /* @__PURE__ */ $.basicType("bool"), [9], 72, true), /* @__PURE__ */ $.structField("HasDIT", /* @__PURE__ */ $.basicType("bool"), [10], 73, true), /* @__PURE__ */ $.structField("HasSB", /* @__PURE__ */ $.basicType("bool"), [11], 74, true), /* @__PURE__ */ $.structField("IsNeoverse", /* @__PURE__ */ $.basicType("bool"), [12], 75, true), /* @__PURE__ */ $.structField("_", "cpu.CacheLinePad", [13], 76, false, { key: "_blank13", pkgPath: "internal/cpu" })] })

export function __goscript_set_ARM64(__goscriptValue: {"_blank0": CacheLinePad, "HasAES": boolean, "HasPMULL": boolean, "HasSHA1": boolean, "HasSHA2": boolean, "HasSHA512": boolean, "HasSHA3": boolean, "HasCRC32": boolean, "HasATOMICS": boolean, "HasCPUID": boolean, "HasDIT": boolean, "HasSB": boolean, "IsNeoverse": boolean, "_blank13": CacheLinePad}): void {
	$.assignStruct(ARM64, __goscriptValue)
}

export let Loong64: {"_blank0": CacheLinePad, "HasLSX": boolean, "HasLASX": boolean, "HasCRC32": boolean, "HasLAMCAS": boolean, "HasLAM_BH": boolean, "HasLLACQ_SCREL": boolean, "HasSCQ": boolean, "HasDBAR_HINTS": boolean, "_blank9": CacheLinePad} = $.anonymousStructValue({"_blank0": new CacheLinePad(undefined, true), "HasLSX": false, "HasLASX": false, "HasCRC32": false, "HasLAMCAS": false, "HasLAM_BH": false, "HasLLACQ_SCREL": false, "HasSCQ": false, "HasDBAR_HINTS": false, "_blank9": new CacheLinePad(undefined, true)}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("_", "cpu.CacheLinePad", [0], 0, false, { key: "_blank0", pkgPath: "internal/cpu" }), /* @__PURE__ */ $.structField("HasLSX", /* @__PURE__ */ $.basicType("bool"), [1], 64, true), /* @__PURE__ */ $.structField("HasLASX", /* @__PURE__ */ $.basicType("bool"), [2], 65, true), /* @__PURE__ */ $.structField("HasCRC32", /* @__PURE__ */ $.basicType("bool"), [3], 66, true), /* @__PURE__ */ $.structField("HasLAMCAS", /* @__PURE__ */ $.basicType("bool"), [4], 67, true), /* @__PURE__ */ $.structField("HasLAM_BH", /* @__PURE__ */ $.basicType("bool"), [5], 68, true), /* @__PURE__ */ $.structField("HasLLACQ_SCREL", /* @__PURE__ */ $.basicType("bool"), [6], 69, true), /* @__PURE__ */ $.structField("HasSCQ", /* @__PURE__ */ $.basicType("bool"), [7], 70, true), /* @__PURE__ */ $.structField("HasDBAR_HINTS", /* @__PURE__ */ $.basicType("bool"), [8], 71, true), /* @__PURE__ */ $.structField("_", "cpu.CacheLinePad", [9], 72, false, { key: "_blank9", pkgPath: "internal/cpu" })] })

export function __goscript_set_Loong64(__goscriptValue: {"_blank0": CacheLinePad, "HasLSX": boolean, "HasLASX": boolean, "HasCRC32": boolean, "HasLAMCAS": boolean, "HasLAM_BH": boolean, "HasLLACQ_SCREL": boolean, "HasSCQ": boolean, "HasDBAR_HINTS": boolean, "_blank9": CacheLinePad}): void {
	$.assignStruct(Loong64, __goscriptValue)
}

export let MIPS64X: {"_blank0": CacheLinePad, "HasMSA": boolean, "_blank2": CacheLinePad} = $.anonymousStructValue({"_blank0": new CacheLinePad(undefined, true), "HasMSA": false, "_blank2": new CacheLinePad(undefined, true)}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("_", "cpu.CacheLinePad", [0], 0, false, { key: "_blank0", pkgPath: "internal/cpu" }), /* @__PURE__ */ $.structField("HasMSA", /* @__PURE__ */ $.basicType("bool"), [1], 64, true), /* @__PURE__ */ $.structField("_", "cpu.CacheLinePad", [2], 65, false, { key: "_blank2", pkgPath: "internal/cpu" })] })

export function __goscript_set_MIPS64X(__goscriptValue: {"_blank0": CacheLinePad, "HasMSA": boolean, "_blank2": CacheLinePad}): void {
	$.assignStruct(MIPS64X, __goscriptValue)
}

export let PPC64: {"_blank0": CacheLinePad, "HasDARN": boolean, "HasSCV": boolean, "IsPOWER8": boolean, "IsPOWER9": boolean, "IsPOWER10": boolean, "_blank6": CacheLinePad} = $.anonymousStructValue({"_blank0": new CacheLinePad(undefined, true), "HasDARN": false, "HasSCV": false, "IsPOWER8": false, "IsPOWER9": false, "IsPOWER10": false, "_blank6": new CacheLinePad(undefined, true)}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("_", "cpu.CacheLinePad", [0], 0, false, { key: "_blank0", pkgPath: "internal/cpu" }), /* @__PURE__ */ $.structField("HasDARN", /* @__PURE__ */ $.basicType("bool"), [1], 64, true), /* @__PURE__ */ $.structField("HasSCV", /* @__PURE__ */ $.basicType("bool"), [2], 65, true), /* @__PURE__ */ $.structField("IsPOWER8", /* @__PURE__ */ $.basicType("bool"), [3], 66, true), /* @__PURE__ */ $.structField("IsPOWER9", /* @__PURE__ */ $.basicType("bool"), [4], 67, true), /* @__PURE__ */ $.structField("IsPOWER10", /* @__PURE__ */ $.basicType("bool"), [5], 68, true), /* @__PURE__ */ $.structField("_", "cpu.CacheLinePad", [6], 69, false, { key: "_blank6", pkgPath: "internal/cpu" })] })

export function __goscript_set_PPC64(__goscriptValue: {"_blank0": CacheLinePad, "HasDARN": boolean, "HasSCV": boolean, "IsPOWER8": boolean, "IsPOWER9": boolean, "IsPOWER10": boolean, "_blank6": CacheLinePad}): void {
	$.assignStruct(PPC64, __goscriptValue)
}

export let S390X: {"_blank0": CacheLinePad, "HasZARCH": boolean, "HasSTFLE": boolean, "HasLDISP": boolean, "HasEIMM": boolean, "HasDFP": boolean, "HasETF3EH": boolean, "HasMSA": boolean, "HasAES": boolean, "HasAESCBC": boolean, "HasAESCTR": boolean, "HasAESGCM": boolean, "HasGHASH": boolean, "HasSHA1": boolean, "HasSHA256": boolean, "HasSHA512": boolean, "HasSHA3": boolean, "HasVX": boolean, "HasVXE": boolean, "HasKDSA": boolean, "HasECDSA": boolean, "HasEDDSA": boolean, "_blank22": CacheLinePad} = $.anonymousStructValue({"_blank0": new CacheLinePad(undefined, true), "HasZARCH": false, "HasSTFLE": false, "HasLDISP": false, "HasEIMM": false, "HasDFP": false, "HasETF3EH": false, "HasMSA": false, "HasAES": false, "HasAESCBC": false, "HasAESCTR": false, "HasAESGCM": false, "HasGHASH": false, "HasSHA1": false, "HasSHA256": false, "HasSHA512": false, "HasSHA3": false, "HasVX": false, "HasVXE": false, "HasKDSA": false, "HasECDSA": false, "HasEDDSA": false, "_blank22": new CacheLinePad(undefined, true)}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("_", "cpu.CacheLinePad", [0], 0, false, { key: "_blank0", pkgPath: "internal/cpu" }), /* @__PURE__ */ $.structField("HasZARCH", /* @__PURE__ */ $.basicType("bool"), [1], 64, true), /* @__PURE__ */ $.structField("HasSTFLE", /* @__PURE__ */ $.basicType("bool"), [2], 65, true), /* @__PURE__ */ $.structField("HasLDISP", /* @__PURE__ */ $.basicType("bool"), [3], 66, true), /* @__PURE__ */ $.structField("HasEIMM", /* @__PURE__ */ $.basicType("bool"), [4], 67, true), /* @__PURE__ */ $.structField("HasDFP", /* @__PURE__ */ $.basicType("bool"), [5], 68, true), /* @__PURE__ */ $.structField("HasETF3EH", /* @__PURE__ */ $.basicType("bool"), [6], 69, true), /* @__PURE__ */ $.structField("HasMSA", /* @__PURE__ */ $.basicType("bool"), [7], 70, true), /* @__PURE__ */ $.structField("HasAES", /* @__PURE__ */ $.basicType("bool"), [8], 71, true), /* @__PURE__ */ $.structField("HasAESCBC", /* @__PURE__ */ $.basicType("bool"), [9], 72, true), /* @__PURE__ */ $.structField("HasAESCTR", /* @__PURE__ */ $.basicType("bool"), [10], 73, true), /* @__PURE__ */ $.structField("HasAESGCM", /* @__PURE__ */ $.basicType("bool"), [11], 74, true), /* @__PURE__ */ $.structField("HasGHASH", /* @__PURE__ */ $.basicType("bool"), [12], 75, true), /* @__PURE__ */ $.structField("HasSHA1", /* @__PURE__ */ $.basicType("bool"), [13], 76, true), /* @__PURE__ */ $.structField("HasSHA256", /* @__PURE__ */ $.basicType("bool"), [14], 77, true), /* @__PURE__ */ $.structField("HasSHA512", /* @__PURE__ */ $.basicType("bool"), [15], 78, true), /* @__PURE__ */ $.structField("HasSHA3", /* @__PURE__ */ $.basicType("bool"), [16], 79, true), /* @__PURE__ */ $.structField("HasVX", /* @__PURE__ */ $.basicType("bool"), [17], 80, true), /* @__PURE__ */ $.structField("HasVXE", /* @__PURE__ */ $.basicType("bool"), [18], 81, true), /* @__PURE__ */ $.structField("HasKDSA", /* @__PURE__ */ $.basicType("bool"), [19], 82, true), /* @__PURE__ */ $.structField("HasECDSA", /* @__PURE__ */ $.basicType("bool"), [20], 83, true), /* @__PURE__ */ $.structField("HasEDDSA", /* @__PURE__ */ $.basicType("bool"), [21], 84, true), /* @__PURE__ */ $.structField("_", "cpu.CacheLinePad", [22], 85, false, { key: "_blank22", pkgPath: "internal/cpu" })] })

export function __goscript_set_S390X(__goscriptValue: {"_blank0": CacheLinePad, "HasZARCH": boolean, "HasSTFLE": boolean, "HasLDISP": boolean, "HasEIMM": boolean, "HasDFP": boolean, "HasETF3EH": boolean, "HasMSA": boolean, "HasAES": boolean, "HasAESCBC": boolean, "HasAESCTR": boolean, "HasAESGCM": boolean, "HasGHASH": boolean, "HasSHA1": boolean, "HasSHA256": boolean, "HasSHA512": boolean, "HasSHA3": boolean, "HasVX": boolean, "HasVXE": boolean, "HasKDSA": boolean, "HasECDSA": boolean, "HasEDDSA": boolean, "_blank22": CacheLinePad}): void {
	$.assignStruct(S390X, __goscriptValue)
}

export let RISCV64: {"_blank0": CacheLinePad, "HasFastMisaligned": boolean, "HasV": boolean, "HasZbb": boolean, "HasZbc": boolean, "HasZvbb": boolean, "HasZvbc": boolean, "HasZvkg": boolean, "HasZvkned": boolean, "HasZvknha": boolean, "HasZvknhb": boolean, "HasZvksed": boolean, "HasZvksh": boolean, "HasZvkt": boolean, "_blank14": CacheLinePad} = $.anonymousStructValue({"_blank0": new CacheLinePad(undefined, true), "HasFastMisaligned": false, "HasV": false, "HasZbb": false, "HasZbc": false, "HasZvbb": false, "HasZvbc": false, "HasZvkg": false, "HasZvkned": false, "HasZvknha": false, "HasZvknhb": false, "HasZvksed": false, "HasZvksh": false, "HasZvkt": false, "_blank14": new CacheLinePad(undefined, true)}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("_", "cpu.CacheLinePad", [0], 0, false, { key: "_blank0", pkgPath: "internal/cpu" }), /* @__PURE__ */ $.structField("HasFastMisaligned", /* @__PURE__ */ $.basicType("bool"), [1], 64, true), /* @__PURE__ */ $.structField("HasV", /* @__PURE__ */ $.basicType("bool"), [2], 65, true), /* @__PURE__ */ $.structField("HasZbb", /* @__PURE__ */ $.basicType("bool"), [3], 66, true), /* @__PURE__ */ $.structField("HasZbc", /* @__PURE__ */ $.basicType("bool"), [4], 67, true), /* @__PURE__ */ $.structField("HasZvbb", /* @__PURE__ */ $.basicType("bool"), [5], 68, true), /* @__PURE__ */ $.structField("HasZvbc", /* @__PURE__ */ $.basicType("bool"), [6], 69, true), /* @__PURE__ */ $.structField("HasZvkg", /* @__PURE__ */ $.basicType("bool"), [7], 70, true), /* @__PURE__ */ $.structField("HasZvkned", /* @__PURE__ */ $.basicType("bool"), [8], 71, true), /* @__PURE__ */ $.structField("HasZvknha", /* @__PURE__ */ $.basicType("bool"), [9], 72, true), /* @__PURE__ */ $.structField("HasZvknhb", /* @__PURE__ */ $.basicType("bool"), [10], 73, true), /* @__PURE__ */ $.structField("HasZvksed", /* @__PURE__ */ $.basicType("bool"), [11], 74, true), /* @__PURE__ */ $.structField("HasZvksh", /* @__PURE__ */ $.basicType("bool"), [12], 75, true), /* @__PURE__ */ $.structField("HasZvkt", /* @__PURE__ */ $.basicType("bool"), [13], 76, true), /* @__PURE__ */ $.structField("_", "cpu.CacheLinePad", [14], 77, false, { key: "_blank14", pkgPath: "internal/cpu" })] })

export function __goscript_set_RISCV64(__goscriptValue: {"_blank0": CacheLinePad, "HasFastMisaligned": boolean, "HasV": boolean, "HasZbb": boolean, "HasZbc": boolean, "HasZvbb": boolean, "HasZvbc": boolean, "HasZvkg": boolean, "HasZvkned": boolean, "HasZvknha": boolean, "HasZvknhb": boolean, "HasZvksed": boolean, "HasZvksh": boolean, "HasZvkt": boolean, "_blank14": CacheLinePad}): void {
	$.assignStruct(RISCV64, __goscriptValue)
}

export let doDerived: (() => void) | null = null! as (() => void) | null

export function __goscript_set_doDerived(__goscriptValue: (() => void) | null): void {
	doDerived = __goscriptValue
}

export async function Initialize(env: string): globalThis.Promise<void> {
	__goscript_cpu_wasm.doinit()
	await processOptions(env)
	if (doDerived != null) {
		void (__goscriptAwait = doDerived!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}
}

export let options: $.Slice<option> = null! as $.Slice<option>

export function __goscript_set_options(__goscriptValue: $.Slice<option>): void {
	options = __goscriptValue
}

export async function processOptions(env: string): globalThis.Promise<void> {
	field: while (!$.stringEqual(env, "")) {
		let field = ""
		let i: number = indexByte(env, 44)
		if (i < 0) {
			let __goscriptAssign0_0: string = env
			let __goscriptAssign0_1: string = ""
			field = __goscriptAssign0_0
			env = __goscriptAssign0_1
		} else {
			let __goscriptAssign1_0: string = $.sliceStringOrBytes(env, undefined, i)
			let __goscriptAssign1_1: string = $.sliceStringOrBytes(env, i + 1, undefined)
			field = __goscriptAssign1_0
			env = __goscriptAssign1_1
		}
		if (($.stringLen(field) < 4) || (!$.stringEqual($.sliceStringOrBytes(field, undefined, 4), "cpu."))) {
			continue
		}
		i = indexByte(field, 61)
		if (i < 0) {
			await $.print("GODEBUG: no value specified for \"", field, "\"\n")
			continue
		}
		let key = $.sliceStringOrBytes(field, 4, i)
		let value = $.sliceStringOrBytes(field, i + 1, undefined)

		let enable: boolean = false
		switch (value) {
			case "on":
			{
				enable = true
				break
			}
			case "off":
			{
				enable = false
				break
			}
			default:
			{
				await $.print("GODEBUG: value \"", value, "\" not supported for cpu option \"", key, "\"\n")
				continue field
				break
			}
		}

		if ($.stringEqual(key, "all")) {
			for (let __goscriptRangeTarget0 = options, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), i = 0; i < __goscriptRangeWindow0.length; i++) {
				;((__goscriptRangeWindow0.backing as any[])[__goscriptRangeWindow0.offset + i] as option).Specified = true;
				;((__goscriptRangeWindow0.backing as any[])[__goscriptRangeWindow0.offset + i] as option).Enable = enable
			}
			continue field
		}

		for (let __goscriptRangeTarget1 = options, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), i = 0; i < __goscriptRangeWindow1.length; i++) {
			if ($.stringEqual(((__goscriptRangeWindow1.backing as any[])[__goscriptRangeWindow1.offset + i] as option).Name, key)) {
				;((__goscriptRangeWindow1.backing as any[])[__goscriptRangeWindow1.offset + i] as option).Specified = true;
				;((__goscriptRangeWindow1.backing as any[])[__goscriptRangeWindow1.offset + i] as option).Enable = enable
				continue field
			}
		}

		await $.print("GODEBUG: unknown cpu feature \"", key, "\"\n")
	}

	for (let __goscriptRangeTarget2 = options, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow2.length; __rangeIndex++) {
		let o = ((__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + __rangeIndex] as option)).clone()
		if (!o.Specified) {
			continue
		}

		if (o.Enable && !$.pointerValue<boolean>(o.Feature)) {
			await $.print("GODEBUG: can not enable \"", o.Name, "\", missing CPU support\n")
			continue
		}

		o.Feature!.value = o.Enable
	}
}

export function indexByte(s: string, c: number): number {
	for (let i = 0; i < $.stringLen(s); i++) {
		if ($.indexString(s, i) == c) {
			return i
		}
	}
	return -1
}

var __goscriptAwait: any
