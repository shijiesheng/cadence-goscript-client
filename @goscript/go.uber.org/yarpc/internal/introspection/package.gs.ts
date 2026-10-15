// Generated file based on package.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

$.registerTypePackagePath("go.uber.org/yarpc/internal/introspection", ["introspection.PackageVersion"])

export class PackageVersion {
	public get Name(): string {
		return this._fields.Name
	}

	public set Name(value: string) {
		this._fields.Name = value
	}

	public get Version(): string {
		return this._fields.Version
	}

	public set Version(value: string) {
		this._fields.Version = value
	}

	public _fields: {
		Name: string
		Version: string
	}

	constructor(init?: Partial<{Name?: string, Version?: string}>, __goscriptValue?: boolean) {
		this._fields = {
			Name: init?.Name ?? ("" as string),
			Version: init?.Version ?? ("" as string)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): PackageVersion {
		return new PackageVersion(this, true)
	}

	public __goscriptAssign(source: PackageVersion): void {
		const target = this._fields
		const values = source._fields
		target.Name = values.Name
		target.Version = values.Version
	}

	static __typeInfo = $.registerStructType(
		"introspection.PackageVersion",
		() => new PackageVersion(),
		() => [],
		PackageVersion,
		() => [/* @__PURE__ */ $.structField("Name", /* @__PURE__ */ $.basicType("string"), [0], 0, true, { tag: "json:\"name\"" }), /* @__PURE__ */ $.structField("Version", /* @__PURE__ */ $.basicType("string"), [1], 16, true, { tag: "json:\"version\"" })]
	)
}
