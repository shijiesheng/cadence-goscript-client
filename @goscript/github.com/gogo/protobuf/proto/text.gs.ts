// Generated file based on text.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bufio from "@goscript/bufio/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as encoding from "@goscript/encoding/index.js"

import * as errors from "@goscript/errors/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as io from "@goscript/io/index.js"

import * as log from "@goscript/log/index.js"

import * as math from "@goscript/math/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as sort from "@goscript/sort/index.js"

import * as strings from "@goscript/strings/index.js"

import * as sync from "@goscript/sync/index.js"

import * as time from "@goscript/time/index.js"

import * as __goscript_decode from "./decode.gs.ts"

import * as __goscript_duration from "./duration.gs.ts"

import * as __goscript_duration_gogo from "./duration_gogo.gs.ts"

import * as __goscript_encode from "./encode.gs.ts"

import * as __goscript_extensions from "./extensions.gs.ts"

import * as __goscript_extensions_gogo from "./extensions_gogo.gs.ts"

import * as __goscript_lib from "./lib.gs.ts"

import * as __goscript_properties from "./properties.gs.ts"

import type * as __goscript_table_marshal from "./table_marshal.gs.ts"

import * as __goscript_text_gogo from "./text_gogo.gs.ts"

import * as __goscript_timestamp from "./timestamp.gs.ts"

import * as __goscript_timestamp_gogo from "./timestamp_gogo.gs.ts"
import "@goscript/bufio/index.js"
import "@goscript/bytes/index.js"
import "@goscript/encoding/index.js"
import "@goscript/errors/index.js"
import "@goscript/fmt/index.js"
import "@goscript/io/index.js"
import "@goscript/log/index.js"
import "@goscript/math/index.js"
import "@goscript/reflect/index.js"
import "@goscript/sort/index.js"
import "@goscript/strings/index.js"
import "@goscript/sync/index.js"
import "@goscript/time/index.js"
import "./decode.gs.ts"
import "./duration.gs.ts"
import "./duration_gogo.gs.ts"
import "./encode.gs.ts"
import "./extensions.gs.ts"
import "./extensions_gogo.gs.ts"
import "./lib.gs.ts"
import "./properties.gs.ts"
import "./text_gogo.gs.ts"
import "./timestamp.gs.ts"
import "./timestamp_gogo.gs.ts"

$.registerTypePackagePath("github.com/gogo/protobuf/proto", ["proto.writer", "proto.textWriter", "proto.wkt", "proto.int32Slice", "proto.TextMarshaler"])

export type writer = {
	Write(p: $.Slice<number>): [number, $.GoError] | globalThis.Promise<[number, $.GoError]>
	WriteByte(_p0: number): $.GoError | globalThis.Promise<$.GoError>
}

$.registerInterfaceType(
	"proto.writer",
	null,
	[$.methodSignature("Write", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]]), $.methodSignature("WriteByte", [/* @__PURE__ */ $.basicType("uint8")], ["error"])]
);

export type int32Slice = $.Slice<number>

$.registerNamedType("proto.int32Slice", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int32")));

$.registerNamedValueType(
	"proto.int32Slice",
	{Len: (receiver: any, ...args: any[]) => (int32Slice_Len as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Less: (receiver: any, ...args: any[]) => (int32Slice_Less as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Swap: (receiver: any, ...args: any[]) => (int32Slice_Swap as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Less", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Swap", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]])]
);

$.registerNamedValueType(
	"*proto.int32Slice",
	{Len: (receiver: any, ...args: any[]) => (int32Slice_Len as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Less: (receiver: any, ...args: any[]) => (int32Slice_Less as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Swap: (receiver: any, ...args: any[]) => (int32Slice_Swap as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Less", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Swap", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]])]
);

export class textWriter {
	public get ind(): number {
		return this._fields.ind
	}

	public set ind(value: number) {
		this._fields.ind = value
	}

	public get complete(): boolean {
		return this._fields.complete
	}

	public set complete(value: boolean) {
		this._fields.complete = value
	}

	public get compact(): boolean {
		return this._fields.compact
	}

	public set compact(value: boolean) {
		this._fields.compact = value
	}

	public get w(): writer | null {
		return this._fields.w
	}

	public set w(value: writer | null) {
		this._fields.w = value
	}

	public _fields: {
		ind: number
		complete: boolean
		compact: boolean
		w: writer | null
	}

	constructor(init?: Partial<{ind?: number, complete?: boolean, compact?: boolean, w?: writer | null}>, __goscriptValue?: boolean) {
		this._fields = {
			ind: init?.ind ?? (0 as number),
			complete: init?.complete ?? (false as boolean),
			compact: init?.compact ?? (false as boolean),
			w: init?.w ?? (null! as writer | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): textWriter {
		return new textWriter(this, true)
	}

	public __goscriptAssign(source: textWriter): void {
		const target = this._fields
		const values = source._fields
		target.ind = values.ind
		target.complete = values.complete
		target.compact = values.compact
		target.w = $.assignFieldValue(target.w, values.w, "proto.writer")
	}

	public async Write(p: $.Slice<number>): globalThis.Promise<[number, $.GoError]> {
		let w: textWriter | $.VarRef<textWriter> | null = this;
		let n: number = 0
		let err: $.GoError = null! as $.GoError
		const w$: textWriter = w == null ? $.pointerTarget<textWriter>(w) : (w as any).__isVarRef === true ? (w as any).value : (w as any).__goValue === undefined ? (w as any) : $.pointerTarget<textWriter>(w)
		let newlines = bytes.Count(p, newline)
		if (newlines == 0) {
			if (!(w$ as textWriter).compact && (w$ as textWriter).complete) {
				await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as textWriter).writeIndent() : textWriter.prototype.writeIndent.call(w))
			}
			let __goscriptTuple0: any = await $.pointerValue<Exclude<writer, null>>((w$ as textWriter).w).Write(p)
			n = __goscriptTuple0[0]
			err = __goscriptTuple0[1];
			;(w$ as textWriter).complete = false
			return [n, err]
		}

		let frags: $.Slice<$.Slice<number>> = bytes.SplitN(p, newline, newlines + 1)
		if ((w$ as textWriter).compact) {
			for (let __goscriptRangeTarget0 = frags, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), i = 0; i < __goscriptRangeWindow0.length; i++) {
				let frag = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + i] as $.Slice<number>)
				if (i > 0) {
					{
						let __goscriptShadow0 = (__goscriptAwait = $.pointerValue<Exclude<writer, null>>((w$ as textWriter).w).WriteByte(32), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
						if (__goscriptShadow0 != null) {
							return [n, __goscriptShadow0]
						}
					}
					n++
				}
				let [nn, __goscriptShadow1] = await $.pointerValue<Exclude<writer, null>>((w$ as textWriter).w).Write(frag)
				n = n + (nn)
				if (__goscriptShadow1 != null) {
					return [n, __goscriptShadow1]
				}
			}
			return [n, null]
		}

		for (let __goscriptRangeTarget1 = frags, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), i = 0; i < __goscriptRangeWindow1.length; i++) {
			let frag = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + i] as $.Slice<number>)
			if ((w$ as textWriter).complete) {
				await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as textWriter).writeIndent() : textWriter.prototype.writeIndent.call(w))
			}
			let [nn, __goscriptShadow2] = await $.pointerValue<Exclude<writer, null>>((w$ as textWriter).w).Write(frag)
			n = n + (nn)
			if (__goscriptShadow2 != null) {
				return [n, __goscriptShadow2]
			}
			if ((i + 1) < $.sliceLen(frags)) {
				{
					let __goscriptShadow3 = (__goscriptAwait = $.pointerValue<Exclude<writer, null>>((w$ as textWriter).w).WriteByte(10), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					if (__goscriptShadow3 != null) {
						return [n, __goscriptShadow3]
					}
				}
				n++
			}
		}
		;(w$ as textWriter).complete = $.sliceLen($.arrayIndex(frags!, $.sliceLen(frags) - 1)) == 0
		return [n, null]
	}

	public async WriteByte(c: number): globalThis.Promise<$.GoError> {
		let w: textWriter | $.VarRef<textWriter> | null = this;
		const w$: textWriter = w == null ? $.pointerTarget<textWriter>(w) : (w as any).__isVarRef === true ? (w as any).value : (w as any).__goValue === undefined ? (w as any) : $.pointerTarget<textWriter>(w)
		if ((w$ as textWriter).compact && (c == 10)) {
			c = 32
		}
		if (!(w$ as textWriter).compact && (w$ as textWriter).complete) {
			await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as textWriter).writeIndent() : textWriter.prototype.writeIndent.call(w))
		}
		let err = (__goscriptAwait = $.pointerValue<Exclude<writer, null>>((w$ as textWriter).w).WriteByte(c), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait);
		;(w$ as textWriter).complete = c == 10
		return err
	}

	public async WriteString(s: string): globalThis.Promise<[number, $.GoError]> {
		let w: textWriter | $.VarRef<textWriter> | null = this;
		let n: number = 0
		let err: $.GoError = null! as $.GoError
		const w$: textWriter = w == null ? $.pointerTarget<textWriter>(w) : (w as any).__isVarRef === true ? (w as any).value : (w as any).__goValue === undefined ? (w as any) : $.pointerTarget<textWriter>(w)
		if (!strings.Contains(s, "\n")) {
			if (!(w$ as textWriter).compact && (w$ as textWriter).complete) {
				await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as textWriter).writeIndent() : textWriter.prototype.writeIndent.call(w))
			}
			;(w$ as textWriter).complete = false
			return io.WriteString($.pointerValueOrNil(((w$ as textWriter).w as io.Writer | null))!, s)
		}
		// WriteString is typically called without newlines, so this
		// codepath and its copy are rare.  We copy to avoid
		// duplicating all of Write's logic here.
		return (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as textWriter).Write($.stringToBytes(s)) : textWriter.prototype.Write.call(w, $.stringToBytes(s)))
	}

	public indent(): void {
		let w: textWriter | $.VarRef<textWriter> | null = this;
		const w$: textWriter = w == null ? $.pointerTarget<textWriter>(w) : (w as any).__isVarRef === true ? (w as any).value : (w as any).__goValue === undefined ? (w as any) : $.pointerTarget<textWriter>(w);
		;(w$ as textWriter).ind++
	}

	public async unindent(): globalThis.Promise<void> {
		let w: textWriter | $.VarRef<textWriter> | null = this;
		const w$: textWriter = w == null ? $.pointerTarget<textWriter>(w) : (w as any).__isVarRef === true ? (w as any).value : (w as any).__goValue === undefined ? (w as any) : $.pointerTarget<textWriter>(w)
		if ((w$ as textWriter).ind == 0) {
			await log.Print($.arrayToSlice<any>(["proto: textWriter unindented too far"]))
			return
		}
		;(w$ as textWriter).ind--
	}

	public async writeIndent(): globalThis.Promise<void> {
		let w: textWriter | $.VarRef<textWriter> | null = this;
		const w$: textWriter = w == null ? $.pointerTarget<textWriter>(w) : (w as any).__isVarRef === true ? (w as any).value : (w as any).__goValue === undefined ? (w as any) : $.pointerTarget<textWriter>(w)
		if (!(w$ as textWriter).complete) {
			return
		}
		let remain = (w$ as textWriter).ind * 2
		while (remain > 0) {
			let n = remain
			if (n > $.sliceLen(spaces)) {
				n = $.sliceLen(spaces)
			}
			await $.pointerValue<Exclude<writer, null>>((w$ as textWriter).w).Write($.goSlice(spaces, undefined, n))
			remain = remain - (n)
		}
		;(w$ as textWriter).complete = false
	}

	static __typeInfo = $.registerStructType(
		"proto.textWriter",
		() => new textWriter(),
		() => [$.methodSignature("Write", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]], true), $.methodSignature("WriteByte", [["c", /* @__PURE__ */ $.basicType("uint8")]], ["error"], true), $.methodSignature("WriteString", [["s", /* @__PURE__ */ $.basicType("string")]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]], true), $.methodSignature("indent", [], [], true), $.methodSignature("unindent", [], [], true), $.methodSignature("writeIndent", [], [], true)],
		textWriter,
		() => [/* @__PURE__ */ $.structField("ind", /* @__PURE__ */ $.basicType("int"), [0], 0, false, { pkgPath: "github.com/gogo/protobuf/proto" }), /* @__PURE__ */ $.structField("complete", /* @__PURE__ */ $.basicType("bool"), [1], 8, false, { pkgPath: "github.com/gogo/protobuf/proto" }), /* @__PURE__ */ $.structField("compact", /* @__PURE__ */ $.basicType("bool"), [2], 9, false, { pkgPath: "github.com/gogo/protobuf/proto" }), /* @__PURE__ */ $.structField("w", "proto.writer", [3], 16, false, { pkgPath: "github.com/gogo/protobuf/proto" })]
	)
}

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

	public async Marshal(w: io.Writer | null, pb: __goscript_lib.Message | null): globalThis.Promise<$.GoError> {
		const tm: TextMarshaler | $.VarRef<TextMarshaler> | null = this;
		let val = $.markAsStructValue($.cloneStructValue(reflect.ValueOf((pb as any))))
		if ((pb == null) || $.markAsStructValue($.cloneStructValue(val)).IsNil()) {
			await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? (w as Exclude<io.Writer, null>) : $.pointerValue<Exclude<io.Writer, null>>(w)).Write(new Uint8Array([60, 110, 105, 108, 62]))
			return null
		}
		let bw: bufio.Writer | $.VarRef<bufio.Writer> | null = null! as bufio.Writer | $.VarRef<bufio.Writer> | null
		let [ww, ok] = $.typeAssertTuple<writer | null>(w, "proto.writer")
		if (!ok) {
			bw = bufio.NewWriter(w)
			ww = $.interfaceValue<writer | null>(bw, "*bufio.Writer", /* @__PURE__ */ $.pointerType("bufio.Writer"))
		}
		let aw: textWriter | $.VarRef<textWriter> | null = new textWriter({w: ww, complete: true, compact: $.pointerValue<TextMarshaler>(tm).Compact})

		{
			let [etm, __goscriptShadow7] = $.typeAssertTuple<encoding.TextMarshaler | null>(pb, "encoding.TextMarshaler")
			if (__goscriptShadow7) {
				let __goscriptTuple16: any = await (etm !== null && (etm as any).__isVarRef !== true && (etm as any).__goValue === undefined ? (etm as Exclude<encoding.TextMarshaler, null>) : $.pointerValue<Exclude<encoding.TextMarshaler, null>>(etm)).MarshalText()
				let text: $.Slice<number> = __goscriptTuple16[0]
				let err = __goscriptTuple16[1]
				if (err != null) {
					return err
				}
				{
					let __goscriptTuple17: any = await (aw !== null && (aw as any).__isVarRef !== true && (aw as any).__goValue === undefined ? ((aw as any) as textWriter).Write(text) : textWriter.prototype.Write.call(aw, text))
					err = __goscriptTuple17[1]
					if (err != null) {
						return err
					}
				}
				if (bw != null) {
					return (bw !== null && (bw as any).__isVarRef !== true && (bw as any).__goValue === undefined ? ((bw as any) as bufio.Writer).Flush() : bufio.Writer.prototype.Flush.call(bw))
				}
				return null
			}
		}
		// Dereference the received pointer so we don't have outer < and >.
		let v = $.markAsStructValue($.cloneStructValue(reflect.Indirect($.markAsStructValue($.cloneStructValue(val)))))
		{
			let err = await (tm !== null && (tm as any).__isVarRef !== true && (tm as any).__goValue === undefined ? ((tm as any) as TextMarshaler).writeStruct(aw, v) : TextMarshaler.prototype.writeStruct.call(tm, aw, v))
			if (err != null) {
				return err
			}
		}
		if (bw != null) {
			return (bw !== null && (bw as any).__isVarRef !== true && (bw as any).__goValue === undefined ? ((bw as any) as bufio.Writer).Flush() : bufio.Writer.prototype.Flush.call(bw))
		}
		return null
	}

	public async Text(pb: __goscript_lib.Message | null): globalThis.Promise<string> {
		const tm: TextMarshaler | $.VarRef<TextMarshaler> | null = this;
		let buf: $.VarRef<bytes.Buffer> = $.varRef($.markAsStructValue(new bytes.Buffer()))
		await (tm !== null && (tm as any).__isVarRef !== true && (tm as any).__goValue === undefined ? ((tm as any) as TextMarshaler).Marshal($.interfaceValue<io.Writer | null>(buf, "*bytes.Buffer", /* @__PURE__ */ $.pointerType("bytes.Buffer")), pb) : TextMarshaler.prototype.Marshal.call(tm, $.interfaceValue<io.Writer | null>(buf, "*bytes.Buffer", /* @__PURE__ */ $.pointerType("bytes.Buffer")), pb))
		return buf.value.String()
	}

	public async writeAny(w: textWriter | $.VarRef<textWriter> | null, v: reflect.Value, props: __goscript_properties.Properties | $.VarRef<__goscript_properties.Properties> | null): globalThis.Promise<$.GoError> {
		const tm: TextMarshaler | $.VarRef<TextMarshaler> | null = this;
		const props$: __goscript_properties.Properties = props == null ? $.pointerTarget<__goscript_properties.Properties>(props) : (props as any).__isVarRef === true ? (props as any).value : (props as any).__goValue === undefined ? (props as any) : $.pointerTarget<__goscript_properties.Properties>(props)
		v = $.assignStruct(v, reflect.Indirect($.markAsStructValue($.cloneStructValue(v))))

		if (props != null) {
			if ($.stringLen((props$ as __goscript_properties.Properties).CustomType) > 0) {
				let [__goscriptShadow8, ok] = $.typeAssertTuple<__goscript_encode.Marshaler | null>($.markAsStructValue($.cloneStructValue(v)).Interface(), "proto.Marshaler")
				if (ok) {
					let __goscriptTuple18: any = await (__goscriptShadow8 !== null && (__goscriptShadow8 as any).__isVarRef !== true && (__goscriptShadow8 as any).__goValue === undefined ? (__goscriptShadow8 as Exclude<__goscript_encode.Marshaler, null>) : $.pointerValue<Exclude<__goscript_encode.Marshaler, null>>(__goscriptShadow8)).Marshal()
					let data: $.Slice<number> = __goscriptTuple18[0]
					let err = __goscriptTuple18[1]
					if (err != null) {
						return err
					}
					{
						let __goscriptShadow9 = await writeString(w, $.bytesToString(data))
						if (__goscriptShadow9 != null) {
							return __goscriptShadow9
						}
					}
					return null
				}
			} else {
				if ($.stringLen((props$ as __goscript_properties.Properties).CastType) > 0) {
					{
						let [, ok] = $.typeAssertTuple<any>($.markAsStructValue($.cloneStructValue(v)).Interface(), { kind: $.TypeKind.Interface, methods: [{ name: "String", args: [], returns: [{ name: "_r0", type: /* @__PURE__ */ $.basicType("string") }] }] })
						if (ok) {
							switch ($.markAsStructValue($.cloneStructValue(v)).Kind()) {
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
								{
									let [, err] = await fmt.Fprintf($.pointerValueOrNil($.interfaceValue<io.Writer | null>(w, "*proto.textWriter", /* @__PURE__ */ $.pointerType("proto.textWriter")))!, "%d", $.markAsStructValue($.cloneStructValue(v)).Interface())
									return err
									break
								}
							}
						}
					}
				} else {
					if ((props$ as __goscript_properties.Properties).StdTime) {
						let [t, ok] = $.typeAssertTuple<time.Time>($.markAsStructValue($.cloneStructValue(v)).Interface(), "time.Time")
						if (!ok) {
							return fmt.Errorf("stdtime is not time.Time, but %T", $.markAsStructValue($.cloneStructValue(v)).Interface())
						}
						let __goscriptTuple19: any = __goscript_timestamp.timestampProto(t)
						let tproto: __goscript_timestamp_gogo.timestamp | $.VarRef<__goscript_timestamp_gogo.timestamp> | null = __goscriptTuple19[0]
						let err = __goscriptTuple19[1]
						if (err != null) {
							return err
						}
						let propsCopy = $.varRef(((props$ as __goscript_properties.Properties)).clone())
						propsCopy.value.StdTime = false
						err = await TextMarshaler.prototype.writeAny.call(tm, w, $.markAsStructValue($.cloneStructValue(reflect.ValueOf($.interfaceValue(tproto, "*proto.timestamp", /* @__PURE__ */ $.pointerType("proto.timestamp"))))), propsCopy)
						return err
					} else {
						if ((props$ as __goscript_properties.Properties).StdDuration) {
							let [d, ok] = $.typeAssertTuple<time.Duration>($.markAsStructValue($.cloneStructValue(v)).Interface(), /* @__PURE__ */ $.basicType("int64", "time.Duration"))
							if (!ok) {
								return fmt.Errorf("stdtime is not time.Duration, but %T", $.markAsStructValue($.cloneStructValue(v)).Interface())
							}
							let dproto: __goscript_duration_gogo.duration | $.VarRef<__goscript_duration_gogo.duration> | null = __goscript_duration.durationProto(d)
							let propsCopy = $.varRef(((props$ as __goscript_properties.Properties)).clone())
							propsCopy.value.StdDuration = false
							let err = await TextMarshaler.prototype.writeAny.call(tm, w, $.markAsStructValue($.cloneStructValue(reflect.ValueOf($.interfaceValue(dproto, "*proto.duration", /* @__PURE__ */ $.pointerType("proto.duration"))))), propsCopy)
							return err
						}
					}
				}
			}
		}

		// Floats have special cases.
		if (($.markAsStructValue($.cloneStructValue(v)).Kind() == 13) || ($.markAsStructValue($.cloneStructValue(v)).Kind() == 14)) {
			let x = $.markAsStructValue($.cloneStructValue(v)).Float()
			let b: $.Slice<number> = null! as $.Slice<number>
			switch ((true as boolean)) {
				case math.IsInf(x, 1):
				{
					b = posInf
					break
				}
				case math.IsInf(x, -1):
				{
					b = negInf
					break
				}
				case math.IsNaN(x):
				{
					b = nan
					break
				}
			}
			if (b != null) {
				let [, err] = await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as textWriter).Write(b) : textWriter.prototype.Write.call(w, b))
				return err
			}
		}

		// We don't attempt to serialise every possible value type; only those
		// that can occur in protocol buffers.
		switch ($.markAsStructValue($.cloneStructValue(v)).Kind()) {
			case reflect.Slice:
			{
				{
					let err = await writeString(w, $.bytesToString($.markAsStructValue($.cloneStructValue(v)).Bytes()))
					if (err != null) {
						return err
					}
				}
				break
			}
			case reflect.String:
			{
				{
					let err = await writeString(w, $.markAsStructValue($.cloneStructValue(v)).String())
					if (err != null) {
						return err
					}
				}
				break
			}
			case reflect.Struct:
			{
				let bra: number = 60
				let ket: number = 62
				if ((props != null) && ($.stringEqual((props$ as __goscript_properties.Properties).Wire, "group"))) {
					let __goscriptAssign1_0: number = 123
					let __goscriptAssign1_1: number = 125
					bra = __goscriptAssign1_0
					ket = __goscriptAssign1_1
				}
				{
					let err = await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as textWriter).WriteByte(bra) : textWriter.prototype.WriteByte.call(w, bra))
					if (err != null) {
						return err
					}
				}
				if (!$.pointerValue<textWriter>(w).compact) {
					{
						let err = await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as textWriter).WriteByte(10) : textWriter.prototype.WriteByte.call(w, 10))
						if (err != null) {
							return err
						}
					}
				}
				void (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as textWriter).indent() : textWriter.prototype.indent.call(w))
				if ($.markAsStructValue($.cloneStructValue(v)).CanAddr()) {
					// Calling v.Interface on a struct causes the reflect package to
					// copy the entire struct. This is racy with the new Marshaler
					// since we atomically update the XXX_sizecache.
					//
					// Thus, we retrieve a pointer to the struct if possible to avoid
					// a race since v.Interface on the pointer doesn't copy the struct.
					//
					// If v is not addressable, then we are not worried about a race
					// since it implies that the binary Marshaler cannot possibly be
					// mutating this value.
					v = $.assignStruct(v, $.markAsStructValue($.cloneStructValue(v)).Addr())
				}
				if ((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>($.markAsStructValue($.cloneStructValue(v)).Type()).Implements($.pointerValueOrNil(textMarshalerType)!), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
					let __goscriptTuple20: any = await $.pointerValue<Exclude<encoding.TextMarshaler, null>>($.mustTypeAssert<encoding.TextMarshaler | null>($.markAsStructValue($.cloneStructValue(v)).Interface(), "encoding.TextMarshaler")).MarshalText()
					let text: $.Slice<number> = __goscriptTuple20[0]
					let err = __goscriptTuple20[1]
					if (err != null) {
						return err
					}
					{
						let __goscriptTuple21: any = await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as textWriter).Write(text) : textWriter.prototype.Write.call(w, text))
						err = __goscriptTuple21[1]
						if (err != null) {
							return err
						}
					}
				} else {
					if ($.markAsStructValue($.cloneStructValue(v)).Kind() == 22) {
						v = $.assignStruct(v, $.markAsStructValue($.cloneStructValue(v)).Elem())
					}
					{
						let err = await (tm !== null && (tm as any).__isVarRef !== true && (tm as any).__goValue === undefined ? ((tm as any) as TextMarshaler).writeStruct(w, v) : TextMarshaler.prototype.writeStruct.call(tm, w, v))
						if (err != null) {
							return err
						}
					}
				}
				await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as textWriter).unindent() : textWriter.prototype.unindent.call(w))
				{
					let err = await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as textWriter).WriteByte(ket) : textWriter.prototype.WriteByte.call(w, ket))
					if (err != null) {
						return err
					}
				}
				break
			}
			default:
			{
				let [, err] = await fmt.Fprint($.pointerValueOrNil($.interfaceValue<io.Writer | null>(w, "*proto.textWriter", /* @__PURE__ */ $.pointerType("proto.textWriter")))!, $.markAsStructValue($.cloneStructValue(v)).Interface())
				return err
				break
			}
		}
		return null
	}

	public async writeEnum(w: textWriter | $.VarRef<textWriter> | null, v: reflect.Value, props: __goscript_properties.Properties | $.VarRef<__goscript_properties.Properties> | null): globalThis.Promise<$.GoError> {
		const tm: TextMarshaler | $.VarRef<TextMarshaler> | null = this;
		let __goscriptTuple22: any = $.mapGet<string, globalThis.Map<number, string> | null, globalThis.Map<number, string> | null>(__goscript_properties.enumStringMaps, $.pointerValue<__goscript_properties.Properties>(props).Enum, null)
		let m: globalThis.Map<number, string> | null = __goscriptTuple22[0]
		let ok = __goscriptTuple22[1]
		if (!ok) {
			{
				let err = await (tm !== null && (tm as any).__isVarRef !== true && (tm as any).__goValue === undefined ? ((tm as any) as TextMarshaler).writeAny(w, $.markAsStructValue($.cloneStructValue(v)), props) : TextMarshaler.prototype.writeAny.call(tm, w, $.markAsStructValue($.cloneStructValue(v)), props))
				if (err != null) {
					return err
				}
			}
		}
		let key = 0
		if ($.markAsStructValue($.cloneStructValue(v)).Kind() == 22) {
			key = $.int($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(v)).Elem())).Int(), 32)
		} else {
			key = $.int($.markAsStructValue($.cloneStructValue(v)).Int(), 32)
		}
		let __goscriptTuple23: any = $.mapGet<number, string, string>(m, key, "")
		let s = __goscriptTuple23[0]
		ok = __goscriptTuple23[1]
		if (!ok) {
			{
				let err = await (tm !== null && (tm as any).__isVarRef !== true && (tm as any).__goValue === undefined ? ((tm as any) as TextMarshaler).writeAny(w, $.markAsStructValue($.cloneStructValue(v)), props) : TextMarshaler.prototype.writeAny.call(tm, w, $.markAsStructValue($.cloneStructValue(v)), props))
				if (err != null) {
					return err
				}
			}
		}
		let [, err] = await fmt.Fprint($.pointerValueOrNil($.interfaceValue<io.Writer | null>(w, "*proto.textWriter", /* @__PURE__ */ $.pointerType("proto.textWriter")))!, s)
		return err
	}

	public async writeExtension(w: textWriter | $.VarRef<textWriter> | null, name: string, pb: any): globalThis.Promise<$.GoError> {
		const tm: TextMarshaler | $.VarRef<TextMarshaler> | null = this;
		{
			let [, err] = await fmt.Fprintf($.pointerValueOrNil($.interfaceValue<io.Writer | null>(w, "*proto.textWriter", /* @__PURE__ */ $.pointerType("proto.textWriter")))!, "[%s]:", name)
			if (err != null) {
				return err
			}
		}
		if (!$.pointerValue<textWriter>(w).compact) {
			{
				let err = await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as textWriter).WriteByte(32) : textWriter.prototype.WriteByte.call(w, 32))
				if (err != null) {
					return err
				}
			}
		}
		{
			let err = await (tm !== null && (tm as any).__isVarRef !== true && (tm as any).__goValue === undefined ? ((tm as any) as TextMarshaler).writeAny(w, $.markAsStructValue($.cloneStructValue(reflect.ValueOf(pb))), null) : TextMarshaler.prototype.writeAny.call(tm, w, $.markAsStructValue($.cloneStructValue(reflect.ValueOf(pb))), null))
			if (err != null) {
				return err
			}
		}
		{
			let err = await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as textWriter).WriteByte(10) : textWriter.prototype.WriteByte.call(w, 10))
			if (err != null) {
				return err
			}
		}
		return null
	}

	public async writeExtensions(w: textWriter | $.VarRef<textWriter> | null, pv: reflect.Value): globalThis.Promise<$.GoError> {
		const tm: TextMarshaler | $.VarRef<TextMarshaler> | null = this;
		let emap: globalThis.Map<number, __goscript_extensions.ExtensionDesc | $.VarRef<__goscript_extensions.ExtensionDesc> | null> | null = $.mapGet<reflect.Type | null, globalThis.Map<number, __goscript_extensions.ExtensionDesc | $.VarRef<__goscript_extensions.ExtensionDesc> | null> | null, globalThis.Map<number, __goscript_extensions.ExtensionDesc | $.VarRef<__goscript_extensions.ExtensionDesc> | null> | null>(__goscript_extensions.extensionMaps, (__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>($.markAsStructValue($.cloneStructValue(pv)).Type()).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), null)[0]
		let e = $.mustTypeAssert<__goscript_lib.Message | null>($.markAsStructValue($.cloneStructValue(pv)).Interface(), "proto.Message")

		let m: globalThis.Map<number, __goscript_extensions.Extension> | null = null! as globalThis.Map<number, __goscript_extensions.Extension> | null
		let mu: sync.Locker | null = null! as sync.Locker | null
		{
			let [em, ok] = $.typeAssertTuple<__goscript_extensions_gogo.extensionsBytes | null>(e, "proto.extensionsBytes")
			if (ok) {
				let eb = ((__goscriptAwait = (em !== null && (em as any).__isVarRef !== true && (em as any).__goValue === undefined ? (em as Exclude<__goscript_extensions_gogo.extensionsBytes, null>) : $.pointerValue<Exclude<__goscript_extensions_gogo.extensionsBytes, null>>(em)).GetExtensions(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.VarRef<$.Slice<number>> | null)
				let err: $.GoError = null! as $.GoError
				let __goscriptTuple24: any = __goscript_extensions_gogo.BytesToExtensionsMap($.pointerValue<$.Slice<number>>(eb))
				m = __goscriptTuple24[0]
				err = __goscriptTuple24[1]
				if (err != null) {
					return err
				}
				mu = $.interfaceValue<sync.Locker | null>(new __goscript_extensions.notLocker(undefined, true), "proto.notLocker", "proto.notLocker")
			} else {
				{
					let [, __goscriptShadow10] = $.typeAssertTuple<__goscript_extensions.extendableProto | null>(e, "proto.extendableProto")
					if (__goscriptShadow10) {
						let [ep, ] = __goscript_extensions.extendable((e as any))
						let __goscriptTuple25: any = await (ep !== null && (ep as any).__isVarRef !== true && (ep as any).__goValue === undefined ? (ep as Exclude<__goscript_extensions.extendableProto, null>) : $.pointerValue<Exclude<__goscript_extensions.extendableProto, null>>(ep)).extensionsRead()
						m = __goscriptTuple25[0]
						mu = __goscriptTuple25[1]
						if (m == null) {
							return null
						}
					}
				}
			}
		}

		// Order the extensions by ID.
		// This isn't strictly necessary, but it will give us
		// canonical output, which will also make testing easier.

		await (mu !== null && (mu as any).__isVarRef !== true && (mu as any).__goValue === undefined ? (mu as Exclude<sync.Locker, null>) : $.pointerValue<Exclude<sync.Locker, null>>(mu)).Lock()
		let ids: $.Slice<number> = $.makeSlice<number>(0, $.len(m), "number")
		for (const [id, __rangeValue] of m?.entries() ?? []) {
			ids = $.appendOne(ids, $.int(id, 32))
		}
		await sort.Sort($.pointerValueOrNil($.namedValueInterfaceValue<sort.Interface | null>((ids as int32Slice), "proto.int32Slice", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()))!)
		void (__goscriptAwait = (mu !== null && (mu as any).__isVarRef !== true && (mu as any).__goValue === undefined ? (mu as Exclude<sync.Locker, null>) : $.pointerValue<Exclude<sync.Locker, null>>(mu)).Unlock(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)

		for (let __goscriptRangeTarget2 = ids, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow2.length; __rangeIndex++) {
			let extNum = $.int((__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + __rangeIndex] as number), 32)
			let ext = ($.mapGet<number, __goscript_extensions.Extension, __goscript_extensions.Extension>(m, extNum, new __goscript_extensions.Extension(undefined, true))[0]).clone()
			let desc: __goscript_extensions.ExtensionDesc | $.VarRef<__goscript_extensions.ExtensionDesc> | null = null! as __goscript_extensions.ExtensionDesc | $.VarRef<__goscript_extensions.ExtensionDesc> | null
			if (emap != null) {
				desc = $.mapGet<number, __goscript_extensions.ExtensionDesc | $.VarRef<__goscript_extensions.ExtensionDesc> | null, __goscript_extensions.ExtensionDesc | $.VarRef<__goscript_extensions.ExtensionDesc> | null>(emap, extNum, null)[0]
			}
			if (desc == null) {
				// Unknown extension.
				{
					let err = await writeUnknownStruct(w, ext.enc)
					if (err != null) {
						return err
					}
				}
				continue
			}

			let [pb, err] = await __goscript_extensions.GetExtension(e, desc)
			if (err != null) {
				return fmt.Errorf("failed getting extension: %v", (err as any))
			}

			// Repeated extensions will appear as a slice.
			if (!await (desc !== null && (desc as any).__isVarRef !== true && (desc as any).__goValue === undefined ? ((desc as any) as __goscript_extensions.ExtensionDesc).repeated() : __goscript_extensions.ExtensionDesc.prototype.repeated.call(desc))) {
				{
					let __goscriptShadow11 = await (tm !== null && (tm as any).__isVarRef !== true && (tm as any).__goValue === undefined ? ((tm as any) as TextMarshaler).writeExtension(w, $.pointerValue<__goscript_extensions.ExtensionDesc>(desc).Name, pb) : TextMarshaler.prototype.writeExtension.call(tm, w, $.pointerValue<__goscript_extensions.ExtensionDesc>(desc).Name, pb))
					if (__goscriptShadow11 != null) {
						return __goscriptShadow11
					}
				}
			} else {
				let v = $.markAsStructValue($.cloneStructValue(reflect.ValueOf(pb)))
				for (let i = 0; i < $.markAsStructValue($.cloneStructValue(v)).Len(); i++) {
					{
						let __goscriptShadow12 = await TextMarshaler.prototype.writeExtension.call(tm, w, $.pointerValue<__goscript_extensions.ExtensionDesc>(desc).Name, $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(v)).Index(i))).Interface())
						if (__goscriptShadow12 != null) {
							return __goscriptShadow12
						}
					}
				}
			}
		}
		return null
	}

	public async writeProto3Any(w: textWriter | $.VarRef<textWriter> | null, sv: reflect.Value): globalThis.Promise<[boolean, $.GoError]> {
		const tm: TextMarshaler | $.VarRef<TextMarshaler> | null = this;
		const w$: textWriter = w == null ? $.pointerTarget<textWriter>(w) : (w as any).__isVarRef === true ? (w as any).value : (w as any).__goValue === undefined ? (w as any) : $.pointerTarget<textWriter>(w)
		let turl = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(sv)).FieldByName("TypeUrl")))
		let val = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(sv)).FieldByName("Value")))
		if (!$.markAsStructValue($.cloneStructValue(turl)).IsValid() || !$.markAsStructValue($.cloneStructValue(val)).IsValid()) {
			return [true, errors.New("proto: invalid google.protobuf.Any message")]
		}

		let __goscriptTuple26: any = $.typeAssertTuple<$.Slice<number>>($.markAsStructValue($.cloneStructValue(val)).Interface(), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))
		let b: $.Slice<number> = __goscriptTuple26[0]
		let ok = __goscriptTuple26[1]
		if (!ok) {
			return [true, errors.New("proto: invalid google.protobuf.Any message")]
		}

		let parts: $.Slice<string> = strings.Split($.markAsStructValue($.cloneStructValue(turl)).String(), "/")
		let mt = __goscript_properties.MessageType($.arrayIndex(parts!, $.sliceLen(parts) - 1))
		if (mt == null) {
			return [false, null]
		}
		let m = $.markAsStructValue($.cloneStructValue(reflect.New($.pointerValueOrNil((__goscriptAwait = (mt !== null && (mt as any).__isVarRef !== true && (mt as any).__goValue === undefined ? (mt as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(mt)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))!)))
		{
			let err = await __goscript_decode.Unmarshal(b, $.mustTypeAssert<__goscript_lib.Message | null>($.markAsStructValue($.cloneStructValue(m)).Interface(), "proto.Message"))
			if (err != null) {
				return [false, null]
			}
		}
		await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as textWriter).Write(new Uint8Array([91])) : textWriter.prototype.Write.call(w, new Uint8Array([91])))
		let u = $.markAsStructValue($.cloneStructValue(turl)).String()
		if (requiresQuotes(u)) {
			await writeString(w, u)
		} else {
			await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as textWriter).Write($.stringToBytes(u)) : textWriter.prototype.Write.call(w, $.stringToBytes(u)))
		}
		if ((w$ as textWriter).compact) {
			await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as textWriter).Write(new Uint8Array([93, 58, 60])) : textWriter.prototype.Write.call(w, new Uint8Array([93, 58, 60])))
		} else {
			await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as textWriter).Write(new Uint8Array([93, 58, 32, 60, 10])) : textWriter.prototype.Write.call(w, new Uint8Array([93, 58, 32, 60, 10])));
			;(w$ as textWriter).ind++
		}
		{
			let err = await (tm !== null && (tm as any).__isVarRef !== true && (tm as any).__goValue === undefined ? ((tm as any) as TextMarshaler).writeStruct(w, $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(m)).Elem()))) : TextMarshaler.prototype.writeStruct.call(tm, w, $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(m)).Elem()))))
			if (err != null) {
				return [true, err]
			}
		}
		if ((w$ as textWriter).compact) {
			await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as textWriter).Write(new Uint8Array([62, 32])) : textWriter.prototype.Write.call(w, new Uint8Array([62, 32])))
		} else {
			;(w$ as textWriter).ind--
			await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as textWriter).Write(new Uint8Array([62, 10])) : textWriter.prototype.Write.call(w, new Uint8Array([62, 10])))
		}
		return [true, null]
	}

	public async writeStruct(w: textWriter | $.VarRef<textWriter> | null, sv: reflect.Value): globalThis.Promise<$.GoError> {
		const tm: TextMarshaler | $.VarRef<TextMarshaler> | null = this;
		const w$: textWriter = w == null ? $.pointerTarget<textWriter>(w) : (w as any).__isVarRef === true ? (w as any).value : (w as any).__goValue === undefined ? (w as any) : $.pointerTarget<textWriter>(w)
		if ($.pointerValue<TextMarshaler>(tm).ExpandAny && await isAny(sv)) {
			{
				let [canExpand, err] = await (tm !== null && (tm as any).__isVarRef !== true && (tm as any).__goValue === undefined ? ((tm as any) as TextMarshaler).writeProto3Any(w, sv) : TextMarshaler.prototype.writeProto3Any.call(tm, w, sv))
				if (canExpand) {
					return err
				}
			}
		}
		let st = $.markAsStructValue($.cloneStructValue(sv)).Type()
		let sprops: __goscript_properties.StructProperties | $.VarRef<__goscript_properties.StructProperties> | null = await __goscript_properties.GetProperties(st)
		for (let i = 0; i < $.markAsStructValue($.cloneStructValue(sv)).NumField(); i++) {
			let fv = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(sv)).Field(i)))
			let props: __goscript_properties.Properties | $.VarRef<__goscript_properties.Properties> | null = $.arrayIndex($.pointerValue<__goscript_properties.StructProperties>(sprops).Prop!, i)
			let name = ((__goscriptAwait = (st !== null && (st as any).__isVarRef !== true && (st as any).__goValue === undefined ? (st as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(st)).Field(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as reflect.StructField).Name

			if ($.stringEqual(name, "XXX_NoUnkeyedLiteral")) {
				continue
			}

			if (strings.HasPrefix(name, "XXX_")) {
				// There are two XXX_ fields:
				//   XXX_unrecognized []byte
				//   XXX_extensions   map[int32]proto.Extension
				// The first is handled here;
				// the second is handled at the bottom of this function.
				if (($.stringEqual(name, "XXX_unrecognized")) && !$.markAsStructValue($.cloneStructValue(fv)).IsNil()) {
					{
						let err = await writeUnknownStruct(w, $.mustTypeAssert<$.Slice<number>>($.markAsStructValue($.cloneStructValue(fv)).Interface(), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))))
						if (err != null) {
							return err
						}
					}
				}
				continue
			}
			if (($.markAsStructValue($.cloneStructValue(fv)).Kind() == 22) && $.markAsStructValue($.cloneStructValue(fv)).IsNil()) {
				// Field not filled in. This could be an optional field or
				// a required field that wasn't filled in. Either way, there
				// isn't anything we can show for it.
				continue
			}
			if (($.markAsStructValue($.cloneStructValue(fv)).Kind() == 23) && $.markAsStructValue($.cloneStructValue(fv)).IsNil()) {
				// Repeated field that is empty, or a bytes field that is unused.
				continue
			}

			if ($.pointerValue<__goscript_properties.Properties>(props).Repeated && ($.markAsStructValue($.cloneStructValue(fv)).Kind() == 23)) {
				// Repeated field.
				for (let j = 0; j < $.markAsStructValue($.cloneStructValue(fv)).Len(); j++) {
					{
						let err = await writeName(w, props)
						if (err != null) {
							return err
						}
					}
					if (!(w$ as textWriter).compact) {
						{
							let err = await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as textWriter).WriteByte(32) : textWriter.prototype.WriteByte.call(w, 32))
							if (err != null) {
								return err
							}
						}
					}
					let v = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(fv)).Index(j)))
					if (($.markAsStructValue($.cloneStructValue(v)).Kind() == 22) && $.markAsStructValue($.cloneStructValue(v)).IsNil()) {
						// A nil message in a repeated field is not valid,
						// but we can handle that more gracefully than panicking.
						{
							let [, err] = await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as textWriter).Write(new Uint8Array([60, 110, 105, 108, 62, 10])) : textWriter.prototype.Write.call(w, new Uint8Array([60, 110, 105, 108, 62, 10])))
							if (err != null) {
								return err
							}
						}
						continue
					}
					if ($.stringLen($.pointerValue<__goscript_properties.Properties>(props).Enum) > 0) {
						{
							let err = await (tm !== null && (tm as any).__isVarRef !== true && (tm as any).__goValue === undefined ? ((tm as any) as TextMarshaler).writeEnum(w, v, props) : TextMarshaler.prototype.writeEnum.call(tm, w, v, props))
							if (err != null) {
								return err
							}
						}
					} else {
						{
							let err = await (tm !== null && (tm as any).__isVarRef !== true && (tm as any).__goValue === undefined ? ((tm as any) as TextMarshaler).writeAny(w, $.markAsStructValue($.cloneStructValue(v)), props) : TextMarshaler.prototype.writeAny.call(tm, w, $.markAsStructValue($.cloneStructValue(v)), props))
							if (err != null) {
								return err
							}
						}
					}
					{
						let err = await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as textWriter).WriteByte(10) : textWriter.prototype.WriteByte.call(w, 10))
						if (err != null) {
							return err
						}
					}
				}
				continue
			}
			if ($.markAsStructValue($.cloneStructValue(fv)).Kind() == 21) {
				// Map fields are rendered as a repeated struct with key/value fields.
				let keys: $.Slice<reflect.Value> = $.markAsStructValue($.cloneStructValue(fv)).MapKeys()
				await sort.Sort($.pointerValueOrNil(await __goscript_lib.mapKeys(keys))!)
				for (let __goscriptRangeTarget3 = keys, __goscriptRangeWindow3 = $.sliceRange(__goscriptRangeTarget3), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow3.length; __rangeIndex++) {
					let key = $.markAsStructValue($.cloneStructValue((__goscriptRangeWindow3.backing[__goscriptRangeWindow3.offset + __rangeIndex] as reflect.Value)))
					let val = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(fv)).MapIndex($.markAsStructValue($.cloneStructValue(key)))))
					{
						let err = await writeName(w, props)
						if (err != null) {
							return err
						}
					}
					if (!(w$ as textWriter).compact) {
						{
							let err = await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as textWriter).WriteByte(32) : textWriter.prototype.WriteByte.call(w, 32))
							if (err != null) {
								return err
							}
						}
					}
					// open struct
					{
						let err = await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as textWriter).WriteByte(60) : textWriter.prototype.WriteByte.call(w, 60))
						if (err != null) {
							return err
						}
					}
					if (!(w$ as textWriter).compact) {
						{
							let err = await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as textWriter).WriteByte(10) : textWriter.prototype.WriteByte.call(w, 10))
							if (err != null) {
								return err
							}
						}
					}
					void (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as textWriter).indent() : textWriter.prototype.indent.call(w))
					// key
					{
						let [, err] = await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as textWriter).WriteString("key:") : textWriter.prototype.WriteString.call(w, "key:"))
						if (err != null) {
							return err
						}
					}
					if (!(w$ as textWriter).compact) {
						{
							let err = await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as textWriter).WriteByte(32) : textWriter.prototype.WriteByte.call(w, 32))
							if (err != null) {
								return err
							}
						}
					}
					{
						let err = await (tm !== null && (tm as any).__isVarRef !== true && (tm as any).__goValue === undefined ? ((tm as any) as TextMarshaler).writeAny(w, $.markAsStructValue($.cloneStructValue(key)), $.pointerValue<__goscript_properties.Properties>(props).MapKeyProp) : TextMarshaler.prototype.writeAny.call(tm, w, $.markAsStructValue($.cloneStructValue(key)), $.pointerValue<__goscript_properties.Properties>(props).MapKeyProp))
						if (err != null) {
							return err
						}
					}
					{
						let err = await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as textWriter).WriteByte(10) : textWriter.prototype.WriteByte.call(w, 10))
						if (err != null) {
							return err
						}
					}
					// nil values aren't legal, but we can avoid panicking because of them.
					if (($.markAsStructValue($.cloneStructValue(val)).Kind() != 22) || !$.markAsStructValue($.cloneStructValue(val)).IsNil()) {
						// value
						{
							let [, err] = await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as textWriter).WriteString("value:") : textWriter.prototype.WriteString.call(w, "value:"))
							if (err != null) {
								return err
							}
						}
						if (!(w$ as textWriter).compact) {
							{
								let err = await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as textWriter).WriteByte(32) : textWriter.prototype.WriteByte.call(w, 32))
								if (err != null) {
									return err
								}
							}
						}
						{
							let err = await (tm !== null && (tm as any).__isVarRef !== true && (tm as any).__goValue === undefined ? ((tm as any) as TextMarshaler).writeAny(w, $.markAsStructValue($.cloneStructValue(val)), $.pointerValue<__goscript_properties.Properties>(props).MapValProp) : TextMarshaler.prototype.writeAny.call(tm, w, $.markAsStructValue($.cloneStructValue(val)), $.pointerValue<__goscript_properties.Properties>(props).MapValProp))
							if (err != null) {
								return err
							}
						}
						{
							let err = await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as textWriter).WriteByte(10) : textWriter.prototype.WriteByte.call(w, 10))
							if (err != null) {
								return err
							}
						}
					}
					// close struct
					await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as textWriter).unindent() : textWriter.prototype.unindent.call(w))
					{
						let err = await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as textWriter).WriteByte(62) : textWriter.prototype.WriteByte.call(w, 62))
						if (err != null) {
							return err
						}
					}
					{
						let err = await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as textWriter).WriteByte(10) : textWriter.prototype.WriteByte.call(w, 10))
						if (err != null) {
							return err
						}
					}
				}
				continue
			}
			if (($.pointerValue<__goscript_properties.Properties>(props).proto3 && ($.markAsStructValue($.cloneStructValue(fv)).Kind() == 23)) && ($.markAsStructValue($.cloneStructValue(fv)).Len() == 0)) {
				// empty bytes field
				continue
			}
			if (($.pointerValue<__goscript_properties.Properties>(props).proto3 && ($.markAsStructValue($.cloneStructValue(fv)).Kind() != 22)) && ($.markAsStructValue($.cloneStructValue(fv)).Kind() != 23)) {
				// proto3 non-repeated scalar field; skip if zero value
				if (__goscript_lib.isProto3Zero(fv)) {
					continue
				}
			}

			if ($.markAsStructValue($.cloneStructValue(fv)).Kind() == 20) {
				// Check if it is a oneof.
				if (!$.stringEqual(reflect.StructTag_Get(((__goscriptAwait = (st !== null && (st as any).__isVarRef !== true && (st as any).__goValue === undefined ? (st as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(st)).Field(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as reflect.StructField).Tag, "protobuf_oneof"), "")) {
					// fv is nil, or holds a pointer to generated struct.
					// That generated struct has exactly one field,
					// which has a protobuf struct tag.
					if ($.markAsStructValue($.cloneStructValue(fv)).IsNil()) {
						continue
					}
					let inner: reflect.Value = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(fv)).Elem())).Elem()))
					let tag = reflect.StructTag_Get(((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>($.markAsStructValue($.cloneStructValue(inner)).Type()).Field(0), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as reflect.StructField).Tag, "protobuf")
					props = new __goscript_properties.Properties()
					await (props !== null && (props as any).__isVarRef !== true && (props as any).__goValue === undefined ? ((props as any) as __goscript_properties.Properties).Parse(tag) : __goscript_properties.Properties.prototype.Parse.call(props, tag))
					// Write the value in the oneof, not the oneof itself.
					fv = $.assignStruct(fv, $.markAsStructValue($.cloneStructValue(inner)).Field(0))

					// Special case to cope with malformed messages gracefully:
					// If the value in the oneof is a nil pointer, don't panic
					// in writeAny.
					if (($.markAsStructValue($.cloneStructValue(fv)).Kind() == 22) && $.markAsStructValue($.cloneStructValue(fv)).IsNil()) {
						// Use errors.New so writeAny won't render quotes.
						let msg = $.varRef(errors.New("/* nil */"))
						fv = $.assignStruct(fv, $.markAsStructValue($.cloneStructValue(reflect.ValueOf($.interfaceValue(msg, "*error", /* @__PURE__ */ $.pointerType("error"))))).Elem())
					}
				}
			}

			{
				let err = await writeName(w, props)
				if (err != null) {
					return err
				}
			}
			if (!(w$ as textWriter).compact) {
				{
					let err = await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as textWriter).WriteByte(32) : textWriter.prototype.WriteByte.call(w, 32))
					if (err != null) {
						return err
					}
				}
			}

			if ($.stringLen($.pointerValue<__goscript_properties.Properties>(props).Enum) > 0) {
				{
					let err = await (tm !== null && (tm as any).__isVarRef !== true && (tm as any).__goValue === undefined ? ((tm as any) as TextMarshaler).writeEnum(w, fv, props) : TextMarshaler.prototype.writeEnum.call(tm, w, fv, props))
					if (err != null) {
						return err
					}
				}
			} else {
				{
					let err = await (tm !== null && (tm as any).__isVarRef !== true && (tm as any).__goValue === undefined ? ((tm as any) as TextMarshaler).writeAny(w, $.markAsStructValue($.cloneStructValue(fv)), props) : TextMarshaler.prototype.writeAny.call(tm, w, $.markAsStructValue($.cloneStructValue(fv)), props))
					if (err != null) {
						return err
					}
				}
			}

			{
				let err = await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as textWriter).WriteByte(10) : textWriter.prototype.WriteByte.call(w, 10))
				if (err != null) {
					return err
				}
			}
		}

		// Extensions (the XXX_extensions field).
		let pv = $.markAsStructValue($.cloneStructValue(sv))
		if ($.markAsStructValue($.cloneStructValue(pv)).CanAddr()) {
			pv = $.assignStruct(pv, $.markAsStructValue($.cloneStructValue(sv)).Addr())
		} else {
			pv = $.assignStruct(pv, reflect.New($.pointerValueOrNil($.markAsStructValue($.cloneStructValue(sv)).Type())!))
			$.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(pv)).Elem())).Set($.markAsStructValue($.cloneStructValue(sv)))
		}
		{
			let [, err] = __goscript_extensions.extendable($.markAsStructValue($.cloneStructValue(pv)).Interface())
			if (err == null) {
				{
					let __goscriptShadow13 = await (tm !== null && (tm as any).__isVarRef !== true && (tm as any).__goValue === undefined ? ((tm as any) as TextMarshaler).writeExtensions(w, pv) : TextMarshaler.prototype.writeExtensions.call(tm, w, pv))
					if (__goscriptShadow13 != null) {
						return __goscriptShadow13
					}
				}
			}
		}

		return null
	}

	static __typeInfo = $.registerStructType(
		"proto.TextMarshaler",
		() => new TextMarshaler(),
		() => [$.methodSignature("Marshal", [["w", "io.Writer"], ["pb", "proto.Message"]], ["error"], true), $.methodSignature("Text", [["pb", "proto.Message"]], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("writeAny", [["w", /* @__PURE__ */ $.pointerType("proto.textWriter")], ["v", "reflect.Value"], ["props", /* @__PURE__ */ $.pointerType("proto.Properties")]], ["error"], true), $.methodSignature("writeEnum", [["w", /* @__PURE__ */ $.pointerType("proto.textWriter")], ["v", "reflect.Value"], ["props", /* @__PURE__ */ $.pointerType("proto.Properties")]], ["error"], true), $.methodSignature("writeExtension", [["w", /* @__PURE__ */ $.pointerType("proto.textWriter")], ["name", /* @__PURE__ */ $.basicType("string")], ["pb", { kind: $.TypeKind.Interface, methods: [] }]], ["error"], true), $.methodSignature("writeExtensions", [["w", /* @__PURE__ */ $.pointerType("proto.textWriter")], ["pv", "reflect.Value"]], ["error"], true), $.methodSignature("writeProto3Any", [["w", /* @__PURE__ */ $.pointerType("proto.textWriter")], ["sv", "reflect.Value"]], [/* @__PURE__ */ $.basicType("bool"), "error"], true), $.methodSignature("writeStruct", [["w", /* @__PURE__ */ $.pointerType("proto.textWriter")], ["sv", "reflect.Value"]], ["error"], true)],
		TextMarshaler,
		() => [/* @__PURE__ */ $.structField("Compact", /* @__PURE__ */ $.basicType("bool"), [0], 0, true), /* @__PURE__ */ $.structField("ExpandAny", /* @__PURE__ */ $.basicType("bool"), [1], 1, true)]
	)
}

export let newline: $.Slice<number> = new Uint8Array([10])

export function __goscript_set_newline(__goscriptValue: $.Slice<number>): void {
	newline = __goscriptValue
}

export let spaces: $.Slice<number> = new Uint8Array([32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32])

export function __goscript_set_spaces(__goscriptValue: $.Slice<number>): void {
	spaces = __goscriptValue
}

export let endBraceNewline: $.Slice<number> = new Uint8Array([125, 10])

export function __goscript_set_endBraceNewline(__goscriptValue: $.Slice<number>): void {
	endBraceNewline = __goscriptValue
}

export let backslashN: $.Slice<number> = new Uint8Array([92, 110]) as $.Slice<number>

export function __goscript_set_backslashN(__goscriptValue: $.Slice<number>): void {
	backslashN = __goscriptValue
}

export let backslashR: $.Slice<number> = new Uint8Array([92, 114]) as $.Slice<number>

export function __goscript_set_backslashR(__goscriptValue: $.Slice<number>): void {
	backslashR = __goscriptValue
}

export let backslashT: $.Slice<number> = new Uint8Array([92, 116]) as $.Slice<number>

export function __goscript_set_backslashT(__goscriptValue: $.Slice<number>): void {
	backslashT = __goscriptValue
}

export let backslashDQ: $.Slice<number> = new Uint8Array([92, 34]) as $.Slice<number>

export function __goscript_set_backslashDQ(__goscriptValue: $.Slice<number>): void {
	backslashDQ = __goscriptValue
}

export let backslashBS: $.Slice<number> = new Uint8Array([92, 92]) as $.Slice<number>

export function __goscript_set_backslashBS(__goscriptValue: $.Slice<number>): void {
	backslashBS = __goscriptValue
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

export async function writeName(w: textWriter | $.VarRef<textWriter> | null, props: __goscript_properties.Properties | $.VarRef<__goscript_properties.Properties> | null): globalThis.Promise<$.GoError> {
	const props$: __goscript_properties.Properties = props == null ? $.pointerTarget<__goscript_properties.Properties>(props) : (props as any).__isVarRef === true ? (props as any).value : (props as any).__goValue === undefined ? (props as any) : $.pointerTarget<__goscript_properties.Properties>(props)
	{
		let [, err] = await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as textWriter).WriteString((props$ as __goscript_properties.Properties).OrigName) : textWriter.prototype.WriteString.call(w, (props$ as __goscript_properties.Properties).OrigName))
		if (err != null) {
			return err
		}
	}
	if (!$.stringEqual((props$ as __goscript_properties.Properties).Wire, "group")) {
		return (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as textWriter).WriteByte(58) : textWriter.prototype.WriteByte.call(w, 58))
	}
	return null
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

export async function isAny(sv: reflect.Value): globalThis.Promise<boolean> {
	type wkt = {
		XXX_WellKnownType(): string
	}

	$.registerInterfaceType(
		"proto.wkt",
		null,
		[$.methodSignature("XXX_WellKnownType", [], [/* @__PURE__ */ $.basicType("string")])]
	);
	let [t, ok] = $.typeAssertTuple<wkt | null>($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(sv)).Addr())).Interface(), "proto.wkt")
	return ok && ($.stringEqual((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<wkt, null>) : $.pointerValue<Exclude<wkt, null>>(t)).XXX_WellKnownType(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), "Any"))
}

export let textMarshalerType: reflect.Type | null = $.pointerValue<Exclude<reflect.Type, null>>(reflect.TypeOf($.interfaceValue(null, "*encoding.TextMarshaler", /* @__PURE__ */ $.pointerType("encoding.TextMarshaler")))).Elem()

export function __goscript_set_textMarshalerType(__goscriptValue: reflect.Type | null): void {
	textMarshalerType = __goscriptValue
}

export function isprint(c: number): boolean {
	return (c >= 0x20) && (c < 0x7f)
}

export async function writeString(w: textWriter | $.VarRef<textWriter> | null, s: string): globalThis.Promise<$.GoError> {
	const w$: textWriter = w == null ? $.pointerTarget<textWriter>(w) : (w as any).__isVarRef === true ? (w as any).value : (w as any).__goValue === undefined ? (w as any) : $.pointerTarget<textWriter>(w)
	// use WriteByte here to get any needed indent
	{
		let err = await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as textWriter).WriteByte(34) : textWriter.prototype.WriteByte.call(w, 34))
		if (err != null) {
			return err
		}
	}
	// Loop over the bytes, not the runes.
	for (let i = 0; i < $.stringLen(s); i++) {
		let err: $.GoError = null! as $.GoError
		// Divergence from C++: we don't escape apostrophes.
		// There's no need to escape them, and the C++ parser
		// copes with a naked apostrophe.
		{
			let c = $.indexString(s, i)
			switch (c) {
				case 10:
				{
					let __goscriptTuple1: any = await $.pointerValue<Exclude<writer, null>>((w$ as textWriter).w).Write(backslashN)
					err = __goscriptTuple1[1]
					break
				}
				case 13:
				{
					let __goscriptTuple2: any = await $.pointerValue<Exclude<writer, null>>((w$ as textWriter).w).Write(backslashR)
					err = __goscriptTuple2[1]
					break
				}
				case 9:
				{
					let __goscriptTuple3: any = await $.pointerValue<Exclude<writer, null>>((w$ as textWriter).w).Write(backslashT)
					err = __goscriptTuple3[1]
					break
				}
				case 34:
				{
					let __goscriptTuple4: any = await $.pointerValue<Exclude<writer, null>>((w$ as textWriter).w).Write(backslashDQ)
					err = __goscriptTuple4[1]
					break
				}
				case 92:
				{
					let __goscriptTuple5: any = await $.pointerValue<Exclude<writer, null>>((w$ as textWriter).w).Write(backslashBS)
					err = __goscriptTuple5[1]
					break
				}
				default:
				{
					if (isprint(c)) {
						err = (__goscriptAwait = $.pointerValue<Exclude<writer, null>>((w$ as textWriter).w).WriteByte(c), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					} else {
						let __goscriptTuple6: any = await fmt.Fprintf($.pointerValueOrNil(((w$ as textWriter).w as io.Writer | null))!, "\\%03o", $.basicInterfaceValue(c, "byte", "uint8"))
						err = __goscriptTuple6[1]
					}
					break
				}
			}
		}
		if (err != null) {
			return err
		}
	}
	return (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as textWriter).WriteByte(34) : textWriter.prototype.WriteByte.call(w, 34))
}

export async function writeUnknownStruct(w: textWriter | $.VarRef<textWriter> | null, data: $.Slice<number>): globalThis.Promise<$.GoError> {
	let err: $.GoError = null! as $.GoError
	const w$: textWriter = w == null ? $.pointerTarget<textWriter>(w) : (w as any).__isVarRef === true ? (w as any).value : (w as any).__goValue === undefined ? (w as any) : $.pointerTarget<textWriter>(w)
	if (!(w$ as textWriter).compact) {
		{
			let [, __goscriptShadow4] = await fmt.Fprintf($.pointerValueOrNil($.interfaceValue<io.Writer | null>(w, "*proto.textWriter", /* @__PURE__ */ $.pointerType("proto.textWriter")))!, "/* %d unknown bytes */\n", $.basicInterfaceValue($.sliceLen(data), "int"))
			if (__goscriptShadow4 != null) {
				return __goscriptShadow4
			}
		}
	}
	let b: __goscript_lib.Buffer | $.VarRef<__goscript_lib.Buffer> | null = __goscript_lib.NewBuffer(data)
	let b$: __goscript_lib.Buffer = b == null ? $.pointerTarget<__goscript_lib.Buffer>(b) : (b as any).__isVarRef === true ? (b as any).value : (b as any).__goValue === undefined ? (b as any) : $.pointerTarget<__goscript_lib.Buffer>(b)
	while ((b$ as __goscript_lib.Buffer).index < $.sliceLen((b$ as __goscript_lib.Buffer).buf)) {
		let [x, __goscriptShadow5] = (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as __goscript_lib.Buffer).DecodeVarint() : __goscript_lib.Buffer.prototype.DecodeVarint.call(b))
		if (__goscriptShadow5 != null) {
			let [, ferr] = await fmt.Fprintf($.pointerValueOrNil($.interfaceValue<io.Writer | null>(w, "*proto.textWriter", /* @__PURE__ */ $.pointerType("proto.textWriter")))!, "/* %v */\n", (__goscriptShadow5 as any))
			return ferr
		}
		let wire = $.uint64And(x, 7n)
		let tag = $.uint64Shr(x, 3n)
		if (wire == 4n) {
			await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as textWriter).unindent() : textWriter.prototype.unindent.call(w))
			{
				let [, werr] = await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as textWriter).Write(endBraceNewline) : textWriter.prototype.Write.call(w, endBraceNewline))
				if (werr != null) {
					return werr
				}
			}
			continue
		}
		{
			let [, ferr] = await fmt.Fprint($.pointerValueOrNil($.interfaceValue<io.Writer | null>(w, "*proto.textWriter", /* @__PURE__ */ $.pointerType("proto.textWriter")))!, $.basicInterfaceValue(tag, "uint64"))
			if (ferr != null) {
				return ferr
			}
		}
		if (wire != 3n) {
			{
				__goscriptShadow5 = await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as textWriter).WriteByte(58) : textWriter.prototype.WriteByte.call(w, 58))
				if (__goscriptShadow5 != null) {
					return __goscriptShadow5
				}
			}
		}
		if (!(w$ as textWriter).compact || (wire == 3n)) {
			{
				__goscriptShadow5 = await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as textWriter).WriteByte(32) : textWriter.prototype.WriteByte.call(w, 32))
				if (__goscriptShadow5 != null) {
					return __goscriptShadow5
				}
			}
		}
		switch (wire) {
			case 2n:
			{
				let __goscriptTuple7: any = (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as __goscript_lib.Buffer).DecodeRawBytes(false) : __goscript_lib.Buffer.prototype.DecodeRawBytes.call(b, false))
				let buf: $.Slice<number> = __goscriptTuple7[0]
				let e = __goscriptTuple7[1]
				if (e == null) {
					let __goscriptTuple8: any = await fmt.Fprintf($.pointerValueOrNil($.interfaceValue<io.Writer | null>(w, "*proto.textWriter", /* @__PURE__ */ $.pointerType("proto.textWriter")))!, "%q", $.interfaceValue(buf, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))))
					__goscriptShadow5 = __goscriptTuple8[1]
				} else {
					let __goscriptTuple9: any = await fmt.Fprintf($.pointerValueOrNil($.interfaceValue<io.Writer | null>(w, "*proto.textWriter", /* @__PURE__ */ $.pointerType("proto.textWriter")))!, "/* %v */", (e as any))
					__goscriptShadow5 = __goscriptTuple9[1]
				}
				break
			}
			case 5n:
			{
				let __goscriptTuple10: any = (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as __goscript_lib.Buffer).DecodeFixed32() : __goscript_lib.Buffer.prototype.DecodeFixed32.call(b))
				x = __goscriptTuple10[0]
				__goscriptShadow5 = __goscriptTuple10[1]
				__goscriptShadow5 = await writeUnknownInt(w, x, __goscriptShadow5)
				break
			}
			case 1n:
			{
				let __goscriptTuple11: any = (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as __goscript_lib.Buffer).DecodeFixed64() : __goscript_lib.Buffer.prototype.DecodeFixed64.call(b))
				x = __goscriptTuple11[0]
				__goscriptShadow5 = __goscriptTuple11[1]
				__goscriptShadow5 = await writeUnknownInt(w, x, __goscriptShadow5)
				break
			}
			case 3n:
			{
				__goscriptShadow5 = await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as textWriter).WriteByte(123) : textWriter.prototype.WriteByte.call(w, 123))
				void (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as textWriter).indent() : textWriter.prototype.indent.call(w))
				break
			}
			case 0n:
			{
				let __goscriptTuple12: any = (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as __goscript_lib.Buffer).DecodeVarint() : __goscript_lib.Buffer.prototype.DecodeVarint.call(b))
				x = __goscriptTuple12[0]
				__goscriptShadow5 = __goscriptTuple12[1]
				__goscriptShadow5 = await writeUnknownInt(w, x, __goscriptShadow5)
				break
			}
			default:
			{
				let __goscriptTuple13: any = await fmt.Fprintf($.pointerValueOrNil($.interfaceValue<io.Writer | null>(w, "*proto.textWriter", /* @__PURE__ */ $.pointerType("proto.textWriter")))!, "/* unknown wire type %d */", $.basicInterfaceValue(wire, "uint64"))
				__goscriptShadow5 = __goscriptTuple13[1]
				break
			}
		}
		if (__goscriptShadow5 != null) {
			return __goscriptShadow5
		}
		{
			let __goscriptShadow6 = await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as textWriter).WriteByte(10) : textWriter.prototype.WriteByte.call(w, 10))
			if (__goscriptShadow6 != null) {
				return __goscriptShadow6
			}
		}
	}
	return null
}

export async function writeUnknownInt(w: textWriter | $.VarRef<textWriter> | null, x: bigint, err: $.GoError): globalThis.Promise<$.GoError> {
	if (err == null) {
		let __goscriptTuple14: any = await fmt.Fprint($.pointerValueOrNil($.interfaceValue<io.Writer | null>(w, "*proto.textWriter", /* @__PURE__ */ $.pointerType("proto.textWriter")))!, $.basicInterfaceValue(x, "uint64"))
		err = __goscriptTuple14[1]
	} else {
		let __goscriptTuple15: any = await fmt.Fprintf($.pointerValueOrNil($.interfaceValue<io.Writer | null>(w, "*proto.textWriter", /* @__PURE__ */ $.pointerType("proto.textWriter")))!, "/* %v */", (err as any))
		err = __goscriptTuple15[1]
	}
	return err
}

export function int32Slice_Len(s: int32Slice): number {
	return $.sliceLen((s as int32Slice))
}

export function int32Slice_Less(s: int32Slice, i: number, j: number): boolean {
	return $.arrayIndex(s!, i) < $.arrayIndex(s!, j)
}

export function int32Slice_Swap(s: int32Slice, i: number, j: number): void {
	let __goscriptAssign0_0: number = $.arrayIndex(s!, j)
	let __goscriptAssign0_1: number = $.arrayIndex(s!, i)
	$.sliceElems(s!)[$.sliceSlot(s!, i)] = __goscriptAssign0_0
	$.sliceElems(s!)[$.sliceSlot(s!, j)] = __goscriptAssign0_1
}

export let defaultTextMarshaler: $.VarRef<TextMarshaler> = $.varRef(new TextMarshaler(undefined, true))

export function __goscript_set_defaultTextMarshaler(__goscriptValue: TextMarshaler): void {
	$.assignStruct(defaultTextMarshaler.value, __goscriptValue)
}

export let compactTextMarshaler: $.VarRef<TextMarshaler> = $.varRef(new TextMarshaler({Compact: true}, true))

export function __goscript_set_compactTextMarshaler(__goscriptValue: TextMarshaler): void {
	$.assignStruct(compactTextMarshaler.value, __goscriptValue)
}

export async function MarshalText(w: io.Writer | null, pb: __goscript_lib.Message | null): globalThis.Promise<$.GoError> {
	return defaultTextMarshaler.value.Marshal(w, pb)
}

export async function MarshalTextString(pb: __goscript_lib.Message | null): globalThis.Promise<string> {
	return defaultTextMarshaler.value.Text(pb)
}

export async function CompactText(w: io.Writer | null, pb: __goscript_lib.Message | null): globalThis.Promise<$.GoError> {
	return compactTextMarshaler.value.Marshal(w, pb)
}

export async function CompactTextString(pb: __goscript_lib.Message | null): globalThis.Promise<string> {
	return compactTextMarshaler.value.Text(pb)
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({Len: (receiver: any, ...args: any[]) => (int32Slice_Len as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Less: (receiver: any, ...args: any[]) => (int32Slice_Less as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Swap: (receiver: any, ...args: any[]) => (int32Slice_Swap as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int32"), "proto.int32Slice"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Less", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Swap", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]])])
}

var __goscriptAwait: any
