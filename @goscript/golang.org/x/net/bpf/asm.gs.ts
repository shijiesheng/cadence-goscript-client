// Generated file based on asm.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as __goscript_instructions from "./instructions.gs.ts"
import "@goscript/fmt/index.js"
import "./instructions.gs.ts"

export async function Assemble(insts: $.Slice<__goscript_instructions.Instruction | null>): globalThis.Promise<[$.Slice<__goscript_instructions.RawInstruction>, $.GoError]> {
	let ret: $.Slice<__goscript_instructions.RawInstruction> = $.makeSlice<__goscript_instructions.RawInstruction>($.sliceLen(insts), undefined, undefined, () => new __goscript_instructions.RawInstruction(undefined, true))
	let err: $.GoError = null! as $.GoError
	for (let __goscriptRangeTarget0 = insts, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __goscriptSliceWindow0 = $.sliceRange(ret), i = 0; i < __goscriptRangeWindow0.length; i++) {
		let inst = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + i] as __goscript_instructions.Instruction | null)
		let __goscriptTuple0: any = await (inst !== null && (inst as any).__isVarRef !== true && (inst as any).__goValue === undefined ? (inst as Exclude<__goscript_instructions.Instruction, null>) : $.pointerValue<Exclude<__goscript_instructions.Instruction, null>>(inst)).Assemble()
		$.assignStruct((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)], __goscriptTuple0[0])
		err = __goscriptTuple0[1]
		if (err != null) {
			return [null, fmt.Errorf("assembling instruction %d: %s", $.basicInterfaceValue(i + 1, "int"), (err as any))]
		}
	}
	return [ret, null]
}

export function Disassemble(raw: $.Slice<__goscript_instructions.RawInstruction>): [$.Slice<__goscript_instructions.Instruction | null>, boolean] {
	let insts: $.Slice<__goscript_instructions.Instruction | null> = null! as $.Slice<__goscript_instructions.Instruction | null>
	let allDecoded: boolean = false
	insts = $.makeSlice<__goscript_instructions.Instruction | null>($.sliceLen(raw))
	allDecoded = true
	for (let __goscriptRangeTarget1 = raw, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __goscriptSliceWindow1 = $.sliceRange(insts), i = 0; i < __goscriptRangeWindow1.length; i++) {
		let r = ((__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + i] as __goscript_instructions.RawInstruction)).clone();
		;(__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, i)] = r.Disassemble()
		{
			let [, ok] = $.typeAssertTuple<__goscript_instructions.RawInstruction>(((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, i)] as __goscript_instructions.Instruction | null), "bpf.RawInstruction")
			if (ok) {
				allDecoded = false
			}
		}
	}
	return [insts, allDecoded]
}
