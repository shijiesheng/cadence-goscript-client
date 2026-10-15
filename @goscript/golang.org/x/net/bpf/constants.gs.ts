// Generated file based on constants.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

$.registerTypePackagePath("golang.org/x/net/bpf", ["bpf.Register", "bpf.ALUOp", "bpf.JumpTest", "bpf.Extension", "bpf.opOperand", "bpf.jumpOp"])

export type Register = number

export type ALUOp = number

export type JumpTest = number

export type Extension = number

export type opOperand = number

export type jumpOp = number

export const RegA: Register = 0

export const RegX: Register = 1

export const ALUOpAdd: ALUOp = 0

export const ALUOpSub: ALUOp = 16

export const ALUOpMul: ALUOp = 32

export const ALUOpDiv: ALUOp = 48

export const ALUOpOr: ALUOp = 64

export const ALUOpAnd: ALUOp = 80

export const ALUOpShiftLeft: ALUOp = 96

export const ALUOpShiftRight: ALUOp = 112

export const aluOpNeg: ALUOp = 128

export const ALUOpMod: ALUOp = 144

export const ALUOpXor: ALUOp = 160

export const JumpEqual: JumpTest = 0

export const JumpNotEqual: JumpTest = 1

export const JumpGreaterThan: JumpTest = 2

export const JumpLessThan: JumpTest = 3

export const JumpGreaterOrEqual: JumpTest = 4

export const JumpLessOrEqual: JumpTest = 5

export const JumpBitsSet: JumpTest = 6

export const JumpBitsNotSet: JumpTest = 7

export const extOffset: number = -4096

export const ExtLen: Extension = 1

export const ExtProto: Extension = 0

export const ExtType: Extension = 4

export const ExtPayloadOffset: Extension = 52

export const ExtInterfaceIndex: Extension = 8

export const ExtNetlinkAttr: Extension = 12

export const ExtNetlinkAttrNested: Extension = 16

export const ExtMark: Extension = 20

export const ExtQueue: Extension = 24

export const ExtLinkLayerType: Extension = 28

export const ExtRXHash: Extension = 32

export const ExtCPUID: Extension = 36

export const ExtVLANTag: Extension = 44

export const ExtVLANTagPresent: Extension = 48

export const ExtVLANProto: Extension = 60

export const ExtRand: Extension = 56

export const opMaskCls: number = 7

export const opMaskLoadDest: number = 1

export const opMaskLoadWidth: number = 24

export const opMaskLoadMode: number = 224

export const opMaskOperand: number = 8

export const opMaskOperator: number = 240

export const opClsLoadA: number = 0

export const opClsLoadX: number = 1

export const opClsStoreA: number = 2

export const opClsStoreX: number = 3

export const opClsALU: number = 4

export const opClsJump: number = 5

export const opClsReturn: number = 6

export const opClsMisc: number = 7

export const opAddrModeImmediate: number = 0

export const opAddrModeAbsolute: number = 32

export const opAddrModeIndirect: number = 64

export const opAddrModeScratch: number = 96

export const opAddrModePacketLen: number = 128

export const opAddrModeMemShift: number = 160

export const opLoadWidth4: number = 0

export const opLoadWidth2: number = 8

export const opLoadWidth1: number = 16

export const opOperandConstant: opOperand = 0

export const opOperandX: opOperand = 8

export const opJumpAlways: jumpOp = 0

export const opJumpEqual: jumpOp = 16

export const opJumpGT: jumpOp = 32

export const opJumpGE: jumpOp = 48

export const opJumpSet: jumpOp = 64

export const opRetSrcConstant: number = 0

export const opRetSrcA: number = 16

export const opMiscTAX: number = 0

export const opMiscTXA: number = 128
