// Generated file based on instructions.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as __goscript_constants from "./constants.gs.ts"
import "@goscript/fmt/index.js"
import "./constants.gs.ts"

$.registerTypePackagePath("golang.org/x/net/bpf", ["bpf.Instruction", "bpf.RawInstruction", "bpf.LoadConstant", "bpf.LoadScratch", "bpf.LoadAbsolute", "bpf.LoadIndirect", "bpf.LoadMemShift", "bpf.LoadExtension", "bpf.StoreScratch", "bpf.ALUOpConstant", "bpf.ALUOpX", "bpf.NegateA", "bpf.Jump", "bpf.JumpIf", "bpf.JumpIfX", "bpf.RetA", "bpf.RetConstant", "bpf.TXA", "bpf.TAX"])

export type Instruction = {
	Assemble(): [RawInstruction, $.GoError]
}

$.registerInterfaceType(
	"bpf.Instruction",
	null,
	[$.methodSignature("Assemble", [], ["bpf.RawInstruction", "error"])]
);

export class RawInstruction {
	// Operation to execute.
	public get Op(): number {
		return this._fields.Op
	}

	public set Op(value: number) {
		this._fields.Op = value
	}

	// For conditional jump instructions, the number of instructions
	// to skip if the condition is true/false.
	public get Jt(): number {
		return this._fields.Jt
	}

	public set Jt(value: number) {
		this._fields.Jt = value
	}

	public get Jf(): number {
		return this._fields.Jf
	}

	public set Jf(value: number) {
		this._fields.Jf = value
	}

	// Constant parameter. The meaning depends on the Op.
	public get K(): number {
		return this._fields.K
	}

	public set K(value: number) {
		this._fields.K = value
	}

	public _fields: {
		Op: number
		Jt: number
		Jf: number
		K: number
	}

	constructor(init?: Partial<{Op?: number, Jt?: number, Jf?: number, K?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Op: init?.Op ?? (0 as number),
			Jt: init?.Jt ?? (0 as number),
			Jf: init?.Jf ?? (0 as number),
			K: init?.K ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): RawInstruction {
		return new RawInstruction(this, true)
	}

	public __goscriptAssign(source: RawInstruction): void {
		const target = this._fields
		const values = source._fields
		target.Op = values.Op
		target.Jt = values.Jt
		target.Jf = values.Jf
		target.K = values.K
	}

	public Assemble(): [RawInstruction, $.GoError] {
		const ri = this;
		return [(ri).clone(), null]
	}

	public Disassemble(): Instruction | null {
		const ri = this;
		switch (ri.Op & 7) {
			case 0:
			case 1:
			{
				let reg = $.uint(ri.Op & 1, 16)
				let sz = 0
				switch (ri.Op & 24) {
					case 0:
					{
						sz = 4
						break
					}
					case 8:
					{
						sz = 2
						break
					}
					case 16:
					{
						sz = 1
						break
					}
					default:
					{
						return $.interfaceValue<Instruction | null>((ri).clone(), "bpf.RawInstruction", "bpf.RawInstruction")
						break
					}
				}
				switch (ri.Op & 224) {
					case 0:
					{
						if (sz != 4) {
							return $.interfaceValue<Instruction | null>((ri).clone(), "bpf.RawInstruction", "bpf.RawInstruction")
						}
						return $.interfaceValue<Instruction | null>(new LoadConstant({Dst: reg, Val: ri.K}, true), "bpf.LoadConstant", "bpf.LoadConstant")
						break
					}
					case 96:
					{
						if ((sz != 4) || (ri.K > 15)) {
							return $.interfaceValue<Instruction | null>((ri).clone(), "bpf.RawInstruction", "bpf.RawInstruction")
						}
						return $.interfaceValue<Instruction | null>(new LoadScratch({Dst: reg, N: $.int(ri.K)}, true), "bpf.LoadScratch", "bpf.LoadScratch")
						break
					}
					case 32:
					{
						if (ri.K > 4294963199) {
							return $.interfaceValue<Instruction | null>(new LoadExtension({Num: $.int($.uint(((-(-4096) + ri.K) >>> 0), 32))}, true), "bpf.LoadExtension", "bpf.LoadExtension")
						}
						return $.interfaceValue<Instruction | null>(new LoadAbsolute({Size: sz, Off: ri.K}, true), "bpf.LoadAbsolute", "bpf.LoadAbsolute")
						break
					}
					case 64:
					{
						return $.interfaceValue<Instruction | null>(new LoadIndirect({Size: sz, Off: ri.K}, true), "bpf.LoadIndirect", "bpf.LoadIndirect")
						break
					}
					case 128:
					{
						if (sz != 4) {
							return $.interfaceValue<Instruction | null>((ri).clone(), "bpf.RawInstruction", "bpf.RawInstruction")
						}
						return $.interfaceValue<Instruction | null>(new LoadExtension({Num: 1}, true), "bpf.LoadExtension", "bpf.LoadExtension")
						break
					}
					case 160:
					{
						return $.interfaceValue<Instruction | null>(new LoadMemShift({Off: ri.K}, true), "bpf.LoadMemShift", "bpf.LoadMemShift")
						break
					}
					default:
					{
						return $.interfaceValue<Instruction | null>((ri).clone(), "bpf.RawInstruction", "bpf.RawInstruction")
						break
					}
				}
				break
			}
			case 2:
			{
				if ((ri.Op != 2) || (ri.K > 15)) {
					return $.interfaceValue<Instruction | null>((ri).clone(), "bpf.RawInstruction", "bpf.RawInstruction")
				}
				return $.interfaceValue<Instruction | null>(new StoreScratch({Src: 0, N: $.int(ri.K)}, true), "bpf.StoreScratch", "bpf.StoreScratch")
				break
			}
			case 3:
			{
				if ((ri.Op != 3) || (ri.K > 15)) {
					return $.interfaceValue<Instruction | null>((ri).clone(), "bpf.RawInstruction", "bpf.RawInstruction")
				}
				return $.interfaceValue<Instruction | null>(new StoreScratch({Src: 1, N: $.int(ri.K)}, true), "bpf.StoreScratch", "bpf.StoreScratch")
				break
			}
			case 4:
			{
				{
					let op = $.uint(ri.Op & 240, 16)
					switch (op) {
						case 0:
						case 16:
						case 32:
						case 48:
						case 64:
						case 80:
						case 96:
						case 112:
						case 144:
						case 160:
						{
							{
								let operand = $.uint(ri.Op & 8, 16)
								switch (operand) {
									case 8:
									{
										return $.interfaceValue<Instruction | null>(new ALUOpX({Op: op}, true), "bpf.ALUOpX", "bpf.ALUOpX")
										break
									}
									case 0:
									{
										return $.interfaceValue<Instruction | null>(new ALUOpConstant({Op: op, Val: ri.K}, true), "bpf.ALUOpConstant", "bpf.ALUOpConstant")
										break
									}
									default:
									{
										return $.interfaceValue<Instruction | null>((ri).clone(), "bpf.RawInstruction", "bpf.RawInstruction")
										break
									}
								}
							}
							break
						}
						case 128:
						{
							return $.interfaceValue<Instruction | null>(new NegateA(undefined, true), "bpf.NegateA", "bpf.NegateA")
							break
						}
						default:
						{
							return $.interfaceValue<Instruction | null>((ri).clone(), "bpf.RawInstruction", "bpf.RawInstruction")
							break
						}
					}
				}
				break
			}
			case 5:
			{
				{
					let op = $.uint(ri.Op & 240, 16)
					switch (op) {
						case 0:
						{
							return $.interfaceValue<Instruction | null>(new Jump({Skip: ri.K}, true), "bpf.Jump", "bpf.Jump")
							break
						}
						case 16:
						case 32:
						case 48:
						case 64:
						{
							let [cond, skipTrue, skipFalse] = jumpOpToTest(op, ri.Jt, ri.Jf)
							{
								let operand = $.uint(ri.Op & 8, 16)
								switch (operand) {
									case 8:
									{
										return $.interfaceValue<Instruction | null>(new JumpIfX({Cond: cond, SkipTrue: skipTrue, SkipFalse: skipFalse}, true), "bpf.JumpIfX", "bpf.JumpIfX")
										break
									}
									case 0:
									{
										return $.interfaceValue<Instruction | null>(new JumpIf({Cond: cond, Val: ri.K, SkipTrue: skipTrue, SkipFalse: skipFalse}, true), "bpf.JumpIf", "bpf.JumpIf")
										break
									}
									default:
									{
										return $.interfaceValue<Instruction | null>((ri).clone(), "bpf.RawInstruction", "bpf.RawInstruction")
										break
									}
								}
							}
							break
						}
						default:
						{
							return $.interfaceValue<Instruction | null>((ri).clone(), "bpf.RawInstruction", "bpf.RawInstruction")
							break
						}
					}
				}
				break
			}
			case 6:
			{
				switch (ri.Op) {
					case 6 | 16:
					{
						return $.interfaceValue<Instruction | null>(new RetA(undefined, true), "bpf.RetA", "bpf.RetA")
						break
					}
					case 6 | 0:
					{
						return $.interfaceValue<Instruction | null>(new RetConstant({Val: ri.K}, true), "bpf.RetConstant", "bpf.RetConstant")
						break
					}
					default:
					{
						return $.interfaceValue<Instruction | null>((ri).clone(), "bpf.RawInstruction", "bpf.RawInstruction")
						break
					}
				}
				break
			}
			case 7:
			{
				switch (ri.Op) {
					case 7 | 0:
					{
						return $.interfaceValue<Instruction | null>(new TAX(undefined, true), "bpf.TAX", "bpf.TAX")
						break
					}
					case 7 | 128:
					{
						return $.interfaceValue<Instruction | null>(new TXA(undefined, true), "bpf.TXA", "bpf.TXA")
						break
					}
					default:
					{
						return $.interfaceValue<Instruction | null>((ri).clone(), "bpf.RawInstruction", "bpf.RawInstruction")
						break
					}
				}
				break
			}
			default:
			{
				$.panic("unreachable")
				break
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	static __typeInfo = $.registerStructType(
		"bpf.RawInstruction",
		() => new RawInstruction(),
		() => [$.methodSignature("Assemble", [], ["bpf.RawInstruction", "error"]), $.methodSignature("Disassemble", [], ["bpf.Instruction"])],
		RawInstruction,
		() => [/* @__PURE__ */ $.structField("Op", /* @__PURE__ */ $.basicType("uint16"), [0], 0, true), /* @__PURE__ */ $.structField("Jt", /* @__PURE__ */ $.basicType("uint8"), [1], 2, true), /* @__PURE__ */ $.structField("Jf", /* @__PURE__ */ $.basicType("uint8"), [2], 3, true), /* @__PURE__ */ $.structField("K", /* @__PURE__ */ $.basicType("uint32"), [3], 4, true)]
	)
}

export class LoadConstant {
	public get Dst(): __goscript_constants.Register {
		return this._fields.Dst
	}

	public set Dst(value: __goscript_constants.Register) {
		this._fields.Dst = value
	}

	public get Val(): number {
		return this._fields.Val
	}

	public set Val(value: number) {
		this._fields.Val = value
	}

	public _fields: {
		Dst: __goscript_constants.Register
		Val: number
	}

	constructor(init?: Partial<{Dst?: __goscript_constants.Register, Val?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Dst: init?.Dst ?? (0 as __goscript_constants.Register),
			Val: init?.Val ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): LoadConstant {
		return new LoadConstant(this, true)
	}

	public __goscriptAssign(source: LoadConstant): void {
		const target = this._fields
		const values = source._fields
		target.Dst = values.Dst
		target.Val = values.Val
	}

	public Assemble(): [RawInstruction, $.GoError] {
		const a = this;
		return assembleLoad(a.Dst, 4, 0, a.Val)
	}

	public async String(): globalThis.Promise<string> {
		const a = this;
		switch (a.Dst) {
			case 0:
			{
				return fmt.Sprintf("ld #%d", $.basicInterfaceValue(a.Val, "uint32"))
				break
			}
			case 1:
			{
				return fmt.Sprintf("ldx #%d", $.basicInterfaceValue(a.Val, "uint32"))
				break
			}
			default:
			{
				return fmt.Sprintf("unknown instruction: %#v", $.interfaceValue((a).clone(), "bpf.LoadConstant", "bpf.LoadConstant"))
				break
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	static __typeInfo = $.registerStructType(
		"bpf.LoadConstant",
		() => new LoadConstant(),
		() => [$.methodSignature("Assemble", [], ["bpf.RawInstruction", "error"]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])],
		LoadConstant,
		() => [/* @__PURE__ */ $.structField("Dst", /* @__PURE__ */ $.basicType("uint16", "bpf.Register"), [0], 0, true), /* @__PURE__ */ $.structField("Val", /* @__PURE__ */ $.basicType("uint32"), [1], 4, true)]
	)
}

export class LoadScratch {
	public get Dst(): __goscript_constants.Register {
		return this._fields.Dst
	}

	public set Dst(value: __goscript_constants.Register) {
		this._fields.Dst = value
	}

	public get N(): number {
		return this._fields.N
	}

	public set N(value: number) {
		this._fields.N = value
	}

	public _fields: {
		Dst: __goscript_constants.Register
		N: number
	}

	constructor(init?: Partial<{Dst?: __goscript_constants.Register, N?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Dst: init?.Dst ?? (0 as __goscript_constants.Register),
			N: init?.N ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): LoadScratch {
		return new LoadScratch(this, true)
	}

	public __goscriptAssign(source: LoadScratch): void {
		const target = this._fields
		const values = source._fields
		target.Dst = values.Dst
		target.N = values.N
	}

	public Assemble(): [RawInstruction, $.GoError] {
		const a = this;
		if ((a.N < 0) || (a.N > 15)) {
			return [new RawInstruction(undefined, true), fmt.Errorf("invalid scratch slot %d", $.basicInterfaceValue(a.N, "int"))]
		}
		return assembleLoad(a.Dst, 4, 96, $.uint(a.N, 32))
	}

	public async String(): globalThis.Promise<string> {
		const a = this;
		switch (a.Dst) {
			case 0:
			{
				return fmt.Sprintf("ld M[%d]", $.basicInterfaceValue(a.N, "int"))
				break
			}
			case 1:
			{
				return fmt.Sprintf("ldx M[%d]", $.basicInterfaceValue(a.N, "int"))
				break
			}
			default:
			{
				return fmt.Sprintf("unknown instruction: %#v", $.interfaceValue((a).clone(), "bpf.LoadScratch", "bpf.LoadScratch"))
				break
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	static __typeInfo = $.registerStructType(
		"bpf.LoadScratch",
		() => new LoadScratch(),
		() => [$.methodSignature("Assemble", [], ["bpf.RawInstruction", "error"]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])],
		LoadScratch,
		() => [/* @__PURE__ */ $.structField("Dst", /* @__PURE__ */ $.basicType("uint16", "bpf.Register"), [0], 0, true), /* @__PURE__ */ $.structField("N", /* @__PURE__ */ $.basicType("int"), [1], 8, true)]
	)
}

export class LoadAbsolute {
	public get Off(): number {
		return this._fields.Off
	}

	public set Off(value: number) {
		this._fields.Off = value
	}

	public get Size(): number {
		return this._fields.Size
	}

	public set Size(value: number) {
		this._fields.Size = value
	}

	public _fields: {
		Off: number
		Size: number
	}

	constructor(init?: Partial<{Off?: number, Size?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Off: init?.Off ?? (0 as number),
			Size: init?.Size ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): LoadAbsolute {
		return new LoadAbsolute(this, true)
	}

	public __goscriptAssign(source: LoadAbsolute): void {
		const target = this._fields
		const values = source._fields
		target.Off = values.Off
		target.Size = values.Size
	}

	public Assemble(): [RawInstruction, $.GoError] {
		const a = this;
		return assembleLoad(0, a.Size, 32, a.Off)
	}

	public async String(): globalThis.Promise<string> {
		const a = this;
		switch (a.Size) {
			case 1:
			{
				return fmt.Sprintf("ldb [%d]", $.basicInterfaceValue(a.Off, "uint32"))
				break
			}
			case 2:
			{
				return fmt.Sprintf("ldh [%d]", $.basicInterfaceValue(a.Off, "uint32"))
				break
			}
			case 4:
			{
				if (a.Off > 4294963199) {
					return $.markAsStructValue($.cloneStructValue(new LoadExtension({Num: $.int($.uint(((a.Off + 0x1000) >>> 0), 32))}, true))).String()
				}
				return fmt.Sprintf("ld [%d]", $.basicInterfaceValue(a.Off, "uint32"))
				break
			}
			default:
			{
				return fmt.Sprintf("unknown instruction: %#v", $.interfaceValue((a).clone(), "bpf.LoadAbsolute", "bpf.LoadAbsolute"))
				break
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	static __typeInfo = $.registerStructType(
		"bpf.LoadAbsolute",
		() => new LoadAbsolute(),
		() => [$.methodSignature("Assemble", [], ["bpf.RawInstruction", "error"]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])],
		LoadAbsolute,
		() => [/* @__PURE__ */ $.structField("Off", /* @__PURE__ */ $.basicType("uint32"), [0], 0, true), /* @__PURE__ */ $.structField("Size", /* @__PURE__ */ $.basicType("int"), [1], 8, true)]
	)
}

export class LoadIndirect {
	public get Off(): number {
		return this._fields.Off
	}

	public set Off(value: number) {
		this._fields.Off = value
	}

	public get Size(): number {
		return this._fields.Size
	}

	public set Size(value: number) {
		this._fields.Size = value
	}

	public _fields: {
		Off: number
		Size: number
	}

	constructor(init?: Partial<{Off?: number, Size?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Off: init?.Off ?? (0 as number),
			Size: init?.Size ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): LoadIndirect {
		return new LoadIndirect(this, true)
	}

	public __goscriptAssign(source: LoadIndirect): void {
		const target = this._fields
		const values = source._fields
		target.Off = values.Off
		target.Size = values.Size
	}

	public Assemble(): [RawInstruction, $.GoError] {
		const a = this;
		return assembleLoad(0, a.Size, 64, a.Off)
	}

	public async String(): globalThis.Promise<string> {
		const a = this;
		switch (a.Size) {
			case 1:
			{
				return fmt.Sprintf("ldb [x + %d]", $.basicInterfaceValue(a.Off, "uint32"))
				break
			}
			case 2:
			{
				return fmt.Sprintf("ldh [x + %d]", $.basicInterfaceValue(a.Off, "uint32"))
				break
			}
			case 4:
			{
				return fmt.Sprintf("ld [x + %d]", $.basicInterfaceValue(a.Off, "uint32"))
				break
			}
			default:
			{
				return fmt.Sprintf("unknown instruction: %#v", $.interfaceValue((a).clone(), "bpf.LoadIndirect", "bpf.LoadIndirect"))
				break
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	static __typeInfo = $.registerStructType(
		"bpf.LoadIndirect",
		() => new LoadIndirect(),
		() => [$.methodSignature("Assemble", [], ["bpf.RawInstruction", "error"]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])],
		LoadIndirect,
		() => [/* @__PURE__ */ $.structField("Off", /* @__PURE__ */ $.basicType("uint32"), [0], 0, true), /* @__PURE__ */ $.structField("Size", /* @__PURE__ */ $.basicType("int"), [1], 8, true)]
	)
}

export class LoadMemShift {
	public get Off(): number {
		return this._fields.Off
	}

	public set Off(value: number) {
		this._fields.Off = value
	}

	public _fields: {
		Off: number
	}

	constructor(init?: Partial<{Off?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Off: init?.Off ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): LoadMemShift {
		return new LoadMemShift(this, true)
	}

	public __goscriptAssign(source: LoadMemShift): void {
		const target = this._fields
		const values = source._fields
		target.Off = values.Off
	}

	public Assemble(): [RawInstruction, $.GoError] {
		const a = this;
		return assembleLoad(1, 1, 160, a.Off)
	}

	public async String(): globalThis.Promise<string> {
		const a = this;
		return fmt.Sprintf("ldx 4*([%d]&0xf)", $.basicInterfaceValue(a.Off, "uint32"))
	}

	static __typeInfo = $.registerStructType(
		"bpf.LoadMemShift",
		() => new LoadMemShift(),
		() => [$.methodSignature("Assemble", [], ["bpf.RawInstruction", "error"]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])],
		LoadMemShift,
		() => [/* @__PURE__ */ $.structField("Off", /* @__PURE__ */ $.basicType("uint32"), [0], 0, true)]
	)
}

export class LoadExtension {
	public get Num(): __goscript_constants.Extension {
		return this._fields.Num
	}

	public set Num(value: __goscript_constants.Extension) {
		this._fields.Num = value
	}

	public _fields: {
		Num: __goscript_constants.Extension
	}

	constructor(init?: Partial<{Num?: __goscript_constants.Extension}>, __goscriptValue?: boolean) {
		this._fields = {
			Num: init?.Num ?? (0 as __goscript_constants.Extension)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): LoadExtension {
		return new LoadExtension(this, true)
	}

	public __goscriptAssign(source: LoadExtension): void {
		const target = this._fields
		const values = source._fields
		target.Num = values.Num
	}

	public Assemble(): [RawInstruction, $.GoError] {
		const a = this;
		if (a.Num == 1) {
			return assembleLoad(0, 4, 128, 0)
		}
		return assembleLoad(0, 4, 32, $.uint(-4096 + a.Num, 32))
	}

	public async String(): globalThis.Promise<string> {
		const a = this;
		switch (a.Num) {
			case 1:
			{
				return "ld #len"
				break
			}
			case 0:
			{
				return "ld #proto"
				break
			}
			case 4:
			{
				return "ld #type"
				break
			}
			case 52:
			{
				return "ld #poff"
				break
			}
			case 8:
			{
				return "ld #ifidx"
				break
			}
			case 12:
			{
				return "ld #nla"
				break
			}
			case 16:
			{
				return "ld #nlan"
				break
			}
			case 20:
			{
				return "ld #mark"
				break
			}
			case 24:
			{
				return "ld #queue"
				break
			}
			case 28:
			{
				return "ld #hatype"
				break
			}
			case 32:
			{
				return "ld #rxhash"
				break
			}
			case 36:
			{
				return "ld #cpu"
				break
			}
			case 44:
			{
				return "ld #vlan_tci"
				break
			}
			case 48:
			{
				return "ld #vlan_avail"
				break
			}
			case 60:
			{
				return "ld #vlan_tpid"
				break
			}
			case 56:
			{
				return "ld #rand"
				break
			}
			default:
			{
				return fmt.Sprintf("unknown instruction: %#v", $.interfaceValue((a).clone(), "bpf.LoadExtension", "bpf.LoadExtension"))
				break
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	static __typeInfo = $.registerStructType(
		"bpf.LoadExtension",
		() => new LoadExtension(),
		() => [$.methodSignature("Assemble", [], ["bpf.RawInstruction", "error"]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])],
		LoadExtension,
		() => [/* @__PURE__ */ $.structField("Num", /* @__PURE__ */ $.basicType("int", "bpf.Extension"), [0], 0, true)]
	)
}

export class StoreScratch {
	public get Src(): __goscript_constants.Register {
		return this._fields.Src
	}

	public set Src(value: __goscript_constants.Register) {
		this._fields.Src = value
	}

	public get N(): number {
		return this._fields.N
	}

	public set N(value: number) {
		this._fields.N = value
	}

	public _fields: {
		Src: __goscript_constants.Register
		N: number
	}

	constructor(init?: Partial<{Src?: __goscript_constants.Register, N?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Src: init?.Src ?? (0 as __goscript_constants.Register),
			N: init?.N ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): StoreScratch {
		return new StoreScratch(this, true)
	}

	public __goscriptAssign(source: StoreScratch): void {
		const target = this._fields
		const values = source._fields
		target.Src = values.Src
		target.N = values.N
	}

	public Assemble(): [RawInstruction, $.GoError] {
		const a = this;
		if ((a.N < 0) || (a.N > 15)) {
			return [new RawInstruction(undefined, true), fmt.Errorf("invalid scratch slot %d", $.basicInterfaceValue(a.N, "int"))]
		}
		let op: number = 0
		switch (a.Src) {
			case 0:
			{
				op = 2
				break
			}
			case 1:
			{
				op = 3
				break
			}
			default:
			{
				return [new RawInstruction(undefined, true), fmt.Errorf("invalid source register %v", $.namedValueInterfaceValue<any>(a.Src, "bpf.Register", {}, /* @__PURE__ */ $.basicType("uint16", "bpf.Register")))]
				break
			}
		}

		return [new RawInstruction({Op: op, K: $.uint(a.N, 32)}, true), null]
	}

	public async String(): globalThis.Promise<string> {
		const a = this;
		switch (a.Src) {
			case 0:
			{
				return fmt.Sprintf("st M[%d]", $.basicInterfaceValue(a.N, "int"))
				break
			}
			case 1:
			{
				return fmt.Sprintf("stx M[%d]", $.basicInterfaceValue(a.N, "int"))
				break
			}
			default:
			{
				return fmt.Sprintf("unknown instruction: %#v", $.interfaceValue((a).clone(), "bpf.StoreScratch", "bpf.StoreScratch"))
				break
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	static __typeInfo = $.registerStructType(
		"bpf.StoreScratch",
		() => new StoreScratch(),
		() => [$.methodSignature("Assemble", [], ["bpf.RawInstruction", "error"]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])],
		StoreScratch,
		() => [/* @__PURE__ */ $.structField("Src", /* @__PURE__ */ $.basicType("uint16", "bpf.Register"), [0], 0, true), /* @__PURE__ */ $.structField("N", /* @__PURE__ */ $.basicType("int"), [1], 8, true)]
	)
}

export class ALUOpConstant {
	public get Op(): __goscript_constants.ALUOp {
		return this._fields.Op
	}

	public set Op(value: __goscript_constants.ALUOp) {
		this._fields.Op = value
	}

	public get Val(): number {
		return this._fields.Val
	}

	public set Val(value: number) {
		this._fields.Val = value
	}

	public _fields: {
		Op: __goscript_constants.ALUOp
		Val: number
	}

	constructor(init?: Partial<{Op?: __goscript_constants.ALUOp, Val?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Op: init?.Op ?? (0 as __goscript_constants.ALUOp),
			Val: init?.Val ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ALUOpConstant {
		return new ALUOpConstant(this, true)
	}

	public __goscriptAssign(source: ALUOpConstant): void {
		const target = this._fields
		const values = source._fields
		target.Op = values.Op
		target.Val = values.Val
	}

	public Assemble(): [RawInstruction, $.GoError] {
		const a = this;
		return [new RawInstruction({Op: $.uint((4 | $.uint(0, 16)) | $.uint(a.Op, 16), 16), K: a.Val}, true), null]
	}

	public async String(): globalThis.Promise<string> {
		const a = this;
		switch (a.Op) {
			case 0:
			{
				return fmt.Sprintf("add #%d", $.basicInterfaceValue(a.Val, "uint32"))
				break
			}
			case 16:
			{
				return fmt.Sprintf("sub #%d", $.basicInterfaceValue(a.Val, "uint32"))
				break
			}
			case 32:
			{
				return fmt.Sprintf("mul #%d", $.basicInterfaceValue(a.Val, "uint32"))
				break
			}
			case 48:
			{
				return fmt.Sprintf("div #%d", $.basicInterfaceValue(a.Val, "uint32"))
				break
			}
			case 144:
			{
				return fmt.Sprintf("mod #%d", $.basicInterfaceValue(a.Val, "uint32"))
				break
			}
			case 80:
			{
				return fmt.Sprintf("and #%d", $.basicInterfaceValue(a.Val, "uint32"))
				break
			}
			case 64:
			{
				return fmt.Sprintf("or #%d", $.basicInterfaceValue(a.Val, "uint32"))
				break
			}
			case 160:
			{
				return fmt.Sprintf("xor #%d", $.basicInterfaceValue(a.Val, "uint32"))
				break
			}
			case 96:
			{
				return fmt.Sprintf("lsh #%d", $.basicInterfaceValue(a.Val, "uint32"))
				break
			}
			case 112:
			{
				return fmt.Sprintf("rsh #%d", $.basicInterfaceValue(a.Val, "uint32"))
				break
			}
			default:
			{
				return fmt.Sprintf("unknown instruction: %#v", $.interfaceValue((a).clone(), "bpf.ALUOpConstant", "bpf.ALUOpConstant"))
				break
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	static __typeInfo = $.registerStructType(
		"bpf.ALUOpConstant",
		() => new ALUOpConstant(),
		() => [$.methodSignature("Assemble", [], ["bpf.RawInstruction", "error"]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])],
		ALUOpConstant,
		() => [/* @__PURE__ */ $.structField("Op", /* @__PURE__ */ $.basicType("uint16", "bpf.ALUOp"), [0], 0, true), /* @__PURE__ */ $.structField("Val", /* @__PURE__ */ $.basicType("uint32"), [1], 4, true)]
	)
}

export class ALUOpX {
	public get Op(): __goscript_constants.ALUOp {
		return this._fields.Op
	}

	public set Op(value: __goscript_constants.ALUOp) {
		this._fields.Op = value
	}

	public _fields: {
		Op: __goscript_constants.ALUOp
	}

	constructor(init?: Partial<{Op?: __goscript_constants.ALUOp}>, __goscriptValue?: boolean) {
		this._fields = {
			Op: init?.Op ?? (0 as __goscript_constants.ALUOp)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ALUOpX {
		return new ALUOpX(this, true)
	}

	public __goscriptAssign(source: ALUOpX): void {
		const target = this._fields
		const values = source._fields
		target.Op = values.Op
	}

	public Assemble(): [RawInstruction, $.GoError] {
		const a = this;
		return [new RawInstruction({Op: $.uint((4 | $.uint(8, 16)) | $.uint(a.Op, 16), 16)}, true), null]
	}

	public async String(): globalThis.Promise<string> {
		const a = this;
		switch (a.Op) {
			case 0:
			{
				return "add x"
				break
			}
			case 16:
			{
				return "sub x"
				break
			}
			case 32:
			{
				return "mul x"
				break
			}
			case 48:
			{
				return "div x"
				break
			}
			case 144:
			{
				return "mod x"
				break
			}
			case 80:
			{
				return "and x"
				break
			}
			case 64:
			{
				return "or x"
				break
			}
			case 160:
			{
				return "xor x"
				break
			}
			case 96:
			{
				return "lsh x"
				break
			}
			case 112:
			{
				return "rsh x"
				break
			}
			default:
			{
				return fmt.Sprintf("unknown instruction: %#v", $.interfaceValue((a).clone(), "bpf.ALUOpX", "bpf.ALUOpX"))
				break
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	static __typeInfo = $.registerStructType(
		"bpf.ALUOpX",
		() => new ALUOpX(),
		() => [$.methodSignature("Assemble", [], ["bpf.RawInstruction", "error"]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])],
		ALUOpX,
		() => [/* @__PURE__ */ $.structField("Op", /* @__PURE__ */ $.basicType("uint16", "bpf.ALUOp"), [0], 0, true)]
	)
}

export class NegateA {
	public _fields: {
	}

	constructor(init?: Partial<{}>, __goscriptValue?: boolean) {
		this._fields = {
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): NegateA {
		return new NegateA(this, true)
	}

	public __goscriptAssign(source: NegateA): void {
	}

	public Assemble(): [RawInstruction, $.GoError] {
		const a = this;
		return [new RawInstruction({Op: 132}, true), null]
	}

	public async String(): globalThis.Promise<string> {
		const a = this;
		return fmt.Sprintf("neg")
	}

	static __typeInfo = $.registerStructType(
		"bpf.NegateA",
		() => new NegateA(),
		() => [$.methodSignature("Assemble", [], ["bpf.RawInstruction", "error"]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])],
		NegateA,
		() => []
	)
}

export class Jump {
	public get Skip(): number {
		return this._fields.Skip
	}

	public set Skip(value: number) {
		this._fields.Skip = value
	}

	public _fields: {
		Skip: number
	}

	constructor(init?: Partial<{Skip?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Skip: init?.Skip ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Jump {
		return new Jump(this, true)
	}

	public __goscriptAssign(source: Jump): void {
		const target = this._fields
		const values = source._fields
		target.Skip = values.Skip
	}

	public Assemble(): [RawInstruction, $.GoError] {
		const a = this;
		return [new RawInstruction({Op: 5, K: a.Skip}, true), null]
	}

	public async String(): globalThis.Promise<string> {
		const a = this;
		return fmt.Sprintf("ja %d", $.basicInterfaceValue(a.Skip, "uint32"))
	}

	static __typeInfo = $.registerStructType(
		"bpf.Jump",
		() => new Jump(),
		() => [$.methodSignature("Assemble", [], ["bpf.RawInstruction", "error"]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])],
		Jump,
		() => [/* @__PURE__ */ $.structField("Skip", /* @__PURE__ */ $.basicType("uint32"), [0], 0, true)]
	)
}

export class JumpIf {
	public get Cond(): __goscript_constants.JumpTest {
		return this._fields.Cond
	}

	public set Cond(value: __goscript_constants.JumpTest) {
		this._fields.Cond = value
	}

	public get Val(): number {
		return this._fields.Val
	}

	public set Val(value: number) {
		this._fields.Val = value
	}

	public get SkipTrue(): number {
		return this._fields.SkipTrue
	}

	public set SkipTrue(value: number) {
		this._fields.SkipTrue = value
	}

	public get SkipFalse(): number {
		return this._fields.SkipFalse
	}

	public set SkipFalse(value: number) {
		this._fields.SkipFalse = value
	}

	public _fields: {
		Cond: __goscript_constants.JumpTest
		Val: number
		SkipTrue: number
		SkipFalse: number
	}

	constructor(init?: Partial<{Cond?: __goscript_constants.JumpTest, Val?: number, SkipTrue?: number, SkipFalse?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Cond: init?.Cond ?? (0 as __goscript_constants.JumpTest),
			Val: init?.Val ?? (0 as number),
			SkipTrue: init?.SkipTrue ?? (0 as number),
			SkipFalse: init?.SkipFalse ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): JumpIf {
		return new JumpIf(this, true)
	}

	public __goscriptAssign(source: JumpIf): void {
		const target = this._fields
		const values = source._fields
		target.Cond = values.Cond
		target.Val = values.Val
		target.SkipTrue = values.SkipTrue
		target.SkipFalse = values.SkipFalse
	}

	public Assemble(): [RawInstruction, $.GoError] {
		const a = this;
		return jumpToRaw(a.Cond, 0, a.Val, a.SkipTrue, a.SkipFalse)
	}

	public async String(): globalThis.Promise<string> {
		const a = this;
		return jumpToString(a.Cond, await fmt.Sprintf("#%d", $.basicInterfaceValue(a.Val, "uint32")), a.SkipTrue, a.SkipFalse)
	}

	static __typeInfo = $.registerStructType(
		"bpf.JumpIf",
		() => new JumpIf(),
		() => [$.methodSignature("Assemble", [], ["bpf.RawInstruction", "error"]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])],
		JumpIf,
		() => [/* @__PURE__ */ $.structField("Cond", /* @__PURE__ */ $.basicType("uint16", "bpf.JumpTest"), [0], 0, true), /* @__PURE__ */ $.structField("Val", /* @__PURE__ */ $.basicType("uint32"), [1], 4, true), /* @__PURE__ */ $.structField("SkipTrue", /* @__PURE__ */ $.basicType("uint8"), [2], 8, true), /* @__PURE__ */ $.structField("SkipFalse", /* @__PURE__ */ $.basicType("uint8"), [3], 9, true)]
	)
}

export class JumpIfX {
	public get Cond(): __goscript_constants.JumpTest {
		return this._fields.Cond
	}

	public set Cond(value: __goscript_constants.JumpTest) {
		this._fields.Cond = value
	}

	public get SkipTrue(): number {
		return this._fields.SkipTrue
	}

	public set SkipTrue(value: number) {
		this._fields.SkipTrue = value
	}

	public get SkipFalse(): number {
		return this._fields.SkipFalse
	}

	public set SkipFalse(value: number) {
		this._fields.SkipFalse = value
	}

	public _fields: {
		Cond: __goscript_constants.JumpTest
		SkipTrue: number
		SkipFalse: number
	}

	constructor(init?: Partial<{Cond?: __goscript_constants.JumpTest, SkipTrue?: number, SkipFalse?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Cond: init?.Cond ?? (0 as __goscript_constants.JumpTest),
			SkipTrue: init?.SkipTrue ?? (0 as number),
			SkipFalse: init?.SkipFalse ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): JumpIfX {
		return new JumpIfX(this, true)
	}

	public __goscriptAssign(source: JumpIfX): void {
		const target = this._fields
		const values = source._fields
		target.Cond = values.Cond
		target.SkipTrue = values.SkipTrue
		target.SkipFalse = values.SkipFalse
	}

	public Assemble(): [RawInstruction, $.GoError] {
		const a = this;
		return jumpToRaw(a.Cond, 8, 0, a.SkipTrue, a.SkipFalse)
	}

	public async String(): globalThis.Promise<string> {
		const a = this;
		return jumpToString(a.Cond, "x", a.SkipTrue, a.SkipFalse)
	}

	static __typeInfo = $.registerStructType(
		"bpf.JumpIfX",
		() => new JumpIfX(),
		() => [$.methodSignature("Assemble", [], ["bpf.RawInstruction", "error"]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])],
		JumpIfX,
		() => [/* @__PURE__ */ $.structField("Cond", /* @__PURE__ */ $.basicType("uint16", "bpf.JumpTest"), [0], 0, true), /* @__PURE__ */ $.structField("SkipTrue", /* @__PURE__ */ $.basicType("uint8"), [1], 2, true), /* @__PURE__ */ $.structField("SkipFalse", /* @__PURE__ */ $.basicType("uint8"), [2], 3, true)]
	)
}

export class RetA {
	public _fields: {
	}

	constructor(init?: Partial<{}>, __goscriptValue?: boolean) {
		this._fields = {
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): RetA {
		return new RetA(this, true)
	}

	public __goscriptAssign(source: RetA): void {
	}

	public Assemble(): [RawInstruction, $.GoError] {
		const a = this;
		return [new RawInstruction({Op: 22}, true), null]
	}

	public async String(): globalThis.Promise<string> {
		const a = this;
		return fmt.Sprintf("ret a")
	}

	static __typeInfo = $.registerStructType(
		"bpf.RetA",
		() => new RetA(),
		() => [$.methodSignature("Assemble", [], ["bpf.RawInstruction", "error"]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])],
		RetA,
		() => []
	)
}

export class RetConstant {
	public get Val(): number {
		return this._fields.Val
	}

	public set Val(value: number) {
		this._fields.Val = value
	}

	public _fields: {
		Val: number
	}

	constructor(init?: Partial<{Val?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Val: init?.Val ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): RetConstant {
		return new RetConstant(this, true)
	}

	public __goscriptAssign(source: RetConstant): void {
		const target = this._fields
		const values = source._fields
		target.Val = values.Val
	}

	public Assemble(): [RawInstruction, $.GoError] {
		const a = this;
		return [new RawInstruction({Op: 6, K: a.Val}, true), null]
	}

	public async String(): globalThis.Promise<string> {
		const a = this;
		return fmt.Sprintf("ret #%d", $.basicInterfaceValue(a.Val, "uint32"))
	}

	static __typeInfo = $.registerStructType(
		"bpf.RetConstant",
		() => new RetConstant(),
		() => [$.methodSignature("Assemble", [], ["bpf.RawInstruction", "error"]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])],
		RetConstant,
		() => [/* @__PURE__ */ $.structField("Val", /* @__PURE__ */ $.basicType("uint32"), [0], 0, true)]
	)
}

export class TXA {
	public _fields: {
	}

	constructor(init?: Partial<{}>, __goscriptValue?: boolean) {
		this._fields = {
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): TXA {
		return new TXA(this, true)
	}

	public __goscriptAssign(source: TXA): void {
	}

	public Assemble(): [RawInstruction, $.GoError] {
		const a = this;
		return [new RawInstruction({Op: 135}, true), null]
	}

	public async String(): globalThis.Promise<string> {
		const a = this;
		return fmt.Sprintf("txa")
	}

	static __typeInfo = $.registerStructType(
		"bpf.TXA",
		() => new TXA(),
		() => [$.methodSignature("Assemble", [], ["bpf.RawInstruction", "error"]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])],
		TXA,
		() => []
	)
}

export class TAX {
	public _fields: {
	}

	constructor(init?: Partial<{}>, __goscriptValue?: boolean) {
		this._fields = {
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): TAX {
		return new TAX(this, true)
	}

	public __goscriptAssign(source: TAX): void {
	}

	public Assemble(): [RawInstruction, $.GoError] {
		const a = this;
		return [new RawInstruction({Op: 7}, true), null]
	}

	public async String(): globalThis.Promise<string> {
		const a = this;
		return fmt.Sprintf("tax")
	}

	static __typeInfo = $.registerStructType(
		"bpf.TAX",
		() => new TAX(),
		() => [$.methodSignature("Assemble", [], ["bpf.RawInstruction", "error"]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])],
		TAX,
		() => []
	)
}

export function jumpOpToTest(op: __goscript_constants.jumpOp, skipTrue: number, skipFalse: number): [__goscript_constants.JumpTest, number, number] {
	let test: __goscript_constants.JumpTest = 0

	// Decode "fake" jump conditions that don't appear in machine code
	// Ensures the Assemble -> Disassemble stage recreates the same instructions
	// See https://github.com/golang/go/issues/18470
	if (skipTrue == 0) {
		switch (op) {
			case 16:
			{
				test = 1
				break
			}
			case 32:
			{
				test = 5
				break
			}
			case 48:
			{
				test = 3
				break
			}
			case 64:
			{
				test = 7
				break
			}
		}

		return [test, skipFalse, 0]
	}

	switch (op) {
		case 16:
		{
			test = 0
			break
		}
		case 32:
		{
			test = 2
			break
		}
		case 48:
		{
			test = 4
			break
		}
		case 64:
		{
			test = 6
			break
		}
	}

	return [test, skipTrue, skipFalse]
}

export function jumpToRaw(test: __goscript_constants.JumpTest, operand: __goscript_constants.opOperand, k: number, skipTrue: number, skipFalse: number): [RawInstruction, $.GoError] {
	let cond: __goscript_constants.jumpOp = 0
	let flip: boolean = false
	switch (test) {
		case 0:
		{
			cond = 16
			break
		}
		case 1:
		{
			let __goscriptAssign0_0: __goscript_constants.jumpOp = 16
			let __goscriptAssign0_1: boolean = true
			cond = __goscriptAssign0_0
			flip = __goscriptAssign0_1
			break
		}
		case 2:
		{
			cond = 32
			break
		}
		case 3:
		{
			let __goscriptAssign1_0: __goscript_constants.jumpOp = 48
			let __goscriptAssign1_1: boolean = true
			cond = __goscriptAssign1_0
			flip = __goscriptAssign1_1
			break
		}
		case 4:
		{
			cond = 48
			break
		}
		case 5:
		{
			let __goscriptAssign2_0: __goscript_constants.jumpOp = 32
			let __goscriptAssign2_1: boolean = true
			cond = __goscriptAssign2_0
			flip = __goscriptAssign2_1
			break
		}
		case 6:
		{
			cond = 64
			break
		}
		case 7:
		{
			let __goscriptAssign3_0: __goscript_constants.jumpOp = 64
			let __goscriptAssign3_1: boolean = true
			cond = __goscriptAssign3_0
			flip = __goscriptAssign3_1
			break
		}
		default:
		{
			return [new RawInstruction(undefined, true), fmt.Errorf("unknown JumpTest %v", $.namedValueInterfaceValue<any>(test, "bpf.JumpTest", {}, /* @__PURE__ */ $.basicType("uint16", "bpf.JumpTest")))]
			break
		}
	}
	let jt = skipTrue
	let jf = skipFalse
	if (flip) {
		let __goscriptAssign4_0: number = jf
		let __goscriptAssign4_1: number = jt
		jt = __goscriptAssign4_0
		jf = __goscriptAssign4_1
	}
	return [new RawInstruction({Op: $.uint((5 | $.uint(cond, 16)) | $.uint(operand, 16), 16), Jt: jt, Jf: jf, K: k}, true), null]
}

export async function jumpToString(cond: __goscript_constants.JumpTest, operand: string, skipTrue: number, skipFalse: number): globalThis.Promise<string> {
	switch (cond) {
		case 0:
		{
			return conditionalJump(operand, skipTrue, skipFalse, "jeq", "jneq")
			break
		}
		case 1:
		{
			return fmt.Sprintf("jneq %s,%d", operand, $.basicInterfaceValue(skipTrue, "uint8"))
			break
		}
		case 2:
		{
			return conditionalJump(operand, skipTrue, skipFalse, "jgt", "jle")
			break
		}
		case 3:
		{
			return fmt.Sprintf("jlt %s,%d", operand, $.basicInterfaceValue(skipTrue, "uint8"))
			break
		}
		case 4:
		{
			return conditionalJump(operand, skipTrue, skipFalse, "jge", "jlt")
			break
		}
		case 5:
		{
			return fmt.Sprintf("jle %s,%d", operand, $.basicInterfaceValue(skipTrue, "uint8"))
			break
		}
		case 6:
		{
			if (skipFalse > 0) {
				return fmt.Sprintf("jset %s,%d,%d", operand, $.basicInterfaceValue(skipTrue, "uint8"), $.basicInterfaceValue(skipFalse, "uint8"))
			}
			return fmt.Sprintf("jset %s,%d", operand, $.basicInterfaceValue(skipTrue, "uint8"))
			break
		}
		case 7:
		{
			return jumpToString(6, operand, skipFalse, skipTrue)
			break
		}
		default:
		{
			return fmt.Sprintf("unknown JumpTest %#v", $.namedValueInterfaceValue<any>(cond, "bpf.JumpTest", {}, /* @__PURE__ */ $.basicType("uint16", "bpf.JumpTest")))
			break
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export async function conditionalJump(operand: string, skipTrue: number, skipFalse: number, positiveJump: string, negativeJump: string): globalThis.Promise<string> {
	if (skipTrue > 0) {
		if (skipFalse > 0) {
			return fmt.Sprintf("%s %s,%d,%d", positiveJump, operand, $.basicInterfaceValue(skipTrue, "uint8"), $.basicInterfaceValue(skipFalse, "uint8"))
		}
		return fmt.Sprintf("%s %s,%d", positiveJump, operand, $.basicInterfaceValue(skipTrue, "uint8"))
	}
	return fmt.Sprintf("%s %s,%d", negativeJump, operand, $.basicInterfaceValue(skipFalse, "uint8"))
}

export function assembleLoad(dst: __goscript_constants.Register, loadSize: number, mode: number, k: number): [RawInstruction, $.GoError] {
	let cls: number = 0
	let sz: number = 0
	switch (dst) {
		case 0:
		{
			cls = 0
			break
		}
		case 1:
		{
			cls = 1
			break
		}
		default:
		{
			return [new RawInstruction(undefined, true), fmt.Errorf("invalid target register %v", $.namedValueInterfaceValue<any>(dst, "bpf.Register", {}, /* @__PURE__ */ $.basicType("uint16", "bpf.Register")))]
			break
		}
	}
	switch (loadSize) {
		case 1:
		{
			sz = 16
			break
		}
		case 2:
		{
			sz = 8
			break
		}
		case 4:
		{
			sz = 0
			break
		}
		default:
		{
			return [new RawInstruction(undefined, true), fmt.Errorf("invalid load byte length %d", $.basicInterfaceValue(sz, "uint16"))]
			break
		}
	}
	return [new RawInstruction({Op: $.uint((cls | sz) | mode, 16), K: k}, true), null]
}
