// Generated file based on component.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import type * as internal from "@goscript/google.golang.org/grpc/grpclog/internal/index.js"

import * as __goscript_grpclog from "./grpclog.gs.ts"

import type * as __goscript_loggerv2 from "./loggerv2.gs.ts"
import "@goscript/fmt/index.js"
import "./grpclog.gs.ts"

$.registerTypePackagePath("google.golang.org/grpc/grpclog", ["grpclog.componentData"])

export class componentData {
	public get name(): string {
		return this._fields.name
	}

	public set name(value: string) {
		this._fields.name = value
	}

	public _fields: {
		name: string
	}

	constructor(init?: Partial<{name?: string}>, __goscriptValue?: boolean) {
		this._fields = {
			name: init?.name ?? ("" as string)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): componentData {
		return new componentData(this, true)
	}

	public __goscriptAssign(source: componentData): void {
		const target = this._fields
		const values = source._fields
		target.name = values.name
	}

	public async Error(args: $.Slice<any>): globalThis.Promise<void> {
		const c: componentData | $.VarRef<componentData> | null = this;
		await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as componentData).ErrorDepth(1, args) : componentData.prototype.ErrorDepth.call(c, 1, args))
	}

	public async ErrorDepth(depth: number, args: $.Slice<any>): globalThis.Promise<void> {
		const c: componentData | $.VarRef<componentData> | null = this;
		args = $.appendSlice($.arrayToSlice<any>([$.concatString(($.concatString("[", $.pointerValue<componentData>(c).name)), "]")]), args, $.appendZeros.nil)
		await __goscript_grpclog.ErrorDepth(depth + 1, args)
	}

	public async Errorf(format: string, args: $.Slice<any>): globalThis.Promise<void> {
		const c: componentData | $.VarRef<componentData> | null = this;
		await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as componentData).ErrorDepth(1, $.arrayToSlice<any>([await fmt.Sprintf(format, ...(args ?? []))])) : componentData.prototype.ErrorDepth.call(c, 1, $.arrayToSlice<any>([await fmt.Sprintf(format, ...(args ?? []))])))
	}

	public async Errorln(args: $.Slice<any>): globalThis.Promise<void> {
		const c: componentData | $.VarRef<componentData> | null = this;
		await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as componentData).ErrorDepth(1, args) : componentData.prototype.ErrorDepth.call(c, 1, args))
	}

	public async Fatal(args: $.Slice<any>): globalThis.Promise<void> {
		const c: componentData | $.VarRef<componentData> | null = this;
		await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as componentData).FatalDepth(1, args) : componentData.prototype.FatalDepth.call(c, 1, args))
	}

	public async FatalDepth(depth: number, args: $.Slice<any>): globalThis.Promise<void> {
		const c: componentData | $.VarRef<componentData> | null = this;
		args = $.appendSlice($.arrayToSlice<any>([$.concatString(($.concatString("[", $.pointerValue<componentData>(c).name)), "]")]), args, $.appendZeros.nil)
		await __goscript_grpclog.FatalDepth(depth + 1, args)
	}

	public async Fatalf(format: string, args: $.Slice<any>): globalThis.Promise<void> {
		const c: componentData | $.VarRef<componentData> | null = this;
		await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as componentData).FatalDepth(1, $.arrayToSlice<any>([await fmt.Sprintf(format, ...(args ?? []))])) : componentData.prototype.FatalDepth.call(c, 1, $.arrayToSlice<any>([await fmt.Sprintf(format, ...(args ?? []))])))
	}

	public async Fatalln(args: $.Slice<any>): globalThis.Promise<void> {
		const c: componentData | $.VarRef<componentData> | null = this;
		await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as componentData).FatalDepth(1, args) : componentData.prototype.FatalDepth.call(c, 1, args))
	}

	public async Info(args: $.Slice<any>): globalThis.Promise<void> {
		const c: componentData | $.VarRef<componentData> | null = this;
		await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as componentData).InfoDepth(1, args) : componentData.prototype.InfoDepth.call(c, 1, args))
	}

	public async InfoDepth(depth: number, args: $.Slice<any>): globalThis.Promise<void> {
		const c: componentData | $.VarRef<componentData> | null = this;
		args = $.appendSlice($.arrayToSlice<any>([$.concatString(($.concatString("[", $.pointerValue<componentData>(c).name)), "]")]), args, $.appendZeros.nil)
		await __goscript_grpclog.InfoDepth(depth + 1, args)
	}

	public async Infof(format: string, args: $.Slice<any>): globalThis.Promise<void> {
		const c: componentData | $.VarRef<componentData> | null = this;
		await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as componentData).InfoDepth(1, $.arrayToSlice<any>([await fmt.Sprintf(format, ...(args ?? []))])) : componentData.prototype.InfoDepth.call(c, 1, $.arrayToSlice<any>([await fmt.Sprintf(format, ...(args ?? []))])))
	}

	public async Infoln(args: $.Slice<any>): globalThis.Promise<void> {
		const c: componentData | $.VarRef<componentData> | null = this;
		await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as componentData).InfoDepth(1, args) : componentData.prototype.InfoDepth.call(c, 1, args))
	}

	public async V(l: number): globalThis.Promise<boolean> {
		const c: componentData | $.VarRef<componentData> | null = this;
		return __goscript_grpclog.V(l)
	}

	public async Warning(args: $.Slice<any>): globalThis.Promise<void> {
		const c: componentData | $.VarRef<componentData> | null = this;
		await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as componentData).WarningDepth(1, args) : componentData.prototype.WarningDepth.call(c, 1, args))
	}

	public async WarningDepth(depth: number, args: $.Slice<any>): globalThis.Promise<void> {
		const c: componentData | $.VarRef<componentData> | null = this;
		args = $.appendSlice($.arrayToSlice<any>([$.concatString(($.concatString("[", $.pointerValue<componentData>(c).name)), "]")]), args, $.appendZeros.nil)
		await __goscript_grpclog.WarningDepth(depth + 1, args)
	}

	public async Warningf(format: string, args: $.Slice<any>): globalThis.Promise<void> {
		const c: componentData | $.VarRef<componentData> | null = this;
		await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as componentData).WarningDepth(1, $.arrayToSlice<any>([await fmt.Sprintf(format, ...(args ?? []))])) : componentData.prototype.WarningDepth.call(c, 1, $.arrayToSlice<any>([await fmt.Sprintf(format, ...(args ?? []))])))
	}

	public async Warningln(args: $.Slice<any>): globalThis.Promise<void> {
		const c: componentData | $.VarRef<componentData> | null = this;
		await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as componentData).WarningDepth(1, args) : componentData.prototype.WarningDepth.call(c, 1, args))
	}

	static __typeInfo = $.registerStructType(
		"grpclog.componentData",
		() => new componentData(),
		() => [$.methodSignature("Error", [["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [], true), $.methodSignature("ErrorDepth", [["depth", /* @__PURE__ */ $.basicType("int")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [], true), $.methodSignature("Errorf", [["format", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [], true), $.methodSignature("Errorln", [["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [], true), $.methodSignature("Fatal", [["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [], true), $.methodSignature("FatalDepth", [["depth", /* @__PURE__ */ $.basicType("int")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [], true), $.methodSignature("Fatalf", [["format", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [], true), $.methodSignature("Fatalln", [["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [], true), $.methodSignature("Info", [["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [], true), $.methodSignature("InfoDepth", [["depth", /* @__PURE__ */ $.basicType("int")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [], true), $.methodSignature("Infof", [["format", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [], true), $.methodSignature("Infoln", [["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [], true), $.methodSignature("V", [["l", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Warning", [["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [], true), $.methodSignature("WarningDepth", [["depth", /* @__PURE__ */ $.basicType("int")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [], true), $.methodSignature("Warningf", [["format", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [], true), $.methodSignature("Warningln", [["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [], true)],
		componentData,
		() => [/* @__PURE__ */ $.structField("name", /* @__PURE__ */ $.basicType("string"), [0], 0, false, { pkgPath: "google.golang.org/grpc/grpclog" })]
	)
}

export let cache: globalThis.Map<string, componentData | $.VarRef<componentData> | null> | null = $.makeMap<string, componentData | $.VarRef<componentData> | null>([])

export function __goscript_set_cache(__goscriptValue: globalThis.Map<string, componentData | $.VarRef<componentData> | null> | null): void {
	cache = __goscriptValue
}

export function Component(componentName: string): __goscript_loggerv2.DepthLoggerV2 | null {
	{
		let __goscriptTuple0: any = $.mapGet<string, componentData | $.VarRef<componentData> | null, componentData | $.VarRef<componentData> | null>(cache, componentName, null)
		let cData: componentData | $.VarRef<componentData> | null = __goscriptTuple0[0]
		let ok = __goscriptTuple0[1]
		if (ok) {
			return $.interfaceValue<__goscript_loggerv2.DepthLoggerV2 | null>(cData, "*grpclog.componentData", /* @__PURE__ */ $.pointerType("grpclog.componentData"))
		}
	}
	let c: componentData | $.VarRef<componentData> | null = new componentData({name: componentName})
	$.mapSet(cache, componentName, c)
	return $.interfaceValue<__goscript_loggerv2.DepthLoggerV2 | null>(c, "*grpclog.componentData", /* @__PURE__ */ $.pointerType("grpclog.componentData"))
}
