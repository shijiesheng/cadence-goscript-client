// Generated file based on router.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/context/index.js"

import * as transport from "@goscript/go.uber.org/yarpc/api/transport/index.js"
import "@goscript/context/index.js"
import "@goscript/go.uber.org/yarpc/api/transport/index.js"

$.registerTypePackagePath("go.uber.org/yarpc/api/middleware", ["middleware.Router", "middleware.routeTableWithMiddleware"])

export type Router = {
	Choose(_p0: context.Context | null, _p1: transport.Request | $.VarRef<transport.Request> | null, _p2: transport.Router | null): [transport.HandlerSpec, $.GoError]
	Procedures(_p0: transport.Router | null): $.Slice<transport.Procedure>
}

$.registerInterfaceType(
	"middleware.Router",
	null,
	[$.methodSignature("Choose", ["context.Context", /* @__PURE__ */ $.pointerType("transport.Request"), "transport.Router"], ["transport.HandlerSpec", "error"]), $.methodSignature("Procedures", ["transport.Router"], [/* @__PURE__ */ $.sliceType("transport.Procedure")])]
);

export class routeTableWithMiddleware {
	public get r(): transport.RouteTable | null {
		return this._fields.r
	}

	public set r(value: transport.RouteTable | null) {
		this._fields.r = value
	}

	public get m(): Router | null {
		return this._fields.m
	}

	public set m(value: Router | null) {
		this._fields.m = value
	}

	public _fields: {
		r: transport.RouteTable | null
		m: Router | null
	}

	constructor(init?: Partial<{r?: transport.RouteTable | null, m?: Router | null}>, __goscriptValue?: boolean) {
		this._fields = {
			r: init?.r ?? (null! as transport.RouteTable | null),
			m: init?.m ?? (null! as Router | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): routeTableWithMiddleware {
		return new routeTableWithMiddleware(this, true)
	}

	public __goscriptAssign(source: routeTableWithMiddleware): void {
		const target = this._fields
		const values = source._fields
		target.r = $.assignFieldValue(target.r, values.r, "transport.RouteTable")
		target.m = $.assignFieldValue(target.m, values.m, "middleware.Router")
	}

	public async Choose(ctx: context.Context | null, req: transport.Request | $.VarRef<transport.Request> | null): globalThis.Promise<[transport.HandlerSpec, $.GoError]> {
		const r = this;
		return $.pointerValue<Exclude<Router, null>>(r.m).Choose(ctx, req, (r.r as transport.Router | null))
	}

	public async Procedures(): globalThis.Promise<$.Slice<transport.Procedure>> {
		const r = this;
		return $.pointerValue<Exclude<Router, null>>(r.m).Procedures((r.r as transport.Router | null))
	}

	public async Register(procedures: $.Slice<transport.Procedure>): globalThis.Promise<void> {
		const r = this;
		void (__goscriptAwait = $.pointerValue<Exclude<transport.RouteTable, null>>(r.r).Register(procedures), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	static __typeInfo = $.registerStructType(
		"middleware.routeTableWithMiddleware",
		() => new routeTableWithMiddleware(),
		() => [$.methodSignature("Choose", [["ctx", "context.Context"], ["req", /* @__PURE__ */ $.pointerType("transport.Request")]], ["transport.HandlerSpec", "error"]), $.methodSignature("Procedures", [], [/* @__PURE__ */ $.sliceType("transport.Procedure")]), $.methodSignature("Register", [["procedures", /* @__PURE__ */ $.sliceType("transport.Procedure")]])],
		routeTableWithMiddleware,
		() => [/* @__PURE__ */ $.structField("r", "transport.RouteTable", [0], 0, false, { pkgPath: "go.uber.org/yarpc/api/middleware" }), /* @__PURE__ */ $.structField("m", "middleware.Router", [1], 16, false, { pkgPath: "go.uber.org/yarpc/api/middleware" })]
	)
}

export function ApplyRouteTable(r: transport.RouteTable | null, m: Router | null): transport.RouteTable | null {
	if (m == null) {
		return r
	}
	return $.interfaceValue<transport.RouteTable | null>(new routeTableWithMiddleware({r: r, m: m}, true), "middleware.routeTableWithMiddleware", "middleware.routeTableWithMiddleware")
}

var __goscriptAwait: any
