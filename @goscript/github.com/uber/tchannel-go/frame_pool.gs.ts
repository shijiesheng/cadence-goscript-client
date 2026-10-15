// Generated file based on frame_pool.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as sync from "@goscript/sync/index.js"

import type * as typed from "@goscript/github.com/uber/tchannel-go/typed/index.js"

import type * as io from "@goscript/io/index.js"

import * as __goscript_frame from "./frame.gs.ts"

import * as __goscript_messages from "./messages.gs.ts"

import * as __goscript_messagetype_string from "./messagetype_string.gs.ts"
import "@goscript/sync/index.js"
import "./frame.gs.ts"
import "./messages.gs.ts"
import "./messagetype_string.gs.ts"

$.registerTypePackagePath("github.com/uber/tchannel-go", ["tchannel.FramePool", "tchannel.disabledFramePool", "tchannel.syncFramePool", "tchannel.channelFramePool"])

export type FramePool = {
	Get(): __goscript_frame.Frame | $.VarRef<__goscript_frame.Frame> | null | globalThis.Promise<__goscript_frame.Frame | $.VarRef<__goscript_frame.Frame> | null>
	Release(f: __goscript_frame.Frame | $.VarRef<__goscript_frame.Frame> | null): void
}

$.registerInterfaceType(
	"tchannel.FramePool",
	null,
	[$.methodSignature("Get", [], [/* @__PURE__ */ $.pointerType("tchannel.Frame")]), $.methodSignature("Release", [["f", /* @__PURE__ */ $.pointerType("tchannel.Frame")]])]
);

export type channelFramePool = $.Channel<__goscript_frame.Frame | $.VarRef<__goscript_frame.Frame> | null> | null

$.registerNamedValueType(
	"tchannel.channelFramePool",
	{Get: (receiver: any, ...args: any[]) => (channelFramePool_Get as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Release: (receiver: any, ...args: any[]) => (channelFramePool_Release as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Get", [], [/* @__PURE__ */ $.pointerType("tchannel.Frame")]), $.methodSignature("Release", [["f", /* @__PURE__ */ $.pointerType("tchannel.Frame")]])]
);

$.registerNamedValueType(
	"*tchannel.channelFramePool",
	{Get: (receiver: any, ...args: any[]) => (channelFramePool_Get as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Release: (receiver: any, ...args: any[]) => (channelFramePool_Release as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Get", [], [/* @__PURE__ */ $.pointerType("tchannel.Frame")]), $.methodSignature("Release", [["f", /* @__PURE__ */ $.pointerType("tchannel.Frame")]])]
);

export class disabledFramePool {
	public _fields: {
	}

	constructor(init?: Partial<{}>, __goscriptValue?: boolean) {
		this._fields = {
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): disabledFramePool {
		return new disabledFramePool(this, true)
	}

	public __goscriptAssign(source: disabledFramePool): void {
	}

	public Get(): __goscript_frame.Frame | $.VarRef<__goscript_frame.Frame> | null {
		const p = this;
		return __goscript_frame.NewFrame(65519)
	}

	public Release(f: __goscript_frame.Frame | $.VarRef<__goscript_frame.Frame> | null): void {
		const p = this;
	}

	static __typeInfo = $.registerStructType(
		"tchannel.disabledFramePool",
		() => new disabledFramePool(),
		() => [$.methodSignature("Get", [], [/* @__PURE__ */ $.pointerType("tchannel.Frame")]), $.methodSignature("Release", [["f", /* @__PURE__ */ $.pointerType("tchannel.Frame")]])],
		disabledFramePool,
		() => []
	)
}

export class syncFramePool {
	public get pool(): sync.Pool | $.VarRef<sync.Pool> | null {
		return this._fields.pool
	}

	public set pool(value: sync.Pool | $.VarRef<sync.Pool> | null) {
		this._fields.pool = value
	}

	public _fields: {
		pool: sync.Pool | $.VarRef<sync.Pool> | null
	}

	constructor(init?: Partial<{pool?: sync.Pool | $.VarRef<sync.Pool> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			pool: init?.pool ?? (null! as sync.Pool | $.VarRef<sync.Pool> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): syncFramePool {
		return new syncFramePool(this, true)
	}

	public __goscriptAssign(source: syncFramePool): void {
		const target = this._fields
		const values = source._fields
		target.pool = values.pool
	}

	public async Get(): globalThis.Promise<__goscript_frame.Frame | $.VarRef<__goscript_frame.Frame> | null> {
		const p = this;
		return $.mustTypeAssert<__goscript_frame.Frame | $.VarRef<__goscript_frame.Frame> | null>(await sync.Pool.prototype.Get.call($.pointerValue<sync.Pool>(p.pool)), /* @__PURE__ */ $.pointerType("tchannel.Frame"))
	}

	public Release(f: __goscript_frame.Frame | $.VarRef<__goscript_frame.Frame> | null): void {
		const p = this;
		sync.Pool.prototype.Put.call($.pointerValue<sync.Pool>(p.pool), $.interfaceValue(f, "*tchannel.Frame", /* @__PURE__ */ $.pointerType("tchannel.Frame")))
	}

	static __typeInfo = $.registerStructType(
		"tchannel.syncFramePool",
		() => new syncFramePool(),
		() => [$.methodSignature("Get", [], [/* @__PURE__ */ $.pointerType("tchannel.Frame")]), $.methodSignature("Release", [["f", /* @__PURE__ */ $.pointerType("tchannel.Frame")]])],
		syncFramePool,
		() => [/* @__PURE__ */ $.structField("pool", /* @__PURE__ */ $.pointerType("sync.Pool"), [0], 0, false, { pkgPath: "github.com/uber/tchannel-go" })]
	)
}

export let DefaultFramePool: FramePool | null = NewSyncFramePool()

export function __goscript_set_DefaultFramePool(__goscriptValue: FramePool | null): void {
	DefaultFramePool = __goscriptValue
}

export let DisabledFramePool: disabledFramePool = new disabledFramePool(undefined, true)

export function __goscript_set_DisabledFramePool(__goscriptValue: disabledFramePool): void {
	$.assignStruct(DisabledFramePool, __goscriptValue)
}

export function NewSyncFramePool(): FramePool | null {
	return $.interfaceValue<FramePool | null>(new syncFramePool({pool: new sync.Pool({New: $.functionValue((): any => {
		return $.interfaceValue(__goscript_frame.NewFrame(65519), "*tchannel.Frame", /* @__PURE__ */ $.pointerType("tchannel.Frame"))
	}, ({ kind: $.TypeKind.Function, params: [], results: [{ kind: $.TypeKind.Interface, methods: [] }] } as $.FunctionTypeInfo))})}), "*tchannel.syncFramePool", /* @__PURE__ */ $.pointerType("tchannel.syncFramePool"))
}

export function NewChannelFramePool(capacity: number): FramePool | null {
	return $.namedValueInterfaceValue<FramePool | null>($.makeChannel<__goscript_frame.Frame | $.VarRef<__goscript_frame.Frame> | null>(capacity, null! as __goscript_frame.Frame | $.VarRef<__goscript_frame.Frame> | null, "both"), "tchannel.channelFramePool", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())
}

export async function channelFramePool_Get(c: channelFramePool): globalThis.Promise<__goscript_frame.Frame | $.VarRef<__goscript_frame.Frame> | null> {
	const [__goscriptSelect0HasReturn, __goscriptSelect0Value] = await $.selectStatement<any, __goscript_frame.Frame | $.VarRef<__goscript_frame.Frame> | null>([
		{
			id: 0,
			isSend: false,
			channel: c,
			onSelected: async (__goscriptSelect0Result) => {
				let frame = __goscriptSelect0Result.value
				return frame
			}
		},
		{
			id: -1,
			isSend: false,
			channel: null,
			onSelected: async (__goscriptSelect0Result) => {
				return __goscript_frame.NewFrame(65519)
			}
		}
	], true)
	if (__goscriptSelect0HasReturn) {
		return __goscriptSelect0Value
	}
	throw new globalThis.Error("unreachable select")
	throw new globalThis.Error("goscript: unreachable return")
}

export async function channelFramePool_Release(c: channelFramePool, f: __goscript_frame.Frame | $.VarRef<__goscript_frame.Frame> | null): globalThis.Promise<void> {
	const [__goscriptSelect1HasReturn, __goscriptSelect1Value] = await $.selectStatement<any, void>([
		{
			id: 0,
			isSend: true,
			channel: c,
			value: f,
		},
		{
			id: -1,
			isSend: false,
			channel: null,
		}
	], true)
	if (__goscriptSelect1HasReturn) {
		return __goscriptSelect1Value
	}
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({Get: (receiver: any, ...args: any[]) => (channelFramePool_Get as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Release: (receiver: any, ...args: any[]) => (channelFramePool_Release as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= ("tchannel.channelFramePool")
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("Get", [], [/* @__PURE__ */ $.pointerType("tchannel.Frame")]), $.methodSignature("Release", [["f", /* @__PURE__ */ $.pointerType("tchannel.Frame")]])])
}
