// Generated file based on sanitize.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bytes from "@goscript/bytes/index.js"
import "@goscript/bytes/index.js"

$.registerTypePackagePath("github.com/uber-go/tally", ["tally.SanitizeFn", "tally.SanitizeRange", "tally.ValidCharacters", "tally.SanitizeOptions", "tally.Sanitizer", "tally.sanitizer"])

export type SanitizeFn = ((_p0: string) => string | globalThis.Promise<string>) | null

export type SanitizeRange = number[]

$.registerNamedType("tally.SanitizeRange", /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("int32"), 2));

export type Sanitizer = {
	Key(k: string): string | globalThis.Promise<string>
	Name(n: string): string | globalThis.Promise<string>
	Value(v: string): string | globalThis.Promise<string>
}

$.registerInterfaceType(
	"tally.Sanitizer",
	null,
	[{ name: "Key", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("string") }] }, { name: "Name", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("string") }] }, { name: "Value", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("string") }] }]
);

export class ValidCharacters {
	public get Ranges(): $.Slice<SanitizeRange> {
		return this._fields.Ranges
	}

	public set Ranges(value: $.Slice<SanitizeRange>) {
		this._fields.Ranges = value
	}

	public get Characters(): $.Slice<number> {
		return this._fields.Characters
	}

	public set Characters(value: $.Slice<number>) {
		this._fields.Characters = value
	}

	public _fields: {
		Ranges: $.Slice<SanitizeRange>
		Characters: $.Slice<number>
	}

	constructor(init?: Partial<{Ranges?: $.Slice<SanitizeRange>, Characters?: $.Slice<number>}>, __goscriptValue?: boolean) {
		this._fields = {
			Ranges: init?.Ranges ?? (null! as $.Slice<SanitizeRange>),
			Characters: init?.Characters ?? (null! as $.Slice<number>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ValidCharacters {
		return new ValidCharacters(this, true)
	}

	public __goscriptAssign(source: ValidCharacters): void {
		const target = this._fields
		const values = source._fields
		target.Ranges = values.Ranges
		target.Characters = values.Characters
	}

	public sanitizeFn(repChar: number): SanitizeFn | null {
		const c: ValidCharacters | $.VarRef<ValidCharacters> | null = this;
		const c$: ValidCharacters = c == null ? $.pointerTarget<ValidCharacters>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<ValidCharacters>(c)
		return $.functionValue((value: string): string => {
			let buf: bytes.Buffer | $.VarRef<bytes.Buffer> | null = null! as bytes.Buffer | $.VarRef<bytes.Buffer> | null
			for (let __goscriptRunes0 = $.stringRunes(value); __goscriptRunes0.next(); ) {
				const idx = __goscriptRunes0.index
				const ch = __goscriptRunes0.rune
				// first check if the provided character is valid
				let validCurr = false
				for (let i = 0; !validCurr && (i < $.sliceLen((c$ as ValidCharacters).Ranges)); i++) {
					if ((ch >= $.arrayIndex($.arrayIndex((c$ as ValidCharacters).Ranges!, i), 0)) && (ch <= $.arrayIndex($.arrayIndex((c$ as ValidCharacters).Ranges!, i), 1))) {
						validCurr = true
						break
					}
				}
				for (let i = 0; !validCurr && (i < $.sliceLen((c$ as ValidCharacters).Characters)); i++) {
					if ($.arrayIndex((c$ as ValidCharacters).Characters!, i) == ch) {
						validCurr = true
						break
					}
				}

				// if it's valid, we can optimise allocations by avoiding copying
				if (validCurr) {
					if (buf == null) {
						continue
					}
					bytes.Buffer.prototype.WriteRune.call($.pointerValue<bytes.Buffer>(buf), ch)
					continue
				}

				// ie the character is invalid, and the buffer has not been initialised
				// so we initialise buffer and backfill
				if (buf == null) {
					buf = bytes.NewBuffer($.makeSlice<number>(0, $.stringLen(value), "byte"))
					if (idx > 0) {
						bytes.Buffer.prototype.WriteString.call($.pointerValue<bytes.Buffer>(buf), $.sliceStringOrBytes(value, undefined, idx))
					}
				}

				// write the replacement character
				bytes.Buffer.prototype.WriteRune.call($.pointerValue<bytes.Buffer>(buf), repChar)
			}

			// return input un-touched if the buffer has been not initialised
			if (buf == null) {
				return value
			}

			// otherwise, return the newly constructed buffer
			return bytes.Buffer.prototype.String.call($.pointerValue<bytes.Buffer>(buf))
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("string")], results: [/* @__PURE__ */ $.basicType("string")] } as $.FunctionTypeInfo))
	}

	static __typeInfo = $.registerStructType(
		"tally.ValidCharacters",
		() => new ValidCharacters(),
		() => [{ name: "sanitizeFn", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: ({ kind: $.TypeKind.Function, name: "tally.SanitizeFn", params: [/* @__PURE__ */ $.basicType("string")], results: [/* @__PURE__ */ $.basicType("string")] } as $.FunctionTypeInfo) }], pointerReceiver: true }],
		ValidCharacters,
		() => [{ name: "Ranges", key: "Ranges", type: /* @__PURE__ */ $.sliceType("tally.SanitizeRange") }, { name: "Characters", key: "Characters", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int32")) }]
	)
}

export class SanitizeOptions {
	public get NameCharacters(): ValidCharacters {
		return this._fields.NameCharacters
	}

	public set NameCharacters(value: ValidCharacters) {
		this._fields.NameCharacters = value
	}

	public get KeyCharacters(): ValidCharacters {
		return this._fields.KeyCharacters
	}

	public set KeyCharacters(value: ValidCharacters) {
		this._fields.KeyCharacters = value
	}

	public get ValueCharacters(): ValidCharacters {
		return this._fields.ValueCharacters
	}

	public set ValueCharacters(value: ValidCharacters) {
		this._fields.ValueCharacters = value
	}

	public get ReplacementCharacter(): number {
		return this._fields.ReplacementCharacter
	}

	public set ReplacementCharacter(value: number) {
		this._fields.ReplacementCharacter = value
	}

	public _fields: {
		NameCharacters: ValidCharacters
		KeyCharacters: ValidCharacters
		ValueCharacters: ValidCharacters
		ReplacementCharacter: number
	}

	constructor(init?: Partial<{NameCharacters?: ValidCharacters, KeyCharacters?: ValidCharacters, ValueCharacters?: ValidCharacters, ReplacementCharacter?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			NameCharacters: init?.NameCharacters ? init.NameCharacters.clone() : new ValidCharacters(undefined, true),
			KeyCharacters: init?.KeyCharacters ? init.KeyCharacters.clone() : new ValidCharacters(undefined, true),
			ValueCharacters: init?.ValueCharacters ? init.ValueCharacters.clone() : new ValidCharacters(undefined, true),
			ReplacementCharacter: init?.ReplacementCharacter ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): SanitizeOptions {
		return new SanitizeOptions(this, true)
	}

	public __goscriptAssign(source: SanitizeOptions): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.NameCharacters, values.NameCharacters)
		$.assignStruct(target.KeyCharacters, values.KeyCharacters)
		$.assignStruct(target.ValueCharacters, values.ValueCharacters)
		target.ReplacementCharacter = values.ReplacementCharacter
	}

	static __typeInfo = $.registerStructType(
		"tally.SanitizeOptions",
		() => new SanitizeOptions(),
		() => [],
		SanitizeOptions,
		() => [{ name: "NameCharacters", key: "NameCharacters", type: "tally.ValidCharacters" }, { name: "KeyCharacters", key: "KeyCharacters", type: "tally.ValidCharacters" }, { name: "ValueCharacters", key: "ValueCharacters", type: "tally.ValidCharacters" }, { name: "ReplacementCharacter", key: "ReplacementCharacter", type: /* @__PURE__ */ $.basicType("int32") }]
	)
}

export class sanitizer {
	public get nameFn(): ((_p0: string) => string | globalThis.Promise<string>) | null {
		return this._fields.nameFn
	}

	public set nameFn(value: ((_p0: string) => string | globalThis.Promise<string>) | null) {
		this._fields.nameFn = value
	}

	public get keyFn(): ((_p0: string) => string | globalThis.Promise<string>) | null {
		return this._fields.keyFn
	}

	public set keyFn(value: ((_p0: string) => string | globalThis.Promise<string>) | null) {
		this._fields.keyFn = value
	}

	public get valueFn(): ((_p0: string) => string | globalThis.Promise<string>) | null {
		return this._fields.valueFn
	}

	public set valueFn(value: ((_p0: string) => string | globalThis.Promise<string>) | null) {
		this._fields.valueFn = value
	}

	public _fields: {
		nameFn: ((_p0: string) => string | globalThis.Promise<string>) | null
		keyFn: ((_p0: string) => string | globalThis.Promise<string>) | null
		valueFn: ((_p0: string) => string | globalThis.Promise<string>) | null
	}

	constructor(init?: Partial<{nameFn?: ((_p0: string) => string | globalThis.Promise<string>) | null, keyFn?: ((_p0: string) => string | globalThis.Promise<string>) | null, valueFn?: ((_p0: string) => string | globalThis.Promise<string>) | null}>, __goscriptValue?: boolean) {
		this._fields = {
			nameFn: init?.nameFn ?? (null! as ((_p0: string) => string | globalThis.Promise<string>) | null),
			keyFn: init?.keyFn ?? (null! as ((_p0: string) => string | globalThis.Promise<string>) | null),
			valueFn: init?.valueFn ?? (null! as ((_p0: string) => string | globalThis.Promise<string>) | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): sanitizer {
		return new sanitizer(this, true)
	}

	public __goscriptAssign(source: sanitizer): void {
		const target = this._fields
		const values = source._fields
		target.nameFn = values.nameFn
		target.keyFn = values.keyFn
		target.valueFn = values.valueFn
	}

	public async Key(k: string): globalThis.Promise<string> {
		const s = this;
		return s.keyFn!(k)
	}

	public async Name(n: string): globalThis.Promise<string> {
		const s = this;
		return s.nameFn!(n)
	}

	public async Value(v: string): globalThis.Promise<string> {
		const s = this;
		return s.valueFn!(v)
	}

	static __typeInfo = $.registerStructType(
		"tally.sanitizer",
		() => new sanitizer(),
		() => [{ name: "Key", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("string") }] }, { name: "Name", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("string") }] }, { name: "Value", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("string") }] }],
		sanitizer,
		() => [{ name: "nameFn", key: "nameFn", type: ({ kind: $.TypeKind.Function, name: "tally.SanitizeFn", params: [/* @__PURE__ */ $.basicType("string")], results: [/* @__PURE__ */ $.basicType("string")] } as $.FunctionTypeInfo) }, { name: "keyFn", key: "keyFn", type: ({ kind: $.TypeKind.Function, name: "tally.SanitizeFn", params: [/* @__PURE__ */ $.basicType("string")], results: [/* @__PURE__ */ $.basicType("string")] } as $.FunctionTypeInfo) }, { name: "valueFn", key: "valueFn", type: ({ kind: $.TypeKind.Function, name: "tally.SanitizeFn", params: [/* @__PURE__ */ $.basicType("string")], results: [/* @__PURE__ */ $.basicType("string")] } as $.FunctionTypeInfo) }]
	)
}

export let DefaultReplacementCharacter: number = 95

export function __goscript_set_DefaultReplacementCharacter(__goscriptValue: number): void {
	DefaultReplacementCharacter = __goscriptValue
}

export let AlphanumericRange: $.Slice<SanitizeRange> = $.arrayToSlice<SanitizeRange>([$.arrayValue([97, 122]), $.arrayValue([65, 90]), $.arrayValue([48, 57])])

export function __goscript_set_AlphanumericRange(__goscriptValue: $.Slice<SanitizeRange>): void {
	AlphanumericRange = __goscriptValue
}

export let UnderscoreCharacters: $.Slice<number> = $.arrayToSlice<number>([95])

export function __goscript_set_UnderscoreCharacters(__goscriptValue: $.Slice<number>): void {
	UnderscoreCharacters = __goscriptValue
}

export let UnderscoreDashCharacters: $.Slice<number> = $.arrayToSlice<number>([45, 95])

export function __goscript_set_UnderscoreDashCharacters(__goscriptValue: $.Slice<number>): void {
	UnderscoreDashCharacters = __goscriptValue
}

export let UnderscoreDashDotCharacters: $.Slice<number> = $.arrayToSlice<number>([46, 45, 95])

export function __goscript_set_UnderscoreDashDotCharacters(__goscriptValue: $.Slice<number>): void {
	UnderscoreDashDotCharacters = __goscriptValue
}

export function NewSanitizer(opts: SanitizeOptions): Sanitizer | null {
	return $.interfaceValue<Sanitizer | null>((() => { const __goscriptLiteralField0 = opts.NameCharacters.sanitizeFn(opts.ReplacementCharacter); const __goscriptLiteralField1 = opts.KeyCharacters.sanitizeFn(opts.ReplacementCharacter); const __goscriptLiteralField2 = opts.ValueCharacters.sanitizeFn(opts.ReplacementCharacter); return new sanitizer({nameFn: __goscriptLiteralField0, keyFn: __goscriptLiteralField1, valueFn: __goscriptLiteralField2}, true) })(), "tally.sanitizer", "tally.sanitizer")
}

export function NoOpSanitizeFn(v: string): string {
	return v
}

export function NewNoOpSanitizer(): Sanitizer | null {
	return $.interfaceValue<Sanitizer | null>(new sanitizer({nameFn: NoOpSanitizeFn, keyFn: NoOpSanitizeFn, valueFn: NoOpSanitizeFn}, true), "tally.sanitizer", "tally.sanitizer")
}

var __goscriptAwait: any
