// Generated file based on pipeline.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as sync from "@goscript/sync/index.js"
import "@goscript/sync/index.js"

$.registerTypePackagePath("net/textproto", ["textproto.Pipeline", "textproto.sequencer"])

export class sequencer {
	public get mu(): sync.Mutex {
		return this._fields.mu
	}

	public set mu(value: sync.Mutex) {
		this._fields.mu = value
	}

	public get id(): number {
		return this._fields.id
	}

	public set id(value: number) {
		this._fields.id = value
	}

	public get wait(): globalThis.Map<number, $.Channel<{}> | null> | null {
		return this._fields.wait
	}

	public set wait(value: globalThis.Map<number, $.Channel<{}> | null> | null) {
		this._fields.wait = value
	}

	public _fields: {
		mu: sync.Mutex
		id: number
		wait: globalThis.Map<number, $.Channel<{}> | null> | null
	}

	constructor(init?: Partial<{mu?: sync.Mutex, id?: number, wait?: globalThis.Map<number, $.Channel<{}> | null> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			mu: init?.mu ? $.markAsStructValue($.cloneStructValue(init.mu)) : $.markAsStructValue(new sync.Mutex()),
			id: init?.id ?? (0 as number),
			wait: init?.wait ?? (null! as globalThis.Map<number, $.Channel<{}> | null> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): sequencer {
		return new sequencer(this, true)
	}

	public __goscriptAssign(source: sequencer): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.mu, values.mu)
		target.id = values.id
		target.wait = values.wait
	}

	public async End(id: number): globalThis.Promise<void> {
		let s: sequencer | $.VarRef<sequencer> | null = this;
		const s$: sequencer = s == null ? $.pointerTarget<sequencer>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<sequencer>(s)
		await (s$ as sequencer).mu.Lock()
		if ((s$ as sequencer).id != id) {
			void (s$ as sequencer).mu.Unlock()
			$.panic("out of sync")
		}
		id++;
		;(s$ as sequencer).id = id
		if ((s$ as sequencer).wait == null) {
			;(s$ as sequencer).wait = $.makeMap<number, $.Channel<{}> | null>()
		}
		let __goscriptTuple0: any = $.mapGet<number, $.Channel<{}> | null, $.Channel<{}> | null>((s$ as sequencer).wait, id, null)
		let c: $.Channel<{}> | null = __goscriptTuple0[0]
		let ok = __goscriptTuple0[1]
		if (ok) {
			$.deleteMapEntry((s$ as sequencer).wait, id)
		}
		void (s$ as sequencer).mu.Unlock()
		if (ok) {
			c!.close()
		}
	}

	public async Start(id: number): globalThis.Promise<void> {
		let s: sequencer | $.VarRef<sequencer> | null = this;
		const s$: sequencer = s == null ? $.pointerTarget<sequencer>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<sequencer>(s)
		await (s$ as sequencer).mu.Lock()
		if ((s$ as sequencer).id == id) {
			void (s$ as sequencer).mu.Unlock()
			return
		}
		let c: $.Channel<{}> | null = $.makeChannel<{}>(0, {}, "both")
		if ((s$ as sequencer).wait == null) {
			;(s$ as sequencer).wait = $.makeMap<number, $.Channel<{}> | null>()
		}
		$.mapSet((s$ as sequencer).wait, id, c)
		void (s$ as sequencer).mu.Unlock()
		await $.chanRecv(c)
	}

	static __typeInfo = $.registerStructType(
		"textproto.sequencer",
		() => new sequencer(),
		() => [$.methodSignature("End", [["id", /* @__PURE__ */ $.basicType("uint")]], [], true), $.methodSignature("Start", [["id", /* @__PURE__ */ $.basicType("uint")]], [], true)],
		sequencer,
		() => [/* @__PURE__ */ $.structField("mu", "sync.Mutex", [0], 0, false, { pkgPath: "net/textproto" }), /* @__PURE__ */ $.structField("id", /* @__PURE__ */ $.basicType("uint"), [1], 8, false, { pkgPath: "net/textproto" }), /* @__PURE__ */ $.structField("wait", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("uint"), /* @__PURE__ */ $.channelType({ kind: $.TypeKind.Struct, methods: [], fields: [] }, "both")), [2], 16, false, { pkgPath: "net/textproto" })]
	)
}

export class Pipeline {
	public get mu(): sync.Mutex {
		return this._fields.mu
	}

	public set mu(value: sync.Mutex) {
		this._fields.mu = value
	}

	public get id(): number {
		return this._fields.id
	}

	public set id(value: number) {
		this._fields.id = value
	}

	public get request(): sequencer {
		return this._fields.request
	}

	public set request(value: sequencer) {
		this._fields.request = value
	}

	public get response(): sequencer {
		return this._fields.response
	}

	public set response(value: sequencer) {
		this._fields.response = value
	}

	public _fields: {
		mu: sync.Mutex
		id: number
		request: sequencer
		response: sequencer
	}

	constructor(init?: Partial<{mu?: sync.Mutex, id?: number, request?: sequencer, response?: sequencer}>, __goscriptValue?: boolean) {
		this._fields = {
			mu: init?.mu ? $.markAsStructValue($.cloneStructValue(init.mu)) : $.markAsStructValue(new sync.Mutex()),
			id: init?.id ?? (0 as number),
			request: init?.request ? init.request.clone() : new sequencer(undefined, true),
			response: init?.response ? init.response.clone() : new sequencer(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Pipeline {
		return new Pipeline(this, true)
	}

	public __goscriptAssign(source: Pipeline): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.mu, values.mu)
		target.id = values.id
		$.assignStruct(target.request, values.request)
		$.assignStruct(target.response, values.response)
	}

	public async EndRequest(id: number): globalThis.Promise<void> {
		const p: Pipeline | $.VarRef<Pipeline> | null = this;
		await $.pointerValue<Pipeline>(p).request.End(id)
	}

	public async EndResponse(id: number): globalThis.Promise<void> {
		const p: Pipeline | $.VarRef<Pipeline> | null = this;
		await $.pointerValue<Pipeline>(p).response.End(id)
	}

	public async Next(): globalThis.Promise<number> {
		let p: Pipeline | $.VarRef<Pipeline> | null = this;
		const p$: Pipeline = p == null ? $.pointerTarget<Pipeline>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<Pipeline>(p)
		await (p$ as Pipeline).mu.Lock()
		let id = (p$ as Pipeline).id;
		;(p$ as Pipeline).id++
		void (p$ as Pipeline).mu.Unlock()
		return id
	}

	public async StartRequest(id: number): globalThis.Promise<void> {
		const p: Pipeline | $.VarRef<Pipeline> | null = this;
		await $.pointerValue<Pipeline>(p).request.Start(id)
	}

	public async StartResponse(id: number): globalThis.Promise<void> {
		const p: Pipeline | $.VarRef<Pipeline> | null = this;
		await $.pointerValue<Pipeline>(p).response.Start(id)
	}

	static __typeInfo = $.registerStructType(
		"textproto.Pipeline",
		() => new Pipeline(),
		() => [$.methodSignature("EndRequest", [["id", /* @__PURE__ */ $.basicType("uint")]], [], true), $.methodSignature("EndResponse", [["id", /* @__PURE__ */ $.basicType("uint")]], [], true), $.methodSignature("Next", [], [/* @__PURE__ */ $.basicType("uint")], true), $.methodSignature("StartRequest", [["id", /* @__PURE__ */ $.basicType("uint")]], [], true), $.methodSignature("StartResponse", [["id", /* @__PURE__ */ $.basicType("uint")]], [], true)],
		Pipeline,
		() => [/* @__PURE__ */ $.structField("mu", "sync.Mutex", [0], 0, false, { pkgPath: "net/textproto" }), /* @__PURE__ */ $.structField("id", /* @__PURE__ */ $.basicType("uint"), [1], 8, false, { pkgPath: "net/textproto" }), /* @__PURE__ */ $.structField("request", "textproto.sequencer", [2], 16, false, { pkgPath: "net/textproto" }), /* @__PURE__ */ $.structField("response", "textproto.sequencer", [3], 40, false, { pkgPath: "net/textproto" })]
	)
}
