// Generated file based on registry.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as os from "@goscript/os/index.js"

import * as strings from "@goscript/strings/index.js"

import * as sync from "@goscript/sync/index.js"

import * as messageset from "@goscript/google.golang.org/protobuf/internal/encoding/messageset/index.js"

import * as errors from "@goscript/google.golang.org/protobuf/internal/errors/index.js"

import * as flags from "@goscript/google.golang.org/protobuf/internal/flags/index.js"

import * as protoreflect from "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"

import * as protowire from "@goscript/google.golang.org/protobuf/encoding/protowire/index.js"

import type * as io from "@goscript/io/index.js"
import "@goscript/fmt/index.js"
import "@goscript/os/index.js"
import "@goscript/strings/index.js"
import "@goscript/sync/index.js"
import "@goscript/google.golang.org/protobuf/internal/encoding/messageset/index.js"
import "@goscript/google.golang.org/protobuf/internal/errors/index.js"
import "@goscript/google.golang.org/protobuf/internal/flags/index.js"
import "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"
import "@goscript/google.golang.org/protobuf/encoding/protowire/index.js"

$.registerTypePackagePath("google.golang.org/protobuf/reflect/protoregistry", ["protoregistry.Files", "protoregistry.packageDescriptor", "protoregistry.nameSuffix", "protoregistry.MessageTypeResolver", "protoregistry.ExtensionTypeResolver", "protoregistry.Types", "protoregistry.typesByName", "protoregistry.extensionsByMessage", "protoregistry.extensionsByNumber"])

export type nameSuffix = string

$.registerNamedValueType(
	"*protoregistry.nameSuffix",
	{Pop: (receiver: any, ...args: any[]) => (nameSuffix_Pop as any)(receiver, ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Pop", [], [["name", /* @__PURE__ */ $.basicType("string", "protoreflect.Name")]])]
);

export type MessageTypeResolver = {
	FindMessageByName(message: protoreflect.FullName): [protoreflect.MessageType | null, $.GoError] | globalThis.Promise<[protoreflect.MessageType | null, $.GoError]>
	FindMessageByURL(url: string): [protoreflect.MessageType | null, $.GoError] | globalThis.Promise<[protoreflect.MessageType | null, $.GoError]>
}

$.registerInterfaceType(
	"protoregistry.MessageTypeResolver",
	null,
	[$.methodSignature("FindMessageByName", [["message", /* @__PURE__ */ $.basicType("string", "protoreflect.FullName")]], ["protoreflect.MessageType", "error"]), $.methodSignature("FindMessageByURL", [["url", /* @__PURE__ */ $.basicType("string")]], ["protoreflect.MessageType", "error"])]
);

export type ExtensionTypeResolver = {
	FindExtensionByName(field: protoreflect.FullName): [protoreflect.ExtensionType | null, $.GoError] | globalThis.Promise<[protoreflect.ExtensionType | null, $.GoError]>
	FindExtensionByNumber(message: protoreflect.FullName, field: protoreflect.FieldNumber): [protoreflect.ExtensionType | null, $.GoError] | globalThis.Promise<[protoreflect.ExtensionType | null, $.GoError]>
}

$.registerInterfaceType(
	"protoregistry.ExtensionTypeResolver",
	null,
	[$.methodSignature("FindExtensionByName", [["field", /* @__PURE__ */ $.basicType("string", "protoreflect.FullName")]], ["protoreflect.ExtensionType", "error"]), $.methodSignature("FindExtensionByNumber", [["message", /* @__PURE__ */ $.basicType("string", "protoreflect.FullName")], ["field", /* @__PURE__ */ $.basicType("int32", "protowire.Number")]], ["protoreflect.ExtensionType", "error"])]
);

export type typesByName = globalThis.Map<protoreflect.FullName, any> | null

$.registerNamedType("protoregistry.typesByName", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string", "protoreflect.FullName"), { kind: $.TypeKind.Interface, methods: [] }));

export type extensionsByMessage = globalThis.Map<protoreflect.FullName, extensionsByNumber> | null

$.registerNamedType("protoregistry.extensionsByMessage", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string", "protoreflect.FullName"), "protoregistry.extensionsByNumber"));

export type extensionsByNumber = globalThis.Map<protoreflect.FieldNumber, protoreflect.ExtensionType | null> | null

$.registerNamedType("protoregistry.extensionsByNumber", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("int32", "protowire.Number"), "protoreflect.ExtensionType"));

export class Files {
	// The map of descsByName contains:
	// 	EnumDescriptor
	// 	EnumValueDescriptor
	// 	MessageDescriptor
	// 	ExtensionDescriptor
	// 	ServiceDescriptor
	// 	*packageDescriptor
	//
	// Note that files are stored as a slice, since a package may contain
	// multiple files. Only top-level declarations are registered.
	// Note that enum values are in the top-level since that are in the same
	// scope as the parent enum.
	public get descsByName(): globalThis.Map<protoreflect.FullName, any> | null {
		return this._fields.descsByName
	}

	public set descsByName(value: globalThis.Map<protoreflect.FullName, any> | null) {
		this._fields.descsByName = value
	}

	public get filesByPath(): globalThis.Map<string, $.Slice<protoreflect.FileDescriptor | null>> | null {
		return this._fields.filesByPath
	}

	public set filesByPath(value: globalThis.Map<string, $.Slice<protoreflect.FileDescriptor | null>> | null) {
		this._fields.filesByPath = value
	}

	public get numFiles(): number {
		return this._fields.numFiles
	}

	public set numFiles(value: number) {
		this._fields.numFiles = value
	}

	public _fields: {
		descsByName: globalThis.Map<protoreflect.FullName, any> | null
		filesByPath: globalThis.Map<string, $.Slice<protoreflect.FileDescriptor | null>> | null
		numFiles: number
	}

	constructor(init?: Partial<{descsByName?: globalThis.Map<protoreflect.FullName, any> | null, filesByPath?: globalThis.Map<string, $.Slice<protoreflect.FileDescriptor | null>> | null, numFiles?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			descsByName: init?.descsByName ?? (null! as globalThis.Map<protoreflect.FullName, any> | null),
			filesByPath: init?.filesByPath ?? (null! as globalThis.Map<string, $.Slice<protoreflect.FileDescriptor | null>> | null),
			numFiles: init?.numFiles ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Files {
		return new Files(this, true)
	}

	public __goscriptAssign(source: Files): void {
		const target = this._fields
		const values = source._fields
		target.descsByName = values.descsByName
		target.filesByPath = values.filesByPath
		target.numFiles = values.numFiles
	}

	public async FindDescriptorByName(name: protoreflect.FullName): globalThis.Promise<[protoreflect.Descriptor | null, $.GoError]> {
		const r: Files | $.VarRef<Files> | null = this;
		using __defer = new $.DisposableStack()
		if (r == null) {
			return [null, NotFound]
		}
		if ($.pointerEqual(r, GlobalFiles)) {
			await globalMutex.value.RLock()
			const __goscriptDeferCallee0 = $.functionValue(((__receiver) => () => __receiver.RUnlock())(globalMutex.value), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*RWMutex).RUnlock-fm")
			__defer.defer(() => { __goscriptDeferCallee0() })
		}
		let prefix = name
		let suffix = $.varRef("")
		while (!$.stringEqual(prefix, "")) {
			{
				let [d, ok] = $.mapGet<protoreflect.FullName, any, any>($.pointerValue<Files>(r).descsByName, prefix, null)
				if (ok) {
					{
						const __goscriptTypeSwitchValue = d
						switch (true) {
							case $.typeAssert<protoreflect.EnumDescriptor | null>(__goscriptTypeSwitchValue, "protoreflect.EnumDescriptor").ok:
								{
									let d: protoreflect.EnumDescriptor | null = $.typeAssert<protoreflect.EnumDescriptor | null>(__goscriptTypeSwitchValue, "protoreflect.EnumDescriptor").value
									if ($.stringEqual((__goscriptAwait = (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? (d as Exclude<protoreflect.EnumDescriptor, null>) : $.pointerValue<Exclude<protoreflect.EnumDescriptor, null>>(d)).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), name)) {
										return [(d as protoreflect.Descriptor | null), null]
									}
								}
								break
							case $.typeAssert<protoreflect.EnumValueDescriptor | null>(__goscriptTypeSwitchValue, "protoreflect.EnumValueDescriptor").ok:
								{
									let d: protoreflect.EnumValueDescriptor | null = $.typeAssert<protoreflect.EnumValueDescriptor | null>(__goscriptTypeSwitchValue, "protoreflect.EnumValueDescriptor").value
									if ($.stringEqual((__goscriptAwait = (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? (d as Exclude<protoreflect.EnumValueDescriptor, null>) : $.pointerValue<Exclude<protoreflect.EnumValueDescriptor, null>>(d)).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), name)) {
										return [(d as protoreflect.Descriptor | null), null]
									}
								}
								break
							case $.typeAssert<protoreflect.MessageDescriptor | null>(__goscriptTypeSwitchValue, "protoreflect.MessageDescriptor").ok:
								{
									let d: protoreflect.MessageDescriptor | null = $.typeAssert<protoreflect.MessageDescriptor | null>(__goscriptTypeSwitchValue, "protoreflect.MessageDescriptor").value
									if ($.stringEqual((__goscriptAwait = (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? (d as Exclude<protoreflect.MessageDescriptor, null>) : $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>(d)).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), name)) {
										return [(d as protoreflect.Descriptor | null), null]
									}
									let __goscriptShadow0 = d
									{
										let __goscriptShadow1 = await findDescriptorInMessage(__goscriptShadow0, suffix.value)
										if ((__goscriptShadow1 != null) && ($.stringEqual((__goscriptAwait = (__goscriptShadow1 !== null && (__goscriptShadow1 as any).__isVarRef !== true && (__goscriptShadow1 as any).__goValue === undefined ? (__goscriptShadow1 as Exclude<protoreflect.Descriptor, null>) : $.pointerValue<Exclude<protoreflect.Descriptor, null>>(__goscriptShadow1)).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), name))) {
											return [__goscriptShadow1, null]
										}
									}
								}
								break
							case $.typeAssert<protoreflect.FieldDescriptor | null>(__goscriptTypeSwitchValue, "protoreflect.FieldDescriptor").ok:
								{
									let d: protoreflect.FieldDescriptor | null = $.typeAssert<protoreflect.FieldDescriptor | null>(__goscriptTypeSwitchValue, "protoreflect.FieldDescriptor").value
									if ($.stringEqual((__goscriptAwait = (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? (d as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(d)).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), name)) {
										return [(d as protoreflect.Descriptor | null), null]
									}
								}
								break
							case $.typeAssert<protoreflect.ServiceDescriptor | null>(__goscriptTypeSwitchValue, "protoreflect.ServiceDescriptor").ok:
								{
									let d: protoreflect.ServiceDescriptor | null = $.typeAssert<protoreflect.ServiceDescriptor | null>(__goscriptTypeSwitchValue, "protoreflect.ServiceDescriptor").value
									if ($.stringEqual((__goscriptAwait = (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? (d as Exclude<protoreflect.ServiceDescriptor, null>) : $.pointerValue<Exclude<protoreflect.ServiceDescriptor, null>>(d)).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), name)) {
										return [(d as protoreflect.Descriptor | null), null]
									}
									let __goscriptShadow2 = d
									{
										let __goscriptShadow3 = (__goscriptAwait = $.pointerValue<Exclude<protoreflect.MethodDescriptors, null>>((__goscriptAwait = (__goscriptShadow2 !== null && (__goscriptShadow2 as any).__isVarRef !== true && (__goscriptShadow2 as any).__goValue === undefined ? (__goscriptShadow2 as Exclude<protoreflect.ServiceDescriptor, null>) : $.pointerValue<Exclude<protoreflect.ServiceDescriptor, null>>(__goscriptShadow2)).Methods(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).ByName(nameSuffix_Pop(suffix)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
										if ((__goscriptShadow3 != null) && ($.stringEqual((__goscriptAwait = (__goscriptShadow3 !== null && (__goscriptShadow3 as any).__isVarRef !== true && (__goscriptShadow3 as any).__goValue === undefined ? (__goscriptShadow3 as Exclude<protoreflect.MethodDescriptor, null>) : $.pointerValue<Exclude<protoreflect.MethodDescriptor, null>>(__goscriptShadow3)).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), name))) {
											return [(__goscriptShadow3 as protoreflect.Descriptor | null), null]
										}
									}
								}
								break
						}
					}
					return [null, NotFound]
				}
			}
			prefix = protoreflect.FullName_Parent(prefix)
			suffix.value = $.sliceStringOrBytes(name, $.stringLen(prefix) + 1, undefined)
		}
		return [null, NotFound]
	}

	public async FindFileByPath(path: string): globalThis.Promise<[protoreflect.FileDescriptor | null, $.GoError]> {
		const r: Files | $.VarRef<Files> | null = this;
		using __defer = new $.DisposableStack()
		if (r == null) {
			return [null, NotFound]
		}
		if ($.pointerEqual(r, GlobalFiles)) {
			await globalMutex.value.RLock()
			const __goscriptDeferCallee1 = $.functionValue(((__receiver) => () => __receiver.RUnlock())(globalMutex.value), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*RWMutex).RUnlock-fm")
			__defer.defer(() => { __goscriptDeferCallee1() })
		}
		let fds: $.Slice<protoreflect.FileDescriptor | null> = $.mapGet<string, $.Slice<protoreflect.FileDescriptor | null>, $.Slice<protoreflect.FileDescriptor | null>>($.pointerValue<Files>(r).filesByPath, path, null)[0]
		switch ($.sliceLen(fds)) {
			case 0:
			{
				return [null, NotFound]
				break
			}
			case 1:
			{
				return [$.arrayIndex(fds!, 0), null]
				break
			}
			default:
			{
				return [null, await errors.New("multiple files named %q", $.arrayToSlice<any>([path]))]
				break
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async NumFiles(): globalThis.Promise<number> {
		const r: Files | $.VarRef<Files> | null = this;
		using __defer = new $.DisposableStack()
		if (r == null) {
			return 0
		}
		if ($.pointerEqual(r, GlobalFiles)) {
			await globalMutex.value.RLock()
			const __goscriptDeferCallee2 = $.functionValue(((__receiver) => () => __receiver.RUnlock())(globalMutex.value), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*RWMutex).RUnlock-fm")
			__defer.defer(() => { __goscriptDeferCallee2() })
		}
		return $.pointerValue<Files>(r).numFiles
	}

	public async NumFilesByPackage(name: protoreflect.FullName): globalThis.Promise<number> {
		const r: Files | $.VarRef<Files> | null = this;
		using __defer = new $.DisposableStack()
		if (r == null) {
			return 0
		}
		if ($.pointerEqual(r, GlobalFiles)) {
			await globalMutex.value.RLock()
			const __goscriptDeferCallee3 = $.functionValue(((__receiver) => () => __receiver.RUnlock())(globalMutex.value), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*RWMutex).RUnlock-fm")
			__defer.defer(() => { __goscriptDeferCallee3() })
		}
		let __goscriptTuple0: any = $.typeAssertTuple<packageDescriptor | $.VarRef<packageDescriptor> | null>($.mapGet<protoreflect.FullName, any, any>($.pointerValue<Files>(r).descsByName, name, null)[0], /* @__PURE__ */ $.pointerType("protoregistry.packageDescriptor"))
		let p: packageDescriptor | $.VarRef<packageDescriptor> | null = __goscriptTuple0[0]
		let ok = __goscriptTuple0[1]
		if (!ok) {
			return 0
		}
		return $.sliceLen($.pointerValue<packageDescriptor>(p).files)
	}

	public async RangeFiles(f: ((_p0: protoreflect.FileDescriptor | null) => boolean | globalThis.Promise<boolean>) | null): globalThis.Promise<void> {
		const r: Files | $.VarRef<Files> | null = this;
		using __defer = new $.DisposableStack()
		if (r == null) {
			return
		}
		if ($.pointerEqual(r, GlobalFiles)) {
			await globalMutex.value.RLock()
			const __goscriptDeferCallee4 = $.functionValue(((__receiver) => () => __receiver.RUnlock())(globalMutex.value), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*RWMutex).RUnlock-fm")
			__defer.defer(() => { __goscriptDeferCallee4() })
		}
		for (const [__rangeKey, files] of $.pointerValue<Files>(r).filesByPath?.entries() ?? []) {
			for (let __goscriptRangeTarget0 = files, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
				let file = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as protoreflect.FileDescriptor | null)
				if (!(__goscriptAwait = f!(file), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
					return
				}
			}
		}
	}

	public async RangeFilesByPackage(name: protoreflect.FullName, f: ((_p0: protoreflect.FileDescriptor | null) => boolean | globalThis.Promise<boolean>) | null): globalThis.Promise<void> {
		const r: Files | $.VarRef<Files> | null = this;
		using __defer = new $.DisposableStack()
		if (r == null) {
			return
		}
		if ($.pointerEqual(r, GlobalFiles)) {
			await globalMutex.value.RLock()
			const __goscriptDeferCallee5 = $.functionValue(((__receiver) => () => __receiver.RUnlock())(globalMutex.value), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*RWMutex).RUnlock-fm")
			__defer.defer(() => { __goscriptDeferCallee5() })
		}
		let __goscriptTuple1: any = $.typeAssertTuple<packageDescriptor | $.VarRef<packageDescriptor> | null>($.mapGet<protoreflect.FullName, any, any>($.pointerValue<Files>(r).descsByName, name, null)[0], /* @__PURE__ */ $.pointerType("protoregistry.packageDescriptor"))
		let p: packageDescriptor | $.VarRef<packageDescriptor> | null = __goscriptTuple1[0]
		let ok = __goscriptTuple1[1]
		if (!ok) {
			return
		}
		for (let __goscriptRangeTarget1 = $.pointerValue<packageDescriptor>(p).files, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
			let file = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as protoreflect.FileDescriptor | null)
			if (!(__goscriptAwait = f!(file), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
				return
			}
		}
	}

	public async RegisterFile(file: protoreflect.FileDescriptor | null): globalThis.Promise<$.GoError> {
		let r: Files | $.VarRef<Files> | null = this;
		using __defer = new $.DisposableStack()
		const r$: Files = r == null ? $.pointerTarget<Files>(r) : (r as any).__isVarRef === true ? (r as any).value : (r as any).__goValue === undefined ? (r as any) : $.pointerTarget<Files>(r)
		if ($.pointerEqual(r, GlobalFiles)) {
			await globalMutex.value.Lock()
			const __goscriptDeferCallee6 = $.functionValue(((__receiver) => () => __receiver.Unlock())(globalMutex.value), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*RWMutex).Unlock-fm")
			__defer.defer(() => { __goscriptDeferCallee6() })
		}
		if ((r$ as Files).descsByName == null) {
			;(r$ as Files).descsByName = $.makeMap<protoreflect.FullName, any>([["", $.interfaceValue(new packageDescriptor(), "*protoregistry.packageDescriptor", /* @__PURE__ */ $.pointerType("protoregistry.packageDescriptor"))]]);
			;(r$ as Files).filesByPath = $.makeMap<string, $.Slice<protoreflect.FileDescriptor | null>>()
		}
		let path = (__goscriptAwait = (file !== null && (file as any).__isVarRef !== true && (file as any).__goValue === undefined ? (file as Exclude<protoreflect.FileDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FileDescriptor, null>>(file)).Path(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		{
			let prev: $.Slice<protoreflect.FileDescriptor | null> = $.mapGet<string, $.Slice<protoreflect.FileDescriptor | null>, $.Slice<protoreflect.FileDescriptor | null>>((r$ as Files).filesByPath, path, null)[0]
			if ($.sliceLen(prev) > 0) {
				await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as Files).checkGenProtoConflict(path) : Files.prototype.checkGenProtoConflict.call(r, path))
				let err = await errors.New("file %q is already registered", $.arrayToSlice<any>([(__goscriptAwait = (file !== null && (file as any).__isVarRef !== true && (file as any).__goValue === undefined ? (file as Exclude<protoreflect.FileDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FileDescriptor, null>>(file)).Path(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)]))
				err = await amendErrorWithCaller(err, ($.arrayIndex(prev!, 0) as any), (file as any))
				if (!(($.pointerEqual(r, GlobalFiles)) && (__goscriptAwait = ignoreConflict!((file as protoreflect.Descriptor | null), err), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))) {
					return err
				}
			}
		}

		for (let name = (__goscriptAwait = (file !== null && (file as any).__isVarRef !== true && (file as any).__goValue === undefined ? (file as Exclude<protoreflect.FileDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FileDescriptor, null>>(file)).Package(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); !$.stringEqual(name, ""); name = protoreflect.FullName_Parent(name)) {
			let prev = $.mapGet<protoreflect.FullName, any, any>((r$ as Files).descsByName, name, null)[0]
			{
				const __goscriptTypeSwitchValue = prev
				switch (true) {
					case __goscriptTypeSwitchValue == null || $.is(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("protoregistry.packageDescriptor")):
						{
						}
						break
					default:
						{
							let err = await errors.New("file %q has a package name conflict over %v", $.arrayToSlice<any>([(__goscriptAwait = (file !== null && (file as any).__isVarRef !== true && (file as any).__goValue === undefined ? (file as Exclude<protoreflect.FileDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FileDescriptor, null>>(file)).Path(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), $.namedValueInterfaceValue<any>(name, "protoreflect.FullName", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())]))
							err = await amendErrorWithCaller(err, prev, (file as any))
							if (($.pointerEqual(r, GlobalFiles)) && (__goscriptAwait = ignoreConflict!((file as protoreflect.Descriptor | null), err), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
								err = null
							}
							return err
						}
						break
				}
			}
		}
		let err: $.GoError = null! as $.GoError
		let hasConflict: boolean = false
		await rangeTopLevelDescriptors(file, $.functionValue(async (d: protoreflect.Descriptor | null): globalThis.Promise<void> => {
			{
				let prev = $.mapGet<protoreflect.FullName, any, any>((r$ as Files).descsByName, (__goscriptAwait = (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? (d as Exclude<protoreflect.Descriptor, null>) : $.pointerValue<Exclude<protoreflect.Descriptor, null>>(d)).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), null)[0]
				if (prev != null) {
					hasConflict = true
					err = await errors.New("file %q has a name conflict over %v", $.arrayToSlice<any>([(__goscriptAwait = (file !== null && (file as any).__isVarRef !== true && (file as any).__goValue === undefined ? (file as Exclude<protoreflect.FileDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FileDescriptor, null>>(file)).Path(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), $.namedValueInterfaceValue<any>((__goscriptAwait = (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? (d as Exclude<protoreflect.Descriptor, null>) : $.pointerValue<Exclude<protoreflect.Descriptor, null>>(d)).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), "protoreflect.FullName", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())]))
					err = await amendErrorWithCaller(err, prev, (file as any))
					if (($.pointerEqual(r, GlobalFiles)) && (__goscriptAwait = ignoreConflict!(d, err), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
						err = null
					}
				}
			}
		}, ({ kind: $.TypeKind.Function, params: ["protoreflect.Descriptor"], results: [] } as $.FunctionTypeInfo)))
		if (hasConflict) {
			return err
		}

		for (let name = (__goscriptAwait = (file !== null && (file as any).__isVarRef !== true && (file as any).__goValue === undefined ? (file as Exclude<protoreflect.FileDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FileDescriptor, null>>(file)).Package(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); !$.stringEqual(name, ""); name = protoreflect.FullName_Parent(name)) {
			if ($.mapGet<protoreflect.FullName, any, any>((r$ as Files).descsByName, name, null)[0] == null) {
				$.mapSet((r$ as Files).descsByName, name, $.interfaceValue(new packageDescriptor(), "*protoregistry.packageDescriptor", /* @__PURE__ */ $.pointerType("protoregistry.packageDescriptor")))
			}
		}
		let p: packageDescriptor | $.VarRef<packageDescriptor> | null = $.mustTypeAssert<packageDescriptor | $.VarRef<packageDescriptor> | null>($.mapGet<protoreflect.FullName, any, any>((r$ as Files).descsByName, (__goscriptAwait = (file !== null && (file as any).__isVarRef !== true && (file as any).__goValue === undefined ? (file as Exclude<protoreflect.FileDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FileDescriptor, null>>(file)).Package(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), null)[0], /* @__PURE__ */ $.pointerType("protoregistry.packageDescriptor"))
		let p$: packageDescriptor = p == null ? $.pointerTarget<packageDescriptor>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<packageDescriptor>(p);
		;(p$ as packageDescriptor).files = $.appendOne((p$ as packageDescriptor).files, file, $.appendZeros.nil)
		await rangeTopLevelDescriptors(file, $.functionValue(async (d: protoreflect.Descriptor | null): globalThis.Promise<void> => {
			$.mapSet((r$ as Files).descsByName, (__goscriptAwait = (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? (d as Exclude<protoreflect.Descriptor, null>) : $.pointerValue<Exclude<protoreflect.Descriptor, null>>(d)).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), (d as any))
		}, ({ kind: $.TypeKind.Function, params: ["protoreflect.Descriptor"], results: [] } as $.FunctionTypeInfo)))
		$.mapSet((r$ as Files).filesByPath, path, $.appendOne($.mapGet<string, $.Slice<protoreflect.FileDescriptor | null>, $.Slice<protoreflect.FileDescriptor | null>>((r$ as Files).filesByPath, path, null)[0], file, $.appendZeros.nil));
		;(r$ as Files).numFiles++
		return null
	}

	public async checkGenProtoConflict(path: string): globalThis.Promise<void> {
		const r: Files | $.VarRef<Files> | null = this;
		if (!$.pointerEqual(r, GlobalFiles)) {
			return
		}
		let prevPath: string = ""
		const prevModule: string = "google.golang.org/genproto"
		const prevVersion: string = "cb27e3aa (May 26th, 2020)"
		switch (path) {
			case "google/protobuf/field_mask.proto":
			{
				prevPath = $.concatString("google.golang.org/genproto", "/protobuf/field_mask")
				break
			}
			case "google/protobuf/api.proto":
			{
				prevPath = $.concatString("google.golang.org/genproto", "/protobuf/api")
				break
			}
			case "google/protobuf/type.proto":
			{
				prevPath = $.concatString("google.golang.org/genproto", "/protobuf/ptype")
				break
			}
			case "google/protobuf/source_context.proto":
			{
				prevPath = $.concatString("google.golang.org/genproto", "/protobuf/source_context")
				break
			}
			default:
			{
				return
				break
			}
		}
		let pkgName = strings.TrimSuffix(strings.TrimPrefix(path, "google/protobuf/"), ".proto")
		pkgName = $.concatString(strings.Replace(pkgName, "_", "", -1), "pb")
		let currPath = $.concatString("google.golang.org/protobuf/types/known/", pkgName)
		$.panic(await fmt.Sprintf($.concatString(($.concatString(($.concatString(($.concatString(($.concatString(($.concatString(($.concatString(($.concatString(($.concatString(($.concatString("", "duplicate registration of %q\n")), "\n")), "The generated definition for this file has moved:\n")), "\tfrom: %q\n")), "\tto:   %q\n")), "A dependency on the %q module must\n")), "be at version %v or higher.\n")), "\n")), "Upgrade the dependency by running:\n")), "\tgo get -u %v\n"), path, prevPath, currPath, "google.golang.org/genproto", "cb27e3aa (May 26th, 2020)", prevPath))
	}

	static __typeInfo = $.registerStructType(
		"protoregistry.Files",
		() => new Files(),
		() => [$.methodSignature("FindDescriptorByName", [["name", /* @__PURE__ */ $.basicType("string", "protoreflect.FullName")]], ["protoreflect.Descriptor", "error"], true), $.methodSignature("FindFileByPath", [["path", /* @__PURE__ */ $.basicType("string")]], ["protoreflect.FileDescriptor", "error"], true), $.methodSignature("NumFiles", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("NumFilesByPackage", [["name", /* @__PURE__ */ $.basicType("string", "protoreflect.FullName")]], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("RangeFiles", [["f", ({ kind: $.TypeKind.Function, params: ["protoreflect.FileDescriptor"], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)]], [], true), $.methodSignature("RangeFilesByPackage", [["name", /* @__PURE__ */ $.basicType("string", "protoreflect.FullName")], ["f", ({ kind: $.TypeKind.Function, params: ["protoreflect.FileDescriptor"], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)]], [], true), $.methodSignature("RegisterFile", [["file", "protoreflect.FileDescriptor"]], ["error"], true), $.methodSignature("checkGenProtoConflict", [["path", /* @__PURE__ */ $.basicType("string")]], [], true)],
		Files,
		() => [/* @__PURE__ */ $.structField("descsByName", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string", "protoreflect.FullName"), { kind: $.TypeKind.Interface, methods: [] }), [0], 0, false, { pkgPath: "google.golang.org/protobuf/reflect/protoregistry" }), /* @__PURE__ */ $.structField("filesByPath", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.sliceType("protoreflect.FileDescriptor")), [1], 8, false, { pkgPath: "google.golang.org/protobuf/reflect/protoregistry" }), /* @__PURE__ */ $.structField("numFiles", /* @__PURE__ */ $.basicType("int"), [2], 16, false, { pkgPath: "google.golang.org/protobuf/reflect/protoregistry" })]
	)
}

export class packageDescriptor {
	public get files(): $.Slice<protoreflect.FileDescriptor | null> {
		return this._fields.files
	}

	public set files(value: $.Slice<protoreflect.FileDescriptor | null>) {
		this._fields.files = value
	}

	public _fields: {
		files: $.Slice<protoreflect.FileDescriptor | null>
	}

	constructor(init?: Partial<{files?: $.Slice<protoreflect.FileDescriptor | null>}>, __goscriptValue?: boolean) {
		this._fields = {
			files: init?.files ?? (null! as $.Slice<protoreflect.FileDescriptor | null>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): packageDescriptor {
		return new packageDescriptor(this, true)
	}

	public __goscriptAssign(source: packageDescriptor): void {
		const target = this._fields
		const values = source._fields
		target.files = values.files
	}

	static __typeInfo = $.registerStructType(
		"protoregistry.packageDescriptor",
		() => new packageDescriptor(),
		() => [],
		packageDescriptor,
		() => [/* @__PURE__ */ $.structField("files", /* @__PURE__ */ $.sliceType("protoreflect.FileDescriptor"), [0], 0, false, { pkgPath: "google.golang.org/protobuf/reflect/protoregistry" })]
	)
}

export class Types {
	public get typesByName(): typesByName {
		return this._fields.typesByName
	}

	public set typesByName(value: typesByName) {
		this._fields.typesByName = value
	}

	public get extensionsByMessage(): extensionsByMessage {
		return this._fields.extensionsByMessage
	}

	public set extensionsByMessage(value: extensionsByMessage) {
		this._fields.extensionsByMessage = value
	}

	public get numEnums(): number {
		return this._fields.numEnums
	}

	public set numEnums(value: number) {
		this._fields.numEnums = value
	}

	public get numMessages(): number {
		return this._fields.numMessages
	}

	public set numMessages(value: number) {
		this._fields.numMessages = value
	}

	public get numExtensions(): number {
		return this._fields.numExtensions
	}

	public set numExtensions(value: number) {
		this._fields.numExtensions = value
	}

	public _fields: {
		typesByName: typesByName
		extensionsByMessage: extensionsByMessage
		numEnums: number
		numMessages: number
		numExtensions: number
	}

	constructor(init?: Partial<{typesByName?: typesByName, extensionsByMessage?: extensionsByMessage, numEnums?: number, numMessages?: number, numExtensions?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			typesByName: init?.typesByName ?? (null! as typesByName),
			extensionsByMessage: init?.extensionsByMessage ?? (null! as extensionsByMessage),
			numEnums: init?.numEnums ?? (0 as number),
			numMessages: init?.numMessages ?? (0 as number),
			numExtensions: init?.numExtensions ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Types {
		return new Types(this, true)
	}

	public __goscriptAssign(source: Types): void {
		const target = this._fields
		const values = source._fields
		target.typesByName = values.typesByName
		target.extensionsByMessage = values.extensionsByMessage
		target.numEnums = values.numEnums
		target.numMessages = values.numMessages
		target.numExtensions = values.numExtensions
	}

	public async FindEnumByName(_enum: protoreflect.FullName): globalThis.Promise<[protoreflect.EnumType | null, $.GoError]> {
		const r: Types | $.VarRef<Types> | null = this;
		using __defer = new $.DisposableStack()
		if (r == null) {
			return [null, NotFound]
		}
		if ($.pointerEqual(r, GlobalTypes)) {
			await globalMutex.value.RLock()
			const __goscriptDeferCallee7 = $.functionValue(((__receiver) => () => __receiver.RUnlock())(globalMutex.value), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*RWMutex).RUnlock-fm")
			__defer.defer(() => { __goscriptDeferCallee7() })
		}
		{
			let v = $.mapGet<protoreflect.FullName, any, any>($.pointerValue<Types>(r).typesByName, _enum, null)[0]
			if (v != null) {
				{
					let [et, ] = $.typeAssertTuple<protoreflect.EnumType | null>(v, "protoreflect.EnumType")
					if (et != null) {
						return [et, null]
					}
				}
				return [null, await errors.New("found wrong type: got %v, want enum", $.arrayToSlice<any>([await typeName(v)]))]
			}
		}
		return [null, NotFound]
	}

	public async FindExtensionByName(field: protoreflect.FullName): globalThis.Promise<[protoreflect.ExtensionType | null, $.GoError]> {
		const r: Types | $.VarRef<Types> | null = this;
		using __defer = new $.DisposableStack()
		const r$: Types = r == null ? $.pointerTarget<Types>(r) : (r as any).__isVarRef === true ? (r as any).value : (r as any).__goValue === undefined ? (r as any) : $.pointerTarget<Types>(r)
		if (r == null) {
			return [null, NotFound]
		}
		if ($.pointerEqual(r, GlobalTypes)) {
			await globalMutex.value.RLock()
			const __goscriptDeferCallee8 = $.functionValue(((__receiver) => () => __receiver.RUnlock())(globalMutex.value), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*RWMutex).RUnlock-fm")
			__defer.defer(() => { __goscriptDeferCallee8() })
		}
		{
			let v = $.mapGet<protoreflect.FullName, any, any>((r$ as Types).typesByName, field, null)[0]
			if (v != null) {
				{
					let [xt, ] = $.typeAssertTuple<protoreflect.ExtensionType | null>(v, "protoreflect.ExtensionType")
					if (xt != null) {
						return [xt, null]
					}
				}

				// MessageSet extensions are special in that the name of the extension
				// is the name of the message type used to extend the MessageSet.
				// This naming scheme is used by text and JSON serialization.
				//
				// This feature is protected by the ProtoLegacy flag since MessageSets
				// are a proto1 feature that is long deprecated.
				if (flags.ProtoLegacy) {
					{
						let [, ok] = $.typeAssertTuple<protoreflect.MessageType | null>(v, "protoreflect.MessageType")
						if (ok) {
							let __goscriptShadow7 = field
							let __goscriptShadow8 = protoreflect.FullName_Append(__goscriptShadow7, messageset.ExtensionName)
							{
								let __goscriptShadow9 = $.mapGet<protoreflect.FullName, any, any>((r$ as Types).typesByName, __goscriptShadow8, null)[0]
								if (__goscriptShadow9 != null) {
									{
										let [xt, ] = $.typeAssertTuple<protoreflect.ExtensionType | null>(__goscriptShadow9, "protoreflect.ExtensionType")
										if (xt != null) {
											if (await messageset.IsMessageSetExtension(((__goscriptAwait = (xt !== null && (xt as any).__isVarRef !== true && (xt as any).__goValue === undefined ? (xt as Exclude<protoreflect.ExtensionType, null>) : $.pointerValue<Exclude<protoreflect.ExtensionType, null>>(xt)).TypeDescriptor(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.FieldDescriptor | null))) {
												return [xt, null]
											}
										}
									}
								}
							}
						}
					}
				}

				return [null, await errors.New("found wrong type: got %v, want extension", $.arrayToSlice<any>([await typeName(v)]))]
			}
		}
		return [null, NotFound]
	}

	public async FindExtensionByNumber(message: protoreflect.FullName, field: protoreflect.FieldNumber): globalThis.Promise<[protoreflect.ExtensionType | null, $.GoError]> {
		const r: Types | $.VarRef<Types> | null = this;
		using __defer = new $.DisposableStack()
		if (r == null) {
			return [null, NotFound]
		}
		if ($.pointerEqual(r, GlobalTypes)) {
			await globalMutex.value.RLock()
			const __goscriptDeferCallee9 = $.functionValue(((__receiver) => () => __receiver.RUnlock())(globalMutex.value), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*RWMutex).RUnlock-fm")
			__defer.defer(() => { __goscriptDeferCallee9() })
		}
		{
			let [xt, ok] = $.mapGet<protoreflect.FieldNumber, protoreflect.ExtensionType | null, protoreflect.ExtensionType | null>($.mapGet<protoreflect.FullName, extensionsByNumber, extensionsByNumber>($.pointerValue<Types>(r).extensionsByMessage, message, null)[0], field, null)
			if (ok) {
				return [xt, null]
			}
		}
		return [null, NotFound]
	}

	public async FindMessageByName(message: protoreflect.FullName): globalThis.Promise<[protoreflect.MessageType | null, $.GoError]> {
		const r: Types | $.VarRef<Types> | null = this;
		using __defer = new $.DisposableStack()
		if (r == null) {
			return [null, NotFound]
		}
		if ($.pointerEqual(r, GlobalTypes)) {
			await globalMutex.value.RLock()
			const __goscriptDeferCallee10 = $.functionValue(((__receiver) => () => __receiver.RUnlock())(globalMutex.value), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*RWMutex).RUnlock-fm")
			__defer.defer(() => { __goscriptDeferCallee10() })
		}
		{
			let v = $.mapGet<protoreflect.FullName, any, any>($.pointerValue<Types>(r).typesByName, message, null)[0]
			if (v != null) {
				{
					let [mt, ] = $.typeAssertTuple<protoreflect.MessageType | null>(v, "protoreflect.MessageType")
					if (mt != null) {
						return [mt, null]
					}
				}
				return [null, await errors.New("found wrong type: got %v, want message", $.arrayToSlice<any>([await typeName(v)]))]
			}
		}
		return [null, NotFound]
	}

	public async FindMessageByURL(url: string): globalThis.Promise<[protoreflect.MessageType | null, $.GoError]> {
		const r: Types | $.VarRef<Types> | null = this;
		using __defer = new $.DisposableStack()
		// This function is similar to FindMessageByName but
		// truncates anything before and including '/' in the URL.
		if (r == null) {
			return [null, NotFound]
		}
		if ($.pointerEqual(r, GlobalTypes)) {
			await globalMutex.value.RLock()
			const __goscriptDeferCallee11 = $.functionValue(((__receiver) => () => __receiver.RUnlock())(globalMutex.value), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*RWMutex).RUnlock-fm")
			__defer.defer(() => { __goscriptDeferCallee11() })
		}
		let message = url
		{
			let i = strings.LastIndexByte(url, 47)
			if (i >= 0) {
				message = $.sliceStringOrBytes(message, i + 1, undefined)
			}
		}

		{
			let v = $.mapGet<protoreflect.FullName, any, any>($.pointerValue<Types>(r).typesByName, message, null)[0]
			if (v != null) {
				{
					let [mt, ] = $.typeAssertTuple<protoreflect.MessageType | null>(v, "protoreflect.MessageType")
					if (mt != null) {
						return [mt, null]
					}
				}
				return [null, await errors.New("found wrong type: got %v, want message", $.arrayToSlice<any>([await typeName(v)]))]
			}
		}
		return [null, NotFound]
	}

	public async NumEnums(): globalThis.Promise<number> {
		const r: Types | $.VarRef<Types> | null = this;
		using __defer = new $.DisposableStack()
		if (r == null) {
			return 0
		}
		if ($.pointerEqual(r, GlobalTypes)) {
			await globalMutex.value.RLock()
			const __goscriptDeferCallee12 = $.functionValue(((__receiver) => () => __receiver.RUnlock())(globalMutex.value), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*RWMutex).RUnlock-fm")
			__defer.defer(() => { __goscriptDeferCallee12() })
		}
		return $.pointerValue<Types>(r).numEnums
	}

	public async NumExtensions(): globalThis.Promise<number> {
		const r: Types | $.VarRef<Types> | null = this;
		using __defer = new $.DisposableStack()
		if (r == null) {
			return 0
		}
		if ($.pointerEqual(r, GlobalTypes)) {
			await globalMutex.value.RLock()
			const __goscriptDeferCallee13 = $.functionValue(((__receiver) => () => __receiver.RUnlock())(globalMutex.value), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*RWMutex).RUnlock-fm")
			__defer.defer(() => { __goscriptDeferCallee13() })
		}
		return $.pointerValue<Types>(r).numExtensions
	}

	public async NumExtensionsByMessage(message: protoreflect.FullName): globalThis.Promise<number> {
		const r: Types | $.VarRef<Types> | null = this;
		using __defer = new $.DisposableStack()
		if (r == null) {
			return 0
		}
		if ($.pointerEqual(r, GlobalTypes)) {
			await globalMutex.value.RLock()
			const __goscriptDeferCallee14 = $.functionValue(((__receiver) => () => __receiver.RUnlock())(globalMutex.value), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*RWMutex).RUnlock-fm")
			__defer.defer(() => { __goscriptDeferCallee14() })
		}
		return $.len($.mapGet<protoreflect.FullName, extensionsByNumber, extensionsByNumber>($.pointerValue<Types>(r).extensionsByMessage, message, null)[0])
	}

	public async NumMessages(): globalThis.Promise<number> {
		const r: Types | $.VarRef<Types> | null = this;
		using __defer = new $.DisposableStack()
		if (r == null) {
			return 0
		}
		if ($.pointerEqual(r, GlobalTypes)) {
			await globalMutex.value.RLock()
			const __goscriptDeferCallee15 = $.functionValue(((__receiver) => () => __receiver.RUnlock())(globalMutex.value), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*RWMutex).RUnlock-fm")
			__defer.defer(() => { __goscriptDeferCallee15() })
		}
		return $.pointerValue<Types>(r).numMessages
	}

	public async RangeEnums(f: ((_p0: protoreflect.EnumType | null) => boolean | globalThis.Promise<boolean>) | null): globalThis.Promise<void> {
		const r: Types | $.VarRef<Types> | null = this;
		using __defer = new $.DisposableStack()
		if (r == null) {
			return
		}
		if ($.pointerEqual(r, GlobalTypes)) {
			await globalMutex.value.RLock()
			const __goscriptDeferCallee16 = $.functionValue(((__receiver) => () => __receiver.RUnlock())(globalMutex.value), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*RWMutex).RUnlock-fm")
			__defer.defer(() => { __goscriptDeferCallee16() })
		}
		for (const [__rangeKey, typ] of $.pointerValue<Types>(r).typesByName?.entries() ?? []) {
			{
				let [et, ok] = $.typeAssertTuple<protoreflect.EnumType | null>(typ, "protoreflect.EnumType")
				if (ok) {
					if (!(__goscriptAwait = f!(et), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
						return
					}
				}
			}
		}
	}

	public async RangeExtensions(f: ((_p0: protoreflect.ExtensionType | null) => boolean | globalThis.Promise<boolean>) | null): globalThis.Promise<void> {
		const r: Types | $.VarRef<Types> | null = this;
		using __defer = new $.DisposableStack()
		if (r == null) {
			return
		}
		if ($.pointerEqual(r, GlobalTypes)) {
			await globalMutex.value.RLock()
			const __goscriptDeferCallee17 = $.functionValue(((__receiver) => () => __receiver.RUnlock())(globalMutex.value), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*RWMutex).RUnlock-fm")
			__defer.defer(() => { __goscriptDeferCallee17() })
		}
		for (const [__rangeKey, typ] of $.pointerValue<Types>(r).typesByName?.entries() ?? []) {
			{
				let [xt, ok] = $.typeAssertTuple<protoreflect.ExtensionType | null>(typ, "protoreflect.ExtensionType")
				if (ok) {
					if (!(__goscriptAwait = f!(xt), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
						return
					}
				}
			}
		}
	}

	public async RangeExtensionsByMessage(message: protoreflect.FullName, f: ((_p0: protoreflect.ExtensionType | null) => boolean | globalThis.Promise<boolean>) | null): globalThis.Promise<void> {
		const r: Types | $.VarRef<Types> | null = this;
		using __defer = new $.DisposableStack()
		if (r == null) {
			return
		}
		if ($.pointerEqual(r, GlobalTypes)) {
			await globalMutex.value.RLock()
			const __goscriptDeferCallee18 = $.functionValue(((__receiver) => () => __receiver.RUnlock())(globalMutex.value), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*RWMutex).RUnlock-fm")
			__defer.defer(() => { __goscriptDeferCallee18() })
		}
		for (const [__rangeKey, xt] of $.mapGet<protoreflect.FullName, extensionsByNumber, extensionsByNumber>($.pointerValue<Types>(r).extensionsByMessage, message, null)[0]?.entries() ?? []) {
			if (!(__goscriptAwait = f!(xt), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
				return
			}
		}
	}

	public async RangeMessages(f: ((_p0: protoreflect.MessageType | null) => boolean | globalThis.Promise<boolean>) | null): globalThis.Promise<void> {
		const r: Types | $.VarRef<Types> | null = this;
		using __defer = new $.DisposableStack()
		if (r == null) {
			return
		}
		if ($.pointerEqual(r, GlobalTypes)) {
			await globalMutex.value.RLock()
			const __goscriptDeferCallee19 = $.functionValue(((__receiver) => () => __receiver.RUnlock())(globalMutex.value), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*RWMutex).RUnlock-fm")
			__defer.defer(() => { __goscriptDeferCallee19() })
		}
		for (const [__rangeKey, typ] of $.pointerValue<Types>(r).typesByName?.entries() ?? []) {
			{
				let [mt, ok] = $.typeAssertTuple<protoreflect.MessageType | null>(typ, "protoreflect.MessageType")
				if (ok) {
					if (!(__goscriptAwait = f!(mt), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
						return
					}
				}
			}
		}
	}

	public async RegisterEnum(et: protoreflect.EnumType | null): globalThis.Promise<$.GoError> {
		let r: Types | $.VarRef<Types> | null = this;
		using __defer = new $.DisposableStack()
		const r$: Types = r == null ? $.pointerTarget<Types>(r) : (r as any).__isVarRef === true ? (r as any).value : (r as any).__goValue === undefined ? (r as any) : $.pointerTarget<Types>(r)
		// Under rare circumstances getting the descriptor might recursively
		// examine the registry, so fetch it before locking.
		let ed = (__goscriptAwait = (et !== null && (et as any).__isVarRef !== true && (et as any).__goValue === undefined ? (et as Exclude<protoreflect.EnumType, null>) : $.pointerValue<Exclude<protoreflect.EnumType, null>>(et)).Descriptor(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)

		if ($.pointerEqual(r, GlobalTypes)) {
			await globalMutex.value.Lock()
			const __goscriptDeferCallee20 = $.functionValue(((__receiver) => () => __receiver.Unlock())(globalMutex.value), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*RWMutex).Unlock-fm")
			__defer.defer(() => { __goscriptDeferCallee20() })
		}

		{
			let err = await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as Types).register("enum", (ed as protoreflect.Descriptor | null), (et as any)) : Types.prototype.register.call(r, "enum", (ed as protoreflect.Descriptor | null), (et as any)))
			if (err != null) {
				return err
			}
		}
		;(r$ as Types).numEnums++
		return null
	}

	public async RegisterExtension(xt: protoreflect.ExtensionType | null): globalThis.Promise<$.GoError> {
		let r: Types | $.VarRef<Types> | null = this;
		using __defer = new $.DisposableStack()
		const r$: Types = r == null ? $.pointerTarget<Types>(r) : (r as any).__isVarRef === true ? (r as any).value : (r as any).__goValue === undefined ? (r as any) : $.pointerTarget<Types>(r)
		// Under rare circumstances getting the descriptor might recursively
		// examine the registry, so fetch it before locking.
		//
		// A known case where this can happen: Fetching the TypeDescriptor for a
		// legacy ExtensionDesc can consult the global registry.
		let xd = (__goscriptAwait = (xt !== null && (xt as any).__isVarRef !== true && (xt as any).__goValue === undefined ? (xt as Exclude<protoreflect.ExtensionType, null>) : $.pointerValue<Exclude<protoreflect.ExtensionType, null>>(xt)).TypeDescriptor(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)

		if ($.pointerEqual(r, GlobalTypes)) {
			await globalMutex.value.Lock()
			const __goscriptDeferCallee21 = $.functionValue(((__receiver) => () => __receiver.Unlock())(globalMutex.value), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*RWMutex).Unlock-fm")
			__defer.defer(() => { __goscriptDeferCallee21() })
		}

		let field = (__goscriptAwait = (xd !== null && (xd as any).__isVarRef !== true && (xd as any).__goValue === undefined ? (xd as Exclude<protoreflect.ExtensionTypeDescriptor, null>) : $.pointerValue<Exclude<protoreflect.ExtensionTypeDescriptor, null>>(xd)).Number(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		let message = (__goscriptAwait = $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>((__goscriptAwait = (xd !== null && (xd as any).__isVarRef !== true && (xd as any).__goValue === undefined ? (xd as Exclude<protoreflect.ExtensionTypeDescriptor, null>) : $.pointerValue<Exclude<protoreflect.ExtensionTypeDescriptor, null>>(xd)).ContainingMessage(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		{
			let prev = $.mapGet<protoreflect.FieldNumber, protoreflect.ExtensionType | null, protoreflect.ExtensionType | null>($.mapGet<protoreflect.FullName, extensionsByNumber, extensionsByNumber>((r$ as Types).extensionsByMessage, message, null)[0], field, null)[0]
			if (prev != null) {
				let err = await errors.New("extension number %d is already registered on message %v", $.arrayToSlice<any>([$.namedValueInterfaceValue<any>(field, "protowire.Number", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic5()), $.namedValueInterfaceValue<any>(message, "protoreflect.FullName", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())]))
				err = await amendErrorWithCaller(err, (prev as any), (xt as any))
				if (!(($.pointerEqual(r, GlobalTypes)) && (__goscriptAwait = ignoreConflict!((xd as protoreflect.Descriptor | null), err), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))) {
					return err
				}
			}
		}

		{
			let err = await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as Types).register("extension", (xd as protoreflect.Descriptor | null), (xt as any)) : Types.prototype.register.call(r, "extension", (xd as protoreflect.Descriptor | null), (xt as any)))
			if (err != null) {
				return err
			}
		}
		if ((r$ as Types).extensionsByMessage == null) {
			;(r$ as Types).extensionsByMessage = $.makeMap<protoreflect.FullName, extensionsByNumber>()
		}
		if ($.mapGet<protoreflect.FullName, extensionsByNumber, extensionsByNumber>((r$ as Types).extensionsByMessage, message, null)[0] == null) {
			$.mapSet((r$ as Types).extensionsByMessage, message, $.makeMap<protoreflect.FieldNumber, protoreflect.ExtensionType | null>())
		}
		$.mapSet($.mapGet<protoreflect.FullName, extensionsByNumber, extensionsByNumber>((r$ as Types).extensionsByMessage, message, null)[0], field, xt);
		;(r$ as Types).numExtensions++
		return null
	}

	public async RegisterMessage(mt: protoreflect.MessageType | null): globalThis.Promise<$.GoError> {
		let r: Types | $.VarRef<Types> | null = this;
		using __defer = new $.DisposableStack()
		const r$: Types = r == null ? $.pointerTarget<Types>(r) : (r as any).__isVarRef === true ? (r as any).value : (r as any).__goValue === undefined ? (r as any) : $.pointerTarget<Types>(r)
		// Under rare circumstances getting the descriptor might recursively
		// examine the registry, so fetch it before locking.
		let md = (__goscriptAwait = (mt !== null && (mt as any).__isVarRef !== true && (mt as any).__goValue === undefined ? (mt as Exclude<protoreflect.MessageType, null>) : $.pointerValue<Exclude<protoreflect.MessageType, null>>(mt)).Descriptor(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)

		if ($.pointerEqual(r, GlobalTypes)) {
			await globalMutex.value.Lock()
			const __goscriptDeferCallee22 = $.functionValue(((__receiver) => () => __receiver.Unlock())(globalMutex.value), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*RWMutex).Unlock-fm")
			__defer.defer(() => { __goscriptDeferCallee22() })
		}

		{
			let err = await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as Types).register("message", (md as protoreflect.Descriptor | null), (mt as any)) : Types.prototype.register.call(r, "message", (md as protoreflect.Descriptor | null), (mt as any)))
			if (err != null) {
				return err
			}
		}
		;(r$ as Types).numMessages++
		return null
	}

	public async register(kind: string, desc: protoreflect.Descriptor | null, typ: any): globalThis.Promise<$.GoError> {
		let r: Types | $.VarRef<Types> | null = this;
		const r$: Types = r == null ? $.pointerTarget<Types>(r) : (r as any).__isVarRef === true ? (r as any).value : (r as any).__goValue === undefined ? (r as any) : $.pointerTarget<Types>(r)
		let name = (__goscriptAwait = (desc !== null && (desc as any).__isVarRef !== true && (desc as any).__goValue === undefined ? (desc as Exclude<protoreflect.Descriptor, null>) : $.pointerValue<Exclude<protoreflect.Descriptor, null>>(desc)).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		let prev = $.mapGet<protoreflect.FullName, any, any>((r$ as Types).typesByName, name, null)[0]
		if (prev != null) {
			let err = await errors.New("%v %v is already registered", $.arrayToSlice<any>([kind, $.namedValueInterfaceValue<any>(name, "protoreflect.FullName", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())]))
			err = await amendErrorWithCaller(err, prev, typ)
			if (!(($.pointerEqual(r, GlobalTypes)) && (__goscriptAwait = ignoreConflict!(desc, err), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))) {
				return err
			}
		}
		if ((r$ as Types).typesByName == null) {
			;(r$ as Types).typesByName = $.makeMap<protoreflect.FullName, any>()
		}
		$.mapSet((r$ as Types).typesByName, name, typ)
		return null
	}

	static __typeInfo = $.registerStructType(
		"protoregistry.Types",
		() => new Types(),
		() => [$.methodSignature("FindEnumByName", [["enum", /* @__PURE__ */ $.basicType("string", "protoreflect.FullName")]], ["protoreflect.EnumType", "error"], true), $.methodSignature("FindExtensionByName", [["field", /* @__PURE__ */ $.basicType("string", "protoreflect.FullName")]], ["protoreflect.ExtensionType", "error"], true), $.methodSignature("FindExtensionByNumber", [["message", /* @__PURE__ */ $.basicType("string", "protoreflect.FullName")], ["field", /* @__PURE__ */ $.basicType("int32", "protowire.Number")]], ["protoreflect.ExtensionType", "error"], true), $.methodSignature("FindMessageByName", [["message", /* @__PURE__ */ $.basicType("string", "protoreflect.FullName")]], ["protoreflect.MessageType", "error"], true), $.methodSignature("FindMessageByURL", [["url", /* @__PURE__ */ $.basicType("string")]], ["protoreflect.MessageType", "error"], true), $.methodSignature("NumEnums", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("NumExtensions", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("NumExtensionsByMessage", [["message", /* @__PURE__ */ $.basicType("string", "protoreflect.FullName")]], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("NumMessages", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("RangeEnums", [["f", ({ kind: $.TypeKind.Function, params: ["protoreflect.EnumType"], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)]], [], true), $.methodSignature("RangeExtensions", [["f", ({ kind: $.TypeKind.Function, params: ["protoreflect.ExtensionType"], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)]], [], true), $.methodSignature("RangeExtensionsByMessage", [["message", /* @__PURE__ */ $.basicType("string", "protoreflect.FullName")], ["f", ({ kind: $.TypeKind.Function, params: ["protoreflect.ExtensionType"], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)]], [], true), $.methodSignature("RangeMessages", [["f", ({ kind: $.TypeKind.Function, params: ["protoreflect.MessageType"], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)]], [], true), $.methodSignature("RegisterEnum", [["et", "protoreflect.EnumType"]], ["error"], true), $.methodSignature("RegisterExtension", [["xt", "protoreflect.ExtensionType"]], ["error"], true), $.methodSignature("RegisterMessage", [["mt", "protoreflect.MessageType"]], ["error"], true), $.methodSignature("register", [["kind", /* @__PURE__ */ $.basicType("string")], ["desc", "protoreflect.Descriptor"], ["typ", { kind: $.TypeKind.Interface, methods: [] }]], ["error"], true)],
		Types,
		() => [/* @__PURE__ */ $.structField("typesByName", "protoregistry.typesByName", [0], 0, false, { pkgPath: "google.golang.org/protobuf/reflect/protoregistry" }), /* @__PURE__ */ $.structField("extensionsByMessage", "protoregistry.extensionsByMessage", [1], 8, false, { pkgPath: "google.golang.org/protobuf/reflect/protoregistry" }), /* @__PURE__ */ $.structField("numEnums", /* @__PURE__ */ $.basicType("int"), [2], 16, false, { pkgPath: "google.golang.org/protobuf/reflect/protoregistry" }), /* @__PURE__ */ $.structField("numMessages", /* @__PURE__ */ $.basicType("int"), [3], 24, false, { pkgPath: "google.golang.org/protobuf/reflect/protoregistry" }), /* @__PURE__ */ $.structField("numExtensions", /* @__PURE__ */ $.basicType("int"), [4], 32, false, { pkgPath: "google.golang.org/protobuf/reflect/protoregistry" })]
	)
}

export let conflictPolicy: string = "panic"

export function __goscript_set_conflictPolicy(__goscriptValue: string): void {
	conflictPolicy = __goscriptValue
}

export let ignoreConflict: ((d: protoreflect.Descriptor | null, err: $.GoError) => boolean | globalThis.Promise<boolean>) | null = $.functionValue(async (d: protoreflect.Descriptor | null, err: $.GoError): globalThis.Promise<boolean> => {
	const env: string = "GOLANG_PROTOBUF_REGISTRATION_CONFLICT"
	const faq: string = "https://protobuf.dev/reference/go/faq#namespace-conflict"
	let policy = conflictPolicy
	{
		let v = os.Getenv("GOLANG_PROTOBUF_REGISTRATION_CONFLICT")
		if (!$.stringEqual(v, "")) {
			policy = v
		}
	}
	switch (policy) {
		case "panic":
		{
			$.panic(await fmt.Sprintf("%v\nSee %v\n", (err as any), "https://protobuf.dev/reference/go/faq#namespace-conflict"))
			break
		}
		case "warn":
		{
			await fmt.Fprintf($.pointerValueOrNil($.interfaceValue<io.Writer | null>(os.Stderr, "*os.File", /* @__PURE__ */ $.pointerType("os.File")))!, "WARNING: %v\nSee %v\n\n", (err as any), "https://protobuf.dev/reference/go/faq#namespace-conflict")
			return true
			break
		}
		case "ignore":
		{
			return true
			break
		}
		default:
		{
			$.panic($.concatString(($.concatString(($.concatString("invalid ", "GOLANG_PROTOBUF_REGISTRATION_CONFLICT")), " value: ")), os.Getenv("GOLANG_PROTOBUF_REGISTRATION_CONFLICT")))
			break
		}
	}
}, ({ kind: $.TypeKind.Function, params: ["protoreflect.Descriptor", "error"], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo))

export function __goscript_set_ignoreConflict(__goscriptValue: ((d: protoreflect.Descriptor | null, err: $.GoError) => boolean | globalThis.Promise<boolean>) | null): void {
	ignoreConflict = __goscriptValue
}

export let globalMutex: $.VarRef<sync.RWMutex> = $.varRef($.markAsStructValue(new sync.RWMutex()))

export function __goscript_set_globalMutex(__goscriptValue: sync.RWMutex): void {
	$.assignStruct(globalMutex.value, __goscriptValue)
}

export let GlobalFiles: Files | $.VarRef<Files> | null = new Files()

export function __goscript_set_GlobalFiles(__goscriptValue: Files | $.VarRef<Files> | null): void {
	GlobalFiles = __goscriptValue
}

export let GlobalTypes: Types | $.VarRef<Types> | null = new Types()

export function __goscript_set_GlobalTypes(__goscriptValue: Types | $.VarRef<Types> | null): void {
	GlobalTypes = __goscriptValue
}

export let NotFound: $.GoError = await errors.New("not found", null)

export function __goscript_set_NotFound(__goscriptValue: $.GoError): void {
	NotFound = __goscriptValue
}

export async function findDescriptorInMessage(md: protoreflect.MessageDescriptor | null, __goscriptParam0: nameSuffix): globalThis.Promise<protoreflect.Descriptor | null> {
	let suffix: $.VarRef<nameSuffix> = $.varRef(__goscriptParam0)
	let name = nameSuffix_Pop(suffix)
	if ($.stringEqual(suffix.value, "")) {
		{
			let ed = (__goscriptAwait = $.pointerValue<Exclude<protoreflect.EnumDescriptors, null>>((__goscriptAwait = (md !== null && (md as any).__isVarRef !== true && (md as any).__goValue === undefined ? (md as Exclude<protoreflect.MessageDescriptor, null>) : $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>(md)).Enums(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).ByName(name), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (ed != null) {
				return (ed as protoreflect.Descriptor | null)
			}
		}
		for (let i = (__goscriptAwait = $.pointerValue<Exclude<protoreflect.EnumDescriptors, null>>((__goscriptAwait = (md !== null && (md as any).__isVarRef !== true && (md as any).__goValue === undefined ? (md as Exclude<protoreflect.MessageDescriptor, null>) : $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>(md)).Enums(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) - 1; i >= 0; i--) {
			{
				let vd = (__goscriptAwait = $.pointerValue<Exclude<protoreflect.EnumValueDescriptors, null>>((__goscriptAwait = $.pointerValue<Exclude<protoreflect.EnumDescriptor, null>>((__goscriptAwait = $.pointerValue<Exclude<protoreflect.EnumDescriptors, null>>((__goscriptAwait = (md !== null && (md as any).__isVarRef !== true && (md as any).__goValue === undefined ? (md as Exclude<protoreflect.MessageDescriptor, null>) : $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>(md)).Enums(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Get(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Values(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).ByName(name), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (vd != null) {
					return (vd as protoreflect.Descriptor | null)
				}
			}
		}
		{
			let xd = (__goscriptAwait = $.pointerValue<Exclude<protoreflect.ExtensionDescriptors, null>>((__goscriptAwait = (md !== null && (md as any).__isVarRef !== true && (md as any).__goValue === undefined ? (md as Exclude<protoreflect.MessageDescriptor, null>) : $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>(md)).Extensions(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).ByName(name), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (xd != null) {
				return (xd as protoreflect.Descriptor | null)
			}
		}
		{
			let fd = (__goscriptAwait = $.pointerValue<Exclude<protoreflect.FieldDescriptors, null>>((__goscriptAwait = (md !== null && (md as any).__isVarRef !== true && (md as any).__goValue === undefined ? (md as Exclude<protoreflect.MessageDescriptor, null>) : $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>(md)).Fields(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).ByName(name), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (fd != null) {
				return (fd as protoreflect.Descriptor | null)
			}
		}
		{
			let od = (__goscriptAwait = $.pointerValue<Exclude<protoreflect.OneofDescriptors, null>>((__goscriptAwait = (md !== null && (md as any).__isVarRef !== true && (md as any).__goValue === undefined ? (md as Exclude<protoreflect.MessageDescriptor, null>) : $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>(md)).Oneofs(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).ByName(name), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (od != null) {
				return (od as protoreflect.Descriptor | null)
			}
		}
	}
	let __goscriptShadow4 = md
	{
		let __goscriptShadow5 = (__goscriptAwait = $.pointerValue<Exclude<protoreflect.MessageDescriptors, null>>((__goscriptAwait = (__goscriptShadow4 !== null && (__goscriptShadow4 as any).__isVarRef !== true && (__goscriptShadow4 as any).__goValue === undefined ? (__goscriptShadow4 as Exclude<protoreflect.MessageDescriptor, null>) : $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>(__goscriptShadow4)).Messages(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).ByName(name), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		if (__goscriptShadow5 != null) {
			if ($.stringEqual(suffix.value, "")) {
				return (__goscriptShadow5 as protoreflect.Descriptor | null)
			}
			return findDescriptorInMessage(__goscriptShadow5, suffix.value)
		}
	}
	return null
}

export function nameSuffix_Pop(s: $.VarRef<nameSuffix> | null): protoreflect.Name {
	let name: protoreflect.Name = ""
	{
		let i = strings.IndexByte($.pointerValue<nameSuffix>(s), 46)
		if (i >= 0) {
			let __goscriptAssign0_0: protoreflect.Name = $.sliceStringOrBytes(($.pointerValue<nameSuffix>(s)), undefined, i)
			let __goscriptAssign0_1: nameSuffix = $.sliceStringOrBytes(($.pointerValue<nameSuffix>(s)), i + 1, undefined)
			name = __goscriptAssign0_0
			s!.value = __goscriptAssign0_1
		} else {
			let __goscriptAssign1_0: protoreflect.Name = ($.pointerValue<nameSuffix>(s))
			let __goscriptAssign1_1: nameSuffix = ""
			name = __goscriptAssign1_0
			s!.value = __goscriptAssign1_1
		}
	}
	return name
}

export async function rangeTopLevelDescriptors(fd: protoreflect.FileDescriptor | null, f: ((_p0: protoreflect.Descriptor | null) => void) | null): globalThis.Promise<void> {
	let eds = (__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FileDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FileDescriptor, null>>(fd)).Enums(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	for (let i = (__goscriptAwait = (eds !== null && (eds as any).__isVarRef !== true && (eds as any).__goValue === undefined ? (eds as Exclude<protoreflect.EnumDescriptors, null>) : $.pointerValue<Exclude<protoreflect.EnumDescriptors, null>>(eds)).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) - 1; i >= 0; i--) {
		void (__goscriptAwait = f!(((__goscriptAwait = (eds !== null && (eds as any).__isVarRef !== true && (eds as any).__goValue === undefined ? (eds as Exclude<protoreflect.EnumDescriptors, null>) : $.pointerValue<Exclude<protoreflect.EnumDescriptors, null>>(eds)).Get(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Descriptor | null)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		let vds = (__goscriptAwait = $.pointerValue<Exclude<protoreflect.EnumDescriptor, null>>((__goscriptAwait = (eds !== null && (eds as any).__isVarRef !== true && (eds as any).__goValue === undefined ? (eds as Exclude<protoreflect.EnumDescriptors, null>) : $.pointerValue<Exclude<protoreflect.EnumDescriptors, null>>(eds)).Get(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Values(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		for (let __goscriptShadow6 = (__goscriptAwait = (vds !== null && (vds as any).__isVarRef !== true && (vds as any).__goValue === undefined ? (vds as Exclude<protoreflect.EnumValueDescriptors, null>) : $.pointerValue<Exclude<protoreflect.EnumValueDescriptors, null>>(vds)).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) - 1; __goscriptShadow6 >= 0; __goscriptShadow6--) {
			void (__goscriptAwait = f!(((__goscriptAwait = (vds !== null && (vds as any).__isVarRef !== true && (vds as any).__goValue === undefined ? (vds as Exclude<protoreflect.EnumValueDescriptors, null>) : $.pointerValue<Exclude<protoreflect.EnumValueDescriptors, null>>(vds)).Get(__goscriptShadow6), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Descriptor | null)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}
	let mds = (__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FileDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FileDescriptor, null>>(fd)).Messages(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	for (let i = (__goscriptAwait = (mds !== null && (mds as any).__isVarRef !== true && (mds as any).__goValue === undefined ? (mds as Exclude<protoreflect.MessageDescriptors, null>) : $.pointerValue<Exclude<protoreflect.MessageDescriptors, null>>(mds)).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) - 1; i >= 0; i--) {
		void (__goscriptAwait = f!(((__goscriptAwait = (mds !== null && (mds as any).__isVarRef !== true && (mds as any).__goValue === undefined ? (mds as Exclude<protoreflect.MessageDescriptors, null>) : $.pointerValue<Exclude<protoreflect.MessageDescriptors, null>>(mds)).Get(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Descriptor | null)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}
	let xds = (__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FileDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FileDescriptor, null>>(fd)).Extensions(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	for (let i = (__goscriptAwait = (xds !== null && (xds as any).__isVarRef !== true && (xds as any).__goValue === undefined ? (xds as Exclude<protoreflect.ExtensionDescriptors, null>) : $.pointerValue<Exclude<protoreflect.ExtensionDescriptors, null>>(xds)).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) - 1; i >= 0; i--) {
		void (__goscriptAwait = f!(((__goscriptAwait = (xds !== null && (xds as any).__isVarRef !== true && (xds as any).__goValue === undefined ? (xds as Exclude<protoreflect.ExtensionDescriptors, null>) : $.pointerValue<Exclude<protoreflect.ExtensionDescriptors, null>>(xds)).Get(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Descriptor | null)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}
	let sds = (__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FileDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FileDescriptor, null>>(fd)).Services(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	for (let i = (__goscriptAwait = (sds !== null && (sds as any).__isVarRef !== true && (sds as any).__goValue === undefined ? (sds as Exclude<protoreflect.ServiceDescriptors, null>) : $.pointerValue<Exclude<protoreflect.ServiceDescriptors, null>>(sds)).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) - 1; i >= 0; i--) {
		void (__goscriptAwait = f!(((__goscriptAwait = (sds !== null && (sds as any).__isVarRef !== true && (sds as any).__goValue === undefined ? (sds as Exclude<protoreflect.ServiceDescriptors, null>) : $.pointerValue<Exclude<protoreflect.ServiceDescriptors, null>>(sds)).Get(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Descriptor | null)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}
}

export async function typeName(t: any): globalThis.Promise<string> {
	{
		const __goscriptTypeSwitchValue = t
		switch (true) {
			case $.typeAssert<protoreflect.EnumType | null>(__goscriptTypeSwitchValue, "protoreflect.EnumType").ok:
				{
					return "enum"
				}
				break
			case $.typeAssert<protoreflect.MessageType | null>(__goscriptTypeSwitchValue, "protoreflect.MessageType").ok:
				{
					return "message"
				}
				break
			case $.typeAssert<protoreflect.ExtensionType | null>(__goscriptTypeSwitchValue, "protoreflect.ExtensionType").ok:
				{
					return "extension"
				}
				break
			default:
				{
					return fmt.Sprintf("%T", t)
				}
				break
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export async function amendErrorWithCaller(err: $.GoError, prev: any, curr: any): globalThis.Promise<$.GoError> {
	let prevPkg = await goPackage(prev)
	let currPkg = await goPackage(curr)
	if ((($.stringEqual(prevPkg, "")) || ($.stringEqual(currPkg, ""))) || ($.stringEqual(prevPkg, currPkg))) {
		return err
	}
	return errors.New("%s\n\tpreviously from: %q\n\tcurrently from:  %q", $.arrayToSlice<any>([(err as any), prevPkg, currPkg]))
}

export async function goPackage(v: any): globalThis.Promise<string> {
	{
		const __goscriptTypeSwitchValue = v
		switch (true) {
			case $.typeAssert<protoreflect.EnumType | null>(__goscriptTypeSwitchValue, "protoreflect.EnumType").ok:
				{
					let d: protoreflect.EnumType | null = $.typeAssert<protoreflect.EnumType | null>(__goscriptTypeSwitchValue, "protoreflect.EnumType").value
					v = ((__goscriptAwait = (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? (d as Exclude<protoreflect.EnumType, null>) : $.pointerValue<Exclude<protoreflect.EnumType, null>>(d)).Descriptor(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as any)
				}
				break
			case $.typeAssert<protoreflect.MessageType | null>(__goscriptTypeSwitchValue, "protoreflect.MessageType").ok:
				{
					let d: protoreflect.MessageType | null = $.typeAssert<protoreflect.MessageType | null>(__goscriptTypeSwitchValue, "protoreflect.MessageType").value
					v = ((__goscriptAwait = (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? (d as Exclude<protoreflect.MessageType, null>) : $.pointerValue<Exclude<protoreflect.MessageType, null>>(d)).Descriptor(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as any)
				}
				break
			case $.typeAssert<protoreflect.ExtensionType | null>(__goscriptTypeSwitchValue, "protoreflect.ExtensionType").ok:
				{
					let d: protoreflect.ExtensionType | null = $.typeAssert<protoreflect.ExtensionType | null>(__goscriptTypeSwitchValue, "protoreflect.ExtensionType").value
					v = ((__goscriptAwait = (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? (d as Exclude<protoreflect.ExtensionType, null>) : $.pointerValue<Exclude<protoreflect.ExtensionType, null>>(d)).TypeDescriptor(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as any)
				}
				break
		}
	}
	{
		let [d, ok] = $.typeAssertTuple<protoreflect.Descriptor | null>(v, "protoreflect.Descriptor")
		if (ok) {
			v = ((__goscriptAwait = (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? (d as Exclude<protoreflect.Descriptor, null>) : $.pointerValue<Exclude<protoreflect.Descriptor, null>>(d)).ParentFile(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as any)
		}
	}
	{
		let [d, ok] = $.typeAssertTuple<any>(v, { kind: $.TypeKind.Interface, methods: [{ name: "GoPackagePath", args: [], returns: [{ name: "_r0", type: /* @__PURE__ */ $.basicType("string") }] }] })
		if (ok) {
			return (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? (d as any) : $.pointerValue<any>(d)).GoPackagePath()
		}
	}
	return ""
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
