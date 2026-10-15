// Generated file based on map.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as attributes from "@goscript/google.golang.org/grpc/attributes/index.js"

import * as __goscript_resolver from "./resolver.gs.ts"
import "@goscript/google.golang.org/grpc/attributes/index.js"
import "./resolver.gs.ts"

$.registerTypePackagePath("google.golang.org/grpc/resolver", ["resolver.addressMapEntry", "resolver.AddressMap", "resolver.addressMapEntryList", "resolver.endpointNode", "resolver.EndpointMap"])

export type addressMapEntryList = $.Slice<addressMapEntry | $.VarRef<addressMapEntry> | null>

$.registerNamedType("resolver.addressMapEntryList", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("resolver.addressMapEntry")));

$.registerNamedValueType(
	"resolver.addressMapEntryList",
	{find: (receiver: any, ...args: any[]) => (addressMapEntryList_find as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("find", [["addr", "resolver.Address"]], [/* @__PURE__ */ $.basicType("int")])]
);

$.registerNamedValueType(
	"*resolver.addressMapEntryList",
	{find: (receiver: any, ...args: any[]) => (addressMapEntryList_find as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("find", [["addr", "resolver.Address"]], [/* @__PURE__ */ $.basicType("int")])]
);

export class addressMapEntry {
	public get addr(): __goscript_resolver.Address {
		return this._fields.addr
	}

	public set addr(value: __goscript_resolver.Address) {
		this._fields.addr = value
	}

	public get value(): any {
		return this._fields.value
	}

	public set value(value: any) {
		this._fields.value = value
	}

	public _fields: {
		addr: __goscript_resolver.Address
		value: any
	}

	constructor(init?: Partial<{addr?: __goscript_resolver.Address, value?: any}>, __goscriptValue?: boolean) {
		this._fields = {
			addr: init?.addr ? init.addr.clone() : new __goscript_resolver.Address(undefined, true),
			value: init?.value ?? (null! as any)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): addressMapEntry {
		return new addressMapEntry(this, true)
	}

	public __goscriptAssign(source: addressMapEntry): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.addr, values.addr)
		target.value = $.assignFieldValue(target.value, values.value, { kind: $.TypeKind.Interface, methods: [] })
	}

	static __typeInfo = $.registerStructType(
		"resolver.addressMapEntry",
		() => new addressMapEntry(),
		() => [],
		addressMapEntry,
		() => [/* @__PURE__ */ $.structField("addr", "resolver.Address", [0], 0, false, { pkgPath: "google.golang.org/grpc/resolver" }), /* @__PURE__ */ $.structField("value", { kind: $.TypeKind.Interface, methods: [] }, [1], 64, false, { pkgPath: "google.golang.org/grpc/resolver" })]
	)
}

export class AddressMap {
	// The underlying map is keyed by an Address with fields that we don't care
	// about being set to their zero values. The only fields that we care about
	// are `Addr`, `ServerName` and `Attributes`. Since we need to be able to
	// distinguish between addresses with same `Addr` and `ServerName`, but
	// different `Attributes`, we cannot store the `Attributes` in the map key.
	//
	// The comparison operation for structs work as follows:
	//  Struct values are comparable if all their fields are comparable. Two
	//  struct values are equal if their corresponding non-blank fields are equal.
	//
	// The value type of the map contains a slice of addresses which match the key
	// in their `Addr` and `ServerName` fields and contain the corresponding value
	// associated with them.
	public get m(): globalThis.Map<__goscript_resolver.Address, addressMapEntryList> | null {
		return this._fields.m
	}

	public set m(value: globalThis.Map<__goscript_resolver.Address, addressMapEntryList> | null) {
		this._fields.m = value
	}

	public _fields: {
		m: globalThis.Map<__goscript_resolver.Address, addressMapEntryList> | null
	}

	constructor(init?: Partial<{m?: globalThis.Map<__goscript_resolver.Address, addressMapEntryList> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			m: init?.m ?? (null! as globalThis.Map<__goscript_resolver.Address, addressMapEntryList> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): AddressMap {
		return new AddressMap(this, true)
	}

	public __goscriptAssign(source: AddressMap): void {
		const target = this._fields
		const values = source._fields
		target.m = values.m
	}

	public async Delete(__goscriptParam0: __goscript_resolver.Address): globalThis.Promise<void> {
		let a: AddressMap | $.VarRef<AddressMap> | null = this;
		let addr: $.VarRef<__goscript_resolver.Address> = $.varRef(__goscriptParam0)
		const a$: AddressMap = a == null ? $.pointerTarget<AddressMap>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<AddressMap>(a)
		let addrKey = toMapKey(addr)
		let entryList: addressMapEntryList = ($.mapGet<__goscript_resolver.Address, addressMapEntryList, addressMapEntryList>((a$ as AddressMap).m, addrKey, null)[0] as addressMapEntryList)
		let entry = await addressMapEntryList_find(entryList, (addr.value).clone())
		if (entry == -1) {
			return
		}
		if ($.sliceLen((entryList as addressMapEntryList)) == 1) {
			entryList = (null as addressMapEntryList)
		} else {
			$.copy(($.goSlice(entryList, entry, undefined) as addressMapEntryList), ($.goSlice(entryList, entry + 1, undefined) as addressMapEntryList))
			entryList = ($.goSlice(entryList, undefined, $.sliceLen((entryList as addressMapEntryList)) - 1) as addressMapEntryList)
		}
		$.mapSet((a$ as AddressMap).m, (addrKey).clone(), (entryList as addressMapEntryList))
	}

	public async Get(__goscriptParam1: __goscript_resolver.Address): globalThis.Promise<[any, boolean]> {
		const a: AddressMap | $.VarRef<AddressMap> | null = this;
		let addr: $.VarRef<__goscript_resolver.Address> = $.varRef(__goscriptParam1)
		let value: any = null! as any
		let ok: boolean = false
		let addrKey = toMapKey(addr)
		let entryList: addressMapEntryList = ($.mapGet<__goscript_resolver.Address, addressMapEntryList, addressMapEntryList>($.pointerValue<AddressMap>(a).m, addrKey, null)[0] as addressMapEntryList)
		{
			let entry = await addressMapEntryList_find(entryList, (addr.value).clone())
			if (entry != -1) {
				return [$.pointerValue<addressMapEntry>($.arrayIndex(entryList!, entry)).value, true]
			}
		}
		return [null, false]
	}

	public Keys(): $.Slice<__goscript_resolver.Address> {
		const a: AddressMap | $.VarRef<AddressMap> | null = this;
		let ret: $.Slice<__goscript_resolver.Address> = $.makeSlice<__goscript_resolver.Address>(0, (a !== null && (a as any).__isVarRef !== true && (a as any).__goValue === undefined ? ((a as any) as AddressMap).Len() : AddressMap.prototype.Len.call(a)), undefined, () => new __goscript_resolver.Address(undefined, true))
		for (const [__rangeKey, entryList] of $.pointerValue<AddressMap>(a).m?.entries() ?? []) {
			for (let __goscriptRangeTarget0 = entryList, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
				let entry = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as addressMapEntry | $.VarRef<addressMapEntry> | null)
				ret = $.appendOne(ret, ($.pointerValue<addressMapEntry>(entry).addr).clone())
			}
		}
		return ret
	}

	public Len(): number {
		const a: AddressMap | $.VarRef<AddressMap> | null = this;
		let ret = 0
		for (const [__rangeKey, entryList] of $.pointerValue<AddressMap>(a).m?.entries() ?? []) {
			ret = ret + ($.sliceLen((entryList as addressMapEntryList)))
		}
		return ret
	}

	public async Set(__goscriptParam2: __goscript_resolver.Address, value: any): globalThis.Promise<void> {
		let a: AddressMap | $.VarRef<AddressMap> | null = this;
		let addr: $.VarRef<__goscript_resolver.Address> = $.varRef(__goscriptParam2)
		const a$: AddressMap = a == null ? $.pointerTarget<AddressMap>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<AddressMap>(a)
		let addrKey = toMapKey(addr)
		let entryList: addressMapEntryList = ($.mapGet<__goscript_resolver.Address, addressMapEntryList, addressMapEntryList>((a$ as AddressMap).m, addrKey, null)[0] as addressMapEntryList)
		{
			let entry = await addressMapEntryList_find(entryList, (addr.value).clone())
			if (entry != -1) {
				$.pointerValue<addressMapEntry>($.arrayIndex(entryList!, entry)).value = value
				return
			}
		}
		$.mapSet((a$ as AddressMap).m, (addrKey).clone(), ($.appendOne((entryList as addressMapEntryList), new addressMapEntry({addr: addr.value, value: value}), $.appendZeros.nil) as addressMapEntryList))
	}

	public Values(): $.Slice<any> {
		const a: AddressMap | $.VarRef<AddressMap> | null = this;
		let ret: $.Slice<any> = $.makeSlice<any>(0, (a !== null && (a as any).__isVarRef !== true && (a as any).__goValue === undefined ? ((a as any) as AddressMap).Len() : AddressMap.prototype.Len.call(a)))
		for (const [__rangeKey, entryList] of $.pointerValue<AddressMap>(a).m?.entries() ?? []) {
			for (let __goscriptRangeTarget1 = entryList, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
				let entry = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as addressMapEntry | $.VarRef<addressMapEntry> | null)
				ret = $.appendOne(ret, $.pointerValue<addressMapEntry>(entry).value, $.appendZeros.nil)
			}
		}
		return ret
	}

	static __typeInfo = $.registerStructType(
		"resolver.AddressMap",
		() => new AddressMap(),
		() => [$.methodSignature("Delete", [["addr", "resolver.Address"]], [], true), $.methodSignature("Get", [["addr", "resolver.Address"]], [["value", { kind: $.TypeKind.Interface, methods: [] }], ["ok", /* @__PURE__ */ $.basicType("bool")]], true), $.methodSignature("Keys", [], [/* @__PURE__ */ $.sliceType("resolver.Address")], true), $.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("Set", [["addr", "resolver.Address"], ["value", { kind: $.TypeKind.Interface, methods: [] }]], [], true), $.methodSignature("Values", [], [/* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })], true)],
		AddressMap,
		() => [/* @__PURE__ */ $.structField("m", /* @__PURE__ */ $.mapType("resolver.Address", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("resolver.addressMapEntry"), "resolver.addressMapEntryList")), [0], 0, false, { pkgPath: "google.golang.org/grpc/resolver" })]
	)
}

export class endpointNode {
	public get addrs(): globalThis.Map<string, {}> | null {
		return this._fields.addrs
	}

	public set addrs(value: globalThis.Map<string, {}> | null) {
		this._fields.addrs = value
	}

	public _fields: {
		addrs: globalThis.Map<string, {}> | null
	}

	constructor(init?: Partial<{addrs?: globalThis.Map<string, {}> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			addrs: init?.addrs ?? (null! as globalThis.Map<string, {}> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): endpointNode {
		return new endpointNode(this, true)
	}

	public __goscriptAssign(source: endpointNode): void {
		const target = this._fields
		const values = source._fields
		target.addrs = values.addrs
	}

	public Equal(en2: endpointNode | $.VarRef<endpointNode> | null): boolean {
		const en: endpointNode | $.VarRef<endpointNode> | null = this;
		const en$: endpointNode = en == null ? $.pointerTarget<endpointNode>(en) : (en as any).__isVarRef === true ? (en as any).value : (en as any).__goValue === undefined ? (en as any) : $.pointerTarget<endpointNode>(en)
		const en2$: endpointNode = en2 == null ? $.pointerTarget<endpointNode>(en2) : (en2 as any).__isVarRef === true ? (en2 as any).value : (en2 as any).__goValue === undefined ? (en2 as any) : $.pointerTarget<endpointNode>(en2)
		if ($.len((en$ as endpointNode).addrs) != $.len((en2$ as endpointNode).addrs)) {
			return false
		}
		for (const [addr, __rangeValue] of (en$ as endpointNode).addrs?.entries() ?? []) {
			{
				let [, ok] = $.mapGet<string, {}, {}>((en2$ as endpointNode).addrs, addr, {})
				if (!ok) {
					return false
				}
			}
		}
		return true
	}

	static __typeInfo = $.registerStructType(
		"resolver.endpointNode",
		() => new endpointNode(),
		() => [$.methodSignature("Equal", [["en2", /* @__PURE__ */ $.pointerType("resolver.endpointNode")]], [/* @__PURE__ */ $.basicType("bool")], true)],
		endpointNode,
		() => [/* @__PURE__ */ $.structField("addrs", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), { kind: $.TypeKind.Struct, methods: [], fields: [] }), [0], 0, false, { pkgPath: "google.golang.org/grpc/resolver" })]
	)
}

export class EndpointMap {
	public get endpoints(): globalThis.Map<endpointNode | $.VarRef<endpointNode> | null, any> | null {
		return this._fields.endpoints
	}

	public set endpoints(value: globalThis.Map<endpointNode | $.VarRef<endpointNode> | null, any> | null) {
		this._fields.endpoints = value
	}

	public _fields: {
		endpoints: globalThis.Map<endpointNode | $.VarRef<endpointNode> | null, any> | null
	}

	constructor(init?: Partial<{endpoints?: globalThis.Map<endpointNode | $.VarRef<endpointNode> | null, any> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			endpoints: init?.endpoints ?? (null! as globalThis.Map<endpointNode | $.VarRef<endpointNode> | null, any> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): EndpointMap {
		return new EndpointMap(this, true)
	}

	public __goscriptAssign(source: EndpointMap): void {
		const target = this._fields
		const values = source._fields
		target.endpoints = values.endpoints
	}

	public Delete(e: __goscript_resolver.Endpoint): void {
		const em: EndpointMap | $.VarRef<EndpointMap> | null = this;
		let en = toEndpointNode(e)
		{
			let entry: endpointNode | $.VarRef<endpointNode> | null = $.markAsStructValue($.cloneStructValue($.pointerValue<EndpointMap>(em))).find((en).clone())
			if (entry != null) {
				$.deleteMapEntry($.pointerValue<EndpointMap>(em).endpoints, entry)
			}
		}
	}

	public Get(e: __goscript_resolver.Endpoint): [any, boolean] {
		const em: EndpointMap | $.VarRef<EndpointMap> | null = this;
		let value: any = null! as any
		let ok: boolean = false
		let en = toEndpointNode(e)
		{
			let endpoint: endpointNode | $.VarRef<endpointNode> | null = $.markAsStructValue($.cloneStructValue($.pointerValue<EndpointMap>(em))).find((en).clone())
			if (endpoint != null) {
				return [$.mapGet<endpointNode | $.VarRef<endpointNode> | null, any, any>($.pointerValue<EndpointMap>(em).endpoints, endpoint, null)[0], true]
			}
		}
		return [null, false]
	}

	public Keys(): $.Slice<__goscript_resolver.Endpoint> {
		const em: EndpointMap | $.VarRef<EndpointMap> | null = this;
		const em$: EndpointMap = em == null ? $.pointerTarget<EndpointMap>(em) : (em as any).__isVarRef === true ? (em as any).value : (em as any).__goValue === undefined ? (em as any) : $.pointerTarget<EndpointMap>(em)
		let ret: $.Slice<__goscript_resolver.Endpoint> = $.makeSlice<__goscript_resolver.Endpoint>(0, $.len((em$ as EndpointMap).endpoints), undefined, () => new __goscript_resolver.Endpoint(undefined, true))
		for (const [en, __rangeValue] of (em$ as EndpointMap).endpoints?.entries() ?? []) {
			let endpoint: __goscript_resolver.Endpoint = new __goscript_resolver.Endpoint(undefined, true)
			for (const [addr, __rangeValue] of $.pointerValue<endpointNode>(en).addrs?.entries() ?? []) {
				endpoint.Addresses = $.appendOne(endpoint.Addresses, new __goscript_resolver.Address({Addr: addr}, true))
			}
			ret = $.appendOne(ret, (endpoint).clone())
		}
		return ret
	}

	public Len(): number {
		const em: EndpointMap | $.VarRef<EndpointMap> | null = this;
		return $.len($.pointerValue<EndpointMap>(em).endpoints)
	}

	public Set(e: __goscript_resolver.Endpoint, value: any): void {
		let em: EndpointMap | $.VarRef<EndpointMap> | null = this;
		const em$: EndpointMap = em == null ? $.pointerTarget<EndpointMap>(em) : (em as any).__isVarRef === true ? (em as any).value : (em as any).__goValue === undefined ? (em as any) : $.pointerTarget<EndpointMap>(em)
		let en = $.varRef(toEndpointNode(e))
		{
			let endpoint: endpointNode | $.VarRef<endpointNode> | null = $.markAsStructValue($.cloneStructValue((em$ as EndpointMap))).find((en.value).clone())
			if (endpoint != null) {
				$.mapSet((em$ as EndpointMap).endpoints, endpoint, value)
				return
			}
		}
		$.mapSet((em$ as EndpointMap).endpoints, en, value)
	}

	public Values(): $.Slice<any> {
		const em: EndpointMap | $.VarRef<EndpointMap> | null = this;
		const em$: EndpointMap = em == null ? $.pointerTarget<EndpointMap>(em) : (em as any).__isVarRef === true ? (em as any).value : (em as any).__goValue === undefined ? (em as any) : $.pointerTarget<EndpointMap>(em)
		let ret: $.Slice<any> = $.makeSlice<any>(0, $.len((em$ as EndpointMap).endpoints))
		for (const [__rangeKey, val] of (em$ as EndpointMap).endpoints?.entries() ?? []) {
			ret = $.appendOne(ret, val, $.appendZeros.nil)
		}
		return ret
	}

	public find(__goscriptParam3: endpointNode): endpointNode | $.VarRef<endpointNode> | null {
		const em = this;
		let e: $.VarRef<endpointNode> = $.varRef(__goscriptParam3)
		for (const [endpoint, __rangeValue] of em.endpoints?.entries() ?? []) {
			if (e.value.Equal(endpoint)) {
				return endpoint
			}
		}
		return null
	}

	static __typeInfo = $.registerStructType(
		"resolver.EndpointMap",
		() => new EndpointMap(),
		() => [$.methodSignature("Delete", [["e", "resolver.Endpoint"]], [], true), $.methodSignature("Get", [["e", "resolver.Endpoint"]], [["value", { kind: $.TypeKind.Interface, methods: [] }], ["ok", /* @__PURE__ */ $.basicType("bool")]], true), $.methodSignature("Keys", [], [/* @__PURE__ */ $.sliceType("resolver.Endpoint")], true), $.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("Set", [["e", "resolver.Endpoint"], ["value", { kind: $.TypeKind.Interface, methods: [] }]], [], true), $.methodSignature("Values", [], [/* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })], true), $.methodSignature("find", [["e", "resolver.endpointNode"]], [/* @__PURE__ */ $.pointerType("resolver.endpointNode")])],
		EndpointMap,
		() => [/* @__PURE__ */ $.structField("endpoints", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.pointerType("resolver.endpointNode"), { kind: $.TypeKind.Interface, methods: [] }), [0], 0, false, { pkgPath: "google.golang.org/grpc/resolver" })]
	)
}

export function toMapKey(addr: __goscript_resolver.Address | $.VarRef<__goscript_resolver.Address> | null): __goscript_resolver.Address {
	const addr$: __goscript_resolver.Address = addr == null ? $.pointerTarget<__goscript_resolver.Address>(addr) : (addr as any).__isVarRef === true ? (addr as any).value : (addr as any).__goValue === undefined ? (addr as any) : $.pointerTarget<__goscript_resolver.Address>(addr)
	return new __goscript_resolver.Address({Addr: (addr$ as __goscript_resolver.Address).Addr, ServerName: (addr$ as __goscript_resolver.Address).ServerName}, true)
}

export function NewAddressMap(): AddressMap | $.VarRef<AddressMap> | null {
	return new AddressMap({m: $.makeMap<__goscript_resolver.Address, addressMapEntryList>()})
}

export async function addressMapEntryList_find(l: addressMapEntryList, addr: __goscript_resolver.Address): globalThis.Promise<number> {
	for (let __goscriptRangeTarget2 = l, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), i = 0; i < __goscriptRangeWindow2.length; i++) {
		let entry = (__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + i] as addressMapEntry | $.VarRef<addressMapEntry> | null)
		// Attributes are the only thing to match on here, since `Addr` and
		// `ServerName` are already equal.
		if (await attributes.Attributes.prototype.Equal.call($.pointerValue<addressMapEntry>(entry).addr.Attributes, addr.Attributes)) {
			return i
		}
	}
	return -1
}

export function toEndpointNode(endpoint: __goscript_resolver.Endpoint): endpointNode {
	let en: globalThis.Map<string, {}> | null = $.makeMap<string, {}>()
	for (let __goscriptRangeTarget3 = endpoint.Addresses, __goscriptRangeWindow3 = $.sliceRange(__goscriptRangeTarget3), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow3.length; __rangeIndex++) {
		let addr = ((__goscriptRangeWindow3.backing[__goscriptRangeWindow3.offset + __rangeIndex] as __goscript_resolver.Address)).clone()
		$.mapSet(en, addr.Addr, {})
	}
	return new endpointNode({addrs: en}, true)
}

export function NewEndpointMap(): EndpointMap | $.VarRef<EndpointMap> | null {
	return new EndpointMap({endpoints: $.makeMap<endpointNode | $.VarRef<endpointNode> | null, any>(undefined, /* @__PURE__ */ $.pointerType("resolver.endpointNode"))})
}
