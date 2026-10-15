// Generated file based on vm_instructions.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as binary from "@goscript/encoding/binary/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as __goscript_constants from "./constants.gs.ts"

import type * as __goscript_instructions from "./instructions.gs.ts"
import "@goscript/encoding/binary/index.js"
import "@goscript/fmt/index.js"
import "./constants.gs.ts"

export function aluOpConstant(ins: __goscript_instructions.ALUOpConstant, regA: number): number {
	return aluOpCommon(ins.Op, regA, ins.Val)
}

export function aluOpX(ins: __goscript_instructions.ALUOpX, regA: number, regX: number): [number, boolean] {
	// Guard against division or modulus by zero by terminating
	// the program, as the OS BPF VM does
	if (regX == 0) {
		switch (ins.Op) {
			case 48:
			case 144:
			{
				return [0, false]
				break
			}
		}
	}

	return [aluOpCommon(ins.Op, regA, regX), true]
}

export function aluOpCommon(op: __goscript_constants.ALUOp, regA: number, value: number): number {
	switch (op) {
		case 0:
		{
			return $.uint(((regA + value) >>> 0), 32)
			break
		}
		case 16:
		{
			return $.uint(((regA - value) >>> 0), 32)
			break
		}
		case 32:
		{
			return $.uint(globalThis.Math.imul(regA, value) >>> 0, 32)
			break
		}
		case 48:
		{
			return $.uint(globalThis.Math.trunc(regA / value), 32)
			break
		}
		case 64:
		{
			return $.uint(regA | value, 32)
			break
		}
		case 80:
		{
			return $.uint(regA & value, 32)
			break
		}
		case 96:
		{
			return $.uint(((regA << value) >>> 0), 32)
			break
		}
		case 112:
		{
			return $.uint($.uintShr(regA, value, 32), 32)
			break
		}
		case 144:
		{
			return $.uint(regA % value, 32)
			break
		}
		case 160:
		{
			return $.uint(regA ^ value, 32)
			break
		}
		default:
		{
			return regA
			break
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export function jumpIf(ins: __goscript_instructions.JumpIf, regA: number): number {
	return jumpIfCommon(ins.Cond, ins.SkipTrue, ins.SkipFalse, regA, ins.Val)
}

export function jumpIfX(ins: __goscript_instructions.JumpIfX, regA: number, regX: number): number {
	return jumpIfCommon(ins.Cond, ins.SkipTrue, ins.SkipFalse, regA, regX)
}

export function jumpIfCommon(cond: __goscript_constants.JumpTest, skipTrue: number, skipFalse: number, regA: number, value: number): number {
	let ok: boolean = false

	switch (cond) {
		case 0:
		{
			ok = regA == value
			break
		}
		case 1:
		{
			ok = regA != value
			break
		}
		case 2:
		{
			ok = regA > value
			break
		}
		case 3:
		{
			ok = regA < value
			break
		}
		case 4:
		{
			ok = regA >= value
			break
		}
		case 5:
		{
			ok = regA <= value
			break
		}
		case 6:
		{
			ok = $.uint((regA & value), 32) != 0
			break
		}
		case 7:
		{
			ok = $.uint((regA & value), 32) == 0
			break
		}
	}

	if (ok) {
		return $.int(skipTrue)
	}

	return $.int(skipFalse)
}

export async function loadAbsolute(ins: __goscript_instructions.LoadAbsolute, _in: $.Slice<number>): globalThis.Promise<[number, boolean]> {
	let offset = $.int(ins.Off)
	let size = ins.Size

	return loadCommon(_in, offset, size)
}

export function loadConstant(ins: __goscript_instructions.LoadConstant, regA: number, regX: number): [number, number] {
	switch (ins.Dst) {
		case 0:
		{
			regA = ins.Val
			break
		}
		case 1:
		{
			regX = ins.Val
			break
		}
	}

	return [regA, regX]
}

export async function loadExtension(ins: __goscript_instructions.LoadExtension, _in: $.Slice<number>): globalThis.Promise<number> {
	switch (ins.Num) {
		case 1:
		{
			return $.uint($.sliceLen(_in), 32)
			break
		}
		default:
		{
			$.panic(await fmt.Sprintf("unimplemented extension: %d", $.namedValueInterfaceValue<any>(ins.Num, "bpf.Extension", {}, /* @__PURE__ */ $.basicType("int", "bpf.Extension"))))
			break
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export async function loadIndirect(ins: __goscript_instructions.LoadIndirect, _in: $.Slice<number>, regX: number): globalThis.Promise<[number, boolean]> {
	let offset = $.int(ins.Off) + $.int(regX)
	let size = ins.Size

	return loadCommon(_in, offset, size)
}

export function loadMemShift(ins: __goscript_instructions.LoadMemShift, _in: $.Slice<number>): [number, boolean] {
	let offset = $.int(ins.Off)

	// Size of LoadMemShift is always 1 byte
	if (!inBounds($.sliceLen(_in), offset, 1)) {
		return [0, false]
	}

	// Mask off high 4 bits and multiply low 4 bits by 4
	return [$.uint(globalThis.Math.imul($.uint($.arrayIndex(_in!, offset) & 0x0f, 32), 4) >>> 0, 32), true]
}

export function inBounds(inLen: number, offset: number, size: number): boolean {
	return (offset + size) <= inLen
}

export async function loadCommon(_in: $.Slice<number>, offset: number, size: number): globalThis.Promise<[number, boolean]> {
	if (!inBounds($.sliceLen(_in), offset, size)) {
		return [0, false]
	}

	switch (size) {
		case 1:
		{
			return [$.uint($.arrayIndex(_in!, offset), 32), true]
			break
		}
		case 2:
		{
			return [$.uint($.markAsStructValue($.cloneStructValue($.pointerValue<any>(binary.BigEndian))).Uint16($.goSlice(_in, offset, offset + size)), 32), true]
			break
		}
		case 4:
		{
			return [$.uint($.markAsStructValue($.cloneStructValue($.pointerValue<any>(binary.BigEndian))).Uint32($.goSlice(_in, offset, offset + size)), 32), true]
			break
		}
		default:
		{
			$.panic(await fmt.Sprintf("invalid load size: %d", $.basicInterfaceValue(size, "int")))
			break
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export function loadScratch(ins: __goscript_instructions.LoadScratch, regScratch: number[], regA: number, regX: number): [number, number] {
	switch (ins.Dst) {
		case 0:
		{
			regA = $.arrayIndex(regScratch, ins.N)
			break
		}
		case 1:
		{
			regX = $.arrayIndex(regScratch, ins.N)
			break
		}
	}

	return [regA, regX]
}

export function storeScratch(ins: __goscript_instructions.StoreScratch, regScratch: number[], regA: number, regX: number): number[] {
	switch (ins.Src) {
		case 0:
		{
			regScratch[ins.N] = regA
			break
		}
		case 1:
		{
			regScratch[ins.N] = regX
			break
		}
	}

	return $.cloneArrayValue(regScratch, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint32"), 16))
}
