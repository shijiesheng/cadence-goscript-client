// Generated file based on pointer.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as abi from "@goscript/internal/abi/index.js"

import * as runtime from "@goscript/runtime/index.js"

import * as unsafe from "@goscript/unsafe/index.js"
import "@goscript/internal/abi/index.js"
import "@goscript/runtime/index.js"
import "@goscript/unsafe/index.js"

export class Pointer {
	// Mention T in the type definition to prevent conversions
	// between Pointer types, like we do for sync/atomic.Pointer.
	public get _blank0(): any[] {
		return this._fields._blank0
	}

	public set _blank0(value: any[]) {
		this._fields._blank0 = value
	}

	public get u(): any {
		return this._fields.u
	}

	public set u(value: any) {
		this._fields.u = value
	}

	public _fields: {
		_blank0: any[]
		u: any
	}

	constructor(init?: Partial<{_blank0?: any[], u?: any}>, __goscriptValue?: boolean) {
		this._fields = {
			_blank0: init?._blank0 !== undefined ? $.cloneArrayValue(init._blank0, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.pointerType({ kind: $.TypeKind.Interface, methods: [] }), 0)) : $.arrayValue(globalThis.Array.from({ length: 0 }, () => null)),
			u: init?.u ?? (null! as any)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Pointer {
		return new Pointer(this, true)
	}

	public __goscriptAssign(source: Pointer): void {
		const target = this._fields
		const values = source._fields
		target._blank0 = $.assignFieldValue(target._blank0, values._blank0, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.pointerType({ kind: $.TypeKind.Interface, methods: [] }), 0))
		target.u = values.u
	}

	public Value(__typeArgs: $.GenericTypeArgs | undefined): any {
		const p = this;
		if (p.u == null) {
			return null
		}
		return runtime_makeStrongFromWeak(p.u)
	}

	static __typeInfo = $.registerStructType(
		"weak.Pointer",
		() => new Pointer(),
		() => [$.methodSignature("Value", [], [/* @__PURE__ */ $.pointerType({ kind: $.TypeKind.Interface, methods: [] })])],
		Pointer,
		() => [/* @__PURE__ */ $.structField("_", /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.pointerType({ kind: $.TypeKind.Interface, methods: [] }), 0), [0], 0, false, { key: "_blank0", pkgPath: "weak" }), /* @__PURE__ */ $.structField("u", /* @__PURE__ */ $.basicType("unknown"), [1], 0, false, { pkgPath: "weak" })]
	)
}

export function Make(__typeArgs: $.GenericTypeArgs | undefined, ptr: any): Pointer {
	// Explicitly force ptr to escape to the heap.
	ptr = (abi.Escape(ptr) as any)

	let u: any = null! as any
	if (ptr != null) {
		u = runtime_registerWeakPointer((ptr as any))
	}
	runtime.KeepAlive($.typeParamPointerInterfaceValue(ptr, __typeArgs?.["T"], "*T", /* @__PURE__ */ $.pointerType(__typeArgs?.["T"]?.type ?? { kind: $.TypeKind.Interface, methods: [] })))
	return $.markAsStructValue(new Pointer({u: u}))
}

export function runtime_registerWeakPointer(_p0: any): any {
	return null! as any
}

export function runtime_makeStrongFromWeak(_p0: any): any {
	return null! as any
}
