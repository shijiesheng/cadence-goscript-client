// Generated file based on event.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as os from "@goscript/os/index.js"

import * as time from "@goscript/time/index.js"
import "@goscript/os/index.js"
import "@goscript/time/index.js"

$.registerTypePackagePath("go.uber.org/fx/fxevent", ["fxevent.Event", "fxevent.OnStartExecuting", "fxevent.OnStartExecuted", "fxevent.OnStopExecuting", "fxevent.OnStopExecuted", "fxevent.Supplied", "fxevent.Provided", "fxevent.Replaced", "fxevent.Decorated", "fxevent.Run", "fxevent.Invoking", "fxevent.Invoked", "fxevent.Started", "fxevent.Stopping", "fxevent.Stopped", "fxevent.RollingBack", "fxevent.RolledBack", "fxevent.LoggerInitialized"])

export type Event = {
	event(): void
}

$.registerInterfaceType(
	"fxevent.Event",
	null,
	[$.methodSignature("event")]
);

export class OnStartExecuting {
	// FunctionName is the name of the function that will be executed.
	public get FunctionName(): string {
		return this._fields.FunctionName
	}

	public set FunctionName(value: string) {
		this._fields.FunctionName = value
	}

	// CallerName is the name of the function that scheduled the hook for
	// execution.
	public get CallerName(): string {
		return this._fields.CallerName
	}

	public set CallerName(value: string) {
		this._fields.CallerName = value
	}

	public _fields: {
		FunctionName: string
		CallerName: string
	}

	constructor(init?: Partial<{FunctionName?: string, CallerName?: string}>, __goscriptValue?: boolean) {
		this._fields = {
			FunctionName: init?.FunctionName ?? ("" as string),
			CallerName: init?.CallerName ?? ("" as string)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): OnStartExecuting {
		return new OnStartExecuting(this, true)
	}

	public __goscriptAssign(source: OnStartExecuting): void {
		const target = this._fields
		const values = source._fields
		target.FunctionName = values.FunctionName
		target.CallerName = values.CallerName
	}

	public event(): void {
	}

	static __typeInfo = $.registerStructType(
		"fxevent.OnStartExecuting",
		() => new OnStartExecuting(),
		() => [$.methodSignature("event", [], [], true)],
		OnStartExecuting,
		() => [/* @__PURE__ */ $.structField("FunctionName", /* @__PURE__ */ $.basicType("string"), [0], 0, true), /* @__PURE__ */ $.structField("CallerName", /* @__PURE__ */ $.basicType("string"), [1], 16, true)]
	)
}

export class OnStartExecuted {
	// FunctionName is the name of the function that was executed.
	public get FunctionName(): string {
		return this._fields.FunctionName
	}

	public set FunctionName(value: string) {
		this._fields.FunctionName = value
	}

	// CallerName is the name of the function that scheduled the hook for
	// execution.
	public get CallerName(): string {
		return this._fields.CallerName
	}

	public set CallerName(value: string) {
		this._fields.CallerName = value
	}

	// Method specifies the kind of the hook. This is one of "OnStart" and
	// "OnStop".
	public get Method(): string {
		return this._fields.Method
	}

	public set Method(value: string) {
		this._fields.Method = value
	}

	// Runtime specifies how long it took to run this hook.
	public get Runtime(): time.Duration {
		return this._fields.Runtime
	}

	public set Runtime(value: time.Duration) {
		this._fields.Runtime = value
	}

	// Err is non-nil if the hook failed to execute.
	public get Err(): $.GoError {
		return this._fields.Err
	}

	public set Err(value: $.GoError) {
		this._fields.Err = value
	}

	public _fields: {
		FunctionName: string
		CallerName: string
		Method: string
		Runtime: time.Duration
		Err: $.GoError
	}

	constructor(init?: Partial<{FunctionName?: string, CallerName?: string, Method?: string, Runtime?: time.Duration, Err?: $.GoError}>, __goscriptValue?: boolean) {
		this._fields = {
			FunctionName: init?.FunctionName ?? ("" as string),
			CallerName: init?.CallerName ?? ("" as string),
			Method: init?.Method ?? ("" as string),
			Runtime: init?.Runtime ?? (0n as time.Duration),
			Err: init?.Err ?? (null! as $.GoError)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): OnStartExecuted {
		return new OnStartExecuted(this, true)
	}

	public __goscriptAssign(source: OnStartExecuted): void {
		const target = this._fields
		const values = source._fields
		target.FunctionName = values.FunctionName
		target.CallerName = values.CallerName
		target.Method = values.Method
		target.Runtime = values.Runtime
		target.Err = $.assignFieldValue(target.Err, values.Err, "error")
	}

	public event(): void {
	}

	static __typeInfo = $.registerStructType(
		"fxevent.OnStartExecuted",
		() => new OnStartExecuted(),
		() => [$.methodSignature("event", [], [], true)],
		OnStartExecuted,
		() => [/* @__PURE__ */ $.structField("FunctionName", /* @__PURE__ */ $.basicType("string"), [0], 0, true), /* @__PURE__ */ $.structField("CallerName", /* @__PURE__ */ $.basicType("string"), [1], 16, true), /* @__PURE__ */ $.structField("Method", /* @__PURE__ */ $.basicType("string"), [2], 32, true), /* @__PURE__ */ $.structField("Runtime", /* @__PURE__ */ $.basicType("int64", "time.Duration"), [3], 48, true), /* @__PURE__ */ $.structField("Err", "error", [4], 56, true)]
	)
}

export class OnStopExecuting {
	// FunctionName is the name of the function that will be executed.
	public get FunctionName(): string {
		return this._fields.FunctionName
	}

	public set FunctionName(value: string) {
		this._fields.FunctionName = value
	}

	// CallerName is the name of the function that scheduled the hook for
	// execution.
	public get CallerName(): string {
		return this._fields.CallerName
	}

	public set CallerName(value: string) {
		this._fields.CallerName = value
	}

	public _fields: {
		FunctionName: string
		CallerName: string
	}

	constructor(init?: Partial<{FunctionName?: string, CallerName?: string}>, __goscriptValue?: boolean) {
		this._fields = {
			FunctionName: init?.FunctionName ?? ("" as string),
			CallerName: init?.CallerName ?? ("" as string)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): OnStopExecuting {
		return new OnStopExecuting(this, true)
	}

	public __goscriptAssign(source: OnStopExecuting): void {
		const target = this._fields
		const values = source._fields
		target.FunctionName = values.FunctionName
		target.CallerName = values.CallerName
	}

	public event(): void {
	}

	static __typeInfo = $.registerStructType(
		"fxevent.OnStopExecuting",
		() => new OnStopExecuting(),
		() => [$.methodSignature("event", [], [], true)],
		OnStopExecuting,
		() => [/* @__PURE__ */ $.structField("FunctionName", /* @__PURE__ */ $.basicType("string"), [0], 0, true), /* @__PURE__ */ $.structField("CallerName", /* @__PURE__ */ $.basicType("string"), [1], 16, true)]
	)
}

export class OnStopExecuted {
	// FunctionName is the name of the function that was executed.
	public get FunctionName(): string {
		return this._fields.FunctionName
	}

	public set FunctionName(value: string) {
		this._fields.FunctionName = value
	}

	// CallerName is the name of the function that scheduled the hook for
	// execution.
	public get CallerName(): string {
		return this._fields.CallerName
	}

	public set CallerName(value: string) {
		this._fields.CallerName = value
	}

	// Runtime specifies how long it took to run this hook.
	public get Runtime(): time.Duration {
		return this._fields.Runtime
	}

	public set Runtime(value: time.Duration) {
		this._fields.Runtime = value
	}

	// Err is non-nil if the hook failed to execute.
	public get Err(): $.GoError {
		return this._fields.Err
	}

	public set Err(value: $.GoError) {
		this._fields.Err = value
	}

	public _fields: {
		FunctionName: string
		CallerName: string
		Runtime: time.Duration
		Err: $.GoError
	}

	constructor(init?: Partial<{FunctionName?: string, CallerName?: string, Runtime?: time.Duration, Err?: $.GoError}>, __goscriptValue?: boolean) {
		this._fields = {
			FunctionName: init?.FunctionName ?? ("" as string),
			CallerName: init?.CallerName ?? ("" as string),
			Runtime: init?.Runtime ?? (0n as time.Duration),
			Err: init?.Err ?? (null! as $.GoError)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): OnStopExecuted {
		return new OnStopExecuted(this, true)
	}

	public __goscriptAssign(source: OnStopExecuted): void {
		const target = this._fields
		const values = source._fields
		target.FunctionName = values.FunctionName
		target.CallerName = values.CallerName
		target.Runtime = values.Runtime
		target.Err = $.assignFieldValue(target.Err, values.Err, "error")
	}

	public event(): void {
	}

	static __typeInfo = $.registerStructType(
		"fxevent.OnStopExecuted",
		() => new OnStopExecuted(),
		() => [$.methodSignature("event", [], [], true)],
		OnStopExecuted,
		() => [/* @__PURE__ */ $.structField("FunctionName", /* @__PURE__ */ $.basicType("string"), [0], 0, true), /* @__PURE__ */ $.structField("CallerName", /* @__PURE__ */ $.basicType("string"), [1], 16, true), /* @__PURE__ */ $.structField("Runtime", /* @__PURE__ */ $.basicType("int64", "time.Duration"), [2], 32, true), /* @__PURE__ */ $.structField("Err", "error", [3], 40, true)]
	)
}

export class Supplied {
	// TypeName is the name of the type of value that was added.
	public get TypeName(): string {
		return this._fields.TypeName
	}

	public set TypeName(value: string) {
		this._fields.TypeName = value
	}

	// StackTrace is the stack trace of the call to Supply.
	public get StackTrace(): $.Slice<string> {
		return this._fields.StackTrace
	}

	public set StackTrace(value: $.Slice<string>) {
		this._fields.StackTrace = value
	}

	// ModuleTrace contains the module locations through which this value was added.
	public get ModuleTrace(): $.Slice<string> {
		return this._fields.ModuleTrace
	}

	public set ModuleTrace(value: $.Slice<string>) {
		this._fields.ModuleTrace = value
	}

	// ModuleName is the name of the module in which the value was added to.
	public get ModuleName(): string {
		return this._fields.ModuleName
	}

	public set ModuleName(value: string) {
		this._fields.ModuleName = value
	}

	// Err is non-nil if we failed to supply the value.
	public get Err(): $.GoError {
		return this._fields.Err
	}

	public set Err(value: $.GoError) {
		this._fields.Err = value
	}

	public _fields: {
		TypeName: string
		StackTrace: $.Slice<string>
		ModuleTrace: $.Slice<string>
		ModuleName: string
		Err: $.GoError
	}

	constructor(init?: Partial<{TypeName?: string, StackTrace?: $.Slice<string>, ModuleTrace?: $.Slice<string>, ModuleName?: string, Err?: $.GoError}>, __goscriptValue?: boolean) {
		this._fields = {
			TypeName: init?.TypeName ?? ("" as string),
			StackTrace: init?.StackTrace ?? (null! as $.Slice<string>),
			ModuleTrace: init?.ModuleTrace ?? (null! as $.Slice<string>),
			ModuleName: init?.ModuleName ?? ("" as string),
			Err: init?.Err ?? (null! as $.GoError)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Supplied {
		return new Supplied(this, true)
	}

	public __goscriptAssign(source: Supplied): void {
		const target = this._fields
		const values = source._fields
		target.TypeName = values.TypeName
		target.StackTrace = values.StackTrace
		target.ModuleTrace = values.ModuleTrace
		target.ModuleName = values.ModuleName
		target.Err = $.assignFieldValue(target.Err, values.Err, "error")
	}

	public event(): void {
	}

	static __typeInfo = $.registerStructType(
		"fxevent.Supplied",
		() => new Supplied(),
		() => [$.methodSignature("event", [], [], true)],
		Supplied,
		() => [/* @__PURE__ */ $.structField("TypeName", /* @__PURE__ */ $.basicType("string"), [0], 0, true), /* @__PURE__ */ $.structField("StackTrace", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")), [1], 16, true), /* @__PURE__ */ $.structField("ModuleTrace", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")), [2], 40, true), /* @__PURE__ */ $.structField("ModuleName", /* @__PURE__ */ $.basicType("string"), [3], 64, true), /* @__PURE__ */ $.structField("Err", "error", [4], 80, true)]
	)
}

export class Provided {
	// ConstructorName is the name of the constructor that was provided to
	// Fx.
	public get ConstructorName(): string {
		return this._fields.ConstructorName
	}

	public set ConstructorName(value: string) {
		this._fields.ConstructorName = value
	}

	// StackTrace is the stack trace of where the constructor was provided to Fx.
	public get StackTrace(): $.Slice<string> {
		return this._fields.StackTrace
	}

	public set StackTrace(value: $.Slice<string>) {
		this._fields.StackTrace = value
	}

	// ModuleTrace contains the module locations through which this was provided to Fx.
	public get ModuleTrace(): $.Slice<string> {
		return this._fields.ModuleTrace
	}

	public set ModuleTrace(value: $.Slice<string>) {
		this._fields.ModuleTrace = value
	}

	// OutputTypeNames is a list of names of types that are produced by
	// this constructor.
	public get OutputTypeNames(): $.Slice<string> {
		return this._fields.OutputTypeNames
	}

	public set OutputTypeNames(value: $.Slice<string>) {
		this._fields.OutputTypeNames = value
	}

	// ModuleName is the name of the module in which the constructor was
	// provided to.
	public get ModuleName(): string {
		return this._fields.ModuleName
	}

	public set ModuleName(value: string) {
		this._fields.ModuleName = value
	}

	// Err is non-nil if we failed to provide this constructor.
	public get Err(): $.GoError {
		return this._fields.Err
	}

	public set Err(value: $.GoError) {
		this._fields.Err = value
	}

	// Private denotes whether the provided constructor is a [Private] constructor.
	public get Private(): boolean {
		return this._fields.Private
	}

	public set Private(value: boolean) {
		this._fields.Private = value
	}

	public _fields: {
		ConstructorName: string
		StackTrace: $.Slice<string>
		ModuleTrace: $.Slice<string>
		OutputTypeNames: $.Slice<string>
		ModuleName: string
		Err: $.GoError
		Private: boolean
	}

	constructor(init?: Partial<{ConstructorName?: string, StackTrace?: $.Slice<string>, ModuleTrace?: $.Slice<string>, OutputTypeNames?: $.Slice<string>, ModuleName?: string, Err?: $.GoError, Private?: boolean}>, __goscriptValue?: boolean) {
		this._fields = {
			ConstructorName: init?.ConstructorName ?? ("" as string),
			StackTrace: init?.StackTrace ?? (null! as $.Slice<string>),
			ModuleTrace: init?.ModuleTrace ?? (null! as $.Slice<string>),
			OutputTypeNames: init?.OutputTypeNames ?? (null! as $.Slice<string>),
			ModuleName: init?.ModuleName ?? ("" as string),
			Err: init?.Err ?? (null! as $.GoError),
			Private: init?.Private ?? (false as boolean)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Provided {
		return new Provided(this, true)
	}

	public __goscriptAssign(source: Provided): void {
		const target = this._fields
		const values = source._fields
		target.ConstructorName = values.ConstructorName
		target.StackTrace = values.StackTrace
		target.ModuleTrace = values.ModuleTrace
		target.OutputTypeNames = values.OutputTypeNames
		target.ModuleName = values.ModuleName
		target.Err = $.assignFieldValue(target.Err, values.Err, "error")
		target.Private = values.Private
	}

	public event(): void {
	}

	static __typeInfo = $.registerStructType(
		"fxevent.Provided",
		() => new Provided(),
		() => [$.methodSignature("event", [], [], true)],
		Provided,
		() => [/* @__PURE__ */ $.structField("ConstructorName", /* @__PURE__ */ $.basicType("string"), [0], 0, true), /* @__PURE__ */ $.structField("StackTrace", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")), [1], 16, true), /* @__PURE__ */ $.structField("ModuleTrace", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")), [2], 40, true), /* @__PURE__ */ $.structField("OutputTypeNames", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")), [3], 64, true), /* @__PURE__ */ $.structField("ModuleName", /* @__PURE__ */ $.basicType("string"), [4], 88, true), /* @__PURE__ */ $.structField("Err", "error", [5], 104, true), /* @__PURE__ */ $.structField("Private", /* @__PURE__ */ $.basicType("bool"), [6], 120, true)]
	)
}

export class Replaced {
	// OutputTypeNames is a list of names of types that were replaced.
	public get OutputTypeNames(): $.Slice<string> {
		return this._fields.OutputTypeNames
	}

	public set OutputTypeNames(value: $.Slice<string>) {
		this._fields.OutputTypeNames = value
	}

	// StackTrace is the stack trace of the call to Replace.
	public get StackTrace(): $.Slice<string> {
		return this._fields.StackTrace
	}

	public set StackTrace(value: $.Slice<string>) {
		this._fields.StackTrace = value
	}

	// ModuleTrace contains the module locations through which this value was added.
	public get ModuleTrace(): $.Slice<string> {
		return this._fields.ModuleTrace
	}

	public set ModuleTrace(value: $.Slice<string>) {
		this._fields.ModuleTrace = value
	}

	// ModuleName is the name of the module in which the value was added to.
	public get ModuleName(): string {
		return this._fields.ModuleName
	}

	public set ModuleName(value: string) {
		this._fields.ModuleName = value
	}

	// Err is non-nil if we failed to supply the value.
	public get Err(): $.GoError {
		return this._fields.Err
	}

	public set Err(value: $.GoError) {
		this._fields.Err = value
	}

	public _fields: {
		OutputTypeNames: $.Slice<string>
		StackTrace: $.Slice<string>
		ModuleTrace: $.Slice<string>
		ModuleName: string
		Err: $.GoError
	}

	constructor(init?: Partial<{OutputTypeNames?: $.Slice<string>, StackTrace?: $.Slice<string>, ModuleTrace?: $.Slice<string>, ModuleName?: string, Err?: $.GoError}>, __goscriptValue?: boolean) {
		this._fields = {
			OutputTypeNames: init?.OutputTypeNames ?? (null! as $.Slice<string>),
			StackTrace: init?.StackTrace ?? (null! as $.Slice<string>),
			ModuleTrace: init?.ModuleTrace ?? (null! as $.Slice<string>),
			ModuleName: init?.ModuleName ?? ("" as string),
			Err: init?.Err ?? (null! as $.GoError)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Replaced {
		return new Replaced(this, true)
	}

	public __goscriptAssign(source: Replaced): void {
		const target = this._fields
		const values = source._fields
		target.OutputTypeNames = values.OutputTypeNames
		target.StackTrace = values.StackTrace
		target.ModuleTrace = values.ModuleTrace
		target.ModuleName = values.ModuleName
		target.Err = $.assignFieldValue(target.Err, values.Err, "error")
	}

	public event(): void {
	}

	static __typeInfo = $.registerStructType(
		"fxevent.Replaced",
		() => new Replaced(),
		() => [$.methodSignature("event", [], [], true)],
		Replaced,
		() => [/* @__PURE__ */ $.structField("OutputTypeNames", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")), [0], 0, true), /* @__PURE__ */ $.structField("StackTrace", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")), [1], 24, true), /* @__PURE__ */ $.structField("ModuleTrace", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")), [2], 48, true), /* @__PURE__ */ $.structField("ModuleName", /* @__PURE__ */ $.basicType("string"), [3], 72, true), /* @__PURE__ */ $.structField("Err", "error", [4], 88, true)]
	)
}

export class Decorated {
	// DecoratorName is the name of the decorator function that was
	// provided to Fx.
	public get DecoratorName(): string {
		return this._fields.DecoratorName
	}

	public set DecoratorName(value: string) {
		this._fields.DecoratorName = value
	}

	// StackTrace is the stack trace of where the decorator was given to Fx.
	public get StackTrace(): $.Slice<string> {
		return this._fields.StackTrace
	}

	public set StackTrace(value: $.Slice<string>) {
		this._fields.StackTrace = value
	}

	// ModuleTrace contains the module locations through which this value was added.
	public get ModuleTrace(): $.Slice<string> {
		return this._fields.ModuleTrace
	}

	public set ModuleTrace(value: $.Slice<string>) {
		this._fields.ModuleTrace = value
	}

	// ModuleName is the name of the module in which the value was added to.
	public get ModuleName(): string {
		return this._fields.ModuleName
	}

	public set ModuleName(value: string) {
		this._fields.ModuleName = value
	}

	// OutputTypeNames is a list of names of types that are decorated by
	// this decorator.
	public get OutputTypeNames(): $.Slice<string> {
		return this._fields.OutputTypeNames
	}

	public set OutputTypeNames(value: $.Slice<string>) {
		this._fields.OutputTypeNames = value
	}

	// Err is non-nil if we failed to run this decorator.
	public get Err(): $.GoError {
		return this._fields.Err
	}

	public set Err(value: $.GoError) {
		this._fields.Err = value
	}

	public _fields: {
		DecoratorName: string
		StackTrace: $.Slice<string>
		ModuleTrace: $.Slice<string>
		ModuleName: string
		OutputTypeNames: $.Slice<string>
		Err: $.GoError
	}

	constructor(init?: Partial<{DecoratorName?: string, StackTrace?: $.Slice<string>, ModuleTrace?: $.Slice<string>, ModuleName?: string, OutputTypeNames?: $.Slice<string>, Err?: $.GoError}>, __goscriptValue?: boolean) {
		this._fields = {
			DecoratorName: init?.DecoratorName ?? ("" as string),
			StackTrace: init?.StackTrace ?? (null! as $.Slice<string>),
			ModuleTrace: init?.ModuleTrace ?? (null! as $.Slice<string>),
			ModuleName: init?.ModuleName ?? ("" as string),
			OutputTypeNames: init?.OutputTypeNames ?? (null! as $.Slice<string>),
			Err: init?.Err ?? (null! as $.GoError)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Decorated {
		return new Decorated(this, true)
	}

	public __goscriptAssign(source: Decorated): void {
		const target = this._fields
		const values = source._fields
		target.DecoratorName = values.DecoratorName
		target.StackTrace = values.StackTrace
		target.ModuleTrace = values.ModuleTrace
		target.ModuleName = values.ModuleName
		target.OutputTypeNames = values.OutputTypeNames
		target.Err = $.assignFieldValue(target.Err, values.Err, "error")
	}

	public event(): void {
	}

	static __typeInfo = $.registerStructType(
		"fxevent.Decorated",
		() => new Decorated(),
		() => [$.methodSignature("event", [], [], true)],
		Decorated,
		() => [/* @__PURE__ */ $.structField("DecoratorName", /* @__PURE__ */ $.basicType("string"), [0], 0, true), /* @__PURE__ */ $.structField("StackTrace", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")), [1], 16, true), /* @__PURE__ */ $.structField("ModuleTrace", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")), [2], 40, true), /* @__PURE__ */ $.structField("ModuleName", /* @__PURE__ */ $.basicType("string"), [3], 64, true), /* @__PURE__ */ $.structField("OutputTypeNames", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")), [4], 80, true), /* @__PURE__ */ $.structField("Err", "error", [5], 104, true)]
	)
}

export class Run {
	// Name is the name of the function that was run.
	public get Name(): string {
		return this._fields.Name
	}

	public set Name(value: string) {
		this._fields.Name = value
	}

	// Kind indicates which Fx option was used to pass along the function.
	// It is either "provide", "decorate", "supply", or "replace".
	public get Kind(): string {
		return this._fields.Kind
	}

	public set Kind(value: string) {
		this._fields.Kind = value
	}

	// ModuleName is the name of the module in which the function belongs.
	public get ModuleName(): string {
		return this._fields.ModuleName
	}

	public set ModuleName(value: string) {
		this._fields.ModuleName = value
	}

	// Err is non-nil if the function returned an error.
	// If fx.RecoverFromPanics is used, this will include panics.
	public get Err(): $.GoError {
		return this._fields.Err
	}

	public set Err(value: $.GoError) {
		this._fields.Err = value
	}

	public _fields: {
		Name: string
		Kind: string
		ModuleName: string
		Err: $.GoError
	}

	constructor(init?: Partial<{Name?: string, Kind?: string, ModuleName?: string, Err?: $.GoError}>, __goscriptValue?: boolean) {
		this._fields = {
			Name: init?.Name ?? ("" as string),
			Kind: init?.Kind ?? ("" as string),
			ModuleName: init?.ModuleName ?? ("" as string),
			Err: init?.Err ?? (null! as $.GoError)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Run {
		return new Run(this, true)
	}

	public __goscriptAssign(source: Run): void {
		const target = this._fields
		const values = source._fields
		target.Name = values.Name
		target.Kind = values.Kind
		target.ModuleName = values.ModuleName
		target.Err = $.assignFieldValue(target.Err, values.Err, "error")
	}

	public event(): void {
	}

	static __typeInfo = $.registerStructType(
		"fxevent.Run",
		() => new Run(),
		() => [$.methodSignature("event", [], [], true)],
		Run,
		() => [/* @__PURE__ */ $.structField("Name", /* @__PURE__ */ $.basicType("string"), [0], 0, true), /* @__PURE__ */ $.structField("Kind", /* @__PURE__ */ $.basicType("string"), [1], 16, true), /* @__PURE__ */ $.structField("ModuleName", /* @__PURE__ */ $.basicType("string"), [2], 32, true), /* @__PURE__ */ $.structField("Err", "error", [3], 48, true)]
	)
}

export class Invoking {
	// FunctionName is the name of the function that will be invoked.
	public get FunctionName(): string {
		return this._fields.FunctionName
	}

	public set FunctionName(value: string) {
		this._fields.FunctionName = value
	}

	// ModuleName is the name of the module in which the value was added to.
	public get ModuleName(): string {
		return this._fields.ModuleName
	}

	public set ModuleName(value: string) {
		this._fields.ModuleName = value
	}

	public _fields: {
		FunctionName: string
		ModuleName: string
	}

	constructor(init?: Partial<{FunctionName?: string, ModuleName?: string}>, __goscriptValue?: boolean) {
		this._fields = {
			FunctionName: init?.FunctionName ?? ("" as string),
			ModuleName: init?.ModuleName ?? ("" as string)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Invoking {
		return new Invoking(this, true)
	}

	public __goscriptAssign(source: Invoking): void {
		const target = this._fields
		const values = source._fields
		target.FunctionName = values.FunctionName
		target.ModuleName = values.ModuleName
	}

	public event(): void {
	}

	static __typeInfo = $.registerStructType(
		"fxevent.Invoking",
		() => new Invoking(),
		() => [$.methodSignature("event", [], [], true)],
		Invoking,
		() => [/* @__PURE__ */ $.structField("FunctionName", /* @__PURE__ */ $.basicType("string"), [0], 0, true), /* @__PURE__ */ $.structField("ModuleName", /* @__PURE__ */ $.basicType("string"), [1], 16, true)]
	)
}

export class Invoked {
	// Functionname is the name of the function that was invoked.
	public get FunctionName(): string {
		return this._fields.FunctionName
	}

	public set FunctionName(value: string) {
		this._fields.FunctionName = value
	}

	// ModuleName is the name of the module in which the value was added to.
	public get ModuleName(): string {
		return this._fields.ModuleName
	}

	public set ModuleName(value: string) {
		this._fields.ModuleName = value
	}

	// Err is non-nil if the function failed to execute.
	public get Err(): $.GoError {
		return this._fields.Err
	}

	public set Err(value: $.GoError) {
		this._fields.Err = value
	}

	// Trace records information about where the fx.Invoke call was made.
	// Note that this is NOT a stack trace of the error itself.
	public get Trace(): string {
		return this._fields.Trace
	}

	public set Trace(value: string) {
		this._fields.Trace = value
	}

	public _fields: {
		FunctionName: string
		ModuleName: string
		Err: $.GoError
		Trace: string
	}

	constructor(init?: Partial<{FunctionName?: string, ModuleName?: string, Err?: $.GoError, Trace?: string}>, __goscriptValue?: boolean) {
		this._fields = {
			FunctionName: init?.FunctionName ?? ("" as string),
			ModuleName: init?.ModuleName ?? ("" as string),
			Err: init?.Err ?? (null! as $.GoError),
			Trace: init?.Trace ?? ("" as string)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Invoked {
		return new Invoked(this, true)
	}

	public __goscriptAssign(source: Invoked): void {
		const target = this._fields
		const values = source._fields
		target.FunctionName = values.FunctionName
		target.ModuleName = values.ModuleName
		target.Err = $.assignFieldValue(target.Err, values.Err, "error")
		target.Trace = values.Trace
	}

	public event(): void {
	}

	static __typeInfo = $.registerStructType(
		"fxevent.Invoked",
		() => new Invoked(),
		() => [$.methodSignature("event", [], [], true)],
		Invoked,
		() => [/* @__PURE__ */ $.structField("FunctionName", /* @__PURE__ */ $.basicType("string"), [0], 0, true), /* @__PURE__ */ $.structField("ModuleName", /* @__PURE__ */ $.basicType("string"), [1], 16, true), /* @__PURE__ */ $.structField("Err", "error", [2], 32, true), /* @__PURE__ */ $.structField("Trace", /* @__PURE__ */ $.basicType("string"), [3], 48, true)]
	)
}

export class Started {
	// Err is non-nil if the application failed to start successfully.
	public get Err(): $.GoError {
		return this._fields.Err
	}

	public set Err(value: $.GoError) {
		this._fields.Err = value
	}

	public _fields: {
		Err: $.GoError
	}

	constructor(init?: Partial<{Err?: $.GoError}>, __goscriptValue?: boolean) {
		this._fields = {
			Err: init?.Err ?? (null! as $.GoError)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Started {
		return new Started(this, true)
	}

	public __goscriptAssign(source: Started): void {
		const target = this._fields
		const values = source._fields
		target.Err = $.assignFieldValue(target.Err, values.Err, "error")
	}

	public event(): void {
	}

	static __typeInfo = $.registerStructType(
		"fxevent.Started",
		() => new Started(),
		() => [$.methodSignature("event", [], [], true)],
		Started,
		() => [/* @__PURE__ */ $.structField("Err", "error", [0], 0, true)]
	)
}

export class Stopping {
	// Signal is the signal that caused this shutdown.
	public get Signal(): os.Signal | null {
		return this._fields.Signal
	}

	public set Signal(value: os.Signal | null) {
		this._fields.Signal = value
	}

	public _fields: {
		Signal: os.Signal | null
	}

	constructor(init?: Partial<{Signal?: os.Signal | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Signal: init?.Signal ?? (null! as os.Signal | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Stopping {
		return new Stopping(this, true)
	}

	public __goscriptAssign(source: Stopping): void {
		const target = this._fields
		const values = source._fields
		target.Signal = $.assignFieldValue(target.Signal, values.Signal, "os.Signal")
	}

	public event(): void {
	}

	static __typeInfo = $.registerStructType(
		"fxevent.Stopping",
		() => new Stopping(),
		() => [$.methodSignature("event", [], [], true)],
		Stopping,
		() => [/* @__PURE__ */ $.structField("Signal", "os.Signal", [0], 0, true)]
	)
}

export class Stopped {
	// Err is non-nil if errors were encountered during shutdown.
	public get Err(): $.GoError {
		return this._fields.Err
	}

	public set Err(value: $.GoError) {
		this._fields.Err = value
	}

	public _fields: {
		Err: $.GoError
	}

	constructor(init?: Partial<{Err?: $.GoError}>, __goscriptValue?: boolean) {
		this._fields = {
			Err: init?.Err ?? (null! as $.GoError)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Stopped {
		return new Stopped(this, true)
	}

	public __goscriptAssign(source: Stopped): void {
		const target = this._fields
		const values = source._fields
		target.Err = $.assignFieldValue(target.Err, values.Err, "error")
	}

	public event(): void {
	}

	static __typeInfo = $.registerStructType(
		"fxevent.Stopped",
		() => new Stopped(),
		() => [$.methodSignature("event", [], [], true)],
		Stopped,
		() => [/* @__PURE__ */ $.structField("Err", "error", [0], 0, true)]
	)
}

export class RollingBack {
	// StartErr is the error that caused this rollback.
	public get StartErr(): $.GoError {
		return this._fields.StartErr
	}

	public set StartErr(value: $.GoError) {
		this._fields.StartErr = value
	}

	public _fields: {
		StartErr: $.GoError
	}

	constructor(init?: Partial<{StartErr?: $.GoError}>, __goscriptValue?: boolean) {
		this._fields = {
			StartErr: init?.StartErr ?? (null! as $.GoError)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): RollingBack {
		return new RollingBack(this, true)
	}

	public __goscriptAssign(source: RollingBack): void {
		const target = this._fields
		const values = source._fields
		target.StartErr = $.assignFieldValue(target.StartErr, values.StartErr, "error")
	}

	public event(): void {
	}

	static __typeInfo = $.registerStructType(
		"fxevent.RollingBack",
		() => new RollingBack(),
		() => [$.methodSignature("event", [], [], true)],
		RollingBack,
		() => [/* @__PURE__ */ $.structField("StartErr", "error", [0], 0, true)]
	)
}

export class RolledBack {
	// Err is non-nil if the rollback failed.
	public get Err(): $.GoError {
		return this._fields.Err
	}

	public set Err(value: $.GoError) {
		this._fields.Err = value
	}

	public _fields: {
		Err: $.GoError
	}

	constructor(init?: Partial<{Err?: $.GoError}>, __goscriptValue?: boolean) {
		this._fields = {
			Err: init?.Err ?? (null! as $.GoError)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): RolledBack {
		return new RolledBack(this, true)
	}

	public __goscriptAssign(source: RolledBack): void {
		const target = this._fields
		const values = source._fields
		target.Err = $.assignFieldValue(target.Err, values.Err, "error")
	}

	public event(): void {
	}

	static __typeInfo = $.registerStructType(
		"fxevent.RolledBack",
		() => new RolledBack(),
		() => [$.methodSignature("event", [], [], true)],
		RolledBack,
		() => [/* @__PURE__ */ $.structField("Err", "error", [0], 0, true)]
	)
}

export class LoggerInitialized {
	// ConstructorName is the name of the constructor that builds this
	// logger.
	public get ConstructorName(): string {
		return this._fields.ConstructorName
	}

	public set ConstructorName(value: string) {
		this._fields.ConstructorName = value
	}

	// Err is non-nil if the logger failed to build.
	public get Err(): $.GoError {
		return this._fields.Err
	}

	public set Err(value: $.GoError) {
		this._fields.Err = value
	}

	public _fields: {
		ConstructorName: string
		Err: $.GoError
	}

	constructor(init?: Partial<{ConstructorName?: string, Err?: $.GoError}>, __goscriptValue?: boolean) {
		this._fields = {
			ConstructorName: init?.ConstructorName ?? ("" as string),
			Err: init?.Err ?? (null! as $.GoError)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): LoggerInitialized {
		return new LoggerInitialized(this, true)
	}

	public __goscriptAssign(source: LoggerInitialized): void {
		const target = this._fields
		const values = source._fields
		target.ConstructorName = values.ConstructorName
		target.Err = $.assignFieldValue(target.Err, values.Err, "error")
	}

	public event(): void {
	}

	static __typeInfo = $.registerStructType(
		"fxevent.LoggerInitialized",
		() => new LoggerInitialized(),
		() => [$.methodSignature("event", [], [], true)],
		LoggerInitialized,
		() => [/* @__PURE__ */ $.structField("ConstructorName", /* @__PURE__ */ $.basicType("string"), [0], 0, true), /* @__PURE__ */ $.structField("Err", "error", [1], 16, true)]
	)
}
