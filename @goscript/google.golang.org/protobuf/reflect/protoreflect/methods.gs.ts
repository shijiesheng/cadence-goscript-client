// Generated file based on methods.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as pragma from "@goscript/google.golang.org/protobuf/internal/pragma/index.js"

import type * as protowire from "@goscript/google.golang.org/protobuf/encoding/protowire/index.js"

import * as __goscript__type from "./type.gs.ts"

import type * as __goscript_proto from "./proto.gs.ts"

import * as __goscript_source from "./source.gs.ts"

import * as __goscript_source_gen from "./source_gen.gs.ts"

import type * as __goscript_value from "./value.gs.ts"

import type * as __goscript_value_equal from "./value_equal.gs.ts"

import * as __goscript_value_pure from "./value_pure.gs.ts"

import type * as __goscript_value_union from "./value_union.gs.ts"
import "@goscript/google.golang.org/protobuf/internal/pragma/index.js"
import "./type.gs.ts"
import "./source.gs.ts"
import "./source_gen.gs.ts"
import "./value_pure.gs.ts"

export type methods = {"NoUnkeyedLiterals": pragma.NoUnkeyedLiterals, "Flags": supportFlags, "Size": ((_p0: sizeInput) => sizeOutput | globalThis.Promise<sizeOutput>) | null, "Marshal": ((_p0: marshalInput) => [marshalOutput, $.GoError] | globalThis.Promise<[marshalOutput, $.GoError]>) | null, "Unmarshal": ((_p0: unmarshalInput) => [unmarshalOutput, $.GoError] | globalThis.Promise<[unmarshalOutput, $.GoError]>) | null, "Merge": ((_p0: mergeInput) => mergeOutput | globalThis.Promise<mergeOutput>) | null, "CheckInitialized": ((_p0: checkInitializedInput) => [checkInitializedOutput, $.GoError] | globalThis.Promise<[checkInitializedOutput, $.GoError]>) | null}

export type supportFlags = bigint

export type sizeInput = {"NoUnkeyedLiterals": pragma.NoUnkeyedLiterals, "Message": __goscript_value.Message | null, "Flags": number}

export type sizeOutput = {"NoUnkeyedLiterals": pragma.NoUnkeyedLiterals, "Size": number}

export type marshalInput = {"NoUnkeyedLiterals": pragma.NoUnkeyedLiterals, "Message": __goscript_value.Message | null, "Buf": $.Slice<number>, "Flags": number}

export type marshalOutput = {"NoUnkeyedLiterals": pragma.NoUnkeyedLiterals, "Buf": $.Slice<number>}

export type unmarshalInput = {"NoUnkeyedLiterals": pragma.NoUnkeyedLiterals, "Message": __goscript_value.Message | null, "Buf": $.Slice<number>, "Flags": number, "Resolver": any, "Depth": number}

export type unmarshalOutput = {"NoUnkeyedLiterals": pragma.NoUnkeyedLiterals, "Flags": number}

export type mergeInput = {"NoUnkeyedLiterals": pragma.NoUnkeyedLiterals, "Source": __goscript_value.Message | null, "Destination": __goscript_value.Message | null}

export type mergeOutput = {"NoUnkeyedLiterals": pragma.NoUnkeyedLiterals, "Flags": number}

export type checkInitializedInput = {"NoUnkeyedLiterals": pragma.NoUnkeyedLiterals, "Message": __goscript_value.Message | null}

export type checkInitializedOutput = {"NoUnkeyedLiterals": pragma.NoUnkeyedLiterals}
