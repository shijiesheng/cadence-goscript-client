// Generated file based on metadata.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as errors from "@goscript/errors/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as sort from "@goscript/sort/index.js"

import * as promproto from "@goscript/github.com/prometheus/client_model/go/index.js"

import type * as __goscript_spec from "./spec.gs.ts"

import * as __goscript_tag from "./tag.gs.ts"
import "@goscript/errors/index.js"
import "@goscript/fmt/index.js"
import "@goscript/sort/index.js"
import "@goscript/github.com/prometheus/client_model/go/index.js"
import "./tag.gs.ts"

$.registerTypePackagePath("go.uber.org/net/metrics", ["metrics.metadata"])

export class metadata {
	public get Name(): $.VarRef<string> | null {
		return this._fields.Name
	}

	public set Name(value: $.VarRef<string> | null) {
		this._fields.Name = value
	}

	public get Help(): $.VarRef<string> | null {
		return this._fields.Help
	}

	public set Help(value: $.VarRef<string> | null) {
		this._fields.Help = value
	}

	public get Dims(): string {
		return this._fields.Dims
	}

	public set Dims(value: string) {
		this._fields.Dims = value
	}

	public get DisablePush(): boolean {
		return this._fields.DisablePush
	}

	public set DisablePush(value: boolean) {
		this._fields.DisablePush = value
	}

	public get constTagPairs(): $.Slice<promproto.LabelPair | $.VarRef<promproto.LabelPair> | null> {
		return this._fields.constTagPairs
	}

	public set constTagPairs(value: $.Slice<promproto.LabelPair | $.VarRef<promproto.LabelPair> | null>) {
		this._fields.constTagPairs = value
	}

	public get varTagNames(): $.Slice<string> {
		return this._fields.varTagNames
	}

	public set varTagNames(value: $.Slice<string>) {
		this._fields.varTagNames = value
	}

	public _fields: {
		Name: $.VarRef<string> | null
		Help: $.VarRef<string> | null
		Dims: string
		DisablePush: boolean
		constTagPairs: $.Slice<promproto.LabelPair | $.VarRef<promproto.LabelPair> | null>
		varTagNames: $.Slice<string>
	}

	constructor(init?: Partial<{Name?: $.VarRef<string> | null, Help?: $.VarRef<string> | null, Dims?: string, DisablePush?: boolean, constTagPairs?: $.Slice<promproto.LabelPair | $.VarRef<promproto.LabelPair> | null>, varTagNames?: $.Slice<string>}>, __goscriptValue?: boolean) {
		this._fields = {
			Name: init?.Name ?? (null! as $.VarRef<string> | null),
			Help: init?.Help ?? (null! as $.VarRef<string> | null),
			Dims: init?.Dims ?? ("" as string),
			DisablePush: init?.DisablePush ?? (false as boolean),
			constTagPairs: init?.constTagPairs ?? (null! as $.Slice<promproto.LabelPair | $.VarRef<promproto.LabelPair> | null>),
			varTagNames: init?.varTagNames ?? (null! as $.Slice<string>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): metadata {
		return new metadata(this, true)
	}

	public __goscriptAssign(source: metadata): void {
		const target = this._fields
		const values = source._fields
		target.Name = values.Name
		target.Help = values.Help
		target.Dims = values.Dims
		target.DisablePush = values.DisablePush
		target.constTagPairs = values.constTagPairs
		target.varTagNames = values.varTagNames
	}

	public async MergeTags(variableTagPairs: $.Slice<string>): globalThis.Promise<$.Slice<promproto.LabelPair | $.VarRef<promproto.LabelPair> | null>> {
		const m = this;
		if ($.sliceLen(variableTagPairs) == 0) {
			return m.constTagPairs
		}
		let n = $.sliceLen(m.constTagPairs) + $.sliceLen(m.varTagNames)
		let pairs: $.Slice<promproto.LabelPair | $.VarRef<promproto.LabelPair> | null> = $.makeSlice<promproto.LabelPair | $.VarRef<promproto.LabelPair> | null>(0, n)
		pairs = $.appendSlice(pairs, m.constTagPairs, $.appendZeros.nil)
		for (let __goscriptRangeTarget0 = m.varTagNames, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __goscriptSliceWindow0 = $.sliceRange(variableTagPairs), i = 0; i < __goscriptRangeWindow0.length; i++) {
			let name = $.varRef(await __goscript_tag.scrubName($.arrayIndex(m.varTagNames!, i)))
			let val = $.varRef(await __goscript_tag.scrubTagValue(((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, (i * 2) + 1)] as string)))
			pairs = $.appendOne(pairs, new promproto.LabelPair({Name: name, Value: val}), $.appendZeros.nil)
		}
		sort.Slice($.interfaceValue(pairs, "[]*io_prometheus_client.LabelPair", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("io_prometheus_client.LabelPair"))), $.functionValue((i: number, j: number): boolean => {
			return $.stringCompare(promproto.LabelPair.prototype.GetName.call($.arrayIndex(pairs!, i)), promproto.LabelPair.prototype.GetName.call($.arrayIndex(pairs!, j))) < 0
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("int")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)))
		return pairs
	}

	public ValidateVariableTags(variableTagPairs: $.Slice<string>): $.GoError {
		const m = this;
		if ($.sliceLen(variableTagPairs) != (2 * $.sliceLen(m.varTagNames))) {
			return errInconsistentCardinality
		}
		for (let __goscriptRangeTarget1 = m.varTagNames, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __goscriptSliceWindow1 = $.sliceRange(variableTagPairs), i = 0; i < __goscriptRangeWindow1.length; i++) {
			let expected = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + i] as string)
			if (!$.stringEqual(expected, ((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, i * 2)] as string))) {
				return fmt.Errorf("variable tag #%d doesn't match vector definition: expected %s, got %s", $.basicInterfaceValue(i, "int"), expected, ((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, i * 2)] as string))
			}
		}
		return null
	}

	public writeID(d: __goscript_tag.digester | $.VarRef<__goscript_tag.digester> | null): void {
		const m = this;
		void (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as __goscript_tag.digester).add("", $.pointerValue<string>(m.Name)) : __goscript_tag.digester.prototype.add.call(d, "", $.pointerValue<string>(m.Name)))
		for (let __goscriptRangeTarget2 = m.constTagPairs, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow2.length; __rangeIndex++) {
			let pair = (__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + __rangeIndex] as promproto.LabelPair | $.VarRef<promproto.LabelPair> | null)
			__goscript_tag.digester.prototype.add.call(d, "", (pair !== null && (pair as any).__isVarRef !== true && (pair as any).__goValue === undefined ? ((pair as any) as promproto.LabelPair).GetName() : promproto.LabelPair.prototype.GetName.call(pair)))
			__goscript_tag.digester.prototype.add.call(d, "", (pair !== null && (pair as any).__isVarRef !== true && (pair as any).__goValue === undefined ? ((pair as any) as promproto.LabelPair).GetValue() : promproto.LabelPair.prototype.GetValue.call(pair)))
		}
	}

	static __typeInfo = $.registerStructType(
		"metrics.metadata",
		() => new metadata(),
		() => [$.methodSignature("MergeTags", [["variableTagPairs", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("io_prometheus_client.LabelPair"))]), $.methodSignature("ValidateVariableTags", [["variableTagPairs", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))]], ["error"]), $.methodSignature("writeID", [["d", /* @__PURE__ */ $.pointerType("metrics.digester")]])],
		metadata,
		() => [/* @__PURE__ */ $.structField("Name", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("string")), [0], 0, true), /* @__PURE__ */ $.structField("Help", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("string")), [1], 8, true), /* @__PURE__ */ $.structField("Dims", /* @__PURE__ */ $.basicType("string"), [2], 16, true), /* @__PURE__ */ $.structField("DisablePush", /* @__PURE__ */ $.basicType("bool"), [3], 32, true), /* @__PURE__ */ $.structField("constTagPairs", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("io_prometheus_client.LabelPair")), [4], 40, false, { pkgPath: "go.uber.org/net/metrics" }), /* @__PURE__ */ $.structField("varTagNames", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")), [5], 64, false, { pkgPath: "go.uber.org/net/metrics" })]
	)
}

export let errInconsistentCardinality: $.GoError = errors.New("inconsistent tag cardinality")

export function __goscript_set_errInconsistentCardinality(__goscriptValue: $.GoError): void {
	errInconsistentCardinality = __goscriptValue
}

export async function newMetadata(o: __goscript_spec.Spec): globalThis.Promise<[metadata, $.GoError]> {
	// TODO: Consider checking for duplicate tags with Bloom filters, allocating
	// maps only if we suspect a duplicate.
	let sortedConstNames: $.Slice<string> = $.makeSlice<string>(0, $.len(o.ConstTags), "string")
	for (const [k, __rangeValue] of o.ConstTags?.entries() ?? []) {
		sortedConstNames = $.appendOne(sortedConstNames, k)
	}
	sort.Strings(sortedConstNames)

	let constNameSet: globalThis.Map<string, {}> | null = $.makeMap<string, {}>()
	let sortedScrubbedConstNames: $.Slice<string> = $.makeSlice<string>($.sliceLen(sortedConstNames), undefined, "string")
	let sortedScrubbedConstVals: $.Slice<string> = $.makeSlice<string>($.sliceLen(sortedConstNames), undefined, "string")
	for (let __goscriptRangeTarget3 = sortedConstNames, __goscriptRangeWindow3 = $.sliceRange(__goscriptRangeTarget3), __goscriptSliceWindow2 = $.sliceRange(sortedScrubbedConstNames), __goscriptSliceWindow3 = $.sliceRange(sortedScrubbedConstVals), i = 0; i < __goscriptRangeWindow3.length; i++) {
		let name = (__goscriptRangeWindow3.backing[__goscriptRangeWindow3.offset + i] as string)
		let scrubbedName = await __goscript_tag.scrubName(name)
		{
			let [, ok] = $.mapGet<string, {}, {}>(constNameSet, scrubbedName, {})
			if (ok) {
				return [new metadata(undefined, true), fmt.Errorf("duplicate constant tag name %q", scrubbedName)]
			}
		}
		$.mapSet(constNameSet, scrubbedName, {});
		;(__goscriptSliceWindow2.backing as any[])[$.windowSlot(__goscriptSliceWindow2, i)] = scrubbedName;
		;(__goscriptSliceWindow3.backing as any[])[$.windowSlot(__goscriptSliceWindow3, i)] = await __goscript_tag.scrubTagValue($.mapGet<string, string, string>(o.ConstTags, name, "")[0])
	}

	let varNameSet: globalThis.Map<string, {}> | null = $.makeMap<string, {}>()
	let sortedScrubbedVarNames: $.Slice<string> = $.makeSlice<string>($.sliceLen(o.VarTags), undefined, "string")
	for (let __goscriptRangeTarget4 = o.VarTags, __goscriptRangeWindow4 = $.sliceRange(__goscriptRangeTarget4), __goscriptSliceWindow4 = $.sliceRange(sortedScrubbedVarNames), i = 0; i < __goscriptRangeWindow4.length; i++) {
		let name = (__goscriptRangeWindow4.backing[__goscriptRangeWindow4.offset + i] as string)
		let scrubbedName = await __goscript_tag.scrubName(name)
		{
			let [, ok] = $.mapGet<string, {}, {}>(varNameSet, scrubbedName, {})
			if (ok) {
				return [new metadata(undefined, true), fmt.Errorf("duplicate variable tag name %q", scrubbedName)]
			}
		}
		{
			let [, ok] = $.mapGet<string, {}, {}>(constNameSet, scrubbedName, {})
			if (ok) {
				return [new metadata(undefined, true), fmt.Errorf("variable tag name %q is also a constant tag name", scrubbedName)]
			}
		}
		$.mapSet(varNameSet, scrubbedName, {});
		;(__goscriptSliceWindow4.backing as any[])[$.windowSlot(__goscriptSliceWindow4, i)] = scrubbedName
	}
	sort.Strings(sortedScrubbedVarNames)

	let pairs: $.Slice<promproto.LabelPair | $.VarRef<promproto.LabelPair> | null> = null! as $.Slice<promproto.LabelPair | $.VarRef<promproto.LabelPair> | null>
	if ($.sliceLen(sortedScrubbedConstNames) > 0) {
		pairs = $.makeSlice<promproto.LabelPair | $.VarRef<promproto.LabelPair> | null>(0, $.sliceLen(sortedScrubbedConstNames))
		for (let __goscriptRangeTarget5 = sortedScrubbedConstNames, __goscriptRangeWindow5 = $.sliceRange(__goscriptRangeTarget5), __goscriptSliceWindow5 = $.sliceRange(sortedScrubbedConstVals), i = 0; i < __goscriptRangeWindow5.length; i++) {
			pairs = $.appendOne(pairs, new promproto.LabelPair({Name: $.indexRef(sortedScrubbedConstNames!, i), Value: $.indexRef(sortedScrubbedConstVals!, i)}), $.appendZeros.nil)
		}
	}
	let scrubbedName = $.varRef(await __goscript_tag.scrubName(o.Name))
	return [(await (async () => { const __goscriptLiteralField0 = await makeDims(scrubbedName.value, sortedScrubbedConstNames, sortedScrubbedVarNames); return new metadata({Name: scrubbedName, Help: $.fieldRef(o._fields, "Help"), Dims: __goscriptLiteralField0, DisablePush: o.DisablePush, constTagPairs: pairs, varTagNames: o.VarTags}, true) })()), null]
}

export async function makeDims(name: string, constNames: $.Slice<string>, sortedVarNames: $.Slice<string>): globalThis.Promise<string> {
	let d: __goscript_tag.digester | $.VarRef<__goscript_tag.digester> | null = await __goscript_tag.newDigester()
	void (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as __goscript_tag.digester).add("", name) : __goscript_tag.digester.prototype.add.call(d, "", name))
	for (let __goscriptRangeTarget6 = constNames, __goscriptRangeWindow6 = $.sliceRange(__goscriptRangeTarget6), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow6.length; __rangeIndex++) {
		let n = (__goscriptRangeWindow6.backing[__goscriptRangeWindow6.offset + __rangeIndex] as string)
		void (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as __goscript_tag.digester).add("", n) : __goscript_tag.digester.prototype.add.call(d, "", n))
	}
	for (let __goscriptRangeTarget7 = sortedVarNames, __goscriptRangeWindow7 = $.sliceRange(__goscriptRangeTarget7), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow7.length; __rangeIndex++) {
		let n = (__goscriptRangeWindow7.backing[__goscriptRangeWindow7.offset + __rangeIndex] as string)
		// To make sure that we can tell whether a given tag name is constant or
		// variable, prefix variable tag names with a character that's otherwise
		// forbidden.
		void (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as __goscript_tag.digester).add("$", n) : __goscript_tag.digester.prototype.add.call(d, "$", n))
	}
	let dims = $.bytesToString((d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as __goscript_tag.digester).digest() : __goscript_tag.digester.prototype.digest.call(d)))
	void (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as __goscript_tag.digester).free() : __goscript_tag.digester.prototype.free.call(d))
	return dims
}
