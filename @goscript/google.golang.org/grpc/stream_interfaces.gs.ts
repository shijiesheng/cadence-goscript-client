// Generated file based on stream_interfaces.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import type * as context from "@goscript/context/index.js"

import type * as metadata from "@goscript/google.golang.org/grpc/metadata/index.js"

import * as __goscript_stream from "./stream.gs.ts"
import "./stream.gs.ts"

$.registerTypePackagePath("google.golang.org/grpc", ["grpc.ServerStreamingClient", "grpc.ServerStreamingServer", "grpc.ClientStreamingClient", "grpc.ClientStreamingServer", "grpc.BidiStreamingClient", "grpc.BidiStreamingServer", "grpc.GenericClientStream", "grpc.GenericServerStream"])

export type ServerStreamingClient = {
	CloseSend(): $.GoError | globalThis.Promise<$.GoError>
	Context(): context.Context | null | globalThis.Promise<context.Context | null>
	Header(): [metadata.MD, $.GoError] | globalThis.Promise<[metadata.MD, $.GoError]>
	Recv(__typeArgs: $.GenericTypeArgs | undefined): [any, $.GoError]
	RecvMsg(m: any): $.GoError | globalThis.Promise<$.GoError>
	SendMsg(m: any): $.GoError | globalThis.Promise<$.GoError>
	Trailer(): metadata.MD | globalThis.Promise<metadata.MD>
}

$.registerInterfaceType(
	"grpc.ServerStreamingClient",
	null,
	[$.methodSignature("CloseSend", [], ["error"]), $.methodSignature("Context", [], ["context.Context"]), $.methodSignature("Header", [], ["metadata.MD", "error"]), $.methodSignature("Recv", [], [/* @__PURE__ */ $.pointerType({ kind: $.TypeKind.Interface, methods: [] }), "error"]), $.methodSignature("RecvMsg", [["m", { kind: $.TypeKind.Interface, methods: [] }]], ["error"]), $.methodSignature("SendMsg", [["m", { kind: $.TypeKind.Interface, methods: [] }]], ["error"]), $.methodSignature("Trailer", [], ["metadata.MD"])]
);

export type ServerStreamingServer = {
	Context(): context.Context | null
	RecvMsg(m: any): $.GoError | globalThis.Promise<$.GoError>
	Send(__typeArgs: $.GenericTypeArgs | undefined, _p0: any): $.GoError
	SendHeader(_p0: metadata.MD): $.GoError | globalThis.Promise<$.GoError>
	SendMsg(m: any): $.GoError | globalThis.Promise<$.GoError>
	SetHeader(_p0: metadata.MD): $.GoError | globalThis.Promise<$.GoError>
	SetTrailer(_p0: metadata.MD): void
}

$.registerInterfaceType(
	"grpc.ServerStreamingServer",
	null,
	[$.methodSignature("Context", [], ["context.Context"]), $.methodSignature("RecvMsg", [["m", { kind: $.TypeKind.Interface, methods: [] }]], ["error"]), $.methodSignature("Send", [/* @__PURE__ */ $.pointerType({ kind: $.TypeKind.Interface, methods: [] })], ["error"]), $.methodSignature("SendHeader", ["metadata.MD"], ["error"]), $.methodSignature("SendMsg", [["m", { kind: $.TypeKind.Interface, methods: [] }]], ["error"]), $.methodSignature("SetHeader", ["metadata.MD"], ["error"]), $.methodSignature("SetTrailer", ["metadata.MD"])]
);

export type ClientStreamingClient = {
	CloseAndRecv(__typeArgs: $.GenericTypeArgs | undefined): [any, $.GoError] | globalThis.Promise<[any, $.GoError]>
	CloseSend(): $.GoError | globalThis.Promise<$.GoError>
	Context(): context.Context | null | globalThis.Promise<context.Context | null>
	Header(): [metadata.MD, $.GoError] | globalThis.Promise<[metadata.MD, $.GoError]>
	RecvMsg(m: any): $.GoError | globalThis.Promise<$.GoError>
	Send(__typeArgs: $.GenericTypeArgs | undefined, _p0: any): $.GoError | globalThis.Promise<$.GoError>
	SendMsg(m: any): $.GoError | globalThis.Promise<$.GoError>
	Trailer(): metadata.MD | globalThis.Promise<metadata.MD>
}

$.registerInterfaceType(
	"grpc.ClientStreamingClient",
	null,
	[$.methodSignature("CloseAndRecv", [], [/* @__PURE__ */ $.pointerType({ kind: $.TypeKind.Interface, methods: [] }), "error"]), $.methodSignature("CloseSend", [], ["error"]), $.methodSignature("Context", [], ["context.Context"]), $.methodSignature("Header", [], ["metadata.MD", "error"]), $.methodSignature("RecvMsg", [["m", { kind: $.TypeKind.Interface, methods: [] }]], ["error"]), $.methodSignature("Send", [/* @__PURE__ */ $.pointerType({ kind: $.TypeKind.Interface, methods: [] })], ["error"]), $.methodSignature("SendMsg", [["m", { kind: $.TypeKind.Interface, methods: [] }]], ["error"]), $.methodSignature("Trailer", [], ["metadata.MD"])]
);

export type ClientStreamingServer = {
	Context(): context.Context | null
	Recv(__typeArgs: $.GenericTypeArgs | undefined): [any, $.GoError] | globalThis.Promise<[any, $.GoError]>
	RecvMsg(m: any): $.GoError | globalThis.Promise<$.GoError>
	SendAndClose(__typeArgs: $.GenericTypeArgs | undefined, _p0: any): $.GoError | globalThis.Promise<$.GoError>
	SendHeader(_p0: metadata.MD): $.GoError | globalThis.Promise<$.GoError>
	SendMsg(m: any): $.GoError | globalThis.Promise<$.GoError>
	SetHeader(_p0: metadata.MD): $.GoError | globalThis.Promise<$.GoError>
	SetTrailer(_p0: metadata.MD): void
}

$.registerInterfaceType(
	"grpc.ClientStreamingServer",
	null,
	[$.methodSignature("Context", [], ["context.Context"]), $.methodSignature("Recv", [], [/* @__PURE__ */ $.pointerType({ kind: $.TypeKind.Interface, methods: [] }), "error"]), $.methodSignature("RecvMsg", [["m", { kind: $.TypeKind.Interface, methods: [] }]], ["error"]), $.methodSignature("SendAndClose", [/* @__PURE__ */ $.pointerType({ kind: $.TypeKind.Interface, methods: [] })], ["error"]), $.methodSignature("SendHeader", ["metadata.MD"], ["error"]), $.methodSignature("SendMsg", [["m", { kind: $.TypeKind.Interface, methods: [] }]], ["error"]), $.methodSignature("SetHeader", ["metadata.MD"], ["error"]), $.methodSignature("SetTrailer", ["metadata.MD"])]
);

export type BidiStreamingClient = {
	CloseSend(): $.GoError | globalThis.Promise<$.GoError>
	Context(): context.Context | null | globalThis.Promise<context.Context | null>
	Header(): [metadata.MD, $.GoError] | globalThis.Promise<[metadata.MD, $.GoError]>
	Recv(__typeArgs: $.GenericTypeArgs | undefined): [any, $.GoError] | globalThis.Promise<[any, $.GoError]>
	RecvMsg(m: any): $.GoError | globalThis.Promise<$.GoError>
	Send(__typeArgs: $.GenericTypeArgs | undefined, _p0: any): $.GoError | globalThis.Promise<$.GoError>
	SendMsg(m: any): $.GoError | globalThis.Promise<$.GoError>
	Trailer(): metadata.MD | globalThis.Promise<metadata.MD>
}

$.registerInterfaceType(
	"grpc.BidiStreamingClient",
	null,
	[$.methodSignature("CloseSend", [], ["error"]), $.methodSignature("Context", [], ["context.Context"]), $.methodSignature("Header", [], ["metadata.MD", "error"]), $.methodSignature("Recv", [], [/* @__PURE__ */ $.pointerType({ kind: $.TypeKind.Interface, methods: [] }), "error"]), $.methodSignature("RecvMsg", [["m", { kind: $.TypeKind.Interface, methods: [] }]], ["error"]), $.methodSignature("Send", [/* @__PURE__ */ $.pointerType({ kind: $.TypeKind.Interface, methods: [] })], ["error"]), $.methodSignature("SendMsg", [["m", { kind: $.TypeKind.Interface, methods: [] }]], ["error"]), $.methodSignature("Trailer", [], ["metadata.MD"])]
);

export type BidiStreamingServer = {
	Context(): context.Context | null
	Recv(__typeArgs: $.GenericTypeArgs | undefined): [any, $.GoError] | globalThis.Promise<[any, $.GoError]>
	RecvMsg(m: any): $.GoError | globalThis.Promise<$.GoError>
	Send(__typeArgs: $.GenericTypeArgs | undefined, _p0: any): $.GoError | globalThis.Promise<$.GoError>
	SendHeader(_p0: metadata.MD): $.GoError | globalThis.Promise<$.GoError>
	SendMsg(m: any): $.GoError | globalThis.Promise<$.GoError>
	SetHeader(_p0: metadata.MD): $.GoError | globalThis.Promise<$.GoError>
	SetTrailer(_p0: metadata.MD): void
}

$.registerInterfaceType(
	"grpc.BidiStreamingServer",
	null,
	[$.methodSignature("Context", [], ["context.Context"]), $.methodSignature("Recv", [], [/* @__PURE__ */ $.pointerType({ kind: $.TypeKind.Interface, methods: [] }), "error"]), $.methodSignature("RecvMsg", [["m", { kind: $.TypeKind.Interface, methods: [] }]], ["error"]), $.methodSignature("Send", [/* @__PURE__ */ $.pointerType({ kind: $.TypeKind.Interface, methods: [] })], ["error"]), $.methodSignature("SendHeader", ["metadata.MD"], ["error"]), $.methodSignature("SendMsg", [["m", { kind: $.TypeKind.Interface, methods: [] }]], ["error"]), $.methodSignature("SetHeader", ["metadata.MD"], ["error"]), $.methodSignature("SetTrailer", ["metadata.MD"])]
);

export class GenericClientStream {
	public get ClientStream(): __goscript_stream.ClientStream | null {
		return this._fields.ClientStream
	}

	public set ClientStream(value: __goscript_stream.ClientStream | null) {
		this._fields.ClientStream = value
	}

	public _fields: {
		ClientStream: __goscript_stream.ClientStream | null
	}

	constructor(init?: Partial<{ClientStream?: __goscript_stream.ClientStream | null}>, __goscriptValue?: boolean) {
		this._fields = {
			ClientStream: init?.ClientStream ?? (null! as __goscript_stream.ClientStream | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): GenericClientStream {
		return new GenericClientStream(this, true)
	}

	public __goscriptAssign(source: GenericClientStream): void {
		const target = this._fields
		const values = source._fields
		target.ClientStream = $.assignFieldValue(target.ClientStream, values.ClientStream, "grpc.ClientStream")
	}

	public async CloseAndRecv(__typeArgs: $.GenericTypeArgs | undefined): globalThis.Promise<[any, $.GoError]> {
		const x: GenericClientStream | $.VarRef<GenericClientStream> | null = this;
		const x$: GenericClientStream = x == null ? $.pointerTarget<GenericClientStream>(x) : (x as any).__isVarRef === true ? (x as any).value : (x as any).__goValue === undefined ? (x as any) : $.pointerTarget<GenericClientStream>(x)
		{
			let err = (__goscriptAwait = $.pointerValue<Exclude<__goscript_stream.ClientStream, null>>((x$ as GenericClientStream).ClientStream).CloseSend(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (err != null) {
				return [null, err]
			}
		}
		let m = $.genericNew(__typeArgs, "Res", null)
		{
			let err = (__goscriptAwait = $.pointerValue<Exclude<__goscript_stream.ClientStream, null>>((x$ as GenericClientStream).ClientStream).RecvMsg($.typeParamPointerInterfaceValue(m, __typeArgs?.["Res"], "*Res", /* @__PURE__ */ $.pointerType(__typeArgs?.["Res"]?.type ?? { kind: $.TypeKind.Interface, methods: [] }))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (err != null) {
				return [null, err]
			}
		}
		return [m, null]
	}

	public async Recv(__typeArgs: $.GenericTypeArgs | undefined): globalThis.Promise<[any, $.GoError]> {
		const x: GenericClientStream | $.VarRef<GenericClientStream> | null = this;
		let m = $.genericNew(__typeArgs, "Res", null)
		{
			let err = (__goscriptAwait = $.pointerValue<Exclude<__goscript_stream.ClientStream, null>>($.pointerValue<GenericClientStream>(x).ClientStream).RecvMsg($.typeParamPointerInterfaceValue(m, __typeArgs?.["Res"], "*Res", /* @__PURE__ */ $.pointerType(__typeArgs?.["Res"]?.type ?? { kind: $.TypeKind.Interface, methods: [] }))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (err != null) {
				return [null, err]
			}
		}
		return [m, null]
	}

	public async Send(__typeArgs: $.GenericTypeArgs | undefined, m: any): globalThis.Promise<$.GoError> {
		const x: GenericClientStream | $.VarRef<GenericClientStream> | null = this;
		return $.pointerValue<Exclude<__goscript_stream.ClientStream, null>>($.pointerValue<GenericClientStream>(x).ClientStream).SendMsg($.typeParamPointerInterfaceValue(m, __typeArgs?.["Req"], "*Req", /* @__PURE__ */ $.pointerType(__typeArgs?.["Req"]?.type ?? { kind: $.TypeKind.Interface, methods: [] })))
	}

	public async CloseSend(): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<__goscript_stream.ClientStream | null, null>>(this.ClientStream).CloseSend()
	}

	public async Context(): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<__goscript_stream.ClientStream | null, null>>(this.ClientStream).Context()
	}

	public async Header(): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<__goscript_stream.ClientStream | null, null>>(this.ClientStream).Header()
	}

	public async RecvMsg(m: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<__goscript_stream.ClientStream | null, null>>(this.ClientStream).RecvMsg(m)
	}

	public async SendMsg(m: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<__goscript_stream.ClientStream | null, null>>(this.ClientStream).SendMsg(m)
	}

	public async Trailer(): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<__goscript_stream.ClientStream | null, null>>(this.ClientStream).Trailer()
	}

	static __typeInfo = $.registerStructType(
		"grpc.GenericClientStream",
		() => new GenericClientStream(),
		() => [$.methodSignature("CloseAndRecv", [], [/* @__PURE__ */ $.pointerType({ kind: $.TypeKind.Interface, methods: [] }), "error"], true), $.methodSignature("Recv", [], [/* @__PURE__ */ $.pointerType({ kind: $.TypeKind.Interface, methods: [] }), "error"], true), $.methodSignature("Send", [["m", /* @__PURE__ */ $.pointerType({ kind: $.TypeKind.Interface, methods: [] })]], ["error"], true), $.methodSignature("CloseSend", [], ["error"]), $.methodSignature("Context", [], ["context.Context"]), $.methodSignature("Header", [], ["metadata.MD", "error"]), $.methodSignature("RecvMsg", [["m", { kind: $.TypeKind.Interface, methods: [] }]], ["error"]), $.methodSignature("SendMsg", [["m", { kind: $.TypeKind.Interface, methods: [] }]], ["error"]), $.methodSignature("Trailer", [], ["metadata.MD"])],
		GenericClientStream,
		() => [/* @__PURE__ */ $.structField("ClientStream", "grpc.ClientStream", [0], 0, true, { anonymous: true })]
	)
}

export class GenericServerStream {
	public get ServerStream(): __goscript_stream.ServerStream | null {
		return this._fields.ServerStream
	}

	public set ServerStream(value: __goscript_stream.ServerStream | null) {
		this._fields.ServerStream = value
	}

	public _fields: {
		ServerStream: __goscript_stream.ServerStream | null
	}

	constructor(init?: Partial<{ServerStream?: __goscript_stream.ServerStream | null}>, __goscriptValue?: boolean) {
		this._fields = {
			ServerStream: init?.ServerStream ?? (null! as __goscript_stream.ServerStream | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): GenericServerStream {
		return new GenericServerStream(this, true)
	}

	public __goscriptAssign(source: GenericServerStream): void {
		const target = this._fields
		const values = source._fields
		target.ServerStream = $.assignFieldValue(target.ServerStream, values.ServerStream, "grpc.ServerStream")
	}

	public async Recv(__typeArgs: $.GenericTypeArgs | undefined): globalThis.Promise<[any, $.GoError]> {
		const x: GenericServerStream | $.VarRef<GenericServerStream> | null = this;
		let m = $.genericNew(__typeArgs, "Req", null)
		{
			let err = (__goscriptAwait = $.pointerValue<Exclude<__goscript_stream.ServerStream, null>>($.pointerValue<GenericServerStream>(x).ServerStream).RecvMsg($.typeParamPointerInterfaceValue(m, __typeArgs?.["Req"], "*Req", /* @__PURE__ */ $.pointerType(__typeArgs?.["Req"]?.type ?? { kind: $.TypeKind.Interface, methods: [] }))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (err != null) {
				return [null, err]
			}
		}
		return [m, null]
	}

	public async Send(__typeArgs: $.GenericTypeArgs | undefined, m: any): globalThis.Promise<$.GoError> {
		const x: GenericServerStream | $.VarRef<GenericServerStream> | null = this;
		return $.pointerValue<Exclude<__goscript_stream.ServerStream, null>>($.pointerValue<GenericServerStream>(x).ServerStream).SendMsg($.typeParamPointerInterfaceValue(m, __typeArgs?.["Res"], "*Res", /* @__PURE__ */ $.pointerType(__typeArgs?.["Res"]?.type ?? { kind: $.TypeKind.Interface, methods: [] })))
	}

	public async SendAndClose(__typeArgs: $.GenericTypeArgs | undefined, m: any): globalThis.Promise<$.GoError> {
		const x: GenericServerStream | $.VarRef<GenericServerStream> | null = this;
		return $.pointerValue<Exclude<__goscript_stream.ServerStream, null>>($.pointerValue<GenericServerStream>(x).ServerStream).SendMsg($.typeParamPointerInterfaceValue(m, __typeArgs?.["Res"], "*Res", /* @__PURE__ */ $.pointerType(__typeArgs?.["Res"]?.type ?? { kind: $.TypeKind.Interface, methods: [] })))
	}

	public Context(): any {
		return $.pointerValue<Exclude<__goscript_stream.ServerStream | null, null>>(this.ServerStream).Context()
	}

	public async RecvMsg(m: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<__goscript_stream.ServerStream | null, null>>(this.ServerStream).RecvMsg(m)
	}

	public async SendHeader(_p0: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<__goscript_stream.ServerStream | null, null>>(this.ServerStream).SendHeader(_p0)
	}

	public async SendMsg(m: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<__goscript_stream.ServerStream | null, null>>(this.ServerStream).SendMsg(m)
	}

	public async SetHeader(_p0: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<__goscript_stream.ServerStream | null, null>>(this.ServerStream).SetHeader(_p0)
	}

	public async SetTrailer(_p0: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<__goscript_stream.ServerStream | null, null>>(this.ServerStream).SetTrailer(_p0)
	}

	static __typeInfo = $.registerStructType(
		"grpc.GenericServerStream",
		() => new GenericServerStream(),
		() => [$.methodSignature("Recv", [], [/* @__PURE__ */ $.pointerType({ kind: $.TypeKind.Interface, methods: [] }), "error"], true), $.methodSignature("Send", [["m", /* @__PURE__ */ $.pointerType({ kind: $.TypeKind.Interface, methods: [] })]], ["error"], true), $.methodSignature("SendAndClose", [["m", /* @__PURE__ */ $.pointerType({ kind: $.TypeKind.Interface, methods: [] })]], ["error"], true), $.methodSignature("Context", [], ["context.Context"]), $.methodSignature("RecvMsg", [["m", { kind: $.TypeKind.Interface, methods: [] }]], ["error"]), $.methodSignature("SendHeader", ["metadata.MD"], ["error"]), $.methodSignature("SendMsg", [["m", { kind: $.TypeKind.Interface, methods: [] }]], ["error"]), $.methodSignature("SetHeader", ["metadata.MD"], ["error"]), $.methodSignature("SetTrailer", ["metadata.MD"])],
		GenericServerStream,
		() => [/* @__PURE__ */ $.structField("ServerStream", "grpc.ServerStream", [0], 0, true, { anonymous: true })]
	)
}

var __goscriptAwait: any
