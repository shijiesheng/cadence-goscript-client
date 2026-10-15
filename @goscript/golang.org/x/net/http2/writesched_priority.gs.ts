// Generated file based on writesched_priority.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as math from "@goscript/math/index.js"

import * as sort from "@goscript/sort/index.js"

import * as bufio from "@goscript/bufio/index.js"

import * as bytes2 from "@goscript/bytes/index.js"

import * as context from "@goscript/context/index.js"

import * as tls from "@goscript/crypto/tls/index.js"

import * as hpack from "@goscript/golang.org/x/net/http2/hpack/index.js"

import * as io from "@goscript/io/index.js"

import * as net from "@goscript/net/index.js"

import * as http from "@goscript/net/http/index.js"

import * as url from "@goscript/net/url/index.js"

import * as sync from "@goscript/sync/index.js"

import * as time from "@goscript/time/index.js"

import * as __goscript_errors from "./errors.gs.ts"

import * as __goscript_flow from "./flow.gs.ts"

import * as __goscript_frame from "./frame.gs.ts"

import * as __goscript_gotrack from "./gotrack.gs.ts"

import * as __goscript_http2 from "./http2.gs.ts"

import * as __goscript_pipe from "./pipe.gs.ts"

import * as __goscript_server from "./server.gs.ts"

import * as __goscript_timer from "./timer.gs.ts"

import * as __goscript_write from "./write.gs.ts"

import * as __goscript_writesched from "./writesched.gs.ts"
import "@goscript/fmt/index.js"
import "@goscript/math/index.js"
import "@goscript/sort/index.js"
import "@goscript/bufio/index.js"
import "@goscript/bytes/index.js"
import "@goscript/context/index.js"
import "@goscript/crypto/tls/index.js"
import "@goscript/golang.org/x/net/http2/hpack/index.js"
import "@goscript/io/index.js"
import "@goscript/net/index.js"
import "@goscript/net/http/index.js"
import "@goscript/net/url/index.js"
import "@goscript/sync/index.js"
import "@goscript/time/index.js"
import "./errors.gs.ts"
import "./flow.gs.ts"
import "./frame.gs.ts"
import "./gotrack.gs.ts"
import "./http2.gs.ts"
import "./pipe.gs.ts"
import "./server.gs.ts"
import "./timer.gs.ts"
import "./write.gs.ts"
import "./writesched.gs.ts"

$.registerTypePackagePath("golang.org/x/net/http2", ["http2.PriorityWriteSchedulerConfig", "http2.priorityNodeState", "http2.priorityNode", "http2.sortPriorityNodeSiblings", "http2.priorityWriteScheduler"])

export type priorityNodeState = number

export type sortPriorityNodeSiblings = $.Slice<priorityNode | $.VarRef<priorityNode> | null>

$.registerNamedType("http2.sortPriorityNodeSiblings", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("http2.priorityNode")));

$.registerNamedValueType(
	"http2.sortPriorityNodeSiblings",
	{Len: (receiver: any, ...args: any[]) => (sortPriorityNodeSiblings_Len as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Less: (receiver: any, ...args: any[]) => (sortPriorityNodeSiblings_Less as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Swap: (receiver: any, ...args: any[]) => (sortPriorityNodeSiblings_Swap as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Less", [["i", /* @__PURE__ */ $.basicType("int")], ["k", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Swap", [["i", /* @__PURE__ */ $.basicType("int")], ["k", /* @__PURE__ */ $.basicType("int")]])]
);

$.registerNamedValueType(
	"*http2.sortPriorityNodeSiblings",
	{Len: (receiver: any, ...args: any[]) => (sortPriorityNodeSiblings_Len as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Less: (receiver: any, ...args: any[]) => (sortPriorityNodeSiblings_Less as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Swap: (receiver: any, ...args: any[]) => (sortPriorityNodeSiblings_Swap as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Less", [["i", /* @__PURE__ */ $.basicType("int")], ["k", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Swap", [["i", /* @__PURE__ */ $.basicType("int")], ["k", /* @__PURE__ */ $.basicType("int")]])]
);

export class PriorityWriteSchedulerConfig {
	// MaxClosedNodesInTree controls the maximum number of closed streams to
	// retain in the priority tree. Setting this to zero saves a small amount
	// of memory at the cost of performance.
	//
	// See RFC 7540, Section 5.3.4:
	//   "It is possible for a stream to become closed while prioritization
	//   information ... is in transit. ... This potentially creates suboptimal
	//   prioritization, since the stream could be given a priority that is
	//   different from what is intended. To avoid these problems, an endpoint
	//   SHOULD retain stream prioritization state for a period after streams
	//   become closed. The longer state is retained, the lower the chance that
	//   streams are assigned incorrect or default priority values."
	public get MaxClosedNodesInTree(): number {
		return this._fields.MaxClosedNodesInTree
	}

	public set MaxClosedNodesInTree(value: number) {
		this._fields.MaxClosedNodesInTree = value
	}

	// MaxIdleNodesInTree controls the maximum number of idle streams to
	// retain in the priority tree. Setting this to zero saves a small amount
	// of memory at the cost of performance.
	//
	// See RFC 7540, Section 5.3.4:
	//   Similarly, streams that are in the "idle" state can be assigned
	//   priority or become a parent of other streams. This allows for the
	//   creation of a grouping node in the dependency tree, which enables
	//   more flexible expressions of priority. Idle streams begin with a
	//   default priority (Section 5.3.5).
	public get MaxIdleNodesInTree(): number {
		return this._fields.MaxIdleNodesInTree
	}

	public set MaxIdleNodesInTree(value: number) {
		this._fields.MaxIdleNodesInTree = value
	}

	// ThrottleOutOfOrderWrites enables write throttling to help ensure that
	// data is delivered in priority order. This works around a race where
	// stream B depends on stream A and both streams are about to call Write
	// to queue DATA frames. If B wins the race, a naive scheduler would eagerly
	// write as much data from B as possible, but this is suboptimal because A
	// is a higher-priority stream. With throttling enabled, we write a small
	// amount of data from B to minimize the amount of bandwidth that B can
	// steal from A.
	public get ThrottleOutOfOrderWrites(): boolean {
		return this._fields.ThrottleOutOfOrderWrites
	}

	public set ThrottleOutOfOrderWrites(value: boolean) {
		this._fields.ThrottleOutOfOrderWrites = value
	}

	public _fields: {
		MaxClosedNodesInTree: number
		MaxIdleNodesInTree: number
		ThrottleOutOfOrderWrites: boolean
	}

	constructor(init?: Partial<{MaxClosedNodesInTree?: number, MaxIdleNodesInTree?: number, ThrottleOutOfOrderWrites?: boolean}>, __goscriptValue?: boolean) {
		this._fields = {
			MaxClosedNodesInTree: init?.MaxClosedNodesInTree ?? (0 as number),
			MaxIdleNodesInTree: init?.MaxIdleNodesInTree ?? (0 as number),
			ThrottleOutOfOrderWrites: init?.ThrottleOutOfOrderWrites ?? (false as boolean)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): PriorityWriteSchedulerConfig {
		return new PriorityWriteSchedulerConfig(this, true)
	}

	public __goscriptAssign(source: PriorityWriteSchedulerConfig): void {
		const target = this._fields
		const values = source._fields
		target.MaxClosedNodesInTree = values.MaxClosedNodesInTree
		target.MaxIdleNodesInTree = values.MaxIdleNodesInTree
		target.ThrottleOutOfOrderWrites = values.ThrottleOutOfOrderWrites
	}

	static __typeInfo = $.registerStructType(
		"http2.PriorityWriteSchedulerConfig",
		() => new PriorityWriteSchedulerConfig(),
		() => [],
		PriorityWriteSchedulerConfig,
		() => [/* @__PURE__ */ $.structField("MaxClosedNodesInTree", /* @__PURE__ */ $.basicType("int"), [0], 0, true), /* @__PURE__ */ $.structField("MaxIdleNodesInTree", /* @__PURE__ */ $.basicType("int"), [1], 8, true), /* @__PURE__ */ $.structField("ThrottleOutOfOrderWrites", /* @__PURE__ */ $.basicType("bool"), [2], 16, true)]
	)
}

export class priorityNode {
	public get q(): __goscript_writesched.writeQueue {
		return this._fields.q
	}

	public set q(value: __goscript_writesched.writeQueue) {
		this._fields.q = value
	}

	public get id(): number {
		return this._fields.id
	}

	public set id(value: number) {
		this._fields.id = value
	}

	public get weight(): number {
		return this._fields.weight
	}

	public set weight(value: number) {
		this._fields.weight = value
	}

	public get state(): priorityNodeState {
		return this._fields.state
	}

	public set state(value: priorityNodeState) {
		this._fields.state = value
	}

	public get bytes(): bigint {
		return this._fields.bytes
	}

	public set bytes(value: bigint) {
		this._fields.bytes = value
	}

	public get subtreeBytes(): bigint {
		return this._fields.subtreeBytes
	}

	public set subtreeBytes(value: bigint) {
		this._fields.subtreeBytes = value
	}

	// These links form the priority tree.
	public get parent(): priorityNode | $.VarRef<priorityNode> | null {
		return this._fields.parent
	}

	public set parent(value: priorityNode | $.VarRef<priorityNode> | null) {
		this._fields.parent = value
	}

	public get kids(): priorityNode | $.VarRef<priorityNode> | null {
		return this._fields.kids
	}

	public set kids(value: priorityNode | $.VarRef<priorityNode> | null) {
		this._fields.kids = value
	}

	public get prev(): priorityNode | $.VarRef<priorityNode> | null {
		return this._fields.prev
	}

	public set prev(value: priorityNode | $.VarRef<priorityNode> | null) {
		this._fields.prev = value
	}

	public get next(): priorityNode | $.VarRef<priorityNode> | null {
		return this._fields.next
	}

	public set next(value: priorityNode | $.VarRef<priorityNode> | null) {
		this._fields.next = value
	}

	public _fields: {
		q: __goscript_writesched.writeQueue
		id: number
		weight: number
		state: priorityNodeState
		bytes: bigint
		subtreeBytes: bigint
		parent: priorityNode | $.VarRef<priorityNode> | null
		kids: priorityNode | $.VarRef<priorityNode> | null
		prev: priorityNode | $.VarRef<priorityNode> | null
		next: priorityNode | $.VarRef<priorityNode> | null
	}

	constructor(init?: Partial<{q?: __goscript_writesched.writeQueue, id?: number, weight?: number, state?: priorityNodeState, bytes?: bigint, subtreeBytes?: bigint, parent?: priorityNode | $.VarRef<priorityNode> | null, kids?: priorityNode | $.VarRef<priorityNode> | null, prev?: priorityNode | $.VarRef<priorityNode> | null, next?: priorityNode | $.VarRef<priorityNode> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			q: init?.q ? init.q.clone() : new __goscript_writesched.writeQueue(undefined, true),
			id: init?.id ?? (0 as number),
			weight: init?.weight ?? (0 as number),
			state: init?.state ?? (0 as priorityNodeState),
			bytes: init?.bytes ?? (0n as bigint),
			subtreeBytes: init?.subtreeBytes ?? (0n as bigint),
			parent: init?.parent ?? (null! as priorityNode | $.VarRef<priorityNode> | null),
			kids: init?.kids ?? (null! as priorityNode | $.VarRef<priorityNode> | null),
			prev: init?.prev ?? (null! as priorityNode | $.VarRef<priorityNode> | null),
			next: init?.next ?? (null! as priorityNode | $.VarRef<priorityNode> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): priorityNode {
		return new priorityNode(this, true)
	}

	public __goscriptAssign(source: priorityNode): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.q, values.q)
		target.id = values.id
		target.weight = values.weight
		target.state = values.state
		target.bytes = values.bytes
		target.subtreeBytes = values.subtreeBytes
		target.parent = values.parent
		target.kids = values.kids
		target.prev = values.prev
		target.next = values.next
	}

	public addBytes(b: bigint): void {
		let n: priorityNode | $.VarRef<priorityNode> | null = this;
		$.pointerValue<priorityNode>(n).bytes = $.int64Add($.pointerValue<priorityNode>(n).bytes, b)
		for (; n != null; n = $.pointerValue<priorityNode>(n).parent) {
			$.pointerValue<priorityNode>(n).subtreeBytes = $.int64Add($.pointerValue<priorityNode>(n).subtreeBytes, b)
		}
	}

	public setParent(parent: priorityNode | $.VarRef<priorityNode> | null): void {
		let n: priorityNode | $.VarRef<priorityNode> | null = this;
		const n$: priorityNode = n == null ? $.pointerTarget<priorityNode>(n) : (n as any).__isVarRef === true ? (n as any).value : (n as any).__goValue === undefined ? (n as any) : $.pointerTarget<priorityNode>(n)
		const parent$: priorityNode = parent == null ? $.pointerTarget<priorityNode>(parent) : (parent as any).__isVarRef === true ? (parent as any).value : (parent as any).__goValue === undefined ? (parent as any) : $.pointerTarget<priorityNode>(parent)
		if ($.pointerEqual(n, parent)) {
			$.panic("setParent to self")
		}
		if ($.pointerEqual((n$ as priorityNode).parent, parent)) {
			return
		}
		// Unlink from current parent.
		{
			let __goscriptShadow0: priorityNode | $.VarRef<priorityNode> | null = (n$ as priorityNode).parent
			if (__goscriptShadow0 != null) {
				if ((n$ as priorityNode).prev == null) {
					$.pointerValue<priorityNode>(__goscriptShadow0).kids = (n$ as priorityNode).next
				} else {
					$.pointerValue<priorityNode>((n$ as priorityNode).prev).next = (n$ as priorityNode).next
				}
				if ((n$ as priorityNode).next != null) {
					$.pointerValue<priorityNode>((n$ as priorityNode).next).prev = (n$ as priorityNode).prev
				}
			}
		}
		// Link to new parent.
		// If parent=nil, remove n from the tree.
		// Always insert at the head of parent.kids (this is assumed by walkReadyInOrder).
		;(n$ as priorityNode).parent = parent
		if (parent == null) {
			;(n$ as priorityNode).next = null;
			;(n$ as priorityNode).prev = null
		} else {
			;(n$ as priorityNode).next = (parent$ as priorityNode).kids;
			;(n$ as priorityNode).prev = null
			if ((n$ as priorityNode).next != null) {
				$.pointerValue<priorityNode>((n$ as priorityNode).next).prev = n
			}
			;(parent$ as priorityNode).kids = n
		}
	}

	public async walkReadyInOrder(openParent: boolean, tmp: $.VarRef<$.Slice<priorityNode | $.VarRef<priorityNode> | null>> | null, f: ((_p0: priorityNode | $.VarRef<priorityNode> | null, _p1: boolean) => boolean | globalThis.Promise<boolean>) | null): globalThis.Promise<boolean> {
		const n: priorityNode | $.VarRef<priorityNode> | null = this;
		const n$: priorityNode = n == null ? $.pointerTarget<priorityNode>(n) : (n as any).__isVarRef === true ? (n as any).value : (n as any).__goValue === undefined ? (n as any) : $.pointerTarget<priorityNode>(n)
		if (!(n$ as priorityNode).q.empty() && (__goscriptAwait = f!(n, openParent), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
			return true
		}
		if ((n$ as priorityNode).kids == null) {
			return false
		}

		// Don't consider the root "open" when updating openParent since
		// we can't send data frames on the root stream (only control frames).
		if ((n$ as priorityNode).id != 0) {
			openParent = openParent || ((n$ as priorityNode).state == 0)
		}

		// Common case: only one kid or all kids have the same weight.
		// Some clients don't use weights; other clients (like web browsers)
		// use mostly-linear priority trees.
		let w = $.pointerValue<priorityNode>((n$ as priorityNode).kids).weight
		let needSort = false
		for (let k: priorityNode | $.VarRef<priorityNode> | null = $.pointerValue<priorityNode>((n$ as priorityNode).kids).next; k != null; k = $.pointerValue<priorityNode>(k).next) {
			if ($.pointerValue<priorityNode>(k).weight != w) {
				needSort = true
				break
			}
		}
		if (!needSort) {
			for (let k: priorityNode | $.VarRef<priorityNode> | null = (n$ as priorityNode).kids; k != null; k = $.pointerValue<priorityNode>(k).next) {
				if (await (k !== null && (k as any).__isVarRef !== true && (k as any).__goValue === undefined ? ((k as any) as priorityNode).walkReadyInOrder(openParent, tmp, f) : priorityNode.prototype.walkReadyInOrder.call(k, openParent, tmp, f))) {
					return true
				}
			}
			return false
		}

		// Uncommon case: sort the child nodes. We remove the kids from the parent,
		// then re-insert after sorting so we can reuse tmp for future sort calls.
		tmp!.value = $.goSlice(($.pointerValue<$.Slice<priorityNode | $.VarRef<priorityNode> | null>>(tmp)), undefined, 0)
		while ((n$ as priorityNode).kids != null) {
			tmp!.value = $.appendOne($.pointerValue<$.Slice<priorityNode | $.VarRef<priorityNode> | null>>(tmp), (n$ as priorityNode).kids, $.appendZeros.nil)
			priorityNode.prototype.setParent.call((n$ as priorityNode).kids, null)
		}
		await sort.Sort($.pointerValueOrNil($.namedValueInterfaceValue<sort.Interface | null>(($.pointerValue<$.Slice<priorityNode | $.VarRef<priorityNode> | null>>(tmp) as sortPriorityNodeSiblings), "http2.sortPriorityNodeSiblings", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()))!)
		for (let i = $.sliceLen($.pointerValue<$.Slice<priorityNode | $.VarRef<priorityNode> | null>>(tmp)) - 1; i >= 0; i--) {
			priorityNode.prototype.setParent.call($.arrayIndex(($.pointerValue<$.Slice<priorityNode | $.VarRef<priorityNode> | null>>(tmp))!, i), n)
		}
		for (let k: priorityNode | $.VarRef<priorityNode> | null = (n$ as priorityNode).kids; k != null; k = $.pointerValue<priorityNode>(k).next) {
			if (await (k !== null && (k as any).__isVarRef !== true && (k as any).__goValue === undefined ? ((k as any) as priorityNode).walkReadyInOrder(openParent, tmp, f) : priorityNode.prototype.walkReadyInOrder.call(k, openParent, tmp, f))) {
				return true
			}
		}
		return false
	}

	static __typeInfo = $.registerStructType(
		"http2.priorityNode",
		() => new priorityNode(),
		() => [$.methodSignature("addBytes", [["b", /* @__PURE__ */ $.basicType("int64")]], [], true), $.methodSignature("setParent", [["parent", /* @__PURE__ */ $.pointerType("http2.priorityNode")]], [], true), $.methodSignature("walkReadyInOrder", [["openParent", /* @__PURE__ */ $.basicType("bool")], ["tmp", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("http2.priorityNode")))], ["f", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("http2.priorityNode"), /* @__PURE__ */ $.basicType("bool")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)]], [/* @__PURE__ */ $.basicType("bool")], true)],
		priorityNode,
		() => [/* @__PURE__ */ $.structField("q", "http2.writeQueue", [0], 0, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("id", /* @__PURE__ */ $.basicType("uint32"), [1], 40, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("weight", /* @__PURE__ */ $.basicType("uint8"), [2], 44, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("state", /* @__PURE__ */ $.basicType("int", "http2.priorityNodeState"), [3], 48, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("bytes", /* @__PURE__ */ $.basicType("int64"), [4], 56, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("subtreeBytes", /* @__PURE__ */ $.basicType("int64"), [5], 64, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("parent", /* @__PURE__ */ $.pointerType("http2.priorityNode"), [6], 72, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("kids", /* @__PURE__ */ $.pointerType("http2.priorityNode"), [7], 80, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("prev", /* @__PURE__ */ $.pointerType("http2.priorityNode"), [8], 88, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("next", /* @__PURE__ */ $.pointerType("http2.priorityNode"), [9], 96, false, { pkgPath: "golang.org/x/net/http2" })]
	)
}

export class priorityWriteScheduler {
	// root is the root of the priority tree, where root.id = 0.
	// The root queues control frames that are not associated with any stream.
	public get root(): priorityNode {
		return this._fields.root
	}

	public set root(value: priorityNode) {
		this._fields.root = value
	}

	// nodes maps stream ids to priority tree nodes.
	public get nodes(): globalThis.Map<number, priorityNode | $.VarRef<priorityNode> | null> | null {
		return this._fields.nodes
	}

	public set nodes(value: globalThis.Map<number, priorityNode | $.VarRef<priorityNode> | null> | null) {
		this._fields.nodes = value
	}

	// maxID is the maximum stream id in nodes.
	public get maxID(): number {
		return this._fields.maxID
	}

	public set maxID(value: number) {
		this._fields.maxID = value
	}

	// lists of nodes that have been closed or are idle, but are kept in
	// the tree for improved prioritization. When the lengths exceed either
	// maxClosedNodesInTree or maxIdleNodesInTree, old nodes are discarded.
	public get closedNodes(): $.Slice<priorityNode | $.VarRef<priorityNode> | null> {
		return this._fields.closedNodes
	}

	public set closedNodes(value: $.Slice<priorityNode | $.VarRef<priorityNode> | null>) {
		this._fields.closedNodes = value
	}

	// lists of nodes that have been closed or are idle, but are kept in
	// the tree for improved prioritization. When the lengths exceed either
	// maxClosedNodesInTree or maxIdleNodesInTree, old nodes are discarded.
	public get idleNodes(): $.Slice<priorityNode | $.VarRef<priorityNode> | null> {
		return this._fields.idleNodes
	}

	public set idleNodes(value: $.Slice<priorityNode | $.VarRef<priorityNode> | null>) {
		this._fields.idleNodes = value
	}

	// From the config.
	public get maxClosedNodesInTree(): number {
		return this._fields.maxClosedNodesInTree
	}

	public set maxClosedNodesInTree(value: number) {
		this._fields.maxClosedNodesInTree = value
	}

	public get maxIdleNodesInTree(): number {
		return this._fields.maxIdleNodesInTree
	}

	public set maxIdleNodesInTree(value: number) {
		this._fields.maxIdleNodesInTree = value
	}

	public get writeThrottleLimit(): number {
		return this._fields.writeThrottleLimit
	}

	public set writeThrottleLimit(value: number) {
		this._fields.writeThrottleLimit = value
	}

	public get enableWriteThrottle(): boolean {
		return this._fields.enableWriteThrottle
	}

	public set enableWriteThrottle(value: boolean) {
		this._fields.enableWriteThrottle = value
	}

	// tmp is scratch space for priorityNode.walkReadyInOrder to reduce allocations.
	public get tmp(): $.Slice<priorityNode | $.VarRef<priorityNode> | null> {
		return this._fields.tmp
	}

	public set tmp(value: $.Slice<priorityNode | $.VarRef<priorityNode> | null>) {
		this._fields.tmp = value
	}

	// pool of empty queues for reuse.
	public get queuePool(): __goscript_writesched.writeQueuePool {
		return this._fields.queuePool
	}

	public set queuePool(value: __goscript_writesched.writeQueuePool) {
		this._fields.queuePool = value
	}

	public _fields: {
		root: priorityNode
		nodes: globalThis.Map<number, priorityNode | $.VarRef<priorityNode> | null> | null
		maxID: number
		closedNodes: $.Slice<priorityNode | $.VarRef<priorityNode> | null>
		idleNodes: $.Slice<priorityNode | $.VarRef<priorityNode> | null>
		maxClosedNodesInTree: number
		maxIdleNodesInTree: number
		writeThrottleLimit: number
		enableWriteThrottle: boolean
		tmp: $.Slice<priorityNode | $.VarRef<priorityNode> | null>
		queuePool: __goscript_writesched.writeQueuePool
	}

	constructor(init?: Partial<{root?: priorityNode, nodes?: globalThis.Map<number, priorityNode | $.VarRef<priorityNode> | null> | null, maxID?: number, closedNodes?: $.Slice<priorityNode | $.VarRef<priorityNode> | null>, idleNodes?: $.Slice<priorityNode | $.VarRef<priorityNode> | null>, maxClosedNodesInTree?: number, maxIdleNodesInTree?: number, writeThrottleLimit?: number, enableWriteThrottle?: boolean, tmp?: $.Slice<priorityNode | $.VarRef<priorityNode> | null>, queuePool?: __goscript_writesched.writeQueuePool}>, __goscriptValue?: boolean) {
		this._fields = {
			root: init?.root ? init.root.clone() : new priorityNode(undefined, true),
			nodes: init?.nodes ?? (null! as globalThis.Map<number, priorityNode | $.VarRef<priorityNode> | null> | null),
			maxID: init?.maxID ?? (0 as number),
			closedNodes: init?.closedNodes ?? (null! as $.Slice<priorityNode | $.VarRef<priorityNode> | null>),
			idleNodes: init?.idleNodes ?? (null! as $.Slice<priorityNode | $.VarRef<priorityNode> | null>),
			maxClosedNodesInTree: init?.maxClosedNodesInTree ?? (0 as number),
			maxIdleNodesInTree: init?.maxIdleNodesInTree ?? (0 as number),
			writeThrottleLimit: init?.writeThrottleLimit ?? (0 as number),
			enableWriteThrottle: init?.enableWriteThrottle ?? (false as boolean),
			tmp: init?.tmp ?? (null! as $.Slice<priorityNode | $.VarRef<priorityNode> | null>),
			queuePool: init?.queuePool ?? (null! as __goscript_writesched.writeQueuePool)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): priorityWriteScheduler {
		return new priorityWriteScheduler(this, true)
	}

	public __goscriptAssign(source: priorityWriteScheduler): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.root, values.root)
		target.nodes = values.nodes
		target.maxID = values.maxID
		target.closedNodes = values.closedNodes
		target.idleNodes = values.idleNodes
		target.maxClosedNodesInTree = values.maxClosedNodesInTree
		target.maxIdleNodesInTree = values.maxIdleNodesInTree
		target.writeThrottleLimit = values.writeThrottleLimit
		target.enableWriteThrottle = values.enableWriteThrottle
		target.tmp = values.tmp
		target.queuePool = values.queuePool
	}

	public AdjustStream(streamID: number, priority: __goscript_frame.PriorityParam): void {
		let ws: priorityWriteScheduler | $.VarRef<priorityWriteScheduler> | null = this;
		const ws$: priorityWriteScheduler = ws == null ? $.pointerTarget<priorityWriteScheduler>(ws) : (ws as any).__isVarRef === true ? (ws as any).value : (ws as any).__goValue === undefined ? (ws as any) : $.pointerTarget<priorityWriteScheduler>(ws)
		if (streamID == 0) {
			$.panic("adjustPriority on root")
		}

		// If streamID does not exist, there are two cases:
		// - A closed stream that has been removed (this will have ID <= maxID)
		// - An idle stream that is being used for "grouping" (this will have ID > maxID)
		let n: priorityNode | $.VarRef<priorityNode> | null = $.mapGet<number, priorityNode | $.VarRef<priorityNode> | null, priorityNode | $.VarRef<priorityNode> | null>((ws$ as priorityWriteScheduler).nodes, streamID, null)[0]
		if (n == null) {
			if ((streamID <= (ws$ as priorityWriteScheduler).maxID) || ((ws$ as priorityWriteScheduler).maxIdleNodesInTree == 0)) {
				return
			}
			;(ws$ as priorityWriteScheduler).maxID = streamID
			n = (() => { const __goscriptLiteralField0 = $.pointerValue<__goscript_writesched.writeQueue>(__goscript_writesched.writeQueuePool__get($.fieldRef((ws$ as priorityWriteScheduler)._fields, "queuePool"))); return new priorityNode({q: __goscriptLiteralField0, id: streamID, weight: 15, state: 2}) })()
			void (n !== null && (n as any).__isVarRef !== true && (n as any).__goValue === undefined ? ((n as any) as priorityNode).setParent($.fieldRef((ws$ as priorityWriteScheduler)._fields, "root")) : priorityNode.prototype.setParent.call(n, $.fieldRef((ws$ as priorityWriteScheduler)._fields, "root")))
			$.mapSet((ws$ as priorityWriteScheduler).nodes, streamID, n)
			void (ws !== null && (ws as any).__isVarRef !== true && (ws as any).__goValue === undefined ? ((ws as any) as priorityWriteScheduler).addClosedOrIdleNode($.fieldRef((ws$ as priorityWriteScheduler)._fields, "idleNodes"), (ws$ as priorityWriteScheduler).maxIdleNodesInTree, n) : priorityWriteScheduler.prototype.addClosedOrIdleNode.call(ws, $.fieldRef((ws$ as priorityWriteScheduler)._fields, "idleNodes"), (ws$ as priorityWriteScheduler).maxIdleNodesInTree, n))
		}

		// Section 5.3.1: A dependency on a stream that is not currently in the tree
		// results in that stream being given a default priority (Section 5.3.5).
		let parent: priorityNode | $.VarRef<priorityNode> | null = $.mapGet<number, priorityNode | $.VarRef<priorityNode> | null, priorityNode | $.VarRef<priorityNode> | null>((ws$ as priorityWriteScheduler).nodes, priority.StreamDep, null)[0]
		let parent$: priorityNode = parent == null ? $.pointerTarget<priorityNode>(parent) : (parent as any).__isVarRef === true ? (parent as any).value : (parent as any).__goValue === undefined ? (parent as any) : $.pointerTarget<priorityNode>(parent)
		if (parent == null) {
			void (n !== null && (n as any).__isVarRef !== true && (n as any).__goValue === undefined ? ((n as any) as priorityNode).setParent($.fieldRef((ws$ as priorityWriteScheduler)._fields, "root")) : priorityNode.prototype.setParent.call(n, $.fieldRef((ws$ as priorityWriteScheduler)._fields, "root")))
			$.pointerValue<priorityNode>(n).weight = 15
			return
		}

		// Ignore if the client tries to make a node its own parent.
		if ($.pointerEqual(n, parent)) {
			return
		}

		// Section 5.3.3:
		//   "If a stream is made dependent on one of its own dependencies, the
		//   formerly dependent stream is first moved to be dependent on the
		//   reprioritized stream's previous parent. The moved dependency retains
		//   its weight."
		//
		// That is: if parent depends on n, move parent to depend on n.parent.
		for (let x: priorityNode | $.VarRef<priorityNode> | null = (parent$ as priorityNode).parent; x != null; x = $.pointerValue<priorityNode>(x).parent) {
			if ($.pointerEqual(x, n)) {
				void (parent !== null && (parent as any).__isVarRef !== true && (parent as any).__goValue === undefined ? ((parent as any) as priorityNode).setParent($.pointerValue<priorityNode>(n).parent) : priorityNode.prototype.setParent.call(parent, $.pointerValue<priorityNode>(n).parent))
				break
			}
		}

		// Section 5.3.3: The exclusive flag causes the stream to become the sole
		// dependency of its parent stream, causing other dependencies to become
		// dependent on the exclusive stream.
		if (priority.Exclusive) {
			let k: priorityNode | $.VarRef<priorityNode> | null = (parent$ as priorityNode).kids
			while (k != null) {
				let next: priorityNode | $.VarRef<priorityNode> | null = $.pointerValue<priorityNode>(k).next
				if (!$.pointerEqual(k, n)) {
					void (k !== null && (k as any).__isVarRef !== true && (k as any).__goValue === undefined ? ((k as any) as priorityNode).setParent(n) : priorityNode.prototype.setParent.call(k, n))
				}
				k = next
			}
		}

		void (n !== null && (n as any).__isVarRef !== true && (n as any).__goValue === undefined ? ((n as any) as priorityNode).setParent(parent) : priorityNode.prototype.setParent.call(n, parent))
		$.pointerValue<priorityNode>(n).weight = priority.Weight
	}

	public async CloseStream(streamID: number): globalThis.Promise<void> {
		const ws: priorityWriteScheduler | $.VarRef<priorityWriteScheduler> | null = this;
		const ws$: priorityWriteScheduler = ws == null ? $.pointerTarget<priorityWriteScheduler>(ws) : (ws as any).__isVarRef === true ? (ws as any).value : (ws as any).__goValue === undefined ? (ws as any) : $.pointerTarget<priorityWriteScheduler>(ws)
		if (streamID == 0) {
			$.panic("violation of WriteScheduler interface: cannot close stream 0")
		}
		if ($.mapGet<number, priorityNode | $.VarRef<priorityNode> | null, priorityNode | $.VarRef<priorityNode> | null>((ws$ as priorityWriteScheduler).nodes, streamID, null)[0] == null) {
			$.panic(await fmt.Sprintf("violation of WriteScheduler interface: unknown stream %d", $.basicInterfaceValue(streamID, "uint32")))
		}
		if ($.pointerValue<priorityNode>($.mapGet<number, priorityNode | $.VarRef<priorityNode> | null, priorityNode | $.VarRef<priorityNode> | null>((ws$ as priorityWriteScheduler).nodes, streamID, null)[0]).state != 0) {
			$.panic(await fmt.Sprintf("violation of WriteScheduler interface: stream %d already closed", $.basicInterfaceValue(streamID, "uint32")))
		}

		let n: priorityNode | $.VarRef<priorityNode> | null = $.mapGet<number, priorityNode | $.VarRef<priorityNode> | null, priorityNode | $.VarRef<priorityNode> | null>((ws$ as priorityWriteScheduler).nodes, streamID, null)[0]
		let n$: priorityNode = n == null ? $.pointerTarget<priorityNode>(n) : (n as any).__isVarRef === true ? (n as any).value : (n as any).__goValue === undefined ? (n as any) : $.pointerTarget<priorityNode>(n);
		;(n$ as priorityNode).state = 1
		void (n !== null && (n as any).__isVarRef !== true && (n as any).__goValue === undefined ? ((n as any) as priorityNode).addBytes(-(n$ as priorityNode).bytes) : priorityNode.prototype.addBytes.call(n, -(n$ as priorityNode).bytes))

		let q = $.varRef(((n$ as priorityNode).q).clone())
		__goscript_writesched.writeQueuePool_put($.fieldRef((ws$ as priorityWriteScheduler)._fields, "queuePool"), q);
		;(n$ as priorityNode).q.s = null
		if ((ws$ as priorityWriteScheduler).maxClosedNodesInTree > 0) {
			priorityWriteScheduler.prototype.addClosedOrIdleNode.call(ws, $.fieldRef((ws$ as priorityWriteScheduler)._fields, "closedNodes"), (ws$ as priorityWriteScheduler).maxClosedNodesInTree, n)
		} else {
			void (ws !== null && (ws as any).__isVarRef !== true && (ws as any).__goValue === undefined ? ((ws as any) as priorityWriteScheduler).removeNode(n) : priorityWriteScheduler.prototype.removeNode.call(ws, n))
		}
	}

	public async OpenStream(streamID: number, options: __goscript_writesched.OpenStreamOptions): globalThis.Promise<void> {
		let ws: priorityWriteScheduler | $.VarRef<priorityWriteScheduler> | null = this;
		const ws$: priorityWriteScheduler = ws == null ? $.pointerTarget<priorityWriteScheduler>(ws) : (ws as any).__isVarRef === true ? (ws as any).value : (ws as any).__goValue === undefined ? (ws as any) : $.pointerTarget<priorityWriteScheduler>(ws)
		// The stream may be currently idle but cannot be opened or closed.
		{
			let curr: priorityNode | $.VarRef<priorityNode> | null = $.mapGet<number, priorityNode | $.VarRef<priorityNode> | null, priorityNode | $.VarRef<priorityNode> | null>((ws$ as priorityWriteScheduler).nodes, streamID, null)[0]
			if (curr != null) {
				if ($.pointerValue<priorityNode>(curr).state != 2) {
					$.panic(await fmt.Sprintf("stream %d already opened", $.basicInterfaceValue(streamID, "uint32")))
				}
				$.pointerValue<priorityNode>(curr).state = 0
				return
			}
		}

		// RFC 7540, Section 5.3.5:
		//  "All streams are initially assigned a non-exclusive dependency on stream 0x0.
		//  Pushed streams initially depend on their associated stream. In both cases,
		//  streams are assigned a default weight of 16."
		let parent: priorityNode | $.VarRef<priorityNode> | null = $.mapGet<number, priorityNode | $.VarRef<priorityNode> | null, priorityNode | $.VarRef<priorityNode> | null>((ws$ as priorityWriteScheduler).nodes, options.PusherID, null)[0]
		if (parent == null) {
			parent = $.fieldRef((ws$ as priorityWriteScheduler)._fields, "root")
		}
		let n: priorityNode | $.VarRef<priorityNode> | null = (() => { const __goscriptLiteralField1 = $.pointerValue<__goscript_writesched.writeQueue>(__goscript_writesched.writeQueuePool__get($.fieldRef((ws$ as priorityWriteScheduler)._fields, "queuePool"))); return new priorityNode({q: __goscriptLiteralField1, id: streamID, weight: 15, state: 0}) })()
		void (n !== null && (n as any).__isVarRef !== true && (n as any).__goValue === undefined ? ((n as any) as priorityNode).setParent(parent) : priorityNode.prototype.setParent.call(n, parent))
		$.mapSet((ws$ as priorityWriteScheduler).nodes, streamID, n)
		if (streamID > (ws$ as priorityWriteScheduler).maxID) {
			;(ws$ as priorityWriteScheduler).maxID = streamID
		}
	}

	public async Pop(): globalThis.Promise<[__goscript_writesched.FrameWriteRequest, boolean]> {
		const ws: priorityWriteScheduler | $.VarRef<priorityWriteScheduler> | null = this;
		let wr: __goscript_writesched.FrameWriteRequest = new __goscript_writesched.FrameWriteRequest(undefined, true)
		let ok: boolean = false
		const ws$: priorityWriteScheduler = ws == null ? $.pointerTarget<priorityWriteScheduler>(ws) : (ws as any).__isVarRef === true ? (ws as any).value : (ws as any).__goValue === undefined ? (ws as any) : $.pointerTarget<priorityWriteScheduler>(ws)
		await (ws$ as priorityWriteScheduler).root.walkReadyInOrder(false, $.fieldRef((ws$ as priorityWriteScheduler)._fields, "tmp"), $.functionValue((n: priorityNode | $.VarRef<priorityNode> | null, openParent: boolean): boolean => {
			let limit = 2147483647
			if (openParent) {
				limit = (ws$ as priorityWriteScheduler).writeThrottleLimit
			}
			let __goscriptTuple0: any = $.pointerValue<priorityNode>(n).q.consume(limit)
			wr = $.assignStruct(wr, __goscriptTuple0[0])
			ok = __goscriptTuple0[1]
			if (!ok) {
				return false
			}
			void (n !== null && (n as any).__isVarRef !== true && (n as any).__goValue === undefined ? ((n as any) as priorityNode).addBytes($.int64(wr.DataSize())) : priorityNode.prototype.addBytes.call(n, $.int64(wr.DataSize())))
			// If B depends on A and B continuously has data available but A
			// does not, gradually increase the throttling limit to allow B to
			// steal more and more bandwidth from A.
			if (openParent) {
				;(ws$ as priorityWriteScheduler).writeThrottleLimit = $.int((ws$ as priorityWriteScheduler).writeThrottleLimit + (1024), 32)
				if ((ws$ as priorityWriteScheduler).writeThrottleLimit < 0) {
					;(ws$ as priorityWriteScheduler).writeThrottleLimit = 2147483647
				}
			} else {
				if ((ws$ as priorityWriteScheduler).enableWriteThrottle) {
					;(ws$ as priorityWriteScheduler).writeThrottleLimit = 1024
				}
			}
			return true
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("http2.priorityNode"), /* @__PURE__ */ $.basicType("bool")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)))
		return [(wr).clone(), ok]
	}

	public Push(wr: __goscript_writesched.FrameWriteRequest): void {
		const ws: priorityWriteScheduler | $.VarRef<priorityWriteScheduler> | null = this;
		const ws$: priorityWriteScheduler = ws == null ? $.pointerTarget<priorityWriteScheduler>(ws) : (ws as any).__isVarRef === true ? (ws as any).value : (ws as any).__goValue === undefined ? (ws as any) : $.pointerTarget<priorityWriteScheduler>(ws)
		let n: priorityNode | $.VarRef<priorityNode> | null = null! as priorityNode | $.VarRef<priorityNode> | null
		if (wr.isControl()) {
			n = $.fieldRef((ws$ as priorityWriteScheduler)._fields, "root")
		} else {
			let id = wr.StreamID()
			n = $.mapGet<number, priorityNode | $.VarRef<priorityNode> | null, priorityNode | $.VarRef<priorityNode> | null>((ws$ as priorityWriteScheduler).nodes, id, null)[0]
			if (n == null) {
				// id is an idle or closed stream. wr should not be a HEADERS or
				// DATA frame. In other case, we push wr onto the root, rather
				// than creating a new priorityNode.
				if (wr.DataSize() > 0) {
					$.panic("add DATA on non-open stream")
				}
				n = $.fieldRef((ws$ as priorityWriteScheduler)._fields, "root")
			}
		}
		$.pointerValue<priorityNode>(n).q.push(wr)
	}

	public addClosedOrIdleNode(list: $.VarRef<$.Slice<priorityNode | $.VarRef<priorityNode> | null>> | null, maxSize: number, n: priorityNode | $.VarRef<priorityNode> | null): void {
		const ws: priorityWriteScheduler | $.VarRef<priorityWriteScheduler> | null = this;
		if (maxSize == 0) {
			return
		}
		if ($.sliceLen($.pointerValue<$.Slice<priorityNode | $.VarRef<priorityNode> | null>>(list)) == maxSize) {
			// Remove the oldest node, then shift left.
			void (ws !== null && (ws as any).__isVarRef !== true && (ws as any).__goValue === undefined ? ((ws as any) as priorityWriteScheduler).removeNode($.arrayIndex(($.pointerValue<$.Slice<priorityNode | $.VarRef<priorityNode> | null>>(list))!, 0)) : priorityWriteScheduler.prototype.removeNode.call(ws, $.arrayIndex(($.pointerValue<$.Slice<priorityNode | $.VarRef<priorityNode> | null>>(list))!, 0)))
			let x: $.Slice<priorityNode | $.VarRef<priorityNode> | null> = $.goSlice(($.pointerValue<$.Slice<priorityNode | $.VarRef<priorityNode> | null>>(list)), 1, undefined)
			$.copy($.pointerValue<$.Slice<priorityNode | $.VarRef<priorityNode> | null>>(list), x)
			list!.value = $.goSlice(($.pointerValue<$.Slice<priorityNode | $.VarRef<priorityNode> | null>>(list)), undefined, $.sliceLen(x))
		}
		list!.value = $.appendOne($.pointerValue<$.Slice<priorityNode | $.VarRef<priorityNode> | null>>(list), n, $.appendZeros.nil)
	}

	public removeNode(n: priorityNode | $.VarRef<priorityNode> | null): void {
		const ws: priorityWriteScheduler | $.VarRef<priorityWriteScheduler> | null = this;
		const n$: priorityNode = n == null ? $.pointerTarget<priorityNode>(n) : (n as any).__isVarRef === true ? (n as any).value : (n as any).__goValue === undefined ? (n as any) : $.pointerTarget<priorityNode>(n)
		while ((n$ as priorityNode).kids != null) {
			priorityNode.prototype.setParent.call((n$ as priorityNode).kids, (n$ as priorityNode).parent)
		}
		void (n !== null && (n as any).__isVarRef !== true && (n as any).__goValue === undefined ? ((n as any) as priorityNode).setParent(null) : priorityNode.prototype.setParent.call(n, null))
		$.deleteMapEntry($.pointerValue<priorityWriteScheduler>(ws).nodes, (n$ as priorityNode).id)
	}

	static __typeInfo = $.registerStructType(
		"http2.priorityWriteScheduler",
		() => new priorityWriteScheduler(),
		() => [$.methodSignature("AdjustStream", [["streamID", /* @__PURE__ */ $.basicType("uint32")], ["priority", "http2.PriorityParam"]], [], true), $.methodSignature("CloseStream", [["streamID", /* @__PURE__ */ $.basicType("uint32")]], [], true), $.methodSignature("OpenStream", [["streamID", /* @__PURE__ */ $.basicType("uint32")], ["options", "http2.OpenStreamOptions"]], [], true), $.methodSignature("Pop", [], [["wr", "http2.FrameWriteRequest"], ["ok", /* @__PURE__ */ $.basicType("bool")]], true), $.methodSignature("Push", [["wr", "http2.FrameWriteRequest"]], [], true), $.methodSignature("addClosedOrIdleNode", [["list", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("http2.priorityNode")))], ["maxSize", /* @__PURE__ */ $.basicType("int")], ["n", /* @__PURE__ */ $.pointerType("http2.priorityNode")]], [], true), $.methodSignature("removeNode", [["n", /* @__PURE__ */ $.pointerType("http2.priorityNode")]], [], true)],
		priorityWriteScheduler,
		() => [/* @__PURE__ */ $.structField("root", "http2.priorityNode", [0], 0, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("nodes", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("uint32"), /* @__PURE__ */ $.pointerType("http2.priorityNode")), [1], 104, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("maxID", /* @__PURE__ */ $.basicType("uint32"), [2], 112, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("closedNodes", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("http2.priorityNode")), [3], 120, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("idleNodes", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("http2.priorityNode")), [4], 144, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("maxClosedNodesInTree", /* @__PURE__ */ $.basicType("int"), [5], 168, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("maxIdleNodesInTree", /* @__PURE__ */ $.basicType("int"), [6], 176, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("writeThrottleLimit", /* @__PURE__ */ $.basicType("int32"), [7], 184, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("enableWriteThrottle", /* @__PURE__ */ $.basicType("bool"), [8], 188, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("tmp", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("http2.priorityNode")), [9], 192, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("queuePool", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("http2.writeQueue"), "http2.writeQueuePool"), [10], 216, false, { pkgPath: "golang.org/x/net/http2" })]
	)
}

export const priorityDefaultWeight: number = 15

export const priorityNodeOpen: priorityNodeState = 0

export const priorityNodeClosed: priorityNodeState = 1

export const priorityNodeIdle: priorityNodeState = 2

export function NewPriorityWriteScheduler(cfg: PriorityWriteSchedulerConfig | $.VarRef<PriorityWriteSchedulerConfig> | null): __goscript_writesched.WriteScheduler | null {
	if (cfg == null) {
		// For justification of these defaults, see:
		// https://docs.google.com/document/d/1oLhNg1skaWD4_DtaoCxdSRN5erEXrH-KnLrMwEpOtFY
		cfg = new PriorityWriteSchedulerConfig({MaxClosedNodesInTree: 10, MaxIdleNodesInTree: 10, ThrottleOutOfOrderWrites: false})
	}

	let ws: priorityWriteScheduler | $.VarRef<priorityWriteScheduler> | null = new priorityWriteScheduler({nodes: $.makeMap<number, priorityNode | $.VarRef<priorityNode> | null>(), maxClosedNodesInTree: $.pointerValue<PriorityWriteSchedulerConfig>(cfg).MaxClosedNodesInTree, maxIdleNodesInTree: $.pointerValue<PriorityWriteSchedulerConfig>(cfg).MaxIdleNodesInTree, enableWriteThrottle: $.pointerValue<PriorityWriteSchedulerConfig>(cfg).ThrottleOutOfOrderWrites})
	let ws$: priorityWriteScheduler = ws == null ? $.pointerTarget<priorityWriteScheduler>(ws) : (ws as any).__isVarRef === true ? (ws as any).value : (ws as any).__goValue === undefined ? (ws as any) : $.pointerTarget<priorityWriteScheduler>(ws)
	$.mapSet((ws$ as priorityWriteScheduler).nodes, 0, $.fieldRef((ws$ as priorityWriteScheduler)._fields, "root"))
	if ($.pointerValue<PriorityWriteSchedulerConfig>(cfg).ThrottleOutOfOrderWrites) {
		;(ws$ as priorityWriteScheduler).writeThrottleLimit = 1024
	} else {
		;(ws$ as priorityWriteScheduler).writeThrottleLimit = 2147483647
	}
	return $.interfaceValue<__goscript_writesched.WriteScheduler | null>(ws, "*http2.priorityWriteScheduler", /* @__PURE__ */ $.pointerType("http2.priorityWriteScheduler"))
}

export function sortPriorityNodeSiblings_Len(z: sortPriorityNodeSiblings): number {
	return $.sliceLen((z as sortPriorityNodeSiblings))
}

export function sortPriorityNodeSiblings_Swap(z: sortPriorityNodeSiblings, i: number, k: number): void {
	let __goscriptAssign0_0: priorityNode | $.VarRef<priorityNode> | null = $.arrayIndex(z!, k)
	let __goscriptAssign0_1: priorityNode | $.VarRef<priorityNode> | null = $.arrayIndex(z!, i)
	$.sliceElems(z!)[$.sliceSlot(z!, i)] = __goscriptAssign0_0
	$.sliceElems(z!)[$.sliceSlot(z!, k)] = __goscriptAssign0_1
}

export function sortPriorityNodeSiblings_Less(z: sortPriorityNodeSiblings, i: number, k: number): boolean {
	// Prefer the subtree that has sent fewer bytes relative to its weight.
	// See sections 5.3.2 and 5.3.4.
	let wi = ($.uint((($.pointerValue<priorityNode>($.arrayIndex(z!, i)).weight + 1) & 0xff), 8))
	let bi = globalThis.Number($.pointerValue<priorityNode>($.arrayIndex(z!, i)).subtreeBytes)
	let wk = ($.uint((($.pointerValue<priorityNode>($.arrayIndex(z!, k)).weight + 1) & 0xff), 8))
	let bk = globalThis.Number($.pointerValue<priorityNode>($.arrayIndex(z!, k)).subtreeBytes)
	if ((bi == 0) && (bk == 0)) {
		return wi >= wk
	}
	if (bk == 0) {
		return false
	}
	return (bi / bk) <= (wi / wk)
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({Len: (receiver: any, ...args: any[]) => (sortPriorityNodeSiblings_Len as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Less: (receiver: any, ...args: any[]) => (sortPriorityNodeSiblings_Less as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Swap: (receiver: any, ...args: any[]) => (sortPriorityNodeSiblings_Swap as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("http2.priorityNode"), "http2.sortPriorityNodeSiblings"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Less", [["i", /* @__PURE__ */ $.basicType("int")], ["k", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Swap", [["i", /* @__PURE__ */ $.basicType("int")], ["k", /* @__PURE__ */ $.basicType("int")]])])
}

var __goscriptAwait: any
