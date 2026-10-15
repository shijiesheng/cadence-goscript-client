// Generated file based on unbounded.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as errors from "@goscript/errors/index.js"

import * as sync from "@goscript/sync/index.js"
import "@goscript/errors/index.js"
import "@goscript/sync/index.js"

$.registerTypePackagePath("google.golang.org/grpc/internal/buffer", ["buffer.Unbounded"])

export class Unbounded {
	public get c(): $.Channel<any> | null {
		return this._fields.c
	}

	public set c(value: $.Channel<any> | null) {
		this._fields.c = value
	}

	public get closed(): boolean {
		return this._fields.closed
	}

	public set closed(value: boolean) {
		this._fields.closed = value
	}

	public get closing(): boolean {
		return this._fields.closing
	}

	public set closing(value: boolean) {
		this._fields.closing = value
	}

	public get mu(): sync.Mutex {
		return this._fields.mu
	}

	public set mu(value: sync.Mutex) {
		this._fields.mu = value
	}

	public get backlog(): $.Slice<any> {
		return this._fields.backlog
	}

	public set backlog(value: $.Slice<any>) {
		this._fields.backlog = value
	}

	public _fields: {
		c: $.Channel<any> | null
		closed: boolean
		closing: boolean
		mu: sync.Mutex
		backlog: $.Slice<any>
	}

	constructor(init?: Partial<{c?: $.Channel<any> | null, closed?: boolean, closing?: boolean, mu?: sync.Mutex, backlog?: $.Slice<any>}>, __goscriptValue?: boolean) {
		this._fields = {
			c: init?.c ?? (null! as $.Channel<any> | null),
			closed: init?.closed ?? (false as boolean),
			closing: init?.closing ?? (false as boolean),
			mu: init?.mu ? $.markAsStructValue($.cloneStructValue(init.mu)) : $.markAsStructValue(new sync.Mutex()),
			backlog: init?.backlog ?? (null! as $.Slice<any>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Unbounded {
		return new Unbounded(this, true)
	}

	public __goscriptAssign(source: Unbounded): void {
		const target = this._fields
		const values = source._fields
		target.c = values.c
		target.closed = values.closed
		target.closing = values.closing
		$.assignStruct(target.mu, values.mu)
		target.backlog = values.backlog
	}

	public async Close(): globalThis.Promise<void> {
		let b: Unbounded | $.VarRef<Unbounded> | null = this;
		using __defer = new $.DisposableStack()
		const b$: Unbounded = b == null ? $.pointerTarget<Unbounded>(b) : (b as any).__isVarRef === true ? (b as any).value : (b as any).__goValue === undefined ? (b as any) : $.pointerTarget<Unbounded>(b)
		await (b$ as Unbounded).mu.Lock()
		const __goscriptDeferCallee0 = $.functionValue(((__receiver) => () => __receiver.Unlock())((b$ as Unbounded).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee0() })
		if ((b$ as Unbounded).closing) {
			return
		}
		;(b$ as Unbounded).closing = true
		if ($.sliceLen((b$ as Unbounded).backlog) == 0) {
			;(b$ as Unbounded).closed = true
			void (b$ as Unbounded).c!.close()
		}
	}

	public Get(): $.Channel<any> | null {
		const b: Unbounded | $.VarRef<Unbounded> | null = this;
		return $.pointerValue<Unbounded>(b).c
	}

	public async Load(): globalThis.Promise<void> {
		let b: Unbounded | $.VarRef<Unbounded> | null = this;
		using __defer = new $.DisposableStack()
		const b$: Unbounded = b == null ? $.pointerTarget<Unbounded>(b) : (b as any).__isVarRef === true ? (b as any).value : (b as any).__goValue === undefined ? (b as any) : $.pointerTarget<Unbounded>(b)
		await (b$ as Unbounded).mu.Lock()
		const __goscriptDeferCallee1 = $.functionValue(((__receiver) => () => __receiver.Unlock())((b$ as Unbounded).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee1() })
		if ($.sliceLen((b$ as Unbounded).backlog) > 0) {
			const [__goscriptSelect0HasReturn, __goscriptSelect0Value] = await $.selectStatement<any, void>([
				{
					id: 0,
					isSend: true,
					channel: (b$ as Unbounded).c,
					value: $.arrayIndex((b$ as Unbounded).backlog!, 0),
					onSelected: async (__goscriptSelect0Result) => {
						$.sliceElems((b$ as Unbounded).backlog!)[$.sliceSlot((b$ as Unbounded).backlog!, 0)] = null;
						;(b$ as Unbounded).backlog = $.goSlice((b$ as Unbounded).backlog, 1, undefined)
					}
				},
				{
					id: -1,
					isSend: false,
					channel: null,
				}
			], true)
			if (__goscriptSelect0HasReturn) {
				return __goscriptSelect0Value
			}
		} else {
			if ((b$ as Unbounded).closing && !(b$ as Unbounded).closed) {
				void (b$ as Unbounded).c!.close()
			}
		}
	}

	public async Put(t: any): globalThis.Promise<$.GoError> {
		let b: Unbounded | $.VarRef<Unbounded> | null = this;
		using __defer = new $.DisposableStack()
		const b$: Unbounded = b == null ? $.pointerTarget<Unbounded>(b) : (b as any).__isVarRef === true ? (b as any).value : (b as any).__goValue === undefined ? (b as any) : $.pointerTarget<Unbounded>(b)
		await (b$ as Unbounded).mu.Lock()
		const __goscriptDeferCallee2 = $.functionValue(((__receiver) => () => __receiver.Unlock())((b$ as Unbounded).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee2() })
		if ((b$ as Unbounded).closing) {
			return errBufferClosed
		}
		if ($.sliceLen((b$ as Unbounded).backlog) == 0) {
			const [__goscriptSelect1HasReturn, __goscriptSelect1Value] = await $.selectStatement<any, $.GoError>([
				{
					id: 0,
					isSend: true,
					channel: (b$ as Unbounded).c,
					value: t,
					onSelected: async (__goscriptSelect1Result) => {
						return null
					}
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
		;(b$ as Unbounded).backlog = $.appendOne((b$ as Unbounded).backlog, t, $.appendZeros.nil)
		return null
	}

	static __typeInfo = $.registerStructType(
		"buffer.Unbounded",
		() => new Unbounded(),
		() => [$.methodSignature("Close", [], [], true), $.methodSignature("Get", [], [/* @__PURE__ */ $.channelType({ kind: $.TypeKind.Interface, methods: [] }, "receive")], true), $.methodSignature("Load", [], [], true), $.methodSignature("Put", [["t", { kind: $.TypeKind.Interface, methods: [] }]], ["error"], true)],
		Unbounded,
		() => [/* @__PURE__ */ $.structField("c", /* @__PURE__ */ $.channelType({ kind: $.TypeKind.Interface, methods: [] }, "both"), [0], 0, false, { pkgPath: "google.golang.org/grpc/internal/buffer" }), /* @__PURE__ */ $.structField("closed", /* @__PURE__ */ $.basicType("bool"), [1], 8, false, { pkgPath: "google.golang.org/grpc/internal/buffer" }), /* @__PURE__ */ $.structField("closing", /* @__PURE__ */ $.basicType("bool"), [2], 9, false, { pkgPath: "google.golang.org/grpc/internal/buffer" }), /* @__PURE__ */ $.structField("mu", "sync.Mutex", [3], 12, false, { pkgPath: "google.golang.org/grpc/internal/buffer" }), /* @__PURE__ */ $.structField("backlog", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] }), [4], 24, false, { pkgPath: "google.golang.org/grpc/internal/buffer" })]
	)
}

export function NewUnbounded(): Unbounded | $.VarRef<Unbounded> | null {
	return new Unbounded({c: $.makeChannel<any>(1, null! as any, "both")})
}

export let errBufferClosed: $.GoError = errors.New("Put called on closed buffer.Unbounded")

export function __goscript_set_errBufferClosed(__goscriptValue: $.GoError): void {
	errBufferClosed = __goscriptValue
}
