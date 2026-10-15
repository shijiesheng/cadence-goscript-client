// Generated file based on config.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as io from "@goscript/io/index.js"

import * as os from "@goscript/os/index.js"

import * as __goscript_dump from "./dump.gs.ts"

import * as __goscript_format from "./format.gs.ts"
import "@goscript/bytes/index.js"
import "@goscript/fmt/index.js"
import "@goscript/io/index.js"
import "@goscript/os/index.js"
import "./dump.gs.ts"
import "./format.gs.ts"

$.registerTypePackagePath("github.com/davecgh/go-spew/spew", ["spew.ConfigState"])

export class ConfigState {
	// Indent specifies the string to use for each indentation level.  The
	// global config instance that all top-level functions use set this to a
	// single space by default.  If you would like more indentation, you might
	// set this to a tab with "\t" or perhaps two spaces with "  ".
	public get Indent(): string {
		return this._fields.Indent
	}

	public set Indent(value: string) {
		this._fields.Indent = value
	}

	// MaxDepth controls the maximum number of levels to descend into nested
	// data structures.  The default, 0, means there is no limit.
	//
	// NOTE: Circular data structures are properly detected, so it is not
	// necessary to set this value unless you specifically want to limit deeply
	// nested data structures.
	public get MaxDepth(): number {
		return this._fields.MaxDepth
	}

	public set MaxDepth(value: number) {
		this._fields.MaxDepth = value
	}

	// DisableMethods specifies whether or not error and Stringer interfaces are
	// invoked for types that implement them.
	public get DisableMethods(): boolean {
		return this._fields.DisableMethods
	}

	public set DisableMethods(value: boolean) {
		this._fields.DisableMethods = value
	}

	// DisablePointerMethods specifies whether or not to check for and invoke
	// error and Stringer interfaces on types which only accept a pointer
	// receiver when the current type is not a pointer.
	//
	// NOTE: This might be an unsafe action since calling one of these methods
	// with a pointer receiver could technically mutate the value, however,
	// in practice, types which choose to satisify an error or Stringer
	// interface with a pointer receiver should not be mutating their state
	// inside these interface methods.  As a result, this option relies on
	// access to the unsafe package, so it will not have any effect when
	// running in environments without access to the unsafe package such as
	// Google App Engine or with the "safe" build tag specified.
	public get DisablePointerMethods(): boolean {
		return this._fields.DisablePointerMethods
	}

	public set DisablePointerMethods(value: boolean) {
		this._fields.DisablePointerMethods = value
	}

	// DisablePointerAddresses specifies whether to disable the printing of
	// pointer addresses. This is useful when diffing data structures in tests.
	public get DisablePointerAddresses(): boolean {
		return this._fields.DisablePointerAddresses
	}

	public set DisablePointerAddresses(value: boolean) {
		this._fields.DisablePointerAddresses = value
	}

	// DisableCapacities specifies whether to disable the printing of capacities
	// for arrays, slices, maps and channels. This is useful when diffing
	// data structures in tests.
	public get DisableCapacities(): boolean {
		return this._fields.DisableCapacities
	}

	public set DisableCapacities(value: boolean) {
		this._fields.DisableCapacities = value
	}

	// ContinueOnMethod specifies whether or not recursion should continue once
	// a custom error or Stringer interface is invoked.  The default, false,
	// means it will print the results of invoking the custom error or Stringer
	// interface and return immediately instead of continuing to recurse into
	// the internals of the data type.
	//
	// NOTE: This flag does not have any effect if method invocation is disabled
	// via the DisableMethods or DisablePointerMethods options.
	public get ContinueOnMethod(): boolean {
		return this._fields.ContinueOnMethod
	}

	public set ContinueOnMethod(value: boolean) {
		this._fields.ContinueOnMethod = value
	}

	// SortKeys specifies map keys should be sorted before being printed. Use
	// this to have a more deterministic, diffable output.  Note that only
	// native types (bool, int, uint, floats, uintptr and string) and types
	// that support the error or Stringer interfaces (if methods are
	// enabled) are supported, with other types sorted according to the
	// reflect.Value.String() output which guarantees display stability.
	public get SortKeys(): boolean {
		return this._fields.SortKeys
	}

	public set SortKeys(value: boolean) {
		this._fields.SortKeys = value
	}

	// SpewKeys specifies that, as a last resort attempt, map keys should
	// be spewed to strings and sorted by those strings.  This is only
	// considered if SortKeys is true.
	public get SpewKeys(): boolean {
		return this._fields.SpewKeys
	}

	public set SpewKeys(value: boolean) {
		this._fields.SpewKeys = value
	}

	public _fields: {
		Indent: string
		MaxDepth: number
		DisableMethods: boolean
		DisablePointerMethods: boolean
		DisablePointerAddresses: boolean
		DisableCapacities: boolean
		ContinueOnMethod: boolean
		SortKeys: boolean
		SpewKeys: boolean
	}

	constructor(init?: Partial<{Indent?: string, MaxDepth?: number, DisableMethods?: boolean, DisablePointerMethods?: boolean, DisablePointerAddresses?: boolean, DisableCapacities?: boolean, ContinueOnMethod?: boolean, SortKeys?: boolean, SpewKeys?: boolean}>, __goscriptValue?: boolean) {
		this._fields = {
			Indent: init?.Indent ?? ("" as string),
			MaxDepth: init?.MaxDepth ?? (0 as number),
			DisableMethods: init?.DisableMethods ?? (false as boolean),
			DisablePointerMethods: init?.DisablePointerMethods ?? (false as boolean),
			DisablePointerAddresses: init?.DisablePointerAddresses ?? (false as boolean),
			DisableCapacities: init?.DisableCapacities ?? (false as boolean),
			ContinueOnMethod: init?.ContinueOnMethod ?? (false as boolean),
			SortKeys: init?.SortKeys ?? (false as boolean),
			SpewKeys: init?.SpewKeys ?? (false as boolean)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ConfigState {
		return new ConfigState(this, true)
	}

	public __goscriptAssign(source: ConfigState): void {
		const target = this._fields
		const values = source._fields
		target.Indent = values.Indent
		target.MaxDepth = values.MaxDepth
		target.DisableMethods = values.DisableMethods
		target.DisablePointerMethods = values.DisablePointerMethods
		target.DisablePointerAddresses = values.DisablePointerAddresses
		target.DisableCapacities = values.DisableCapacities
		target.ContinueOnMethod = values.ContinueOnMethod
		target.SortKeys = values.SortKeys
		target.SpewKeys = values.SpewKeys
	}

	public async Dump(a: $.Slice<any>): globalThis.Promise<void> {
		const c: ConfigState | $.VarRef<ConfigState> | null = this;
		await __goscript_dump.fdump(c, $.interfaceValue<io.Writer | null>(os.Stdout, "*os.File", /* @__PURE__ */ $.pointerType("os.File")), a)
	}

	public Errorf(format: string, a: $.Slice<any>): $.GoError {
		const c: ConfigState | $.VarRef<ConfigState> | null = this;
		let err: $.GoError = null! as $.GoError
		return fmt.Errorf(format, ...((c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as ConfigState).convertArgs(a) : ConfigState.prototype.convertArgs.call(c, a)) ?? []))
	}

	public async Fdump(w: io.Writer | null, a: $.Slice<any>): globalThis.Promise<void> {
		const c: ConfigState | $.VarRef<ConfigState> | null = this;
		await __goscript_dump.fdump(c, w, a)
	}

	public async Fprint(w: io.Writer | null, a: $.Slice<any>): globalThis.Promise<[number, $.GoError]> {
		const c: ConfigState | $.VarRef<ConfigState> | null = this;
		let n: number = 0
		let err: $.GoError = null! as $.GoError
		return fmt.Fprint($.pointerValueOrNil(w)!, ...((c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as ConfigState).convertArgs(a) : ConfigState.prototype.convertArgs.call(c, a)) ?? []))
	}

	public async Fprintf(w: io.Writer | null, format: string, a: $.Slice<any>): globalThis.Promise<[number, $.GoError]> {
		const c: ConfigState | $.VarRef<ConfigState> | null = this;
		let n: number = 0
		let err: $.GoError = null! as $.GoError
		return fmt.Fprintf($.pointerValueOrNil(w)!, format, ...((c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as ConfigState).convertArgs(a) : ConfigState.prototype.convertArgs.call(c, a)) ?? []))
	}

	public async Fprintln(w: io.Writer | null, a: $.Slice<any>): globalThis.Promise<[number, $.GoError]> {
		const c: ConfigState | $.VarRef<ConfigState> | null = this;
		let n: number = 0
		let err: $.GoError = null! as $.GoError
		return fmt.Fprintln($.pointerValueOrNil(w)!, ...((c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as ConfigState).convertArgs(a) : ConfigState.prototype.convertArgs.call(c, a)) ?? []))
	}

	public NewFormatter(v: any): fmt.Formatter | null {
		const c: ConfigState | $.VarRef<ConfigState> | null = this;
		return __goscript_format.newFormatter(c, v)
	}

	public async Print(a: $.Slice<any>): globalThis.Promise<[number, $.GoError]> {
		const c: ConfigState | $.VarRef<ConfigState> | null = this;
		let n: number = 0
		let err: $.GoError = null! as $.GoError
		return fmt.Print(...((c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as ConfigState).convertArgs(a) : ConfigState.prototype.convertArgs.call(c, a)) ?? []))
	}

	public async Printf(format: string, a: $.Slice<any>): globalThis.Promise<[number, $.GoError]> {
		const c: ConfigState | $.VarRef<ConfigState> | null = this;
		let n: number = 0
		let err: $.GoError = null! as $.GoError
		return fmt.Printf(format, ...((c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as ConfigState).convertArgs(a) : ConfigState.prototype.convertArgs.call(c, a)) ?? []))
	}

	public async Println(a: $.Slice<any>): globalThis.Promise<[number, $.GoError]> {
		const c: ConfigState | $.VarRef<ConfigState> | null = this;
		let n: number = 0
		let err: $.GoError = null! as $.GoError
		return fmt.Println(...((c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as ConfigState).convertArgs(a) : ConfigState.prototype.convertArgs.call(c, a)) ?? []))
	}

	public async Sdump(a: $.Slice<any>): globalThis.Promise<string> {
		const c: ConfigState | $.VarRef<ConfigState> | null = this;
		let buf: $.VarRef<bytes.Buffer> = $.varRef($.markAsStructValue(new bytes.Buffer()))
		await __goscript_dump.fdump(c, $.interfaceValue<io.Writer | null>(buf, "*bytes.Buffer", /* @__PURE__ */ $.pointerType("bytes.Buffer")), a)
		return buf.value.String()
	}

	public async Sprint(a: $.Slice<any>): globalThis.Promise<string> {
		const c: ConfigState | $.VarRef<ConfigState> | null = this;
		return fmt.Sprint(...((c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as ConfigState).convertArgs(a) : ConfigState.prototype.convertArgs.call(c, a)) ?? []))
	}

	public async Sprintf(format: string, a: $.Slice<any>): globalThis.Promise<string> {
		const c: ConfigState | $.VarRef<ConfigState> | null = this;
		return fmt.Sprintf(format, ...((c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as ConfigState).convertArgs(a) : ConfigState.prototype.convertArgs.call(c, a)) ?? []))
	}

	public async Sprintln(a: $.Slice<any>): globalThis.Promise<string> {
		const c: ConfigState | $.VarRef<ConfigState> | null = this;
		return fmt.Sprintln(...((c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as ConfigState).convertArgs(a) : ConfigState.prototype.convertArgs.call(c, a)) ?? []))
	}

	public convertArgs(args: $.Slice<any>): $.Slice<any> {
		const c: ConfigState | $.VarRef<ConfigState> | null = this;
		let formatters: $.Slice<any> = null! as $.Slice<any>
		formatters = $.makeSlice<any>($.sliceLen(args))
		for (let __goscriptRangeTarget0 = args, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __goscriptSliceWindow0 = $.sliceRange(formatters), index = 0; index < __goscriptRangeWindow0.length; index++) {
			let arg = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + index] as any);
			;(__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, index)] = (__goscript_format.newFormatter(c, arg) as any)
		}
		return formatters
	}

	static __typeInfo = $.registerStructType(
		"spew.ConfigState",
		() => new ConfigState(),
		() => [$.methodSignature("Dump", [["a", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [], true), $.methodSignature("Errorf", [["format", /* @__PURE__ */ $.basicType("string")], ["a", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [["err", "error"]], true), $.methodSignature("Fdump", [["w", "io.Writer"], ["a", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [], true), $.methodSignature("Fprint", [["w", "io.Writer"], ["a", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]], true), $.methodSignature("Fprintf", [["w", "io.Writer"], ["format", /* @__PURE__ */ $.basicType("string")], ["a", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]], true), $.methodSignature("Fprintln", [["w", "io.Writer"], ["a", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]], true), $.methodSignature("NewFormatter", [["v", { kind: $.TypeKind.Interface, methods: [] }]], ["fmt.Formatter"], true), $.methodSignature("Print", [["a", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]], true), $.methodSignature("Printf", [["format", /* @__PURE__ */ $.basicType("string")], ["a", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]], true), $.methodSignature("Println", [["a", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]], true), $.methodSignature("Sdump", [["a", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Sprint", [["a", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Sprintf", [["format", /* @__PURE__ */ $.basicType("string")], ["a", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Sprintln", [["a", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("convertArgs", [["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [["formatters", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], true)],
		ConfigState,
		() => [/* @__PURE__ */ $.structField("Indent", /* @__PURE__ */ $.basicType("string"), [0], 0, true), /* @__PURE__ */ $.structField("MaxDepth", /* @__PURE__ */ $.basicType("int"), [1], 16, true), /* @__PURE__ */ $.structField("DisableMethods", /* @__PURE__ */ $.basicType("bool"), [2], 24, true), /* @__PURE__ */ $.structField("DisablePointerMethods", /* @__PURE__ */ $.basicType("bool"), [3], 25, true), /* @__PURE__ */ $.structField("DisablePointerAddresses", /* @__PURE__ */ $.basicType("bool"), [4], 26, true), /* @__PURE__ */ $.structField("DisableCapacities", /* @__PURE__ */ $.basicType("bool"), [5], 27, true), /* @__PURE__ */ $.structField("ContinueOnMethod", /* @__PURE__ */ $.basicType("bool"), [6], 28, true), /* @__PURE__ */ $.structField("SortKeys", /* @__PURE__ */ $.basicType("bool"), [7], 29, true), /* @__PURE__ */ $.structField("SpewKeys", /* @__PURE__ */ $.basicType("bool"), [8], 30, true)]
	)
}

export let Config: $.VarRef<ConfigState> = $.varRef(new ConfigState({Indent: " "}, true))

export function __goscript_set_Config(__goscriptValue: ConfigState): void {
	$.assignStruct(Config.value, __goscriptValue)
}

export function NewDefaultConfig(): ConfigState | $.VarRef<ConfigState> | null {
	return new ConfigState({Indent: " "})
}
