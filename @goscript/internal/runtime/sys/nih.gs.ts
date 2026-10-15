// Generated file based on nih.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

$.registerTypePackagePath("internal/runtime/sys", ["sys.nih", "sys.NotInHeap"])

export class nih {
	public _fields: {
	}

	constructor(init?: Partial<{}>, __goscriptValue?: boolean) {
		this._fields = {
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): nih {
		return new nih(this, true)
	}

	public __goscriptAssign(source: nih): void {
	}

	static __typeInfo = $.registerStructType(
		"sys.nih",
		() => new nih(),
		() => [],
		nih,
		() => []
	)
}

export class NotInHeap {
	public get _blank0(): nih {
		return this._fields._blank0
	}

	public set _blank0(value: nih) {
		this._fields._blank0 = value
	}

	public _fields: {
		_blank0: nih
	}

	constructor(init?: Partial<{_blank0?: nih}>, __goscriptValue?: boolean) {
		this._fields = {
			_blank0: init?._blank0 ? init._blank0.clone() : new nih(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): NotInHeap {
		return new NotInHeap(this, true)
	}

	public __goscriptAssign(source: NotInHeap): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target._blank0, values._blank0)
	}

	static __typeInfo = $.registerStructType(
		"sys.NotInHeap",
		() => new NotInHeap(),
		() => [],
		NotInHeap,
		() => [/* @__PURE__ */ $.structField("_", "sys.nih", [0], 0, false, { key: "_blank0", pkgPath: "internal/runtime/sys" })]
	)
}
