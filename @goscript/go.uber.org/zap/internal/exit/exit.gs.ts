// Generated file based on exit.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as os from "@goscript/os/index.js"
import "@goscript/os/index.js"

$.registerTypePackagePath("go.uber.org/zap/internal/exit", ["exit.StubbedExit"])

export class StubbedExit {
	public get Exited(): boolean {
		return this._fields.Exited
	}

	public set Exited(value: boolean) {
		this._fields.Exited = value
	}

	public get Code(): number {
		return this._fields.Code
	}

	public set Code(value: number) {
		this._fields.Code = value
	}

	public get prev(): ((code: number) => void) | null {
		return this._fields.prev
	}

	public set prev(value: ((code: number) => void) | null) {
		this._fields.prev = value
	}

	public _fields: {
		Exited: boolean
		Code: number
		prev: ((code: number) => void) | null
	}

	constructor(init?: Partial<{Exited?: boolean, Code?: number, prev?: ((code: number) => void) | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Exited: init?.Exited ?? (false as boolean),
			Code: init?.Code ?? (0 as number),
			prev: init?.prev ?? (null! as ((code: number) => void) | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): StubbedExit {
		return new StubbedExit(this, true)
	}

	public __goscriptAssign(source: StubbedExit): void {
		const target = this._fields
		const values = source._fields
		target.Exited = values.Exited
		target.Code = values.Code
		target.prev = values.prev
	}

	public Unstub(): void {
		const se: StubbedExit | $.VarRef<StubbedExit> | null = this;
		_exit = $.pointerValue<StubbedExit>(se).prev
	}

	public exit(code: number): void {
		let se: StubbedExit | $.VarRef<StubbedExit> | null = this;
		const se$: StubbedExit = se == null ? $.pointerTarget<StubbedExit>(se) : (se as any).__isVarRef === true ? (se as any).value : (se as any).__goValue === undefined ? (se as any) : $.pointerTarget<StubbedExit>(se);
		;(se$ as StubbedExit).Exited = true;
		;(se$ as StubbedExit).Code = code
	}

	static __typeInfo = $.registerStructType(
		"exit.StubbedExit",
		() => new StubbedExit(),
		() => [$.methodSignature("Unstub", [], [], true), $.methodSignature("exit", [["code", /* @__PURE__ */ $.basicType("int")]], [], true)],
		StubbedExit,
		() => [/* @__PURE__ */ $.structField("Exited", /* @__PURE__ */ $.basicType("bool"), [0], 0, true), /* @__PURE__ */ $.structField("Code", /* @__PURE__ */ $.basicType("int"), [1], 8, true), /* @__PURE__ */ $.structField("prev", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int")], results: [] } as $.FunctionTypeInfo), [2], 16, false, { pkgPath: "go.uber.org/zap/internal/exit" })]
	)
}

export let _exit: ((code: number) => void) | null = os.Exit

export function __goscript_set__exit(__goscriptValue: ((code: number) => void) | null): void {
	_exit = __goscriptValue
}

export async function With(code: number): globalThis.Promise<void> {
	void (__goscriptAwait = _exit!(code), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
}

export function Stub(): StubbedExit | $.VarRef<StubbedExit> | null {
	let s: StubbedExit | $.VarRef<StubbedExit> | null = new StubbedExit({prev: _exit})
	_exit = $.functionValue(((__receiver) => (code: number) => __receiver.exit(code))($.pointerValue<StubbedExit>(s)), ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int")], results: [] } as $.FunctionTypeInfo), "go.uber.org/zap/internal/exit.(*StubbedExit).exit-fm")
	return s
}

export async function WithStub(f: (() => void) | null): globalThis.Promise<StubbedExit | $.VarRef<StubbedExit> | null> {
	using __defer = new $.DisposableStack()
	let s: StubbedExit | $.VarRef<StubbedExit> | null = Stub()
	__defer.defer(() => { (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as StubbedExit).Unstub() : StubbedExit.prototype.Unstub.call(s)) })
	void (__goscriptAwait = f!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	return s
}

var __goscriptAwait: any
