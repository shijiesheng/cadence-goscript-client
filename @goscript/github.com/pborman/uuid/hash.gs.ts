// Generated file based on hash.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as md5 from "@goscript/crypto/md5/index.js"

import * as sha1 from "@goscript/crypto/sha1/index.js"

import * as hash from "@goscript/hash/index.js"

import * as io from "@goscript/io/index.js"

import type * as __goscript_dce from "./dce.gs.ts"

import type * as __goscript_json from "./json.gs.ts"

import type * as __goscript_node from "./node.gs.ts"

import type * as __goscript_sql from "./sql.gs.ts"

import type * as __goscript_time from "./time.gs.ts"

import * as __goscript_uuid from "./uuid.gs.ts"
import "@goscript/crypto/md5/index.js"
import "@goscript/crypto/sha1/index.js"
import "@goscript/hash/index.js"
import "@goscript/io/index.js"
import "./uuid.gs.ts"

export var NameSpace_DNS: __goscript_uuid.UUID

export function __goscript_init_NameSpace_DNS(): void {
	if (((NameSpace_DNS) as any) === undefined) {
		NameSpace_DNS = (__goscript_uuid.Parse("6ba7b810-9dad-11d1-80b4-00c04fd430c8") as __goscript_uuid.UUID)
	}
}

export function __goscript_get_NameSpace_DNS(): __goscript_uuid.UUID {
	if (((NameSpace_DNS) as any) === undefined) {
		__goscript_init_NameSpace_DNS()
	}
	return NameSpace_DNS
}

export function __goscript_set_NameSpace_DNS(__goscriptValue: __goscript_uuid.UUID): void {
	NameSpace_DNS = __goscriptValue
}

export var NameSpace_URL: __goscript_uuid.UUID

export function __goscript_init_NameSpace_URL(): void {
	if (((NameSpace_URL) as any) === undefined) {
		NameSpace_URL = (__goscript_uuid.Parse("6ba7b811-9dad-11d1-80b4-00c04fd430c8") as __goscript_uuid.UUID)
	}
}

export function __goscript_get_NameSpace_URL(): __goscript_uuid.UUID {
	if (((NameSpace_URL) as any) === undefined) {
		__goscript_init_NameSpace_URL()
	}
	return NameSpace_URL
}

export function __goscript_set_NameSpace_URL(__goscriptValue: __goscript_uuid.UUID): void {
	NameSpace_URL = __goscriptValue
}

export var NameSpace_OID: __goscript_uuid.UUID

export function __goscript_init_NameSpace_OID(): void {
	if (((NameSpace_OID) as any) === undefined) {
		NameSpace_OID = (__goscript_uuid.Parse("6ba7b812-9dad-11d1-80b4-00c04fd430c8") as __goscript_uuid.UUID)
	}
}

export function __goscript_get_NameSpace_OID(): __goscript_uuid.UUID {
	if (((NameSpace_OID) as any) === undefined) {
		__goscript_init_NameSpace_OID()
	}
	return NameSpace_OID
}

export function __goscript_set_NameSpace_OID(__goscriptValue: __goscript_uuid.UUID): void {
	NameSpace_OID = __goscriptValue
}

export var NameSpace_X500: __goscript_uuid.UUID

export function __goscript_init_NameSpace_X500(): void {
	if (((NameSpace_X500) as any) === undefined) {
		NameSpace_X500 = (__goscript_uuid.Parse("6ba7b814-9dad-11d1-80b4-00c04fd430c8") as __goscript_uuid.UUID)
	}
}

export function __goscript_get_NameSpace_X500(): __goscript_uuid.UUID {
	if (((NameSpace_X500) as any) === undefined) {
		__goscript_init_NameSpace_X500()
	}
	return NameSpace_X500
}

export function __goscript_set_NameSpace_X500(__goscriptValue: __goscript_uuid.UUID): void {
	NameSpace_X500 = __goscriptValue
}

export var NIL: __goscript_uuid.UUID

export function __goscript_init_NIL(): void {
	if (((NIL) as any) === undefined) {
		NIL = (__goscript_uuid.Parse("00000000-0000-0000-0000-000000000000") as __goscript_uuid.UUID)
	}
}

export function __goscript_get_NIL(): __goscript_uuid.UUID {
	if (((NIL) as any) === undefined) {
		__goscript_init_NIL()
	}
	return NIL
}

export function __goscript_set_NIL(__goscriptValue: __goscript_uuid.UUID): void {
	NIL = __goscriptValue
}

export async function NewHash(h: hash.Hash | null, space: __goscript_uuid.UUID, data: $.Slice<number>, version: number): globalThis.Promise<__goscript_uuid.UUID> {
	void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<hash.Hash, null>) : $.pointerValue<Exclude<hash.Hash, null>>(h)).Reset(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	await (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<hash.Hash, null>) : $.pointerValue<Exclude<hash.Hash, null>>(h)).Write(space)
	await (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<hash.Hash, null>) : $.pointerValue<Exclude<hash.Hash, null>>(h)).Write(data)
	let s: $.Slice<number> = await (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<hash.Hash, null>) : $.pointerValue<Exclude<hash.Hash, null>>(h)).Sum(null)
	let uuid: $.Slice<number> = $.makeSlice<number>(16, undefined, "byte")
	$.copy(uuid, s)
	$.sliceElems(uuid!)[$.sliceSlot(uuid!, 6)] = $.uint(($.arrayIndex(uuid!, 6) & 0x0f) | $.uint((version & 0xf) << 4, 8), 8)
	$.sliceElems(uuid!)[$.sliceSlot(uuid!, 8)] = $.uint(($.arrayIndex(uuid!, 8) & 0x3f) | 0x80, 8)
	return (uuid as __goscript_uuid.UUID)
}

export async function NewMD5(space: __goscript_uuid.UUID, data: $.Slice<number>): globalThis.Promise<__goscript_uuid.UUID> {
	return (await NewHash(md5.New(), (space as __goscript_uuid.UUID), data, 3) as __goscript_uuid.UUID)
}

export async function NewSHA1(space: __goscript_uuid.UUID, data: $.Slice<number>): globalThis.Promise<__goscript_uuid.UUID> {
	return (await NewHash(sha1.New(), (space as __goscript_uuid.UUID), data, 5) as __goscript_uuid.UUID)
}

var __goscriptAwait: any
