// Generated file based on codec.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as encoding from "@goscript/google.golang.org/grpc/encoding/index.js"

import "@goscript/google.golang.org/grpc/encoding/proto/index.js"

import * as mem from "@goscript/google.golang.org/grpc/mem/index.js"
import "@goscript/google.golang.org/grpc/encoding/index.js"
import "@goscript/google.golang.org/grpc/mem/index.js"

$.registerTypePackagePath("google.golang.org/grpc", ["grpc.baseCodec", "grpc.codecV0Bridge", "grpc.codecV1Bridge", "grpc.Codec"])

export type baseCodec = {
	Marshal(v: any): [mem.BufferSlice, $.GoError] | globalThis.Promise<[mem.BufferSlice, $.GoError]>
	Unmarshal(data: mem.BufferSlice, v: any): $.GoError | globalThis.Promise<$.GoError>
}

$.registerInterfaceType(
	"grpc.baseCodec",
	null,
	[$.methodSignature("Marshal", [["v", { kind: $.TypeKind.Interface, methods: [] }]], [/* @__PURE__ */ $.sliceType("mem.Buffer", "mem.BufferSlice"), "error"]), $.methodSignature("Unmarshal", [["data", /* @__PURE__ */ $.sliceType("mem.Buffer", "mem.BufferSlice")], ["v", { kind: $.TypeKind.Interface, methods: [] }]], ["error"])]
);

export type Codec = {
	Marshal(v: any): [$.Slice<number>, $.GoError]
	String(): string
	Unmarshal(data: $.Slice<number>, v: any): $.GoError
}

$.registerInterfaceType(
	"grpc.Codec",
	null,
	[$.methodSignature("Marshal", [["v", { kind: $.TypeKind.Interface, methods: [] }]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Unmarshal", [["data", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["v", { kind: $.TypeKind.Interface, methods: [] }]], ["error"])]
);

export class codecV0Bridge {
	public get codec(): any {
		return this._fields.codec
	}

	public set codec(value: any) {
		this._fields.codec = value
	}

	public _fields: {
		codec: any
	}

	constructor(init?: Partial<{codec?: any}>, __goscriptValue?: boolean) {
		this._fields = {
			codec: init?.codec ?? (null! as any)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): codecV0Bridge {
		return new codecV0Bridge(this, true)
	}

	public __goscriptAssign(source: codecV0Bridge): void {
		const target = this._fields
		const values = source._fields
		target.codec = $.assignFieldValue(target.codec, values.codec, { kind: $.TypeKind.Interface, methods: [$.methodSignature("Marshal", [["v", { kind: $.TypeKind.Interface, methods: [] }]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("Unmarshal", [["data", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["v", { kind: $.TypeKind.Interface, methods: [] }]], ["error"])] })
	}

	public async Marshal(v: any): globalThis.Promise<[mem.BufferSlice, $.GoError]> {
		const c = this;
		let __goscriptTuple0: any = await $.pointerValue<any>(c.codec).Marshal(v)
		let data: $.VarRef<$.Slice<number>> = $.varRef(__goscriptTuple0[0])
		let err = __goscriptTuple0[1]
		if (err != null) {
			return [(null as mem.BufferSlice), err]
		}
		return [($.arrayToSlice<mem.Buffer | null>([await mem.NewBuffer(data, null)]) as mem.BufferSlice), null]
	}

	public async Unmarshal(data: mem.BufferSlice, v: any): globalThis.Promise<$.GoError> {
		const c = this;
		let err: $.GoError = null! as $.GoError
		return $.pointerValue<any>(c.codec).Unmarshal(mem.BufferSlice_Materialize(data), v)
	}

	static __typeInfo = $.registerStructType(
		"grpc.codecV0Bridge",
		() => new codecV0Bridge(),
		() => [$.methodSignature("Marshal", [["v", { kind: $.TypeKind.Interface, methods: [] }]], [/* @__PURE__ */ $.sliceType("mem.Buffer", "mem.BufferSlice"), "error"]), $.methodSignature("Unmarshal", [["data", /* @__PURE__ */ $.sliceType("mem.Buffer", "mem.BufferSlice")], ["v", { kind: $.TypeKind.Interface, methods: [] }]], [["err", "error"]])],
		codecV0Bridge,
		() => [/* @__PURE__ */ $.structField("codec", { kind: $.TypeKind.Interface, methods: [$.methodSignature("Marshal", [["v", { kind: $.TypeKind.Interface, methods: [] }]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("Unmarshal", [["data", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["v", { kind: $.TypeKind.Interface, methods: [] }]], ["error"])] }, [0], 0, false, { pkgPath: "google.golang.org/grpc" })]
	)
}

export class codecV1Bridge {
	public get codecV0Bridge(): codecV0Bridge {
		return this._fields.codecV0Bridge
	}

	public set codecV0Bridge(value: codecV0Bridge) {
		this._fields.codecV0Bridge = value
	}

	public get name(): string {
		return this._fields.name
	}

	public set name(value: string) {
		this._fields.name = value
	}

	public _fields: {
		codecV0Bridge: codecV0Bridge
		name: string
	}

	constructor(init?: Partial<{codecV0Bridge?: codecV0Bridge, name?: string}>, __goscriptValue?: boolean) {
		this._fields = {
			codecV0Bridge: init?.codecV0Bridge ? init.codecV0Bridge.clone() : new codecV0Bridge(undefined, true),
			name: init?.name ?? ("" as string)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): codecV1Bridge {
		return new codecV1Bridge(this, true)
	}

	public __goscriptAssign(source: codecV1Bridge): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.codecV0Bridge, values.codecV0Bridge)
		target.name = values.name
	}

	public Name(): string {
		const c = this;
		return c.name
	}

	public async Marshal(v: any): globalThis.Promise<any> {
		return await $.pointerValue<codecV0Bridge>(this.codecV0Bridge).Marshal(v)
	}

	public async Unmarshal(data: any, v: any): globalThis.Promise<any> {
		return await $.pointerValue<codecV0Bridge>(this.codecV0Bridge).Unmarshal(data, v)
	}

	static __typeInfo = $.registerStructType(
		"grpc.codecV1Bridge",
		() => new codecV1Bridge(),
		() => [$.methodSignature("Name", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Marshal", [["v", { kind: $.TypeKind.Interface, methods: [] }]], [/* @__PURE__ */ $.sliceType("mem.Buffer", "mem.BufferSlice"), "error"]), $.methodSignature("Unmarshal", [["data", /* @__PURE__ */ $.sliceType("mem.Buffer", "mem.BufferSlice")], ["v", { kind: $.TypeKind.Interface, methods: [] }]], [["err", "error"]])],
		codecV1Bridge,
		() => [/* @__PURE__ */ $.structField("codecV0Bridge", "grpc.codecV0Bridge", [0], 0, false, { pkgPath: "google.golang.org/grpc", anonymous: true }), /* @__PURE__ */ $.structField("name", /* @__PURE__ */ $.basicType("string"), [1], 16, false, { pkgPath: "google.golang.org/grpc" })]
	)
}

export async function getCodec(name: string): globalThis.Promise<encoding.CodecV2 | null> {
	{
		let codecV1 = encoding.GetCodec(name)
		if (codecV1 != null) {
			return newCodecV1Bridge(codecV1)
		}
	}

	return encoding.GetCodecV2(name)
}

export function newCodecV0Bridge(c: Codec | null): baseCodec | null {
	return $.interfaceValue<baseCodec | null>(new codecV0Bridge({codec: (c as any)}, true), "grpc.codecV0Bridge", "grpc.codecV0Bridge")
}

export async function newCodecV1Bridge(c: encoding.Codec | null): globalThis.Promise<encoding.CodecV2 | null> {
	return $.interfaceValue<encoding.CodecV2 | null>((await (async () => { const __goscriptLiteralField0 = (__goscriptAwait = (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? (c as Exclude<encoding.Codec, null>) : $.pointerValue<Exclude<encoding.Codec, null>>(c)).Name(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); return new codecV1Bridge({codecV0Bridge: new codecV0Bridge({codec: (c as any)}, true), name: __goscriptLiteralField0}, true) })()), "grpc.codecV1Bridge", "grpc.codecV1Bridge")
}

var __goscriptAwait: any
