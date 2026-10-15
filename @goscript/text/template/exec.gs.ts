// Generated file based on exec.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as errors from "@goscript/errors/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as fmtsort from "@goscript/internal/fmtsort/index.js"

import * as io from "@goscript/io/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as runtime from "@goscript/runtime/index.js"

import * as strings from "@goscript/strings/index.js"

import * as parse from "@goscript/text/template/parse/index.js"

import type * as fs from "@goscript/io/fs/index.js"

import type * as iter from "@goscript/iter/index.js"

import * as sync from "@goscript/sync/index.js"

import * as __goscript_funcs from "./funcs.gs.ts"

import * as __goscript_helper from "./helper.gs.ts"

import * as __goscript_option from "./option.gs.ts"

import * as __goscript_template from "./template.gs.ts"
import "@goscript/errors/index.js"
import "@goscript/fmt/index.js"
import "@goscript/internal/fmtsort/index.js"
import "@goscript/io/index.js"
import "@goscript/reflect/index.js"
import "@goscript/runtime/index.js"
import "@goscript/strings/index.js"
import "@goscript/text/template/parse/index.js"
import "@goscript/sync/index.js"
import "./funcs.gs.ts"
import "./helper.gs.ts"
import "./option.gs.ts"
import "./template.gs.ts"

$.registerTypePackagePath("text/template", ["template.state", "template.variable", "template.missingValType", "template.ExecError", "template.writeError"])

export class state {
	public get tmpl(): __goscript_template.Template | $.VarRef<__goscript_template.Template> | null {
		return this._fields.tmpl
	}

	public set tmpl(value: __goscript_template.Template | $.VarRef<__goscript_template.Template> | null) {
		this._fields.tmpl = value
	}

	public get wr(): io.Writer | null {
		return this._fields.wr
	}

	public set wr(value: io.Writer | null) {
		this._fields.wr = value
	}

	public get node(): parse.Node | null {
		return this._fields.node
	}

	public set node(value: parse.Node | null) {
		this._fields.node = value
	}

	public get vars(): $.Slice<variable> {
		return this._fields.vars
	}

	public set vars(value: $.Slice<variable>) {
		this._fields.vars = value
	}

	public get depth(): number {
		return this._fields.depth
	}

	public set depth(value: number) {
		this._fields.depth = value
	}

	public _fields: {
		tmpl: __goscript_template.Template | $.VarRef<__goscript_template.Template> | null
		wr: io.Writer | null
		node: parse.Node | null
		vars: $.Slice<variable>
		depth: number
	}

	constructor(init?: Partial<{tmpl?: __goscript_template.Template | $.VarRef<__goscript_template.Template> | null, wr?: io.Writer | null, node?: parse.Node | null, vars?: $.Slice<variable>, depth?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			tmpl: init?.tmpl ?? (null! as __goscript_template.Template | $.VarRef<__goscript_template.Template> | null),
			wr: init?.wr ?? (null! as io.Writer | null),
			node: init?.node ?? (null! as parse.Node | null),
			vars: init?.vars ?? (null! as $.Slice<variable>),
			depth: init?.depth ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): state {
		return new state(this, true)
	}

	public __goscriptAssign(source: state): void {
		const target = this._fields
		const values = source._fields
		target.tmpl = values.tmpl
		target.wr = $.assignFieldValue(target.wr, values.wr, "io.Writer")
		target.node = $.assignFieldValue(target.node, values.node, "parse.Node")
		target.vars = values.vars
		target.depth = values.depth
	}

	public at(node: parse.Node | null): void {
		let s: state | $.VarRef<state> | null = this;
		$.pointerValue<state>(s).node = node
	}

	public async errorf(format: string, args: $.Slice<any>): globalThis.Promise<void> {
		const s: state | $.VarRef<state> | null = this;
		const s$: state = s == null ? $.pointerTarget<state>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<state>(s)
		let name = doublePercent(__goscript_template.Template.prototype.Name.call((s$ as state).tmpl))
		if ((s$ as state).node == null) {
			format = await fmt.Sprintf("template: %s: %s", name, format)
		} else {
			let [location, context] = await $.pointerValue<parse.Tree>($.pointerValue<__goscript_template.Template>((s$ as state).tmpl).Tree).ErrorContext((s$ as state).node)
			format = await fmt.Sprintf("template: %s: executing %q at <%s>: %s", location, name, doublePercent(context), format)
		}
		$.panic($.interfaceValue((() => { const __goscriptLiteralField0 = __goscript_template.Template.prototype.Name.call((s$ as state).tmpl); const __goscriptLiteralField1 = fmt.Errorf(format, ...(args ?? [])); return new ExecError({Name: __goscriptLiteralField0, Err: __goscriptLiteralField1}, true) })(), "template.ExecError", "template.ExecError"))
	}

	public async evalArg(dot: reflect.Value, typ: reflect.Type | null, n: parse.Node | null): globalThis.Promise<reflect.Value> {
		const s: state | $.VarRef<state> | null = this;
		void (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as state).at(n) : state.prototype.at.call(s, n))
		{
			const __goscriptTypeSwitchValue = n
			switch (true) {
				case $.typeAssert<parse.DotNode | $.VarRef<parse.DotNode> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("parse.DotNode")).ok:
					{
						let arg: parse.DotNode | $.VarRef<parse.DotNode> | null = $.typeAssert<parse.DotNode | $.VarRef<parse.DotNode> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("parse.DotNode")).value
						return (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as state).validateType($.markAsStructValue($.cloneStructValue(dot)), typ) : state.prototype.validateType.call(s, $.markAsStructValue($.cloneStructValue(dot)), typ))
					}
					break
				case $.typeAssert<parse.NilNode | $.VarRef<parse.NilNode> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("parse.NilNode")).ok:
					{
						let arg: parse.NilNode | $.VarRef<parse.NilNode> | null = $.typeAssert<parse.NilNode | $.VarRef<parse.NilNode> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("parse.NilNode")).value
						if (await canBeNil(typ)) {
							return $.markAsStructValue($.cloneStructValue(reflect.Zero($.pointerValueOrNil(typ)!)))
						}
						await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as state).errorf("cannot assign nil to %s", $.arrayToSlice<any>([(typ as any)])) : state.prototype.errorf.call(s, "cannot assign nil to %s", $.arrayToSlice<any>([(typ as any)])))
					}
					break
				case $.typeAssert<parse.FieldNode | $.VarRef<parse.FieldNode> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("parse.FieldNode")).ok:
					{
						let arg: parse.FieldNode | $.VarRef<parse.FieldNode> | null = $.typeAssert<parse.FieldNode | $.VarRef<parse.FieldNode> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("parse.FieldNode")).value
						return state.prototype.validateType.call(s, await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as state).evalFieldNode(dot, arg, $.arrayToSlice<parse.Node | null>([n]), $.markAsStructValue($.cloneStructValue(missingVal))) : state.prototype.evalFieldNode.call(s, dot, arg, $.arrayToSlice<parse.Node | null>([n]), $.markAsStructValue($.cloneStructValue(missingVal)))), typ)
					}
					break
				case $.typeAssert<parse.VariableNode | $.VarRef<parse.VariableNode> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("parse.VariableNode")).ok:
					{
						let arg: parse.VariableNode | $.VarRef<parse.VariableNode> | null = $.typeAssert<parse.VariableNode | $.VarRef<parse.VariableNode> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("parse.VariableNode")).value
						return state.prototype.validateType.call(s, await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as state).evalVariableNode(dot, arg, null, $.markAsStructValue($.cloneStructValue(missingVal))) : state.prototype.evalVariableNode.call(s, dot, arg, null, $.markAsStructValue($.cloneStructValue(missingVal)))), typ)
					}
					break
				case $.typeAssert<parse.PipeNode | $.VarRef<parse.PipeNode> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("parse.PipeNode")).ok:
					{
						let arg: parse.PipeNode | $.VarRef<parse.PipeNode> | null = $.typeAssert<parse.PipeNode | $.VarRef<parse.PipeNode> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("parse.PipeNode")).value
						return state.prototype.validateType.call(s, await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as state).evalPipeline(dot, arg) : state.prototype.evalPipeline.call(s, dot, arg)), typ)
					}
					break
				case $.typeAssert<parse.IdentifierNode | $.VarRef<parse.IdentifierNode> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("parse.IdentifierNode")).ok:
					{
						let arg: parse.IdentifierNode | $.VarRef<parse.IdentifierNode> | null = $.typeAssert<parse.IdentifierNode | $.VarRef<parse.IdentifierNode> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("parse.IdentifierNode")).value
						return state.prototype.validateType.call(s, await state.prototype.evalFunction.call(s, dot, arg, $.interfaceValue<parse.Node | null>(arg, "*parse.IdentifierNode", /* @__PURE__ */ $.pointerType("parse.IdentifierNode")), null, $.markAsStructValue($.cloneStructValue(missingVal))), typ)
					}
					break
				case $.typeAssert<parse.ChainNode | $.VarRef<parse.ChainNode> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("parse.ChainNode")).ok:
					{
						let arg: parse.ChainNode | $.VarRef<parse.ChainNode> | null = $.typeAssert<parse.ChainNode | $.VarRef<parse.ChainNode> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("parse.ChainNode")).value
						return state.prototype.validateType.call(s, await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as state).evalChainNode(dot, arg, null, $.markAsStructValue($.cloneStructValue(missingVal))) : state.prototype.evalChainNode.call(s, dot, arg, null, $.markAsStructValue($.cloneStructValue(missingVal)))), typ)
					}
					break
			}
		}
		switch ((__goscriptAwait = (typ !== null && (typ as any).__isVarRef !== true && (typ as any).__goValue === undefined ? (typ as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(typ)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
			case reflect.Bool:
			{
				return (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as state).evalBool(typ, n) : state.prototype.evalBool.call(s, typ, n))
				break
			}
			case reflect.Complex64:
			case reflect.Complex128:
			{
				return (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as state).evalComplex(typ, n) : state.prototype.evalComplex.call(s, typ, n))
				break
			}
			case reflect.Float32:
			case reflect.Float64:
			{
				return (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as state).evalFloat(typ, n) : state.prototype.evalFloat.call(s, typ, n))
				break
			}
			case reflect.Int:
			case reflect.Int8:
			case reflect.Int16:
			case reflect.Int32:
			case reflect.Int64:
			{
				return (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as state).evalInteger(typ, n) : state.prototype.evalInteger.call(s, typ, n))
				break
			}
			case reflect.Interface:
			{
				if ((__goscriptAwait = (typ !== null && (typ as any).__isVarRef !== true && (typ as any).__goValue === undefined ? (typ as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(typ)).NumMethod(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 0) {
					return (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as state).evalEmptyInterface(dot, n) : state.prototype.evalEmptyInterface.call(s, dot, n))
				}
				break
			}
			case reflect.Struct:
			{
				if ($.comparableEqual(typ, reflectValueType)) {
					return $.markAsStructValue($.cloneStructValue(reflect.ValueOf($.interfaceValue(await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as state).evalEmptyInterface(dot, n) : state.prototype.evalEmptyInterface.call(s, dot, n)), "reflect.Value", "reflect.Value"))))
				}
				break
			}
			case reflect.String:
			{
				return (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as state).evalString(typ, n) : state.prototype.evalString.call(s, typ, n))
				break
			}
			case reflect.Uint:
			case reflect.Uint8:
			case reflect.Uint16:
			case reflect.Uint32:
			case reflect.Uint64:
			case reflect.Uintptr:
			{
				return (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as state).evalUnsignedInteger(typ, n) : state.prototype.evalUnsignedInteger.call(s, typ, n))
				break
			}
		}
		await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as state).errorf("can't handle %s for arg of type %s", $.arrayToSlice<any>([(n as any), (typ as any)])) : state.prototype.errorf.call(s, "can't handle %s for arg of type %s", $.arrayToSlice<any>([(n as any), (typ as any)])))
		$.panic("not reached")
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async evalBool(typ: reflect.Type | null, n: parse.Node | null): globalThis.Promise<reflect.Value> {
		const s: state | $.VarRef<state> | null = this;
		void (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as state).at(n) : state.prototype.at.call(s, n))
		let __goscriptShadow0 = n
		{
			let __goscriptTuple0: any = $.typeAssertTuple<parse.BoolNode | $.VarRef<parse.BoolNode> | null>(__goscriptShadow0, /* @__PURE__ */ $.pointerType("parse.BoolNode"))
			let __goscriptShadow1: parse.BoolNode | $.VarRef<parse.BoolNode> | null = __goscriptTuple0[0]
			let ok = __goscriptTuple0[1]
			if (ok) {
				let value = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(reflect.New($.pointerValueOrNil(typ)!))).Elem()))
				$.markAsStructValue($.cloneStructValue(value)).SetBool($.pointerValue<parse.BoolNode>(__goscriptShadow1).True)
				return $.markAsStructValue($.cloneStructValue(value))
			}
		}
		await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as state).errorf("expected bool; found %s", $.arrayToSlice<any>([(n as any)])) : state.prototype.errorf.call(s, "expected bool; found %s", $.arrayToSlice<any>([(n as any)])))
		$.panic("not reached")
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async evalCall(dot: reflect.Value, fun: reflect.Value, isBuiltin: boolean, node: parse.Node | null, name: string, args: $.Slice<parse.Node | null>, final: reflect.Value): globalThis.Promise<reflect.Value> {
		const s: state | $.VarRef<state> | null = this;
		if (args != null) {
			args = $.goSlice(args, 1, undefined)
		}
		let typ = $.markAsStructValue($.cloneStructValue(fun)).Type()
		let numIn = $.sliceLen(args)
		if (!isMissing(final)) {
			numIn++
		}
		let numFixed = $.sliceLen(args)
		if ((__goscriptAwait = (typ !== null && (typ as any).__isVarRef !== true && (typ as any).__goValue === undefined ? (typ as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(typ)).IsVariadic(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
			numFixed = (__goscriptAwait = (typ !== null && (typ as any).__isVarRef !== true && (typ as any).__goValue === undefined ? (typ as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(typ)).NumIn(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) - 1
			if (numIn < numFixed) {
				await state.prototype.errorf.call(s, "wrong number of args for %s: want at least %d got %d", $.arrayToSlice<any>([name, $.basicInterfaceValue((__goscriptAwait = (typ !== null && (typ as any).__isVarRef !== true && (typ as any).__goValue === undefined ? (typ as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(typ)).NumIn(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) - 1, "int"), $.basicInterfaceValue($.sliceLen(args), "int")]))
			}
		} else {
			if (numIn != (__goscriptAwait = (typ !== null && (typ as any).__isVarRef !== true && (typ as any).__goValue === undefined ? (typ as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(typ)).NumIn(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
				await state.prototype.errorf.call(s, "wrong number of args for %s: want %d got %d", $.arrayToSlice<any>([name, $.basicInterfaceValue((__goscriptAwait = (typ !== null && (typ as any).__isVarRef !== true && (typ as any).__goValue === undefined ? (typ as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(typ)).NumIn(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), "int"), $.basicInterfaceValue(numIn, "int")]))
			}
		}
		{
			let err = await __goscript_funcs.goodFunc(name, typ)
			if (err != null) {
				await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as state).errorf("%v", $.arrayToSlice<any>([(err as any)])) : state.prototype.errorf.call(s, "%v", $.arrayToSlice<any>([(err as any)])))
			}
		}

		let unwrap: ((v: reflect.Value) => reflect.Value | globalThis.Promise<reflect.Value>) | null = $.functionValue((v: reflect.Value): reflect.Value => {
			if ($.comparableEqual($.markAsStructValue($.cloneStructValue(v)).Type(), reflectValueType)) {
				v = $.assignStruct(v, $.mustTypeAssert<reflect.Value>($.markAsStructValue($.cloneStructValue(v)).Interface(), "reflect.Value"))
			}
			return $.markAsStructValue($.cloneStructValue(v))
		}, ({ kind: $.TypeKind.Function, params: ["reflect.Value"], results: ["reflect.Value"] } as $.FunctionTypeInfo))

		// Special case for builtin and/or, which short-circuit.
		if (isBuiltin && (($.stringEqual(name, "and")) || ($.stringEqual(name, "or")))) {
			let argType = (__goscriptAwait = (typ !== null && (typ as any).__isVarRef !== true && (typ as any).__goValue === undefined ? (typ as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(typ)).In(0), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			let v: reflect.Value = $.markAsStructValue(new reflect.Value())
			for (let __goscriptRangeTarget0 = args, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
				let arg = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as parse.Node | null)
				v = $.assignStruct(v, $.mustTypeAssert<reflect.Value>($.markAsStructValue($.cloneStructValue((await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as state).evalArg(dot, argType, arg) : state.prototype.evalArg.call(s, dot, argType, arg))))).Interface(), "reflect.Value"))
				if (__goscript_funcs.truth(v) == ($.stringEqual(name, "or"))) {
					// This value was already unwrapped
					// by the .Interface().(reflect.Value).
					return $.markAsStructValue($.cloneStructValue(v))
				}
			}
			if (!$.markAsStructValue($.cloneStructValue(final)).Equal($.markAsStructValue($.cloneStructValue(missingVal)))) {
				// The last argument to and/or is coming from
				// the pipeline. We didn't short circuit on an earlier
				// argument, so we are going to return this one.
				// We don't have to evaluate final, but we do
				// have to check its type. Then, since we are
				// going to return it, we have to unwrap it.
				v = $.assignStruct(v, ((__goscriptAwait = unwrap!(await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as state).validateType($.markAsStructValue($.cloneStructValue(final)), argType) : state.prototype.validateType.call(s, $.markAsStructValue($.cloneStructValue(final)), argType))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as reflect.Value))
			}
			return $.markAsStructValue($.cloneStructValue(v))
		}

		// Build the arg list.
		let argv: $.Slice<reflect.Value> = $.makeSlice<reflect.Value>(numIn, undefined, undefined, () => $.markAsStructValue(new reflect.Value()))
		// Args must be evaluated. Fixed args first.
		let i = 0
		for (let __goscriptSliceWindow0 = $.sliceRange(argv), __goscriptSliceWindow1 = $.sliceRange(args); (i < numFixed) && (i < __goscriptSliceWindow1.length); i++) {
			$.assignStruct((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)], await state.prototype.evalArg.call(s, dot, (__goscriptAwait = (typ !== null && (typ as any).__isVarRef !== true && (typ as any).__goValue === undefined ? (typ as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(typ)).In(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), ((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, i)] as parse.Node | null)))
		}
		// Now the ... args.
		if ((__goscriptAwait = (typ !== null && (typ as any).__isVarRef !== true && (typ as any).__goValue === undefined ? (typ as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(typ)).IsVariadic(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
			let argType = (__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>((__goscriptAwait = (typ !== null && (typ as any).__isVarRef !== true && (typ as any).__goValue === undefined ? (typ as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(typ)).In((__goscriptAwait = (typ !== null && (typ as any).__isVarRef !== true && (typ as any).__goValue === undefined ? (typ as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(typ)).NumIn(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) - 1), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			for (let __goscriptSliceWindow2 = $.sliceRange(argv), __goscriptSliceWindow3 = $.sliceRange(args); i < __goscriptSliceWindow3.length; i++) {
				$.assignStruct((__goscriptSliceWindow2.backing as any[])[$.windowSlot(__goscriptSliceWindow2, i)], await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as state).evalArg(dot, argType, ((__goscriptSliceWindow3.backing as any[])[$.windowSlot(__goscriptSliceWindow3, i)] as parse.Node | null)) : state.prototype.evalArg.call(s, dot, argType, ((__goscriptSliceWindow3.backing as any[])[$.windowSlot(__goscriptSliceWindow3, i)] as parse.Node | null))))
			}
		}
		// Add final value if necessary.
		if (!isMissing(final)) {
			let t: reflect.Type | null = (__goscriptAwait = (typ !== null && (typ as any).__isVarRef !== true && (typ as any).__goValue === undefined ? (typ as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(typ)).In((__goscriptAwait = (typ !== null && (typ as any).__isVarRef !== true && (typ as any).__goValue === undefined ? (typ as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(typ)).NumIn(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) - 1), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if ((__goscriptAwait = (typ !== null && (typ as any).__isVarRef !== true && (typ as any).__goValue === undefined ? (typ as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(typ)).IsVariadic(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
				if ((numIn - 1) < numFixed) {
					// The added final argument corresponds to a fixed parameter of the function.
					// Validate against the type of the actual parameter.
					t = (__goscriptAwait = (typ !== null && (typ as any).__isVarRef !== true && (typ as any).__goValue === undefined ? (typ as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(typ)).In(numIn - 1), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				} else {
					// The added final argument corresponds to the variadic part.
					// Validate against the type of the elements of the variadic slice.
					t = (__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				}
			}
			$.assignStruct($.sliceElems(argv!)[$.sliceSlot(argv!, i)], await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as state).validateType($.markAsStructValue($.cloneStructValue(final)), t) : state.prototype.validateType.call(s, $.markAsStructValue($.cloneStructValue(final)), t)))
		}

		// Special case for the "call" builtin.
		// Insert the name of the callee function as the first argument.
		if (isBuiltin && ($.stringEqual(name, "call"))) {
			let calleeName: string = ""
			if ($.sliceLen(args) == 0) {
				// final must be present or we would have errored out above.
				calleeName = $.markAsStructValue($.cloneStructValue(final)).String()
			} else {
				calleeName = (__goscriptAwait = $.pointerValue<Exclude<parse.Node, null>>($.arrayIndex(args!, 0)).String(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
			argv = $.appendSlice($.arrayToSlice<reflect.Value>([$.markAsStructValue($.cloneStructValue(reflect.ValueOf(calleeName)))]), argv)
			fun = $.assignStruct(fun, reflect.ValueOf($.interfaceValue($.goFunc(__goscript_funcs.call, "text/template.call"), "func(name string, fn reflect.Value, args ...reflect.Value) (reflect.Value, error)", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("string"), "reflect.Value", /* @__PURE__ */ $.sliceType("reflect.Value")], results: ["reflect.Value", "error"], isVariadic: true } as $.FunctionTypeInfo))))
		}

		let [v, err] = await __goscript_funcs.safeCall(fun, argv)
		// If we have an error that is not nil, stop execution and return that
		// error to the caller.
		if (err != null) {
			void (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as state).at(node) : state.prototype.at.call(s, node))
			await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as state).errorf("error calling %s: %w", $.arrayToSlice<any>([name, (err as any)])) : state.prototype.errorf.call(s, "error calling %s: %w", $.arrayToSlice<any>([name, (err as any)])))
		}
		return $.markAsStructValue($.cloneStructValue(((__goscriptAwait = unwrap!($.markAsStructValue($.cloneStructValue(v))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as reflect.Value)))
	}

	public async evalChainNode(dot: reflect.Value, chain: parse.ChainNode | $.VarRef<parse.ChainNode> | null, args: $.Slice<parse.Node | null>, final: reflect.Value): globalThis.Promise<reflect.Value> {
		const s: state | $.VarRef<state> | null = this;
		const chain$: parse.ChainNode = chain == null ? $.pointerTarget<parse.ChainNode>(chain) : (chain as any).__isVarRef === true ? (chain as any).value : (chain as any).__goValue === undefined ? (chain as any) : $.pointerTarget<parse.ChainNode>(chain)
		void (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as state).at($.interfaceValue<parse.Node | null>(chain, "*parse.ChainNode", /* @__PURE__ */ $.pointerType("parse.ChainNode"))) : state.prototype.at.call(s, $.interfaceValue<parse.Node | null>(chain, "*parse.ChainNode", /* @__PURE__ */ $.pointerType("parse.ChainNode"))))
		if ($.sliceLen((chain$ as parse.ChainNode).Field) == 0) {
			await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as state).errorf("internal error: no fields in evalChainNode", null) : state.prototype.errorf.call(s, "internal error: no fields in evalChainNode", null))
		}
		if ((__goscriptAwait = $.pointerValue<Exclude<parse.Node, null>>((chain$ as parse.ChainNode).Node).Type(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 12) {
			await state.prototype.errorf.call(s, "indirection through explicit nil in %s", $.arrayToSlice<any>([$.interfaceValue(chain, "*parse.ChainNode", /* @__PURE__ */ $.pointerType("parse.ChainNode"))]))
		}
		// (pipe).Field1.Field2 has pipe as .Node, fields as .Field. Eval the pipeline, then the fields.
		let pipe = await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as state).evalArg(dot, null, (chain$ as parse.ChainNode).Node) : state.prototype.evalArg.call(s, dot, null, (chain$ as parse.ChainNode).Node))
		return state.prototype.evalFieldChain.call(s, dot, $.markAsStructValue($.cloneStructValue(pipe)), $.interfaceValue<parse.Node | null>(chain, "*parse.ChainNode", /* @__PURE__ */ $.pointerType("parse.ChainNode")), (chain$ as parse.ChainNode).Field, args, final)
	}

	public async evalCommand(dot: reflect.Value, cmd: parse.CommandNode | $.VarRef<parse.CommandNode> | null, final: reflect.Value): globalThis.Promise<reflect.Value> {
		const s: state | $.VarRef<state> | null = this;
		const cmd$: parse.CommandNode = cmd == null ? $.pointerTarget<parse.CommandNode>(cmd) : (cmd as any).__isVarRef === true ? (cmd as any).value : (cmd as any).__goValue === undefined ? (cmd as any) : $.pointerTarget<parse.CommandNode>(cmd)
		let firstWord = $.arrayIndex((cmd$ as parse.CommandNode).Args!, 0)
		{
			const __goscriptTypeSwitchValue = firstWord
			switch (true) {
				case $.typeAssert<parse.FieldNode | $.VarRef<parse.FieldNode> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("parse.FieldNode")).ok:
					{
						let n: parse.FieldNode | $.VarRef<parse.FieldNode> | null = $.typeAssert<parse.FieldNode | $.VarRef<parse.FieldNode> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("parse.FieldNode")).value
						return (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as state).evalFieldNode(dot, n, (cmd$ as parse.CommandNode).Args, final) : state.prototype.evalFieldNode.call(s, dot, n, (cmd$ as parse.CommandNode).Args, final))
					}
					break
				case $.typeAssert<parse.ChainNode | $.VarRef<parse.ChainNode> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("parse.ChainNode")).ok:
					{
						let n: parse.ChainNode | $.VarRef<parse.ChainNode> | null = $.typeAssert<parse.ChainNode | $.VarRef<parse.ChainNode> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("parse.ChainNode")).value
						return (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as state).evalChainNode(dot, n, (cmd$ as parse.CommandNode).Args, final) : state.prototype.evalChainNode.call(s, dot, n, (cmd$ as parse.CommandNode).Args, final))
					}
					break
				case $.typeAssert<parse.IdentifierNode | $.VarRef<parse.IdentifierNode> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("parse.IdentifierNode")).ok:
					{
						let n: parse.IdentifierNode | $.VarRef<parse.IdentifierNode> | null = $.typeAssert<parse.IdentifierNode | $.VarRef<parse.IdentifierNode> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("parse.IdentifierNode")).value
						return state.prototype.evalFunction.call(s, dot, n, $.interfaceValue<parse.Node | null>(cmd, "*parse.CommandNode", /* @__PURE__ */ $.pointerType("parse.CommandNode")), (cmd$ as parse.CommandNode).Args, final)
					}
					break
				case $.typeAssert<parse.PipeNode | $.VarRef<parse.PipeNode> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("parse.PipeNode")).ok:
					{
						let n: parse.PipeNode | $.VarRef<parse.PipeNode> | null = $.typeAssert<parse.PipeNode | $.VarRef<parse.PipeNode> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("parse.PipeNode")).value
						await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as state).notAFunction((cmd$ as parse.CommandNode).Args, final) : state.prototype.notAFunction.call(s, (cmd$ as parse.CommandNode).Args, final))
						return (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as state).evalPipeline(dot, n) : state.prototype.evalPipeline.call(s, dot, n))
					}
					break
				case $.typeAssert<parse.VariableNode | $.VarRef<parse.VariableNode> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("parse.VariableNode")).ok:
					{
						let n: parse.VariableNode | $.VarRef<parse.VariableNode> | null = $.typeAssert<parse.VariableNode | $.VarRef<parse.VariableNode> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("parse.VariableNode")).value
						return (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as state).evalVariableNode(dot, n, (cmd$ as parse.CommandNode).Args, final) : state.prototype.evalVariableNode.call(s, dot, n, (cmd$ as parse.CommandNode).Args, final))
					}
					break
			}
		}
		void (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as state).at(firstWord) : state.prototype.at.call(s, firstWord))
		await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as state).notAFunction((cmd$ as parse.CommandNode).Args, final) : state.prototype.notAFunction.call(s, (cmd$ as parse.CommandNode).Args, final))
		{
			const __goscriptTypeSwitchValue = firstWord
			switch (true) {
				case $.typeAssert<parse.BoolNode | $.VarRef<parse.BoolNode> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("parse.BoolNode")).ok:
					{
						let word: parse.BoolNode | $.VarRef<parse.BoolNode> | null = $.typeAssert<parse.BoolNode | $.VarRef<parse.BoolNode> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("parse.BoolNode")).value
						return $.markAsStructValue($.cloneStructValue(reflect.ValueOf($.pointerValue<parse.BoolNode>(word).True)))
					}
					break
				case $.typeAssert<parse.DotNode | $.VarRef<parse.DotNode> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("parse.DotNode")).ok:
					{
						let word: parse.DotNode | $.VarRef<parse.DotNode> | null = $.typeAssert<parse.DotNode | $.VarRef<parse.DotNode> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("parse.DotNode")).value
						return $.markAsStructValue($.cloneStructValue(dot))
					}
					break
				case $.typeAssert<parse.NilNode | $.VarRef<parse.NilNode> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("parse.NilNode")).ok:
					{
						let word: parse.NilNode | $.VarRef<parse.NilNode> | null = $.typeAssert<parse.NilNode | $.VarRef<parse.NilNode> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("parse.NilNode")).value
						await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as state).errorf("nil is not a command", null) : state.prototype.errorf.call(s, "nil is not a command", null))
					}
					break
				case $.typeAssert<parse.NumberNode | $.VarRef<parse.NumberNode> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("parse.NumberNode")).ok:
					{
						let word: parse.NumberNode | $.VarRef<parse.NumberNode> | null = $.typeAssert<parse.NumberNode | $.VarRef<parse.NumberNode> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("parse.NumberNode")).value
						return (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as state).idealConstant(word) : state.prototype.idealConstant.call(s, word))
					}
					break
				case $.typeAssert<parse.StringNode | $.VarRef<parse.StringNode> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("parse.StringNode")).ok:
					{
						let word: parse.StringNode | $.VarRef<parse.StringNode> | null = $.typeAssert<parse.StringNode | $.VarRef<parse.StringNode> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("parse.StringNode")).value
						return $.markAsStructValue($.cloneStructValue(reflect.ValueOf($.pointerValue<parse.StringNode>(word).Text)))
					}
					break
			}
		}
		await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as state).errorf("can't evaluate command %q", $.arrayToSlice<any>([(firstWord as any)])) : state.prototype.errorf.call(s, "can't evaluate command %q", $.arrayToSlice<any>([(firstWord as any)])))
		$.panic("not reached")
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async evalComplex(typ: reflect.Type | null, n: parse.Node | null): globalThis.Promise<reflect.Value> {
		const s: state | $.VarRef<state> | null = this;
		let __goscriptShadow2 = n
		{
			let __goscriptTuple1: any = $.typeAssertTuple<parse.NumberNode | $.VarRef<parse.NumberNode> | null>(__goscriptShadow2, /* @__PURE__ */ $.pointerType("parse.NumberNode"))
			let __goscriptShadow3: parse.NumberNode | $.VarRef<parse.NumberNode> | null = __goscriptTuple1[0]
			let ok = __goscriptTuple1[1]
			if (ok && $.pointerValue<parse.NumberNode>(__goscriptShadow3).IsComplex) {
				let value = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(reflect.New($.pointerValueOrNil(typ)!))).Elem()))
				$.markAsStructValue($.cloneStructValue(value)).SetComplex($.pointerValue<parse.NumberNode>(__goscriptShadow3).Complex128)
				return $.markAsStructValue($.cloneStructValue(value))
			}
		}
		await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as state).errorf("expected complex; found %s", $.arrayToSlice<any>([(n as any)])) : state.prototype.errorf.call(s, "expected complex; found %s", $.arrayToSlice<any>([(n as any)])))
		$.panic("not reached")
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async evalEmptyInterface(dot: reflect.Value, n: parse.Node | null): globalThis.Promise<reflect.Value> {
		const s: state | $.VarRef<state> | null = this;
		void (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as state).at(n) : state.prototype.at.call(s, n))
		{
			const __goscriptTypeSwitchValue = n
			switch (true) {
				case $.typeAssert<parse.BoolNode | $.VarRef<parse.BoolNode> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("parse.BoolNode")).ok:
					{
						let n: parse.BoolNode | $.VarRef<parse.BoolNode> | null = $.typeAssert<parse.BoolNode | $.VarRef<parse.BoolNode> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("parse.BoolNode")).value
						return $.markAsStructValue($.cloneStructValue(reflect.ValueOf($.pointerValue<parse.BoolNode>(n).True)))
					}
					break
				case $.typeAssert<parse.DotNode | $.VarRef<parse.DotNode> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("parse.DotNode")).ok:
					{
						let n: parse.DotNode | $.VarRef<parse.DotNode> | null = $.typeAssert<parse.DotNode | $.VarRef<parse.DotNode> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("parse.DotNode")).value
						return $.markAsStructValue($.cloneStructValue(dot))
					}
					break
				case $.typeAssert<parse.FieldNode | $.VarRef<parse.FieldNode> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("parse.FieldNode")).ok:
					{
						let n: parse.FieldNode | $.VarRef<parse.FieldNode> | null = $.typeAssert<parse.FieldNode | $.VarRef<parse.FieldNode> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("parse.FieldNode")).value
						return (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as state).evalFieldNode(dot, n, null, $.markAsStructValue($.cloneStructValue(missingVal))) : state.prototype.evalFieldNode.call(s, dot, n, null, $.markAsStructValue($.cloneStructValue(missingVal))))
					}
					break
				case $.typeAssert<parse.IdentifierNode | $.VarRef<parse.IdentifierNode> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("parse.IdentifierNode")).ok:
					{
						let n: parse.IdentifierNode | $.VarRef<parse.IdentifierNode> | null = $.typeAssert<parse.IdentifierNode | $.VarRef<parse.IdentifierNode> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("parse.IdentifierNode")).value
						return state.prototype.evalFunction.call(s, dot, n, $.interfaceValue<parse.Node | null>(n, "*parse.IdentifierNode", /* @__PURE__ */ $.pointerType("parse.IdentifierNode")), null, $.markAsStructValue($.cloneStructValue(missingVal)))
					}
					break
				case $.typeAssert<parse.NilNode | $.VarRef<parse.NilNode> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("parse.NilNode")).ok:
					{
						let n: parse.NilNode | $.VarRef<parse.NilNode> | null = $.typeAssert<parse.NilNode | $.VarRef<parse.NilNode> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("parse.NilNode")).value
						await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as state).errorf("evalEmptyInterface: nil (can't happen)", null) : state.prototype.errorf.call(s, "evalEmptyInterface: nil (can't happen)", null))
					}
					break
				case $.typeAssert<parse.NumberNode | $.VarRef<parse.NumberNode> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("parse.NumberNode")).ok:
					{
						let n: parse.NumberNode | $.VarRef<parse.NumberNode> | null = $.typeAssert<parse.NumberNode | $.VarRef<parse.NumberNode> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("parse.NumberNode")).value
						return (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as state).idealConstant(n) : state.prototype.idealConstant.call(s, n))
					}
					break
				case $.typeAssert<parse.StringNode | $.VarRef<parse.StringNode> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("parse.StringNode")).ok:
					{
						let n: parse.StringNode | $.VarRef<parse.StringNode> | null = $.typeAssert<parse.StringNode | $.VarRef<parse.StringNode> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("parse.StringNode")).value
						return $.markAsStructValue($.cloneStructValue(reflect.ValueOf($.pointerValue<parse.StringNode>(n).Text)))
					}
					break
				case $.typeAssert<parse.VariableNode | $.VarRef<parse.VariableNode> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("parse.VariableNode")).ok:
					{
						let n: parse.VariableNode | $.VarRef<parse.VariableNode> | null = $.typeAssert<parse.VariableNode | $.VarRef<parse.VariableNode> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("parse.VariableNode")).value
						return (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as state).evalVariableNode(dot, n, null, $.markAsStructValue($.cloneStructValue(missingVal))) : state.prototype.evalVariableNode.call(s, dot, n, null, $.markAsStructValue($.cloneStructValue(missingVal))))
					}
					break
				case $.typeAssert<parse.PipeNode | $.VarRef<parse.PipeNode> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("parse.PipeNode")).ok:
					{
						let n: parse.PipeNode | $.VarRef<parse.PipeNode> | null = $.typeAssert<parse.PipeNode | $.VarRef<parse.PipeNode> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("parse.PipeNode")).value
						return (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as state).evalPipeline(dot, n) : state.prototype.evalPipeline.call(s, dot, n))
					}
					break
			}
		}
		await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as state).errorf("can't handle assignment of %s to empty interface argument", $.arrayToSlice<any>([(n as any)])) : state.prototype.errorf.call(s, "can't handle assignment of %s to empty interface argument", $.arrayToSlice<any>([(n as any)])))
		$.panic("not reached")
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async evalField(dot: reflect.Value, fieldName: string, node: parse.Node | null, args: $.Slice<parse.Node | null>, final: reflect.Value, receiver: reflect.Value): globalThis.Promise<reflect.Value> {
		const s: state | $.VarRef<state> | null = this;
		const s$: state = s == null ? $.pointerTarget<state>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<state>(s)
		if (!$.markAsStructValue($.cloneStructValue(receiver)).IsValid()) {
			if ($.pointerValue<__goscript_template.common>($.pointerValue<__goscript_template.Template>((s$ as state).tmpl).common).option.missingKey == 2) {
				await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as state).errorf("nil data; no entry for key %q", $.arrayToSlice<any>([fieldName])) : state.prototype.errorf.call(s, "nil data; no entry for key %q", $.arrayToSlice<any>([fieldName])))
			}
			return $.markAsStructValue($.cloneStructValue(zero))
		}
		let typ = $.markAsStructValue($.cloneStructValue(receiver)).Type()
		let __goscriptTuple2: any = indirect($.markAsStructValue($.cloneStructValue(receiver)))
		receiver = $.assignStruct(receiver, __goscriptTuple2[0])
		let isNil = __goscriptTuple2[1]
		if (($.markAsStructValue($.cloneStructValue(receiver)).Kind() == 20) && isNil) {
			// Calling a method on a nil interface can't work. The
			// MethodByName method call below would panic.
			await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as state).errorf("nil pointer evaluating %s.%s", $.arrayToSlice<any>([(typ as any), fieldName])) : state.prototype.errorf.call(s, "nil pointer evaluating %s.%s", $.arrayToSlice<any>([(typ as any), fieldName])))
			return $.markAsStructValue($.cloneStructValue(zero))
		}

		// Unless it's an interface, need to get to a value of type *T to guarantee
		// we see all methods of T and *T.
		let ptr = $.markAsStructValue($.cloneStructValue(receiver))
		if ((($.markAsStructValue($.cloneStructValue(ptr)).Kind() != 20) && ($.markAsStructValue($.cloneStructValue(ptr)).Kind() != 22)) && $.markAsStructValue($.cloneStructValue(ptr)).CanAddr()) {
			ptr = $.assignStruct(ptr, $.markAsStructValue($.cloneStructValue(ptr)).Addr())
		}
		{
			let method = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(ptr)).MethodByName(fieldName)))
			if ($.markAsStructValue($.cloneStructValue(method)).IsValid()) {
				return (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as state).evalCall(dot, $.markAsStructValue($.cloneStructValue(method)), false, node, fieldName, args, final) : state.prototype.evalCall.call(s, dot, $.markAsStructValue($.cloneStructValue(method)), false, node, fieldName, args, final))
			}
		}
		let hasArgs = ($.sliceLen(args) > 1) || !isMissing(final)
		// It's not a method; must be a field of a struct or an element of a map.
		switch ($.markAsStructValue($.cloneStructValue(receiver)).Kind()) {
			case reflect.Struct:
			{
				let [tField, ok] = await $.pointerValue<Exclude<reflect.Type, null>>($.markAsStructValue($.cloneStructValue(receiver)).Type()).FieldByName(fieldName)
				if (ok) {
					let [field, err] = $.markAsStructValue($.cloneStructValue(receiver)).FieldByIndexErr(tField.Index)
					if (!$.markAsStructValue($.cloneStructValue(tField)).IsExported()) {
						await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as state).errorf("%s is an unexported field of struct type %s", $.arrayToSlice<any>([fieldName, (typ as any)])) : state.prototype.errorf.call(s, "%s is an unexported field of struct type %s", $.arrayToSlice<any>([fieldName, (typ as any)])))
					}
					if (err != null) {
						await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as state).errorf("%v", $.arrayToSlice<any>([(err as any)])) : state.prototype.errorf.call(s, "%v", $.arrayToSlice<any>([(err as any)])))
					}
					// If it's a function, we must call it.
					if (hasArgs) {
						await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as state).errorf("%s has arguments but cannot be invoked as function", $.arrayToSlice<any>([fieldName])) : state.prototype.errorf.call(s, "%s has arguments but cannot be invoked as function", $.arrayToSlice<any>([fieldName])))
					}
					return $.markAsStructValue($.cloneStructValue(field))
				}
				break
			}
			case reflect.Map:
			{
				let nameVal = $.markAsStructValue($.cloneStructValue(reflect.ValueOf(fieldName)))
				if ((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>($.markAsStructValue($.cloneStructValue(nameVal)).Type()).AssignableTo($.pointerValueOrNil((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>($.markAsStructValue($.cloneStructValue(receiver)).Type()).Key(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))!), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
					if (hasArgs) {
						await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as state).errorf("%s is not a method but has arguments", $.arrayToSlice<any>([fieldName])) : state.prototype.errorf.call(s, "%s is not a method but has arguments", $.arrayToSlice<any>([fieldName])))
					}
					let result = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(receiver)).MapIndex($.markAsStructValue($.cloneStructValue(nameVal)))))
					if (!$.markAsStructValue($.cloneStructValue(result)).IsValid()) {
						switch ($.pointerValue<__goscript_template.common>($.pointerValue<__goscript_template.Template>((s$ as state).tmpl).common).option.missingKey) {
							case 0:
							{
								break
							}
							case 1:
							{
								result = $.assignStruct(result, reflect.Zero($.pointerValueOrNil((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>($.markAsStructValue($.cloneStructValue(receiver)).Type()).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))!))
								break
							}
							case 2:
							{
								await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as state).errorf("map has no entry for key %q", $.arrayToSlice<any>([fieldName])) : state.prototype.errorf.call(s, "map has no entry for key %q", $.arrayToSlice<any>([fieldName])))
								break
							}
						}
					}
					return $.markAsStructValue($.cloneStructValue(result))
				}
				break
			}
			case reflect.Pointer:
			{
				let etyp = (__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>($.markAsStructValue($.cloneStructValue(receiver)).Type()).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if ((__goscriptAwait = (etyp !== null && (etyp as any).__isVarRef !== true && (etyp as any).__goValue === undefined ? (etyp as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(etyp)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 25) {
					{
						let [, ok] = await (etyp !== null && (etyp as any).__isVarRef !== true && (etyp as any).__goValue === undefined ? (etyp as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(etyp)).FieldByName(fieldName)
						if (!ok) {
							// If there's no such field, say "can't evaluate"
							// instead of "nil pointer evaluating".
							break
						}
					}
				}
				if (isNil) {
					await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as state).errorf("nil pointer evaluating %s.%s", $.arrayToSlice<any>([(typ as any), fieldName])) : state.prototype.errorf.call(s, "nil pointer evaluating %s.%s", $.arrayToSlice<any>([(typ as any), fieldName])))
				}
				break
			}
		}
		await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as state).errorf("can't evaluate field %s in type %s", $.arrayToSlice<any>([fieldName, (typ as any)])) : state.prototype.errorf.call(s, "can't evaluate field %s in type %s", $.arrayToSlice<any>([fieldName, (typ as any)])))
		$.panic("not reached")
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async evalFieldChain(dot: reflect.Value, receiver: reflect.Value, node: parse.Node | null, ident: $.Slice<string>, args: $.Slice<parse.Node | null>, final: reflect.Value): globalThis.Promise<reflect.Value> {
		const s: state | $.VarRef<state> | null = this;
		let n = $.sliceLen(ident)
		for (let __goscriptSliceWindow4 = $.sliceRange(ident), i = 0; i < (n - 1); i++) {
			receiver = $.assignStruct(receiver, await state.prototype.evalField.call(s, dot, ((__goscriptSliceWindow4.backing as any[])[$.windowSlot(__goscriptSliceWindow4, i)] as string), node, null, $.markAsStructValue($.cloneStructValue(missingVal)), $.markAsStructValue($.cloneStructValue(receiver))))
		}
		// Now if it's a method, it gets the arguments.
		return (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as state).evalField(dot, $.arrayIndex(ident!, n - 1), node, args, final, $.markAsStructValue($.cloneStructValue(receiver))) : state.prototype.evalField.call(s, dot, $.arrayIndex(ident!, n - 1), node, args, final, $.markAsStructValue($.cloneStructValue(receiver))))
	}

	public async evalFieldNode(dot: reflect.Value, field: parse.FieldNode | $.VarRef<parse.FieldNode> | null, args: $.Slice<parse.Node | null>, final: reflect.Value): globalThis.Promise<reflect.Value> {
		const s: state | $.VarRef<state> | null = this;
		void (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as state).at($.interfaceValue<parse.Node | null>(field, "*parse.FieldNode", /* @__PURE__ */ $.pointerType("parse.FieldNode"))) : state.prototype.at.call(s, $.interfaceValue<parse.Node | null>(field, "*parse.FieldNode", /* @__PURE__ */ $.pointerType("parse.FieldNode"))))
		return state.prototype.evalFieldChain.call(s, dot, $.markAsStructValue($.cloneStructValue(dot)), $.interfaceValue<parse.Node | null>(field, "*parse.FieldNode", /* @__PURE__ */ $.pointerType("parse.FieldNode")), $.pointerValue<parse.FieldNode>(field).Ident, args, final)
	}

	public async evalFloat(typ: reflect.Type | null, n: parse.Node | null): globalThis.Promise<reflect.Value> {
		const s: state | $.VarRef<state> | null = this;
		void (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as state).at(n) : state.prototype.at.call(s, n))
		let __goscriptShadow4 = n
		{
			let __goscriptTuple3: any = $.typeAssertTuple<parse.NumberNode | $.VarRef<parse.NumberNode> | null>(__goscriptShadow4, /* @__PURE__ */ $.pointerType("parse.NumberNode"))
			let __goscriptShadow5: parse.NumberNode | $.VarRef<parse.NumberNode> | null = __goscriptTuple3[0]
			let ok = __goscriptTuple3[1]
			if (ok && $.pointerValue<parse.NumberNode>(__goscriptShadow5).IsFloat) {
				let value = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(reflect.New($.pointerValueOrNil(typ)!))).Elem()))
				$.markAsStructValue($.cloneStructValue(value)).SetFloat($.pointerValue<parse.NumberNode>(__goscriptShadow5).Float64)
				return $.markAsStructValue($.cloneStructValue(value))
			}
		}
		await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as state).errorf("expected float; found %s", $.arrayToSlice<any>([(n as any)])) : state.prototype.errorf.call(s, "expected float; found %s", $.arrayToSlice<any>([(n as any)])))
		$.panic("not reached")
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async evalFunction(dot: reflect.Value, node: parse.IdentifierNode | $.VarRef<parse.IdentifierNode> | null, cmd: parse.Node | null, args: $.Slice<parse.Node | null>, final: reflect.Value): globalThis.Promise<reflect.Value> {
		const s: state | $.VarRef<state> | null = this;
		state.prototype.at.call(s, $.interfaceValue<parse.Node | null>(node, "*parse.IdentifierNode", /* @__PURE__ */ $.pointerType("parse.IdentifierNode")))
		let name = $.pointerValue<parse.IdentifierNode>(node).Ident
		let [_function, isBuiltin, ok] = await __goscript_funcs.findFunction(name, $.pointerValue<state>(s).tmpl)
		if (!ok) {
			await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as state).errorf("%q is not a defined function", $.arrayToSlice<any>([name])) : state.prototype.errorf.call(s, "%q is not a defined function", $.arrayToSlice<any>([name])))
		}
		return (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as state).evalCall(dot, $.markAsStructValue($.cloneStructValue(_function)), isBuiltin, cmd, name, args, final) : state.prototype.evalCall.call(s, dot, $.markAsStructValue($.cloneStructValue(_function)), isBuiltin, cmd, name, args, final))
	}

	public async evalInteger(typ: reflect.Type | null, n: parse.Node | null): globalThis.Promise<reflect.Value> {
		const s: state | $.VarRef<state> | null = this;
		void (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as state).at(n) : state.prototype.at.call(s, n))
		let __goscriptShadow6 = n
		{
			let __goscriptTuple4: any = $.typeAssertTuple<parse.NumberNode | $.VarRef<parse.NumberNode> | null>(__goscriptShadow6, /* @__PURE__ */ $.pointerType("parse.NumberNode"))
			let __goscriptShadow7: parse.NumberNode | $.VarRef<parse.NumberNode> | null = __goscriptTuple4[0]
			let ok = __goscriptTuple4[1]
			if (ok && $.pointerValue<parse.NumberNode>(__goscriptShadow7).IsInt) {
				let value = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(reflect.New($.pointerValueOrNil(typ)!))).Elem()))
				$.markAsStructValue($.cloneStructValue(value)).SetInt($.pointerValue<parse.NumberNode>(__goscriptShadow7).Int64)
				return $.markAsStructValue($.cloneStructValue(value))
			}
		}
		await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as state).errorf("expected integer; found %s", $.arrayToSlice<any>([(n as any)])) : state.prototype.errorf.call(s, "expected integer; found %s", $.arrayToSlice<any>([(n as any)])))
		$.panic("not reached")
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async evalPipeline(dot: reflect.Value, pipe: parse.PipeNode | $.VarRef<parse.PipeNode> | null): globalThis.Promise<reflect.Value> {
		const s: state | $.VarRef<state> | null = this;
		let value: reflect.Value = $.markAsStructValue(new reflect.Value())
		const pipe$: parse.PipeNode = pipe == null ? $.pointerTarget<parse.PipeNode>(pipe) : (pipe as any).__isVarRef === true ? (pipe as any).value : (pipe as any).__goValue === undefined ? (pipe as any) : $.pointerTarget<parse.PipeNode>(pipe)
		if (pipe == null) {
			return value
		}
		void (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as state).at($.interfaceValue<parse.Node | null>(pipe, "*parse.PipeNode", /* @__PURE__ */ $.pointerType("parse.PipeNode"))) : state.prototype.at.call(s, $.interfaceValue<parse.Node | null>(pipe, "*parse.PipeNode", /* @__PURE__ */ $.pointerType("parse.PipeNode"))))
		value = $.assignStruct(value, missingVal)
		for (let __goscriptRangeTarget1 = (pipe$ as parse.PipeNode).Cmds, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
			let cmd = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as parse.CommandNode | $.VarRef<parse.CommandNode> | null)
			value = $.assignStruct(value, await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as state).evalCommand(dot, cmd, value) : state.prototype.evalCommand.call(s, dot, cmd, value)))
			// If the object has type interface{}, dig down one level to the thing inside.
			if (($.markAsStructValue($.cloneStructValue(value)).Kind() == 20) && ((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>($.markAsStructValue($.cloneStructValue(value)).Type()).NumMethod(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 0)) {
				value = $.assignStruct(value, $.markAsStructValue($.cloneStructValue(value)).Elem())
			}
		}
		for (let __goscriptRangeTarget2 = (pipe$ as parse.PipeNode).Decl, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow2.length; __rangeIndex++) {
			let variable = (__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + __rangeIndex] as parse.VariableNode | $.VarRef<parse.VariableNode> | null)
			if ((pipe$ as parse.PipeNode).IsAssign) {
				await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as state).setVar($.arrayIndex($.pointerValue<parse.VariableNode>(variable).Ident!, 0), value) : state.prototype.setVar.call(s, $.arrayIndex($.pointerValue<parse.VariableNode>(variable).Ident!, 0), value))
			} else {
				void (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as state).push($.arrayIndex($.pointerValue<parse.VariableNode>(variable).Ident!, 0), value) : state.prototype.push.call(s, $.arrayIndex($.pointerValue<parse.VariableNode>(variable).Ident!, 0), value))
			}
		}
		return $.markAsStructValue($.cloneStructValue(value))
	}

	public async evalString(typ: reflect.Type | null, n: parse.Node | null): globalThis.Promise<reflect.Value> {
		const s: state | $.VarRef<state> | null = this;
		void (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as state).at(n) : state.prototype.at.call(s, n))
		let __goscriptShadow8 = n
		{
			let __goscriptTuple5: any = $.typeAssertTuple<parse.StringNode | $.VarRef<parse.StringNode> | null>(__goscriptShadow8, /* @__PURE__ */ $.pointerType("parse.StringNode"))
			let __goscriptShadow9: parse.StringNode | $.VarRef<parse.StringNode> | null = __goscriptTuple5[0]
			let ok = __goscriptTuple5[1]
			if (ok) {
				let value = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(reflect.New($.pointerValueOrNil(typ)!))).Elem()))
				$.markAsStructValue($.cloneStructValue(value)).SetString($.pointerValue<parse.StringNode>(__goscriptShadow9).Text)
				return $.markAsStructValue($.cloneStructValue(value))
			}
		}
		await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as state).errorf("expected string; found %s", $.arrayToSlice<any>([(n as any)])) : state.prototype.errorf.call(s, "expected string; found %s", $.arrayToSlice<any>([(n as any)])))
		$.panic("not reached")
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async evalUnsignedInteger(typ: reflect.Type | null, n: parse.Node | null): globalThis.Promise<reflect.Value> {
		const s: state | $.VarRef<state> | null = this;
		void (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as state).at(n) : state.prototype.at.call(s, n))
		let __goscriptShadow10 = n
		{
			let __goscriptTuple6: any = $.typeAssertTuple<parse.NumberNode | $.VarRef<parse.NumberNode> | null>(__goscriptShadow10, /* @__PURE__ */ $.pointerType("parse.NumberNode"))
			let __goscriptShadow11: parse.NumberNode | $.VarRef<parse.NumberNode> | null = __goscriptTuple6[0]
			let ok = __goscriptTuple6[1]
			if (ok && $.pointerValue<parse.NumberNode>(__goscriptShadow11).IsUint) {
				let value = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(reflect.New($.pointerValueOrNil(typ)!))).Elem()))
				$.markAsStructValue($.cloneStructValue(value)).SetUint($.pointerValue<parse.NumberNode>(__goscriptShadow11).Uint64)
				return $.markAsStructValue($.cloneStructValue(value))
			}
		}
		await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as state).errorf("expected unsigned integer; found %s", $.arrayToSlice<any>([(n as any)])) : state.prototype.errorf.call(s, "expected unsigned integer; found %s", $.arrayToSlice<any>([(n as any)])))
		$.panic("not reached")
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async evalVariableNode(dot: reflect.Value, variable: parse.VariableNode | $.VarRef<parse.VariableNode> | null, args: $.Slice<parse.Node | null>, final: reflect.Value): globalThis.Promise<reflect.Value> {
		const s: state | $.VarRef<state> | null = this;
		const variable$: parse.VariableNode = variable == null ? $.pointerTarget<parse.VariableNode>(variable) : (variable as any).__isVarRef === true ? (variable as any).value : (variable as any).__goValue === undefined ? (variable as any) : $.pointerTarget<parse.VariableNode>(variable)
		// $x.Field has $x as the first ident, Field as the second. Eval the var, then the fields.
		state.prototype.at.call(s, $.interfaceValue<parse.Node | null>(variable, "*parse.VariableNode", /* @__PURE__ */ $.pointerType("parse.VariableNode")))
		let value = await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as state).varValue($.arrayIndex((variable$ as parse.VariableNode).Ident!, 0)) : state.prototype.varValue.call(s, $.arrayIndex((variable$ as parse.VariableNode).Ident!, 0)))
		if ($.sliceLen((variable$ as parse.VariableNode).Ident) == 1) {
			await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as state).notAFunction(args, final) : state.prototype.notAFunction.call(s, args, final))
			return $.markAsStructValue($.cloneStructValue(value))
		}
		return state.prototype.evalFieldChain.call(s, dot, $.markAsStructValue($.cloneStructValue(value)), $.interfaceValue<parse.Node | null>(variable, "*parse.VariableNode", /* @__PURE__ */ $.pointerType("parse.VariableNode")), $.goSlice((variable$ as parse.VariableNode).Ident, 1, undefined), args, final)
	}

	public async idealConstant(constant: parse.NumberNode | $.VarRef<parse.NumberNode> | null): globalThis.Promise<reflect.Value> {
		const s: state | $.VarRef<state> | null = this;
		const constant$: parse.NumberNode = constant == null ? $.pointerTarget<parse.NumberNode>(constant) : (constant as any).__isVarRef === true ? (constant as any).value : (constant as any).__goValue === undefined ? (constant as any) : $.pointerTarget<parse.NumberNode>(constant)
		// These are ideal constants but we don't know the type
		// and we have no context.  (If it was a method argument,
		// we'd know what we need.) The syntax guides us to some extent.
		void (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as state).at($.interfaceValue<parse.Node | null>(constant, "*parse.NumberNode", /* @__PURE__ */ $.pointerType("parse.NumberNode"))) : state.prototype.at.call(s, $.interfaceValue<parse.Node | null>(constant, "*parse.NumberNode", /* @__PURE__ */ $.pointerType("parse.NumberNode"))))
		switch ((true as boolean)) {
			case (constant$ as parse.NumberNode).IsComplex:
			{
				return $.markAsStructValue($.cloneStructValue(reflect.ValueOf($.basicInterfaceValue((constant$ as parse.NumberNode).Complex128, "complex128"))))
				break
			}
			case (((constant$ as parse.NumberNode).IsFloat && !isHexInt((constant$ as parse.NumberNode).Text)) && !isRuneInt((constant$ as parse.NumberNode).Text)) && strings.ContainsAny((constant$ as parse.NumberNode).Text, ".eEpP"):
			{
				return $.markAsStructValue($.cloneStructValue(reflect.ValueOf($.basicInterfaceValue((constant$ as parse.NumberNode).Float64, "float64"))))
				break
			}
			case (constant$ as parse.NumberNode).IsInt:
			{
				let n = $.int((constant$ as parse.NumberNode).Int64)
				if ($.int64(n) != (constant$ as parse.NumberNode).Int64) {
					await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as state).errorf("%s overflows int", $.arrayToSlice<any>([(constant$ as parse.NumberNode).Text])) : state.prototype.errorf.call(s, "%s overflows int", $.arrayToSlice<any>([(constant$ as parse.NumberNode).Text])))
				}
				return $.markAsStructValue($.cloneStructValue(reflect.ValueOf($.basicInterfaceValue(n, "int"))))
				break
			}
			case (constant$ as parse.NumberNode).IsUint:
			{
				await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as state).errorf("%s overflows int", $.arrayToSlice<any>([(constant$ as parse.NumberNode).Text])) : state.prototype.errorf.call(s, "%s overflows int", $.arrayToSlice<any>([(constant$ as parse.NumberNode).Text])))
				break
			}
		}
		return $.markAsStructValue($.cloneStructValue(zero))
	}

	public mark(): number {
		const s: state | $.VarRef<state> | null = this;
		return $.sliceLen($.pointerValue<state>(s).vars)
	}

	public async notAFunction(args: $.Slice<parse.Node | null>, final: reflect.Value): globalThis.Promise<void> {
		const s: state | $.VarRef<state> | null = this;
		if (($.sliceLen(args) > 1) || !isMissing(final)) {
			await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as state).errorf("can't give argument to non-function %s", $.arrayToSlice<any>([($.arrayIndex(args!, 0) as any)])) : state.prototype.errorf.call(s, "can't give argument to non-function %s", $.arrayToSlice<any>([($.arrayIndex(args!, 0) as any)])))
		}
	}

	public pop(mark: number): void {
		let s: state | $.VarRef<state> | null = this;
		const s$: state = s == null ? $.pointerTarget<state>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<state>(s);
		;(s$ as state).vars = $.goSlice((s$ as state).vars, 0, mark)
	}

	public async printValue(n: parse.Node | null, v: reflect.Value): globalThis.Promise<void> {
		const s: state | $.VarRef<state> | null = this;
		void (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as state).at(n) : state.prototype.at.call(s, n))
		let [iface, ok] = await printableValue($.markAsStructValue($.cloneStructValue(v)))
		if (!ok) {
			await state.prototype.errorf.call(s, "can't print %s of type %s", $.arrayToSlice<any>([(n as any), ($.markAsStructValue($.cloneStructValue(v)).Type() as any)]))
		}
		let [, err] = await fmt.Fprint($.pointerValueOrNil($.pointerValue<state>(s).wr)!, iface)
		if (err != null) {
			void (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as state).writeError(err) : state.prototype.writeError.call(s, err))
		}
	}

	public push(name: string, value: reflect.Value): void {
		let s: state | $.VarRef<state> | null = this;
		const s$: state = s == null ? $.pointerTarget<state>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<state>(s);
		;(s$ as state).vars = $.appendOne((s$ as state).vars, new variable({name: name, value: $.markAsStructValue($.cloneStructValue(value))}, true))
	}

	public setTopVar(n: number, value: reflect.Value): void {
		let s: state | $.VarRef<state> | null = this;
		const s$: state = s == null ? $.pointerTarget<state>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<state>(s)
		$.assignStruct($.arrayIndex((s$ as state).vars!, $.sliceLen((s$ as state).vars) - n).value, value)
	}

	public async setVar(name: string, value: reflect.Value): globalThis.Promise<void> {
		let s: state | $.VarRef<state> | null = this;
		const s$: state = s == null ? $.pointerTarget<state>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<state>(s)
		for (let i = (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as state).mark() : state.prototype.mark.call(s)) - 1; i >= 0; i--) {
			if ($.stringEqual($.arrayIndex((s$ as state).vars!, i).name, name)) {
				$.assignStruct($.arrayIndex((s$ as state).vars!, i).value, value)
				return
			}
		}
		await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as state).errorf("undefined variable: %s", $.arrayToSlice<any>([name])) : state.prototype.errorf.call(s, "undefined variable: %s", $.arrayToSlice<any>([name])))
	}

	public async validateType(value: reflect.Value, typ: reflect.Type | null): globalThis.Promise<reflect.Value> {
		const s: state | $.VarRef<state> | null = this;
		if (!$.markAsStructValue($.cloneStructValue(value)).IsValid()) {
			if (typ == null) {
				// An untyped nil interface{}. Accept as a proper nil value.
				return $.markAsStructValue($.cloneStructValue(reflect.ValueOf(null)))
			}
			if (await canBeNil(typ)) {
				// Like above, but use the zero value of the non-nil type.
				return $.markAsStructValue($.cloneStructValue(reflect.Zero($.pointerValueOrNil(typ)!)))
			}
			await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as state).errorf("invalid value; expected %s", $.arrayToSlice<any>([(typ as any)])) : state.prototype.errorf.call(s, "invalid value; expected %s", $.arrayToSlice<any>([(typ as any)])))
		}
		if (($.comparableEqual(typ, reflectValueType)) && (!$.comparableEqual($.markAsStructValue($.cloneStructValue(value)).Type(), typ))) {
			return $.markAsStructValue($.cloneStructValue(reflect.ValueOf($.interfaceValue($.markAsStructValue($.cloneStructValue(value)), "reflect.Value", "reflect.Value"))))
		}
		if ((typ != null) && !(__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>($.markAsStructValue($.cloneStructValue(value)).Type()).AssignableTo($.pointerValueOrNil(typ)!), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
			if (($.markAsStructValue($.cloneStructValue(value)).Kind() == 20) && !$.markAsStructValue($.cloneStructValue(value)).IsNil()) {
				value = $.assignStruct(value, $.markAsStructValue($.cloneStructValue(value)).Elem())
				if ((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>($.markAsStructValue($.cloneStructValue(value)).Type()).AssignableTo($.pointerValueOrNil(typ)!), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
					return $.markAsStructValue($.cloneStructValue(value))
				}
			}
			// Does one dereference or indirection work? We could do more, as we
			// do with method receivers, but that gets messy and method receivers
			// are much more constrained, so it makes more sense there than here.
			// Besides, one is almost always all you need.
			switch ((true as boolean)) {
				case ($.markAsStructValue($.cloneStructValue(value)).Kind() == 22) && (__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>($.markAsStructValue($.cloneStructValue(value)).Type()).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).AssignableTo($.pointerValueOrNil(typ)!), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait):
				{
					value = $.assignStruct(value, $.markAsStructValue($.cloneStructValue(value)).Elem())
					if (!$.markAsStructValue($.cloneStructValue(value)).IsValid()) {
						await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as state).errorf("dereference of nil pointer of type %s", $.arrayToSlice<any>([(typ as any)])) : state.prototype.errorf.call(s, "dereference of nil pointer of type %s", $.arrayToSlice<any>([(typ as any)])))
					}
					break
				}
				case (__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>(reflect.PointerTo($.pointerValueOrNil($.markAsStructValue($.cloneStructValue(value)).Type())!)).AssignableTo($.pointerValueOrNil(typ)!), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) && $.markAsStructValue($.cloneStructValue(value)).CanAddr():
				{
					value = $.assignStruct(value, $.markAsStructValue($.cloneStructValue(value)).Addr())
					break
				}
				default:
				{
					await state.prototype.errorf.call(s, "wrong type for value; expected %s; got %s", $.arrayToSlice<any>([(typ as any), ($.markAsStructValue($.cloneStructValue(value)).Type() as any)]))
					break
				}
			}
		}
		return $.markAsStructValue($.cloneStructValue(value))
	}

	public async varValue(name: string): globalThis.Promise<reflect.Value> {
		const s: state | $.VarRef<state> | null = this;
		const s$: state = s == null ? $.pointerTarget<state>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<state>(s)
		for (let i = (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as state).mark() : state.prototype.mark.call(s)) - 1; i >= 0; i--) {
			if ($.stringEqual($.arrayIndex((s$ as state).vars!, i).name, name)) {
				return $.markAsStructValue($.cloneStructValue($.arrayIndex((s$ as state).vars!, i).value))
			}
		}
		await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as state).errorf("undefined variable: %s", $.arrayToSlice<any>([name])) : state.prototype.errorf.call(s, "undefined variable: %s", $.arrayToSlice<any>([name])))
		return $.markAsStructValue($.cloneStructValue(zero))
	}

	public async walk(dot: reflect.Value, node: parse.Node | null): globalThis.Promise<void> {
		const s: state | $.VarRef<state> | null = this;
		void (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as state).at(node) : state.prototype.at.call(s, node))
		{
			const __goscriptTypeSwitchValue = node
			switch (true) {
				case $.typeAssert<parse.ActionNode | $.VarRef<parse.ActionNode> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("parse.ActionNode")).ok:
					{
						let node: parse.ActionNode | $.VarRef<parse.ActionNode> | null = $.typeAssert<parse.ActionNode | $.VarRef<parse.ActionNode> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("parse.ActionNode")).value
						let val = await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as state).evalPipeline(dot, $.pointerValue<parse.ActionNode>(node).Pipe) : state.prototype.evalPipeline.call(s, dot, $.pointerValue<parse.ActionNode>(node).Pipe))
						if ($.sliceLen($.pointerValue<parse.PipeNode>($.pointerValue<parse.ActionNode>(node).Pipe).Decl) == 0) {
							await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as state).printValue($.interfaceValue<parse.Node | null>(node, "*parse.ActionNode", /* @__PURE__ */ $.pointerType("parse.ActionNode")), val) : state.prototype.printValue.call(s, $.interfaceValue<parse.Node | null>(node, "*parse.ActionNode", /* @__PURE__ */ $.pointerType("parse.ActionNode")), val))
						}
					}
					break
				case $.typeAssert<parse.BreakNode | $.VarRef<parse.BreakNode> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("parse.BreakNode")).ok:
					{
						let node: parse.BreakNode | $.VarRef<parse.BreakNode> | null = $.typeAssert<parse.BreakNode | $.VarRef<parse.BreakNode> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("parse.BreakNode")).value
						$.panic((walkBreak as any))
					}
					break
				case $.typeAssert<parse.CommentNode | $.VarRef<parse.CommentNode> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("parse.CommentNode")).ok:
					{
						let node: parse.CommentNode | $.VarRef<parse.CommentNode> | null = $.typeAssert<parse.CommentNode | $.VarRef<parse.CommentNode> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("parse.CommentNode")).value
					}
					break
				case $.typeAssert<parse.ContinueNode | $.VarRef<parse.ContinueNode> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("parse.ContinueNode")).ok:
					{
						let node: parse.ContinueNode | $.VarRef<parse.ContinueNode> | null = $.typeAssert<parse.ContinueNode | $.VarRef<parse.ContinueNode> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("parse.ContinueNode")).value
						$.panic((walkContinue as any))
					}
					break
				case $.typeAssert<parse.IfNode | $.VarRef<parse.IfNode> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("parse.IfNode")).ok:
					{
						let node: parse.IfNode | $.VarRef<parse.IfNode> | null = $.typeAssert<parse.IfNode | $.VarRef<parse.IfNode> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("parse.IfNode")).value
						await state.prototype.walkIfOrWith.call(s, 10, dot, $.pointerValue<parse.IfNode>(node).BranchNode.Pipe, $.pointerValue<parse.IfNode>(node).BranchNode.List, $.pointerValue<parse.IfNode>(node).BranchNode.ElseList)
					}
					break
				case $.typeAssert<parse.ListNode | $.VarRef<parse.ListNode> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("parse.ListNode")).ok:
					{
						let node: parse.ListNode | $.VarRef<parse.ListNode> | null = $.typeAssert<parse.ListNode | $.VarRef<parse.ListNode> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("parse.ListNode")).value
						for (let __goscriptRangeTarget3 = $.pointerValue<parse.ListNode>(node).Nodes, __goscriptRangeWindow3 = $.sliceRange(__goscriptRangeTarget3), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow3.length; __rangeIndex++) {
							let __goscriptRangeShadow0 = (__goscriptRangeWindow3.backing[__goscriptRangeWindow3.offset + __rangeIndex] as parse.Node | null)
							await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as state).walk(dot, __goscriptRangeShadow0) : state.prototype.walk.call(s, dot, __goscriptRangeShadow0))
						}
					}
					break
				case $.typeAssert<parse.RangeNode | $.VarRef<parse.RangeNode> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("parse.RangeNode")).ok:
					{
						let node: parse.RangeNode | $.VarRef<parse.RangeNode> | null = $.typeAssert<parse.RangeNode | $.VarRef<parse.RangeNode> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("parse.RangeNode")).value
						await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as state).walkRange(dot, node) : state.prototype.walkRange.call(s, dot, node))
					}
					break
				case $.typeAssert<parse.TemplateNode | $.VarRef<parse.TemplateNode> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("parse.TemplateNode")).ok:
					{
						let node: parse.TemplateNode | $.VarRef<parse.TemplateNode> | null = $.typeAssert<parse.TemplateNode | $.VarRef<parse.TemplateNode> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("parse.TemplateNode")).value
						await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as state).walkTemplate($.markAsStructValue($.cloneStructValue(dot)), node) : state.prototype.walkTemplate.call(s, $.markAsStructValue($.cloneStructValue(dot)), node))
					}
					break
				case $.typeAssert<parse.TextNode | $.VarRef<parse.TextNode> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("parse.TextNode")).ok:
					{
						let node: parse.TextNode | $.VarRef<parse.TextNode> | null = $.typeAssert<parse.TextNode | $.VarRef<parse.TextNode> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("parse.TextNode")).value
						{
							let [, err] = await $.pointerValue<Exclude<io.Writer, null>>($.pointerValue<state>(s).wr).Write($.pointerValue<parse.TextNode>(node).Text)
							if (err != null) {
								void (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as state).writeError(err) : state.prototype.writeError.call(s, err))
							}
						}
					}
					break
				case $.typeAssert<parse.WithNode | $.VarRef<parse.WithNode> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("parse.WithNode")).ok:
					{
						let node: parse.WithNode | $.VarRef<parse.WithNode> | null = $.typeAssert<parse.WithNode | $.VarRef<parse.WithNode> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("parse.WithNode")).value
						await state.prototype.walkIfOrWith.call(s, 19, dot, $.pointerValue<parse.WithNode>(node).BranchNode.Pipe, $.pointerValue<parse.WithNode>(node).BranchNode.List, $.pointerValue<parse.WithNode>(node).BranchNode.ElseList)
					}
					break
				default:
					{
						let node: any = __goscriptTypeSwitchValue
						await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as state).errorf("unknown node: %s", $.arrayToSlice<any>([(node as any)])) : state.prototype.errorf.call(s, "unknown node: %s", $.arrayToSlice<any>([(node as any)])))
					}
					break
			}
		}
	}

	public async walkIfOrWith(typ: parse.NodeType, dot: reflect.Value, pipe: parse.PipeNode | $.VarRef<parse.PipeNode> | null, list: parse.ListNode | $.VarRef<parse.ListNode> | null, elseList: parse.ListNode | $.VarRef<parse.ListNode> | null): globalThis.Promise<void> {
		const s: state | $.VarRef<state> | null = this;
		using __defer = new $.DisposableStack()
		const __goscriptDeferCallee0 = $.functionValue(((__receiver) => (mark: number) => __receiver.pop(mark))($.pointerValue<state>(s)), ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int")], results: [] } as $.FunctionTypeInfo), "text/template.(*state).pop-fm")
		const __goscriptDeferArg0 = (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as state).mark() : state.prototype.mark.call(s))
		__defer.defer(() => { __goscriptDeferCallee0(__goscriptDeferArg0) })
		let val = await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as state).evalPipeline(dot, pipe) : state.prototype.evalPipeline.call(s, dot, pipe))
		let [truth, ok] = isTrue(indirectInterface(val))
		if (!ok) {
			await state.prototype.errorf.call(s, "if/with can't use %v", $.arrayToSlice<any>([$.interfaceValue($.markAsStructValue($.cloneStructValue(val)), "reflect.Value", "reflect.Value")]))
		}
		if (truth) {
			if (typ == 19) {
				await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as state).walk(val, $.interfaceValue<parse.Node | null>(list, "*parse.ListNode", /* @__PURE__ */ $.pointerType("parse.ListNode"))) : state.prototype.walk.call(s, val, $.interfaceValue<parse.Node | null>(list, "*parse.ListNode", /* @__PURE__ */ $.pointerType("parse.ListNode"))))
			} else {
				await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as state).walk(dot, $.interfaceValue<parse.Node | null>(list, "*parse.ListNode", /* @__PURE__ */ $.pointerType("parse.ListNode"))) : state.prototype.walk.call(s, dot, $.interfaceValue<parse.Node | null>(list, "*parse.ListNode", /* @__PURE__ */ $.pointerType("parse.ListNode"))))
			}
		} else {
			if (elseList != null) {
				await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as state).walk(dot, $.interfaceValue<parse.Node | null>(elseList, "*parse.ListNode", /* @__PURE__ */ $.pointerType("parse.ListNode"))) : state.prototype.walk.call(s, dot, $.interfaceValue<parse.Node | null>(elseList, "*parse.ListNode", /* @__PURE__ */ $.pointerType("parse.ListNode"))))
			}
		}
	}

	public async walkRange(dot: reflect.Value, r: parse.RangeNode | $.VarRef<parse.RangeNode> | null): globalThis.Promise<void> {
		const s: state | $.VarRef<state> | null = this;
		const __defer = new $.DisposableStack()
		try {
			const r$: parse.RangeNode = r == null ? $.pointerTarget<parse.RangeNode>(r) : (r as any).__isVarRef === true ? (r as any).value : (r as any).__goValue === undefined ? (r as any) : $.pointerTarget<parse.RangeNode>(r)
			void (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as state).at($.interfaceValue<parse.Node | null>(r, "*parse.RangeNode", /* @__PURE__ */ $.pointerType("parse.RangeNode"))) : state.prototype.at.call(s, $.interfaceValue<parse.Node | null>(r, "*parse.RangeNode", /* @__PURE__ */ $.pointerType("parse.RangeNode"))))
			__defer.defer(() => { ((): void => {
				{
					let __goscriptShadow12 = $.recover()
					if ((__goscriptShadow12 != null) && (!$.comparableEqual(__goscriptShadow12, walkBreak))) {
						$.panic(__goscriptShadow12)
					}
				}
			})() })
			const __goscriptDeferCallee1 = $.functionValue(((__receiver) => (mark: number) => __receiver.pop(mark))($.pointerValue<state>(s)), ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int")], results: [] } as $.FunctionTypeInfo), "text/template.(*state).pop-fm")
			const __goscriptDeferArg1 = (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as state).mark() : state.prototype.mark.call(s))
			__defer.defer(() => { __goscriptDeferCallee1(__goscriptDeferArg1) })
			let [val, ] = indirect(await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as state).evalPipeline(dot, (r$ as parse.RangeNode).BranchNode.Pipe) : state.prototype.evalPipeline.call(s, dot, (r$ as parse.RangeNode).BranchNode.Pipe)))
			// mark top of stack before any variables in the body are pushed.
			let mark = (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as state).mark() : state.prototype.mark.call(s))
			let oneIteration: ((index: reflect.Value, elem: reflect.Value) => void) | null = $.functionValue(async (index: reflect.Value, elem: reflect.Value): globalThis.Promise<void> => {
				const __defer = new $.DisposableStack()
				try {
					if ($.sliceLen($.pointerValue<parse.PipeNode>((r$ as parse.RangeNode).BranchNode.Pipe).Decl) > 0) {
						if ($.pointerValue<parse.PipeNode>((r$ as parse.RangeNode).BranchNode.Pipe).IsAssign) {
							// With two variables, index comes first.
							// With one, we use the element.
							if ($.sliceLen($.pointerValue<parse.PipeNode>((r$ as parse.RangeNode).BranchNode.Pipe).Decl) > 1) {
								await state.prototype.setVar.call(s, $.arrayIndex($.pointerValue<parse.VariableNode>($.arrayIndex($.pointerValue<parse.PipeNode>((r$ as parse.RangeNode).BranchNode.Pipe).Decl!, 0)).Ident!, 0), index)
							} else {
								await state.prototype.setVar.call(s, $.arrayIndex($.pointerValue<parse.VariableNode>($.arrayIndex($.pointerValue<parse.PipeNode>((r$ as parse.RangeNode).BranchNode.Pipe).Decl!, 0)).Ident!, 0), elem)
							}
						} else {
							// Set top var (lexically the second if there
							// are two) to the element.
							void (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as state).setTopVar(1, elem) : state.prototype.setTopVar.call(s, 1, elem))
						}
					}
					if ($.sliceLen($.pointerValue<parse.PipeNode>((r$ as parse.RangeNode).BranchNode.Pipe).Decl) > 1) {
						if ($.pointerValue<parse.PipeNode>((r$ as parse.RangeNode).BranchNode.Pipe).IsAssign) {
							await state.prototype.setVar.call(s, $.arrayIndex($.pointerValue<parse.VariableNode>($.arrayIndex($.pointerValue<parse.PipeNode>((r$ as parse.RangeNode).BranchNode.Pipe).Decl!, 1)).Ident!, 0), elem)
						} else {
							// Set next var (lexically the first if there
							// are two) to the index.
							void (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as state).setTopVar(2, index) : state.prototype.setTopVar.call(s, 2, index))
						}
					}
					const __goscriptDeferCallee2 = $.functionValue(((__receiver) => (mark: number) => __receiver.pop(mark))($.pointerValue<state>(s)), ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int")], results: [] } as $.FunctionTypeInfo), "text/template.(*state).pop-fm")
					const __goscriptDeferArg2 = mark
					__defer.defer(() => { __goscriptDeferCallee2(__goscriptDeferArg2) })
					__defer.defer(() => { ((): void => {
						// Consume panic(walkContinue)
						{
							let __goscriptShadow13 = $.recover()
							if ((__goscriptShadow13 != null) && (!$.comparableEqual(__goscriptShadow13, walkContinue))) {
								$.panic(__goscriptShadow13)
							}
						}
					})() })
					await state.prototype.walk.call(s, elem, $.interfaceValue<parse.Node | null>((r$ as parse.RangeNode).BranchNode.List, "*parse.ListNode", /* @__PURE__ */ $.pointerType("parse.ListNode")))
					__defer.dispose()
				} catch (e) {
					__defer.disposePanic(e)
					if (!$.recovered(e)) {
						throw e
					}
				}
			}, ({ kind: $.TypeKind.Function, params: ["reflect.Value", "reflect.Value"], results: [] } as $.FunctionTypeInfo))
			switch ($.markAsStructValue($.cloneStructValue(val)).Kind()) {
				case reflect.Int:
				case reflect.Int8:
				case reflect.Int16:
				case reflect.Int32:
				case reflect.Int64:
				case reflect.Uint:
				case reflect.Uint8:
				case reflect.Uint16:
				case reflect.Uint32:
				case reflect.Uint64:
				case reflect.Uintptr:
				{
					if ($.sliceLen($.pointerValue<parse.PipeNode>((r$ as parse.RangeNode).BranchNode.Pipe).Decl) > 1) {
						await state.prototype.errorf.call(s, "can't use %v to iterate over more than one variable", $.arrayToSlice<any>([$.interfaceValue($.markAsStructValue($.cloneStructValue(val)), "reflect.Value", "reflect.Value")]))
						break
					}
					let run = false
					let __goscriptRangeReturn0 = false
					;await (async () => {
						await $.markAsStructValue($.cloneStructValue(val)).Seq()!(async (v) => {
							run = true
							// Pass element as second value, as we do for channels.
							void (__goscriptAwait = oneIteration!($.markAsStructValue(new reflect.Value()), $.markAsStructValue($.cloneStructValue(v))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
							return true
						})
					})()
					if (__goscriptRangeReturn0) {
						return
					}
					if (!run) {
						break
					}
					return
					break
				}
				case reflect.Array:
				case reflect.Slice:
				{
					if ($.markAsStructValue($.cloneStructValue(val)).Len() == 0) {
						break
					}
					for (let i = 0; i < $.markAsStructValue($.cloneStructValue(val)).Len(); i++) {
						void (__goscriptAwait = oneIteration!($.markAsStructValue($.cloneStructValue(reflect.ValueOf($.basicInterfaceValue(i, "int")))), $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(val)).Index(i)))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					}
					return
					break
				}
				case reflect.Map:
				{
					if ($.markAsStructValue($.cloneStructValue(val)).Len() == 0) {
						break
					}
					let om: fmtsort.SortedMap = (await fmtsort.Sort(val) as fmtsort.SortedMap)
					for (let __goscriptRangeTarget4 = om, __goscriptRangeWindow4 = $.sliceRange(__goscriptRangeTarget4), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow4.length; __rangeIndex++) {
						let m = ((__goscriptRangeWindow4.backing[__goscriptRangeWindow4.offset + __rangeIndex] as fmtsort.KeyValue)).clone()
						void (__goscriptAwait = oneIteration!($.markAsStructValue($.cloneStructValue(m.Key)), $.markAsStructValue($.cloneStructValue(m.Value))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					}
					return
					break
				}
				case reflect.Chan:
				{
					if ($.markAsStructValue($.cloneStructValue(val)).IsNil()) {
						break
					}
					if ((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>($.markAsStructValue($.cloneStructValue(val)).Type()).ChanDir(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 2) {
						await state.prototype.errorf.call(s, "range over send-only channel %v", $.arrayToSlice<any>([$.interfaceValue($.markAsStructValue($.cloneStructValue(val)), "reflect.Value", "reflect.Value")]))
						break
					}
					let i = 0
					for (; ; i++) {
						let [elem, ok] = await $.markAsStructValue($.cloneStructValue(val)).Recv()
						if (!ok) {
							break
						}
						void (__goscriptAwait = oneIteration!($.markAsStructValue($.cloneStructValue(reflect.ValueOf($.basicInterfaceValue(i, "int")))), $.markAsStructValue($.cloneStructValue(elem))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					}
					if (i == 0) {
						break
					}
					return
					break
				}
				case reflect.Invalid:
				{
					break
					break
				}
				case reflect.Func:
				{
					if ((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>($.markAsStructValue($.cloneStructValue(val)).Type()).CanSeq(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
						if ($.sliceLen($.pointerValue<parse.PipeNode>((r$ as parse.RangeNode).BranchNode.Pipe).Decl) > 1) {
							await state.prototype.errorf.call(s, "can't use %v iterate over more than one variable", $.arrayToSlice<any>([$.interfaceValue($.markAsStructValue($.cloneStructValue(val)), "reflect.Value", "reflect.Value")]))
							break
						}
						let run = false
						let __goscriptRangeReturn1 = false
						;await (async () => {
							await $.markAsStructValue($.cloneStructValue(val)).Seq()!(async (v) => {
								run = true
								// Pass element as second value,
								// as we do for channels.
								void (__goscriptAwait = oneIteration!($.markAsStructValue(new reflect.Value()), $.markAsStructValue($.cloneStructValue(v))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
								return true
							})
						})()
						if (__goscriptRangeReturn1) {
							return
						}
						if (!run) {
							break
						}
						return
					}
					if ((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>($.markAsStructValue($.cloneStructValue(val)).Type()).CanSeq2(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
						let run = false
						let __goscriptRangeReturn2 = false
						;await (async () => {
							await $.markAsStructValue($.cloneStructValue(val)).Seq2()!(async (i, v) => {
								run = true
								if ($.sliceLen($.pointerValue<parse.PipeNode>((r$ as parse.RangeNode).BranchNode.Pipe).Decl) > 1) {
									void (__goscriptAwait = oneIteration!($.markAsStructValue($.cloneStructValue(i)), $.markAsStructValue($.cloneStructValue(v))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
								} else {
									// If there is only one range variable,
									// oneIteration will use the
									// second value.
									void (__goscriptAwait = oneIteration!($.markAsStructValue(new reflect.Value()), $.markAsStructValue($.cloneStructValue(i))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
								}
								return true
							})
						})()
						if (__goscriptRangeReturn2) {
							return
						}
						if (!run) {
							break
						}
						return
					}
				}
				default:
				{
					await state.prototype.errorf.call(s, "range can't iterate over %v", $.arrayToSlice<any>([$.interfaceValue($.markAsStructValue($.cloneStructValue(val)), "reflect.Value", "reflect.Value")]))
					break
				}
			}
			if ((r$ as parse.RangeNode).BranchNode.ElseList != null) {
				await state.prototype.walk.call(s, dot, $.interfaceValue<parse.Node | null>((r$ as parse.RangeNode).BranchNode.ElseList, "*parse.ListNode", /* @__PURE__ */ $.pointerType("parse.ListNode")))
			}
			__defer.dispose()
		} catch (e) {
			__defer.disposePanic(e)
			if (!$.recovered(e)) {
				throw e
			}
		}
	}

	public async walkTemplate(dot: reflect.Value, t: parse.TemplateNode | $.VarRef<parse.TemplateNode> | null): globalThis.Promise<void> {
		const s: state | $.VarRef<state> | null = this;
		const s$: state = s == null ? $.pointerTarget<state>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<state>(s)
		const t$: parse.TemplateNode = t == null ? $.pointerTarget<parse.TemplateNode>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<parse.TemplateNode>(t)
		void (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as state).at($.interfaceValue<parse.Node | null>(t, "*parse.TemplateNode", /* @__PURE__ */ $.pointerType("parse.TemplateNode"))) : state.prototype.at.call(s, $.interfaceValue<parse.Node | null>(t, "*parse.TemplateNode", /* @__PURE__ */ $.pointerType("parse.TemplateNode"))))
		let tmpl: __goscript_template.Template | $.VarRef<__goscript_template.Template> | null = await __goscript_template.Template.prototype.Lookup.call((s$ as state).tmpl, (t$ as parse.TemplateNode).Name)
		if (tmpl == null) {
			await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as state).errorf("template %q not defined", $.arrayToSlice<any>([(t$ as parse.TemplateNode).Name])) : state.prototype.errorf.call(s, "template %q not defined", $.arrayToSlice<any>([(t$ as parse.TemplateNode).Name])))
		}
		if ((s$ as state).depth == maxExecDepth) {
			await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as state).errorf("exceeded maximum template depth (%v)", $.arrayToSlice<any>([$.basicInterfaceValue(maxExecDepth, "int")])) : state.prototype.errorf.call(s, "exceeded maximum template depth (%v)", $.arrayToSlice<any>([$.basicInterfaceValue(maxExecDepth, "int")])))
		}
		// Variables declared by the pipeline persist.
		dot = $.assignStruct(dot, await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as state).evalPipeline(dot, (t$ as parse.TemplateNode).Pipe) : state.prototype.evalPipeline.call(s, dot, (t$ as parse.TemplateNode).Pipe)))
		let newState = $.varRef(((s$ as state)).clone())
		newState.value.depth++
		newState.value.tmpl = tmpl
		// No dynamic scoping: template invocations inherit no variables.
		newState.value.vars = $.arrayToSlice<variable>([new variable({name: "$", value: $.markAsStructValue($.cloneStructValue(dot))}, true)])
		await newState.value.walk(dot, $.interfaceValue<parse.Node | null>($.pointerValue<parse.Tree>($.pointerValue<__goscript_template.Template>(tmpl).Tree).Root, "*parse.ListNode", /* @__PURE__ */ $.pointerType("parse.ListNode")))
	}

	public writeError(err: $.GoError): void {
		const s: state | $.VarRef<state> | null = this;
		$.panic($.interfaceValue(new writeError({Err: err}, true), "template.writeError", "template.writeError"))
	}

	static __typeInfo = $.registerStructType(
		"template.state",
		() => new state(),
		() => [$.methodSignature("at", [["node", "parse.Node"]], [], true), $.methodSignature("errorf", [["format", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [], true), $.methodSignature("evalArg", [["dot", "reflect.Value"], ["typ", "reflect.Type"], ["n", "parse.Node"]], ["reflect.Value"], true), $.methodSignature("evalBool", [["typ", "reflect.Type"], ["n", "parse.Node"]], ["reflect.Value"], true), $.methodSignature("evalCall", [["dot", "reflect.Value"], ["fun", "reflect.Value"], ["isBuiltin", /* @__PURE__ */ $.basicType("bool")], ["node", "parse.Node"], ["name", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType("parse.Node")], ["final", "reflect.Value"]], ["reflect.Value"], true), $.methodSignature("evalChainNode", [["dot", "reflect.Value"], ["chain", /* @__PURE__ */ $.pointerType("parse.ChainNode")], ["args", /* @__PURE__ */ $.sliceType("parse.Node")], ["final", "reflect.Value"]], ["reflect.Value"], true), $.methodSignature("evalCommand", [["dot", "reflect.Value"], ["cmd", /* @__PURE__ */ $.pointerType("parse.CommandNode")], ["final", "reflect.Value"]], ["reflect.Value"], true), $.methodSignature("evalComplex", [["typ", "reflect.Type"], ["n", "parse.Node"]], ["reflect.Value"], true), $.methodSignature("evalEmptyInterface", [["dot", "reflect.Value"], ["n", "parse.Node"]], ["reflect.Value"], true), $.methodSignature("evalField", [["dot", "reflect.Value"], ["fieldName", /* @__PURE__ */ $.basicType("string")], ["node", "parse.Node"], ["args", /* @__PURE__ */ $.sliceType("parse.Node")], ["final", "reflect.Value"], ["receiver", "reflect.Value"]], ["reflect.Value"], true), $.methodSignature("evalFieldChain", [["dot", "reflect.Value"], ["receiver", "reflect.Value"], ["node", "parse.Node"], ["ident", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))], ["args", /* @__PURE__ */ $.sliceType("parse.Node")], ["final", "reflect.Value"]], ["reflect.Value"], true), $.methodSignature("evalFieldNode", [["dot", "reflect.Value"], ["field", /* @__PURE__ */ $.pointerType("parse.FieldNode")], ["args", /* @__PURE__ */ $.sliceType("parse.Node")], ["final", "reflect.Value"]], ["reflect.Value"], true), $.methodSignature("evalFloat", [["typ", "reflect.Type"], ["n", "parse.Node"]], ["reflect.Value"], true), $.methodSignature("evalFunction", [["dot", "reflect.Value"], ["node", /* @__PURE__ */ $.pointerType("parse.IdentifierNode")], ["cmd", "parse.Node"], ["args", /* @__PURE__ */ $.sliceType("parse.Node")], ["final", "reflect.Value"]], ["reflect.Value"], true), $.methodSignature("evalInteger", [["typ", "reflect.Type"], ["n", "parse.Node"]], ["reflect.Value"], true), $.methodSignature("evalPipeline", [["dot", "reflect.Value"], ["pipe", /* @__PURE__ */ $.pointerType("parse.PipeNode")]], [["value", "reflect.Value"]], true), $.methodSignature("evalString", [["typ", "reflect.Type"], ["n", "parse.Node"]], ["reflect.Value"], true), $.methodSignature("evalUnsignedInteger", [["typ", "reflect.Type"], ["n", "parse.Node"]], ["reflect.Value"], true), $.methodSignature("evalVariableNode", [["dot", "reflect.Value"], ["variable", /* @__PURE__ */ $.pointerType("parse.VariableNode")], ["args", /* @__PURE__ */ $.sliceType("parse.Node")], ["final", "reflect.Value"]], ["reflect.Value"], true), $.methodSignature("idealConstant", [["constant", /* @__PURE__ */ $.pointerType("parse.NumberNode")]], ["reflect.Value"], true), $.methodSignature("mark", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("notAFunction", [["args", /* @__PURE__ */ $.sliceType("parse.Node")], ["final", "reflect.Value"]], [], true), $.methodSignature("pop", [["mark", /* @__PURE__ */ $.basicType("int")]], [], true), $.methodSignature("printValue", [["n", "parse.Node"], ["v", "reflect.Value"]], [], true), $.methodSignature("push", [["name", /* @__PURE__ */ $.basicType("string")], ["value", "reflect.Value"]], [], true), $.methodSignature("setTopVar", [["n", /* @__PURE__ */ $.basicType("int")], ["value", "reflect.Value"]], [], true), $.methodSignature("setVar", [["name", /* @__PURE__ */ $.basicType("string")], ["value", "reflect.Value"]], [], true), $.methodSignature("validateType", [["value", "reflect.Value"], ["typ", "reflect.Type"]], ["reflect.Value"], true), $.methodSignature("varValue", [["name", /* @__PURE__ */ $.basicType("string")]], ["reflect.Value"], true), $.methodSignature("walk", [["dot", "reflect.Value"], ["node", "parse.Node"]], [], true), $.methodSignature("walkIfOrWith", [["typ", /* @__PURE__ */ $.basicType("int", "parse.NodeType")], ["dot", "reflect.Value"], ["pipe", /* @__PURE__ */ $.pointerType("parse.PipeNode")], ["list", /* @__PURE__ */ $.pointerType("parse.ListNode")], ["elseList", /* @__PURE__ */ $.pointerType("parse.ListNode")]], [], true), $.methodSignature("walkRange", [["dot", "reflect.Value"], ["r", /* @__PURE__ */ $.pointerType("parse.RangeNode")]], [], true), $.methodSignature("walkTemplate", [["dot", "reflect.Value"], ["t", /* @__PURE__ */ $.pointerType("parse.TemplateNode")]], [], true), $.methodSignature("writeError", [["err", "error"]], [], true)],
		state,
		() => [/* @__PURE__ */ $.structField("tmpl", /* @__PURE__ */ $.pointerType("template.Template"), [0], 0, false, { pkgPath: "text/template" }), /* @__PURE__ */ $.structField("wr", "io.Writer", [1], 8, false, { pkgPath: "text/template" }), /* @__PURE__ */ $.structField("node", "parse.Node", [2], 24, false, { pkgPath: "text/template" }), /* @__PURE__ */ $.structField("vars", /* @__PURE__ */ $.sliceType("template.variable"), [3], 40, false, { pkgPath: "text/template" }), /* @__PURE__ */ $.structField("depth", /* @__PURE__ */ $.basicType("int"), [4], 64, false, { pkgPath: "text/template" })]
	)
}

export class variable {
	public get name(): string {
		return this._fields.name
	}

	public set name(value: string) {
		this._fields.name = value
	}

	public get value(): reflect.Value {
		return this._fields.value
	}

	public set value(value: reflect.Value) {
		this._fields.value = value
	}

	public _fields: {
		name: string
		value: reflect.Value
	}

	constructor(init?: Partial<{name?: string, value?: reflect.Value}>, __goscriptValue?: boolean) {
		this._fields = {
			name: init?.name ?? ("" as string),
			value: init?.value ? $.markAsStructValue($.cloneStructValue(init.value)) : $.markAsStructValue(new reflect.Value())
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): variable {
		return new variable(this, true)
	}

	public __goscriptAssign(source: variable): void {
		const target = this._fields
		const values = source._fields
		target.name = values.name
		$.assignStruct(target.value, values.value)
	}

	static __typeInfo = $.registerStructType(
		"template.variable",
		() => new variable(),
		() => [],
		variable,
		() => [/* @__PURE__ */ $.structField("name", /* @__PURE__ */ $.basicType("string"), [0], 0, false, { pkgPath: "text/template" }), /* @__PURE__ */ $.structField("value", "reflect.Value", [1], 16, false, { pkgPath: "text/template" })]
	)
}

export class missingValType {
	public _fields: {
	}

	constructor(init?: Partial<{}>, __goscriptValue?: boolean) {
		this._fields = {
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): missingValType {
		return new missingValType(this, true)
	}

	public __goscriptAssign(source: missingValType): void {
	}

	static __typeInfo = $.registerStructType(
		"template.missingValType",
		() => new missingValType(),
		() => [],
		missingValType,
		() => []
	)
}

export class ExecError {
	public get Name(): string {
		return this._fields.Name
	}

	public set Name(value: string) {
		this._fields.Name = value
	}

	public get Err(): $.GoError {
		return this._fields.Err
	}

	public set Err(value: $.GoError) {
		this._fields.Err = value
	}

	public _fields: {
		Name: string
		Err: $.GoError
	}

	constructor(init?: Partial<{Name?: string, Err?: $.GoError}>, __goscriptValue?: boolean) {
		this._fields = {
			Name: init?.Name ?? ("" as string),
			Err: init?.Err ?? (null! as $.GoError)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ExecError {
		return new ExecError(this, true)
	}

	public __goscriptAssign(source: ExecError): void {
		const target = this._fields
		const values = source._fields
		target.Name = values.Name
		target.Err = $.assignFieldValue(target.Err, values.Err, "error")
	}

	public async Error(): globalThis.Promise<string> {
		const e = this;
		return $.pointerValue<Exclude<$.GoError, null>>(e.Err).Error()
	}

	public Unwrap(): $.GoError {
		const e = this;
		return e.Err
	}

	static __typeInfo = $.registerStructType(
		"template.ExecError",
		() => new ExecError(),
		() => [$.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Unwrap", [], ["error"])],
		ExecError,
		() => [/* @__PURE__ */ $.structField("Name", /* @__PURE__ */ $.basicType("string"), [0], 0, true), /* @__PURE__ */ $.structField("Err", "error", [1], 16, true)]
	)
}

export class writeError {
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

	public clone(): writeError {
		return new writeError(this, true)
	}

	public __goscriptAssign(source: writeError): void {
		const target = this._fields
		const values = source._fields
		target.Err = $.assignFieldValue(target.Err, values.Err, "error")
	}

	static __typeInfo = $.registerStructType(
		"template.writeError",
		() => new writeError(),
		() => [],
		writeError,
		() => [/* @__PURE__ */ $.structField("Err", "error", [0], 0, true)]
	)
}

export let maxExecDepth: number = initMaxExecDepth()

export function __goscript_set_maxExecDepth(__goscriptValue: number): void {
	maxExecDepth = __goscriptValue
}

export function initMaxExecDepth(): number {
	if ($.stringEqual(runtime.GOARCH, "wasm")) {
		return 1000
	}
	return 100000
}

export let zero: reflect.Value = $.markAsStructValue(new reflect.Value())

export function __goscript_set_zero(__goscriptValue: reflect.Value): void {
	$.assignStruct(zero, __goscriptValue)
}

export let missingVal: reflect.Value = $.markAsStructValue($.cloneStructValue(reflect.ValueOf($.interfaceValue(new missingValType(undefined, true), "template.missingValType", "template.missingValType"))))

export function __goscript_set_missingVal(__goscriptValue: reflect.Value): void {
	$.assignStruct(missingVal, __goscriptValue)
}

export let missingValReflectType: reflect.Type | null = reflect.TypeFor(__goscriptStatic0())

export function __goscript_set_missingValReflectType(__goscriptValue: reflect.Type | null): void {
	missingValReflectType = __goscriptValue
}

export function isMissing(v: reflect.Value): boolean {
	return $.markAsStructValue($.cloneStructValue(v)).IsValid() && ($.comparableEqual($.markAsStructValue($.cloneStructValue(v)).Type(), missingValReflectType))
}

export function doublePercent(str: string): string {
	return strings.ReplaceAll(str, "%", "%%")
}

export function errRecover(errp: $.VarRef<$.GoError> | null): void {
	let e = $.recover()
	if (e != null) {
		{
			const __goscriptTypeSwitchValue = e
			switch (true) {
				case $.typeAssert<runtime.Error | null>(__goscriptTypeSwitchValue, "runtime.Error").ok:
					{
						let err: runtime.Error | null = $.typeAssert<runtime.Error | null>(__goscriptTypeSwitchValue, "runtime.Error").value
						$.panic(e)
					}
					break
				case $.typeAssert<writeError>(__goscriptTypeSwitchValue, "template.writeError").ok:
					{
						let err: writeError = $.markAsStructValue($.cloneStructValue($.typeAssert<writeError>(__goscriptTypeSwitchValue, "template.writeError").value))
						errp!.value = err.Err
					}
					break
				case $.typeAssert<ExecError>(__goscriptTypeSwitchValue, "template.ExecError").ok:
					{
						let err: ExecError = $.markAsStructValue($.cloneStructValue($.typeAssert<ExecError>(__goscriptTypeSwitchValue, "template.ExecError").value))
						errp!.value = $.interfaceValue<$.GoError>((err).clone(), "template.ExecError", "template.ExecError")
					}
					break
				default:
					{
						let err: any = __goscriptTypeSwitchValue
						$.panic(e)
					}
					break
			}
		}
	}
}

export let walkBreak: $.GoError = errors.New("break")

export function __goscript_set_walkBreak(__goscriptValue: $.GoError): void {
	walkBreak = __goscriptValue
}

export let walkContinue: $.GoError = errors.New("continue")

export function __goscript_set_walkContinue(__goscriptValue: $.GoError): void {
	walkContinue = __goscriptValue
}

export function IsTrue(val: any): [boolean, boolean] {
	let truth: boolean = false
	let ok: boolean = false
	return isTrue($.markAsStructValue($.cloneStructValue(reflect.ValueOf(val))))
}

export function isTrue(val: reflect.Value): [boolean, boolean] {
	let truth: boolean = false
	let ok: boolean = false
	if (!$.markAsStructValue($.cloneStructValue(val)).IsValid()) {
		// Something like var x interface{}, never set. It's a form of nil.
		return [false, true]
	}
	switch ($.markAsStructValue($.cloneStructValue(val)).Kind()) {
		case reflect.Array:
		case reflect.Map:
		case reflect.Slice:
		case reflect.String:
		{
			truth = $.markAsStructValue($.cloneStructValue(val)).Len() > 0
			break
		}
		case reflect.Bool:
		{
			truth = $.markAsStructValue($.cloneStructValue(val)).Bool()
			break
		}
		case reflect.Complex64:
		case reflect.Complex128:
		{
			truth = !$.arrayEqual($.markAsStructValue($.cloneStructValue(val)).Complex(), $.complex(0, 0))
			break
		}
		case reflect.Chan:
		case reflect.Func:
		case reflect.Pointer:
		case reflect.UnsafePointer:
		case reflect.Interface:
		{
			truth = !$.markAsStructValue($.cloneStructValue(val)).IsNil()
			break
		}
		case reflect.Int:
		case reflect.Int8:
		case reflect.Int16:
		case reflect.Int32:
		case reflect.Int64:
		{
			truth = $.markAsStructValue($.cloneStructValue(val)).Int() != 0n
			break
		}
		case reflect.Float32:
		case reflect.Float64:
		{
			truth = $.markAsStructValue($.cloneStructValue(val)).Float() != 0
			break
		}
		case reflect.Uint:
		case reflect.Uint8:
		case reflect.Uint16:
		case reflect.Uint32:
		case reflect.Uint64:
		case reflect.Uintptr:
		{
			truth = $.markAsStructValue($.cloneStructValue(val)).Uint() != 0n
			break
		}
		case reflect.Struct:
		{
			truth = true
			break
		}
		default:
		{
			return [truth, ok]
			break
		}
	}
	return [truth, true]
}

export function isRuneInt(s: string): boolean {
	return ($.stringLen(s) > 0) && ($.indexString(s, 0) == 39)
}

export function isHexInt(s: string): boolean {
	return ((($.stringLen(s) > 2) && ($.indexString(s, 0) == 48)) && (($.indexString(s, 1) == 120) || ($.indexString(s, 1) == 88))) && !strings.ContainsAny(s, "pP")
}

export var errorType: reflect.Type | null

export function __goscript_init_errorType(): void {
	if (((errorType) as any) === undefined) {
		errorType = reflect.TypeFor(__goscriptStatic1())
	}
}

export function __goscript_get_errorType(): reflect.Type | null {
	if (((errorType) as any) === undefined) {
		__goscript_init_errorType()
	}
	return errorType
}

export function __goscript_set_errorType(__goscriptValue: reflect.Type | null): void {
	errorType = __goscriptValue
}

export let fmtStringerType: reflect.Type | null = reflect.TypeFor(__goscriptStatic2())

export function __goscript_set_fmtStringerType(__goscriptValue: reflect.Type | null): void {
	fmtStringerType = __goscriptValue
}

export let reflectValueType: reflect.Type | null = reflect.TypeFor(__goscriptStatic3())

export function __goscript_set_reflectValueType(__goscriptValue: reflect.Type | null): void {
	reflectValueType = __goscriptValue
}

export async function canBeNil(typ: reflect.Type | null): globalThis.Promise<boolean> {
	switch ((__goscriptAwait = (typ !== null && (typ as any).__isVarRef !== true && (typ as any).__goValue === undefined ? (typ as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(typ)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
		case reflect.Chan:
		case reflect.Func:
		case reflect.Interface:
		case reflect.Map:
		case reflect.Pointer:
		case reflect.Slice:
		{
			return true
			break
		}
		case reflect.Struct:
		{
			return $.comparableEqual(typ, reflectValueType)
			break
		}
	}
	return false
}

export function indirect(v: reflect.Value): [reflect.Value, boolean] {
	let rv: reflect.Value = $.markAsStructValue(new reflect.Value())
	let isNil: boolean = false
	for (; ($.markAsStructValue($.cloneStructValue(v)).Kind() == 22) || ($.markAsStructValue($.cloneStructValue(v)).Kind() == 20); v = $.assignStruct(v, $.markAsStructValue($.cloneStructValue(v)).Elem())) {
		if ($.markAsStructValue($.cloneStructValue(v)).IsNil()) {
			return [$.markAsStructValue($.cloneStructValue(v)), true]
		}
	}
	return [$.markAsStructValue($.cloneStructValue(v)), false]
}

export function indirectInterface(v: reflect.Value): reflect.Value {
	if ($.markAsStructValue($.cloneStructValue(v)).Kind() != 20) {
		return $.markAsStructValue($.cloneStructValue(v))
	}
	if ($.markAsStructValue($.cloneStructValue(v)).IsNil()) {
		return $.markAsStructValue(new reflect.Value())
	}
	return $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(v)).Elem()))
}

export async function printableValue(v: reflect.Value): globalThis.Promise<[any, boolean]> {
	if ($.markAsStructValue($.cloneStructValue(v)).Kind() == 22) {
		let __goscriptTuple7: any = indirect($.markAsStructValue($.cloneStructValue(v)))
		v = $.assignStruct(v, __goscriptTuple7[0])
	}
	if (!$.markAsStructValue($.cloneStructValue(v)).IsValid()) {
		return ["<no value>", true]
	}

	if (!(__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>($.markAsStructValue($.cloneStructValue(v)).Type()).Implements($.pointerValueOrNil(__goscript_get_errorType())!), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) && !(__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>($.markAsStructValue($.cloneStructValue(v)).Type()).Implements($.pointerValueOrNil(fmtStringerType)!), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
		if ($.markAsStructValue($.cloneStructValue(v)).CanAddr() && ((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>(reflect.PointerTo($.pointerValueOrNil($.markAsStructValue($.cloneStructValue(v)).Type())!)).Implements($.pointerValueOrNil(__goscript_get_errorType())!), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) || (__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>(reflect.PointerTo($.pointerValueOrNil($.markAsStructValue($.cloneStructValue(v)).Type())!)).Implements($.pointerValueOrNil(fmtStringerType)!), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))) {
			v = $.assignStruct(v, $.markAsStructValue($.cloneStructValue(v)).Addr())
		} else {
			switch ($.markAsStructValue($.cloneStructValue(v)).Kind()) {
				case reflect.Chan:
				case reflect.Func:
				{
					return [null, false]
					break
				}
			}
		}
	}
	return [$.markAsStructValue($.cloneStructValue(v)).Interface(), true]
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: "template.missingValType", zero: () => new missingValType(undefined, true) }})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: "error", zero: () => null, methods: {Error: (receiver: any, ...args: any[]) => receiver.Error(...$.stripGenericTypeArgs(args))} }})
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: "fmt.Stringer", zero: () => null, methods: {String: (receiver: any, ...args: any[]) => receiver.String(...$.stripGenericTypeArgs(args))} }})
}

var __goscriptStatic3$value: any
function __goscriptStatic3(): any {
	return __goscriptStatic3$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: "reflect.Value", zero: () => $.markAsStructValue(new reflect.Value()), methods: {Addr: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Addr(...$.stripGenericTypeArgs(args)), Bool: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Bool(...$.stripGenericTypeArgs(args)), Bytes: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Bytes(...$.stripGenericTypeArgs(args)), Call: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Call(...$.stripGenericTypeArgs(args)), CallSlice: (receiver: any, ...args: any[]) => $.pointerValue(receiver).CallSlice(...$.stripGenericTypeArgs(args)), CanAddr: (receiver: any, ...args: any[]) => $.pointerValue(receiver).CanAddr(...$.stripGenericTypeArgs(args)), CanComplex: (receiver: any, ...args: any[]) => $.pointerValue(receiver).CanComplex(...$.stripGenericTypeArgs(args)), CanConvert: (receiver: any, ...args: any[]) => $.pointerValue(receiver).CanConvert(...$.stripGenericTypeArgs(args)), CanFloat: (receiver: any, ...args: any[]) => $.pointerValue(receiver).CanFloat(...$.stripGenericTypeArgs(args)), CanInt: (receiver: any, ...args: any[]) => $.pointerValue(receiver).CanInt(...$.stripGenericTypeArgs(args)), CanInterface: (receiver: any, ...args: any[]) => $.pointerValue(receiver).CanInterface(...$.stripGenericTypeArgs(args)), CanSet: (receiver: any, ...args: any[]) => $.pointerValue(receiver).CanSet(...$.stripGenericTypeArgs(args)), CanUint: (receiver: any, ...args: any[]) => $.pointerValue(receiver).CanUint(...$.stripGenericTypeArgs(args)), Cap: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Cap(...$.stripGenericTypeArgs(args)), Clear: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Clear(...$.stripGenericTypeArgs(args)), Close: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Close(...$.stripGenericTypeArgs(args)), Comparable: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Comparable(...$.stripGenericTypeArgs(args)), Complex: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Complex(...$.stripGenericTypeArgs(args)), Convert: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Convert(...$.stripGenericTypeArgs(args)), Elem: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Elem(...$.stripGenericTypeArgs(args)), Equal: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Equal(...$.stripGenericTypeArgs(args)), Field: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Field(...$.stripGenericTypeArgs(args)), FieldByIndex: (receiver: any, ...args: any[]) => $.pointerValue(receiver).FieldByIndex(...$.stripGenericTypeArgs(args)), FieldByIndexErr: (receiver: any, ...args: any[]) => $.pointerValue(receiver).FieldByIndexErr(...$.stripGenericTypeArgs(args)), FieldByName: (receiver: any, ...args: any[]) => $.pointerValue(receiver).FieldByName(...$.stripGenericTypeArgs(args)), FieldByNameFunc: (receiver: any, ...args: any[]) => $.pointerValue(receiver).FieldByNameFunc(...$.stripGenericTypeArgs(args)), Fields: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Fields(...$.stripGenericTypeArgs(args)), Float: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Float(...$.stripGenericTypeArgs(args)), Grow: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Grow(...$.stripGenericTypeArgs(args)), Index: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Index(...$.stripGenericTypeArgs(args)), Int: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Int(...$.stripGenericTypeArgs(args)), Interface: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Interface(...$.stripGenericTypeArgs(args)), InterfaceData: (receiver: any, ...args: any[]) => $.pointerValue(receiver).InterfaceData(...$.stripGenericTypeArgs(args)), IsNil: (receiver: any, ...args: any[]) => $.pointerValue(receiver).IsNil(...$.stripGenericTypeArgs(args)), IsValid: (receiver: any, ...args: any[]) => $.pointerValue(receiver).IsValid(...$.stripGenericTypeArgs(args)), IsZero: (receiver: any, ...args: any[]) => $.pointerValue(receiver).IsZero(...$.stripGenericTypeArgs(args)), Kind: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Kind(...$.stripGenericTypeArgs(args)), Len: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Len(...$.stripGenericTypeArgs(args)), MapIndex: (receiver: any, ...args: any[]) => $.pointerValue(receiver).MapIndex(...$.stripGenericTypeArgs(args)), MapKeys: (receiver: any, ...args: any[]) => $.pointerValue(receiver).MapKeys(...$.stripGenericTypeArgs(args)), MapRange: (receiver: any, ...args: any[]) => $.pointerValue(receiver).MapRange(...$.stripGenericTypeArgs(args)), Method: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Method(...$.stripGenericTypeArgs(args)), MethodByName: (receiver: any, ...args: any[]) => $.pointerValue(receiver).MethodByName(...$.stripGenericTypeArgs(args)), Methods: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Methods(...$.stripGenericTypeArgs(args)), NumField: (receiver: any, ...args: any[]) => $.pointerValue(receiver).NumField(...$.stripGenericTypeArgs(args)), NumMethod: (receiver: any, ...args: any[]) => $.pointerValue(receiver).NumMethod(...$.stripGenericTypeArgs(args)), OverflowComplex: (receiver: any, ...args: any[]) => $.pointerValue(receiver).OverflowComplex(...$.stripGenericTypeArgs(args)), OverflowFloat: (receiver: any, ...args: any[]) => $.pointerValue(receiver).OverflowFloat(...$.stripGenericTypeArgs(args)), OverflowInt: (receiver: any, ...args: any[]) => $.pointerValue(receiver).OverflowInt(...$.stripGenericTypeArgs(args)), OverflowUint: (receiver: any, ...args: any[]) => $.pointerValue(receiver).OverflowUint(...$.stripGenericTypeArgs(args)), Pointer: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Pointer(...$.stripGenericTypeArgs(args)), Recv: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Recv(...$.stripGenericTypeArgs(args)), Send: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Send(...$.stripGenericTypeArgs(args)), Seq: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Seq(...$.stripGenericTypeArgs(args)), Seq2: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Seq2(...$.stripGenericTypeArgs(args)), Set: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Set(...$.stripGenericTypeArgs(args)), SetBool: (receiver: any, ...args: any[]) => $.pointerValue(receiver).SetBool(...$.stripGenericTypeArgs(args)), SetBytes: (receiver: any, ...args: any[]) => $.pointerValue(receiver).SetBytes(...$.stripGenericTypeArgs(args)), SetCap: (receiver: any, ...args: any[]) => $.pointerValue(receiver).SetCap(...$.stripGenericTypeArgs(args)), SetComplex: (receiver: any, ...args: any[]) => $.pointerValue(receiver).SetComplex(...$.stripGenericTypeArgs(args)), SetFloat: (receiver: any, ...args: any[]) => $.pointerValue(receiver).SetFloat(...$.stripGenericTypeArgs(args)), SetInt: (receiver: any, ...args: any[]) => $.pointerValue(receiver).SetInt(...$.stripGenericTypeArgs(args)), SetIterKey: (receiver: any, ...args: any[]) => $.pointerValue(receiver).SetIterKey(...$.stripGenericTypeArgs(args)), SetIterValue: (receiver: any, ...args: any[]) => $.pointerValue(receiver).SetIterValue(...$.stripGenericTypeArgs(args)), SetLen: (receiver: any, ...args: any[]) => $.pointerValue(receiver).SetLen(...$.stripGenericTypeArgs(args)), SetMapIndex: (receiver: any, ...args: any[]) => $.pointerValue(receiver).SetMapIndex(...$.stripGenericTypeArgs(args)), SetPointer: (receiver: any, ...args: any[]) => $.pointerValue(receiver).SetPointer(...$.stripGenericTypeArgs(args)), SetString: (receiver: any, ...args: any[]) => $.pointerValue(receiver).SetString(...$.stripGenericTypeArgs(args)), SetUint: (receiver: any, ...args: any[]) => $.pointerValue(receiver).SetUint(...$.stripGenericTypeArgs(args)), SetZero: (receiver: any, ...args: any[]) => $.pointerValue(receiver).SetZero(...$.stripGenericTypeArgs(args)), Slice: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Slice(...$.stripGenericTypeArgs(args)), Slice3: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Slice3(...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => $.pointerValue(receiver).String(...$.stripGenericTypeArgs(args)), TryRecv: (receiver: any, ...args: any[]) => $.pointerValue(receiver).TryRecv(...$.stripGenericTypeArgs(args)), TrySend: (receiver: any, ...args: any[]) => $.pointerValue(receiver).TrySend(...$.stripGenericTypeArgs(args)), Type: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Type(...$.stripGenericTypeArgs(args)), Uint: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Uint(...$.stripGenericTypeArgs(args)), UnsafeAddr: (receiver: any, ...args: any[]) => $.pointerValue(receiver).UnsafeAddr(...$.stripGenericTypeArgs(args)), UnsafePointer: (receiver: any, ...args: any[]) => $.pointerValue(receiver).UnsafePointer(...$.stripGenericTypeArgs(args)), abiType: (receiver: any, ...args: any[]) => $.pointerValue(receiver).abiType(...$.stripGenericTypeArgs(args)), abiTypeSlow: (receiver: any, ...args: any[]) => $.pointerValue(receiver).abiTypeSlow(...$.stripGenericTypeArgs(args)), assignTo: (receiver: any, ...args: any[]) => $.pointerValue(receiver).assignTo(...$.stripGenericTypeArgs(args)), bytesSlow: (receiver: any, ...args: any[]) => $.pointerValue(receiver).bytesSlow(...$.stripGenericTypeArgs(args)), call: (receiver: any, ...args: any[]) => $.pointerValue(receiver).call(...$.stripGenericTypeArgs(args)), capNonSlice: (receiver: any, ...args: any[]) => $.pointerValue(receiver).capNonSlice(...$.stripGenericTypeArgs(args)), extendSlice: (receiver: any, ...args: any[]) => $.pointerValue(receiver).extendSlice(...$.stripGenericTypeArgs(args)), grow: (receiver: any, ...args: any[]) => $.pointerValue(receiver).grow(...$.stripGenericTypeArgs(args)), kind: (receiver: any, ...args: any[]) => $.pointerValue(receiver).kind(...$.stripGenericTypeArgs(args)), lenNonSlice: (receiver: any, ...args: any[]) => $.pointerValue(receiver).lenNonSlice(...$.stripGenericTypeArgs(args)), mustBe: (receiver: any, ...args: any[]) => $.pointerValue(receiver).mustBe(...$.stripGenericTypeArgs(args)), mustBeAssignable: (receiver: any, ...args: any[]) => $.pointerValue(receiver).mustBeAssignable(...$.stripGenericTypeArgs(args)), mustBeAssignableSlow: (receiver: any, ...args: any[]) => $.pointerValue(receiver).mustBeAssignableSlow(...$.stripGenericTypeArgs(args)), mustBeExported: (receiver: any, ...args: any[]) => $.pointerValue(receiver).mustBeExported(...$.stripGenericTypeArgs(args)), mustBeExportedSlow: (receiver: any, ...args: any[]) => $.pointerValue(receiver).mustBeExportedSlow(...$.stripGenericTypeArgs(args)), panicNotBool: (receiver: any, ...args: any[]) => $.pointerValue(receiver).panicNotBool(...$.stripGenericTypeArgs(args)), panicNotMap: (receiver: any, ...args: any[]) => $.pointerValue(receiver).panicNotMap(...$.stripGenericTypeArgs(args)), pointer: (receiver: any, ...args: any[]) => $.pointerValue(receiver).pointer(...$.stripGenericTypeArgs(args)), recv: (receiver: any, ...args: any[]) => $.pointerValue(receiver).recv(...$.stripGenericTypeArgs(args)), ro: (receiver: any, ...args: any[]) => $.pointerValue(receiver).ro(...$.stripGenericTypeArgs(args)), runes: (receiver: any, ...args: any[]) => $.pointerValue(receiver).runes(...$.stripGenericTypeArgs(args)), send: (receiver: any, ...args: any[]) => $.pointerValue(receiver).send(...$.stripGenericTypeArgs(args)), setRunes: (receiver: any, ...args: any[]) => $.pointerValue(receiver).setRunes(...$.stripGenericTypeArgs(args)), stringNonString: (receiver: any, ...args: any[]) => $.pointerValue(receiver).stringNonString(...$.stripGenericTypeArgs(args)), typ: (receiver: any, ...args: any[]) => $.pointerValue(receiver).typ(...$.stripGenericTypeArgs(args)), typeSlow: (receiver: any, ...args: any[]) => $.pointerValue(receiver).typeSlow(...$.stripGenericTypeArgs(args))} }})
}

var __goscriptAwait: any
