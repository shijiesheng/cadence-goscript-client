// Generated file based on fxreflect.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as url from "@goscript/net/url/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as regexp from "@goscript/regexp/index.js"

import * as runtime from "@goscript/runtime/index.js"

import * as strings from "@goscript/strings/index.js"

import * as __goscript_stack from "./stack.gs.ts"
import "@goscript/fmt/index.js"
import "@goscript/net/url/index.js"
import "@goscript/reflect/index.js"
import "@goscript/regexp/index.js"
import "@goscript/runtime/index.js"
import "@goscript/strings/index.js"
import "./stack.gs.ts"

export let vendorRe: regexp.Regexp | $.VarRef<regexp.Regexp> | null = await regexp.MustCompile("^.*?/vendor/")

export function __goscript_set_vendorRe(__goscriptValue: regexp.Regexp | $.VarRef<regexp.Regexp> | null): void {
	vendorRe = __goscriptValue
}

export async function sanitize(_function: string): globalThis.Promise<string> {
	// Use the stdlib to un-escape any package import paths which can happen
	// in the case of the "dot-git" postfix. Seems like a bug in stdlib =/
	{
		let [unescaped, err] = url.QueryUnescape(_function)
		if (err == null) {
			_function = unescaped
		}
	}

	// strip everything prior to the vendor
	return (vendorRe !== null && (vendorRe as any).__isVarRef !== true && (vendorRe as any).__goValue === undefined ? ((vendorRe as any) as regexp.Regexp).ReplaceAllString(_function, "vendor/") : regexp.Regexp.prototype.ReplaceAllString.call(vendorRe, _function, "vendor/"))
}

export async function Caller(): globalThis.Promise<string> {
	return __goscript_stack.Stack_CallerName((await __goscript_stack.CallerStack(1, 0)))
}

export async function FuncName(fn: any): globalThis.Promise<string> {
	let fnV = $.markAsStructValue($.cloneStructValue(reflect.ValueOf(fn)))
	if ($.markAsStructValue($.cloneStructValue(fnV)).Kind() != 19) {
		return fmt.Sprint(fn)
	}

	let _function = runtime.Func.prototype.Name.call($.pointerValueOrNil(runtime.FuncForPC($.markAsStructValue($.cloneStructValue(fnV)).Pointer())))
	return fmt.Sprintf("%s()", await sanitize(_function))
}

export function shouldIgnoreFrame(f: __goscript_stack.Frame): boolean {
	// Treat test files as leafs.
	if (strings.Contains(f.File, "_test.go")) {
		return false
	}

	// The unique, fully-qualified name for all functions begins with
	// "{{importPath}}.". We'll ignore Fx and its subpackages.
	let s = strings.TrimPrefix(f.Function, "go.uber.org/fx")
	if ((($.stringLen(s) > 0) && ($.indexString(s, 0) == 46)) || ($.indexString(s, 0) == 47)) {
		// We want to match,
		//   go.uber.org/fx.Foo
		//   go.uber.org/fx/something.Foo
		// But not, go.uber.org/fxfoo
		return true
	}

	return false
}
