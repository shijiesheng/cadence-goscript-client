// Generated file based on graph.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as graph from "@goscript/go.uber.org/dig/internal/graph/index.js"

import type * as fmt from "@goscript/fmt/index.js"

import * as digreflect from "@goscript/go.uber.org/dig/internal/digreflect/index.js"

import * as dot from "@goscript/go.uber.org/dig/internal/dot/index.js"

import * as rand from "@goscript/math/rand/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as __goscript__constructor from "./constructor.gs.ts"

import * as __goscript_callback from "./callback.gs.ts"

import * as __goscript_container from "./container.gs.ts"

import * as __goscript_decorate from "./decorate.gs.ts"

import * as __goscript_invoke from "./invoke.gs.ts"

import * as __goscript_param from "./param.gs.ts"

import * as __goscript_provide from "./provide.gs.ts"

import * as __goscript_result from "./result.gs.ts"

import * as __goscript_scope from "./scope.gs.ts"

import * as __goscript_visualize from "./visualize.gs.ts"
import "@goscript/go.uber.org/dig/internal/graph/index.js"
import "@goscript/go.uber.org/dig/internal/digreflect/index.js"
import "@goscript/go.uber.org/dig/internal/dot/index.js"
import "@goscript/math/rand/index.js"
import "@goscript/reflect/index.js"
import "./constructor.gs.ts"
import "./callback.gs.ts"
import "./container.gs.ts"
import "./decorate.gs.ts"
import "./invoke.gs.ts"
import "./param.gs.ts"
import "./provide.gs.ts"
import "./result.gs.ts"
import "./scope.gs.ts"
import "./visualize.gs.ts"

$.registerTypePackagePath("go.uber.org/dig", ["dig.graphNode", "dig.graphHolder"])

export class graphNode {
	public get Wrapped(): any {
		return this._fields.Wrapped
	}

	public set Wrapped(value: any) {
		this._fields.Wrapped = value
	}

	public _fields: {
		Wrapped: any
	}

	constructor(init?: Partial<{Wrapped?: any}>, __goscriptValue?: boolean) {
		this._fields = {
			Wrapped: init?.Wrapped ?? (null! as any)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): graphNode {
		return new graphNode(this, true)
	}

	public __goscriptAssign(source: graphNode): void {
		const target = this._fields
		const values = source._fields
		target.Wrapped = $.assignFieldValue(target.Wrapped, values.Wrapped, { kind: $.TypeKind.Interface, methods: [] })
	}

	static __typeInfo = $.registerStructType(
		"dig.graphNode",
		() => new graphNode(),
		() => [],
		graphNode,
		() => [/* @__PURE__ */ $.structField("Wrapped", { kind: $.TypeKind.Interface, methods: [] }, [0], 0, true)]
	)
}

export class graphHolder {
	// all the nodes defined in the graph.
	public get nodes(): $.Slice<graphNode | $.VarRef<graphNode> | null> {
		return this._fields.nodes
	}

	public set nodes(value: $.Slice<graphNode | $.VarRef<graphNode> | null>) {
		this._fields.nodes = value
	}

	// Scope whose graph this holder contains.
	public get s(): __goscript_scope.Scope | $.VarRef<__goscript_scope.Scope> | null {
		return this._fields.s
	}

	public set s(value: __goscript_scope.Scope | $.VarRef<__goscript_scope.Scope> | null) {
		this._fields.s = value
	}

	// Number of nodes in the graph at last snapshot.
	// -1 if no snapshot has been taken.
	public get snap(): number {
		return this._fields.snap
	}

	public set snap(value: number) {
		this._fields.snap = value
	}

	public _fields: {
		nodes: $.Slice<graphNode | $.VarRef<graphNode> | null>
		s: __goscript_scope.Scope | $.VarRef<__goscript_scope.Scope> | null
		snap: number
	}

	constructor(init?: Partial<{nodes?: $.Slice<graphNode | $.VarRef<graphNode> | null>, s?: __goscript_scope.Scope | $.VarRef<__goscript_scope.Scope> | null, snap?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			nodes: init?.nodes ?? (null! as $.Slice<graphNode | $.VarRef<graphNode> | null>),
			s: init?.s ?? (null! as __goscript_scope.Scope | $.VarRef<__goscript_scope.Scope> | null),
			snap: init?.snap ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): graphHolder {
		return new graphHolder(this, true)
	}

	public __goscriptAssign(source: graphHolder): void {
		const target = this._fields
		const values = source._fields
		target.nodes = values.nodes
		target.s = values.s
		target.snap = values.snap
	}

	public async EdgesFrom(u: number): globalThis.Promise<$.Slice<number>> {
		const gh: graphHolder | $.VarRef<graphHolder> | null = this;
		const gh$: graphHolder = gh == null ? $.pointerTarget<graphHolder>(gh) : (gh as any).__isVarRef === true ? (gh as any).value : (gh as any).__goValue === undefined ? (gh as any) : $.pointerTarget<graphHolder>(gh)
		let orders: $.Slice<number> = null! as $.Slice<number>
		{
			const __goscriptTypeSwitchValue = (gh !== null && (gh as any).__isVarRef !== true && (gh as any).__goValue === undefined ? ((gh as any) as graphHolder).Lookup(u) : graphHolder.prototype.Lookup.call(gh, u))
			switch (true) {
				case $.typeAssert<__goscript__constructor.constructorNode | $.VarRef<__goscript__constructor.constructorNode> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("dig.constructorNode")).ok:
					{
						let w: __goscript__constructor.constructorNode | $.VarRef<__goscript__constructor.constructorNode> | null = $.typeAssert<__goscript__constructor.constructorNode | $.VarRef<__goscript__constructor.constructorNode> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("dig.constructorNode")).value
						for (let __goscriptRangeTarget0 = $.pointerValue<__goscript__constructor.constructorNode>(w).paramList.Params, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
							let param = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as __goscript_param.param | null)
							orders = $.appendSlice(orders, await __goscript_param.getParamOrder(gh, param))
						}
					}
					break
				case $.typeAssert<__goscript_param.paramGroupedSlice | $.VarRef<__goscript_param.paramGroupedSlice> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("dig.paramGroupedSlice")).ok:
					{
						let w: __goscript_param.paramGroupedSlice | $.VarRef<__goscript_param.paramGroupedSlice> | null = $.typeAssert<__goscript_param.paramGroupedSlice | $.VarRef<__goscript_param.paramGroupedSlice> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("dig.paramGroupedSlice")).value
						let providers: $.Slice<__goscript_provide.provider | null> = __goscript_scope.Scope.prototype.getAllGroupProviders.call((gh$ as graphHolder).s, $.pointerValue<__goscript_param.paramGroupedSlice>(w).Group, (__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>($.pointerValue<__goscript_param.paramGroupedSlice>(w).Type).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
						for (let __goscriptRangeTarget1 = providers, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
							let provider = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as __goscript_provide.provider | null)
							orders = $.appendOne(orders, (__goscriptAwait = (provider !== null && (provider as any).__isVarRef !== true && (provider as any).__goValue === undefined ? (provider as Exclude<__goscript_provide.provider, null>) : $.pointerValue<Exclude<__goscript_provide.provider, null>>(provider)).Order((gh$ as graphHolder).s), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
						}
					}
					break
			}
		}
		return orders
	}

	public Lookup(i: number): any {
		const gh: graphHolder | $.VarRef<graphHolder> | null = this;
		return $.pointerValue<graphNode>($.arrayIndex($.pointerValue<graphHolder>(gh).nodes!, i)).Wrapped
	}

	public NewNode(wrapped: any): number {
		let gh: graphHolder | $.VarRef<graphHolder> | null = this;
		const gh$: graphHolder = gh == null ? $.pointerTarget<graphHolder>(gh) : (gh as any).__isVarRef === true ? (gh as any).value : (gh as any).__goValue === undefined ? (gh as any) : $.pointerTarget<graphHolder>(gh)
		let order = $.sliceLen((gh$ as graphHolder).nodes);
		;(gh$ as graphHolder).nodes = $.appendOne((gh$ as graphHolder).nodes, new graphNode({Wrapped: wrapped}), $.appendZeros.nil)
		return order
	}

	public Order(): number {
		const gh: graphHolder | $.VarRef<graphHolder> | null = this;
		return $.sliceLen($.pointerValue<graphHolder>(gh).nodes)
	}

	public Rollback(): void {
		let gh: graphHolder | $.VarRef<graphHolder> | null = this;
		const gh$: graphHolder = gh == null ? $.pointerTarget<graphHolder>(gh) : (gh as any).__isVarRef === true ? (gh as any).value : (gh as any).__goValue === undefined ? (gh as any) : $.pointerTarget<graphHolder>(gh)
		if ((gh$ as graphHolder).snap < 0) {
			return
		}

		// nodes is an append-only list. To rollback, we just drop the
		// extraneous entries from the slice.
		;(gh$ as graphHolder).nodes = $.goSlice((gh$ as graphHolder).nodes, undefined, (gh$ as graphHolder).snap);
		;(gh$ as graphHolder).snap = -1
	}

	public Snapshot(): void {
		let gh: graphHolder | $.VarRef<graphHolder> | null = this;
		const gh$: graphHolder = gh == null ? $.pointerTarget<graphHolder>(gh) : (gh as any).__isVarRef === true ? (gh as any).value : (gh as any).__goValue === undefined ? (gh as any) : $.pointerTarget<graphHolder>(gh);
		;(gh$ as graphHolder).snap = $.sliceLen((gh$ as graphHolder).nodes)
	}

	static __typeInfo = $.registerStructType(
		"dig.graphHolder",
		() => new graphHolder(),
		() => [$.methodSignature("EdgesFrom", [["u", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))], true), $.methodSignature("Lookup", [["i", /* @__PURE__ */ $.basicType("int")]], [{ kind: $.TypeKind.Interface, methods: [] }], true), $.methodSignature("NewNode", [["wrapped", { kind: $.TypeKind.Interface, methods: [] }]], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("Order", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("Rollback", [], [], true), $.methodSignature("Snapshot", [], [], true)],
		graphHolder,
		() => [/* @__PURE__ */ $.structField("nodes", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("dig.graphNode")), [0], 0, false, { pkgPath: "go.uber.org/dig" }), /* @__PURE__ */ $.structField("s", /* @__PURE__ */ $.pointerType("dig.Scope"), [1], 24, false, { pkgPath: "go.uber.org/dig" }), /* @__PURE__ */ $.structField("snap", /* @__PURE__ */ $.basicType("int"), [2], 32, false, { pkgPath: "go.uber.org/dig" })]
	)
}

export function newGraphHolder(s: __goscript_scope.Scope | $.VarRef<__goscript_scope.Scope> | null): graphHolder | $.VarRef<graphHolder> | null {
	return new graphHolder({s: s, snap: -1})
}

var __goscriptAwait: any
