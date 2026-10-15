// Generated file based on methods.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as pragma from "@goscript/google.golang.org/protobuf/internal/pragma/index.js"

import * as protoreflect from "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"

import type * as protowire from "@goscript/google.golang.org/protobuf/encoding/protowire/index.js"
import "@goscript/google.golang.org/protobuf/internal/pragma/index.js"
import "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"

export type Methods = {"NoUnkeyedLiterals": pragma.NoUnkeyedLiterals, "Flags": SupportFlags, "Size": ((_p0: SizeInput) => SizeOutput | globalThis.Promise<SizeOutput>) | null, "Marshal": ((_p0: MarshalInput) => [MarshalOutput, $.GoError] | globalThis.Promise<[MarshalOutput, $.GoError]>) | null, "Unmarshal": ((_p0: UnmarshalInput) => [UnmarshalOutput, $.GoError] | globalThis.Promise<[UnmarshalOutput, $.GoError]>) | null, "Merge": ((_p0: MergeInput) => MergeOutput | globalThis.Promise<MergeOutput>) | null, "CheckInitialized": ((_p0: CheckInitializedInput) => [CheckInitializedOutput, $.GoError] | globalThis.Promise<[CheckInitializedOutput, $.GoError]>) | null}

export type SupportFlags = bigint

export type SizeInput = {"NoUnkeyedLiterals": pragma.NoUnkeyedLiterals, "Message": protoreflect.Message | null, "Flags": MarshalInputFlags}

export type SizeOutput = {"NoUnkeyedLiterals": pragma.NoUnkeyedLiterals, "Size": number}

export type MarshalInput = {"NoUnkeyedLiterals": pragma.NoUnkeyedLiterals, "Message": protoreflect.Message | null, "Buf": $.Slice<number>, "Flags": MarshalInputFlags}

export type MarshalOutput = {"NoUnkeyedLiterals": pragma.NoUnkeyedLiterals, "Buf": $.Slice<number>}

export type MarshalInputFlags = number

export type UnmarshalInput = {"NoUnkeyedLiterals": pragma.NoUnkeyedLiterals, "Message": protoreflect.Message | null, "Buf": $.Slice<number>, "Flags": UnmarshalInputFlags, "Resolver": any, "Depth": number}

export type UnmarshalOutput = {"NoUnkeyedLiterals": pragma.NoUnkeyedLiterals, "Flags": UnmarshalOutputFlags}

export type UnmarshalInputFlags = number

export type UnmarshalOutputFlags = number

export type MergeInput = {"NoUnkeyedLiterals": pragma.NoUnkeyedLiterals, "Source": protoreflect.Message | null, "Destination": protoreflect.Message | null}

export type MergeOutput = {"NoUnkeyedLiterals": pragma.NoUnkeyedLiterals, "Flags": MergeOutputFlags}

export type MergeOutputFlags = number

export type CheckInitializedInput = {"NoUnkeyedLiterals": pragma.NoUnkeyedLiterals, "Message": protoreflect.Message | null}

export type CheckInitializedOutput = {"NoUnkeyedLiterals": pragma.NoUnkeyedLiterals}

export const SupportMarshalDeterministic: SupportFlags = 1n

export const SupportUnmarshalDiscardUnknown: SupportFlags = 2n

export const MarshalDeterministic: MarshalInputFlags = 1

export const MarshalUseCachedSize: MarshalInputFlags = 2

export const UnmarshalDiscardUnknown: UnmarshalInputFlags = 1

export const UnmarshalInitialized: UnmarshalOutputFlags = 1

export const MergeComplete: MergeOutputFlags = 1
