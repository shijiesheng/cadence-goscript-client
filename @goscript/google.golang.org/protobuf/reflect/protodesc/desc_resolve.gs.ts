// Generated file based on desc_resolve.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as defval from "@goscript/google.golang.org/protobuf/internal/encoding/defval/index.js"

import * as errors from "@goscript/google.golang.org/protobuf/internal/errors/index.js"

import * as filedesc from "@goscript/google.golang.org/protobuf/internal/filedesc/index.js"

import * as protoreflect from "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"

import * as protoregistry from "@goscript/google.golang.org/protobuf/reflect/protoregistry/index.js"

import * as descriptorpb from "@goscript/google.golang.org/protobuf/types/descriptorpb/index.js"

import type * as protowire from "@goscript/google.golang.org/protobuf/encoding/protowire/index.js"

import type * as strs from "@goscript/google.golang.org/protobuf/internal/strs/index.js"

import * as __goscript_desc from "./desc.gs.ts"

import * as __goscript_desc_init from "./desc_init.gs.ts"
import "@goscript/google.golang.org/protobuf/internal/encoding/defval/index.js"
import "@goscript/google.golang.org/protobuf/internal/errors/index.js"
import "@goscript/google.golang.org/protobuf/internal/filedesc/index.js"
import "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"
import "@goscript/google.golang.org/protobuf/reflect/protoregistry/index.js"
import "@goscript/google.golang.org/protobuf/types/descriptorpb/index.js"
import "./desc.gs.ts"
import "./desc_init.gs.ts"

$.registerTypePackagePath("google.golang.org/protobuf/reflect/protodesc", ["protodesc.resolver", "protodesc.partialName"])

export type partialName = string

$.registerNamedValueType(
	"protodesc.partialName",
	{FullName: (receiver: any, ...args: any[]) => (partialName_FullName as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), IsFull: (receiver: any, ...args: any[]) => (partialName_IsFull as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), IsValid: (receiver: any, ...args: any[]) => (partialName_IsValid as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("FullName", [], [/* @__PURE__ */ $.basicType("string", "protoreflect.FullName")]), $.methodSignature("IsFull", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("IsValid", [], [/* @__PURE__ */ $.basicType("bool")])]
);

$.registerNamedValueType(
	"*protodesc.partialName",
	{FullName: (receiver: any, ...args: any[]) => (partialName_FullName as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), IsFull: (receiver: any, ...args: any[]) => (partialName_IsFull as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), IsValid: (receiver: any, ...args: any[]) => (partialName_IsValid as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("FullName", [], [/* @__PURE__ */ $.basicType("string", "protoreflect.FullName")]), $.methodSignature("IsFull", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("IsValid", [], [/* @__PURE__ */ $.basicType("bool")])]
);

export class resolver {
	public get local(): __goscript_desc_init.descsByName {
		return this._fields.local
	}

	public set local(value: __goscript_desc_init.descsByName) {
		this._fields.local = value
	}

	public get remote(): __goscript_desc.Resolver | null {
		return this._fields.remote
	}

	public set remote(value: __goscript_desc.Resolver | null) {
		this._fields.remote = value
	}

	public get imports(): __goscript_desc.importSet {
		return this._fields.imports
	}

	public set imports(value: __goscript_desc.importSet) {
		this._fields.imports = value
	}

	public get allowUnresolvable(): boolean {
		return this._fields.allowUnresolvable
	}

	public set allowUnresolvable(value: boolean) {
		this._fields.allowUnresolvable = value
	}

	public _fields: {
		local: __goscript_desc_init.descsByName
		remote: __goscript_desc.Resolver | null
		imports: __goscript_desc.importSet
		allowUnresolvable: boolean
	}

	constructor(init?: Partial<{local?: __goscript_desc_init.descsByName, remote?: __goscript_desc.Resolver | null, imports?: __goscript_desc.importSet, allowUnresolvable?: boolean}>, __goscriptValue?: boolean) {
		this._fields = {
			local: init?.local ?? (null! as __goscript_desc_init.descsByName),
			remote: init?.remote ?? (null! as __goscript_desc.Resolver | null),
			imports: init?.imports ?? (null! as __goscript_desc.importSet),
			allowUnresolvable: init?.allowUnresolvable ?? (false as boolean)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): resolver {
		return new resolver(this, true)
	}

	public __goscriptAssign(source: resolver): void {
		const target = this._fields
		const values = source._fields
		target.local = values.local
		target.remote = $.assignFieldValue(target.remote, values.remote, "protodesc.Resolver")
		target.imports = values.imports
		target.allowUnresolvable = values.allowUnresolvable
	}

	public async findDescriptor(scope: protoreflect.FullName, ref: partialName): globalThis.Promise<[protoreflect.Descriptor | null, $.GoError]> {
		const r: resolver | $.VarRef<resolver> | null = this;
		const r$: resolver = r == null ? $.pointerTarget<resolver>(r) : (r as any).__isVarRef === true ? (r as any).value : (r as any).__goValue === undefined ? (r as any) : $.pointerTarget<resolver>(r)
		if (!partialName_IsValid(ref)) {
			return [null, await errors.New("invalid name reference: %q", $.arrayToSlice<any>([$.namedValueInterfaceValue<any>(ref, "protodesc.partialName", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())]))]
		}
		if (partialName_IsFull(ref)) {
			let __goscriptAssign0_0: protoreflect.FullName = ""
			let __goscriptAssign0_1: partialName = $.sliceStringOrBytes(ref, 1, undefined)
			scope = __goscriptAssign0_0
			ref = __goscriptAssign0_1
		}
		let foundButNotImported: protoreflect.Descriptor | null = null! as protoreflect.Descriptor | null
		while (true) {
			// Derive the full name to search.
			let s = ref
			if (!$.stringEqual(scope, "")) {
				s = $.concatString(($.concatString(scope, ".")), s)
			}

			// Check the current file for the descriptor.
			{
				let [d, ok] = $.mapGet<protoreflect.FullName, protoreflect.Descriptor | null, protoreflect.Descriptor | null>((r$ as resolver).local, s, null)
				if (ok) {
					return [d, null]
				}
			}

			// Check the remote registry for the descriptor.
			let [d, err] = await $.pointerValue<Exclude<__goscript_desc.Resolver, null>>((r$ as resolver).remote).FindDescriptorByName(s)
			if (err == null) {
				// Only allow descriptors covered by one of the imports.
				if ($.mapGet<string, boolean, boolean>((r$ as resolver).imports, (__goscriptAwait = $.pointerValue<Exclude<protoreflect.FileDescriptor, null>>((__goscriptAwait = (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? (d as Exclude<protoreflect.Descriptor, null>) : $.pointerValue<Exclude<protoreflect.Descriptor, null>>(d)).ParentFile(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Path(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), false)[0]) {
					return [d, null]
				}
				foundButNotImported = d
			} else {
				if (!$.comparableEqual(err, protoregistry.NotFound)) {
					return [null, await errors.Wrap(err, "%q", $.arrayToSlice<any>([$.namedValueInterfaceValue<any>(s, "protoreflect.FullName", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic5())]))]
				}
			}

			// Continue on at a higher level of scoping.
			if ($.stringEqual(scope, "")) {
				{
					let __goscriptShadow0: protoreflect.Descriptor | null = foundButNotImported
					if (__goscriptShadow0 != null) {
						return [null, await errors.New("resolved %q, but %q is not imported", $.arrayToSlice<any>([$.namedValueInterfaceValue<any>((__goscriptAwait = (__goscriptShadow0 !== null && (__goscriptShadow0 as any).__isVarRef !== true && (__goscriptShadow0 as any).__goValue === undefined ? (__goscriptShadow0 as Exclude<protoreflect.Descriptor, null>) : $.pointerValue<Exclude<protoreflect.Descriptor, null>>(__goscriptShadow0)).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), "protoreflect.FullName", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic5()), (__goscriptAwait = $.pointerValue<Exclude<protoreflect.FileDescriptor, null>>((__goscriptAwait = (__goscriptShadow0 !== null && (__goscriptShadow0 as any).__isVarRef !== true && (__goscriptShadow0 as any).__goValue === undefined ? (__goscriptShadow0 as Exclude<protoreflect.Descriptor, null>) : $.pointerValue<Exclude<protoreflect.Descriptor, null>>(__goscriptShadow0)).ParentFile(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Path(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)]))]
					}
				}
				return [null, protoregistry.NotFound]
			}
			scope = protoreflect.FullName_Parent(scope)
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async findEnumDescriptor(scope: protoreflect.FullName, ref: partialName, isWeak: boolean): globalThis.Promise<[protoreflect.EnumDescriptor | null, $.GoError]> {
		const r: resolver | $.VarRef<resolver> | null = this;
		let [d, err] = await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as resolver).findDescriptor(scope, ref) : resolver.prototype.findDescriptor.call(r, scope, ref))
		if (($.comparableEqual(err, protoregistry.NotFound)) && ($.pointerValue<resolver>(r).allowUnresolvable || isWeak)) {
			return [$.namedValueInterfaceValue<protoreflect.EnumDescriptor | null>(partialName_FullName(ref), "filedesc.PlaceholderEnum", __goscriptStatic6(), __goscriptStatic7(), __goscriptStatic8()), null]
		} else {
			if ($.comparableEqual(err, protoregistry.NotFound)) {
				return [null, await errors.New("%q not found", $.arrayToSlice<any>([$.namedValueInterfaceValue<any>(partialName_FullName(ref), "protoreflect.FullName", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic5())]))]
			} else {
				if (err != null) {
					return [null, err]
				}
			}
		}
		let [ed, ok] = $.typeAssertTuple<protoreflect.EnumDescriptor | null>(d, "protoreflect.EnumDescriptor")
		if (!ok) {
			return [null, await errors.New("resolved %q, but it is not an enum", $.arrayToSlice<any>([$.namedValueInterfaceValue<any>((__goscriptAwait = (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? (d as Exclude<protoreflect.Descriptor, null>) : $.pointerValue<Exclude<protoreflect.Descriptor, null>>(d)).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), "protoreflect.FullName", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic5())]))]
		}
		return [ed, null]
	}

	public async findMessageDescriptor(scope: protoreflect.FullName, ref: partialName, isWeak: boolean): globalThis.Promise<[protoreflect.MessageDescriptor | null, $.GoError]> {
		const r: resolver | $.VarRef<resolver> | null = this;
		let [d, err] = await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as resolver).findDescriptor(scope, ref) : resolver.prototype.findDescriptor.call(r, scope, ref))
		if (($.comparableEqual(err, protoregistry.NotFound)) && ($.pointerValue<resolver>(r).allowUnresolvable || isWeak)) {
			return [$.namedValueInterfaceValue<protoreflect.MessageDescriptor | null>(partialName_FullName(ref), "filedesc.PlaceholderMessage", __goscriptStatic9(), __goscriptStatic10(), __goscriptStatic11()), null]
		} else {
			if ($.comparableEqual(err, protoregistry.NotFound)) {
				return [null, await errors.New("%q not found", $.arrayToSlice<any>([$.namedValueInterfaceValue<any>(partialName_FullName(ref), "protoreflect.FullName", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic5())]))]
			} else {
				if (err != null) {
					return [null, err]
				}
			}
		}
		let [md, ok] = $.typeAssertTuple<protoreflect.MessageDescriptor | null>(d, "protoreflect.MessageDescriptor")
		if (!ok) {
			return [null, await errors.New("resolved %q, but it is not an message", $.arrayToSlice<any>([$.namedValueInterfaceValue<any>((__goscriptAwait = (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? (d as Exclude<protoreflect.Descriptor, null>) : $.pointerValue<Exclude<protoreflect.Descriptor, null>>(d)).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), "protoreflect.FullName", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic5())]))]
		}
		return [md, null]
	}

	public async findTarget(k: protoreflect.Kind, scope: protoreflect.FullName, ref: partialName, isWeak: boolean): globalThis.Promise<[protoreflect.Kind, protoreflect.EnumDescriptor | null, protoreflect.MessageDescriptor | null, $.GoError]> {
		const r: resolver | $.VarRef<resolver> | null = this;
		switch (k) {
			case protoreflect.EnumKind:
			{
				let [ed, err] = await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as resolver).findEnumDescriptor(scope, ref, isWeak) : resolver.prototype.findEnumDescriptor.call(r, scope, ref, isWeak))
				if (err != null) {
					return [0, null, null, err]
				}
				return [k, ed, null, null]
				break
			}
			case protoreflect.MessageKind:
			case protoreflect.GroupKind:
			{
				let [md, err] = await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as resolver).findMessageDescriptor(scope, ref, isWeak) : resolver.prototype.findMessageDescriptor.call(r, scope, ref, isWeak))
				if (err != null) {
					return [0, null, null, err]
				}
				return [k, null, md, null]
				break
			}
			case 0:
			{
				let [d, err] = await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as resolver).findDescriptor(scope, ref) : resolver.prototype.findDescriptor.call(r, scope, ref))
				if (($.comparableEqual(err, protoregistry.NotFound)) && ($.pointerValue<resolver>(r).allowUnresolvable || isWeak)) {
					return [k, $.namedValueInterfaceValue<protoreflect.EnumDescriptor | null>(partialName_FullName(ref), "filedesc.PlaceholderEnum", __goscriptStatic6(), __goscriptStatic7(), __goscriptStatic8()), $.namedValueInterfaceValue<protoreflect.MessageDescriptor | null>(partialName_FullName(ref), "filedesc.PlaceholderMessage", __goscriptStatic9(), __goscriptStatic10(), __goscriptStatic11()), null]
				} else {
					if ($.comparableEqual(err, protoregistry.NotFound)) {
						return [0, null, null, await errors.New("%q not found", $.arrayToSlice<any>([$.namedValueInterfaceValue<any>(partialName_FullName(ref), "protoreflect.FullName", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic5())]))]
					} else {
						if (err != null) {
							return [0, null, null, err]
						}
					}
				}
				{
					const __goscriptTypeSwitchValue = d
					switch (true) {
						case $.typeAssert<protoreflect.EnumDescriptor | null>(__goscriptTypeSwitchValue, "protoreflect.EnumDescriptor").ok:
							{
								let d: protoreflect.EnumDescriptor | null = $.typeAssert<protoreflect.EnumDescriptor | null>(__goscriptTypeSwitchValue, "protoreflect.EnumDescriptor").value
								return [14, d, null, null]
							}
							break
						case $.typeAssert<protoreflect.MessageDescriptor | null>(__goscriptTypeSwitchValue, "protoreflect.MessageDescriptor").ok:
							{
								let d: protoreflect.MessageDescriptor | null = $.typeAssert<protoreflect.MessageDescriptor | null>(__goscriptTypeSwitchValue, "protoreflect.MessageDescriptor").value
								return [11, null, d, null]
							}
							break
						default:
							{
								let d: any = __goscriptTypeSwitchValue
								return [0, null, null, await errors.New("unknown kind", null)]
							}
							break
					}
				}
				break
			}
			default:
			{
				if (!$.stringEqual(ref, "")) {
					return [0, null, null, await errors.New("target name cannot be specified for %v", $.arrayToSlice<any>([$.namedValueInterfaceValue<any>(k, "protoreflect.Kind", __goscriptStatic12(), __goscriptStatic13(), __goscriptStatic14())]))]
				}
				if (!protoreflect.Kind_IsValid(k)) {
					return [0, null, null, await errors.New("invalid kind: %d", $.arrayToSlice<any>([$.namedValueInterfaceValue<any>(k, "protoreflect.Kind", __goscriptStatic12(), __goscriptStatic13(), __goscriptStatic14())]))]
				}
				return [k, null, null, null]
				break
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async resolveExtensionDependencies(xs: $.Slice<filedesc.Extension>, xds: $.Slice<descriptorpb.FieldDescriptorProto | $.VarRef<descriptorpb.FieldDescriptorProto> | null>): globalThis.Promise<$.GoError> {
		const r: resolver | $.VarRef<resolver> | null = this;
		let err: $.GoError = null! as $.GoError
		for (let __goscriptRangeTarget0 = xds, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __goscriptSliceWindow0 = $.sliceRange(xs), i = 0; i < __goscriptRangeWindow0.length; i++) {
			let xd = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + i] as descriptorpb.FieldDescriptorProto | $.VarRef<descriptorpb.FieldDescriptorProto> | null)
			let x: filedesc.Extension | $.VarRef<filedesc.Extension> | null = $.indexRef(xs!, i)
			let x$: filedesc.Extension = x == null ? $.pointerTarget<filedesc.Extension>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<filedesc.Extension>(x)
			{
				let __goscriptTuple0: any = await resolver.prototype.findMessageDescriptor.call(r, (__goscriptAwait = $.pointerValue<Exclude<protoreflect.Descriptor, null>>((x$ as filedesc.Extension).Base.Parent()).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), (xd !== null && (xd as any).__isVarRef !== true && (xd as any).__goValue === undefined ? ((xd as any) as descriptorpb.FieldDescriptorProto).GetExtendee() : descriptorpb.FieldDescriptorProto.prototype.GetExtendee.call(xd)), false);
				;(x$ as filedesc.Extension).L1.Extendee = __goscriptTuple0[0]
				err = __goscriptTuple0[1]
				if (err != null) {
					return errors.New("extension field %q cannot resolve extendee: %v", $.arrayToSlice<any>([$.namedValueInterfaceValue<any>((x$ as filedesc.Extension).Base.FullName(), "protoreflect.FullName", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic5()), (err as any)]))
				}
			}
			{
				let __goscriptTuple1: any = await resolver.prototype.findTarget.call(r, (x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as filedesc.Extension).Kind() : filedesc.Extension.prototype.Kind.call(x)), (__goscriptAwait = $.pointerValue<Exclude<protoreflect.Descriptor, null>>((x$ as filedesc.Extension).Base.Parent()).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), (xd !== null && (xd as any).__isVarRef !== true && (xd as any).__goValue === undefined ? ((xd as any) as descriptorpb.FieldDescriptorProto).GetTypeName() : descriptorpb.FieldDescriptorProto.prototype.GetTypeName.call(xd)), false);
				;(x$ as filedesc.Extension).L1.Kind = __goscriptTuple1[0]
				$.pointerValue<filedesc.ExtensionL2>((x$ as filedesc.Extension).L2).Enum = __goscriptTuple1[1]
				$.pointerValue<filedesc.ExtensionL2>((x$ as filedesc.Extension).L2).Message = __goscriptTuple1[2]
				err = __goscriptTuple1[3]
				if (err != null) {
					return errors.New("extension field %q cannot resolve type: %v", $.arrayToSlice<any>([$.namedValueInterfaceValue<any>((x$ as filedesc.Extension).Base.FullName(), "protoreflect.FullName", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic5()), (err as any)]))
				}
			}
			if ($.pointerValue<descriptorpb.FieldDescriptorProto>(xd).DefaultValue != null) {
				let [v, ev, __goscriptShadow1] = await unmarshalDefault((xd !== null && (xd as any).__isVarRef !== true && (xd as any).__goValue === undefined ? ((xd as any) as descriptorpb.FieldDescriptorProto).GetDefaultValue() : descriptorpb.FieldDescriptorProto.prototype.GetDefaultValue.call(xd)), $.interfaceValue<protoreflect.FieldDescriptor | null>(x, "*filedesc.Extension", /* @__PURE__ */ $.pointerType("filedesc.Extension")), $.pointerValue<resolver>(r).allowUnresolvable)
				if (__goscriptShadow1 != null) {
					return errors.New("extension field %q has invalid default: %v", $.arrayToSlice<any>([$.namedValueInterfaceValue<any>((x$ as filedesc.Extension).Base.FullName(), "protoreflect.FullName", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic5()), (__goscriptShadow1 as any)]))
				}
				$.assignStruct($.pointerValue<filedesc.ExtensionL2>((x$ as filedesc.Extension).L2).Default, await filedesc.DefaultValue(v, ev))
			}
		}
		return null
	}

	public async resolveMessageDependencies(ms: $.Slice<filedesc.Message>, mds: $.Slice<descriptorpb.DescriptorProto | $.VarRef<descriptorpb.DescriptorProto> | null>): globalThis.Promise<$.GoError> {
		const r: resolver | $.VarRef<resolver> | null = this;
		let err: $.GoError = null! as $.GoError
		for (let __goscriptRangeTarget2 = mds, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget2), __goscriptSliceWindow1 = $.sliceRange(ms), i = 0; i < __goscriptRangeWindow1.length; i++) {
			let md = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + i] as descriptorpb.DescriptorProto | $.VarRef<descriptorpb.DescriptorProto> | null)
			let m: filedesc.Message | $.VarRef<filedesc.Message> | null = $.indexRef(ms!, i)
			let m$: filedesc.Message = m == null ? $.pointerTarget<filedesc.Message>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<filedesc.Message>(m)
			for (let __goscriptRangeTarget1 = (md !== null && (md as any).__isVarRef !== true && (md as any).__goValue === undefined ? ((md as any) as descriptorpb.DescriptorProto).GetField() : descriptorpb.DescriptorProto.prototype.GetField.call(md)), __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget1), j = 0; j < __goscriptRangeWindow2.length; j++) {
				let fd = (__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + j] as descriptorpb.FieldDescriptorProto | $.VarRef<descriptorpb.FieldDescriptorProto> | null)
				let f: filedesc.Field | $.VarRef<filedesc.Field> | null = $.indexRef($.pointerValue<filedesc.MessageL2>((m$ as filedesc.Message).L2).Fields.List!, j)
				let f$: filedesc.Field = f == null ? $.pointerTarget<filedesc.Field>(f) : (f as any).__isVarRef === true ? (f as any).value : (f as any).__goValue === undefined ? (f as any) : $.pointerTarget<filedesc.Field>(f)
				if ((f$ as filedesc.Field).L1.Cardinality == 2) {
					$.pointerValue<filedesc.MessageL2>((m$ as filedesc.Message).L2).RequiredNumbers.List = $.appendOne($.pointerValue<filedesc.MessageL2>((m$ as filedesc.Message).L2).RequiredNumbers.List, $.int((f$ as filedesc.Field).L1.Number, 32))
				}
				if ($.pointerValue<descriptorpb.FieldDescriptorProto>(fd).OneofIndex != null) {
					let k = $.int((fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? ((fd as any) as descriptorpb.FieldDescriptorProto).GetOneofIndex() : descriptorpb.FieldDescriptorProto.prototype.GetOneofIndex.call(fd)))
					if (!((0 <= k) && (k < $.sliceLen((md !== null && (md as any).__isVarRef !== true && (md as any).__goValue === undefined ? ((md as any) as descriptorpb.DescriptorProto).GetOneofDecl() : descriptorpb.DescriptorProto.prototype.GetOneofDecl.call(md)))))) {
						return errors.New("message field %q has an invalid oneof index: %d", $.arrayToSlice<any>([$.namedValueInterfaceValue<any>((f$ as filedesc.Field).Base.FullName(), "protoreflect.FullName", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic5()), $.basicInterfaceValue(k, "int")]))
					}
					let o: filedesc.Oneof | $.VarRef<filedesc.Oneof> | null = $.indexRef($.pointerValue<filedesc.MessageL2>((m$ as filedesc.Message).L2).Oneofs.List!, k)
					let o$: filedesc.Oneof = o == null ? $.pointerTarget<filedesc.Oneof>(o) : (o as any).__isVarRef === true ? (o as any).value : (o as any).__goValue === undefined ? (o as any) : $.pointerTarget<filedesc.Oneof>(o);
					;(f$ as filedesc.Field).L1.ContainingOneof = $.interfaceValue<protoreflect.OneofDescriptor | null>(o, "*filedesc.Oneof", /* @__PURE__ */ $.pointerType("filedesc.Oneof"));
					;(o$ as filedesc.Oneof).L1.Fields.List = $.appendOne((o$ as filedesc.Oneof).L1.Fields.List, $.interfaceValue<protoreflect.FieldDescriptor | null>(f, "*filedesc.Field", /* @__PURE__ */ $.pointerType("filedesc.Field")), $.appendZeros.nil)
				}

				{
					let __goscriptTuple2: any = await resolver.prototype.findTarget.call(r, (f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as filedesc.Field).Kind() : filedesc.Field.prototype.Kind.call(f)), (__goscriptAwait = $.pointerValue<Exclude<protoreflect.Descriptor, null>>((f$ as filedesc.Field).Base.Parent()).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? ((fd as any) as descriptorpb.FieldDescriptorProto).GetTypeName() : descriptorpb.FieldDescriptorProto.prototype.GetTypeName.call(fd)), (f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as filedesc.Field).IsWeak() : filedesc.Field.prototype.IsWeak.call(f)));
					;(f$ as filedesc.Field).L1.Kind = __goscriptTuple2[0];
					;(f$ as filedesc.Field).L1.Enum = __goscriptTuple2[1];
					;(f$ as filedesc.Field).L1.Message = __goscriptTuple2[2]
					err = __goscriptTuple2[3]
					if (err != null) {
						return errors.New("message field %q cannot resolve type: %v", $.arrayToSlice<any>([$.namedValueInterfaceValue<any>((f$ as filedesc.Field).Base.FullName(), "protoreflect.FullName", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic5()), (err as any)]))
					}
				}
				if (((f$ as filedesc.Field).L1.Kind == 10) && (await (f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as filedesc.Field).IsMap() : filedesc.Field.prototype.IsMap.call(f)) || await (f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as filedesc.Field).IsMapEntry() : filedesc.Field.prototype.IsMapEntry.call(f)))) {
					// A map field might inherit delimited encoding from a file-wide default feature.
					// But maps never actually use delimited encoding. (At least for now...)
					;(f$ as filedesc.Field).L1.Kind = 11
				}
				if ($.pointerValue<descriptorpb.FieldDescriptorProto>(fd).DefaultValue != null) {
					let [v, ev, __goscriptShadow2] = await unmarshalDefault((fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? ((fd as any) as descriptorpb.FieldDescriptorProto).GetDefaultValue() : descriptorpb.FieldDescriptorProto.prototype.GetDefaultValue.call(fd)), $.interfaceValue<protoreflect.FieldDescriptor | null>(f, "*filedesc.Field", /* @__PURE__ */ $.pointerType("filedesc.Field")), $.pointerValue<resolver>(r).allowUnresolvable)
					if (__goscriptShadow2 != null) {
						return errors.New("message field %q has invalid default: %v", $.arrayToSlice<any>([$.namedValueInterfaceValue<any>((f$ as filedesc.Field).Base.FullName(), "protoreflect.FullName", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic5()), (__goscriptShadow2 as any)]))
					}
					$.assignStruct((f$ as filedesc.Field).L1.Default, await filedesc.DefaultValue(v, ev))
				}
			}

			{
				let __goscriptShadow3 = await resolver.prototype.resolveMessageDependencies.call(r, (m$ as filedesc.Message).L1.Messages.List, (md !== null && (md as any).__isVarRef !== true && (md as any).__goValue === undefined ? ((md as any) as descriptorpb.DescriptorProto).GetNestedType() : descriptorpb.DescriptorProto.prototype.GetNestedType.call(md)))
				if (__goscriptShadow3 != null) {
					return __goscriptShadow3
				}
			}
			{
				let __goscriptShadow4 = await resolver.prototype.resolveExtensionDependencies.call(r, (m$ as filedesc.Message).L1.Extensions.List, (md !== null && (md as any).__isVarRef !== true && (md as any).__goValue === undefined ? ((md as any) as descriptorpb.DescriptorProto).GetExtension() : descriptorpb.DescriptorProto.prototype.GetExtension.call(md)))
				if (__goscriptShadow4 != null) {
					return __goscriptShadow4
				}
			}
		}
		return null
	}

	public async resolveServiceDependencies(ss: $.Slice<filedesc.Service>, sds: $.Slice<descriptorpb.ServiceDescriptorProto | $.VarRef<descriptorpb.ServiceDescriptorProto> | null>): globalThis.Promise<$.GoError> {
		const r: resolver | $.VarRef<resolver> | null = this;
		let err: $.GoError = null! as $.GoError
		for (let __goscriptRangeTarget4 = sds, __goscriptRangeWindow3 = $.sliceRange(__goscriptRangeTarget4), __goscriptSliceWindow2 = $.sliceRange(ss), i = 0; i < __goscriptRangeWindow3.length; i++) {
			let sd = (__goscriptRangeWindow3.backing[__goscriptRangeWindow3.offset + i] as descriptorpb.ServiceDescriptorProto | $.VarRef<descriptorpb.ServiceDescriptorProto> | null)
			let s: filedesc.Service | $.VarRef<filedesc.Service> | null = $.indexRef(ss!, i)
			for (let __goscriptRangeTarget3 = (sd !== null && (sd as any).__isVarRef !== true && (sd as any).__goValue === undefined ? ((sd as any) as descriptorpb.ServiceDescriptorProto).GetMethod() : descriptorpb.ServiceDescriptorProto.prototype.GetMethod.call(sd)), __goscriptRangeWindow4 = $.sliceRange(__goscriptRangeTarget3), j = 0; j < __goscriptRangeWindow4.length; j++) {
				let md = (__goscriptRangeWindow4.backing[__goscriptRangeWindow4.offset + j] as descriptorpb.MethodDescriptorProto | $.VarRef<descriptorpb.MethodDescriptorProto> | null)
				let m: filedesc.Method | $.VarRef<filedesc.Method> | null = $.indexRef($.pointerValue<filedesc.ServiceL2>($.pointerValue<filedesc.Service>(s).L2).Methods.List!, j)
				let m$: filedesc.Method = m == null ? $.pointerTarget<filedesc.Method>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<filedesc.Method>(m)
				let __goscriptTuple3: any = await resolver.prototype.findMessageDescriptor.call(r, (__goscriptAwait = $.pointerValue<Exclude<protoreflect.Descriptor, null>>((m$ as filedesc.Method).Base.Parent()).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), (md !== null && (md as any).__isVarRef !== true && (md as any).__goValue === undefined ? ((md as any) as descriptorpb.MethodDescriptorProto).GetInputType() : descriptorpb.MethodDescriptorProto.prototype.GetInputType.call(md)), false);
				;(m$ as filedesc.Method).L1.Input = __goscriptTuple3[0]
				err = __goscriptTuple3[1]
				if (err != null) {
					return errors.New("service method %q cannot resolve input: %v", $.arrayToSlice<any>([$.namedValueInterfaceValue<any>((m$ as filedesc.Method).Base.FullName(), "protoreflect.FullName", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic5()), (err as any)]))
				}
				let __goscriptTuple4: any = await resolver.prototype.findMessageDescriptor.call(r, $.pointerValue<filedesc.Service>(s).Base.FullName(), (md !== null && (md as any).__isVarRef !== true && (md as any).__goValue === undefined ? ((md as any) as descriptorpb.MethodDescriptorProto).GetOutputType() : descriptorpb.MethodDescriptorProto.prototype.GetOutputType.call(md)), false);
				;(m$ as filedesc.Method).L1.Output = __goscriptTuple4[0]
				err = __goscriptTuple4[1]
				if (err != null) {
					return errors.New("service method %q cannot resolve output: %v", $.arrayToSlice<any>([$.namedValueInterfaceValue<any>((m$ as filedesc.Method).Base.FullName(), "protoreflect.FullName", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic5()), (err as any)]))
				}
			}
		}
		return null
	}

	static __typeInfo = $.registerStructType(
		"protodesc.resolver",
		() => new resolver(),
		() => [$.methodSignature("findDescriptor", [["scope", /* @__PURE__ */ $.basicType("string", "protoreflect.FullName")], ["ref", /* @__PURE__ */ $.basicType("string", "protodesc.partialName")]], ["protoreflect.Descriptor", "error"], true), $.methodSignature("findEnumDescriptor", [["scope", /* @__PURE__ */ $.basicType("string", "protoreflect.FullName")], ["ref", /* @__PURE__ */ $.basicType("string", "protodesc.partialName")], ["isWeak", /* @__PURE__ */ $.basicType("bool")]], ["protoreflect.EnumDescriptor", "error"], true), $.methodSignature("findMessageDescriptor", [["scope", /* @__PURE__ */ $.basicType("string", "protoreflect.FullName")], ["ref", /* @__PURE__ */ $.basicType("string", "protodesc.partialName")], ["isWeak", /* @__PURE__ */ $.basicType("bool")]], ["protoreflect.MessageDescriptor", "error"], true), $.methodSignature("findTarget", [["k", /* @__PURE__ */ $.basicType("int8", "protoreflect.Kind")], ["scope", /* @__PURE__ */ $.basicType("string", "protoreflect.FullName")], ["ref", /* @__PURE__ */ $.basicType("string", "protodesc.partialName")], ["isWeak", /* @__PURE__ */ $.basicType("bool")]], [/* @__PURE__ */ $.basicType("int8", "protoreflect.Kind"), "protoreflect.EnumDescriptor", "protoreflect.MessageDescriptor", "error"], true), $.methodSignature("resolveExtensionDependencies", [["xs", /* @__PURE__ */ $.sliceType("filedesc.Extension")], ["xds", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("descriptorpb.FieldDescriptorProto"))]], [["err", "error"]], true), $.methodSignature("resolveMessageDependencies", [["ms", /* @__PURE__ */ $.sliceType("filedesc.Message")], ["mds", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("descriptorpb.DescriptorProto"))]], [["err", "error"]], true), $.methodSignature("resolveServiceDependencies", [["ss", /* @__PURE__ */ $.sliceType("filedesc.Service")], ["sds", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("descriptorpb.ServiceDescriptorProto"))]], [["err", "error"]], true)],
		resolver,
		() => [/* @__PURE__ */ $.structField("local", "protodesc.descsByName", [0], 0, false, { pkgPath: "google.golang.org/protobuf/reflect/protodesc" }), /* @__PURE__ */ $.structField("remote", "protodesc.Resolver", [1], 8, false, { pkgPath: "google.golang.org/protobuf/reflect/protodesc" }), /* @__PURE__ */ $.structField("imports", "protodesc.importSet", [2], 24, false, { pkgPath: "google.golang.org/protobuf/reflect/protodesc" }), /* @__PURE__ */ $.structField("allowUnresolvable", /* @__PURE__ */ $.basicType("bool"), [3], 32, false, { pkgPath: "google.golang.org/protobuf/reflect/protodesc" })]
	)
}

export const unknownPrefix: string = "*."

export function partialName_IsFull(s: partialName): boolean {
	return ($.stringLen(s) > 0) && ($.indexString(s, 0) == 46)
}

export function partialName_IsValid(s: partialName): boolean {
	if (partialName_IsFull(s)) {
		return protoreflect.FullName_IsValid($.sliceStringOrBytes(s, 1, undefined))
	}
	return protoreflect.FullName_IsValid(s)
}

export function partialName_FullName(s: partialName): protoreflect.FullName {
	if (partialName_IsFull(s)) {
		return $.sliceStringOrBytes(s, 1, undefined)
	}
	return ($.concatString("*.", s))
}

export async function unmarshalDefault(s: string, fd: protoreflect.FieldDescriptor | null, allowUnresolvable: boolean): globalThis.Promise<[protoreflect.Value, protoreflect.EnumValueDescriptor | null, $.GoError]> {
	let evs: protoreflect.EnumValueDescriptors | null = null! as protoreflect.EnumValueDescriptors | null
	if ((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Enum(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != null) {
		evs = (__goscriptAwait = $.pointerValue<Exclude<protoreflect.EnumDescriptor, null>>((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Enum(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Values(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}
	let [v, ev, err] = await defval.Unmarshal(s, (__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), evs, 1)
	if ((((err != null) && allowUnresolvable) && (evs != null)) && protoreflect.Name_IsValid(s)) {
		v = $.assignStruct(v, protoreflect.ValueOfEnum(0))
		if ((__goscriptAwait = (evs !== null && (evs as any).__isVarRef !== true && (evs as any).__goValue === undefined ? (evs as Exclude<protoreflect.EnumValueDescriptors, null>) : $.pointerValue<Exclude<protoreflect.EnumValueDescriptors, null>>(evs)).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) > 0) {
			v = $.assignStruct(v, protoreflect.ValueOfEnum((__goscriptAwait = $.pointerValue<Exclude<protoreflect.EnumValueDescriptor, null>>((__goscriptAwait = (evs !== null && (evs as any).__isVarRef !== true && (evs as any).__goValue === undefined ? (evs as Exclude<protoreflect.EnumValueDescriptors, null>) : $.pointerValue<Exclude<protoreflect.EnumValueDescriptors, null>>(evs)).Get(0), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Number(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)))
		}
		ev = $.namedValueInterfaceValue<protoreflect.EnumValueDescriptor | null>(protoreflect.FullName_Append(protoreflect.FullName_Parent((__goscriptAwait = $.pointerValue<Exclude<protoreflect.EnumDescriptor, null>>((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Enum(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)), s), "filedesc.PlaceholderEnumValue", __goscriptStatic15(), __goscriptStatic16(), __goscriptStatic17())
	} else {
		if (err != null) {
			return [(v).clone(), ev, err]
		}
	}
	if (!(__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).HasPresence(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
		return [(v).clone(), ev, await errors.New("cannot be specified with implicit field presence", null)]
	}
	if ((((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 11) || ((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 10)) || ((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Cardinality(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 3)) {
		return [(v).clone(), ev, await errors.New("cannot be specified on composite types", null)]
	}
	return [(v).clone(), ev, null]
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({FullName: (receiver: any, ...args: any[]) => (partialName_FullName as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), IsFull: (receiver: any, ...args: any[]) => (partialName_IsFull as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), IsValid: (receiver: any, ...args: any[]) => (partialName_IsValid as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.basicType("string", "protodesc.partialName"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("FullName", [], [/* @__PURE__ */ $.basicType("string", "protoreflect.FullName")]), $.methodSignature("IsFull", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("IsValid", [], [/* @__PURE__ */ $.basicType("bool")])])
}

var __goscriptStatic3$value: any
function __goscriptStatic3(): any {
	return __goscriptStatic3$value ??= ({Append: (receiver: any, ...args: any[]) => (protoreflect.FullName_Append as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), IsValid: (receiver: any, ...args: any[]) => (protoreflect.FullName_IsValid as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Name: (receiver: any, ...args: any[]) => (protoreflect.FullName_Name as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Parent: (receiver: any, ...args: any[]) => (protoreflect.FullName_Parent as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic4$value: any
function __goscriptStatic4(): any {
	return __goscriptStatic4$value ??= (/* @__PURE__ */ $.basicType("string", "protoreflect.FullName"))
}

var __goscriptStatic5$value: any
function __goscriptStatic5(): any {
	return __goscriptStatic5$value ??= ([$.methodSignature("Append", [["s", /* @__PURE__ */ $.basicType("string", "protoreflect.Name")]], [/* @__PURE__ */ $.basicType("string", "protoreflect.FullName")]), $.methodSignature("IsValid", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Name", [], [/* @__PURE__ */ $.basicType("string", "protoreflect.Name")]), $.methodSignature("Parent", [], [/* @__PURE__ */ $.basicType("string", "protoreflect.FullName")])])
}

var __goscriptStatic6$value: any
function __goscriptStatic6(): any {
	return __goscriptStatic6$value ??= ({FullName: (receiver: any, ...args: any[]) => (filedesc.PlaceholderEnum_FullName as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Index: (receiver: any, ...args: any[]) => (filedesc.PlaceholderEnum_Index as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), IsClosed: (receiver: any, ...args: any[]) => (filedesc.PlaceholderEnum_IsClosed as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), IsPlaceholder: (receiver: any, ...args: any[]) => (filedesc.PlaceholderEnum_IsPlaceholder as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Name: (receiver: any, ...args: any[]) => (filedesc.PlaceholderEnum_Name as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Options: (receiver: any, ...args: any[]) => (filedesc.PlaceholderEnum_Options as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Parent: (receiver: any, ...args: any[]) => (filedesc.PlaceholderEnum_Parent as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), ParentFile: (receiver: any, ...args: any[]) => (filedesc.PlaceholderEnum_ParentFile as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), ProtoInternal: (receiver: any, ...args: any[]) => (filedesc.PlaceholderEnum_ProtoInternal as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), ProtoType: (receiver: any, ...args: any[]) => (filedesc.PlaceholderEnum_ProtoType as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), ReservedNames: (receiver: any, ...args: any[]) => (filedesc.PlaceholderEnum_ReservedNames as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), ReservedRanges: (receiver: any, ...args: any[]) => (filedesc.PlaceholderEnum_ReservedRanges as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Syntax: (receiver: any, ...args: any[]) => (filedesc.PlaceholderEnum_Syntax as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Values: (receiver: any, ...args: any[]) => (filedesc.PlaceholderEnum_Values as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic7$value: any
function __goscriptStatic7(): any {
	return __goscriptStatic7$value ??= (/* @__PURE__ */ $.basicType("string", "filedesc.PlaceholderEnum"))
}

var __goscriptStatic8$value: any
function __goscriptStatic8(): any {
	return __goscriptStatic8$value ??= ([$.methodSignature("FullName", [], [/* @__PURE__ */ $.basicType("string", "protoreflect.FullName")]), $.methodSignature("Index", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("IsClosed", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("IsPlaceholder", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Name", [], [/* @__PURE__ */ $.basicType("string", "protoreflect.Name")]), $.methodSignature("Options", [], ["protoreflect.ProtoMessage"]), $.methodSignature("Parent", [], ["protoreflect.Descriptor"]), $.methodSignature("ParentFile", [], ["protoreflect.FileDescriptor"]), $.methodSignature("ProtoInternal", ["pragma.DoNotImplement"]), $.methodSignature("ProtoType", ["protoreflect.EnumDescriptor"]), $.methodSignature("ReservedNames", [], ["protoreflect.Names"]), $.methodSignature("ReservedRanges", [], ["protoreflect.EnumRanges"]), $.methodSignature("Syntax", [], [/* @__PURE__ */ $.basicType("int8", "protoreflect.Syntax")]), $.methodSignature("Values", [], ["protoreflect.EnumValueDescriptors"])])
}

var __goscriptStatic9$value: any
function __goscriptStatic9(): any {
	return __goscriptStatic9$value ??= ({Enums: (receiver: any, ...args: any[]) => (filedesc.PlaceholderMessage_Enums as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), ExtensionRangeOptions: (receiver: any, ...args: any[]) => (filedesc.PlaceholderMessage_ExtensionRangeOptions as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), ExtensionRanges: (receiver: any, ...args: any[]) => (filedesc.PlaceholderMessage_ExtensionRanges as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Extensions: (receiver: any, ...args: any[]) => (filedesc.PlaceholderMessage_Extensions as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Fields: (receiver: any, ...args: any[]) => (filedesc.PlaceholderMessage_Fields as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), FullName: (receiver: any, ...args: any[]) => (filedesc.PlaceholderMessage_FullName as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Index: (receiver: any, ...args: any[]) => (filedesc.PlaceholderMessage_Index as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), IsMapEntry: (receiver: any, ...args: any[]) => (filedesc.PlaceholderMessage_IsMapEntry as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), IsPlaceholder: (receiver: any, ...args: any[]) => (filedesc.PlaceholderMessage_IsPlaceholder as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Messages: (receiver: any, ...args: any[]) => (filedesc.PlaceholderMessage_Messages as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Name: (receiver: any, ...args: any[]) => (filedesc.PlaceholderMessage_Name as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Oneofs: (receiver: any, ...args: any[]) => (filedesc.PlaceholderMessage_Oneofs as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Options: (receiver: any, ...args: any[]) => (filedesc.PlaceholderMessage_Options as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Parent: (receiver: any, ...args: any[]) => (filedesc.PlaceholderMessage_Parent as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), ParentFile: (receiver: any, ...args: any[]) => (filedesc.PlaceholderMessage_ParentFile as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), ProtoInternal: (receiver: any, ...args: any[]) => (filedesc.PlaceholderMessage_ProtoInternal as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), ProtoType: (receiver: any, ...args: any[]) => (filedesc.PlaceholderMessage_ProtoType as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), RequiredNumbers: (receiver: any, ...args: any[]) => (filedesc.PlaceholderMessage_RequiredNumbers as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), ReservedNames: (receiver: any, ...args: any[]) => (filedesc.PlaceholderMessage_ReservedNames as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), ReservedRanges: (receiver: any, ...args: any[]) => (filedesc.PlaceholderMessage_ReservedRanges as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Syntax: (receiver: any, ...args: any[]) => (filedesc.PlaceholderMessage_Syntax as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic10$value: any
function __goscriptStatic10(): any {
	return __goscriptStatic10$value ??= (/* @__PURE__ */ $.basicType("string", "filedesc.PlaceholderMessage"))
}

var __goscriptStatic11$value: any
function __goscriptStatic11(): any {
	return __goscriptStatic11$value ??= ([$.methodSignature("Enums", [], ["protoreflect.EnumDescriptors"]), $.methodSignature("ExtensionRangeOptions", [/* @__PURE__ */ $.basicType("int")], ["protoreflect.ProtoMessage"]), $.methodSignature("ExtensionRanges", [], ["protoreflect.FieldRanges"]), $.methodSignature("Extensions", [], ["protoreflect.ExtensionDescriptors"]), $.methodSignature("Fields", [], ["protoreflect.FieldDescriptors"]), $.methodSignature("FullName", [], [/* @__PURE__ */ $.basicType("string", "protoreflect.FullName")]), $.methodSignature("Index", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("IsMapEntry", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("IsPlaceholder", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Messages", [], ["protoreflect.MessageDescriptors"]), $.methodSignature("Name", [], [/* @__PURE__ */ $.basicType("string", "protoreflect.Name")]), $.methodSignature("Oneofs", [], ["protoreflect.OneofDescriptors"]), $.methodSignature("Options", [], ["protoreflect.ProtoMessage"]), $.methodSignature("Parent", [], ["protoreflect.Descriptor"]), $.methodSignature("ParentFile", [], ["protoreflect.FileDescriptor"]), $.methodSignature("ProtoInternal", ["pragma.DoNotImplement"]), $.methodSignature("ProtoType", ["protoreflect.MessageDescriptor"]), $.methodSignature("RequiredNumbers", [], ["protoreflect.FieldNumbers"]), $.methodSignature("ReservedNames", [], ["protoreflect.Names"]), $.methodSignature("ReservedRanges", [], ["protoreflect.FieldRanges"]), $.methodSignature("Syntax", [], [/* @__PURE__ */ $.basicType("int8", "protoreflect.Syntax")])])
}

var __goscriptStatic12$value: any
function __goscriptStatic12(): any {
	return __goscriptStatic12$value ??= ({GoString: (receiver: any, ...args: any[]) => (protoreflect.Kind_GoString as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), IsValid: (receiver: any, ...args: any[]) => (protoreflect.Kind_IsValid as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (protoreflect.Kind_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic13$value: any
function __goscriptStatic13(): any {
	return __goscriptStatic13$value ??= (/* @__PURE__ */ $.basicType("int8", "protoreflect.Kind"))
}

var __goscriptStatic14$value: any
function __goscriptStatic14(): any {
	return __goscriptStatic14$value ??= ([$.methodSignature("GoString", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("IsValid", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])])
}

var __goscriptStatic15$value: any
function __goscriptStatic15(): any {
	return __goscriptStatic15$value ??= ({FullName: (receiver: any, ...args: any[]) => (filedesc.PlaceholderEnumValue_FullName as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Index: (receiver: any, ...args: any[]) => (filedesc.PlaceholderEnumValue_Index as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), IsPlaceholder: (receiver: any, ...args: any[]) => (filedesc.PlaceholderEnumValue_IsPlaceholder as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Name: (receiver: any, ...args: any[]) => (filedesc.PlaceholderEnumValue_Name as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Number: (receiver: any, ...args: any[]) => (filedesc.PlaceholderEnumValue_Number as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Options: (receiver: any, ...args: any[]) => (filedesc.PlaceholderEnumValue_Options as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Parent: (receiver: any, ...args: any[]) => (filedesc.PlaceholderEnumValue_Parent as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), ParentFile: (receiver: any, ...args: any[]) => (filedesc.PlaceholderEnumValue_ParentFile as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), ProtoInternal: (receiver: any, ...args: any[]) => (filedesc.PlaceholderEnumValue_ProtoInternal as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), ProtoType: (receiver: any, ...args: any[]) => (filedesc.PlaceholderEnumValue_ProtoType as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Syntax: (receiver: any, ...args: any[]) => (filedesc.PlaceholderEnumValue_Syntax as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic16$value: any
function __goscriptStatic16(): any {
	return __goscriptStatic16$value ??= (/* @__PURE__ */ $.basicType("string", "filedesc.PlaceholderEnumValue"))
}

var __goscriptStatic17$value: any
function __goscriptStatic17(): any {
	return __goscriptStatic17$value ??= ([$.methodSignature("FullName", [], [/* @__PURE__ */ $.basicType("string", "protoreflect.FullName")]), $.methodSignature("Index", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("IsPlaceholder", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Name", [], [/* @__PURE__ */ $.basicType("string", "protoreflect.Name")]), $.methodSignature("Number", [], [/* @__PURE__ */ $.basicType("int32", "protoreflect.EnumNumber")]), $.methodSignature("Options", [], ["protoreflect.ProtoMessage"]), $.methodSignature("Parent", [], ["protoreflect.Descriptor"]), $.methodSignature("ParentFile", [], ["protoreflect.FileDescriptor"]), $.methodSignature("ProtoInternal", ["pragma.DoNotImplement"]), $.methodSignature("ProtoType", ["protoreflect.EnumValueDescriptor"]), $.methodSignature("Syntax", [], [/* @__PURE__ */ $.basicType("int8", "protoreflect.Syntax")])])
}

var __goscriptAwait: any
