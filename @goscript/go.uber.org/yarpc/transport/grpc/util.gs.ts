// Generated file based on util.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as url from "@goscript/net/url/index.js"

import * as procedure from "@goscript/go.uber.org/yarpc/pkg/procedure/index.js"

import * as yarpcerrors from "@goscript/go.uber.org/yarpc/yarpcerrors/index.js"
import "@goscript/fmt/index.js"
import "@goscript/net/url/index.js"
import "@goscript/go.uber.org/yarpc/pkg/procedure/index.js"
import "@goscript/go.uber.org/yarpc/yarpcerrors/index.js"

export const defaultServiceName: string = "__default__"

export function procedureNameToServiceNameMethodName(procedureName: string): [string, string, $.GoError] {
	let [serviceName, methodName] = procedure.FromName(procedureName)
	if ($.stringEqual(serviceName, "")) {
		return ["", "", yarpcerrors.InvalidArgumentErrorf("invalid procedure name: %s", $.arrayToSlice<any>([procedureName]))]
	}
	if ($.stringEqual(methodName, "")) {
		methodName = serviceName
		serviceName = "__default__"
	}
	return [url.QueryEscape(serviceName), url.QueryEscape(methodName), null]
}

export async function procedureNameToFullMethod(procedureName: string): globalThis.Promise<[string, $.GoError]> {
	let [serviceName, methodName, err] = procedureNameToServiceNameMethodName(procedureName)
	if (err != null) {
		return ["", err]
	}
	return [await toFullMethod(serviceName, methodName), null]
}

export async function toFullMethod(serviceName: string, methodName: string): globalThis.Promise<string> {
	if ($.stringEqual(serviceName, "")) {
		serviceName = "__default__"
	}
	return fmt.Sprintf("/%s/%s", serviceName, methodName)
}

export function procedureToName(serviceName: string, methodName: string): [string, $.GoError] {
	let __goscriptTuple0: any = url.QueryUnescape(serviceName)
	serviceName = __goscriptTuple0[0]
	let err = __goscriptTuple0[1]
	if (err != null) {
		return ["", err]
	}
	let __goscriptTuple1: any = url.QueryUnescape(methodName)
	methodName = __goscriptTuple1[0]
	err = __goscriptTuple1[1]
	if (err != null) {
		return ["", err]
	}
	if ($.stringEqual(serviceName, "__default__")) {
		return [methodName, null]
	}
	return [procedure.ToName(serviceName, methodName), null]
}
