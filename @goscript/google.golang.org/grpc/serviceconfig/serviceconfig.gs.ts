// Generated file based on serviceconfig.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

$.registerTypePackagePath("google.golang.org/grpc/serviceconfig", ["serviceconfig.Config", "serviceconfig.LoadBalancingConfig", "serviceconfig.ParseResult"])

export type Config = {
	isServiceConfig(): void
}

$.registerInterfaceType(
	"serviceconfig.Config",
	null,
	[$.methodSignature("isServiceConfig")]
);

export type LoadBalancingConfig = {
	isLoadBalancingConfig(): void
}

$.registerInterfaceType(
	"serviceconfig.LoadBalancingConfig",
	null,
	[$.methodSignature("isLoadBalancingConfig")]
);

export class ParseResult {
	public get Config(): Config | null {
		return this._fields.Config
	}

	public set Config(value: Config | null) {
		this._fields.Config = value
	}

	public get Err(): $.GoError {
		return this._fields.Err
	}

	public set Err(value: $.GoError) {
		this._fields.Err = value
	}

	public _fields: {
		Config: Config | null
		Err: $.GoError
	}

	constructor(init?: Partial<{Config?: Config | null, Err?: $.GoError}>, __goscriptValue?: boolean) {
		this._fields = {
			Config: init?.Config ?? (null! as Config | null),
			Err: init?.Err ?? (null! as $.GoError)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ParseResult {
		return new ParseResult(this, true)
	}

	public __goscriptAssign(source: ParseResult): void {
		const target = this._fields
		const values = source._fields
		target.Config = $.assignFieldValue(target.Config, values.Config, "serviceconfig.Config")
		target.Err = $.assignFieldValue(target.Err, values.Err, "error")
	}

	static __typeInfo = $.registerStructType(
		"serviceconfig.ParseResult",
		() => new ParseResult(),
		() => [],
		ParseResult,
		() => [/* @__PURE__ */ $.structField("Config", "serviceconfig.Config", [0], 0, true), /* @__PURE__ */ $.structField("Err", "error", [1], 16, true)]
	)
}
