// Generated file based on heap.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as sort from "@goscript/sort/index.js"
import "@goscript/sort/index.js"

$.registerTypePackagePath("container/heap", ["heap.Interface"])

export type Interface = {
	Len(): number
	Less(i: number, j: number): boolean | globalThis.Promise<boolean>
	Pop(): any
	Push(x: any): void
	Swap(i: number, j: number): void
}

$.registerInterfaceType(
	"heap.Interface",
	null,
	[$.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Less", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Pop", [], [{ kind: $.TypeKind.Interface, methods: [] }]), $.methodSignature("Push", [["x", { kind: $.TypeKind.Interface, methods: [] }]]), $.methodSignature("Swap", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]])]
);

export async function Init(h: Interface | null): globalThis.Promise<void> {
	// heapify
	let n = (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<Interface, null>) : $.pointerValue<Exclude<Interface, null>>(h)).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	for (let i = (globalThis.Math.trunc(n / 2)) - 1; i >= 0; i--) {
		await down(h, i, n)
	}
}

export async function Push(h: Interface | null, x: any): globalThis.Promise<void> {
	void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<Interface, null>) : $.pointerValue<Exclude<Interface, null>>(h)).Push(x), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	await up(h, (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<Interface, null>) : $.pointerValue<Exclude<Interface, null>>(h)).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) - 1)
}

export async function Pop(h: Interface | null): globalThis.Promise<any> {
	let n = (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<Interface, null>) : $.pointerValue<Exclude<Interface, null>>(h)).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) - 1
	void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<Interface, null>) : $.pointerValue<Exclude<Interface, null>>(h)).Swap(0, n), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	await down(h, 0, n)
	return (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<Interface, null>) : $.pointerValue<Exclude<Interface, null>>(h)).Pop()
}

export async function Remove(h: Interface | null, i: number): globalThis.Promise<any> {
	let n = (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<Interface, null>) : $.pointerValue<Exclude<Interface, null>>(h)).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) - 1
	if (n != i) {
		void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<Interface, null>) : $.pointerValue<Exclude<Interface, null>>(h)).Swap(i, n), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		if (!await down(h, i, n)) {
			await up(h, i)
		}
	}
	return (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<Interface, null>) : $.pointerValue<Exclude<Interface, null>>(h)).Pop()
}

export async function Fix(h: Interface | null, i: number): globalThis.Promise<void> {
	if (!await down(h, i, (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<Interface, null>) : $.pointerValue<Exclude<Interface, null>>(h)).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))) {
		await up(h, i)
	}
}

export async function up(h: Interface | null, j: number): globalThis.Promise<void> {
	while (true) {
		let i: number = globalThis.Math.trunc((j - 1) / 2)
		if ((i == j) || !(__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<Interface, null>) : $.pointerValue<Exclude<Interface, null>>(h)).Less(j, i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
			break
		}
		void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<Interface, null>) : $.pointerValue<Exclude<Interface, null>>(h)).Swap(i, j), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		j = i
	}
}

export async function down(h: Interface | null, i0: number, n: number): globalThis.Promise<boolean> {
	let i = i0
	while (true) {
		let j1 = (2 * i) + 1
		if ((j1 >= n) || (j1 < 0)) {
			break
		}
		let j = j1
		{
			let j2 = j1 + 1
			if ((j2 < n) && (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<Interface, null>) : $.pointerValue<Exclude<Interface, null>>(h)).Less(j2, j1), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
				j = j2
			}
		}
		if (!(__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<Interface, null>) : $.pointerValue<Exclude<Interface, null>>(h)).Less(j, i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
			break
		}
		void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<Interface, null>) : $.pointerValue<Exclude<Interface, null>>(h)).Swap(i, j), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		i = j
	}
	return i > i0
}

var __goscriptAwait: any
