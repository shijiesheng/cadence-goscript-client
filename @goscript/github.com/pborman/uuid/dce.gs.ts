// Generated file based on dce.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as binary from "@goscript/encoding/binary/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as os from "@goscript/os/index.js"

import type * as __goscript_json from "./json.gs.ts"

import type * as __goscript_node from "./node.gs.ts"

import type * as __goscript_sql from "./sql.gs.ts"

import type * as __goscript_time from "./time.gs.ts"

import * as __goscript_uuid from "./uuid.gs.ts"

import * as __goscript_version1 from "./version1.gs.ts"
import "@goscript/encoding/binary/index.js"
import "@goscript/fmt/index.js"
import "@goscript/os/index.js"
import "./uuid.gs.ts"
import "./version1.gs.ts"

$.registerTypePackagePath("github.com/pborman/uuid", ["uuid.Domain"])

export type Domain = number

$.registerNamedValueType(
	"uuid.Domain",
	{String: (receiver: any, ...args: any[]) => (Domain_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

$.registerNamedValueType(
	"*uuid.Domain",
	{String: (receiver: any, ...args: any[]) => (Domain_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

export const Person: Domain = 0

export const Group: Domain = 1

export const Org: Domain = 2

export async function NewDCESecurity(domain: Domain, id: number): globalThis.Promise<__goscript_uuid.UUID> {
	let uuid: __goscript_uuid.UUID = (await __goscript_version1.NewUUID() as __goscript_uuid.UUID)
	if (uuid != null) {
		$.sliceElems(uuid!)[$.sliceSlot(uuid!, 6)] = $.uint(($.arrayIndex(uuid!, 6) & 0x0f) | 0x20, 8)
		$.sliceElems(uuid!)[$.sliceSlot(uuid!, 9)] = $.uint(domain, 8)
		$.markAsStructValue($.cloneStructValue($.pointerValue<any>(binary.BigEndian))).PutUint32($.goSlice(uuid, 0, undefined), id)
	}
	return (uuid as __goscript_uuid.UUID)
}

export async function NewDCEPerson(): globalThis.Promise<__goscript_uuid.UUID> {
	return (await NewDCESecurity(0, $.uint(os.Getuid(), 32)) as __goscript_uuid.UUID)
}

export async function NewDCEGroup(): globalThis.Promise<__goscript_uuid.UUID> {
	return (await NewDCESecurity(1, $.uint(os.Getgid(), 32)) as __goscript_uuid.UUID)
}

export function UUID_Domain(uuid: __goscript_uuid.UUID): [Domain, boolean] {
	{
		let [v, ] = __goscript_uuid.UUID_Version(uuid)
		if (v != 2) {
			return [0, false]
		}
	}
	return [$.uint($.arrayIndex(uuid!, 9), 8), true]
}

export function UUID_Id(uuid: __goscript_uuid.UUID): [number, boolean] {
	{
		let [v, ] = __goscript_uuid.UUID_Version(uuid)
		if (v != 2) {
			return [0, false]
		}
	}
	return [$.markAsStructValue($.cloneStructValue($.pointerValue<any>(binary.BigEndian))).Uint32($.goSlice(uuid, 0, 4)), true]
}

export async function Domain_String(d: Domain): globalThis.Promise<string> {
	switch (d) {
		case 0:
		{
			return "Person"
			break
		}
		case 1:
		{
			return "Group"
			break
		}
		case 2:
		{
			return "Org"
			break
		}
	}
	return fmt.Sprintf("Domain%d", $.basicInterfaceValue($.int(d), "int"))
}
