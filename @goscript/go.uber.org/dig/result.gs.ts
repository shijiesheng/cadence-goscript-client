// Generated file based on result.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as digerror from "@goscript/go.uber.org/dig/internal/digerror/index.js"

import * as dot from "@goscript/go.uber.org/dig/internal/dot/index.js"

import type * as io from "@goscript/io/index.js"

import * as __goscript_container from "./container.gs.ts"

import * as __goscript_error from "./error.gs.ts"

import * as __goscript_group from "./group.gs.ts"

import * as __goscript_inout from "./inout.gs.ts"
import "@goscript/fmt/index.js"
import "@goscript/reflect/index.js"
import "@goscript/go.uber.org/dig/internal/digerror/index.js"
import "@goscript/go.uber.org/dig/internal/dot/index.js"
import "./container.gs.ts"
import "./error.gs.ts"
import "./group.gs.ts"
import "./inout.gs.ts"

$.registerTypePackagePath("go.uber.org/dig", ["dig.result", "dig.resultOptions", "dig.resultVisitor", "dig.resultList", "dig.resultSingle", "dig.resultObject", "dig.resultObjectField", "dig.resultGrouped"])

export type result = {
	DotResult(): $.Slice<dot.Result | $.VarRef<dot.Result> | null> | globalThis.Promise<$.Slice<dot.Result | $.VarRef<dot.Result> | null>>
	Extract(_p0: __goscript_container.containerWriter | null, _p1: boolean, _p2: reflect.Value): void
}

$.registerInterfaceType(
	"dig.result",
	null,
	[$.methodSignature("DotResult", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("dot.Result"))]), $.methodSignature("Extract", ["dig.containerWriter", /* @__PURE__ */ $.basicType("bool"), "reflect.Value"])]
);

export type resultVisitor = {
	AnnotateWithField(_p0: resultObjectField): resultVisitor | null
	AnnotateWithPosition(idx: number): resultVisitor | null | globalThis.Promise<resultVisitor | null>
	Visit(_p0: result | null): resultVisitor | null | globalThis.Promise<resultVisitor | null>
}

$.registerInterfaceType(
	"dig.resultVisitor",
	null,
	[$.methodSignature("AnnotateWithField", ["dig.resultObjectField"], ["dig.resultVisitor"]), $.methodSignature("AnnotateWithPosition", [["idx", /* @__PURE__ */ $.basicType("int")]], ["dig.resultVisitor"]), $.methodSignature("Visit", ["dig.result"], ["dig.resultVisitor"])]
);

export class resultOptions {
	// If set, this is the name of the associated result value.
	//
	// For Result Objects, name:".." tags on fields override this.
	public get Name(): string {
		return this._fields.Name
	}

	public set Name(value: string) {
		this._fields.Name = value
	}

	public get Group(): string {
		return this._fields.Group
	}

	public set Group(value: string) {
		this._fields.Group = value
	}

	public get As(): $.Slice<any> {
		return this._fields.As
	}

	public set As(value: $.Slice<any>) {
		this._fields.As = value
	}

	public _fields: {
		Name: string
		Group: string
		As: $.Slice<any>
	}

	constructor(init?: Partial<{Name?: string, Group?: string, As?: $.Slice<any>}>, __goscriptValue?: boolean) {
		this._fields = {
			Name: init?.Name ?? ("" as string),
			Group: init?.Group ?? ("" as string),
			As: init?.As ?? (null! as $.Slice<any>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): resultOptions {
		return new resultOptions(this, true)
	}

	public __goscriptAssign(source: resultOptions): void {
		const target = this._fields
		const values = source._fields
		target.Name = values.Name
		target.Group = values.Group
		target.As = values.As
	}

	static __typeInfo = $.registerStructType(
		"dig.resultOptions",
		() => new resultOptions(),
		() => [],
		resultOptions,
		() => [/* @__PURE__ */ $.structField("Name", /* @__PURE__ */ $.basicType("string"), [0], 0, true), /* @__PURE__ */ $.structField("Group", /* @__PURE__ */ $.basicType("string"), [1], 16, true), /* @__PURE__ */ $.structField("As", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] }), [2], 32, true)]
	)
}

export class resultList {
	public get ctype(): reflect.Type | null {
		return this._fields.ctype
	}

	public set ctype(value: reflect.Type | null) {
		this._fields.ctype = value
	}

	public get Results(): $.Slice<result | null> {
		return this._fields.Results
	}

	public set Results(value: $.Slice<result | null>) {
		this._fields.Results = value
	}

	// For each item at index i returned by the constructor, resultIndexes[i]
	// is the index in .Results for the corresponding result object.
	// resultIndexes[i] is -1 for errors returned by constructors.
	public get resultIndexes(): $.Slice<number> {
		return this._fields.resultIndexes
	}

	public set resultIndexes(value: $.Slice<number>) {
		this._fields.resultIndexes = value
	}

	public _fields: {
		ctype: reflect.Type | null
		Results: $.Slice<result | null>
		resultIndexes: $.Slice<number>
	}

	constructor(init?: Partial<{ctype?: reflect.Type | null, Results?: $.Slice<result | null>, resultIndexes?: $.Slice<number>}>, __goscriptValue?: boolean) {
		this._fields = {
			ctype: init?.ctype ?? (null! as reflect.Type | null),
			Results: init?.Results ?? (null! as $.Slice<result | null>),
			resultIndexes: init?.resultIndexes ?? (null! as $.Slice<number>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): resultList {
		return new resultList(this, true)
	}

	public __goscriptAssign(source: resultList): void {
		const target = this._fields
		const values = source._fields
		target.ctype = $.assignFieldValue(target.ctype, values.ctype, "reflect.Type")
		target.Results = values.Results
		target.resultIndexes = values.resultIndexes
	}

	public async DotResult(): globalThis.Promise<$.Slice<dot.Result | $.VarRef<dot.Result> | null>> {
		const rl = this;
		let types: $.Slice<dot.Result | $.VarRef<dot.Result> | null> = null! as $.Slice<dot.Result | $.VarRef<dot.Result> | null>
		for (let __goscriptRangeTarget3 = rl.Results, __goscriptRangeWindow3 = $.sliceRange(__goscriptRangeTarget3), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow3.length; __rangeIndex++) {
			let result = (__goscriptRangeWindow3.backing[__goscriptRangeWindow3.offset + __rangeIndex] as result | null)
			types = $.appendSlice(types, ((__goscriptAwait = (result !== null && (result as any).__isVarRef !== true && (result as any).__goValue === undefined ? (result as Exclude<result, null>) : $.pointerValue<Exclude<result, null>>(result)).DotResult(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.Slice<dot.Result | $.VarRef<dot.Result> | null>), $.appendZeros.nil)
		}
		return types
	}

	public async Extract(_p0: __goscript_container.containerWriter | null, _p1: boolean, _p2: reflect.Value): globalThis.Promise<void> {
		await digerror.BugPanicf("resultList.Extract() must never be called", null)
	}

	public async ExtractList(cw: __goscript_container.containerWriter | null, decorated: boolean, values: $.Slice<reflect.Value>): globalThis.Promise<$.GoError> {
		const rl = this;
		for (let __goscriptRangeTarget4 = values, __goscriptRangeWindow4 = $.sliceRange(__goscriptRangeTarget4), i = 0; i < __goscriptRangeWindow4.length; i++) {
			let v = $.markAsStructValue($.cloneStructValue((__goscriptRangeWindow4.backing[__goscriptRangeWindow4.offset + i] as reflect.Value)))
			{
				let resultIdx = $.arrayIndex(rl.resultIndexes!, i)
				if (resultIdx >= 0) {
					void (__goscriptAwait = $.pointerValue<Exclude<result, null>>($.arrayIndex(rl.Results!, resultIdx)).Extract(cw, decorated, $.markAsStructValue($.cloneStructValue(v))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					continue
				}
			}

			{
				let [err, ] = $.typeAssertTuple<$.GoError>($.markAsStructValue($.cloneStructValue(v)).Interface(), "error")
				if (err != null) {
					return err
				}
			}
		}

		return null
	}

	static __typeInfo = $.registerStructType(
		"dig.resultList",
		() => new resultList(),
		() => [$.methodSignature("DotResult", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("dot.Result"))]), $.methodSignature("Extract", ["dig.containerWriter", /* @__PURE__ */ $.basicType("bool"), "reflect.Value"]), $.methodSignature("ExtractList", [["cw", "dig.containerWriter"], ["decorated", /* @__PURE__ */ $.basicType("bool")], ["values", /* @__PURE__ */ $.sliceType("reflect.Value")]], ["error"])],
		resultList,
		() => [/* @__PURE__ */ $.structField("ctype", "reflect.Type", [0], 0, false, { pkgPath: "go.uber.org/dig" }), /* @__PURE__ */ $.structField("Results", /* @__PURE__ */ $.sliceType("dig.result"), [1], 16, true), /* @__PURE__ */ $.structField("resultIndexes", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")), [2], 40, false, { pkgPath: "go.uber.org/dig" })]
	)
}

export class resultSingle {
	public get Name(): string {
		return this._fields.Name
	}

	public set Name(value: string) {
		this._fields.Name = value
	}

	public get Type(): reflect.Type | null {
		return this._fields.Type
	}

	public set Type(value: reflect.Type | null) {
		this._fields.Type = value
	}

	// If specified, this is a list of types which the value will be made
	// available as, in addition to its own type.
	public get As(): $.Slice<reflect.Type | null> {
		return this._fields.As
	}

	public set As(value: $.Slice<reflect.Type | null>) {
		this._fields.As = value
	}

	public _fields: {
		Name: string
		Type: reflect.Type | null
		As: $.Slice<reflect.Type | null>
	}

	constructor(init?: Partial<{Name?: string, Type?: reflect.Type | null, As?: $.Slice<reflect.Type | null>}>, __goscriptValue?: boolean) {
		this._fields = {
			Name: init?.Name ?? ("" as string),
			Type: init?.Type ?? (null! as reflect.Type | null),
			As: init?.As ?? (null! as $.Slice<reflect.Type | null>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): resultSingle {
		return new resultSingle(this, true)
	}

	public __goscriptAssign(source: resultSingle): void {
		const target = this._fields
		const values = source._fields
		target.Name = values.Name
		target.Type = $.assignFieldValue(target.Type, values.Type, "reflect.Type")
		target.As = values.As
	}

	public DotResult(): $.Slice<dot.Result | $.VarRef<dot.Result> | null> {
		const rs = this;
		let dotResults: $.Slice<dot.Result | $.VarRef<dot.Result> | null> = $.makeSlice<dot.Result | $.VarRef<dot.Result> | null>(0, $.sliceLen(rs.As) + 1)
		dotResults = $.appendOne(dotResults, new dot.Result({Node: new dot.Node({Type: rs.Type, Name: rs.Name})}), $.appendZeros.nil)

		for (let __goscriptRangeTarget5 = rs.As, __goscriptRangeWindow5 = $.sliceRange(__goscriptRangeTarget5), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow5.length; __rangeIndex++) {
			let asType = (__goscriptRangeWindow5.backing[__goscriptRangeWindow5.offset + __rangeIndex] as reflect.Type | null)
			dotResults = $.appendOne(dotResults, new dot.Result({Node: new dot.Node({Type: asType, Name: rs.Name})}), $.appendZeros.nil)
		}

		return dotResults
	}

	public async Extract(cw: __goscript_container.containerWriter | null, decorated: boolean, v: reflect.Value): globalThis.Promise<void> {
		const rs = this;
		if (decorated) {
			void (__goscriptAwait = (cw !== null && (cw as any).__isVarRef !== true && (cw as any).__goValue === undefined ? (cw as Exclude<__goscript_container.containerWriter, null>) : $.pointerValue<Exclude<__goscript_container.containerWriter, null>>(cw)).setDecoratedValue(rs.Name, rs.Type, $.markAsStructValue($.cloneStructValue(v))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			return
		}
		void (__goscriptAwait = (cw !== null && (cw as any).__isVarRef !== true && (cw as any).__goValue === undefined ? (cw as Exclude<__goscript_container.containerWriter, null>) : $.pointerValue<Exclude<__goscript_container.containerWriter, null>>(cw)).setValue(rs.Name, rs.Type, $.markAsStructValue($.cloneStructValue(v))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)

		for (let __goscriptRangeTarget6 = rs.As, __goscriptRangeWindow6 = $.sliceRange(__goscriptRangeTarget6), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow6.length; __rangeIndex++) {
			let asType = (__goscriptRangeWindow6.backing[__goscriptRangeWindow6.offset + __rangeIndex] as reflect.Type | null)
			void (__goscriptAwait = (cw !== null && (cw as any).__isVarRef !== true && (cw as any).__goValue === undefined ? (cw as Exclude<__goscript_container.containerWriter, null>) : $.pointerValue<Exclude<__goscript_container.containerWriter, null>>(cw)).setValue(rs.Name, asType, $.markAsStructValue($.cloneStructValue(v))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}

	static __typeInfo = $.registerStructType(
		"dig.resultSingle",
		() => new resultSingle(),
		() => [$.methodSignature("DotResult", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("dot.Result"))]), $.methodSignature("Extract", [["cw", "dig.containerWriter"], ["decorated", /* @__PURE__ */ $.basicType("bool")], ["v", "reflect.Value"]])],
		resultSingle,
		() => [/* @__PURE__ */ $.structField("Name", /* @__PURE__ */ $.basicType("string"), [0], 0, true), /* @__PURE__ */ $.structField("Type", "reflect.Type", [1], 16, true), /* @__PURE__ */ $.structField("As", /* @__PURE__ */ $.sliceType("reflect.Type"), [2], 32, true)]
	)
}

export class resultObject {
	public get Type(): reflect.Type | null {
		return this._fields.Type
	}

	public set Type(value: reflect.Type | null) {
		this._fields.Type = value
	}

	public get Fields(): $.Slice<resultObjectField> {
		return this._fields.Fields
	}

	public set Fields(value: $.Slice<resultObjectField>) {
		this._fields.Fields = value
	}

	public _fields: {
		Type: reflect.Type | null
		Fields: $.Slice<resultObjectField>
	}

	constructor(init?: Partial<{Type?: reflect.Type | null, Fields?: $.Slice<resultObjectField>}>, __goscriptValue?: boolean) {
		this._fields = {
			Type: init?.Type ?? (null! as reflect.Type | null),
			Fields: init?.Fields ?? (null! as $.Slice<resultObjectField>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): resultObject {
		return new resultObject(this, true)
	}

	public __goscriptAssign(source: resultObject): void {
		const target = this._fields
		const values = source._fields
		target.Type = $.assignFieldValue(target.Type, values.Type, "reflect.Type")
		target.Fields = values.Fields
	}

	public async DotResult(): globalThis.Promise<$.Slice<dot.Result | $.VarRef<dot.Result> | null>> {
		const ro = this;
		let types: $.Slice<dot.Result | $.VarRef<dot.Result> | null> = null! as $.Slice<dot.Result | $.VarRef<dot.Result> | null>
		for (let __goscriptRangeTarget8 = ro.Fields, __goscriptRangeWindow8 = $.sliceRange(__goscriptRangeTarget8), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow8.length; __rangeIndex++) {
			let field = ((__goscriptRangeWindow8.backing[__goscriptRangeWindow8.offset + __rangeIndex] as resultObjectField)).clone()
			types = $.appendSlice(types, await $.markAsStructValue($.cloneStructValue(field)).DotResult(), $.appendZeros.nil)
		}
		return types
	}

	public async Extract(cw: __goscript_container.containerWriter | null, decorated: boolean, v: reflect.Value): globalThis.Promise<void> {
		const ro = this;
		for (let __goscriptRangeTarget9 = ro.Fields, __goscriptRangeWindow9 = $.sliceRange(__goscriptRangeTarget9), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow9.length; __rangeIndex++) {
			let f = ((__goscriptRangeWindow9.backing[__goscriptRangeWindow9.offset + __rangeIndex] as resultObjectField)).clone()
			void (__goscriptAwait = $.pointerValue<Exclude<result, null>>(f.Result).Extract(cw, decorated, $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(v)).Field(f.FieldIndex)))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}

	static __typeInfo = $.registerStructType(
		"dig.resultObject",
		() => new resultObject(),
		() => [$.methodSignature("DotResult", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("dot.Result"))]), $.methodSignature("Extract", [["cw", "dig.containerWriter"], ["decorated", /* @__PURE__ */ $.basicType("bool")], ["v", "reflect.Value"]])],
		resultObject,
		() => [/* @__PURE__ */ $.structField("Type", "reflect.Type", [0], 0, true), /* @__PURE__ */ $.structField("Fields", /* @__PURE__ */ $.sliceType("dig.resultObjectField"), [1], 16, true)]
	)
}

export class resultObjectField {
	// Name of the field in the struct.
	public get FieldName(): string {
		return this._fields.FieldName
	}

	public set FieldName(value: string) {
		this._fields.FieldName = value
	}

	// Index of the field in the struct.
	//
	// We need to track this separately because not all fields of the struct
	// map to results.
	public get FieldIndex(): number {
		return this._fields.FieldIndex
	}

	public set FieldIndex(value: number) {
		this._fields.FieldIndex = value
	}

	// Result produced by this field.
	public get Result(): result | null {
		return this._fields.Result
	}

	public set Result(value: result | null) {
		this._fields.Result = value
	}

	public _fields: {
		FieldName: string
		FieldIndex: number
		Result: result | null
	}

	constructor(init?: Partial<{FieldName?: string, FieldIndex?: number, Result?: result | null}>, __goscriptValue?: boolean) {
		this._fields = {
			FieldName: init?.FieldName ?? ("" as string),
			FieldIndex: init?.FieldIndex ?? (0 as number),
			Result: init?.Result ?? (null! as result | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): resultObjectField {
		return new resultObjectField(this, true)
	}

	public __goscriptAssign(source: resultObjectField): void {
		const target = this._fields
		const values = source._fields
		target.FieldName = values.FieldName
		target.FieldIndex = values.FieldIndex
		target.Result = $.assignFieldValue(target.Result, values.Result, "dig.result")
	}

	public async DotResult(): globalThis.Promise<$.Slice<dot.Result | $.VarRef<dot.Result> | null>> {
		const rof = this;
		return $.pointerValue<Exclude<result, null>>(rof.Result).DotResult()
	}

	static __typeInfo = $.registerStructType(
		"dig.resultObjectField",
		() => new resultObjectField(),
		() => [$.methodSignature("DotResult", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("dot.Result"))])],
		resultObjectField,
		() => [/* @__PURE__ */ $.structField("FieldName", /* @__PURE__ */ $.basicType("string"), [0], 0, true), /* @__PURE__ */ $.structField("FieldIndex", /* @__PURE__ */ $.basicType("int"), [1], 16, true), /* @__PURE__ */ $.structField("Result", "dig.result", [2], 24, true)]
	)
}

export class resultGrouped {
	// Name of the group as specified in the `group:".."` tag.
	public get Group(): string {
		return this._fields.Group
	}

	public set Group(value: string) {
		this._fields.Group = value
	}

	// Type of value produced.
	public get Type(): reflect.Type | null {
		return this._fields.Type
	}

	public set Type(value: reflect.Type | null) {
		this._fields.Type = value
	}

	// Indicates elements of a value are to be injected individually, instead of
	// as a group. Requires the value's slice to be a group. If set, Type will be
	// the type of individual elements rather than the group.
	public get Flatten(): boolean {
		return this._fields.Flatten
	}

	public set Flatten(value: boolean) {
		this._fields.Flatten = value
	}

	// If specified, this is a list of types which the value will be made
	// available as, in addition to its own type.
	public get As(): $.Slice<reflect.Type | null> {
		return this._fields.As
	}

	public set As(value: $.Slice<reflect.Type | null>) {
		this._fields.As = value
	}

	public _fields: {
		Group: string
		Type: reflect.Type | null
		Flatten: boolean
		As: $.Slice<reflect.Type | null>
	}

	constructor(init?: Partial<{Group?: string, Type?: reflect.Type | null, Flatten?: boolean, As?: $.Slice<reflect.Type | null>}>, __goscriptValue?: boolean) {
		this._fields = {
			Group: init?.Group ?? ("" as string),
			Type: init?.Type ?? (null! as reflect.Type | null),
			Flatten: init?.Flatten ?? (false as boolean),
			As: init?.As ?? (null! as $.Slice<reflect.Type | null>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): resultGrouped {
		return new resultGrouped(this, true)
	}

	public __goscriptAssign(source: resultGrouped): void {
		const target = this._fields
		const values = source._fields
		target.Group = values.Group
		target.Type = $.assignFieldValue(target.Type, values.Type, "reflect.Type")
		target.Flatten = values.Flatten
		target.As = values.As
	}

	public DotResult(): $.Slice<dot.Result | $.VarRef<dot.Result> | null> {
		const rt = this;
		let dotResults: $.Slice<dot.Result | $.VarRef<dot.Result> | null> = $.makeSlice<dot.Result | $.VarRef<dot.Result> | null>(0, $.sliceLen(rt.As) + 1)
		dotResults = $.appendOne(dotResults, new dot.Result({Node: new dot.Node({Type: rt.Type, Group: rt.Group})}), $.appendZeros.nil)

		for (let __goscriptRangeTarget10 = rt.As, __goscriptRangeWindow10 = $.sliceRange(__goscriptRangeTarget10), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow10.length; __rangeIndex++) {
			let asType = (__goscriptRangeWindow10.backing[__goscriptRangeWindow10.offset + __rangeIndex] as reflect.Type | null)
			dotResults = $.appendOne(dotResults, new dot.Result({Node: new dot.Node({Type: asType, Group: rt.Group})}), $.appendZeros.nil)
		}
		return dotResults
	}

	public async Extract(cw: __goscript_container.containerWriter | null, decorated: boolean, v: reflect.Value): globalThis.Promise<void> {
		const rt = this;
		// Decorated values are always flattened.
		if (!decorated && !rt.Flatten) {
			void (__goscriptAwait = (cw !== null && (cw as any).__isVarRef !== true && (cw as any).__goValue === undefined ? (cw as Exclude<__goscript_container.containerWriter, null>) : $.pointerValue<Exclude<__goscript_container.containerWriter, null>>(cw)).submitGroupedValue(rt.Group, rt.Type, $.markAsStructValue($.cloneStructValue(v))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			for (let __goscriptRangeTarget11 = rt.As, __goscriptRangeWindow11 = $.sliceRange(__goscriptRangeTarget11), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow11.length; __rangeIndex++) {
				let asType = (__goscriptRangeWindow11.backing[__goscriptRangeWindow11.offset + __rangeIndex] as reflect.Type | null)
				void (__goscriptAwait = (cw !== null && (cw as any).__isVarRef !== true && (cw as any).__goValue === undefined ? (cw as Exclude<__goscript_container.containerWriter, null>) : $.pointerValue<Exclude<__goscript_container.containerWriter, null>>(cw)).submitGroupedValue(rt.Group, asType, $.markAsStructValue($.cloneStructValue(v))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
			return
		}

		if (decorated) {
			void (__goscriptAwait = (cw !== null && (cw as any).__isVarRef !== true && (cw as any).__goValue === undefined ? (cw as Exclude<__goscript_container.containerWriter, null>) : $.pointerValue<Exclude<__goscript_container.containerWriter, null>>(cw)).submitDecoratedGroupedValue(rt.Group, rt.Type, $.markAsStructValue($.cloneStructValue(v))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			return
		}
		for (let i = 0; i < $.markAsStructValue($.cloneStructValue(v)).Len(); i++) {
			void (__goscriptAwait = (cw !== null && (cw as any).__isVarRef !== true && (cw as any).__goValue === undefined ? (cw as Exclude<__goscript_container.containerWriter, null>) : $.pointerValue<Exclude<__goscript_container.containerWriter, null>>(cw)).submitGroupedValue(rt.Group, rt.Type, $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(v)).Index(i)))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}

	static __typeInfo = $.registerStructType(
		"dig.resultGrouped",
		() => new resultGrouped(),
		() => [$.methodSignature("DotResult", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("dot.Result"))]), $.methodSignature("Extract", [["cw", "dig.containerWriter"], ["decorated", /* @__PURE__ */ $.basicType("bool")], ["v", "reflect.Value"]])],
		resultGrouped,
		() => [/* @__PURE__ */ $.structField("Group", /* @__PURE__ */ $.basicType("string"), [0], 0, true), /* @__PURE__ */ $.structField("Type", "reflect.Type", [1], 16, true), /* @__PURE__ */ $.structField("Flatten", /* @__PURE__ */ $.basicType("bool"), [2], 32, true), /* @__PURE__ */ $.structField("As", /* @__PURE__ */ $.sliceType("reflect.Type"), [3], 40, true)]
	)
}

export async function newResult(t: reflect.Type | null, opts: resultOptions): globalThis.Promise<[result | null, $.GoError]> {
	switch ((true as boolean)) {
		case (await __goscript_inout.IsIn((t as any)) || (((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 22) && await __goscript_inout.IsIn(((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as any)))) || await __goscript_inout.embedsType((t as any), __goscript_inout._inPtrType):
		{
			return [null, $.interfaceValue<$.GoError>(__goscript_error.newErrInvalidInput(await fmt.Sprintf("cannot provide parameter objects: %v embeds a dig.In", (t as any)), null), "dig.errInvalidInput", "dig.errInvalidInput")]
			break
		}
		case await __goscript_inout.isError(t):
		{
			return [null, $.interfaceValue<$.GoError>(__goscript_error.newErrInvalidInput("cannot return an error here, return it from the constructor instead", null), "dig.errInvalidInput", "dig.errInvalidInput")]
			break
		}
		case await __goscript_inout.IsOut((t as any)):
		{
			const __goscriptReturn0 = await newResultObject(t, opts)
			return [$.interfaceValue<result | null>(__goscriptReturn0[0], "dig.resultObject", "dig.resultObject"), __goscriptReturn0[1]]
			break
		}
		case await __goscript_inout.embedsType((t as any), __goscript_inout._outPtrType):
		{
			return [null, $.interfaceValue<$.GoError>(__goscript_error.newErrInvalidInput(await fmt.Sprintf("cannot build a result object by embedding *dig.Out, embed dig.Out instead: %v embeds *dig.Out", (t as any)), null), "dig.errInvalidInput", "dig.errInvalidInput")]
			break
		}
		case ((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 22) && await __goscript_inout.IsOut(((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as any)):
		{
			return [null, $.interfaceValue<$.GoError>(__goscript_error.newErrInvalidInput(await fmt.Sprintf("cannot return a pointer to a result object, use a value instead: %v is a pointer to a struct that embeds dig.Out", (t as any)), null), "dig.errInvalidInput", "dig.errInvalidInput")]
			break
		}
		case $.stringLen(opts.Group) > 0:
		{
			let [g, err] = __goscript_group.parseGroupString(opts.Group)
			if (err != null) {
				return [null, $.interfaceValue<$.GoError>(__goscript_error.newErrInvalidInput(await fmt.Sprintf("cannot parse group %q", opts.Group), err), "dig.errInvalidInput", "dig.errInvalidInput")]
			}
			let rg = new resultGrouped({Type: t, Group: g.Name, Flatten: g.Flatten}, true)
			if ($.sliceLen(opts.As) > 0) {
				let asTypes: $.Slice<reflect.Type | null> = null! as $.Slice<reflect.Type | null>
				for (let __goscriptRangeTarget0 = opts.As, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
					let _as = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as any)
					let ifaceType = (__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>(reflect.TypeOf(_as)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					if ($.comparableEqual(ifaceType, t)) {
						continue
					}
					if (!(__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Implements($.pointerValueOrNil(ifaceType)!), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
						return [null, $.interfaceValue<$.GoError>(__goscript_error.newErrInvalidInput(await fmt.Sprintf("invalid dig.As: %v does not implement %v", (t as any), (ifaceType as any)), null), "dig.errInvalidInput", "dig.errInvalidInput")]
					}
					asTypes = $.appendOne(asTypes, ifaceType, $.appendZeros.nil)
				}
				if ($.sliceLen(asTypes) > 0) {
					rg.Type = $.arrayIndex(asTypes!, 0)
					rg.As = $.goSlice(asTypes, 1, undefined)
				}
			}
			if (g.Soft) {
				return [null, $.interfaceValue<$.GoError>(__goscript_error.newErrInvalidInput(await fmt.Sprintf("cannot use soft with result value groups: soft was used with group:%q", g.Name), null), "dig.errInvalidInput", "dig.errInvalidInput")]
			}
			if (g.Flatten) {
				if ((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 23) {
					return [null, $.interfaceValue<$.GoError>(__goscript_error.newErrInvalidInput(await fmt.Sprintf("flatten can be applied to slices only: %v is not a slice", (t as any)), null), "dig.errInvalidInput", "dig.errInvalidInput")]
				}
				rg.Type = (__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>(rg.Type).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
			return [$.interfaceValue<result | null>((rg).clone(), "dig.resultGrouped", "dig.resultGrouped"), null]
			break
		}
		default:
		{
			const __goscriptReturn1 = await newResultSingle(t, opts)
			return [$.interfaceValue<result | null>(__goscriptReturn1[0], "dig.resultSingle", "dig.resultSingle"), __goscriptReturn1[1]]
			break
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export async function walkResult(r: result | null, v: resultVisitor | null): globalThis.Promise<void> {
	v = (__goscriptAwait = (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? (v as Exclude<resultVisitor, null>) : $.pointerValue<Exclude<resultVisitor, null>>(v)).Visit(r), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	if (v == null) {
		return
	}

	{
		const __goscriptTypeSwitchValue = r
		switch (true) {
			case $.is(__goscriptTypeSwitchValue, "dig.resultSingle") || $.is(__goscriptTypeSwitchValue, "dig.resultGrouped"):
				{
					let res = __goscriptTypeSwitchValue
				}
				break
			case $.typeAssert<resultObject>(__goscriptTypeSwitchValue, "dig.resultObject").ok:
				{
					let res: resultObject = $.markAsStructValue($.cloneStructValue($.typeAssert<resultObject>(__goscriptTypeSwitchValue, "dig.resultObject").value))
					let w: resultVisitor | null = v
					for (let __goscriptRangeTarget1 = res.Fields, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
						let f = ((__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as resultObjectField)).clone()
						{
							let __goscriptShadow0 = (__goscriptAwait = (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? (w as Exclude<resultVisitor, null>) : $.pointerValue<Exclude<resultVisitor, null>>(w)).AnnotateWithField((f).clone()), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
							if (__goscriptShadow0 != null) {
								await walkResult(f.Result, __goscriptShadow0)
							}
						}
					}
				}
				break
			case $.typeAssert<resultList>(__goscriptTypeSwitchValue, "dig.resultList").ok:
				{
					let res: resultList = $.markAsStructValue($.cloneStructValue($.typeAssert<resultList>(__goscriptTypeSwitchValue, "dig.resultList").value))
					let w: resultVisitor | null = v
					for (let __goscriptRangeTarget2 = res.Results, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), i = 0; i < __goscriptRangeWindow2.length; i++) {
						let r = (__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + i] as result | null)
						{
							let __goscriptShadow1 = (__goscriptAwait = (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? (w as Exclude<resultVisitor, null>) : $.pointerValue<Exclude<resultVisitor, null>>(w)).AnnotateWithPosition(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
							if (__goscriptShadow1 != null) {
								await walkResult(r, __goscriptShadow1)
							}
						}
					}
				}
				break
			default:
				{
					let res: any = __goscriptTypeSwitchValue
					await digerror.BugPanicf("received unknown result type %T", $.arrayToSlice<any>([(res as any)]))
				}
				break
		}
	}
}

export async function newResultList(ctype: reflect.Type | null, opts: resultOptions): globalThis.Promise<[resultList, $.GoError]> {
	let numOut = (__goscriptAwait = (ctype !== null && (ctype as any).__isVarRef !== true && (ctype as any).__goValue === undefined ? (ctype as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(ctype)).NumOut(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	let rl = new resultList({ctype: ctype, Results: $.makeSlice<result | null>(0, numOut), resultIndexes: $.makeSlice<number>(numOut, undefined, "number")}, true)

	let resultIdx = 0
	for (let i = 0; i < numOut; i++) {
		let t = (__goscriptAwait = (ctype !== null && (ctype as any).__isVarRef !== true && (ctype as any).__goValue === undefined ? (ctype as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(ctype)).Out(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		if (await __goscript_inout.isError(t)) {
			$.sliceElems(rl.resultIndexes!)[$.sliceSlot(rl.resultIndexes!, i)] = -1
			continue
		}

		let [r, err] = await newResult(t, opts)
		if (err != null) {
			return [(rl).clone(), $.interfaceValue<$.GoError>(__goscript_error.newErrInvalidInput(await fmt.Sprintf("bad result %d", $.basicInterfaceValue(i + 1, "int")), err), "dig.errInvalidInput", "dig.errInvalidInput")]
		}

		rl.Results = $.appendOne(rl.Results, r, $.appendZeros.nil)
		$.sliceElems(rl.resultIndexes!)[$.sliceSlot(rl.resultIndexes!, i)] = resultIdx
		resultIdx++
	}

	return [(rl).clone(), null]
}

export async function newResultSingle(t: reflect.Type | null, opts: resultOptions): globalThis.Promise<[resultSingle, $.GoError]> {
	let r = new resultSingle({Type: t, Name: opts.Name}, true)

	let asTypes: $.Slice<reflect.Type | null> = null! as $.Slice<reflect.Type | null>

	for (let __goscriptRangeTarget7 = opts.As, __goscriptRangeWindow7 = $.sliceRange(__goscriptRangeTarget7), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow7.length; __rangeIndex++) {
		let _as = (__goscriptRangeWindow7.backing[__goscriptRangeWindow7.offset + __rangeIndex] as any)
		let ifaceType = (__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>(reflect.TypeOf(_as)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		if ($.comparableEqual(ifaceType, t)) {
			// Special case:
			//   c.Provide(func() io.Reader, As(new(io.Reader)))
			// Ignore instead of erroring out.
			continue
		}
		if (!(__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Implements($.pointerValueOrNil(ifaceType)!), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
			return [(r).clone(), $.interfaceValue<$.GoError>(__goscript_error.newErrInvalidInput(await fmt.Sprintf("invalid dig.As: %v does not implement %v", (t as any), (ifaceType as any)), null), "dig.errInvalidInput", "dig.errInvalidInput")]
		}
		asTypes = $.appendOne(asTypes, ifaceType, $.appendZeros.nil)
	}

	if ($.sliceLen(asTypes) == 0) {
		return [(r).clone(), null]
	}

	return [new resultSingle({Type: $.arrayIndex(asTypes!, 0), Name: opts.Name, As: $.goSlice(asTypes, 1, undefined)}, true), null]
}

export async function newResultObject(t: reflect.Type | null, opts: resultOptions): globalThis.Promise<[resultObject, $.GoError]> {
	let ro = new resultObject({Type: t}, true)
	if ($.stringLen(opts.Name) > 0) {
		return [(ro).clone(), $.interfaceValue<$.GoError>(__goscript_error.newErrInvalidInput(await fmt.Sprintf("cannot specify a name for result objects: %v embeds dig.Out", (t as any)), null), "dig.errInvalidInput", "dig.errInvalidInput")]
	}

	if ($.stringLen(opts.Group) > 0) {
		return [(ro).clone(), $.interfaceValue<$.GoError>(__goscript_error.newErrInvalidInput(await fmt.Sprintf("cannot specify a group for result objects: %v embeds dig.Out", (t as any)), null), "dig.errInvalidInput", "dig.errInvalidInput")]
	}

	for (let i = 0; i < (__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).NumField(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); i++) {
		let f = $.markAsStructValue($.cloneStructValue(((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Field(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as reflect.StructField)))
		if ($.comparableEqual(f.Type, __goscript_inout._outType)) {
			// Skip over the dig.Out embed.
			continue
		}

		let [rof, err] = await newResultObjectField(i, f, (opts).clone())
		if (err != null) {
			return [(ro).clone(), $.interfaceValue<$.GoError>(__goscript_error.newErrInvalidInput(await fmt.Sprintf("bad field %q of %v", f.Name, (t as any)), err), "dig.errInvalidInput", "dig.errInvalidInput")]
		}

		ro.Fields = $.appendOne(ro.Fields, (rof).clone())
	}
	return [(ro).clone(), null]
}

export async function newResultObjectField(idx: number, f: reflect.StructField, opts: resultOptions): globalThis.Promise<[resultObjectField, $.GoError]> {
	let rof = new resultObjectField({FieldName: f.Name, FieldIndex: idx}, true)

	let r: result | null = null! as result | null
	switch ((true as boolean)) {
		case !$.stringEqual(f.PkgPath, ""):
		{
			return [(rof).clone(), $.interfaceValue<$.GoError>(__goscript_error.newErrInvalidInput(await fmt.Sprintf("unexported fields not allowed in dig.Out, did you mean to export %q (%v)?", f.Name, (f.Type as any)), null), "dig.errInvalidInput", "dig.errInvalidInput")]
			break
		}
		case !$.stringEqual(reflect.StructTag_Get(f.Tag, "group"), ""):
		{
			let err: $.GoError = null! as $.GoError
			let __goscriptTuple0: any = await newResultGrouped(f)
			r = $.interfaceValue<result | null>(__goscriptTuple0[0], "dig.resultGrouped", "dig.resultGrouped")
			err = __goscriptTuple0[1]
			if (err != null) {
				return [(rof).clone(), err]
			}
			break
		}
		default:
		{
			let err: $.GoError = null! as $.GoError
			{
				let name = reflect.StructTag_Get(f.Tag, "name")
				if ($.stringLen(name) > 0) {
					// can modify in-place because options are passed-by-value.
					opts.Name = name
				}
			}
			let __goscriptTuple1: any = await newResult(f.Type, opts)
			r = __goscriptTuple1[0]
			err = __goscriptTuple1[1]
			if (err != null) {
				return [(rof).clone(), err]
			}
			break
		}
	}

	rof.Result = r
	return [(rof).clone(), null]
}

export async function newResultGrouped(f: reflect.StructField): globalThis.Promise<[resultGrouped, $.GoError]> {
	let [g, err] = __goscript_group.parseGroupString(reflect.StructTag_Get(f.Tag, "group"))
	if (err != null) {
		return [new resultGrouped(undefined, true), err]
	}
	let rg = new resultGrouped({Group: g.Name, Flatten: g.Flatten, Type: f.Type}, true)
	let name = reflect.StructTag_Get(f.Tag, "name")
	let [optional, ] = await __goscript_inout.isFieldOptional(f)
	switch ((true as boolean)) {
		case g.Flatten && ((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>(f.Type).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 23):
		{
			return [(rg).clone(), $.interfaceValue<$.GoError>(__goscript_error.newErrInvalidInput(await fmt.Sprintf("flatten can be applied to slices only: field %q (%v) is not a slice", f.Name, (f.Type as any)), null), "dig.errInvalidInput", "dig.errInvalidInput")]
			break
		}
		case g.Soft:
		{
			return [(rg).clone(), $.interfaceValue<$.GoError>(__goscript_error.newErrInvalidInput(await fmt.Sprintf("cannot use soft with result value groups: soft was used with group %q", rg.Group), null), "dig.errInvalidInput", "dig.errInvalidInput")]
			break
		}
		case !$.stringEqual(name, ""):
		{
			return [(rg).clone(), $.interfaceValue<$.GoError>(__goscript_error.newErrInvalidInput(await fmt.Sprintf("cannot use named values with value groups: name:%q provided with group:%q", name, rg.Group), null), "dig.errInvalidInput", "dig.errInvalidInput")]
			break
		}
		case optional:
		{
			return [(rg).clone(), $.interfaceValue<$.GoError>(__goscript_error.newErrInvalidInput("value groups cannot be optional", null), "dig.errInvalidInput", "dig.errInvalidInput")]
			break
		}
	}
	if (g.Flatten) {
		rg.Type = (__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>(f.Type).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	return [(rg).clone(), null]
}

var __goscriptAwait: any
