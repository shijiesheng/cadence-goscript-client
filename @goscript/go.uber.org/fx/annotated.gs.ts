// Generated file based on annotated.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/context/index.js"

import * as errors from "@goscript/errors/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as strings from "@goscript/strings/index.js"

import * as dig from "@goscript/go.uber.org/dig/index.js"

import * as fxreflect from "@goscript/go.uber.org/fx/internal/fxreflect/index.js"

import type * as io from "@goscript/io/index.js"

import * as __goscript_app from "./app.gs.ts"

import * as __goscript_inout from "./inout.gs.ts"

import * as __goscript_lifecycle from "./lifecycle.gs.ts"
import "@goscript/context/index.js"
import "@goscript/errors/index.js"
import "@goscript/fmt/index.js"
import "@goscript/reflect/index.js"
import "@goscript/strings/index.js"
import "@goscript/go.uber.org/dig/index.js"
import "@goscript/go.uber.org/fx/internal/fxreflect/index.js"
import "./app.gs.ts"
import "./inout.gs.ts"
import "./lifecycle.gs.ts"

$.registerTypePackagePath("go.uber.org/fx", ["fx.Annotated", "fx.Annotation", "fx.annotationError", "fx.paramTagsAnnotation", "fx.resultTagsAnnotation", "fx.outStructInfo", "fx._lifecycleHookAnnotationType", "fx.lifecycleHookAnnotation", "fx.key", "fx.asAnnotation", "fx.asType", "fx.self", "fx.fromAnnotation", "fx.annotated"])

export type Annotation = {
	apply(_p0: annotated | $.VarRef<annotated> | null): $.GoError | globalThis.Promise<$.GoError>
	build(_p0: annotated | $.VarRef<annotated> | null): [any, $.GoError] | globalThis.Promise<[any, $.GoError]>
}

$.registerInterfaceType(
	"fx.Annotation",
	null,
	[$.methodSignature("apply", [/* @__PURE__ */ $.pointerType("fx.annotated")], ["error"]), $.methodSignature("build", [/* @__PURE__ */ $.pointerType("fx.annotated")], [{ kind: $.TypeKind.Interface, methods: [] }, "error"])]
);

export type _lifecycleHookAnnotationType = number

export class Annotated {
	// If specified, this will be used as the name for all non-error values returned
	// by the constructor. For more information on named values, see the documentation
	// for the fx.Out type.
	//
	// A name option may not be provided if a group option is provided.
	public get Name(): string {
		return this._fields.Name
	}

	public set Name(value: string) {
		this._fields.Name = value
	}

	// If specified, this will be used as the group name for all non-error values returned
	// by the constructor. For more information on value groups, see the package documentation.
	//
	// A group option may not be provided if a name option is provided.
	//
	// Similar to group tags, the group name may be followed by a `,flatten`
	// option to indicate that each element in the slice returned by the
	// constructor should be injected into the value group individually.
	public get Group(): string {
		return this._fields.Group
	}

	public set Group(value: string) {
		this._fields.Group = value
	}

	// Target is the constructor or value being annotated with fx.Annotated.
	public get Target(): any {
		return this._fields.Target
	}

	public set Target(value: any) {
		this._fields.Target = value
	}

	public _fields: {
		Name: string
		Group: string
		Target: any
	}

	constructor(init?: Partial<{Name?: string, Group?: string, Target?: any}>, __goscriptValue?: boolean) {
		this._fields = {
			Name: init?.Name ?? ("" as string),
			Group: init?.Group ?? ("" as string),
			Target: init?.Target ?? (null! as any)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Annotated {
		return new Annotated(this, true)
	}

	public __goscriptAssign(source: Annotated): void {
		const target = this._fields
		const values = source._fields
		target.Name = values.Name
		target.Group = values.Group
		target.Target = $.assignFieldValue(target.Target, values.Target, { kind: $.TypeKind.Interface, methods: [] })
	}

	public async String(): globalThis.Promise<string> {
		const a = this;
		let fields: $.Slice<string> = null! as $.Slice<string>
		if ($.stringLen(a.Name) > 0) {
			fields = $.appendOne(fields, await fmt.Sprintf("Name: %q", a.Name))
		}
		if ($.stringLen(a.Group) > 0) {
			fields = $.appendOne(fields, await fmt.Sprintf("Group: %q", a.Group))
		}
		if (a.Target != null) {
			fields = $.appendOne(fields, await fmt.Sprintf("Target: %v", await fxreflect.FuncName(a.Target)))
		}
		return fmt.Sprintf("fx.Annotated{%v}", strings.Join(fields, ", "))
	}

	static __typeInfo = $.registerStructType(
		"fx.Annotated",
		() => new Annotated(),
		() => [$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])],
		Annotated,
		() => [/* @__PURE__ */ $.structField("Name", /* @__PURE__ */ $.basicType("string"), [0], 0, true), /* @__PURE__ */ $.structField("Group", /* @__PURE__ */ $.basicType("string"), [1], 16, true), /* @__PURE__ */ $.structField("Target", { kind: $.TypeKind.Interface, methods: [] }, [2], 32, true)]
	)
}

export class annotationError {
	public get target(): any {
		return this._fields.target
	}

	public set target(value: any) {
		this._fields.target = value
	}

	public get err(): $.GoError {
		return this._fields.err
	}

	public set err(value: $.GoError) {
		this._fields.err = value
	}

	public _fields: {
		target: any
		err: $.GoError
	}

	constructor(init?: Partial<{target?: any, err?: $.GoError}>, __goscriptValue?: boolean) {
		this._fields = {
			target: init?.target ?? (null! as any),
			err: init?.err ?? (null! as $.GoError)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): annotationError {
		return new annotationError(this, true)
	}

	public __goscriptAssign(source: annotationError): void {
		const target = this._fields
		const values = source._fields
		target.target = $.assignFieldValue(target.target, values.target, { kind: $.TypeKind.Interface, methods: [] })
		target.err = $.assignFieldValue(target.err, values.err, "error")
	}

	public async Error(): globalThis.Promise<string> {
		const e: annotationError | $.VarRef<annotationError> | null = this;
		return $.pointerValue<Exclude<$.GoError, null>>($.pointerValue<annotationError>(e).err).Error()
	}

	public Unwrap(): $.GoError {
		const e: annotationError | $.VarRef<annotationError> | null = this;
		return $.pointerValue<annotationError>(e).err
	}

	static __typeInfo = $.registerStructType(
		"fx.annotationError",
		() => new annotationError(),
		() => [$.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Unwrap", [], ["error"], true)],
		annotationError,
		() => [/* @__PURE__ */ $.structField("target", { kind: $.TypeKind.Interface, methods: [] }, [0], 0, false, { pkgPath: "go.uber.org/fx" }), /* @__PURE__ */ $.structField("err", "error", [1], 16, false, { pkgPath: "go.uber.org/fx" })]
	)
}

export class paramTagsAnnotation {
	public get tags(): $.Slice<string> {
		return this._fields.tags
	}

	public set tags(value: $.Slice<string>) {
		this._fields.tags = value
	}

	public _fields: {
		tags: $.Slice<string>
	}

	constructor(init?: Partial<{tags?: $.Slice<string>}>, __goscriptValue?: boolean) {
		this._fields = {
			tags: init?.tags ?? (null! as $.Slice<string>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): paramTagsAnnotation {
		return new paramTagsAnnotation(this, true)
	}

	public __goscriptAssign(source: paramTagsAnnotation): void {
		const target = this._fields
		const values = source._fields
		target.tags = values.tags
	}

	public apply(ann: annotated | $.VarRef<annotated> | null): $.GoError {
		const pt = this;
		const ann$: annotated = ann == null ? $.pointerTarget<annotated>(ann) : (ann as any).__isVarRef === true ? (ann as any).value : (ann as any).__goValue === undefined ? (ann as any) : $.pointerTarget<annotated>(ann)
		if ($.sliceLen((ann$ as annotated).ParamTags) > 0) {
			return errors.New("cannot apply more than one line of ParamTags")
		}
		for (let __goscriptRangeTarget0 = pt.tags, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
			let tag = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as string)
			{
				let err = verifyAnnotateTag(tag)
				if (err != null) {
					return err
				}
			}
		}
		;(ann$ as annotated).ParamTags = pt.tags
		return null
	}

	public async build(ann: annotated | $.VarRef<annotated> | null): globalThis.Promise<[any, $.GoError]> {
		const pt = this;
		let __goscriptTuple0: any = await pt.parameters(ann)
		let paramTypes: $.Slice<reflect.Type | null> = __goscriptTuple0[0]
		let remap: ((_p0: $.Slice<reflect.Value>) => $.Slice<reflect.Value> | globalThis.Promise<$.Slice<reflect.Value>>) | null = __goscriptTuple0[1]
		let __goscriptTuple1: any = await (ann !== null && (ann as any).__isVarRef !== true && (ann as any).__goValue === undefined ? ((ann as any) as annotated).currentResultTypes() : annotated.prototype.currentResultTypes.call(ann))
		let resultTypes: $.Slice<reflect.Type | null> = __goscriptTuple1[0]

		let origFn = $.markAsStructValue($.cloneStructValue(reflect.ValueOf($.pointerValue<annotated>(ann).Target)))
		let newFnType = reflect.FuncOf(paramTypes, resultTypes, false)
		let newFn = $.markAsStructValue($.cloneStructValue(reflect.MakeFunc($.pointerValueOrNil(newFnType)!, $.functionValue(async (args: $.Slice<reflect.Value>): globalThis.Promise<$.Slice<reflect.Value>> => {
			args = $.syncResult(remap!(args))
			return await $.markAsStructValue($.cloneStructValue(origFn)).Call(args)
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType("reflect.Value")], results: [/* @__PURE__ */ $.sliceType("reflect.Value")] } as $.FunctionTypeInfo)))))
		return [$.markAsStructValue($.cloneStructValue(newFn)).Interface(), null]
	}

	public async parameters(ann: annotated | $.VarRef<annotated> | null): globalThis.Promise<[$.Slice<reflect.Type | null>, ((_p0: $.Slice<reflect.Value>) => $.Slice<reflect.Value> | globalThis.Promise<$.Slice<reflect.Value>>) | null]> {
		const pt = this;
		let types: $.Slice<reflect.Type | null> = null! as $.Slice<reflect.Type | null>
		let remap: ((_p0: $.Slice<reflect.Value>) => $.Slice<reflect.Value> | globalThis.Promise<$.Slice<reflect.Value>>) | null = null! as ((_p0: $.Slice<reflect.Value>) => $.Slice<reflect.Value> | globalThis.Promise<$.Slice<reflect.Value>>) | null
		let ft = reflect.TypeOf($.pointerValue<annotated>(ann).Target)
		types = $.makeSlice<reflect.Type | null>((__goscriptAwait = (ft !== null && (ft as any).__isVarRef !== true && (ft as any).__goValue === undefined ? (ft as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(ft)).NumIn(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
		for (let __goscriptSliceWindow0 = $.sliceRange(types), i = 0; i < (__goscriptAwait = (ft !== null && (ft as any).__isVarRef !== true && (ft as any).__goValue === undefined ? (ft as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(ft)).NumIn(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); i++) {
			;(__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)] = (__goscriptAwait = (ft !== null && (ft as any).__isVarRef !== true && (ft as any).__goValue === undefined ? (ft as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(ft)).In(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}

		// No parameter annotations. Return the original types
		// and an identity function.
		if ($.sliceLen(pt.tags) == 0) {
			return [types, $.functionValue((args: $.Slice<reflect.Value>): $.Slice<reflect.Value> => {
				return args
			}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType("reflect.Value")], results: [/* @__PURE__ */ $.sliceType("reflect.Value")] } as $.FunctionTypeInfo))]
		}

		// Turn parameters into an fx.In struct.
		let inFields: $.Slice<reflect.StructField> = $.arrayToSlice<reflect.StructField>([$.markAsStructValue($.cloneStructValue(__goscript_get__inAnnotationField()))])

		// there was a variadic argument, so it was pre-transformed
		if (($.sliceLen(types) > 0) && await isIn($.arrayIndex(types!, 0))) {
			let paramType = $.arrayIndex(types!, 0)

			for (let i = 1; i < (__goscriptAwait = (paramType !== null && (paramType as any).__isVarRef !== true && (paramType as any).__goValue === undefined ? (paramType as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(paramType)).NumField(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); i++) {
				let origField = $.markAsStructValue($.cloneStructValue(((__goscriptAwait = (paramType !== null && (paramType as any).__isVarRef !== true && (paramType as any).__goValue === undefined ? (paramType as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(paramType)).Field(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as reflect.StructField)))
				let field = $.markAsStructValue(new reflect.StructField({Name: origField.Name, Type: origField.Type, Tag: origField.Tag}))
				if ((i - 1) < $.sliceLen(pt.tags)) {
					field.Tag = $.arrayIndex(pt.tags!, i - 1)
				}

				inFields = $.appendOne(inFields, $.markAsStructValue($.cloneStructValue(field)))
			}

			types = $.arrayToSlice<reflect.Type | null>([reflect.StructOf(inFields)])
			return [types, $.functionValue(async (args: $.Slice<reflect.Value>): globalThis.Promise<$.Slice<reflect.Value>> => {
				let param = $.markAsStructValue($.cloneStructValue($.arrayIndex(args!, 0)))
				$.assignStruct($.sliceElems(args!)[$.sliceSlot(args!, 0)], $.markAsStructValue($.cloneStructValue(reflect.New($.pointerValueOrNil(paramType)!))).Elem())
				for (let __goscriptSliceWindow1 = $.sliceRange(args), i = 1; i < (__goscriptAwait = (paramType !== null && (paramType as any).__isVarRef !== true && (paramType as any).__goValue === undefined ? (paramType as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(paramType)).NumField(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); i++) {
					$.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, 0)] as reflect.Value))).Field(i))).Set($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(param)).Field(i))))
				}
				return args
			}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType("reflect.Value")], results: [/* @__PURE__ */ $.sliceType("reflect.Value")] } as $.FunctionTypeInfo))]
		}

		for (let __goscriptRangeTarget1 = types, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), i = 0; i < __goscriptRangeWindow1.length; i++) {
			let t = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + i] as reflect.Type | null)
			let field = (await (async () => { const __goscriptLiteralField2 = await fmt.Sprintf("Field%d", $.basicInterfaceValue(i, "int")); return $.markAsStructValue(new reflect.StructField({Name: __goscriptLiteralField2, Type: t})) })())
			if (i < $.sliceLen(pt.tags)) {
				field.Tag = $.arrayIndex(pt.tags!, i)
			}

			inFields = $.appendOne(inFields, $.markAsStructValue($.cloneStructValue(field)))
		}

		types = $.arrayToSlice<reflect.Type | null>([reflect.StructOf(inFields)])
		return [types, $.functionValue(async (args: $.Slice<reflect.Value>): globalThis.Promise<$.Slice<reflect.Value>> => {
			let params: reflect.Value = $.markAsStructValue($.cloneStructValue($.arrayIndex(args!, 0)))
			args = $.goSlice(args, undefined, 0)
			for (let i = 0; i < (__goscriptAwait = (ft !== null && (ft as any).__isVarRef !== true && (ft as any).__goValue === undefined ? (ft as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(ft)).NumIn(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); i++) {
				args = $.appendOne(args, $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(params)).Field(i + 1))))
			}
			return args
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType("reflect.Value")], results: [/* @__PURE__ */ $.sliceType("reflect.Value")] } as $.FunctionTypeInfo))]
	}

	static __typeInfo = $.registerStructType(
		"fx.paramTagsAnnotation",
		() => new paramTagsAnnotation(),
		() => [$.methodSignature("apply", [["ann", /* @__PURE__ */ $.pointerType("fx.annotated")]], ["error"]), $.methodSignature("build", [["ann", /* @__PURE__ */ $.pointerType("fx.annotated")]], [{ kind: $.TypeKind.Interface, methods: [] }, "error"]), $.methodSignature("parameters", [["ann", /* @__PURE__ */ $.pointerType("fx.annotated")]], [["types", /* @__PURE__ */ $.sliceType("reflect.Type")], ["remap", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType("reflect.Value")], results: [/* @__PURE__ */ $.sliceType("reflect.Value")] } as $.FunctionTypeInfo)]])],
		paramTagsAnnotation,
		() => [/* @__PURE__ */ $.structField("tags", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")), [0], 0, false, { pkgPath: "go.uber.org/fx" })]
	)
}

export class resultTagsAnnotation {
	public get tags(): $.Slice<string> {
		return this._fields.tags
	}

	public set tags(value: $.Slice<string>) {
		this._fields.tags = value
	}

	public _fields: {
		tags: $.Slice<string>
	}

	constructor(init?: Partial<{tags?: $.Slice<string>}>, __goscriptValue?: boolean) {
		this._fields = {
			tags: init?.tags ?? (null! as $.Slice<string>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): resultTagsAnnotation {
		return new resultTagsAnnotation(this, true)
	}

	public __goscriptAssign(source: resultTagsAnnotation): void {
		const target = this._fields
		const values = source._fields
		target.tags = values.tags
	}

	public apply(ann: annotated | $.VarRef<annotated> | null): $.GoError {
		const rt = this;
		const ann$: annotated = ann == null ? $.pointerTarget<annotated>(ann) : (ann as any).__isVarRef === true ? (ann as any).value : (ann as any).__goValue === undefined ? (ann as any) : $.pointerTarget<annotated>(ann)
		if ($.sliceLen((ann$ as annotated).ResultTags) > 0) {
			return errors.New("cannot apply more than one line of ResultTags")
		}
		for (let __goscriptRangeTarget2 = rt.tags, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow2.length; __rangeIndex++) {
			let tag = (__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + __rangeIndex] as string)
			{
				let err = verifyAnnotateTag(tag)
				if (err != null) {
					return err
				}
			}
		}
		;(ann$ as annotated).ResultTags = rt.tags
		return null
	}

	public async build(ann: annotated | $.VarRef<annotated> | null): globalThis.Promise<[any, $.GoError]> {
		const rt = this;
		let paramTypes: $.Slice<reflect.Type | null> = await (ann !== null && (ann as any).__isVarRef !== true && (ann as any).__goValue === undefined ? ((ann as any) as annotated).currentParamTypes() : annotated.prototype.currentParamTypes.call(ann))
		let __goscriptTuple2: any = await rt.results(ann)
		let resultTypes: $.Slice<reflect.Type | null> = __goscriptTuple2[0]
		let remapResults: ((_p0: $.Slice<reflect.Value>) => $.Slice<reflect.Value> | globalThis.Promise<$.Slice<reflect.Value>>) | null = __goscriptTuple2[1]
		let origFn = $.markAsStructValue($.cloneStructValue(reflect.ValueOf($.pointerValue<annotated>(ann).Target)))
		let newFnType = reflect.FuncOf(paramTypes, resultTypes, false)
		let newFn = $.markAsStructValue($.cloneStructValue(reflect.MakeFunc($.pointerValueOrNil(newFnType)!, $.functionValue(async (args: $.Slice<reflect.Value>): globalThis.Promise<$.Slice<reflect.Value>> => {
			let results: $.Slice<reflect.Value> = await $.markAsStructValue($.cloneStructValue(origFn)).Call(args)
			return $.syncResult(remapResults!(results))
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType("reflect.Value")], results: [/* @__PURE__ */ $.sliceType("reflect.Value")] } as $.FunctionTypeInfo)))))
		return [$.markAsStructValue($.cloneStructValue(newFn)).Interface(), null]
	}

	public async results(ann: annotated | $.VarRef<annotated> | null): globalThis.Promise<[$.Slice<reflect.Type | null>, ((_p0: $.Slice<reflect.Value>) => $.Slice<reflect.Value> | globalThis.Promise<$.Slice<reflect.Value>>) | null]> {
		const rt = this;
		let types: $.Slice<reflect.Type | null> = null! as $.Slice<reflect.Type | null>
		let remap: ((_p0: $.Slice<reflect.Value>) => $.Slice<reflect.Value> | globalThis.Promise<$.Slice<reflect.Value>>) | null = null! as ((_p0: $.Slice<reflect.Value>) => $.Slice<reflect.Value> | globalThis.Promise<$.Slice<reflect.Value>>) | null
		let __goscriptTuple3: any = await (ann !== null && (ann as any).__isVarRef !== true && (ann as any).__goValue === undefined ? ((ann as any) as annotated).currentResultTypes() : annotated.prototype.currentResultTypes.call(ann))
		types = __goscriptTuple3[0]
		let hasError = __goscriptTuple3[1]

		if (hasError) {
			types = $.goSlice(types, undefined, $.sliceLen(types) - 1)
		}

		// No result annotations. Return the original types
		// and an identity function.
		if ($.sliceLen(rt.tags) == 0) {
			return [types, $.functionValue((results: $.Slice<reflect.Value>): $.Slice<reflect.Value> => {
				return results
			}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType("reflect.Value")], results: [/* @__PURE__ */ $.sliceType("reflect.Value")] } as $.FunctionTypeInfo))]
		}

		// if there's no Out struct among the return types, there was no As annotation applied
		// just replace original result types with an Out struct and apply tags
		let newOut: outStructInfo = new outStructInfo(undefined, true)
		let existingOuts: $.Slice<reflect.Type | null> = null! as $.Slice<reflect.Type | null>

		newOut.Fields = $.arrayToSlice<reflect.StructField>([$.markAsStructValue($.cloneStructValue(__goscript_get__outAnnotationField()))])
		newOut.Offsets = $.arrayToSlice<number>([])

		for (let __goscriptRangeTarget4 = types, __goscriptRangeWindow3 = $.sliceRange(__goscriptRangeTarget4), i = 0; i < __goscriptRangeWindow3.length; i++) {
			let t = (__goscriptRangeWindow3.backing[__goscriptRangeWindow3.offset + i] as reflect.Type | null)
			if (!await isOut(t)) {
				// this must be from the original function.
				// apply the tags
				let field = (await (async () => { const __goscriptLiteralField3 = await fmt.Sprintf("Field%d", $.basicInterfaceValue(i, "int")); return $.markAsStructValue(new reflect.StructField({Name: __goscriptLiteralField3, Type: t})) })())
				if (i < $.sliceLen(rt.tags)) {
					field.Tag = $.arrayIndex(rt.tags!, i)
				}
				newOut.Offsets = $.appendOne(newOut.Offsets, $.sliceLen(newOut.Fields))
				newOut.Fields = $.appendOne(newOut.Fields, $.markAsStructValue($.cloneStructValue(field)))
				continue
			}
			// this must be from an As annotation
			// apply the tags to the existing type
			let taggedFields: $.Slice<reflect.StructField> = $.makeSlice<reflect.StructField>((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).NumField(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), undefined, undefined, () => $.markAsStructValue(new reflect.StructField()))
			$.assignStruct($.sliceElems(taggedFields!)[$.sliceSlot(taggedFields!, 0)], __goscript_get__outAnnotationField())
			for (let __goscriptRangeTarget3 = rt.tags, __goscriptRangeWindow4 = $.sliceRange(__goscriptRangeTarget3), __goscriptSliceWindow2 = $.sliceRange(taggedFields), j = 0; j < __goscriptRangeWindow4.length; j++) {
				let tag = (__goscriptRangeWindow4.backing[__goscriptRangeWindow4.offset + j] as string)
				if ((j + 1) < (__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).NumField(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
					let field = $.markAsStructValue($.cloneStructValue(((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Field(j + 1), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as reflect.StructField)))
					$.assignStruct((__goscriptSliceWindow2.backing as any[])[$.windowSlot(__goscriptSliceWindow2, j + 1)], $.markAsStructValue(new reflect.StructField({Name: field.Name, Type: field.Type, Tag: tag})))
				}
			}
			existingOuts = $.appendOne(existingOuts, reflect.StructOf(taggedFields), $.appendZeros.nil)
		}

		let resType = reflect.StructOf(newOut.Fields)

		let outTypes: $.Slice<reflect.Type | null> = $.arrayToSlice<reflect.Type | null>([resType])
		// append existing outs back to outTypes
		outTypes = $.appendSlice(outTypes, existingOuts, $.appendZeros.nil)
		if (hasError) {
			outTypes = $.appendOne(outTypes, _typeOfError, $.appendZeros.nil)
		}

		return [outTypes, $.functionValue(async (results: $.Slice<reflect.Value>): globalThis.Promise<$.Slice<reflect.Value>> => {
			let outErr: $.GoError = null! as $.GoError
			let outResults: $.Slice<reflect.Value> = null! as $.Slice<reflect.Value>
			outResults = $.appendOne(outResults, $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(reflect.New($.pointerValueOrNil(resType)!))).Elem())))

			let tIdx = 0
			for (let __goscriptRangeTarget5 = results, __goscriptRangeWindow5 = $.sliceRange(__goscriptRangeTarget5), i = 0; i < __goscriptRangeWindow5.length; i++) {
				let r = $.markAsStructValue($.cloneStructValue((__goscriptRangeWindow5.backing[__goscriptRangeWindow5.offset + i] as reflect.Value)))
				if ((i == ($.sliceLen(results) - 1)) && hasError) {
					// If hasError and this is the last item,
					// we are guaranteed that this is an error
					// object.
					{
						let [err, ] = $.typeAssertTuple<$.GoError>($.markAsStructValue($.cloneStructValue(r)).Interface(), "error")
						if (err != null) {
							outErr = err
						}
					}
					continue
				}
				if (i < $.sliceLen(newOut.Offsets)) {
					{
						let fieldIdx = $.arrayIndex(newOut.Offsets!, i)
						if (fieldIdx > 0) {
							// fieldIdx 0 is an invalid index
							// because it refers to uninitialized
							// outs and would point to fx.Out in the
							// struct definition. We need to check this
							// to prevent panic from setting fx.Out to
							// a value.
							$.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue($.arrayIndex(outResults!, 0))).Field(fieldIdx))).Set($.markAsStructValue($.cloneStructValue(r)))
						}
					}
					continue
				}
				if (await isOut($.markAsStructValue($.cloneStructValue(r)).Type())) {
					tIdx++
					if (tIdx < $.sliceLen(outTypes)) {
						let newResult = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(reflect.New($.pointerValueOrNil($.arrayIndex(outTypes!, tIdx))!))).Elem()))
						for (let j = 1; j < (__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>($.arrayIndex(outTypes!, tIdx)).NumField(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); j++) {
							$.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(newResult)).Field(j))).Set($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(r)).Field(j))))
						}
						outResults = $.appendOne(outResults, $.markAsStructValue($.cloneStructValue(newResult)))
					}
				}
			}

			if (hasError) {
				if (outErr != null) {
					outResults = $.appendOne(outResults, $.markAsStructValue($.cloneStructValue(reflect.ValueOf((outErr as any)))))
				} else {
					outResults = $.appendOne(outResults, $.markAsStructValue($.cloneStructValue(_nilError)))
				}
			}

			return outResults
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType("reflect.Value")], results: [/* @__PURE__ */ $.sliceType("reflect.Value")] } as $.FunctionTypeInfo))]
	}

	static __typeInfo = $.registerStructType(
		"fx.resultTagsAnnotation",
		() => new resultTagsAnnotation(),
		() => [$.methodSignature("apply", [["ann", /* @__PURE__ */ $.pointerType("fx.annotated")]], ["error"]), $.methodSignature("build", [["ann", /* @__PURE__ */ $.pointerType("fx.annotated")]], [{ kind: $.TypeKind.Interface, methods: [] }, "error"]), $.methodSignature("results", [["ann", /* @__PURE__ */ $.pointerType("fx.annotated")]], [["types", /* @__PURE__ */ $.sliceType("reflect.Type")], ["remap", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType("reflect.Value")], results: [/* @__PURE__ */ $.sliceType("reflect.Value")] } as $.FunctionTypeInfo)]])],
		resultTagsAnnotation,
		() => [/* @__PURE__ */ $.structField("tags", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")), [0], 0, false, { pkgPath: "go.uber.org/fx" })]
	)
}

export class outStructInfo {
	public get Fields(): $.Slice<reflect.StructField> {
		return this._fields.Fields
	}

	public set Fields(value: $.Slice<reflect.StructField>) {
		this._fields.Fields = value
	}

	public get Offsets(): $.Slice<number> {
		return this._fields.Offsets
	}

	public set Offsets(value: $.Slice<number>) {
		this._fields.Offsets = value
	}

	public _fields: {
		Fields: $.Slice<reflect.StructField>
		Offsets: $.Slice<number>
	}

	constructor(init?: Partial<{Fields?: $.Slice<reflect.StructField>, Offsets?: $.Slice<number>}>, __goscriptValue?: boolean) {
		this._fields = {
			Fields: init?.Fields ?? (null! as $.Slice<reflect.StructField>),
			Offsets: init?.Offsets ?? (null! as $.Slice<number>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): outStructInfo {
		return new outStructInfo(this, true)
	}

	public __goscriptAssign(source: outStructInfo): void {
		const target = this._fields
		const values = source._fields
		target.Fields = values.Fields
		target.Offsets = values.Offsets
	}

	static __typeInfo = $.registerStructType(
		"fx.outStructInfo",
		() => new outStructInfo(),
		() => [],
		outStructInfo,
		() => [/* @__PURE__ */ $.structField("Fields", /* @__PURE__ */ $.sliceType("reflect.StructField"), [0], 0, true), /* @__PURE__ */ $.structField("Offsets", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")), [1], 24, true)]
	)
}

export class lifecycleHookAnnotation {
	public get Type(): _lifecycleHookAnnotationType {
		return this._fields.Type
	}

	public set Type(value: _lifecycleHookAnnotationType) {
		this._fields.Type = value
	}

	public get Target(): any {
		return this._fields.Target
	}

	public set Target(value: any) {
		this._fields.Target = value
	}

	public _fields: {
		Type: _lifecycleHookAnnotationType
		Target: any
	}

	constructor(init?: Partial<{Type?: _lifecycleHookAnnotationType, Target?: any}>, __goscriptValue?: boolean) {
		this._fields = {
			Type: init?.Type ?? (0 as _lifecycleHookAnnotationType),
			Target: init?.Target ?? (null! as any)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): lifecycleHookAnnotation {
		return new lifecycleHookAnnotation(this, true)
	}

	public __goscriptAssign(source: lifecycleHookAnnotation): void {
		const target = this._fields
		const values = source._fields
		target.Type = values.Type
		target.Target = $.assignFieldValue(target.Target, values.Target, { kind: $.TypeKind.Interface, methods: [] })
	}

	public String(): string {
		const la: lifecycleHookAnnotation | $.VarRef<lifecycleHookAnnotation> | null = this;
		let name = "UnknownHookAnnotation"
		switch ($.pointerValue<lifecycleHookAnnotation>(la).Type) {
			case 1:
			{
				name = __goscript_app._onStartHook
				break
			}
			case 2:
			{
				name = __goscript_app._onStopHook
				break
			}
		}
		return name
	}

	public async apply(ann: annotated | $.VarRef<annotated> | null): globalThis.Promise<$.GoError> {
		const la: lifecycleHookAnnotation | $.VarRef<lifecycleHookAnnotation> | null = this;
		const la$: lifecycleHookAnnotation = la == null ? $.pointerTarget<lifecycleHookAnnotation>(la) : (la as any).__isVarRef === true ? (la as any).value : (la as any).__goValue === undefined ? (la as any) : $.pointerTarget<lifecycleHookAnnotation>(la)
		const ann$: annotated = ann == null ? $.pointerTarget<annotated>(ann) : (ann as any).__isVarRef === true ? (ann as any).value : (ann as any).__goValue === undefined ? (ann as any) : $.pointerTarget<annotated>(ann)
		if ((la$ as lifecycleHookAnnotation).Target == null) {
			return fmt.Errorf("cannot use nil function for %q hook annotation", $.interfaceValue(la, "*fx.lifecycleHookAnnotation", /* @__PURE__ */ $.pointerType("fx.lifecycleHookAnnotation")))
		}

		for (let __goscriptRangeTarget6 = (ann$ as annotated).Hooks, __goscriptRangeWindow6 = $.sliceRange(__goscriptRangeTarget6), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow6.length; __rangeIndex++) {
			let h = (__goscriptRangeWindow6.backing[__goscriptRangeWindow6.offset + __rangeIndex] as lifecycleHookAnnotation | $.VarRef<lifecycleHookAnnotation> | null)
			if ((la$ as lifecycleHookAnnotation).Type == $.pointerValue<lifecycleHookAnnotation>(h).Type) {
				return fmt.Errorf("cannot apply more than one %q hook annotation", $.interfaceValue(la, "*fx.lifecycleHookAnnotation", /* @__PURE__ */ $.pointerType("fx.lifecycleHookAnnotation")))
			}
		}

		let ft = reflect.TypeOf((la$ as lifecycleHookAnnotation).Target)

		if ((__goscriptAwait = (ft !== null && (ft as any).__isVarRef !== true && (ft as any).__goValue === undefined ? (ft as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(ft)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 19) {
			return fmt.Errorf("must provide function for %q hook, got %v (%T)", $.interfaceValue(la, "*fx.lifecycleHookAnnotation", /* @__PURE__ */ $.pointerType("fx.lifecycleHookAnnotation")), (la$ as lifecycleHookAnnotation).Target, (la$ as lifecycleHookAnnotation).Target)
		}

		{
			let n = (__goscriptAwait = (ft !== null && (ft as any).__isVarRef !== true && (ft as any).__goValue === undefined ? (ft as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(ft)).NumOut(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (n > 0) {
				if ((n > 1) || (!$.comparableEqual((__goscriptAwait = (ft !== null && (ft as any).__isVarRef !== true && (ft as any).__goValue === undefined ? (ft as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(ft)).Out(0), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), _typeOfError))) {
					return fmt.Errorf("optional hook return may only be an error, got %v (%T)", (la$ as lifecycleHookAnnotation).Target, (la$ as lifecycleHookAnnotation).Target)
				}
			}
		}

		if ((__goscriptAwait = (ft !== null && (ft as any).__isVarRef !== true && (ft as any).__goValue === undefined ? (ft as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(ft)).IsVariadic(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
			return fmt.Errorf("hooks must not accept variadic parameters, got %v (%T)", (la$ as lifecycleHookAnnotation).Target, (la$ as lifecycleHookAnnotation).Target)
		}

		;(ann$ as annotated).Hooks = $.appendOne((ann$ as annotated).Hooks, la, $.appendZeros.nil)
		return null
	}

	public async build(ann: annotated | $.VarRef<annotated> | null): globalThis.Promise<[any, $.GoError]> {
		const la: lifecycleHookAnnotation | $.VarRef<lifecycleHookAnnotation> | null = this;
		let __goscriptTuple4: any = await (ann !== null && (ann as any).__isVarRef !== true && (ann as any).__goValue === undefined ? ((ann as any) as annotated).currentResultTypes() : annotated.prototype.currentResultTypes.call(ann))
		let resultTypes: $.Slice<reflect.Type | null> = __goscriptTuple4[0]
		let hasError = __goscriptTuple4[1]
		if (!hasError) {
			resultTypes = $.appendOne(resultTypes, _typeOfError, $.appendZeros.nil)
		}

		let __goscriptTuple5: any = await (la !== null && (la as any).__isVarRef !== true && (la as any).__goValue === undefined ? ((la as any) as lifecycleHookAnnotation).buildHookInstaller(ann) : lifecycleHookAnnotation.prototype.buildHookInstaller.call(la, ann))
		let hookInstaller = __goscriptTuple5[0]
		let paramTypes: $.Slice<reflect.Type | null> = __goscriptTuple5[1]
		let remapParams: ((_p0: $.Slice<reflect.Value>) => $.Slice<reflect.Value> | globalThis.Promise<$.Slice<reflect.Value>>) | null = __goscriptTuple5[2]

		let origFn = $.markAsStructValue($.cloneStructValue(reflect.ValueOf($.pointerValue<annotated>(ann).Target)))
		let newFnType = reflect.FuncOf(paramTypes, resultTypes, false)
		let newFn = $.markAsStructValue($.cloneStructValue(reflect.MakeFunc($.pointerValueOrNil(newFnType)!, $.functionValue(async (args: $.Slice<reflect.Value>): globalThis.Promise<$.Slice<reflect.Value>> => {
			// copy the original arguments before remapping the parameters
			// so that we can apply them to the hookInstaller.
			let origArgs: $.Slice<reflect.Value> = $.makeSlice<reflect.Value>($.sliceLen(args), undefined, undefined, () => $.markAsStructValue(new reflect.Value()))
			$.copy(origArgs, args)
			args = $.syncResult(remapParams!(args))
			let results: $.Slice<reflect.Value> = await $.markAsStructValue($.cloneStructValue(origFn)).Call(args)
			if (hasError) {
				let errVal = $.markAsStructValue($.cloneStructValue($.arrayIndex(results!, $.sliceLen(results) - 1)))
				results = $.goSlice(results, undefined, $.sliceLen(results) - 1)
				{
					let [err, ] = $.typeAssertTuple<$.GoError>($.markAsStructValue($.cloneStructValue(errVal)).Interface(), "error")
					if (err != null) {
						// if constructor returned error, do not call hook installer
						return $.appendOne(results, $.markAsStructValue($.cloneStructValue(errVal)))
					}
				}
			}
			let hookInstallerResults: $.Slice<reflect.Value> = await $.markAsStructValue($.cloneStructValue(hookInstaller)).Call($.appendSlice(results, origArgs))
			results = $.appendOne(results, $.markAsStructValue($.cloneStructValue($.arrayIndex(hookInstallerResults!, 0))))
			return results
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType("reflect.Value")], results: [/* @__PURE__ */ $.sliceType("reflect.Value")] } as $.FunctionTypeInfo)))))
		return [$.markAsStructValue($.cloneStructValue(newFn)).Interface(), null]
	}

	public buildHook(fn: ((_p0: context.Context | null) => $.GoError | globalThis.Promise<$.GoError>) | null): __goscript_lifecycle.Hook {
		const la: lifecycleHookAnnotation | $.VarRef<lifecycleHookAnnotation> | null = this;
		let hook: __goscript_lifecycle.Hook = new __goscript_lifecycle.Hook(undefined, true)
		switch ($.pointerValue<lifecycleHookAnnotation>(la).Type) {
			case 1:
			{
				hook.OnStart = fn
				break
			}
			case 2:
			{
				hook.OnStop = fn
				break
			}
		}
		return (hook).clone()
	}

	public async buildHookInstaller(ann: annotated | $.VarRef<annotated> | null): globalThis.Promise<[reflect.Value, $.Slice<reflect.Type | null>, ((_p0: $.Slice<reflect.Value>) => $.Slice<reflect.Value> | globalThis.Promise<$.Slice<reflect.Value>>) | null]> {
		const la: lifecycleHookAnnotation | $.VarRef<lifecycleHookAnnotation> | null = this;
		let hookInstaller: reflect.Value = $.markAsStructValue(new reflect.Value())
		let paramTypes: $.Slice<reflect.Type | null> = null! as $.Slice<reflect.Type | null>
		let remapParams: ((_p0: $.Slice<reflect.Value>) => $.Slice<reflect.Value> | globalThis.Promise<$.Slice<reflect.Value>>) | null = null! as ((_p0: $.Slice<reflect.Value>) => $.Slice<reflect.Value> | globalThis.Promise<$.Slice<reflect.Value>>) | null
		const la$: lifecycleHookAnnotation = la == null ? $.pointerTarget<lifecycleHookAnnotation>(la) : (la as any).__isVarRef === true ? (la as any).value : (la as any).__goValue === undefined ? (la as any) : $.pointerTarget<lifecycleHookAnnotation>(la)
		const ann$: annotated = ann == null ? $.pointerTarget<annotated>(ann) : (ann as any).__isVarRef === true ? (ann as any).value : (ann as any).__goValue === undefined ? (ann as any) : $.pointerTarget<annotated>(ann)
		paramTypes = await (ann !== null && (ann as any).__isVarRef !== true && (ann as any).__goValue === undefined ? ((ann as any) as annotated).currentParamTypes() : annotated.prototype.currentParamTypes.call(ann))
		let __goscriptTuple6: any = await injectLifecycle(paramTypes)
		paramTypes = __goscriptTuple6[0]
		remapParams = __goscriptTuple6[1]

		let __goscriptTuple7: any = await (ann !== null && (ann as any).__isVarRef !== true && (ann as any).__goValue === undefined ? ((ann as any) as annotated).currentResultTypes() : annotated.prototype.currentResultTypes.call(ann))
		let resultTypes: $.Slice<reflect.Type | null> = __goscriptTuple7[0]
		let hasError = __goscriptTuple7[1]
		if (hasError) {
			resultTypes = $.goSlice(resultTypes, undefined, $.sliceLen(resultTypes) - 1)
		}

		// look for the context.Context type from the original hook function
		// and then exclude it from the paramTypes of invokeFn because context.Context
		// will be injected by the lifecycle
		let ctxPos = -1
		let ctxStructPos = -1
		let origHookFn = $.markAsStructValue($.cloneStructValue(reflect.ValueOf((la$ as lifecycleHookAnnotation).Target)))
		let origHookFnT = reflect.TypeOf((la$ as lifecycleHookAnnotation).Target)
		let invokeParamTypes: $.Slice<reflect.Type | null> = $.arrayToSlice<reflect.Type | null>([__goscript_get__typeOfLifecycle()])
		for (let i = 0; i < (__goscriptAwait = (origHookFnT !== null && (origHookFnT as any).__isVarRef !== true && (origHookFnT as any).__goValue === undefined ? (origHookFnT as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(origHookFnT)).NumIn(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); i++) {
			let t = (__goscriptAwait = (origHookFnT !== null && (origHookFnT as any).__isVarRef !== true && (origHookFnT as any).__goValue === undefined ? (origHookFnT as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(origHookFnT)).In(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (($.comparableEqual(t, _typeOfContext)) && (ctxPos < 0)) {
				ctxPos = i
				continue
			}
			if (!await isIn(t)) {
				invokeParamTypes = $.appendOne(invokeParamTypes, (__goscriptAwait = (origHookFnT !== null && (origHookFnT as any).__isVarRef !== true && (origHookFnT as any).__goValue === undefined ? (origHookFnT as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(origHookFnT)).In(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), $.appendZeros.nil)
				continue
			}
			let fields: $.Slice<reflect.StructField> = $.arrayToSlice<reflect.StructField>([$.markAsStructValue($.cloneStructValue(__goscript_get__inAnnotationField()))])
			for (let j = 1; j < (__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).NumField(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); j++) {
				let field = $.markAsStructValue($.cloneStructValue(((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Field(j), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as reflect.StructField)))
				if (($.comparableEqual(field.Type, _typeOfContext)) && (ctxPos < 0)) {
					ctxStructPos = i
					ctxPos = j
					continue
				}
				fields = $.appendOne(fields, $.markAsStructValue($.cloneStructValue(field)))
			}
			invokeParamTypes = $.appendOne(invokeParamTypes, reflect.StructOf(fields), $.appendZeros.nil)
		}
		let invokeFnT = reflect.FuncOf(invokeParamTypes, $.arrayToSlice<reflect.Type | null>([]), false)
		let invokeFn = $.markAsStructValue($.cloneStructValue(reflect.MakeFunc($.pointerValueOrNil(invokeFnT)!, $.functionValue(async (args: $.Slice<reflect.Value>): globalThis.Promise<$.Slice<reflect.Value>> => {
			let results: $.Slice<reflect.Value> = null! as $.Slice<reflect.Value>
			let lc = $.mustTypeAssert<__goscript_lifecycle.Lifecycle | null>($.markAsStructValue($.cloneStructValue($.arrayIndex(args!, 0))).Interface(), "fx.Lifecycle")
			args = $.goSlice(args, 1, undefined)
			let hookArgs: $.Slice<reflect.Value> = $.makeSlice<reflect.Value>((origHookFnT !== null && (origHookFnT as any).__isVarRef !== true && (origHookFnT as any).__goValue === undefined ? (origHookFnT as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(origHookFnT)).NumIn(), undefined, undefined, () => $.markAsStructValue(new reflect.Value()))

			let hookFn: ((ctx: context.Context | null) => $.GoError | globalThis.Promise<$.GoError>) | null = $.functionValue(async (ctx: context.Context | null): globalThis.Promise<$.GoError> => {
				let err: $.GoError = null! as $.GoError
				// If the hook function has multiple parameters, and the first
				// parameter is a context, inject the provided context.
				if (ctxStructPos < 0) {
					let offset = 0
					for (let i = 0; i < $.sliceLen(hookArgs); i++) {
						if (i == ctxPos) {
							$.assignStruct($.sliceElems(hookArgs!)[$.sliceSlot(hookArgs!, i)], reflect.ValueOf((ctx as any)))
							offset = 1
							continue
						}
						if (((i - offset) >= 0) && ((i - offset) < $.sliceLen(args))) {
							$.assignStruct($.sliceElems(hookArgs!)[$.sliceSlot(hookArgs!, i)], $.arrayIndex(args!, i - offset))
						}
					}
				} else {
					for (let i = 0; i < (__goscriptAwait = (origHookFnT !== null && (origHookFnT as any).__isVarRef !== true && (origHookFnT as any).__goValue === undefined ? (origHookFnT as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(origHookFnT)).NumIn(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); i++) {
						if (i != ctxStructPos) {
							$.assignStruct($.sliceElems(hookArgs!)[$.sliceSlot(hookArgs!, i)], $.arrayIndex(args!, i))
							continue
						}
						let t = (__goscriptAwait = (origHookFnT !== null && (origHookFnT as any).__isVarRef !== true && (origHookFnT as any).__goValue === undefined ? (origHookFnT as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(origHookFnT)).In(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
						let v = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(reflect.New($.pointerValueOrNil(t)!))).Elem()))
						for (let j = 1; j < (__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).NumField(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); j++) {
							if (j < ctxPos) {
								$.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(v)).Field(j))).Set($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue($.arrayIndex(args!, i))).Field(j))))
							} else {
								if (j == ctxPos) {
									$.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(v)).Field(j))).Set($.markAsStructValue($.cloneStructValue(reflect.ValueOf((ctx as any)))))
								} else {
									$.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(v)).Field(j))).Set($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue($.arrayIndex(args!, i))).Field(j - 1))))
								}
							}
						}
						$.assignStruct($.sliceElems(hookArgs!)[$.sliceSlot(hookArgs!, i)], v)
					}
				}
				let hookResults: $.Slice<reflect.Value> = await $.markAsStructValue($.cloneStructValue(origHookFn)).Call(hookArgs)
				if (($.sliceLen(hookResults) > 0) && ($.comparableEqual($.markAsStructValue($.cloneStructValue($.arrayIndex(hookResults!, 0))).Type(), _typeOfError))) {
					let __goscriptTuple8: any = $.typeAssertTuple<$.GoError>($.markAsStructValue($.cloneStructValue($.arrayIndex(hookResults!, 0))).Interface(), "error")
					err = __goscriptTuple8[0]
				}
				return err
			}, ({ kind: $.TypeKind.Function, params: ["context.Context"], results: ["error"] } as $.FunctionTypeInfo))
			await (lc !== null && (lc as any).__isVarRef !== true && (lc as any).__goValue === undefined ? (lc as Exclude<__goscript_lifecycle.Lifecycle, null>) : $.pointerValue<Exclude<__goscript_lifecycle.Lifecycle, null>>(lc)).Append((la !== null && (la as any).__isVarRef !== true && (la as any).__goValue === undefined ? ((la as any) as lifecycleHookAnnotation).buildHook(hookFn) : lifecycleHookAnnotation.prototype.buildHook.call(la, hookFn)))
			return results
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType("reflect.Value")], results: [/* @__PURE__ */ $.sliceType("reflect.Value")] } as $.FunctionTypeInfo)))))

		let installerType = reflect.FuncOf($.appendSlice(resultTypes, paramTypes, $.appendZeros.nil), $.arrayToSlice<reflect.Type | null>([_typeOfError]), false)
		hookInstaller = $.assignStruct(hookInstaller, reflect.MakeFunc($.pointerValueOrNil(installerType)!, $.functionValue(async (args: $.Slice<reflect.Value>): globalThis.Promise<$.Slice<reflect.Value>> => {
			let results: $.Slice<reflect.Value> = null! as $.Slice<reflect.Value>
			// build a private scope for hook function
			let __goscriptShadow0: dig.Scope | $.VarRef<dig.Scope> | null = null! as dig.Scope | $.VarRef<dig.Scope> | null
			switch ((la$ as lifecycleHookAnnotation).Type) {
				case 1:
				{
					__goscriptShadow0 = await dig.Container.prototype.Scope.call((ann$ as annotated).container, "onStartHookScope", null)
					break
				}
				case 2:
				{
					__goscriptShadow0 = await dig.Container.prototype.Scope.call((ann$ as annotated).container, "onStopHookScope", null)
					break
				}
			}

			// provide the private scope with the current dependencies and results of the annotated function
			results = $.arrayToSlice<reflect.Value>([$.markAsStructValue($.cloneStructValue(_nilError))])
			let ctor = await makeHookScopeCtor(paramTypes, resultTypes, args)
			{
				let err = await (__goscriptShadow0 !== null && (__goscriptShadow0 as any).__isVarRef !== true && (__goscriptShadow0 as any).__goValue === undefined ? ((__goscriptShadow0 as any) as dig.Scope).Provide(ctor, null) : dig.Scope.prototype.Provide.call(__goscriptShadow0, ctor, null))
				if (err != null) {
					$.assignStruct($.sliceElems(results!)[$.sliceSlot(results!, 0)], reflect.ValueOf((fmt.Errorf("error providing possible parameters for hook installer: %w", (err as any)) as any)))
					return results
				}
			}

			// invoking invokeFn appends the hook function to lifecycle
			{
				let err = await (__goscriptShadow0 !== null && (__goscriptShadow0 as any).__isVarRef !== true && (__goscriptShadow0 as any).__goValue === undefined ? ((__goscriptShadow0 as any) as dig.Scope).Invoke($.markAsStructValue($.cloneStructValue(invokeFn)).Interface(), null) : dig.Scope.prototype.Invoke.call(__goscriptShadow0, $.markAsStructValue($.cloneStructValue(invokeFn)).Interface(), null))
				if (err != null) {
					$.assignStruct($.sliceElems(results!)[$.sliceSlot(results!, 0)], reflect.ValueOf((fmt.Errorf("error invoking hook installer: %w", (err as any)) as any)))
					return results
				}
			}
			return results
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType("reflect.Value")], results: [/* @__PURE__ */ $.sliceType("reflect.Value")] } as $.FunctionTypeInfo))))
		return [$.markAsStructValue($.cloneStructValue(hookInstaller)), paramTypes, remapParams]
	}

	static __typeInfo = $.registerStructType(
		"fx.lifecycleHookAnnotation",
		() => new lifecycleHookAnnotation(),
		() => [$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("apply", [["ann", /* @__PURE__ */ $.pointerType("fx.annotated")]], ["error"], true), $.methodSignature("build", [["ann", /* @__PURE__ */ $.pointerType("fx.annotated")]], [{ kind: $.TypeKind.Interface, methods: [] }, "error"], true), $.methodSignature("buildHook", [["fn", ({ kind: $.TypeKind.Function, params: ["context.Context"], results: ["error"] } as $.FunctionTypeInfo)]], [["hook", "fx.Hook"]], true), $.methodSignature("buildHookInstaller", [["ann", /* @__PURE__ */ $.pointerType("fx.annotated")]], [["hookInstaller", "reflect.Value"], ["paramTypes", /* @__PURE__ */ $.sliceType("reflect.Type")], ["remapParams", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType("reflect.Value")], results: [/* @__PURE__ */ $.sliceType("reflect.Value")] } as $.FunctionTypeInfo)]], true)],
		lifecycleHookAnnotation,
		() => [/* @__PURE__ */ $.structField("Type", /* @__PURE__ */ $.basicType("int", "fx._lifecycleHookAnnotationType"), [0], 0, true), /* @__PURE__ */ $.structField("Target", { kind: $.TypeKind.Interface, methods: [] }, [1], 8, true)]
	)
}

export class asAnnotation {
	public get targets(): $.Slice<any> {
		return this._fields.targets
	}

	public set targets(value: $.Slice<any>) {
		this._fields.targets = value
	}

	public get types(): $.Slice<asType> {
		return this._fields.types
	}

	public set types(value: $.Slice<asType>) {
		this._fields.types = value
	}

	public _fields: {
		targets: $.Slice<any>
		types: $.Slice<asType>
	}

	constructor(init?: Partial<{targets?: $.Slice<any>, types?: $.Slice<asType>}>, __goscriptValue?: boolean) {
		this._fields = {
			targets: init?.targets ?? (null! as $.Slice<any>),
			types: init?.types ?? (null! as $.Slice<asType>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): asAnnotation {
		return new asAnnotation(this, true)
	}

	public __goscriptAssign(source: asAnnotation): void {
		const target = this._fields
		const values = source._fields
		target.targets = values.targets
		target.types = values.types
	}

	public async apply(ann: annotated | $.VarRef<annotated> | null): globalThis.Promise<$.GoError> {
		let at: asAnnotation | $.VarRef<asAnnotation> | null = this;
		const at$: asAnnotation = at == null ? $.pointerTarget<asAnnotation>(at) : (at as any).__isVarRef === true ? (at as any).value : (at as any).__goValue === undefined ? (at as any) : $.pointerTarget<asAnnotation>(at)
		const ann$: annotated = ann == null ? $.pointerTarget<annotated>(ann) : (ann as any).__isVarRef === true ? (ann as any).value : (ann as any).__goValue === undefined ? (ann as any) : $.pointerTarget<annotated>(ann);
		;(at$ as asAnnotation).types = $.makeSlice<asType>($.sliceLen((at$ as asAnnotation).targets), undefined, undefined, () => new asType(undefined, true))
		for (let __goscriptRangeTarget10 = (at$ as asAnnotation).targets, __goscriptRangeWindow10 = $.sliceRange(__goscriptRangeTarget10), i = 0; i < __goscriptRangeWindow10.length; i++) {
			let typ = (__goscriptRangeWindow10.backing[__goscriptRangeWindow10.offset + i] as any)
			{
				let [, ok] = $.typeAssertTuple<self | $.VarRef<self> | null>(typ, /* @__PURE__ */ $.pointerType("fx.self"))
				if (ok) {
					$.assignStruct($.sliceElems((at$ as asAnnotation).types!)[$.sliceSlot((at$ as asAnnotation).types!, i)], new asType({self: true}, true))
					continue
				}
			}
			let t: reflect.Type | null = reflect.TypeOf(typ)
			if (((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 22) || ((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 20)) {
				return fmt.Errorf("fx.As: argument must be a pointer to an interface: got %v", (t as any))
			}
			t = (__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			$.assignStruct($.sliceElems((at$ as asAnnotation).types!)[$.sliceSlot((at$ as asAnnotation).types!, i)], new asType({typ: t}, true))
		}

		;(ann$ as annotated).As = $.appendOne((ann$ as annotated).As, (at$ as asAnnotation).types, $.appendZeros.nil)
		return null
	}

	public async build(ann: annotated | $.VarRef<annotated> | null): globalThis.Promise<[any, $.GoError]> {
		const at: asAnnotation | $.VarRef<asAnnotation> | null = this;
		let paramTypes: $.Slice<reflect.Type | null> = await (ann !== null && (ann as any).__isVarRef !== true && (ann as any).__goValue === undefined ? ((ann as any) as annotated).currentParamTypes() : annotated.prototype.currentParamTypes.call(ann))

		let __goscriptTuple9: any = await (at !== null && (at as any).__isVarRef !== true && (at as any).__goValue === undefined ? ((at as any) as asAnnotation).results(ann) : asAnnotation.prototype.results.call(at, ann))
		let resultTypes: $.Slice<reflect.Type | null> = __goscriptTuple9[0]
		let remapResults: ((_p0: $.Slice<reflect.Value>) => $.Slice<reflect.Value> | globalThis.Promise<$.Slice<reflect.Value>>) | null = __goscriptTuple9[1]
		let err = __goscriptTuple9[2]
		if (err != null) {
			return [null, err]
		}

		let origFn = $.markAsStructValue($.cloneStructValue(reflect.ValueOf($.pointerValue<annotated>(ann).Target)))
		let newFnType = reflect.FuncOf(paramTypes, resultTypes, false)
		let newFn = $.markAsStructValue($.cloneStructValue(reflect.MakeFunc($.pointerValueOrNil(newFnType)!, $.functionValue(async (args: $.Slice<reflect.Value>): globalThis.Promise<$.Slice<reflect.Value>> => {
			let results: $.Slice<reflect.Value> = await $.markAsStructValue($.cloneStructValue(origFn)).Call(args)
			return $.syncResult(remapResults!(results))
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType("reflect.Value")], results: [/* @__PURE__ */ $.sliceType("reflect.Value")] } as $.FunctionTypeInfo)))))
		return [$.markAsStructValue($.cloneStructValue(newFn)).Interface(), null]
	}

	public async results(ann: annotated | $.VarRef<annotated> | null): globalThis.Promise<[$.Slice<reflect.Type | null>, ((_p0: $.Slice<reflect.Value>) => $.Slice<reflect.Value> | globalThis.Promise<$.Slice<reflect.Value>>) | null, $.GoError]> {
		const at: asAnnotation | $.VarRef<asAnnotation> | null = this;
		let types: $.Slice<reflect.Type | null> = null! as $.Slice<reflect.Type | null>
		let remap: ((_p0: $.Slice<reflect.Value>) => $.Slice<reflect.Value> | globalThis.Promise<$.Slice<reflect.Value>>) | null = null! as ((_p0: $.Slice<reflect.Value>) => $.Slice<reflect.Value> | globalThis.Promise<$.Slice<reflect.Value>>) | null
		let err: $.GoError = null! as $.GoError
		const at$: asAnnotation = at == null ? $.pointerTarget<asAnnotation>(at) : (at as any).__isVarRef === true ? (at as any).value : (at as any).__goValue === undefined ? (at as any) : $.pointerTarget<asAnnotation>(at)
		let __goscriptTuple10: any = await (ann !== null && (ann as any).__isVarRef !== true && (ann as any).__goValue === undefined ? ((ann as any) as annotated).currentResultTypes() : annotated.prototype.currentResultTypes.call(ann))
		types = __goscriptTuple10[0]
		let hasError = __goscriptTuple10[1]
		let fields: $.Slice<reflect.StructField> = $.arrayToSlice<reflect.StructField>([$.markAsStructValue($.cloneStructValue(__goscript_get__outAnnotationField()))])
		if (hasError) {
			types = $.goSlice(types, undefined, $.sliceLen(types) - 1)
		}
		let __goscriptTuple11: any = await extractResultFields(types)
		let resultFields: $.Slice<reflect.StructField> = __goscriptTuple11[0]
		let getResult: ((_p0: number, _p1: $.Slice<reflect.Value>) => reflect.Value | globalThis.Promise<reflect.Value>) | null = __goscriptTuple11[1]

		for (let __goscriptRangeTarget11 = resultFields, __goscriptRangeWindow11 = $.sliceRange(__goscriptRangeTarget11), i = 0; i < __goscriptRangeWindow11.length; i++) {
			let f = $.markAsStructValue($.cloneStructValue((__goscriptRangeWindow11.backing[__goscriptRangeWindow11.offset + i] as reflect.StructField)))
			let t = f.Type
			let field = (await (async () => { const __goscriptLiteralField10 = await fmt.Sprintf("Field%d", $.basicInterfaceValue(i, "int")); return $.markAsStructValue(new reflect.StructField({Name: __goscriptLiteralField10, Type: t, Tag: f.Tag})) })())

			if ((i >= $.sliceLen((at$ as asAnnotation).types)) || $.arrayIndex((at$ as asAnnotation).types!, i).self) {
				fields = $.appendOne(fields, $.markAsStructValue($.cloneStructValue(field)))
				continue
			}

			if (!(__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Implements($.pointerValueOrNil($.arrayIndex((at$ as asAnnotation).types!, i).typ)!), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
				return [null, (null as ((_p0: $.Slice<reflect.Value>) => $.Slice<reflect.Value> | globalThis.Promise<$.Slice<reflect.Value>>) | null), fmt.Errorf("invalid fx.As: %v does not implement %v", (t as any), $.interfaceValue(($.arrayIndex((at$ as asAnnotation).types!, i)).clone(), "fx.asType", "fx.asType"))]
			}
			field.Type = $.arrayIndex((at$ as asAnnotation).types!, i).typ
			fields = $.appendOne(fields, $.markAsStructValue($.cloneStructValue(field)))
		}
		let resType = reflect.StructOf(fields)

		let outTypes: $.Slice<reflect.Type | null> = null! as $.Slice<reflect.Type | null>
		outTypes = $.appendOne(types, resType, $.appendZeros.nil)
		if (hasError) {
			outTypes = $.appendOne(outTypes, _typeOfError, $.appendZeros.nil)
		}

		return [outTypes, $.functionValue(async (results: $.Slice<reflect.Value>): globalThis.Promise<$.Slice<reflect.Value>> => {
			let outErr: $.GoError = null! as $.GoError
			let outResults: $.Slice<reflect.Value> = null! as $.Slice<reflect.Value>

			for (let __goscriptRangeTarget12 = results, __goscriptRangeWindow12 = $.sliceRange(__goscriptRangeTarget12), i = 0; i < __goscriptRangeWindow12.length; i++) {
				let r = $.markAsStructValue($.cloneStructValue((__goscriptRangeWindow12.backing[__goscriptRangeWindow12.offset + i] as reflect.Value)))
				if ((i == ($.sliceLen(results) - 1)) && hasError) {
					// If hasError and this is the last item,
					// we are guaranteed that this is an error
					// object.
					{
						let [__goscriptShadow1, ] = $.typeAssertTuple<$.GoError>($.markAsStructValue($.cloneStructValue(r)).Interface(), "error")
						if (__goscriptShadow1 != null) {
							outErr = __goscriptShadow1
						}
					}
					continue
				}
				outResults = $.appendOne(outResults, $.markAsStructValue($.cloneStructValue(r)))
			}

			let newOutResult = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(reflect.New($.pointerValueOrNil(resType)!))).Elem()))
			for (let i = 1; i < (__goscriptAwait = (resType !== null && (resType as any).__isVarRef !== true && (resType as any).__goValue === undefined ? (resType as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(resType)).NumField(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); i++) {
				$.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(newOutResult)).Field(i))).Set($.markAsStructValue($.cloneStructValue(((__goscriptAwait = getResult!(i, results), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as reflect.Value))))
			}
			outResults = $.appendOne(outResults, $.markAsStructValue($.cloneStructValue(newOutResult)))

			if (hasError) {
				if (outErr != null) {
					outResults = $.appendOne(outResults, $.markAsStructValue($.cloneStructValue(reflect.ValueOf((outErr as any)))))
				} else {
					outResults = $.appendOne(outResults, $.markAsStructValue($.cloneStructValue(_nilError)))
				}
			}

			return outResults
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType("reflect.Value")], results: [/* @__PURE__ */ $.sliceType("reflect.Value")] } as $.FunctionTypeInfo)), null]
	}

	static __typeInfo = $.registerStructType(
		"fx.asAnnotation",
		() => new asAnnotation(),
		() => [$.methodSignature("apply", [["ann", /* @__PURE__ */ $.pointerType("fx.annotated")]], ["error"], true), $.methodSignature("build", [["ann", /* @__PURE__ */ $.pointerType("fx.annotated")]], [{ kind: $.TypeKind.Interface, methods: [] }, "error"], true), $.methodSignature("results", [["ann", /* @__PURE__ */ $.pointerType("fx.annotated")]], [["types", /* @__PURE__ */ $.sliceType("reflect.Type")], ["remap", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType("reflect.Value")], results: [/* @__PURE__ */ $.sliceType("reflect.Value")] } as $.FunctionTypeInfo)], ["err", "error"]], true)],
		asAnnotation,
		() => [/* @__PURE__ */ $.structField("targets", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] }), [0], 0, false, { pkgPath: "go.uber.org/fx" }), /* @__PURE__ */ $.structField("types", /* @__PURE__ */ $.sliceType("fx.asType"), [1], 24, false, { pkgPath: "go.uber.org/fx" })]
	)
}

export class asType {
	public get self(): boolean {
		return this._fields.self
	}

	public set self(value: boolean) {
		this._fields.self = value
	}

	public get typ(): reflect.Type | null {
		return this._fields.typ
	}

	public set typ(value: reflect.Type | null) {
		this._fields.typ = value
	}

	public _fields: {
		self: boolean
		typ: reflect.Type | null
	}

	constructor(init?: Partial<{self?: boolean, typ?: reflect.Type | null}>, __goscriptValue?: boolean) {
		this._fields = {
			self: init?.self ?? (false as boolean),
			typ: init?.typ ?? (null! as reflect.Type | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): asType {
		return new asType(this, true)
	}

	public __goscriptAssign(source: asType): void {
		const target = this._fields
		const values = source._fields
		target.self = values.self
		target.typ = $.assignFieldValue(target.typ, values.typ, "reflect.Type")
	}

	public async String(): globalThis.Promise<string> {
		const a = this;
		if (a.self) {
			return "self"
		}
		return $.pointerValue<Exclude<reflect.Type, null>>(a.typ).String()
	}

	static __typeInfo = $.registerStructType(
		"fx.asType",
		() => new asType(),
		() => [$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])],
		asType,
		() => [/* @__PURE__ */ $.structField("self", /* @__PURE__ */ $.basicType("bool"), [0], 0, false, { pkgPath: "go.uber.org/fx" }), /* @__PURE__ */ $.structField("typ", "reflect.Type", [1], 8, false, { pkgPath: "go.uber.org/fx" })]
	)
}

export class self {
	public _fields: {
	}

	constructor(init?: Partial<{}>, __goscriptValue?: boolean) {
		this._fields = {
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): self {
		return new self(this, true)
	}

	public __goscriptAssign(source: self): void {
	}

	static __typeInfo = $.registerStructType(
		"fx.self",
		() => new self(),
		() => [],
		self,
		() => []
	)
}

export class fromAnnotation {
	public get targets(): $.Slice<any> {
		return this._fields.targets
	}

	public set targets(value: $.Slice<any>) {
		this._fields.targets = value
	}

	public get types(): $.Slice<reflect.Type | null> {
		return this._fields.types
	}

	public set types(value: $.Slice<reflect.Type | null>) {
		this._fields.types = value
	}

	public _fields: {
		targets: $.Slice<any>
		types: $.Slice<reflect.Type | null>
	}

	constructor(init?: Partial<{targets?: $.Slice<any>, types?: $.Slice<reflect.Type | null>}>, __goscriptValue?: boolean) {
		this._fields = {
			targets: init?.targets ?? (null! as $.Slice<any>),
			types: init?.types ?? (null! as $.Slice<reflect.Type | null>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): fromAnnotation {
		return new fromAnnotation(this, true)
	}

	public __goscriptAssign(source: fromAnnotation): void {
		const target = this._fields
		const values = source._fields
		target.targets = values.targets
		target.types = values.types
	}

	public async apply(ann: annotated | $.VarRef<annotated> | null): globalThis.Promise<$.GoError> {
		let fr: fromAnnotation | $.VarRef<fromAnnotation> | null = this;
		const fr$: fromAnnotation = fr == null ? $.pointerTarget<fromAnnotation>(fr) : (fr as any).__isVarRef === true ? (fr as any).value : (fr as any).__goValue === undefined ? (fr as any) : $.pointerTarget<fromAnnotation>(fr)
		const ann$: annotated = ann == null ? $.pointerTarget<annotated>(ann) : (ann as any).__isVarRef === true ? (ann as any).value : (ann as any).__goValue === undefined ? (ann as any) : $.pointerTarget<annotated>(ann)
		if ($.sliceLen((ann$ as annotated).From) > 0) {
			return errors.New("cannot apply more than one line of From")
		}
		let ft = reflect.TypeOf((ann$ as annotated).Target);
		;(fr$ as fromAnnotation).types = $.makeSlice<reflect.Type | null>($.sliceLen((fr$ as fromAnnotation).targets))
		for (let __goscriptRangeTarget14 = (fr$ as fromAnnotation).targets, __goscriptRangeWindow14 = $.sliceRange(__goscriptRangeTarget14), i = 0; i < __goscriptRangeWindow14.length; i++) {
			let typ = (__goscriptRangeWindow14.backing[__goscriptRangeWindow14.offset + i] as any)
			if ((__goscriptAwait = (ft !== null && (ft as any).__isVarRef !== true && (ft as any).__goValue === undefined ? (ft as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(ft)).IsVariadic(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) && (i == ((__goscriptAwait = (ft !== null && (ft as any).__isVarRef !== true && (ft as any).__goValue === undefined ? (ft as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(ft)).NumIn(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) - 1))) {
				return errors.New("fx.From: cannot annotate a variadic argument")
			}
			let t = reflect.TypeOf(typ)
			if ((t == null) || ((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 22)) {
				return fmt.Errorf("fx.From: argument must be a pointer to a type that implements some interface: got %v", (t as any))
			}
			$.sliceElems((fr$ as fromAnnotation).types!)[$.sliceSlot((fr$ as fromAnnotation).types!, i)] = (__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		;(ann$ as annotated).From = (fr$ as fromAnnotation).types
		return null
	}

	public async build(ann: annotated | $.VarRef<annotated> | null): globalThis.Promise<[any, $.GoError]> {
		const fr: fromAnnotation | $.VarRef<fromAnnotation> | null = this;
		let __goscriptTuple12: any = await (fr !== null && (fr as any).__isVarRef !== true && (fr as any).__goValue === undefined ? ((fr as any) as fromAnnotation).parameters(ann) : fromAnnotation.prototype.parameters.call(fr, ann))
		let paramTypes: $.Slice<reflect.Type | null> = __goscriptTuple12[0]
		let remap: ((_p0: $.Slice<reflect.Value>) => $.Slice<reflect.Value> | globalThis.Promise<$.Slice<reflect.Value>>) | null = __goscriptTuple12[1]
		let err = __goscriptTuple12[2]
		if (err != null) {
			return [null, err]
		}
		let __goscriptTuple13: any = await (ann !== null && (ann as any).__isVarRef !== true && (ann as any).__goValue === undefined ? ((ann as any) as annotated).currentResultTypes() : annotated.prototype.currentResultTypes.call(ann))
		let resultTypes: $.Slice<reflect.Type | null> = __goscriptTuple13[0]

		let origFn = $.markAsStructValue($.cloneStructValue(reflect.ValueOf($.pointerValue<annotated>(ann).Target)))
		let newFnType = reflect.FuncOf(paramTypes, resultTypes, false)
		let newFn = $.markAsStructValue($.cloneStructValue(reflect.MakeFunc($.pointerValueOrNil(newFnType)!, $.functionValue(async (args: $.Slice<reflect.Value>): globalThis.Promise<$.Slice<reflect.Value>> => {
			args = $.syncResult(remap!(args))
			return await $.markAsStructValue($.cloneStructValue(origFn)).Call(args)
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType("reflect.Value")], results: [/* @__PURE__ */ $.sliceType("reflect.Value")] } as $.FunctionTypeInfo)))))
		return [$.markAsStructValue($.cloneStructValue(newFn)).Interface(), null]
	}

	public async parameters(ann: annotated | $.VarRef<annotated> | null): globalThis.Promise<[$.Slice<reflect.Type | null>, ((_p0: $.Slice<reflect.Value>) => $.Slice<reflect.Value> | globalThis.Promise<$.Slice<reflect.Value>>) | null, $.GoError]> {
		const fr: fromAnnotation | $.VarRef<fromAnnotation> | null = this;
		let types: $.Slice<reflect.Type | null> = null! as $.Slice<reflect.Type | null>
		let remap: ((_p0: $.Slice<reflect.Value>) => $.Slice<reflect.Value> | globalThis.Promise<$.Slice<reflect.Value>>) | null = null! as ((_p0: $.Slice<reflect.Value>) => $.Slice<reflect.Value> | globalThis.Promise<$.Slice<reflect.Value>>) | null
		let err: $.GoError = null! as $.GoError
		const fr$: fromAnnotation = fr == null ? $.pointerTarget<fromAnnotation>(fr) : (fr as any).__isVarRef === true ? (fr as any).value : (fr as any).__goValue === undefined ? (fr as any) : $.pointerTarget<fromAnnotation>(fr)
		let ft = reflect.TypeOf($.pointerValue<annotated>(ann).Target)
		types = $.makeSlice<reflect.Type | null>((__goscriptAwait = (ft !== null && (ft as any).__isVarRef !== true && (ft as any).__goValue === undefined ? (ft as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(ft)).NumIn(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
		for (let __goscriptSliceWindow7 = $.sliceRange(types), i = 0; i < (__goscriptAwait = (ft !== null && (ft as any).__isVarRef !== true && (ft as any).__goValue === undefined ? (ft as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(ft)).NumIn(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); i++) {
			;(__goscriptSliceWindow7.backing as any[])[$.windowSlot(__goscriptSliceWindow7, i)] = (__goscriptAwait = (ft !== null && (ft as any).__isVarRef !== true && (ft as any).__goValue === undefined ? (ft as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(ft)).In(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}

		// No parameter annotations. Return the original types
		// and an identity function.
		if ($.sliceLen((fr$ as fromAnnotation).targets) == 0) {
			return [types, $.functionValue((args: $.Slice<reflect.Value>): $.Slice<reflect.Value> => {
				return args
			}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType("reflect.Value")], results: [/* @__PURE__ */ $.sliceType("reflect.Value")] } as $.FunctionTypeInfo)), null]
		}

		// Turn parameters into an fx.In struct.
		let inFields: $.Slice<reflect.StructField> = $.arrayToSlice<reflect.StructField>([$.markAsStructValue($.cloneStructValue(__goscript_get__inAnnotationField()))])

		// The following situations may occur:
		// 1. there was a variadic argument, so it was pre-transformed.
		// 2. another parameter annotation was transformed (ex: ParamTags).
		// so need to visit fields of the fx.In struct.
		if (($.sliceLen(types) > 0) && await isIn($.arrayIndex(types!, 0))) {
			let paramType = $.arrayIndex(types!, 0)

			for (let i = 1; i < (__goscriptAwait = (paramType !== null && (paramType as any).__isVarRef !== true && (paramType as any).__goValue === undefined ? (paramType as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(paramType)).NumField(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); i++) {
				let origField = $.markAsStructValue($.cloneStructValue(((__goscriptAwait = (paramType !== null && (paramType as any).__isVarRef !== true && (paramType as any).__goValue === undefined ? (paramType as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(paramType)).Field(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as reflect.StructField)))
				let field = $.markAsStructValue(new reflect.StructField({Name: origField.Name, Type: origField.Type, Tag: origField.Tag}))
				if ((i - 1) < $.sliceLen((fr$ as fromAnnotation).types)) {
					let t = $.arrayIndex((fr$ as fromAnnotation).types!, i - 1)
					if (!(__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Implements($.pointerValueOrNil(field.Type)!), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
						return [null, (null as ((_p0: $.Slice<reflect.Value>) => $.Slice<reflect.Value> | globalThis.Promise<$.Slice<reflect.Value>>) | null), fmt.Errorf("invalid fx.From: %v does not implement %v", (t as any), (field.Type as any))]
					}
					field.Type = t
				}

				inFields = $.appendOne(inFields, $.markAsStructValue($.cloneStructValue(field)))
			}

			types = $.arrayToSlice<reflect.Type | null>([reflect.StructOf(inFields)])
			return [types, $.functionValue(async (args: $.Slice<reflect.Value>): globalThis.Promise<$.Slice<reflect.Value>> => {
				let param = $.markAsStructValue($.cloneStructValue($.arrayIndex(args!, 0)))
				$.assignStruct($.sliceElems(args!)[$.sliceSlot(args!, 0)], $.markAsStructValue($.cloneStructValue(reflect.New($.pointerValueOrNil(paramType)!))).Elem())
				for (let __goscriptSliceWindow8 = $.sliceRange(args), i = 1; i < (__goscriptAwait = (paramType !== null && (paramType as any).__isVarRef !== true && (paramType as any).__goValue === undefined ? (paramType as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(paramType)).NumField(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); i++) {
					$.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(((__goscriptSliceWindow8.backing as any[])[$.windowSlot(__goscriptSliceWindow8, 0)] as reflect.Value))).Field(i))).Set($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(param)).Field(i))))
				}
				return args
			}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType("reflect.Value")], results: [/* @__PURE__ */ $.sliceType("reflect.Value")] } as $.FunctionTypeInfo)), null]
		}

		for (let __goscriptRangeTarget15 = types, __goscriptRangeWindow15 = $.sliceRange(__goscriptRangeTarget15), i = 0; i < __goscriptRangeWindow15.length; i++) {
			let t = (__goscriptRangeWindow15.backing[__goscriptRangeWindow15.offset + i] as reflect.Type | null)
			let field = (await (async () => { const __goscriptLiteralField12 = await fmt.Sprintf("Field%d", $.basicInterfaceValue(i, "int")); return $.markAsStructValue(new reflect.StructField({Name: __goscriptLiteralField12, Type: t})) })())
			if (i < $.sliceLen((fr$ as fromAnnotation).types)) {
				let __goscriptShadow2 = $.arrayIndex((fr$ as fromAnnotation).types!, i)
				if (!(__goscriptAwait = (__goscriptShadow2 !== null && (__goscriptShadow2 as any).__isVarRef !== true && (__goscriptShadow2 as any).__goValue === undefined ? (__goscriptShadow2 as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(__goscriptShadow2)).Implements($.pointerValueOrNil(field.Type)!), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
					return [null, (null as ((_p0: $.Slice<reflect.Value>) => $.Slice<reflect.Value> | globalThis.Promise<$.Slice<reflect.Value>>) | null), fmt.Errorf("invalid fx.From: %v does not implement %v", (__goscriptShadow2 as any), (field.Type as any))]
				}
				field.Type = __goscriptShadow2
			}

			inFields = $.appendOne(inFields, $.markAsStructValue($.cloneStructValue(field)))
		}

		types = $.arrayToSlice<reflect.Type | null>([reflect.StructOf(inFields)])
		return [types, $.functionValue(async (args: $.Slice<reflect.Value>): globalThis.Promise<$.Slice<reflect.Value>> => {
			let params: reflect.Value = $.markAsStructValue($.cloneStructValue($.arrayIndex(args!, 0)))
			args = $.goSlice(args, undefined, 0)
			for (let i = 0; i < (__goscriptAwait = (ft !== null && (ft as any).__isVarRef !== true && (ft as any).__goValue === undefined ? (ft as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(ft)).NumIn(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); i++) {
				args = $.appendOne(args, $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(params)).Field(i + 1))))
			}
			return args
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType("reflect.Value")], results: [/* @__PURE__ */ $.sliceType("reflect.Value")] } as $.FunctionTypeInfo)), null]
	}

	static __typeInfo = $.registerStructType(
		"fx.fromAnnotation",
		() => new fromAnnotation(),
		() => [$.methodSignature("apply", [["ann", /* @__PURE__ */ $.pointerType("fx.annotated")]], ["error"], true), $.methodSignature("build", [["ann", /* @__PURE__ */ $.pointerType("fx.annotated")]], [{ kind: $.TypeKind.Interface, methods: [] }, "error"], true), $.methodSignature("parameters", [["ann", /* @__PURE__ */ $.pointerType("fx.annotated")]], [["types", /* @__PURE__ */ $.sliceType("reflect.Type")], ["remap", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType("reflect.Value")], results: [/* @__PURE__ */ $.sliceType("reflect.Value")] } as $.FunctionTypeInfo)], ["err", "error"]], true)],
		fromAnnotation,
		() => [/* @__PURE__ */ $.structField("targets", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] }), [0], 0, false, { pkgPath: "go.uber.org/fx" }), /* @__PURE__ */ $.structField("types", /* @__PURE__ */ $.sliceType("reflect.Type"), [1], 24, false, { pkgPath: "go.uber.org/fx" })]
	)
}

export class annotated {
	public get Target(): any {
		return this._fields.Target
	}

	public set Target(value: any) {
		this._fields.Target = value
	}

	public get Annotations(): $.Slice<Annotation | null> {
		return this._fields.Annotations
	}

	public set Annotations(value: $.Slice<Annotation | null>) {
		this._fields.Annotations = value
	}

	public get ParamTags(): $.Slice<string> {
		return this._fields.ParamTags
	}

	public set ParamTags(value: $.Slice<string>) {
		this._fields.ParamTags = value
	}

	public get ResultTags(): $.Slice<string> {
		return this._fields.ResultTags
	}

	public set ResultTags(value: $.Slice<string>) {
		this._fields.ResultTags = value
	}

	public get As(): $.Slice<$.Slice<asType>> {
		return this._fields.As
	}

	public set As(value: $.Slice<$.Slice<asType>>) {
		this._fields.As = value
	}

	public get From(): $.Slice<reflect.Type | null> {
		return this._fields.From
	}

	public set From(value: $.Slice<reflect.Type | null>) {
		this._fields.From = value
	}

	public get FuncPtr(): number {
		return this._fields.FuncPtr
	}

	public set FuncPtr(value: number) {
		this._fields.FuncPtr = value
	}

	public get Hooks(): $.Slice<lifecycleHookAnnotation | $.VarRef<lifecycleHookAnnotation> | null> {
		return this._fields.Hooks
	}

	public set Hooks(value: $.Slice<lifecycleHookAnnotation | $.VarRef<lifecycleHookAnnotation> | null>) {
		this._fields.Hooks = value
	}

	// container is used to build private scopes for lifecycle hook functions
	// added via fx.OnStart and fx.OnStop annotations.
	public get container(): dig.Container | $.VarRef<dig.Container> | null {
		return this._fields.container
	}

	public set container(value: dig.Container | $.VarRef<dig.Container> | null) {
		this._fields.container = value
	}

	public _fields: {
		Target: any
		Annotations: $.Slice<Annotation | null>
		ParamTags: $.Slice<string>
		ResultTags: $.Slice<string>
		As: $.Slice<$.Slice<asType>>
		From: $.Slice<reflect.Type | null>
		FuncPtr: number
		Hooks: $.Slice<lifecycleHookAnnotation | $.VarRef<lifecycleHookAnnotation> | null>
		container: dig.Container | $.VarRef<dig.Container> | null
	}

	constructor(init?: Partial<{Target?: any, Annotations?: $.Slice<Annotation | null>, ParamTags?: $.Slice<string>, ResultTags?: $.Slice<string>, As?: $.Slice<$.Slice<asType>>, From?: $.Slice<reflect.Type | null>, FuncPtr?: number, Hooks?: $.Slice<lifecycleHookAnnotation | $.VarRef<lifecycleHookAnnotation> | null>, container?: dig.Container | $.VarRef<dig.Container> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Target: init?.Target ?? (null! as any),
			Annotations: init?.Annotations ?? (null! as $.Slice<Annotation | null>),
			ParamTags: init?.ParamTags ?? (null! as $.Slice<string>),
			ResultTags: init?.ResultTags ?? (null! as $.Slice<string>),
			As: init?.As ?? (null! as $.Slice<$.Slice<asType>>),
			From: init?.From ?? (null! as $.Slice<reflect.Type | null>),
			FuncPtr: init?.FuncPtr ?? (0 as number),
			Hooks: init?.Hooks ?? (null! as $.Slice<lifecycleHookAnnotation | $.VarRef<lifecycleHookAnnotation> | null>),
			container: init?.container ?? (null! as dig.Container | $.VarRef<dig.Container> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): annotated {
		return new annotated(this, true)
	}

	public __goscriptAssign(source: annotated): void {
		const target = this._fields
		const values = source._fields
		target.Target = $.assignFieldValue(target.Target, values.Target, { kind: $.TypeKind.Interface, methods: [] })
		target.Annotations = values.Annotations
		target.ParamTags = values.ParamTags
		target.ResultTags = values.ResultTags
		target.As = values.As
		target.From = values.From
		target.FuncPtr = values.FuncPtr
		target.Hooks = values.Hooks
		target.container = values.container
	}

	public async Build(): globalThis.Promise<[any, $.GoError]> {
		let ann: annotated | $.VarRef<annotated> | null = this;
		const ann$: annotated = ann == null ? $.pointerTarget<annotated>(ann) : (ann as any).__isVarRef === true ? (ann as any).value : (ann as any).__goValue === undefined ? (ann as any) : $.pointerTarget<annotated>(ann);
		;(ann$ as annotated).container = dig.New(null)
		let ft = reflect.TypeOf((ann$ as annotated).Target)
		if ((__goscriptAwait = (ft !== null && (ft as any).__isVarRef !== true && (ft as any).__goValue === undefined ? (ft as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(ft)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 19) {
			return [null, fmt.Errorf("must provide constructor function, got %v (%T)", (ann$ as annotated).Target, (ann$ as annotated).Target)]
		}

		{
			let err = await (ann !== null && (ann as any).__isVarRef !== true && (ann as any).__goValue === undefined ? ((ann as any) as annotated).typeCheckOrigFn() : annotated.prototype.typeCheckOrigFn.call(ann))
			if (err != null) {
				return [null, fmt.Errorf("invalid annotation function %T: %w", (ann$ as annotated).Target, (err as any))]
			}
		}

		await (ann !== null && (ann as any).__isVarRef !== true && (ann as any).__goValue === undefined ? ((ann as any) as annotated).applyOptionalTag() : annotated.prototype.applyOptionalTag.call(ann))

		let err: $.GoError = null! as $.GoError
		let lcHookAnns: $.Slice<lifecycleHookAnnotation | $.VarRef<lifecycleHookAnnotation> | null> = null! as $.Slice<lifecycleHookAnnotation | $.VarRef<lifecycleHookAnnotation> | null>
		for (let __goscriptRangeTarget16 = (ann$ as annotated).Annotations, __goscriptRangeWindow16 = $.sliceRange(__goscriptRangeTarget16), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow16.length; __rangeIndex++) {
			let annotation = (__goscriptRangeWindow16.backing[__goscriptRangeWindow16.offset + __rangeIndex] as Annotation | null)
			{
				let __goscriptTuple14: any = $.typeAssertTuple<lifecycleHookAnnotation | $.VarRef<lifecycleHookAnnotation> | null>(annotation, /* @__PURE__ */ $.pointerType("fx.lifecycleHookAnnotation"))
				let lcHookAnn: lifecycleHookAnnotation | $.VarRef<lifecycleHookAnnotation> | null = __goscriptTuple14[0]
				let ok = __goscriptTuple14[1]
				if (ok) {
					lcHookAnns = $.appendOne(lcHookAnns, lcHookAnn, $.appendZeros.nil)
					continue
				}
			}
			{
				let __goscriptTuple15: any = await (annotation !== null && (annotation as any).__isVarRef !== true && (annotation as any).__goValue === undefined ? (annotation as Exclude<Annotation, null>) : $.pointerValue<Exclude<Annotation, null>>(annotation)).build(ann);
				;(ann$ as annotated).Target = __goscriptTuple15[0]
				err = __goscriptTuple15[1]
				if (err != null) {
					return [null, err]
				}
			}
		}

		// need to call cleanUpAsResults before applying lifecycle annotations
		// to exclude the original results from the hook's scope if any
		// fx.As annotations were applied
		await (ann !== null && (ann as any).__isVarRef !== true && (ann as any).__goValue === undefined ? ((ann as any) as annotated).cleanUpAsResults() : annotated.prototype.cleanUpAsResults.call(ann))

		for (let __goscriptRangeTarget17 = lcHookAnns, __goscriptRangeWindow17 = $.sliceRange(__goscriptRangeTarget17), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow17.length; __rangeIndex++) {
			let la = (__goscriptRangeWindow17.backing[__goscriptRangeWindow17.offset + __rangeIndex] as lifecycleHookAnnotation | $.VarRef<lifecycleHookAnnotation> | null)
			{
				let __goscriptTuple16: any = await (la !== null && (la as any).__isVarRef !== true && (la as any).__goValue === undefined ? ((la as any) as lifecycleHookAnnotation).build(ann) : lifecycleHookAnnotation.prototype.build.call(la, ann));
				;(ann$ as annotated).Target = __goscriptTuple16[0]
				err = __goscriptTuple16[1]
				if (err != null) {
					return [null, err]
				}
			}
		}
		return [(ann$ as annotated).Target, null]
	}

	public async String(): globalThis.Promise<string> {
		const ann = this;
		let sb: $.VarRef<strings.Builder> = $.varRef($.markAsStructValue(new strings.Builder()))
		sb.value.WriteString("fx.Annotate(")
		sb.value.WriteString(await fxreflect.FuncName(ann.Target))
		{
			let tags: $.Slice<string> = ann.ParamTags
			if ($.sliceLen(tags) > 0) {
				await fmt.Fprintf($.pointerValueOrNil($.interfaceValue<io.Writer | null>(sb, "*strings.Builder", /* @__PURE__ */ $.pointerType("strings.Builder")))!, ", fx.ParamTags(%q)", $.interfaceValue(tags, "[]string", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))))
			}
		}
		{
			let tags: $.Slice<string> = ann.ResultTags
			if ($.sliceLen(tags) > 0) {
				await fmt.Fprintf($.pointerValueOrNil($.interfaceValue<io.Writer | null>(sb, "*strings.Builder", /* @__PURE__ */ $.pointerType("strings.Builder")))!, ", fx.ResultTags(%q)", $.interfaceValue(tags, "[]string", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))))
			}
		}
		{
			let _as: $.Slice<$.Slice<asType>> = ann.As
			if ($.sliceLen(_as) > 0) {
				await fmt.Fprintf($.pointerValueOrNil($.interfaceValue<io.Writer | null>(sb, "*strings.Builder", /* @__PURE__ */ $.pointerType("strings.Builder")))!, ", fx.As(%v)", $.interfaceValue(_as, "[][]fx.asType", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.sliceType("fx.asType"))))
			}
		}
		{
			let _from: $.Slice<reflect.Type | null> = ann.From
			if ($.sliceLen(_from) > 0) {
				await fmt.Fprintf($.pointerValueOrNil($.interfaceValue<io.Writer | null>(sb, "*strings.Builder", /* @__PURE__ */ $.pointerType("strings.Builder")))!, ", fx.From(%v)", $.interfaceValue(_from, "[]reflect.Type", /* @__PURE__ */ $.sliceType("reflect.Type")))
			}
		}
		return sb.value.String()
	}

	public async applyOptionalTag(): globalThis.Promise<void> {
		let ann: annotated | $.VarRef<annotated> | null = this;
		const ann$: annotated = ann == null ? $.pointerTarget<annotated>(ann) : (ann as any).__isVarRef === true ? (ann as any).value : (ann as any).__goValue === undefined ? (ann as any) : $.pointerTarget<annotated>(ann)
		let ft = reflect.TypeOf((ann$ as annotated).Target)
		if (!(__goscriptAwait = (ft !== null && (ft as any).__isVarRef !== true && (ft as any).__goValue === undefined ? (ft as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(ft)).IsVariadic(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
			return
		}

		let __goscriptTuple17: any = await (ann !== null && (ann as any).__isVarRef !== true && (ann as any).__goValue === undefined ? ((ann as any) as annotated).currentResultTypes() : annotated.prototype.currentResultTypes.call(ann))
		let resultTypes: $.Slice<reflect.Type | null> = __goscriptTuple17[0]

		let fields: $.Slice<reflect.StructField> = $.arrayToSlice<reflect.StructField>([$.markAsStructValue($.cloneStructValue(__goscript_get__inAnnotationField()))])
		for (let i = 0; i < (__goscriptAwait = (ft !== null && (ft as any).__isVarRef !== true && (ft as any).__goValue === undefined ? (ft as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(ft)).NumIn(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); i++) {
			let field = (await (async () => { const __goscriptLiteralField13 = await fmt.Sprintf("Field%d", $.basicInterfaceValue(i, "int")); const __goscriptLiteralField14 = (__goscriptAwait = (ft !== null && (ft as any).__isVarRef !== true && (ft as any).__goValue === undefined ? (ft as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(ft)).In(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); return $.markAsStructValue(new reflect.StructField({Name: __goscriptLiteralField13, Type: __goscriptLiteralField14})) })())
			if (i == ((__goscriptAwait = (ft !== null && (ft as any).__isVarRef !== true && (ft as any).__goValue === undefined ? (ft as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(ft)).NumIn(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) - 1)) {
				// Mark a variadic argument optional by default
				// so that just wrapping a function in fx.Annotate does not
				// suddenly introduce a required []arg dependency.
				field.Tag = globalThis.String("optional:\"true\"")
			}
			fields = $.appendOne(fields, $.markAsStructValue($.cloneStructValue(field)))
		}
		let paramType = reflect.StructOf(fields)
		let origFn = $.markAsStructValue($.cloneStructValue(reflect.ValueOf((ann$ as annotated).Target)))
		let newFnType = reflect.FuncOf($.arrayToSlice<reflect.Type | null>([paramType]), resultTypes, false)
		let newFn = $.markAsStructValue($.cloneStructValue(reflect.MakeFunc($.pointerValueOrNil(newFnType)!, $.functionValue(async (args: $.Slice<reflect.Value>): globalThis.Promise<$.Slice<reflect.Value>> => {
			let params: reflect.Value = $.markAsStructValue($.cloneStructValue($.arrayIndex(args!, 0)))
			args = $.goSlice(args, undefined, 0)
			for (let i = 0; i < (ft !== null && (ft as any).__isVarRef !== true && (ft as any).__goValue === undefined ? (ft as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(ft)).NumIn(); i++) {
				args = $.appendOne(args, $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(params)).Field(i + 1))))
			}
			return await $.markAsStructValue($.cloneStructValue(origFn)).CallSlice(args)
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType("reflect.Value")], results: [/* @__PURE__ */ $.sliceType("reflect.Value")] } as $.FunctionTypeInfo)))));
		;(ann$ as annotated).Target = $.markAsStructValue($.cloneStructValue(newFn)).Interface()
	}

	public async cleanUpAsResults(): globalThis.Promise<void> {
		let ann: annotated | $.VarRef<annotated> | null = this;
		const ann$: annotated = ann == null ? $.pointerTarget<annotated>(ann) : (ann as any).__isVarRef === true ? (ann as any).value : (ann as any).__goValue === undefined ? (ann as any) : $.pointerTarget<annotated>(ann)
		// clean up orig function results if there were any As annotations
		if ($.sliceLen((ann$ as annotated).As) < 1) {
			return
		}
		let paramTypes: $.Slice<reflect.Type | null> = await (ann !== null && (ann as any).__isVarRef !== true && (ann as any).__goValue === undefined ? ((ann as any) as annotated).currentParamTypes() : annotated.prototype.currentParamTypes.call(ann))
		let __goscriptTuple18: any = await (ann !== null && (ann as any).__isVarRef !== true && (ann as any).__goValue === undefined ? ((ann as any) as annotated).currentResultTypes() : annotated.prototype.currentResultTypes.call(ann))
		let resultTypes: $.Slice<reflect.Type | null> = __goscriptTuple18[0]
		let hasError = __goscriptTuple18[1]
		let numRes = $.sliceLen((ann$ as annotated).As)
		if (hasError) {
			numRes++
		}
		let newResultTypes: $.Slice<reflect.Type | null> = $.goSlice(resultTypes, $.sliceLen(resultTypes) - numRes, undefined)
		let origFn = $.markAsStructValue($.cloneStructValue(reflect.ValueOf((ann$ as annotated).Target)))
		let newFnType = reflect.FuncOf(paramTypes, newResultTypes, false)
		let newFn = $.markAsStructValue($.cloneStructValue(reflect.MakeFunc($.pointerValueOrNil(newFnType)!, $.functionValue(async (args: $.Slice<reflect.Value>): globalThis.Promise<$.Slice<reflect.Value>> => {
			let results: $.Slice<reflect.Value> = null! as $.Slice<reflect.Value>
			results = await $.markAsStructValue($.cloneStructValue(origFn)).Call(args)
			results = $.goSlice(results, $.sliceLen(results) - numRes, undefined)
			return results
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType("reflect.Value")], results: [/* @__PURE__ */ $.sliceType("reflect.Value")] } as $.FunctionTypeInfo)))));
		;(ann$ as annotated).Target = $.markAsStructValue($.cloneStructValue(newFn)).Interface()
	}

	public async currentParamTypes(): globalThis.Promise<$.Slice<reflect.Type | null>> {
		const ann: annotated | $.VarRef<annotated> | null = this;
		let ft = reflect.TypeOf($.pointerValue<annotated>(ann).Target)
		let paramTypes: $.Slice<reflect.Type | null> = $.makeSlice<reflect.Type | null>((__goscriptAwait = (ft !== null && (ft as any).__isVarRef !== true && (ft as any).__goValue === undefined ? (ft as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(ft)).NumIn(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))

		for (let __goscriptSliceWindow9 = $.sliceRange(paramTypes), i = 0; i < (__goscriptAwait = (ft !== null && (ft as any).__isVarRef !== true && (ft as any).__goValue === undefined ? (ft as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(ft)).NumIn(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); i++) {
			;(__goscriptSliceWindow9.backing as any[])[$.windowSlot(__goscriptSliceWindow9, i)] = (__goscriptAwait = (ft !== null && (ft as any).__isVarRef !== true && (ft as any).__goValue === undefined ? (ft as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(ft)).In(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		return paramTypes
	}

	public async currentResultTypes(): globalThis.Promise<[$.Slice<reflect.Type | null>, boolean]> {
		const ann: annotated | $.VarRef<annotated> | null = this;
		let resultTypes: $.Slice<reflect.Type | null> = null! as $.Slice<reflect.Type | null>
		let hasError: boolean = false
		let ft = reflect.TypeOf($.pointerValue<annotated>(ann).Target)
		let numOut = (__goscriptAwait = (ft !== null && (ft as any).__isVarRef !== true && (ft as any).__goValue === undefined ? (ft as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(ft)).NumOut(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		resultTypes = $.makeSlice<reflect.Type | null>(numOut)

		for (let __goscriptSliceWindow10 = $.sliceRange(resultTypes), i = 0; i < numOut; i++) {
			;(__goscriptSliceWindow10.backing as any[])[$.windowSlot(__goscriptSliceWindow10, i)] = (__goscriptAwait = (ft !== null && (ft as any).__isVarRef !== true && (ft as any).__goValue === undefined ? (ft as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(ft)).Out(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (($.comparableEqual(((__goscriptSliceWindow10.backing as any[])[$.windowSlot(__goscriptSliceWindow10, i)] as reflect.Type | null), _typeOfError)) && (i == (numOut - 1))) {
				hasError = true
			}
		}
		return [resultTypes, hasError]
	}

	public async typeCheckOrigFn(): globalThis.Promise<$.GoError> {
		const ann: annotated | $.VarRef<annotated> | null = this;
		const ann$: annotated = ann == null ? $.pointerTarget<annotated>(ann) : (ann as any).__isVarRef === true ? (ann as any).value : (ann as any).__goValue === undefined ? (ann as any) : $.pointerTarget<annotated>(ann)
		let ft = reflect.TypeOf((ann$ as annotated).Target)
		let numOut = (__goscriptAwait = (ft !== null && (ft as any).__isVarRef !== true && (ft as any).__goValue === undefined ? (ft as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(ft)).NumOut(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		for (let i = 0; i < numOut; i++) {
			let ot = (__goscriptAwait = (ft !== null && (ft as any).__isVarRef !== true && (ft as any).__goValue === undefined ? (ft as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(ft)).Out(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (($.comparableEqual(ot, _typeOfError)) && (i != (numOut - 1))) {
				return fmt.Errorf($.concatString("only the last result can be an error: ", "%v (%v) returns error as result %d"), await fxreflect.FuncName((ann$ as annotated).Target), (ft as any), $.basicInterfaceValue(i, "int"))
			}
			if ((__goscriptAwait = (ot !== null && (ot as any).__isVarRef !== true && (ot as any).__goValue === undefined ? (ot as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(ot)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 25) {
				continue
			}
			if (!await dig.IsOut($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(reflect.New($.pointerValueOrNil((__goscriptAwait = (ft !== null && (ft as any).__isVarRef !== true && (ft as any).__goValue === undefined ? (ft as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(ft)).Out(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))!))).Elem())).Interface())) {
				continue
			}
			if (($.sliceLen((ann$ as annotated).ResultTags) > 0) || ($.sliceLen((ann$ as annotated).As) > 0)) {
				return errors.New("fx.Out structs cannot be annotated with fx.ResultTags or fx.As")
			}
		}
		for (let i = 0; i < (__goscriptAwait = (ft !== null && (ft as any).__isVarRef !== true && (ft as any).__goValue === undefined ? (ft as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(ft)).NumIn(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); i++) {
			let it = (__goscriptAwait = (ft !== null && (ft as any).__isVarRef !== true && (ft as any).__goValue === undefined ? (ft as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(ft)).In(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if ((__goscriptAwait = (it !== null && (it as any).__isVarRef !== true && (it as any).__goValue === undefined ? (it as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(it)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 25) {
				continue
			}
			if (!await dig.IsIn($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(reflect.New($.pointerValueOrNil((__goscriptAwait = (ft !== null && (ft as any).__isVarRef !== true && (ft as any).__goValue === undefined ? (ft as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(ft)).In(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))!))).Elem())).Interface())) {
				continue
			}
			if (($.sliceLen((ann$ as annotated).ParamTags) > 0) || ($.sliceLen((ann$ as annotated).From) > 0)) {
				return errors.New("fx.In structs cannot be annotated with fx.ParamTags or fx.From")
			}
		}
		return null
	}

	static __typeInfo = $.registerStructType(
		"fx.annotated",
		() => new annotated(),
		() => [$.methodSignature("Build", [], [{ kind: $.TypeKind.Interface, methods: [] }, "error"], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("applyOptionalTag", [], [], true), $.methodSignature("cleanUpAsResults", [], [], true), $.methodSignature("currentParamTypes", [], [/* @__PURE__ */ $.sliceType("reflect.Type")], true), $.methodSignature("currentResultTypes", [], [["resultTypes", /* @__PURE__ */ $.sliceType("reflect.Type")], ["hasError", /* @__PURE__ */ $.basicType("bool")]], true), $.methodSignature("typeCheckOrigFn", [], ["error"], true)],
		annotated,
		() => [/* @__PURE__ */ $.structField("Target", { kind: $.TypeKind.Interface, methods: [] }, [0], 0, true), /* @__PURE__ */ $.structField("Annotations", /* @__PURE__ */ $.sliceType("fx.Annotation"), [1], 16, true), /* @__PURE__ */ $.structField("ParamTags", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")), [2], 40, true), /* @__PURE__ */ $.structField("ResultTags", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")), [3], 64, true), /* @__PURE__ */ $.structField("As", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.sliceType("fx.asType")), [4], 88, true), /* @__PURE__ */ $.structField("From", /* @__PURE__ */ $.sliceType("reflect.Type"), [5], 112, true), /* @__PURE__ */ $.structField("FuncPtr", /* @__PURE__ */ $.basicType("uintptr"), [6], 136, true), /* @__PURE__ */ $.structField("Hooks", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("fx.lifecycleHookAnnotation")), [7], 144, true), /* @__PURE__ */ $.structField("container", /* @__PURE__ */ $.pointerType("dig.Container"), [8], 168, false, { pkgPath: "go.uber.org/fx" })]
	)
}

export const _unknownHookType: _lifecycleHookAnnotationType = 0

export const _onStartHookType: _lifecycleHookAnnotationType = 1

export const _onStopHookType: _lifecycleHookAnnotationType = 2

export var _inAnnotationField: reflect.StructField

export function __goscript_init__inAnnotationField(): void {
	if (((_inAnnotationField) as any) === undefined) {
		_inAnnotationField = (() => { const __goscriptLiteralField0 = reflect.TypeOf($.interfaceValue(new dig.In(undefined, true), "dig.In", "dig.In")); return $.markAsStructValue(new reflect.StructField({Name: "In", Type: __goscriptLiteralField0, Anonymous: true})) })()
	}
}

export function __goscript_get__inAnnotationField(): reflect.StructField {
	if (((_inAnnotationField) as any) === undefined) {
		__goscript_init__inAnnotationField()
	}
	return _inAnnotationField
}

export function __goscript_set__inAnnotationField(__goscriptValue: reflect.StructField): void {
	$.assignStruct(_inAnnotationField, __goscriptValue)
}

export var _outAnnotationField: reflect.StructField

export function __goscript_init__outAnnotationField(): void {
	if (((_outAnnotationField) as any) === undefined) {
		_outAnnotationField = (() => { const __goscriptLiteralField1 = reflect.TypeOf($.interfaceValue(new dig.Out(undefined, true), "dig.Out", "dig.Out")); return $.markAsStructValue(new reflect.StructField({Name: "Out", Type: __goscriptLiteralField1, Anonymous: true})) })()
	}
}

export function __goscript_get__outAnnotationField(): reflect.StructField {
	if (((_outAnnotationField) as any) === undefined) {
		__goscript_init__outAnnotationField()
	}
	return _outAnnotationField
}

export function __goscript_set__outAnnotationField(__goscriptValue: reflect.StructField): void {
	$.assignStruct(_outAnnotationField, __goscriptValue)
}

export let _typeOfError: reflect.Type | null = $.pointerValue<Exclude<reflect.Type, null>>(reflect.TypeOf($.interfaceValue(null, "*error", /* @__PURE__ */ $.pointerType("error")))).Elem()

export function __goscript_set__typeOfError(__goscriptValue: reflect.Type | null): void {
	_typeOfError = __goscriptValue
}

export let _nilError: reflect.Value = $.markAsStructValue($.cloneStructValue(reflect.Zero($.pointerValueOrNil(_typeOfError)!)))

export function __goscript_set__nilError(__goscriptValue: reflect.Value): void {
	$.assignStruct(_nilError, __goscriptValue)
}

export let errTagSyntaxSpace: $.GoError = errors.New("multiple tags are not separated by space")

export function __goscript_set_errTagSyntaxSpace(__goscriptValue: $.GoError): void {
	errTagSyntaxSpace = __goscriptValue
}

export let errTagKeySyntax: $.GoError = errors.New("tag key is invalid, Use group, name or optional as tag keys")

export function __goscript_set_errTagKeySyntax(__goscriptValue: $.GoError): void {
	errTagKeySyntax = __goscriptValue
}

export let errTagValueSyntaxQuote: $.GoError = errors.New("tag value should start with double quote. i.e. key:\"value\" ")

export function __goscript_set_errTagValueSyntaxQuote(__goscriptValue: $.GoError): void {
	errTagValueSyntaxQuote = __goscriptValue
}

export let errTagValueSyntaxEndingQuote: $.GoError = errors.New("tag value should end in double quote. i.e. key:\"value\" ")

export function __goscript_set_errTagValueSyntaxEndingQuote(__goscriptValue: $.GoError): void {
	errTagValueSyntaxEndingQuote = __goscriptValue
}

export function verifyTagsSpaceSeparated(tagIdx: number, tag: string): $.GoError {
	if (((tagIdx > 0) && (!$.stringEqual(tag, ""))) && ($.indexString(tag, 0) != 32)) {
		return errTagSyntaxSpace
	}
	return null
}

export function verifyValueQuote(value: string): [string, $.GoError] {
	// starting quote should be a double quote
	if ($.indexString(value, 0) != 34) {
		return ["", errTagValueSyntaxQuote]
	}
	// validate tag value is within quotes
	let i = 1
	while ((i < $.stringLen(value)) && ($.indexString(value, i) != 34)) {
		if ($.indexString(value, i) == 92) {
			i++
		}
		i++
	}
	if (i >= $.stringLen(value)) {
		return ["", errTagValueSyntaxEndingQuote]
	}
	return [$.sliceStringOrBytes(value, i + 1, undefined), null]
}

export function verifyAnnotateTag(tag: string): $.GoError {
	let tagIdx = 0
	let validKeys: globalThis.Map<string, {}> | null = $.makeMap<string, {}>([["group", {}], ["optional", {}], ["name", {}]])
	for (; !$.stringEqual(tag, ""); tagIdx++) {
		{
			let err = verifyTagsSpaceSeparated(tagIdx, tag)
			if (err != null) {
				return err
			}
		}
		let i = 0
		if ($.stringEqual(strings.TrimSpace(tag), "")) {
			return null
		}
		// parsing the key i.e. till reaching colon :
		while ((i < $.stringLen(tag)) && ($.indexString(tag, i) != 58)) {
			i++
		}
		let key = strings.TrimSpace($.sliceStringOrBytes(tag, undefined, i))
		{
			let [, ok] = $.mapGet<string, {}, {}>(validKeys, key, {})
			if (!ok) {
				return errTagKeySyntax
			}
		}
		let [value, err] = verifyValueQuote($.sliceStringOrBytes(tag, i + 1, undefined))
		if (err != null) {
			return err
		}
		tag = value
	}
	return null
}

export function ParamTags(tags: $.Slice<string>): Annotation | null {
	return $.interfaceValue<Annotation | null>(new paramTagsAnnotation({tags: tags}, true), "fx.paramTagsAnnotation", "fx.paramTagsAnnotation")
}

export function ResultTags(tags: $.Slice<string>): Annotation | null {
	return $.interfaceValue<Annotation | null>(new resultTagsAnnotation({tags: tags}, true), "fx.resultTagsAnnotation", "fx.resultTagsAnnotation")
}

export var _typeOfLifecycle: reflect.Type | null

export function __goscript_init__typeOfLifecycle(): void {
	if (((_typeOfLifecycle) as any) === undefined) {
		_typeOfLifecycle = $.pointerValue<Exclude<reflect.Type, null>>(reflect.TypeOf($.interfaceValue(null, "*fx.Lifecycle", /* @__PURE__ */ $.pointerType("fx.Lifecycle")))).Elem()
	}
}

export function __goscript_get__typeOfLifecycle(): reflect.Type | null {
	if (((_typeOfLifecycle) as any) === undefined) {
		__goscript_init__typeOfLifecycle()
	}
	return _typeOfLifecycle
}

export function __goscript_set__typeOfLifecycle(__goscriptValue: reflect.Type | null): void {
	_typeOfLifecycle = __goscriptValue
}

export let _typeOfContext: reflect.Type | null = $.pointerValue<Exclude<reflect.Type, null>>(reflect.TypeOf($.interfaceValue(null, "*context.Context", /* @__PURE__ */ $.pointerType("context.Context")))).Elem()

export function __goscript_set__typeOfContext(__goscriptValue: reflect.Type | null): void {
	_typeOfContext = __goscriptValue
}

export let _nameTag: string = "name"

export function __goscript_set__nameTag(__goscriptValue: string): void {
	_nameTag = __goscriptValue
}

export let _groupTag: string = "group"

export function __goscript_set__groupTag(__goscriptValue: string): void {
	_groupTag = __goscriptValue
}

export async function makeHookScopeCtor(paramTypes: $.Slice<reflect.Type | null>, resultTypes: $.Slice<reflect.Type | null>, args: $.Slice<reflect.Value>): globalThis.Promise<any> {
	class key {
		public get t(): reflect.Type | null {
			return this._fields.t
		}

		public set t(value: reflect.Type | null) {
			this._fields.t = value
		}

		public get name(): string {
			return this._fields.name
		}

		public set name(value: string) {
			this._fields.name = value
		}

		public get group(): string {
			return this._fields.group
		}

		public set group(value: string) {
			this._fields.group = value
		}

		public _fields: {
			t: reflect.Type | null
			name: string
			group: string
		}

		constructor(init?: Partial<{t?: reflect.Type | null, name?: string, group?: string}>, __goscriptValue?: boolean) {
			this._fields = {
				t: init?.t ?? (null! as reflect.Type | null),
				name: init?.name ?? ("" as string),
				group: init?.group ?? ("" as string)
			}
			;(this as any)[$.structValueMarker] = __goscriptValue === true
		}

		public clone(): key {
			return new key(this, true)
		}

		public __goscriptAssign(source: key): void {
			const target = this._fields
			const values = source._fields
			target.t = $.assignFieldValue(target.t, values.t, "reflect.Type")
			target.name = values.name
			target.group = values.group
		}

		static __typeInfo = $.registerStructType(
			"fx.key",
			() => new key(),
			() => [],
			key,
			() => [/* @__PURE__ */ $.structField("t", "reflect.Type", [0], 0, false, { pkgPath: "go.uber.org/fx" }), /* @__PURE__ */ $.structField("name", /* @__PURE__ */ $.basicType("string"), [1], 16, false, { pkgPath: "go.uber.org/fx" }), /* @__PURE__ */ $.structField("group", /* @__PURE__ */ $.basicType("string"), [2], 32, false, { pkgPath: "go.uber.org/fx" })]
		)
	}
	let seen: globalThis.Map<key, {}> | null = $.makeMap<key, {}>([])
	let outTypes: $.Slice<reflect.Type | null> = $.makeSlice<reflect.Type | null>($.sliceLen(resultTypes))
	for (let __goscriptRangeTarget7 = resultTypes, __goscriptRangeWindow7 = $.sliceRange(__goscriptRangeTarget7), __goscriptSliceWindow3 = $.sliceRange(outTypes), i = 0; i < __goscriptRangeWindow7.length; i++) {
		let t = (__goscriptRangeWindow7.backing[__goscriptRangeWindow7.offset + i] as reflect.Type | null);
		;(__goscriptSliceWindow3.backing as any[])[$.windowSlot(__goscriptSliceWindow3, i)] = t
		if (await isOut(t)) {
			for (let j = 1; j < (__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).NumField(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); j++) {
				let field = $.markAsStructValue($.cloneStructValue(((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Field(j), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as reflect.StructField)))
				$.mapSet(seen, (() => { const __goscriptLiteralField4 = reflect.StructTag_Get(field.Tag, _nameTag); const __goscriptLiteralField5 = reflect.StructTag_Get(field.Tag, _groupTag); return $.markAsStructValue(new key({t: field.Type, name: __goscriptLiteralField4, group: __goscriptLiteralField5})) })(), {})
			}
			continue
		}
		$.mapSet(seen, $.markAsStructValue(new key({t: t})), {})
	}

	let fields: $.Slice<reflect.StructField> = $.arrayToSlice<reflect.StructField>([$.markAsStructValue($.cloneStructValue(__goscript_get__outAnnotationField()))])

	let skippedParams: $.Slice<$.Slice<number>> = $.makeSlice<$.Slice<number>>($.sliceLen(paramTypes))

	for (let __goscriptRangeTarget8 = paramTypes, __goscriptRangeWindow8 = $.sliceRange(__goscriptRangeTarget8), __goscriptSliceWindow4 = $.sliceRange(skippedParams), i = 0; i < __goscriptRangeWindow8.length; i++) {
		let t = (__goscriptRangeWindow8.backing[__goscriptRangeWindow8.offset + i] as reflect.Type | null);
		;(__goscriptSliceWindow4.backing as any[])[$.windowSlot(__goscriptSliceWindow4, i)] = $.arrayToSlice<number>([])
		if (await isIn(t)) {
			for (let j = 1; j < (__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).NumField(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); j++) {
				let origField = $.markAsStructValue($.cloneStructValue(((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Field(j), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as reflect.StructField)))
				let k = (() => { const __goscriptLiteralField6 = reflect.StructTag_Get(origField.Tag, _nameTag); const __goscriptLiteralField7 = reflect.StructTag_Get(origField.Tag, _groupTag); return $.markAsStructValue(new key({t: origField.Type, name: __goscriptLiteralField6, group: __goscriptLiteralField7})) })()

				{
					let [, ok] = $.mapGet<key, {}, {}>(seen, k, {})
					if (ok) {
						;(__goscriptSliceWindow4.backing as any[])[$.windowSlot(__goscriptSliceWindow4, i)] = $.appendOne(((__goscriptSliceWindow4.backing as any[])[$.windowSlot(__goscriptSliceWindow4, i)] as $.Slice<number>), j)
						continue
					}
				}

				let field = (await (async () => { const __goscriptLiteralField8 = await fmt.Sprintf("Field%d", $.basicInterfaceValue(j - 1, "int")); return $.markAsStructValue(new reflect.StructField({Name: __goscriptLiteralField8, Type: origField.Type, Tag: origField.Tag})) })())
				fields = $.appendOne(fields, $.markAsStructValue($.cloneStructValue(field)))
			}
			continue
		}
		let k = $.markAsStructValue(new key({t: t}))

		{
			let [, ok] = $.mapGet<key, {}, {}>(seen, k, {})
			if (ok) {
				;(__goscriptSliceWindow4.backing as any[])[$.windowSlot(__goscriptSliceWindow4, i)] = $.appendOne(((__goscriptSliceWindow4.backing as any[])[$.windowSlot(__goscriptSliceWindow4, i)] as $.Slice<number>), i)
				continue
			}
		}
		let field = (await (async () => { const __goscriptLiteralField9 = await fmt.Sprintf("Field%d", $.basicInterfaceValue(i, "int")); return $.markAsStructValue(new reflect.StructField({Name: __goscriptLiteralField9, Type: t})) })())
		fields = $.appendOne(fields, $.markAsStructValue($.cloneStructValue(field)))
	}

	outTypes = $.appendOne(outTypes, reflect.StructOf(fields), $.appendZeros.nil)
	let ctorType = reflect.FuncOf($.arrayToSlice<reflect.Type | null>([]), outTypes, false)
	let ctor = $.markAsStructValue($.cloneStructValue(reflect.MakeFunc($.pointerValueOrNil(ctorType)!, $.functionValue(async (_p0: $.Slice<reflect.Value>): globalThis.Promise<$.Slice<reflect.Value>> => {
		let nOut = $.sliceLen(outTypes)
		let results: $.Slice<reflect.Value> = $.makeSlice<reflect.Value>(nOut, undefined, undefined, () => $.markAsStructValue(new reflect.Value()))
		for (let i = 0; i < (nOut - 1); i++) {
			$.assignStruct($.sliceElems(results!)[$.sliceSlot(results!, i)], $.arrayIndex(args!, i))
		}

		let v = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(reflect.New($.pointerValueOrNil($.arrayIndex(outTypes!, nOut - 1))!))).Elem()))
		let fieldIdx = 1
		for (let i = nOut - 1; i < $.sliceLen(args); i++) {
			let paramIdx = i - (nOut - 1)
			if (await isIn($.arrayIndex(paramTypes!, paramIdx))) {
				let skippedIdx = 0
				for (let j = 1; j < $.pointerValue<Exclude<reflect.Type, null>>($.arrayIndex(paramTypes!, paramIdx)).NumField(); j++) {
					if (($.sliceLen($.arrayIndex(skippedParams!, paramIdx)) > 0) && ($.arrayIndex($.arrayIndex(skippedParams!, paramIdx)!, skippedIdx) == j)) {
						// skip
						skippedIdx++
						continue
					}
					$.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(v)).Field(fieldIdx))).Set($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue($.arrayIndex(args!, i))).Field(j))))
					fieldIdx++
				}
			} else {
				if (($.sliceLen($.arrayIndex(skippedParams!, paramIdx)) > 0) && ($.arrayIndex($.arrayIndex(skippedParams!, paramIdx)!, 0) == paramIdx)) {
					continue
				}
				$.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(v)).Field(fieldIdx))).Set($.markAsStructValue($.cloneStructValue($.arrayIndex(args!, i))))
				fieldIdx++
			}
		}
		$.assignStruct($.sliceElems(results!)[$.sliceSlot(results!, nOut - 1)], v)

		return results
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType("reflect.Value")], results: [/* @__PURE__ */ $.sliceType("reflect.Value")] } as $.FunctionTypeInfo)))))
	return $.markAsStructValue($.cloneStructValue(ctor)).Interface()
}

export async function injectLifecycle(paramTypes: $.Slice<reflect.Type | null>): globalThis.Promise<[$.Slice<reflect.Type | null>, ((_p0: $.Slice<reflect.Value>) => $.Slice<reflect.Value> | globalThis.Promise<$.Slice<reflect.Value>>) | null]> {
	// since lifecycle already exists in param types, no need to inject again
	if (await lifecycleExists(paramTypes)) {
		return [paramTypes, $.functionValue((args: $.Slice<reflect.Value>): $.Slice<reflect.Value> => {
			return args
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType("reflect.Value")], results: [/* @__PURE__ */ $.sliceType("reflect.Value")] } as $.FunctionTypeInfo))]
	}
	// If params are tagged or there's an untagged variadic argument,
	// add a Lifecycle field to the param struct
	if (($.sliceLen(paramTypes) > 0) && await isIn($.arrayIndex(paramTypes!, 0))) {
		let taggedParam = $.arrayIndex(paramTypes!, 0)
		let fields: $.Slice<reflect.StructField> = $.arrayToSlice<reflect.StructField>([$.markAsStructValue($.cloneStructValue(((__goscriptAwait = (taggedParam !== null && (taggedParam as any).__isVarRef !== true && (taggedParam as any).__goValue === undefined ? (taggedParam as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(taggedParam)).Field(0), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as reflect.StructField))), $.markAsStructValue(new reflect.StructField({Name: "Lifecycle", Type: __goscript_get__typeOfLifecycle()}))])
		for (let i = 1; i < (__goscriptAwait = (taggedParam !== null && (taggedParam as any).__isVarRef !== true && (taggedParam as any).__goValue === undefined ? (taggedParam as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(taggedParam)).NumField(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); i++) {
			fields = $.appendOne(fields, $.markAsStructValue($.cloneStructValue(((__goscriptAwait = (taggedParam !== null && (taggedParam as any).__isVarRef !== true && (taggedParam as any).__goValue === undefined ? (taggedParam as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(taggedParam)).Field(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as reflect.StructField))))
		}
		let newParamType = reflect.StructOf(fields)
		return [$.arrayToSlice<reflect.Type | null>([newParamType]), $.functionValue(async (args: $.Slice<reflect.Value>): globalThis.Promise<$.Slice<reflect.Value>> => {
			let param = $.markAsStructValue($.cloneStructValue($.arrayIndex(args!, 0)))
			$.assignStruct($.sliceElems(args!)[$.sliceSlot(args!, 0)], $.markAsStructValue($.cloneStructValue(reflect.New($.pointerValueOrNil(taggedParam)!))).Elem())
			for (let __goscriptSliceWindow5 = $.sliceRange(args), i = 1; i < (__goscriptAwait = (taggedParam !== null && (taggedParam as any).__isVarRef !== true && (taggedParam as any).__goValue === undefined ? (taggedParam as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(taggedParam)).NumField(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); i++) {
				$.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(((__goscriptSliceWindow5.backing as any[])[$.windowSlot(__goscriptSliceWindow5, 0)] as reflect.Value))).Field(i))).Set($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(param)).Field(i + 1))))
			}
			return args
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType("reflect.Value")], results: [/* @__PURE__ */ $.sliceType("reflect.Value")] } as $.FunctionTypeInfo))]
	}

	return [$.appendSlice($.arrayToSlice<reflect.Type | null>([__goscript_get__typeOfLifecycle()]), paramTypes, $.appendZeros.nil), $.functionValue((args: $.Slice<reflect.Value>): $.Slice<reflect.Value> => {
		return $.goSlice(args, 1, undefined)
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType("reflect.Value")], results: [/* @__PURE__ */ $.sliceType("reflect.Value")] } as $.FunctionTypeInfo))]
}

export async function lifecycleExists(paramTypes: $.Slice<reflect.Type | null>): globalThis.Promise<boolean> {
	for (let __goscriptRangeTarget9 = paramTypes, __goscriptRangeWindow9 = $.sliceRange(__goscriptRangeTarget9), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow9.length; __rangeIndex++) {
		let t = (__goscriptRangeWindow9.backing[__goscriptRangeWindow9.offset + __rangeIndex] as reflect.Type | null)
		if ($.comparableEqual(t, __goscript_get__typeOfLifecycle())) {
			return true
		}
		if (await isIn(t)) {
			for (let i = 1; i < (__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).NumField(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); i++) {
				if ($.comparableEqual(((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Field(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as reflect.StructField).Type, __goscript_get__typeOfLifecycle())) {
					return true
				}
			}
		}
	}
	return false
}

export function OnStart(onStart: any): Annotation | null {
	return $.interfaceValue<Annotation | null>(new lifecycleHookAnnotation({Type: 1, Target: onStart}), "*fx.lifecycleHookAnnotation", /* @__PURE__ */ $.pointerType("fx.lifecycleHookAnnotation"))
}

export function OnStop(onStop: any): Annotation | null {
	return $.interfaceValue<Annotation | null>(new lifecycleHookAnnotation({Type: 2, Target: onStop}), "*fx.lifecycleHookAnnotation", /* @__PURE__ */ $.pointerType("fx.lifecycleHookAnnotation"))
}

export async function isOut(t: reflect.Type | null): globalThis.Promise<boolean> {
	return (((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 25) && await dig.IsOut($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(reflect.New($.pointerValueOrNil(t)!))).Elem())).Interface()))
}

export async function isIn(t: reflect.Type | null): globalThis.Promise<boolean> {
	return (((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 25) && await dig.IsIn($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(reflect.New($.pointerValueOrNil(t)!))).Elem())).Interface()))
}

export function As(interfaces: $.Slice<any>): Annotation | null {
	return $.interfaceValue<Annotation | null>(new asAnnotation({targets: interfaces}), "*fx.asAnnotation", /* @__PURE__ */ $.pointerType("fx.asAnnotation"))
}

export function Self(): any {
	return $.interfaceValue(new self(), "*fx.self", /* @__PURE__ */ $.pointerType("fx.self"))
}

export async function extractResultFields(types: $.Slice<reflect.Type | null>): globalThis.Promise<[$.Slice<reflect.StructField>, ((_p0: number, _p1: $.Slice<reflect.Value>) => reflect.Value | globalThis.Promise<reflect.Value>) | null]> {
	let resultFields: $.Slice<reflect.StructField> = null! as $.Slice<reflect.StructField>
	if (($.sliceLen(types) > 0) && await isOut($.arrayIndex(types!, 0))) {
		for (let __goscriptSliceWindow6 = $.sliceRange(types), i = 1; i < (__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>(((__goscriptSliceWindow6.backing as any[])[$.windowSlot(__goscriptSliceWindow6, 0)] as reflect.Type | null)).NumField(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); i++) {
			resultFields = $.appendOne(resultFields, $.markAsStructValue($.cloneStructValue(((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>(((__goscriptSliceWindow6.backing as any[])[$.windowSlot(__goscriptSliceWindow6, 0)] as reflect.Type | null)).Field(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as reflect.StructField))))
		}
		return [resultFields, $.functionValue((idx: number, results: $.Slice<reflect.Value>): reflect.Value => {
			return $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue($.arrayIndex(results!, 0))).Field(idx)))
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.sliceType("reflect.Value")], results: ["reflect.Value"] } as $.FunctionTypeInfo))]
	}
	for (let __goscriptRangeTarget13 = types, __goscriptRangeWindow13 = $.sliceRange(__goscriptRangeTarget13), i = 0; i < __goscriptRangeWindow13.length; i++) {
		let t = (__goscriptRangeWindow13.backing[__goscriptRangeWindow13.offset + i] as reflect.Type | null)
		if (await isOut(t)) {
			continue
		}
		let field = (await (async () => { const __goscriptLiteralField11 = await fmt.Sprintf("Field%d", $.basicInterfaceValue(i, "int")); return $.markAsStructValue(new reflect.StructField({Name: __goscriptLiteralField11, Type: t})) })())
		resultFields = $.appendOne(resultFields, $.markAsStructValue($.cloneStructValue(field)))
	}
	return [resultFields, $.functionValue((idx: number, results: $.Slice<reflect.Value>): reflect.Value => {
		return $.markAsStructValue($.cloneStructValue($.arrayIndex(results!, idx - 1)))
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.sliceType("reflect.Value")], results: ["reflect.Value"] } as $.FunctionTypeInfo))]
}

export function From(interfaces: $.Slice<any>): Annotation | null {
	return $.interfaceValue<Annotation | null>(new fromAnnotation({targets: interfaces}), "*fx.fromAnnotation", /* @__PURE__ */ $.pointerType("fx.fromAnnotation"))
}

export async function Annotate(t: any, anns: $.Slice<Annotation | null>): globalThis.Promise<any> {
	let result = $.varRef(new annotated({Target: t}, true))
	for (let __goscriptRangeTarget18 = anns, __goscriptRangeWindow18 = $.sliceRange(__goscriptRangeTarget18), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow18.length; __rangeIndex++) {
		let ann = (__goscriptRangeWindow18.backing[__goscriptRangeWindow18.offset + __rangeIndex] as Annotation | null)
		{
			let err = (__goscriptAwait = (ann !== null && (ann as any).__isVarRef !== true && (ann as any).__goValue === undefined ? (ann as Exclude<Annotation, null>) : $.pointerValue<Exclude<Annotation, null>>(ann)).apply(result), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (err != null) {
				return $.interfaceValue(new annotationError({target: t, err: err}, true), "fx.annotationError", "fx.annotationError")
			}
		}
	}
	result.value.Annotations = anns
	return $.interfaceValue((result.value).clone(), "fx.annotated", "fx.annotated")
}

var __goscriptAwait: any
