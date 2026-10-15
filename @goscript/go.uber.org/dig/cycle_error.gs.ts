// Generated file based on cycle_error.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as errors from "@goscript/errors/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as io from "@goscript/io/index.js"

import * as digreflect from "@goscript/go.uber.org/dig/internal/digreflect/index.js"

import * as dot from "@goscript/go.uber.org/dig/internal/dot/index.js"

import * as rand from "@goscript/math/rand/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as __goscript__constructor from "./constructor.gs.ts"

import * as __goscript_callback from "./callback.gs.ts"

import * as __goscript_container from "./container.gs.ts"

import * as __goscript_decorate from "./decorate.gs.ts"

import * as __goscript_error from "./error.gs.ts"

import * as __goscript_graph from "./graph.gs.ts"

import * as __goscript_invoke from "./invoke.gs.ts"

import * as __goscript_param from "./param.gs.ts"

import * as __goscript_provide from "./provide.gs.ts"

import * as __goscript_result from "./result.gs.ts"

import * as __goscript_scope from "./scope.gs.ts"

import * as __goscript_visualize from "./visualize.gs.ts"
import "@goscript/bytes/index.js"
import "@goscript/errors/index.js"
import "@goscript/fmt/index.js"
import "@goscript/io/index.js"
import "@goscript/go.uber.org/dig/internal/digreflect/index.js"
import "@goscript/go.uber.org/dig/internal/dot/index.js"
import "@goscript/math/rand/index.js"
import "@goscript/reflect/index.js"
import "./constructor.gs.ts"
import "./callback.gs.ts"
import "./container.gs.ts"
import "./decorate.gs.ts"
import "./error.gs.ts"
import "./graph.gs.ts"
import "./invoke.gs.ts"
import "./param.gs.ts"
import "./provide.gs.ts"
import "./result.gs.ts"
import "./scope.gs.ts"
import "./visualize.gs.ts"

$.registerTypePackagePath("go.uber.org/dig", ["dig.cycleErrPathEntry", "dig.errCycleDetected"])

export class cycleErrPathEntry {
	public get Key(): __goscript_container.key {
		return this._fields.Key
	}

	public set Key(value: __goscript_container.key) {
		this._fields.Key = value
	}

	public get Func(): digreflect.Func | $.VarRef<digreflect.Func> | null {
		return this._fields.Func
	}

	public set Func(value: digreflect.Func | $.VarRef<digreflect.Func> | null) {
		this._fields.Func = value
	}

	public _fields: {
		Key: __goscript_container.key
		Func: digreflect.Func | $.VarRef<digreflect.Func> | null
	}

	constructor(init?: Partial<{Key?: __goscript_container.key, Func?: digreflect.Func | $.VarRef<digreflect.Func> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Key: init?.Key ? init.Key.clone() : new __goscript_container.key(undefined, true),
			Func: init?.Func ?? (null! as digreflect.Func | $.VarRef<digreflect.Func> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): cycleErrPathEntry {
		return new cycleErrPathEntry(this, true)
	}

	public __goscriptAssign(source: cycleErrPathEntry): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.Key, values.Key)
		target.Func = values.Func
	}

	static __typeInfo = $.registerStructType(
		"dig.cycleErrPathEntry",
		() => new cycleErrPathEntry(),
		() => [],
		cycleErrPathEntry,
		() => [/* @__PURE__ */ $.structField("Key", "dig.key", [0], 0, true), /* @__PURE__ */ $.structField("Func", /* @__PURE__ */ $.pointerType("digreflect.Func"), [1], 48, true)]
	)
}

export class errCycleDetected {
	public get Path(): $.Slice<cycleErrPathEntry> {
		return this._fields.Path
	}

	public set Path(value: $.Slice<cycleErrPathEntry>) {
		this._fields.Path = value
	}

	public get scope(): __goscript_scope.Scope | $.VarRef<__goscript_scope.Scope> | null {
		return this._fields.scope
	}

	public set scope(value: __goscript_scope.Scope | $.VarRef<__goscript_scope.Scope> | null) {
		this._fields.scope = value
	}

	public _fields: {
		Path: $.Slice<cycleErrPathEntry>
		scope: __goscript_scope.Scope | $.VarRef<__goscript_scope.Scope> | null
	}

	constructor(init?: Partial<{Path?: $.Slice<cycleErrPathEntry>, scope?: __goscript_scope.Scope | $.VarRef<__goscript_scope.Scope> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Path: init?.Path ?? (null! as $.Slice<cycleErrPathEntry>),
			scope: init?.scope ?? (null! as __goscript_scope.Scope | $.VarRef<__goscript_scope.Scope> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): errCycleDetected {
		return new errCycleDetected(this, true)
	}

	public __goscriptAssign(source: errCycleDetected): void {
		const target = this._fields
		const values = source._fields
		target.Path = values.Path
		target.scope = values.scope
	}

	public async Error(): globalThis.Promise<string> {
		const e = this;
		// We get something like,
		//
		//   [scope "foo"]
		//   func(*bar) *foo provided by "path/to/package".NewFoo (path/to/file.go:42)
		//   	depends on func(*baz) *bar provided by "another/package".NewBar (somefile.go:1)
		//   	depends on func(*foo) baz provided by "somepackage".NewBar (anotherfile.go:2)
		//   	depends on func(*bar) *foo provided by "path/to/package".NewFoo (path/to/file.go:42)
		//
		let b: bytes.Buffer | $.VarRef<bytes.Buffer> | null = new bytes.Buffer()

		{
			let name = $.pointerValue<__goscript_scope.Scope>(e.scope).name
			if ($.stringLen(name) > 0) {
				await fmt.Fprintf($.pointerValueOrNil($.interfaceValue<io.Writer | null>(b, "*bytes.Buffer", /* @__PURE__ */ $.pointerType("bytes.Buffer")))!, "[scope %q]\n", name)
			}
		}
		for (let __goscriptRangeTarget0 = e.Path, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), i = 0; i < __goscriptRangeWindow0.length; i++) {
			let entry = ((__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + i] as cycleErrPathEntry)).clone()
			if (i > 0) {
				bytes.Buffer.prototype.WriteString.call($.pointerValue<bytes.Buffer>(b), "\n\tdepends on ")
			}
			await fmt.Fprintf($.pointerValueOrNil($.interfaceValue<io.Writer | null>(b, "*bytes.Buffer", /* @__PURE__ */ $.pointerType("bytes.Buffer")))!, "%v provided by %v", $.interfaceValue((entry.Key).clone(), "dig.key", "dig.key"), $.interfaceValue(entry.Func, "*digreflect.Func", /* @__PURE__ */ $.pointerType("digreflect.Func")))
		}
		return bytes.Buffer.prototype.String.call($.pointerValue<bytes.Buffer>(b))
	}

	public async Format(w: fmt.State | null, c: number): globalThis.Promise<void> {
		const e = this;
		await __goscript_error.formatError($.interfaceValue<__goscript_error.digError | null>((e).clone(), "dig.errCycleDetected", "dig.errCycleDetected"), w, c)
	}

	public async writeMessage(w: io.Writer | null, v: string): globalThis.Promise<void> {
		const e = this;
		await fmt.Fprint($.pointerValueOrNil(w)!, await e.Error())
	}

	static __typeInfo = $.registerStructType(
		"dig.errCycleDetected",
		() => new errCycleDetected(),
		() => [$.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Format", [["w", "fmt.State"], ["c", /* @__PURE__ */ $.basicType("int32")]]), $.methodSignature("writeMessage", [["w", "io.Writer"], ["v", /* @__PURE__ */ $.basicType("string")]])],
		errCycleDetected,
		() => [/* @__PURE__ */ $.structField("Path", /* @__PURE__ */ $.sliceType("dig.cycleErrPathEntry"), [0], 0, true), /* @__PURE__ */ $.structField("scope", /* @__PURE__ */ $.pointerType("dig.Scope"), [1], 24, false, { pkgPath: "go.uber.org/dig" })]
	)
}

export function IsCycleDetected(err: $.GoError): boolean {
	return errors.As($.pointerValueOrNil(err)!, $.interfaceValue(new errCycleDetected(), "*dig.errCycleDetected", /* @__PURE__ */ $.pointerType("dig.errCycleDetected")))
}
