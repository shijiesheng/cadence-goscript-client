// Generated file based on codes.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as yarpcerrors from "@goscript/go.uber.org/yarpc/yarpcerrors/index.js"

import * as codes from "@goscript/google.golang.org/grpc/codes/index.js"
import "@goscript/go.uber.org/yarpc/yarpcerrors/index.js"
import "@goscript/google.golang.org/grpc/codes/index.js"

export let YARPCCodeToGRPCCode: globalThis.Map<yarpcerrors.Code, codes.Code> | null = $.makeMap<yarpcerrors.Code, codes.Code>([[0, 0], [1, 1], [2, 2], [3, 3], [4, 4], [5, 5], [6, 6], [7, 7], [8, 8], [9, 9], [10, 10], [11, 11], [12, 12], [13, 13], [14, 14], [15, 15], [16, 16]])

export function __goscript_set_YARPCCodeToGRPCCode(__goscriptValue: globalThis.Map<yarpcerrors.Code, codes.Code> | null): void {
	YARPCCodeToGRPCCode = __goscriptValue
}

export let GRPCCodeToYARPCCode: globalThis.Map<codes.Code, yarpcerrors.Code> | null = $.makeMap<codes.Code, yarpcerrors.Code>([[0, 0], [1, 1], [2, 2], [3, 3], [4, 4], [5, 5], [6, 6], [7, 7], [8, 8], [9, 9], [10, 10], [11, 11], [12, 12], [13, 13], [14, 14], [15, 15], [16, 16]])

export function __goscript_set_GRPCCodeToYARPCCode(__goscriptValue: globalThis.Map<codes.Code, yarpcerrors.Code> | null): void {
	GRPCCodeToYARPCCode = __goscriptValue
}
