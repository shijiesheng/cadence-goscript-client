// Generated file based on event.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as sync from "@goscript/sync/index.js"

import * as atomic from "@goscript/sync/atomic/index.js"
import "@goscript/sync/index.js"
import "@goscript/sync/atomic/index.js"

$.registerTypePackagePath("google.golang.org/grpc/internal/grpcsync", ["grpcsync.Event"])

export class Event {
	public get fired(): number {
		return this._fields.fired
	}

	public set fired(value: number) {
		this._fields.fired = value
	}

	public get c(): $.Channel<{}> | null {
		return this._fields.c
	}

	public set c(value: $.Channel<{}> | null) {
		this._fields.c = value
	}

	public get o(): sync.Once {
		return this._fields.o
	}

	public set o(value: sync.Once) {
		this._fields.o = value
	}

	public _fields: {
		fired: number
		c: $.Channel<{}> | null
		o: sync.Once
	}

	constructor(init?: Partial<{fired?: number, c?: $.Channel<{}> | null, o?: sync.Once}>, __goscriptValue?: boolean) {
		this._fields = {
			fired: init?.fired ?? (0 as number),
			c: init?.c ?? (null! as $.Channel<{}> | null),
			o: init?.o ? $.markAsStructValue($.cloneStructValue(init.o)) : $.markAsStructValue(new sync.Once())
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Event {
		return new Event(this, true)
	}

	public __goscriptAssign(source: Event): void {
		const target = this._fields
		const values = source._fields
		target.fired = values.fired
		target.c = values.c
		$.assignStruct(target.o, values.o)
	}

	public Done(): $.Channel<{}> | null {
		const e: Event | $.VarRef<Event> | null = this;
		return $.pointerValue<Event>(e).c
	}

	public async Fire(): globalThis.Promise<boolean> {
		const e: Event | $.VarRef<Event> | null = this;
		const e$: Event = e == null ? $.pointerTarget<Event>(e) : (e as any).__isVarRef === true ? (e as any).value : (e as any).__goValue === undefined ? (e as any) : $.pointerTarget<Event>(e)
		let ret = false
		await (e$ as Event).o.Do($.functionValue((): void => {
			atomic.StoreInt32($.fieldRef((e$ as Event)._fields, "fired"), 1)
			void (e$ as Event).c!.close()
			ret = true
		}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)))
		return ret
	}

	public HasFired(): boolean {
		const e: Event | $.VarRef<Event> | null = this;
		return atomic.LoadInt32($.fieldRef($.pointerValue<Event>(e)._fields, "fired")) == 1
	}

	static __typeInfo = $.registerStructType(
		"grpcsync.Event",
		() => new Event(),
		() => [$.methodSignature("Done", [], [/* @__PURE__ */ $.channelType({ kind: $.TypeKind.Struct, methods: [], fields: [] }, "receive")], true), $.methodSignature("Fire", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("HasFired", [], [/* @__PURE__ */ $.basicType("bool")], true)],
		Event,
		() => [/* @__PURE__ */ $.structField("fired", /* @__PURE__ */ $.basicType("int32"), [0], 0, false, { pkgPath: "google.golang.org/grpc/internal/grpcsync" }), /* @__PURE__ */ $.structField("c", /* @__PURE__ */ $.channelType({ kind: $.TypeKind.Struct, methods: [], fields: [] }, "both"), [1], 8, false, { pkgPath: "google.golang.org/grpc/internal/grpcsync" }), /* @__PURE__ */ $.structField("o", "sync.Once", [2], 16, false, { pkgPath: "google.golang.org/grpc/internal/grpcsync" })]
	)
}

export function NewEvent(): Event | $.VarRef<Event> | null {
	return new Event({c: $.makeChannel<{}>(0, {}, "both")})
}
