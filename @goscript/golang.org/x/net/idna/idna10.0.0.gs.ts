// Generated file based on idna10.0.0.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as strings from "@goscript/strings/index.js"

import * as utf8 from "@goscript/unicode/utf8/index.js"

import * as bidirule2 from "@goscript/golang.org/x/text/secure/bidirule/index.js"

import * as bidi2 from "@goscript/golang.org/x/text/unicode/bidi/index.js"

import * as norm from "@goscript/golang.org/x/text/unicode/norm/index.js"

import * as __goscript_go118 from "./go118.gs.ts"

import * as __goscript_punycode from "./punycode.gs.ts"

import * as __goscript_tables15_0_0 from "./tables15.0.0.gs.ts"

import * as __goscript_trie from "./trie.gs.ts"

import * as __goscript_trie13_0_0 from "./trie13.0.0.gs.ts"

import * as __goscript_trieval from "./trieval.gs.ts"
import "@goscript/fmt/index.js"
import "@goscript/strings/index.js"
import "@goscript/unicode/utf8/index.js"
import "@goscript/golang.org/x/text/secure/bidirule/index.js"
import "@goscript/golang.org/x/text/unicode/bidi/index.js"
import "@goscript/golang.org/x/text/unicode/norm/index.js"
import "./go118.gs.ts"
import "./punycode.gs.ts"
import "./tables15.0.0.gs.ts"
import "./trie.gs.ts"
import "./trie13.0.0.gs.ts"
import "./trieval.gs.ts"

$.registerTypePackagePath("golang.org/x/net/idna", ["idna.Option", "idna.options", "idna.Profile", "idna.labelError", "idna.runeError", "idna.labelIter", "idna.joinState"])

export type Option = ((_p0: options | $.VarRef<options> | null) => void) | null

export type runeError = number

$.registerNamedValueType(
	"idna.runeError",
	{Error: (receiver: any, ...args: any[]) => (runeError_Error as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), code: (receiver: any, ...args: any[]) => (runeError_code as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("code", [], [/* @__PURE__ */ $.basicType("string")])]
);

$.registerNamedValueType(
	"*idna.runeError",
	{Error: (receiver: any, ...args: any[]) => (runeError_Error as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), code: (receiver: any, ...args: any[]) => (runeError_code as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("code", [], [/* @__PURE__ */ $.basicType("string")])]
);

export type joinState = number

export class options {
	public get transitional(): boolean {
		return this._fields.transitional
	}

	public set transitional(value: boolean) {
		this._fields.transitional = value
	}

	public get useSTD3Rules(): boolean {
		return this._fields.useSTD3Rules
	}

	public set useSTD3Rules(value: boolean) {
		this._fields.useSTD3Rules = value
	}

	public get checkHyphens(): boolean {
		return this._fields.checkHyphens
	}

	public set checkHyphens(value: boolean) {
		this._fields.checkHyphens = value
	}

	public get checkJoiners(): boolean {
		return this._fields.checkJoiners
	}

	public set checkJoiners(value: boolean) {
		this._fields.checkJoiners = value
	}

	public get verifyDNSLength(): boolean {
		return this._fields.verifyDNSLength
	}

	public set verifyDNSLength(value: boolean) {
		this._fields.verifyDNSLength = value
	}

	public get removeLeadingDots(): boolean {
		return this._fields.removeLeadingDots
	}

	public set removeLeadingDots(value: boolean) {
		this._fields.removeLeadingDots = value
	}

	public get trie(): __goscript_tables15_0_0.idnaTrie | $.VarRef<__goscript_tables15_0_0.idnaTrie> | null {
		return this._fields.trie
	}

	public set trie(value: __goscript_tables15_0_0.idnaTrie | $.VarRef<__goscript_tables15_0_0.idnaTrie> | null) {
		this._fields.trie = value
	}

	// fromPuny calls validation rules when converting A-labels to U-labels.
	public get fromPuny(): ((p: Profile | $.VarRef<Profile> | null, s: string) => $.GoError | globalThis.Promise<$.GoError>) | null {
		return this._fields.fromPuny
	}

	public set fromPuny(value: ((p: Profile | $.VarRef<Profile> | null, s: string) => $.GoError | globalThis.Promise<$.GoError>) | null) {
		this._fields.fromPuny = value
	}

	// mapping implements a validation and mapping step as defined in RFC 5895
	// or UTS 46, tailored to, for example, domain registration or lookup.
	public get mapping(): ((p: Profile | $.VarRef<Profile> | null, s: string) => [string, boolean, $.GoError] | globalThis.Promise<[string, boolean, $.GoError]>) | null {
		return this._fields.mapping
	}

	public set mapping(value: ((p: Profile | $.VarRef<Profile> | null, s: string) => [string, boolean, $.GoError] | globalThis.Promise<[string, boolean, $.GoError]>) | null) {
		this._fields.mapping = value
	}

	// bidirule, if specified, checks whether s conforms to the Bidi Rule
	// defined in RFC 5893.
	public get bidirule(): ((s: string) => boolean | globalThis.Promise<boolean>) | null {
		return this._fields.bidirule
	}

	public set bidirule(value: ((s: string) => boolean | globalThis.Promise<boolean>) | null) {
		this._fields.bidirule = value
	}

	public _fields: {
		transitional: boolean
		useSTD3Rules: boolean
		checkHyphens: boolean
		checkJoiners: boolean
		verifyDNSLength: boolean
		removeLeadingDots: boolean
		trie: __goscript_tables15_0_0.idnaTrie | $.VarRef<__goscript_tables15_0_0.idnaTrie> | null
		fromPuny: ((p: Profile | $.VarRef<Profile> | null, s: string) => $.GoError | globalThis.Promise<$.GoError>) | null
		mapping: ((p: Profile | $.VarRef<Profile> | null, s: string) => [string, boolean, $.GoError] | globalThis.Promise<[string, boolean, $.GoError]>) | null
		bidirule: ((s: string) => boolean | globalThis.Promise<boolean>) | null
	}

	constructor(init?: Partial<{transitional?: boolean, useSTD3Rules?: boolean, checkHyphens?: boolean, checkJoiners?: boolean, verifyDNSLength?: boolean, removeLeadingDots?: boolean, trie?: __goscript_tables15_0_0.idnaTrie | $.VarRef<__goscript_tables15_0_0.idnaTrie> | null, fromPuny?: ((p: Profile | $.VarRef<Profile> | null, s: string) => $.GoError | globalThis.Promise<$.GoError>) | null, mapping?: ((p: Profile | $.VarRef<Profile> | null, s: string) => [string, boolean, $.GoError] | globalThis.Promise<[string, boolean, $.GoError]>) | null, bidirule?: ((s: string) => boolean | globalThis.Promise<boolean>) | null}>, __goscriptValue?: boolean) {
		this._fields = {
			transitional: init?.transitional ?? (false as boolean),
			useSTD3Rules: init?.useSTD3Rules ?? (false as boolean),
			checkHyphens: init?.checkHyphens ?? (false as boolean),
			checkJoiners: init?.checkJoiners ?? (false as boolean),
			verifyDNSLength: init?.verifyDNSLength ?? (false as boolean),
			removeLeadingDots: init?.removeLeadingDots ?? (false as boolean),
			trie: init?.trie ?? (null! as __goscript_tables15_0_0.idnaTrie | $.VarRef<__goscript_tables15_0_0.idnaTrie> | null),
			fromPuny: init?.fromPuny ?? (null! as ((p: Profile | $.VarRef<Profile> | null, s: string) => $.GoError | globalThis.Promise<$.GoError>) | null),
			mapping: init?.mapping ?? (null! as ((p: Profile | $.VarRef<Profile> | null, s: string) => [string, boolean, $.GoError] | globalThis.Promise<[string, boolean, $.GoError]>) | null),
			bidirule: init?.bidirule ?? (null! as ((s: string) => boolean | globalThis.Promise<boolean>) | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): options {
		return new options(this, true)
	}

	public __goscriptAssign(source: options): void {
		const target = this._fields
		const values = source._fields
		target.transitional = values.transitional
		target.useSTD3Rules = values.useSTD3Rules
		target.checkHyphens = values.checkHyphens
		target.checkJoiners = values.checkJoiners
		target.verifyDNSLength = values.verifyDNSLength
		target.removeLeadingDots = values.removeLeadingDots
		target.trie = values.trie
		target.fromPuny = values.fromPuny
		target.mapping = values.mapping
		target.bidirule = values.bidirule
	}

	static __typeInfo = $.registerStructType(
		"idna.options",
		() => new options(),
		() => [],
		options,
		() => [/* @__PURE__ */ $.structField("transitional", /* @__PURE__ */ $.basicType("bool"), [0], 0, false, { pkgPath: "golang.org/x/net/idna" }), /* @__PURE__ */ $.structField("useSTD3Rules", /* @__PURE__ */ $.basicType("bool"), [1], 1, false, { pkgPath: "golang.org/x/net/idna" }), /* @__PURE__ */ $.structField("checkHyphens", /* @__PURE__ */ $.basicType("bool"), [2], 2, false, { pkgPath: "golang.org/x/net/idna" }), /* @__PURE__ */ $.structField("checkJoiners", /* @__PURE__ */ $.basicType("bool"), [3], 3, false, { pkgPath: "golang.org/x/net/idna" }), /* @__PURE__ */ $.structField("verifyDNSLength", /* @__PURE__ */ $.basicType("bool"), [4], 4, false, { pkgPath: "golang.org/x/net/idna" }), /* @__PURE__ */ $.structField("removeLeadingDots", /* @__PURE__ */ $.basicType("bool"), [5], 5, false, { pkgPath: "golang.org/x/net/idna" }), /* @__PURE__ */ $.structField("trie", /* @__PURE__ */ $.pointerType("idna.idnaTrie"), [6], 8, false, { pkgPath: "golang.org/x/net/idna" }), /* @__PURE__ */ $.structField("fromPuny", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("idna.Profile"), /* @__PURE__ */ $.basicType("string")], results: ["error"] } as $.FunctionTypeInfo), [7], 16, false, { pkgPath: "golang.org/x/net/idna" }), /* @__PURE__ */ $.structField("mapping", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("idna.Profile"), /* @__PURE__ */ $.basicType("string")], results: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("bool"), "error"] } as $.FunctionTypeInfo), [8], 24, false, { pkgPath: "golang.org/x/net/idna" }), /* @__PURE__ */ $.structField("bidirule", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("string")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo), [9], 32, false, { pkgPath: "golang.org/x/net/idna" })]
	)
}

export class Profile {
	public get options(): options {
		return this._fields.options
	}

	public set options(value: options) {
		this._fields.options = value
	}

	public _fields: {
		options: options
	}

	constructor(init?: Partial<{options?: options}>, __goscriptValue?: boolean) {
		this._fields = {
			options: init?.options ? init.options.clone() : new options(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Profile {
		return new Profile(this, true)
	}

	public __goscriptAssign(source: Profile): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.options, values.options)
	}

	public String(): string {
		const p: Profile | $.VarRef<Profile> | null = this;
		const p$: Profile = p == null ? $.pointerTarget<Profile>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<Profile>(p)
		let s = ""
		if ((p$ as Profile).options.transitional) {
			s = "Transitional"
		} else {
			s = "NonTransitional"
		}
		if ((p$ as Profile).options.useSTD3Rules) {
			s = $.concatString(s, ":UseSTD3Rules")
		}
		if ((p$ as Profile).options.checkHyphens) {
			s = $.concatString(s, ":CheckHyphens")
		}
		if ((p$ as Profile).options.checkJoiners) {
			s = $.concatString(s, ":CheckJoiners")
		}
		if ((p$ as Profile).options.verifyDNSLength) {
			s = $.concatString(s, ":VerifyDNSLength")
		}
		return s
	}

	public async ToASCII(s: string): globalThis.Promise<[string, $.GoError]> {
		const p: Profile | $.VarRef<Profile> | null = this;
		return (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as Profile).process(s, true) : Profile.prototype.process.call(p, s, true))
	}

	public async ToUnicode(s: string): globalThis.Promise<[string, $.GoError]> {
		const p: Profile | $.VarRef<Profile> | null = this;
		let pp = $.varRef(($.pointerValue<Profile>(p)).clone())
		pp.value.options.transitional = false
		return pp.value.process(s, false)
	}

	public async process(s: string, toASCII: boolean): globalThis.Promise<[string, $.GoError]> {
		const p: Profile | $.VarRef<Profile> | null = this;
		const p$: Profile = p == null ? $.pointerTarget<Profile>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<Profile>(p)
		let err: $.GoError = null! as $.GoError
		let isBidi: boolean = false
		if ((p$ as Profile).options.mapping != null) {
			let __goscriptTuple0: any = await (p$ as Profile).options.mapping!(p, s)
			s = __goscriptTuple0[0]
			isBidi = __goscriptTuple0[1]
			err = __goscriptTuple0[2]
		}
		// Remove leading empty labels.
		if ((p$ as Profile).options.removeLeadingDots) {
			for (; ($.stringLen(s) > 0) && ($.indexString(s, 0) == 46); s = $.sliceStringOrBytes(s, 1, undefined)) {
			}
		}
		// TODO: allow for a quick check of the tables data.
		// It seems like we should only create this error on ToASCII, but the
		// UTS 46 conformance tests suggests we should always check this.
		if (((err == null) && (p$ as Profile).options.verifyDNSLength) && ($.stringEqual(s, ""))) {
			err = $.interfaceValue<$.GoError>(new labelError({label: s, code_: "A4"}), "*idna.labelError", /* @__PURE__ */ $.pointerType("idna.labelError"))
		}
		let labels: $.VarRef<labelIter> = $.varRef(new labelIter({orig: s}, true))
		for (; !labels.value.done(); labels.value.next()) {
			let label = labels.value.label()
			if ($.stringEqual(label, "")) {
				// Empty labels are not okay. The label iterator skips the last
				// label if it is empty.
				if ((err == null) && (p$ as Profile).options.verifyDNSLength) {
					err = $.interfaceValue<$.GoError>(new labelError({label: s, code_: "A4"}), "*idna.labelError", /* @__PURE__ */ $.pointerType("idna.labelError"))
				}
				continue
			}
			if (strings.HasPrefix(label, "xn--")) {
				let [u, err2] = __goscript_punycode.decode($.sliceStringOrBytes(label, 4, undefined))
				if (err2 != null) {
					if (err == null) {
						err = err2
					}
					// Spec says keep the old label.
					continue
				}
				isBidi = isBidi || (bidirule2.DirectionString(u) != 0)
				labels.value.set(u)
				if ((err == null) && ((p$ as Profile).options.fromPuny != null)) {
					err = (__goscriptAwait = (p$ as Profile).options.fromPuny!(p, u), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				}
				if (err == null) {
					// This should be called on NonTransitional, according to the
					// spec, but that currently does not have any effect. Use the
					// original profile to preserve options.
					err = (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as Profile).validateLabel(u) : Profile.prototype.validateLabel.call(p, u))
				}
			} else {
				if (err == null) {
					err = (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as Profile).validateLabel(label) : Profile.prototype.validateLabel.call(p, label))
				}
			}
		}
		if ((isBidi && ((p$ as Profile).options.bidirule != null)) && (err == null)) {
			for (labels.value.reset(); !labels.value.done(); labels.value.next()) {
				if (!(__goscriptAwait = (p$ as Profile).options.bidirule!(labels.value.label()), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
					err = $.interfaceValue<$.GoError>(new labelError({label: s, code_: "B"}), "*idna.labelError", /* @__PURE__ */ $.pointerType("idna.labelError"))
					break
				}
			}
		}
		if (toASCII) {
			for (labels.value.reset(); !labels.value.done(); labels.value.next()) {
				let label = labels.value.label()
				if (!ascii(label)) {
					let [a, err2] = __goscript_punycode.encode("xn--", label)
					if (err == null) {
						err = err2
					}
					label = a
					labels.value.set(a)
				}
				let n = $.stringLen(label)
				if (((p$ as Profile).options.verifyDNSLength && (err == null)) && ((n == 0) || (n > 63))) {
					err = $.interfaceValue<$.GoError>(new labelError({label: label, code_: "A4"}), "*idna.labelError", /* @__PURE__ */ $.pointerType("idna.labelError"))
				}
			}
		}
		s = labels.value.result()
		if ((toASCII && (p$ as Profile).options.verifyDNSLength) && (err == null)) {
			// Compute the length of the domain name minus the root label and its dot.
			let n = $.stringLen(s)
			if ((n > 0) && ($.indexString(s, n - 1) == 46)) {
				n--
			}
			if (($.stringLen(s) < 1) || (n > 253)) {
				err = $.interfaceValue<$.GoError>(new labelError({label: s, code_: "A4"}), "*idna.labelError", /* @__PURE__ */ $.pointerType("idna.labelError"))
			}
		}
		return [s, err]
	}

	public simplify(cat: __goscript_trieval.category): __goscript_trieval.category {
		const p: Profile | $.VarRef<Profile> | null = this;
		const p$: Profile = p == null ? $.pointerTarget<Profile>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<Profile>(p)
		switch (cat) {
			case 2:
			{
				if ((p$ as Profile).options.useSTD3Rules) {
					cat = 64
				} else {
					cat = 1
				}
				break
			}
			case 128:
			{
				if ((p$ as Profile).options.useSTD3Rules) {
					cat = 64
				} else {
					cat = 8
				}
				break
			}
			case 3:
			{
				if (!(p$ as Profile).options.transitional) {
					cat = 8
				}
				break
			}
			case 24:
			case 40:
			{
				cat = 8
				break
			}
		}
		return cat
	}

	public validateLabel(s: string): $.GoError {
		const p: Profile | $.VarRef<Profile> | null = this;
		let err: $.GoError = null! as $.GoError
		const p$: Profile = p == null ? $.pointerTarget<Profile>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<Profile>(p)
		if ($.stringEqual(s, "")) {
			if ((p$ as Profile).options.verifyDNSLength) {
				return $.interfaceValue<$.GoError>(new labelError({label: s, code_: "A4"}), "*idna.labelError", /* @__PURE__ */ $.pointerType("idna.labelError"))
			}
			return null
		}
		if ((p$ as Profile).options.checkHyphens) {
			if ((($.stringLen(s) > 4) && ($.indexString(s, 2) == 45)) && ($.indexString(s, 3) == 45)) {
				return $.interfaceValue<$.GoError>(new labelError({label: s, code_: "V2"}), "*idna.labelError", /* @__PURE__ */ $.pointerType("idna.labelError"))
			}
			if (($.indexString(s, 0) == 45) || ($.indexString(s, $.stringLen(s) - 1) == 45)) {
				return $.interfaceValue<$.GoError>(new labelError({label: s, code_: "V3"}), "*idna.labelError", /* @__PURE__ */ $.pointerType("idna.labelError"))
			}
		}
		if (!(p$ as Profile).options.checkJoiners) {
			return null
		}
		let trie: __goscript_tables15_0_0.idnaTrie | $.VarRef<__goscript_tables15_0_0.idnaTrie> | null = (p$ as Profile).options.trie
		// TODO: merge the use of this in the trie.
		let [v, sz] = (trie !== null && (trie as any).__isVarRef !== true && (trie as any).__goValue === undefined ? ((trie as any) as __goscript_tables15_0_0.idnaTrie).lookupString(s) : __goscript_tables15_0_0.idnaTrie.prototype.lookupString.call(trie, s))
		let x = $.uint(v, 16)
		if (__goscript_trieval.info_isModifier(x)) {
			return $.interfaceValue<$.GoError>(new labelError({label: s, code_: "V5"}), "*idna.labelError", /* @__PURE__ */ $.pointerType("idna.labelError"))
		}
		// Quickly return in the absence of zero-width (non) joiners.
		if ((strings.Index(s, "\xe2\x80\x8d") == -1) && (strings.Index(s, "\xe2\x80\x8c") == -1)) {
			return null
		}
		let st = 0
		for (let i = 0; ; ) {
			let jt = __goscript_trieval.info_joinType(x)
			if ($.stringEqual($.sliceStringOrBytes(s, i, i + sz), "\xe2\x80\x8d")) {
				jt = 5
			} else {
				if ($.stringEqual($.sliceStringOrBytes(s, i, i + sz), "\xe2\x80\x8c")) {
					jt = 6
				}
			}
			st = $.arrayIndex($.arrayIndex(__goscript_get_joinStates()!, st), jt)
			if (__goscript_trieval.info_isViramaModifier(x)) {
				st = $.arrayIndex($.arrayIndex(__goscript_get_joinStates()!, st), 7)
			}
			{
				i = i + (sz)
				if (i == $.stringLen(s)) {
					break
				}
			}
			let __goscriptTuple1: any = (trie !== null && (trie as any).__isVarRef !== true && (trie as any).__goValue === undefined ? ((trie as any) as __goscript_tables15_0_0.idnaTrie).lookupString($.sliceStringOrBytes(s, i, undefined)) : __goscript_tables15_0_0.idnaTrie.prototype.lookupString.call(trie, $.sliceStringOrBytes(s, i, undefined)))
			v = __goscriptTuple1[0]
			sz = __goscriptTuple1[1]
			x = $.uint(v, 16)
		}
		if ((st == 5) || (st == 4)) {
			return $.interfaceValue<$.GoError>(new labelError({label: s, code_: "C"}), "*idna.labelError", /* @__PURE__ */ $.pointerType("idna.labelError"))
		}
		return null
	}

	static __typeInfo = $.registerStructType(
		"idna.Profile",
		() => new Profile(),
		() => [$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("ToASCII", [["s", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.basicType("string"), "error"], true), $.methodSignature("ToUnicode", [["s", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.basicType("string"), "error"], true), $.methodSignature("process", [["s", /* @__PURE__ */ $.basicType("string")], ["toASCII", /* @__PURE__ */ $.basicType("bool")]], [/* @__PURE__ */ $.basicType("string"), "error"], true), $.methodSignature("simplify", [["cat", /* @__PURE__ */ $.basicType("uint16", "idna.category")]], [/* @__PURE__ */ $.basicType("uint16", "idna.category")], true), $.methodSignature("validateLabel", [["s", /* @__PURE__ */ $.basicType("string")]], [["err", "error"]], true)],
		Profile,
		() => [/* @__PURE__ */ $.structField("options", "idna.options", [0], 0, false, { pkgPath: "golang.org/x/net/idna", anonymous: true })]
	)
}

export class labelError {
	public get label(): string {
		return this._fields.label
	}

	public set label(value: string) {
		this._fields.label = value
	}

	public get code_(): string {
		return this._fields.code_
	}

	public set code_(value: string) {
		this._fields.code_ = value
	}

	public _fields: {
		label: string
		code_: string
	}

	constructor(init?: Partial<{label?: string, code_?: string}>, __goscriptValue?: boolean) {
		this._fields = {
			label: init?.label ?? ("" as string),
			code_: init?.code_ ?? ("" as string)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): labelError {
		return new labelError(this, true)
	}

	public __goscriptAssign(source: labelError): void {
		const target = this._fields
		const values = source._fields
		target.label = values.label
		target.code_ = values.code_
	}

	public async Error(): globalThis.Promise<string> {
		const e = this;
		return fmt.Sprintf("idna: invalid label %q", e.label)
	}

	public code(): string {
		const e = this;
		return e.code_
	}

	static __typeInfo = $.registerStructType(
		"idna.labelError",
		() => new labelError(),
		() => [$.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("code", [], [/* @__PURE__ */ $.basicType("string")])],
		labelError,
		() => [/* @__PURE__ */ $.structField("label", /* @__PURE__ */ $.basicType("string"), [0], 0, false, { pkgPath: "golang.org/x/net/idna" }), /* @__PURE__ */ $.structField("code_", /* @__PURE__ */ $.basicType("string"), [1], 16, false, { pkgPath: "golang.org/x/net/idna" })]
	)
}

export class labelIter {
	public get orig(): string {
		return this._fields.orig
	}

	public set orig(value: string) {
		this._fields.orig = value
	}

	public get slice(): $.Slice<string> {
		return this._fields.slice
	}

	public set slice(value: $.Slice<string>) {
		this._fields.slice = value
	}

	public get curStart(): number {
		return this._fields.curStart
	}

	public set curStart(value: number) {
		this._fields.curStart = value
	}

	public get curEnd(): number {
		return this._fields.curEnd
	}

	public set curEnd(value: number) {
		this._fields.curEnd = value
	}

	public get i(): number {
		return this._fields.i
	}

	public set i(value: number) {
		this._fields.i = value
	}

	public _fields: {
		orig: string
		slice: $.Slice<string>
		curStart: number
		curEnd: number
		i: number
	}

	constructor(init?: Partial<{orig?: string, slice?: $.Slice<string>, curStart?: number, curEnd?: number, i?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			orig: init?.orig ?? ("" as string),
			slice: init?.slice ?? (null! as $.Slice<string>),
			curStart: init?.curStart ?? (0 as number),
			curEnd: init?.curEnd ?? (0 as number),
			i: init?.i ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): labelIter {
		return new labelIter(this, true)
	}

	public __goscriptAssign(source: labelIter): void {
		const target = this._fields
		const values = source._fields
		target.orig = values.orig
		target.slice = values.slice
		target.curStart = values.curStart
		target.curEnd = values.curEnd
		target.i = values.i
	}

	public done(): boolean {
		const l: labelIter | $.VarRef<labelIter> | null = this;
		const l$: labelIter = l == null ? $.pointerTarget<labelIter>(l) : (l as any).__isVarRef === true ? (l as any).value : (l as any).__goValue === undefined ? (l as any) : $.pointerTarget<labelIter>(l)
		return (l$ as labelIter).curStart >= $.stringLen((l$ as labelIter).orig)
	}

	public label(): string {
		let l: labelIter | $.VarRef<labelIter> | null = this;
		const l$: labelIter = l == null ? $.pointerTarget<labelIter>(l) : (l as any).__isVarRef === true ? (l as any).value : (l as any).__goValue === undefined ? (l as any) : $.pointerTarget<labelIter>(l)
		if ((l$ as labelIter).slice != null) {
			return $.arrayIndex((l$ as labelIter).slice!, (l$ as labelIter).i)
		}
		let p = strings.IndexByte($.sliceStringOrBytes((l$ as labelIter).orig, (l$ as labelIter).curStart, undefined), 46);
		;(l$ as labelIter).curEnd = (l$ as labelIter).curStart + p
		if (p == -1) {
			;(l$ as labelIter).curEnd = $.stringLen((l$ as labelIter).orig)
		}
		return $.sliceStringOrBytes((l$ as labelIter).orig, (l$ as labelIter).curStart, (l$ as labelIter).curEnd)
	}

	public next(): void {
		let l: labelIter | $.VarRef<labelIter> | null = this;
		const l$: labelIter = l == null ? $.pointerTarget<labelIter>(l) : (l as any).__isVarRef === true ? (l as any).value : (l as any).__goValue === undefined ? (l as any) : $.pointerTarget<labelIter>(l);
		;(l$ as labelIter).i++
		if ((l$ as labelIter).slice != null) {
			if (((l$ as labelIter).i >= $.sliceLen((l$ as labelIter).slice)) || (((l$ as labelIter).i == ($.sliceLen((l$ as labelIter).slice) - 1)) && ($.stringEqual($.arrayIndex((l$ as labelIter).slice!, (l$ as labelIter).i), "")))) {
				;(l$ as labelIter).curStart = $.stringLen((l$ as labelIter).orig)
			}
		} else {
			;(l$ as labelIter).curStart = (l$ as labelIter).curEnd + 1
			if (((l$ as labelIter).curStart == ($.stringLen((l$ as labelIter).orig) - 1)) && ($.indexString((l$ as labelIter).orig, (l$ as labelIter).curStart) == 46)) {
				;(l$ as labelIter).curStart = $.stringLen((l$ as labelIter).orig)
			}
		}
	}

	public reset(): void {
		let l: labelIter | $.VarRef<labelIter> | null = this;
		const l$: labelIter = l == null ? $.pointerTarget<labelIter>(l) : (l as any).__isVarRef === true ? (l as any).value : (l as any).__goValue === undefined ? (l as any) : $.pointerTarget<labelIter>(l);
		;(l$ as labelIter).curStart = 0;
		;(l$ as labelIter).curEnd = 0;
		;(l$ as labelIter).i = 0
	}

	public result(): string {
		const l: labelIter | $.VarRef<labelIter> | null = this;
		const l$: labelIter = l == null ? $.pointerTarget<labelIter>(l) : (l as any).__isVarRef === true ? (l as any).value : (l as any).__goValue === undefined ? (l as any) : $.pointerTarget<labelIter>(l)
		if ((l$ as labelIter).slice != null) {
			return strings.Join((l$ as labelIter).slice, ".")
		}
		return (l$ as labelIter).orig
	}

	public ["set"](s: string): void {
		let l: labelIter | $.VarRef<labelIter> | null = this;
		const l$: labelIter = l == null ? $.pointerTarget<labelIter>(l) : (l as any).__isVarRef === true ? (l as any).value : (l as any).__goValue === undefined ? (l as any) : $.pointerTarget<labelIter>(l)
		if ((l$ as labelIter).slice == null) {
			;(l$ as labelIter).slice = strings.Split((l$ as labelIter).orig, ".")
		}
		$.sliceElems((l$ as labelIter).slice!)[$.sliceSlot((l$ as labelIter).slice!, (l$ as labelIter).i)] = s
	}

	static __typeInfo = $.registerStructType(
		"idna.labelIter",
		() => new labelIter(),
		() => [$.methodSignature("done", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("label", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("next", [], [], true), $.methodSignature("reset", [], [], true), $.methodSignature("result", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("set", [["s", /* @__PURE__ */ $.basicType("string")]], [], true)],
		labelIter,
		() => [/* @__PURE__ */ $.structField("orig", /* @__PURE__ */ $.basicType("string"), [0], 0, false, { pkgPath: "golang.org/x/net/idna" }), /* @__PURE__ */ $.structField("slice", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")), [1], 16, false, { pkgPath: "golang.org/x/net/idna" }), /* @__PURE__ */ $.structField("curStart", /* @__PURE__ */ $.basicType("int"), [2], 40, false, { pkgPath: "golang.org/x/net/idna" }), /* @__PURE__ */ $.structField("curEnd", /* @__PURE__ */ $.basicType("int"), [3], 48, false, { pkgPath: "golang.org/x/net/idna" }), /* @__PURE__ */ $.structField("i", /* @__PURE__ */ $.basicType("int"), [4], 56, false, { pkgPath: "golang.org/x/net/idna" })]
	)
}

export const acePrefix: string = "xn--"

export const zwnj: string = "\xe2\x80\x8c"

export const zwj: string = "\xe2\x80\x8d"

export const stateStart: joinState = 0

export const stateVirama: joinState = 1

export const stateBefore: joinState = 2

export const stateBeforeVirama: joinState = 3

export const stateAfter: joinState = 4

export const stateFAIL: joinState = 5

export async function ToASCII(s: string): globalThis.Promise<[string, $.GoError]> {
	return Profile.prototype.process.call(__goscript_get_Punycode(), s, true)
}

export async function ToUnicode(s: string): globalThis.Promise<[string, $.GoError]> {
	return Profile.prototype.process.call(__goscript_get_Punycode(), s, false)
}

export function Transitional(transitional: boolean): Option | null {
	return $.functionValue((o: options | $.VarRef<options> | null): void => {
		$.pointerValue<options>(o).transitional = transitional
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("idna.options")], results: [] } as $.FunctionTypeInfo))
}

export function VerifyDNSLength(verify: boolean): Option | null {
	return $.functionValue((o: options | $.VarRef<options> | null): void => {
		$.pointerValue<options>(o).verifyDNSLength = verify
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("idna.options")], results: [] } as $.FunctionTypeInfo))
}

export function RemoveLeadingDots(remove: boolean): Option | null {
	return $.functionValue((o: options | $.VarRef<options> | null): void => {
		$.pointerValue<options>(o).removeLeadingDots = remove
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("idna.options")], results: [] } as $.FunctionTypeInfo))
}

export function ValidateLabels(enable: boolean): Option | null {
	return $.functionValue((o: options | $.VarRef<options> | null): void => {
		// Don't override existing mappings, but set one that at least checks
		// normalization if it is not set.
		if (($.pointerValue<options>(o).mapping == null) && enable) {
			$.pointerValue<options>(o).mapping = normalize
		}
		$.pointerValue<options>(o).trie = __goscript_trie.__goscript_get_trie()
		$.pointerValue<options>(o).checkJoiners = enable
		$.pointerValue<options>(o).checkHyphens = enable
		if (enable) {
			$.pointerValue<options>(o).fromPuny = validateFromPunycode
		} else {
			$.pointerValue<options>(o).fromPuny = (null as ((p: Profile | $.VarRef<Profile> | null, s: string) => $.GoError | globalThis.Promise<$.GoError>) | null)
		}
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("idna.options")], results: [] } as $.FunctionTypeInfo))
}

export function CheckHyphens(enable: boolean): Option | null {
	return $.functionValue((o: options | $.VarRef<options> | null): void => {
		$.pointerValue<options>(o).checkHyphens = enable
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("idna.options")], results: [] } as $.FunctionTypeInfo))
}

export function CheckJoiners(enable: boolean): Option | null {
	return $.functionValue((o: options | $.VarRef<options> | null): void => {
		$.pointerValue<options>(o).trie = __goscript_trie.__goscript_get_trie()
		$.pointerValue<options>(o).checkJoiners = enable
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("idna.options")], results: [] } as $.FunctionTypeInfo))
}

export function StrictDomainName(use: boolean): Option | null {
	return $.functionValue((o: options | $.VarRef<options> | null): void => {
		$.pointerValue<options>(o).useSTD3Rules = use
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("idna.options")], results: [] } as $.FunctionTypeInfo))
}

export function BidiRule(): Option | null {
	return $.functionValue((o: options | $.VarRef<options> | null): void => {
		$.pointerValue<options>(o).bidirule = bidirule2.ValidString
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("idna.options")], results: [] } as $.FunctionTypeInfo))
}

export function ValidateForRegistration(): Option | null {
	return $.functionValue(async (o: options | $.VarRef<options> | null): globalThis.Promise<void> => {
		$.pointerValue<options>(o).mapping = validateRegistration
		await StrictDomainName(true)!(o)
		await ValidateLabels(true)!(o)
		await VerifyDNSLength(true)!(o)
		await BidiRule()!(o)
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("idna.options")], results: [] } as $.FunctionTypeInfo))
}

export function MapForLookup(): Option | null {
	return $.functionValue(async (o: options | $.VarRef<options> | null): globalThis.Promise<void> => {
		$.pointerValue<options>(o).mapping = validateAndMap
		await StrictDomainName(true)!(o)
		await ValidateLabels(true)!(o)
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("idna.options")], results: [] } as $.FunctionTypeInfo))
}

export async function apply(o: options | $.VarRef<options> | null, opts: $.Slice<Option | null>): globalThis.Promise<void> {
	for (let __goscriptRangeTarget0 = opts, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
		let f = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as Option | null)
		void (__goscriptAwait = f!(o), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}
}

export async function New(o: $.Slice<Option | null>): globalThis.Promise<Profile | $.VarRef<Profile> | null> {
	let p: Profile | $.VarRef<Profile> | null = new Profile()
	await apply($.fieldRef($.pointerValue<Profile>(p)._fields, "options"), o)
	return p
}

export var Punycode: Profile | $.VarRef<Profile> | null

export function __goscript_init_Punycode(): void {
	if (((Punycode) as any) === undefined) {
		Punycode = punycode
	}
}

export function __goscript_get_Punycode(): Profile | $.VarRef<Profile> | null {
	if (((Punycode) as any) === undefined) {
		__goscript_init_Punycode()
	}
	return Punycode
}

export function __goscript_set_Punycode(__goscriptValue: Profile | $.VarRef<Profile> | null): void {
	Punycode = __goscriptValue
}

export var Lookup: Profile | $.VarRef<Profile> | null

export function __goscript_init_Lookup(): void {
	if (((Lookup) as any) === undefined) {
		Lookup = __goscript_get_lookup()
	}
}

export function __goscript_get_Lookup(): Profile | $.VarRef<Profile> | null {
	if (((Lookup) as any) === undefined) {
		__goscript_init_Lookup()
	}
	return Lookup
}

export function __goscript_set_Lookup(__goscriptValue: Profile | $.VarRef<Profile> | null): void {
	Lookup = __goscriptValue
}

export var Display: Profile | $.VarRef<Profile> | null

export function __goscript_init_Display(): void {
	if (((Display) as any) === undefined) {
		Display = __goscript_get_display()
	}
}

export function __goscript_get_Display(): Profile | $.VarRef<Profile> | null {
	if (((Display) as any) === undefined) {
		__goscript_init_Display()
	}
	return Display
}

export function __goscript_set_Display(__goscriptValue: Profile | $.VarRef<Profile> | null): void {
	Display = __goscriptValue
}

export var Registration: Profile | $.VarRef<Profile> | null

export function __goscript_init_Registration(): void {
	if (((Registration) as any) === undefined) {
		Registration = __goscript_get_registration()
	}
}

export function __goscript_get_Registration(): Profile | $.VarRef<Profile> | null {
	if (((Registration) as any) === undefined) {
		__goscript_init_Registration()
	}
	return Registration
}

export function __goscript_set_Registration(__goscriptValue: Profile | $.VarRef<Profile> | null): void {
	Registration = __goscriptValue
}

export let punycode: Profile | $.VarRef<Profile> | null = new Profile()

export function __goscript_set_punycode(__goscriptValue: Profile | $.VarRef<Profile> | null): void {
	punycode = __goscriptValue
}

export var lookup: Profile | $.VarRef<Profile> | null

export function __goscript_init_lookup(): void {
	if (((lookup) as any) === undefined) {
		lookup = new Profile({options: new options({transitional: false, useSTD3Rules: true, checkHyphens: true, checkJoiners: true, trie: __goscript_trie.__goscript_get_trie(), fromPuny: validateFromPunycode, mapping: validateAndMap, bidirule: bidirule2.ValidString}, true)})
	}
}

export function __goscript_get_lookup(): Profile | $.VarRef<Profile> | null {
	if (((lookup) as any) === undefined) {
		__goscript_init_lookup()
	}
	return lookup
}

export function __goscript_set_lookup(__goscriptValue: Profile | $.VarRef<Profile> | null): void {
	lookup = __goscriptValue
}

export var display: Profile | $.VarRef<Profile> | null

export function __goscript_init_display(): void {
	if (((display) as any) === undefined) {
		display = new Profile({options: new options({useSTD3Rules: true, checkHyphens: true, checkJoiners: true, trie: __goscript_trie.__goscript_get_trie(), fromPuny: validateFromPunycode, mapping: validateAndMap, bidirule: bidirule2.ValidString}, true)})
	}
}

export function __goscript_get_display(): Profile | $.VarRef<Profile> | null {
	if (((display) as any) === undefined) {
		__goscript_init_display()
	}
	return display
}

export function __goscript_set_display(__goscriptValue: Profile | $.VarRef<Profile> | null): void {
	display = __goscriptValue
}

export var registration: Profile | $.VarRef<Profile> | null

export function __goscript_init_registration(): void {
	if (((registration) as any) === undefined) {
		registration = new Profile({options: new options({useSTD3Rules: true, verifyDNSLength: true, checkHyphens: true, checkJoiners: true, trie: __goscript_trie.__goscript_get_trie(), fromPuny: validateFromPunycode, mapping: validateRegistration, bidirule: bidirule2.ValidString}, true)})
	}
}

export function __goscript_get_registration(): Profile | $.VarRef<Profile> | null {
	if (((registration) as any) === undefined) {
		__goscript_init_registration()
	}
	return registration
}

export function __goscript_set_registration(__goscriptValue: Profile | $.VarRef<Profile> | null): void {
	registration = __goscriptValue
}

export function runeError_code(e: runeError): string {
	return "P1"
}

export async function runeError_Error(e: runeError): globalThis.Promise<string> {
	return fmt.Sprintf("idna: disallowed rune %U", $.namedValueInterfaceValue<any>(e, "idna.runeError", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()))
}

export async function normalize(p: Profile | $.VarRef<Profile> | null, s: string): globalThis.Promise<[string, boolean, $.GoError]> {
	let mapped: string = ""
	let isBidi: boolean = false
	let err: $.GoError = null! as $.GoError
	// TODO: consider first doing a quick check to see if any of these checks
	// need to be done. This will make it slower in the general case, but
	// faster in the common case.
	mapped = await norm.Form_String(norm.NFC, s)
	isBidi = bidirule2.DirectionString(mapped) == 1
	return [mapped, isBidi, null]
}

export async function validateRegistration(p: Profile | $.VarRef<Profile> | null, s: string): globalThis.Promise<[string, boolean, $.GoError]> {
	let idem: string = ""
	let bidi: boolean = false
	let err: $.GoError = null! as $.GoError
	// TODO: filter need for normalization in loop below.
	if (!await norm.Form_IsNormalString(norm.NFC, s)) {
		return [s, false, $.interfaceValue<$.GoError>(new labelError({label: s, code_: "V1"}), "*idna.labelError", /* @__PURE__ */ $.pointerType("idna.labelError"))]
	}
	for (let i = 0; i < $.stringLen(s); ) {
		let [v, sz] = __goscript_tables15_0_0.idnaTrie.prototype.lookupString.call(__goscript_trie.__goscript_get_trie(), $.sliceStringOrBytes(s, i, undefined))
		if (sz == 0) {
			return [s, bidi, $.namedValueInterfaceValue<$.GoError>($.int(utf8.RuneError, 32), "idna.runeError", {"Error": runeError_Error}, /* @__PURE__ */ $.basicType("int32", "idna.runeError"))]
		}
		bidi = bidi || info_isBidi($.uint(v, 16), $.sliceStringOrBytes(s, i, undefined))
		// Copy bytes not copied so far.
		switch ((p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as Profile).simplify(__goscript_trieval.info_category($.uint(v, 16))) : Profile.prototype.simplify.call(p, __goscript_trieval.info_category($.uint(v, 16))))) {
			case 8:
			case 3:
			{
				break
			}
			case 64:
			case 1:
			case 0:
			case 192:
			{
				let [r, ] = utf8.DecodeRuneInString($.sliceStringOrBytes(s, i, undefined))
				return [s, bidi, $.namedValueInterfaceValue<$.GoError>($.int(r, 32), "idna.runeError", {"Error": runeError_Error}, /* @__PURE__ */ $.basicType("int32", "idna.runeError"))]
				break
			}
		}
		i = i + (sz)
	}
	return [s, bidi, null]
}

export function info_isBidi(c: __goscript_trieval.info, s: string): boolean {
	if (!__goscript_trieval.info_isMapped(c)) {
		return $.uint((c & 6144), 16) == 2048
	}
	// TODO: also store bidi info for mapped data. This is possible, but a bit
	// cumbersome and not for the common case.
	let [p, ] = bidi2.LookupString(s)
	switch (p.Class()) {
		case bidi2.R:
		case bidi2.AL:
		case bidi2.AN:
		{
			return true
			break
		}
	}
	return false
}

export async function validateAndMap(p: Profile | $.VarRef<Profile> | null, s: string): globalThis.Promise<[string, boolean, $.GoError]> {
	let vm: string = ""
	let bidi: boolean = false
	let err: $.GoError = null! as $.GoError
	let b: $.Slice<number> = null! as $.Slice<number>
	let k: number = 0
	// combinedInfoBits contains the or-ed bits of all runes. We use this
	// to derive the mayNeedNorm bit later. This may trigger normalization
	// overeagerly, but it will not do so in the common case. The end result
	// is another 10% saving on BenchmarkProfile for the common case.
	let combinedInfoBits: __goscript_trieval.info = 0
	for (let i = 0; i < $.stringLen(s); ) {
		let [v, sz] = __goscript_tables15_0_0.idnaTrie.prototype.lookupString.call(__goscript_trie.__goscript_get_trie(), $.sliceStringOrBytes(s, i, undefined))
		if (sz == 0) {
			b = $.appendSlice(b, $.stringToBytes($.sliceStringOrBytes(s, k, i)), $.byteSliceHint)
			b = $.appendSlice(b, $.stringToBytes("\xef\xbf\xbd"), $.byteSliceHint)
			k = $.stringLen(s)
			if (err == null) {
				err = $.namedValueInterfaceValue<$.GoError>($.int(utf8.RuneError, 32), "idna.runeError", {"Error": runeError_Error}, /* @__PURE__ */ $.basicType("int32", "idna.runeError"))
			}
			break
		}
		combinedInfoBits = combinedInfoBits | ($.uint(v, 16))
		bidi = bidi || info_isBidi($.uint(v, 16), $.sliceStringOrBytes(s, i, undefined))
		let start = i
		i = i + (sz)
		// Copy bytes not copied so far.
		switch ((p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as Profile).simplify(__goscript_trieval.info_category($.uint(v, 16))) : Profile.prototype.simplify.call(p, __goscript_trieval.info_category($.uint(v, 16))))) {
			case 8:
			{
				continue
				break
			}
			case 64:
			{
				if (err == null) {
					let [r, ] = utf8.DecodeRuneInString($.sliceStringOrBytes(s, start, undefined))
					err = $.namedValueInterfaceValue<$.GoError>($.int(r, 32), "idna.runeError", {"Error": runeError_Error}, /* @__PURE__ */ $.basicType("int32", "idna.runeError"))
				}
				continue
				break
			}
			case 1:
			case 3:
			{
				b = $.appendSlice(b, $.stringToBytes($.sliceStringOrBytes(s, k, start)), $.byteSliceHint)
				b = __goscript_trie13_0_0.info_appendMapping($.uint(v, 16), b, $.sliceStringOrBytes(s, start, i))
				break
			}
			case 192:
			{
				b = $.appendSlice(b, $.stringToBytes($.sliceStringOrBytes(s, k, start)), $.byteSliceHint)
				break
			}
			case 0:
			{
				b = $.appendSlice(b, $.stringToBytes($.sliceStringOrBytes(s, k, start)), $.byteSliceHint)
				b = $.appendSlice(b, $.stringToBytes("\xef\xbf\xbd"), $.byteSliceHint)
				break
			}
		}
		k = i
	}
	if (k == 0) {
		// No changes so far.
		if ($.uint((combinedInfoBits & 8192), 16) != 0) {
			s = await norm.Form_String(norm.NFC, s)
		}
	} else {
		b = $.appendSlice(b, $.stringToBytes($.sliceStringOrBytes(s, k, undefined)), $.byteSliceHint)
		if (await norm.Form_QuickSpan(norm.NFC, b) != $.sliceLen(b)) {
			b = await norm.Form_Bytes(norm.NFC, b)
		}
		// TODO: the punycode converters require strings as input.
		s = $.bytesToString(b)
	}
	return [s, bidi, err]
}

export async function validateFromPunycode(p: Profile | $.VarRef<Profile> | null, s: string): globalThis.Promise<$.GoError> {
	if (!await norm.Form_IsNormalString(norm.NFC, s)) {
		return $.interfaceValue<$.GoError>(new labelError({label: s, code_: "V1"}), "*idna.labelError", /* @__PURE__ */ $.pointerType("idna.labelError"))
	}
	// TODO: detect whether string may have to be normalized in the following
	// loop.
	for (let i = 0; i < $.stringLen(s); ) {
		let [v, sz] = __goscript_tables15_0_0.idnaTrie.prototype.lookupString.call(__goscript_trie.__goscript_get_trie(), $.sliceStringOrBytes(s, i, undefined))
		if (sz == 0) {
			return $.namedValueInterfaceValue<$.GoError>($.int(utf8.RuneError, 32), "idna.runeError", {"Error": runeError_Error}, /* @__PURE__ */ $.basicType("int32", "idna.runeError"))
		}
		{
			let c = (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as Profile).simplify(__goscript_trieval.info_category($.uint(v, 16))) : Profile.prototype.simplify.call(p, __goscript_trieval.info_category($.uint(v, 16))))
			if ((c != 8) && (c != 3)) {
				return $.interfaceValue<$.GoError>(new labelError({label: s, code_: "V6"}), "*idna.labelError", /* @__PURE__ */ $.pointerType("idna.labelError"))
			}
		}
		i = i + (sz)
	}
	return null
}

export var joinStates: $.Slice<joinState[]>

export function __goscript_init_joinStates(): void {
	if (((joinStates) as any) === undefined) {
		joinStates = $.arrayToSlice<joinState[]>([$.arrayValue([0, 2, 2, 0, 0, 5, 5, 1]), $.arrayValue([0, 2, 2, 0, 0, 0, 0, 0]), $.arrayValue([0, 2, 2, 2, 0, 5, 4, 3]), $.arrayValue([0, 2, 2, 2, 0, 0, 0, 0]), $.arrayValue([0, 5, 2, 4, 0, 5, 5, 4]), $.arrayValue([5, 5, 5, 5, 5, 5, 5, 5])])
	}
}

export function __goscript_get_joinStates(): $.Slice<joinState[]> {
	if (((joinStates) as any) === undefined) {
		__goscript_init_joinStates()
	}
	return joinStates
}

export function __goscript_set_joinStates(__goscriptValue: $.Slice<joinState[]>): void {
	joinStates = __goscriptValue
}

export function ascii(s: string): boolean {
	for (let i = 0; i < $.stringLen(s); i++) {
		if ($.indexString(s, i) >= 128) {
			return false
		}
	}
	return true
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({Error: (receiver: any, ...args: any[]) => (runeError_Error as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), code: (receiver: any, ...args: any[]) => (runeError_code as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.basicType("int32", "idna.runeError"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("code", [], [/* @__PURE__ */ $.basicType("string")])])
}

var __goscriptAwait: any
