// Generated file based on yarpcerrorclassifier.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as __goscript_codes from "./codes.gs.ts"

import * as __goscript_errors from "./errors.gs.ts"
import "./codes.gs.ts"
import "./errors.gs.ts"

$.registerTypePackagePath("go.uber.org/yarpc/yarpcerrors", ["yarpcerrors.Fault"])

export type Fault = number

export const UnknownFault: Fault = 0

export const ClientFault: Fault = 1

export const ServerFault: Fault = 2

export async function GetFaultTypeFromError(err: $.GoError): globalThis.Promise<Fault> {
	return GetFaultTypeFromCode(__goscript_errors.Status.prototype.Code.call(await __goscript_errors.FromError(err)))
}

export function GetFaultTypeFromCode(code: __goscript_codes.Code): Fault {
	switch (code) {
		case 1:
		case 3:
		case 5:
		case 6:
		case 7:
		case 9:
		case 10:
		case 11:
		case 16:
		case 12:
		case 8:
		{
			return 1
			break
		}
		case 2:
		case 4:
		case 13:
		case 14:
		case 15:
		{
			return 2
			break
		}
	}

	return 0
}
