// Generated file based on call.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as strconv from "@goscript/strconv/index.js"

import * as strings from "@goscript/strings/index.js"

import * as __goscript_controller from "./controller.gs.ts"

import * as __goscript_matchers from "./matchers.gs.ts"
import "@goscript/fmt/index.js"
import "@goscript/reflect/index.js"
import "@goscript/strconv/index.js"
import "@goscript/strings/index.js"
import "./controller.gs.ts"
import "./matchers.gs.ts"

$.registerTypePackagePath("github.com/golang/mock/gomock", ["gomock.Call"])

export class Call {
	public get t(): __goscript_controller.TestHelper | null {
		return this._fields.t
	}

	public set t(value: __goscript_controller.TestHelper | null) {
		this._fields.t = value
	}

	public get receiver(): any {
		return this._fields.receiver
	}

	public set receiver(value: any) {
		this._fields.receiver = value
	}

	public get method(): string {
		return this._fields.method
	}

	public set method(value: string) {
		this._fields.method = value
	}

	public get methodType(): reflect.Type | null {
		return this._fields.methodType
	}

	public set methodType(value: reflect.Type | null) {
		this._fields.methodType = value
	}

	public get args(): $.Slice<__goscript_matchers.Matcher | null> {
		return this._fields.args
	}

	public set args(value: $.Slice<__goscript_matchers.Matcher | null>) {
		this._fields.args = value
	}

	public get origin(): string {
		return this._fields.origin
	}

	public set origin(value: string) {
		this._fields.origin = value
	}

	public get preReqs(): $.Slice<Call | $.VarRef<Call> | null> {
		return this._fields.preReqs
	}

	public set preReqs(value: $.Slice<Call | $.VarRef<Call> | null>) {
		this._fields.preReqs = value
	}

	// Expectations
	public get minCalls(): number {
		return this._fields.minCalls
	}

	public set minCalls(value: number) {
		this._fields.minCalls = value
	}

	// Expectations
	public get maxCalls(): number {
		return this._fields.maxCalls
	}

	public set maxCalls(value: number) {
		this._fields.maxCalls = value
	}

	public get numCalls(): number {
		return this._fields.numCalls
	}

	public set numCalls(value: number) {
		this._fields.numCalls = value
	}

	// actions are called when this Call is called. Each action gets the args and
	// can set the return values by returning a non-nil slice. Actions run in the
	// order they are created.
	public get actions(): $.Slice<((_p0: $.Slice<any>) => $.Slice<any> | globalThis.Promise<$.Slice<any>>) | null> {
		return this._fields.actions
	}

	public set actions(value: $.Slice<((_p0: $.Slice<any>) => $.Slice<any> | globalThis.Promise<$.Slice<any>>) | null>) {
		this._fields.actions = value
	}

	public _fields: {
		t: __goscript_controller.TestHelper | null
		receiver: any
		method: string
		methodType: reflect.Type | null
		args: $.Slice<__goscript_matchers.Matcher | null>
		origin: string
		preReqs: $.Slice<Call | $.VarRef<Call> | null>
		minCalls: number
		maxCalls: number
		numCalls: number
		actions: $.Slice<((_p0: $.Slice<any>) => $.Slice<any> | globalThis.Promise<$.Slice<any>>) | null>
	}

	constructor(init?: Partial<{t?: __goscript_controller.TestHelper | null, receiver?: any, method?: string, methodType?: reflect.Type | null, args?: $.Slice<__goscript_matchers.Matcher | null>, origin?: string, preReqs?: $.Slice<Call | $.VarRef<Call> | null>, minCalls?: number, maxCalls?: number, numCalls?: number, actions?: $.Slice<((_p0: $.Slice<any>) => $.Slice<any> | globalThis.Promise<$.Slice<any>>) | null>}>, __goscriptValue?: boolean) {
		this._fields = {
			t: init?.t ?? (null! as __goscript_controller.TestHelper | null),
			receiver: init?.receiver ?? (null! as any),
			method: init?.method ?? ("" as string),
			methodType: init?.methodType ?? (null! as reflect.Type | null),
			args: init?.args ?? (null! as $.Slice<__goscript_matchers.Matcher | null>),
			origin: init?.origin ?? ("" as string),
			preReqs: init?.preReqs ?? (null! as $.Slice<Call | $.VarRef<Call> | null>),
			minCalls: init?.minCalls ?? (0 as number),
			maxCalls: init?.maxCalls ?? (0 as number),
			numCalls: init?.numCalls ?? (0 as number),
			actions: init?.actions ?? (null! as $.Slice<((_p0: $.Slice<any>) => $.Slice<any> | globalThis.Promise<$.Slice<any>>) | null>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Call {
		return new Call(this, true)
	}

	public __goscriptAssign(source: Call): void {
		const target = this._fields
		const values = source._fields
		target.t = $.assignFieldValue(target.t, values.t, "gomock.TestHelper")
		target.receiver = $.assignFieldValue(target.receiver, values.receiver, { kind: $.TypeKind.Interface, methods: [] })
		target.method = values.method
		target.methodType = $.assignFieldValue(target.methodType, values.methodType, "reflect.Type")
		target.args = values.args
		target.origin = values.origin
		target.preReqs = values.preReqs
		target.minCalls = values.minCalls
		target.maxCalls = values.maxCalls
		target.numCalls = values.numCalls
		target.actions = values.actions
	}

	public async After(preReq: Call | $.VarRef<Call> | null): globalThis.Promise<Call | $.VarRef<Call> | null> {
		let c: Call | $.VarRef<Call> | null = this;
		const c$: Call = c == null ? $.pointerTarget<Call>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<Call>(c)
		void (__goscriptAwait = $.pointerValue<Exclude<__goscript_controller.TestHelper, null>>((c$ as Call).t).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)

		if ($.pointerEqual(c, preReq)) {
			void (__goscriptAwait = $.pointerValue<Exclude<__goscript_controller.TestHelper, null>>((c$ as Call).t).Fatalf("A call isn't allowed to be its own prerequisite", null), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		if ((preReq !== null && (preReq as any).__isVarRef !== true && (preReq as any).__goValue === undefined ? ((preReq as any) as Call).isPreReq(c) : Call.prototype.isPreReq.call(preReq, c))) {
			void (__goscriptAwait = $.pointerValue<Exclude<__goscript_controller.TestHelper, null>>((c$ as Call).t).Fatalf("Loop in call order: %v is a prerequisite to %v (possibly indirectly).", $.arrayToSlice<any>([$.interfaceValue(c, "*gomock.Call", /* @__PURE__ */ $.pointerType("gomock.Call")), $.interfaceValue(preReq, "*gomock.Call", /* @__PURE__ */ $.pointerType("gomock.Call"))])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}

		;(c$ as Call).preReqs = $.appendOne((c$ as Call).preReqs, preReq, $.appendZeros.nil)
		return c
	}

	public AnyTimes(): Call | $.VarRef<Call> | null {
		let c: Call | $.VarRef<Call> | null = this;
		const c$: Call = c == null ? $.pointerTarget<Call>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<Call>(c)
		let __goscriptAssign0_0: number = 0
		let __goscriptAssign0_1: number = 100000000;
		;(c$ as Call).minCalls = __goscriptAssign0_0;
		;(c$ as Call).maxCalls = __goscriptAssign0_1
		return c
	}

	public async Do(f: any): globalThis.Promise<Call | $.VarRef<Call> | null> {
		const c: Call | $.VarRef<Call> | null = this;
		const c$: Call = c == null ? $.pointerTarget<Call>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<Call>(c)
		// TODO: Check arity and types here, rather than dying badly elsewhere.
		let v = $.markAsStructValue($.cloneStructValue(reflect.ValueOf(f)))

		await Call.prototype.addAction.call(c, $.functionValue(async (args: $.Slice<any>): globalThis.Promise<$.Slice<any>> => {
			void (__goscriptAwait = $.pointerValue<Exclude<__goscript_controller.TestHelper, null>>((c$ as Call).t).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			let ft = $.markAsStructValue($.cloneStructValue(v)).Type()
			if ((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>((c$ as Call).methodType).NumIn(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != (__goscriptAwait = (ft !== null && (ft as any).__isVarRef !== true && (ft as any).__goValue === undefined ? (ft as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(ft)).NumIn(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
				if ((__goscriptAwait = (ft !== null && (ft as any).__isVarRef !== true && (ft as any).__goValue === undefined ? (ft as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(ft)).IsVariadic(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
					void (__goscriptAwait = $.pointerValue<Exclude<__goscript_controller.TestHelper, null>>((c$ as Call).t).Fatalf("wrong number of arguments in Do func for %T.%v The function signature must match the mocked method, a variadic function cannot be used.", $.arrayToSlice<any>([(c$ as Call).receiver, (c$ as Call).method])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				} else {
					void (__goscriptAwait = $.pointerValue<Exclude<__goscript_controller.TestHelper, null>>((c$ as Call).t).Fatalf("wrong number of arguments in Do func for %T.%v: got %d, want %d [%s]", $.arrayToSlice<any>([(c$ as Call).receiver, (c$ as Call).method, $.basicInterfaceValue((__goscriptAwait = (ft !== null && (ft as any).__isVarRef !== true && (ft as any).__goValue === undefined ? (ft as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(ft)).NumIn(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), "int"), $.basicInterfaceValue((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>((c$ as Call).methodType).NumIn(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), "int"), (c$ as Call).origin])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				}
				return null
			}
			let vArgs: $.Slice<reflect.Value> = $.makeSlice<reflect.Value>($.sliceLen(args), undefined, undefined, () => $.markAsStructValue(new reflect.Value()))
			for (let __goscriptSliceWindow0 = $.sliceRange(args), i = 0; i < __goscriptSliceWindow0.length; i++) {
				if (((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)] as any) != null) {
					$.assignStruct($.sliceElems(vArgs!)[$.sliceSlot(vArgs!, i)], reflect.ValueOf(((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)] as any)))
				} else {
					// Use the zero value for the arg.
					$.assignStruct($.sliceElems(vArgs!)[$.sliceSlot(vArgs!, i)], reflect.Zero($.pointerValueOrNil((__goscriptAwait = (ft !== null && (ft as any).__isVarRef !== true && (ft as any).__goValue === undefined ? (ft as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(ft)).In(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))!))
				}
			}
			await $.markAsStructValue($.cloneStructValue(v)).Call(vArgs)
			return null
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })], results: [/* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })] } as $.FunctionTypeInfo)))
		return c
	}

	public async DoAndReturn(f: any): globalThis.Promise<Call | $.VarRef<Call> | null> {
		const c: Call | $.VarRef<Call> | null = this;
		const c$: Call = c == null ? $.pointerTarget<Call>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<Call>(c)
		// TODO: Check arity and types here, rather than dying badly elsewhere.
		let v = $.markAsStructValue($.cloneStructValue(reflect.ValueOf(f)))

		await Call.prototype.addAction.call(c, $.functionValue(async (args: $.Slice<any>): globalThis.Promise<$.Slice<any>> => {
			void (__goscriptAwait = $.pointerValue<Exclude<__goscript_controller.TestHelper, null>>((c$ as Call).t).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			let ft = $.markAsStructValue($.cloneStructValue(v)).Type()
			if ((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>((c$ as Call).methodType).NumIn(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != (__goscriptAwait = (ft !== null && (ft as any).__isVarRef !== true && (ft as any).__goValue === undefined ? (ft as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(ft)).NumIn(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
				if ((__goscriptAwait = (ft !== null && (ft as any).__isVarRef !== true && (ft as any).__goValue === undefined ? (ft as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(ft)).IsVariadic(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
					void (__goscriptAwait = $.pointerValue<Exclude<__goscript_controller.TestHelper, null>>((c$ as Call).t).Fatalf("wrong number of arguments in DoAndReturn func for %T.%v The function signature must match the mocked method, a variadic function cannot be used.", $.arrayToSlice<any>([(c$ as Call).receiver, (c$ as Call).method])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				} else {
					void (__goscriptAwait = $.pointerValue<Exclude<__goscript_controller.TestHelper, null>>((c$ as Call).t).Fatalf("wrong number of arguments in DoAndReturn func for %T.%v: got %d, want %d [%s]", $.arrayToSlice<any>([(c$ as Call).receiver, (c$ as Call).method, $.basicInterfaceValue((__goscriptAwait = (ft !== null && (ft as any).__isVarRef !== true && (ft as any).__goValue === undefined ? (ft as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(ft)).NumIn(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), "int"), $.basicInterfaceValue((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>((c$ as Call).methodType).NumIn(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), "int"), (c$ as Call).origin])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				}
				return null
			}
			let vArgs: $.Slice<reflect.Value> = $.makeSlice<reflect.Value>($.sliceLen(args), undefined, undefined, () => $.markAsStructValue(new reflect.Value()))
			for (let __goscriptSliceWindow1 = $.sliceRange(args), i = 0; i < __goscriptSliceWindow1.length; i++) {
				if (((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, i)] as any) != null) {
					$.assignStruct($.sliceElems(vArgs!)[$.sliceSlot(vArgs!, i)], reflect.ValueOf(((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, i)] as any)))
				} else {
					// Use the zero value for the arg.
					$.assignStruct($.sliceElems(vArgs!)[$.sliceSlot(vArgs!, i)], reflect.Zero($.pointerValueOrNil((__goscriptAwait = (ft !== null && (ft as any).__isVarRef !== true && (ft as any).__goValue === undefined ? (ft as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(ft)).In(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))!))
				}
			}
			let vRets: $.Slice<reflect.Value> = await $.markAsStructValue($.cloneStructValue(v)).Call(vArgs)
			let rets: $.Slice<any> = $.makeSlice<any>($.sliceLen(vRets))
			for (let __goscriptRangeTarget0 = vRets, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), i = 0; i < __goscriptRangeWindow0.length; i++) {
				let ret = $.markAsStructValue($.cloneStructValue((__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + i] as reflect.Value)))
				$.sliceElems(rets!)[$.sliceSlot(rets!, i)] = $.markAsStructValue($.cloneStructValue(ret)).Interface()
			}
			return rets
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })], results: [/* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })] } as $.FunctionTypeInfo)))
		return c
	}

	public MaxTimes(n: number): Call | $.VarRef<Call> | null {
		let c: Call | $.VarRef<Call> | null = this;
		const c$: Call = c == null ? $.pointerTarget<Call>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<Call>(c);
		;(c$ as Call).maxCalls = n
		if ((c$ as Call).minCalls == 1) {
			;(c$ as Call).minCalls = 0
		}
		return c
	}

	public MinTimes(n: number): Call | $.VarRef<Call> | null {
		let c: Call | $.VarRef<Call> | null = this;
		const c$: Call = c == null ? $.pointerTarget<Call>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<Call>(c);
		;(c$ as Call).minCalls = n
		if ((c$ as Call).maxCalls == 1) {
			;(c$ as Call).maxCalls = 100000000
		}
		return c
	}

	public async Return(rets: $.Slice<any>): globalThis.Promise<Call | $.VarRef<Call> | null> {
		const c: Call | $.VarRef<Call> | null = this;
		const c$: Call = c == null ? $.pointerTarget<Call>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<Call>(c)
		void (__goscriptAwait = $.pointerValue<Exclude<__goscript_controller.TestHelper, null>>((c$ as Call).t).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)

		let mt = (c$ as Call).methodType
		if ($.sliceLen(rets) != (__goscriptAwait = (mt !== null && (mt as any).__isVarRef !== true && (mt as any).__goValue === undefined ? (mt as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(mt)).NumOut(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
			void (__goscriptAwait = $.pointerValue<Exclude<__goscript_controller.TestHelper, null>>((c$ as Call).t).Fatalf("wrong number of arguments to Return for %T.%v: got %d, want %d [%s]", $.arrayToSlice<any>([(c$ as Call).receiver, (c$ as Call).method, $.basicInterfaceValue($.sliceLen(rets), "int"), $.basicInterfaceValue((__goscriptAwait = (mt !== null && (mt as any).__isVarRef !== true && (mt as any).__goValue === undefined ? (mt as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(mt)).NumOut(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), "int"), (c$ as Call).origin])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		for (let __goscriptRangeTarget1 = rets, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), i = 0; i < __goscriptRangeWindow1.length; i++) {
			let ret = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + i] as any)
			{
				let got = reflect.TypeOf(ret)
				let want = (__goscriptAwait = (mt !== null && (mt as any).__isVarRef !== true && (mt as any).__goValue === undefined ? (mt as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(mt)).Out(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if ($.comparableEqual(got, want)) {
				} else {
					if (got == null) {
						// Nil needs special handling.
						switch ((__goscriptAwait = (want !== null && (want as any).__isVarRef !== true && (want as any).__goValue === undefined ? (want as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(want)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
							case reflect.Chan:
							case reflect.Func:
							case reflect.Interface:
							case reflect.Map:
							case reflect.Ptr:
							case reflect.Slice:
							{
								break
							}
							default:
							{
								void (__goscriptAwait = $.pointerValue<Exclude<__goscript_controller.TestHelper, null>>((c$ as Call).t).Fatalf("argument %d to Return for %T.%v is nil, but %v is not nillable [%s]", $.arrayToSlice<any>([$.basicInterfaceValue(i, "int"), (c$ as Call).receiver, (c$ as Call).method, (want as any), (c$ as Call).origin])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
								break
							}
						}
					} else {
						if ((__goscriptAwait = (got !== null && (got as any).__isVarRef !== true && (got as any).__goValue === undefined ? (got as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(got)).AssignableTo($.pointerValueOrNil(want)!), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
							// Assignable type relation. Make the assignment now so that the generated code
							// can return the values with a type assertion.
							let v = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(reflect.New($.pointerValueOrNil(want)!))).Elem()))
							$.markAsStructValue($.cloneStructValue(v)).Set($.markAsStructValue($.cloneStructValue(reflect.ValueOf(ret))));
							;(__goscriptRangeWindow1.backing as any[])[__goscriptRangeWindow1.offset + i] = $.markAsStructValue($.cloneStructValue(v)).Interface()
						} else {
							void (__goscriptAwait = $.pointerValue<Exclude<__goscript_controller.TestHelper, null>>((c$ as Call).t).Fatalf("wrong type of argument %d to Return for %T.%v: %v is not assignable to %v [%s]", $.arrayToSlice<any>([$.basicInterfaceValue(i, "int"), (c$ as Call).receiver, (c$ as Call).method, (got as any), (want as any), (c$ as Call).origin])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
						}
					}
				}
			}
		}

		await Call.prototype.addAction.call(c, $.functionValue((_p0: $.Slice<any>): $.Slice<any> => {
			return rets
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })], results: [/* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })] } as $.FunctionTypeInfo)))

		return c
	}

	public async SetArg(n: number, value: any): globalThis.Promise<Call | $.VarRef<Call> | null> {
		const c: Call | $.VarRef<Call> | null = this;
		const c$: Call = c == null ? $.pointerTarget<Call>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<Call>(c)
		void (__goscriptAwait = $.pointerValue<Exclude<__goscript_controller.TestHelper, null>>((c$ as Call).t).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)

		let mt = (c$ as Call).methodType
		// TODO: This will break on variadic methods.
		// We will need to check those at invocation time.
		if ((n < 0) || (n >= (__goscriptAwait = (mt !== null && (mt as any).__isVarRef !== true && (mt as any).__goValue === undefined ? (mt as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(mt)).NumIn(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))) {
			void (__goscriptAwait = $.pointerValue<Exclude<__goscript_controller.TestHelper, null>>((c$ as Call).t).Fatalf("SetArg(%d, ...) called for a method with %d args [%s]", $.arrayToSlice<any>([$.basicInterfaceValue(n, "int"), $.basicInterfaceValue((__goscriptAwait = (mt !== null && (mt as any).__isVarRef !== true && (mt as any).__goValue === undefined ? (mt as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(mt)).NumIn(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), "int"), (c$ as Call).origin])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		// Permit setting argument through an interface.
		// In the interface case, we don't (nay, can't) check the type here.
		let at = (__goscriptAwait = (mt !== null && (mt as any).__isVarRef !== true && (mt as any).__goValue === undefined ? (mt as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(mt)).In(n), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		switch ((__goscriptAwait = (at !== null && (at as any).__isVarRef !== true && (at as any).__goValue === undefined ? (at as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(at)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
			case reflect.Ptr:
			{
				let dt = (__goscriptAwait = (at !== null && (at as any).__isVarRef !== true && (at as any).__goValue === undefined ? (at as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(at)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				{
					let vt = reflect.TypeOf(value)
					if (!(__goscriptAwait = (vt !== null && (vt as any).__isVarRef !== true && (vt as any).__goValue === undefined ? (vt as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(vt)).AssignableTo($.pointerValueOrNil(dt)!), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
						void (__goscriptAwait = $.pointerValue<Exclude<__goscript_controller.TestHelper, null>>((c$ as Call).t).Fatalf("SetArg(%d, ...) argument is a %v, not assignable to %v [%s]", $.arrayToSlice<any>([$.basicInterfaceValue(n, "int"), (vt as any), (dt as any), (c$ as Call).origin])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					}
				}
				break
			}
			case reflect.Interface:
			{
				break
			}
			case reflect.Slice:
			{
				break
			}
			case reflect.Map:
			{
				break
			}
			default:
			{
				void (__goscriptAwait = $.pointerValue<Exclude<__goscript_controller.TestHelper, null>>((c$ as Call).t).Fatalf("SetArg(%d, ...) referring to argument of non-pointer non-interface non-slice non-map type %v [%s]", $.arrayToSlice<any>([$.basicInterfaceValue(n, "int"), (at as any), (c$ as Call).origin])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				break
			}
		}

		await Call.prototype.addAction.call(c, $.functionValue(async (args: $.Slice<any>): globalThis.Promise<$.Slice<any>> => {
			let v = $.markAsStructValue($.cloneStructValue(reflect.ValueOf(value)))
			switch ((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>(reflect.TypeOf($.arrayIndex(args!, n))).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
				case reflect.Slice:
				{
					setSlice($.arrayIndex(args!, n), v)
					break
				}
				case reflect.Map:
				{
					setMap($.arrayIndex(args!, n), v)
					break
				}
				default:
				{
					$.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(reflect.ValueOf($.arrayIndex(args!, n)))).Elem())).Set($.markAsStructValue($.cloneStructValue(v)))
					break
				}
			}
			return null
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })], results: [/* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })] } as $.FunctionTypeInfo)))
		return c
	}

	public async String(): globalThis.Promise<string> {
		const c: Call | $.VarRef<Call> | null = this;
		const c$: Call = c == null ? $.pointerTarget<Call>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<Call>(c)
		let args: $.Slice<string> = $.makeSlice<string>($.sliceLen((c$ as Call).args), undefined, "string")
		for (let __goscriptRangeTarget2 = (c$ as Call).args, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), __goscriptSliceWindow2 = $.sliceRange(args), i = 0; i < __goscriptRangeWindow2.length; i++) {
			let arg = (__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + i] as __goscript_matchers.Matcher | null);
			;(__goscriptSliceWindow2.backing as any[])[$.windowSlot(__goscriptSliceWindow2, i)] = (__goscriptAwait = (arg !== null && (arg as any).__isVarRef !== true && (arg as any).__goValue === undefined ? (arg as Exclude<__goscript_matchers.Matcher, null>) : $.pointerValue<Exclude<__goscript_matchers.Matcher, null>>(arg)).String(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		let _arguments = strings.Join(args, ", ")
		return fmt.Sprintf("%T.%v(%s) %s", (c$ as Call).receiver, (c$ as Call).method, _arguments, (c$ as Call).origin)
	}

	public Times(n: number): Call | $.VarRef<Call> | null {
		let c: Call | $.VarRef<Call> | null = this;
		const c$: Call = c == null ? $.pointerTarget<Call>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<Call>(c)
		let __goscriptAssign1_0: number = n
		let __goscriptAssign1_1: number = n;
		;(c$ as Call).minCalls = __goscriptAssign1_0;
		;(c$ as Call).maxCalls = __goscriptAssign1_1
		return c
	}

	public async addAction(action: ((_p0: $.Slice<any>) => $.Slice<any> | globalThis.Promise<$.Slice<any>>) | null): globalThis.Promise<void> {
		let c: Call | $.VarRef<Call> | null = this;
		const c$: Call = c == null ? $.pointerTarget<Call>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<Call>(c);
		;(c$ as Call).actions = $.appendOne((c$ as Call).actions, action, $.appendZeros.nil)
	}

	public call(): $.Slice<((_p0: $.Slice<any>) => $.Slice<any> | globalThis.Promise<$.Slice<any>>) | null> {
		let c: Call | $.VarRef<Call> | null = this;
		const c$: Call = c == null ? $.pointerTarget<Call>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<Call>(c);
		;(c$ as Call).numCalls++
		return (c$ as Call).actions
	}

	public dropPrereqs(): $.Slice<Call | $.VarRef<Call> | null> {
		let c: Call | $.VarRef<Call> | null = this;
		let preReqs: $.Slice<Call | $.VarRef<Call> | null> = null! as $.Slice<Call | $.VarRef<Call> | null>
		const c$: Call = c == null ? $.pointerTarget<Call>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<Call>(c)
		preReqs = (c$ as Call).preReqs;
		;(c$ as Call).preReqs = null
		return preReqs
	}

	public exhausted(): boolean {
		const c: Call | $.VarRef<Call> | null = this;
		const c$: Call = c == null ? $.pointerTarget<Call>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<Call>(c)
		return (c$ as Call).numCalls >= (c$ as Call).maxCalls
	}

	public isPreReq(other: Call | $.VarRef<Call> | null): boolean {
		const c: Call | $.VarRef<Call> | null = this;
		for (let __goscriptRangeTarget3 = $.pointerValue<Call>(c).preReqs, __goscriptRangeWindow3 = $.sliceRange(__goscriptRangeTarget3), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow3.length; __rangeIndex++) {
			let preReq = (__goscriptRangeWindow3.backing[__goscriptRangeWindow3.offset + __rangeIndex] as Call | $.VarRef<Call> | null)
			if (($.pointerEqual(other, preReq)) || (preReq !== null && (preReq as any).__isVarRef !== true && (preReq as any).__goValue === undefined ? ((preReq as any) as Call).isPreReq(other) : Call.prototype.isPreReq.call(preReq, other))) {
				return true
			}
		}
		return false
	}

	public async matches(args: $.Slice<any>): globalThis.Promise<$.GoError> {
		const c: Call | $.VarRef<Call> | null = this;
		const c$: Call = c == null ? $.pointerTarget<Call>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<Call>(c)
		if (!(__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>((c$ as Call).methodType).IsVariadic(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
			if ($.sliceLen(args) != $.sliceLen((c$ as Call).args)) {
				return fmt.Errorf("expected call at %s has the wrong number of arguments. Got: %d, want: %d", (c$ as Call).origin, $.basicInterfaceValue($.sliceLen(args), "int"), $.basicInterfaceValue($.sliceLen((c$ as Call).args), "int"))
			}

			for (let __goscriptRangeTarget4 = (c$ as Call).args, __goscriptRangeWindow4 = $.sliceRange(__goscriptRangeTarget4), __goscriptSliceWindow3 = $.sliceRange(args), i = 0; i < __goscriptRangeWindow4.length; i++) {
				let m = (__goscriptRangeWindow4.backing[__goscriptRangeWindow4.offset + i] as __goscript_matchers.Matcher | null)
				if (!(__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<__goscript_matchers.Matcher, null>) : $.pointerValue<Exclude<__goscript_matchers.Matcher, null>>(m)).Matches(((__goscriptSliceWindow3.backing as any[])[$.windowSlot(__goscriptSliceWindow3, i)] as any)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
					return fmt.Errorf("expected call at %s doesn't match the argument at index %d.\nGot: %v\nWant: %v", (c$ as Call).origin, $.basicInterfaceValue(i, "int"), await formatGottenArg(m, ((__goscriptSliceWindow3.backing as any[])[$.windowSlot(__goscriptSliceWindow3, i)] as any)), (m as any))
				}
			}
		} else {
			if ($.sliceLen((c$ as Call).args) < ((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>((c$ as Call).methodType).NumIn(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) - 1)) {
				return fmt.Errorf("expected call at %s has the wrong number of matchers. Got: %d, want: %d", (c$ as Call).origin, $.basicInterfaceValue($.sliceLen((c$ as Call).args), "int"), $.basicInterfaceValue((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>((c$ as Call).methodType).NumIn(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) - 1, "int"))
			}
			if (($.sliceLen((c$ as Call).args) != (__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>((c$ as Call).methodType).NumIn(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) && ($.sliceLen(args) != $.sliceLen((c$ as Call).args))) {
				return fmt.Errorf("expected call at %s has the wrong number of arguments. Got: %d, want: %d", (c$ as Call).origin, $.basicInterfaceValue($.sliceLen(args), "int"), $.basicInterfaceValue($.sliceLen((c$ as Call).args), "int"))
			}
			if ($.sliceLen(args) < ($.sliceLen((c$ as Call).args) - 1)) {
				return fmt.Errorf("expected call at %s has the wrong number of arguments. Got: %d, want: greater than or equal to %d", (c$ as Call).origin, $.basicInterfaceValue($.sliceLen(args), "int"), $.basicInterfaceValue($.sliceLen((c$ as Call).args) - 1, "int"))
			}

			for (let __goscriptRangeTarget6 = (c$ as Call).args, __goscriptRangeWindow5 = $.sliceRange(__goscriptRangeTarget6), __goscriptSliceWindow4 = $.sliceRange(args), i = 0; i < __goscriptRangeWindow5.length; i++) {
				let m = (__goscriptRangeWindow5.backing[__goscriptRangeWindow5.offset + i] as __goscript_matchers.Matcher | null)
				if (i < ((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>((c$ as Call).methodType).NumIn(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) - 1)) {
					// Non-variadic args
					if (!(__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<__goscript_matchers.Matcher, null>) : $.pointerValue<Exclude<__goscript_matchers.Matcher, null>>(m)).Matches(((__goscriptSliceWindow4.backing as any[])[$.windowSlot(__goscriptSliceWindow4, i)] as any)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
						return fmt.Errorf("expected call at %s doesn't match the argument at index %s.\nGot: %v\nWant: %v", (c$ as Call).origin, strconv.Itoa(i), await formatGottenArg(m, ((__goscriptSliceWindow4.backing as any[])[$.windowSlot(__goscriptSliceWindow4, i)] as any)), (m as any))
					}
					continue
				}
				// The last arg has a possibility of a variadic argument, so let it branch

				// sample: Foo(a int, b int, c ...int)
				if ((i < $.sliceLen((c$ as Call).args)) && (i < __goscriptSliceWindow4.length)) {
					if ((__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<__goscript_matchers.Matcher, null>) : $.pointerValue<Exclude<__goscript_matchers.Matcher, null>>(m)).Matches(((__goscriptSliceWindow4.backing as any[])[$.windowSlot(__goscriptSliceWindow4, i)] as any)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
						// Got Foo(a, b, c) want Foo(matcherA, matcherB, gomock.Any())
						// Got Foo(a, b, c) want Foo(matcherA, matcherB, someSliceMatcher)
						// Got Foo(a, b, c) want Foo(matcherA, matcherB, matcherC)
						// Got Foo(a, b) want Foo(matcherA, matcherB)
						// Got Foo(a, b, c, d) want Foo(matcherA, matcherB, matcherC, matcherD)
						continue
					}
				}

				// The number of actual args don't match the number of matchers,
				// or the last matcher is a slice and the last arg is not.
				// If this function still matches it is because the last matcher
				// matches all the remaining arguments or the lack of any.
				// Convert the remaining arguments, if any, into a slice of the
				// expected type.
				let vArgsType = (__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>((c$ as Call).methodType).In((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>((c$ as Call).methodType).NumIn(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) - 1), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				let vArgs = $.markAsStructValue($.cloneStructValue(reflect.MakeSlice($.pointerValueOrNil(vArgsType)!, 0, __goscriptSliceWindow4.length - i)))
				for (let __goscriptRangeTarget5 = $.goSlice(args, i, undefined), __goscriptRangeWindow6 = $.sliceRange(__goscriptRangeTarget5), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow6.length; __rangeIndex++) {
					let arg = (__goscriptRangeWindow6.backing[__goscriptRangeWindow6.offset + __rangeIndex] as any)
					vArgs = $.assignStruct(vArgs, reflect.Append($.markAsStructValue($.cloneStructValue(vArgs)), $.markAsStructValue($.cloneStructValue(reflect.ValueOf(arg)))))
				}
				if ((__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<__goscript_matchers.Matcher, null>) : $.pointerValue<Exclude<__goscript_matchers.Matcher, null>>(m)).Matches($.markAsStructValue($.cloneStructValue(vArgs)).Interface()), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
					// Got Foo(a, b, c, d, e) want Foo(matcherA, matcherB, gomock.Any())
					// Got Foo(a, b, c, d, e) want Foo(matcherA, matcherB, someSliceMatcher)
					// Got Foo(a, b) want Foo(matcherA, matcherB, gomock.Any())
					// Got Foo(a, b) want Foo(matcherA, matcherB, someEmptySliceMatcher)
					break
				}
				// Wrong number of matchers or not match. Fail.
				// Got Foo(a, b) want Foo(matcherA, matcherB, matcherC, matcherD)
				// Got Foo(a, b, c) want Foo(matcherA, matcherB, matcherC, matcherD)
				// Got Foo(a, b, c, d) want Foo(matcherA, matcherB, matcherC, matcherD, matcherE)
				// Got Foo(a, b, c, d, e) want Foo(matcherA, matcherB, matcherC, matcherD)
				// Got Foo(a, b, c) want Foo(matcherA, matcherB)

				return fmt.Errorf("expected call at %s doesn't match the argument at index %s.\nGot: %v\nWant: %v", (c$ as Call).origin, strconv.Itoa(i), await formatGottenArg(m, $.interfaceValue($.goSlice(args, i, undefined), "[]interface{}", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] }))), ($.arrayIndex((c$ as Call).args!, i) as any))
			}
		}

		// Check that all prerequisite calls have been satisfied.
		for (let __goscriptRangeTarget7 = (c$ as Call).preReqs, __goscriptRangeWindow7 = $.sliceRange(__goscriptRangeTarget7), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow7.length; __rangeIndex++) {
			let preReqCall = (__goscriptRangeWindow7.backing[__goscriptRangeWindow7.offset + __rangeIndex] as Call | $.VarRef<Call> | null)
			if (!(preReqCall !== null && (preReqCall as any).__isVarRef !== true && (preReqCall as any).__goValue === undefined ? ((preReqCall as any) as Call).satisfied() : Call.prototype.satisfied.call(preReqCall))) {
				return fmt.Errorf("expected call at %s doesn't have a prerequisite call satisfied:\n%v\nshould be called before:\n%v", (c$ as Call).origin, $.interfaceValue(preReqCall, "*gomock.Call", /* @__PURE__ */ $.pointerType("gomock.Call")), $.interfaceValue(c, "*gomock.Call", /* @__PURE__ */ $.pointerType("gomock.Call")))
			}
		}

		// Check that the call is not exhausted.
		if ((c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Call).exhausted() : Call.prototype.exhausted.call(c))) {
			return fmt.Errorf("expected call at %s has already been called the max number of times", (c$ as Call).origin)
		}

		return null
	}

	public satisfied(): boolean {
		const c: Call | $.VarRef<Call> | null = this;
		const c$: Call = c == null ? $.pointerTarget<Call>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<Call>(c)
		return (c$ as Call).numCalls >= (c$ as Call).minCalls
	}

	static __typeInfo = $.registerStructType(
		"gomock.Call",
		() => new Call(),
		() => [$.methodSignature("After", [["preReq", /* @__PURE__ */ $.pointerType("gomock.Call")]], [/* @__PURE__ */ $.pointerType("gomock.Call")], true), $.methodSignature("AnyTimes", [], [/* @__PURE__ */ $.pointerType("gomock.Call")], true), $.methodSignature("Do", [["f", { kind: $.TypeKind.Interface, methods: [] }]], [/* @__PURE__ */ $.pointerType("gomock.Call")], true), $.methodSignature("DoAndReturn", [["f", { kind: $.TypeKind.Interface, methods: [] }]], [/* @__PURE__ */ $.pointerType("gomock.Call")], true), $.methodSignature("MaxTimes", [["n", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.pointerType("gomock.Call")], true), $.methodSignature("MinTimes", [["n", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.pointerType("gomock.Call")], true), $.methodSignature("Return", [["rets", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.pointerType("gomock.Call")], true), $.methodSignature("SetArg", [["n", /* @__PURE__ */ $.basicType("int")], ["value", { kind: $.TypeKind.Interface, methods: [] }]], [/* @__PURE__ */ $.pointerType("gomock.Call")], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Times", [["n", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.pointerType("gomock.Call")], true), $.methodSignature("addAction", [["action", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })], results: [/* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })] } as $.FunctionTypeInfo)]], [], true), $.methodSignature("call", [], [/* @__PURE__ */ $.sliceType(({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })], results: [/* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })] } as $.FunctionTypeInfo))], true), $.methodSignature("dropPrereqs", [], [["preReqs", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("gomock.Call"))]], true), $.methodSignature("exhausted", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("isPreReq", [["other", /* @__PURE__ */ $.pointerType("gomock.Call")]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("matches", [["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], ["error"], true), $.methodSignature("satisfied", [], [/* @__PURE__ */ $.basicType("bool")], true)],
		Call,
		() => [/* @__PURE__ */ $.structField("t", "gomock.TestHelper", [0], 0, false, { pkgPath: "github.com/golang/mock/gomock" }), /* @__PURE__ */ $.structField("receiver", { kind: $.TypeKind.Interface, methods: [] }, [1], 16, false, { pkgPath: "github.com/golang/mock/gomock" }), /* @__PURE__ */ $.structField("method", /* @__PURE__ */ $.basicType("string"), [2], 32, false, { pkgPath: "github.com/golang/mock/gomock" }), /* @__PURE__ */ $.structField("methodType", "reflect.Type", [3], 48, false, { pkgPath: "github.com/golang/mock/gomock" }), /* @__PURE__ */ $.structField("args", /* @__PURE__ */ $.sliceType("gomock.Matcher"), [4], 64, false, { pkgPath: "github.com/golang/mock/gomock" }), /* @__PURE__ */ $.structField("origin", /* @__PURE__ */ $.basicType("string"), [5], 88, false, { pkgPath: "github.com/golang/mock/gomock" }), /* @__PURE__ */ $.structField("preReqs", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("gomock.Call")), [6], 104, false, { pkgPath: "github.com/golang/mock/gomock" }), /* @__PURE__ */ $.structField("minCalls", /* @__PURE__ */ $.basicType("int"), [7], 128, false, { pkgPath: "github.com/golang/mock/gomock" }), /* @__PURE__ */ $.structField("maxCalls", /* @__PURE__ */ $.basicType("int"), [8], 136, false, { pkgPath: "github.com/golang/mock/gomock" }), /* @__PURE__ */ $.structField("numCalls", /* @__PURE__ */ $.basicType("int"), [9], 144, false, { pkgPath: "github.com/golang/mock/gomock" }), /* @__PURE__ */ $.structField("actions", /* @__PURE__ */ $.sliceType(({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })], results: [/* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })] } as $.FunctionTypeInfo)), [10], 152, false, { pkgPath: "github.com/golang/mock/gomock" })]
	)
}

export async function newCall(t: __goscript_controller.TestHelper | null, receiver: any, method: string, methodType: reflect.Type | null, args: $.Slice<any>): globalThis.Promise<Call | $.VarRef<Call> | null> {
	void (__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<__goscript_controller.TestHelper, null>) : $.pointerValue<Exclude<__goscript_controller.TestHelper, null>>(t)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)

	// TODO: check arity, types.
	let mArgs: $.Slice<__goscript_matchers.Matcher | null> = $.makeSlice<__goscript_matchers.Matcher | null>($.sliceLen(args))
	for (let __goscriptRangeTarget8 = args, __goscriptRangeWindow8 = $.sliceRange(__goscriptRangeTarget8), __goscriptSliceWindow5 = $.sliceRange(mArgs), i = 0; i < __goscriptRangeWindow8.length; i++) {
		let arg = (__goscriptRangeWindow8.backing[__goscriptRangeWindow8.offset + i] as any)
		{
			let [m, ok] = $.typeAssertTuple<__goscript_matchers.Matcher | null>(arg, "gomock.Matcher")
			if (ok) {
				;(__goscriptSliceWindow5.backing as any[])[$.windowSlot(__goscriptSliceWindow5, i)] = m
			} else {
				if (arg == null) {
					// Handle nil specially so that passing a nil interface value
					// will match the typed nils of concrete args.
					;(__goscriptSliceWindow5.backing as any[])[$.windowSlot(__goscriptSliceWindow5, i)] = __goscript_matchers.Nil()
				} else {
					;(__goscriptSliceWindow5.backing as any[])[$.windowSlot(__goscriptSliceWindow5, i)] = __goscript_matchers.Eq(arg)
				}
			}
		}
	}

	// callerInfo's skip should be updated if the number of calls between the user's test
	// and this line changes, i.e. this code is wrapped in another anonymous function.
	// 0 is us, 1 is RecordCallWithMethodType(), 2 is the generated recorder, and 3 is the user's test.
	let origin = await __goscript_controller.callerInfo(3)
	let actions: $.Slice<((_p0: $.Slice<any>) => $.Slice<any> | globalThis.Promise<$.Slice<any>>) | null> = $.arrayToSlice<((_p0: $.Slice<any>) => $.Slice<any> | globalThis.Promise<$.Slice<any>>) | null>([$.functionValue(async (_p0: $.Slice<any>): globalThis.Promise<$.Slice<any>> => {
		// Synthesize the zero value for each of the return args' types.
		let rets: $.Slice<any> = $.makeSlice<any>((__goscriptAwait = (methodType !== null && (methodType as any).__isVarRef !== true && (methodType as any).__goValue === undefined ? (methodType as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(methodType)).NumOut(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
		for (let i = 0; i < (__goscriptAwait = (methodType !== null && (methodType as any).__isVarRef !== true && (methodType as any).__goValue === undefined ? (methodType as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(methodType)).NumOut(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); i++) {
			$.sliceElems(rets!)[$.sliceSlot(rets!, i)] = $.markAsStructValue($.cloneStructValue(reflect.Zero($.pointerValueOrNil((__goscriptAwait = (methodType !== null && (methodType as any).__isVarRef !== true && (methodType as any).__goValue === undefined ? (methodType as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(methodType)).Out(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))!))).Interface()
		}
		return rets
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })], results: [/* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })] } as $.FunctionTypeInfo))])
	return new Call({t: t, receiver: receiver, method: method, methodType: methodType, args: mArgs, origin: origin, minCalls: 1, maxCalls: 1, actions: actions})
}

export async function InOrder(calls: $.Slice<Call | $.VarRef<Call> | null>): globalThis.Promise<void> {
	for (let __goscriptSliceWindow6 = $.sliceRange(calls), i = 1; i < __goscriptSliceWindow6.length; i++) {
		await Call.prototype.After.call(((__goscriptSliceWindow6.backing as any[])[$.windowSlot(__goscriptSliceWindow6, i)] as Call | $.VarRef<Call> | null), ((__goscriptSliceWindow6.backing as any[])[$.windowSlot(__goscriptSliceWindow6, i - 1)] as Call | $.VarRef<Call> | null))
	}
}

export function setSlice(arg: any, v: reflect.Value): void {
	let va = $.markAsStructValue($.cloneStructValue(reflect.ValueOf(arg)))
	for (let i = 0; i < $.markAsStructValue($.cloneStructValue(v)).Len(); i++) {
		$.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(va)).Index(i))).Set($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(v)).Index(i))))
	}
}

export function setMap(arg: any, v: reflect.Value): void {
	let va = $.markAsStructValue($.cloneStructValue(reflect.ValueOf(arg)))
	for (let __goscriptRangeTarget9 = $.markAsStructValue($.cloneStructValue(va)).MapKeys(), __goscriptRangeWindow9 = $.sliceRange(__goscriptRangeTarget9), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow9.length; __rangeIndex++) {
		let e = $.markAsStructValue($.cloneStructValue((__goscriptRangeWindow9.backing[__goscriptRangeWindow9.offset + __rangeIndex] as reflect.Value)))
		$.markAsStructValue($.cloneStructValue(va)).SetMapIndex($.markAsStructValue($.cloneStructValue(e)), $.markAsStructValue(new reflect.Value()))
	}
	for (let __goscriptRangeTarget10 = $.markAsStructValue($.cloneStructValue(v)).MapKeys(), __goscriptRangeWindow10 = $.sliceRange(__goscriptRangeTarget10), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow10.length; __rangeIndex++) {
		let e = $.markAsStructValue($.cloneStructValue((__goscriptRangeWindow10.backing[__goscriptRangeWindow10.offset + __rangeIndex] as reflect.Value)))
		$.markAsStructValue($.cloneStructValue(va)).SetMapIndex($.markAsStructValue($.cloneStructValue(e)), $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(v)).MapIndex($.markAsStructValue($.cloneStructValue(e))))))
	}
}

export async function formatGottenArg(m: __goscript_matchers.Matcher | null, arg: any): globalThis.Promise<string> {
	let got = await fmt.Sprintf("%v (%T)", arg, arg)
	{
		let [gs, ok] = $.typeAssertTuple<__goscript_matchers.GotFormatter | null>(m, "gomock.GotFormatter")
		if (ok) {
			got = (__goscriptAwait = (gs !== null && (gs as any).__isVarRef !== true && (gs as any).__goValue === undefined ? (gs as Exclude<__goscript_matchers.GotFormatter, null>) : $.pointerValue<Exclude<__goscript_matchers.GotFormatter, null>>(gs)).Got(arg), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}
	return got
}

var __goscriptAwait: any
