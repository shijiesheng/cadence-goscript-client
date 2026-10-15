// Generated file based on checked_frame_pool.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as runtime from "@goscript/runtime/index.js"

import * as sync from "@goscript/sync/index.js"

import type * as typed from "@goscript/github.com/uber/tchannel-go/typed/index.js"

import type * as io from "@goscript/io/index.js"

import * as __goscript_frame from "./frame.gs.ts"

import * as __goscript_messages from "./messages.gs.ts"

import * as __goscript_messagetype_string from "./messagetype_string.gs.ts"
import "@goscript/fmt/index.js"
import "@goscript/runtime/index.js"
import "@goscript/sync/index.js"
import "./frame.gs.ts"
import "./messages.gs.ts"
import "./messagetype_string.gs.ts"

$.registerTypePackagePath("github.com/uber/tchannel-go", ["tchannel.CheckedFramePoolForTest", "tchannel.CheckedFramePoolForTestResult"])

export class CheckedFramePoolForTest {
	public get mu(): sync.Mutex {
		return this._fields.mu
	}

	public set mu(value: sync.Mutex) {
		this._fields.mu = value
	}

	public get allocations(): globalThis.Map<__goscript_frame.Frame | $.VarRef<__goscript_frame.Frame> | null, string> | null {
		return this._fields.allocations
	}

	public set allocations(value: globalThis.Map<__goscript_frame.Frame | $.VarRef<__goscript_frame.Frame> | null, string> | null) {
		this._fields.allocations = value
	}

	public get badRelease(): $.Slice<string> {
		return this._fields.badRelease
	}

	public set badRelease(value: $.Slice<string>) {
		this._fields.badRelease = value
	}

	public _fields: {
		mu: sync.Mutex
		allocations: globalThis.Map<__goscript_frame.Frame | $.VarRef<__goscript_frame.Frame> | null, string> | null
		badRelease: $.Slice<string>
	}

	constructor(init?: Partial<{mu?: sync.Mutex, allocations?: globalThis.Map<__goscript_frame.Frame | $.VarRef<__goscript_frame.Frame> | null, string> | null, badRelease?: $.Slice<string>}>, __goscriptValue?: boolean) {
		this._fields = {
			mu: init?.mu ? $.markAsStructValue($.cloneStructValue(init.mu)) : $.markAsStructValue(new sync.Mutex()),
			allocations: init?.allocations ?? (null! as globalThis.Map<__goscript_frame.Frame | $.VarRef<__goscript_frame.Frame> | null, string> | null),
			badRelease: init?.badRelease ?? (null! as $.Slice<string>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): CheckedFramePoolForTest {
		return new CheckedFramePoolForTest(this, true)
	}

	public __goscriptAssign(source: CheckedFramePoolForTest): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.mu, values.mu)
		target.allocations = values.allocations
		target.badRelease = values.badRelease
	}

	public async CheckEmpty(): globalThis.Promise<CheckedFramePoolForTestResult> {
		const p: CheckedFramePoolForTest | $.VarRef<CheckedFramePoolForTest> | null = this;
		using __defer = new $.DisposableStack()
		const p$: CheckedFramePoolForTest = p == null ? $.pointerTarget<CheckedFramePoolForTest>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<CheckedFramePoolForTest>(p)
		await (p$ as CheckedFramePoolForTest).mu.Lock()
		const __goscriptDeferCallee0 = $.functionValue(((__receiver) => () => __receiver.Unlock())((p$ as CheckedFramePoolForTest).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee0() })

		let badCalls: $.Slice<string> = null! as $.Slice<string>
		for (const [f, s] of (p$ as CheckedFramePoolForTest).allocations?.entries() ?? []) {
			badCalls = $.appendOne(badCalls, await fmt.Sprintf("frame %p: %v not released, get from: %v", $.interfaceValue(f, "*tchannel.Frame", /* @__PURE__ */ $.pointerType("tchannel.Frame")), $.interfaceValue(($.pointerValue<__goscript_frame.Frame>(f).Header).clone(), "tchannel.FrameHeader", "tchannel.FrameHeader"), s))
		}

		return new CheckedFramePoolForTestResult({Unreleased: badCalls, BadReleases: (p$ as CheckedFramePoolForTest).badRelease}, true)
	}

	public async Get(): globalThis.Promise<__goscript_frame.Frame | $.VarRef<__goscript_frame.Frame> | null> {
		let p: CheckedFramePoolForTest | $.VarRef<CheckedFramePoolForTest> | null = this;
		using __defer = new $.DisposableStack()
		const p$: CheckedFramePoolForTest = p == null ? $.pointerTarget<CheckedFramePoolForTest>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<CheckedFramePoolForTest>(p)
		await (p$ as CheckedFramePoolForTest).mu.Lock()
		const __goscriptDeferCallee1 = $.functionValue(((__receiver) => () => __receiver.Unlock())((p$ as CheckedFramePoolForTest).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee1() })

		let frame: __goscript_frame.Frame | $.VarRef<__goscript_frame.Frame> | null = __goscript_frame.NewFrame(65519)
		$.mapSet((p$ as CheckedFramePoolForTest).allocations, frame, recordStack())
		return frame
	}

	public async Release(f: __goscript_frame.Frame | $.VarRef<__goscript_frame.Frame> | null): globalThis.Promise<void> {
		let p: CheckedFramePoolForTest | $.VarRef<CheckedFramePoolForTest> | null = this;
		using __defer = new $.DisposableStack()
		const p$: CheckedFramePoolForTest = p == null ? $.pointerTarget<CheckedFramePoolForTest>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<CheckedFramePoolForTest>(p)
		const f$: __goscript_frame.Frame = f == null ? $.pointerTarget<__goscript_frame.Frame>(f) : (f as any).__isVarRef === true ? (f as any).value : (f as any).__goValue === undefined ? (f as any) : $.pointerTarget<__goscript_frame.Frame>(f)
		// Make sure the payload is not used after this point by clearing the frame.
		zeroOut((f$ as __goscript_frame.Frame).Payload);
		;(f$ as __goscript_frame.Frame).Payload = null
		zeroOut((f$ as __goscript_frame.Frame).buffer);
		;(f$ as __goscript_frame.Frame).buffer = null
		zeroOut((f$ as __goscript_frame.Frame).headerBuffer);
		;(f$ as __goscript_frame.Frame).headerBuffer = null
		$.assignStruct((f$ as __goscript_frame.Frame).Header, new __goscript_frame.FrameHeader(undefined, true))

		await (p$ as CheckedFramePoolForTest).mu.Lock()
		const __goscriptDeferCallee2 = $.functionValue(((__receiver) => () => __receiver.Unlock())((p$ as CheckedFramePoolForTest).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee2() })

		{
			let [, ok] = $.mapGet<__goscript_frame.Frame | $.VarRef<__goscript_frame.Frame> | null, string, string>((p$ as CheckedFramePoolForTest).allocations, f, "")
			if (!ok) {
				;(p$ as CheckedFramePoolForTest).badRelease = $.appendOne((p$ as CheckedFramePoolForTest).badRelease, $.concatString("bad Release at ", recordStack()))
				return
			}
		}

		$.deleteMapEntry((p$ as CheckedFramePoolForTest).allocations, f)
	}

	static __typeInfo = $.registerStructType(
		"tchannel.CheckedFramePoolForTest",
		() => new CheckedFramePoolForTest(),
		() => [$.methodSignature("CheckEmpty", [], ["tchannel.CheckedFramePoolForTestResult"], true), $.methodSignature("Get", [], [/* @__PURE__ */ $.pointerType("tchannel.Frame")], true), $.methodSignature("Release", [["f", /* @__PURE__ */ $.pointerType("tchannel.Frame")]], [], true)],
		CheckedFramePoolForTest,
		() => [/* @__PURE__ */ $.structField("mu", "sync.Mutex", [0], 0, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("allocations", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.pointerType("tchannel.Frame"), /* @__PURE__ */ $.basicType("string")), [1], 8, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("badRelease", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")), [2], 16, false, { pkgPath: "github.com/uber/tchannel-go" })]
	)
}

export class CheckedFramePoolForTestResult {
	public get BadReleases(): $.Slice<string> {
		return this._fields.BadReleases
	}

	public set BadReleases(value: $.Slice<string>) {
		this._fields.BadReleases = value
	}

	public get Unreleased(): $.Slice<string> {
		return this._fields.Unreleased
	}

	public set Unreleased(value: $.Slice<string>) {
		this._fields.Unreleased = value
	}

	public _fields: {
		BadReleases: $.Slice<string>
		Unreleased: $.Slice<string>
	}

	constructor(init?: Partial<{BadReleases?: $.Slice<string>, Unreleased?: $.Slice<string>}>, __goscriptValue?: boolean) {
		this._fields = {
			BadReleases: init?.BadReleases ?? (null! as $.Slice<string>),
			Unreleased: init?.Unreleased ?? (null! as $.Slice<string>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): CheckedFramePoolForTestResult {
		return new CheckedFramePoolForTestResult(this, true)
	}

	public __goscriptAssign(source: CheckedFramePoolForTestResult): void {
		const target = this._fields
		const values = source._fields
		target.BadReleases = values.BadReleases
		target.Unreleased = values.Unreleased
	}

	public HasIssues(): boolean {
		const r = this;
		return ($.sliceLen(r.BadReleases) + $.sliceLen(r.Unreleased)) > 0
	}

	static __typeInfo = $.registerStructType(
		"tchannel.CheckedFramePoolForTestResult",
		() => new CheckedFramePoolForTestResult(),
		() => [$.methodSignature("HasIssues", [], [/* @__PURE__ */ $.basicType("bool")])],
		CheckedFramePoolForTestResult,
		() => [/* @__PURE__ */ $.structField("BadReleases", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")), [0], 0, true), /* @__PURE__ */ $.structField("Unreleased", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")), [1], 24, true)]
	)
}

export function NewCheckedFramePoolForTest(): CheckedFramePoolForTest | $.VarRef<CheckedFramePoolForTest> | null {
	return new CheckedFramePoolForTest({allocations: $.makeMap<__goscript_frame.Frame | $.VarRef<__goscript_frame.Frame> | null, string>(undefined, /* @__PURE__ */ $.pointerType("tchannel.Frame"))})
}

export function recordStack(): string {
	let buf: $.Slice<number> = $.makeSlice<number>(4096, undefined, "byte")
	runtime.Stack(buf, false)
	return $.bytesToString(buf)
}

export function zeroOut(bs: $.Slice<number>): void {
	for (let __goscriptRangeTarget0 = bs, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), i = 0; i < __goscriptRangeWindow0.length; i++) {
		;(__goscriptRangeWindow0.backing as any[])[__goscriptRangeWindow0.offset + i] = 0
	}
}
