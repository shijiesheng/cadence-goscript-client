// Generated file based on logger.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

$.registerTypePackagePath("google.golang.org/grpc/grpclog/internal", ["internal.Logger", "internal.LoggerWrapper"])

export type Logger = {
	Fatal(args: $.Slice<any>): void
	Fatalf(format: string, args: $.Slice<any>): void
	Fatalln(args: $.Slice<any>): void
	Print(args: $.Slice<any>): void
	Printf(format: string, args: $.Slice<any>): void
	Println(args: $.Slice<any>): void
}

$.registerInterfaceType(
	"internal.Logger",
	null,
	[$.methodSignature("Fatal", [["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]]), $.methodSignature("Fatalf", [["format", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]]), $.methodSignature("Fatalln", [["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]]), $.methodSignature("Print", [["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]]), $.methodSignature("Printf", [["format", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]]), $.methodSignature("Println", [["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]])]
);

export class LoggerWrapper {
	public get Logger(): Logger | null {
		return this._fields.Logger
	}

	public set Logger(value: Logger | null) {
		this._fields.Logger = value
	}

	public _fields: {
		Logger: Logger | null
	}

	constructor(init?: Partial<{Logger?: Logger | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Logger: init?.Logger ?? (null! as Logger | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): LoggerWrapper {
		return new LoggerWrapper(this, true)
	}

	public __goscriptAssign(source: LoggerWrapper): void {
		const target = this._fields
		const values = source._fields
		target.Logger = $.assignFieldValue(target.Logger, values.Logger, "internal.Logger")
	}

	public async Error(args: $.Slice<any>): globalThis.Promise<void> {
		const l: LoggerWrapper | $.VarRef<LoggerWrapper> | null = this;
		void (__goscriptAwait = $.pointerValue<Exclude<Logger, null>>($.pointerValue<LoggerWrapper>(l).Logger).Print(args), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	public async Errorf(format: string, args: $.Slice<any>): globalThis.Promise<void> {
		const l: LoggerWrapper | $.VarRef<LoggerWrapper> | null = this;
		void (__goscriptAwait = $.pointerValue<Exclude<Logger, null>>($.pointerValue<LoggerWrapper>(l).Logger).Printf(format, args), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	public async Errorln(args: $.Slice<any>): globalThis.Promise<void> {
		const l: LoggerWrapper | $.VarRef<LoggerWrapper> | null = this;
		void (__goscriptAwait = $.pointerValue<Exclude<Logger, null>>($.pointerValue<LoggerWrapper>(l).Logger).Println(args), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	public async Info(args: $.Slice<any>): globalThis.Promise<void> {
		const l: LoggerWrapper | $.VarRef<LoggerWrapper> | null = this;
		void (__goscriptAwait = $.pointerValue<Exclude<Logger, null>>($.pointerValue<LoggerWrapper>(l).Logger).Print(args), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	public async Infof(format: string, args: $.Slice<any>): globalThis.Promise<void> {
		const l: LoggerWrapper | $.VarRef<LoggerWrapper> | null = this;
		void (__goscriptAwait = $.pointerValue<Exclude<Logger, null>>($.pointerValue<LoggerWrapper>(l).Logger).Printf(format, args), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	public async Infoln(args: $.Slice<any>): globalThis.Promise<void> {
		const l: LoggerWrapper | $.VarRef<LoggerWrapper> | null = this;
		void (__goscriptAwait = $.pointerValue<Exclude<Logger, null>>($.pointerValue<LoggerWrapper>(l).Logger).Println(args), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	public V(_p0: number): boolean {
		// Returns true for all verbose level.
		return true
	}

	public async Warning(args: $.Slice<any>): globalThis.Promise<void> {
		const l: LoggerWrapper | $.VarRef<LoggerWrapper> | null = this;
		void (__goscriptAwait = $.pointerValue<Exclude<Logger, null>>($.pointerValue<LoggerWrapper>(l).Logger).Print(args), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	public async Warningf(format: string, args: $.Slice<any>): globalThis.Promise<void> {
		const l: LoggerWrapper | $.VarRef<LoggerWrapper> | null = this;
		void (__goscriptAwait = $.pointerValue<Exclude<Logger, null>>($.pointerValue<LoggerWrapper>(l).Logger).Printf(format, args), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	public async Warningln(args: $.Slice<any>): globalThis.Promise<void> {
		const l: LoggerWrapper | $.VarRef<LoggerWrapper> | null = this;
		void (__goscriptAwait = $.pointerValue<Exclude<Logger, null>>($.pointerValue<LoggerWrapper>(l).Logger).Println(args), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	public async Fatal(args: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<Logger | null, null>>(this.Logger).Fatal(args)
	}

	public async Fatalf(format: any, args: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<Logger | null, null>>(this.Logger).Fatalf(format, args)
	}

	public async Fatalln(args: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<Logger | null, null>>(this.Logger).Fatalln(args)
	}

	public async Print(args: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<Logger | null, null>>(this.Logger).Print(args)
	}

	public async Printf(format: any, args: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<Logger | null, null>>(this.Logger).Printf(format, args)
	}

	public async Println(args: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<Logger | null, null>>(this.Logger).Println(args)
	}

	static __typeInfo = $.registerStructType(
		"internal.LoggerWrapper",
		() => new LoggerWrapper(),
		() => [$.methodSignature("Error", [["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [], true), $.methodSignature("Errorf", [["format", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [], true), $.methodSignature("Errorln", [["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [], true), $.methodSignature("Info", [["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [], true), $.methodSignature("Infof", [["format", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [], true), $.methodSignature("Infoln", [["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [], true), $.methodSignature("V", [/* @__PURE__ */ $.basicType("int")], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Warning", [["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [], true), $.methodSignature("Warningf", [["format", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [], true), $.methodSignature("Warningln", [["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [], true), $.methodSignature("Fatal", [["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]]), $.methodSignature("Fatalf", [["format", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]]), $.methodSignature("Fatalln", [["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]]), $.methodSignature("Print", [["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]]), $.methodSignature("Printf", [["format", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]]), $.methodSignature("Println", [["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]])],
		LoggerWrapper,
		() => [/* @__PURE__ */ $.structField("Logger", "internal.Logger", [0], 0, true, { anonymous: true })]
	)
}

var __goscriptAwait: any
