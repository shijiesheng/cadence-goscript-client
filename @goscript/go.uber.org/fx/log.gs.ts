// Generated file based on log.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fxevent from "@goscript/go.uber.org/fx/fxevent/index.js"
import "@goscript/go.uber.org/fx/fxevent/index.js"

$.registerTypePackagePath("go.uber.org/fx", ["fx.logBuffer"])

export class logBuffer {
	public get events(): $.Slice<fxevent.Event | null> {
		return this._fields.events
	}

	public set events(value: $.Slice<fxevent.Event | null>) {
		this._fields.events = value
	}

	public get logger(): fxevent.Logger | null {
		return this._fields.logger
	}

	public set logger(value: fxevent.Logger | null) {
		this._fields.logger = value
	}

	public _fields: {
		events: $.Slice<fxevent.Event | null>
		logger: fxevent.Logger | null
	}

	constructor(init?: Partial<{events?: $.Slice<fxevent.Event | null>, logger?: fxevent.Logger | null}>, __goscriptValue?: boolean) {
		this._fields = {
			events: init?.events ?? (null! as $.Slice<fxevent.Event | null>),
			logger: init?.logger ?? (null! as fxevent.Logger | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): logBuffer {
		return new logBuffer(this, true)
	}

	public __goscriptAssign(source: logBuffer): void {
		const target = this._fields
		const values = source._fields
		target.events = values.events
		target.logger = $.assignFieldValue(target.logger, values.logger, "fxevent.Logger")
	}

	public async Connect(logger: fxevent.Logger | null): globalThis.Promise<void> {
		let l: logBuffer | $.VarRef<logBuffer> | null = this;
		const l$: logBuffer = l == null ? $.pointerTarget<logBuffer>(l) : (l as any).__isVarRef === true ? (l as any).value : (l as any).__goValue === undefined ? (l as any) : $.pointerTarget<logBuffer>(l);
		;(l$ as logBuffer).logger = logger
		for (let __goscriptRangeTarget0 = (l$ as logBuffer).events, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
			let e = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as fxevent.Event | null)
			void (__goscriptAwait = (logger !== null && (logger as any).__isVarRef !== true && (logger as any).__goValue === undefined ? (logger as Exclude<fxevent.Logger, null>) : $.pointerValue<Exclude<fxevent.Logger, null>>(logger)).LogEvent(e), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		;(l$ as logBuffer).events = null
	}

	public async LogEvent(event: fxevent.Event | null): globalThis.Promise<void> {
		let l: logBuffer | $.VarRef<logBuffer> | null = this;
		const l$: logBuffer = l == null ? $.pointerTarget<logBuffer>(l) : (l as any).__isVarRef === true ? (l as any).value : (l as any).__goValue === undefined ? (l as any) : $.pointerTarget<logBuffer>(l)
		if ((l$ as logBuffer).logger == null) {
			;(l$ as logBuffer).events = $.appendOne((l$ as logBuffer).events, event, $.appendZeros.nil)
		} else {
			void (__goscriptAwait = $.pointerValue<Exclude<fxevent.Logger, null>>((l$ as logBuffer).logger).LogEvent(event), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}

	static __typeInfo = $.registerStructType(
		"fx.logBuffer",
		() => new logBuffer(),
		() => [$.methodSignature("Connect", [["logger", "fxevent.Logger"]], [], true), $.methodSignature("LogEvent", [["event", "fxevent.Event"]], [], true)],
		logBuffer,
		() => [/* @__PURE__ */ $.structField("events", /* @__PURE__ */ $.sliceType("fxevent.Event"), [0], 0, false, { pkgPath: "go.uber.org/fx" }), /* @__PURE__ */ $.structField("logger", "fxevent.Logger", [1], 24, false, { pkgPath: "go.uber.org/fx" })]
	)
}

var __goscriptAwait: any
