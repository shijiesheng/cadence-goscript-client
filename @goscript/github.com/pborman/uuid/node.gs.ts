// Generated file based on node.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as net from "@goscript/net/index.js"

import * as sync from "@goscript/sync/index.js"

import type * as __goscript_dce from "./dce.gs.ts"

import type * as __goscript_json from "./json.gs.ts"

import type * as __goscript_sql from "./sql.gs.ts"

import type * as __goscript_time from "./time.gs.ts"

import * as __goscript_util from "./util.gs.ts"

import type * as __goscript_uuid from "./uuid.gs.ts"
import "@goscript/net/index.js"
import "@goscript/sync/index.js"
import "./util.gs.ts"

export let nodeMu: $.VarRef<sync.Mutex> = $.varRef($.markAsStructValue(new sync.Mutex()))

export function __goscript_set_nodeMu(__goscriptValue: sync.Mutex): void {
	$.assignStruct(nodeMu.value, __goscriptValue)
}

export let interfaces: $.Slice<net.Interface> = null! as $.Slice<net.Interface>

export function __goscript_set_interfaces(__goscriptValue: $.Slice<net.Interface>): void {
	interfaces = __goscriptValue
}

export let ifname: string = ""

export function __goscript_set_ifname(__goscriptValue: string): void {
	ifname = __goscriptValue
}

export let nodeID: $.Slice<number> = null! as $.Slice<number>

export function __goscript_set_nodeID(__goscriptValue: $.Slice<number>): void {
	nodeID = __goscriptValue
}

export async function NodeInterface(): globalThis.Promise<string> {
	using __defer = new $.DisposableStack()
	const __goscriptDeferCallee0 = $.functionValue(((__receiver) => () => __receiver.Unlock())(nodeMu.value), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
	__defer.defer(() => { __goscriptDeferCallee0() })
	await nodeMu.value.Lock()
	return ifname
}

export async function SetNodeInterface(name: string): globalThis.Promise<boolean> {
	using __defer = new $.DisposableStack()
	const __goscriptDeferCallee1 = $.functionValue(((__receiver) => () => __receiver.Unlock())(nodeMu.value), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
	__defer.defer(() => { __goscriptDeferCallee1() })
	await nodeMu.value.Lock()
	return await setNodeInterface(name)
}

export async function setNodeInterface(name: string): globalThis.Promise<boolean> {
	if (interfaces == null) {
		let err: $.GoError = null! as $.GoError
		let __goscriptTuple0: any = await net.Interfaces()
		interfaces = __goscriptTuple0[0]
		err = __goscriptTuple0[1]
		if ((err != null) && (!$.stringEqual(name, ""))) {
			return false
		}
	}

	for (let __goscriptRangeTarget0 = interfaces, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
		let ifs = ((__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as net.Interface)).clone()
		if (($.sliceLen((ifs.HardwareAddr as net.HardwareAddr)) >= 6) && (($.stringEqual(name, "")) || ($.stringEqual(name, ifs.Name)))) {
			if (setNodeID(ifs.HardwareAddr)) {
				ifname = ifs.Name
				return true
			}
		}
	}

	// We found no interfaces with a valid hardware address.  If name
	// does not specify a specific interface generate a random Node ID
	// (section 4.1.6)
	if ($.stringEqual(name, "")) {
		if (nodeID == null) {
			nodeID = $.makeSlice<number>(6, undefined, "byte")
		}
		await __goscript_util.randomBits(nodeID)
		return true
	}
	return false
}

export async function NodeID(): globalThis.Promise<$.Slice<number>> {
	using __defer = new $.DisposableStack()
	const __goscriptDeferCallee2 = $.functionValue(((__receiver) => () => __receiver.Unlock())(nodeMu.value), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
	__defer.defer(() => { __goscriptDeferCallee2() })
	await nodeMu.value.Lock()
	if (nodeID == null) {
		await setNodeInterface("")
	}
	let nid: $.Slice<number> = $.makeSlice<number>(6, undefined, "byte")
	$.copy(nid, nodeID)
	return nid
}

export async function SetNodeID(id: $.Slice<number>): globalThis.Promise<boolean> {
	using __defer = new $.DisposableStack()
	const __goscriptDeferCallee3 = $.functionValue(((__receiver) => () => __receiver.Unlock())(nodeMu.value), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
	__defer.defer(() => { __goscriptDeferCallee3() })
	await nodeMu.value.Lock()
	if (setNodeID(id)) {
		ifname = "user"
		return true
	}
	return false
}

export function setNodeID(id: $.Slice<number>): boolean {
	if ($.sliceLen(id) < 6) {
		return false
	}
	if (nodeID == null) {
		nodeID = $.makeSlice<number>(6, undefined, "byte")
	}
	$.copy(nodeID, id)
	return true
}

export function UUID_NodeID(uuid: __goscript_uuid.UUID): $.Slice<number> {
	if ($.sliceLen((uuid as __goscript_uuid.UUID)) != 16) {
		return null
	}
	let node: $.Slice<number> = $.makeSlice<number>(6, undefined, "byte")
	$.copy(node, ($.goSlice(uuid, 10, undefined) as __goscript_uuid.UUID))
	return node
}
