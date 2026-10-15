// Generated file based on text_encode.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as encoding from "@goscript/encoding/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as io from "@goscript/io/index.js"

import * as math from "@goscript/math/index.js"

import * as sort from "@goscript/sort/index.js"

import * as strings from "@goscript/strings/index.js"

import * as prototext from "@goscript/google.golang.org/protobuf/encoding/prototext/index.js"

import * as protowire from "@goscript/google.golang.org/protobuf/encoding/protowire/index.js"

import * as proto from "@goscript/google.golang.org/protobuf/proto/index.js"

import * as protoreflect from "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"

import * as protoregistry from "@goscript/google.golang.org/protobuf/reflect/protoregistry/index.js"

import * as protoiface from "@goscript/google.golang.org/protobuf/runtime/protoiface/index.js"

import * as __goscript_proto from "./proto.gs.ts"
import "@goscript/bytes/index.js"
import "@goscript/encoding/index.js"
import "@goscript/fmt/index.js"
import "@goscript/io/index.js"
import "@goscript/math/index.js"
import "@goscript/sort/index.js"
import "@goscript/strings/index.js"
import "@goscript/google.golang.org/protobuf/encoding/prototext/index.js"
import "@goscript/google.golang.org/protobuf/encoding/protowire/index.js"
import "@goscript/google.golang.org/protobuf/proto/index.js"
import "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"
import "@goscript/google.golang.org/protobuf/reflect/protoregistry/index.js"
import "@goscript/google.golang.org/protobuf/runtime/protoiface/index.js"
import "./proto.gs.ts"

$.registerTypePackagePath("github.com/golang/protobuf/proto", ["proto.TextMarshaler", "proto.textWriter", "proto.entry", "proto.ext"])

export class TextMarshaler {
	public get Compact(): boolean {
		return this._fields.Compact
	}

	public set Compact(value: boolean) {
		this._fields.Compact = value
	}

	public get ExpandAny(): boolean {
		return this._fields.ExpandAny
	}

	public set ExpandAny(value: boolean) {
		this._fields.ExpandAny = value
	}

	public _fields: {
		Compact: boolean
		ExpandAny: boolean
	}

	constructor(init?: Partial<{Compact?: boolean, ExpandAny?: boolean}>, __goscriptValue?: boolean) {
		this._fields = {
			Compact: init?.Compact ?? (false as boolean),
			ExpandAny: init?.ExpandAny ?? (false as boolean)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): TextMarshaler {
		return new TextMarshaler(this, true)
	}

	public __goscriptAssign(source: TextMarshaler): void {
		const target = this._fields
		const values = source._fields
		target.Compact = values.Compact
		target.ExpandAny = values.ExpandAny
	}

	public async Marshal(w: io.Writer | null, m: __goscript_proto.Message | null): globalThis.Promise<$.GoError> {
		const tm: TextMarshaler | $.VarRef<TextMarshaler> | null = this;
		let __goscriptTuple0: any = await (tm !== null && (tm as any).__isVarRef !== true && (tm as any).__goValue === undefined ? ((tm as any) as TextMarshaler).marshal(m) : TextMarshaler.prototype.marshal.call(tm, m))
		let b: $.Slice<number> = __goscriptTuple0[0]
		let err = __goscriptTuple0[1]
		if ($.sliceLen(b) > 0) {
			{
				let [, __goscriptShadow0] = await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? (w as Exclude<io.Writer, null>) : $.pointerValue<Exclude<io.Writer, null>>(w)).Write(b)
				if (__goscriptShadow0 != null) {
					return __goscriptShadow0
				}
			}
		}
		return err
	}

	public async Text(m: __goscript_proto.Message | null): globalThis.Promise<string> {
		const tm: TextMarshaler | $.VarRef<TextMarshaler> | null = this;
		let __goscriptTuple1: any = await (tm !== null && (tm as any).__isVarRef !== true && (tm as any).__goValue === undefined ? ((tm as any) as TextMarshaler).marshal(m) : TextMarshaler.prototype.marshal.call(tm, m))
		let b: $.Slice<number> = __goscriptTuple1[0]
		return $.bytesToString(b)
	}

	public async marshal(m: __goscript_proto.Message | null): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const tm: TextMarshaler | $.VarRef<TextMarshaler> | null = this;
		const tm$: TextMarshaler = tm == null ? $.pointerTarget<TextMarshaler>(tm) : (tm as any).__isVarRef === true ? (tm as any).value : (tm as any).__goValue === undefined ? (tm as any) : $.pointerTarget<TextMarshaler>(tm)
		let mr = await __goscript_proto.MessageReflect(m)
		if ((mr == null) || !(__goscriptAwait = (mr !== null && (mr as any).__isVarRef !== true && (mr as any).__goValue === undefined ? (mr as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(mr)).IsValid(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
			return [new Uint8Array([60, 110, 105, 108, 62]), null]
		}

		if (false) {
			let __goscriptShadow1 = m
			{
				let __goscriptTuple2: any = $.typeAssertTuple<encoding.TextMarshaler | null>(__goscriptShadow1, "encoding.TextMarshaler")
				let __goscriptShadow2 = __goscriptTuple2[0]
				let ok = __goscriptTuple2[1]
				if (ok) {
					return (__goscriptShadow2 !== null && (__goscriptShadow2 as any).__isVarRef !== true && (__goscriptShadow2 as any).__goValue === undefined ? (__goscriptShadow2 as Exclude<encoding.TextMarshaler, null>) : $.pointerValue<Exclude<encoding.TextMarshaler, null>>(__goscriptShadow2)).MarshalText()
				}
			}

			let opts = new prototext.MarshalOptions({AllowPartial: true, EmitUnknown: true}, true)
			if (!(tm$ as TextMarshaler).Compact) {
				opts.Indent = "  "
			}
			if (!(tm$ as TextMarshaler).ExpandAny) {
				opts.Resolver = $.interfaceValue(null, "*protoregistry.Types", /* @__PURE__ */ $.pointerType("protoregistry.Types"))
			}
			return opts.Marshal((__goscriptAwait = (mr !== null && (mr as any).__isVarRef !== true && (mr as any).__goValue === undefined ? (mr as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(mr)).Interface(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
		} else {
			let w: textWriter | $.VarRef<textWriter> | null = new textWriter({compact: (tm$ as TextMarshaler).Compact, expandAny: (tm$ as TextMarshaler).ExpandAny, complete: true})
			let w$: textWriter = w == null ? $.pointerTarget<textWriter>(w) : (w as any).__isVarRef === true ? (w as any).value : (w as any).__goValue === undefined ? (w as any) : $.pointerTarget<textWriter>(w)

			let __goscriptShadow3 = m
			{
				let __goscriptTuple3: any = $.typeAssertTuple<encoding.TextMarshaler | null>(__goscriptShadow3, "encoding.TextMarshaler")
				let __goscriptShadow4 = __goscriptTuple3[0]
				let ok = __goscriptTuple3[1]
				if (ok) {
					let __goscriptTuple4: any = await (__goscriptShadow4 !== null && (__goscriptShadow4 as any).__isVarRef !== true && (__goscriptShadow4 as any).__goValue === undefined ? (__goscriptShadow4 as Exclude<encoding.TextMarshaler, null>) : $.pointerValue<Exclude<encoding.TextMarshaler, null>>(__goscriptShadow4)).MarshalText()
					let b: $.Slice<number> = __goscriptTuple4[0]
					let err = __goscriptTuple4[1]
					if (err != null) {
						return [null, err]
					}
					void (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as textWriter).Write(b) : textWriter.prototype.Write.call(w, b))
					return [(w$ as textWriter).buf, null]
				}
			}

			let err = await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as textWriter).writeMessage(mr) : textWriter.prototype.writeMessage.call(w, mr))
			return [(w$ as textWriter).buf, err]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	static __typeInfo = $.registerStructType(
		"proto.TextMarshaler",
		() => new TextMarshaler(),
		() => [$.methodSignature("Marshal", [["w", "io.Writer"], ["m", "protoiface.MessageV1"]], ["error"], true), $.methodSignature("Text", [["m", "protoiface.MessageV1"]], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("marshal", [["m", "protoiface.MessageV1"]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true)],
		TextMarshaler,
		() => [/* @__PURE__ */ $.structField("Compact", /* @__PURE__ */ $.basicType("bool"), [0], 0, true), /* @__PURE__ */ $.structField("ExpandAny", /* @__PURE__ */ $.basicType("bool"), [1], 1, true)]
	)
}

export class textWriter {
	public get compact(): boolean {
		return this._fields.compact
	}

	public set compact(value: boolean) {
		this._fields.compact = value
	}

	public get expandAny(): boolean {
		return this._fields.expandAny
	}

	public set expandAny(value: boolean) {
		this._fields.expandAny = value
	}

	public get complete(): boolean {
		return this._fields.complete
	}

	public set complete(value: boolean) {
		this._fields.complete = value
	}

	public get indent(): number {
		return this._fields.indent
	}

	public set indent(value: number) {
		this._fields.indent = value
	}

	public get buf(): $.Slice<number> {
		return this._fields.buf
	}

	public set buf(value: $.Slice<number>) {
		this._fields.buf = value
	}

	public _fields: {
		compact: boolean
		expandAny: boolean
		complete: boolean
		indent: number
		buf: $.Slice<number>
	}

	constructor(init?: Partial<{compact?: boolean, expandAny?: boolean, complete?: boolean, indent?: number, buf?: $.Slice<number>}>, __goscriptValue?: boolean) {
		this._fields = {
			compact: init?.compact ?? (false as boolean),
			expandAny: init?.expandAny ?? (false as boolean),
			complete: init?.complete ?? (false as boolean),
			indent: init?.indent ?? (0 as number),
			buf: init?.buf ?? (null! as $.Slice<number>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): textWriter {
		return new textWriter(this, true)
	}

	public __goscriptAssign(source: textWriter): void {
		const target = this._fields
		const values = source._fields
		target.compact = values.compact
		target.expandAny = values.expandAny
		target.complete = values.complete
		target.indent = values.indent
		target.buf = values.buf
	}

	public Write(p: $.Slice<number>): [number, $.GoError] {
		let w: textWriter | $.VarRef<textWriter> | null = this;
		let n: number = 0
		const w$: textWriter = w == null ? $.pointerTarget<textWriter>(w) : (w as any).__isVarRef === true ? (w as any).value : (w as any).__goValue === undefined ? (w as any) : $.pointerTarget<textWriter>(w)
		let newlines = bytes.Count(p, newline)
		if (newlines == 0) {
			if (!(w$ as textWriter).compact && (w$ as textWriter).complete) {
				void (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as textWriter).writeIndent() : textWriter.prototype.writeIndent.call(w))
			}
			;(w$ as textWriter).buf = $.appendSlice((w$ as textWriter).buf, p, $.byteSliceHint);
			;(w$ as textWriter).complete = false
			return [$.sliceLen(p), null]
		}

		let frags: $.Slice<$.Slice<number>> = bytes.SplitN(p, newline, newlines + 1)
		if ((w$ as textWriter).compact) {
			for (let __goscriptRangeTarget0 = frags, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), i = 0; i < __goscriptRangeWindow0.length; i++) {
				let frag = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + i] as $.Slice<number>)
				if (i > 0) {
					;(w$ as textWriter).buf = $.append((w$ as textWriter).buf, $.uint(32, 8), $.byteSliceHint)
					n++
				}
				;(w$ as textWriter).buf = $.appendSlice((w$ as textWriter).buf, frag, $.byteSliceHint)
				n = n + ($.sliceLen(frag))
			}
			return [n, null]
		}

		for (let __goscriptRangeTarget1 = frags, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), i = 0; i < __goscriptRangeWindow1.length; i++) {
			let frag = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + i] as $.Slice<number>)
			if ((w$ as textWriter).complete) {
				void (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as textWriter).writeIndent() : textWriter.prototype.writeIndent.call(w))
			}
			;(w$ as textWriter).buf = $.appendSlice((w$ as textWriter).buf, frag, $.byteSliceHint)
			n = n + ($.sliceLen(frag))
			if ((i + 1) < $.sliceLen(frags)) {
				;(w$ as textWriter).buf = $.append((w$ as textWriter).buf, $.uint(10, 8), $.byteSliceHint)
				n++
			}
		}
		;(w$ as textWriter).complete = $.sliceLen($.arrayIndex(frags!, $.sliceLen(frags) - 1)) == 0
		return [n, null]
	}

	public WriteByte(c: number): $.GoError {
		let w: textWriter | $.VarRef<textWriter> | null = this;
		const w$: textWriter = w == null ? $.pointerTarget<textWriter>(w) : (w as any).__isVarRef === true ? (w as any).value : (w as any).__goValue === undefined ? (w as any) : $.pointerTarget<textWriter>(w)
		if ((w$ as textWriter).compact && (c == 10)) {
			c = 32
		}
		if (!(w$ as textWriter).compact && (w$ as textWriter).complete) {
			void (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as textWriter).writeIndent() : textWriter.prototype.writeIndent.call(w))
		}
		;(w$ as textWriter).buf = $.append((w$ as textWriter).buf, $.uint(c, 8), $.byteSliceHint);
		;(w$ as textWriter).complete = c == 10
		return null
	}

	public async writeExtensions(m: protoreflect.Message | null): globalThis.Promise<$.GoError> {
		const w: textWriter | $.VarRef<textWriter> | null = this;
		let md = (__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(m)).Descriptor(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		if ((__goscriptAwait = $.pointerValue<Exclude<protoreflect.FieldRanges, null>>((__goscriptAwait = (md !== null && (md as any).__isVarRef !== true && (md as any).__goValue === undefined ? (md as Exclude<protoreflect.MessageDescriptor, null>) : $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>(md)).ExtensionRanges(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 0) {
			return null
		}

		class ext {
			public get desc(): protoreflect.FieldDescriptor | null {
				return this._fields.desc
			}

			public set desc(value: protoreflect.FieldDescriptor | null) {
				this._fields.desc = value
			}

			public get val(): protoreflect.Value {
				return this._fields.val
			}

			public set val(value: protoreflect.Value) {
				this._fields.val = value
			}

			public _fields: {
				desc: protoreflect.FieldDescriptor | null
				val: protoreflect.Value
			}

			constructor(init?: Partial<{desc?: protoreflect.FieldDescriptor | null, val?: protoreflect.Value}>, __goscriptValue?: boolean) {
				this._fields = {
					desc: init?.desc ?? (null! as protoreflect.FieldDescriptor | null),
					val: init?.val ? init.val.clone() : new protoreflect.Value(undefined, true)
				}
				;(this as any)[$.structValueMarker] = __goscriptValue === true
			}

			public clone(): ext {
				return new ext(this, true)
			}

			public __goscriptAssign(source: ext): void {
				const target = this._fields
				const values = source._fields
				target.desc = $.assignFieldValue(target.desc, values.desc, "protoreflect.FieldDescriptor")
				$.assignStruct(target.val, values.val)
			}

			static __typeInfo = $.registerStructType(
				"proto.ext",
				() => new ext(),
				() => [],
				ext,
				() => [/* @__PURE__ */ $.structField("desc", "protoreflect.FieldDescriptor", [0], 0, false, { pkgPath: "github.com/golang/protobuf/proto" }), /* @__PURE__ */ $.structField("val", "protoreflect.Value", [1], 16, false, { pkgPath: "github.com/golang/protobuf/proto" })]
			)
		}
		let exts: $.Slice<ext> = null! as $.Slice<ext>
		void (__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(m)).Range($.functionValue(async (fd: protoreflect.FieldDescriptor | null, v: protoreflect.Value): globalThis.Promise<boolean> => {
			if ((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).IsExtension(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
				exts = $.appendOne(exts, $.markAsStructValue(new ext({desc: fd, val: (v).clone()})))
			}
			return true
		}, ({ kind: $.TypeKind.Function, params: ["protoreflect.FieldDescriptor", "protoreflect.Value"], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		await sort.Slice($.interfaceValue(exts, "[]proto.ext", /* @__PURE__ */ $.sliceType("proto.ext")), $.functionValue(async (i: number, j: number): globalThis.Promise<boolean> => {
			return (__goscriptAwait = $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>($.arrayIndex(exts!, i).desc).Number(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) < (__goscriptAwait = $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>($.arrayIndex(exts!, j).desc).Number(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("int")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)))

		for (let __goscriptRangeTarget2 = exts, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow2.length; __rangeIndex++) {
			let ext = $.markAsStructValue($.cloneStructValue((__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + __rangeIndex] as ext)))
			// For message set, use the name of the message as the extension name.
			let name = (__goscriptAwait = $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(ext.desc).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (await __goscript_proto.isMessageSet((__goscriptAwait = $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(ext.desc).ContainingMessage(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))) {
				name = strings.TrimSuffix(name, ".message_set_extension")
			}

			if (!(__goscriptAwait = $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(ext.desc).IsList(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
				{
					let err = await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as textWriter).writeSingularExtension(name, (ext.val).clone(), ext.desc) : textWriter.prototype.writeSingularExtension.call(w, name, (ext.val).clone(), ext.desc))
					if (err != null) {
						return err
					}
				}
			} else {
				let lv = await $.markAsStructValue($.cloneStructValue(ext.val)).List()
				for (let i = 0; i < (__goscriptAwait = (lv !== null && (lv as any).__isVarRef !== true && (lv as any).__goValue === undefined ? (lv as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(lv)).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); i++) {
					{
						let err = await textWriter.prototype.writeSingularExtension.call(w, name, (((__goscriptAwait = (lv !== null && (lv as any).__isVarRef !== true && (lv as any).__goValue === undefined ? (lv as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(lv)).Get(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value)).clone(), ext.desc)
						if (err != null) {
							return err
						}
					}
				}
			}
		}
		return null
	}

	public writeIndent(): void {
		let w: textWriter | $.VarRef<textWriter> | null = this;
		const w$: textWriter = w == null ? $.pointerTarget<textWriter>(w) : (w as any).__isVarRef === true ? (w as any).value : (w as any).__goValue === undefined ? (w as any) : $.pointerTarget<textWriter>(w)
		if (!(w$ as textWriter).complete) {
			return
		}
		for (let i = 0; i < ((w$ as textWriter).indent * 2); i++) {
			;(w$ as textWriter).buf = $.append((w$ as textWriter).buf, $.uint(32, 8), $.byteSliceHint)
		}
		;(w$ as textWriter).complete = false
	}

	public async writeMessage(m: protoreflect.Message | null): globalThis.Promise<$.GoError> {
		let w: textWriter | $.VarRef<textWriter> | null = this;
		const w$: textWriter = w == null ? $.pointerTarget<textWriter>(w) : (w as any).__isVarRef === true ? (w as any).value : (w as any).__goValue === undefined ? (w as any) : $.pointerTarget<textWriter>(w)
		let md = (__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(m)).Descriptor(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		if ((w$ as textWriter).expandAny && ($.stringEqual((__goscriptAwait = (md !== null && (md as any).__isVarRef !== true && (md as any).__goValue === undefined ? (md as Exclude<protoreflect.MessageDescriptor, null>) : $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>(md)).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), "google.protobuf.Any"))) {
			{
				let [canExpand, err] = await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as textWriter).writeProto3Any(m) : textWriter.prototype.writeProto3Any.call(w, m))
				if (canExpand) {
					return err
				}
			}
		}

		let fds = (__goscriptAwait = (md !== null && (md as any).__isVarRef !== true && (md as any).__goValue === undefined ? (md as Exclude<protoreflect.MessageDescriptor, null>) : $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>(md)).Fields(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		for (let i = 0; i < (__goscriptAwait = (fds !== null && (fds as any).__isVarRef !== true && (fds as any).__goValue === undefined ? (fds as Exclude<protoreflect.FieldDescriptors, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptors, null>>(fds)).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); ) {
			let fd = (__goscriptAwait = (fds !== null && (fds as any).__isVarRef !== true && (fds as any).__goValue === undefined ? (fds as Exclude<protoreflect.FieldDescriptors, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptors, null>>(fds)).Get(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			{
				let od: protoreflect.OneofDescriptor | null = (__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).ContainingOneof(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (od != null) {
					fd = (__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(m)).WhichOneof(od), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					i = i + ((__goscriptAwait = $.pointerValue<Exclude<protoreflect.FieldDescriptors, null>>((__goscriptAwait = (od !== null && (od as any).__isVarRef !== true && (od as any).__goValue === undefined ? (od as Exclude<protoreflect.OneofDescriptor, null>) : $.pointerValue<Exclude<protoreflect.OneofDescriptor, null>>(od)).Fields(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
				} else {
					i++
				}
			}
			if ((fd == null) || !(__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(m)).Has(fd), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
				continue
			}

			switch ((true as boolean)) {
				case (__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).IsList(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait):
				{
					let lv = await $.markAsStructValue($.cloneStructValue(((__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(m)).Get(fd), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value))).List()
					for (let j = 0; j < (__goscriptAwait = (lv !== null && (lv as any).__isVarRef !== true && (lv as any).__goValue === undefined ? (lv as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(lv)).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); j++) {
						await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as textWriter).writeName(fd) : textWriter.prototype.writeName.call(w, fd))
						let v = (((__goscriptAwait = (lv !== null && (lv as any).__isVarRef !== true && (lv as any).__goValue === undefined ? (lv as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(lv)).Get(j), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value)).clone()
						{
							let err = await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as textWriter).writeSingularValue(v, fd) : textWriter.prototype.writeSingularValue.call(w, v, fd))
							if (err != null) {
								return err
							}
						}
						void (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as textWriter).WriteByte(10) : textWriter.prototype.WriteByte.call(w, 10))
					}
					break
				}
				case (__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).IsMap(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait):
				{
					let kfd = (__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).MapKey(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					let vfd = (__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).MapValue(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					let mv = await $.markAsStructValue($.cloneStructValue(((__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(m)).Get(fd), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value))).Map()

					class entry {
						public get key(): protoreflect.Value {
							return this._fields.key
						}

						public set key(value: protoreflect.Value) {
							this._fields.key = value
						}

						public get val(): protoreflect.Value {
							return this._fields.val
						}

						public set val(value: protoreflect.Value) {
							this._fields.val = value
						}

						public _fields: {
							key: protoreflect.Value
							val: protoreflect.Value
						}

						constructor(init?: Partial<{key?: protoreflect.Value, val?: protoreflect.Value}>, __goscriptValue?: boolean) {
							this._fields = {
								key: init?.key ? init.key.clone() : new protoreflect.Value(undefined, true),
								val: init?.val ? init.val.clone() : new protoreflect.Value(undefined, true)
							}
							;(this as any)[$.structValueMarker] = __goscriptValue === true
						}

						public clone(): entry {
							return new entry(this, true)
						}

						public __goscriptAssign(source: entry): void {
							const target = this._fields
							const values = source._fields
							$.assignStruct(target.key, values.key)
							$.assignStruct(target.val, values.val)
						}

						static __typeInfo = $.registerStructType(
							"proto.entry",
							() => new entry(),
							() => [],
							entry,
							() => [/* @__PURE__ */ $.structField("key", "protoreflect.Value", [0], 0, false, { pkgPath: "github.com/golang/protobuf/proto" }), /* @__PURE__ */ $.structField("val", "protoreflect.Value", [1], 72, false, { pkgPath: "github.com/golang/protobuf/proto" })]
						)
					}
					let entries: $.Slice<entry> = null! as $.Slice<entry>
					void (__goscriptAwait = (mv !== null && (mv as any).__isVarRef !== true && (mv as any).__goValue === undefined ? (mv as Exclude<protoreflect.Map, null>) : $.pointerValue<Exclude<protoreflect.Map, null>>(mv)).Range($.functionValue((k: protoreflect.MapKey, v: protoreflect.Value): boolean => {
						entries = $.appendOne(entries, (() => { const __goscriptLiteralField0 = k.Value(); return $.markAsStructValue(new entry({key: __goscriptLiteralField0, val: (v).clone()})) })())
						return true
					}, ({ kind: $.TypeKind.Function, params: ["protoreflect.MapKey", "protoreflect.Value"], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					await sort.Slice($.interfaceValue(entries, "[]proto.entry", /* @__PURE__ */ $.sliceType("proto.entry")), $.functionValue(async (i: number, j: number): globalThis.Promise<boolean> => {
						switch ((__goscriptAwait = (kfd !== null && (kfd as any).__isVarRef !== true && (kfd as any).__goValue === undefined ? (kfd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(kfd)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
							case protoreflect.BoolKind:
							{
								return !await $.markAsStructValue($.cloneStructValue($.arrayIndex(entries!, i).key)).Bool() && await $.markAsStructValue($.cloneStructValue($.arrayIndex(entries!, j).key)).Bool()
								break
							}
							case protoreflect.Int32Kind:
							case protoreflect.Sint32Kind:
							case protoreflect.Sfixed32Kind:
							case protoreflect.Int64Kind:
							case protoreflect.Sint64Kind:
							case protoreflect.Sfixed64Kind:
							{
								return await $.markAsStructValue($.cloneStructValue($.arrayIndex(entries!, i).key)).Int() < await $.markAsStructValue($.cloneStructValue($.arrayIndex(entries!, j).key)).Int()
								break
							}
							case protoreflect.Uint32Kind:
							case protoreflect.Fixed32Kind:
							case protoreflect.Uint64Kind:
							case protoreflect.Fixed64Kind:
							{
								return await $.markAsStructValue($.cloneStructValue($.arrayIndex(entries!, i).key)).Uint() < await $.markAsStructValue($.cloneStructValue($.arrayIndex(entries!, j).key)).Uint()
								break
							}
							case protoreflect.StringKind:
							{
								return $.stringCompare(await $.markAsStructValue($.cloneStructValue($.arrayIndex(entries!, i).key)).String(), await $.markAsStructValue($.cloneStructValue($.arrayIndex(entries!, j).key)).String()) < 0
								break
							}
							default:
							{
								$.panic("invalid kind")
								break
							}
						}
					}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("int")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)))
					for (let __goscriptRangeTarget3 = entries, __goscriptRangeWindow3 = $.sliceRange(__goscriptRangeTarget3), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow3.length; __rangeIndex++) {
						let entry = $.markAsStructValue($.cloneStructValue((__goscriptRangeWindow3.backing[__goscriptRangeWindow3.offset + __rangeIndex] as entry)))
						await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as textWriter).writeName(fd) : textWriter.prototype.writeName.call(w, fd))
						void (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as textWriter).WriteByte(60) : textWriter.prototype.WriteByte.call(w, 60))
						if (!(w$ as textWriter).compact) {
							void (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as textWriter).WriteByte(10) : textWriter.prototype.WriteByte.call(w, 10))
						}
						;(w$ as textWriter).indent++
						await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as textWriter).writeName(kfd) : textWriter.prototype.writeName.call(w, kfd))
						{
							let err = await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as textWriter).writeSingularValue((entry.key).clone(), kfd) : textWriter.prototype.writeSingularValue.call(w, (entry.key).clone(), kfd))
							if (err != null) {
								return err
							}
						}
						void (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as textWriter).WriteByte(10) : textWriter.prototype.WriteByte.call(w, 10))
						await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as textWriter).writeName(vfd) : textWriter.prototype.writeName.call(w, vfd))
						{
							let err = await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as textWriter).writeSingularValue((entry.val).clone(), vfd) : textWriter.prototype.writeSingularValue.call(w, (entry.val).clone(), vfd))
							if (err != null) {
								return err
							}
						}
						void (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as textWriter).WriteByte(10) : textWriter.prototype.WriteByte.call(w, 10));
						;(w$ as textWriter).indent--
						void (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as textWriter).WriteByte(62) : textWriter.prototype.WriteByte.call(w, 62))
						void (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as textWriter).WriteByte(10) : textWriter.prototype.WriteByte.call(w, 10))
					}
					break
				}
				default:
				{
					await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as textWriter).writeName(fd) : textWriter.prototype.writeName.call(w, fd))
					{
						let err = await textWriter.prototype.writeSingularValue.call(w, (((__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(m)).Get(fd), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value)).clone(), fd)
						if (err != null) {
							return err
						}
					}
					void (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as textWriter).WriteByte(10) : textWriter.prototype.WriteByte.call(w, 10))
					break
				}
			}
		}

		{
			let b: protoreflect.RawFields = (((__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(m)).GetUnknown(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.RawFields) as protoreflect.RawFields)
			if ($.sliceLen((b as protoreflect.RawFields)) > 0) {
				await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as textWriter).writeUnknownFields(b) : textWriter.prototype.writeUnknownFields.call(w, b))
			}
		}
		return (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as textWriter).writeExtensions(m) : textWriter.prototype.writeExtensions.call(w, m))
	}

	public async writeName(fd: protoreflect.FieldDescriptor | null): globalThis.Promise<void> {
		let w: textWriter | $.VarRef<textWriter> | null = this;
		const w$: textWriter = w == null ? $.pointerTarget<textWriter>(w) : (w as any).__isVarRef === true ? (w as any).value : (w as any).__goValue === undefined ? (w as any) : $.pointerTarget<textWriter>(w)
		if (!(w$ as textWriter).compact && (w$ as textWriter).complete) {
			void (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as textWriter).writeIndent() : textWriter.prototype.writeIndent.call(w))
		}
		;(w$ as textWriter).complete = false

		if ((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 10) {
			;(w$ as textWriter).buf = $.appendSlice((w$ as textWriter).buf, $.stringToBytes((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Name(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)), $.byteSliceHint)
			void (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as textWriter).WriteByte(58) : textWriter.prototype.WriteByte.call(w, 58))
		} else {
			// Use message type name for group field name.
			;(w$ as textWriter).buf = $.appendSlice((w$ as textWriter).buf, $.stringToBytes((__goscriptAwait = $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Message(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Name(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)), $.byteSliceHint)
		}

		if (!(w$ as textWriter).compact) {
			void (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as textWriter).WriteByte(32) : textWriter.prototype.WriteByte.call(w, 32))
		}
	}

	public async writeProto3Any(m: protoreflect.Message | null): globalThis.Promise<[boolean, $.GoError]> {
		let w: textWriter | $.VarRef<textWriter> | null = this;
		const w$: textWriter = w == null ? $.pointerTarget<textWriter>(w) : (w as any).__isVarRef === true ? (w as any).value : (w as any).__goValue === undefined ? (w as any) : $.pointerTarget<textWriter>(w)
		let md = (__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(m)).Descriptor(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		let fdURL = (__goscriptAwait = $.pointerValue<Exclude<protoreflect.FieldDescriptors, null>>((__goscriptAwait = (md !== null && (md as any).__isVarRef !== true && (md as any).__goValue === undefined ? (md as Exclude<protoreflect.MessageDescriptor, null>) : $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>(md)).Fields(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).ByName("type_url"), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		let fdVal = (__goscriptAwait = $.pointerValue<Exclude<protoreflect.FieldDescriptors, null>>((__goscriptAwait = (md !== null && (md as any).__isVarRef !== true && (md as any).__goValue === undefined ? (md as Exclude<protoreflect.MessageDescriptor, null>) : $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>(md)).Fields(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).ByName("value"), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)

		let url = await $.markAsStructValue($.cloneStructValue(((__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(m)).Get(fdURL), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value))).String()
		let [mt, err] = await protoregistry.Types.prototype.FindMessageByURL.call(protoregistry.GlobalTypes, url)
		if (err != null) {
			return [false, null]
		}

		let b: $.Slice<number> = await $.markAsStructValue($.cloneStructValue(((__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(m)).Get(fdVal), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value))).Bytes()
		let m2 = (__goscriptAwait = (mt !== null && (mt as any).__isVarRef !== true && (mt as any).__goValue === undefined ? (mt as Exclude<protoreflect.MessageType, null>) : $.pointerValue<Exclude<protoreflect.MessageType, null>>(mt)).New(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		{
			let __goscriptShadow5 = await proto.Unmarshal(b, (__goscriptAwait = (m2 !== null && (m2 as any).__isVarRef !== true && (m2 as any).__goValue === undefined ? (m2 as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(m2)).Interface(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
			if (__goscriptShadow5 != null) {
				return [false, null]
			}
		}
		void (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as textWriter).Write(new Uint8Array([91])) : textWriter.prototype.Write.call(w, new Uint8Array([91])))
		if (requiresQuotes(url)) {
			await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as textWriter).writeQuotedString(url) : textWriter.prototype.writeQuotedString.call(w, url))
		} else {
			void (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as textWriter).Write($.stringToBytes(url)) : textWriter.prototype.Write.call(w, $.stringToBytes(url)))
		}
		if ((w$ as textWriter).compact) {
			void (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as textWriter).Write(new Uint8Array([93, 58, 60])) : textWriter.prototype.Write.call(w, new Uint8Array([93, 58, 60])))
		} else {
			void (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as textWriter).Write(new Uint8Array([93, 58, 32, 60, 10])) : textWriter.prototype.Write.call(w, new Uint8Array([93, 58, 32, 60, 10])));
			;(w$ as textWriter).indent++
		}
		{
			let __goscriptShadow6 = await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as textWriter).writeMessage(m2) : textWriter.prototype.writeMessage.call(w, m2))
			if (__goscriptShadow6 != null) {
				return [true, __goscriptShadow6]
			}
		}
		if ((w$ as textWriter).compact) {
			void (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as textWriter).Write(new Uint8Array([62, 32])) : textWriter.prototype.Write.call(w, new Uint8Array([62, 32])))
		} else {
			;(w$ as textWriter).indent--
			void (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as textWriter).Write(new Uint8Array([62, 10])) : textWriter.prototype.Write.call(w, new Uint8Array([62, 10])))
		}
		return [true, null]
	}

	public async writeQuotedString(s: string): globalThis.Promise<void> {
		let w: textWriter | $.VarRef<textWriter> | null = this;
		const w$: textWriter = w == null ? $.pointerTarget<textWriter>(w) : (w as any).__isVarRef === true ? (w as any).value : (w as any).__goValue === undefined ? (w as any) : $.pointerTarget<textWriter>(w)
		void (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as textWriter).WriteByte(34) : textWriter.prototype.WriteByte.call(w, 34))
		for (let i = 0; i < $.stringLen(s); i++) {
			{
				let c = $.indexString(s, i)
				switch (c) {
					case 10:
					{
						;(w$ as textWriter).buf = $.appendSlice((w$ as textWriter).buf, $.stringToBytes("\\n"), $.byteSliceHint)
						break
					}
					case 13:
					{
						;(w$ as textWriter).buf = $.appendSlice((w$ as textWriter).buf, $.stringToBytes("\\r"), $.byteSliceHint)
						break
					}
					case 9:
					{
						;(w$ as textWriter).buf = $.appendSlice((w$ as textWriter).buf, $.stringToBytes("\\t"), $.byteSliceHint)
						break
					}
					case 34:
					{
						;(w$ as textWriter).buf = $.appendSlice((w$ as textWriter).buf, $.stringToBytes("\\\""), $.byteSliceHint)
						break
					}
					case 92:
					{
						;(w$ as textWriter).buf = $.appendSlice((w$ as textWriter).buf, $.stringToBytes("\\\\"), $.byteSliceHint)
						break
					}
					default:
					{
						{
							let isPrint = (c >= 0x20) && (c < 0x7f)
							if (isPrint) {
								;(w$ as textWriter).buf = $.append((w$ as textWriter).buf, $.uint(c, 8), $.byteSliceHint)
							} else {
								;(w$ as textWriter).buf = $.appendSlice((w$ as textWriter).buf, $.stringToBytes(await fmt.Sprintf("\\%03o", $.basicInterfaceValue(c, "byte", "uint8"))), $.byteSliceHint)
							}
						}
						break
					}
				}
			}
		}
		void (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as textWriter).WriteByte(34) : textWriter.prototype.WriteByte.call(w, 34))
	}

	public async writeSingularExtension(name: string, v: protoreflect.Value, fd: protoreflect.FieldDescriptor | null): globalThis.Promise<$.GoError> {
		const w: textWriter | $.VarRef<textWriter> | null = this;
		await fmt.Fprintf($.pointerValueOrNil($.interfaceValue<io.Writer | null>(w, "*proto.textWriter", /* @__PURE__ */ $.pointerType("proto.textWriter")))!, "[%s]:", name)
		if (!$.pointerValue<textWriter>(w).compact) {
			void (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as textWriter).WriteByte(32) : textWriter.prototype.WriteByte.call(w, 32))
		}
		{
			let err = await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as textWriter).writeSingularValue(v, fd) : textWriter.prototype.writeSingularValue.call(w, v, fd))
			if (err != null) {
				return err
			}
		}
		void (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as textWriter).WriteByte(10) : textWriter.prototype.WriteByte.call(w, 10))
		return null
	}

	public async writeSingularValue(v: protoreflect.Value, fd: protoreflect.FieldDescriptor | null): globalThis.Promise<$.GoError> {
		let w: textWriter | $.VarRef<textWriter> | null = this;
		const w$: textWriter = w == null ? $.pointerTarget<textWriter>(w) : (w as any).__isVarRef === true ? (w as any).value : (w as any).__goValue === undefined ? (w as any) : $.pointerTarget<textWriter>(w)
		switch ((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
			case protoreflect.FloatKind:
			case protoreflect.DoubleKind:
			{
				{
					let vf = await v.Float()
					switch ((true as boolean)) {
						case math.IsInf(vf, 1):
						{
							void (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as textWriter).Write(posInf) : textWriter.prototype.Write.call(w, posInf))
							break
						}
						case math.IsInf(vf, -1):
						{
							void (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as textWriter).Write(negInf) : textWriter.prototype.Write.call(w, negInf))
							break
						}
						case math.IsNaN(vf):
						{
							void (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as textWriter).Write(nan) : textWriter.prototype.Write.call(w, nan))
							break
						}
						default:
						{
							await fmt.Fprint($.pointerValueOrNil($.interfaceValue<io.Writer | null>(w, "*proto.textWriter", /* @__PURE__ */ $.pointerType("proto.textWriter")))!, await v.Interface())
							break
						}
					}
				}
				break
			}
			case protoreflect.StringKind:
			{
				await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as textWriter).writeQuotedString(await v.String()) : textWriter.prototype.writeQuotedString.call(w, await v.String()))
				break
			}
			case protoreflect.BytesKind:
			{
				await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as textWriter).writeQuotedString($.bytesToString(await v.Bytes())) : textWriter.prototype.writeQuotedString.call(w, $.bytesToString(await v.Bytes())))
				break
			}
			case protoreflect.MessageKind:
			case protoreflect.GroupKind:
			{
				let bra: number = 60
				let ket: number = 62
				if ((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 10) {
					let __goscriptAssign0_0: number = 123
					let __goscriptAssign0_1: number = 125
					bra = __goscriptAssign0_0
					ket = __goscriptAssign0_1
				}
				void (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as textWriter).WriteByte(bra) : textWriter.prototype.WriteByte.call(w, bra))
				if (!(w$ as textWriter).compact) {
					void (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as textWriter).WriteByte(10) : textWriter.prototype.WriteByte.call(w, 10))
				}
				;(w$ as textWriter).indent++
				let m = await v.Message()
				{
					let [m2, ok] = $.typeAssertTuple<encoding.TextMarshaler | null>((__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(m)).Interface(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), "encoding.TextMarshaler")
					if (ok) {
						let __goscriptTuple5: any = await (m2 !== null && (m2 as any).__isVarRef !== true && (m2 as any).__goValue === undefined ? (m2 as Exclude<encoding.TextMarshaler, null>) : $.pointerValue<Exclude<encoding.TextMarshaler, null>>(m2)).MarshalText()
						let b: $.Slice<number> = __goscriptTuple5[0]
						let err = __goscriptTuple5[1]
						if (err != null) {
							return err
						}
						void (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as textWriter).Write(b) : textWriter.prototype.Write.call(w, b))
					} else {
						await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as textWriter).writeMessage(m) : textWriter.prototype.writeMessage.call(w, m))
					}
				}
				;(w$ as textWriter).indent--
				void (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as textWriter).WriteByte(ket) : textWriter.prototype.WriteByte.call(w, ket))
				break
			}
			case protoreflect.EnumKind:
			{
				{
					let ev = (__goscriptAwait = $.pointerValue<Exclude<protoreflect.EnumValueDescriptors, null>>((__goscriptAwait = $.pointerValue<Exclude<protoreflect.EnumDescriptor, null>>((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Enum(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Values(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).ByNumber(await v.Enum()), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					if (ev != null) {
						await fmt.Fprint($.pointerValueOrNil($.interfaceValue<io.Writer | null>(w, "*proto.textWriter", /* @__PURE__ */ $.pointerType("proto.textWriter")))!, $.namedValueInterfaceValue<any>((__goscriptAwait = (ev !== null && (ev as any).__isVarRef !== true && (ev as any).__goValue === undefined ? (ev as Exclude<protoreflect.EnumValueDescriptor, null>) : $.pointerValue<Exclude<protoreflect.EnumValueDescriptor, null>>(ev)).Name(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), "protoreflect.Name", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()))
					} else {
						await fmt.Fprint($.pointerValueOrNil($.interfaceValue<io.Writer | null>(w, "*proto.textWriter", /* @__PURE__ */ $.pointerType("proto.textWriter")))!, $.namedValueInterfaceValue<any>(await v.Enum(), "protoreflect.EnumNumber", {}, /* @__PURE__ */ $.basicType("int32", "protoreflect.EnumNumber")))
					}
				}
				break
			}
			default:
			{
				await fmt.Fprint($.pointerValueOrNil($.interfaceValue<io.Writer | null>(w, "*proto.textWriter", /* @__PURE__ */ $.pointerType("proto.textWriter")))!, await v.Interface())
				break
			}
		}
		return null
	}

	public async writeUnknownFields(b: $.Slice<number>): globalThis.Promise<void> {
		let w: textWriter | $.VarRef<textWriter> | null = this;
		const w$: textWriter = w == null ? $.pointerTarget<textWriter>(w) : (w as any).__isVarRef === true ? (w as any).value : (w as any).__goValue === undefined ? (w as any) : $.pointerTarget<textWriter>(w)
		if (!(w$ as textWriter).compact) {
			await fmt.Fprintf($.pointerValueOrNil($.interfaceValue<io.Writer | null>(w, "*proto.textWriter", /* @__PURE__ */ $.pointerType("proto.textWriter")))!, "/* %d unknown bytes */\n", $.basicInterfaceValue($.sliceLen(b), "int"))
		}

		while ($.sliceLen(b) > 0) {
			let [num, wtyp, n] = protowire.ConsumeTag(b)
			if (n < 0) {
				return
			}
			b = $.goSlice(b, n, undefined)

			if (wtyp == 4) {
				;(w$ as textWriter).indent--
				void (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as textWriter).Write(endBraceNewline) : textWriter.prototype.Write.call(w, endBraceNewline))
				continue
			}
			await fmt.Fprint($.pointerValueOrNil($.interfaceValue<io.Writer | null>(w, "*proto.textWriter", /* @__PURE__ */ $.pointerType("proto.textWriter")))!, $.namedValueInterfaceValue<any>(num, "protowire.Number", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic2()))
			if (wtyp != 3) {
				void (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as textWriter).WriteByte(58) : textWriter.prototype.WriteByte.call(w, 58))
			}
			if (!(w$ as textWriter).compact || (wtyp == 3)) {
				void (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as textWriter).WriteByte(32) : textWriter.prototype.WriteByte.call(w, 32))
			}
			switch (wtyp) {
				case protowire.VarintType:
				{
					let [v, __goscriptShadow7] = protowire.ConsumeVarint(b)
					if (__goscriptShadow7 < 0) {
						return
					}
					b = $.goSlice(b, __goscriptShadow7, undefined)
					await fmt.Fprint($.pointerValueOrNil($.interfaceValue<io.Writer | null>(w, "*proto.textWriter", /* @__PURE__ */ $.pointerType("proto.textWriter")))!, $.basicInterfaceValue(v, "uint64"))
					break
				}
				case protowire.Fixed32Type:
				{
					let [v, __goscriptShadow8] = protowire.ConsumeFixed32(b)
					if (__goscriptShadow8 < 0) {
						return
					}
					b = $.goSlice(b, __goscriptShadow8, undefined)
					await fmt.Fprint($.pointerValueOrNil($.interfaceValue<io.Writer | null>(w, "*proto.textWriter", /* @__PURE__ */ $.pointerType("proto.textWriter")))!, $.basicInterfaceValue(v, "uint32"))
					break
				}
				case protowire.Fixed64Type:
				{
					let [v, __goscriptShadow9] = protowire.ConsumeFixed64(b)
					if (__goscriptShadow9 < 0) {
						return
					}
					b = $.goSlice(b, __goscriptShadow9, undefined)
					await fmt.Fprint($.pointerValueOrNil($.interfaceValue<io.Writer | null>(w, "*proto.textWriter", /* @__PURE__ */ $.pointerType("proto.textWriter")))!, $.basicInterfaceValue(v, "uint64"))
					break
				}
				case protowire.BytesType:
				{
					let __goscriptTuple6: any = protowire.ConsumeBytes(b)
					let v: $.Slice<number> = __goscriptTuple6[0]
					let __goscriptShadow10 = __goscriptTuple6[1]
					if (__goscriptShadow10 < 0) {
						return
					}
					b = $.goSlice(b, __goscriptShadow10, undefined)
					await fmt.Fprintf($.pointerValueOrNil($.interfaceValue<io.Writer | null>(w, "*proto.textWriter", /* @__PURE__ */ $.pointerType("proto.textWriter")))!, "%q", $.interfaceValue(v, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))))
					break
				}
				case protowire.StartGroupType:
				{
					void (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as textWriter).WriteByte(123) : textWriter.prototype.WriteByte.call(w, 123));
					;(w$ as textWriter).indent++
					break
				}
				default:
				{
					await fmt.Fprintf($.pointerValueOrNil($.interfaceValue<io.Writer | null>(w, "*proto.textWriter", /* @__PURE__ */ $.pointerType("proto.textWriter")))!, "/* unknown wire type %d */", $.namedValueInterfaceValue<any>(wtyp, "protowire.Type", {}, /* @__PURE__ */ $.basicType("int8", "protowire.Type")))
					break
				}
			}
			void (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as textWriter).WriteByte(10) : textWriter.prototype.WriteByte.call(w, 10))
		}
	}

	static __typeInfo = $.registerStructType(
		"proto.textWriter",
		() => new textWriter(),
		() => [$.methodSignature("Write", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["n", /* @__PURE__ */ $.basicType("int")], ["_", "error"]], true), $.methodSignature("WriteByte", [["c", /* @__PURE__ */ $.basicType("uint8")]], ["error"], true), $.methodSignature("writeExtensions", [["m", "protoreflect.Message"]], ["error"], true), $.methodSignature("writeIndent", [], [], true), $.methodSignature("writeMessage", [["m", "protoreflect.Message"]], ["error"], true), $.methodSignature("writeName", [["fd", "protoreflect.FieldDescriptor"]], [], true), $.methodSignature("writeProto3Any", [["m", "protoreflect.Message"]], [/* @__PURE__ */ $.basicType("bool"), "error"], true), $.methodSignature("writeQuotedString", [["s", /* @__PURE__ */ $.basicType("string")]], [], true), $.methodSignature("writeSingularExtension", [["name", /* @__PURE__ */ $.basicType("string")], ["v", "protoreflect.Value"], ["fd", "protoreflect.FieldDescriptor"]], ["error"], true), $.methodSignature("writeSingularValue", [["v", "protoreflect.Value"], ["fd", "protoreflect.FieldDescriptor"]], ["error"], true), $.methodSignature("writeUnknownFields", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [], true)],
		textWriter,
		() => [/* @__PURE__ */ $.structField("compact", /* @__PURE__ */ $.basicType("bool"), [0], 0, false, { pkgPath: "github.com/golang/protobuf/proto" }), /* @__PURE__ */ $.structField("expandAny", /* @__PURE__ */ $.basicType("bool"), [1], 1, false, { pkgPath: "github.com/golang/protobuf/proto" }), /* @__PURE__ */ $.structField("complete", /* @__PURE__ */ $.basicType("bool"), [2], 2, false, { pkgPath: "github.com/golang/protobuf/proto" }), /* @__PURE__ */ $.structField("indent", /* @__PURE__ */ $.basicType("int"), [3], 8, false, { pkgPath: "github.com/golang/protobuf/proto" }), /* @__PURE__ */ $.structField("buf", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [4], 16, false, { pkgPath: "github.com/golang/protobuf/proto" })]
	)
}

export const wrapTextMarshalV2: boolean = false

export let defaultTextMarshaler: $.VarRef<TextMarshaler> = $.varRef(new TextMarshaler(undefined, true))

export function __goscript_set_defaultTextMarshaler(__goscriptValue: TextMarshaler): void {
	$.assignStruct(defaultTextMarshaler.value, __goscriptValue)
}

export let compactTextMarshaler: $.VarRef<TextMarshaler> = $.varRef(new TextMarshaler({Compact: true}, true))

export function __goscript_set_compactTextMarshaler(__goscriptValue: TextMarshaler): void {
	$.assignStruct(compactTextMarshaler.value, __goscriptValue)
}

export async function MarshalText(w: io.Writer | null, m: __goscript_proto.Message | null): globalThis.Promise<$.GoError> {
	return defaultTextMarshaler.value.Marshal(w, m)
}

export async function MarshalTextString(m: __goscript_proto.Message | null): globalThis.Promise<string> {
	return defaultTextMarshaler.value.Text(m)
}

export async function CompactText(w: io.Writer | null, m: __goscript_proto.Message | null): globalThis.Promise<$.GoError> {
	return compactTextMarshaler.value.Marshal(w, m)
}

export async function CompactTextString(m: __goscript_proto.Message | null): globalThis.Promise<string> {
	return compactTextMarshaler.value.Text(m)
}

export let newline: $.Slice<number> = new Uint8Array([10])

export function __goscript_set_newline(__goscriptValue: $.Slice<number>): void {
	newline = __goscriptValue
}

export let endBraceNewline: $.Slice<number> = new Uint8Array([125, 10])

export function __goscript_set_endBraceNewline(__goscriptValue: $.Slice<number>): void {
	endBraceNewline = __goscriptValue
}

export let posInf: $.Slice<number> = new Uint8Array([105, 110, 102])

export function __goscript_set_posInf(__goscriptValue: $.Slice<number>): void {
	posInf = __goscriptValue
}

export let negInf: $.Slice<number> = new Uint8Array([45, 105, 110, 102])

export function __goscript_set_negInf(__goscriptValue: $.Slice<number>): void {
	negInf = __goscriptValue
}

export let nan: $.Slice<number> = new Uint8Array([110, 97, 110])

export function __goscript_set_nan(__goscriptValue: $.Slice<number>): void {
	nan = __goscriptValue
}

export function requiresQuotes(u: string): boolean {
	// When type URL contains any characters except [0-9A-Za-z./\-]*, it must be quoted.
	for (let __goscriptRunes0 = $.stringRunes(u); __goscriptRunes0.next(); ) {
		const ch = __goscriptRunes0.rune
		switch ((true as boolean)) {
			case ((ch == 46) || (ch == 47)) || (ch == 95):
			{
				continue
				break
			}
			case (48 <= ch) && (ch <= 57):
			{
				continue
				break
			}
			case (65 <= ch) && (ch <= 90):
			{
				continue
				break
			}
			case (97 <= ch) && (ch <= 122):
			{
				continue
				break
			}
			default:
			{
				return true
				break
			}
		}
	}
	return false
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({IsValid: (receiver: any, ...args: any[]) => (protoreflect.Name_IsValid as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.basicType("string", "protoreflect.Name"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("IsValid", [], [/* @__PURE__ */ $.basicType("bool")])])
}

var __goscriptStatic3$value: any
function __goscriptStatic3(): any {
	return __goscriptStatic3$value ??= ({IsValid: (receiver: any, ...args: any[]) => (protowire.Number_IsValid as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic4$value: any
function __goscriptStatic4(): any {
	return __goscriptStatic4$value ??= (/* @__PURE__ */ $.basicType("int32", "protowire.Number"))
}

var __goscriptAwait: any
