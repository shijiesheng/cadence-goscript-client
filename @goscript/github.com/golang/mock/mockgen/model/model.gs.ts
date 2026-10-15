// Generated file based on model.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as gob from "@goscript/encoding/gob/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as io from "@goscript/io/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as strings from "@goscript/strings/index.js"
import "@goscript/encoding/gob/index.js"
import "@goscript/fmt/index.js"
import "@goscript/io/index.js"
import "@goscript/reflect/index.js"
import "@goscript/strings/index.js"

$.registerTypePackagePath("github.com/golang/mock/mockgen/model", ["model.Package", "model.Interface", "model.Method", "model.Parameter", "model.Type", "model.ArrayType", "model.ChanType", "model.ChanDir", "model.FuncType", "model.MapType", "model.NamedType", "model.PointerType", "model.PredeclaredType", "model.TypeParametersType"])

export type Type = {
	String(pm: globalThis.Map<string, string> | null, pkgOverride: string): string | globalThis.Promise<string>
	addImports(im: globalThis.Map<string, boolean> | null): void
}

$.registerInterfaceType(
	"model.Type",
	null,
	[$.methodSignature("String", [["pm", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string"))], ["pkgOverride", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("addImports", [["im", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("bool"))]])]
);

export type ChanDir = number

export type PredeclaredType = string

$.registerNamedValueType(
	"model.PredeclaredType",
	{String: (receiver: any, ...args: any[]) => (PredeclaredType_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), addImports: (receiver: any, ...args: any[]) => (PredeclaredType_addImports as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("String", [/* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string")), /* @__PURE__ */ $.basicType("string")], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("addImports", [/* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("bool"))])]
);

$.registerNamedValueType(
	"*model.PredeclaredType",
	{String: (receiver: any, ...args: any[]) => (PredeclaredType_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), addImports: (receiver: any, ...args: any[]) => (PredeclaredType_addImports as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("String", [/* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string")), /* @__PURE__ */ $.basicType("string")], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("addImports", [/* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("bool"))])]
);

export class Package {
	public get Name(): string {
		return this._fields.Name
	}

	public set Name(value: string) {
		this._fields.Name = value
	}

	public get PkgPath(): string {
		return this._fields.PkgPath
	}

	public set PkgPath(value: string) {
		this._fields.PkgPath = value
	}

	public get Interfaces(): $.Slice<Interface | $.VarRef<Interface> | null> {
		return this._fields.Interfaces
	}

	public set Interfaces(value: $.Slice<Interface | $.VarRef<Interface> | null>) {
		this._fields.Interfaces = value
	}

	public get DotImports(): $.Slice<string> {
		return this._fields.DotImports
	}

	public set DotImports(value: $.Slice<string>) {
		this._fields.DotImports = value
	}

	public _fields: {
		Name: string
		PkgPath: string
		Interfaces: $.Slice<Interface | $.VarRef<Interface> | null>
		DotImports: $.Slice<string>
	}

	constructor(init?: Partial<{Name?: string, PkgPath?: string, Interfaces?: $.Slice<Interface | $.VarRef<Interface> | null>, DotImports?: $.Slice<string>}>, __goscriptValue?: boolean) {
		this._fields = {
			Name: init?.Name ?? ("" as string),
			PkgPath: init?.PkgPath ?? ("" as string),
			Interfaces: init?.Interfaces ?? (null! as $.Slice<Interface | $.VarRef<Interface> | null>),
			DotImports: init?.DotImports ?? (null! as $.Slice<string>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Package {
		return new Package(this, true)
	}

	public __goscriptAssign(source: Package): void {
		const target = this._fields
		const values = source._fields
		target.Name = values.Name
		target.PkgPath = values.PkgPath
		target.Interfaces = values.Interfaces
		target.DotImports = values.DotImports
	}

	public Imports(): globalThis.Map<string, boolean> | null {
		const pkg: Package | $.VarRef<Package> | null = this;
		let im: globalThis.Map<string, boolean> | null = $.makeMap<string, boolean>()
		for (let __goscriptRangeTarget1 = $.pointerValue<Package>(pkg).Interfaces, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
			let intf = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as Interface | $.VarRef<Interface> | null)
			void (intf !== null && (intf as any).__isVarRef !== true && (intf as any).__goValue === undefined ? ((intf as any) as Interface).addImports(im) : Interface.prototype.addImports.call(intf, im))
			for (let __goscriptRangeTarget0 = $.pointerValue<Interface>(intf).TypeParams, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
				let tp = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as Parameter | $.VarRef<Parameter> | null)
				$.pointerValue<Exclude<Type, null>>($.pointerValue<Parameter>(tp).Type).addImports(im)
			}
		}
		return im
	}

	public async Print(w: io.Writer | null): globalThis.Promise<void> {
		const pkg: Package | $.VarRef<Package> | null = this;
		const pkg$: Package = pkg == null ? $.pointerTarget<Package>(pkg) : (pkg as any).__isVarRef === true ? (pkg as any).value : (pkg as any).__goValue === undefined ? (pkg as any) : $.pointerTarget<Package>(pkg)
		await fmt.Fprintf($.pointerValueOrNil(w)!, "package %s\n", (pkg$ as Package).Name)
		for (let __goscriptRangeTarget2 = (pkg$ as Package).Interfaces, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow2.length; __rangeIndex++) {
			let intf = (__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + __rangeIndex] as Interface | $.VarRef<Interface> | null)
			await (intf !== null && (intf as any).__isVarRef !== true && (intf as any).__goValue === undefined ? ((intf as any) as Interface).Print(w) : Interface.prototype.Print.call(intf, w))
		}
	}

	static __typeInfo = $.registerStructType(
		"model.Package",
		() => new Package(),
		() => [$.methodSignature("Imports", [], [/* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("bool"))], true), $.methodSignature("Print", [["w", "io.Writer"]], [], true)],
		Package,
		() => [/* @__PURE__ */ $.structField("Name", /* @__PURE__ */ $.basicType("string"), [0], 0, true), /* @__PURE__ */ $.structField("PkgPath", /* @__PURE__ */ $.basicType("string"), [1], 16, true), /* @__PURE__ */ $.structField("Interfaces", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("model.Interface")), [2], 32, true), /* @__PURE__ */ $.structField("DotImports", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")), [3], 56, true)]
	)
}

export class Interface {
	public get Name(): string {
		return this._fields.Name
	}

	public set Name(value: string) {
		this._fields.Name = value
	}

	public get Methods(): $.Slice<Method | $.VarRef<Method> | null> {
		return this._fields.Methods
	}

	public set Methods(value: $.Slice<Method | $.VarRef<Method> | null>) {
		this._fields.Methods = value
	}

	public get TypeParams(): $.Slice<Parameter | $.VarRef<Parameter> | null> {
		return this._fields.TypeParams
	}

	public set TypeParams(value: $.Slice<Parameter | $.VarRef<Parameter> | null>) {
		this._fields.TypeParams = value
	}

	public _fields: {
		Name: string
		Methods: $.Slice<Method | $.VarRef<Method> | null>
		TypeParams: $.Slice<Parameter | $.VarRef<Parameter> | null>
	}

	constructor(init?: Partial<{Name?: string, Methods?: $.Slice<Method | $.VarRef<Method> | null>, TypeParams?: $.Slice<Parameter | $.VarRef<Parameter> | null>}>, __goscriptValue?: boolean) {
		this._fields = {
			Name: init?.Name ?? ("" as string),
			Methods: init?.Methods ?? (null! as $.Slice<Method | $.VarRef<Method> | null>),
			TypeParams: init?.TypeParams ?? (null! as $.Slice<Parameter | $.VarRef<Parameter> | null>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Interface {
		return new Interface(this, true)
	}

	public __goscriptAssign(source: Interface): void {
		const target = this._fields
		const values = source._fields
		target.Name = values.Name
		target.Methods = values.Methods
		target.TypeParams = values.TypeParams
	}

	public AddMethod(m: Method | $.VarRef<Method> | null): void {
		let intf: Interface | $.VarRef<Interface> | null = this;
		const intf$: Interface = intf == null ? $.pointerTarget<Interface>(intf) : (intf as any).__isVarRef === true ? (intf as any).value : (intf as any).__goValue === undefined ? (intf as any) : $.pointerTarget<Interface>(intf)
		for (let __goscriptRangeTarget3 = (intf$ as Interface).Methods, __goscriptRangeWindow3 = $.sliceRange(__goscriptRangeTarget3), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow3.length; __rangeIndex++) {
			let me = (__goscriptRangeWindow3.backing[__goscriptRangeWindow3.offset + __rangeIndex] as Method | $.VarRef<Method> | null)
			if ($.stringEqual($.pointerValue<Method>(me).Name, $.pointerValue<Method>(m).Name)) {
				return
			}
		}
		;(intf$ as Interface).Methods = $.appendOne((intf$ as Interface).Methods, m, $.appendZeros.nil)
	}

	public async Print(w: io.Writer | null): globalThis.Promise<void> {
		const intf: Interface | $.VarRef<Interface> | null = this;
		const intf$: Interface = intf == null ? $.pointerTarget<Interface>(intf) : (intf as any).__isVarRef === true ? (intf as any).value : (intf as any).__goValue === undefined ? (intf as any) : $.pointerTarget<Interface>(intf)
		await fmt.Fprintf($.pointerValueOrNil(w)!, "interface %s\n", (intf$ as Interface).Name)
		for (let __goscriptRangeTarget4 = (intf$ as Interface).Methods, __goscriptRangeWindow4 = $.sliceRange(__goscriptRangeTarget4), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow4.length; __rangeIndex++) {
			let m = (__goscriptRangeWindow4.backing[__goscriptRangeWindow4.offset + __rangeIndex] as Method | $.VarRef<Method> | null)
			await (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Method).Print(w) : Method.prototype.Print.call(m, w))
		}
	}

	public addImports(im: globalThis.Map<string, boolean> | null): void {
		const intf: Interface | $.VarRef<Interface> | null = this;
		for (let __goscriptRangeTarget5 = $.pointerValue<Interface>(intf).Methods, __goscriptRangeWindow5 = $.sliceRange(__goscriptRangeTarget5), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow5.length; __rangeIndex++) {
			let m = (__goscriptRangeWindow5.backing[__goscriptRangeWindow5.offset + __rangeIndex] as Method | $.VarRef<Method> | null)
			void (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Method).addImports(im) : Method.prototype.addImports.call(m, im))
		}
	}

	static __typeInfo = $.registerStructType(
		"model.Interface",
		() => new Interface(),
		() => [$.methodSignature("AddMethod", [["m", /* @__PURE__ */ $.pointerType("model.Method")]], [], true), $.methodSignature("Print", [["w", "io.Writer"]], [], true), $.methodSignature("addImports", [["im", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("bool"))]], [], true)],
		Interface,
		() => [/* @__PURE__ */ $.structField("Name", /* @__PURE__ */ $.basicType("string"), [0], 0, true), /* @__PURE__ */ $.structField("Methods", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("model.Method")), [1], 16, true), /* @__PURE__ */ $.structField("TypeParams", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("model.Parameter")), [2], 40, true)]
	)
}

export class Method {
	public get Name(): string {
		return this._fields.Name
	}

	public set Name(value: string) {
		this._fields.Name = value
	}

	public get In(): $.Slice<Parameter | $.VarRef<Parameter> | null> {
		return this._fields.In
	}

	public set In(value: $.Slice<Parameter | $.VarRef<Parameter> | null>) {
		this._fields.In = value
	}

	public get Out(): $.Slice<Parameter | $.VarRef<Parameter> | null> {
		return this._fields.Out
	}

	public set Out(value: $.Slice<Parameter | $.VarRef<Parameter> | null>) {
		this._fields.Out = value
	}

	public get Variadic(): Parameter | $.VarRef<Parameter> | null {
		return this._fields.Variadic
	}

	public set Variadic(value: Parameter | $.VarRef<Parameter> | null) {
		this._fields.Variadic = value
	}

	public _fields: {
		Name: string
		In: $.Slice<Parameter | $.VarRef<Parameter> | null>
		Out: $.Slice<Parameter | $.VarRef<Parameter> | null>
		Variadic: Parameter | $.VarRef<Parameter> | null
	}

	constructor(init?: Partial<{Name?: string, In?: $.Slice<Parameter | $.VarRef<Parameter> | null>, Out?: $.Slice<Parameter | $.VarRef<Parameter> | null>, Variadic?: Parameter | $.VarRef<Parameter> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Name: init?.Name ?? ("" as string),
			In: init?.In ?? (null! as $.Slice<Parameter | $.VarRef<Parameter> | null>),
			Out: init?.Out ?? (null! as $.Slice<Parameter | $.VarRef<Parameter> | null>),
			Variadic: init?.Variadic ?? (null! as Parameter | $.VarRef<Parameter> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Method {
		return new Method(this, true)
	}

	public __goscriptAssign(source: Method): void {
		const target = this._fields
		const values = source._fields
		target.Name = values.Name
		target.In = values.In
		target.Out = values.Out
		target.Variadic = values.Variadic
	}

	public async Print(w: io.Writer | null): globalThis.Promise<void> {
		const m: Method | $.VarRef<Method> | null = this;
		const m$: Method = m == null ? $.pointerTarget<Method>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<Method>(m)
		await fmt.Fprintf($.pointerValueOrNil(w)!, "  - method %s\n", (m$ as Method).Name)
		if ($.sliceLen((m$ as Method).In) > 0) {
			await fmt.Fprintf($.pointerValueOrNil(w)!, "    in:\n")
			for (let __goscriptRangeTarget6 = (m$ as Method).In, __goscriptRangeWindow6 = $.sliceRange(__goscriptRangeTarget6), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow6.length; __rangeIndex++) {
				let p = (__goscriptRangeWindow6.backing[__goscriptRangeWindow6.offset + __rangeIndex] as Parameter | $.VarRef<Parameter> | null)
				await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as Parameter).Print(w) : Parameter.prototype.Print.call(p, w))
			}
		}
		if ((m$ as Method).Variadic != null) {
			await fmt.Fprintf($.pointerValueOrNil(w)!, "    ...:\n")
			await Parameter.prototype.Print.call((m$ as Method).Variadic, w)
		}
		if ($.sliceLen((m$ as Method).Out) > 0) {
			await fmt.Fprintf($.pointerValueOrNil(w)!, "    out:\n")
			for (let __goscriptRangeTarget7 = (m$ as Method).Out, __goscriptRangeWindow7 = $.sliceRange(__goscriptRangeTarget7), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow7.length; __rangeIndex++) {
				let p = (__goscriptRangeWindow7.backing[__goscriptRangeWindow7.offset + __rangeIndex] as Parameter | $.VarRef<Parameter> | null)
				await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as Parameter).Print(w) : Parameter.prototype.Print.call(p, w))
			}
		}
	}

	public addImports(im: globalThis.Map<string, boolean> | null): void {
		const m: Method | $.VarRef<Method> | null = this;
		const m$: Method = m == null ? $.pointerTarget<Method>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<Method>(m)
		for (let __goscriptRangeTarget8 = (m$ as Method).In, __goscriptRangeWindow8 = $.sliceRange(__goscriptRangeTarget8), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow8.length; __rangeIndex++) {
			let p = (__goscriptRangeWindow8.backing[__goscriptRangeWindow8.offset + __rangeIndex] as Parameter | $.VarRef<Parameter> | null)
			$.pointerValue<Exclude<Type, null>>($.pointerValue<Parameter>(p).Type).addImports(im)
		}
		if ((m$ as Method).Variadic != null) {
			$.pointerValue<Exclude<Type, null>>($.pointerValue<Parameter>((m$ as Method).Variadic).Type).addImports(im)
		}
		for (let __goscriptRangeTarget9 = (m$ as Method).Out, __goscriptRangeWindow9 = $.sliceRange(__goscriptRangeTarget9), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow9.length; __rangeIndex++) {
			let p = (__goscriptRangeWindow9.backing[__goscriptRangeWindow9.offset + __rangeIndex] as Parameter | $.VarRef<Parameter> | null)
			$.pointerValue<Exclude<Type, null>>($.pointerValue<Parameter>(p).Type).addImports(im)
		}
	}

	static __typeInfo = $.registerStructType(
		"model.Method",
		() => new Method(),
		() => [$.methodSignature("Print", [["w", "io.Writer"]], [], true), $.methodSignature("addImports", [["im", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("bool"))]], [], true)],
		Method,
		() => [/* @__PURE__ */ $.structField("Name", /* @__PURE__ */ $.basicType("string"), [0], 0, true), /* @__PURE__ */ $.structField("In", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("model.Parameter")), [1], 16, true), /* @__PURE__ */ $.structField("Out", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("model.Parameter")), [2], 40, true), /* @__PURE__ */ $.structField("Variadic", /* @__PURE__ */ $.pointerType("model.Parameter"), [3], 64, true)]
	)
}

export class Parameter {
	public get Name(): string {
		return this._fields.Name
	}

	public set Name(value: string) {
		this._fields.Name = value
	}

	public get Type(): Type | null {
		return this._fields.Type
	}

	public set Type(value: Type | null) {
		this._fields.Type = value
	}

	public _fields: {
		Name: string
		Type: Type | null
	}

	constructor(init?: Partial<{Name?: string, Type?: Type | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Name: init?.Name ?? ("" as string),
			Type: init?.Type ?? (null! as Type | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Parameter {
		return new Parameter(this, true)
	}

	public __goscriptAssign(source: Parameter): void {
		const target = this._fields
		const values = source._fields
		target.Name = values.Name
		target.Type = $.assignFieldValue(target.Type, values.Type, "model.Type")
	}

	public async Print(w: io.Writer | null): globalThis.Promise<void> {
		const p: Parameter | $.VarRef<Parameter> | null = this;
		const p$: Parameter = p == null ? $.pointerTarget<Parameter>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<Parameter>(p)
		let n = (p$ as Parameter).Name
		if ($.stringEqual(n, "")) {
			n = "\"\""
		}
		await fmt.Fprintf($.pointerValueOrNil(w)!, "    - %v: %v\n", n, (__goscriptAwait = $.pointerValue<Exclude<Type, null>>((p$ as Parameter).Type).String(null, ""), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
	}

	static __typeInfo = $.registerStructType(
		"model.Parameter",
		() => new Parameter(),
		() => [$.methodSignature("Print", [["w", "io.Writer"]], [], true)],
		Parameter,
		() => [/* @__PURE__ */ $.structField("Name", /* @__PURE__ */ $.basicType("string"), [0], 0, true), /* @__PURE__ */ $.structField("Type", "model.Type", [1], 16, true)]
	)
}

export class ArrayType {
	public get Len(): number {
		return this._fields.Len
	}

	public set Len(value: number) {
		this._fields.Len = value
	}

	public get Type(): Type | null {
		return this._fields.Type
	}

	public set Type(value: Type | null) {
		this._fields.Type = value
	}

	public _fields: {
		Len: number
		Type: Type | null
	}

	constructor(init?: Partial<{Len?: number, Type?: Type | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Len: init?.Len ?? (0 as number),
			Type: init?.Type ?? (null! as Type | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ArrayType {
		return new ArrayType(this, true)
	}

	public __goscriptAssign(source: ArrayType): void {
		const target = this._fields
		const values = source._fields
		target.Len = values.Len
		target.Type = $.assignFieldValue(target.Type, values.Type, "model.Type")
	}

	public async String(pm: globalThis.Map<string, string> | null, pkgOverride: string): globalThis.Promise<string> {
		const at: ArrayType | $.VarRef<ArrayType> | null = this;
		const at$: ArrayType = at == null ? $.pointerTarget<ArrayType>(at) : (at as any).__isVarRef === true ? (at as any).value : (at as any).__goValue === undefined ? (at as any) : $.pointerTarget<ArrayType>(at)
		let s = "[]"
		if ((at$ as ArrayType).Len > -1) {
			s = await fmt.Sprintf("[%d]", $.basicInterfaceValue((at$ as ArrayType).Len, "int"))
		}
		return $.concatString(s, (__goscriptAwait = $.pointerValue<Exclude<Type, null>>((at$ as ArrayType).Type).String(pm, pkgOverride), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
	}

	public addImports(im: globalThis.Map<string, boolean> | null): void {
		const at: ArrayType | $.VarRef<ArrayType> | null = this;
		$.pointerValue<Exclude<Type, null>>($.pointerValue<ArrayType>(at).Type).addImports(im)
	}

	static __typeInfo = $.registerStructType(
		"model.ArrayType",
		() => new ArrayType(),
		() => [$.methodSignature("String", [["pm", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string"))], ["pkgOverride", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("addImports", [["im", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("bool"))]], [], true)],
		ArrayType,
		() => [/* @__PURE__ */ $.structField("Len", /* @__PURE__ */ $.basicType("int"), [0], 0, true), /* @__PURE__ */ $.structField("Type", "model.Type", [1], 8, true)]
	)
}

export class ChanType {
	public get Dir(): ChanDir {
		return this._fields.Dir
	}

	public set Dir(value: ChanDir) {
		this._fields.Dir = value
	}

	public get Type(): Type | null {
		return this._fields.Type
	}

	public set Type(value: Type | null) {
		this._fields.Type = value
	}

	public _fields: {
		Dir: ChanDir
		Type: Type | null
	}

	constructor(init?: Partial<{Dir?: ChanDir, Type?: Type | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Dir: init?.Dir ?? (0 as ChanDir),
			Type: init?.Type ?? (null! as Type | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ChanType {
		return new ChanType(this, true)
	}

	public __goscriptAssign(source: ChanType): void {
		const target = this._fields
		const values = source._fields
		target.Dir = values.Dir
		target.Type = $.assignFieldValue(target.Type, values.Type, "model.Type")
	}

	public async String(pm: globalThis.Map<string, string> | null, pkgOverride: string): globalThis.Promise<string> {
		const ct: ChanType | $.VarRef<ChanType> | null = this;
		const ct$: ChanType = ct == null ? $.pointerTarget<ChanType>(ct) : (ct as any).__isVarRef === true ? (ct as any).value : (ct as any).__goValue === undefined ? (ct as any) : $.pointerTarget<ChanType>(ct)
		let s = (__goscriptAwait = $.pointerValue<Exclude<Type, null>>((ct$ as ChanType).Type).String(pm, pkgOverride), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		if ((ct$ as ChanType).Dir == 1) {
			return $.concatString("<-chan ", s)
		}
		if ((ct$ as ChanType).Dir == 2) {
			return $.concatString("chan<- ", s)
		}
		return $.concatString("chan ", s)
	}

	public addImports(im: globalThis.Map<string, boolean> | null): void {
		const ct: ChanType | $.VarRef<ChanType> | null = this;
		$.pointerValue<Exclude<Type, null>>($.pointerValue<ChanType>(ct).Type).addImports(im)
	}

	static __typeInfo = $.registerStructType(
		"model.ChanType",
		() => new ChanType(),
		() => [$.methodSignature("String", [["pm", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string"))], ["pkgOverride", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("addImports", [["im", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("bool"))]], [], true)],
		ChanType,
		() => [/* @__PURE__ */ $.structField("Dir", /* @__PURE__ */ $.basicType("int", "model.ChanDir"), [0], 0, true), /* @__PURE__ */ $.structField("Type", "model.Type", [1], 8, true)]
	)
}

export class FuncType {
	public get In(): $.Slice<Parameter | $.VarRef<Parameter> | null> {
		return this._fields.In
	}

	public set In(value: $.Slice<Parameter | $.VarRef<Parameter> | null>) {
		this._fields.In = value
	}

	public get Out(): $.Slice<Parameter | $.VarRef<Parameter> | null> {
		return this._fields.Out
	}

	public set Out(value: $.Slice<Parameter | $.VarRef<Parameter> | null>) {
		this._fields.Out = value
	}

	public get Variadic(): Parameter | $.VarRef<Parameter> | null {
		return this._fields.Variadic
	}

	public set Variadic(value: Parameter | $.VarRef<Parameter> | null) {
		this._fields.Variadic = value
	}

	public _fields: {
		In: $.Slice<Parameter | $.VarRef<Parameter> | null>
		Out: $.Slice<Parameter | $.VarRef<Parameter> | null>
		Variadic: Parameter | $.VarRef<Parameter> | null
	}

	constructor(init?: Partial<{In?: $.Slice<Parameter | $.VarRef<Parameter> | null>, Out?: $.Slice<Parameter | $.VarRef<Parameter> | null>, Variadic?: Parameter | $.VarRef<Parameter> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			In: init?.In ?? (null! as $.Slice<Parameter | $.VarRef<Parameter> | null>),
			Out: init?.Out ?? (null! as $.Slice<Parameter | $.VarRef<Parameter> | null>),
			Variadic: init?.Variadic ?? (null! as Parameter | $.VarRef<Parameter> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): FuncType {
		return new FuncType(this, true)
	}

	public __goscriptAssign(source: FuncType): void {
		const target = this._fields
		const values = source._fields
		target.In = values.In
		target.Out = values.Out
		target.Variadic = values.Variadic
	}

	public async String(pm: globalThis.Map<string, string> | null, pkgOverride: string): globalThis.Promise<string> {
		const ft: FuncType | $.VarRef<FuncType> | null = this;
		const ft$: FuncType = ft == null ? $.pointerTarget<FuncType>(ft) : (ft as any).__isVarRef === true ? (ft as any).value : (ft as any).__goValue === undefined ? (ft as any) : $.pointerTarget<FuncType>(ft)
		let args: $.Slice<string> = $.makeSlice<string>($.sliceLen((ft$ as FuncType).In), undefined, "string")
		for (let __goscriptRangeTarget10 = (ft$ as FuncType).In, __goscriptRangeWindow10 = $.sliceRange(__goscriptRangeTarget10), __goscriptSliceWindow0 = $.sliceRange(args), i = 0; i < __goscriptRangeWindow10.length; i++) {
			let p = (__goscriptRangeWindow10.backing[__goscriptRangeWindow10.offset + i] as Parameter | $.VarRef<Parameter> | null);
			;(__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)] = (__goscriptAwait = $.pointerValue<Exclude<Type, null>>($.pointerValue<Parameter>(p).Type).String(pm, pkgOverride), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		if ((ft$ as FuncType).Variadic != null) {
			args = $.appendOne(args, $.concatString("...", (__goscriptAwait = $.pointerValue<Exclude<Type, null>>($.pointerValue<Parameter>((ft$ as FuncType).Variadic).Type).String(pm, pkgOverride), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)))
		}
		let rets: $.Slice<string> = $.makeSlice<string>($.sliceLen((ft$ as FuncType).Out), undefined, "string")
		for (let __goscriptRangeTarget11 = (ft$ as FuncType).Out, __goscriptRangeWindow11 = $.sliceRange(__goscriptRangeTarget11), __goscriptSliceWindow1 = $.sliceRange(rets), i = 0; i < __goscriptRangeWindow11.length; i++) {
			let p = (__goscriptRangeWindow11.backing[__goscriptRangeWindow11.offset + i] as Parameter | $.VarRef<Parameter> | null);
			;(__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, i)] = (__goscriptAwait = $.pointerValue<Exclude<Type, null>>($.pointerValue<Parameter>(p).Type).String(pm, pkgOverride), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		let retString = strings.Join(rets, ", ")
		{
			let nOut = $.sliceLen((ft$ as FuncType).Out)
			if (nOut == 1) {
				retString = $.concatString(" ", retString)
			} else {
				if (nOut > 1) {
					retString = $.concatString(($.concatString(" (", retString)), ")")
				}
			}
		}
		return $.concatString(($.concatString(($.concatString("func(", strings.Join(args, ", "))), ")")), retString)
	}

	public addImports(im: globalThis.Map<string, boolean> | null): void {
		const ft: FuncType | $.VarRef<FuncType> | null = this;
		const ft$: FuncType = ft == null ? $.pointerTarget<FuncType>(ft) : (ft as any).__isVarRef === true ? (ft as any).value : (ft as any).__goValue === undefined ? (ft as any) : $.pointerTarget<FuncType>(ft)
		for (let __goscriptRangeTarget12 = (ft$ as FuncType).In, __goscriptRangeWindow12 = $.sliceRange(__goscriptRangeTarget12), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow12.length; __rangeIndex++) {
			let p = (__goscriptRangeWindow12.backing[__goscriptRangeWindow12.offset + __rangeIndex] as Parameter | $.VarRef<Parameter> | null)
			$.pointerValue<Exclude<Type, null>>($.pointerValue<Parameter>(p).Type).addImports(im)
		}
		if ((ft$ as FuncType).Variadic != null) {
			$.pointerValue<Exclude<Type, null>>($.pointerValue<Parameter>((ft$ as FuncType).Variadic).Type).addImports(im)
		}
		for (let __goscriptRangeTarget13 = (ft$ as FuncType).Out, __goscriptRangeWindow13 = $.sliceRange(__goscriptRangeTarget13), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow13.length; __rangeIndex++) {
			let p = (__goscriptRangeWindow13.backing[__goscriptRangeWindow13.offset + __rangeIndex] as Parameter | $.VarRef<Parameter> | null)
			$.pointerValue<Exclude<Type, null>>($.pointerValue<Parameter>(p).Type).addImports(im)
		}
	}

	static __typeInfo = $.registerStructType(
		"model.FuncType",
		() => new FuncType(),
		() => [$.methodSignature("String", [["pm", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string"))], ["pkgOverride", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("addImports", [["im", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("bool"))]], [], true)],
		FuncType,
		() => [/* @__PURE__ */ $.structField("In", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("model.Parameter")), [0], 0, true), /* @__PURE__ */ $.structField("Out", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("model.Parameter")), [1], 24, true), /* @__PURE__ */ $.structField("Variadic", /* @__PURE__ */ $.pointerType("model.Parameter"), [2], 48, true)]
	)
}

export class MapType {
	public get Key(): Type | null {
		return this._fields.Key
	}

	public set Key(value: Type | null) {
		this._fields.Key = value
	}

	public get Value(): Type | null {
		return this._fields.Value
	}

	public set Value(value: Type | null) {
		this._fields.Value = value
	}

	public _fields: {
		Key: Type | null
		Value: Type | null
	}

	constructor(init?: Partial<{Key?: Type | null, Value?: Type | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Key: init?.Key ?? (null! as Type | null),
			Value: init?.Value ?? (null! as Type | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): MapType {
		return new MapType(this, true)
	}

	public __goscriptAssign(source: MapType): void {
		const target = this._fields
		const values = source._fields
		target.Key = $.assignFieldValue(target.Key, values.Key, "model.Type")
		target.Value = $.assignFieldValue(target.Value, values.Value, "model.Type")
	}

	public async String(pm: globalThis.Map<string, string> | null, pkgOverride: string): globalThis.Promise<string> {
		const mt: MapType | $.VarRef<MapType> | null = this;
		const mt$: MapType = mt == null ? $.pointerTarget<MapType>(mt) : (mt as any).__isVarRef === true ? (mt as any).value : (mt as any).__goValue === undefined ? (mt as any) : $.pointerTarget<MapType>(mt)
		return $.concatString(($.concatString(($.concatString("map[", (__goscriptAwait = $.pointerValue<Exclude<Type, null>>((mt$ as MapType).Key).String(pm, pkgOverride), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))), "]")), (__goscriptAwait = $.pointerValue<Exclude<Type, null>>((mt$ as MapType).Value).String(pm, pkgOverride), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
	}

	public addImports(im: globalThis.Map<string, boolean> | null): void {
		const mt: MapType | $.VarRef<MapType> | null = this;
		const mt$: MapType = mt == null ? $.pointerTarget<MapType>(mt) : (mt as any).__isVarRef === true ? (mt as any).value : (mt as any).__goValue === undefined ? (mt as any) : $.pointerTarget<MapType>(mt)
		$.pointerValue<Exclude<Type, null>>((mt$ as MapType).Key).addImports(im)
		$.pointerValue<Exclude<Type, null>>((mt$ as MapType).Value).addImports(im)
	}

	static __typeInfo = $.registerStructType(
		"model.MapType",
		() => new MapType(),
		() => [$.methodSignature("String", [["pm", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string"))], ["pkgOverride", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("addImports", [["im", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("bool"))]], [], true)],
		MapType,
		() => [/* @__PURE__ */ $.structField("Key", "model.Type", [0], 0, true), /* @__PURE__ */ $.structField("Value", "model.Type", [1], 16, true)]
	)
}

export class NamedType {
	public get Package(): string {
		return this._fields.Package
	}

	public set Package(value: string) {
		this._fields.Package = value
	}

	public get Type(): string {
		return this._fields.Type
	}

	public set Type(value: string) {
		this._fields.Type = value
	}

	public get TypeParams(): TypeParametersType | $.VarRef<TypeParametersType> | null {
		return this._fields.TypeParams
	}

	public set TypeParams(value: TypeParametersType | $.VarRef<TypeParametersType> | null) {
		this._fields.TypeParams = value
	}

	public _fields: {
		Package: string
		Type: string
		TypeParams: TypeParametersType | $.VarRef<TypeParametersType> | null
	}

	constructor(init?: Partial<{Package?: string, Type?: string, TypeParams?: TypeParametersType | $.VarRef<TypeParametersType> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Package: init?.Package ?? ("" as string),
			Type: init?.Type ?? ("" as string),
			TypeParams: init?.TypeParams ?? (null! as TypeParametersType | $.VarRef<TypeParametersType> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): NamedType {
		return new NamedType(this, true)
	}

	public __goscriptAssign(source: NamedType): void {
		const target = this._fields
		const values = source._fields
		target.Package = values.Package
		target.Type = values.Type
		target.TypeParams = values.TypeParams
	}

	public async String(pm: globalThis.Map<string, string> | null, pkgOverride: string): globalThis.Promise<string> {
		const nt: NamedType | $.VarRef<NamedType> | null = this;
		const nt$: NamedType = nt == null ? $.pointerTarget<NamedType>(nt) : (nt as any).__isVarRef === true ? (nt as any).value : (nt as any).__goValue === undefined ? (nt as any) : $.pointerTarget<NamedType>(nt)
		if ($.stringEqual(pkgOverride, (nt$ as NamedType).Package)) {
			return $.concatString((nt$ as NamedType).Type, await TypeParametersType.prototype.String.call((nt$ as NamedType).TypeParams, pm, pkgOverride))
		}
		let prefix = $.mapGet<string, string, string>(pm, (nt$ as NamedType).Package, "")[0]
		if (!$.stringEqual(prefix, "")) {
			return $.concatString(($.concatString(($.concatString(prefix, ".")), (nt$ as NamedType).Type)), await TypeParametersType.prototype.String.call((nt$ as NamedType).TypeParams, pm, pkgOverride))
		}

		return $.concatString((nt$ as NamedType).Type, await TypeParametersType.prototype.String.call((nt$ as NamedType).TypeParams, pm, pkgOverride))
	}

	public addImports(im: globalThis.Map<string, boolean> | null): void {
		let nt: NamedType | $.VarRef<NamedType> | null = this;
		const nt$: NamedType = nt == null ? $.pointerTarget<NamedType>(nt) : (nt as any).__isVarRef === true ? (nt as any).value : (nt as any).__goValue === undefined ? (nt as any) : $.pointerTarget<NamedType>(nt)
		if (!$.stringEqual((nt$ as NamedType).Package, "")) {
			$.mapSet(im, (nt$ as NamedType).Package, true)
		}
		TypeParametersType.prototype.addImports.call((nt$ as NamedType).TypeParams, im)
	}

	static __typeInfo = $.registerStructType(
		"model.NamedType",
		() => new NamedType(),
		() => [$.methodSignature("String", [["pm", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string"))], ["pkgOverride", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("addImports", [["im", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("bool"))]], [], true)],
		NamedType,
		() => [/* @__PURE__ */ $.structField("Package", /* @__PURE__ */ $.basicType("string"), [0], 0, true), /* @__PURE__ */ $.structField("Type", /* @__PURE__ */ $.basicType("string"), [1], 16, true), /* @__PURE__ */ $.structField("TypeParams", /* @__PURE__ */ $.pointerType("model.TypeParametersType"), [2], 32, true)]
	)
}

export class PointerType {
	public get Type(): Type | null {
		return this._fields.Type
	}

	public set Type(value: Type | null) {
		this._fields.Type = value
	}

	public _fields: {
		Type: Type | null
	}

	constructor(init?: Partial<{Type?: Type | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Type: init?.Type ?? (null! as Type | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): PointerType {
		return new PointerType(this, true)
	}

	public __goscriptAssign(source: PointerType): void {
		const target = this._fields
		const values = source._fields
		target.Type = $.assignFieldValue(target.Type, values.Type, "model.Type")
	}

	public async String(pm: globalThis.Map<string, string> | null, pkgOverride: string): globalThis.Promise<string> {
		const pt: PointerType | $.VarRef<PointerType> | null = this;
		return $.concatString("*", (__goscriptAwait = $.pointerValue<Exclude<Type, null>>($.pointerValue<PointerType>(pt).Type).String(pm, pkgOverride), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
	}

	public addImports(im: globalThis.Map<string, boolean> | null): void {
		const pt: PointerType | $.VarRef<PointerType> | null = this;
		$.pointerValue<Exclude<Type, null>>($.pointerValue<PointerType>(pt).Type).addImports(im)
	}

	static __typeInfo = $.registerStructType(
		"model.PointerType",
		() => new PointerType(),
		() => [$.methodSignature("String", [["pm", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string"))], ["pkgOverride", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("addImports", [["im", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("bool"))]], [], true)],
		PointerType,
		() => [/* @__PURE__ */ $.structField("Type", "model.Type", [0], 0, true)]
	)
}

export class TypeParametersType {
	public get TypeParameters(): $.Slice<Type | null> {
		return this._fields.TypeParameters
	}

	public set TypeParameters(value: $.Slice<Type | null>) {
		this._fields.TypeParameters = value
	}

	public _fields: {
		TypeParameters: $.Slice<Type | null>
	}

	constructor(init?: Partial<{TypeParameters?: $.Slice<Type | null>}>, __goscriptValue?: boolean) {
		this._fields = {
			TypeParameters: init?.TypeParameters ?? (null! as $.Slice<Type | null>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): TypeParametersType {
		return new TypeParametersType(this, true)
	}

	public __goscriptAssign(source: TypeParametersType): void {
		const target = this._fields
		const values = source._fields
		target.TypeParameters = values.TypeParameters
	}

	public async String(pm: globalThis.Map<string, string> | null, pkgOverride: string): globalThis.Promise<string> {
		const tp: TypeParametersType | $.VarRef<TypeParametersType> | null = this;
		const tp$: TypeParametersType = tp == null ? $.pointerTarget<TypeParametersType>(tp) : (tp as any).__isVarRef === true ? (tp as any).value : (tp as any).__goValue === undefined ? (tp as any) : $.pointerTarget<TypeParametersType>(tp)
		if ((tp == null) || ($.sliceLen((tp$ as TypeParametersType).TypeParameters) == 0)) {
			return ""
		}
		let sb: $.VarRef<strings.Builder> = $.varRef($.markAsStructValue(new strings.Builder()))
		sb.value.WriteString("[")
		for (let __goscriptRangeTarget14 = (tp$ as TypeParametersType).TypeParameters, __goscriptRangeWindow14 = $.sliceRange(__goscriptRangeTarget14), i = 0; i < __goscriptRangeWindow14.length; i++) {
			let v = (__goscriptRangeWindow14.backing[__goscriptRangeWindow14.offset + i] as Type | null)
			if (i != 0) {
				sb.value.WriteString(", ")
			}
			sb.value.WriteString((__goscriptAwait = (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? (v as Exclude<Type, null>) : $.pointerValue<Exclude<Type, null>>(v)).String(pm, pkgOverride), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
		}
		sb.value.WriteString("]")
		return sb.value.String()
	}

	public addImports(im: globalThis.Map<string, boolean> | null): void {
		const tp: TypeParametersType | $.VarRef<TypeParametersType> | null = this;
		if (tp == null) {
			return
		}
		for (let __goscriptRangeTarget15 = $.pointerValue<TypeParametersType>(tp).TypeParameters, __goscriptRangeWindow15 = $.sliceRange(__goscriptRangeTarget15), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow15.length; __rangeIndex++) {
			let v = (__goscriptRangeWindow15.backing[__goscriptRangeWindow15.offset + __rangeIndex] as Type | null)
			void (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? (v as Exclude<Type, null>) : $.pointerValue<Exclude<Type, null>>(v)).addImports(im)
		}
	}

	static __typeInfo = $.registerStructType(
		"model.TypeParametersType",
		() => new TypeParametersType(),
		() => [$.methodSignature("String", [["pm", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string"))], ["pkgOverride", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("addImports", [["im", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("bool"))]], [], true)],
		TypeParametersType,
		() => [/* @__PURE__ */ $.structField("TypeParameters", /* @__PURE__ */ $.sliceType("model.Type"), [0], 0, true)]
	)
}

export const pkgPath: string = "github.com/golang/mock/mockgen/model"

export const RecvDir: ChanDir = 1

export const SendDir: ChanDir = 2

async function __goscriptInit0(): globalThis.Promise<void> {
	await gob.Register($.interfaceValue(new ArrayType(), "*model.ArrayType", /* @__PURE__ */ $.pointerType("model.ArrayType")))
	await gob.Register($.interfaceValue(new ChanType(), "*model.ChanType", /* @__PURE__ */ $.pointerType("model.ChanType")))
	await gob.Register($.interfaceValue(new FuncType(), "*model.FuncType", /* @__PURE__ */ $.pointerType("model.FuncType")))
	await gob.Register($.interfaceValue(new MapType(), "*model.MapType", /* @__PURE__ */ $.pointerType("model.MapType")))
	await gob.Register($.interfaceValue(new NamedType(), "*model.NamedType", /* @__PURE__ */ $.pointerType("model.NamedType")))
	await gob.Register($.interfaceValue(new PointerType(), "*model.PointerType", /* @__PURE__ */ $.pointerType("model.PointerType")))

	// Call gob.RegisterName to make sure it has the consistent name registered
	// for both gob decoder and encoder.
	//
	// For a non-pointer type, gob.Register will try to get package full path by
	// calling rt.PkgPath() for a name to register. If your project has vendor
	// directory, it is possible that PkgPath will get a path like this:
	//     ../../../vendor/github.com/golang/mock/mockgen/model
	await gob.RegisterName($.concatString("github.com/golang/mock/mockgen/model", ".PredeclaredType"), $.namedValueInterfaceValue<any>("", "model.PredeclaredType", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()))
}

export function PredeclaredType_String(pt: PredeclaredType, _p0: globalThis.Map<string, string> | null, _p1: string): string {
	return pt
}

export function PredeclaredType_addImports(pt: PredeclaredType, _p0: globalThis.Map<string, boolean> | null): void {
}

export async function InterfaceFromInterfaceType(it: reflect.Type | null): globalThis.Promise<[Interface | $.VarRef<Interface> | null, $.GoError]> {
	if ((__goscriptAwait = (it !== null && (it as any).__isVarRef !== true && (it as any).__goValue === undefined ? (it as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(it)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 20) {
		return [null, fmt.Errorf("%v is not an interface", (it as any))]
	}
	let intf: Interface | $.VarRef<Interface> | null = new Interface()

	for (let i = 0; i < (__goscriptAwait = (it !== null && (it as any).__isVarRef !== true && (it as any).__goValue === undefined ? (it as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(it)).NumMethod(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); i++) {
		let mt = $.markAsStructValue($.cloneStructValue(((__goscriptAwait = (it !== null && (it as any).__isVarRef !== true && (it as any).__goValue === undefined ? (it as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(it)).Method(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as reflect.Method)))
		// TODO: need to skip unexported methods? or just raise an error?
		let m: Method | $.VarRef<Method> | null = new Method({Name: mt.Name})
		let m$: Method = m == null ? $.pointerTarget<Method>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<Method>(m)

		let err: $.GoError = null! as $.GoError
		let __goscriptTuple0: any = await funcArgsFromType(mt.Type);
		;(m$ as Method).In = __goscriptTuple0[0];
		;(m$ as Method).Variadic = __goscriptTuple0[1];
		;(m$ as Method).Out = __goscriptTuple0[2]
		err = __goscriptTuple0[3]
		if (err != null) {
			return [null, err]
		}

		void (intf !== null && (intf as any).__isVarRef !== true && (intf as any).__goValue === undefined ? ((intf as any) as Interface).AddMethod(m) : Interface.prototype.AddMethod.call(intf, m))
	}

	return [intf, null]
}

export async function funcArgsFromType(t: reflect.Type | null): globalThis.Promise<[$.Slice<Parameter | $.VarRef<Parameter> | null>, Parameter | $.VarRef<Parameter> | null, $.Slice<Parameter | $.VarRef<Parameter> | null>, $.GoError]> {
	let _in: $.Slice<Parameter | $.VarRef<Parameter> | null> = null! as $.Slice<Parameter | $.VarRef<Parameter> | null>
	let variadic: Parameter | $.VarRef<Parameter> | null = null! as Parameter | $.VarRef<Parameter> | null
	let out: $.Slice<Parameter | $.VarRef<Parameter> | null> = null! as $.Slice<Parameter | $.VarRef<Parameter> | null>
	let err: $.GoError = null! as $.GoError
	let nin = (__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).NumIn(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	if ((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).IsVariadic(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
		nin--
	}
	let p: Parameter | $.VarRef<Parameter> | null = null! as Parameter | $.VarRef<Parameter> | null
	for (let i = 0; i < nin; i++) {
		let __goscriptTuple1: any = await parameterFromType((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).In(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
		p = __goscriptTuple1[0]
		err = __goscriptTuple1[1]
		if (err != null) {
			return [_in, variadic, out, err]
		}
		_in = $.appendOne(_in, p, $.appendZeros.nil)
	}
	if ((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).IsVariadic(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
		let __goscriptTuple2: any = await parameterFromType((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).In(nin), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
		p = __goscriptTuple2[0]
		err = __goscriptTuple2[1]
		if (err != null) {
			return [_in, variadic, out, err]
		}
		variadic = p
	}
	for (let i = 0; i < (__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).NumOut(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); i++) {
		let __goscriptTuple3: any = await parameterFromType((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Out(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
		p = __goscriptTuple3[0]
		err = __goscriptTuple3[1]
		if (err != null) {
			return [_in, variadic, out, err]
		}
		out = $.appendOne(out, p, $.appendZeros.nil)
	}
	return [_in, variadic, out, err]
}

export async function parameterFromType(t: reflect.Type | null): globalThis.Promise<[Parameter | $.VarRef<Parameter> | null, $.GoError]> {
	let [tt, err] = await typeFromType(t)
	if (err != null) {
		return [null, err]
	}
	return [new Parameter({Type: tt}), null]
}

export let errorType: reflect.Type | null = $.pointerValue<Exclude<reflect.Type, null>>(reflect.TypeOf($.interfaceValue(null, "*error", /* @__PURE__ */ $.pointerType("error")))).Elem()

export function __goscript_set_errorType(__goscriptValue: reflect.Type | null): void {
	errorType = __goscriptValue
}

export let byteType: reflect.Type | null = reflect.TypeOf($.basicInterfaceValue($.uint(0, 8), "byte", "uint8"))

export function __goscript_set_byteType(__goscriptValue: reflect.Type | null): void {
	byteType = __goscriptValue
}

export async function typeFromType(t: reflect.Type | null): globalThis.Promise<[Type | null, $.GoError]> {
	// Hack workaround for https://golang.org/issue/3853.
	// This explicit check should not be necessary.
	if ($.comparableEqual(t, byteType)) {
		return [$.namedValueInterfaceValue<Type | null>("byte", "model.PredeclaredType", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), null]
	}

	{
		let imp = (__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).PkgPath(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		if (!$.stringEqual(imp, "")) {
			return [$.interfaceValue<Type | null>((await (async () => { const __goscriptLiteralField0 = impPath(imp); const __goscriptLiteralField1 = (__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Name(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); return new NamedType({Package: __goscriptLiteralField0, Type: __goscriptLiteralField1}) })()), "*model.NamedType", /* @__PURE__ */ $.pointerType("model.NamedType")), null]
		}
	}

	// only unnamed or predeclared types after here

	// Lots of types have element types. Let's do the parsing and error checking for all of them.
	let elemType: Type | null = null! as Type | null
	switch ((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
		case reflect.Array:
		case reflect.Chan:
		case reflect.Map:
		case reflect.Ptr:
		case reflect.Slice:
		{
			let err: $.GoError = null! as $.GoError
			let __goscriptTuple4: any = await typeFromType((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
			elemType = __goscriptTuple4[0]
			err = __goscriptTuple4[1]
			if (err != null) {
				return [null, err]
			}
			break
		}
	}

	switch ((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
		case reflect.Array:
		{
			return [$.interfaceValue<Type | null>((await (async () => { const __goscriptLiteralField2 = (__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); return new ArrayType({Len: __goscriptLiteralField2, Type: elemType}) })()), "*model.ArrayType", /* @__PURE__ */ $.pointerType("model.ArrayType")), null]
			break
		}
		case reflect.Bool:
		case reflect.Int:
		case reflect.Int8:
		case reflect.Int16:
		case reflect.Int32:
		case reflect.Int64:
		case reflect.Uint:
		case reflect.Uint8:
		case reflect.Uint16:
		case reflect.Uint32:
		case reflect.Uint64:
		case reflect.Uintptr:
		case reflect.Float32:
		case reflect.Float64:
		case reflect.Complex64:
		case reflect.Complex128:
		case reflect.String:
		{
			return [$.namedValueInterfaceValue<Type | null>(reflect.Kind_String((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)), "model.PredeclaredType", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), null]
			break
		}
		case reflect.Chan:
		{
			let dir: ChanDir = 0
			switch ((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).ChanDir(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
				case reflect.RecvDir:
				{
					dir = 1
					break
				}
				case reflect.SendDir:
				{
					dir = 2
					break
				}
			}
			return [$.interfaceValue<Type | null>(new ChanType({Dir: dir, Type: elemType}), "*model.ChanType", /* @__PURE__ */ $.pointerType("model.ChanType")), null]
			break
		}
		case reflect.Func:
		{
			let __goscriptTuple5: any = await funcArgsFromType(t)
			let _in: $.Slice<Parameter | $.VarRef<Parameter> | null> = __goscriptTuple5[0]
			let variadic: Parameter | $.VarRef<Parameter> | null = __goscriptTuple5[1]
			let out: $.Slice<Parameter | $.VarRef<Parameter> | null> = __goscriptTuple5[2]
			let err = __goscriptTuple5[3]
			if (err != null) {
				return [null, err]
			}
			return [$.interfaceValue<Type | null>(new FuncType({In: _in, Out: out, Variadic: variadic}), "*model.FuncType", /* @__PURE__ */ $.pointerType("model.FuncType")), null]
			break
		}
		case reflect.Interface:
		{
			if ((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).NumMethod(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 0) {
				return [$.namedValueInterfaceValue<Type | null>("interface{}", "model.PredeclaredType", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), null]
			}
			if ($.comparableEqual(t, errorType)) {
				return [$.namedValueInterfaceValue<Type | null>("error", "model.PredeclaredType", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), null]
			}
			break
		}
		case reflect.Map:
		{
			let [kt, err] = await typeFromType((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Key(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
			if (err != null) {
				return [null, err]
			}
			return [$.interfaceValue<Type | null>(new MapType({Key: kt, Value: elemType}), "*model.MapType", /* @__PURE__ */ $.pointerType("model.MapType")), null]
			break
		}
		case reflect.Ptr:
		{
			return [$.interfaceValue<Type | null>(new PointerType({Type: elemType}), "*model.PointerType", /* @__PURE__ */ $.pointerType("model.PointerType")), null]
			break
		}
		case reflect.Slice:
		{
			return [$.interfaceValue<Type | null>(new ArrayType({Len: -1, Type: elemType}), "*model.ArrayType", /* @__PURE__ */ $.pointerType("model.ArrayType")), null]
			break
		}
		case reflect.Struct:
		{
			if ((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).NumField(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 0) {
				return [$.namedValueInterfaceValue<Type | null>("struct{}", "model.PredeclaredType", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), null]
			}
			break
		}
	}

	// TODO: Struct, UnsafePointer
	return [null, fmt.Errorf("can't yet turn %v (%v) into a model.Type", (t as any), $.namedValueInterfaceValue<any>((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), "reflect.Kind", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic5()))]
}

export function impPath(imp: string): string {
	if (strings.HasPrefix(imp, "vendor/")) {
		imp = $.concatString("/", imp)
	}
	{
		let i: number = strings.LastIndex(imp, "/vendor/")
		if (i != -1) {
			imp = $.sliceStringOrBytes(imp, i + 8, undefined)
		}
	}
	return imp
}

export let ErrorInterface: Interface = new Interface({Name: "error", Methods: $.arrayToSlice<Method | $.VarRef<Method> | null>([new Method({Name: "Error", Out: $.arrayToSlice<Parameter | $.VarRef<Parameter> | null>([new Parameter({Name: "", Type: $.namedValueInterfaceValue<Type | null>("string", "model.PredeclaredType", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())})])})])}, true)

export function __goscript_set_ErrorInterface(__goscriptValue: Interface): void {
	$.assignStruct(ErrorInterface, __goscriptValue)
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({String: (receiver: any, ...args: any[]) => (PredeclaredType_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), addImports: (receiver: any, ...args: any[]) => (PredeclaredType_addImports as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.basicType("string", "model.PredeclaredType"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("String", [/* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string")), /* @__PURE__ */ $.basicType("string")], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("addImports", [/* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("bool"))])])
}

var __goscriptStatic3$value: any
function __goscriptStatic3(): any {
	return __goscriptStatic3$value ??= ({String: (receiver: any, ...args: any[]) => (reflect.Kind_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic4$value: any
function __goscriptStatic4(): any {
	return __goscriptStatic4$value ??= (/* @__PURE__ */ $.basicType("uint", "reflect.Kind"))
}

var __goscriptStatic5$value: any
function __goscriptStatic5(): any {
	return __goscriptStatic5$value ??= ([$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])])
}

var __goscriptAwait: any

await __goscriptInit0()
