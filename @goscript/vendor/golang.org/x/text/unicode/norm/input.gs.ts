// Generated file based on input.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as utf8 from "@goscript/unicode/utf8/index.js"

import * as __goscript_composition from "./composition.gs.ts"

import * as __goscript_tables17_0_0 from "./tables17.0.0.gs.ts"

import * as __goscript_trie from "./trie.gs.ts"
import "@goscript/unicode/utf8/index.js"
import "./composition.gs.ts"
import "./tables17.0.0.gs.ts"
import "./trie.gs.ts"

$.registerTypePackagePath("vendor/golang.org/x/text/unicode/norm", ["norm.input"])

export class input {
	public get str(): string {
		return this._fields.str
	}

	public set str(value: string) {
		this._fields.str = value
	}

	public get bytes(): $.Slice<number> {
		return this._fields.bytes
	}

	public set bytes(value: $.Slice<number>) {
		this._fields.bytes = value
	}

	public _fields: {
		str: string
		bytes: $.Slice<number>
	}

	constructor(init?: Partial<{str?: string, bytes?: $.Slice<number>}>, __goscriptValue?: boolean) {
		this._fields = {
			str: init?.str ?? ("" as string),
			bytes: init?.bytes ?? (null! as $.Slice<number>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): input {
		return new input(this, true)
	}

	public __goscriptAssign(source: input): void {
		const target = this._fields
		const values = source._fields
		target.str = values.str
		target.bytes = values.bytes
	}

	public _byte(p: number): number {
		const _in: input | $.VarRef<input> | null = this;
		const _in$: input = _in == null ? $.pointerTarget<input>(_in) : (_in as any).__isVarRef === true ? (_in as any).value : (_in as any).__goValue === undefined ? (_in as any) : $.pointerTarget<input>(_in)
		if ((_in$ as input).bytes == null) {
			return $.indexString((_in$ as input).str, p)
		}
		return $.arrayIndex((_in$ as input).bytes!, p)
	}

	public appendSlice(buf: $.Slice<number>, b: number, e: number): $.Slice<number> {
		const _in: input | $.VarRef<input> | null = this;
		const _in$: input = _in == null ? $.pointerTarget<input>(_in) : (_in as any).__isVarRef === true ? (_in as any).value : (_in as any).__goValue === undefined ? (_in as any) : $.pointerTarget<input>(_in)
		if ((_in$ as input).bytes != null) {
			return $.appendSlice(buf, $.goSlice((_in$ as input).bytes, b, e), $.byteSliceHint)
		}
		for (let i = b; i < e; i++) {
			buf = $.append(buf, $.uint($.indexString((_in$ as input).str, i), 8), $.byteSliceHint)
		}
		return buf
	}

	public charinfoNFC(p: number): [number, number] {
		const _in: input | $.VarRef<input> | null = this;
		const _in$: input = _in == null ? $.pointerTarget<input>(_in) : (_in as any).__isVarRef === true ? (_in as any).value : (_in as any).__goValue === undefined ? (_in as any) : $.pointerTarget<input>(_in)
		if ((_in$ as input).bytes == null) {
			return __goscript_tables17_0_0.nfcTrie.prototype.lookupString.call(__goscript_trie.__goscript_get_nfcData(), $.sliceStringOrBytes((_in$ as input).str, p, undefined))
		}
		return __goscript_tables17_0_0.nfcTrie.prototype.lookup.call(__goscript_trie.__goscript_get_nfcData(), $.goSlice((_in$ as input).bytes, p, undefined))
	}

	public charinfoNFKC(p: number): [number, number] {
		const _in: input | $.VarRef<input> | null = this;
		const _in$: input = _in == null ? $.pointerTarget<input>(_in) : (_in as any).__isVarRef === true ? (_in as any).value : (_in as any).__goValue === undefined ? (_in as any) : $.pointerTarget<input>(_in)
		if ((_in$ as input).bytes == null) {
			return __goscript_tables17_0_0.nfkcTrie.prototype.lookupString.call(__goscript_trie.__goscript_get_nfkcData(), $.sliceStringOrBytes((_in$ as input).str, p, undefined))
		}
		return __goscript_tables17_0_0.nfkcTrie.prototype.lookup.call(__goscript_trie.__goscript_get_nfkcData(), $.goSlice((_in$ as input).bytes, p, undefined))
	}

	public copySlice(buf: $.Slice<number>, b: number, e: number): number {
		const _in: input | $.VarRef<input> | null = this;
		const _in$: input = _in == null ? $.pointerTarget<input>(_in) : (_in as any).__isVarRef === true ? (_in as any).value : (_in as any).__goValue === undefined ? (_in as any) : $.pointerTarget<input>(_in)
		if ((_in$ as input).bytes == null) {
			return $.copy(buf, $.sliceStringOrBytes((_in$ as input).str, b, e))
		}
		return $.copy(buf, $.goSlice((_in$ as input).bytes, b, e))
	}

	public hangul(p: number): number {
		const _in: input | $.VarRef<input> | null = this;
		let r: number = 0
		const _in$: input = _in == null ? $.pointerTarget<input>(_in) : (_in as any).__isVarRef === true ? (_in as any).value : (_in as any).__goValue === undefined ? (_in as any) : $.pointerTarget<input>(_in)
		let size: number = 0
		if ((_in$ as input).bytes == null) {
			if (!__goscript_composition.isHangulString($.sliceStringOrBytes((_in$ as input).str, p, undefined))) {
				return 0
			}
			let __goscriptTuple0: any = utf8.DecodeRuneInString($.sliceStringOrBytes((_in$ as input).str, p, undefined))
			r = __goscriptTuple0[0]
			size = __goscriptTuple0[1]
		} else {
			if (!__goscript_composition.isHangul($.goSlice((_in$ as input).bytes, p, undefined))) {
				return 0
			}
			let __goscriptTuple1: any = utf8.DecodeRune($.goSlice((_in$ as input).bytes, p, undefined))
			r = __goscriptTuple1[0]
			size = __goscriptTuple1[1]
		}
		if (size != 3) {
			return 0
		}
		return r
	}

	public setBytes(str: $.Slice<number>): void {
		let _in: input | $.VarRef<input> | null = this;
		const _in$: input = _in == null ? $.pointerTarget<input>(_in) : (_in as any).__isVarRef === true ? (_in as any).value : (_in as any).__goValue === undefined ? (_in as any) : $.pointerTarget<input>(_in);
		;(_in$ as input).str = "";
		;(_in$ as input).bytes = str
	}

	public setString(str: string): void {
		let _in: input | $.VarRef<input> | null = this;
		const _in$: input = _in == null ? $.pointerTarget<input>(_in) : (_in as any).__isVarRef === true ? (_in as any).value : (_in as any).__goValue === undefined ? (_in as any) : $.pointerTarget<input>(_in);
		;(_in$ as input).str = str;
		;(_in$ as input).bytes = null
	}

	public skipASCII(p: number, max: number): number {
		const _in: input | $.VarRef<input> | null = this;
		const _in$: input = _in == null ? $.pointerTarget<input>(_in) : (_in as any).__isVarRef === true ? (_in as any).value : (_in as any).__goValue === undefined ? (_in as any) : $.pointerTarget<input>(_in)
		if ((_in$ as input).bytes == null) {
			for (; (p < max) && ($.indexString((_in$ as input).str, p) < 128); p++) {
			}
		} else {
			for (; (p < max) && ($.arrayIndex((_in$ as input).bytes!, p) < 128); p++) {
			}
		}
		return p
	}

	public skipContinuationBytes(p: number): number {
		const _in: input | $.VarRef<input> | null = this;
		const _in$: input = _in == null ? $.pointerTarget<input>(_in) : (_in as any).__isVarRef === true ? (_in as any).value : (_in as any).__goValue === undefined ? (_in as any) : $.pointerTarget<input>(_in)
		if ((_in$ as input).bytes == null) {
			for (; (p < $.stringLen((_in$ as input).str)) && !utf8.RuneStart($.indexString((_in$ as input).str, p)); p++) {
			}
		} else {
			for (; (p < $.sliceLen((_in$ as input).bytes)) && !utf8.RuneStart($.arrayIndex((_in$ as input).bytes!, p)); p++) {
			}
		}
		return p
	}

	static __typeInfo = $.registerStructType(
		"norm.input",
		() => new input(),
		() => [$.methodSignature("_byte", [["p", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("uint8")], true), $.methodSignature("appendSlice", [["buf", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["b", /* @__PURE__ */ $.basicType("int")], ["e", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true), $.methodSignature("charinfoNFC", [["p", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("uint16"), /* @__PURE__ */ $.basicType("int")], true), $.methodSignature("charinfoNFKC", [["p", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("uint16"), /* @__PURE__ */ $.basicType("int")], true), $.methodSignature("copySlice", [["buf", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["b", /* @__PURE__ */ $.basicType("int")], ["e", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("hangul", [["p", /* @__PURE__ */ $.basicType("int")]], [["r", /* @__PURE__ */ $.basicType("int32")]], true), $.methodSignature("setBytes", [["str", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [], true), $.methodSignature("setString", [["str", /* @__PURE__ */ $.basicType("string")]], [], true), $.methodSignature("skipASCII", [["p", /* @__PURE__ */ $.basicType("int")], ["max", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("skipContinuationBytes", [["p", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("int")], true)],
		input,
		() => [/* @__PURE__ */ $.structField("str", /* @__PURE__ */ $.basicType("string"), [0], 0, false, { pkgPath: "vendor/golang.org/x/text/unicode/norm" }), /* @__PURE__ */ $.structField("bytes", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [1], 16, false, { pkgPath: "vendor/golang.org/x/text/unicode/norm" })]
	)
}

export function inputBytes(str: $.Slice<number>): input {
	return new input({bytes: str}, true)
}

export function inputString(str: string): input {
	return new input({str: str}, true)
}
