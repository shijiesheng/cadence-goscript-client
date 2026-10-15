// Generated file based on murmur.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

$.registerTypePackagePath("github.com/twmb/murmur3", ["murmur3.bmixer", "murmur3.digest"])

export type bmixer = {
	Size(): number
	bmix(p: $.Slice<number>): $.Slice<number>
	reset(): void
}

$.registerInterfaceType(
	"murmur3.bmixer",
	null,
	[$.methodSignature("Size", [], [["n", /* @__PURE__ */ $.basicType("int")]]), $.methodSignature("bmix", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["tail", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]]), $.methodSignature("reset")]
);

export class digest {
	public get clen(): number {
		return this._fields.clen
	}

	public set clen(value: number) {
		this._fields.clen = value
	}

	public get tail(): $.Slice<number> {
		return this._fields.tail
	}

	public set tail(value: $.Slice<number>) {
		this._fields.tail = value
	}

	public get buf(): Uint8Array {
		return this._fields.buf
	}

	public set buf(value: Uint8Array) {
		this._fields.buf = value
	}

	public get bmixer(): bmixer | null {
		return this._fields.bmixer
	}

	public set bmixer(value: bmixer | null) {
		this._fields.bmixer = value
	}

	public _fields: {
		clen: number
		tail: $.Slice<number>
		buf: Uint8Array
		bmixer: bmixer | null
	}

	constructor(init?: Partial<{clen?: number, tail?: $.Slice<number>, buf?: Uint8Array, bmixer?: bmixer | null}>, __goscriptValue?: boolean) {
		this._fields = {
			clen: init?.clen ?? (0 as number),
			tail: init?.tail ?? (null! as $.Slice<number>),
			buf: init?.buf !== undefined ? $.cloneArrayValue(init.buf, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 16)) : $.arrayValue(new Uint8Array(16)),
			bmixer: init?.bmixer ?? (null! as bmixer | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): digest {
		return new digest(this, true)
	}

	public __goscriptAssign(source: digest): void {
		const target = this._fields
		const values = source._fields
		target.clen = values.clen
		target.tail = values.tail
		target.buf = $.assignFieldValue(target.buf, values.buf, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 16))
		target.bmixer = $.assignFieldValue(target.bmixer, values.bmixer, "murmur3.bmixer")
	}

	public BlockSize(): number {
		const d: digest | $.VarRef<digest> | null = this;
		return 1
	}

	public Reset(): void {
		let d: digest | $.VarRef<digest> | null = this;
		const d$: digest = d == null ? $.pointerTarget<digest>(d) : (d as any).__isVarRef === true ? (d as any).value : (d as any).__goValue === undefined ? (d as any) : $.pointerTarget<digest>(d);
		;(d$ as digest).clen = 0;
		;(d$ as digest).tail = null
		$.pointerValue<Exclude<bmixer, null>>((d$ as digest).bmixer).reset()
	}

	public Write(p: $.Slice<number>): [number, $.GoError] {
		let d: digest | $.VarRef<digest> | null = this;
		let n: number = 0
		let err: $.GoError = null! as $.GoError
		const d$: digest = d == null ? $.pointerTarget<digest>(d) : (d as any).__isVarRef === true ? (d as any).value : (d as any).__goValue === undefined ? (d as any) : $.pointerTarget<digest>(d)
		n = $.sliceLen(p);
		;(d$ as digest).clen = (d$ as digest).clen + (n)

		if ($.sliceLen((d$ as digest).tail) > 0) {
			// Stick back pending bytes.
			let nfree = $.pointerValue<Exclude<bmixer, null>>((d$ as digest).bmixer).Size() - $.sliceLen((d$ as digest).tail)
			if (nfree < $.sliceLen(p)) {
				// One full block can be formed.
				let block: $.Slice<number> = $.appendSlice((d$ as digest).tail, $.goSlice(p, undefined, nfree), $.byteSliceHint)
				p = $.goSlice(p, nfree, undefined)
				$.pointerValue<Exclude<bmixer, null>>((d$ as digest).bmixer).bmix(block)
			} else {
				// Tail's buf is large enough to prevent reallocs.
				p = $.appendSlice((d$ as digest).tail, p, $.byteSliceHint)
			}
		}

		;(d$ as digest).tail = $.pointerValue<Exclude<bmixer, null>>((d$ as digest).bmixer).bmix(p)

		// Keep own copy of the 0 to Size()-1 pending bytes.
		let nn = $.copy($.goSlice((d$ as digest).buf, undefined, undefined), (d$ as digest).tail);
		;(d$ as digest).tail = $.goSlice((d$ as digest).buf, undefined, nn)

		return [n, null]
	}

	public Size(): any {
		return $.pointerValue<Exclude<bmixer | null, null>>(this.bmixer).Size()
	}

	public bmix(p: any): any {
		return $.pointerValue<Exclude<bmixer | null, null>>(this.bmixer).bmix(p)
	}

	public reset(): any {
		return $.pointerValue<Exclude<bmixer | null, null>>(this.bmixer).reset()
	}

	static __typeInfo = $.registerStructType(
		"murmur3.digest",
		() => new digest(),
		() => [$.methodSignature("BlockSize", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("Reset", [], [], true), $.methodSignature("Write", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]], true), $.methodSignature("Size", [], [["n", /* @__PURE__ */ $.basicType("int")]]), $.methodSignature("bmix", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["tail", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]]), $.methodSignature("reset")],
		digest,
		() => [/* @__PURE__ */ $.structField("clen", /* @__PURE__ */ $.basicType("int"), [0], 0, false, { pkgPath: "github.com/twmb/murmur3" }), /* @__PURE__ */ $.structField("tail", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [1], 8, false, { pkgPath: "github.com/twmb/murmur3" }), /* @__PURE__ */ $.structField("buf", /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 16), [2], 32, false, { pkgPath: "github.com/twmb/murmur3" }), /* @__PURE__ */ $.structField("bmixer", "murmur3.bmixer", [3], 48, false, { pkgPath: "github.com/twmb/murmur3", anonymous: true })]
	)
}
