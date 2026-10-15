// Generated file based on shadower.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as base64 from "@goscript/encoding/base64/index.js"

import * as json from "@goscript/encoding/json/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as math from "@goscript/math/index.js"

import * as strconv from "@goscript/strconv/index.js"

import * as strings from "@goscript/strings/index.js"

import * as multierr from "@goscript/go.uber.org/multierr/index.js"

import * as stream from "@goscript/go.uber.org/thriftrw/protocol/stream/index.js"

import * as thriftreflect from "@goscript/go.uber.org/thriftrw/thriftreflect/index.js"

import * as wire from "@goscript/go.uber.org/thriftrw/wire/index.js"

import * as zapcore from "@goscript/go.uber.org/zap/zapcore/index.js"

import * as shared from "@goscript/go.uber.org/cadence/.gen/go/shared/index.js"

import type * as io from "@goscript/io/index.js"
import "@goscript/bytes/index.js"
import "@goscript/encoding/base64/index.js"
import "@goscript/encoding/json/index.js"
import "@goscript/fmt/index.js"
import "@goscript/math/index.js"
import "@goscript/strconv/index.js"
import "@goscript/strings/index.js"
import "@goscript/go.uber.org/multierr/index.js"
import "@goscript/go.uber.org/thriftrw/protocol/stream/index.js"
import "@goscript/go.uber.org/thriftrw/thriftreflect/index.js"
import "@goscript/go.uber.org/thriftrw/wire/index.js"
import "@goscript/go.uber.org/zap/zapcore/index.js"
import "@goscript/go.uber.org/cadence/.gen/go/shared/index.js"

$.registerTypePackagePath("go.uber.org/cadence/.gen/go/shadower", ["shadower.ExitCondition", "shadower.Mode", "shadower.ReplayWorkflowActivityParams", "shadower._List_WorkflowExecution_ValueList", "shadower._List_WorkflowExecution_Zapper", "shadower.ReplayWorkflowActivityResult", "shadower.ScanWorkflowActivityParams", "shadower.ScanWorkflowActivityResult", "shadower.WorkflowParams", "shadower.WorkflowResult"])

export type Mode = number

$.registerNamedValueType(
	"shadower.Mode",
	{Encode: (receiver: any, ...args: any[]) => (Mode_Encode as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Equals: (receiver: any, ...args: any[]) => (Mode_Equals as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), MarshalJSON: (receiver: any, ...args: any[]) => (Mode_MarshalJSON as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), MarshalLogObject: (receiver: any, ...args: any[]) => (Mode_MarshalLogObject as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), MarshalText: (receiver: any, ...args: any[]) => (Mode_MarshalText as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Ptr: (receiver: any, ...args: any[]) => (Mode_Ptr as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (Mode_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), ToWire: (receiver: any, ...args: any[]) => (Mode_ToWire as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Encode", [["sw", "stream.Writer"]], ["error"]), $.methodSignature("Equals", [["rhs", /* @__PURE__ */ $.basicType("int32", "shadower.Mode")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("MarshalJSON", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("MarshalLogObject", [["enc", "zapcore.ObjectEncoder"]], ["error"]), $.methodSignature("MarshalText", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("Ptr", [], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32", "shadower.Mode"))]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("ToWire", [], ["wire.Value", "error"])]
);

$.registerNamedValueType(
	"*shadower.Mode",
	{Decode: (receiver: any, ...args: any[]) => (Mode_Decode as any)(receiver, ...$.stripGenericTypeArgs(args)), Encode: (receiver: any, ...args: any[]) => (Mode_Encode as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Equals: (receiver: any, ...args: any[]) => (Mode_Equals as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), FromWire: (receiver: any, ...args: any[]) => (Mode_FromWire as any)(receiver, ...$.stripGenericTypeArgs(args)), MarshalJSON: (receiver: any, ...args: any[]) => (Mode_MarshalJSON as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), MarshalLogObject: (receiver: any, ...args: any[]) => (Mode_MarshalLogObject as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), MarshalText: (receiver: any, ...args: any[]) => (Mode_MarshalText as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Ptr: (receiver: any, ...args: any[]) => (Mode_Ptr as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (Mode_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), ToWire: (receiver: any, ...args: any[]) => (Mode_ToWire as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), UnmarshalJSON: (receiver: any, ...args: any[]) => (Mode_UnmarshalJSON as any)(receiver, ...$.stripGenericTypeArgs(args)), UnmarshalText: (receiver: any, ...args: any[]) => (Mode_UnmarshalText as any)(receiver, ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Decode", [["sr", "stream.Reader"]], ["error"]), $.methodSignature("Encode", [["sw", "stream.Writer"]], ["error"]), $.methodSignature("Equals", [["rhs", /* @__PURE__ */ $.basicType("int32", "shadower.Mode")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("FromWire", [["w", "wire.Value"]], ["error"]), $.methodSignature("MarshalJSON", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("MarshalLogObject", [["enc", "zapcore.ObjectEncoder"]], ["error"]), $.methodSignature("MarshalText", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("Ptr", [], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32", "shadower.Mode"))]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("ToWire", [], ["wire.Value", "error"]), $.methodSignature("UnmarshalJSON", [["text", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"]), $.methodSignature("UnmarshalText", [["value", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"])]
);

export type _List_WorkflowExecution_ValueList = $.Slice<shared.WorkflowExecution | $.VarRef<shared.WorkflowExecution> | null>

$.registerNamedType("shadower._List_WorkflowExecution_ValueList", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("shared.WorkflowExecution")));

$.registerNamedValueType(
	"shadower._List_WorkflowExecution_ValueList",
	{Close: (receiver: any, ...args: any[]) => (_List_WorkflowExecution_ValueList_Close as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), ForEach: (receiver: any, ...args: any[]) => (_List_WorkflowExecution_ValueList_ForEach as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Size: (receiver: any, ...args: any[]) => (_List_WorkflowExecution_ValueList_Size as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), ValueType: (receiver: any, ...args: any[]) => (_List_WorkflowExecution_ValueList_ValueType as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Close"), $.methodSignature("ForEach", [["f", ({ kind: $.TypeKind.Function, params: ["wire.Value"], results: ["error"] } as $.FunctionTypeInfo)]], ["error"]), $.methodSignature("Size", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("ValueType", [], [/* @__PURE__ */ $.basicType("uint8", "wire.Type")])]
);

$.registerNamedValueType(
	"*shadower._List_WorkflowExecution_ValueList",
	{Close: (receiver: any, ...args: any[]) => (_List_WorkflowExecution_ValueList_Close as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), ForEach: (receiver: any, ...args: any[]) => (_List_WorkflowExecution_ValueList_ForEach as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Size: (receiver: any, ...args: any[]) => (_List_WorkflowExecution_ValueList_Size as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), ValueType: (receiver: any, ...args: any[]) => (_List_WorkflowExecution_ValueList_ValueType as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Close"), $.methodSignature("ForEach", [["f", ({ kind: $.TypeKind.Function, params: ["wire.Value"], results: ["error"] } as $.FunctionTypeInfo)]], ["error"]), $.methodSignature("Size", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("ValueType", [], [/* @__PURE__ */ $.basicType("uint8", "wire.Type")])]
);

export type _List_WorkflowExecution_Zapper = $.Slice<shared.WorkflowExecution | $.VarRef<shared.WorkflowExecution> | null>

$.registerNamedType("shadower._List_WorkflowExecution_Zapper", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("shared.WorkflowExecution")));

$.registerNamedValueType(
	"shadower._List_WorkflowExecution_Zapper",
	{MarshalLogArray: (receiver: any, ...args: any[]) => (_List_WorkflowExecution_Zapper_MarshalLogArray as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("MarshalLogArray", [["enc", "zapcore.ArrayEncoder"]], [["err", "error"]])]
);

$.registerNamedValueType(
	"*shadower._List_WorkflowExecution_Zapper",
	{MarshalLogArray: (receiver: any, ...args: any[]) => (_List_WorkflowExecution_Zapper_MarshalLogArray as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("MarshalLogArray", [["enc", "zapcore.ArrayEncoder"]], [["err", "error"]])]
);

export class ExitCondition {
	public get ExpirationIntervalInSeconds(): $.VarRef<number> | null {
		return this._fields.ExpirationIntervalInSeconds
	}

	public set ExpirationIntervalInSeconds(value: $.VarRef<number> | null) {
		this._fields.ExpirationIntervalInSeconds = value
	}

	public get ShadowCount(): $.VarRef<number> | null {
		return this._fields.ShadowCount
	}

	public set ShadowCount(value: $.VarRef<number> | null) {
		this._fields.ShadowCount = value
	}

	public _fields: {
		ExpirationIntervalInSeconds: $.VarRef<number> | null
		ShadowCount: $.VarRef<number> | null
	}

	constructor(init?: Partial<{ExpirationIntervalInSeconds?: $.VarRef<number> | null, ShadowCount?: $.VarRef<number> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			ExpirationIntervalInSeconds: init?.ExpirationIntervalInSeconds ?? (null! as $.VarRef<number> | null),
			ShadowCount: init?.ShadowCount ?? (null! as $.VarRef<number> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ExitCondition {
		return new ExitCondition(this, true)
	}

	public __goscriptAssign(source: ExitCondition): void {
		const target = this._fields
		const values = source._fields
		target.ExpirationIntervalInSeconds = values.ExpirationIntervalInSeconds
		target.ShadowCount = values.ShadowCount
	}

	public async Decode(sr: stream.Reader | null): globalThis.Promise<$.GoError> {
		let v: ExitCondition | $.VarRef<ExitCondition> | null = this;
		const v$: ExitCondition = v == null ? $.pointerTarget<ExitCondition>(v) : (v as any).__isVarRef === true ? (v as any).value : (v as any).__goValue === undefined ? (v as any) : $.pointerTarget<ExitCondition>(v)

		{
			let err = (__goscriptAwait = (sr !== null && (sr as any).__isVarRef !== true && (sr as any).__goValue === undefined ? (sr as Exclude<stream.Reader, null>) : $.pointerValue<Exclude<stream.Reader, null>>(sr)).ReadStructBegin(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (err != null) {
				return err
			}
		}

		let [fh, ok, err] = await (sr !== null && (sr as any).__isVarRef !== true && (sr as any).__goValue === undefined ? (sr as Exclude<stream.Reader, null>) : $.pointerValue<Exclude<stream.Reader, null>>(sr)).ReadFieldBegin()
		if (err != null) {
			return err
		}

		while (ok) {
			switch ((true as boolean)) {
				case (fh.ID == 10) && (fh.Type == 8):
				{
					let x: $.VarRef<number> = $.varRef(0)
					let __goscriptTuple0: any = await (sr !== null && (sr as any).__isVarRef !== true && (sr as any).__goValue === undefined ? (sr as Exclude<stream.Reader, null>) : $.pointerValue<Exclude<stream.Reader, null>>(sr)).ReadInt32()
					x.value = __goscriptTuple0[0]
					err = __goscriptTuple0[1];
					;(v$ as ExitCondition).ExpirationIntervalInSeconds = x
					if (err != null) {
						return err
					}
					break
				}
				case (fh.ID == 20) && (fh.Type == 8):
				{
					let x: $.VarRef<number> = $.varRef(0)
					let __goscriptTuple1: any = await (sr !== null && (sr as any).__isVarRef !== true && (sr as any).__goValue === undefined ? (sr as Exclude<stream.Reader, null>) : $.pointerValue<Exclude<stream.Reader, null>>(sr)).ReadInt32()
					x.value = __goscriptTuple1[0]
					err = __goscriptTuple1[1];
					;(v$ as ExitCondition).ShadowCount = x
					if (err != null) {
						return err
					}
					break
				}
				default:
				{
					{
						let __goscriptShadow0 = (__goscriptAwait = (sr !== null && (sr as any).__isVarRef !== true && (sr as any).__goValue === undefined ? (sr as Exclude<stream.Reader, null>) : $.pointerValue<Exclude<stream.Reader, null>>(sr)).Skip(fh.Type), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
						if (__goscriptShadow0 != null) {
							return __goscriptShadow0
						}
					}
					break
				}
			}

			{
				let __goscriptShadow1 = (__goscriptAwait = (sr !== null && (sr as any).__isVarRef !== true && (sr as any).__goValue === undefined ? (sr as Exclude<stream.Reader, null>) : $.pointerValue<Exclude<stream.Reader, null>>(sr)).ReadFieldEnd(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (__goscriptShadow1 != null) {
					return __goscriptShadow1
				}
			}

			{
				let __goscriptTuple2: any = await (sr !== null && (sr as any).__isVarRef !== true && (sr as any).__goValue === undefined ? (sr as Exclude<stream.Reader, null>) : $.pointerValue<Exclude<stream.Reader, null>>(sr)).ReadFieldBegin()
				fh = $.assignStruct(fh, __goscriptTuple2[0])
				ok = __goscriptTuple2[1]
				err = __goscriptTuple2[2]
				if (err != null) {
					return err
				}
			}
		}

		{
			let __goscriptShadow2 = (__goscriptAwait = (sr !== null && (sr as any).__isVarRef !== true && (sr as any).__goValue === undefined ? (sr as Exclude<stream.Reader, null>) : $.pointerValue<Exclude<stream.Reader, null>>(sr)).ReadStructEnd(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (__goscriptShadow2 != null) {
				return __goscriptShadow2
			}
		}

		return null
	}

	public async Encode(sw: stream.Writer | null): globalThis.Promise<$.GoError> {
		const v: ExitCondition | $.VarRef<ExitCondition> | null = this;
		const v$: ExitCondition = v == null ? $.pointerTarget<ExitCondition>(v) : (v as any).__isVarRef === true ? (v as any).value : (v as any).__goValue === undefined ? (v as any) : $.pointerTarget<ExitCondition>(v)
		{
			let err = (__goscriptAwait = (sw !== null && (sw as any).__isVarRef !== true && (sw as any).__goValue === undefined ? (sw as Exclude<stream.Writer, null>) : $.pointerValue<Exclude<stream.Writer, null>>(sw)).WriteStructBegin(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (err != null) {
				return err
			}
		}

		if ((v$ as ExitCondition).ExpirationIntervalInSeconds != null) {
			{
				let err = (__goscriptAwait = (sw !== null && (sw as any).__isVarRef !== true && (sw as any).__goValue === undefined ? (sw as Exclude<stream.Writer, null>) : $.pointerValue<Exclude<stream.Writer, null>>(sw)).WriteFieldBegin(new stream.FieldHeader({ID: 10, Type: 8}, true)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (err != null) {
					return err
				}
			}
			{
				let err = (__goscriptAwait = (sw !== null && (sw as any).__isVarRef !== true && (sw as any).__goValue === undefined ? (sw as Exclude<stream.Writer, null>) : $.pointerValue<Exclude<stream.Writer, null>>(sw)).WriteInt32($.pointerValue<number>(((v$ as ExitCondition).ExpirationIntervalInSeconds))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (err != null) {
					return err
				}
			}
			{
				let err = (__goscriptAwait = (sw !== null && (sw as any).__isVarRef !== true && (sw as any).__goValue === undefined ? (sw as Exclude<stream.Writer, null>) : $.pointerValue<Exclude<stream.Writer, null>>(sw)).WriteFieldEnd(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (err != null) {
					return err
				}
			}
		}

		if ((v$ as ExitCondition).ShadowCount != null) {
			{
				let err = (__goscriptAwait = (sw !== null && (sw as any).__isVarRef !== true && (sw as any).__goValue === undefined ? (sw as Exclude<stream.Writer, null>) : $.pointerValue<Exclude<stream.Writer, null>>(sw)).WriteFieldBegin(new stream.FieldHeader({ID: 20, Type: 8}, true)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (err != null) {
					return err
				}
			}
			{
				let err = (__goscriptAwait = (sw !== null && (sw as any).__isVarRef !== true && (sw as any).__goValue === undefined ? (sw as Exclude<stream.Writer, null>) : $.pointerValue<Exclude<stream.Writer, null>>(sw)).WriteInt32($.pointerValue<number>(((v$ as ExitCondition).ShadowCount))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (err != null) {
					return err
				}
			}
			{
				let err = (__goscriptAwait = (sw !== null && (sw as any).__isVarRef !== true && (sw as any).__goValue === undefined ? (sw as Exclude<stream.Writer, null>) : $.pointerValue<Exclude<stream.Writer, null>>(sw)).WriteFieldEnd(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (err != null) {
					return err
				}
			}
		}

		return (sw !== null && (sw as any).__isVarRef !== true && (sw as any).__goValue === undefined ? (sw as Exclude<stream.Writer, null>) : $.pointerValue<Exclude<stream.Writer, null>>(sw)).WriteStructEnd()
	}

	public Equals(rhs: ExitCondition | $.VarRef<ExitCondition> | null): boolean {
		const v: ExitCondition | $.VarRef<ExitCondition> | null = this;
		const v$: ExitCondition = v == null ? $.pointerTarget<ExitCondition>(v) : (v as any).__isVarRef === true ? (v as any).value : (v as any).__goValue === undefined ? (v as any) : $.pointerTarget<ExitCondition>(v)
		const rhs$: ExitCondition = rhs == null ? $.pointerTarget<ExitCondition>(rhs) : (rhs as any).__isVarRef === true ? (rhs as any).value : (rhs as any).__goValue === undefined ? (rhs as any) : $.pointerTarget<ExitCondition>(rhs)
		if (v == null) {
			return rhs == null
		} else {
			if (rhs == null) {
				return false
			}
		}
		if (!_I32_EqualsPtr((v$ as ExitCondition).ExpirationIntervalInSeconds, (rhs$ as ExitCondition).ExpirationIntervalInSeconds)) {
			return false
		}
		if (!_I32_EqualsPtr((v$ as ExitCondition).ShadowCount, (rhs$ as ExitCondition).ShadowCount)) {
			return false
		}

		return true
	}

	public FromWire(__goscriptParam0: wire.Value): $.GoError {
		let v: ExitCondition | $.VarRef<ExitCondition> | null = this;
		let w: $.VarRef<wire.Value> = $.varRef(__goscriptParam0)
		const v$: ExitCondition = v == null ? $.pointerTarget<ExitCondition>(v) : (v as any).__isVarRef === true ? (v as any).value : (v as any).__goValue === undefined ? (v as any) : $.pointerTarget<ExitCondition>(v)
		let err: $.GoError = null! as $.GoError

		for (let __goscriptRangeTarget0 = w.value.GetStruct().Fields, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
			let field = ((__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as wire.Field)).clone()
			switch (field.ID) {
				case 10:
				{
					if (field.Value.Type() == 8) {
						let x: $.VarRef<number> = $.varRef(0)
						let __goscriptAssign0_0: number = field.Value.GetI32()
						let __goscriptAssign0_1: $.GoError = null
						x.value = __goscriptAssign0_0
						err = __goscriptAssign0_1;
						;(v$ as ExitCondition).ExpirationIntervalInSeconds = x
						if (err != null) {
							return err
						}
					}
					break
				}
				case 20:
				{
					if (field.Value.Type() == 8) {
						let x: $.VarRef<number> = $.varRef(0)
						let __goscriptAssign1_0: number = field.Value.GetI32()
						let __goscriptAssign1_1: $.GoError = null
						x.value = __goscriptAssign1_0
						err = __goscriptAssign1_1;
						;(v$ as ExitCondition).ShadowCount = x
						if (err != null) {
							return err
						}
					}
					break
				}
			}
		}

		return null
	}

	public GetExpirationIntervalInSeconds(): number {
		const v: ExitCondition | $.VarRef<ExitCondition> | null = this;
		let o: number = 0
		const v$: ExitCondition = v == null ? $.pointerTarget<ExitCondition>(v) : (v as any).__isVarRef === true ? (v as any).value : (v as any).__goValue === undefined ? (v as any) : $.pointerTarget<ExitCondition>(v)
		if ((v != null) && ((v$ as ExitCondition).ExpirationIntervalInSeconds != null)) {
			return $.pointerValue<number>((v$ as ExitCondition).ExpirationIntervalInSeconds)
		}

		return o
	}

	public GetShadowCount(): number {
		const v: ExitCondition | $.VarRef<ExitCondition> | null = this;
		let o: number = 0
		const v$: ExitCondition = v == null ? $.pointerTarget<ExitCondition>(v) : (v as any).__isVarRef === true ? (v as any).value : (v as any).__goValue === undefined ? (v as any) : $.pointerTarget<ExitCondition>(v)
		if ((v != null) && ((v$ as ExitCondition).ShadowCount != null)) {
			return $.pointerValue<number>((v$ as ExitCondition).ShadowCount)
		}

		return o
	}

	public IsSetExpirationIntervalInSeconds(): boolean {
		const v: ExitCondition | $.VarRef<ExitCondition> | null = this;
		return (v != null) && ($.pointerValue<ExitCondition>(v).ExpirationIntervalInSeconds != null)
	}

	public IsSetShadowCount(): boolean {
		const v: ExitCondition | $.VarRef<ExitCondition> | null = this;
		return (v != null) && ($.pointerValue<ExitCondition>(v).ShadowCount != null)
	}

	public async MarshalLogObject(enc: zapcore.ObjectEncoder | null): globalThis.Promise<$.GoError> {
		const v: ExitCondition | $.VarRef<ExitCondition> | null = this;
		let err: $.GoError = null! as $.GoError
		const v$: ExitCondition = v == null ? $.pointerTarget<ExitCondition>(v) : (v as any).__isVarRef === true ? (v as any).value : (v as any).__goValue === undefined ? (v as any) : $.pointerTarget<ExitCondition>(v)
		if (v == null) {
			return null
		}
		if ((v$ as ExitCondition).ExpirationIntervalInSeconds != null) {
			void (__goscriptAwait = (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? (enc as Exclude<zapcore.ObjectEncoder, null>) : $.pointerValue<Exclude<zapcore.ObjectEncoder, null>>(enc)).AddInt32("expirationIntervalInSeconds", $.pointerValue<number>((v$ as ExitCondition).ExpirationIntervalInSeconds)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		if ((v$ as ExitCondition).ShadowCount != null) {
			void (__goscriptAwait = (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? (enc as Exclude<zapcore.ObjectEncoder, null>) : $.pointerValue<Exclude<zapcore.ObjectEncoder, null>>(enc)).AddInt32("shadowCount", $.pointerValue<number>((v$ as ExitCondition).ShadowCount)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		return err
	}

	public async String(): globalThis.Promise<string> {
		const v: ExitCondition | $.VarRef<ExitCondition> | null = this;
		const v$: ExitCondition = v == null ? $.pointerTarget<ExitCondition>(v) : (v as any).__isVarRef === true ? (v as any).value : (v as any).__goValue === undefined ? (v as any) : $.pointerTarget<ExitCondition>(v)
		if (v == null) {
			return "<nil>"
		}

		let fields: string[] = $.arrayValue(globalThis.Array.from({ length: 2 }, () => ""))
		let i = 0
		if ((v$ as ExitCondition).ExpirationIntervalInSeconds != null) {
			fields[i] = await fmt.Sprintf("ExpirationIntervalInSeconds: %v", $.basicInterfaceValue($.pointerValue<number>(((v$ as ExitCondition).ExpirationIntervalInSeconds)), "int32"))
			i++
		}
		if ((v$ as ExitCondition).ShadowCount != null) {
			fields[i] = await fmt.Sprintf("ShadowCount: %v", $.basicInterfaceValue($.pointerValue<number>(((v$ as ExitCondition).ShadowCount)), "int32"))
			i++
		}

		return fmt.Sprintf("ExitCondition{%v}", strings.Join($.goSlice(fields, undefined, i), ", "))
	}

	public ToWire(): [wire.Value, $.GoError] {
		const v: ExitCondition | $.VarRef<ExitCondition> | null = this;
		const v$: ExitCondition = v == null ? $.pointerTarget<ExitCondition>(v) : (v as any).__isVarRef === true ? (v as any).value : (v as any).__goValue === undefined ? (v as any) : $.pointerTarget<ExitCondition>(v)
		let fields: wire.Field[] = $.arrayValue(globalThis.Array.from({ length: 2 }, () => new wire.Field(undefined, true)), /* @__PURE__ */ $.arrayType("wire.Field", 2))
		let i: number = 0
		let w: wire.Value = new wire.Value(undefined, true)
		let err: $.GoError = null! as $.GoError

		if ((v$ as ExitCondition).ExpirationIntervalInSeconds != null) {
			let __goscriptAssign2_0: wire.Value = wire.NewValueI32($.pointerValue<number>(((v$ as ExitCondition).ExpirationIntervalInSeconds)))
			let __goscriptAssign2_1: $.GoError = null
			w = $.assignStruct(w, __goscriptAssign2_0)
			err = __goscriptAssign2_1
			if (err != null) {
				return [(w).clone(), err]
			}
			$.assignStruct(fields[i], new wire.Field({ID: 10, Value: w}, true))
			i++
		}
		if ((v$ as ExitCondition).ShadowCount != null) {
			let __goscriptAssign3_0: wire.Value = wire.NewValueI32($.pointerValue<number>(((v$ as ExitCondition).ShadowCount)))
			let __goscriptAssign3_1: $.GoError = null
			w = $.assignStruct(w, __goscriptAssign3_0)
			err = __goscriptAssign3_1
			if (err != null) {
				return [(w).clone(), err]
			}
			$.assignStruct(fields[i], new wire.Field({ID: 20, Value: w}, true))
			i++
		}

		return [wire.NewValueStruct(new wire.Struct({Fields: $.goSlice(fields, undefined, i)}, true)), null]
	}

	static __typeInfo = $.registerStructType(
		"shadower.ExitCondition",
		() => new ExitCondition(),
		() => [$.methodSignature("Decode", [["sr", "stream.Reader"]], ["error"], true), $.methodSignature("Encode", [["sw", "stream.Writer"]], ["error"], true), $.methodSignature("Equals", [["rhs", /* @__PURE__ */ $.pointerType("shadower.ExitCondition")]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("FromWire", [["w", "wire.Value"]], ["error"], true), $.methodSignature("GetExpirationIntervalInSeconds", [], [["o", /* @__PURE__ */ $.basicType("int32")]], true), $.methodSignature("GetShadowCount", [], [["o", /* @__PURE__ */ $.basicType("int32")]], true), $.methodSignature("IsSetExpirationIntervalInSeconds", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("IsSetShadowCount", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("MarshalLogObject", [["enc", "zapcore.ObjectEncoder"]], [["err", "error"]], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("ToWire", [], ["wire.Value", "error"], true)],
		ExitCondition,
		() => [/* @__PURE__ */ $.structField("ExpirationIntervalInSeconds", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32")), [0], 0, true, { tag: "json:\"expirationIntervalInSeconds,omitempty\"" }), /* @__PURE__ */ $.structField("ShadowCount", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32")), [1], 8, true, { tag: "json:\"shadowCount,omitempty\"" })]
	)
}

export class ReplayWorkflowActivityParams {
	public get Domain(): $.VarRef<string> | null {
		return this._fields.Domain
	}

	public set Domain(value: $.VarRef<string> | null) {
		this._fields.Domain = value
	}

	public get Executions(): $.Slice<shared.WorkflowExecution | $.VarRef<shared.WorkflowExecution> | null> {
		return this._fields.Executions
	}

	public set Executions(value: $.Slice<shared.WorkflowExecution | $.VarRef<shared.WorkflowExecution> | null>) {
		this._fields.Executions = value
	}

	public _fields: {
		Domain: $.VarRef<string> | null
		Executions: $.Slice<shared.WorkflowExecution | $.VarRef<shared.WorkflowExecution> | null>
	}

	constructor(init?: Partial<{Domain?: $.VarRef<string> | null, Executions?: $.Slice<shared.WorkflowExecution | $.VarRef<shared.WorkflowExecution> | null>}>, __goscriptValue?: boolean) {
		this._fields = {
			Domain: init?.Domain ?? (null! as $.VarRef<string> | null),
			Executions: init?.Executions ?? (null! as $.Slice<shared.WorkflowExecution | $.VarRef<shared.WorkflowExecution> | null>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ReplayWorkflowActivityParams {
		return new ReplayWorkflowActivityParams(this, true)
	}

	public __goscriptAssign(source: ReplayWorkflowActivityParams): void {
		const target = this._fields
		const values = source._fields
		target.Domain = values.Domain
		target.Executions = values.Executions
	}

	public async Decode(sr: stream.Reader | null): globalThis.Promise<$.GoError> {
		let v: ReplayWorkflowActivityParams | $.VarRef<ReplayWorkflowActivityParams> | null = this;
		const v$: ReplayWorkflowActivityParams = v == null ? $.pointerTarget<ReplayWorkflowActivityParams>(v) : (v as any).__isVarRef === true ? (v as any).value : (v as any).__goValue === undefined ? (v as any) : $.pointerTarget<ReplayWorkflowActivityParams>(v)

		{
			let err = (__goscriptAwait = (sr !== null && (sr as any).__isVarRef !== true && (sr as any).__goValue === undefined ? (sr as Exclude<stream.Reader, null>) : $.pointerValue<Exclude<stream.Reader, null>>(sr)).ReadStructBegin(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (err != null) {
				return err
			}
		}

		let [fh, ok, err] = await (sr !== null && (sr as any).__isVarRef !== true && (sr as any).__goValue === undefined ? (sr as Exclude<stream.Reader, null>) : $.pointerValue<Exclude<stream.Reader, null>>(sr)).ReadFieldBegin()
		if (err != null) {
			return err
		}

		while (ok) {
			switch ((true as boolean)) {
				case (fh.ID == 10) && (fh.Type == 11):
				{
					let x: $.VarRef<string> = $.varRef("")
					let __goscriptTuple3: any = await (sr !== null && (sr as any).__isVarRef !== true && (sr as any).__goValue === undefined ? (sr as Exclude<stream.Reader, null>) : $.pointerValue<Exclude<stream.Reader, null>>(sr)).ReadString()
					x.value = __goscriptTuple3[0]
					err = __goscriptTuple3[1];
					;(v$ as ReplayWorkflowActivityParams).Domain = x
					if (err != null) {
						return err
					}
					break
				}
				case (fh.ID == 20) && (fh.Type == 15):
				{
					let __goscriptTuple4: any = await _List_WorkflowExecution_Decode(sr);
					;(v$ as ReplayWorkflowActivityParams).Executions = __goscriptTuple4[0]
					err = __goscriptTuple4[1]
					if (err != null) {
						return err
					}
					break
				}
				default:
				{
					{
						let __goscriptShadow4 = (__goscriptAwait = (sr !== null && (sr as any).__isVarRef !== true && (sr as any).__goValue === undefined ? (sr as Exclude<stream.Reader, null>) : $.pointerValue<Exclude<stream.Reader, null>>(sr)).Skip(fh.Type), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
						if (__goscriptShadow4 != null) {
							return __goscriptShadow4
						}
					}
					break
				}
			}

			{
				let __goscriptShadow5 = (__goscriptAwait = (sr !== null && (sr as any).__isVarRef !== true && (sr as any).__goValue === undefined ? (sr as Exclude<stream.Reader, null>) : $.pointerValue<Exclude<stream.Reader, null>>(sr)).ReadFieldEnd(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (__goscriptShadow5 != null) {
					return __goscriptShadow5
				}
			}

			{
				let __goscriptTuple5: any = await (sr !== null && (sr as any).__isVarRef !== true && (sr as any).__goValue === undefined ? (sr as Exclude<stream.Reader, null>) : $.pointerValue<Exclude<stream.Reader, null>>(sr)).ReadFieldBegin()
				fh = $.assignStruct(fh, __goscriptTuple5[0])
				ok = __goscriptTuple5[1]
				err = __goscriptTuple5[2]
				if (err != null) {
					return err
				}
			}
		}

		{
			let __goscriptShadow6 = (__goscriptAwait = (sr !== null && (sr as any).__isVarRef !== true && (sr as any).__goValue === undefined ? (sr as Exclude<stream.Reader, null>) : $.pointerValue<Exclude<stream.Reader, null>>(sr)).ReadStructEnd(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (__goscriptShadow6 != null) {
				return __goscriptShadow6
			}
		}

		return null
	}

	public async Encode(sw: stream.Writer | null): globalThis.Promise<$.GoError> {
		const v: ReplayWorkflowActivityParams | $.VarRef<ReplayWorkflowActivityParams> | null = this;
		const v$: ReplayWorkflowActivityParams = v == null ? $.pointerTarget<ReplayWorkflowActivityParams>(v) : (v as any).__isVarRef === true ? (v as any).value : (v as any).__goValue === undefined ? (v as any) : $.pointerTarget<ReplayWorkflowActivityParams>(v)
		{
			let err = (__goscriptAwait = (sw !== null && (sw as any).__isVarRef !== true && (sw as any).__goValue === undefined ? (sw as Exclude<stream.Writer, null>) : $.pointerValue<Exclude<stream.Writer, null>>(sw)).WriteStructBegin(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (err != null) {
				return err
			}
		}

		if ((v$ as ReplayWorkflowActivityParams).Domain != null) {
			{
				let err = (__goscriptAwait = (sw !== null && (sw as any).__isVarRef !== true && (sw as any).__goValue === undefined ? (sw as Exclude<stream.Writer, null>) : $.pointerValue<Exclude<stream.Writer, null>>(sw)).WriteFieldBegin(new stream.FieldHeader({ID: 10, Type: 11}, true)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (err != null) {
					return err
				}
			}
			{
				let err = (__goscriptAwait = (sw !== null && (sw as any).__isVarRef !== true && (sw as any).__goValue === undefined ? (sw as Exclude<stream.Writer, null>) : $.pointerValue<Exclude<stream.Writer, null>>(sw)).WriteString($.pointerValue<string>(((v$ as ReplayWorkflowActivityParams).Domain))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (err != null) {
					return err
				}
			}
			{
				let err = (__goscriptAwait = (sw !== null && (sw as any).__isVarRef !== true && (sw as any).__goValue === undefined ? (sw as Exclude<stream.Writer, null>) : $.pointerValue<Exclude<stream.Writer, null>>(sw)).WriteFieldEnd(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (err != null) {
					return err
				}
			}
		}

		if ((v$ as ReplayWorkflowActivityParams).Executions != null) {
			{
				let err = (__goscriptAwait = (sw !== null && (sw as any).__isVarRef !== true && (sw as any).__goValue === undefined ? (sw as Exclude<stream.Writer, null>) : $.pointerValue<Exclude<stream.Writer, null>>(sw)).WriteFieldBegin(new stream.FieldHeader({ID: 20, Type: 15}, true)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (err != null) {
					return err
				}
			}
			{
				let err = await _List_WorkflowExecution_Encode((v$ as ReplayWorkflowActivityParams).Executions, sw)
				if (err != null) {
					return err
				}
			}
			{
				let err = (__goscriptAwait = (sw !== null && (sw as any).__isVarRef !== true && (sw as any).__goValue === undefined ? (sw as Exclude<stream.Writer, null>) : $.pointerValue<Exclude<stream.Writer, null>>(sw)).WriteFieldEnd(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (err != null) {
					return err
				}
			}
		}

		return (sw !== null && (sw as any).__isVarRef !== true && (sw as any).__goValue === undefined ? (sw as Exclude<stream.Writer, null>) : $.pointerValue<Exclude<stream.Writer, null>>(sw)).WriteStructEnd()
	}

	public Equals(rhs: ReplayWorkflowActivityParams | $.VarRef<ReplayWorkflowActivityParams> | null): boolean {
		const v: ReplayWorkflowActivityParams | $.VarRef<ReplayWorkflowActivityParams> | null = this;
		const v$: ReplayWorkflowActivityParams = v == null ? $.pointerTarget<ReplayWorkflowActivityParams>(v) : (v as any).__isVarRef === true ? (v as any).value : (v as any).__goValue === undefined ? (v as any) : $.pointerTarget<ReplayWorkflowActivityParams>(v)
		const rhs$: ReplayWorkflowActivityParams = rhs == null ? $.pointerTarget<ReplayWorkflowActivityParams>(rhs) : (rhs as any).__isVarRef === true ? (rhs as any).value : (rhs as any).__goValue === undefined ? (rhs as any) : $.pointerTarget<ReplayWorkflowActivityParams>(rhs)
		if (v == null) {
			return rhs == null
		} else {
			if (rhs == null) {
				return false
			}
		}
		if (!_String_EqualsPtr((v$ as ReplayWorkflowActivityParams).Domain, (rhs$ as ReplayWorkflowActivityParams).Domain)) {
			return false
		}
		if (!((((v$ as ReplayWorkflowActivityParams).Executions == null) && ((rhs$ as ReplayWorkflowActivityParams).Executions == null)) || ((((v$ as ReplayWorkflowActivityParams).Executions != null) && ((rhs$ as ReplayWorkflowActivityParams).Executions != null)) && _List_WorkflowExecution_Equals((v$ as ReplayWorkflowActivityParams).Executions, (rhs$ as ReplayWorkflowActivityParams).Executions)))) {
			return false
		}

		return true
	}

	public async FromWire(__goscriptParam2: wire.Value): globalThis.Promise<$.GoError> {
		let v: ReplayWorkflowActivityParams | $.VarRef<ReplayWorkflowActivityParams> | null = this;
		let w: $.VarRef<wire.Value> = $.varRef(__goscriptParam2)
		const v$: ReplayWorkflowActivityParams = v == null ? $.pointerTarget<ReplayWorkflowActivityParams>(v) : (v as any).__isVarRef === true ? (v as any).value : (v as any).__goValue === undefined ? (v as any) : $.pointerTarget<ReplayWorkflowActivityParams>(v)
		let err: $.GoError = null! as $.GoError

		for (let __goscriptRangeTarget1 = w.value.GetStruct().Fields, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
			let field = ((__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as wire.Field)).clone()
			switch (field.ID) {
				case 10:
				{
					if (field.Value.Type() == 11) {
						let x: $.VarRef<string> = $.varRef("")
						let __goscriptAssign4_0: string = field.Value.GetString()
						let __goscriptAssign4_1: $.GoError = null
						x.value = __goscriptAssign4_0
						err = __goscriptAssign4_1;
						;(v$ as ReplayWorkflowActivityParams).Domain = x
						if (err != null) {
							return err
						}
					}
					break
				}
				case 20:
				{
					if (field.Value.Type() == 15) {
						let __goscriptTuple6: any = await _List_WorkflowExecution_Read(field.Value.GetList());
						;(v$ as ReplayWorkflowActivityParams).Executions = __goscriptTuple6[0]
						err = __goscriptTuple6[1]
						if (err != null) {
							return err
						}
					}
					break
				}
			}
		}

		return null
	}

	public GetDomain(): string {
		const v: ReplayWorkflowActivityParams | $.VarRef<ReplayWorkflowActivityParams> | null = this;
		let o: string = ""
		const v$: ReplayWorkflowActivityParams = v == null ? $.pointerTarget<ReplayWorkflowActivityParams>(v) : (v as any).__isVarRef === true ? (v as any).value : (v as any).__goValue === undefined ? (v as any) : $.pointerTarget<ReplayWorkflowActivityParams>(v)
		if ((v != null) && ((v$ as ReplayWorkflowActivityParams).Domain != null)) {
			return $.pointerValue<string>((v$ as ReplayWorkflowActivityParams).Domain)
		}

		return o
	}

	public GetExecutions(): $.Slice<shared.WorkflowExecution | $.VarRef<shared.WorkflowExecution> | null> {
		const v: ReplayWorkflowActivityParams | $.VarRef<ReplayWorkflowActivityParams> | null = this;
		let o: $.Slice<shared.WorkflowExecution | $.VarRef<shared.WorkflowExecution> | null> = null! as $.Slice<shared.WorkflowExecution | $.VarRef<shared.WorkflowExecution> | null>
		const v$: ReplayWorkflowActivityParams = v == null ? $.pointerTarget<ReplayWorkflowActivityParams>(v) : (v as any).__isVarRef === true ? (v as any).value : (v as any).__goValue === undefined ? (v as any) : $.pointerTarget<ReplayWorkflowActivityParams>(v)
		if ((v != null) && ((v$ as ReplayWorkflowActivityParams).Executions != null)) {
			return (v$ as ReplayWorkflowActivityParams).Executions
		}

		return o
	}

	public IsSetDomain(): boolean {
		const v: ReplayWorkflowActivityParams | $.VarRef<ReplayWorkflowActivityParams> | null = this;
		return (v != null) && ($.pointerValue<ReplayWorkflowActivityParams>(v).Domain != null)
	}

	public IsSetExecutions(): boolean {
		const v: ReplayWorkflowActivityParams | $.VarRef<ReplayWorkflowActivityParams> | null = this;
		return (v != null) && ($.pointerValue<ReplayWorkflowActivityParams>(v).Executions != null)
	}

	public async MarshalLogObject(enc: zapcore.ObjectEncoder | null): globalThis.Promise<$.GoError> {
		const v: ReplayWorkflowActivityParams | $.VarRef<ReplayWorkflowActivityParams> | null = this;
		let err: $.GoError = null! as $.GoError
		const v$: ReplayWorkflowActivityParams = v == null ? $.pointerTarget<ReplayWorkflowActivityParams>(v) : (v as any).__isVarRef === true ? (v as any).value : (v as any).__goValue === undefined ? (v as any) : $.pointerTarget<ReplayWorkflowActivityParams>(v)
		if (v == null) {
			return null
		}
		if ((v$ as ReplayWorkflowActivityParams).Domain != null) {
			void (__goscriptAwait = (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? (enc as Exclude<zapcore.ObjectEncoder, null>) : $.pointerValue<Exclude<zapcore.ObjectEncoder, null>>(enc)).AddString("domain", $.pointerValue<string>((v$ as ReplayWorkflowActivityParams).Domain)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		if ((v$ as ReplayWorkflowActivityParams).Executions != null) {
			err = multierr.Append(err, (__goscriptAwait = (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? (enc as Exclude<zapcore.ObjectEncoder, null>) : $.pointerValue<Exclude<zapcore.ObjectEncoder, null>>(enc)).AddArray("executions", $.namedValueInterfaceValue<zapcore.ArrayMarshaler | null>(((v$ as ReplayWorkflowActivityParams).Executions as _List_WorkflowExecution_Zapper), "shadower._List_WorkflowExecution_Zapper", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
		}
		return err
	}

	public async String(): globalThis.Promise<string> {
		const v: ReplayWorkflowActivityParams | $.VarRef<ReplayWorkflowActivityParams> | null = this;
		const v$: ReplayWorkflowActivityParams = v == null ? $.pointerTarget<ReplayWorkflowActivityParams>(v) : (v as any).__isVarRef === true ? (v as any).value : (v as any).__goValue === undefined ? (v as any) : $.pointerTarget<ReplayWorkflowActivityParams>(v)
		if (v == null) {
			return "<nil>"
		}

		let fields: string[] = $.arrayValue(globalThis.Array.from({ length: 2 }, () => ""))
		let i = 0
		if ((v$ as ReplayWorkflowActivityParams).Domain != null) {
			fields[i] = await fmt.Sprintf("Domain: %v", $.pointerValue<string>(((v$ as ReplayWorkflowActivityParams).Domain)))
			i++
		}
		if ((v$ as ReplayWorkflowActivityParams).Executions != null) {
			fields[i] = await fmt.Sprintf("Executions: %v", $.interfaceValue((v$ as ReplayWorkflowActivityParams).Executions, "[]*shared.WorkflowExecution", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("shared.WorkflowExecution"))))
			i++
		}

		return fmt.Sprintf("ReplayWorkflowActivityParams{%v}", strings.Join($.goSlice(fields, undefined, i), ", "))
	}

	public ToWire(): [wire.Value, $.GoError] {
		const v: ReplayWorkflowActivityParams | $.VarRef<ReplayWorkflowActivityParams> | null = this;
		const v$: ReplayWorkflowActivityParams = v == null ? $.pointerTarget<ReplayWorkflowActivityParams>(v) : (v as any).__isVarRef === true ? (v as any).value : (v as any).__goValue === undefined ? (v as any) : $.pointerTarget<ReplayWorkflowActivityParams>(v)
		let fields: wire.Field[] = $.arrayValue(globalThis.Array.from({ length: 2 }, () => new wire.Field(undefined, true)), /* @__PURE__ */ $.arrayType("wire.Field", 2))
		let i: number = 0
		let w: wire.Value = new wire.Value(undefined, true)
		let err: $.GoError = null! as $.GoError

		if ((v$ as ReplayWorkflowActivityParams).Domain != null) {
			let __goscriptAssign5_0: wire.Value = wire.NewValueString($.pointerValue<string>(((v$ as ReplayWorkflowActivityParams).Domain)))
			let __goscriptAssign5_1: $.GoError = null
			w = $.assignStruct(w, __goscriptAssign5_0)
			err = __goscriptAssign5_1
			if (err != null) {
				return [(w).clone(), err]
			}
			$.assignStruct(fields[i], new wire.Field({ID: 10, Value: w}, true))
			i++
		}
		if ((v$ as ReplayWorkflowActivityParams).Executions != null) {
			let __goscriptAssign6_0: wire.Value = wire.NewValueList($.namedValueInterfaceValue<wire.ValueList | null>(((v$ as ReplayWorkflowActivityParams).Executions as _List_WorkflowExecution_ValueList), "shadower._List_WorkflowExecution_ValueList", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic5()))
			let __goscriptAssign6_1: $.GoError = null
			w = $.assignStruct(w, __goscriptAssign6_0)
			err = __goscriptAssign6_1
			if (err != null) {
				return [(w).clone(), err]
			}
			$.assignStruct(fields[i], new wire.Field({ID: 20, Value: w}, true))
			i++
		}

		return [wire.NewValueStruct(new wire.Struct({Fields: $.goSlice(fields, undefined, i)}, true)), null]
	}

	static __typeInfo = $.registerStructType(
		"shadower.ReplayWorkflowActivityParams",
		() => new ReplayWorkflowActivityParams(),
		() => [$.methodSignature("Decode", [["sr", "stream.Reader"]], ["error"], true), $.methodSignature("Encode", [["sw", "stream.Writer"]], ["error"], true), $.methodSignature("Equals", [["rhs", /* @__PURE__ */ $.pointerType("shadower.ReplayWorkflowActivityParams")]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("FromWire", [["w", "wire.Value"]], ["error"], true), $.methodSignature("GetDomain", [], [["o", /* @__PURE__ */ $.basicType("string")]], true), $.methodSignature("GetExecutions", [], [["o", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("shared.WorkflowExecution"))]], true), $.methodSignature("IsSetDomain", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("IsSetExecutions", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("MarshalLogObject", [["enc", "zapcore.ObjectEncoder"]], [["err", "error"]], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("ToWire", [], ["wire.Value", "error"], true)],
		ReplayWorkflowActivityParams,
		() => [/* @__PURE__ */ $.structField("Domain", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("string")), [0], 0, true, { tag: "json:\"domain,omitempty\"" }), /* @__PURE__ */ $.structField("Executions", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("shared.WorkflowExecution")), [1], 8, true, { tag: "json:\"executions,omitempty\"" })]
	)
}

export class ReplayWorkflowActivityResult {
	public get Succeeded(): $.VarRef<number> | null {
		return this._fields.Succeeded
	}

	public set Succeeded(value: $.VarRef<number> | null) {
		this._fields.Succeeded = value
	}

	public get Skipped(): $.VarRef<number> | null {
		return this._fields.Skipped
	}

	public set Skipped(value: $.VarRef<number> | null) {
		this._fields.Skipped = value
	}

	public get Failed(): $.VarRef<number> | null {
		return this._fields.Failed
	}

	public set Failed(value: $.VarRef<number> | null) {
		this._fields.Failed = value
	}

	public _fields: {
		Succeeded: $.VarRef<number> | null
		Skipped: $.VarRef<number> | null
		Failed: $.VarRef<number> | null
	}

	constructor(init?: Partial<{Succeeded?: $.VarRef<number> | null, Skipped?: $.VarRef<number> | null, Failed?: $.VarRef<number> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Succeeded: init?.Succeeded ?? (null! as $.VarRef<number> | null),
			Skipped: init?.Skipped ?? (null! as $.VarRef<number> | null),
			Failed: init?.Failed ?? (null! as $.VarRef<number> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ReplayWorkflowActivityResult {
		return new ReplayWorkflowActivityResult(this, true)
	}

	public __goscriptAssign(source: ReplayWorkflowActivityResult): void {
		const target = this._fields
		const values = source._fields
		target.Succeeded = values.Succeeded
		target.Skipped = values.Skipped
		target.Failed = values.Failed
	}

	public async Decode(sr: stream.Reader | null): globalThis.Promise<$.GoError> {
		let v: ReplayWorkflowActivityResult | $.VarRef<ReplayWorkflowActivityResult> | null = this;
		const v$: ReplayWorkflowActivityResult = v == null ? $.pointerTarget<ReplayWorkflowActivityResult>(v) : (v as any).__isVarRef === true ? (v as any).value : (v as any).__goValue === undefined ? (v as any) : $.pointerTarget<ReplayWorkflowActivityResult>(v)

		{
			let err = (__goscriptAwait = (sr !== null && (sr as any).__isVarRef !== true && (sr as any).__goValue === undefined ? (sr as Exclude<stream.Reader, null>) : $.pointerValue<Exclude<stream.Reader, null>>(sr)).ReadStructBegin(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (err != null) {
				return err
			}
		}

		let [fh, ok, err] = await (sr !== null && (sr as any).__isVarRef !== true && (sr as any).__goValue === undefined ? (sr as Exclude<stream.Reader, null>) : $.pointerValue<Exclude<stream.Reader, null>>(sr)).ReadFieldBegin()
		if (err != null) {
			return err
		}

		while (ok) {
			switch ((true as boolean)) {
				case (fh.ID == 10) && (fh.Type == 8):
				{
					let x: $.VarRef<number> = $.varRef(0)
					let __goscriptTuple9: any = await (sr !== null && (sr as any).__isVarRef !== true && (sr as any).__goValue === undefined ? (sr as Exclude<stream.Reader, null>) : $.pointerValue<Exclude<stream.Reader, null>>(sr)).ReadInt32()
					x.value = __goscriptTuple9[0]
					err = __goscriptTuple9[1];
					;(v$ as ReplayWorkflowActivityResult).Succeeded = x
					if (err != null) {
						return err
					}
					break
				}
				case (fh.ID == 20) && (fh.Type == 8):
				{
					let x: $.VarRef<number> = $.varRef(0)
					let __goscriptTuple10: any = await (sr !== null && (sr as any).__isVarRef !== true && (sr as any).__goValue === undefined ? (sr as Exclude<stream.Reader, null>) : $.pointerValue<Exclude<stream.Reader, null>>(sr)).ReadInt32()
					x.value = __goscriptTuple10[0]
					err = __goscriptTuple10[1];
					;(v$ as ReplayWorkflowActivityResult).Skipped = x
					if (err != null) {
						return err
					}
					break
				}
				case (fh.ID == 30) && (fh.Type == 8):
				{
					let x: $.VarRef<number> = $.varRef(0)
					let __goscriptTuple11: any = await (sr !== null && (sr as any).__isVarRef !== true && (sr as any).__goValue === undefined ? (sr as Exclude<stream.Reader, null>) : $.pointerValue<Exclude<stream.Reader, null>>(sr)).ReadInt32()
					x.value = __goscriptTuple11[0]
					err = __goscriptTuple11[1];
					;(v$ as ReplayWorkflowActivityResult).Failed = x
					if (err != null) {
						return err
					}
					break
				}
				default:
				{
					{
						let __goscriptShadow10 = (__goscriptAwait = (sr !== null && (sr as any).__isVarRef !== true && (sr as any).__goValue === undefined ? (sr as Exclude<stream.Reader, null>) : $.pointerValue<Exclude<stream.Reader, null>>(sr)).Skip(fh.Type), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
						if (__goscriptShadow10 != null) {
							return __goscriptShadow10
						}
					}
					break
				}
			}

			{
				let __goscriptShadow11 = (__goscriptAwait = (sr !== null && (sr as any).__isVarRef !== true && (sr as any).__goValue === undefined ? (sr as Exclude<stream.Reader, null>) : $.pointerValue<Exclude<stream.Reader, null>>(sr)).ReadFieldEnd(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (__goscriptShadow11 != null) {
					return __goscriptShadow11
				}
			}

			{
				let __goscriptTuple12: any = await (sr !== null && (sr as any).__isVarRef !== true && (sr as any).__goValue === undefined ? (sr as Exclude<stream.Reader, null>) : $.pointerValue<Exclude<stream.Reader, null>>(sr)).ReadFieldBegin()
				fh = $.assignStruct(fh, __goscriptTuple12[0])
				ok = __goscriptTuple12[1]
				err = __goscriptTuple12[2]
				if (err != null) {
					return err
				}
			}
		}

		{
			let __goscriptShadow12 = (__goscriptAwait = (sr !== null && (sr as any).__isVarRef !== true && (sr as any).__goValue === undefined ? (sr as Exclude<stream.Reader, null>) : $.pointerValue<Exclude<stream.Reader, null>>(sr)).ReadStructEnd(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (__goscriptShadow12 != null) {
				return __goscriptShadow12
			}
		}

		return null
	}

	public async Encode(sw: stream.Writer | null): globalThis.Promise<$.GoError> {
		const v: ReplayWorkflowActivityResult | $.VarRef<ReplayWorkflowActivityResult> | null = this;
		const v$: ReplayWorkflowActivityResult = v == null ? $.pointerTarget<ReplayWorkflowActivityResult>(v) : (v as any).__isVarRef === true ? (v as any).value : (v as any).__goValue === undefined ? (v as any) : $.pointerTarget<ReplayWorkflowActivityResult>(v)
		{
			let err = (__goscriptAwait = (sw !== null && (sw as any).__isVarRef !== true && (sw as any).__goValue === undefined ? (sw as Exclude<stream.Writer, null>) : $.pointerValue<Exclude<stream.Writer, null>>(sw)).WriteStructBegin(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (err != null) {
				return err
			}
		}

		if ((v$ as ReplayWorkflowActivityResult).Succeeded != null) {
			{
				let err = (__goscriptAwait = (sw !== null && (sw as any).__isVarRef !== true && (sw as any).__goValue === undefined ? (sw as Exclude<stream.Writer, null>) : $.pointerValue<Exclude<stream.Writer, null>>(sw)).WriteFieldBegin(new stream.FieldHeader({ID: 10, Type: 8}, true)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (err != null) {
					return err
				}
			}
			{
				let err = (__goscriptAwait = (sw !== null && (sw as any).__isVarRef !== true && (sw as any).__goValue === undefined ? (sw as Exclude<stream.Writer, null>) : $.pointerValue<Exclude<stream.Writer, null>>(sw)).WriteInt32($.pointerValue<number>(((v$ as ReplayWorkflowActivityResult).Succeeded))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (err != null) {
					return err
				}
			}
			{
				let err = (__goscriptAwait = (sw !== null && (sw as any).__isVarRef !== true && (sw as any).__goValue === undefined ? (sw as Exclude<stream.Writer, null>) : $.pointerValue<Exclude<stream.Writer, null>>(sw)).WriteFieldEnd(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (err != null) {
					return err
				}
			}
		}

		if ((v$ as ReplayWorkflowActivityResult).Skipped != null) {
			{
				let err = (__goscriptAwait = (sw !== null && (sw as any).__isVarRef !== true && (sw as any).__goValue === undefined ? (sw as Exclude<stream.Writer, null>) : $.pointerValue<Exclude<stream.Writer, null>>(sw)).WriteFieldBegin(new stream.FieldHeader({ID: 20, Type: 8}, true)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (err != null) {
					return err
				}
			}
			{
				let err = (__goscriptAwait = (sw !== null && (sw as any).__isVarRef !== true && (sw as any).__goValue === undefined ? (sw as Exclude<stream.Writer, null>) : $.pointerValue<Exclude<stream.Writer, null>>(sw)).WriteInt32($.pointerValue<number>(((v$ as ReplayWorkflowActivityResult).Skipped))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (err != null) {
					return err
				}
			}
			{
				let err = (__goscriptAwait = (sw !== null && (sw as any).__isVarRef !== true && (sw as any).__goValue === undefined ? (sw as Exclude<stream.Writer, null>) : $.pointerValue<Exclude<stream.Writer, null>>(sw)).WriteFieldEnd(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (err != null) {
					return err
				}
			}
		}

		if ((v$ as ReplayWorkflowActivityResult).Failed != null) {
			{
				let err = (__goscriptAwait = (sw !== null && (sw as any).__isVarRef !== true && (sw as any).__goValue === undefined ? (sw as Exclude<stream.Writer, null>) : $.pointerValue<Exclude<stream.Writer, null>>(sw)).WriteFieldBegin(new stream.FieldHeader({ID: 30, Type: 8}, true)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (err != null) {
					return err
				}
			}
			{
				let err = (__goscriptAwait = (sw !== null && (sw as any).__isVarRef !== true && (sw as any).__goValue === undefined ? (sw as Exclude<stream.Writer, null>) : $.pointerValue<Exclude<stream.Writer, null>>(sw)).WriteInt32($.pointerValue<number>(((v$ as ReplayWorkflowActivityResult).Failed))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (err != null) {
					return err
				}
			}
			{
				let err = (__goscriptAwait = (sw !== null && (sw as any).__isVarRef !== true && (sw as any).__goValue === undefined ? (sw as Exclude<stream.Writer, null>) : $.pointerValue<Exclude<stream.Writer, null>>(sw)).WriteFieldEnd(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (err != null) {
					return err
				}
			}
		}

		return (sw !== null && (sw as any).__isVarRef !== true && (sw as any).__goValue === undefined ? (sw as Exclude<stream.Writer, null>) : $.pointerValue<Exclude<stream.Writer, null>>(sw)).WriteStructEnd()
	}

	public Equals(rhs: ReplayWorkflowActivityResult | $.VarRef<ReplayWorkflowActivityResult> | null): boolean {
		const v: ReplayWorkflowActivityResult | $.VarRef<ReplayWorkflowActivityResult> | null = this;
		const v$: ReplayWorkflowActivityResult = v == null ? $.pointerTarget<ReplayWorkflowActivityResult>(v) : (v as any).__isVarRef === true ? (v as any).value : (v as any).__goValue === undefined ? (v as any) : $.pointerTarget<ReplayWorkflowActivityResult>(v)
		const rhs$: ReplayWorkflowActivityResult = rhs == null ? $.pointerTarget<ReplayWorkflowActivityResult>(rhs) : (rhs as any).__isVarRef === true ? (rhs as any).value : (rhs as any).__goValue === undefined ? (rhs as any) : $.pointerTarget<ReplayWorkflowActivityResult>(rhs)
		if (v == null) {
			return rhs == null
		} else {
			if (rhs == null) {
				return false
			}
		}
		if (!_I32_EqualsPtr((v$ as ReplayWorkflowActivityResult).Succeeded, (rhs$ as ReplayWorkflowActivityResult).Succeeded)) {
			return false
		}
		if (!_I32_EqualsPtr((v$ as ReplayWorkflowActivityResult).Skipped, (rhs$ as ReplayWorkflowActivityResult).Skipped)) {
			return false
		}
		if (!_I32_EqualsPtr((v$ as ReplayWorkflowActivityResult).Failed, (rhs$ as ReplayWorkflowActivityResult).Failed)) {
			return false
		}

		return true
	}

	public FromWire(__goscriptParam3: wire.Value): $.GoError {
		let v: ReplayWorkflowActivityResult | $.VarRef<ReplayWorkflowActivityResult> | null = this;
		let w: $.VarRef<wire.Value> = $.varRef(__goscriptParam3)
		const v$: ReplayWorkflowActivityResult = v == null ? $.pointerTarget<ReplayWorkflowActivityResult>(v) : (v as any).__isVarRef === true ? (v as any).value : (v as any).__goValue === undefined ? (v as any) : $.pointerTarget<ReplayWorkflowActivityResult>(v)
		let err: $.GoError = null! as $.GoError

		for (let __goscriptRangeTarget6 = w.value.GetStruct().Fields, __goscriptRangeWindow6 = $.sliceRange(__goscriptRangeTarget6), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow6.length; __rangeIndex++) {
			let field = ((__goscriptRangeWindow6.backing[__goscriptRangeWindow6.offset + __rangeIndex] as wire.Field)).clone()
			switch (field.ID) {
				case 10:
				{
					if (field.Value.Type() == 8) {
						let x: $.VarRef<number> = $.varRef(0)
						let __goscriptAssign7_0: number = field.Value.GetI32()
						let __goscriptAssign7_1: $.GoError = null
						x.value = __goscriptAssign7_0
						err = __goscriptAssign7_1;
						;(v$ as ReplayWorkflowActivityResult).Succeeded = x
						if (err != null) {
							return err
						}
					}
					break
				}
				case 20:
				{
					if (field.Value.Type() == 8) {
						let x: $.VarRef<number> = $.varRef(0)
						let __goscriptAssign8_0: number = field.Value.GetI32()
						let __goscriptAssign8_1: $.GoError = null
						x.value = __goscriptAssign8_0
						err = __goscriptAssign8_1;
						;(v$ as ReplayWorkflowActivityResult).Skipped = x
						if (err != null) {
							return err
						}
					}
					break
				}
				case 30:
				{
					if (field.Value.Type() == 8) {
						let x: $.VarRef<number> = $.varRef(0)
						let __goscriptAssign9_0: number = field.Value.GetI32()
						let __goscriptAssign9_1: $.GoError = null
						x.value = __goscriptAssign9_0
						err = __goscriptAssign9_1;
						;(v$ as ReplayWorkflowActivityResult).Failed = x
						if (err != null) {
							return err
						}
					}
					break
				}
			}
		}

		return null
	}

	public GetFailed(): number {
		const v: ReplayWorkflowActivityResult | $.VarRef<ReplayWorkflowActivityResult> | null = this;
		let o: number = 0
		const v$: ReplayWorkflowActivityResult = v == null ? $.pointerTarget<ReplayWorkflowActivityResult>(v) : (v as any).__isVarRef === true ? (v as any).value : (v as any).__goValue === undefined ? (v as any) : $.pointerTarget<ReplayWorkflowActivityResult>(v)
		if ((v != null) && ((v$ as ReplayWorkflowActivityResult).Failed != null)) {
			return $.pointerValue<number>((v$ as ReplayWorkflowActivityResult).Failed)
		}

		return o
	}

	public GetSkipped(): number {
		const v: ReplayWorkflowActivityResult | $.VarRef<ReplayWorkflowActivityResult> | null = this;
		let o: number = 0
		const v$: ReplayWorkflowActivityResult = v == null ? $.pointerTarget<ReplayWorkflowActivityResult>(v) : (v as any).__isVarRef === true ? (v as any).value : (v as any).__goValue === undefined ? (v as any) : $.pointerTarget<ReplayWorkflowActivityResult>(v)
		if ((v != null) && ((v$ as ReplayWorkflowActivityResult).Skipped != null)) {
			return $.pointerValue<number>((v$ as ReplayWorkflowActivityResult).Skipped)
		}

		return o
	}

	public GetSucceeded(): number {
		const v: ReplayWorkflowActivityResult | $.VarRef<ReplayWorkflowActivityResult> | null = this;
		let o: number = 0
		const v$: ReplayWorkflowActivityResult = v == null ? $.pointerTarget<ReplayWorkflowActivityResult>(v) : (v as any).__isVarRef === true ? (v as any).value : (v as any).__goValue === undefined ? (v as any) : $.pointerTarget<ReplayWorkflowActivityResult>(v)
		if ((v != null) && ((v$ as ReplayWorkflowActivityResult).Succeeded != null)) {
			return $.pointerValue<number>((v$ as ReplayWorkflowActivityResult).Succeeded)
		}

		return o
	}

	public IsSetFailed(): boolean {
		const v: ReplayWorkflowActivityResult | $.VarRef<ReplayWorkflowActivityResult> | null = this;
		return (v != null) && ($.pointerValue<ReplayWorkflowActivityResult>(v).Failed != null)
	}

	public IsSetSkipped(): boolean {
		const v: ReplayWorkflowActivityResult | $.VarRef<ReplayWorkflowActivityResult> | null = this;
		return (v != null) && ($.pointerValue<ReplayWorkflowActivityResult>(v).Skipped != null)
	}

	public IsSetSucceeded(): boolean {
		const v: ReplayWorkflowActivityResult | $.VarRef<ReplayWorkflowActivityResult> | null = this;
		return (v != null) && ($.pointerValue<ReplayWorkflowActivityResult>(v).Succeeded != null)
	}

	public async MarshalLogObject(enc: zapcore.ObjectEncoder | null): globalThis.Promise<$.GoError> {
		const v: ReplayWorkflowActivityResult | $.VarRef<ReplayWorkflowActivityResult> | null = this;
		let err: $.GoError = null! as $.GoError
		const v$: ReplayWorkflowActivityResult = v == null ? $.pointerTarget<ReplayWorkflowActivityResult>(v) : (v as any).__isVarRef === true ? (v as any).value : (v as any).__goValue === undefined ? (v as any) : $.pointerTarget<ReplayWorkflowActivityResult>(v)
		if (v == null) {
			return null
		}
		if ((v$ as ReplayWorkflowActivityResult).Succeeded != null) {
			void (__goscriptAwait = (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? (enc as Exclude<zapcore.ObjectEncoder, null>) : $.pointerValue<Exclude<zapcore.ObjectEncoder, null>>(enc)).AddInt32("succeeded", $.pointerValue<number>((v$ as ReplayWorkflowActivityResult).Succeeded)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		if ((v$ as ReplayWorkflowActivityResult).Skipped != null) {
			void (__goscriptAwait = (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? (enc as Exclude<zapcore.ObjectEncoder, null>) : $.pointerValue<Exclude<zapcore.ObjectEncoder, null>>(enc)).AddInt32("skipped", $.pointerValue<number>((v$ as ReplayWorkflowActivityResult).Skipped)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		if ((v$ as ReplayWorkflowActivityResult).Failed != null) {
			void (__goscriptAwait = (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? (enc as Exclude<zapcore.ObjectEncoder, null>) : $.pointerValue<Exclude<zapcore.ObjectEncoder, null>>(enc)).AddInt32("failed", $.pointerValue<number>((v$ as ReplayWorkflowActivityResult).Failed)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		return err
	}

	public async String(): globalThis.Promise<string> {
		const v: ReplayWorkflowActivityResult | $.VarRef<ReplayWorkflowActivityResult> | null = this;
		const v$: ReplayWorkflowActivityResult = v == null ? $.pointerTarget<ReplayWorkflowActivityResult>(v) : (v as any).__isVarRef === true ? (v as any).value : (v as any).__goValue === undefined ? (v as any) : $.pointerTarget<ReplayWorkflowActivityResult>(v)
		if (v == null) {
			return "<nil>"
		}

		let fields: string[] = $.arrayValue(globalThis.Array.from({ length: 3 }, () => ""))
		let i = 0
		if ((v$ as ReplayWorkflowActivityResult).Succeeded != null) {
			fields[i] = await fmt.Sprintf("Succeeded: %v", $.basicInterfaceValue($.pointerValue<number>(((v$ as ReplayWorkflowActivityResult).Succeeded)), "int32"))
			i++
		}
		if ((v$ as ReplayWorkflowActivityResult).Skipped != null) {
			fields[i] = await fmt.Sprintf("Skipped: %v", $.basicInterfaceValue($.pointerValue<number>(((v$ as ReplayWorkflowActivityResult).Skipped)), "int32"))
			i++
		}
		if ((v$ as ReplayWorkflowActivityResult).Failed != null) {
			fields[i] = await fmt.Sprintf("Failed: %v", $.basicInterfaceValue($.pointerValue<number>(((v$ as ReplayWorkflowActivityResult).Failed)), "int32"))
			i++
		}

		return fmt.Sprintf("ReplayWorkflowActivityResult{%v}", strings.Join($.goSlice(fields, undefined, i), ", "))
	}

	public ToWire(): [wire.Value, $.GoError] {
		const v: ReplayWorkflowActivityResult | $.VarRef<ReplayWorkflowActivityResult> | null = this;
		const v$: ReplayWorkflowActivityResult = v == null ? $.pointerTarget<ReplayWorkflowActivityResult>(v) : (v as any).__isVarRef === true ? (v as any).value : (v as any).__goValue === undefined ? (v as any) : $.pointerTarget<ReplayWorkflowActivityResult>(v)
		let fields: wire.Field[] = $.arrayValue(globalThis.Array.from({ length: 3 }, () => new wire.Field(undefined, true)), /* @__PURE__ */ $.arrayType("wire.Field", 3))
		let i: number = 0
		let w: wire.Value = new wire.Value(undefined, true)
		let err: $.GoError = null! as $.GoError

		if ((v$ as ReplayWorkflowActivityResult).Succeeded != null) {
			let __goscriptAssign10_0: wire.Value = wire.NewValueI32($.pointerValue<number>(((v$ as ReplayWorkflowActivityResult).Succeeded)))
			let __goscriptAssign10_1: $.GoError = null
			w = $.assignStruct(w, __goscriptAssign10_0)
			err = __goscriptAssign10_1
			if (err != null) {
				return [(w).clone(), err]
			}
			$.assignStruct(fields[i], new wire.Field({ID: 10, Value: w}, true))
			i++
		}
		if ((v$ as ReplayWorkflowActivityResult).Skipped != null) {
			let __goscriptAssign11_0: wire.Value = wire.NewValueI32($.pointerValue<number>(((v$ as ReplayWorkflowActivityResult).Skipped)))
			let __goscriptAssign11_1: $.GoError = null
			w = $.assignStruct(w, __goscriptAssign11_0)
			err = __goscriptAssign11_1
			if (err != null) {
				return [(w).clone(), err]
			}
			$.assignStruct(fields[i], new wire.Field({ID: 20, Value: w}, true))
			i++
		}
		if ((v$ as ReplayWorkflowActivityResult).Failed != null) {
			let __goscriptAssign12_0: wire.Value = wire.NewValueI32($.pointerValue<number>(((v$ as ReplayWorkflowActivityResult).Failed)))
			let __goscriptAssign12_1: $.GoError = null
			w = $.assignStruct(w, __goscriptAssign12_0)
			err = __goscriptAssign12_1
			if (err != null) {
				return [(w).clone(), err]
			}
			$.assignStruct(fields[i], new wire.Field({ID: 30, Value: w}, true))
			i++
		}

		return [wire.NewValueStruct(new wire.Struct({Fields: $.goSlice(fields, undefined, i)}, true)), null]
	}

	static __typeInfo = $.registerStructType(
		"shadower.ReplayWorkflowActivityResult",
		() => new ReplayWorkflowActivityResult(),
		() => [$.methodSignature("Decode", [["sr", "stream.Reader"]], ["error"], true), $.methodSignature("Encode", [["sw", "stream.Writer"]], ["error"], true), $.methodSignature("Equals", [["rhs", /* @__PURE__ */ $.pointerType("shadower.ReplayWorkflowActivityResult")]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("FromWire", [["w", "wire.Value"]], ["error"], true), $.methodSignature("GetFailed", [], [["o", /* @__PURE__ */ $.basicType("int32")]], true), $.methodSignature("GetSkipped", [], [["o", /* @__PURE__ */ $.basicType("int32")]], true), $.methodSignature("GetSucceeded", [], [["o", /* @__PURE__ */ $.basicType("int32")]], true), $.methodSignature("IsSetFailed", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("IsSetSkipped", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("IsSetSucceeded", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("MarshalLogObject", [["enc", "zapcore.ObjectEncoder"]], [["err", "error"]], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("ToWire", [], ["wire.Value", "error"], true)],
		ReplayWorkflowActivityResult,
		() => [/* @__PURE__ */ $.structField("Succeeded", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32")), [0], 0, true, { tag: "json:\"succeeded,omitempty\"" }), /* @__PURE__ */ $.structField("Skipped", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32")), [1], 8, true, { tag: "json:\"skipped,omitempty\"" }), /* @__PURE__ */ $.structField("Failed", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32")), [2], 16, true, { tag: "json:\"failed,omitempty\"" })]
	)
}

export class ScanWorkflowActivityParams {
	public get Domain(): $.VarRef<string> | null {
		return this._fields.Domain
	}

	public set Domain(value: $.VarRef<string> | null) {
		this._fields.Domain = value
	}

	public get WorkflowQuery(): $.VarRef<string> | null {
		return this._fields.WorkflowQuery
	}

	public set WorkflowQuery(value: $.VarRef<string> | null) {
		this._fields.WorkflowQuery = value
	}

	public get NextPageToken(): $.Slice<number> {
		return this._fields.NextPageToken
	}

	public set NextPageToken(value: $.Slice<number>) {
		this._fields.NextPageToken = value
	}

	public get PageSize(): $.VarRef<number> | null {
		return this._fields.PageSize
	}

	public set PageSize(value: $.VarRef<number> | null) {
		this._fields.PageSize = value
	}

	public get SamplingRate(): $.VarRef<number> | null {
		return this._fields.SamplingRate
	}

	public set SamplingRate(value: $.VarRef<number> | null) {
		this._fields.SamplingRate = value
	}

	public _fields: {
		Domain: $.VarRef<string> | null
		WorkflowQuery: $.VarRef<string> | null
		NextPageToken: $.Slice<number>
		PageSize: $.VarRef<number> | null
		SamplingRate: $.VarRef<number> | null
	}

	constructor(init?: Partial<{Domain?: $.VarRef<string> | null, WorkflowQuery?: $.VarRef<string> | null, NextPageToken?: $.Slice<number>, PageSize?: $.VarRef<number> | null, SamplingRate?: $.VarRef<number> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Domain: init?.Domain ?? (null! as $.VarRef<string> | null),
			WorkflowQuery: init?.WorkflowQuery ?? (null! as $.VarRef<string> | null),
			NextPageToken: init?.NextPageToken ?? (null! as $.Slice<number>),
			PageSize: init?.PageSize ?? (null! as $.VarRef<number> | null),
			SamplingRate: init?.SamplingRate ?? (null! as $.VarRef<number> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ScanWorkflowActivityParams {
		return new ScanWorkflowActivityParams(this, true)
	}

	public __goscriptAssign(source: ScanWorkflowActivityParams): void {
		const target = this._fields
		const values = source._fields
		target.Domain = values.Domain
		target.WorkflowQuery = values.WorkflowQuery
		target.NextPageToken = values.NextPageToken
		target.PageSize = values.PageSize
		target.SamplingRate = values.SamplingRate
	}

	public async Decode(sr: stream.Reader | null): globalThis.Promise<$.GoError> {
		let v: ScanWorkflowActivityParams | $.VarRef<ScanWorkflowActivityParams> | null = this;
		const v$: ScanWorkflowActivityParams = v == null ? $.pointerTarget<ScanWorkflowActivityParams>(v) : (v as any).__isVarRef === true ? (v as any).value : (v as any).__goValue === undefined ? (v as any) : $.pointerTarget<ScanWorkflowActivityParams>(v)

		{
			let err = (__goscriptAwait = (sr !== null && (sr as any).__isVarRef !== true && (sr as any).__goValue === undefined ? (sr as Exclude<stream.Reader, null>) : $.pointerValue<Exclude<stream.Reader, null>>(sr)).ReadStructBegin(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (err != null) {
				return err
			}
		}

		let [fh, ok, err] = await (sr !== null && (sr as any).__isVarRef !== true && (sr as any).__goValue === undefined ? (sr as Exclude<stream.Reader, null>) : $.pointerValue<Exclude<stream.Reader, null>>(sr)).ReadFieldBegin()
		if (err != null) {
			return err
		}

		while (ok) {
			switch ((true as boolean)) {
				case (fh.ID == 10) && (fh.Type == 11):
				{
					let x: $.VarRef<string> = $.varRef("")
					let __goscriptTuple13: any = await (sr !== null && (sr as any).__isVarRef !== true && (sr as any).__goValue === undefined ? (sr as Exclude<stream.Reader, null>) : $.pointerValue<Exclude<stream.Reader, null>>(sr)).ReadString()
					x.value = __goscriptTuple13[0]
					err = __goscriptTuple13[1];
					;(v$ as ScanWorkflowActivityParams).Domain = x
					if (err != null) {
						return err
					}
					break
				}
				case (fh.ID == 20) && (fh.Type == 11):
				{
					let x: $.VarRef<string> = $.varRef("")
					let __goscriptTuple14: any = await (sr !== null && (sr as any).__isVarRef !== true && (sr as any).__goValue === undefined ? (sr as Exclude<stream.Reader, null>) : $.pointerValue<Exclude<stream.Reader, null>>(sr)).ReadString()
					x.value = __goscriptTuple14[0]
					err = __goscriptTuple14[1];
					;(v$ as ScanWorkflowActivityParams).WorkflowQuery = x
					if (err != null) {
						return err
					}
					break
				}
				case (fh.ID == 30) && (fh.Type == 11):
				{
					let __goscriptTuple15: any = await (sr !== null && (sr as any).__isVarRef !== true && (sr as any).__goValue === undefined ? (sr as Exclude<stream.Reader, null>) : $.pointerValue<Exclude<stream.Reader, null>>(sr)).ReadBinary();
					;(v$ as ScanWorkflowActivityParams).NextPageToken = __goscriptTuple15[0]
					err = __goscriptTuple15[1]
					if (err != null) {
						return err
					}
					break
				}
				case (fh.ID == 40) && (fh.Type == 8):
				{
					let x: $.VarRef<number> = $.varRef(0)
					let __goscriptTuple16: any = await (sr !== null && (sr as any).__isVarRef !== true && (sr as any).__goValue === undefined ? (sr as Exclude<stream.Reader, null>) : $.pointerValue<Exclude<stream.Reader, null>>(sr)).ReadInt32()
					x.value = __goscriptTuple16[0]
					err = __goscriptTuple16[1];
					;(v$ as ScanWorkflowActivityParams).PageSize = x
					if (err != null) {
						return err
					}
					break
				}
				case (fh.ID == 50) && (fh.Type == 4):
				{
					let x: $.VarRef<number> = $.varRef(0)
					let __goscriptTuple17: any = await (sr !== null && (sr as any).__isVarRef !== true && (sr as any).__goValue === undefined ? (sr as Exclude<stream.Reader, null>) : $.pointerValue<Exclude<stream.Reader, null>>(sr)).ReadDouble()
					x.value = __goscriptTuple17[0]
					err = __goscriptTuple17[1];
					;(v$ as ScanWorkflowActivityParams).SamplingRate = x
					if (err != null) {
						return err
					}
					break
				}
				default:
				{
					{
						let __goscriptShadow13 = (__goscriptAwait = (sr !== null && (sr as any).__isVarRef !== true && (sr as any).__goValue === undefined ? (sr as Exclude<stream.Reader, null>) : $.pointerValue<Exclude<stream.Reader, null>>(sr)).Skip(fh.Type), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
						if (__goscriptShadow13 != null) {
							return __goscriptShadow13
						}
					}
					break
				}
			}

			{
				let __goscriptShadow14 = (__goscriptAwait = (sr !== null && (sr as any).__isVarRef !== true && (sr as any).__goValue === undefined ? (sr as Exclude<stream.Reader, null>) : $.pointerValue<Exclude<stream.Reader, null>>(sr)).ReadFieldEnd(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (__goscriptShadow14 != null) {
					return __goscriptShadow14
				}
			}

			{
				let __goscriptTuple18: any = await (sr !== null && (sr as any).__isVarRef !== true && (sr as any).__goValue === undefined ? (sr as Exclude<stream.Reader, null>) : $.pointerValue<Exclude<stream.Reader, null>>(sr)).ReadFieldBegin()
				fh = $.assignStruct(fh, __goscriptTuple18[0])
				ok = __goscriptTuple18[1]
				err = __goscriptTuple18[2]
				if (err != null) {
					return err
				}
			}
		}

		{
			let __goscriptShadow15 = (__goscriptAwait = (sr !== null && (sr as any).__isVarRef !== true && (sr as any).__goValue === undefined ? (sr as Exclude<stream.Reader, null>) : $.pointerValue<Exclude<stream.Reader, null>>(sr)).ReadStructEnd(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (__goscriptShadow15 != null) {
				return __goscriptShadow15
			}
		}

		return null
	}

	public async Encode(sw: stream.Writer | null): globalThis.Promise<$.GoError> {
		const v: ScanWorkflowActivityParams | $.VarRef<ScanWorkflowActivityParams> | null = this;
		const v$: ScanWorkflowActivityParams = v == null ? $.pointerTarget<ScanWorkflowActivityParams>(v) : (v as any).__isVarRef === true ? (v as any).value : (v as any).__goValue === undefined ? (v as any) : $.pointerTarget<ScanWorkflowActivityParams>(v)
		{
			let err = (__goscriptAwait = (sw !== null && (sw as any).__isVarRef !== true && (sw as any).__goValue === undefined ? (sw as Exclude<stream.Writer, null>) : $.pointerValue<Exclude<stream.Writer, null>>(sw)).WriteStructBegin(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (err != null) {
				return err
			}
		}

		if ((v$ as ScanWorkflowActivityParams).Domain != null) {
			{
				let err = (__goscriptAwait = (sw !== null && (sw as any).__isVarRef !== true && (sw as any).__goValue === undefined ? (sw as Exclude<stream.Writer, null>) : $.pointerValue<Exclude<stream.Writer, null>>(sw)).WriteFieldBegin(new stream.FieldHeader({ID: 10, Type: 11}, true)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (err != null) {
					return err
				}
			}
			{
				let err = (__goscriptAwait = (sw !== null && (sw as any).__isVarRef !== true && (sw as any).__goValue === undefined ? (sw as Exclude<stream.Writer, null>) : $.pointerValue<Exclude<stream.Writer, null>>(sw)).WriteString($.pointerValue<string>(((v$ as ScanWorkflowActivityParams).Domain))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (err != null) {
					return err
				}
			}
			{
				let err = (__goscriptAwait = (sw !== null && (sw as any).__isVarRef !== true && (sw as any).__goValue === undefined ? (sw as Exclude<stream.Writer, null>) : $.pointerValue<Exclude<stream.Writer, null>>(sw)).WriteFieldEnd(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (err != null) {
					return err
				}
			}
		}

		if ((v$ as ScanWorkflowActivityParams).WorkflowQuery != null) {
			{
				let err = (__goscriptAwait = (sw !== null && (sw as any).__isVarRef !== true && (sw as any).__goValue === undefined ? (sw as Exclude<stream.Writer, null>) : $.pointerValue<Exclude<stream.Writer, null>>(sw)).WriteFieldBegin(new stream.FieldHeader({ID: 20, Type: 11}, true)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (err != null) {
					return err
				}
			}
			{
				let err = (__goscriptAwait = (sw !== null && (sw as any).__isVarRef !== true && (sw as any).__goValue === undefined ? (sw as Exclude<stream.Writer, null>) : $.pointerValue<Exclude<stream.Writer, null>>(sw)).WriteString($.pointerValue<string>(((v$ as ScanWorkflowActivityParams).WorkflowQuery))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (err != null) {
					return err
				}
			}
			{
				let err = (__goscriptAwait = (sw !== null && (sw as any).__isVarRef !== true && (sw as any).__goValue === undefined ? (sw as Exclude<stream.Writer, null>) : $.pointerValue<Exclude<stream.Writer, null>>(sw)).WriteFieldEnd(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (err != null) {
					return err
				}
			}
		}

		if ((v$ as ScanWorkflowActivityParams).NextPageToken != null) {
			{
				let err = (__goscriptAwait = (sw !== null && (sw as any).__isVarRef !== true && (sw as any).__goValue === undefined ? (sw as Exclude<stream.Writer, null>) : $.pointerValue<Exclude<stream.Writer, null>>(sw)).WriteFieldBegin(new stream.FieldHeader({ID: 30, Type: 11}, true)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (err != null) {
					return err
				}
			}
			{
				let err = (__goscriptAwait = (sw !== null && (sw as any).__isVarRef !== true && (sw as any).__goValue === undefined ? (sw as Exclude<stream.Writer, null>) : $.pointerValue<Exclude<stream.Writer, null>>(sw)).WriteBinary((v$ as ScanWorkflowActivityParams).NextPageToken), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (err != null) {
					return err
				}
			}
			{
				let err = (__goscriptAwait = (sw !== null && (sw as any).__isVarRef !== true && (sw as any).__goValue === undefined ? (sw as Exclude<stream.Writer, null>) : $.pointerValue<Exclude<stream.Writer, null>>(sw)).WriteFieldEnd(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (err != null) {
					return err
				}
			}
		}

		if ((v$ as ScanWorkflowActivityParams).PageSize != null) {
			{
				let err = (__goscriptAwait = (sw !== null && (sw as any).__isVarRef !== true && (sw as any).__goValue === undefined ? (sw as Exclude<stream.Writer, null>) : $.pointerValue<Exclude<stream.Writer, null>>(sw)).WriteFieldBegin(new stream.FieldHeader({ID: 40, Type: 8}, true)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (err != null) {
					return err
				}
			}
			{
				let err = (__goscriptAwait = (sw !== null && (sw as any).__isVarRef !== true && (sw as any).__goValue === undefined ? (sw as Exclude<stream.Writer, null>) : $.pointerValue<Exclude<stream.Writer, null>>(sw)).WriteInt32($.pointerValue<number>(((v$ as ScanWorkflowActivityParams).PageSize))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (err != null) {
					return err
				}
			}
			{
				let err = (__goscriptAwait = (sw !== null && (sw as any).__isVarRef !== true && (sw as any).__goValue === undefined ? (sw as Exclude<stream.Writer, null>) : $.pointerValue<Exclude<stream.Writer, null>>(sw)).WriteFieldEnd(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (err != null) {
					return err
				}
			}
		}

		if ((v$ as ScanWorkflowActivityParams).SamplingRate != null) {
			{
				let err = (__goscriptAwait = (sw !== null && (sw as any).__isVarRef !== true && (sw as any).__goValue === undefined ? (sw as Exclude<stream.Writer, null>) : $.pointerValue<Exclude<stream.Writer, null>>(sw)).WriteFieldBegin(new stream.FieldHeader({ID: 50, Type: 4}, true)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (err != null) {
					return err
				}
			}
			{
				let err = (__goscriptAwait = (sw !== null && (sw as any).__isVarRef !== true && (sw as any).__goValue === undefined ? (sw as Exclude<stream.Writer, null>) : $.pointerValue<Exclude<stream.Writer, null>>(sw)).WriteDouble($.pointerValue<number>(((v$ as ScanWorkflowActivityParams).SamplingRate))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (err != null) {
					return err
				}
			}
			{
				let err = (__goscriptAwait = (sw !== null && (sw as any).__isVarRef !== true && (sw as any).__goValue === undefined ? (sw as Exclude<stream.Writer, null>) : $.pointerValue<Exclude<stream.Writer, null>>(sw)).WriteFieldEnd(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (err != null) {
					return err
				}
			}
		}

		return (sw !== null && (sw as any).__isVarRef !== true && (sw as any).__goValue === undefined ? (sw as Exclude<stream.Writer, null>) : $.pointerValue<Exclude<stream.Writer, null>>(sw)).WriteStructEnd()
	}

	public Equals(rhs: ScanWorkflowActivityParams | $.VarRef<ScanWorkflowActivityParams> | null): boolean {
		const v: ScanWorkflowActivityParams | $.VarRef<ScanWorkflowActivityParams> | null = this;
		const v$: ScanWorkflowActivityParams = v == null ? $.pointerTarget<ScanWorkflowActivityParams>(v) : (v as any).__isVarRef === true ? (v as any).value : (v as any).__goValue === undefined ? (v as any) : $.pointerTarget<ScanWorkflowActivityParams>(v)
		const rhs$: ScanWorkflowActivityParams = rhs == null ? $.pointerTarget<ScanWorkflowActivityParams>(rhs) : (rhs as any).__isVarRef === true ? (rhs as any).value : (rhs as any).__goValue === undefined ? (rhs as any) : $.pointerTarget<ScanWorkflowActivityParams>(rhs)
		if (v == null) {
			return rhs == null
		} else {
			if (rhs == null) {
				return false
			}
		}
		if (!_String_EqualsPtr((v$ as ScanWorkflowActivityParams).Domain, (rhs$ as ScanWorkflowActivityParams).Domain)) {
			return false
		}
		if (!_String_EqualsPtr((v$ as ScanWorkflowActivityParams).WorkflowQuery, (rhs$ as ScanWorkflowActivityParams).WorkflowQuery)) {
			return false
		}
		if (!((((v$ as ScanWorkflowActivityParams).NextPageToken == null) && ((rhs$ as ScanWorkflowActivityParams).NextPageToken == null)) || ((((v$ as ScanWorkflowActivityParams).NextPageToken != null) && ((rhs$ as ScanWorkflowActivityParams).NextPageToken != null)) && bytes.Equal((v$ as ScanWorkflowActivityParams).NextPageToken, (rhs$ as ScanWorkflowActivityParams).NextPageToken)))) {
			return false
		}
		if (!_I32_EqualsPtr((v$ as ScanWorkflowActivityParams).PageSize, (rhs$ as ScanWorkflowActivityParams).PageSize)) {
			return false
		}
		if (!_Double_EqualsPtr((v$ as ScanWorkflowActivityParams).SamplingRate, (rhs$ as ScanWorkflowActivityParams).SamplingRate)) {
			return false
		}

		return true
	}

	public FromWire(__goscriptParam4: wire.Value): $.GoError {
		let v: ScanWorkflowActivityParams | $.VarRef<ScanWorkflowActivityParams> | null = this;
		let w: $.VarRef<wire.Value> = $.varRef(__goscriptParam4)
		const v$: ScanWorkflowActivityParams = v == null ? $.pointerTarget<ScanWorkflowActivityParams>(v) : (v as any).__isVarRef === true ? (v as any).value : (v as any).__goValue === undefined ? (v as any) : $.pointerTarget<ScanWorkflowActivityParams>(v)
		let err: $.GoError = null! as $.GoError

		for (let __goscriptRangeTarget7 = w.value.GetStruct().Fields, __goscriptRangeWindow7 = $.sliceRange(__goscriptRangeTarget7), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow7.length; __rangeIndex++) {
			let field = ((__goscriptRangeWindow7.backing[__goscriptRangeWindow7.offset + __rangeIndex] as wire.Field)).clone()
			switch (field.ID) {
				case 10:
				{
					if (field.Value.Type() == 11) {
						let x: $.VarRef<string> = $.varRef("")
						let __goscriptAssign13_0: string = field.Value.GetString()
						let __goscriptAssign13_1: $.GoError = null
						x.value = __goscriptAssign13_0
						err = __goscriptAssign13_1;
						;(v$ as ScanWorkflowActivityParams).Domain = x
						if (err != null) {
							return err
						}
					}
					break
				}
				case 20:
				{
					if (field.Value.Type() == 11) {
						let x: $.VarRef<string> = $.varRef("")
						let __goscriptAssign14_0: string = field.Value.GetString()
						let __goscriptAssign14_1: $.GoError = null
						x.value = __goscriptAssign14_0
						err = __goscriptAssign14_1;
						;(v$ as ScanWorkflowActivityParams).WorkflowQuery = x
						if (err != null) {
							return err
						}
					}
					break
				}
				case 30:
				{
					if (field.Value.Type() == 11) {
						let __goscriptAssign15_0: $.Slice<number> = field.Value.GetBinary()
						let __goscriptAssign15_1: $.GoError = null;
						;(v$ as ScanWorkflowActivityParams).NextPageToken = __goscriptAssign15_0
						err = __goscriptAssign15_1
						if (err != null) {
							return err
						}
					}
					break
				}
				case 40:
				{
					if (field.Value.Type() == 8) {
						let x: $.VarRef<number> = $.varRef(0)
						let __goscriptAssign16_0: number = field.Value.GetI32()
						let __goscriptAssign16_1: $.GoError = null
						x.value = __goscriptAssign16_0
						err = __goscriptAssign16_1;
						;(v$ as ScanWorkflowActivityParams).PageSize = x
						if (err != null) {
							return err
						}
					}
					break
				}
				case 50:
				{
					if (field.Value.Type() == 4) {
						let x: $.VarRef<number> = $.varRef(0)
						let __goscriptAssign17_0: number = field.Value.GetDouble()
						let __goscriptAssign17_1: $.GoError = null
						x.value = __goscriptAssign17_0
						err = __goscriptAssign17_1;
						;(v$ as ScanWorkflowActivityParams).SamplingRate = x
						if (err != null) {
							return err
						}
					}
					break
				}
			}
		}

		return null
	}

	public GetDomain(): string {
		const v: ScanWorkflowActivityParams | $.VarRef<ScanWorkflowActivityParams> | null = this;
		let o: string = ""
		const v$: ScanWorkflowActivityParams = v == null ? $.pointerTarget<ScanWorkflowActivityParams>(v) : (v as any).__isVarRef === true ? (v as any).value : (v as any).__goValue === undefined ? (v as any) : $.pointerTarget<ScanWorkflowActivityParams>(v)
		if ((v != null) && ((v$ as ScanWorkflowActivityParams).Domain != null)) {
			return $.pointerValue<string>((v$ as ScanWorkflowActivityParams).Domain)
		}

		return o
	}

	public GetNextPageToken(): $.Slice<number> {
		const v: ScanWorkflowActivityParams | $.VarRef<ScanWorkflowActivityParams> | null = this;
		let o: $.Slice<number> = null! as $.Slice<number>
		const v$: ScanWorkflowActivityParams = v == null ? $.pointerTarget<ScanWorkflowActivityParams>(v) : (v as any).__isVarRef === true ? (v as any).value : (v as any).__goValue === undefined ? (v as any) : $.pointerTarget<ScanWorkflowActivityParams>(v)
		if ((v != null) && ((v$ as ScanWorkflowActivityParams).NextPageToken != null)) {
			return (v$ as ScanWorkflowActivityParams).NextPageToken
		}

		return o
	}

	public GetPageSize(): number {
		const v: ScanWorkflowActivityParams | $.VarRef<ScanWorkflowActivityParams> | null = this;
		let o: number = 0
		const v$: ScanWorkflowActivityParams = v == null ? $.pointerTarget<ScanWorkflowActivityParams>(v) : (v as any).__isVarRef === true ? (v as any).value : (v as any).__goValue === undefined ? (v as any) : $.pointerTarget<ScanWorkflowActivityParams>(v)
		if ((v != null) && ((v$ as ScanWorkflowActivityParams).PageSize != null)) {
			return $.pointerValue<number>((v$ as ScanWorkflowActivityParams).PageSize)
		}

		return o
	}

	public GetSamplingRate(): number {
		const v: ScanWorkflowActivityParams | $.VarRef<ScanWorkflowActivityParams> | null = this;
		let o: number = 0
		const v$: ScanWorkflowActivityParams = v == null ? $.pointerTarget<ScanWorkflowActivityParams>(v) : (v as any).__isVarRef === true ? (v as any).value : (v as any).__goValue === undefined ? (v as any) : $.pointerTarget<ScanWorkflowActivityParams>(v)
		if ((v != null) && ((v$ as ScanWorkflowActivityParams).SamplingRate != null)) {
			return $.pointerValue<number>((v$ as ScanWorkflowActivityParams).SamplingRate)
		}

		return o
	}

	public GetWorkflowQuery(): string {
		const v: ScanWorkflowActivityParams | $.VarRef<ScanWorkflowActivityParams> | null = this;
		let o: string = ""
		const v$: ScanWorkflowActivityParams = v == null ? $.pointerTarget<ScanWorkflowActivityParams>(v) : (v as any).__isVarRef === true ? (v as any).value : (v as any).__goValue === undefined ? (v as any) : $.pointerTarget<ScanWorkflowActivityParams>(v)
		if ((v != null) && ((v$ as ScanWorkflowActivityParams).WorkflowQuery != null)) {
			return $.pointerValue<string>((v$ as ScanWorkflowActivityParams).WorkflowQuery)
		}

		return o
	}

	public IsSetDomain(): boolean {
		const v: ScanWorkflowActivityParams | $.VarRef<ScanWorkflowActivityParams> | null = this;
		return (v != null) && ($.pointerValue<ScanWorkflowActivityParams>(v).Domain != null)
	}

	public IsSetNextPageToken(): boolean {
		const v: ScanWorkflowActivityParams | $.VarRef<ScanWorkflowActivityParams> | null = this;
		return (v != null) && ($.pointerValue<ScanWorkflowActivityParams>(v).NextPageToken != null)
	}

	public IsSetPageSize(): boolean {
		const v: ScanWorkflowActivityParams | $.VarRef<ScanWorkflowActivityParams> | null = this;
		return (v != null) && ($.pointerValue<ScanWorkflowActivityParams>(v).PageSize != null)
	}

	public IsSetSamplingRate(): boolean {
		const v: ScanWorkflowActivityParams | $.VarRef<ScanWorkflowActivityParams> | null = this;
		return (v != null) && ($.pointerValue<ScanWorkflowActivityParams>(v).SamplingRate != null)
	}

	public IsSetWorkflowQuery(): boolean {
		const v: ScanWorkflowActivityParams | $.VarRef<ScanWorkflowActivityParams> | null = this;
		return (v != null) && ($.pointerValue<ScanWorkflowActivityParams>(v).WorkflowQuery != null)
	}

	public async MarshalLogObject(enc: zapcore.ObjectEncoder | null): globalThis.Promise<$.GoError> {
		const v: ScanWorkflowActivityParams | $.VarRef<ScanWorkflowActivityParams> | null = this;
		let err: $.GoError = null! as $.GoError
		const v$: ScanWorkflowActivityParams = v == null ? $.pointerTarget<ScanWorkflowActivityParams>(v) : (v as any).__isVarRef === true ? (v as any).value : (v as any).__goValue === undefined ? (v as any) : $.pointerTarget<ScanWorkflowActivityParams>(v)
		if (v == null) {
			return null
		}
		if ((v$ as ScanWorkflowActivityParams).Domain != null) {
			void (__goscriptAwait = (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? (enc as Exclude<zapcore.ObjectEncoder, null>) : $.pointerValue<Exclude<zapcore.ObjectEncoder, null>>(enc)).AddString("domain", $.pointerValue<string>((v$ as ScanWorkflowActivityParams).Domain)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		if ((v$ as ScanWorkflowActivityParams).WorkflowQuery != null) {
			void (__goscriptAwait = (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? (enc as Exclude<zapcore.ObjectEncoder, null>) : $.pointerValue<Exclude<zapcore.ObjectEncoder, null>>(enc)).AddString("workflowQuery", $.pointerValue<string>((v$ as ScanWorkflowActivityParams).WorkflowQuery)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		if ((v$ as ScanWorkflowActivityParams).NextPageToken != null) {
			void (__goscriptAwait = (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? (enc as Exclude<zapcore.ObjectEncoder, null>) : $.pointerValue<Exclude<zapcore.ObjectEncoder, null>>(enc)).AddString("nextPageToken", base64.Encoding.prototype.EncodeToString.call(base64.StdEncoding, (v$ as ScanWorkflowActivityParams).NextPageToken)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		if ((v$ as ScanWorkflowActivityParams).PageSize != null) {
			void (__goscriptAwait = (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? (enc as Exclude<zapcore.ObjectEncoder, null>) : $.pointerValue<Exclude<zapcore.ObjectEncoder, null>>(enc)).AddInt32("pageSize", $.pointerValue<number>((v$ as ScanWorkflowActivityParams).PageSize)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		if ((v$ as ScanWorkflowActivityParams).SamplingRate != null) {
			void (__goscriptAwait = (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? (enc as Exclude<zapcore.ObjectEncoder, null>) : $.pointerValue<Exclude<zapcore.ObjectEncoder, null>>(enc)).AddFloat64("samplingRate", $.pointerValue<number>((v$ as ScanWorkflowActivityParams).SamplingRate)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		return err
	}

	public async String(): globalThis.Promise<string> {
		const v: ScanWorkflowActivityParams | $.VarRef<ScanWorkflowActivityParams> | null = this;
		const v$: ScanWorkflowActivityParams = v == null ? $.pointerTarget<ScanWorkflowActivityParams>(v) : (v as any).__isVarRef === true ? (v as any).value : (v as any).__goValue === undefined ? (v as any) : $.pointerTarget<ScanWorkflowActivityParams>(v)
		if (v == null) {
			return "<nil>"
		}

		let fields: string[] = $.arrayValue(globalThis.Array.from({ length: 5 }, () => ""))
		let i = 0
		if ((v$ as ScanWorkflowActivityParams).Domain != null) {
			fields[i] = await fmt.Sprintf("Domain: %v", $.pointerValue<string>(((v$ as ScanWorkflowActivityParams).Domain)))
			i++
		}
		if ((v$ as ScanWorkflowActivityParams).WorkflowQuery != null) {
			fields[i] = await fmt.Sprintf("WorkflowQuery: %v", $.pointerValue<string>(((v$ as ScanWorkflowActivityParams).WorkflowQuery)))
			i++
		}
		if ((v$ as ScanWorkflowActivityParams).NextPageToken != null) {
			fields[i] = await fmt.Sprintf("NextPageToken: %v", $.interfaceValue((v$ as ScanWorkflowActivityParams).NextPageToken, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))))
			i++
		}
		if ((v$ as ScanWorkflowActivityParams).PageSize != null) {
			fields[i] = await fmt.Sprintf("PageSize: %v", $.basicInterfaceValue($.pointerValue<number>(((v$ as ScanWorkflowActivityParams).PageSize)), "int32"))
			i++
		}
		if ((v$ as ScanWorkflowActivityParams).SamplingRate != null) {
			fields[i] = await fmt.Sprintf("SamplingRate: %v", $.basicInterfaceValue($.pointerValue<number>(((v$ as ScanWorkflowActivityParams).SamplingRate)), "float64"))
			i++
		}

		return fmt.Sprintf("ScanWorkflowActivityParams{%v}", strings.Join($.goSlice(fields, undefined, i), ", "))
	}

	public ToWire(): [wire.Value, $.GoError] {
		const v: ScanWorkflowActivityParams | $.VarRef<ScanWorkflowActivityParams> | null = this;
		const v$: ScanWorkflowActivityParams = v == null ? $.pointerTarget<ScanWorkflowActivityParams>(v) : (v as any).__isVarRef === true ? (v as any).value : (v as any).__goValue === undefined ? (v as any) : $.pointerTarget<ScanWorkflowActivityParams>(v)
		let fields: wire.Field[] = $.arrayValue(globalThis.Array.from({ length: 5 }, () => new wire.Field(undefined, true)), /* @__PURE__ */ $.arrayType("wire.Field", 5))
		let i: number = 0
		let w: wire.Value = new wire.Value(undefined, true)
		let err: $.GoError = null! as $.GoError

		if ((v$ as ScanWorkflowActivityParams).Domain != null) {
			let __goscriptAssign18_0: wire.Value = wire.NewValueString($.pointerValue<string>(((v$ as ScanWorkflowActivityParams).Domain)))
			let __goscriptAssign18_1: $.GoError = null
			w = $.assignStruct(w, __goscriptAssign18_0)
			err = __goscriptAssign18_1
			if (err != null) {
				return [(w).clone(), err]
			}
			$.assignStruct(fields[i], new wire.Field({ID: 10, Value: w}, true))
			i++
		}
		if ((v$ as ScanWorkflowActivityParams).WorkflowQuery != null) {
			let __goscriptAssign19_0: wire.Value = wire.NewValueString($.pointerValue<string>(((v$ as ScanWorkflowActivityParams).WorkflowQuery)))
			let __goscriptAssign19_1: $.GoError = null
			w = $.assignStruct(w, __goscriptAssign19_0)
			err = __goscriptAssign19_1
			if (err != null) {
				return [(w).clone(), err]
			}
			$.assignStruct(fields[i], new wire.Field({ID: 20, Value: w}, true))
			i++
		}
		if ((v$ as ScanWorkflowActivityParams).NextPageToken != null) {
			let __goscriptAssign20_0: wire.Value = wire.NewValueBinary((v$ as ScanWorkflowActivityParams).NextPageToken)
			let __goscriptAssign20_1: $.GoError = null
			w = $.assignStruct(w, __goscriptAssign20_0)
			err = __goscriptAssign20_1
			if (err != null) {
				return [(w).clone(), err]
			}
			$.assignStruct(fields[i], new wire.Field({ID: 30, Value: w}, true))
			i++
		}
		if ((v$ as ScanWorkflowActivityParams).PageSize != null) {
			let __goscriptAssign21_0: wire.Value = wire.NewValueI32($.pointerValue<number>(((v$ as ScanWorkflowActivityParams).PageSize)))
			let __goscriptAssign21_1: $.GoError = null
			w = $.assignStruct(w, __goscriptAssign21_0)
			err = __goscriptAssign21_1
			if (err != null) {
				return [(w).clone(), err]
			}
			$.assignStruct(fields[i], new wire.Field({ID: 40, Value: w}, true))
			i++
		}
		if ((v$ as ScanWorkflowActivityParams).SamplingRate != null) {
			let __goscriptAssign22_0: wire.Value = wire.NewValueDouble($.pointerValue<number>(((v$ as ScanWorkflowActivityParams).SamplingRate)))
			let __goscriptAssign22_1: $.GoError = null
			w = $.assignStruct(w, __goscriptAssign22_0)
			err = __goscriptAssign22_1
			if (err != null) {
				return [(w).clone(), err]
			}
			$.assignStruct(fields[i], new wire.Field({ID: 50, Value: w}, true))
			i++
		}

		return [wire.NewValueStruct(new wire.Struct({Fields: $.goSlice(fields, undefined, i)}, true)), null]
	}

	static __typeInfo = $.registerStructType(
		"shadower.ScanWorkflowActivityParams",
		() => new ScanWorkflowActivityParams(),
		() => [$.methodSignature("Decode", [["sr", "stream.Reader"]], ["error"], true), $.methodSignature("Encode", [["sw", "stream.Writer"]], ["error"], true), $.methodSignature("Equals", [["rhs", /* @__PURE__ */ $.pointerType("shadower.ScanWorkflowActivityParams")]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("FromWire", [["w", "wire.Value"]], ["error"], true), $.methodSignature("GetDomain", [], [["o", /* @__PURE__ */ $.basicType("string")]], true), $.methodSignature("GetNextPageToken", [], [["o", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], true), $.methodSignature("GetPageSize", [], [["o", /* @__PURE__ */ $.basicType("int32")]], true), $.methodSignature("GetSamplingRate", [], [["o", /* @__PURE__ */ $.basicType("float64")]], true), $.methodSignature("GetWorkflowQuery", [], [["o", /* @__PURE__ */ $.basicType("string")]], true), $.methodSignature("IsSetDomain", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("IsSetNextPageToken", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("IsSetPageSize", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("IsSetSamplingRate", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("IsSetWorkflowQuery", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("MarshalLogObject", [["enc", "zapcore.ObjectEncoder"]], [["err", "error"]], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("ToWire", [], ["wire.Value", "error"], true)],
		ScanWorkflowActivityParams,
		() => [/* @__PURE__ */ $.structField("Domain", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("string")), [0], 0, true, { tag: "json:\"domain,omitempty\"" }), /* @__PURE__ */ $.structField("WorkflowQuery", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("string")), [1], 8, true, { tag: "json:\"workflowQuery,omitempty\"" }), /* @__PURE__ */ $.structField("NextPageToken", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [2], 16, true, { tag: "json:\"nextPageToken,omitempty\"" }), /* @__PURE__ */ $.structField("PageSize", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32")), [3], 40, true, { tag: "json:\"pageSize,omitempty\"" }), /* @__PURE__ */ $.structField("SamplingRate", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("float64")), [4], 48, true, { tag: "json:\"samplingRate,omitempty\"" })]
	)
}

export class ScanWorkflowActivityResult {
	public get Executions(): $.Slice<shared.WorkflowExecution | $.VarRef<shared.WorkflowExecution> | null> {
		return this._fields.Executions
	}

	public set Executions(value: $.Slice<shared.WorkflowExecution | $.VarRef<shared.WorkflowExecution> | null>) {
		this._fields.Executions = value
	}

	public get NextPageToken(): $.Slice<number> {
		return this._fields.NextPageToken
	}

	public set NextPageToken(value: $.Slice<number>) {
		this._fields.NextPageToken = value
	}

	public _fields: {
		Executions: $.Slice<shared.WorkflowExecution | $.VarRef<shared.WorkflowExecution> | null>
		NextPageToken: $.Slice<number>
	}

	constructor(init?: Partial<{Executions?: $.Slice<shared.WorkflowExecution | $.VarRef<shared.WorkflowExecution> | null>, NextPageToken?: $.Slice<number>}>, __goscriptValue?: boolean) {
		this._fields = {
			Executions: init?.Executions ?? (null! as $.Slice<shared.WorkflowExecution | $.VarRef<shared.WorkflowExecution> | null>),
			NextPageToken: init?.NextPageToken ?? (null! as $.Slice<number>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ScanWorkflowActivityResult {
		return new ScanWorkflowActivityResult(this, true)
	}

	public __goscriptAssign(source: ScanWorkflowActivityResult): void {
		const target = this._fields
		const values = source._fields
		target.Executions = values.Executions
		target.NextPageToken = values.NextPageToken
	}

	public async Decode(sr: stream.Reader | null): globalThis.Promise<$.GoError> {
		let v: ScanWorkflowActivityResult | $.VarRef<ScanWorkflowActivityResult> | null = this;
		const v$: ScanWorkflowActivityResult = v == null ? $.pointerTarget<ScanWorkflowActivityResult>(v) : (v as any).__isVarRef === true ? (v as any).value : (v as any).__goValue === undefined ? (v as any) : $.pointerTarget<ScanWorkflowActivityResult>(v)

		{
			let err = (__goscriptAwait = (sr !== null && (sr as any).__isVarRef !== true && (sr as any).__goValue === undefined ? (sr as Exclude<stream.Reader, null>) : $.pointerValue<Exclude<stream.Reader, null>>(sr)).ReadStructBegin(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (err != null) {
				return err
			}
		}

		let [fh, ok, err] = await (sr !== null && (sr as any).__isVarRef !== true && (sr as any).__goValue === undefined ? (sr as Exclude<stream.Reader, null>) : $.pointerValue<Exclude<stream.Reader, null>>(sr)).ReadFieldBegin()
		if (err != null) {
			return err
		}

		while (ok) {
			switch ((true as boolean)) {
				case (fh.ID == 10) && (fh.Type == 15):
				{
					let __goscriptTuple19: any = await _List_WorkflowExecution_Decode(sr);
					;(v$ as ScanWorkflowActivityResult).Executions = __goscriptTuple19[0]
					err = __goscriptTuple19[1]
					if (err != null) {
						return err
					}
					break
				}
				case (fh.ID == 20) && (fh.Type == 11):
				{
					let __goscriptTuple20: any = await (sr !== null && (sr as any).__isVarRef !== true && (sr as any).__goValue === undefined ? (sr as Exclude<stream.Reader, null>) : $.pointerValue<Exclude<stream.Reader, null>>(sr)).ReadBinary();
					;(v$ as ScanWorkflowActivityResult).NextPageToken = __goscriptTuple20[0]
					err = __goscriptTuple20[1]
					if (err != null) {
						return err
					}
					break
				}
				default:
				{
					{
						let __goscriptShadow16 = (__goscriptAwait = (sr !== null && (sr as any).__isVarRef !== true && (sr as any).__goValue === undefined ? (sr as Exclude<stream.Reader, null>) : $.pointerValue<Exclude<stream.Reader, null>>(sr)).Skip(fh.Type), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
						if (__goscriptShadow16 != null) {
							return __goscriptShadow16
						}
					}
					break
				}
			}

			{
				let __goscriptShadow17 = (__goscriptAwait = (sr !== null && (sr as any).__isVarRef !== true && (sr as any).__goValue === undefined ? (sr as Exclude<stream.Reader, null>) : $.pointerValue<Exclude<stream.Reader, null>>(sr)).ReadFieldEnd(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (__goscriptShadow17 != null) {
					return __goscriptShadow17
				}
			}

			{
				let __goscriptTuple21: any = await (sr !== null && (sr as any).__isVarRef !== true && (sr as any).__goValue === undefined ? (sr as Exclude<stream.Reader, null>) : $.pointerValue<Exclude<stream.Reader, null>>(sr)).ReadFieldBegin()
				fh = $.assignStruct(fh, __goscriptTuple21[0])
				ok = __goscriptTuple21[1]
				err = __goscriptTuple21[2]
				if (err != null) {
					return err
				}
			}
		}

		{
			let __goscriptShadow18 = (__goscriptAwait = (sr !== null && (sr as any).__isVarRef !== true && (sr as any).__goValue === undefined ? (sr as Exclude<stream.Reader, null>) : $.pointerValue<Exclude<stream.Reader, null>>(sr)).ReadStructEnd(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (__goscriptShadow18 != null) {
				return __goscriptShadow18
			}
		}

		return null
	}

	public async Encode(sw: stream.Writer | null): globalThis.Promise<$.GoError> {
		const v: ScanWorkflowActivityResult | $.VarRef<ScanWorkflowActivityResult> | null = this;
		const v$: ScanWorkflowActivityResult = v == null ? $.pointerTarget<ScanWorkflowActivityResult>(v) : (v as any).__isVarRef === true ? (v as any).value : (v as any).__goValue === undefined ? (v as any) : $.pointerTarget<ScanWorkflowActivityResult>(v)
		{
			let err = (__goscriptAwait = (sw !== null && (sw as any).__isVarRef !== true && (sw as any).__goValue === undefined ? (sw as Exclude<stream.Writer, null>) : $.pointerValue<Exclude<stream.Writer, null>>(sw)).WriteStructBegin(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (err != null) {
				return err
			}
		}

		if ((v$ as ScanWorkflowActivityResult).Executions != null) {
			{
				let err = (__goscriptAwait = (sw !== null && (sw as any).__isVarRef !== true && (sw as any).__goValue === undefined ? (sw as Exclude<stream.Writer, null>) : $.pointerValue<Exclude<stream.Writer, null>>(sw)).WriteFieldBegin(new stream.FieldHeader({ID: 10, Type: 15}, true)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (err != null) {
					return err
				}
			}
			{
				let err = await _List_WorkflowExecution_Encode((v$ as ScanWorkflowActivityResult).Executions, sw)
				if (err != null) {
					return err
				}
			}
			{
				let err = (__goscriptAwait = (sw !== null && (sw as any).__isVarRef !== true && (sw as any).__goValue === undefined ? (sw as Exclude<stream.Writer, null>) : $.pointerValue<Exclude<stream.Writer, null>>(sw)).WriteFieldEnd(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (err != null) {
					return err
				}
			}
		}

		if ((v$ as ScanWorkflowActivityResult).NextPageToken != null) {
			{
				let err = (__goscriptAwait = (sw !== null && (sw as any).__isVarRef !== true && (sw as any).__goValue === undefined ? (sw as Exclude<stream.Writer, null>) : $.pointerValue<Exclude<stream.Writer, null>>(sw)).WriteFieldBegin(new stream.FieldHeader({ID: 20, Type: 11}, true)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (err != null) {
					return err
				}
			}
			{
				let err = (__goscriptAwait = (sw !== null && (sw as any).__isVarRef !== true && (sw as any).__goValue === undefined ? (sw as Exclude<stream.Writer, null>) : $.pointerValue<Exclude<stream.Writer, null>>(sw)).WriteBinary((v$ as ScanWorkflowActivityResult).NextPageToken), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (err != null) {
					return err
				}
			}
			{
				let err = (__goscriptAwait = (sw !== null && (sw as any).__isVarRef !== true && (sw as any).__goValue === undefined ? (sw as Exclude<stream.Writer, null>) : $.pointerValue<Exclude<stream.Writer, null>>(sw)).WriteFieldEnd(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (err != null) {
					return err
				}
			}
		}

		return (sw !== null && (sw as any).__isVarRef !== true && (sw as any).__goValue === undefined ? (sw as Exclude<stream.Writer, null>) : $.pointerValue<Exclude<stream.Writer, null>>(sw)).WriteStructEnd()
	}

	public Equals(rhs: ScanWorkflowActivityResult | $.VarRef<ScanWorkflowActivityResult> | null): boolean {
		const v: ScanWorkflowActivityResult | $.VarRef<ScanWorkflowActivityResult> | null = this;
		const v$: ScanWorkflowActivityResult = v == null ? $.pointerTarget<ScanWorkflowActivityResult>(v) : (v as any).__isVarRef === true ? (v as any).value : (v as any).__goValue === undefined ? (v as any) : $.pointerTarget<ScanWorkflowActivityResult>(v)
		const rhs$: ScanWorkflowActivityResult = rhs == null ? $.pointerTarget<ScanWorkflowActivityResult>(rhs) : (rhs as any).__isVarRef === true ? (rhs as any).value : (rhs as any).__goValue === undefined ? (rhs as any) : $.pointerTarget<ScanWorkflowActivityResult>(rhs)
		if (v == null) {
			return rhs == null
		} else {
			if (rhs == null) {
				return false
			}
		}
		if (!((((v$ as ScanWorkflowActivityResult).Executions == null) && ((rhs$ as ScanWorkflowActivityResult).Executions == null)) || ((((v$ as ScanWorkflowActivityResult).Executions != null) && ((rhs$ as ScanWorkflowActivityResult).Executions != null)) && _List_WorkflowExecution_Equals((v$ as ScanWorkflowActivityResult).Executions, (rhs$ as ScanWorkflowActivityResult).Executions)))) {
			return false
		}
		if (!((((v$ as ScanWorkflowActivityResult).NextPageToken == null) && ((rhs$ as ScanWorkflowActivityResult).NextPageToken == null)) || ((((v$ as ScanWorkflowActivityResult).NextPageToken != null) && ((rhs$ as ScanWorkflowActivityResult).NextPageToken != null)) && bytes.Equal((v$ as ScanWorkflowActivityResult).NextPageToken, (rhs$ as ScanWorkflowActivityResult).NextPageToken)))) {
			return false
		}

		return true
	}

	public async FromWire(__goscriptParam5: wire.Value): globalThis.Promise<$.GoError> {
		let v: ScanWorkflowActivityResult | $.VarRef<ScanWorkflowActivityResult> | null = this;
		let w: $.VarRef<wire.Value> = $.varRef(__goscriptParam5)
		const v$: ScanWorkflowActivityResult = v == null ? $.pointerTarget<ScanWorkflowActivityResult>(v) : (v as any).__isVarRef === true ? (v as any).value : (v as any).__goValue === undefined ? (v as any) : $.pointerTarget<ScanWorkflowActivityResult>(v)
		let err: $.GoError = null! as $.GoError

		for (let __goscriptRangeTarget8 = w.value.GetStruct().Fields, __goscriptRangeWindow8 = $.sliceRange(__goscriptRangeTarget8), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow8.length; __rangeIndex++) {
			let field = ((__goscriptRangeWindow8.backing[__goscriptRangeWindow8.offset + __rangeIndex] as wire.Field)).clone()
			switch (field.ID) {
				case 10:
				{
					if (field.Value.Type() == 15) {
						let __goscriptTuple22: any = await _List_WorkflowExecution_Read(field.Value.GetList());
						;(v$ as ScanWorkflowActivityResult).Executions = __goscriptTuple22[0]
						err = __goscriptTuple22[1]
						if (err != null) {
							return err
						}
					}
					break
				}
				case 20:
				{
					if (field.Value.Type() == 11) {
						let __goscriptAssign23_0: $.Slice<number> = field.Value.GetBinary()
						let __goscriptAssign23_1: $.GoError = null;
						;(v$ as ScanWorkflowActivityResult).NextPageToken = __goscriptAssign23_0
						err = __goscriptAssign23_1
						if (err != null) {
							return err
						}
					}
					break
				}
			}
		}

		return null
	}

	public GetExecutions(): $.Slice<shared.WorkflowExecution | $.VarRef<shared.WorkflowExecution> | null> {
		const v: ScanWorkflowActivityResult | $.VarRef<ScanWorkflowActivityResult> | null = this;
		let o: $.Slice<shared.WorkflowExecution | $.VarRef<shared.WorkflowExecution> | null> = null! as $.Slice<shared.WorkflowExecution | $.VarRef<shared.WorkflowExecution> | null>
		const v$: ScanWorkflowActivityResult = v == null ? $.pointerTarget<ScanWorkflowActivityResult>(v) : (v as any).__isVarRef === true ? (v as any).value : (v as any).__goValue === undefined ? (v as any) : $.pointerTarget<ScanWorkflowActivityResult>(v)
		if ((v != null) && ((v$ as ScanWorkflowActivityResult).Executions != null)) {
			return (v$ as ScanWorkflowActivityResult).Executions
		}

		return o
	}

	public GetNextPageToken(): $.Slice<number> {
		const v: ScanWorkflowActivityResult | $.VarRef<ScanWorkflowActivityResult> | null = this;
		let o: $.Slice<number> = null! as $.Slice<number>
		const v$: ScanWorkflowActivityResult = v == null ? $.pointerTarget<ScanWorkflowActivityResult>(v) : (v as any).__isVarRef === true ? (v as any).value : (v as any).__goValue === undefined ? (v as any) : $.pointerTarget<ScanWorkflowActivityResult>(v)
		if ((v != null) && ((v$ as ScanWorkflowActivityResult).NextPageToken != null)) {
			return (v$ as ScanWorkflowActivityResult).NextPageToken
		}

		return o
	}

	public IsSetExecutions(): boolean {
		const v: ScanWorkflowActivityResult | $.VarRef<ScanWorkflowActivityResult> | null = this;
		return (v != null) && ($.pointerValue<ScanWorkflowActivityResult>(v).Executions != null)
	}

	public IsSetNextPageToken(): boolean {
		const v: ScanWorkflowActivityResult | $.VarRef<ScanWorkflowActivityResult> | null = this;
		return (v != null) && ($.pointerValue<ScanWorkflowActivityResult>(v).NextPageToken != null)
	}

	public async MarshalLogObject(enc: zapcore.ObjectEncoder | null): globalThis.Promise<$.GoError> {
		const v: ScanWorkflowActivityResult | $.VarRef<ScanWorkflowActivityResult> | null = this;
		let err: $.GoError = null! as $.GoError
		const v$: ScanWorkflowActivityResult = v == null ? $.pointerTarget<ScanWorkflowActivityResult>(v) : (v as any).__isVarRef === true ? (v as any).value : (v as any).__goValue === undefined ? (v as any) : $.pointerTarget<ScanWorkflowActivityResult>(v)
		if (v == null) {
			return null
		}
		if ((v$ as ScanWorkflowActivityResult).Executions != null) {
			err = multierr.Append(err, (__goscriptAwait = (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? (enc as Exclude<zapcore.ObjectEncoder, null>) : $.pointerValue<Exclude<zapcore.ObjectEncoder, null>>(enc)).AddArray("executions", $.namedValueInterfaceValue<zapcore.ArrayMarshaler | null>(((v$ as ScanWorkflowActivityResult).Executions as _List_WorkflowExecution_Zapper), "shadower._List_WorkflowExecution_Zapper", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
		}
		if ((v$ as ScanWorkflowActivityResult).NextPageToken != null) {
			void (__goscriptAwait = (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? (enc as Exclude<zapcore.ObjectEncoder, null>) : $.pointerValue<Exclude<zapcore.ObjectEncoder, null>>(enc)).AddString("nextPageToken", base64.Encoding.prototype.EncodeToString.call(base64.StdEncoding, (v$ as ScanWorkflowActivityResult).NextPageToken)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		return err
	}

	public async String(): globalThis.Promise<string> {
		const v: ScanWorkflowActivityResult | $.VarRef<ScanWorkflowActivityResult> | null = this;
		const v$: ScanWorkflowActivityResult = v == null ? $.pointerTarget<ScanWorkflowActivityResult>(v) : (v as any).__isVarRef === true ? (v as any).value : (v as any).__goValue === undefined ? (v as any) : $.pointerTarget<ScanWorkflowActivityResult>(v)
		if (v == null) {
			return "<nil>"
		}

		let fields: string[] = $.arrayValue(globalThis.Array.from({ length: 2 }, () => ""))
		let i = 0
		if ((v$ as ScanWorkflowActivityResult).Executions != null) {
			fields[i] = await fmt.Sprintf("Executions: %v", $.interfaceValue((v$ as ScanWorkflowActivityResult).Executions, "[]*shared.WorkflowExecution", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("shared.WorkflowExecution"))))
			i++
		}
		if ((v$ as ScanWorkflowActivityResult).NextPageToken != null) {
			fields[i] = await fmt.Sprintf("NextPageToken: %v", $.interfaceValue((v$ as ScanWorkflowActivityResult).NextPageToken, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))))
			i++
		}

		return fmt.Sprintf("ScanWorkflowActivityResult{%v}", strings.Join($.goSlice(fields, undefined, i), ", "))
	}

	public ToWire(): [wire.Value, $.GoError] {
		const v: ScanWorkflowActivityResult | $.VarRef<ScanWorkflowActivityResult> | null = this;
		const v$: ScanWorkflowActivityResult = v == null ? $.pointerTarget<ScanWorkflowActivityResult>(v) : (v as any).__isVarRef === true ? (v as any).value : (v as any).__goValue === undefined ? (v as any) : $.pointerTarget<ScanWorkflowActivityResult>(v)
		let fields: wire.Field[] = $.arrayValue(globalThis.Array.from({ length: 2 }, () => new wire.Field(undefined, true)), /* @__PURE__ */ $.arrayType("wire.Field", 2))
		let i: number = 0
		let w: wire.Value = new wire.Value(undefined, true)
		let err: $.GoError = null! as $.GoError

		if ((v$ as ScanWorkflowActivityResult).Executions != null) {
			let __goscriptAssign24_0: wire.Value = wire.NewValueList($.namedValueInterfaceValue<wire.ValueList | null>(((v$ as ScanWorkflowActivityResult).Executions as _List_WorkflowExecution_ValueList), "shadower._List_WorkflowExecution_ValueList", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic5()))
			let __goscriptAssign24_1: $.GoError = null
			w = $.assignStruct(w, __goscriptAssign24_0)
			err = __goscriptAssign24_1
			if (err != null) {
				return [(w).clone(), err]
			}
			$.assignStruct(fields[i], new wire.Field({ID: 10, Value: w}, true))
			i++
		}
		if ((v$ as ScanWorkflowActivityResult).NextPageToken != null) {
			let __goscriptAssign25_0: wire.Value = wire.NewValueBinary((v$ as ScanWorkflowActivityResult).NextPageToken)
			let __goscriptAssign25_1: $.GoError = null
			w = $.assignStruct(w, __goscriptAssign25_0)
			err = __goscriptAssign25_1
			if (err != null) {
				return [(w).clone(), err]
			}
			$.assignStruct(fields[i], new wire.Field({ID: 20, Value: w}, true))
			i++
		}

		return [wire.NewValueStruct(new wire.Struct({Fields: $.goSlice(fields, undefined, i)}, true)), null]
	}

	static __typeInfo = $.registerStructType(
		"shadower.ScanWorkflowActivityResult",
		() => new ScanWorkflowActivityResult(),
		() => [$.methodSignature("Decode", [["sr", "stream.Reader"]], ["error"], true), $.methodSignature("Encode", [["sw", "stream.Writer"]], ["error"], true), $.methodSignature("Equals", [["rhs", /* @__PURE__ */ $.pointerType("shadower.ScanWorkflowActivityResult")]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("FromWire", [["w", "wire.Value"]], ["error"], true), $.methodSignature("GetExecutions", [], [["o", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("shared.WorkflowExecution"))]], true), $.methodSignature("GetNextPageToken", [], [["o", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], true), $.methodSignature("IsSetExecutions", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("IsSetNextPageToken", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("MarshalLogObject", [["enc", "zapcore.ObjectEncoder"]], [["err", "error"]], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("ToWire", [], ["wire.Value", "error"], true)],
		ScanWorkflowActivityResult,
		() => [/* @__PURE__ */ $.structField("Executions", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("shared.WorkflowExecution")), [0], 0, true, { tag: "json:\"executions,omitempty\"" }), /* @__PURE__ */ $.structField("NextPageToken", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [1], 24, true, { tag: "json:\"nextPageToken,omitempty\"" })]
	)
}

export class WorkflowParams {
	public get Domain(): $.VarRef<string> | null {
		return this._fields.Domain
	}

	public set Domain(value: $.VarRef<string> | null) {
		this._fields.Domain = value
	}

	public get TaskList(): $.VarRef<string> | null {
		return this._fields.TaskList
	}

	public set TaskList(value: $.VarRef<string> | null) {
		this._fields.TaskList = value
	}

	public get WorkflowQuery(): $.VarRef<string> | null {
		return this._fields.WorkflowQuery
	}

	public set WorkflowQuery(value: $.VarRef<string> | null) {
		this._fields.WorkflowQuery = value
	}

	public get NextPageToken(): $.Slice<number> {
		return this._fields.NextPageToken
	}

	public set NextPageToken(value: $.Slice<number>) {
		this._fields.NextPageToken = value
	}

	public get SamplingRate(): $.VarRef<number> | null {
		return this._fields.SamplingRate
	}

	public set SamplingRate(value: $.VarRef<number> | null) {
		this._fields.SamplingRate = value
	}

	public get ShadowMode(): $.VarRef<Mode> | null {
		return this._fields.ShadowMode
	}

	public set ShadowMode(value: $.VarRef<Mode> | null) {
		this._fields.ShadowMode = value
	}

	public get ExitCondition(): ExitCondition | $.VarRef<ExitCondition> | null {
		return this._fields.ExitCondition
	}

	public set ExitCondition(value: ExitCondition | $.VarRef<ExitCondition> | null) {
		this._fields.ExitCondition = value
	}

	public get Concurrency(): $.VarRef<number> | null {
		return this._fields.Concurrency
	}

	public set Concurrency(value: $.VarRef<number> | null) {
		this._fields.Concurrency = value
	}

	public get LastRunResult(): WorkflowResult | $.VarRef<WorkflowResult> | null {
		return this._fields.LastRunResult
	}

	public set LastRunResult(value: WorkflowResult | $.VarRef<WorkflowResult> | null) {
		this._fields.LastRunResult = value
	}

	public _fields: {
		Domain: $.VarRef<string> | null
		TaskList: $.VarRef<string> | null
		WorkflowQuery: $.VarRef<string> | null
		NextPageToken: $.Slice<number>
		SamplingRate: $.VarRef<number> | null
		ShadowMode: $.VarRef<Mode> | null
		ExitCondition: ExitCondition | $.VarRef<ExitCondition> | null
		Concurrency: $.VarRef<number> | null
		LastRunResult: WorkflowResult | $.VarRef<WorkflowResult> | null
	}

	constructor(init?: Partial<{Domain?: $.VarRef<string> | null, TaskList?: $.VarRef<string> | null, WorkflowQuery?: $.VarRef<string> | null, NextPageToken?: $.Slice<number>, SamplingRate?: $.VarRef<number> | null, ShadowMode?: $.VarRef<Mode> | null, ExitCondition?: ExitCondition | $.VarRef<ExitCondition> | null, Concurrency?: $.VarRef<number> | null, LastRunResult?: WorkflowResult | $.VarRef<WorkflowResult> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Domain: init?.Domain ?? (null! as $.VarRef<string> | null),
			TaskList: init?.TaskList ?? (null! as $.VarRef<string> | null),
			WorkflowQuery: init?.WorkflowQuery ?? (null! as $.VarRef<string> | null),
			NextPageToken: init?.NextPageToken ?? (null! as $.Slice<number>),
			SamplingRate: init?.SamplingRate ?? (null! as $.VarRef<number> | null),
			ShadowMode: init?.ShadowMode ?? (null! as $.VarRef<Mode> | null),
			ExitCondition: init?.ExitCondition ?? (null! as ExitCondition | $.VarRef<ExitCondition> | null),
			Concurrency: init?.Concurrency ?? (null! as $.VarRef<number> | null),
			LastRunResult: init?.LastRunResult ?? (null! as WorkflowResult | $.VarRef<WorkflowResult> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): WorkflowParams {
		return new WorkflowParams(this, true)
	}

	public __goscriptAssign(source: WorkflowParams): void {
		const target = this._fields
		const values = source._fields
		target.Domain = values.Domain
		target.TaskList = values.TaskList
		target.WorkflowQuery = values.WorkflowQuery
		target.NextPageToken = values.NextPageToken
		target.SamplingRate = values.SamplingRate
		target.ShadowMode = values.ShadowMode
		target.ExitCondition = values.ExitCondition
		target.Concurrency = values.Concurrency
		target.LastRunResult = values.LastRunResult
	}

	public async Decode(sr: stream.Reader | null): globalThis.Promise<$.GoError> {
		let v: WorkflowParams | $.VarRef<WorkflowParams> | null = this;
		const v$: WorkflowParams = v == null ? $.pointerTarget<WorkflowParams>(v) : (v as any).__isVarRef === true ? (v as any).value : (v as any).__goValue === undefined ? (v as any) : $.pointerTarget<WorkflowParams>(v)

		{
			let err = (__goscriptAwait = (sr !== null && (sr as any).__isVarRef !== true && (sr as any).__goValue === undefined ? (sr as Exclude<stream.Reader, null>) : $.pointerValue<Exclude<stream.Reader, null>>(sr)).ReadStructBegin(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (err != null) {
				return err
			}
		}

		let [fh, ok, err] = await (sr !== null && (sr as any).__isVarRef !== true && (sr as any).__goValue === undefined ? (sr as Exclude<stream.Reader, null>) : $.pointerValue<Exclude<stream.Reader, null>>(sr)).ReadFieldBegin()
		if (err != null) {
			return err
		}

		while (ok) {
			switch ((true as boolean)) {
				case (fh.ID == 10) && (fh.Type == 11):
				{
					let x: $.VarRef<string> = $.varRef("")
					let __goscriptTuple23: any = await (sr !== null && (sr as any).__isVarRef !== true && (sr as any).__goValue === undefined ? (sr as Exclude<stream.Reader, null>) : $.pointerValue<Exclude<stream.Reader, null>>(sr)).ReadString()
					x.value = __goscriptTuple23[0]
					err = __goscriptTuple23[1];
					;(v$ as WorkflowParams).Domain = x
					if (err != null) {
						return err
					}
					break
				}
				case (fh.ID == 20) && (fh.Type == 11):
				{
					let x: $.VarRef<string> = $.varRef("")
					let __goscriptTuple24: any = await (sr !== null && (sr as any).__isVarRef !== true && (sr as any).__goValue === undefined ? (sr as Exclude<stream.Reader, null>) : $.pointerValue<Exclude<stream.Reader, null>>(sr)).ReadString()
					x.value = __goscriptTuple24[0]
					err = __goscriptTuple24[1];
					;(v$ as WorkflowParams).TaskList = x
					if (err != null) {
						return err
					}
					break
				}
				case (fh.ID == 30) && (fh.Type == 11):
				{
					let x: $.VarRef<string> = $.varRef("")
					let __goscriptTuple25: any = await (sr !== null && (sr as any).__isVarRef !== true && (sr as any).__goValue === undefined ? (sr as Exclude<stream.Reader, null>) : $.pointerValue<Exclude<stream.Reader, null>>(sr)).ReadString()
					x.value = __goscriptTuple25[0]
					err = __goscriptTuple25[1];
					;(v$ as WorkflowParams).WorkflowQuery = x
					if (err != null) {
						return err
					}
					break
				}
				case (fh.ID == 40) && (fh.Type == 11):
				{
					let __goscriptTuple26: any = await (sr !== null && (sr as any).__isVarRef !== true && (sr as any).__goValue === undefined ? (sr as Exclude<stream.Reader, null>) : $.pointerValue<Exclude<stream.Reader, null>>(sr)).ReadBinary();
					;(v$ as WorkflowParams).NextPageToken = __goscriptTuple26[0]
					err = __goscriptTuple26[1]
					if (err != null) {
						return err
					}
					break
				}
				case (fh.ID == 50) && (fh.Type == 4):
				{
					let x: $.VarRef<number> = $.varRef(0)
					let __goscriptTuple27: any = await (sr !== null && (sr as any).__isVarRef !== true && (sr as any).__goValue === undefined ? (sr as Exclude<stream.Reader, null>) : $.pointerValue<Exclude<stream.Reader, null>>(sr)).ReadDouble()
					x.value = __goscriptTuple27[0]
					err = __goscriptTuple27[1];
					;(v$ as WorkflowParams).SamplingRate = x
					if (err != null) {
						return err
					}
					break
				}
				case (fh.ID == 60) && (fh.Type == 8):
				{
					let x: $.VarRef<Mode> = $.varRef(0)
					let __goscriptTuple28: any = await _Mode_Decode(sr)
					x.value = __goscriptTuple28[0]
					err = __goscriptTuple28[1];
					;(v$ as WorkflowParams).ShadowMode = x
					if (err != null) {
						return err
					}
					break
				}
				case (fh.ID == 70) && (fh.Type == 12):
				{
					let __goscriptTuple29: any = await _ExitCondition_Decode(sr);
					;(v$ as WorkflowParams).ExitCondition = __goscriptTuple29[0]
					err = __goscriptTuple29[1]
					if (err != null) {
						return err
					}
					break
				}
				case (fh.ID == 80) && (fh.Type == 8):
				{
					let x: $.VarRef<number> = $.varRef(0)
					let __goscriptTuple30: any = await (sr !== null && (sr as any).__isVarRef !== true && (sr as any).__goValue === undefined ? (sr as Exclude<stream.Reader, null>) : $.pointerValue<Exclude<stream.Reader, null>>(sr)).ReadInt32()
					x.value = __goscriptTuple30[0]
					err = __goscriptTuple30[1];
					;(v$ as WorkflowParams).Concurrency = x
					if (err != null) {
						return err
					}
					break
				}
				case (fh.ID == 90) && (fh.Type == 12):
				{
					let __goscriptTuple31: any = await _WorkflowResult_Decode(sr);
					;(v$ as WorkflowParams).LastRunResult = __goscriptTuple31[0]
					err = __goscriptTuple31[1]
					if (err != null) {
						return err
					}
					break
				}
				default:
				{
					{
						let __goscriptShadow19 = (__goscriptAwait = (sr !== null && (sr as any).__isVarRef !== true && (sr as any).__goValue === undefined ? (sr as Exclude<stream.Reader, null>) : $.pointerValue<Exclude<stream.Reader, null>>(sr)).Skip(fh.Type), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
						if (__goscriptShadow19 != null) {
							return __goscriptShadow19
						}
					}
					break
				}
			}

			{
				let __goscriptShadow20 = (__goscriptAwait = (sr !== null && (sr as any).__isVarRef !== true && (sr as any).__goValue === undefined ? (sr as Exclude<stream.Reader, null>) : $.pointerValue<Exclude<stream.Reader, null>>(sr)).ReadFieldEnd(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (__goscriptShadow20 != null) {
					return __goscriptShadow20
				}
			}

			{
				let __goscriptTuple32: any = await (sr !== null && (sr as any).__isVarRef !== true && (sr as any).__goValue === undefined ? (sr as Exclude<stream.Reader, null>) : $.pointerValue<Exclude<stream.Reader, null>>(sr)).ReadFieldBegin()
				fh = $.assignStruct(fh, __goscriptTuple32[0])
				ok = __goscriptTuple32[1]
				err = __goscriptTuple32[2]
				if (err != null) {
					return err
				}
			}
		}

		{
			let __goscriptShadow21 = (__goscriptAwait = (sr !== null && (sr as any).__isVarRef !== true && (sr as any).__goValue === undefined ? (sr as Exclude<stream.Reader, null>) : $.pointerValue<Exclude<stream.Reader, null>>(sr)).ReadStructEnd(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (__goscriptShadow21 != null) {
				return __goscriptShadow21
			}
		}

		return null
	}

	public async Encode(sw: stream.Writer | null): globalThis.Promise<$.GoError> {
		const v: WorkflowParams | $.VarRef<WorkflowParams> | null = this;
		const v$: WorkflowParams = v == null ? $.pointerTarget<WorkflowParams>(v) : (v as any).__isVarRef === true ? (v as any).value : (v as any).__goValue === undefined ? (v as any) : $.pointerTarget<WorkflowParams>(v)
		{
			let err = (__goscriptAwait = (sw !== null && (sw as any).__isVarRef !== true && (sw as any).__goValue === undefined ? (sw as Exclude<stream.Writer, null>) : $.pointerValue<Exclude<stream.Writer, null>>(sw)).WriteStructBegin(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (err != null) {
				return err
			}
		}

		if ((v$ as WorkflowParams).Domain != null) {
			{
				let err = (__goscriptAwait = (sw !== null && (sw as any).__isVarRef !== true && (sw as any).__goValue === undefined ? (sw as Exclude<stream.Writer, null>) : $.pointerValue<Exclude<stream.Writer, null>>(sw)).WriteFieldBegin(new stream.FieldHeader({ID: 10, Type: 11}, true)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (err != null) {
					return err
				}
			}
			{
				let err = (__goscriptAwait = (sw !== null && (sw as any).__isVarRef !== true && (sw as any).__goValue === undefined ? (sw as Exclude<stream.Writer, null>) : $.pointerValue<Exclude<stream.Writer, null>>(sw)).WriteString($.pointerValue<string>(((v$ as WorkflowParams).Domain))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (err != null) {
					return err
				}
			}
			{
				let err = (__goscriptAwait = (sw !== null && (sw as any).__isVarRef !== true && (sw as any).__goValue === undefined ? (sw as Exclude<stream.Writer, null>) : $.pointerValue<Exclude<stream.Writer, null>>(sw)).WriteFieldEnd(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (err != null) {
					return err
				}
			}
		}

		if ((v$ as WorkflowParams).TaskList != null) {
			{
				let err = (__goscriptAwait = (sw !== null && (sw as any).__isVarRef !== true && (sw as any).__goValue === undefined ? (sw as Exclude<stream.Writer, null>) : $.pointerValue<Exclude<stream.Writer, null>>(sw)).WriteFieldBegin(new stream.FieldHeader({ID: 20, Type: 11}, true)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (err != null) {
					return err
				}
			}
			{
				let err = (__goscriptAwait = (sw !== null && (sw as any).__isVarRef !== true && (sw as any).__goValue === undefined ? (sw as Exclude<stream.Writer, null>) : $.pointerValue<Exclude<stream.Writer, null>>(sw)).WriteString($.pointerValue<string>(((v$ as WorkflowParams).TaskList))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (err != null) {
					return err
				}
			}
			{
				let err = (__goscriptAwait = (sw !== null && (sw as any).__isVarRef !== true && (sw as any).__goValue === undefined ? (sw as Exclude<stream.Writer, null>) : $.pointerValue<Exclude<stream.Writer, null>>(sw)).WriteFieldEnd(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (err != null) {
					return err
				}
			}
		}

		if ((v$ as WorkflowParams).WorkflowQuery != null) {
			{
				let err = (__goscriptAwait = (sw !== null && (sw as any).__isVarRef !== true && (sw as any).__goValue === undefined ? (sw as Exclude<stream.Writer, null>) : $.pointerValue<Exclude<stream.Writer, null>>(sw)).WriteFieldBegin(new stream.FieldHeader({ID: 30, Type: 11}, true)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (err != null) {
					return err
				}
			}
			{
				let err = (__goscriptAwait = (sw !== null && (sw as any).__isVarRef !== true && (sw as any).__goValue === undefined ? (sw as Exclude<stream.Writer, null>) : $.pointerValue<Exclude<stream.Writer, null>>(sw)).WriteString($.pointerValue<string>(((v$ as WorkflowParams).WorkflowQuery))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (err != null) {
					return err
				}
			}
			{
				let err = (__goscriptAwait = (sw !== null && (sw as any).__isVarRef !== true && (sw as any).__goValue === undefined ? (sw as Exclude<stream.Writer, null>) : $.pointerValue<Exclude<stream.Writer, null>>(sw)).WriteFieldEnd(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (err != null) {
					return err
				}
			}
		}

		if ((v$ as WorkflowParams).NextPageToken != null) {
			{
				let err = (__goscriptAwait = (sw !== null && (sw as any).__isVarRef !== true && (sw as any).__goValue === undefined ? (sw as Exclude<stream.Writer, null>) : $.pointerValue<Exclude<stream.Writer, null>>(sw)).WriteFieldBegin(new stream.FieldHeader({ID: 40, Type: 11}, true)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (err != null) {
					return err
				}
			}
			{
				let err = (__goscriptAwait = (sw !== null && (sw as any).__isVarRef !== true && (sw as any).__goValue === undefined ? (sw as Exclude<stream.Writer, null>) : $.pointerValue<Exclude<stream.Writer, null>>(sw)).WriteBinary((v$ as WorkflowParams).NextPageToken), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (err != null) {
					return err
				}
			}
			{
				let err = (__goscriptAwait = (sw !== null && (sw as any).__isVarRef !== true && (sw as any).__goValue === undefined ? (sw as Exclude<stream.Writer, null>) : $.pointerValue<Exclude<stream.Writer, null>>(sw)).WriteFieldEnd(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (err != null) {
					return err
				}
			}
		}

		if ((v$ as WorkflowParams).SamplingRate != null) {
			{
				let err = (__goscriptAwait = (sw !== null && (sw as any).__isVarRef !== true && (sw as any).__goValue === undefined ? (sw as Exclude<stream.Writer, null>) : $.pointerValue<Exclude<stream.Writer, null>>(sw)).WriteFieldBegin(new stream.FieldHeader({ID: 50, Type: 4}, true)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (err != null) {
					return err
				}
			}
			{
				let err = (__goscriptAwait = (sw !== null && (sw as any).__isVarRef !== true && (sw as any).__goValue === undefined ? (sw as Exclude<stream.Writer, null>) : $.pointerValue<Exclude<stream.Writer, null>>(sw)).WriteDouble($.pointerValue<number>(((v$ as WorkflowParams).SamplingRate))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (err != null) {
					return err
				}
			}
			{
				let err = (__goscriptAwait = (sw !== null && (sw as any).__isVarRef !== true && (sw as any).__goValue === undefined ? (sw as Exclude<stream.Writer, null>) : $.pointerValue<Exclude<stream.Writer, null>>(sw)).WriteFieldEnd(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (err != null) {
					return err
				}
			}
		}

		if ((v$ as WorkflowParams).ShadowMode != null) {
			{
				let err = (__goscriptAwait = (sw !== null && (sw as any).__isVarRef !== true && (sw as any).__goValue === undefined ? (sw as Exclude<stream.Writer, null>) : $.pointerValue<Exclude<stream.Writer, null>>(sw)).WriteFieldBegin(new stream.FieldHeader({ID: 60, Type: 8}, true)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (err != null) {
					return err
				}
			}
			{
				let err = await Mode_Encode($.pointerValue<Mode>((v$ as WorkflowParams).ShadowMode), sw)
				if (err != null) {
					return err
				}
			}
			{
				let err = (__goscriptAwait = (sw !== null && (sw as any).__isVarRef !== true && (sw as any).__goValue === undefined ? (sw as Exclude<stream.Writer, null>) : $.pointerValue<Exclude<stream.Writer, null>>(sw)).WriteFieldEnd(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (err != null) {
					return err
				}
			}
		}

		if ((v$ as WorkflowParams).ExitCondition != null) {
			{
				let err = (__goscriptAwait = (sw !== null && (sw as any).__isVarRef !== true && (sw as any).__goValue === undefined ? (sw as Exclude<stream.Writer, null>) : $.pointerValue<Exclude<stream.Writer, null>>(sw)).WriteFieldBegin(new stream.FieldHeader({ID: 70, Type: 12}, true)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (err != null) {
					return err
				}
			}
			{
				let err = await ExitCondition.prototype.Encode.call((v$ as WorkflowParams).ExitCondition, sw)
				if (err != null) {
					return err
				}
			}
			{
				let err = (__goscriptAwait = (sw !== null && (sw as any).__isVarRef !== true && (sw as any).__goValue === undefined ? (sw as Exclude<stream.Writer, null>) : $.pointerValue<Exclude<stream.Writer, null>>(sw)).WriteFieldEnd(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (err != null) {
					return err
				}
			}
		}

		if ((v$ as WorkflowParams).Concurrency != null) {
			{
				let err = (__goscriptAwait = (sw !== null && (sw as any).__isVarRef !== true && (sw as any).__goValue === undefined ? (sw as Exclude<stream.Writer, null>) : $.pointerValue<Exclude<stream.Writer, null>>(sw)).WriteFieldBegin(new stream.FieldHeader({ID: 80, Type: 8}, true)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (err != null) {
					return err
				}
			}
			{
				let err = (__goscriptAwait = (sw !== null && (sw as any).__isVarRef !== true && (sw as any).__goValue === undefined ? (sw as Exclude<stream.Writer, null>) : $.pointerValue<Exclude<stream.Writer, null>>(sw)).WriteInt32($.pointerValue<number>(((v$ as WorkflowParams).Concurrency))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (err != null) {
					return err
				}
			}
			{
				let err = (__goscriptAwait = (sw !== null && (sw as any).__isVarRef !== true && (sw as any).__goValue === undefined ? (sw as Exclude<stream.Writer, null>) : $.pointerValue<Exclude<stream.Writer, null>>(sw)).WriteFieldEnd(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (err != null) {
					return err
				}
			}
		}

		if ((v$ as WorkflowParams).LastRunResult != null) {
			{
				let err = (__goscriptAwait = (sw !== null && (sw as any).__isVarRef !== true && (sw as any).__goValue === undefined ? (sw as Exclude<stream.Writer, null>) : $.pointerValue<Exclude<stream.Writer, null>>(sw)).WriteFieldBegin(new stream.FieldHeader({ID: 90, Type: 12}, true)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (err != null) {
					return err
				}
			}
			{
				let err = await WorkflowResult.prototype.Encode.call((v$ as WorkflowParams).LastRunResult, sw)
				if (err != null) {
					return err
				}
			}
			{
				let err = (__goscriptAwait = (sw !== null && (sw as any).__isVarRef !== true && (sw as any).__goValue === undefined ? (sw as Exclude<stream.Writer, null>) : $.pointerValue<Exclude<stream.Writer, null>>(sw)).WriteFieldEnd(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (err != null) {
					return err
				}
			}
		}

		return (sw !== null && (sw as any).__isVarRef !== true && (sw as any).__goValue === undefined ? (sw as Exclude<stream.Writer, null>) : $.pointerValue<Exclude<stream.Writer, null>>(sw)).WriteStructEnd()
	}

	public Equals(rhs: WorkflowParams | $.VarRef<WorkflowParams> | null): boolean {
		const v: WorkflowParams | $.VarRef<WorkflowParams> | null = this;
		const v$: WorkflowParams = v == null ? $.pointerTarget<WorkflowParams>(v) : (v as any).__isVarRef === true ? (v as any).value : (v as any).__goValue === undefined ? (v as any) : $.pointerTarget<WorkflowParams>(v)
		const rhs$: WorkflowParams = rhs == null ? $.pointerTarget<WorkflowParams>(rhs) : (rhs as any).__isVarRef === true ? (rhs as any).value : (rhs as any).__goValue === undefined ? (rhs as any) : $.pointerTarget<WorkflowParams>(rhs)
		if (v == null) {
			return rhs == null
		} else {
			if (rhs == null) {
				return false
			}
		}
		if (!_String_EqualsPtr((v$ as WorkflowParams).Domain, (rhs$ as WorkflowParams).Domain)) {
			return false
		}
		if (!_String_EqualsPtr((v$ as WorkflowParams).TaskList, (rhs$ as WorkflowParams).TaskList)) {
			return false
		}
		if (!_String_EqualsPtr((v$ as WorkflowParams).WorkflowQuery, (rhs$ as WorkflowParams).WorkflowQuery)) {
			return false
		}
		if (!((((v$ as WorkflowParams).NextPageToken == null) && ((rhs$ as WorkflowParams).NextPageToken == null)) || ((((v$ as WorkflowParams).NextPageToken != null) && ((rhs$ as WorkflowParams).NextPageToken != null)) && bytes.Equal((v$ as WorkflowParams).NextPageToken, (rhs$ as WorkflowParams).NextPageToken)))) {
			return false
		}
		if (!_Double_EqualsPtr((v$ as WorkflowParams).SamplingRate, (rhs$ as WorkflowParams).SamplingRate)) {
			return false
		}
		if (!_Mode_EqualsPtr((v$ as WorkflowParams).ShadowMode, (rhs$ as WorkflowParams).ShadowMode)) {
			return false
		}
		if (!((((v$ as WorkflowParams).ExitCondition == null) && ((rhs$ as WorkflowParams).ExitCondition == null)) || ((((v$ as WorkflowParams).ExitCondition != null) && ((rhs$ as WorkflowParams).ExitCondition != null)) && ExitCondition.prototype.Equals.call((v$ as WorkflowParams).ExitCondition, (rhs$ as WorkflowParams).ExitCondition)))) {
			return false
		}
		if (!_I32_EqualsPtr((v$ as WorkflowParams).Concurrency, (rhs$ as WorkflowParams).Concurrency)) {
			return false
		}
		if (!((((v$ as WorkflowParams).LastRunResult == null) && ((rhs$ as WorkflowParams).LastRunResult == null)) || ((((v$ as WorkflowParams).LastRunResult != null) && ((rhs$ as WorkflowParams).LastRunResult != null)) && WorkflowResult.prototype.Equals.call((v$ as WorkflowParams).LastRunResult, (rhs$ as WorkflowParams).LastRunResult)))) {
			return false
		}

		return true
	}

	public FromWire(__goscriptParam6: wire.Value): $.GoError {
		let v: WorkflowParams | $.VarRef<WorkflowParams> | null = this;
		let w: $.VarRef<wire.Value> = $.varRef(__goscriptParam6)
		const v$: WorkflowParams = v == null ? $.pointerTarget<WorkflowParams>(v) : (v as any).__isVarRef === true ? (v as any).value : (v as any).__goValue === undefined ? (v as any) : $.pointerTarget<WorkflowParams>(v)
		let err: $.GoError = null! as $.GoError

		for (let __goscriptRangeTarget9 = w.value.GetStruct().Fields, __goscriptRangeWindow9 = $.sliceRange(__goscriptRangeTarget9), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow9.length; __rangeIndex++) {
			let field = ((__goscriptRangeWindow9.backing[__goscriptRangeWindow9.offset + __rangeIndex] as wire.Field)).clone()
			switch (field.ID) {
				case 10:
				{
					if (field.Value.Type() == 11) {
						let x: $.VarRef<string> = $.varRef("")
						let __goscriptAssign26_0: string = field.Value.GetString()
						let __goscriptAssign26_1: $.GoError = null
						x.value = __goscriptAssign26_0
						err = __goscriptAssign26_1;
						;(v$ as WorkflowParams).Domain = x
						if (err != null) {
							return err
						}
					}
					break
				}
				case 20:
				{
					if (field.Value.Type() == 11) {
						let x: $.VarRef<string> = $.varRef("")
						let __goscriptAssign27_0: string = field.Value.GetString()
						let __goscriptAssign27_1: $.GoError = null
						x.value = __goscriptAssign27_0
						err = __goscriptAssign27_1;
						;(v$ as WorkflowParams).TaskList = x
						if (err != null) {
							return err
						}
					}
					break
				}
				case 30:
				{
					if (field.Value.Type() == 11) {
						let x: $.VarRef<string> = $.varRef("")
						let __goscriptAssign28_0: string = field.Value.GetString()
						let __goscriptAssign28_1: $.GoError = null
						x.value = __goscriptAssign28_0
						err = __goscriptAssign28_1;
						;(v$ as WorkflowParams).WorkflowQuery = x
						if (err != null) {
							return err
						}
					}
					break
				}
				case 40:
				{
					if (field.Value.Type() == 11) {
						let __goscriptAssign29_0: $.Slice<number> = field.Value.GetBinary()
						let __goscriptAssign29_1: $.GoError = null;
						;(v$ as WorkflowParams).NextPageToken = __goscriptAssign29_0
						err = __goscriptAssign29_1
						if (err != null) {
							return err
						}
					}
					break
				}
				case 50:
				{
					if (field.Value.Type() == 4) {
						let x: $.VarRef<number> = $.varRef(0)
						let __goscriptAssign30_0: number = field.Value.GetDouble()
						let __goscriptAssign30_1: $.GoError = null
						x.value = __goscriptAssign30_0
						err = __goscriptAssign30_1;
						;(v$ as WorkflowParams).SamplingRate = x
						if (err != null) {
							return err
						}
					}
					break
				}
				case 60:
				{
					if (field.Value.Type() == 8) {
						let x: $.VarRef<Mode> = $.varRef(0)
						let __goscriptTuple33: any = _Mode_Read((field.Value).clone())
						x.value = __goscriptTuple33[0]
						err = __goscriptTuple33[1];
						;(v$ as WorkflowParams).ShadowMode = x
						if (err != null) {
							return err
						}
					}
					break
				}
				case 70:
				{
					if (field.Value.Type() == 12) {
						let __goscriptTuple34: any = _ExitCondition_Read((field.Value).clone());
						;(v$ as WorkflowParams).ExitCondition = __goscriptTuple34[0]
						err = __goscriptTuple34[1]
						if (err != null) {
							return err
						}
					}
					break
				}
				case 80:
				{
					if (field.Value.Type() == 8) {
						let x: $.VarRef<number> = $.varRef(0)
						let __goscriptAssign31_0: number = field.Value.GetI32()
						let __goscriptAssign31_1: $.GoError = null
						x.value = __goscriptAssign31_0
						err = __goscriptAssign31_1;
						;(v$ as WorkflowParams).Concurrency = x
						if (err != null) {
							return err
						}
					}
					break
				}
				case 90:
				{
					if (field.Value.Type() == 12) {
						let __goscriptTuple35: any = _WorkflowResult_Read((field.Value).clone());
						;(v$ as WorkflowParams).LastRunResult = __goscriptTuple35[0]
						err = __goscriptTuple35[1]
						if (err != null) {
							return err
						}
					}
					break
				}
			}
		}

		return null
	}

	public GetConcurrency(): number {
		const v: WorkflowParams | $.VarRef<WorkflowParams> | null = this;
		let o: number = 0
		const v$: WorkflowParams = v == null ? $.pointerTarget<WorkflowParams>(v) : (v as any).__isVarRef === true ? (v as any).value : (v as any).__goValue === undefined ? (v as any) : $.pointerTarget<WorkflowParams>(v)
		if ((v != null) && ((v$ as WorkflowParams).Concurrency != null)) {
			return $.pointerValue<number>((v$ as WorkflowParams).Concurrency)
		}

		return o
	}

	public GetDomain(): string {
		const v: WorkflowParams | $.VarRef<WorkflowParams> | null = this;
		let o: string = ""
		const v$: WorkflowParams = v == null ? $.pointerTarget<WorkflowParams>(v) : (v as any).__isVarRef === true ? (v as any).value : (v as any).__goValue === undefined ? (v as any) : $.pointerTarget<WorkflowParams>(v)
		if ((v != null) && ((v$ as WorkflowParams).Domain != null)) {
			return $.pointerValue<string>((v$ as WorkflowParams).Domain)
		}

		return o
	}

	public GetExitCondition(): ExitCondition | $.VarRef<ExitCondition> | null {
		const v: WorkflowParams | $.VarRef<WorkflowParams> | null = this;
		let o: ExitCondition | $.VarRef<ExitCondition> | null = null! as ExitCondition | $.VarRef<ExitCondition> | null
		const v$: WorkflowParams = v == null ? $.pointerTarget<WorkflowParams>(v) : (v as any).__isVarRef === true ? (v as any).value : (v as any).__goValue === undefined ? (v as any) : $.pointerTarget<WorkflowParams>(v)
		if ((v != null) && ((v$ as WorkflowParams).ExitCondition != null)) {
			return (v$ as WorkflowParams).ExitCondition
		}

		return o
	}

	public GetLastRunResult(): WorkflowResult | $.VarRef<WorkflowResult> | null {
		const v: WorkflowParams | $.VarRef<WorkflowParams> | null = this;
		let o: WorkflowResult | $.VarRef<WorkflowResult> | null = null! as WorkflowResult | $.VarRef<WorkflowResult> | null
		const v$: WorkflowParams = v == null ? $.pointerTarget<WorkflowParams>(v) : (v as any).__isVarRef === true ? (v as any).value : (v as any).__goValue === undefined ? (v as any) : $.pointerTarget<WorkflowParams>(v)
		if ((v != null) && ((v$ as WorkflowParams).LastRunResult != null)) {
			return (v$ as WorkflowParams).LastRunResult
		}

		return o
	}

	public GetNextPageToken(): $.Slice<number> {
		const v: WorkflowParams | $.VarRef<WorkflowParams> | null = this;
		let o: $.Slice<number> = null! as $.Slice<number>
		const v$: WorkflowParams = v == null ? $.pointerTarget<WorkflowParams>(v) : (v as any).__isVarRef === true ? (v as any).value : (v as any).__goValue === undefined ? (v as any) : $.pointerTarget<WorkflowParams>(v)
		if ((v != null) && ((v$ as WorkflowParams).NextPageToken != null)) {
			return (v$ as WorkflowParams).NextPageToken
		}

		return o
	}

	public GetSamplingRate(): number {
		const v: WorkflowParams | $.VarRef<WorkflowParams> | null = this;
		let o: number = 0
		const v$: WorkflowParams = v == null ? $.pointerTarget<WorkflowParams>(v) : (v as any).__isVarRef === true ? (v as any).value : (v as any).__goValue === undefined ? (v as any) : $.pointerTarget<WorkflowParams>(v)
		if ((v != null) && ((v$ as WorkflowParams).SamplingRate != null)) {
			return $.pointerValue<number>((v$ as WorkflowParams).SamplingRate)
		}

		return o
	}

	public GetShadowMode(): Mode {
		const v: WorkflowParams | $.VarRef<WorkflowParams> | null = this;
		let o: Mode = 0
		const v$: WorkflowParams = v == null ? $.pointerTarget<WorkflowParams>(v) : (v as any).__isVarRef === true ? (v as any).value : (v as any).__goValue === undefined ? (v as any) : $.pointerTarget<WorkflowParams>(v)
		if ((v != null) && ((v$ as WorkflowParams).ShadowMode != null)) {
			return $.pointerValue<Mode>((v$ as WorkflowParams).ShadowMode)
		}

		return o
	}

	public GetTaskList(): string {
		const v: WorkflowParams | $.VarRef<WorkflowParams> | null = this;
		let o: string = ""
		const v$: WorkflowParams = v == null ? $.pointerTarget<WorkflowParams>(v) : (v as any).__isVarRef === true ? (v as any).value : (v as any).__goValue === undefined ? (v as any) : $.pointerTarget<WorkflowParams>(v)
		if ((v != null) && ((v$ as WorkflowParams).TaskList != null)) {
			return $.pointerValue<string>((v$ as WorkflowParams).TaskList)
		}

		return o
	}

	public GetWorkflowQuery(): string {
		const v: WorkflowParams | $.VarRef<WorkflowParams> | null = this;
		let o: string = ""
		const v$: WorkflowParams = v == null ? $.pointerTarget<WorkflowParams>(v) : (v as any).__isVarRef === true ? (v as any).value : (v as any).__goValue === undefined ? (v as any) : $.pointerTarget<WorkflowParams>(v)
		if ((v != null) && ((v$ as WorkflowParams).WorkflowQuery != null)) {
			return $.pointerValue<string>((v$ as WorkflowParams).WorkflowQuery)
		}

		return o
	}

	public IsSetConcurrency(): boolean {
		const v: WorkflowParams | $.VarRef<WorkflowParams> | null = this;
		return (v != null) && ($.pointerValue<WorkflowParams>(v).Concurrency != null)
	}

	public IsSetDomain(): boolean {
		const v: WorkflowParams | $.VarRef<WorkflowParams> | null = this;
		return (v != null) && ($.pointerValue<WorkflowParams>(v).Domain != null)
	}

	public IsSetExitCondition(): boolean {
		const v: WorkflowParams | $.VarRef<WorkflowParams> | null = this;
		return (v != null) && ($.pointerValue<WorkflowParams>(v).ExitCondition != null)
	}

	public IsSetLastRunResult(): boolean {
		const v: WorkflowParams | $.VarRef<WorkflowParams> | null = this;
		return (v != null) && ($.pointerValue<WorkflowParams>(v).LastRunResult != null)
	}

	public IsSetNextPageToken(): boolean {
		const v: WorkflowParams | $.VarRef<WorkflowParams> | null = this;
		return (v != null) && ($.pointerValue<WorkflowParams>(v).NextPageToken != null)
	}

	public IsSetSamplingRate(): boolean {
		const v: WorkflowParams | $.VarRef<WorkflowParams> | null = this;
		return (v != null) && ($.pointerValue<WorkflowParams>(v).SamplingRate != null)
	}

	public IsSetShadowMode(): boolean {
		const v: WorkflowParams | $.VarRef<WorkflowParams> | null = this;
		return (v != null) && ($.pointerValue<WorkflowParams>(v).ShadowMode != null)
	}

	public IsSetTaskList(): boolean {
		const v: WorkflowParams | $.VarRef<WorkflowParams> | null = this;
		return (v != null) && ($.pointerValue<WorkflowParams>(v).TaskList != null)
	}

	public IsSetWorkflowQuery(): boolean {
		const v: WorkflowParams | $.VarRef<WorkflowParams> | null = this;
		return (v != null) && ($.pointerValue<WorkflowParams>(v).WorkflowQuery != null)
	}

	public async MarshalLogObject(enc: zapcore.ObjectEncoder | null): globalThis.Promise<$.GoError> {
		const v: WorkflowParams | $.VarRef<WorkflowParams> | null = this;
		let err: $.GoError = null! as $.GoError
		const v$: WorkflowParams = v == null ? $.pointerTarget<WorkflowParams>(v) : (v as any).__isVarRef === true ? (v as any).value : (v as any).__goValue === undefined ? (v as any) : $.pointerTarget<WorkflowParams>(v)
		if (v == null) {
			return null
		}
		if ((v$ as WorkflowParams).Domain != null) {
			void (__goscriptAwait = (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? (enc as Exclude<zapcore.ObjectEncoder, null>) : $.pointerValue<Exclude<zapcore.ObjectEncoder, null>>(enc)).AddString("domain", $.pointerValue<string>((v$ as WorkflowParams).Domain)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		if ((v$ as WorkflowParams).TaskList != null) {
			void (__goscriptAwait = (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? (enc as Exclude<zapcore.ObjectEncoder, null>) : $.pointerValue<Exclude<zapcore.ObjectEncoder, null>>(enc)).AddString("taskList", $.pointerValue<string>((v$ as WorkflowParams).TaskList)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		if ((v$ as WorkflowParams).WorkflowQuery != null) {
			void (__goscriptAwait = (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? (enc as Exclude<zapcore.ObjectEncoder, null>) : $.pointerValue<Exclude<zapcore.ObjectEncoder, null>>(enc)).AddString("workflowQuery", $.pointerValue<string>((v$ as WorkflowParams).WorkflowQuery)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		if ((v$ as WorkflowParams).NextPageToken != null) {
			void (__goscriptAwait = (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? (enc as Exclude<zapcore.ObjectEncoder, null>) : $.pointerValue<Exclude<zapcore.ObjectEncoder, null>>(enc)).AddString("nextPageToken", base64.Encoding.prototype.EncodeToString.call(base64.StdEncoding, (v$ as WorkflowParams).NextPageToken)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		if ((v$ as WorkflowParams).SamplingRate != null) {
			void (__goscriptAwait = (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? (enc as Exclude<zapcore.ObjectEncoder, null>) : $.pointerValue<Exclude<zapcore.ObjectEncoder, null>>(enc)).AddFloat64("samplingRate", $.pointerValue<number>((v$ as WorkflowParams).SamplingRate)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		if ((v$ as WorkflowParams).ShadowMode != null) {
			err = multierr.Append(err, (__goscriptAwait = (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? (enc as Exclude<zapcore.ObjectEncoder, null>) : $.pointerValue<Exclude<zapcore.ObjectEncoder, null>>(enc)).AddObject("shadowMode", $.namedValueInterfaceValue<zapcore.ObjectMarshaler | null>($.pointerValue<Mode>((v$ as WorkflowParams).ShadowMode), "shadower.Mode", __goscriptStatic6(), __goscriptStatic7(), __goscriptStatic8())), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
		}
		if ((v$ as WorkflowParams).ExitCondition != null) {
			err = multierr.Append(err, (__goscriptAwait = (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? (enc as Exclude<zapcore.ObjectEncoder, null>) : $.pointerValue<Exclude<zapcore.ObjectEncoder, null>>(enc)).AddObject("exitCondition", $.interfaceValue<zapcore.ObjectMarshaler | null>((v$ as WorkflowParams).ExitCondition, "*shadower.ExitCondition", /* @__PURE__ */ $.pointerType("shadower.ExitCondition"))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
		}
		if ((v$ as WorkflowParams).Concurrency != null) {
			void (__goscriptAwait = (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? (enc as Exclude<zapcore.ObjectEncoder, null>) : $.pointerValue<Exclude<zapcore.ObjectEncoder, null>>(enc)).AddInt32("concurrency", $.pointerValue<number>((v$ as WorkflowParams).Concurrency)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		if ((v$ as WorkflowParams).LastRunResult != null) {
			err = multierr.Append(err, (__goscriptAwait = (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? (enc as Exclude<zapcore.ObjectEncoder, null>) : $.pointerValue<Exclude<zapcore.ObjectEncoder, null>>(enc)).AddObject("lastRunResult", $.interfaceValue<zapcore.ObjectMarshaler | null>((v$ as WorkflowParams).LastRunResult, "*shadower.WorkflowResult", /* @__PURE__ */ $.pointerType("shadower.WorkflowResult"))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
		}
		return err
	}

	public async String(): globalThis.Promise<string> {
		const v: WorkflowParams | $.VarRef<WorkflowParams> | null = this;
		const v$: WorkflowParams = v == null ? $.pointerTarget<WorkflowParams>(v) : (v as any).__isVarRef === true ? (v as any).value : (v as any).__goValue === undefined ? (v as any) : $.pointerTarget<WorkflowParams>(v)
		if (v == null) {
			return "<nil>"
		}

		let fields: string[] = $.arrayValue(globalThis.Array.from({ length: 9 }, () => ""))
		let i = 0
		if ((v$ as WorkflowParams).Domain != null) {
			fields[i] = await fmt.Sprintf("Domain: %v", $.pointerValue<string>(((v$ as WorkflowParams).Domain)))
			i++
		}
		if ((v$ as WorkflowParams).TaskList != null) {
			fields[i] = await fmt.Sprintf("TaskList: %v", $.pointerValue<string>(((v$ as WorkflowParams).TaskList)))
			i++
		}
		if ((v$ as WorkflowParams).WorkflowQuery != null) {
			fields[i] = await fmt.Sprintf("WorkflowQuery: %v", $.pointerValue<string>(((v$ as WorkflowParams).WorkflowQuery)))
			i++
		}
		if ((v$ as WorkflowParams).NextPageToken != null) {
			fields[i] = await fmt.Sprintf("NextPageToken: %v", $.interfaceValue((v$ as WorkflowParams).NextPageToken, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))))
			i++
		}
		if ((v$ as WorkflowParams).SamplingRate != null) {
			fields[i] = await fmt.Sprintf("SamplingRate: %v", $.basicInterfaceValue($.pointerValue<number>(((v$ as WorkflowParams).SamplingRate)), "float64"))
			i++
		}
		if ((v$ as WorkflowParams).ShadowMode != null) {
			fields[i] = await fmt.Sprintf("ShadowMode: %v", $.namedValueInterfaceValue<any>($.pointerValue<Mode>(((v$ as WorkflowParams).ShadowMode)), "shadower.Mode", __goscriptStatic6(), __goscriptStatic7(), __goscriptStatic8()))
			i++
		}
		if ((v$ as WorkflowParams).ExitCondition != null) {
			fields[i] = await fmt.Sprintf("ExitCondition: %v", $.interfaceValue((v$ as WorkflowParams).ExitCondition, "*shadower.ExitCondition", /* @__PURE__ */ $.pointerType("shadower.ExitCondition")))
			i++
		}
		if ((v$ as WorkflowParams).Concurrency != null) {
			fields[i] = await fmt.Sprintf("Concurrency: %v", $.basicInterfaceValue($.pointerValue<number>(((v$ as WorkflowParams).Concurrency)), "int32"))
			i++
		}
		if ((v$ as WorkflowParams).LastRunResult != null) {
			fields[i] = await fmt.Sprintf("LastRunResult: %v", $.interfaceValue((v$ as WorkflowParams).LastRunResult, "*shadower.WorkflowResult", /* @__PURE__ */ $.pointerType("shadower.WorkflowResult")))
			i++
		}

		return fmt.Sprintf("WorkflowParams{%v}", strings.Join($.goSlice(fields, undefined, i), ", "))
	}

	public ToWire(): [wire.Value, $.GoError] {
		const v: WorkflowParams | $.VarRef<WorkflowParams> | null = this;
		const v$: WorkflowParams = v == null ? $.pointerTarget<WorkflowParams>(v) : (v as any).__isVarRef === true ? (v as any).value : (v as any).__goValue === undefined ? (v as any) : $.pointerTarget<WorkflowParams>(v)
		let fields: wire.Field[] = $.arrayValue(globalThis.Array.from({ length: 9 }, () => new wire.Field(undefined, true)), /* @__PURE__ */ $.arrayType("wire.Field", 9))
		let i: number = 0
		let w: wire.Value = new wire.Value(undefined, true)
		let err: $.GoError = null! as $.GoError

		if ((v$ as WorkflowParams).Domain != null) {
			let __goscriptAssign32_0: wire.Value = wire.NewValueString($.pointerValue<string>(((v$ as WorkflowParams).Domain)))
			let __goscriptAssign32_1: $.GoError = null
			w = $.assignStruct(w, __goscriptAssign32_0)
			err = __goscriptAssign32_1
			if (err != null) {
				return [(w).clone(), err]
			}
			$.assignStruct(fields[i], new wire.Field({ID: 10, Value: w}, true))
			i++
		}
		if ((v$ as WorkflowParams).TaskList != null) {
			let __goscriptAssign33_0: wire.Value = wire.NewValueString($.pointerValue<string>(((v$ as WorkflowParams).TaskList)))
			let __goscriptAssign33_1: $.GoError = null
			w = $.assignStruct(w, __goscriptAssign33_0)
			err = __goscriptAssign33_1
			if (err != null) {
				return [(w).clone(), err]
			}
			$.assignStruct(fields[i], new wire.Field({ID: 20, Value: w}, true))
			i++
		}
		if ((v$ as WorkflowParams).WorkflowQuery != null) {
			let __goscriptAssign34_0: wire.Value = wire.NewValueString($.pointerValue<string>(((v$ as WorkflowParams).WorkflowQuery)))
			let __goscriptAssign34_1: $.GoError = null
			w = $.assignStruct(w, __goscriptAssign34_0)
			err = __goscriptAssign34_1
			if (err != null) {
				return [(w).clone(), err]
			}
			$.assignStruct(fields[i], new wire.Field({ID: 30, Value: w}, true))
			i++
		}
		if ((v$ as WorkflowParams).NextPageToken != null) {
			let __goscriptAssign35_0: wire.Value = wire.NewValueBinary((v$ as WorkflowParams).NextPageToken)
			let __goscriptAssign35_1: $.GoError = null
			w = $.assignStruct(w, __goscriptAssign35_0)
			err = __goscriptAssign35_1
			if (err != null) {
				return [(w).clone(), err]
			}
			$.assignStruct(fields[i], new wire.Field({ID: 40, Value: w}, true))
			i++
		}
		if ((v$ as WorkflowParams).SamplingRate != null) {
			let __goscriptAssign36_0: wire.Value = wire.NewValueDouble($.pointerValue<number>(((v$ as WorkflowParams).SamplingRate)))
			let __goscriptAssign36_1: $.GoError = null
			w = $.assignStruct(w, __goscriptAssign36_0)
			err = __goscriptAssign36_1
			if (err != null) {
				return [(w).clone(), err]
			}
			$.assignStruct(fields[i], new wire.Field({ID: 50, Value: w}, true))
			i++
		}
		if ((v$ as WorkflowParams).ShadowMode != null) {
			let __goscriptTuple36: any = Mode_ToWire($.pointerValue<Mode>((v$ as WorkflowParams).ShadowMode))
			w = $.assignStruct(w, __goscriptTuple36[0])
			err = __goscriptTuple36[1]
			if (err != null) {
				return [(w).clone(), err]
			}
			$.assignStruct(fields[i], new wire.Field({ID: 60, Value: w}, true))
			i++
		}
		if ((v$ as WorkflowParams).ExitCondition != null) {
			let __goscriptTuple37: any = ExitCondition.prototype.ToWire.call((v$ as WorkflowParams).ExitCondition)
			w = $.assignStruct(w, __goscriptTuple37[0])
			err = __goscriptTuple37[1]
			if (err != null) {
				return [(w).clone(), err]
			}
			$.assignStruct(fields[i], new wire.Field({ID: 70, Value: w}, true))
			i++
		}
		if ((v$ as WorkflowParams).Concurrency != null) {
			let __goscriptAssign37_0: wire.Value = wire.NewValueI32($.pointerValue<number>(((v$ as WorkflowParams).Concurrency)))
			let __goscriptAssign37_1: $.GoError = null
			w = $.assignStruct(w, __goscriptAssign37_0)
			err = __goscriptAssign37_1
			if (err != null) {
				return [(w).clone(), err]
			}
			$.assignStruct(fields[i], new wire.Field({ID: 80, Value: w}, true))
			i++
		}
		if ((v$ as WorkflowParams).LastRunResult != null) {
			let __goscriptTuple38: any = WorkflowResult.prototype.ToWire.call((v$ as WorkflowParams).LastRunResult)
			w = $.assignStruct(w, __goscriptTuple38[0])
			err = __goscriptTuple38[1]
			if (err != null) {
				return [(w).clone(), err]
			}
			$.assignStruct(fields[i], new wire.Field({ID: 90, Value: w}, true))
			i++
		}

		return [wire.NewValueStruct(new wire.Struct({Fields: $.goSlice(fields, undefined, i)}, true)), null]
	}

	static __typeInfo = $.registerStructType(
		"shadower.WorkflowParams",
		() => new WorkflowParams(),
		() => [$.methodSignature("Decode", [["sr", "stream.Reader"]], ["error"], true), $.methodSignature("Encode", [["sw", "stream.Writer"]], ["error"], true), $.methodSignature("Equals", [["rhs", /* @__PURE__ */ $.pointerType("shadower.WorkflowParams")]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("FromWire", [["w", "wire.Value"]], ["error"], true), $.methodSignature("GetConcurrency", [], [["o", /* @__PURE__ */ $.basicType("int32")]], true), $.methodSignature("GetDomain", [], [["o", /* @__PURE__ */ $.basicType("string")]], true), $.methodSignature("GetExitCondition", [], [["o", /* @__PURE__ */ $.pointerType("shadower.ExitCondition")]], true), $.methodSignature("GetLastRunResult", [], [["o", /* @__PURE__ */ $.pointerType("shadower.WorkflowResult")]], true), $.methodSignature("GetNextPageToken", [], [["o", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], true), $.methodSignature("GetSamplingRate", [], [["o", /* @__PURE__ */ $.basicType("float64")]], true), $.methodSignature("GetShadowMode", [], [["o", /* @__PURE__ */ $.basicType("int32", "shadower.Mode")]], true), $.methodSignature("GetTaskList", [], [["o", /* @__PURE__ */ $.basicType("string")]], true), $.methodSignature("GetWorkflowQuery", [], [["o", /* @__PURE__ */ $.basicType("string")]], true), $.methodSignature("IsSetConcurrency", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("IsSetDomain", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("IsSetExitCondition", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("IsSetLastRunResult", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("IsSetNextPageToken", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("IsSetSamplingRate", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("IsSetShadowMode", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("IsSetTaskList", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("IsSetWorkflowQuery", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("MarshalLogObject", [["enc", "zapcore.ObjectEncoder"]], [["err", "error"]], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("ToWire", [], ["wire.Value", "error"], true)],
		WorkflowParams,
		() => [/* @__PURE__ */ $.structField("Domain", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("string")), [0], 0, true, { tag: "json:\"domain,omitempty\"" }), /* @__PURE__ */ $.structField("TaskList", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("string")), [1], 8, true, { tag: "json:\"taskList,omitempty\"" }), /* @__PURE__ */ $.structField("WorkflowQuery", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("string")), [2], 16, true, { tag: "json:\"workflowQuery,omitempty\"" }), /* @__PURE__ */ $.structField("NextPageToken", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [3], 24, true, { tag: "json:\"nextPageToken,omitempty\"" }), /* @__PURE__ */ $.structField("SamplingRate", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("float64")), [4], 48, true, { tag: "json:\"samplingRate,omitempty\"" }), /* @__PURE__ */ $.structField("ShadowMode", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32", "shadower.Mode")), [5], 56, true, { tag: "json:\"shadowMode,omitempty\"" }), /* @__PURE__ */ $.structField("ExitCondition", /* @__PURE__ */ $.pointerType("shadower.ExitCondition"), [6], 64, true, { tag: "json:\"exitCondition,omitempty\"" }), /* @__PURE__ */ $.structField("Concurrency", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32")), [7], 72, true, { tag: "json:\"concurrency,omitempty\"" }), /* @__PURE__ */ $.structField("LastRunResult", /* @__PURE__ */ $.pointerType("shadower.WorkflowResult"), [8], 80, true, { tag: "json:\"lastRunResult,omitempty\"" })]
	)
}

export class WorkflowResult {
	public get Succeeded(): $.VarRef<number> | null {
		return this._fields.Succeeded
	}

	public set Succeeded(value: $.VarRef<number> | null) {
		this._fields.Succeeded = value
	}

	public get Skipped(): $.VarRef<number> | null {
		return this._fields.Skipped
	}

	public set Skipped(value: $.VarRef<number> | null) {
		this._fields.Skipped = value
	}

	public get Failed(): $.VarRef<number> | null {
		return this._fields.Failed
	}

	public set Failed(value: $.VarRef<number> | null) {
		this._fields.Failed = value
	}

	public _fields: {
		Succeeded: $.VarRef<number> | null
		Skipped: $.VarRef<number> | null
		Failed: $.VarRef<number> | null
	}

	constructor(init?: Partial<{Succeeded?: $.VarRef<number> | null, Skipped?: $.VarRef<number> | null, Failed?: $.VarRef<number> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Succeeded: init?.Succeeded ?? (null! as $.VarRef<number> | null),
			Skipped: init?.Skipped ?? (null! as $.VarRef<number> | null),
			Failed: init?.Failed ?? (null! as $.VarRef<number> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): WorkflowResult {
		return new WorkflowResult(this, true)
	}

	public __goscriptAssign(source: WorkflowResult): void {
		const target = this._fields
		const values = source._fields
		target.Succeeded = values.Succeeded
		target.Skipped = values.Skipped
		target.Failed = values.Failed
	}

	public async Decode(sr: stream.Reader | null): globalThis.Promise<$.GoError> {
		let v: WorkflowResult | $.VarRef<WorkflowResult> | null = this;
		const v$: WorkflowResult = v == null ? $.pointerTarget<WorkflowResult>(v) : (v as any).__isVarRef === true ? (v as any).value : (v as any).__goValue === undefined ? (v as any) : $.pointerTarget<WorkflowResult>(v)

		{
			let err = (__goscriptAwait = (sr !== null && (sr as any).__isVarRef !== true && (sr as any).__goValue === undefined ? (sr as Exclude<stream.Reader, null>) : $.pointerValue<Exclude<stream.Reader, null>>(sr)).ReadStructBegin(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (err != null) {
				return err
			}
		}

		let [fh, ok, err] = await (sr !== null && (sr as any).__isVarRef !== true && (sr as any).__goValue === undefined ? (sr as Exclude<stream.Reader, null>) : $.pointerValue<Exclude<stream.Reader, null>>(sr)).ReadFieldBegin()
		if (err != null) {
			return err
		}

		while (ok) {
			switch ((true as boolean)) {
				case (fh.ID == 10) && (fh.Type == 8):
				{
					let x: $.VarRef<number> = $.varRef(0)
					let __goscriptTuple39: any = await (sr !== null && (sr as any).__isVarRef !== true && (sr as any).__goValue === undefined ? (sr as Exclude<stream.Reader, null>) : $.pointerValue<Exclude<stream.Reader, null>>(sr)).ReadInt32()
					x.value = __goscriptTuple39[0]
					err = __goscriptTuple39[1];
					;(v$ as WorkflowResult).Succeeded = x
					if (err != null) {
						return err
					}
					break
				}
				case (fh.ID == 20) && (fh.Type == 8):
				{
					let x: $.VarRef<number> = $.varRef(0)
					let __goscriptTuple40: any = await (sr !== null && (sr as any).__isVarRef !== true && (sr as any).__goValue === undefined ? (sr as Exclude<stream.Reader, null>) : $.pointerValue<Exclude<stream.Reader, null>>(sr)).ReadInt32()
					x.value = __goscriptTuple40[0]
					err = __goscriptTuple40[1];
					;(v$ as WorkflowResult).Skipped = x
					if (err != null) {
						return err
					}
					break
				}
				case (fh.ID == 30) && (fh.Type == 8):
				{
					let x: $.VarRef<number> = $.varRef(0)
					let __goscriptTuple41: any = await (sr !== null && (sr as any).__isVarRef !== true && (sr as any).__goValue === undefined ? (sr as Exclude<stream.Reader, null>) : $.pointerValue<Exclude<stream.Reader, null>>(sr)).ReadInt32()
					x.value = __goscriptTuple41[0]
					err = __goscriptTuple41[1];
					;(v$ as WorkflowResult).Failed = x
					if (err != null) {
						return err
					}
					break
				}
				default:
				{
					{
						let __goscriptShadow22 = (__goscriptAwait = (sr !== null && (sr as any).__isVarRef !== true && (sr as any).__goValue === undefined ? (sr as Exclude<stream.Reader, null>) : $.pointerValue<Exclude<stream.Reader, null>>(sr)).Skip(fh.Type), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
						if (__goscriptShadow22 != null) {
							return __goscriptShadow22
						}
					}
					break
				}
			}

			{
				let __goscriptShadow23 = (__goscriptAwait = (sr !== null && (sr as any).__isVarRef !== true && (sr as any).__goValue === undefined ? (sr as Exclude<stream.Reader, null>) : $.pointerValue<Exclude<stream.Reader, null>>(sr)).ReadFieldEnd(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (__goscriptShadow23 != null) {
					return __goscriptShadow23
				}
			}

			{
				let __goscriptTuple42: any = await (sr !== null && (sr as any).__isVarRef !== true && (sr as any).__goValue === undefined ? (sr as Exclude<stream.Reader, null>) : $.pointerValue<Exclude<stream.Reader, null>>(sr)).ReadFieldBegin()
				fh = $.assignStruct(fh, __goscriptTuple42[0])
				ok = __goscriptTuple42[1]
				err = __goscriptTuple42[2]
				if (err != null) {
					return err
				}
			}
		}

		{
			let __goscriptShadow24 = (__goscriptAwait = (sr !== null && (sr as any).__isVarRef !== true && (sr as any).__goValue === undefined ? (sr as Exclude<stream.Reader, null>) : $.pointerValue<Exclude<stream.Reader, null>>(sr)).ReadStructEnd(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (__goscriptShadow24 != null) {
				return __goscriptShadow24
			}
		}

		return null
	}

	public async Encode(sw: stream.Writer | null): globalThis.Promise<$.GoError> {
		const v: WorkflowResult | $.VarRef<WorkflowResult> | null = this;
		const v$: WorkflowResult = v == null ? $.pointerTarget<WorkflowResult>(v) : (v as any).__isVarRef === true ? (v as any).value : (v as any).__goValue === undefined ? (v as any) : $.pointerTarget<WorkflowResult>(v)
		{
			let err = (__goscriptAwait = (sw !== null && (sw as any).__isVarRef !== true && (sw as any).__goValue === undefined ? (sw as Exclude<stream.Writer, null>) : $.pointerValue<Exclude<stream.Writer, null>>(sw)).WriteStructBegin(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (err != null) {
				return err
			}
		}

		if ((v$ as WorkflowResult).Succeeded != null) {
			{
				let err = (__goscriptAwait = (sw !== null && (sw as any).__isVarRef !== true && (sw as any).__goValue === undefined ? (sw as Exclude<stream.Writer, null>) : $.pointerValue<Exclude<stream.Writer, null>>(sw)).WriteFieldBegin(new stream.FieldHeader({ID: 10, Type: 8}, true)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (err != null) {
					return err
				}
			}
			{
				let err = (__goscriptAwait = (sw !== null && (sw as any).__isVarRef !== true && (sw as any).__goValue === undefined ? (sw as Exclude<stream.Writer, null>) : $.pointerValue<Exclude<stream.Writer, null>>(sw)).WriteInt32($.pointerValue<number>(((v$ as WorkflowResult).Succeeded))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (err != null) {
					return err
				}
			}
			{
				let err = (__goscriptAwait = (sw !== null && (sw as any).__isVarRef !== true && (sw as any).__goValue === undefined ? (sw as Exclude<stream.Writer, null>) : $.pointerValue<Exclude<stream.Writer, null>>(sw)).WriteFieldEnd(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (err != null) {
					return err
				}
			}
		}

		if ((v$ as WorkflowResult).Skipped != null) {
			{
				let err = (__goscriptAwait = (sw !== null && (sw as any).__isVarRef !== true && (sw as any).__goValue === undefined ? (sw as Exclude<stream.Writer, null>) : $.pointerValue<Exclude<stream.Writer, null>>(sw)).WriteFieldBegin(new stream.FieldHeader({ID: 20, Type: 8}, true)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (err != null) {
					return err
				}
			}
			{
				let err = (__goscriptAwait = (sw !== null && (sw as any).__isVarRef !== true && (sw as any).__goValue === undefined ? (sw as Exclude<stream.Writer, null>) : $.pointerValue<Exclude<stream.Writer, null>>(sw)).WriteInt32($.pointerValue<number>(((v$ as WorkflowResult).Skipped))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (err != null) {
					return err
				}
			}
			{
				let err = (__goscriptAwait = (sw !== null && (sw as any).__isVarRef !== true && (sw as any).__goValue === undefined ? (sw as Exclude<stream.Writer, null>) : $.pointerValue<Exclude<stream.Writer, null>>(sw)).WriteFieldEnd(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (err != null) {
					return err
				}
			}
		}

		if ((v$ as WorkflowResult).Failed != null) {
			{
				let err = (__goscriptAwait = (sw !== null && (sw as any).__isVarRef !== true && (sw as any).__goValue === undefined ? (sw as Exclude<stream.Writer, null>) : $.pointerValue<Exclude<stream.Writer, null>>(sw)).WriteFieldBegin(new stream.FieldHeader({ID: 30, Type: 8}, true)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (err != null) {
					return err
				}
			}
			{
				let err = (__goscriptAwait = (sw !== null && (sw as any).__isVarRef !== true && (sw as any).__goValue === undefined ? (sw as Exclude<stream.Writer, null>) : $.pointerValue<Exclude<stream.Writer, null>>(sw)).WriteInt32($.pointerValue<number>(((v$ as WorkflowResult).Failed))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (err != null) {
					return err
				}
			}
			{
				let err = (__goscriptAwait = (sw !== null && (sw as any).__isVarRef !== true && (sw as any).__goValue === undefined ? (sw as Exclude<stream.Writer, null>) : $.pointerValue<Exclude<stream.Writer, null>>(sw)).WriteFieldEnd(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (err != null) {
					return err
				}
			}
		}

		return (sw !== null && (sw as any).__isVarRef !== true && (sw as any).__goValue === undefined ? (sw as Exclude<stream.Writer, null>) : $.pointerValue<Exclude<stream.Writer, null>>(sw)).WriteStructEnd()
	}

	public Equals(rhs: WorkflowResult | $.VarRef<WorkflowResult> | null): boolean {
		const v: WorkflowResult | $.VarRef<WorkflowResult> | null = this;
		const v$: WorkflowResult = v == null ? $.pointerTarget<WorkflowResult>(v) : (v as any).__isVarRef === true ? (v as any).value : (v as any).__goValue === undefined ? (v as any) : $.pointerTarget<WorkflowResult>(v)
		const rhs$: WorkflowResult = rhs == null ? $.pointerTarget<WorkflowResult>(rhs) : (rhs as any).__isVarRef === true ? (rhs as any).value : (rhs as any).__goValue === undefined ? (rhs as any) : $.pointerTarget<WorkflowResult>(rhs)
		if (v == null) {
			return rhs == null
		} else {
			if (rhs == null) {
				return false
			}
		}
		if (!_I32_EqualsPtr((v$ as WorkflowResult).Succeeded, (rhs$ as WorkflowResult).Succeeded)) {
			return false
		}
		if (!_I32_EqualsPtr((v$ as WorkflowResult).Skipped, (rhs$ as WorkflowResult).Skipped)) {
			return false
		}
		if (!_I32_EqualsPtr((v$ as WorkflowResult).Failed, (rhs$ as WorkflowResult).Failed)) {
			return false
		}

		return true
	}

	public FromWire(__goscriptParam7: wire.Value): $.GoError {
		let v: WorkflowResult | $.VarRef<WorkflowResult> | null = this;
		let w: $.VarRef<wire.Value> = $.varRef(__goscriptParam7)
		const v$: WorkflowResult = v == null ? $.pointerTarget<WorkflowResult>(v) : (v as any).__isVarRef === true ? (v as any).value : (v as any).__goValue === undefined ? (v as any) : $.pointerTarget<WorkflowResult>(v)
		let err: $.GoError = null! as $.GoError

		for (let __goscriptRangeTarget10 = w.value.GetStruct().Fields, __goscriptRangeWindow10 = $.sliceRange(__goscriptRangeTarget10), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow10.length; __rangeIndex++) {
			let field = ((__goscriptRangeWindow10.backing[__goscriptRangeWindow10.offset + __rangeIndex] as wire.Field)).clone()
			switch (field.ID) {
				case 10:
				{
					if (field.Value.Type() == 8) {
						let x: $.VarRef<number> = $.varRef(0)
						let __goscriptAssign38_0: number = field.Value.GetI32()
						let __goscriptAssign38_1: $.GoError = null
						x.value = __goscriptAssign38_0
						err = __goscriptAssign38_1;
						;(v$ as WorkflowResult).Succeeded = x
						if (err != null) {
							return err
						}
					}
					break
				}
				case 20:
				{
					if (field.Value.Type() == 8) {
						let x: $.VarRef<number> = $.varRef(0)
						let __goscriptAssign39_0: number = field.Value.GetI32()
						let __goscriptAssign39_1: $.GoError = null
						x.value = __goscriptAssign39_0
						err = __goscriptAssign39_1;
						;(v$ as WorkflowResult).Skipped = x
						if (err != null) {
							return err
						}
					}
					break
				}
				case 30:
				{
					if (field.Value.Type() == 8) {
						let x: $.VarRef<number> = $.varRef(0)
						let __goscriptAssign40_0: number = field.Value.GetI32()
						let __goscriptAssign40_1: $.GoError = null
						x.value = __goscriptAssign40_0
						err = __goscriptAssign40_1;
						;(v$ as WorkflowResult).Failed = x
						if (err != null) {
							return err
						}
					}
					break
				}
			}
		}

		return null
	}

	public GetFailed(): number {
		const v: WorkflowResult | $.VarRef<WorkflowResult> | null = this;
		let o: number = 0
		const v$: WorkflowResult = v == null ? $.pointerTarget<WorkflowResult>(v) : (v as any).__isVarRef === true ? (v as any).value : (v as any).__goValue === undefined ? (v as any) : $.pointerTarget<WorkflowResult>(v)
		if ((v != null) && ((v$ as WorkflowResult).Failed != null)) {
			return $.pointerValue<number>((v$ as WorkflowResult).Failed)
		}

		return o
	}

	public GetSkipped(): number {
		const v: WorkflowResult | $.VarRef<WorkflowResult> | null = this;
		let o: number = 0
		const v$: WorkflowResult = v == null ? $.pointerTarget<WorkflowResult>(v) : (v as any).__isVarRef === true ? (v as any).value : (v as any).__goValue === undefined ? (v as any) : $.pointerTarget<WorkflowResult>(v)
		if ((v != null) && ((v$ as WorkflowResult).Skipped != null)) {
			return $.pointerValue<number>((v$ as WorkflowResult).Skipped)
		}

		return o
	}

	public GetSucceeded(): number {
		const v: WorkflowResult | $.VarRef<WorkflowResult> | null = this;
		let o: number = 0
		const v$: WorkflowResult = v == null ? $.pointerTarget<WorkflowResult>(v) : (v as any).__isVarRef === true ? (v as any).value : (v as any).__goValue === undefined ? (v as any) : $.pointerTarget<WorkflowResult>(v)
		if ((v != null) && ((v$ as WorkflowResult).Succeeded != null)) {
			return $.pointerValue<number>((v$ as WorkflowResult).Succeeded)
		}

		return o
	}

	public IsSetFailed(): boolean {
		const v: WorkflowResult | $.VarRef<WorkflowResult> | null = this;
		return (v != null) && ($.pointerValue<WorkflowResult>(v).Failed != null)
	}

	public IsSetSkipped(): boolean {
		const v: WorkflowResult | $.VarRef<WorkflowResult> | null = this;
		return (v != null) && ($.pointerValue<WorkflowResult>(v).Skipped != null)
	}

	public IsSetSucceeded(): boolean {
		const v: WorkflowResult | $.VarRef<WorkflowResult> | null = this;
		return (v != null) && ($.pointerValue<WorkflowResult>(v).Succeeded != null)
	}

	public async MarshalLogObject(enc: zapcore.ObjectEncoder | null): globalThis.Promise<$.GoError> {
		const v: WorkflowResult | $.VarRef<WorkflowResult> | null = this;
		let err: $.GoError = null! as $.GoError
		const v$: WorkflowResult = v == null ? $.pointerTarget<WorkflowResult>(v) : (v as any).__isVarRef === true ? (v as any).value : (v as any).__goValue === undefined ? (v as any) : $.pointerTarget<WorkflowResult>(v)
		if (v == null) {
			return null
		}
		if ((v$ as WorkflowResult).Succeeded != null) {
			void (__goscriptAwait = (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? (enc as Exclude<zapcore.ObjectEncoder, null>) : $.pointerValue<Exclude<zapcore.ObjectEncoder, null>>(enc)).AddInt32("succeeded", $.pointerValue<number>((v$ as WorkflowResult).Succeeded)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		if ((v$ as WorkflowResult).Skipped != null) {
			void (__goscriptAwait = (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? (enc as Exclude<zapcore.ObjectEncoder, null>) : $.pointerValue<Exclude<zapcore.ObjectEncoder, null>>(enc)).AddInt32("skipped", $.pointerValue<number>((v$ as WorkflowResult).Skipped)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		if ((v$ as WorkflowResult).Failed != null) {
			void (__goscriptAwait = (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? (enc as Exclude<zapcore.ObjectEncoder, null>) : $.pointerValue<Exclude<zapcore.ObjectEncoder, null>>(enc)).AddInt32("failed", $.pointerValue<number>((v$ as WorkflowResult).Failed)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		return err
	}

	public async String(): globalThis.Promise<string> {
		const v: WorkflowResult | $.VarRef<WorkflowResult> | null = this;
		const v$: WorkflowResult = v == null ? $.pointerTarget<WorkflowResult>(v) : (v as any).__isVarRef === true ? (v as any).value : (v as any).__goValue === undefined ? (v as any) : $.pointerTarget<WorkflowResult>(v)
		if (v == null) {
			return "<nil>"
		}

		let fields: string[] = $.arrayValue(globalThis.Array.from({ length: 3 }, () => ""))
		let i = 0
		if ((v$ as WorkflowResult).Succeeded != null) {
			fields[i] = await fmt.Sprintf("Succeeded: %v", $.basicInterfaceValue($.pointerValue<number>(((v$ as WorkflowResult).Succeeded)), "int32"))
			i++
		}
		if ((v$ as WorkflowResult).Skipped != null) {
			fields[i] = await fmt.Sprintf("Skipped: %v", $.basicInterfaceValue($.pointerValue<number>(((v$ as WorkflowResult).Skipped)), "int32"))
			i++
		}
		if ((v$ as WorkflowResult).Failed != null) {
			fields[i] = await fmt.Sprintf("Failed: %v", $.basicInterfaceValue($.pointerValue<number>(((v$ as WorkflowResult).Failed)), "int32"))
			i++
		}

		return fmt.Sprintf("WorkflowResult{%v}", strings.Join($.goSlice(fields, undefined, i), ", "))
	}

	public ToWire(): [wire.Value, $.GoError] {
		const v: WorkflowResult | $.VarRef<WorkflowResult> | null = this;
		const v$: WorkflowResult = v == null ? $.pointerTarget<WorkflowResult>(v) : (v as any).__isVarRef === true ? (v as any).value : (v as any).__goValue === undefined ? (v as any) : $.pointerTarget<WorkflowResult>(v)
		let fields: wire.Field[] = $.arrayValue(globalThis.Array.from({ length: 3 }, () => new wire.Field(undefined, true)), /* @__PURE__ */ $.arrayType("wire.Field", 3))
		let i: number = 0
		let w: wire.Value = new wire.Value(undefined, true)
		let err: $.GoError = null! as $.GoError

		if ((v$ as WorkflowResult).Succeeded != null) {
			let __goscriptAssign41_0: wire.Value = wire.NewValueI32($.pointerValue<number>(((v$ as WorkflowResult).Succeeded)))
			let __goscriptAssign41_1: $.GoError = null
			w = $.assignStruct(w, __goscriptAssign41_0)
			err = __goscriptAssign41_1
			if (err != null) {
				return [(w).clone(), err]
			}
			$.assignStruct(fields[i], new wire.Field({ID: 10, Value: w}, true))
			i++
		}
		if ((v$ as WorkflowResult).Skipped != null) {
			let __goscriptAssign42_0: wire.Value = wire.NewValueI32($.pointerValue<number>(((v$ as WorkflowResult).Skipped)))
			let __goscriptAssign42_1: $.GoError = null
			w = $.assignStruct(w, __goscriptAssign42_0)
			err = __goscriptAssign42_1
			if (err != null) {
				return [(w).clone(), err]
			}
			$.assignStruct(fields[i], new wire.Field({ID: 20, Value: w}, true))
			i++
		}
		if ((v$ as WorkflowResult).Failed != null) {
			let __goscriptAssign43_0: wire.Value = wire.NewValueI32($.pointerValue<number>(((v$ as WorkflowResult).Failed)))
			let __goscriptAssign43_1: $.GoError = null
			w = $.assignStruct(w, __goscriptAssign43_0)
			err = __goscriptAssign43_1
			if (err != null) {
				return [(w).clone(), err]
			}
			$.assignStruct(fields[i], new wire.Field({ID: 30, Value: w}, true))
			i++
		}

		return [wire.NewValueStruct(new wire.Struct({Fields: $.goSlice(fields, undefined, i)}, true)), null]
	}

	static __typeInfo = $.registerStructType(
		"shadower.WorkflowResult",
		() => new WorkflowResult(),
		() => [$.methodSignature("Decode", [["sr", "stream.Reader"]], ["error"], true), $.methodSignature("Encode", [["sw", "stream.Writer"]], ["error"], true), $.methodSignature("Equals", [["rhs", /* @__PURE__ */ $.pointerType("shadower.WorkflowResult")]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("FromWire", [["w", "wire.Value"]], ["error"], true), $.methodSignature("GetFailed", [], [["o", /* @__PURE__ */ $.basicType("int32")]], true), $.methodSignature("GetSkipped", [], [["o", /* @__PURE__ */ $.basicType("int32")]], true), $.methodSignature("GetSucceeded", [], [["o", /* @__PURE__ */ $.basicType("int32")]], true), $.methodSignature("IsSetFailed", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("IsSetSkipped", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("IsSetSucceeded", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("MarshalLogObject", [["enc", "zapcore.ObjectEncoder"]], [["err", "error"]], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("ToWire", [], ["wire.Value", "error"], true)],
		WorkflowResult,
		() => [/* @__PURE__ */ $.structField("Succeeded", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32")), [0], 0, true, { tag: "json:\"succeeded,omitempty\"" }), /* @__PURE__ */ $.structField("Skipped", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32")), [1], 8, true, { tag: "json:\"skipped,omitempty\"" }), /* @__PURE__ */ $.structField("Failed", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32")), [2], 16, true, { tag: "json:\"failed,omitempty\"" })]
	)
}

export const ErrNonRetryableType: string = "com.uber.cadence.internal.shadowing.NonRetryableException"

export const ErrReasonDomainNotExists: string = "domain not exists"

export const ErrReasonInvalidQuery: string = "invalid visibility query"

export const ErrReasonWorkflowTypeNotRegistered: string = "workflow type not registered"

export const LocalDomainName: string = "cadence-shadower"

export const ReplayWorkflowActivityName: string = "replayWorkflowActivity"

export const ScanWorkflowActivityName: string = "scanWorkflowActivity"

export const TaskList: string = "cadence-shadower-tl"

export const WorkflowIDSuffix: string = "-shadow-workflow"

export const WorkflowName: string = "cadence-shadow-workflow"

export const ModeNormal: Mode = 0

export const ModeContinuous: Mode = 1

export const rawIDL: string = "// Copyright (c) 2017-2021 Uber Technologies, Inc.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a copy\n// of this software and associated documentation files (the \"Software\"), to deal\n// in the Software without restriction, including without limitation the rights\n// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n// copies of the Software, and to permit persons to whom the Software is\n// furnished to do so, subject to the following conditions:\n//\n// The above copyright notice and this permission notice shall be included in\n// all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n// THE SOFTWARE.\n\nnamespace java com.uber.cadence.shadower\n\ninclude \"shared.thrift\"\n\nconst string LocalDomainName = \"cadence-shadower\"\nconst string TaskList = \"cadence-shadower-tl\"\n\nconst string WorkflowName = \"cadence-shadow-workflow\"\n\nconst string ScanWorkflowActivityName = \"scanWorkflowActivity\"\nconst string ReplayWorkflowActivityName = \"replayWorkflowActivity\"\n\nconst string WorkflowIDSuffix = \"-shadow-workflow\"\n\nconst string ErrReasonDomainNotExists = \"domain not exists\"\nconst string ErrReasonInvalidQuery = \"invalid visibility query\"\nconst string ErrReasonWorkflowTypeNotRegistered = \"workflow type not registered\"\nconst string ErrNonRetryableType = \"com.uber.cadence.internal.shadowing.NonRetryableException\"\n\nenum Mode {\n  Normal,\n  Continuous,\n}\n\nstruct ExitCondition {\n  10: optional i32 expirationIntervalInSeconds\n  20: optional i32 shadowCount\n}\n\nstruct WorkflowParams {\n  10: optional string domain \n  20: optional string taskList\n  30: optional string workflowQuery\n  40: optional binary nextPageToken\n  50: optional double samplingRate\n  60: optional Mode shadowMode\n  70: optional ExitCondition exitCondition\n  80: optional i32 concurrency\n  90: optional WorkflowResult lastRunResult\n}\n\nstruct WorkflowResult {\n  10: optional i32 succeeded\n  20: optional i32 skipped\n  30: optional i32 failed\n}\n\nstruct ScanWorkflowActivityParams {\n  10: optional string domain\n  20: optional string workflowQuery\n  30: optional binary nextPageToken\n  40: optional i32 pageSize\n  50: optional double samplingRate\n}\n\nstruct ScanWorkflowActivityResult {\n  10: optional list<shared.WorkflowExecution> executions\n  20: optional binary nextPageToken\n}\n\nstruct ReplayWorkflowActivityParams {\n  10: optional string domain\n  20: optional list<shared.WorkflowExecution> executions\n}\n\nstruct ReplayWorkflowActivityResult {\n  10: optional i32 succeeded\n  20: optional i32 skipped\n  30: optional i32 failed\n}\n"

export function _I32_EqualsPtr(lhs: $.VarRef<number> | null, rhs: $.VarRef<number> | null): boolean {
	if ((lhs != null) && (rhs != null)) {

		let x = $.pointerValue<number>(lhs)
		let y = $.pointerValue<number>(rhs)
		return (x == y)
	}
	return (lhs == null) && (rhs == null)
}

export function Mode_Values(): $.Slice<Mode> {
	return $.arrayToSlice<Mode>([0, 1])
}

export function Mode_UnmarshalText(v: $.VarRef<Mode> | null, value: $.Slice<number>): $.GoError {
	{
		let s = $.bytesToString(value)
		switch (s) {
			case "Normal":
			{
				v!.value = 0
				return null
				break
			}
			case "Continuous":
			{
				v!.value = 1
				return null
				break
			}
			default:
			{
				let [val, err] = strconv.ParseInt(s, 10, 32)
				if (err != null) {
					return fmt.Errorf("unknown enum value %q for %q: %v", s, "Mode", (err as any))
				}
				v!.value = $.int(val, 32)
				return null
				break
			}
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export function Mode_MarshalText(v: Mode): [$.Slice<number>, $.GoError] {
	switch ($.int(v, 32)) {
		case 0:
		{
			return [new Uint8Array([78, 111, 114, 109, 97, 108]), null]
			break
		}
		case 1:
		{
			return [new Uint8Array([67, 111, 110, 116, 105, 110, 117, 111, 117, 115]), null]
			break
		}
	}
	return [$.stringToBytes(strconv.FormatInt($.int64(v), 10)), null]
}

export async function Mode_MarshalLogObject(v: Mode, enc: zapcore.ObjectEncoder | null): globalThis.Promise<$.GoError> {
	void (__goscriptAwait = (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? (enc as Exclude<zapcore.ObjectEncoder, null>) : $.pointerValue<Exclude<zapcore.ObjectEncoder, null>>(enc)).AddInt32("value", $.int(v, 32)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	switch ($.int(v, 32)) {
		case 0:
		{
			void (__goscriptAwait = (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? (enc as Exclude<zapcore.ObjectEncoder, null>) : $.pointerValue<Exclude<zapcore.ObjectEncoder, null>>(enc)).AddString("name", "Normal"), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			break
		}
		case 1:
		{
			void (__goscriptAwait = (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? (enc as Exclude<zapcore.ObjectEncoder, null>) : $.pointerValue<Exclude<zapcore.ObjectEncoder, null>>(enc)).AddString("name", "Continuous"), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			break
		}
	}
	return null
}

export function Mode_Ptr(__goscriptReceiver0: Mode): $.VarRef<Mode> | null {
	let v: $.VarRef<Mode> = $.varRef(__goscriptReceiver0)
	return v
}

export async function Mode_Encode(v: Mode, sw: stream.Writer | null): globalThis.Promise<$.GoError> {
	return (sw !== null && (sw as any).__isVarRef !== true && (sw as any).__goValue === undefined ? (sw as Exclude<stream.Writer, null>) : $.pointerValue<Exclude<stream.Writer, null>>(sw)).WriteInt32($.int(v, 32))
}

export function Mode_ToWire(v: Mode): [wire.Value, $.GoError] {
	return [wire.NewValueI32($.int(v, 32)), null]
}

export function Mode_FromWire(v: $.VarRef<Mode> | null, __goscriptParam1: wire.Value): $.GoError {
	let w: $.VarRef<wire.Value> = $.varRef(__goscriptParam1)
	v!.value = $.int(w.value.GetI32(), 32)
	return null
}

export async function Mode_Decode(v: $.VarRef<Mode> | null, sr: stream.Reader | null): globalThis.Promise<$.GoError> {
	let [i, err] = await (sr !== null && (sr as any).__isVarRef !== true && (sr as any).__goValue === undefined ? (sr as Exclude<stream.Reader, null>) : $.pointerValue<Exclude<stream.Reader, null>>(sr)).ReadInt32()
	if (err != null) {
		return err
	}
	v!.value = $.int(i, 32)
	return null
}

export async function Mode_String(v: Mode): globalThis.Promise<string> {
	let w = $.int(v, 32)
	switch (w) {
		case 0:
		{
			return "Normal"
			break
		}
		case 1:
		{
			return "Continuous"
			break
		}
	}
	return fmt.Sprintf("Mode(%d)", $.basicInterfaceValue(w, "int32"))
}

export function Mode_Equals(v: Mode, rhs: Mode): boolean {
	return v == rhs
}

export function Mode_MarshalJSON(v: Mode): [$.Slice<number>, $.GoError] {
	switch ($.int(v, 32)) {
		case 0:
		{
			return [new Uint8Array([34, 78, 111, 114, 109, 97, 108, 34]), null]
			break
		}
		case 1:
		{
			return [new Uint8Array([34, 67, 111, 110, 116, 105, 110, 117, 111, 117, 115, 34]), null]
			break
		}
	}
	return [$.stringToBytes(strconv.FormatInt($.int64(v), 10)), null]
}

export async function Mode_UnmarshalJSON(v: $.VarRef<Mode> | null, text: $.Slice<number>): globalThis.Promise<$.GoError> {
	let d: json.Decoder | $.VarRef<json.Decoder> | null = json.NewDecoder($.pointerValueOrNil($.interfaceValue<io.Reader | null>(bytes.NewReader(text), "*bytes.Reader", /* @__PURE__ */ $.pointerType("bytes.Reader")))!)
	json.Decoder.prototype.UseNumber.call($.pointerValue<json.Decoder>(d))
	let [t, err] = await json.Decoder.prototype.Token.call($.pointerValue<json.Decoder>(d))
	if (err != null) {
		return err
	}

	{
		const __goscriptTypeSwitchValue = t
		switch (true) {
			case $.typeAssert<json.Number>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("string", "json.Number")).ok:
				{
					let w: json.Number = $.typeAssert<json.Number>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("string", "json.Number")).value
					let [x, __goscriptShadow3] = json.Number_Int64(w)
					if (__goscriptShadow3 != null) {
						return __goscriptShadow3
					}
					if (x > 2147483647n) {
						return fmt.Errorf("enum overflow from JSON %q for %q", $.interfaceValue(text, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))), "Mode")
					}
					if (x < -2147483648n) {
						return fmt.Errorf("enum underflow from JSON %q for %q", $.interfaceValue(text, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))), "Mode")
					}
					v!.value = $.int(x, 32)
					return null
				}
				break
			case $.typeAssert<string>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("string")).ok:
				{
					let w: string = $.typeAssert<string>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("string")).value
					return Mode_UnmarshalText(v, $.stringToBytes(w))
				}
				break
			default:
				{
					let w: any = __goscriptTypeSwitchValue
					return fmt.Errorf("invalid JSON value %q (%T) to unmarshal into %q", (t as any), (t as any), "Mode")
				}
				break
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export async function _List_WorkflowExecution_ValueList_ForEach(v: _List_WorkflowExecution_ValueList, f: ((_p0: wire.Value) => $.GoError | globalThis.Promise<$.GoError>) | null): globalThis.Promise<$.GoError> {
	for (let __goscriptRangeTarget2 = v, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), i = 0; i < __goscriptRangeWindow2.length; i++) {
		let x = (__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + i] as shared.WorkflowExecution | $.VarRef<shared.WorkflowExecution> | null)
		if (x == null) {
			return fmt.Errorf("invalid list '[]*shared.WorkflowExecution', index [%v]: value is nil", $.basicInterfaceValue(i, "int"))
		}
		let [w, err] = (x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as shared.WorkflowExecution).ToWire() : shared.WorkflowExecution.prototype.ToWire.call(x))
		if (err != null) {
			return err
		}
		err = (__goscriptAwait = f!((w).clone()), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		if (err != null) {
			return err
		}
	}
	return null
}

export function _List_WorkflowExecution_ValueList_Size(v: _List_WorkflowExecution_ValueList): number {
	return $.sliceLen((v as _List_WorkflowExecution_ValueList))
}

export function _List_WorkflowExecution_ValueList_ValueType(recv: _List_WorkflowExecution_ValueList): wire.Type {
	return 12
}

export function _List_WorkflowExecution_ValueList_Close(recv: _List_WorkflowExecution_ValueList): void {
}

export function _WorkflowExecution_Read(w: wire.Value): [shared.WorkflowExecution | $.VarRef<shared.WorkflowExecution> | null, $.GoError] {
	let v: $.VarRef<shared.WorkflowExecution> = $.varRef(new shared.WorkflowExecution(undefined, true))
	let err = v.value.FromWire((w).clone())
	return [v, err]
}

export async function _List_WorkflowExecution_Read(l: wire.ValueList | null): globalThis.Promise<[$.Slice<shared.WorkflowExecution | $.VarRef<shared.WorkflowExecution> | null>, $.GoError]> {
	if ((__goscriptAwait = (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? (l as Exclude<wire.ValueList, null>) : $.pointerValue<Exclude<wire.ValueList, null>>(l)).ValueType(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 12) {
		return [null, null]
	}

	let o: $.Slice<shared.WorkflowExecution | $.VarRef<shared.WorkflowExecution> | null> = $.makeSlice<shared.WorkflowExecution | $.VarRef<shared.WorkflowExecution> | null>(0, (__goscriptAwait = (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? (l as Exclude<wire.ValueList, null>) : $.pointerValue<Exclude<wire.ValueList, null>>(l)).Size(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
	let err = (__goscriptAwait = (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? (l as Exclude<wire.ValueList, null>) : $.pointerValue<Exclude<wire.ValueList, null>>(l)).ForEach($.functionValue((x: wire.Value): $.GoError => {
		let __goscriptTuple7: any = _WorkflowExecution_Read(x)
		let i: shared.WorkflowExecution | $.VarRef<shared.WorkflowExecution> | null = __goscriptTuple7[0]
		let __goscriptShadow7 = __goscriptTuple7[1]
		if (__goscriptShadow7 != null) {
			return __goscriptShadow7
		}
		o = $.appendOne(o, i, $.appendZeros.nil)
		return null
	}, ({ kind: $.TypeKind.Function, params: ["wire.Value"], results: ["error"] } as $.FunctionTypeInfo))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	void (__goscriptAwait = (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? (l as Exclude<wire.ValueList, null>) : $.pointerValue<Exclude<wire.ValueList, null>>(l)).Close(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	return [o, err]
}

export async function _List_WorkflowExecution_Encode(val: $.Slice<shared.WorkflowExecution | $.VarRef<shared.WorkflowExecution> | null>, sw: stream.Writer | null): globalThis.Promise<$.GoError> {

	let lh = new stream.ListHeader({Type: 12, Length: $.sliceLen(val)}, true)
	{
		let err = (__goscriptAwait = (sw !== null && (sw as any).__isVarRef !== true && (sw as any).__goValue === undefined ? (sw as Exclude<stream.Writer, null>) : $.pointerValue<Exclude<stream.Writer, null>>(sw)).WriteListBegin((lh).clone()), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		if (err != null) {
			return err
		}
	}

	for (let __goscriptRangeTarget3 = val, __goscriptRangeWindow3 = $.sliceRange(__goscriptRangeTarget3), i = 0; i < __goscriptRangeWindow3.length; i++) {
		let v = (__goscriptRangeWindow3.backing[__goscriptRangeWindow3.offset + i] as shared.WorkflowExecution | $.VarRef<shared.WorkflowExecution> | null)
		if (v == null) {
			return fmt.Errorf("invalid list '[]*shared.WorkflowExecution', index [%v]: value is nil", $.basicInterfaceValue(i, "int"))
		}
		{
			let err = await (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as shared.WorkflowExecution).Encode(sw) : shared.WorkflowExecution.prototype.Encode.call(v, sw))
			if (err != null) {
				return err
			}
		}
	}
	return (sw !== null && (sw as any).__isVarRef !== true && (sw as any).__goValue === undefined ? (sw as Exclude<stream.Writer, null>) : $.pointerValue<Exclude<stream.Writer, null>>(sw)).WriteListEnd()
}

export async function _WorkflowExecution_Decode(sr: stream.Reader | null): globalThis.Promise<[shared.WorkflowExecution | $.VarRef<shared.WorkflowExecution> | null, $.GoError]> {
	let v: $.VarRef<shared.WorkflowExecution> = $.varRef(new shared.WorkflowExecution(undefined, true))
	let err = await v.value.Decode(sr)
	return [v, err]
}

export async function _List_WorkflowExecution_Decode(sr: stream.Reader | null): globalThis.Promise<[$.Slice<shared.WorkflowExecution | $.VarRef<shared.WorkflowExecution> | null>, $.GoError]> {
	let [lh, err] = await (sr !== null && (sr as any).__isVarRef !== true && (sr as any).__goValue === undefined ? (sr as Exclude<stream.Reader, null>) : $.pointerValue<Exclude<stream.Reader, null>>(sr)).ReadListBegin()
	if (err != null) {
		return [null, err]
	}

	if (lh.Type != 12) {
		for (let i = 0; i < lh.Length; i++) {
			{
				let __goscriptShadow8 = (__goscriptAwait = (sr !== null && (sr as any).__isVarRef !== true && (sr as any).__goValue === undefined ? (sr as Exclude<stream.Reader, null>) : $.pointerValue<Exclude<stream.Reader, null>>(sr)).Skip(lh.Type), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (__goscriptShadow8 != null) {
					return [null, __goscriptShadow8]
				}
			}
		}
		return [null, (__goscriptAwait = (sr !== null && (sr as any).__isVarRef !== true && (sr as any).__goValue === undefined ? (sr as Exclude<stream.Reader, null>) : $.pointerValue<Exclude<stream.Reader, null>>(sr)).ReadListEnd(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)]
	}

	let o: $.Slice<shared.WorkflowExecution | $.VarRef<shared.WorkflowExecution> | null> = $.makeSlice<shared.WorkflowExecution | $.VarRef<shared.WorkflowExecution> | null>(0, lh.Length)
	for (let i = 0; i < lh.Length; i++) {
		let __goscriptTuple8: any = await _WorkflowExecution_Decode(sr)
		let v: shared.WorkflowExecution | $.VarRef<shared.WorkflowExecution> | null = __goscriptTuple8[0]
		let __goscriptShadow9 = __goscriptTuple8[1]
		if (__goscriptShadow9 != null) {
			return [null, __goscriptShadow9]
		}
		o = $.appendOne(o, v, $.appendZeros.nil)
	}

	{
		err = (__goscriptAwait = (sr !== null && (sr as any).__isVarRef !== true && (sr as any).__goValue === undefined ? (sr as Exclude<stream.Reader, null>) : $.pointerValue<Exclude<stream.Reader, null>>(sr)).ReadListEnd(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		if (err != null) {
			return [null, err]
		}
	}
	return [o, err]
}

export function _String_EqualsPtr(lhs: $.VarRef<string> | null, rhs: $.VarRef<string> | null): boolean {
	if ((lhs != null) && (rhs != null)) {

		let x = $.pointerValue<string>(lhs)
		let y = $.pointerValue<string>(rhs)
		return ($.stringEqual(x, y))
	}
	return (lhs == null) && (rhs == null)
}

export function _List_WorkflowExecution_Equals(lhs: $.Slice<shared.WorkflowExecution | $.VarRef<shared.WorkflowExecution> | null>, rhs: $.Slice<shared.WorkflowExecution | $.VarRef<shared.WorkflowExecution> | null>): boolean {
	if ($.sliceLen(lhs) != $.sliceLen(rhs)) {
		return false
	}

	for (let __goscriptRangeTarget4 = lhs, __goscriptRangeWindow4 = $.sliceRange(__goscriptRangeTarget4), __goscriptSliceWindow0 = $.sliceRange(rhs), i = 0; i < __goscriptRangeWindow4.length; i++) {
		let lv = (__goscriptRangeWindow4.backing[__goscriptRangeWindow4.offset + i] as shared.WorkflowExecution | $.VarRef<shared.WorkflowExecution> | null)
		let rv: shared.WorkflowExecution | $.VarRef<shared.WorkflowExecution> | null = ((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)] as shared.WorkflowExecution | $.VarRef<shared.WorkflowExecution> | null)
		if (!(lv !== null && (lv as any).__isVarRef !== true && (lv as any).__goValue === undefined ? ((lv as any) as shared.WorkflowExecution).Equals(rv) : shared.WorkflowExecution.prototype.Equals.call(lv, rv))) {
			return false
		}
	}

	return true
}

export async function _List_WorkflowExecution_Zapper_MarshalLogArray(l: _List_WorkflowExecution_Zapper, enc: zapcore.ArrayEncoder | null): globalThis.Promise<$.GoError> {
	let err: $.GoError = null! as $.GoError
	for (let __goscriptRangeTarget5 = l, __goscriptRangeWindow5 = $.sliceRange(__goscriptRangeTarget5), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow5.length; __rangeIndex++) {
		let v = (__goscriptRangeWindow5.backing[__goscriptRangeWindow5.offset + __rangeIndex] as shared.WorkflowExecution | $.VarRef<shared.WorkflowExecution> | null)
		err = multierr.Append(err, (__goscriptAwait = (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? (enc as Exclude<zapcore.ArrayEncoder, null>) : $.pointerValue<Exclude<zapcore.ArrayEncoder, null>>(enc)).AppendObject($.interfaceValue<zapcore.ObjectMarshaler | null>(v, "*shared.WorkflowExecution", /* @__PURE__ */ $.pointerType("shared.WorkflowExecution"))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
	}
	return err
}

export function _Double_EqualsPtr(lhs: $.VarRef<number> | null, rhs: $.VarRef<number> | null): boolean {
	if ((lhs != null) && (rhs != null)) {

		let x = $.pointerValue<number>(lhs)
		let y = $.pointerValue<number>(rhs)
		return (x == y)
	}
	return (lhs == null) && (rhs == null)
}

export function _Mode_Read(w: wire.Value): [Mode, $.GoError] {
	let v: $.VarRef<Mode> = $.varRef(0)
	let err = Mode_FromWire(v, (w).clone())
	return [v.value, err]
}

export function _ExitCondition_Read(w: wire.Value): [ExitCondition | $.VarRef<ExitCondition> | null, $.GoError] {
	let v: $.VarRef<ExitCondition> = $.varRef(new ExitCondition(undefined, true))
	let err = v.value.FromWire((w).clone())
	return [v, err]
}

export function _WorkflowResult_Read(w: wire.Value): [WorkflowResult | $.VarRef<WorkflowResult> | null, $.GoError] {
	let v: $.VarRef<WorkflowResult> = $.varRef(new WorkflowResult(undefined, true))
	let err = v.value.FromWire((w).clone())
	return [v, err]
}

export async function _Mode_Decode(sr: stream.Reader | null): globalThis.Promise<[Mode, $.GoError]> {
	let v: $.VarRef<Mode> = $.varRef(0)
	let err = await Mode_Decode(v, sr)
	return [v.value, err]
}

export async function _ExitCondition_Decode(sr: stream.Reader | null): globalThis.Promise<[ExitCondition | $.VarRef<ExitCondition> | null, $.GoError]> {
	let v: $.VarRef<ExitCondition> = $.varRef(new ExitCondition(undefined, true))
	let err = await v.value.Decode(sr)
	return [v, err]
}

export async function _WorkflowResult_Decode(sr: stream.Reader | null): globalThis.Promise<[WorkflowResult | $.VarRef<WorkflowResult> | null, $.GoError]> {
	let v: $.VarRef<WorkflowResult> = $.varRef(new WorkflowResult(undefined, true))
	let err = await v.value.Decode(sr)
	return [v, err]
}

export function _Mode_EqualsPtr(lhs: $.VarRef<Mode> | null, rhs: $.VarRef<Mode> | null): boolean {
	if ((lhs != null) && (rhs != null)) {

		let x = $.pointerValue<Mode>(lhs)
		let y = $.pointerValue<Mode>(rhs)
		return Mode_Equals(x, y)
	}
	return (lhs == null) && (rhs == null)
}

export let ThriftModule: thriftreflect.ThriftModule | $.VarRef<thriftreflect.ThriftModule> | null = new thriftreflect.ThriftModule({Name: "shadower", Package: "go.uber.org/cadence/.gen/go/shadower", FilePath: "shadower.thrift", SHA1: "f29a425548641e51e02ec1978279c1e37b9df792", Includes: $.arrayToSlice<thriftreflect.ThriftModule | $.VarRef<thriftreflect.ThriftModule> | null>([shared.ThriftModule]), Raw: "// Copyright (c) 2017-2021 Uber Technologies, Inc.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a copy\n// of this software and associated documentation files (the \"Software\"), to deal\n// in the Software without restriction, including without limitation the rights\n// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n// copies of the Software, and to permit persons to whom the Software is\n// furnished to do so, subject to the following conditions:\n//\n// The above copyright notice and this permission notice shall be included in\n// all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n// THE SOFTWARE.\n\nnamespace java com.uber.cadence.shadower\n\ninclude \"shared.thrift\"\n\nconst string LocalDomainName = \"cadence-shadower\"\nconst string TaskList = \"cadence-shadower-tl\"\n\nconst string WorkflowName = \"cadence-shadow-workflow\"\n\nconst string ScanWorkflowActivityName = \"scanWorkflowActivity\"\nconst string ReplayWorkflowActivityName = \"replayWorkflowActivity\"\n\nconst string WorkflowIDSuffix = \"-shadow-workflow\"\n\nconst string ErrReasonDomainNotExists = \"domain not exists\"\nconst string ErrReasonInvalidQuery = \"invalid visibility query\"\nconst string ErrReasonWorkflowTypeNotRegistered = \"workflow type not registered\"\nconst string ErrNonRetryableType = \"com.uber.cadence.internal.shadowing.NonRetryableException\"\n\nenum Mode {\n  Normal,\n  Continuous,\n}\n\nstruct ExitCondition {\n  10: optional i32 expirationIntervalInSeconds\n  20: optional i32 shadowCount\n}\n\nstruct WorkflowParams {\n  10: optional string domain \n  20: optional string taskList\n  30: optional string workflowQuery\n  40: optional binary nextPageToken\n  50: optional double samplingRate\n  60: optional Mode shadowMode\n  70: optional ExitCondition exitCondition\n  80: optional i32 concurrency\n  90: optional WorkflowResult lastRunResult\n}\n\nstruct WorkflowResult {\n  10: optional i32 succeeded\n  20: optional i32 skipped\n  30: optional i32 failed\n}\n\nstruct ScanWorkflowActivityParams {\n  10: optional string domain\n  20: optional string workflowQuery\n  30: optional binary nextPageToken\n  40: optional i32 pageSize\n  50: optional double samplingRate\n}\n\nstruct ScanWorkflowActivityResult {\n  10: optional list<shared.WorkflowExecution> executions\n  20: optional binary nextPageToken\n}\n\nstruct ReplayWorkflowActivityParams {\n  10: optional string domain\n  20: optional list<shared.WorkflowExecution> executions\n}\n\nstruct ReplayWorkflowActivityResult {\n  10: optional i32 succeeded\n  20: optional i32 skipped\n  30: optional i32 failed\n}\n"})

export function __goscript_set_ThriftModule(__goscriptValue: thriftreflect.ThriftModule | $.VarRef<thriftreflect.ThriftModule> | null): void {
	ThriftModule = __goscriptValue
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({MarshalLogArray: (receiver: any, ...args: any[]) => (_List_WorkflowExecution_Zapper_MarshalLogArray as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("shared.WorkflowExecution"), "shadower._List_WorkflowExecution_Zapper"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("MarshalLogArray", [["enc", "zapcore.ArrayEncoder"]], [["err", "error"]])])
}

var __goscriptStatic3$value: any
function __goscriptStatic3(): any {
	return __goscriptStatic3$value ??= ({Close: (receiver: any, ...args: any[]) => (_List_WorkflowExecution_ValueList_Close as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), ForEach: (receiver: any, ...args: any[]) => (_List_WorkflowExecution_ValueList_ForEach as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Size: (receiver: any, ...args: any[]) => (_List_WorkflowExecution_ValueList_Size as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), ValueType: (receiver: any, ...args: any[]) => (_List_WorkflowExecution_ValueList_ValueType as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic4$value: any
function __goscriptStatic4(): any {
	return __goscriptStatic4$value ??= (/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("shared.WorkflowExecution"), "shadower._List_WorkflowExecution_ValueList"))
}

var __goscriptStatic5$value: any
function __goscriptStatic5(): any {
	return __goscriptStatic5$value ??= ([$.methodSignature("Close"), $.methodSignature("ForEach", [["f", ({ kind: $.TypeKind.Function, params: ["wire.Value"], results: ["error"] } as $.FunctionTypeInfo)]], ["error"]), $.methodSignature("Size", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("ValueType", [], [/* @__PURE__ */ $.basicType("uint8", "wire.Type")])])
}

var __goscriptStatic6$value: any
function __goscriptStatic6(): any {
	return __goscriptStatic6$value ??= ({Encode: (receiver: any, ...args: any[]) => (Mode_Encode as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Equals: (receiver: any, ...args: any[]) => (Mode_Equals as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), MarshalJSON: (receiver: any, ...args: any[]) => (Mode_MarshalJSON as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), MarshalLogObject: (receiver: any, ...args: any[]) => (Mode_MarshalLogObject as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), MarshalText: (receiver: any, ...args: any[]) => (Mode_MarshalText as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Ptr: (receiver: any, ...args: any[]) => (Mode_Ptr as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (Mode_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), ToWire: (receiver: any, ...args: any[]) => (Mode_ToWire as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic7$value: any
function __goscriptStatic7(): any {
	return __goscriptStatic7$value ??= (/* @__PURE__ */ $.basicType("int32", "shadower.Mode"))
}

var __goscriptStatic8$value: any
function __goscriptStatic8(): any {
	return __goscriptStatic8$value ??= ([$.methodSignature("Encode", [["sw", "stream.Writer"]], ["error"]), $.methodSignature("Equals", [["rhs", /* @__PURE__ */ $.basicType("int32", "shadower.Mode")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("MarshalJSON", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("MarshalLogObject", [["enc", "zapcore.ObjectEncoder"]], ["error"]), $.methodSignature("MarshalText", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("Ptr", [], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32", "shadower.Mode"))]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("ToWire", [], ["wire.Value", "error"])])
}

var __goscriptAwait: any
