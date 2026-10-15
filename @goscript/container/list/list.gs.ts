// Generated file based on list.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

$.registerTypePackagePath("container/list", ["list.Element", "list.List"])

export class Element {
	// Next and previous pointers in the doubly-linked list of elements.
	// To simplify the implementation, internally a list l is implemented
	// as a ring, such that &l.root is both the next element of the last
	// list element (l.Back()) and the previous element of the first list
	// element (l.Front()).
	public get next(): Element | $.VarRef<Element> | null {
		return this._fields.next
	}

	public set next(value: Element | $.VarRef<Element> | null) {
		this._fields.next = value
	}

	// Next and previous pointers in the doubly-linked list of elements.
	// To simplify the implementation, internally a list l is implemented
	// as a ring, such that &l.root is both the next element of the last
	// list element (l.Back()) and the previous element of the first list
	// element (l.Front()).
	public get prev(): Element | $.VarRef<Element> | null {
		return this._fields.prev
	}

	public set prev(value: Element | $.VarRef<Element> | null) {
		this._fields.prev = value
	}

	// The list to which this element belongs.
	public get list(): List | $.VarRef<List> | null {
		return this._fields.list
	}

	public set list(value: List | $.VarRef<List> | null) {
		this._fields.list = value
	}

	// The value stored with this element.
	public get Value(): any {
		return this._fields.Value
	}

	public set Value(value: any) {
		this._fields.Value = value
	}

	public _fields: {
		next: Element | $.VarRef<Element> | null
		prev: Element | $.VarRef<Element> | null
		list: List | $.VarRef<List> | null
		Value: any
	}

	constructor(init?: Partial<{next?: Element | $.VarRef<Element> | null, prev?: Element | $.VarRef<Element> | null, list?: List | $.VarRef<List> | null, Value?: any}>, __goscriptValue?: boolean) {
		this._fields = {
			next: init?.next ?? (null! as Element | $.VarRef<Element> | null),
			prev: init?.prev ?? (null! as Element | $.VarRef<Element> | null),
			list: init?.list ?? (null! as List | $.VarRef<List> | null),
			Value: init?.Value ?? (null! as any)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Element {
		return new Element(this, true)
	}

	public __goscriptAssign(source: Element): void {
		const target = this._fields
		const values = source._fields
		target.next = values.next
		target.prev = values.prev
		target.list = values.list
		target.Value = $.assignFieldValue(target.Value, values.Value, { kind: $.TypeKind.Interface, methods: [] })
	}

	public Next(): Element | $.VarRef<Element> | null {
		const e: Element | $.VarRef<Element> | null = this;
		const e$: Element = e == null ? $.pointerTarget<Element>(e) : (e as any).__isVarRef === true ? (e as any).value : (e as any).__goValue === undefined ? (e as any) : $.pointerTarget<Element>(e)
		{
			let p: Element | $.VarRef<Element> | null = (e$ as Element).next
			if (((e$ as Element).list != null) && (!$.pointerEqual(p, $.fieldRef($.pointerValue<List>((e$ as Element).list)._fields, "root")))) {
				return p
			}
		}
		return null
	}

	public Prev(): Element | $.VarRef<Element> | null {
		const e: Element | $.VarRef<Element> | null = this;
		const e$: Element = e == null ? $.pointerTarget<Element>(e) : (e as any).__isVarRef === true ? (e as any).value : (e as any).__goValue === undefined ? (e as any) : $.pointerTarget<Element>(e)
		{
			let p: Element | $.VarRef<Element> | null = (e$ as Element).prev
			if (((e$ as Element).list != null) && (!$.pointerEqual(p, $.fieldRef($.pointerValue<List>((e$ as Element).list)._fields, "root")))) {
				return p
			}
		}
		return null
	}

	static __typeInfo = $.registerStructType(
		"list.Element",
		() => new Element(),
		() => [$.methodSignature("Next", [], [/* @__PURE__ */ $.pointerType("list.Element")], true), $.methodSignature("Prev", [], [/* @__PURE__ */ $.pointerType("list.Element")], true)],
		Element,
		() => [/* @__PURE__ */ $.structField("next", /* @__PURE__ */ $.pointerType("list.Element"), [0], 0, false, { pkgPath: "container/list" }), /* @__PURE__ */ $.structField("prev", /* @__PURE__ */ $.pointerType("list.Element"), [1], 8, false, { pkgPath: "container/list" }), /* @__PURE__ */ $.structField("list", /* @__PURE__ */ $.pointerType("list.List"), [2], 16, false, { pkgPath: "container/list" }), /* @__PURE__ */ $.structField("Value", { kind: $.TypeKind.Interface, methods: [] }, [3], 24, true)]
	)
}

export class List {
	public get root(): Element {
		return this._fields.root
	}

	public set root(value: Element) {
		this._fields.root = value
	}

	public get len(): number {
		return this._fields.len
	}

	public set len(value: number) {
		this._fields.len = value
	}

	public _fields: {
		root: Element
		len: number
	}

	constructor(init?: Partial<{root?: Element, len?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			root: init?.root ? init.root.clone() : new Element(undefined, true),
			len: init?.len ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): List {
		return new List(this, true)
	}

	public __goscriptAssign(source: List): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.root, values.root)
		target.len = values.len
	}

	public Back(): Element | $.VarRef<Element> | null {
		const l: List | $.VarRef<List> | null = this;
		const l$: List = l == null ? $.pointerTarget<List>(l) : (l as any).__isVarRef === true ? (l as any).value : (l as any).__goValue === undefined ? (l as any) : $.pointerTarget<List>(l)
		if ((l$ as List).len == 0) {
			return null
		}
		return (l$ as List).root.prev
	}

	public Front(): Element | $.VarRef<Element> | null {
		const l: List | $.VarRef<List> | null = this;
		const l$: List = l == null ? $.pointerTarget<List>(l) : (l as any).__isVarRef === true ? (l as any).value : (l as any).__goValue === undefined ? (l as any) : $.pointerTarget<List>(l)
		if ((l$ as List).len == 0) {
			return null
		}
		return (l$ as List).root.next
	}

	public Init(): List | $.VarRef<List> | null {
		let l: List | $.VarRef<List> | null = this;
		const l$: List = l == null ? $.pointerTarget<List>(l) : (l as any).__isVarRef === true ? (l as any).value : (l as any).__goValue === undefined ? (l as any) : $.pointerTarget<List>(l);
		;(l$ as List).root.next = $.fieldRef((l$ as List)._fields, "root");
		;(l$ as List).root.prev = $.fieldRef((l$ as List)._fields, "root");
		;(l$ as List).len = 0
		return l
	}

	public InsertAfter(v: any, mark: Element | $.VarRef<Element> | null): Element | $.VarRef<Element> | null {
		const l: List | $.VarRef<List> | null = this;
		if (!$.pointerEqual($.pointerValue<Element>(mark).list, l)) {
			return null
		}
		// see comment in List.Remove about initialization of l
		return (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as List).insertValue(v, mark) : List.prototype.insertValue.call(l, v, mark))
	}

	public InsertBefore(v: any, mark: Element | $.VarRef<Element> | null): Element | $.VarRef<Element> | null {
		const l: List | $.VarRef<List> | null = this;
		const mark$: Element = mark == null ? $.pointerTarget<Element>(mark) : (mark as any).__isVarRef === true ? (mark as any).value : (mark as any).__goValue === undefined ? (mark as any) : $.pointerTarget<Element>(mark)
		if (!$.pointerEqual((mark$ as Element).list, l)) {
			return null
		}
		// see comment in List.Remove about initialization of l
		return (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as List).insertValue(v, (mark$ as Element).prev) : List.prototype.insertValue.call(l, v, (mark$ as Element).prev))
	}

	public Len(): number {
		const l: List | $.VarRef<List> | null = this;
		return $.pointerValue<List>(l).len
	}

	public MoveAfter(e: Element | $.VarRef<Element> | null, mark: Element | $.VarRef<Element> | null): void {
		const l: List | $.VarRef<List> | null = this;
		if (((!$.pointerEqual($.pointerValue<Element>(e).list, l)) || ($.pointerEqual(e, mark))) || (!$.pointerEqual($.pointerValue<Element>(mark).list, l))) {
			return
		}
		void (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as List).move(e, mark) : List.prototype.move.call(l, e, mark))
	}

	public MoveBefore(e: Element | $.VarRef<Element> | null, mark: Element | $.VarRef<Element> | null): void {
		const l: List | $.VarRef<List> | null = this;
		if (((!$.pointerEqual($.pointerValue<Element>(e).list, l)) || ($.pointerEqual(e, mark))) || (!$.pointerEqual($.pointerValue<Element>(mark).list, l))) {
			return
		}
		void (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as List).move(e, $.pointerValue<Element>(mark).prev) : List.prototype.move.call(l, e, $.pointerValue<Element>(mark).prev))
	}

	public MoveToBack(e: Element | $.VarRef<Element> | null): void {
		const l: List | $.VarRef<List> | null = this;
		const l$: List = l == null ? $.pointerTarget<List>(l) : (l as any).__isVarRef === true ? (l as any).value : (l as any).__goValue === undefined ? (l as any) : $.pointerTarget<List>(l)
		if ((!$.pointerEqual($.pointerValue<Element>(e).list, l)) || ($.pointerEqual((l$ as List).root.prev, e))) {
			return
		}
		// see comment in List.Remove about initialization of l
		void (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as List).move(e, (l$ as List).root.prev) : List.prototype.move.call(l, e, (l$ as List).root.prev))
	}

	public MoveToFront(e: Element | $.VarRef<Element> | null): void {
		const l: List | $.VarRef<List> | null = this;
		const l$: List = l == null ? $.pointerTarget<List>(l) : (l as any).__isVarRef === true ? (l as any).value : (l as any).__goValue === undefined ? (l as any) : $.pointerTarget<List>(l)
		if ((!$.pointerEqual($.pointerValue<Element>(e).list, l)) || ($.pointerEqual((l$ as List).root.next, e))) {
			return
		}
		// see comment in List.Remove about initialization of l
		void (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as List).move(e, $.fieldRef((l$ as List)._fields, "root")) : List.prototype.move.call(l, e, $.fieldRef((l$ as List)._fields, "root")))
	}

	public PushBack(v: any): Element | $.VarRef<Element> | null {
		const l: List | $.VarRef<List> | null = this;
		void (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as List).lazyInit() : List.prototype.lazyInit.call(l))
		return (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as List).insertValue(v, $.pointerValue<List>(l).root.prev) : List.prototype.insertValue.call(l, v, $.pointerValue<List>(l).root.prev))
	}

	public PushBackList(other: List | $.VarRef<List> | null): void {
		const l: List | $.VarRef<List> | null = this;
		void (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as List).lazyInit() : List.prototype.lazyInit.call(l))
		for (let i = (other !== null && (other as any).__isVarRef !== true && (other as any).__goValue === undefined ? ((other as any) as List).Len() : List.prototype.Len.call(other)), e = (other !== null && (other as any).__isVarRef !== true && (other as any).__goValue === undefined ? ((other as any) as List).Front() : List.prototype.Front.call(other)); i > 0; [i, e] = [i - 1, (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as Element).Next() : Element.prototype.Next.call(e))]) {
			void (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as List).insertValue($.pointerValue<Element>(e).Value, $.pointerValue<List>(l).root.prev) : List.prototype.insertValue.call(l, $.pointerValue<Element>(e).Value, $.pointerValue<List>(l).root.prev))
		}
	}

	public PushFront(v: any): Element | $.VarRef<Element> | null {
		const l: List | $.VarRef<List> | null = this;
		void (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as List).lazyInit() : List.prototype.lazyInit.call(l))
		return (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as List).insertValue(v, $.fieldRef($.pointerValue<List>(l)._fields, "root")) : List.prototype.insertValue.call(l, v, $.fieldRef($.pointerValue<List>(l)._fields, "root")))
	}

	public PushFrontList(other: List | $.VarRef<List> | null): void {
		const l: List | $.VarRef<List> | null = this;
		void (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as List).lazyInit() : List.prototype.lazyInit.call(l))
		for (let i = (other !== null && (other as any).__isVarRef !== true && (other as any).__goValue === undefined ? ((other as any) as List).Len() : List.prototype.Len.call(other)), e = (other !== null && (other as any).__isVarRef !== true && (other as any).__goValue === undefined ? ((other as any) as List).Back() : List.prototype.Back.call(other)); i > 0; [i, e] = [i - 1, (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as Element).Prev() : Element.prototype.Prev.call(e))]) {
			void (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as List).insertValue($.pointerValue<Element>(e).Value, $.fieldRef($.pointerValue<List>(l)._fields, "root")) : List.prototype.insertValue.call(l, $.pointerValue<Element>(e).Value, $.fieldRef($.pointerValue<List>(l)._fields, "root")))
		}
	}

	public Remove(e: Element | $.VarRef<Element> | null): any {
		const l: List | $.VarRef<List> | null = this;
		const e$: Element = e == null ? $.pointerTarget<Element>(e) : (e as any).__isVarRef === true ? (e as any).value : (e as any).__goValue === undefined ? (e as any) : $.pointerTarget<Element>(e)
		if ($.pointerEqual((e$ as Element).list, l)) {
			// if e.list == l, l must have been initialized when e was inserted
			// in l or l == nil (e is a zero Element) and l.remove will crash
			void (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as List).remove(e) : List.prototype.remove.call(l, e))
		}
		return (e$ as Element).Value
	}

	public insert(e: Element | $.VarRef<Element> | null, at: Element | $.VarRef<Element> | null): Element | $.VarRef<Element> | null {
		let l: List | $.VarRef<List> | null = this;
		const l$: List = l == null ? $.pointerTarget<List>(l) : (l as any).__isVarRef === true ? (l as any).value : (l as any).__goValue === undefined ? (l as any) : $.pointerTarget<List>(l)
		$.pointerValue<Element>(e).prev = at
		$.pointerValue<Element>(e).next = $.pointerValue<Element>(at).next
		$.pointerValue<Element>($.pointerValue<Element>(e).prev).next = e
		$.pointerValue<Element>($.pointerValue<Element>(e).next).prev = e
		$.pointerValue<Element>(e).list = l;
		;(l$ as List).len++
		return e
	}

	public insertValue(v: any, at: Element | $.VarRef<Element> | null): Element | $.VarRef<Element> | null {
		const l: List | $.VarRef<List> | null = this;
		return (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as List).insert(new Element({Value: v}), at) : List.prototype.insert.call(l, new Element({Value: v}), at))
	}

	public lazyInit(): void {
		const l: List | $.VarRef<List> | null = this;
		if ($.pointerValue<List>(l).root.next == null) {
			void (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as List).Init() : List.prototype.Init.call(l))
		}
	}

	public move(e: Element | $.VarRef<Element> | null, at: Element | $.VarRef<Element> | null): void {
		const l: List | $.VarRef<List> | null = this;
		if ($.pointerEqual(e, at)) {
			return
		}
		$.pointerValue<Element>($.pointerValue<Element>(e).prev).next = $.pointerValue<Element>(e).next
		$.pointerValue<Element>($.pointerValue<Element>(e).next).prev = $.pointerValue<Element>(e).prev

		$.pointerValue<Element>(e).prev = at
		$.pointerValue<Element>(e).next = $.pointerValue<Element>(at).next
		$.pointerValue<Element>($.pointerValue<Element>(e).prev).next = e
		$.pointerValue<Element>($.pointerValue<Element>(e).next).prev = e
	}

	public remove(e: Element | $.VarRef<Element> | null): void {
		let l: List | $.VarRef<List> | null = this;
		const l$: List = l == null ? $.pointerTarget<List>(l) : (l as any).__isVarRef === true ? (l as any).value : (l as any).__goValue === undefined ? (l as any) : $.pointerTarget<List>(l)
		const e$: Element = e == null ? $.pointerTarget<Element>(e) : (e as any).__isVarRef === true ? (e as any).value : (e as any).__goValue === undefined ? (e as any) : $.pointerTarget<Element>(e)
		$.pointerValue<Element>((e$ as Element).prev).next = (e$ as Element).next
		$.pointerValue<Element>((e$ as Element).next).prev = (e$ as Element).prev;
		;(e$ as Element).next = null;
		;(e$ as Element).prev = null;
		;(e$ as Element).list = null;
		;(l$ as List).len--
	}

	static __typeInfo = $.registerStructType(
		"list.List",
		() => new List(),
		() => [$.methodSignature("Back", [], [/* @__PURE__ */ $.pointerType("list.Element")], true), $.methodSignature("Front", [], [/* @__PURE__ */ $.pointerType("list.Element")], true), $.methodSignature("Init", [], [/* @__PURE__ */ $.pointerType("list.List")], true), $.methodSignature("InsertAfter", [["v", { kind: $.TypeKind.Interface, methods: [] }], ["mark", /* @__PURE__ */ $.pointerType("list.Element")]], [/* @__PURE__ */ $.pointerType("list.Element")], true), $.methodSignature("InsertBefore", [["v", { kind: $.TypeKind.Interface, methods: [] }], ["mark", /* @__PURE__ */ $.pointerType("list.Element")]], [/* @__PURE__ */ $.pointerType("list.Element")], true), $.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("MoveAfter", [["e", /* @__PURE__ */ $.pointerType("list.Element")], ["mark", /* @__PURE__ */ $.pointerType("list.Element")]], [], true), $.methodSignature("MoveBefore", [["e", /* @__PURE__ */ $.pointerType("list.Element")], ["mark", /* @__PURE__ */ $.pointerType("list.Element")]], [], true), $.methodSignature("MoveToBack", [["e", /* @__PURE__ */ $.pointerType("list.Element")]], [], true), $.methodSignature("MoveToFront", [["e", /* @__PURE__ */ $.pointerType("list.Element")]], [], true), $.methodSignature("PushBack", [["v", { kind: $.TypeKind.Interface, methods: [] }]], [/* @__PURE__ */ $.pointerType("list.Element")], true), $.methodSignature("PushBackList", [["other", /* @__PURE__ */ $.pointerType("list.List")]], [], true), $.methodSignature("PushFront", [["v", { kind: $.TypeKind.Interface, methods: [] }]], [/* @__PURE__ */ $.pointerType("list.Element")], true), $.methodSignature("PushFrontList", [["other", /* @__PURE__ */ $.pointerType("list.List")]], [], true), $.methodSignature("Remove", [["e", /* @__PURE__ */ $.pointerType("list.Element")]], [{ kind: $.TypeKind.Interface, methods: [] }], true), $.methodSignature("insert", [["e", /* @__PURE__ */ $.pointerType("list.Element")], ["at", /* @__PURE__ */ $.pointerType("list.Element")]], [/* @__PURE__ */ $.pointerType("list.Element")], true), $.methodSignature("insertValue", [["v", { kind: $.TypeKind.Interface, methods: [] }], ["at", /* @__PURE__ */ $.pointerType("list.Element")]], [/* @__PURE__ */ $.pointerType("list.Element")], true), $.methodSignature("lazyInit", [], [], true), $.methodSignature("move", [["e", /* @__PURE__ */ $.pointerType("list.Element")], ["at", /* @__PURE__ */ $.pointerType("list.Element")]], [], true), $.methodSignature("remove", [["e", /* @__PURE__ */ $.pointerType("list.Element")]], [], true)],
		List,
		() => [/* @__PURE__ */ $.structField("root", "list.Element", [0], 0, false, { pkgPath: "container/list" }), /* @__PURE__ */ $.structField("len", /* @__PURE__ */ $.basicType("int"), [1], 40, false, { pkgPath: "container/list" })]
	)
}

export function New(): List | $.VarRef<List> | null {
	return List.prototype.Init.call(new List())
}
