// Generated file based on graph.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

$.registerTypePackagePath("go.uber.org/dig/internal/graph", ["graph.Graph", "graph.cycleNode", "graph.cycleInfo"])

export type Graph = {
	EdgesFrom(u: number): $.Slice<number> | globalThis.Promise<$.Slice<number>>
	Order(): number
}

$.registerInterfaceType(
	"graph.Graph",
	null,
	[$.methodSignature("EdgesFrom", [["u", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))]), $.methodSignature("Order", [], [/* @__PURE__ */ $.basicType("int")])]
);

export type cycleInfo = $.Slice<cycleNode>

$.registerNamedType("graph.cycleInfo", /* @__PURE__ */ $.sliceType("graph.cycleNode"));

$.registerNamedValueType(
	"graph.cycleInfo",
	{Reset: (receiver: any, ...args: any[]) => (cycleInfo_Reset as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Reset")]
);

$.registerNamedValueType(
	"*graph.cycleInfo",
	{Reset: (receiver: any, ...args: any[]) => (cycleInfo_Reset as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Reset")]
);

export class cycleNode {
	public get Visited(): boolean {
		return this._fields.Visited
	}

	public set Visited(value: boolean) {
		this._fields.Visited = value
	}

	public get OnStack(): boolean {
		return this._fields.OnStack
	}

	public set OnStack(value: boolean) {
		this._fields.OnStack = value
	}

	public _fields: {
		Visited: boolean
		OnStack: boolean
	}

	constructor(init?: Partial<{Visited?: boolean, OnStack?: boolean}>, __goscriptValue?: boolean) {
		this._fields = {
			Visited: init?.Visited ?? (false as boolean),
			OnStack: init?.OnStack ?? (false as boolean)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): cycleNode {
		return new cycleNode(this, true)
	}

	public __goscriptAssign(source: cycleNode): void {
		const target = this._fields
		const values = source._fields
		target.Visited = values.Visited
		target.OnStack = values.OnStack
	}

	static __typeInfo = $.registerStructType(
		"graph.cycleNode",
		() => new cycleNode(),
		() => [],
		cycleNode,
		() => [/* @__PURE__ */ $.structField("Visited", /* @__PURE__ */ $.basicType("bool"), [0], 0, true), /* @__PURE__ */ $.structField("OnStack", /* @__PURE__ */ $.basicType("bool"), [1], 1, true)]
	)
}

export async function IsAcyclic(g: Graph | null): globalThis.Promise<[boolean, $.Slice<number>]> {
	// cycleStart is a node that introduces a cycle in
	// the graph. Values in the range [1, g.Order()) mean
	// that there exists a cycle in g.
	let info: cycleInfo = (newCycleInfo((__goscriptAwait = (g !== null && (g as any).__isVarRef !== true && (g as any).__goValue === undefined ? (g as Exclude<Graph, null>) : $.pointerValue<Exclude<Graph, null>>(g)).Order(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) as cycleInfo)

	for (let i = 0; i < (__goscriptAwait = (g !== null && (g as any).__isVarRef !== true && (g as any).__goValue === undefined ? (g as Exclude<Graph, null>) : $.pointerValue<Exclude<Graph, null>>(g)).Order(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); i++) {
		cycleInfo_Reset(info)

		let cycle: $.Slice<number> = await isAcyclic(g, i, (info as cycleInfo), null)
		if ($.sliceLen(cycle) > 0) {
			return [false, cycle]
		}
	}

	return [true, null]
}

export async function isAcyclic(g: Graph | null, u: number, info: cycleInfo, path: $.Slice<number>): globalThis.Promise<$.Slice<number>> {
	// We've already verified that there are no cycles from this node.
	if ($.arrayIndex(info!, u).Visited) {
		return null
	}
	$.arrayIndex(info!, u).Visited = true
	$.arrayIndex(info!, u).OnStack = true

	path = $.appendOne(path, u)
	for (let __goscriptRangeTarget0 = ((__goscriptAwait = (g !== null && (g as any).__isVarRef !== true && (g as any).__goValue === undefined ? (g as Exclude<Graph, null>) : $.pointerValue<Exclude<Graph, null>>(g)).EdgesFrom(u), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.Slice<number>), __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __goscriptSliceWindow0 = $.sliceRange(info), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
		let v = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as number)
		if (!((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, v)] as cycleNode).Visited) {
			{
				let cycle: $.Slice<number> = await isAcyclic(g, v, (info as cycleInfo), path)
				if ($.sliceLen(cycle) > 0) {
					return cycle
				}
			}
		} else {
			if (((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, v)] as cycleNode).OnStack) {
				// We've found a cycle, and we have a full path back.
				// Prune it down to just the cyclic nodes.
				let cycle: $.Slice<number> = path
				for (let i: number = $.sliceLen(cycle) - 1; i >= 0; i--) {
					if ($.arrayIndex(cycle!, i) == v) {
						cycle = $.goSlice(cycle, i, undefined)
						break
					}
				}

				// Complete the cycle by adding this node to it.
				return $.appendOne(cycle, v)
			}
		}
	}
	$.arrayIndex(info!, u).OnStack = false
	return null
}

export function newCycleInfo(order: number): cycleInfo {
	return ($.makeSlice<cycleNode>(order, undefined, undefined, () => new cycleNode(undefined, true)) as cycleInfo)
}

export function cycleInfo_Reset(info: cycleInfo): void {
	for (let __goscriptRangeTarget1 = info, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), i = 0; i < __goscriptRangeWindow1.length; i++) {
		;((__goscriptRangeWindow1.backing as any[])[__goscriptRangeWindow1.offset + i] as cycleNode).OnStack = false
	}
}

var __goscriptAwait: any
