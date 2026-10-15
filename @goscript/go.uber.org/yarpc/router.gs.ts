// Generated file based on router.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/context/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as sort from "@goscript/sort/index.js"

import * as strconv from "@goscript/strconv/index.js"

import * as strings from "@goscript/strings/index.js"

import * as transport from "@goscript/go.uber.org/yarpc/api/transport/index.js"

import * as humanize from "@goscript/go.uber.org/yarpc/internal/humanize/index.js"

import * as yarpcerrors from "@goscript/go.uber.org/yarpc/yarpcerrors/index.js"
import "@goscript/context/index.js"
import "@goscript/fmt/index.js"
import "@goscript/sort/index.js"
import "@goscript/strconv/index.js"
import "@goscript/strings/index.js"
import "@goscript/go.uber.org/yarpc/api/transport/index.js"
import "@goscript/go.uber.org/yarpc/internal/humanize/index.js"
import "@goscript/go.uber.org/yarpc/yarpcerrors/index.js"

$.registerTypePackagePath("go.uber.org/yarpc", ["yarpc.serviceProcedure", "yarpc.serviceProcedureEncoding", "yarpc.MapRouter", "yarpc.sortableProcedures"])

export type sortableProcedures = $.Slice<transport.Procedure>

$.registerNamedType("yarpc.sortableProcedures", /* @__PURE__ */ $.sliceType("transport.Procedure"));

$.registerNamedValueType(
	"yarpc.sortableProcedures",
	{Len: (receiver: any, ...args: any[]) => (sortableProcedures_Len as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Less: (receiver: any, ...args: any[]) => (sortableProcedures_Less as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Swap: (receiver: any, ...args: any[]) => (sortableProcedures_Swap as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Less", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Swap", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]])]
);

$.registerNamedValueType(
	"*yarpc.sortableProcedures",
	{Len: (receiver: any, ...args: any[]) => (sortableProcedures_Len as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Less: (receiver: any, ...args: any[]) => (sortableProcedures_Less as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Swap: (receiver: any, ...args: any[]) => (sortableProcedures_Swap as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Less", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Swap", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]])]
);

export class serviceProcedure {
	public get service(): string {
		return this._fields.service
	}

	public set service(value: string) {
		this._fields.service = value
	}

	public get procedure(): string {
		return this._fields.procedure
	}

	public set procedure(value: string) {
		this._fields.procedure = value
	}

	public _fields: {
		service: string
		procedure: string
	}

	constructor(init?: Partial<{service?: string, procedure?: string}>, __goscriptValue?: boolean) {
		this._fields = {
			service: init?.service ?? ("" as string),
			procedure: init?.procedure ?? ("" as string)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): serviceProcedure {
		return new serviceProcedure(this, true)
	}

	public __goscriptAssign(source: serviceProcedure): void {
		const target = this._fields
		const values = source._fields
		target.service = values.service
		target.procedure = values.procedure
	}

	static __typeInfo = $.registerStructType(
		"yarpc.serviceProcedure",
		() => new serviceProcedure(),
		() => [],
		serviceProcedure,
		() => [/* @__PURE__ */ $.structField("service", /* @__PURE__ */ $.basicType("string"), [0], 0, false, { pkgPath: "go.uber.org/yarpc" }), /* @__PURE__ */ $.structField("procedure", /* @__PURE__ */ $.basicType("string"), [1], 16, false, { pkgPath: "go.uber.org/yarpc" })]
	)
}

export class serviceProcedureEncoding {
	public get service(): string {
		return this._fields.service
	}

	public set service(value: string) {
		this._fields.service = value
	}

	public get procedure(): string {
		return this._fields.procedure
	}

	public set procedure(value: string) {
		this._fields.procedure = value
	}

	public get encoding(): transport.Encoding {
		return this._fields.encoding
	}

	public set encoding(value: transport.Encoding) {
		this._fields.encoding = value
	}

	public _fields: {
		service: string
		procedure: string
		encoding: transport.Encoding
	}

	constructor(init?: Partial<{service?: string, procedure?: string, encoding?: transport.Encoding}>, __goscriptValue?: boolean) {
		this._fields = {
			service: init?.service ?? ("" as string),
			procedure: init?.procedure ?? ("" as string),
			encoding: init?.encoding ?? ("" as transport.Encoding)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): serviceProcedureEncoding {
		return new serviceProcedureEncoding(this, true)
	}

	public __goscriptAssign(source: serviceProcedureEncoding): void {
		const target = this._fields
		const values = source._fields
		target.service = values.service
		target.procedure = values.procedure
		target.encoding = values.encoding
	}

	static __typeInfo = $.registerStructType(
		"yarpc.serviceProcedureEncoding",
		() => new serviceProcedureEncoding(),
		() => [],
		serviceProcedureEncoding,
		() => [/* @__PURE__ */ $.structField("service", /* @__PURE__ */ $.basicType("string"), [0], 0, false, { pkgPath: "go.uber.org/yarpc" }), /* @__PURE__ */ $.structField("procedure", /* @__PURE__ */ $.basicType("string"), [1], 16, false, { pkgPath: "go.uber.org/yarpc" }), /* @__PURE__ */ $.structField("encoding", /* @__PURE__ */ $.basicType("string", "transport.Encoding"), [2], 32, false, { pkgPath: "go.uber.org/yarpc" })]
	)
}

export class MapRouter {
	public get defaultService(): string {
		return this._fields.defaultService
	}

	public set defaultService(value: string) {
		this._fields.defaultService = value
	}

	public get serviceProcedures(): globalThis.Map<serviceProcedure, transport.Procedure> | null {
		return this._fields.serviceProcedures
	}

	public set serviceProcedures(value: globalThis.Map<serviceProcedure, transport.Procedure> | null) {
		this._fields.serviceProcedures = value
	}

	public get serviceProcedureEncodings(): globalThis.Map<serviceProcedureEncoding, transport.Procedure> | null {
		return this._fields.serviceProcedureEncodings
	}

	public set serviceProcedureEncodings(value: globalThis.Map<serviceProcedureEncoding, transport.Procedure> | null) {
		this._fields.serviceProcedureEncodings = value
	}

	public get supportedEncodings(): globalThis.Map<serviceProcedure, $.Slice<string>> | null {
		return this._fields.supportedEncodings
	}

	public set supportedEncodings(value: globalThis.Map<serviceProcedure, $.Slice<string>> | null) {
		this._fields.supportedEncodings = value
	}

	public get serviceNames(): globalThis.Map<string, {}> | null {
		return this._fields.serviceNames
	}

	public set serviceNames(value: globalThis.Map<string, {}> | null) {
		this._fields.serviceNames = value
	}

	public _fields: {
		defaultService: string
		serviceProcedures: globalThis.Map<serviceProcedure, transport.Procedure> | null
		serviceProcedureEncodings: globalThis.Map<serviceProcedureEncoding, transport.Procedure> | null
		supportedEncodings: globalThis.Map<serviceProcedure, $.Slice<string>> | null
		serviceNames: globalThis.Map<string, {}> | null
	}

	constructor(init?: Partial<{defaultService?: string, serviceProcedures?: globalThis.Map<serviceProcedure, transport.Procedure> | null, serviceProcedureEncodings?: globalThis.Map<serviceProcedureEncoding, transport.Procedure> | null, supportedEncodings?: globalThis.Map<serviceProcedure, $.Slice<string>> | null, serviceNames?: globalThis.Map<string, {}> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			defaultService: init?.defaultService ?? ("" as string),
			serviceProcedures: init?.serviceProcedures ?? (null! as globalThis.Map<serviceProcedure, transport.Procedure> | null),
			serviceProcedureEncodings: init?.serviceProcedureEncodings ?? (null! as globalThis.Map<serviceProcedureEncoding, transport.Procedure> | null),
			supportedEncodings: init?.supportedEncodings ?? (null! as globalThis.Map<serviceProcedure, $.Slice<string>> | null),
			serviceNames: init?.serviceNames ?? (null! as globalThis.Map<string, {}> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): MapRouter {
		return new MapRouter(this, true)
	}

	public __goscriptAssign(source: MapRouter): void {
		const target = this._fields
		const values = source._fields
		target.defaultService = values.defaultService
		target.serviceProcedures = values.serviceProcedures
		target.serviceProcedureEncodings = values.serviceProcedureEncodings
		target.supportedEncodings = values.supportedEncodings
		target.serviceNames = values.serviceNames
	}

	public Choose(ctx: context.Context | null, req: transport.Request | $.VarRef<transport.Request> | null): [transport.HandlerSpec, $.GoError] {
		const m = this;
		const req$: transport.Request = req == null ? $.pointerTarget<transport.Request>(req) : (req as any).__isVarRef === true ? (req as any).value : (req as any).__goValue === undefined ? (req as any) : $.pointerTarget<transport.Request>(req)
		let service = (req$ as transport.Request).Service
		let procedure = (req$ as transport.Request).Procedure
		let encoding = (req$ as transport.Request).Encoding
		if ($.stringEqual(service, "")) {
			service = m.defaultService
		}

		{
			let [, ok] = $.mapGet<string, {}, {}>(m.serviceNames, service, {})
			if (!ok) {
				return [new transport.HandlerSpec(undefined, true), $.interfaceValue<$.GoError>(yarpcerrors.Newf(12, $.concatString("unrecognized service name %q, ", "available services: %s"), $.arrayToSlice<any>([(req$ as transport.Request).Service, getAvailableServiceNames(m.serviceNames)])), "*yarpcerrors.Status", /* @__PURE__ */ $.pointerType("yarpcerrors.Status"))]
			}
		}

		// Fully specified combinations of service, procedure, and encoding.
		let spe = new serviceProcedureEncoding({service: service, procedure: procedure, encoding: encoding}, true)
		{
			let [__goscriptShadow0, ok] = $.mapGet<serviceProcedureEncoding, transport.Procedure, transport.Procedure>(m.serviceProcedureEncodings, spe, new transport.Procedure(undefined, true))
			if (ok) {
				return [(__goscriptShadow0.HandlerSpec).clone(), null]
			}
		}

		// Alternately use the original behavior: route all encodings to the same
		// handler.
		let sp = new serviceProcedure({service: service, procedure: procedure}, true)
		{
			let [__goscriptShadow1, ok] = $.mapGet<serviceProcedure, transport.Procedure, transport.Procedure>(m.serviceProcedures, sp, new transport.Procedure(undefined, true))
			if (ok) {
				return [(__goscriptShadow1.HandlerSpec).clone(), null]
			}
		}

		// Supported procedure, unrecognized encoding.
		{
			let wantEncodings: $.Slice<string> = $.mapGet<serviceProcedure, $.Slice<string>, $.Slice<string>>(m.supportedEncodings, sp, null)[0]
			if ($.sliceLen(wantEncodings) == 1) {
				// To maintain backward compatibility with the error messages provided
				// on the wire (as verified by Crossdock across all language
				// implementations), this routes an invalid encoding to the sole
				// implementation of a procedure.
				// The handler is then responsible for detecting the invalid encoding
				// and providing an error including "failed to decode".
				spe.encoding = $.arrayIndex(wantEncodings!, 0)
				return [($.mapGet<serviceProcedureEncoding, transport.Procedure, transport.Procedure>(m.serviceProcedureEncodings, spe, new transport.Procedure(undefined, true))[0].HandlerSpec).clone(), null]
			}
		}

		return [new transport.HandlerSpec(undefined, true), $.interfaceValue<$.GoError>(yarpcerrors.Newf(12, "unrecognized procedure %q for service %q", $.arrayToSlice<any>([(req$ as transport.Request).Procedure, (req$ as transport.Request).Service])), "*yarpcerrors.Status", /* @__PURE__ */ $.pointerType("yarpcerrors.Status"))]
	}

	public async Procedures(): globalThis.Promise<$.Slice<transport.Procedure>> {
		const m = this;
		let procs: $.Slice<transport.Procedure> = $.makeSlice<transport.Procedure>(0, $.len(m.serviceProcedures) + $.len(m.serviceProcedureEncodings), undefined, () => new transport.Procedure(undefined, true))
		for (const [__rangeKey, v] of m.serviceProcedures?.entries() ?? []) {
			procs = $.appendOne(procs, (v).clone())
		}
		for (const [__rangeKey, v] of m.serviceProcedureEncodings?.entries() ?? []) {
			procs = $.appendOne(procs, (v).clone())
		}
		await sort.Sort($.pointerValueOrNil($.namedValueInterfaceValue<sort.Interface | null>((procs as sortableProcedures), "yarpc.sortableProcedures", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()))!)
		return procs
	}

	public async Register(rs: $.Slice<transport.Procedure>): globalThis.Promise<void> {
		let m: MapRouter = this;
		for (let __goscriptRangeTarget0 = rs, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
			let r = ((__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as transport.Procedure)).clone()
			if ($.stringEqual(r.Service, "")) {
				r.Service = m.defaultService
			}

			if ($.stringEqual(r.Name, "")) {
				$.panic("Expected procedure name not to be empty string in registration")
			}

			$.mapSet(m.serviceNames, r.Service, {})

			let sp = new serviceProcedure({service: r.Service, procedure: r.Name}, true)

			if ($.stringEqual(r.Encoding, "")) {
				// Protect against masking encoding-specific routes.
				{
					let [, ok] = $.mapGet<serviceProcedure, transport.Procedure, transport.Procedure>(m.serviceProcedures, sp, new transport.Procedure(undefined, true))
					if (ok) {
						$.panic(await fmt.Sprintf("Cannot register multiple handlers for every encoding for service %q and procedure  %q", sp.service, sp.procedure))
					}
				}
				{
					let __goscriptTuple0: any = $.mapGet<serviceProcedure, $.Slice<string>, $.Slice<string>>(m.supportedEncodings, sp, null)
					let se: $.Slice<string> = __goscriptTuple0[0]
					let ok = __goscriptTuple0[1]
					if (ok) {
						$.panic(await fmt.Sprintf("Cannot register a handler for every encoding for service %q and procedure %q when there are already handlers for %s", sp.service, sp.procedure, await humanize.QuotedJoin(se, "and", "no encodings")))
					}
				}
				// This supports wild card encodings (for backward compatibility,
				// since type models like Thrift were not previously required to
				// specify the encoding of every procedure).
				$.mapSet(m.serviceProcedures, (sp).clone(), (r).clone())
				continue
			}

			let spe = new serviceProcedureEncoding({service: r.Service, procedure: r.Name, encoding: r.Encoding}, true)

			// Protect against overriding wildcards
			{
				let [, ok] = $.mapGet<serviceProcedure, transport.Procedure, transport.Procedure>(m.serviceProcedures, sp, new transport.Procedure(undefined, true))
				if (ok) {
					$.panic(await fmt.Sprintf("Cannot register a handler for both (service, procedure) on any * encoding and (service, procedure, encoding), specifically (%q, %q, %q)", r.Service, r.Name, $.namedValueInterfaceValue<any>(r.Encoding, "transport.Encoding", {}, /* @__PURE__ */ $.basicType("string", "transport.Encoding"))))
				}
			}
			// Route to individual handlers for unique combinations of service,
			// procedure, and encoding. This shall henceforth be the
			// recommended way for models to register procedures.
			$.mapSet(m.serviceProcedureEncodings, (spe).clone(), (r).clone())
			// Record supported encodings.
			$.mapSet(m.supportedEncodings, (sp).clone(), $.appendOne($.mapGet<serviceProcedure, $.Slice<string>, $.Slice<string>>(m.supportedEncodings, sp, null)[0], r.Encoding))
		}
	}

	static __typeInfo = $.registerStructType(
		"yarpc.MapRouter",
		() => new MapRouter(),
		() => [$.methodSignature("Choose", [["ctx", "context.Context"], ["req", /* @__PURE__ */ $.pointerType("transport.Request")]], ["transport.HandlerSpec", "error"]), $.methodSignature("Procedures", [], [/* @__PURE__ */ $.sliceType("transport.Procedure")]), $.methodSignature("Register", [["rs", /* @__PURE__ */ $.sliceType("transport.Procedure")]])],
		MapRouter,
		() => [/* @__PURE__ */ $.structField("defaultService", /* @__PURE__ */ $.basicType("string"), [0], 0, false, { pkgPath: "go.uber.org/yarpc" }), /* @__PURE__ */ $.structField("serviceProcedures", /* @__PURE__ */ $.mapType("yarpc.serviceProcedure", "transport.Procedure"), [1], 16, false, { pkgPath: "go.uber.org/yarpc" }), /* @__PURE__ */ $.structField("serviceProcedureEncodings", /* @__PURE__ */ $.mapType("yarpc.serviceProcedureEncoding", "transport.Procedure"), [2], 24, false, { pkgPath: "go.uber.org/yarpc" }), /* @__PURE__ */ $.structField("supportedEncodings", /* @__PURE__ */ $.mapType("yarpc.serviceProcedure", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))), [3], 32, false, { pkgPath: "go.uber.org/yarpc" }), /* @__PURE__ */ $.structField("serviceNames", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), { kind: $.TypeKind.Struct, methods: [], fields: [] }), [4], 40, false, { pkgPath: "go.uber.org/yarpc" })]
	)
}

export function NewMapRouter(defaultService: string): MapRouter {
	return new MapRouter({defaultService: defaultService, serviceProcedures: $.makeMap<serviceProcedure, transport.Procedure>(), serviceProcedureEncodings: $.makeMap<serviceProcedureEncoding, transport.Procedure>(), supportedEncodings: $.makeMap<serviceProcedure, $.Slice<string>>(), serviceNames: $.makeMap<string, {}>([[defaultService, {}]])}, true)
}

export function sortableProcedures_Len(ps: sortableProcedures): number {
	return $.sliceLen((ps as sortableProcedures))
}

export function sortableProcedures_Less(ps: sortableProcedures, i: number, j: number): boolean {
	return $.arrayIndex(ps!, i).Less($.arrayIndex(ps!, j))
}

export function sortableProcedures_Swap(ps: sortableProcedures, i: number, j: number): void {
	let __goscriptAssign0_0: transport.Procedure = ($.arrayIndex(ps!, j)).clone()
	let __goscriptAssign0_1: transport.Procedure = ($.arrayIndex(ps!, i)).clone()
	$.assignStruct($.sliceElems(ps!)[$.sliceSlot(ps!, i)], __goscriptAssign0_0)
	$.assignStruct($.sliceElems(ps!)[$.sliceSlot(ps!, j)], __goscriptAssign0_1)
}

export function getAvailableServiceNames(svcMap: globalThis.Map<string, {}> | null): string {
	let serviceNames: $.Slice<string> = null! as $.Slice<string>
	for (const [key, __rangeValue] of svcMap?.entries() ?? []) {
		serviceNames = $.appendOne(serviceNames, strconv.Quote(key))
	}
	// Sort the string array to generate consistent result
	sort.Strings(serviceNames)
	return strings.Join(serviceNames, ", ")
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({Len: (receiver: any, ...args: any[]) => (sortableProcedures_Len as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Less: (receiver: any, ...args: any[]) => (sortableProcedures_Less as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Swap: (receiver: any, ...args: any[]) => (sortableProcedures_Swap as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.sliceType("transport.Procedure", "yarpc.sortableProcedures"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Less", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Swap", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]])])
}
