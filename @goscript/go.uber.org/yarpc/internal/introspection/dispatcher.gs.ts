// Generated file based on dispatcher.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as xintrospection from "@goscript/go.uber.org/yarpc/api/x/introspection/index.js"

import * as __goscript__package from "./package.gs.ts"

import * as __goscript_router from "./router.gs.ts"
import "@goscript/go.uber.org/yarpc/api/x/introspection/index.js"
import "./package.gs.ts"
import "./router.gs.ts"

$.registerTypePackagePath("go.uber.org/yarpc/internal/introspection", ["introspection.DispatcherStatus"])

export class DispatcherStatus {
	public get Name(): string {
		return this._fields.Name
	}

	public set Name(value: string) {
		this._fields.Name = value
	}

	public get ID(): string {
		return this._fields.ID
	}

	public set ID(value: string) {
		this._fields.ID = value
	}

	public get Procedures(): $.Slice<__goscript_router.Procedure> {
		return this._fields.Procedures
	}

	public set Procedures(value: $.Slice<__goscript_router.Procedure>) {
		this._fields.Procedures = value
	}

	public get Inbounds(): $.Slice<xintrospection.InboundStatus> {
		return this._fields.Inbounds
	}

	public set Inbounds(value: $.Slice<xintrospection.InboundStatus>) {
		this._fields.Inbounds = value
	}

	public get Outbounds(): $.Slice<xintrospection.OutboundStatus> {
		return this._fields.Outbounds
	}

	public set Outbounds(value: $.Slice<xintrospection.OutboundStatus>) {
		this._fields.Outbounds = value
	}

	public get PackageVersions(): $.Slice<__goscript__package.PackageVersion> {
		return this._fields.PackageVersions
	}

	public set PackageVersions(value: $.Slice<__goscript__package.PackageVersion>) {
		this._fields.PackageVersions = value
	}

	public _fields: {
		Name: string
		ID: string
		Procedures: $.Slice<__goscript_router.Procedure>
		Inbounds: $.Slice<xintrospection.InboundStatus>
		Outbounds: $.Slice<xintrospection.OutboundStatus>
		PackageVersions: $.Slice<__goscript__package.PackageVersion>
	}

	constructor(init?: Partial<{Name?: string, ID?: string, Procedures?: $.Slice<__goscript_router.Procedure>, Inbounds?: $.Slice<xintrospection.InboundStatus>, Outbounds?: $.Slice<xintrospection.OutboundStatus>, PackageVersions?: $.Slice<__goscript__package.PackageVersion>}>, __goscriptValue?: boolean) {
		this._fields = {
			Name: init?.Name ?? ("" as string),
			ID: init?.ID ?? ("" as string),
			Procedures: init?.Procedures ?? (null! as $.Slice<__goscript_router.Procedure>),
			Inbounds: init?.Inbounds ?? (null! as $.Slice<xintrospection.InboundStatus>),
			Outbounds: init?.Outbounds ?? (null! as $.Slice<xintrospection.OutboundStatus>),
			PackageVersions: init?.PackageVersions ?? (null! as $.Slice<__goscript__package.PackageVersion>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): DispatcherStatus {
		return new DispatcherStatus(this, true)
	}

	public __goscriptAssign(source: DispatcherStatus): void {
		const target = this._fields
		const values = source._fields
		target.Name = values.Name
		target.ID = values.ID
		target.Procedures = values.Procedures
		target.Inbounds = values.Inbounds
		target.Outbounds = values.Outbounds
		target.PackageVersions = values.PackageVersions
	}

	static __typeInfo = $.registerStructType(
		"introspection.DispatcherStatus",
		() => new DispatcherStatus(),
		() => [],
		DispatcherStatus,
		() => [/* @__PURE__ */ $.structField("Name", /* @__PURE__ */ $.basicType("string"), [0], 0, true, { tag: "json:\"name\"" }), /* @__PURE__ */ $.structField("ID", /* @__PURE__ */ $.basicType("string"), [1], 16, true, { tag: "json:\"id\"" }), /* @__PURE__ */ $.structField("Procedures", /* @__PURE__ */ $.sliceType("introspection.Procedure"), [2], 32, true, { tag: "json:\"procedures\"" }), /* @__PURE__ */ $.structField("Inbounds", /* @__PURE__ */ $.sliceType("introspection.InboundStatus"), [3], 56, true, { tag: "json:\"inbounds\"" }), /* @__PURE__ */ $.structField("Outbounds", /* @__PURE__ */ $.sliceType("introspection.OutboundStatus"), [4], 80, true, { tag: "json:\"outbounds\"" }), /* @__PURE__ */ $.structField("PackageVersions", /* @__PURE__ */ $.sliceType("introspection.PackageVersion"), [5], 104, true, { tag: "json:\"packageVersions\"" })]
	)
}
