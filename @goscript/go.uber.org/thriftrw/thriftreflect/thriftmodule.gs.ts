// Generated file based on thriftmodule.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

$.registerTypePackagePath("go.uber.org/thriftrw/thriftreflect", ["thriftreflect.ThriftModule"])

export class ThriftModule {
	public get Name(): string {
		return this._fields.Name
	}

	public set Name(value: string) {
		this._fields.Name = value
	}

	public get Package(): string {
		return this._fields.Package
	}

	public set Package(value: string) {
		this._fields.Package = value
	}

	public get FilePath(): string {
		return this._fields.FilePath
	}

	public set FilePath(value: string) {
		this._fields.FilePath = value
	}

	public get Includes(): $.Slice<ThriftModule | $.VarRef<ThriftModule> | null> {
		return this._fields.Includes
	}

	public set Includes(value: $.Slice<ThriftModule | $.VarRef<ThriftModule> | null>) {
		this._fields.Includes = value
	}

	public get SHA1(): string {
		return this._fields.SHA1
	}

	public set SHA1(value: string) {
		this._fields.SHA1 = value
	}

	public get Raw(): string {
		return this._fields.Raw
	}

	public set Raw(value: string) {
		this._fields.Raw = value
	}

	public _fields: {
		Name: string
		Package: string
		FilePath: string
		Includes: $.Slice<ThriftModule | $.VarRef<ThriftModule> | null>
		SHA1: string
		Raw: string
	}

	constructor(init?: Partial<{Name?: string, Package?: string, FilePath?: string, Includes?: $.Slice<ThriftModule | $.VarRef<ThriftModule> | null>, SHA1?: string, Raw?: string}>, __goscriptValue?: boolean) {
		this._fields = {
			Name: init?.Name ?? ("" as string),
			Package: init?.Package ?? ("" as string),
			FilePath: init?.FilePath ?? ("" as string),
			Includes: init?.Includes ?? (null! as $.Slice<ThriftModule | $.VarRef<ThriftModule> | null>),
			SHA1: init?.SHA1 ?? ("" as string),
			Raw: init?.Raw ?? ("" as string)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ThriftModule {
		return new ThriftModule(this, true)
	}

	public __goscriptAssign(source: ThriftModule): void {
		const target = this._fields
		const values = source._fields
		target.Name = values.Name
		target.Package = values.Package
		target.FilePath = values.FilePath
		target.Includes = values.Includes
		target.SHA1 = values.SHA1
		target.Raw = values.Raw
	}

	static __typeInfo = $.registerStructType(
		"thriftreflect.ThriftModule",
		() => new ThriftModule(),
		() => [],
		ThriftModule,
		() => [/* @__PURE__ */ $.structField("Name", /* @__PURE__ */ $.basicType("string"), [0], 0, true), /* @__PURE__ */ $.structField("Package", /* @__PURE__ */ $.basicType("string"), [1], 16, true), /* @__PURE__ */ $.structField("FilePath", /* @__PURE__ */ $.basicType("string"), [2], 32, true), /* @__PURE__ */ $.structField("Includes", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("thriftreflect.ThriftModule")), [3], 48, true), /* @__PURE__ */ $.structField("SHA1", /* @__PURE__ */ $.basicType("string"), [4], 72, true), /* @__PURE__ */ $.structField("Raw", /* @__PURE__ */ $.basicType("string"), [5], 88, true)]
	)
}
