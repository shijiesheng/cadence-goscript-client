// Generated file based on vm.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as errors from "@goscript/errors/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as __goscript_asm from "./asm.gs.ts"

import * as __goscript_constants from "./constants.gs.ts"

import * as __goscript_instructions from "./instructions.gs.ts"

import * as __goscript_vm_instructions from "./vm_instructions.gs.ts"
import "@goscript/errors/index.js"
import "@goscript/fmt/index.js"
import "./asm.gs.ts"
import "./constants.gs.ts"
import "./instructions.gs.ts"
import "./vm_instructions.gs.ts"

$.registerTypePackagePath("golang.org/x/net/bpf", ["bpf.VM"])

export class VM {
	public get filter(): $.Slice<__goscript_instructions.Instruction | null> {
		return this._fields.filter
	}

	public set filter(value: $.Slice<__goscript_instructions.Instruction | null>) {
		this._fields.filter = value
	}

	public _fields: {
		filter: $.Slice<__goscript_instructions.Instruction | null>
	}

	constructor(init?: Partial<{filter?: $.Slice<__goscript_instructions.Instruction | null>}>, __goscriptValue?: boolean) {
		this._fields = {
			filter: init?.filter ?? (null! as $.Slice<__goscript_instructions.Instruction | null>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): VM {
		return new VM(this, true)
	}

	public __goscriptAssign(source: VM): void {
		const target = this._fields
		const values = source._fields
		target.filter = values.filter
	}

	public async Run(_in: $.Slice<number>): globalThis.Promise<[number, $.GoError]> {
		const v: VM | $.VarRef<VM> | null = this;
		const v$: VM = v == null ? $.pointerTarget<VM>(v) : (v as any).__isVarRef === true ? (v as any).value : (v as any).__goValue === undefined ? (v as any) : $.pointerTarget<VM>(v)
		let regA: number = 0
		let regX: number = 0
		let regScratch: number[] = $.arrayValue(globalThis.Array.from({ length: 16 }, () => 0))
		let ok: boolean = true

		// TODO(mdlayher): implement:
		// - NegateA:
		//   - would require a change from uint32 registers to int32
		//     registers

		// TODO(mdlayher): add interop tests that check signedness of ALU
		// operations against kernel implementation, and make sure Go
		// implementation matches behavior

		for (let i = 0; (i < $.sliceLen((v$ as VM).filter)) && ok; i++) {
			let ins = $.arrayIndex((v$ as VM).filter!, i)

			{
				const __goscriptTypeSwitchValue = ins
				switch (true) {
					case $.typeAssert<__goscript_instructions.ALUOpConstant>(__goscriptTypeSwitchValue, "bpf.ALUOpConstant").ok:
						{
							let ins: __goscript_instructions.ALUOpConstant = $.markAsStructValue($.cloneStructValue($.typeAssert<__goscript_instructions.ALUOpConstant>(__goscriptTypeSwitchValue, "bpf.ALUOpConstant").value))
							regA = __goscript_vm_instructions.aluOpConstant(ins, regA)
						}
						break
					case $.typeAssert<__goscript_instructions.ALUOpX>(__goscriptTypeSwitchValue, "bpf.ALUOpX").ok:
						{
							let ins: __goscript_instructions.ALUOpX = $.markAsStructValue($.cloneStructValue($.typeAssert<__goscript_instructions.ALUOpX>(__goscriptTypeSwitchValue, "bpf.ALUOpX").value))
							let __goscriptTuple0: any = __goscript_vm_instructions.aluOpX(ins, regA, regX)
							regA = __goscriptTuple0[0]
							ok = __goscriptTuple0[1]
						}
						break
					case $.typeAssert<__goscript_instructions.Jump>(__goscriptTypeSwitchValue, "bpf.Jump").ok:
						{
							let ins: __goscript_instructions.Jump = $.markAsStructValue($.cloneStructValue($.typeAssert<__goscript_instructions.Jump>(__goscriptTypeSwitchValue, "bpf.Jump").value))
							i = i + ($.int(ins.Skip))
						}
						break
					case $.typeAssert<__goscript_instructions.JumpIf>(__goscriptTypeSwitchValue, "bpf.JumpIf").ok:
						{
							let ins: __goscript_instructions.JumpIf = $.markAsStructValue($.cloneStructValue($.typeAssert<__goscript_instructions.JumpIf>(__goscriptTypeSwitchValue, "bpf.JumpIf").value))
							let jump = __goscript_vm_instructions.jumpIf(ins, regA)
							i = i + (jump)
						}
						break
					case $.typeAssert<__goscript_instructions.JumpIfX>(__goscriptTypeSwitchValue, "bpf.JumpIfX").ok:
						{
							let ins: __goscript_instructions.JumpIfX = $.markAsStructValue($.cloneStructValue($.typeAssert<__goscript_instructions.JumpIfX>(__goscriptTypeSwitchValue, "bpf.JumpIfX").value))
							let jump = __goscript_vm_instructions.jumpIfX(ins, regA, regX)
							i = i + (jump)
						}
						break
					case $.typeAssert<__goscript_instructions.LoadAbsolute>(__goscriptTypeSwitchValue, "bpf.LoadAbsolute").ok:
						{
							let ins: __goscript_instructions.LoadAbsolute = $.markAsStructValue($.cloneStructValue($.typeAssert<__goscript_instructions.LoadAbsolute>(__goscriptTypeSwitchValue, "bpf.LoadAbsolute").value))
							let __goscriptTuple1: any = await __goscript_vm_instructions.loadAbsolute(ins, _in)
							regA = __goscriptTuple1[0]
							ok = __goscriptTuple1[1]
						}
						break
					case $.typeAssert<__goscript_instructions.LoadConstant>(__goscriptTypeSwitchValue, "bpf.LoadConstant").ok:
						{
							let ins: __goscript_instructions.LoadConstant = $.markAsStructValue($.cloneStructValue($.typeAssert<__goscript_instructions.LoadConstant>(__goscriptTypeSwitchValue, "bpf.LoadConstant").value))
							let __goscriptTuple2: any = __goscript_vm_instructions.loadConstant(ins, regA, regX)
							regA = __goscriptTuple2[0]
							regX = __goscriptTuple2[1]
						}
						break
					case $.typeAssert<__goscript_instructions.LoadExtension>(__goscriptTypeSwitchValue, "bpf.LoadExtension").ok:
						{
							let ins: __goscript_instructions.LoadExtension = $.markAsStructValue($.cloneStructValue($.typeAssert<__goscript_instructions.LoadExtension>(__goscriptTypeSwitchValue, "bpf.LoadExtension").value))
							regA = await __goscript_vm_instructions.loadExtension(ins, _in)
						}
						break
					case $.typeAssert<__goscript_instructions.LoadIndirect>(__goscriptTypeSwitchValue, "bpf.LoadIndirect").ok:
						{
							let ins: __goscript_instructions.LoadIndirect = $.markAsStructValue($.cloneStructValue($.typeAssert<__goscript_instructions.LoadIndirect>(__goscriptTypeSwitchValue, "bpf.LoadIndirect").value))
							let __goscriptTuple3: any = await __goscript_vm_instructions.loadIndirect(ins, _in, regX)
							regA = __goscriptTuple3[0]
							ok = __goscriptTuple3[1]
						}
						break
					case $.typeAssert<__goscript_instructions.LoadMemShift>(__goscriptTypeSwitchValue, "bpf.LoadMemShift").ok:
						{
							let ins: __goscript_instructions.LoadMemShift = $.markAsStructValue($.cloneStructValue($.typeAssert<__goscript_instructions.LoadMemShift>(__goscriptTypeSwitchValue, "bpf.LoadMemShift").value))
							let __goscriptTuple4: any = __goscript_vm_instructions.loadMemShift(ins, _in)
							regX = __goscriptTuple4[0]
							ok = __goscriptTuple4[1]
						}
						break
					case $.typeAssert<__goscript_instructions.LoadScratch>(__goscriptTypeSwitchValue, "bpf.LoadScratch").ok:
						{
							let ins: __goscript_instructions.LoadScratch = $.markAsStructValue($.cloneStructValue($.typeAssert<__goscript_instructions.LoadScratch>(__goscriptTypeSwitchValue, "bpf.LoadScratch").value))
							let __goscriptTuple5: any = __goscript_vm_instructions.loadScratch(ins, $.cloneArrayValue(regScratch, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint32"), 16)), regA, regX)
							regA = __goscriptTuple5[0]
							regX = __goscriptTuple5[1]
						}
						break
					case $.typeAssert<__goscript_instructions.RetA>(__goscriptTypeSwitchValue, "bpf.RetA").ok:
						{
							let ins: __goscript_instructions.RetA = $.markAsStructValue($.cloneStructValue($.typeAssert<__goscript_instructions.RetA>(__goscriptTypeSwitchValue, "bpf.RetA").value))
							return [$.int(regA), null]
						}
						break
					case $.typeAssert<__goscript_instructions.RetConstant>(__goscriptTypeSwitchValue, "bpf.RetConstant").ok:
						{
							let ins: __goscript_instructions.RetConstant = $.markAsStructValue($.cloneStructValue($.typeAssert<__goscript_instructions.RetConstant>(__goscriptTypeSwitchValue, "bpf.RetConstant").value))
							return [$.int(ins.Val), null]
						}
						break
					case $.typeAssert<__goscript_instructions.StoreScratch>(__goscriptTypeSwitchValue, "bpf.StoreScratch").ok:
						{
							let ins: __goscript_instructions.StoreScratch = $.markAsStructValue($.cloneStructValue($.typeAssert<__goscript_instructions.StoreScratch>(__goscriptTypeSwitchValue, "bpf.StoreScratch").value))
							regScratch = __goscript_vm_instructions.storeScratch(ins, $.cloneArrayValue(regScratch, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint32"), 16)), regA, regX)
						}
						break
					case $.typeAssert<__goscript_instructions.TAX>(__goscriptTypeSwitchValue, "bpf.TAX").ok:
						{
							let ins: __goscript_instructions.TAX = $.markAsStructValue($.cloneStructValue($.typeAssert<__goscript_instructions.TAX>(__goscriptTypeSwitchValue, "bpf.TAX").value))
							regX = regA
						}
						break
					case $.typeAssert<__goscript_instructions.TXA>(__goscriptTypeSwitchValue, "bpf.TXA").ok:
						{
							let ins: __goscript_instructions.TXA = $.markAsStructValue($.cloneStructValue($.typeAssert<__goscript_instructions.TXA>(__goscriptTypeSwitchValue, "bpf.TXA").value))
							regA = regX
						}
						break
					default:
						{
							let ins: any = __goscriptTypeSwitchValue
							return [0, fmt.Errorf("unknown Instruction at index %d: %T", $.basicInterfaceValue(i, "int"), (ins as any))]
						}
						break
				}
			}
		}

		return [0, null]
	}

	static __typeInfo = $.registerStructType(
		"bpf.VM",
		() => new VM(),
		() => [$.methodSignature("Run", [["in", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true)],
		VM,
		() => [/* @__PURE__ */ $.structField("filter", /* @__PURE__ */ $.sliceType("bpf.Instruction"), [0], 0, false, { pkgPath: "golang.org/x/net/bpf" })]
	)
}

export async function NewVM(filter: $.Slice<__goscript_instructions.Instruction | null>): globalThis.Promise<[VM | $.VarRef<VM> | null, $.GoError]> {
	if ($.sliceLen(filter) == 0) {
		return [null, errors.New("one or more Instructions must be specified")]
	}

	for (let __goscriptRangeTarget0 = filter, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), i = 0; i < __goscriptRangeWindow0.length; i++) {
		let ins = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + i] as __goscript_instructions.Instruction | null)
		let check = $.sliceLen(filter) - (i + 1)
		{
			const __goscriptTypeSwitchValue = ins
			switch (true) {
				case $.typeAssert<__goscript_instructions.Jump>(__goscriptTypeSwitchValue, "bpf.Jump").ok:
					{
						let ins: __goscript_instructions.Jump = $.markAsStructValue($.cloneStructValue($.typeAssert<__goscript_instructions.Jump>(__goscriptTypeSwitchValue, "bpf.Jump").value))
						if (check <= $.int(ins.Skip)) {
							return [null, fmt.Errorf("cannot jump %d instructions; jumping past program bounds", $.basicInterfaceValue(ins.Skip, "uint32"))]
						}
					}
					break
				case $.typeAssert<__goscript_instructions.JumpIf>(__goscriptTypeSwitchValue, "bpf.JumpIf").ok:
					{
						let ins: __goscript_instructions.JumpIf = $.markAsStructValue($.cloneStructValue($.typeAssert<__goscript_instructions.JumpIf>(__goscriptTypeSwitchValue, "bpf.JumpIf").value))
						if (check <= $.int(ins.SkipTrue)) {
							return [null, fmt.Errorf("cannot jump %d instructions in true case; jumping past program bounds", $.basicInterfaceValue(ins.SkipTrue, "uint8"))]
						}
						if (check <= $.int(ins.SkipFalse)) {
							return [null, fmt.Errorf("cannot jump %d instructions in false case; jumping past program bounds", $.basicInterfaceValue(ins.SkipFalse, "uint8"))]
						}
					}
					break
				case $.typeAssert<__goscript_instructions.JumpIfX>(__goscriptTypeSwitchValue, "bpf.JumpIfX").ok:
					{
						let ins: __goscript_instructions.JumpIfX = $.markAsStructValue($.cloneStructValue($.typeAssert<__goscript_instructions.JumpIfX>(__goscriptTypeSwitchValue, "bpf.JumpIfX").value))
						if (check <= $.int(ins.SkipTrue)) {
							return [null, fmt.Errorf("cannot jump %d instructions in true case; jumping past program bounds", $.basicInterfaceValue(ins.SkipTrue, "uint8"))]
						}
						if (check <= $.int(ins.SkipFalse)) {
							return [null, fmt.Errorf("cannot jump %d instructions in false case; jumping past program bounds", $.basicInterfaceValue(ins.SkipFalse, "uint8"))]
						}
					}
					break
				case $.typeAssert<__goscript_instructions.ALUOpConstant>(__goscriptTypeSwitchValue, "bpf.ALUOpConstant").ok:
					{
						let ins: __goscript_instructions.ALUOpConstant = $.markAsStructValue($.cloneStructValue($.typeAssert<__goscript_instructions.ALUOpConstant>(__goscriptTypeSwitchValue, "bpf.ALUOpConstant").value))
						if (ins.Val != 0) {
							break
						}

						switch (ins.Op) {
							case 48:
							case 144:
							{
								return [null, errors.New("cannot divide by zero using ALUOpConstant")]
								break
							}
						}
					}
					break
				case $.typeAssert<__goscript_instructions.LoadExtension>(__goscriptTypeSwitchValue, "bpf.LoadExtension").ok:
					{
						let ins: __goscript_instructions.LoadExtension = $.markAsStructValue($.cloneStructValue($.typeAssert<__goscript_instructions.LoadExtension>(__goscriptTypeSwitchValue, "bpf.LoadExtension").value))
						switch (ins.Num) {
							case 1:
							{
								break
							}
							default:
							{
								return [null, fmt.Errorf("extension %d not implemented", $.namedValueInterfaceValue<any>(ins.Num, "bpf.Extension", {}, /* @__PURE__ */ $.basicType("int", "bpf.Extension")))]
								break
							}
						}
					}
					break
			}
		}
	}

	// Make sure last instruction is a return instruction
	{
		const __goscriptTypeSwitchValue = $.arrayIndex(filter!, $.sliceLen(filter) - 1)
		switch (true) {
			case $.is(__goscriptTypeSwitchValue, "bpf.RetA") || $.is(__goscriptTypeSwitchValue, "bpf.RetConstant"):
				{
				}
				break
			default:
				{
					return [null, errors.New("BPF program must end with RetA or RetConstant")]
				}
				break
		}
	}

	// Though our VM works using disassembled instructions, we
	// attempt to assemble the input filter anyway to ensure it is compatible
	// with an operating system VM.
	let [, err] = await __goscript_asm.Assemble(filter)

	return [new VM({filter: filter}), err]
}
