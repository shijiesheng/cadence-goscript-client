// Generated file based on prefix_logger.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as grpclog from "@goscript/google.golang.org/grpc/grpclog/index.js"

import * as internal from "@goscript/google.golang.org/grpc/grpclog/internal/index.js"
import "@goscript/fmt/index.js"
import "@goscript/google.golang.org/grpc/grpclog/index.js"
import "@goscript/google.golang.org/grpc/grpclog/internal/index.js"

$.registerTypePackagePath("google.golang.org/grpc/internal/grpclog", ["grpclog.PrefixLogger"])

export class PrefixLogger {
	public get logger(): grpclog.DepthLoggerV2 | null {
		return this._fields.logger
	}

	public set logger(value: grpclog.DepthLoggerV2 | null) {
		this._fields.logger = value
	}

	public get prefix(): string {
		return this._fields.prefix
	}

	public set prefix(value: string) {
		this._fields.prefix = value
	}

	public _fields: {
		logger: grpclog.DepthLoggerV2 | null
		prefix: string
	}

	constructor(init?: Partial<{logger?: grpclog.DepthLoggerV2 | null, prefix?: string}>, __goscriptValue?: boolean) {
		this._fields = {
			logger: init?.logger ?? (null! as grpclog.DepthLoggerV2 | null),
			prefix: init?.prefix ?? ("" as string)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): PrefixLogger {
		return new PrefixLogger(this, true)
	}

	public __goscriptAssign(source: PrefixLogger): void {
		const target = this._fields
		const values = source._fields
		target.logger = $.assignFieldValue(target.logger, values.logger, "grpclog.DepthLoggerV2")
		target.prefix = values.prefix
	}

	public async Errorf(format: string, args: $.Slice<any>): globalThis.Promise<void> {
		const pl: PrefixLogger | $.VarRef<PrefixLogger> | null = this;
		const pl$: PrefixLogger = pl == null ? $.pointerTarget<PrefixLogger>(pl) : (pl as any).__isVarRef === true ? (pl as any).value : (pl as any).__goValue === undefined ? (pl as any) : $.pointerTarget<PrefixLogger>(pl)
		if (pl != null) {
			format = $.concatString((pl$ as PrefixLogger).prefix, format)
			void (__goscriptAwait = $.pointerValue<Exclude<grpclog.DepthLoggerV2, null>>((pl$ as PrefixLogger).logger).ErrorDepth(1, $.arrayToSlice<any>([await fmt.Sprintf(format, ...(args ?? []))])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			return
		}
		await grpclog.ErrorDepth(1, $.arrayToSlice<any>([await fmt.Sprintf(format, ...(args ?? []))]))
	}

	public async Infof(format: string, args: $.Slice<any>): globalThis.Promise<void> {
		const pl: PrefixLogger | $.VarRef<PrefixLogger> | null = this;
		const pl$: PrefixLogger = pl == null ? $.pointerTarget<PrefixLogger>(pl) : (pl as any).__isVarRef === true ? (pl as any).value : (pl as any).__goValue === undefined ? (pl as any) : $.pointerTarget<PrefixLogger>(pl)
		if (pl != null) {
			// Handle nil, so the tests can pass in a nil logger.
			format = $.concatString((pl$ as PrefixLogger).prefix, format)
			void (__goscriptAwait = $.pointerValue<Exclude<grpclog.DepthLoggerV2, null>>((pl$ as PrefixLogger).logger).InfoDepth(1, $.arrayToSlice<any>([await fmt.Sprintf(format, ...(args ?? []))])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			return
		}
		await grpclog.InfoDepth(1, $.arrayToSlice<any>([await fmt.Sprintf(format, ...(args ?? []))]))
	}

	public async V(l: number): globalThis.Promise<boolean> {
		const pl: PrefixLogger | $.VarRef<PrefixLogger> | null = this;
		if (pl != null) {
			return $.pointerValue<Exclude<grpclog.DepthLoggerV2, null>>($.pointerValue<PrefixLogger>(pl).logger).V(l)
		}
		return true
	}

	public async Warningf(format: string, args: $.Slice<any>): globalThis.Promise<void> {
		const pl: PrefixLogger | $.VarRef<PrefixLogger> | null = this;
		const pl$: PrefixLogger = pl == null ? $.pointerTarget<PrefixLogger>(pl) : (pl as any).__isVarRef === true ? (pl as any).value : (pl as any).__goValue === undefined ? (pl as any) : $.pointerTarget<PrefixLogger>(pl)
		if (pl != null) {
			format = $.concatString((pl$ as PrefixLogger).prefix, format)
			void (__goscriptAwait = $.pointerValue<Exclude<grpclog.DepthLoggerV2, null>>((pl$ as PrefixLogger).logger).WarningDepth(1, $.arrayToSlice<any>([await fmt.Sprintf(format, ...(args ?? []))])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			return
		}
		await grpclog.WarningDepth(1, $.arrayToSlice<any>([await fmt.Sprintf(format, ...(args ?? []))]))
	}

	static __typeInfo = $.registerStructType(
		"grpclog.PrefixLogger",
		() => new PrefixLogger(),
		() => [$.methodSignature("Errorf", [["format", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [], true), $.methodSignature("Infof", [["format", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [], true), $.methodSignature("V", [["l", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Warningf", [["format", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [], true)],
		PrefixLogger,
		() => [/* @__PURE__ */ $.structField("logger", "grpclog.DepthLoggerV2", [0], 0, false, { pkgPath: "google.golang.org/grpc/internal/grpclog" }), /* @__PURE__ */ $.structField("prefix", /* @__PURE__ */ $.basicType("string"), [1], 16, false, { pkgPath: "google.golang.org/grpc/internal/grpclog" })]
	)
}

export function NewPrefixLogger(logger: grpclog.DepthLoggerV2 | null, prefix: string): PrefixLogger | $.VarRef<PrefixLogger> | null {
	return new PrefixLogger({logger: logger, prefix: prefix})
}

var __goscriptAwait: any
