// Generated file based on unsafe.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as unsafe from "@goscript/unsafe/index.js"
import "@goscript/reflect/index.js"
import "@goscript/unsafe/index.js"

export function unsafeStringToBytes(__goscriptParam0: string): $.Slice<number> {
	let s: $.VarRef<string> = $.varRef(__goscriptParam0)
	let p = ($.unsafePointerRef<reflect.StringHeader>((s as any)).value.Data as any)

	let b: $.VarRef<$.Slice<number>> = $.varRef(null! as $.Slice<number>)
	let hdr: reflect.SliceHeader | $.VarRef<reflect.SliceHeader> | null = $.unsafePointerCast<reflect.SliceHeader | $.VarRef<reflect.SliceHeader> | null>($.sliceHeaderRef(b))
	let hdr$: reflect.SliceHeader = hdr == null ? $.pointerTarget<reflect.SliceHeader>(hdr) : (hdr as any).__isVarRef === true ? (hdr as any).value : (hdr as any).__goValue === undefined ? (hdr as any) : $.pointerTarget<reflect.SliceHeader>(hdr);
	;(hdr$ as reflect.SliceHeader).Data = (p as any);
	;(hdr$ as reflect.SliceHeader).Cap = $.stringLen(s.value);
	;(hdr$ as reflect.SliceHeader).Len = $.stringLen(s.value)
	return b.value
}

export function unsafeBytesToString(__goscriptParam1: $.Slice<number>): string {
	let b: $.VarRef<$.Slice<number>> = $.varRef(__goscriptParam1)
	return $.bytesToString(b.value)
}
