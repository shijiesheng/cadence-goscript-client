// Generated file based on encode.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as encoding from "@goscript/encoding/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as io from "@goscript/io/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as regexp from "@goscript/regexp/index.js"

import * as sort from "@goscript/sort/index.js"

import * as strconv from "@goscript/strconv/index.js"

import * as strings from "@goscript/strings/index.js"

import * as time from "@goscript/time/index.js"

import * as utf8 from "@goscript/unicode/utf8/index.js"

import * as __goscript_apic from "./apic.gs.ts"

import * as __goscript_emitterc from "./emitterc.gs.ts"

import * as __goscript_resolve from "./resolve.gs.ts"

import * as __goscript_sorter from "./sorter.gs.ts"

import * as __goscript_yaml from "./yaml.gs.ts"

import * as __goscript_yamlh from "./yamlh.gs.ts"
import "@goscript/encoding/index.js"
import "@goscript/fmt/index.js"
import "@goscript/io/index.js"
import "@goscript/reflect/index.js"
import "@goscript/regexp/index.js"
import "@goscript/sort/index.js"
import "@goscript/strconv/index.js"
import "@goscript/strings/index.js"
import "@goscript/time/index.js"
import "@goscript/unicode/utf8/index.js"
import "./apic.gs.ts"
import "./emitterc.gs.ts"
import "./resolve.gs.ts"
import "./sorter.gs.ts"
import "./yaml.gs.ts"
import "./yamlh.gs.ts"

$.registerTypePackagePath("gopkg.in/yaml.v3", ["yaml.encoder"])

export class encoder {
	public get emitter(): __goscript_yamlh.yaml_emitter_t {
		return this._fields.emitter
	}

	public set emitter(value: __goscript_yamlh.yaml_emitter_t) {
		this._fields.emitter = value
	}

	public get event(): __goscript_yamlh.yaml_event_t {
		return this._fields.event
	}

	public set event(value: __goscript_yamlh.yaml_event_t) {
		this._fields.event = value
	}

	public get out(): $.Slice<number> {
		return this._fields.out
	}

	public set out(value: $.Slice<number>) {
		this._fields.out = value
	}

	public get flow(): boolean {
		return this._fields.flow
	}

	public set flow(value: boolean) {
		this._fields.flow = value
	}

	public get indent(): number {
		return this._fields.indent
	}

	public set indent(value: number) {
		this._fields.indent = value
	}

	public get doneInit(): boolean {
		return this._fields.doneInit
	}

	public set doneInit(value: boolean) {
		this._fields.doneInit = value
	}

	public _fields: {
		emitter: __goscript_yamlh.yaml_emitter_t
		event: __goscript_yamlh.yaml_event_t
		out: $.Slice<number>
		flow: boolean
		indent: number
		doneInit: boolean
	}

	constructor(init?: Partial<{emitter?: __goscript_yamlh.yaml_emitter_t, event?: __goscript_yamlh.yaml_event_t, out?: $.Slice<number>, flow?: boolean, indent?: number, doneInit?: boolean}>, __goscriptValue?: boolean) {
		this._fields = {
			emitter: init?.emitter ? init.emitter.clone() : new __goscript_yamlh.yaml_emitter_t(undefined, true),
			event: init?.event ? init.event.clone() : new __goscript_yamlh.yaml_event_t(undefined, true),
			out: init?.out ?? (null! as $.Slice<number>),
			flow: init?.flow ?? (false as boolean),
			indent: init?.indent ?? (0 as number),
			doneInit: init?.doneInit ?? (false as boolean)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): encoder {
		return new encoder(this, true)
	}

	public __goscriptAssign(source: encoder): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.emitter, values.emitter)
		$.assignStruct(target.event, values.event)
		target.out = values.out
		target.flow = values.flow
		target.indent = values.indent
		target.doneInit = values.doneInit
	}

	public async boolv(tag: string, _in: reflect.Value): globalThis.Promise<void> {
		const e: encoder | $.VarRef<encoder> | null = this;
		let s: string = ""
		if ($.markAsStructValue($.cloneStructValue(_in)).Bool()) {
			s = "true"
		} else {
			s = "false"
		}
		await (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as encoder).emitScalar(s, "", tag, 2, null, null, null, null) : encoder.prototype.emitScalar.call(e, s, "", tag, 2, null, null, null, null))
	}

	public destroy(): void {
		const e: encoder | $.VarRef<encoder> | null = this;
		__goscript_apic.yaml_emitter_delete($.fieldRef($.pointerValue<encoder>(e)._fields, "emitter"))
	}

	public async emit(): globalThis.Promise<void> {
		const e: encoder | $.VarRef<encoder> | null = this;
		const e$: encoder = e == null ? $.pointerTarget<encoder>(e) : (e as any).__isVarRef === true ? (e as any).value : (e as any).__goValue === undefined ? (e as any) : $.pointerTarget<encoder>(e)
		// This will internally delete the e.event value.
		encoder.prototype.must.call(e, await __goscript_emitterc.yaml_emitter_emit($.fieldRef((e$ as encoder)._fields, "emitter"), $.fieldRef((e$ as encoder)._fields, "event")))
	}

	public async emitScalar(value: string, anchor: string, tag: string, style: __goscript_yamlh.yaml_scalar_style_t, head: $.Slice<number>, line: $.Slice<number>, foot: $.Slice<number>, tail: $.Slice<number>): globalThis.Promise<void> {
		let e: encoder | $.VarRef<encoder> | null = this;
		const e$: encoder = e == null ? $.pointerTarget<encoder>(e) : (e as any).__isVarRef === true ? (e as any).value : (e as any).__goValue === undefined ? (e as any) : $.pointerTarget<encoder>(e)
		// TODO Kill this function. Replace all initialize calls by their underlining Go literals.
		let implicit = $.stringEqual(tag, "")
		if (!implicit) {
			tag = __goscript_resolve.longTag(tag)
		}
		encoder.prototype.must.call(e, __goscript_apic.yaml_scalar_event_initialize($.fieldRef((e$ as encoder)._fields, "event"), $.stringToBytes(anchor), $.stringToBytes(tag), $.stringToBytes(value), implicit, implicit, style));
		;(e$ as encoder).event.head_comment = head;
		;(e$ as encoder).event.line_comment = line;
		;(e$ as encoder).event.foot_comment = foot;
		;(e$ as encoder).event.tail_comment = tail
		await (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as encoder).emit() : encoder.prototype.emit.call(e))
	}

	public fieldByIndex(v: reflect.Value, index: $.Slice<number>): reflect.Value {
		const e: encoder | $.VarRef<encoder> | null = this;
		let field: reflect.Value = $.markAsStructValue(new reflect.Value())
		for (let __goscriptRangeTarget0 = index, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
			let num = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as number)
			while (true) {
				if ($.markAsStructValue($.cloneStructValue(v)).Kind() == 22) {
					if ($.markAsStructValue($.cloneStructValue(v)).IsNil()) {
						return $.markAsStructValue(new reflect.Value())
					}
					v = $.assignStruct(v, $.markAsStructValue($.cloneStructValue(v)).Elem())
					continue
				}
				break
			}
			v = $.assignStruct(v, $.markAsStructValue($.cloneStructValue(v)).Field(num))
		}
		return $.markAsStructValue($.cloneStructValue(v))
	}

	public async finish(): globalThis.Promise<void> {
		let e: encoder | $.VarRef<encoder> | null = this;
		const e$: encoder = e == null ? $.pointerTarget<encoder>(e) : (e as any).__isVarRef === true ? (e as any).value : (e as any).__goValue === undefined ? (e as any) : $.pointerTarget<encoder>(e);
		;(e$ as encoder).emitter.open_ended = false
		__goscript_apic.yaml_stream_end_event_initialize($.fieldRef((e$ as encoder)._fields, "event"))
		await (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as encoder).emit() : encoder.prototype.emit.call(e))
	}

	public async floatv(tag: string, _in: reflect.Value): globalThis.Promise<void> {
		const e: encoder | $.VarRef<encoder> | null = this;
		// Issue #352: When formatting, use the precision of the underlying value
		let precision = 64
		if ($.markAsStructValue($.cloneStructValue(_in)).Kind() == 13) {
			precision = 32
		}

		let s = strconv.FormatFloat($.markAsStructValue($.cloneStructValue(_in)).Float(), 103, -1, precision)
		switch (s) {
			case "+Inf":
			{
				s = ".inf"
				break
			}
			case "-Inf":
			{
				s = "-.inf"
				break
			}
			case "NaN":
			{
				s = ".nan"
				break
			}
		}
		await (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as encoder).emitScalar(s, "", tag, 2, null, null, null, null) : encoder.prototype.emitScalar.call(e, s, "", tag, 2, null, null, null, null))
	}

	public async init(): globalThis.Promise<void> {
		let e: encoder | $.VarRef<encoder> | null = this;
		const e$: encoder = e == null ? $.pointerTarget<encoder>(e) : (e as any).__isVarRef === true ? (e as any).value : (e as any).__goValue === undefined ? (e as any) : $.pointerTarget<encoder>(e)
		if ((e$ as encoder).doneInit) {
			return
		}
		if ((e$ as encoder).indent == 0) {
			;(e$ as encoder).indent = 4
		}
		;(e$ as encoder).emitter.best_indent = (e$ as encoder).indent
		__goscript_apic.yaml_stream_start_event_initialize($.fieldRef((e$ as encoder)._fields, "event"), 1)
		await (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as encoder).emit() : encoder.prototype.emit.call(e));
		;(e$ as encoder).doneInit = true
	}

	public async intv(tag: string, _in: reflect.Value): globalThis.Promise<void> {
		const e: encoder | $.VarRef<encoder> | null = this;
		let s = strconv.FormatInt($.markAsStructValue($.cloneStructValue(_in)).Int(), 10)
		await (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as encoder).emitScalar(s, "", tag, 2, null, null, null, null) : encoder.prototype.emitScalar.call(e, s, "", tag, 2, null, null, null, null))
	}

	public async mappingv(tag: string, f: (() => void) | null): globalThis.Promise<void> {
		let e: encoder | $.VarRef<encoder> | null = this;
		const e$: encoder = e == null ? $.pointerTarget<encoder>(e) : (e as any).__isVarRef === true ? (e as any).value : (e as any).__goValue === undefined ? (e as any) : $.pointerTarget<encoder>(e)
		let implicit = $.stringEqual(tag, "")
		let style = 1
		if ((e$ as encoder).flow) {
			;(e$ as encoder).flow = false
			style = 2
		}
		__goscript_apic.yaml_mapping_start_event_initialize($.fieldRef((e$ as encoder)._fields, "event"), null, $.stringToBytes(tag), implicit, style)
		await (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as encoder).emit() : encoder.prototype.emit.call(e))
		void (__goscriptAwait = f!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		__goscript_apic.yaml_mapping_end_event_initialize($.fieldRef((e$ as encoder)._fields, "event"))
		await (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as encoder).emit() : encoder.prototype.emit.call(e))
	}

	public async mapv(tag: string, _in: reflect.Value): globalThis.Promise<void> {
		const e: encoder | $.VarRef<encoder> | null = this;
		await encoder.prototype.mappingv.call(e, tag, $.functionValue(async (): globalThis.Promise<void> => {
			let keys: __goscript_sorter.keyList = (($.markAsStructValue($.cloneStructValue(_in)).MapKeys() as __goscript_sorter.keyList) as __goscript_sorter.keyList)
			await sort.Sort($.pointerValueOrNil($.namedValueInterfaceValue<sort.Interface | null>(keys, "yaml.keyList", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()))!)
			for (let __goscriptRangeTarget1 = keys, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
				let k = $.markAsStructValue($.cloneStructValue((__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as reflect.Value)))
				await (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as encoder).marshal("", $.markAsStructValue($.cloneStructValue(k))) : encoder.prototype.marshal.call(e, "", $.markAsStructValue($.cloneStructValue(k))))
				await encoder.prototype.marshal.call(e, "", $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(_in)).MapIndex($.markAsStructValue($.cloneStructValue(k))))))
			}
		}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)))
	}

	public async marshal(tag: string, _in: reflect.Value): globalThis.Promise<void> {
		const e: encoder | $.VarRef<encoder> | null = this;
		tag = __goscript_resolve.shortTag(tag)
		if (!$.markAsStructValue($.cloneStructValue(_in)).IsValid() || (($.markAsStructValue($.cloneStructValue(_in)).Kind() == 22) && $.markAsStructValue($.cloneStructValue(_in)).IsNil())) {
			await (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as encoder).nilv() : encoder.prototype.nilv.call(e))
			return
		}
		let iface = $.markAsStructValue($.cloneStructValue(_in)).Interface()
		{
			const __goscriptTypeSwitchValue = iface
			switch (true) {
				case $.typeAssert<__goscript_yaml.Node | $.VarRef<__goscript_yaml.Node> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("yaml.Node")).ok:
					{
						let value: __goscript_yaml.Node | $.VarRef<__goscript_yaml.Node> | null = $.typeAssert<__goscript_yaml.Node | $.VarRef<__goscript_yaml.Node> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("yaml.Node")).value
						await (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as encoder).nodev(_in) : encoder.prototype.nodev.call(e, _in))
						return
					}
					break
				case $.typeAssert<__goscript_yaml.Node>(__goscriptTypeSwitchValue, "yaml.Node").ok:
					{
						let value: __goscript_yaml.Node = $.markAsStructValue($.cloneStructValue($.typeAssert<__goscript_yaml.Node>(__goscriptTypeSwitchValue, "yaml.Node").value))
						if (!$.markAsStructValue($.cloneStructValue(_in)).CanAddr()) {
							let n: reflect.Value = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(reflect.New($.pointerValueOrNil($.markAsStructValue($.cloneStructValue(_in)).Type())!))).Elem()))
							$.markAsStructValue($.cloneStructValue(n)).Set($.markAsStructValue($.cloneStructValue(_in)))
							_in = $.assignStruct(_in, n)
						}
						await (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as encoder).nodev($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(_in)).Addr()))) : encoder.prototype.nodev.call(e, $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(_in)).Addr()))))
						return
					}
					break
				case $.typeAssert<time.Time>(__goscriptTypeSwitchValue, "time.Time").ok:
					{
						let value: time.Time = $.markAsStructValue($.cloneStructValue($.typeAssert<time.Time>(__goscriptTypeSwitchValue, "time.Time").value))
						await (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as encoder).timev(tag, _in) : encoder.prototype.timev.call(e, tag, _in))
						return
					}
					break
				case $.typeAssert<time.Time | $.VarRef<time.Time> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("time.Time")).ok:
					{
						let value: time.Time | $.VarRef<time.Time> | null = $.typeAssert<time.Time | $.VarRef<time.Time> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("time.Time")).value
						await (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as encoder).timev(tag, $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(_in)).Elem()))) : encoder.prototype.timev.call(e, tag, $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(_in)).Elem()))))
						return
					}
					break
				case $.typeAssert<time.Duration>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("int64", "time.Duration")).ok:
					{
						let value: time.Duration = $.typeAssert<time.Duration>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("int64", "time.Duration")).value
						await (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as encoder).stringv(tag, $.markAsStructValue($.cloneStructValue(reflect.ValueOf(time.Duration_String(value))))) : encoder.prototype.stringv.call(e, tag, $.markAsStructValue($.cloneStructValue(reflect.ValueOf(time.Duration_String(value))))))
						return
					}
					break
				case $.typeAssert<__goscript_yaml.Marshaler | null>(__goscriptTypeSwitchValue, "yaml.Marshaler").ok:
					{
						let value: __goscript_yaml.Marshaler | null = $.typeAssert<__goscript_yaml.Marshaler | null>(__goscriptTypeSwitchValue, "yaml.Marshaler").value
						let [v, err] = await (value !== null && (value as any).__isVarRef !== true && (value as any).__goValue === undefined ? (value as Exclude<__goscript_yaml.Marshaler, null>) : $.pointerValue<Exclude<__goscript_yaml.Marshaler, null>>(value)).MarshalYAML()
						if (err != null) {
							__goscript_yaml.fail(err)
						}
						if (v == null) {
							await (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as encoder).nilv() : encoder.prototype.nilv.call(e))
							return
						}
						await (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as encoder).marshal(tag, $.markAsStructValue($.cloneStructValue(reflect.ValueOf(v)))) : encoder.prototype.marshal.call(e, tag, $.markAsStructValue($.cloneStructValue(reflect.ValueOf(v)))))
						return
					}
					break
				case $.typeAssert<encoding.TextMarshaler | null>(__goscriptTypeSwitchValue, "encoding.TextMarshaler").ok:
					{
						let value: encoding.TextMarshaler | null = $.typeAssert<encoding.TextMarshaler | null>(__goscriptTypeSwitchValue, "encoding.TextMarshaler").value
						let __goscriptTuple0: any = await (value !== null && (value as any).__isVarRef !== true && (value as any).__goValue === undefined ? (value as Exclude<encoding.TextMarshaler, null>) : $.pointerValue<Exclude<encoding.TextMarshaler, null>>(value)).MarshalText()
						let text: $.Slice<number> = __goscriptTuple0[0]
						let err = __goscriptTuple0[1]
						if (err != null) {
							__goscript_yaml.fail(err)
						}
						_in = $.assignStruct(_in, reflect.ValueOf($.bytesToString(text)))
					}
					break
				case __goscriptTypeSwitchValue == null:
					{
						let value: any = __goscriptTypeSwitchValue
						await (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as encoder).nilv() : encoder.prototype.nilv.call(e))
						return
					}
					break
			}
		}
		switch ($.markAsStructValue($.cloneStructValue(_in)).Kind()) {
			case reflect.Interface:
			{
				await (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as encoder).marshal(tag, $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(_in)).Elem()))) : encoder.prototype.marshal.call(e, tag, $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(_in)).Elem()))))
				break
			}
			case reflect.Map:
			{
				await (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as encoder).mapv(tag, $.markAsStructValue($.cloneStructValue(_in))) : encoder.prototype.mapv.call(e, tag, $.markAsStructValue($.cloneStructValue(_in))))
				break
			}
			case reflect.Ptr:
			{
				await (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as encoder).marshal(tag, $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(_in)).Elem()))) : encoder.prototype.marshal.call(e, tag, $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(_in)).Elem()))))
				break
			}
			case reflect.Struct:
			{
				await (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as encoder).structv(tag, $.markAsStructValue($.cloneStructValue(_in))) : encoder.prototype.structv.call(e, tag, $.markAsStructValue($.cloneStructValue(_in))))
				break
			}
			case reflect.Slice:
			case reflect.Array:
			{
				await (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as encoder).slicev(tag, _in) : encoder.prototype.slicev.call(e, tag, _in))
				break
			}
			case reflect.String:
			{
				await (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as encoder).stringv(tag, _in) : encoder.prototype.stringv.call(e, tag, _in))
				break
			}
			case reflect.Int:
			case reflect.Int8:
			case reflect.Int16:
			case reflect.Int32:
			case reflect.Int64:
			{
				await (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as encoder).intv(tag, _in) : encoder.prototype.intv.call(e, tag, _in))
				break
			}
			case reflect.Uint:
			case reflect.Uint8:
			case reflect.Uint16:
			case reflect.Uint32:
			case reflect.Uint64:
			case reflect.Uintptr:
			{
				await (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as encoder).uintv(tag, _in) : encoder.prototype.uintv.call(e, tag, _in))
				break
			}
			case reflect.Float32:
			case reflect.Float64:
			{
				await (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as encoder).floatv(tag, _in) : encoder.prototype.floatv.call(e, tag, _in))
				break
			}
			case reflect.Bool:
			{
				await (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as encoder).boolv(tag, _in) : encoder.prototype.boolv.call(e, tag, _in))
				break
			}
			default:
			{
				$.panic($.concatString("cannot marshal type: ", (__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>($.markAsStructValue($.cloneStructValue(_in)).Type()).String(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)))
				break
			}
		}
	}

	public async marshalDoc(tag: string, _in: reflect.Value): globalThis.Promise<void> {
		const e: encoder | $.VarRef<encoder> | null = this;
		const e$: encoder = e == null ? $.pointerTarget<encoder>(e) : (e as any).__isVarRef === true ? (e as any).value : (e as any).__goValue === undefined ? (e as any) : $.pointerTarget<encoder>(e)
		await (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as encoder).init() : encoder.prototype.init.call(e))
		let node: __goscript_yaml.Node | $.VarRef<__goscript_yaml.Node> | null = null! as __goscript_yaml.Node | $.VarRef<__goscript_yaml.Node> | null
		if ($.markAsStructValue($.cloneStructValue(_in)).IsValid()) {
			let __goscriptTuple1: any = $.typeAssertTuple<__goscript_yaml.Node | $.VarRef<__goscript_yaml.Node> | null>($.markAsStructValue($.cloneStructValue(_in)).Interface(), /* @__PURE__ */ $.pointerType("yaml.Node"))
			node = __goscriptTuple1[0]
		}
		if ((node != null) && ($.pointerValue<__goscript_yaml.Node>(node).Kind == 1)) {
			await (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as encoder).nodev(_in) : encoder.prototype.nodev.call(e, _in))
		} else {
			__goscript_apic.yaml_document_start_event_initialize($.fieldRef((e$ as encoder)._fields, "event"), null, null, true)
			await (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as encoder).emit() : encoder.prototype.emit.call(e))
			await (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as encoder).marshal(tag, $.markAsStructValue($.cloneStructValue(_in))) : encoder.prototype.marshal.call(e, tag, $.markAsStructValue($.cloneStructValue(_in))))
			__goscript_apic.yaml_document_end_event_initialize($.fieldRef((e$ as encoder)._fields, "event"), true)
			await (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as encoder).emit() : encoder.prototype.emit.call(e))
		}
	}

	public must(ok: boolean): void {
		const e: encoder | $.VarRef<encoder> | null = this;
		if (!ok) {
			let msg = $.pointerValue<encoder>(e).emitter.problem
			if ($.stringEqual(msg, "")) {
				msg = "unknown problem generating YAML content"
			}
			__goscript_yaml.failf("%s", $.arrayToSlice<any>([msg]))
		}
	}

	public async nilv(): globalThis.Promise<void> {
		const e: encoder | $.VarRef<encoder> | null = this;
		await (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as encoder).emitScalar("null", "", "", 2, null, null, null, null) : encoder.prototype.emitScalar.call(e, "null", "", "", 2, null, null, null, null))
	}

	public async node(node: __goscript_yaml.Node | $.VarRef<__goscript_yaml.Node> | null, tail: string): globalThis.Promise<void> {
		let e: encoder | $.VarRef<encoder> | null = this;
		const e$: encoder = e == null ? $.pointerTarget<encoder>(e) : (e as any).__isVarRef === true ? (e as any).value : (e as any).__goValue === undefined ? (e as any) : $.pointerTarget<encoder>(e)
		const node$: __goscript_yaml.Node = node == null ? $.pointerTarget<__goscript_yaml.Node>(node) : (node as any).__isVarRef === true ? (node as any).value : (node as any).__goValue === undefined ? (node as any) : $.pointerTarget<__goscript_yaml.Node>(node)
		// Zero nodes behave as nil.
		if (((node$ as __goscript_yaml.Node).Kind == 0) && (node !== null && (node as any).__isVarRef !== true && (node as any).__goValue === undefined ? ((node as any) as __goscript_yaml.Node).IsZero() : __goscript_yaml.Node.prototype.IsZero.call(node))) {
			await (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as encoder).nilv() : encoder.prototype.nilv.call(e))
			return
		}

		// If the tag was not explicitly requested, and dropping it won't change the
		// implicit tag of the value, don't include it in the presentation.
		let tag: string = (node$ as __goscript_yaml.Node).Tag
		let stag: string = __goscript_resolve.shortTag(tag)
		let forceQuoting: boolean = false
		if ((!$.stringEqual(tag, "")) && ($.uint(((node$ as __goscript_yaml.Node).Style & 1), 32) == 0)) {
			if ((node$ as __goscript_yaml.Node).Kind == 8) {
				if (($.stringEqual(stag, "!!str")) && ($.uint(((node$ as __goscript_yaml.Node).Style & (((4 | 2) | 8) | 16)), 32) != 0)) {
					tag = ""
				} else {
					let [rtag, ] = await __goscript_resolve.resolve("", (node$ as __goscript_yaml.Node).Value)
					if ($.stringEqual(rtag, stag)) {
						tag = ""
					} else {
						if ($.stringEqual(stag, "!!str")) {
							tag = ""
							forceQuoting = true
						}
					}
				}
			} else {
				let rtag: string = ""
				switch ((node$ as __goscript_yaml.Node).Kind) {
					case 4:
					{
						rtag = "!!map"
						break
					}
					case 2:
					{
						rtag = "!!seq"
						break
					}
				}
				if ($.stringEqual(rtag, stag)) {
					tag = ""
				}
			}
		}

		switch ((node$ as __goscript_yaml.Node).Kind) {
			case 1:
			{
				__goscript_apic.yaml_document_start_event_initialize($.fieldRef((e$ as encoder)._fields, "event"), null, null, true);
				;(e$ as encoder).event.head_comment = $.stringToBytes((node$ as __goscript_yaml.Node).HeadComment)
				await (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as encoder).emit() : encoder.prototype.emit.call(e))
				for (let __goscriptRangeTarget2 = (node$ as __goscript_yaml.Node).Content, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow2.length; __rangeIndex++) {
					let __goscriptRangeShadow0 = (__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + __rangeIndex] as __goscript_yaml.Node | $.VarRef<__goscript_yaml.Node> | null)
					await (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as encoder).node(__goscriptRangeShadow0, "") : encoder.prototype.node.call(e, __goscriptRangeShadow0, ""))
				}
				__goscript_apic.yaml_document_end_event_initialize($.fieldRef((e$ as encoder)._fields, "event"), true);
				;(e$ as encoder).event.foot_comment = $.stringToBytes((node$ as __goscript_yaml.Node).FootComment)
				await (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as encoder).emit() : encoder.prototype.emit.call(e))
				break
			}
			case 2:
			{
				let style = 1
				if ($.uint(((node$ as __goscript_yaml.Node).Style & 32), 32) != 0) {
					style = 2
				}
				encoder.prototype.must.call(e, __goscript_apic.yaml_sequence_start_event_initialize($.fieldRef((e$ as encoder)._fields, "event"), $.stringToBytes((node$ as __goscript_yaml.Node).Anchor), $.stringToBytes(__goscript_resolve.longTag(tag)), $.stringEqual(tag, ""), style));
				;(e$ as encoder).event.head_comment = $.stringToBytes((node$ as __goscript_yaml.Node).HeadComment)
				await (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as encoder).emit() : encoder.prototype.emit.call(e))
				for (let __goscriptRangeTarget3 = (node$ as __goscript_yaml.Node).Content, __goscriptRangeWindow3 = $.sliceRange(__goscriptRangeTarget3), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow3.length; __rangeIndex++) {
					let __goscriptRangeShadow1 = (__goscriptRangeWindow3.backing[__goscriptRangeWindow3.offset + __rangeIndex] as __goscript_yaml.Node | $.VarRef<__goscript_yaml.Node> | null)
					await (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as encoder).node(__goscriptRangeShadow1, "") : encoder.prototype.node.call(e, __goscriptRangeShadow1, ""))
				}
				void (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as encoder).must(__goscript_apic.yaml_sequence_end_event_initialize($.fieldRef((e$ as encoder)._fields, "event"))) : encoder.prototype.must.call(e, __goscript_apic.yaml_sequence_end_event_initialize($.fieldRef((e$ as encoder)._fields, "event"))));
				;(e$ as encoder).event.line_comment = $.stringToBytes((node$ as __goscript_yaml.Node).LineComment);
				;(e$ as encoder).event.foot_comment = $.stringToBytes((node$ as __goscript_yaml.Node).FootComment)
				await (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as encoder).emit() : encoder.prototype.emit.call(e))
				break
			}
			case 4:
			{
				let style = 1
				if ($.uint(((node$ as __goscript_yaml.Node).Style & 32), 32) != 0) {
					style = 2
				}
				__goscript_apic.yaml_mapping_start_event_initialize($.fieldRef((e$ as encoder)._fields, "event"), $.stringToBytes((node$ as __goscript_yaml.Node).Anchor), $.stringToBytes(__goscript_resolve.longTag(tag)), $.stringEqual(tag, ""), style);
				;(e$ as encoder).event.tail_comment = $.stringToBytes(tail);
				;(e$ as encoder).event.head_comment = $.stringToBytes((node$ as __goscript_yaml.Node).HeadComment)
				await (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as encoder).emit() : encoder.prototype.emit.call(e))

				// The tail logic below moves the foot comment of prior keys to the following key,
				// since the value for each key may be a nested structure and the foot needs to be
				// processed only the entirety of the value is streamed. The last tail is processed
				// with the mapping end event.
				let __goscriptShadow0: string = ""
				for (let i = 0; (i + 1) < $.sliceLen((node$ as __goscript_yaml.Node).Content); i = i + (2)) {
					let k: __goscript_yaml.Node | $.VarRef<__goscript_yaml.Node> | null = $.arrayIndex((node$ as __goscript_yaml.Node).Content!, i)
					let foot = $.pointerValue<__goscript_yaml.Node>(k).FootComment
					if (!$.stringEqual(foot, "")) {
						let kopy: $.VarRef<__goscript_yaml.Node> = $.varRef(($.pointerValue<__goscript_yaml.Node>(k)).clone())
						kopy.value.FootComment = ""
						k = kopy
					}
					await (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as encoder).node(k, __goscriptShadow0) : encoder.prototype.node.call(e, k, __goscriptShadow0))
					__goscriptShadow0 = foot

					let v: __goscript_yaml.Node | $.VarRef<__goscript_yaml.Node> | null = $.arrayIndex((node$ as __goscript_yaml.Node).Content!, i + 1)
					await (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as encoder).node(v, "") : encoder.prototype.node.call(e, v, ""))
				}

				__goscript_apic.yaml_mapping_end_event_initialize($.fieldRef((e$ as encoder)._fields, "event"));
				;(e$ as encoder).event.tail_comment = $.stringToBytes(__goscriptShadow0);
				;(e$ as encoder).event.line_comment = $.stringToBytes((node$ as __goscript_yaml.Node).LineComment);
				;(e$ as encoder).event.foot_comment = $.stringToBytes((node$ as __goscript_yaml.Node).FootComment)
				await (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as encoder).emit() : encoder.prototype.emit.call(e))
				break
			}
			case 16:
			{
				__goscript_apic.yaml_alias_event_initialize($.fieldRef((e$ as encoder)._fields, "event"), $.stringToBytes((node$ as __goscript_yaml.Node).Value));
				;(e$ as encoder).event.head_comment = $.stringToBytes((node$ as __goscript_yaml.Node).HeadComment);
				;(e$ as encoder).event.line_comment = $.stringToBytes((node$ as __goscript_yaml.Node).LineComment);
				;(e$ as encoder).event.foot_comment = $.stringToBytes((node$ as __goscript_yaml.Node).FootComment)
				await (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as encoder).emit() : encoder.prototype.emit.call(e))
				break
			}
			case 8:
			{
				let value = (node$ as __goscript_yaml.Node).Value
				if (!utf8.ValidString(value)) {
					if ($.stringEqual(stag, "!!binary")) {
						__goscript_yaml.failf("explicitly tagged !!binary data must be base64-encoded", null)
					}
					if (!$.stringEqual(stag, "")) {
						__goscript_yaml.failf("cannot marshal invalid UTF-8 data as %s", $.arrayToSlice<any>([stag]))
					}
					// It can't be encoded directly as YAML so use a binary tag
					// and encode it as base64.
					tag = "!!binary"
					value = __goscript_resolve.encodeBase64(value)
				}

				let style = 2
				switch ((true as boolean)) {
					case $.uint(((node$ as __goscript_yaml.Node).Style & 2), 32) != 0:
					{
						style = 8
						break
					}
					case $.uint(((node$ as __goscript_yaml.Node).Style & 4), 32) != 0:
					{
						style = 4
						break
					}
					case $.uint(((node$ as __goscript_yaml.Node).Style & 8), 32) != 0:
					{
						style = 16
						break
					}
					case $.uint(((node$ as __goscript_yaml.Node).Style & 16), 32) != 0:
					{
						style = 32
						break
					}
					case strings.Contains(value, "\n"):
					{
						style = 16
						break
					}
					case forceQuoting:
					{
						style = 8
						break
					}
				}

				await encoder.prototype.emitScalar.call(e, value, (node$ as __goscript_yaml.Node).Anchor, tag, style, $.stringToBytes((node$ as __goscript_yaml.Node).HeadComment), $.stringToBytes((node$ as __goscript_yaml.Node).LineComment), $.stringToBytes((node$ as __goscript_yaml.Node).FootComment), $.stringToBytes(tail))
				break
			}
			default:
			{
				__goscript_yaml.failf("cannot encode node with unknown kind %d", $.arrayToSlice<any>([$.namedValueInterfaceValue<any>((node$ as __goscript_yaml.Node).Kind, "yaml.Kind", {}, /* @__PURE__ */ $.basicType("uint32", "yaml.Kind"))]))
				break
			}
		}
	}

	public async nodev(_in: reflect.Value): globalThis.Promise<void> {
		const e: encoder | $.VarRef<encoder> | null = this;
		await encoder.prototype.node.call(e, $.mustTypeAssert<__goscript_yaml.Node | $.VarRef<__goscript_yaml.Node> | null>($.markAsStructValue($.cloneStructValue(_in)).Interface(), /* @__PURE__ */ $.pointerType("yaml.Node")), "")
	}

	public async slicev(tag: string, _in: reflect.Value): globalThis.Promise<void> {
		let e: encoder | $.VarRef<encoder> | null = this;
		const e$: encoder = e == null ? $.pointerTarget<encoder>(e) : (e as any).__isVarRef === true ? (e as any).value : (e as any).__goValue === undefined ? (e as any) : $.pointerTarget<encoder>(e)
		let implicit = $.stringEqual(tag, "")
		let style = 1
		if ((e$ as encoder).flow) {
			;(e$ as encoder).flow = false
			style = 2
		}
		encoder.prototype.must.call(e, __goscript_apic.yaml_sequence_start_event_initialize($.fieldRef((e$ as encoder)._fields, "event"), null, $.stringToBytes(tag), implicit, style))
		await (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as encoder).emit() : encoder.prototype.emit.call(e))
		let n = $.markAsStructValue($.cloneStructValue(_in)).Len()
		for (let i = 0; i < n; i++) {
			await (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as encoder).marshal("", $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(_in)).Index(i)))) : encoder.prototype.marshal.call(e, "", $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(_in)).Index(i)))))
		}
		void (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as encoder).must(__goscript_apic.yaml_sequence_end_event_initialize($.fieldRef((e$ as encoder)._fields, "event"))) : encoder.prototype.must.call(e, __goscript_apic.yaml_sequence_end_event_initialize($.fieldRef((e$ as encoder)._fields, "event"))))
		await (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as encoder).emit() : encoder.prototype.emit.call(e))
	}

	public async stringv(tag: string, _in: reflect.Value): globalThis.Promise<void> {
		const e: encoder | $.VarRef<encoder> | null = this;
		let style: __goscript_yamlh.yaml_scalar_style_t = 0
		let s = $.markAsStructValue($.cloneStructValue(_in)).String()
		let canUsePlain = true
		switch ((true as boolean)) {
			case !utf8.ValidString(s):
			{
				if ($.stringEqual(tag, "!!binary")) {
					__goscript_yaml.failf("explicitly tagged !!binary data must be base64-encoded", null)
				}
				if (!$.stringEqual(tag, "")) {
					__goscript_yaml.failf("cannot marshal invalid UTF-8 data as %s", $.arrayToSlice<any>([__goscript_resolve.shortTag(tag)]))
				}
				// It can't be encoded directly as YAML so use a binary tag
				// and encode it as base64.
				tag = "!!binary"
				s = __goscript_resolve.encodeBase64(s)
				break
			}
			case $.stringEqual(tag, ""):
			{
				let [rtag, ] = await __goscript_resolve.resolve("", s)
				canUsePlain = ($.stringEqual(rtag, "!!str")) && !(await isBase60Float(s) || isOldBool(s))
				break
			}
		}
		// Note: it's possible for user code to emit invalid YAML
		// if they explicitly specify a tag and a string containing
		// text that's incompatible with that tag.
		switch ((true as boolean)) {
			case strings.Contains(s, "\n"):
			{
				if ($.pointerValue<encoder>(e).flow) {
					style = 8
				} else {
					style = 16
				}
				break
			}
			case canUsePlain:
			{
				style = 2
				break
			}
			default:
			{
				style = 8
				break
			}
		}
		await (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as encoder).emitScalar(s, "", tag, style, null, null, null, null) : encoder.prototype.emitScalar.call(e, s, "", tag, style, null, null, null, null))
	}

	public async structv(tag: string, _in: reflect.Value): globalThis.Promise<void> {
		const e: encoder | $.VarRef<encoder> | null = this;
		const e$: encoder = e == null ? $.pointerTarget<encoder>(e) : (e as any).__isVarRef === true ? (e as any).value : (e as any).__goValue === undefined ? (e as any) : $.pointerTarget<encoder>(e)
		let __goscriptTuple2: any = await __goscript_yaml.getStructInfo($.markAsStructValue($.cloneStructValue(_in)).Type())
		let sinfo: __goscript_yaml.structInfo | $.VarRef<__goscript_yaml.structInfo> | null = __goscriptTuple2[0]
		let err = __goscriptTuple2[1]
		let sinfo$: __goscript_yaml.structInfo = sinfo == null ? $.pointerTarget<__goscript_yaml.structInfo>(sinfo) : (sinfo as any).__isVarRef === true ? (sinfo as any).value : (sinfo as any).__goValue === undefined ? (sinfo as any) : $.pointerTarget<__goscript_yaml.structInfo>(sinfo)
		if (err != null) {
			$.panic((err as any))
		}
		await encoder.prototype.mappingv.call(e, tag, $.functionValue(async (): globalThis.Promise<void> => {
			for (let __goscriptRangeTarget4 = (sinfo$ as __goscript_yaml.structInfo).FieldsList, __goscriptRangeWindow4 = $.sliceRange(__goscriptRangeTarget4), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow4.length; __rangeIndex++) {
				let info = ((__goscriptRangeWindow4.backing[__goscriptRangeWindow4.offset + __rangeIndex] as __goscript_yaml.fieldInfo)).clone()
				let value: reflect.Value = $.markAsStructValue(new reflect.Value())
				if (info.Inline == null) {
					value = $.assignStruct(value, $.markAsStructValue($.cloneStructValue(_in)).Field(info.Num))
				} else {
					value = $.assignStruct(value, (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as encoder).fieldByIndex($.markAsStructValue($.cloneStructValue(_in)), info.Inline) : encoder.prototype.fieldByIndex.call(e, $.markAsStructValue($.cloneStructValue(_in)), info.Inline)))
					if (!$.markAsStructValue($.cloneStructValue(value)).IsValid()) {
						continue
					}
				}
				if (info.OmitEmpty && await __goscript_yaml.isZero(value)) {
					continue
				}
				await (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as encoder).marshal("", $.markAsStructValue($.cloneStructValue(reflect.ValueOf(info.Key)))) : encoder.prototype.marshal.call(e, "", $.markAsStructValue($.cloneStructValue(reflect.ValueOf(info.Key)))));
				;(e$ as encoder).flow = info.Flow
				await (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as encoder).marshal("", $.markAsStructValue($.cloneStructValue(value))) : encoder.prototype.marshal.call(e, "", $.markAsStructValue($.cloneStructValue(value))))
			}
			if ((sinfo$ as __goscript_yaml.structInfo).InlineMap >= 0) {
				let m = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(_in)).Field((sinfo$ as __goscript_yaml.structInfo).InlineMap)))
				if ($.markAsStructValue($.cloneStructValue(m)).Len() > 0) {
					;(e$ as encoder).flow = false
					let keys: __goscript_sorter.keyList = (($.markAsStructValue($.cloneStructValue(m)).MapKeys() as __goscript_sorter.keyList) as __goscript_sorter.keyList)
					await sort.Sort($.pointerValueOrNil($.namedValueInterfaceValue<sort.Interface | null>(keys, "yaml.keyList", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()))!)
					for (let __goscriptRangeTarget5 = keys, __goscriptRangeWindow5 = $.sliceRange(__goscriptRangeTarget5), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow5.length; __rangeIndex++) {
						let k = $.markAsStructValue($.cloneStructValue((__goscriptRangeWindow5.backing[__goscriptRangeWindow5.offset + __rangeIndex] as reflect.Value)))
						{
							let [, found] = $.mapGet<string, __goscript_yaml.fieldInfo, __goscript_yaml.fieldInfo>((sinfo$ as __goscript_yaml.structInfo).FieldsMap, $.markAsStructValue($.cloneStructValue(k)).String(), new __goscript_yaml.fieldInfo(undefined, true))
							if (found) {
								$.panic(await fmt.Sprintf("cannot have key %q in inlined map: conflicts with struct field", $.markAsStructValue($.cloneStructValue(k)).String()))
							}
						}
						await (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as encoder).marshal("", $.markAsStructValue($.cloneStructValue(k))) : encoder.prototype.marshal.call(e, "", $.markAsStructValue($.cloneStructValue(k))));
						;(e$ as encoder).flow = false
						await encoder.prototype.marshal.call(e, "", $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(m)).MapIndex($.markAsStructValue($.cloneStructValue(k))))))
					}
				}
			}
		}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)))
	}

	public async timev(tag: string, _in: reflect.Value): globalThis.Promise<void> {
		const e: encoder | $.VarRef<encoder> | null = this;
		let t = $.markAsStructValue($.cloneStructValue($.mustTypeAssert<time.Time>($.markAsStructValue($.cloneStructValue(_in)).Interface(), "time.Time")))
		let s = $.markAsStructValue($.cloneStructValue(t)).Format(time.RFC3339Nano)
		await (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as encoder).emitScalar(s, "", tag, 2, null, null, null, null) : encoder.prototype.emitScalar.call(e, s, "", tag, 2, null, null, null, null))
	}

	public async uintv(tag: string, _in: reflect.Value): globalThis.Promise<void> {
		const e: encoder | $.VarRef<encoder> | null = this;
		let s = strconv.FormatUint($.markAsStructValue($.cloneStructValue(_in)).Uint(), 10)
		await (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as encoder).emitScalar(s, "", tag, 2, null, null, null, null) : encoder.prototype.emitScalar.call(e, s, "", tag, 2, null, null, null, null))
	}

	static __typeInfo = $.registerStructType(
		"yaml.encoder",
		() => new encoder(),
		() => [$.methodSignature("boolv", [["tag", /* @__PURE__ */ $.basicType("string")], ["in", "reflect.Value"]], [], true), $.methodSignature("destroy", [], [], true), $.methodSignature("emit", [], [], true), $.methodSignature("emitScalar", [["value", /* @__PURE__ */ $.basicType("string")], ["anchor", /* @__PURE__ */ $.basicType("string")], ["tag", /* @__PURE__ */ $.basicType("string")], ["style", /* @__PURE__ */ $.basicType("int8", "yaml.yaml_scalar_style_t")], ["head", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["line", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["foot", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["tail", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [], true), $.methodSignature("fieldByIndex", [["v", "reflect.Value"], ["index", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))]], [["field", "reflect.Value"]], true), $.methodSignature("finish", [], [], true), $.methodSignature("floatv", [["tag", /* @__PURE__ */ $.basicType("string")], ["in", "reflect.Value"]], [], true), $.methodSignature("init", [], [], true), $.methodSignature("intv", [["tag", /* @__PURE__ */ $.basicType("string")], ["in", "reflect.Value"]], [], true), $.methodSignature("mappingv", [["tag", /* @__PURE__ */ $.basicType("string")], ["f", ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)]], [], true), $.methodSignature("mapv", [["tag", /* @__PURE__ */ $.basicType("string")], ["in", "reflect.Value"]], [], true), $.methodSignature("marshal", [["tag", /* @__PURE__ */ $.basicType("string")], ["in", "reflect.Value"]], [], true), $.methodSignature("marshalDoc", [["tag", /* @__PURE__ */ $.basicType("string")], ["in", "reflect.Value"]], [], true), $.methodSignature("must", [["ok", /* @__PURE__ */ $.basicType("bool")]], [], true), $.methodSignature("nilv", [], [], true), $.methodSignature("node", [["node", /* @__PURE__ */ $.pointerType("yaml.Node")], ["tail", /* @__PURE__ */ $.basicType("string")]], [], true), $.methodSignature("nodev", [["in", "reflect.Value"]], [], true), $.methodSignature("slicev", [["tag", /* @__PURE__ */ $.basicType("string")], ["in", "reflect.Value"]], [], true), $.methodSignature("stringv", [["tag", /* @__PURE__ */ $.basicType("string")], ["in", "reflect.Value"]], [], true), $.methodSignature("structv", [["tag", /* @__PURE__ */ $.basicType("string")], ["in", "reflect.Value"]], [], true), $.methodSignature("timev", [["tag", /* @__PURE__ */ $.basicType("string")], ["in", "reflect.Value"]], [], true), $.methodSignature("uintv", [["tag", /* @__PURE__ */ $.basicType("string")], ["in", "reflect.Value"]], [], true)],
		encoder,
		() => [/* @__PURE__ */ $.structField("emitter", "yaml.yaml_emitter_t", [0], 0, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("event", "yaml.yaml_event_t", [1], 600, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("out", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [2], 872, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("flow", /* @__PURE__ */ $.basicType("bool"), [3], 896, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("indent", /* @__PURE__ */ $.basicType("int"), [4], 904, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("doneInit", /* @__PURE__ */ $.basicType("bool"), [5], 912, false, { pkgPath: "gopkg.in/yaml.v3" })]
	)
}

export function newEncoder(): encoder | $.VarRef<encoder> | null {
	let e: encoder | $.VarRef<encoder> | null = new encoder()
	let e$: encoder = e == null ? $.pointerTarget<encoder>(e) : (e as any).__isVarRef === true ? (e as any).value : (e as any).__goValue === undefined ? (e as any) : $.pointerTarget<encoder>(e)
	__goscript_apic.yaml_emitter_initialize($.fieldRef((e$ as encoder)._fields, "emitter"))
	__goscript_apic.yaml_emitter_set_output_string($.fieldRef((e$ as encoder)._fields, "emitter"), $.fieldRef((e$ as encoder)._fields, "out"))
	__goscript_apic.yaml_emitter_set_unicode($.fieldRef((e$ as encoder)._fields, "emitter"), true)
	return e
}

export function newEncoderWithWriter(w: io.Writer | null): encoder | $.VarRef<encoder> | null {
	let e: encoder | $.VarRef<encoder> | null = new encoder()
	let e$: encoder = e == null ? $.pointerTarget<encoder>(e) : (e as any).__isVarRef === true ? (e as any).value : (e as any).__goValue === undefined ? (e as any) : $.pointerTarget<encoder>(e)
	__goscript_apic.yaml_emitter_initialize($.fieldRef((e$ as encoder)._fields, "emitter"))
	__goscript_apic.yaml_emitter_set_output_writer($.fieldRef((e$ as encoder)._fields, "emitter"), w)
	__goscript_apic.yaml_emitter_set_unicode($.fieldRef((e$ as encoder)._fields, "emitter"), true)
	return e
}

export async function isBase60Float(s: string): globalThis.Promise<boolean> {
	let result: boolean = false
	// Fast path.
	if ($.stringEqual(s, "")) {
		return false
	}
	let c = $.indexString(s, 0)
	if (!(((c == 43) || (c == 45)) || ((c >= 48) && (c <= 57))) || (strings.IndexByte(s, 58) < 0)) {
		return false
	}
	// Do the full match.
	return (base60float !== null && (base60float as any).__isVarRef !== true && (base60float as any).__goValue === undefined ? ((base60float as any) as regexp.Regexp).MatchString(s) : regexp.Regexp.prototype.MatchString.call(base60float, s))
}

export let base60float: regexp.Regexp | $.VarRef<regexp.Regexp> | null = await regexp.MustCompile("^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+(?:\\.[0-9_]*)?$")

export function __goscript_set_base60float(__goscriptValue: regexp.Regexp | $.VarRef<regexp.Regexp> | null): void {
	base60float = __goscriptValue
}

export function isOldBool(s: string): boolean {
	let result: boolean = false
	switch (s) {
		case "y":
		case "Y":
		case "yes":
		case "Yes":
		case "YES":
		case "on":
		case "On":
		case "ON":
		case "n":
		case "N":
		case "no":
		case "No":
		case "NO":
		case "off":
		case "Off":
		case "OFF":
		{
			return true
			break
		}
		default:
		{
			return false
			break
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({Len: (receiver: any, ...args: any[]) => (__goscript_sorter.keyList_Len as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Less: (receiver: any, ...args: any[]) => (__goscript_sorter.keyList_Less as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Swap: (receiver: any, ...args: any[]) => (__goscript_sorter.keyList_Swap as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.sliceType("reflect.Value", "yaml.keyList"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Less", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Swap", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]])])
}

var __goscriptAwait: any
