// Generated file based on chooser.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

$.registerTypePackagePath("go.uber.org/yarpc/api/x/introspection", ["introspection.IntrospectableChooser", "introspection.ChooserStatus", "introspection.PeerStatus"])

export type IntrospectableChooser = {
	Introspect(): ChooserStatus
}

$.registerInterfaceType(
	"introspection.IntrospectableChooser",
	null,
	[$.methodSignature("Introspect", [], ["introspection.ChooserStatus"])]
);

export class ChooserStatus {
	public get Name(): string {
		return this._fields.Name
	}

	public set Name(value: string) {
		this._fields.Name = value
	}

	public get State(): string {
		return this._fields.State
	}

	public set State(value: string) {
		this._fields.State = value
	}

	public get Peers(): $.Slice<PeerStatus> {
		return this._fields.Peers
	}

	public set Peers(value: $.Slice<PeerStatus>) {
		this._fields.Peers = value
	}

	public _fields: {
		Name: string
		State: string
		Peers: $.Slice<PeerStatus>
	}

	constructor(init?: Partial<{Name?: string, State?: string, Peers?: $.Slice<PeerStatus>}>, __goscriptValue?: boolean) {
		this._fields = {
			Name: init?.Name ?? ("" as string),
			State: init?.State ?? ("" as string),
			Peers: init?.Peers ?? (null! as $.Slice<PeerStatus>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ChooserStatus {
		return new ChooserStatus(this, true)
	}

	public __goscriptAssign(source: ChooserStatus): void {
		const target = this._fields
		const values = source._fields
		target.Name = values.Name
		target.State = values.State
		target.Peers = values.Peers
	}

	static __typeInfo = $.registerStructType(
		"introspection.ChooserStatus",
		() => new ChooserStatus(),
		() => [],
		ChooserStatus,
		() => [/* @__PURE__ */ $.structField("Name", /* @__PURE__ */ $.basicType("string"), [0], 0, true, { tag: "json:\"name\"" }), /* @__PURE__ */ $.structField("State", /* @__PURE__ */ $.basicType("string"), [1], 16, true, { tag: "json:\"state\"" }), /* @__PURE__ */ $.structField("Peers", /* @__PURE__ */ $.sliceType("introspection.PeerStatus"), [2], 32, true, { tag: "json:\"peers\"" })]
	)
}

export class PeerStatus {
	public get Identifier(): string {
		return this._fields.Identifier
	}

	public set Identifier(value: string) {
		this._fields.Identifier = value
	}

	public get State(): string {
		return this._fields.State
	}

	public set State(value: string) {
		this._fields.State = value
	}

	public _fields: {
		Identifier: string
		State: string
	}

	constructor(init?: Partial<{Identifier?: string, State?: string}>, __goscriptValue?: boolean) {
		this._fields = {
			Identifier: init?.Identifier ?? ("" as string),
			State: init?.State ?? ("" as string)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): PeerStatus {
		return new PeerStatus(this, true)
	}

	public __goscriptAssign(source: PeerStatus): void {
		const target = this._fields
		const values = source._fields
		target.Identifier = values.Identifier
		target.State = values.State
	}

	static __typeInfo = $.registerStructType(
		"introspection.PeerStatus",
		() => new PeerStatus(),
		() => [],
		PeerStatus,
		() => [/* @__PURE__ */ $.structField("Identifier", /* @__PURE__ */ $.basicType("string"), [0], 0, true, { tag: "json:\"identifier\"" }), /* @__PURE__ */ $.structField("State", /* @__PURE__ */ $.basicType("string"), [1], 16, true, { tag: "json:\"state\"" })]
	)
}
