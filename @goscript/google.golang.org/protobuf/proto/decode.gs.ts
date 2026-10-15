// Generated file based on decode.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as protowire from "@goscript/google.golang.org/protobuf/encoding/protowire/index.js"

import * as messageset from "@goscript/google.golang.org/protobuf/internal/encoding/messageset/index.js"

import * as errors from "@goscript/google.golang.org/protobuf/internal/errors/index.js"

import * as flags from "@goscript/google.golang.org/protobuf/internal/flags/index.js"

import * as genid from "@goscript/google.golang.org/protobuf/internal/genid/index.js"

import * as pragma from "@goscript/google.golang.org/protobuf/internal/pragma/index.js"

import * as protoreflect from "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"

import * as protoregistry from "@goscript/google.golang.org/protobuf/reflect/protoregistry/index.js"

import * as protoiface from "@goscript/google.golang.org/protobuf/runtime/protoiface/index.js"

import * as math from "@goscript/math/index.js"

import * as utf8 from "@goscript/unicode/utf8/index.js"

import * as strs from "@goscript/google.golang.org/protobuf/internal/strs/index.js"

import * as order from "@goscript/google.golang.org/protobuf/internal/order/index.js"

import * as __goscript_checkinit from "./checkinit.gs.ts"

import * as __goscript_decode_gen from "./decode_gen.gs.ts"

import * as __goscript_messageset from "./messageset.gs.ts"

import * as __goscript_proto from "./proto.gs.ts"

import * as __goscript_proto_methods from "./proto_methods.gs.ts"

import * as __goscript_reset from "./reset.gs.ts"
import "@goscript/google.golang.org/protobuf/encoding/protowire/index.js"
import "@goscript/google.golang.org/protobuf/internal/encoding/messageset/index.js"
import "@goscript/google.golang.org/protobuf/internal/errors/index.js"
import "@goscript/google.golang.org/protobuf/internal/flags/index.js"
import "@goscript/google.golang.org/protobuf/internal/genid/index.js"
import "@goscript/google.golang.org/protobuf/internal/pragma/index.js"
import "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"
import "@goscript/google.golang.org/protobuf/reflect/protoregistry/index.js"
import "@goscript/google.golang.org/protobuf/runtime/protoiface/index.js"
import "@goscript/math/index.js"
import "@goscript/unicode/utf8/index.js"
import "@goscript/google.golang.org/protobuf/internal/strs/index.js"
import "@goscript/google.golang.org/protobuf/internal/order/index.js"
import "./checkinit.gs.ts"
import "./decode_gen.gs.ts"
import "./messageset.gs.ts"
import "./proto.gs.ts"
import "./proto_methods.gs.ts"
import "./reset.gs.ts"

$.registerTypePackagePath("google.golang.org/protobuf/proto", ["proto.UnmarshalOptions"])

export class UnmarshalOptions {
	public get NoUnkeyedLiterals(): pragma.NoUnkeyedLiterals {
		return this._fields.NoUnkeyedLiterals
	}

	public set NoUnkeyedLiterals(value: pragma.NoUnkeyedLiterals) {
		this._fields.NoUnkeyedLiterals = value
	}

	// Merge merges the input into the destination message.
	// The default behavior is to always reset the message before unmarshaling,
	// unless Merge is specified.
	public get Merge(): boolean {
		return this._fields.Merge
	}

	public set Merge(value: boolean) {
		this._fields.Merge = value
	}

	// AllowPartial accepts input for messages that will result in missing
	// required fields. If AllowPartial is false (the default), Unmarshal will
	// return an error if there are any missing required fields.
	public get AllowPartial(): boolean {
		return this._fields.AllowPartial
	}

	public set AllowPartial(value: boolean) {
		this._fields.AllowPartial = value
	}

	// If DiscardUnknown is set, unknown fields are ignored.
	public get DiscardUnknown(): boolean {
		return this._fields.DiscardUnknown
	}

	public set DiscardUnknown(value: boolean) {
		this._fields.DiscardUnknown = value
	}

	// Resolver is used for looking up types when unmarshaling extension fields.
	// If nil, this defaults to using protoregistry.GlobalTypes.
	public get Resolver(): any {
		return this._fields.Resolver
	}

	public set Resolver(value: any) {
		this._fields.Resolver = value
	}

	// RecursionLimit limits how deeply messages may be nested.
	// If zero, a default limit is applied.
	public get RecursionLimit(): number {
		return this._fields.RecursionLimit
	}

	public set RecursionLimit(value: number) {
		this._fields.RecursionLimit = value
	}

	public _fields: {
		NoUnkeyedLiterals: pragma.NoUnkeyedLiterals
		Merge: boolean
		AllowPartial: boolean
		DiscardUnknown: boolean
		Resolver: any
		RecursionLimit: number
	}

	constructor(init?: Partial<{NoUnkeyedLiterals?: pragma.NoUnkeyedLiterals, Merge?: boolean, AllowPartial?: boolean, DiscardUnknown?: boolean, Resolver?: any, RecursionLimit?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			NoUnkeyedLiterals: init?.NoUnkeyedLiterals ? init.NoUnkeyedLiterals.clone() : new pragma.NoUnkeyedLiterals(undefined, true),
			Merge: init?.Merge ?? (false as boolean),
			AllowPartial: init?.AllowPartial ?? (false as boolean),
			DiscardUnknown: init?.DiscardUnknown ?? (false as boolean),
			Resolver: init?.Resolver ?? (null! as any),
			RecursionLimit: init?.RecursionLimit ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): UnmarshalOptions {
		return new UnmarshalOptions(this, true)
	}

	public __goscriptAssign(source: UnmarshalOptions): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.NoUnkeyedLiterals, values.NoUnkeyedLiterals)
		target.Merge = values.Merge
		target.AllowPartial = values.AllowPartial
		target.DiscardUnknown = values.DiscardUnknown
		target.Resolver = $.assignFieldValue(target.Resolver, values.Resolver, { kind: $.TypeKind.Interface, methods: [$.methodSignature("FindExtensionByName", [["field", /* @__PURE__ */ $.basicType("string", "protoreflect.FullName")]], ["protoreflect.ExtensionType", "error"]), $.methodSignature("FindExtensionByNumber", [["message", /* @__PURE__ */ $.basicType("string", "protoreflect.FullName")], ["field", /* @__PURE__ */ $.basicType("int32", "protowire.Number")]], ["protoreflect.ExtensionType", "error"])] })
		target.RecursionLimit = values.RecursionLimit
	}

	public async Unmarshal(b: $.Slice<number>, m: __goscript_proto.Message | null): globalThis.Promise<$.GoError> {
		let o: UnmarshalOptions = this;
		if (o.RecursionLimit == 0) {
			o.RecursionLimit = 10000
		}
		let [, err] = await $.markAsStructValue($.cloneStructValue(o)).unmarshal(b, (__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoreflect.ProtoMessage, null>) : $.pointerValue<Exclude<protoreflect.ProtoMessage, null>>(m)).ProtoReflect(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
		return err
	}

	public async UnmarshalState(_in: protoiface.UnmarshalInput): globalThis.Promise<[protoiface.UnmarshalOutput, $.GoError]> {
		let o: UnmarshalOptions = this;
		if (o.RecursionLimit == 0) {
			o.RecursionLimit = 10000
		}
		return $.markAsStructValue($.cloneStructValue(o)).unmarshal(_in.Buf, _in.Message)
	}

	public async unmarshal(b: $.Slice<number>, m: protoreflect.Message | null): globalThis.Promise<[protoiface.UnmarshalOutput, $.GoError]> {
		let o: UnmarshalOptions = this;
		let out: protoiface.UnmarshalOutput = $.anonymousStructValue({"NoUnkeyedLiterals": new pragma.NoUnkeyedLiterals(undefined, true), "Flags": 0}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("NoUnkeyedLiterals", "pragma.NoUnkeyedLiterals", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Flags", /* @__PURE__ */ $.basicType("uint8"), [1], 0, true)] })
		let err: $.GoError = null! as $.GoError
		if (o.Resolver == null) {
			o.Resolver = $.interfaceValue(protoregistry.GlobalTypes, "*protoregistry.Types", /* @__PURE__ */ $.pointerType("protoregistry.Types"))
		}
		if (!o.Merge) {
			await __goscript_reset.Reset((__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(m)).Interface(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
		}
		let allowPartial = o.AllowPartial
		o.Merge = true
		o.AllowPartial = true
		let methods = await __goscript_proto_methods.protoMethods(m)
		let methods$: protoiface.Methods = methods == null ? $.pointerTarget<protoiface.Methods>(methods) : (methods as any).__isVarRef === true ? (methods as any).value : (methods as any).__goValue === undefined ? (methods as any) : $.pointerTarget<protoiface.Methods>(methods)
		if (((methods != null) && ((methods$ as protoiface.Methods).Unmarshal != null)) && !(o.DiscardUnknown && (($.uint64And((methods$ as protoiface.Methods).Flags, 2n)) == 0n))) {
			let _in = $.anonymousStructValue({NoUnkeyedLiterals: (new pragma.NoUnkeyedLiterals(undefined, true) as pragma.NoUnkeyedLiterals), Message: m, Buf: b, Flags: (0 as protoiface.UnmarshalInputFlags), Resolver: o.Resolver, Depth: o.RecursionLimit}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("NoUnkeyedLiterals", "pragma.NoUnkeyedLiterals", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Message", "protoreflect.Message", [1], 0, true), /* @__PURE__ */ $.structField("Buf", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [2], 16, true), /* @__PURE__ */ $.structField("Flags", /* @__PURE__ */ $.basicType("uint8"), [3], 40, true), /* @__PURE__ */ $.structField("Resolver", { kind: $.TypeKind.Interface, methods: [$.methodSignature("FindExtensionByName", [["field", /* @__PURE__ */ $.basicType("string", "protoreflect.FullName")]], ["protoreflect.ExtensionType", "error"]), $.methodSignature("FindExtensionByNumber", [["message", /* @__PURE__ */ $.basicType("string", "protoreflect.FullName")], ["field", /* @__PURE__ */ $.basicType("int32", "protowire.Number")]], ["protoreflect.ExtensionType", "error"])] }, [4], 48, true), /* @__PURE__ */ $.structField("Depth", /* @__PURE__ */ $.basicType("int"), [5], 64, true)] })
			if (o.DiscardUnknown) {
				_in.Flags = _in.Flags | (1)
			}
			let __goscriptTuple0: any = await (methods$ as protoiface.Methods).Unmarshal!($.markAsStructValue($.cloneStructValue(_in)))
			out = $.assignStruct(out, __goscriptTuple0[0])
			err = __goscriptTuple0[1]
		} else {
			o.RecursionLimit--
			if (o.RecursionLimit < 0) {
				return [$.markAsStructValue($.cloneStructValue(out)), await errors.New("exceeded max recursion depth", null)]
			}
			err = await o.unmarshalMessageSlow(b, m)
		}
		if (err != null) {
			return [$.markAsStructValue($.cloneStructValue(out)), err]
		}
		if (allowPartial || ($.uint((out.Flags & protoiface.UnmarshalInitialized), 8) != 0)) {
			return [$.markAsStructValue($.cloneStructValue(out)), null]
		}
		return [$.markAsStructValue($.cloneStructValue(out)), await __goscript_checkinit.checkInitialized(m)]
	}

	public async unmarshalList(b: $.Slice<number>, wtyp: protowire.Type, list: protoreflect.List | null, fd: protoreflect.FieldDescriptor | null): globalThis.Promise<[number, $.GoError]> {
		const o = this;
		let n: number = 0
		let err: $.GoError = null! as $.GoError
		switch ((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
			case protoreflect.BoolKind:
			{
				if (wtyp == 2) {
					let __goscriptTuple1: any = protowire.ConsumeBytes(b)
					let buf: $.Slice<number> = __goscriptTuple1[0]
					let __goscriptShadow0 = __goscriptTuple1[1]
					if (__goscriptShadow0 < 0) {
						return [0, errDecode]
					}
					while ($.sliceLen(buf) > 0) {
						let [v, __goscriptShadow1] = protowire.ConsumeVarint(buf)
						if (__goscriptShadow1 < 0) {
							return [0, errDecode]
						}
						buf = $.goSlice(buf, __goscriptShadow1, undefined)
						void (__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Append(protoreflect.ValueOfBool(protowire.DecodeBool(v))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					}
					return [__goscriptShadow0, null]
				}
				if (wtyp != 0) {
					return [0, errUnknown]
				}
				let [v, __goscriptShadow2] = protowire.ConsumeVarint(b)
				if (__goscriptShadow2 < 0) {
					return [0, errDecode]
				}
				void (__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Append(protoreflect.ValueOfBool(protowire.DecodeBool(v))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				return [__goscriptShadow2, null]
				break
			}
			case protoreflect.EnumKind:
			{
				if (wtyp == 2) {
					let __goscriptTuple2: any = protowire.ConsumeBytes(b)
					let buf: $.Slice<number> = __goscriptTuple2[0]
					let __goscriptShadow3 = __goscriptTuple2[1]
					if (__goscriptShadow3 < 0) {
						return [0, errDecode]
					}
					while ($.sliceLen(buf) > 0) {
						let [v, __goscriptShadow4] = protowire.ConsumeVarint(buf)
						if (__goscriptShadow4 < 0) {
							return [0, errDecode]
						}
						buf = $.goSlice(buf, __goscriptShadow4, undefined)
						void (__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Append(protoreflect.ValueOfEnum($.int(v, 32))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					}
					return [__goscriptShadow3, null]
				}
				if (wtyp != 0) {
					return [0, errUnknown]
				}
				let [v, __goscriptShadow5] = protowire.ConsumeVarint(b)
				if (__goscriptShadow5 < 0) {
					return [0, errDecode]
				}
				void (__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Append(protoreflect.ValueOfEnum($.int(v, 32))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				return [__goscriptShadow5, null]
				break
			}
			case protoreflect.Int32Kind:
			{
				if (wtyp == 2) {
					let __goscriptTuple3: any = protowire.ConsumeBytes(b)
					let buf: $.Slice<number> = __goscriptTuple3[0]
					let __goscriptShadow6 = __goscriptTuple3[1]
					if (__goscriptShadow6 < 0) {
						return [0, errDecode]
					}
					while ($.sliceLen(buf) > 0) {
						let [v, __goscriptShadow7] = protowire.ConsumeVarint(buf)
						if (__goscriptShadow7 < 0) {
							return [0, errDecode]
						}
						buf = $.goSlice(buf, __goscriptShadow7, undefined)
						void (__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Append(protoreflect.ValueOfInt32($.int(v, 32))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					}
					return [__goscriptShadow6, null]
				}
				if (wtyp != 0) {
					return [0, errUnknown]
				}
				let [v, __goscriptShadow8] = protowire.ConsumeVarint(b)
				if (__goscriptShadow8 < 0) {
					return [0, errDecode]
				}
				void (__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Append(protoreflect.ValueOfInt32($.int(v, 32))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				return [__goscriptShadow8, null]
				break
			}
			case protoreflect.Sint32Kind:
			{
				if (wtyp == 2) {
					let __goscriptTuple4: any = protowire.ConsumeBytes(b)
					let buf: $.Slice<number> = __goscriptTuple4[0]
					let __goscriptShadow9 = __goscriptTuple4[1]
					if (__goscriptShadow9 < 0) {
						return [0, errDecode]
					}
					while ($.sliceLen(buf) > 0) {
						let [v, __goscriptShadow10] = protowire.ConsumeVarint(buf)
						if (__goscriptShadow10 < 0) {
							return [0, errDecode]
						}
						buf = $.goSlice(buf, __goscriptShadow10, undefined)
						void (__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Append(protoreflect.ValueOfInt32($.int(protowire.DecodeZigZag($.uint64And(v, 4294967295n)), 32))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					}
					return [__goscriptShadow9, null]
				}
				if (wtyp != 0) {
					return [0, errUnknown]
				}
				let [v, __goscriptShadow11] = protowire.ConsumeVarint(b)
				if (__goscriptShadow11 < 0) {
					return [0, errDecode]
				}
				void (__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Append(protoreflect.ValueOfInt32($.int(protowire.DecodeZigZag($.uint64And(v, 4294967295n)), 32))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				return [__goscriptShadow11, null]
				break
			}
			case protoreflect.Uint32Kind:
			{
				if (wtyp == 2) {
					let __goscriptTuple5: any = protowire.ConsumeBytes(b)
					let buf: $.Slice<number> = __goscriptTuple5[0]
					let __goscriptShadow12 = __goscriptTuple5[1]
					if (__goscriptShadow12 < 0) {
						return [0, errDecode]
					}
					while ($.sliceLen(buf) > 0) {
						let [v, __goscriptShadow13] = protowire.ConsumeVarint(buf)
						if (__goscriptShadow13 < 0) {
							return [0, errDecode]
						}
						buf = $.goSlice(buf, __goscriptShadow13, undefined)
						void (__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Append(protoreflect.ValueOfUint32($.uint(v, 32))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					}
					return [__goscriptShadow12, null]
				}
				if (wtyp != 0) {
					return [0, errUnknown]
				}
				let [v, __goscriptShadow14] = protowire.ConsumeVarint(b)
				if (__goscriptShadow14 < 0) {
					return [0, errDecode]
				}
				void (__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Append(protoreflect.ValueOfUint32($.uint(v, 32))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				return [__goscriptShadow14, null]
				break
			}
			case protoreflect.Int64Kind:
			{
				if (wtyp == 2) {
					let __goscriptTuple6: any = protowire.ConsumeBytes(b)
					let buf: $.Slice<number> = __goscriptTuple6[0]
					let __goscriptShadow15 = __goscriptTuple6[1]
					if (__goscriptShadow15 < 0) {
						return [0, errDecode]
					}
					while ($.sliceLen(buf) > 0) {
						let [v, __goscriptShadow16] = protowire.ConsumeVarint(buf)
						if (__goscriptShadow16 < 0) {
							return [0, errDecode]
						}
						buf = $.goSlice(buf, __goscriptShadow16, undefined)
						void (__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Append(protoreflect.ValueOfInt64($.int64(v))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					}
					return [__goscriptShadow15, null]
				}
				if (wtyp != 0) {
					return [0, errUnknown]
				}
				let [v, __goscriptShadow17] = protowire.ConsumeVarint(b)
				if (__goscriptShadow17 < 0) {
					return [0, errDecode]
				}
				void (__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Append(protoreflect.ValueOfInt64($.int64(v))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				return [__goscriptShadow17, null]
				break
			}
			case protoreflect.Sint64Kind:
			{
				if (wtyp == 2) {
					let __goscriptTuple7: any = protowire.ConsumeBytes(b)
					let buf: $.Slice<number> = __goscriptTuple7[0]
					let __goscriptShadow18 = __goscriptTuple7[1]
					if (__goscriptShadow18 < 0) {
						return [0, errDecode]
					}
					while ($.sliceLen(buf) > 0) {
						let [v, __goscriptShadow19] = protowire.ConsumeVarint(buf)
						if (__goscriptShadow19 < 0) {
							return [0, errDecode]
						}
						buf = $.goSlice(buf, __goscriptShadow19, undefined)
						void (__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Append(protoreflect.ValueOfInt64(protowire.DecodeZigZag(v))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					}
					return [__goscriptShadow18, null]
				}
				if (wtyp != 0) {
					return [0, errUnknown]
				}
				let [v, __goscriptShadow20] = protowire.ConsumeVarint(b)
				if (__goscriptShadow20 < 0) {
					return [0, errDecode]
				}
				void (__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Append(protoreflect.ValueOfInt64(protowire.DecodeZigZag(v))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				return [__goscriptShadow20, null]
				break
			}
			case protoreflect.Uint64Kind:
			{
				if (wtyp == 2) {
					let __goscriptTuple8: any = protowire.ConsumeBytes(b)
					let buf: $.Slice<number> = __goscriptTuple8[0]
					let __goscriptShadow21 = __goscriptTuple8[1]
					if (__goscriptShadow21 < 0) {
						return [0, errDecode]
					}
					while ($.sliceLen(buf) > 0) {
						let [v, __goscriptShadow22] = protowire.ConsumeVarint(buf)
						if (__goscriptShadow22 < 0) {
							return [0, errDecode]
						}
						buf = $.goSlice(buf, __goscriptShadow22, undefined)
						void (__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Append(protoreflect.ValueOfUint64(v)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					}
					return [__goscriptShadow21, null]
				}
				if (wtyp != 0) {
					return [0, errUnknown]
				}
				let [v, __goscriptShadow23] = protowire.ConsumeVarint(b)
				if (__goscriptShadow23 < 0) {
					return [0, errDecode]
				}
				void (__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Append(protoreflect.ValueOfUint64(v)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				return [__goscriptShadow23, null]
				break
			}
			case protoreflect.Sfixed32Kind:
			{
				if (wtyp == 2) {
					let __goscriptTuple9: any = protowire.ConsumeBytes(b)
					let buf: $.Slice<number> = __goscriptTuple9[0]
					let __goscriptShadow24 = __goscriptTuple9[1]
					if (__goscriptShadow24 < 0) {
						return [0, errDecode]
					}
					while ($.sliceLen(buf) > 0) {
						let [v, __goscriptShadow25] = protowire.ConsumeFixed32(buf)
						if (__goscriptShadow25 < 0) {
							return [0, errDecode]
						}
						buf = $.goSlice(buf, __goscriptShadow25, undefined)
						void (__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Append(protoreflect.ValueOfInt32($.int(v, 32))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					}
					return [__goscriptShadow24, null]
				}
				if (wtyp != 5) {
					return [0, errUnknown]
				}
				let [v, __goscriptShadow26] = protowire.ConsumeFixed32(b)
				if (__goscriptShadow26 < 0) {
					return [0, errDecode]
				}
				void (__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Append(protoreflect.ValueOfInt32($.int(v, 32))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				return [__goscriptShadow26, null]
				break
			}
			case protoreflect.Fixed32Kind:
			{
				if (wtyp == 2) {
					let __goscriptTuple10: any = protowire.ConsumeBytes(b)
					let buf: $.Slice<number> = __goscriptTuple10[0]
					let __goscriptShadow27 = __goscriptTuple10[1]
					if (__goscriptShadow27 < 0) {
						return [0, errDecode]
					}
					while ($.sliceLen(buf) > 0) {
						let [v, __goscriptShadow28] = protowire.ConsumeFixed32(buf)
						if (__goscriptShadow28 < 0) {
							return [0, errDecode]
						}
						buf = $.goSlice(buf, __goscriptShadow28, undefined)
						void (__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Append(protoreflect.ValueOfUint32($.uint(v, 32))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					}
					return [__goscriptShadow27, null]
				}
				if (wtyp != 5) {
					return [0, errUnknown]
				}
				let [v, __goscriptShadow29] = protowire.ConsumeFixed32(b)
				if (__goscriptShadow29 < 0) {
					return [0, errDecode]
				}
				void (__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Append(protoreflect.ValueOfUint32($.uint(v, 32))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				return [__goscriptShadow29, null]
				break
			}
			case protoreflect.FloatKind:
			{
				if (wtyp == 2) {
					let __goscriptTuple11: any = protowire.ConsumeBytes(b)
					let buf: $.Slice<number> = __goscriptTuple11[0]
					let __goscriptShadow30 = __goscriptTuple11[1]
					if (__goscriptShadow30 < 0) {
						return [0, errDecode]
					}
					while ($.sliceLen(buf) > 0) {
						let [v, __goscriptShadow31] = protowire.ConsumeFixed32(buf)
						if (__goscriptShadow31 < 0) {
							return [0, errDecode]
						}
						buf = $.goSlice(buf, __goscriptShadow31, undefined)
						void (__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Append(protoreflect.ValueOfFloat32(math.Float32frombits($.uint(v, 32)))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					}
					return [__goscriptShadow30, null]
				}
				if (wtyp != 5) {
					return [0, errUnknown]
				}
				let [v, __goscriptShadow32] = protowire.ConsumeFixed32(b)
				if (__goscriptShadow32 < 0) {
					return [0, errDecode]
				}
				void (__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Append(protoreflect.ValueOfFloat32(math.Float32frombits($.uint(v, 32)))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				return [__goscriptShadow32, null]
				break
			}
			case protoreflect.Sfixed64Kind:
			{
				if (wtyp == 2) {
					let __goscriptTuple12: any = protowire.ConsumeBytes(b)
					let buf: $.Slice<number> = __goscriptTuple12[0]
					let __goscriptShadow33 = __goscriptTuple12[1]
					if (__goscriptShadow33 < 0) {
						return [0, errDecode]
					}
					while ($.sliceLen(buf) > 0) {
						let [v, __goscriptShadow34] = protowire.ConsumeFixed64(buf)
						if (__goscriptShadow34 < 0) {
							return [0, errDecode]
						}
						buf = $.goSlice(buf, __goscriptShadow34, undefined)
						void (__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Append(protoreflect.ValueOfInt64($.int64(v))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					}
					return [__goscriptShadow33, null]
				}
				if (wtyp != 1) {
					return [0, errUnknown]
				}
				let [v, __goscriptShadow35] = protowire.ConsumeFixed64(b)
				if (__goscriptShadow35 < 0) {
					return [0, errDecode]
				}
				void (__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Append(protoreflect.ValueOfInt64($.int64(v))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				return [__goscriptShadow35, null]
				break
			}
			case protoreflect.Fixed64Kind:
			{
				if (wtyp == 2) {
					let __goscriptTuple13: any = protowire.ConsumeBytes(b)
					let buf: $.Slice<number> = __goscriptTuple13[0]
					let __goscriptShadow36 = __goscriptTuple13[1]
					if (__goscriptShadow36 < 0) {
						return [0, errDecode]
					}
					while ($.sliceLen(buf) > 0) {
						let [v, __goscriptShadow37] = protowire.ConsumeFixed64(buf)
						if (__goscriptShadow37 < 0) {
							return [0, errDecode]
						}
						buf = $.goSlice(buf, __goscriptShadow37, undefined)
						void (__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Append(protoreflect.ValueOfUint64(v)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					}
					return [__goscriptShadow36, null]
				}
				if (wtyp != 1) {
					return [0, errUnknown]
				}
				let [v, __goscriptShadow38] = protowire.ConsumeFixed64(b)
				if (__goscriptShadow38 < 0) {
					return [0, errDecode]
				}
				void (__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Append(protoreflect.ValueOfUint64(v)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				return [__goscriptShadow38, null]
				break
			}
			case protoreflect.DoubleKind:
			{
				if (wtyp == 2) {
					let __goscriptTuple14: any = protowire.ConsumeBytes(b)
					let buf: $.Slice<number> = __goscriptTuple14[0]
					let __goscriptShadow39 = __goscriptTuple14[1]
					if (__goscriptShadow39 < 0) {
						return [0, errDecode]
					}
					while ($.sliceLen(buf) > 0) {
						let [v, __goscriptShadow40] = protowire.ConsumeFixed64(buf)
						if (__goscriptShadow40 < 0) {
							return [0, errDecode]
						}
						buf = $.goSlice(buf, __goscriptShadow40, undefined)
						void (__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Append(protoreflect.ValueOfFloat64(math.Float64frombits(v))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					}
					return [__goscriptShadow39, null]
				}
				if (wtyp != 1) {
					return [0, errUnknown]
				}
				let [v, __goscriptShadow41] = protowire.ConsumeFixed64(b)
				if (__goscriptShadow41 < 0) {
					return [0, errDecode]
				}
				void (__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Append(protoreflect.ValueOfFloat64(math.Float64frombits(v))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				return [__goscriptShadow41, null]
				break
			}
			case protoreflect.StringKind:
			{
				if (wtyp != 2) {
					return [0, errUnknown]
				}
				let __goscriptTuple15: any = protowire.ConsumeBytes(b)
				let v: $.Slice<number> = __goscriptTuple15[0]
				let __goscriptShadow42 = __goscriptTuple15[1]
				if (__goscriptShadow42 < 0) {
					return [0, errDecode]
				}
				if (await strs.EnforceUTF8(fd) && !utf8.Valid(v)) {
					return [0, await errors.InvalidUTF8((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))]
				}
				void (__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Append(protoreflect.ValueOfString($.bytesToString(v))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				return [__goscriptShadow42, null]
				break
			}
			case protoreflect.BytesKind:
			{
				if (wtyp != 2) {
					return [0, errUnknown]
				}
				let __goscriptTuple16: any = protowire.ConsumeBytes(b)
				let v: $.Slice<number> = __goscriptTuple16[0]
				let __goscriptShadow43 = __goscriptTuple16[1]
				if (__goscriptShadow43 < 0) {
					return [0, errDecode]
				}
				void (__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Append(protoreflect.ValueOfBytes($.appendSlice($.goSlice(__goscript_decode_gen.emptyBuf, undefined, undefined), v, $.byteSliceHint))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				return [__goscriptShadow43, null]
				break
			}
			case protoreflect.MessageKind:
			{
				if (wtyp != 2) {
					return [0, errUnknown]
				}
				let __goscriptTuple17: any = protowire.ConsumeBytes(b)
				let v: $.Slice<number> = __goscriptTuple17[0]
				let __goscriptShadow44 = __goscriptTuple17[1]
				if (__goscriptShadow44 < 0) {
					return [0, errDecode]
				}
				let m = (((__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).NewElement(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value)).clone()
				{
					let __goscriptShadow45 = await $.markAsStructValue($.cloneStructValue(o)).unmarshalMessage(v, await $.markAsStructValue($.cloneStructValue(m)).Message())
					if (__goscriptShadow45 != null) {
						return [0, __goscriptShadow45]
					}
				}
				void (__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Append((m).clone()), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				return [__goscriptShadow44, null]
				break
			}
			case protoreflect.GroupKind:
			{
				if (wtyp != 3) {
					return [0, errUnknown]
				}
				let __goscriptTuple18: any = protowire.ConsumeGroup((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Number(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), b)
				let v: $.Slice<number> = __goscriptTuple18[0]
				let __goscriptShadow46 = __goscriptTuple18[1]
				if (__goscriptShadow46 < 0) {
					return [0, errDecode]
				}
				let m = (((__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).NewElement(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value)).clone()
				{
					let __goscriptShadow47 = await $.markAsStructValue($.cloneStructValue(o)).unmarshalMessage(v, await $.markAsStructValue($.cloneStructValue(m)).Message())
					if (__goscriptShadow47 != null) {
						return [0, __goscriptShadow47]
					}
				}
				void (__goscriptAwait = (list !== null && (list as any).__isVarRef !== true && (list as any).__goValue === undefined ? (list as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(list)).Append((m).clone()), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				return [__goscriptShadow46, null]
				break
			}
			default:
			{
				return [0, errUnknown]
				break
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async unmarshalMap(b: $.Slice<number>, wtyp: protowire.Type, mapv: protoreflect.Map | null, fd: protoreflect.FieldDescriptor | null): globalThis.Promise<[number, $.GoError]> {
		const o = this;
		let n: number = 0
		let err: $.GoError = null! as $.GoError
		if (wtyp != 2) {
			return [0, errUnknown]
		}
		let __goscriptTuple19: any = protowire.ConsumeBytes(b)
		b = __goscriptTuple19[0]
		n = __goscriptTuple19[1]
		if (n < 0) {
			return [0, errDecode]
		}
		let keyField: protoreflect.FieldDescriptor | null = (__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).MapKey(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		let valField: protoreflect.FieldDescriptor | null = (__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).MapValue(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		let key: protoreflect.Value = new protoreflect.Value(undefined, true)
		let val: protoreflect.Value = new protoreflect.Value(undefined, true)
		let haveKey: boolean = false
		let haveVal: boolean = false
		switch ((__goscriptAwait = (valField !== null && (valField as any).__isVarRef !== true && (valField as any).__goValue === undefined ? (valField as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(valField)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
			case protoreflect.GroupKind:
			case protoreflect.MessageKind:
			{
				val = $.assignStruct(val, ((__goscriptAwait = (mapv !== null && (mapv as any).__isVarRef !== true && (mapv as any).__goValue === undefined ? (mapv as Exclude<protoreflect.Map, null>) : $.pointerValue<Exclude<protoreflect.Map, null>>(mapv)).NewValue(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value))
				break
			}
		}
		// Map entries are represented as a two-element message with fields
		// containing the key and value.
		while ($.sliceLen(b) > 0) {
			let [num, __goscriptShadow48, __goscriptShadow49] = protowire.ConsumeTag(b)
			if (__goscriptShadow49 < 0) {
				return [0, errDecode]
			}
			if (num > 536870911) {
				return [0, errDecode]
			}
			b = $.goSlice(b, __goscriptShadow49, undefined)
			err = errUnknown
			switch (num) {
				case genid.MapEntry_Key_field_number:
				{
					let __goscriptTuple20: any = await o.unmarshalScalar(b, __goscriptShadow48, keyField)
					key = $.assignStruct(key, __goscriptTuple20[0])
					__goscriptShadow49 = __goscriptTuple20[1]
					err = __goscriptTuple20[2]
					if (err != null) {
						break
					}
					haveKey = true
					break
				}
				case genid.MapEntry_Value_field_number:
				{
					let v: protoreflect.Value = new protoreflect.Value(undefined, true)
					let __goscriptTuple21: any = await o.unmarshalScalar(b, __goscriptShadow48, valField)
					v = $.assignStruct(v, __goscriptTuple21[0])
					__goscriptShadow49 = __goscriptTuple21[1]
					err = __goscriptTuple21[2]
					if (err != null) {
						break
					}
					switch ((__goscriptAwait = (valField !== null && (valField as any).__isVarRef !== true && (valField as any).__goValue === undefined ? (valField as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(valField)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
						case protoreflect.GroupKind:
						case protoreflect.MessageKind:
						{
							{
								let __goscriptShadow50 = await o.unmarshalMessage(await v.Bytes(), await val.Message())
								if (__goscriptShadow50 != null) {
									return [0, __goscriptShadow50]
								}
							}
							break
						}
						default:
						{
							val = $.assignStruct(val, v)
							break
						}
					}
					haveVal = true
					break
				}
			}
			if ($.comparableEqual(err, errUnknown)) {
				__goscriptShadow49 = protowire.ConsumeFieldValue(num, __goscriptShadow48, b)
				if (__goscriptShadow49 < 0) {
					return [0, errDecode]
				}
			} else {
				if (err != null) {
					return [0, err]
				}
			}
			b = $.goSlice(b, __goscriptShadow49, undefined)
		}
		// Every map entry should have entries for key and value, but this is not strictly required.
		if (!haveKey) {
			key = $.assignStruct(key, ((__goscriptAwait = (keyField !== null && (keyField as any).__isVarRef !== true && (keyField as any).__goValue === undefined ? (keyField as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(keyField)).Default(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value))
		}
		if (!haveVal) {
			switch ((__goscriptAwait = (valField !== null && (valField as any).__isVarRef !== true && (valField as any).__goValue === undefined ? (valField as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(valField)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
				case protoreflect.GroupKind:
				case protoreflect.MessageKind:
				{
					break
				}
				default:
				{
					val = $.assignStruct(val, ((__goscriptAwait = (valField !== null && (valField as any).__isVarRef !== true && (valField as any).__goValue === undefined ? (valField as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(valField)).Default(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value))
					break
				}
			}
		}
		void (__goscriptAwait = (mapv !== null && (mapv as any).__isVarRef !== true && (mapv as any).__goValue === undefined ? (mapv as Exclude<protoreflect.Map, null>) : $.pointerValue<Exclude<protoreflect.Map, null>>(mapv)).Set(await key.MapKey(), (val).clone()), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		return [n, null]
	}

	public async unmarshalMessage(b: $.Slice<number>, m: protoreflect.Message | null): globalThis.Promise<$.GoError> {
		const o = this;
		let [, err] = await $.markAsStructValue($.cloneStructValue(o)).unmarshal(b, m)
		return err
	}

	public async unmarshalMessageSet(b: $.Slice<number>, m: protoreflect.Message | null): globalThis.Promise<$.GoError> {
		const o = this;
		if (!flags.ProtoLegacy) {
			return errors.New("no support for message_set_wire_format", null)
		}
		return messageset.Unmarshal(b, false, $.functionValue(async (num: protowire.Number, v: $.Slice<number>): globalThis.Promise<$.GoError> => {
			let err = await $.markAsStructValue($.cloneStructValue(o)).unmarshalMessageSetField(m, num, v)
			if ($.comparableEqual(err, errUnknown)) {
				let _unknown: protoreflect.RawFields = (((__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(m)).GetUnknown(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.RawFields) as protoreflect.RawFields)
				_unknown = (protowire.AppendTag(_unknown, num, 2) as protoreflect.RawFields)
				_unknown = (protowire.AppendBytes(_unknown, v) as protoreflect.RawFields)
				void (__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(m)).SetUnknown((_unknown as protoreflect.RawFields)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				return null
			}
			return err
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int32", "protowire.Number"), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], results: ["error"] } as $.FunctionTypeInfo)))
	}

	public async unmarshalMessageSetField(m: protoreflect.Message | null, num: protowire.Number, v: $.Slice<number>): globalThis.Promise<$.GoError> {
		const o = this;
		let md = (__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(m)).Descriptor(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		if (!(__goscriptAwait = $.pointerValue<Exclude<protoreflect.FieldRanges, null>>((__goscriptAwait = (md !== null && (md as any).__isVarRef !== true && (md as any).__goValue === undefined ? (md as Exclude<protoreflect.MessageDescriptor, null>) : $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>(md)).ExtensionRanges(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Has(num), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
			return errUnknown
		}
		let [xt, err] = await $.pointerValue<any>(o.Resolver).FindExtensionByNumber((__goscriptAwait = (md !== null && (md as any).__isVarRef !== true && (md as any).__goValue === undefined ? (md as Exclude<protoreflect.MessageDescriptor, null>) : $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>(md)).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), num)
		if ($.comparableEqual(err, protoregistry.NotFound)) {
			return errUnknown
		}
		if (err != null) {
			return errors.New("%v: unable to resolve extension %v: %v", $.arrayToSlice<any>([$.namedValueInterfaceValue<any>((__goscriptAwait = (md !== null && (md as any).__isVarRef !== true && (md as any).__goValue === undefined ? (md as Exclude<protoreflect.MessageDescriptor, null>) : $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>(md)).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), "protoreflect.FullName", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), $.namedValueInterfaceValue<any>(num, "protowire.Number", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic5()), (err as any)]))
		}
		let xd = (__goscriptAwait = (xt !== null && (xt as any).__isVarRef !== true && (xt as any).__goValue === undefined ? (xt as Exclude<protoreflect.ExtensionType, null>) : $.pointerValue<Exclude<protoreflect.ExtensionType, null>>(xt)).TypeDescriptor(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		{
			let __goscriptShadow51 = await $.markAsStructValue($.cloneStructValue(o)).unmarshalMessage(v, await $.markAsStructValue($.cloneStructValue(((__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(m)).Mutable((xd as protoreflect.FieldDescriptor | null)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value))).Message())
			if (__goscriptShadow51 != null) {
				return __goscriptShadow51
			}
		}
		return null
	}

	public async unmarshalMessageSlow(b: $.Slice<number>, m: protoreflect.Message | null): globalThis.Promise<$.GoError> {
		const o = this;
		let md = (__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(m)).Descriptor(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		if (await messageset.IsMessageSet(md)) {
			return $.markAsStructValue($.cloneStructValue(o)).unmarshalMessageSet(b, m)
		}
		let fields = (__goscriptAwait = (md !== null && (md as any).__isVarRef !== true && (md as any).__goValue === undefined ? (md as Exclude<protoreflect.MessageDescriptor, null>) : $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>(md)).Fields(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		while ($.sliceLen(b) > 0) {
			// Parse the tag (field number and wire type).
			let [num, wtyp, tagLen] = protowire.ConsumeTag(b)
			if (tagLen < 0) {
				return errDecode
			}
			if (num > 536870911) {
				return errDecode
			}

			// Find the field descriptor for this field number.
			let fd = (__goscriptAwait = (fields !== null && (fields as any).__isVarRef !== true && (fields as any).__goValue === undefined ? (fields as Exclude<protoreflect.FieldDescriptors, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptors, null>>(fields)).ByNumber(num), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if ((fd == null) && (__goscriptAwait = $.pointerValue<Exclude<protoreflect.FieldRanges, null>>((__goscriptAwait = (md !== null && (md as any).__isVarRef !== true && (md as any).__goValue === undefined ? (md as Exclude<protoreflect.MessageDescriptor, null>) : $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>(md)).ExtensionRanges(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Has(num), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
				let [extType, err] = await $.pointerValue<any>(o.Resolver).FindExtensionByNumber((__goscriptAwait = (md !== null && (md as any).__isVarRef !== true && (md as any).__goValue === undefined ? (md as Exclude<protoreflect.MessageDescriptor, null>) : $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>(md)).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), num)
				if ((err != null) && (!$.comparableEqual(err, protoregistry.NotFound))) {
					return errors.New("%v: unable to resolve extension %v: %v", $.arrayToSlice<any>([$.namedValueInterfaceValue<any>((__goscriptAwait = (md !== null && (md as any).__isVarRef !== true && (md as any).__goValue === undefined ? (md as Exclude<protoreflect.MessageDescriptor, null>) : $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>(md)).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), "protoreflect.FullName", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), $.namedValueInterfaceValue<any>(num, "protowire.Number", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic5()), (err as any)]))
				}
				if (extType != null) {
					fd = ((__goscriptAwait = (extType !== null && (extType as any).__isVarRef !== true && (extType as any).__goValue === undefined ? (extType as Exclude<protoreflect.ExtensionType, null>) : $.pointerValue<Exclude<protoreflect.ExtensionType, null>>(extType)).TypeDescriptor(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.FieldDescriptor | null)
				}
			}
			let err: $.GoError = null! as $.GoError
			if (fd == null) {
				err = errUnknown
			} else {
				if (flags.ProtoLegacy) {
					if ((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).IsWeak(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) && (__goscriptAwait = $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Message(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).IsPlaceholder(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
						err = errUnknown
					}
				}
			}

			// Parse the field value.
			let valLen: number = 0
			switch ((true as boolean)) {
				case err != null:
				{
					break
				}
				case (__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).IsList(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait):
				{
					let __goscriptTuple22: any = await o.unmarshalList($.goSlice(b, tagLen, undefined), wtyp, await $.markAsStructValue($.cloneStructValue(((__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(m)).Mutable(fd), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value))).List(), fd)
					valLen = __goscriptTuple22[0]
					err = __goscriptTuple22[1]
					break
				}
				case (__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).IsMap(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait):
				{
					let __goscriptTuple23: any = await o.unmarshalMap($.goSlice(b, tagLen, undefined), wtyp, await $.markAsStructValue($.cloneStructValue(((__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(m)).Mutable(fd), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value))).Map(), fd)
					valLen = __goscriptTuple23[0]
					err = __goscriptTuple23[1]
					break
				}
				default:
				{
					let __goscriptTuple24: any = await o.unmarshalSingular($.goSlice(b, tagLen, undefined), wtyp, m, fd)
					valLen = __goscriptTuple24[0]
					err = __goscriptTuple24[1]
					break
				}
			}
			if (err != null) {
				if (!$.comparableEqual(err, errUnknown)) {
					return err
				}
				valLen = protowire.ConsumeFieldValue(num, wtyp, $.goSlice(b, tagLen, undefined))
				if (valLen < 0) {
					return errDecode
				}
				if (!o.DiscardUnknown) {
					void (__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(m)).SetUnknown(($.appendSlice((((__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(m)).GetUnknown(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.RawFields) as protoreflect.RawFields), $.goSlice(b, undefined, tagLen + valLen), $.byteSliceHint) as protoreflect.RawFields)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				}
			}
			b = $.goSlice(b, tagLen + valLen, undefined)
		}
		return null
	}

	public async unmarshalScalar(b: $.Slice<number>, wtyp: protowire.Type, fd: protoreflect.FieldDescriptor | null): globalThis.Promise<[protoreflect.Value, number, $.GoError]> {
		const o = this;
		let val: protoreflect.Value = new protoreflect.Value(undefined, true)
		let n: number = 0
		let err: $.GoError = null! as $.GoError
		switch ((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
			case protoreflect.BoolKind:
			{
				if (wtyp != 0) {
					return [(val).clone(), 0, errUnknown]
				}
				let [v, __goscriptShadow52] = protowire.ConsumeVarint(b)
				if (__goscriptShadow52 < 0) {
					return [(val).clone(), 0, errDecode]
				}
				return [protoreflect.ValueOfBool(protowire.DecodeBool(v)), __goscriptShadow52, null]
				break
			}
			case protoreflect.EnumKind:
			{
				if (wtyp != 0) {
					return [(val).clone(), 0, errUnknown]
				}
				let [v, __goscriptShadow53] = protowire.ConsumeVarint(b)
				if (__goscriptShadow53 < 0) {
					return [(val).clone(), 0, errDecode]
				}
				return [protoreflect.ValueOfEnum($.int(v, 32)), __goscriptShadow53, null]
				break
			}
			case protoreflect.Int32Kind:
			{
				if (wtyp != 0) {
					return [(val).clone(), 0, errUnknown]
				}
				let [v, __goscriptShadow54] = protowire.ConsumeVarint(b)
				if (__goscriptShadow54 < 0) {
					return [(val).clone(), 0, errDecode]
				}
				return [protoreflect.ValueOfInt32($.int(v, 32)), __goscriptShadow54, null]
				break
			}
			case protoreflect.Sint32Kind:
			{
				if (wtyp != 0) {
					return [(val).clone(), 0, errUnknown]
				}
				let [v, __goscriptShadow55] = protowire.ConsumeVarint(b)
				if (__goscriptShadow55 < 0) {
					return [(val).clone(), 0, errDecode]
				}
				return [protoreflect.ValueOfInt32($.int(protowire.DecodeZigZag($.uint64And(v, 4294967295n)), 32)), __goscriptShadow55, null]
				break
			}
			case protoreflect.Uint32Kind:
			{
				if (wtyp != 0) {
					return [(val).clone(), 0, errUnknown]
				}
				let [v, __goscriptShadow56] = protowire.ConsumeVarint(b)
				if (__goscriptShadow56 < 0) {
					return [(val).clone(), 0, errDecode]
				}
				return [protoreflect.ValueOfUint32($.uint(v, 32)), __goscriptShadow56, null]
				break
			}
			case protoreflect.Int64Kind:
			{
				if (wtyp != 0) {
					return [(val).clone(), 0, errUnknown]
				}
				let [v, __goscriptShadow57] = protowire.ConsumeVarint(b)
				if (__goscriptShadow57 < 0) {
					return [(val).clone(), 0, errDecode]
				}
				return [protoreflect.ValueOfInt64($.int64(v)), __goscriptShadow57, null]
				break
			}
			case protoreflect.Sint64Kind:
			{
				if (wtyp != 0) {
					return [(val).clone(), 0, errUnknown]
				}
				let [v, __goscriptShadow58] = protowire.ConsumeVarint(b)
				if (__goscriptShadow58 < 0) {
					return [(val).clone(), 0, errDecode]
				}
				return [protoreflect.ValueOfInt64(protowire.DecodeZigZag(v)), __goscriptShadow58, null]
				break
			}
			case protoreflect.Uint64Kind:
			{
				if (wtyp != 0) {
					return [(val).clone(), 0, errUnknown]
				}
				let [v, __goscriptShadow59] = protowire.ConsumeVarint(b)
				if (__goscriptShadow59 < 0) {
					return [(val).clone(), 0, errDecode]
				}
				return [protoreflect.ValueOfUint64(v), __goscriptShadow59, null]
				break
			}
			case protoreflect.Sfixed32Kind:
			{
				if (wtyp != 5) {
					return [(val).clone(), 0, errUnknown]
				}
				let [v, __goscriptShadow60] = protowire.ConsumeFixed32(b)
				if (__goscriptShadow60 < 0) {
					return [(val).clone(), 0, errDecode]
				}
				return [protoreflect.ValueOfInt32($.int(v, 32)), __goscriptShadow60, null]
				break
			}
			case protoreflect.Fixed32Kind:
			{
				if (wtyp != 5) {
					return [(val).clone(), 0, errUnknown]
				}
				let [v, __goscriptShadow61] = protowire.ConsumeFixed32(b)
				if (__goscriptShadow61 < 0) {
					return [(val).clone(), 0, errDecode]
				}
				return [protoreflect.ValueOfUint32($.uint(v, 32)), __goscriptShadow61, null]
				break
			}
			case protoreflect.FloatKind:
			{
				if (wtyp != 5) {
					return [(val).clone(), 0, errUnknown]
				}
				let [v, __goscriptShadow62] = protowire.ConsumeFixed32(b)
				if (__goscriptShadow62 < 0) {
					return [(val).clone(), 0, errDecode]
				}
				return [protoreflect.ValueOfFloat32(math.Float32frombits($.uint(v, 32))), __goscriptShadow62, null]
				break
			}
			case protoreflect.Sfixed64Kind:
			{
				if (wtyp != 1) {
					return [(val).clone(), 0, errUnknown]
				}
				let [v, __goscriptShadow63] = protowire.ConsumeFixed64(b)
				if (__goscriptShadow63 < 0) {
					return [(val).clone(), 0, errDecode]
				}
				return [protoreflect.ValueOfInt64($.int64(v)), __goscriptShadow63, null]
				break
			}
			case protoreflect.Fixed64Kind:
			{
				if (wtyp != 1) {
					return [(val).clone(), 0, errUnknown]
				}
				let [v, __goscriptShadow64] = protowire.ConsumeFixed64(b)
				if (__goscriptShadow64 < 0) {
					return [(val).clone(), 0, errDecode]
				}
				return [protoreflect.ValueOfUint64(v), __goscriptShadow64, null]
				break
			}
			case protoreflect.DoubleKind:
			{
				if (wtyp != 1) {
					return [(val).clone(), 0, errUnknown]
				}
				let [v, __goscriptShadow65] = protowire.ConsumeFixed64(b)
				if (__goscriptShadow65 < 0) {
					return [(val).clone(), 0, errDecode]
				}
				return [protoreflect.ValueOfFloat64(math.Float64frombits(v)), __goscriptShadow65, null]
				break
			}
			case protoreflect.StringKind:
			{
				if (wtyp != 2) {
					return [(val).clone(), 0, errUnknown]
				}
				let __goscriptTuple25: any = protowire.ConsumeBytes(b)
				let v: $.Slice<number> = __goscriptTuple25[0]
				let __goscriptShadow66 = __goscriptTuple25[1]
				if (__goscriptShadow66 < 0) {
					return [(val).clone(), 0, errDecode]
				}
				if (await strs.EnforceUTF8(fd) && !utf8.Valid(v)) {
					return [new protoreflect.Value(undefined, true), 0, await errors.InvalidUTF8((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))]
				}
				return [protoreflect.ValueOfString($.bytesToString(v)), __goscriptShadow66, null]
				break
			}
			case protoreflect.BytesKind:
			{
				if (wtyp != 2) {
					return [(val).clone(), 0, errUnknown]
				}
				let __goscriptTuple26: any = protowire.ConsumeBytes(b)
				let v: $.Slice<number> = __goscriptTuple26[0]
				let __goscriptShadow67 = __goscriptTuple26[1]
				if (__goscriptShadow67 < 0) {
					return [(val).clone(), 0, errDecode]
				}
				return [protoreflect.ValueOfBytes($.appendSlice($.goSlice(__goscript_decode_gen.emptyBuf, undefined, undefined), v, $.byteSliceHint)), __goscriptShadow67, null]
				break
			}
			case protoreflect.MessageKind:
			{
				if (wtyp != 2) {
					return [(val).clone(), 0, errUnknown]
				}
				let __goscriptTuple27: any = protowire.ConsumeBytes(b)
				let v: $.Slice<number> = __goscriptTuple27[0]
				let __goscriptShadow68 = __goscriptTuple27[1]
				if (__goscriptShadow68 < 0) {
					return [(val).clone(), 0, errDecode]
				}
				return [protoreflect.ValueOfBytes(v), __goscriptShadow68, null]
				break
			}
			case protoreflect.GroupKind:
			{
				if (wtyp != 3) {
					return [(val).clone(), 0, errUnknown]
				}
				let __goscriptTuple28: any = protowire.ConsumeGroup((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Number(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), b)
				let v: $.Slice<number> = __goscriptTuple28[0]
				let __goscriptShadow69 = __goscriptTuple28[1]
				if (__goscriptShadow69 < 0) {
					return [(val).clone(), 0, errDecode]
				}
				return [protoreflect.ValueOfBytes(v), __goscriptShadow69, null]
				break
			}
			default:
			{
				return [(val).clone(), 0, errUnknown]
				break
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async unmarshalSingular(b: $.Slice<number>, wtyp: protowire.Type, m: protoreflect.Message | null, fd: protoreflect.FieldDescriptor | null): globalThis.Promise<[number, $.GoError]> {
		const o = this;
		let n: number = 0
		let err: $.GoError = null! as $.GoError
		let __goscriptTuple29: any = await o.unmarshalScalar(b, wtyp, fd)
		let v = __goscriptTuple29[0]
		n = __goscriptTuple29[1]
		err = __goscriptTuple29[2]
		if (err != null) {
			return [0, err]
		}
		switch ((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
			case protoreflect.GroupKind:
			case protoreflect.MessageKind:
			{
				let m2 = await $.markAsStructValue($.cloneStructValue(((__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(m)).Mutable(fd), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value))).Message()
				{
					let __goscriptShadow70 = await o.unmarshalMessage(await v.Bytes(), m2)
					if (__goscriptShadow70 != null) {
						return [n, __goscriptShadow70]
					}
				}
				break
			}
			default:
			{
				void (__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(m)).Set(fd, (v).clone()), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				break
			}
		}
		return [n, null]
	}

	static __typeInfo = $.registerStructType(
		"proto.UnmarshalOptions",
		() => new UnmarshalOptions(),
		() => [$.methodSignature("Unmarshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["m", "protoreflect.ProtoMessage"]], ["error"]), $.methodSignature("UnmarshalState", [["in", { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("NoUnkeyedLiterals", "pragma.NoUnkeyedLiterals", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Message", "protoreflect.Message", [1], 0, true), /* @__PURE__ */ $.structField("Buf", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [2], 16, true), /* @__PURE__ */ $.structField("Flags", /* @__PURE__ */ $.basicType("uint8"), [3], 40, true), /* @__PURE__ */ $.structField("Resolver", { kind: $.TypeKind.Interface, methods: [$.methodSignature("FindExtensionByName", [["field", /* @__PURE__ */ $.basicType("string", "protoreflect.FullName")]], ["protoreflect.ExtensionType", "error"]), $.methodSignature("FindExtensionByNumber", [["message", /* @__PURE__ */ $.basicType("string", "protoreflect.FullName")], ["field", /* @__PURE__ */ $.basicType("int32", "protowire.Number")]], ["protoreflect.ExtensionType", "error"])] }, [4], 48, true), /* @__PURE__ */ $.structField("Depth", /* @__PURE__ */ $.basicType("int"), [5], 64, true)] }]], [{ kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("NoUnkeyedLiterals", "pragma.NoUnkeyedLiterals", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Flags", /* @__PURE__ */ $.basicType("uint8"), [1], 0, true)] }, "error"]), $.methodSignature("unmarshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["m", "protoreflect.Message"]], [["out", { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("NoUnkeyedLiterals", "pragma.NoUnkeyedLiterals", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Flags", /* @__PURE__ */ $.basicType("uint8"), [1], 0, true)] }], ["err", "error"]]), $.methodSignature("unmarshalList", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["wtyp", /* @__PURE__ */ $.basicType("int8", "protowire.Type")], ["list", "protoreflect.List"], ["fd", "protoreflect.FieldDescriptor"]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]]), $.methodSignature("unmarshalMap", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["wtyp", /* @__PURE__ */ $.basicType("int8", "protowire.Type")], ["mapv", "protoreflect.Map"], ["fd", "protoreflect.FieldDescriptor"]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]]), $.methodSignature("unmarshalMessage", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["m", "protoreflect.Message"]], ["error"]), $.methodSignature("unmarshalMessageSet", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["m", "protoreflect.Message"]], ["error"]), $.methodSignature("unmarshalMessageSetField", [["m", "protoreflect.Message"], ["num", /* @__PURE__ */ $.basicType("int32", "protowire.Number")], ["v", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"]), $.methodSignature("unmarshalMessageSlow", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["m", "protoreflect.Message"]], ["error"]), $.methodSignature("unmarshalScalar", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["wtyp", /* @__PURE__ */ $.basicType("int8", "protowire.Type")], ["fd", "protoreflect.FieldDescriptor"]], [["val", "protoreflect.Value"], ["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]]), $.methodSignature("unmarshalSingular", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["wtyp", /* @__PURE__ */ $.basicType("int8", "protowire.Type")], ["m", "protoreflect.Message"], ["fd", "protoreflect.FieldDescriptor"]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]])],
		UnmarshalOptions,
		() => [/* @__PURE__ */ $.structField("NoUnkeyedLiterals", "pragma.NoUnkeyedLiterals", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Merge", /* @__PURE__ */ $.basicType("bool"), [1], 0, true), /* @__PURE__ */ $.structField("AllowPartial", /* @__PURE__ */ $.basicType("bool"), [2], 1, true), /* @__PURE__ */ $.structField("DiscardUnknown", /* @__PURE__ */ $.basicType("bool"), [3], 2, true), /* @__PURE__ */ $.structField("Resolver", { kind: $.TypeKind.Interface, methods: [$.methodSignature("FindExtensionByName", [["field", /* @__PURE__ */ $.basicType("string", "protoreflect.FullName")]], ["protoreflect.ExtensionType", "error"]), $.methodSignature("FindExtensionByNumber", [["message", /* @__PURE__ */ $.basicType("string", "protoreflect.FullName")], ["field", /* @__PURE__ */ $.basicType("int32", "protowire.Number")]], ["protoreflect.ExtensionType", "error"])] }, [4], 8, true), /* @__PURE__ */ $.structField("RecursionLimit", /* @__PURE__ */ $.basicType("int"), [5], 24, true)]
	)
}

export async function Unmarshal(b: $.Slice<number>, m: __goscript_proto.Message | null): globalThis.Promise<$.GoError> {
	let [, err] = await $.markAsStructValue($.cloneStructValue(new UnmarshalOptions({RecursionLimit: 10000}, true))).unmarshal(b, (__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoreflect.ProtoMessage, null>) : $.pointerValue<Exclude<protoreflect.ProtoMessage, null>>(m)).ProtoReflect(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
	return err
}

export let errUnknown: $.GoError = await errors.New("BUG: internal error (unknown)", null)

export function __goscript_set_errUnknown(__goscriptValue: $.GoError): void {
	errUnknown = __goscriptValue
}

export let errDecode: $.GoError = await errors.New("cannot parse invalid wire-format data", null)

export function __goscript_set_errDecode(__goscriptValue: $.GoError): void {
	errDecode = __goscriptValue
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({Append: (receiver: any, ...args: any[]) => (protoreflect.FullName_Append as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), IsValid: (receiver: any, ...args: any[]) => (protoreflect.FullName_IsValid as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Name: (receiver: any, ...args: any[]) => (protoreflect.FullName_Name as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Parent: (receiver: any, ...args: any[]) => (protoreflect.FullName_Parent as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.basicType("string", "protoreflect.FullName"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("Append", [["s", /* @__PURE__ */ $.basicType("string", "protoreflect.Name")]], [/* @__PURE__ */ $.basicType("string", "protoreflect.FullName")]), $.methodSignature("IsValid", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Name", [], [/* @__PURE__ */ $.basicType("string", "protoreflect.Name")]), $.methodSignature("Parent", [], [/* @__PURE__ */ $.basicType("string", "protoreflect.FullName")])])
}

var __goscriptStatic3$value: any
function __goscriptStatic3(): any {
	return __goscriptStatic3$value ??= ({IsValid: (receiver: any, ...args: any[]) => (protowire.Number_IsValid as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic4$value: any
function __goscriptStatic4(): any {
	return __goscriptStatic4$value ??= (/* @__PURE__ */ $.basicType("int32", "protowire.Number"))
}

var __goscriptStatic5$value: any
function __goscriptStatic5(): any {
	return __goscriptStatic5$value ??= ([$.methodSignature("IsValid", [], [/* @__PURE__ */ $.basicType("bool")])])
}

var __goscriptAwait: any
