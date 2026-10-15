// Generated file based on stats.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/context/index.js"

import * as net from "@goscript/net/index.js"

import * as time from "@goscript/time/index.js"

import * as metadata from "@goscript/google.golang.org/grpc/metadata/index.js"
import "@goscript/context/index.js"
import "@goscript/net/index.js"
import "@goscript/time/index.js"
import "@goscript/google.golang.org/grpc/metadata/index.js"

$.registerTypePackagePath("google.golang.org/grpc/stats", ["stats.RPCStats", "stats.Begin", "stats.PickerUpdated", "stats.InPayload", "stats.InHeader", "stats.InTrailer", "stats.OutPayload", "stats.OutHeader", "stats.OutTrailer", "stats.End", "stats.ConnStats", "stats.ConnBegin", "stats.ConnEnd", "stats.incomingTagsKey", "stats.outgoingTagsKey", "stats.incomingTraceKey", "stats.outgoingTraceKey"])

export type RPCStats = {
	IsClient(): boolean
	isRPCStats(): void
}

$.registerInterfaceType(
	"stats.RPCStats",
	null,
	[$.methodSignature("IsClient", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("isRPCStats")]
);

export type ConnStats = {
	IsClient(): boolean
	isConnStats(): void
}

$.registerInterfaceType(
	"stats.ConnStats",
	null,
	[$.methodSignature("IsClient", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("isConnStats")]
);

export class Begin {
	// Client is true if this Begin is from client side.
	public get Client(): boolean {
		return this._fields.Client
	}

	public set Client(value: boolean) {
		this._fields.Client = value
	}

	// BeginTime is the time when the RPC attempt begins.
	public get BeginTime(): time.Time {
		return this._fields.BeginTime
	}

	public set BeginTime(value: time.Time) {
		this._fields.BeginTime = value
	}

	// FailFast indicates if this RPC is failfast.
	public get FailFast(): boolean {
		return this._fields.FailFast
	}

	public set FailFast(value: boolean) {
		this._fields.FailFast = value
	}

	// IsClientStream indicates whether the RPC is a client streaming RPC.
	public get IsClientStream(): boolean {
		return this._fields.IsClientStream
	}

	public set IsClientStream(value: boolean) {
		this._fields.IsClientStream = value
	}

	// IsServerStream indicates whether the RPC is a server streaming RPC.
	public get IsServerStream(): boolean {
		return this._fields.IsServerStream
	}

	public set IsServerStream(value: boolean) {
		this._fields.IsServerStream = value
	}

	// IsTransparentRetryAttempt indicates whether this attempt was initiated
	// due to transparently retrying a previous attempt.
	public get IsTransparentRetryAttempt(): boolean {
		return this._fields.IsTransparentRetryAttempt
	}

	public set IsTransparentRetryAttempt(value: boolean) {
		this._fields.IsTransparentRetryAttempt = value
	}

	public _fields: {
		Client: boolean
		BeginTime: time.Time
		FailFast: boolean
		IsClientStream: boolean
		IsServerStream: boolean
		IsTransparentRetryAttempt: boolean
	}

	constructor(init?: Partial<{Client?: boolean, BeginTime?: time.Time, FailFast?: boolean, IsClientStream?: boolean, IsServerStream?: boolean, IsTransparentRetryAttempt?: boolean}>, __goscriptValue?: boolean) {
		this._fields = {
			Client: init?.Client ?? (false as boolean),
			BeginTime: init?.BeginTime ? $.markAsStructValue($.cloneStructValue(init.BeginTime)) : $.markAsStructValue(new time.Time()),
			FailFast: init?.FailFast ?? (false as boolean),
			IsClientStream: init?.IsClientStream ?? (false as boolean),
			IsServerStream: init?.IsServerStream ?? (false as boolean),
			IsTransparentRetryAttempt: init?.IsTransparentRetryAttempt ?? (false as boolean)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Begin {
		return new Begin(this, true)
	}

	public __goscriptAssign(source: Begin): void {
		const target = this._fields
		const values = source._fields
		target.Client = values.Client
		$.assignStruct(target.BeginTime, values.BeginTime)
		target.FailFast = values.FailFast
		target.IsClientStream = values.IsClientStream
		target.IsServerStream = values.IsServerStream
		target.IsTransparentRetryAttempt = values.IsTransparentRetryAttempt
	}

	public IsClient(): boolean {
		const s: Begin | $.VarRef<Begin> | null = this;
		return $.pointerValue<Begin>(s).Client
	}

	public isRPCStats(): void {
		const s: Begin | $.VarRef<Begin> | null = this;
	}

	static __typeInfo = $.registerStructType(
		"stats.Begin",
		() => new Begin(),
		() => [$.methodSignature("IsClient", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("isRPCStats", [], [], true)],
		Begin,
		() => [/* @__PURE__ */ $.structField("Client", /* @__PURE__ */ $.basicType("bool"), [0], 0, true), /* @__PURE__ */ $.structField("BeginTime", "time.Time", [1], 8, true), /* @__PURE__ */ $.structField("FailFast", /* @__PURE__ */ $.basicType("bool"), [2], 32, true), /* @__PURE__ */ $.structField("IsClientStream", /* @__PURE__ */ $.basicType("bool"), [3], 33, true), /* @__PURE__ */ $.structField("IsServerStream", /* @__PURE__ */ $.basicType("bool"), [4], 34, true), /* @__PURE__ */ $.structField("IsTransparentRetryAttempt", /* @__PURE__ */ $.basicType("bool"), [5], 35, true)]
	)
}

export class PickerUpdated {
	public _fields: {
	}

	constructor(init?: Partial<{}>, __goscriptValue?: boolean) {
		this._fields = {
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): PickerUpdated {
		return new PickerUpdated(this, true)
	}

	public __goscriptAssign(source: PickerUpdated): void {
	}

	public IsClient(): boolean {
		return true
	}

	public isRPCStats(): void {
	}

	static __typeInfo = $.registerStructType(
		"stats.PickerUpdated",
		() => new PickerUpdated(),
		() => [$.methodSignature("IsClient", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("isRPCStats", [], [], true)],
		PickerUpdated,
		() => []
	)
}

export class InPayload {
	// Client is true if this InPayload is from client side.
	public get Client(): boolean {
		return this._fields.Client
	}

	public set Client(value: boolean) {
		this._fields.Client = value
	}

	// Payload is the payload with original type.  This may be modified after
	// the call to HandleRPC which provides the InPayload returns and must be
	// copied if needed later.
	public get Payload(): any {
		return this._fields.Payload
	}

	public set Payload(value: any) {
		this._fields.Payload = value
	}

	// Length is the size of the uncompressed payload data. Does not include any
	// framing (gRPC or HTTP/2).
	public get Length(): number {
		return this._fields.Length
	}

	public set Length(value: number) {
		this._fields.Length = value
	}

	// CompressedLength is the size of the compressed payload data. Does not
	// include any framing (gRPC or HTTP/2). Same as Length if compression not
	// enabled.
	public get CompressedLength(): number {
		return this._fields.CompressedLength
	}

	public set CompressedLength(value: number) {
		this._fields.CompressedLength = value
	}

	// WireLength is the size of the compressed payload data plus gRPC framing.
	// Does not include HTTP/2 framing.
	public get WireLength(): number {
		return this._fields.WireLength
	}

	public set WireLength(value: number) {
		this._fields.WireLength = value
	}

	// RecvTime is the time when the payload is received.
	public get RecvTime(): time.Time {
		return this._fields.RecvTime
	}

	public set RecvTime(value: time.Time) {
		this._fields.RecvTime = value
	}

	public _fields: {
		Client: boolean
		Payload: any
		Length: number
		CompressedLength: number
		WireLength: number
		RecvTime: time.Time
	}

	constructor(init?: Partial<{Client?: boolean, Payload?: any, Length?: number, CompressedLength?: number, WireLength?: number, RecvTime?: time.Time}>, __goscriptValue?: boolean) {
		this._fields = {
			Client: init?.Client ?? (false as boolean),
			Payload: init?.Payload ?? (null! as any),
			Length: init?.Length ?? (0 as number),
			CompressedLength: init?.CompressedLength ?? (0 as number),
			WireLength: init?.WireLength ?? (0 as number),
			RecvTime: init?.RecvTime ? $.markAsStructValue($.cloneStructValue(init.RecvTime)) : $.markAsStructValue(new time.Time())
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): InPayload {
		return new InPayload(this, true)
	}

	public __goscriptAssign(source: InPayload): void {
		const target = this._fields
		const values = source._fields
		target.Client = values.Client
		target.Payload = $.assignFieldValue(target.Payload, values.Payload, { kind: $.TypeKind.Interface, methods: [] })
		target.Length = values.Length
		target.CompressedLength = values.CompressedLength
		target.WireLength = values.WireLength
		$.assignStruct(target.RecvTime, values.RecvTime)
	}

	public IsClient(): boolean {
		const s: InPayload | $.VarRef<InPayload> | null = this;
		return $.pointerValue<InPayload>(s).Client
	}

	public isRPCStats(): void {
		const s: InPayload | $.VarRef<InPayload> | null = this;
	}

	static __typeInfo = $.registerStructType(
		"stats.InPayload",
		() => new InPayload(),
		() => [$.methodSignature("IsClient", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("isRPCStats", [], [], true)],
		InPayload,
		() => [/* @__PURE__ */ $.structField("Client", /* @__PURE__ */ $.basicType("bool"), [0], 0, true), /* @__PURE__ */ $.structField("Payload", { kind: $.TypeKind.Interface, methods: [] }, [1], 8, true), /* @__PURE__ */ $.structField("Length", /* @__PURE__ */ $.basicType("int"), [2], 24, true), /* @__PURE__ */ $.structField("CompressedLength", /* @__PURE__ */ $.basicType("int"), [3], 32, true), /* @__PURE__ */ $.structField("WireLength", /* @__PURE__ */ $.basicType("int"), [4], 40, true), /* @__PURE__ */ $.structField("RecvTime", "time.Time", [5], 48, true)]
	)
}

export class InHeader {
	// Client is true if this InHeader is from client side.
	public get Client(): boolean {
		return this._fields.Client
	}

	public set Client(value: boolean) {
		this._fields.Client = value
	}

	// WireLength is the wire length of header.
	public get WireLength(): number {
		return this._fields.WireLength
	}

	public set WireLength(value: number) {
		this._fields.WireLength = value
	}

	// Compression is the compression algorithm used for the RPC.
	public get Compression(): string {
		return this._fields.Compression
	}

	public set Compression(value: string) {
		this._fields.Compression = value
	}

	// Header contains the header metadata received.
	public get Header(): metadata.MD {
		return this._fields.Header
	}

	public set Header(value: metadata.MD) {
		this._fields.Header = value
	}

	// The following fields are valid only if Client is false.
	// FullMethod is the full RPC method string, i.e., /package.service/method.
	public get FullMethod(): string {
		return this._fields.FullMethod
	}

	public set FullMethod(value: string) {
		this._fields.FullMethod = value
	}

	// RemoteAddr is the remote address of the corresponding connection.
	public get RemoteAddr(): net.Addr | null {
		return this._fields.RemoteAddr
	}

	public set RemoteAddr(value: net.Addr | null) {
		this._fields.RemoteAddr = value
	}

	// LocalAddr is the local address of the corresponding connection.
	public get LocalAddr(): net.Addr | null {
		return this._fields.LocalAddr
	}

	public set LocalAddr(value: net.Addr | null) {
		this._fields.LocalAddr = value
	}

	public _fields: {
		Client: boolean
		WireLength: number
		Compression: string
		Header: metadata.MD
		FullMethod: string
		RemoteAddr: net.Addr | null
		LocalAddr: net.Addr | null
	}

	constructor(init?: Partial<{Client?: boolean, WireLength?: number, Compression?: string, Header?: metadata.MD, FullMethod?: string, RemoteAddr?: net.Addr | null, LocalAddr?: net.Addr | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Client: init?.Client ?? (false as boolean),
			WireLength: init?.WireLength ?? (0 as number),
			Compression: init?.Compression ?? ("" as string),
			Header: init?.Header ?? (null! as metadata.MD),
			FullMethod: init?.FullMethod ?? ("" as string),
			RemoteAddr: init?.RemoteAddr ?? (null! as net.Addr | null),
			LocalAddr: init?.LocalAddr ?? (null! as net.Addr | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): InHeader {
		return new InHeader(this, true)
	}

	public __goscriptAssign(source: InHeader): void {
		const target = this._fields
		const values = source._fields
		target.Client = values.Client
		target.WireLength = values.WireLength
		target.Compression = values.Compression
		target.Header = values.Header
		target.FullMethod = values.FullMethod
		target.RemoteAddr = $.assignFieldValue(target.RemoteAddr, values.RemoteAddr, "net.Addr")
		target.LocalAddr = $.assignFieldValue(target.LocalAddr, values.LocalAddr, "net.Addr")
	}

	public IsClient(): boolean {
		const s: InHeader | $.VarRef<InHeader> | null = this;
		return $.pointerValue<InHeader>(s).Client
	}

	public isRPCStats(): void {
		const s: InHeader | $.VarRef<InHeader> | null = this;
	}

	static __typeInfo = $.registerStructType(
		"stats.InHeader",
		() => new InHeader(),
		() => [$.methodSignature("IsClient", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("isRPCStats", [], [], true)],
		InHeader,
		() => [/* @__PURE__ */ $.structField("Client", /* @__PURE__ */ $.basicType("bool"), [0], 0, true), /* @__PURE__ */ $.structField("WireLength", /* @__PURE__ */ $.basicType("int"), [1], 8, true), /* @__PURE__ */ $.structField("Compression", /* @__PURE__ */ $.basicType("string"), [2], 16, true), /* @__PURE__ */ $.structField("Header", "metadata.MD", [3], 32, true), /* @__PURE__ */ $.structField("FullMethod", /* @__PURE__ */ $.basicType("string"), [4], 40, true), /* @__PURE__ */ $.structField("RemoteAddr", "net.Addr", [5], 56, true), /* @__PURE__ */ $.structField("LocalAddr", "net.Addr", [6], 72, true)]
	)
}

export class InTrailer {
	// Client is true if this InTrailer is from client side.
	public get Client(): boolean {
		return this._fields.Client
	}

	public set Client(value: boolean) {
		this._fields.Client = value
	}

	// WireLength is the wire length of trailer.
	public get WireLength(): number {
		return this._fields.WireLength
	}

	public set WireLength(value: number) {
		this._fields.WireLength = value
	}

	// Trailer contains the trailer metadata received from the server. This
	// field is only valid if this InTrailer is from the client side.
	public get Trailer(): metadata.MD {
		return this._fields.Trailer
	}

	public set Trailer(value: metadata.MD) {
		this._fields.Trailer = value
	}

	public _fields: {
		Client: boolean
		WireLength: number
		Trailer: metadata.MD
	}

	constructor(init?: Partial<{Client?: boolean, WireLength?: number, Trailer?: metadata.MD}>, __goscriptValue?: boolean) {
		this._fields = {
			Client: init?.Client ?? (false as boolean),
			WireLength: init?.WireLength ?? (0 as number),
			Trailer: init?.Trailer ?? (null! as metadata.MD)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): InTrailer {
		return new InTrailer(this, true)
	}

	public __goscriptAssign(source: InTrailer): void {
		const target = this._fields
		const values = source._fields
		target.Client = values.Client
		target.WireLength = values.WireLength
		target.Trailer = values.Trailer
	}

	public IsClient(): boolean {
		const s: InTrailer | $.VarRef<InTrailer> | null = this;
		return $.pointerValue<InTrailer>(s).Client
	}

	public isRPCStats(): void {
		const s: InTrailer | $.VarRef<InTrailer> | null = this;
	}

	static __typeInfo = $.registerStructType(
		"stats.InTrailer",
		() => new InTrailer(),
		() => [$.methodSignature("IsClient", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("isRPCStats", [], [], true)],
		InTrailer,
		() => [/* @__PURE__ */ $.structField("Client", /* @__PURE__ */ $.basicType("bool"), [0], 0, true), /* @__PURE__ */ $.structField("WireLength", /* @__PURE__ */ $.basicType("int"), [1], 8, true), /* @__PURE__ */ $.structField("Trailer", "metadata.MD", [2], 16, true)]
	)
}

export class OutPayload {
	// Client is true if this OutPayload is from client side.
	public get Client(): boolean {
		return this._fields.Client
	}

	public set Client(value: boolean) {
		this._fields.Client = value
	}

	// Payload is the payload with original type.  This may be modified after
	// the call to HandleRPC which provides the OutPayload returns and must be
	// copied if needed later.
	public get Payload(): any {
		return this._fields.Payload
	}

	public set Payload(value: any) {
		this._fields.Payload = value
	}

	// Length is the size of the uncompressed payload data. Does not include any
	// framing (gRPC or HTTP/2).
	public get Length(): number {
		return this._fields.Length
	}

	public set Length(value: number) {
		this._fields.Length = value
	}

	// CompressedLength is the size of the compressed payload data. Does not
	// include any framing (gRPC or HTTP/2). Same as Length if compression not
	// enabled.
	public get CompressedLength(): number {
		return this._fields.CompressedLength
	}

	public set CompressedLength(value: number) {
		this._fields.CompressedLength = value
	}

	// WireLength is the size of the compressed payload data plus gRPC framing.
	// Does not include HTTP/2 framing.
	public get WireLength(): number {
		return this._fields.WireLength
	}

	public set WireLength(value: number) {
		this._fields.WireLength = value
	}

	// SentTime is the time when the payload is sent.
	public get SentTime(): time.Time {
		return this._fields.SentTime
	}

	public set SentTime(value: time.Time) {
		this._fields.SentTime = value
	}

	public _fields: {
		Client: boolean
		Payload: any
		Length: number
		CompressedLength: number
		WireLength: number
		SentTime: time.Time
	}

	constructor(init?: Partial<{Client?: boolean, Payload?: any, Length?: number, CompressedLength?: number, WireLength?: number, SentTime?: time.Time}>, __goscriptValue?: boolean) {
		this._fields = {
			Client: init?.Client ?? (false as boolean),
			Payload: init?.Payload ?? (null! as any),
			Length: init?.Length ?? (0 as number),
			CompressedLength: init?.CompressedLength ?? (0 as number),
			WireLength: init?.WireLength ?? (0 as number),
			SentTime: init?.SentTime ? $.markAsStructValue($.cloneStructValue(init.SentTime)) : $.markAsStructValue(new time.Time())
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): OutPayload {
		return new OutPayload(this, true)
	}

	public __goscriptAssign(source: OutPayload): void {
		const target = this._fields
		const values = source._fields
		target.Client = values.Client
		target.Payload = $.assignFieldValue(target.Payload, values.Payload, { kind: $.TypeKind.Interface, methods: [] })
		target.Length = values.Length
		target.CompressedLength = values.CompressedLength
		target.WireLength = values.WireLength
		$.assignStruct(target.SentTime, values.SentTime)
	}

	public IsClient(): boolean {
		const s: OutPayload | $.VarRef<OutPayload> | null = this;
		return $.pointerValue<OutPayload>(s).Client
	}

	public isRPCStats(): void {
		const s: OutPayload | $.VarRef<OutPayload> | null = this;
	}

	static __typeInfo = $.registerStructType(
		"stats.OutPayload",
		() => new OutPayload(),
		() => [$.methodSignature("IsClient", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("isRPCStats", [], [], true)],
		OutPayload,
		() => [/* @__PURE__ */ $.structField("Client", /* @__PURE__ */ $.basicType("bool"), [0], 0, true), /* @__PURE__ */ $.structField("Payload", { kind: $.TypeKind.Interface, methods: [] }, [1], 8, true), /* @__PURE__ */ $.structField("Length", /* @__PURE__ */ $.basicType("int"), [2], 24, true), /* @__PURE__ */ $.structField("CompressedLength", /* @__PURE__ */ $.basicType("int"), [3], 32, true), /* @__PURE__ */ $.structField("WireLength", /* @__PURE__ */ $.basicType("int"), [4], 40, true), /* @__PURE__ */ $.structField("SentTime", "time.Time", [5], 48, true)]
	)
}

export class OutHeader {
	// Client is true if this OutHeader is from client side.
	public get Client(): boolean {
		return this._fields.Client
	}

	public set Client(value: boolean) {
		this._fields.Client = value
	}

	// Compression is the compression algorithm used for the RPC.
	public get Compression(): string {
		return this._fields.Compression
	}

	public set Compression(value: string) {
		this._fields.Compression = value
	}

	// Header contains the header metadata sent.
	public get Header(): metadata.MD {
		return this._fields.Header
	}

	public set Header(value: metadata.MD) {
		this._fields.Header = value
	}

	// The following fields are valid only if Client is true.
	// FullMethod is the full RPC method string, i.e., /package.service/method.
	public get FullMethod(): string {
		return this._fields.FullMethod
	}

	public set FullMethod(value: string) {
		this._fields.FullMethod = value
	}

	// RemoteAddr is the remote address of the corresponding connection.
	public get RemoteAddr(): net.Addr | null {
		return this._fields.RemoteAddr
	}

	public set RemoteAddr(value: net.Addr | null) {
		this._fields.RemoteAddr = value
	}

	// LocalAddr is the local address of the corresponding connection.
	public get LocalAddr(): net.Addr | null {
		return this._fields.LocalAddr
	}

	public set LocalAddr(value: net.Addr | null) {
		this._fields.LocalAddr = value
	}

	public _fields: {
		Client: boolean
		Compression: string
		Header: metadata.MD
		FullMethod: string
		RemoteAddr: net.Addr | null
		LocalAddr: net.Addr | null
	}

	constructor(init?: Partial<{Client?: boolean, Compression?: string, Header?: metadata.MD, FullMethod?: string, RemoteAddr?: net.Addr | null, LocalAddr?: net.Addr | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Client: init?.Client ?? (false as boolean),
			Compression: init?.Compression ?? ("" as string),
			Header: init?.Header ?? (null! as metadata.MD),
			FullMethod: init?.FullMethod ?? ("" as string),
			RemoteAddr: init?.RemoteAddr ?? (null! as net.Addr | null),
			LocalAddr: init?.LocalAddr ?? (null! as net.Addr | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): OutHeader {
		return new OutHeader(this, true)
	}

	public __goscriptAssign(source: OutHeader): void {
		const target = this._fields
		const values = source._fields
		target.Client = values.Client
		target.Compression = values.Compression
		target.Header = values.Header
		target.FullMethod = values.FullMethod
		target.RemoteAddr = $.assignFieldValue(target.RemoteAddr, values.RemoteAddr, "net.Addr")
		target.LocalAddr = $.assignFieldValue(target.LocalAddr, values.LocalAddr, "net.Addr")
	}

	public IsClient(): boolean {
		const s: OutHeader | $.VarRef<OutHeader> | null = this;
		return $.pointerValue<OutHeader>(s).Client
	}

	public isRPCStats(): void {
		const s: OutHeader | $.VarRef<OutHeader> | null = this;
	}

	static __typeInfo = $.registerStructType(
		"stats.OutHeader",
		() => new OutHeader(),
		() => [$.methodSignature("IsClient", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("isRPCStats", [], [], true)],
		OutHeader,
		() => [/* @__PURE__ */ $.structField("Client", /* @__PURE__ */ $.basicType("bool"), [0], 0, true), /* @__PURE__ */ $.structField("Compression", /* @__PURE__ */ $.basicType("string"), [1], 8, true), /* @__PURE__ */ $.structField("Header", "metadata.MD", [2], 24, true), /* @__PURE__ */ $.structField("FullMethod", /* @__PURE__ */ $.basicType("string"), [3], 32, true), /* @__PURE__ */ $.structField("RemoteAddr", "net.Addr", [4], 48, true), /* @__PURE__ */ $.structField("LocalAddr", "net.Addr", [5], 64, true)]
	)
}

export class OutTrailer {
	// Client is true if this OutTrailer is from client side.
	public get Client(): boolean {
		return this._fields.Client
	}

	public set Client(value: boolean) {
		this._fields.Client = value
	}

	// WireLength is the wire length of trailer.
	//
	// Deprecated: This field is never set. The length is not known when this message is
	// emitted because the trailer fields are compressed with hpack after that.
	public get WireLength(): number {
		return this._fields.WireLength
	}

	public set WireLength(value: number) {
		this._fields.WireLength = value
	}

	// Trailer contains the trailer metadata sent to the client. This
	// field is only valid if this OutTrailer is from the server side.
	public get Trailer(): metadata.MD {
		return this._fields.Trailer
	}

	public set Trailer(value: metadata.MD) {
		this._fields.Trailer = value
	}

	public _fields: {
		Client: boolean
		WireLength: number
		Trailer: metadata.MD
	}

	constructor(init?: Partial<{Client?: boolean, WireLength?: number, Trailer?: metadata.MD}>, __goscriptValue?: boolean) {
		this._fields = {
			Client: init?.Client ?? (false as boolean),
			WireLength: init?.WireLength ?? (0 as number),
			Trailer: init?.Trailer ?? (null! as metadata.MD)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): OutTrailer {
		return new OutTrailer(this, true)
	}

	public __goscriptAssign(source: OutTrailer): void {
		const target = this._fields
		const values = source._fields
		target.Client = values.Client
		target.WireLength = values.WireLength
		target.Trailer = values.Trailer
	}

	public IsClient(): boolean {
		const s: OutTrailer | $.VarRef<OutTrailer> | null = this;
		return $.pointerValue<OutTrailer>(s).Client
	}

	public isRPCStats(): void {
		const s: OutTrailer | $.VarRef<OutTrailer> | null = this;
	}

	static __typeInfo = $.registerStructType(
		"stats.OutTrailer",
		() => new OutTrailer(),
		() => [$.methodSignature("IsClient", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("isRPCStats", [], [], true)],
		OutTrailer,
		() => [/* @__PURE__ */ $.structField("Client", /* @__PURE__ */ $.basicType("bool"), [0], 0, true), /* @__PURE__ */ $.structField("WireLength", /* @__PURE__ */ $.basicType("int"), [1], 8, true), /* @__PURE__ */ $.structField("Trailer", "metadata.MD", [2], 16, true)]
	)
}

export class End {
	// Client is true if this End is from client side.
	public get Client(): boolean {
		return this._fields.Client
	}

	public set Client(value: boolean) {
		this._fields.Client = value
	}

	// BeginTime is the time when the RPC began.
	public get BeginTime(): time.Time {
		return this._fields.BeginTime
	}

	public set BeginTime(value: time.Time) {
		this._fields.BeginTime = value
	}

	// EndTime is the time when the RPC ends.
	public get EndTime(): time.Time {
		return this._fields.EndTime
	}

	public set EndTime(value: time.Time) {
		this._fields.EndTime = value
	}

	// Trailer contains the trailer metadata received from the server. This
	// field is only valid if this End is from the client side.
	// Deprecated: use Trailer in InTrailer instead.
	public get Trailer(): metadata.MD {
		return this._fields.Trailer
	}

	public set Trailer(value: metadata.MD) {
		this._fields.Trailer = value
	}

	// Error is the error the RPC ended with. It is an error generated from
	// status.Status and can be converted back to status.Status using
	// status.FromError if non-nil.
	public get Error(): $.GoError {
		return this._fields.Error
	}

	public set Error(value: $.GoError) {
		this._fields.Error = value
	}

	public _fields: {
		Client: boolean
		BeginTime: time.Time
		EndTime: time.Time
		Trailer: metadata.MD
		Error: $.GoError
	}

	constructor(init?: Partial<{Client?: boolean, BeginTime?: time.Time, EndTime?: time.Time, Trailer?: metadata.MD, Error?: $.GoError}>, __goscriptValue?: boolean) {
		this._fields = {
			Client: init?.Client ?? (false as boolean),
			BeginTime: init?.BeginTime ? $.markAsStructValue($.cloneStructValue(init.BeginTime)) : $.markAsStructValue(new time.Time()),
			EndTime: init?.EndTime ? $.markAsStructValue($.cloneStructValue(init.EndTime)) : $.markAsStructValue(new time.Time()),
			Trailer: init?.Trailer ?? (null! as metadata.MD),
			Error: init?.Error ?? (null! as $.GoError)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): End {
		return new End(this, true)
	}

	public __goscriptAssign(source: End): void {
		const target = this._fields
		const values = source._fields
		target.Client = values.Client
		$.assignStruct(target.BeginTime, values.BeginTime)
		$.assignStruct(target.EndTime, values.EndTime)
		target.Trailer = values.Trailer
		target.Error = $.assignFieldValue(target.Error, values.Error, "error")
	}

	public IsClient(): boolean {
		const s: End | $.VarRef<End> | null = this;
		return $.pointerValue<End>(s).Client
	}

	public isRPCStats(): void {
		const s: End | $.VarRef<End> | null = this;
	}

	static __typeInfo = $.registerStructType(
		"stats.End",
		() => new End(),
		() => [$.methodSignature("IsClient", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("isRPCStats", [], [], true)],
		End,
		() => [/* @__PURE__ */ $.structField("Client", /* @__PURE__ */ $.basicType("bool"), [0], 0, true), /* @__PURE__ */ $.structField("BeginTime", "time.Time", [1], 8, true), /* @__PURE__ */ $.structField("EndTime", "time.Time", [2], 32, true), /* @__PURE__ */ $.structField("Trailer", "metadata.MD", [3], 56, true), /* @__PURE__ */ $.structField("Error", "error", [4], 64, true)]
	)
}

export class ConnBegin {
	// Client is true if this ConnBegin is from client side.
	public get Client(): boolean {
		return this._fields.Client
	}

	public set Client(value: boolean) {
		this._fields.Client = value
	}

	public _fields: {
		Client: boolean
	}

	constructor(init?: Partial<{Client?: boolean}>, __goscriptValue?: boolean) {
		this._fields = {
			Client: init?.Client ?? (false as boolean)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ConnBegin {
		return new ConnBegin(this, true)
	}

	public __goscriptAssign(source: ConnBegin): void {
		const target = this._fields
		const values = source._fields
		target.Client = values.Client
	}

	public IsClient(): boolean {
		const s: ConnBegin | $.VarRef<ConnBegin> | null = this;
		return $.pointerValue<ConnBegin>(s).Client
	}

	public isConnStats(): void {
		const s: ConnBegin | $.VarRef<ConnBegin> | null = this;
	}

	static __typeInfo = $.registerStructType(
		"stats.ConnBegin",
		() => new ConnBegin(),
		() => [$.methodSignature("IsClient", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("isConnStats", [], [], true)],
		ConnBegin,
		() => [/* @__PURE__ */ $.structField("Client", /* @__PURE__ */ $.basicType("bool"), [0], 0, true)]
	)
}

export class ConnEnd {
	// Client is true if this ConnEnd is from client side.
	public get Client(): boolean {
		return this._fields.Client
	}

	public set Client(value: boolean) {
		this._fields.Client = value
	}

	public _fields: {
		Client: boolean
	}

	constructor(init?: Partial<{Client?: boolean}>, __goscriptValue?: boolean) {
		this._fields = {
			Client: init?.Client ?? (false as boolean)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ConnEnd {
		return new ConnEnd(this, true)
	}

	public __goscriptAssign(source: ConnEnd): void {
		const target = this._fields
		const values = source._fields
		target.Client = values.Client
	}

	public IsClient(): boolean {
		const s: ConnEnd | $.VarRef<ConnEnd> | null = this;
		return $.pointerValue<ConnEnd>(s).Client
	}

	public isConnStats(): void {
		const s: ConnEnd | $.VarRef<ConnEnd> | null = this;
	}

	static __typeInfo = $.registerStructType(
		"stats.ConnEnd",
		() => new ConnEnd(),
		() => [$.methodSignature("IsClient", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("isConnStats", [], [], true)],
		ConnEnd,
		() => [/* @__PURE__ */ $.structField("Client", /* @__PURE__ */ $.basicType("bool"), [0], 0, true)]
	)
}

export class incomingTagsKey {
	public _fields: {
	}

	constructor(init?: Partial<{}>, __goscriptValue?: boolean) {
		this._fields = {
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): incomingTagsKey {
		return new incomingTagsKey(this, true)
	}

	public __goscriptAssign(source: incomingTagsKey): void {
	}

	static __typeInfo = $.registerStructType(
		"stats.incomingTagsKey",
		() => new incomingTagsKey(),
		() => [],
		incomingTagsKey,
		() => []
	)
}

export class outgoingTagsKey {
	public _fields: {
	}

	constructor(init?: Partial<{}>, __goscriptValue?: boolean) {
		this._fields = {
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): outgoingTagsKey {
		return new outgoingTagsKey(this, true)
	}

	public __goscriptAssign(source: outgoingTagsKey): void {
	}

	static __typeInfo = $.registerStructType(
		"stats.outgoingTagsKey",
		() => new outgoingTagsKey(),
		() => [],
		outgoingTagsKey,
		() => []
	)
}

export class incomingTraceKey {
	public _fields: {
	}

	constructor(init?: Partial<{}>, __goscriptValue?: boolean) {
		this._fields = {
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): incomingTraceKey {
		return new incomingTraceKey(this, true)
	}

	public __goscriptAssign(source: incomingTraceKey): void {
	}

	static __typeInfo = $.registerStructType(
		"stats.incomingTraceKey",
		() => new incomingTraceKey(),
		() => [],
		incomingTraceKey,
		() => []
	)
}

export class outgoingTraceKey {
	public _fields: {
	}

	constructor(init?: Partial<{}>, __goscriptValue?: boolean) {
		this._fields = {
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): outgoingTraceKey {
		return new outgoingTraceKey(this, true)
	}

	public __goscriptAssign(source: outgoingTraceKey): void {
	}

	static __typeInfo = $.registerStructType(
		"stats.outgoingTraceKey",
		() => new outgoingTraceKey(),
		() => [],
		outgoingTraceKey,
		() => []
	)
}

export function SetTags(ctx: context.Context | null, b: $.Slice<number>): context.Context | null {
	return context.WithValue($.pointerValueOrNil(ctx)!, $.interfaceValue(new outgoingTagsKey(undefined, true), "stats.outgoingTagsKey", "stats.outgoingTagsKey"), $.interfaceValue(b, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))))
}

export async function Tags(ctx: context.Context | null): globalThis.Promise<$.Slice<number>> {
	let __goscriptTuple0: any = $.typeAssertTuple<$.Slice<number>>((__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(ctx)).Value($.interfaceValue(new incomingTagsKey(undefined, true), "stats.incomingTagsKey", "stats.incomingTagsKey")), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))
	let b: $.Slice<number> = __goscriptTuple0[0]
	return b
}

export function SetIncomingTags(ctx: context.Context | null, b: $.Slice<number>): context.Context | null {
	return context.WithValue($.pointerValueOrNil(ctx)!, $.interfaceValue(new incomingTagsKey(undefined, true), "stats.incomingTagsKey", "stats.incomingTagsKey"), $.interfaceValue(b, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))))
}

export async function OutgoingTags(ctx: context.Context | null): globalThis.Promise<$.Slice<number>> {
	let __goscriptTuple1: any = $.typeAssertTuple<$.Slice<number>>((__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(ctx)).Value($.interfaceValue(new outgoingTagsKey(undefined, true), "stats.outgoingTagsKey", "stats.outgoingTagsKey")), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))
	let b: $.Slice<number> = __goscriptTuple1[0]
	return b
}

export function SetTrace(ctx: context.Context | null, b: $.Slice<number>): context.Context | null {
	return context.WithValue($.pointerValueOrNil(ctx)!, $.interfaceValue(new outgoingTraceKey(undefined, true), "stats.outgoingTraceKey", "stats.outgoingTraceKey"), $.interfaceValue(b, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))))
}

export async function Trace(ctx: context.Context | null): globalThis.Promise<$.Slice<number>> {
	let __goscriptTuple2: any = $.typeAssertTuple<$.Slice<number>>((__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(ctx)).Value($.interfaceValue(new incomingTraceKey(undefined, true), "stats.incomingTraceKey", "stats.incomingTraceKey")), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))
	let b: $.Slice<number> = __goscriptTuple2[0]
	return b
}

export function SetIncomingTrace(ctx: context.Context | null, b: $.Slice<number>): context.Context | null {
	return context.WithValue($.pointerValueOrNil(ctx)!, $.interfaceValue(new incomingTraceKey(undefined, true), "stats.incomingTraceKey", "stats.incomingTraceKey"), $.interfaceValue(b, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))))
}

export async function OutgoingTrace(ctx: context.Context | null): globalThis.Promise<$.Slice<number>> {
	let __goscriptTuple3: any = $.typeAssertTuple<$.Slice<number>>((__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(ctx)).Value($.interfaceValue(new outgoingTraceKey(undefined, true), "stats.outgoingTraceKey", "stats.outgoingTraceKey")), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))
	let b: $.Slice<number> = __goscriptTuple3[0]
	return b
}

var __goscriptAwait: any
