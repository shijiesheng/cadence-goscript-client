// Generated file based on relay_messages.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as binary from "@goscript/encoding/binary/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as time from "@goscript/time/index.js"

import * as relay from "@goscript/github.com/uber/tchannel-go/relay/index.js"

import * as arg22 from "@goscript/github.com/uber/tchannel-go/thrift/arg2/index.js"

import * as typed from "@goscript/github.com/uber/tchannel-go/typed/index.js"

import type * as io from "@goscript/io/index.js"

import type * as sync from "@goscript/sync/index.js"

import * as __goscript_calloptions from "./calloptions.gs.ts"

import * as __goscript_checksum from "./checksum.gs.ts"

import * as __goscript_errors from "./errors.gs.ts"

import * as __goscript_fragmenting_writer from "./fragmenting_writer.gs.ts"

import * as __goscript_frame from "./frame.gs.ts"

import * as __goscript_messages from "./messages.gs.ts"

import * as __goscript_messagetype_string from "./messagetype_string.gs.ts"

import * as __goscript_relay from "./relay.gs.ts"

import * as __goscript_systemerrcode_string from "./systemerrcode_string.gs.ts"

import type * as __goscript_tracing from "./tracing.gs.ts"
import "@goscript/bytes/index.js"
import "@goscript/encoding/binary/index.js"
import "@goscript/fmt/index.js"
import "@goscript/time/index.js"
import "@goscript/github.com/uber/tchannel-go/relay/index.js"
import "@goscript/github.com/uber/tchannel-go/thrift/arg2/index.js"
import "@goscript/github.com/uber/tchannel-go/typed/index.js"
import "./calloptions.gs.ts"
import "./checksum.gs.ts"
import "./errors.gs.ts"
import "./fragmenting_writer.gs.ts"
import "./frame.gs.ts"
import "./messages.gs.ts"
import "./messagetype_string.gs.ts"
import "./relay.gs.ts"
import "./systemerrcode_string.gs.ts"

$.registerTypePackagePath("github.com/uber/tchannel-go", ["tchannel.lazyError", "tchannel.lazyCallRes", "tchannel.lazyCallReq"])

export class lazyError {
	public get Frame(): __goscript_frame.Frame | $.VarRef<__goscript_frame.Frame> | null {
		return this._fields.Frame
	}

	public set Frame(value: __goscript_frame.Frame | $.VarRef<__goscript_frame.Frame> | null) {
		this._fields.Frame = value
	}

	public _fields: {
		Frame: __goscript_frame.Frame | $.VarRef<__goscript_frame.Frame> | null
	}

	constructor(init?: Partial<{Frame?: __goscript_frame.Frame | $.VarRef<__goscript_frame.Frame> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Frame: init?.Frame ?? (null! as __goscript_frame.Frame | $.VarRef<__goscript_frame.Frame> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): lazyError {
		return new lazyError(this, true)
	}

	public __goscriptAssign(source: lazyError): void {
		const target = this._fields
		const values = source._fields
		target.Frame = values.Frame
	}

	public Code(): __goscript_errors.SystemErrCode {
		const e = this;
		return $.uint($.arrayIndex($.pointerValue<__goscript_frame.Frame>(e.Frame).Payload!, 0), 8)
	}

	public async ReadBody(header: any, r: any): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_frame.Frame>(this.Frame).ReadBody(header, r)
	}

	public async ReadIn(r: any): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_frame.Frame>(this.Frame).ReadIn(r)
	}

	public SizedPayload(): any {
		return $.pointerValue<__goscript_frame.Frame>(this.Frame).SizedPayload()
	}

	public async WriteOut(w: any): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_frame.Frame>(this.Frame).WriteOut(w)
	}

	public messageType(): any {
		return $.pointerValue<__goscript_frame.Frame>(this.Frame).messageType()
	}

	public read(msg: any): any {
		return $.pointerValue<__goscript_frame.Frame>(this.Frame).read(msg)
	}

	public write(msg: any): any {
		return $.pointerValue<__goscript_frame.Frame>(this.Frame).write(msg)
	}

	static __typeInfo = $.registerStructType(
		"tchannel.lazyError",
		() => new lazyError(),
		() => [$.methodSignature("Code", [], [/* @__PURE__ */ $.basicType("uint8", "tchannel.SystemErrCode")]), $.methodSignature("ReadBody", [["header", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["r", "io.Reader"]], ["error"]), $.methodSignature("ReadIn", [["r", "io.Reader"]], ["error"]), $.methodSignature("SizedPayload", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("WriteOut", [["w", "io.Writer"]], ["error"]), $.methodSignature("messageType", [], [/* @__PURE__ */ $.basicType("uint8", "tchannel.messageType")]), $.methodSignature("read", [["msg", "tchannel.message"]], ["error"]), $.methodSignature("write", [["msg", "tchannel.message"]], ["error"])],
		lazyError,
		() => [/* @__PURE__ */ $.structField("Frame", /* @__PURE__ */ $.pointerType("tchannel.Frame"), [0], 0, true, { anonymous: true })]
	)
}

export class lazyCallRes {
	public get Frame(): __goscript_frame.Frame | $.VarRef<__goscript_frame.Frame> | null {
		return this._fields.Frame
	}

	public set Frame(value: __goscript_frame.Frame | $.VarRef<__goscript_frame.Frame> | null) {
		this._fields.Frame = value
	}

	public get _as(): $.Slice<number> {
		return this._fields._as
	}

	public set _as(value: $.Slice<number>) {
		this._fields._as = value
	}

	public get arg2IsFragmented(): boolean {
		return this._fields.arg2IsFragmented
	}

	public set arg2IsFragmented(value: boolean) {
		this._fields.arg2IsFragmented = value
	}

	public get arg2Payload(): $.Slice<number> {
		return this._fields.arg2Payload
	}

	public set arg2Payload(value: $.Slice<number>) {
		this._fields.arg2Payload = value
	}

	public _fields: {
		Frame: __goscript_frame.Frame | $.VarRef<__goscript_frame.Frame> | null
		_as: $.Slice<number>
		arg2IsFragmented: boolean
		arg2Payload: $.Slice<number>
	}

	constructor(init?: Partial<{Frame?: __goscript_frame.Frame | $.VarRef<__goscript_frame.Frame> | null, _as?: $.Slice<number>, arg2IsFragmented?: boolean, arg2Payload?: $.Slice<number>}>, __goscriptValue?: boolean) {
		this._fields = {
			Frame: init?.Frame ?? (null! as __goscript_frame.Frame | $.VarRef<__goscript_frame.Frame> | null),
			_as: init?._as ?? (null! as $.Slice<number>),
			arg2IsFragmented: init?.arg2IsFragmented ?? (false as boolean),
			arg2Payload: init?.arg2Payload ?? (null! as $.Slice<number>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): lazyCallRes {
		return new lazyCallRes(this, true)
	}

	public __goscriptAssign(source: lazyCallRes): void {
		const target = this._fields
		const values = source._fields
		target.Frame = values.Frame
		target._as = values._as
		target.arg2IsFragmented = values.arg2IsFragmented
		target.arg2Payload = values.arg2Payload
	}

	public Arg2(): $.Slice<number> {
		const cr = this;
		return cr.arg2Payload
	}

	public Arg2IsFragmented(): boolean {
		const cr = this;
		return cr.arg2IsFragmented
	}

	public ArgScheme(): $.Slice<number> {
		const cr = this;
		return cr._as
	}

	public OK(): boolean {
		const cr = this;
		return isCallResOK(cr.Frame)
	}

	public async ReadBody(header: any, r: any): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_frame.Frame>(this.Frame).ReadBody(header, r)
	}

	public async ReadIn(r: any): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_frame.Frame>(this.Frame).ReadIn(r)
	}

	public SizedPayload(): any {
		return $.pointerValue<__goscript_frame.Frame>(this.Frame).SizedPayload()
	}

	public async WriteOut(w: any): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_frame.Frame>(this.Frame).WriteOut(w)
	}

	public messageType(): any {
		return $.pointerValue<__goscript_frame.Frame>(this.Frame).messageType()
	}

	public read(msg: any): any {
		return $.pointerValue<__goscript_frame.Frame>(this.Frame).read(msg)
	}

	public write(msg: any): any {
		return $.pointerValue<__goscript_frame.Frame>(this.Frame).write(msg)
	}

	static __typeInfo = $.registerStructType(
		"tchannel.lazyCallRes",
		() => new lazyCallRes(),
		() => [$.methodSignature("Arg2", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("Arg2IsFragmented", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("ArgScheme", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("OK", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("ReadBody", [["header", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["r", "io.Reader"]], ["error"]), $.methodSignature("ReadIn", [["r", "io.Reader"]], ["error"]), $.methodSignature("SizedPayload", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("WriteOut", [["w", "io.Writer"]], ["error"]), $.methodSignature("messageType", [], [/* @__PURE__ */ $.basicType("uint8", "tchannel.messageType")]), $.methodSignature("read", [["msg", "tchannel.message"]], ["error"]), $.methodSignature("write", [["msg", "tchannel.message"]], ["error"])],
		lazyCallRes,
		() => [/* @__PURE__ */ $.structField("Frame", /* @__PURE__ */ $.pointerType("tchannel.Frame"), [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("as", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [1], 8, false, { key: "_as", pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("arg2IsFragmented", /* @__PURE__ */ $.basicType("bool"), [2], 32, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("arg2Payload", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [3], 40, false, { pkgPath: "github.com/uber/tchannel-go" })]
	)
}

export class lazyCallReq {
	public get Frame(): __goscript_frame.Frame | $.VarRef<__goscript_frame.Frame> | null {
		return this._fields.Frame
	}

	public set Frame(value: __goscript_frame.Frame | $.VarRef<__goscript_frame.Frame> | null) {
		this._fields.Frame = value
	}

	public get checksumTypeOffset(): number {
		return this._fields.checksumTypeOffset
	}

	public set checksumTypeOffset(value: number) {
		this._fields.checksumTypeOffset = value
	}

	public get arg2StartOffset(): number {
		return this._fields.arg2StartOffset
	}

	public set arg2StartOffset(value: number) {
		this._fields.arg2StartOffset = value
	}

	public get arg2EndOffset(): number {
		return this._fields.arg2EndOffset
	}

	public set arg2EndOffset(value: number) {
		this._fields.arg2EndOffset = value
	}

	public get arg3StartOffset(): number {
		return this._fields.arg3StartOffset
	}

	public set arg3StartOffset(value: number) {
		this._fields.arg3StartOffset = value
	}

	public get caller(): $.Slice<number> {
		return this._fields.caller
	}

	public set caller(value: $.Slice<number>) {
		this._fields.caller = value
	}

	public get method(): $.Slice<number> {
		return this._fields.method
	}

	public set method(value: $.Slice<number>) {
		this._fields.method = value
	}

	public get delegate(): $.Slice<number> {
		return this._fields.delegate
	}

	public set delegate(value: $.Slice<number>) {
		this._fields.delegate = value
	}

	public get key(): $.Slice<number> {
		return this._fields.key
	}

	public set key(value: $.Slice<number>) {
		this._fields.key = value
	}

	public get _as(): $.Slice<number> {
		return this._fields._as
	}

	public set _as(value: $.Slice<number>) {
		this._fields._as = value
	}

	public get arg2Appends(): $.Slice<relay.KeyVal> {
		return this._fields.arg2Appends
	}

	public set arg2Appends(value: $.Slice<relay.KeyVal>) {
		this._fields.arg2Appends = value
	}

	public get checksumType(): __goscript_checksum.ChecksumType {
		return this._fields.checksumType
	}

	public set checksumType(value: __goscript_checksum.ChecksumType) {
		this._fields.checksumType = value
	}

	public get isArg2Fragmented(): boolean {
		return this._fields.isArg2Fragmented
	}

	public set isArg2Fragmented(value: boolean) {
		this._fields.isArg2Fragmented = value
	}

	// Intentionally an array to combine allocations with that of lazyCallReq
	public get arg2InitialBuf(): relay.KeyVal[] {
		return this._fields.arg2InitialBuf
	}

	public set arg2InitialBuf(value: relay.KeyVal[]) {
		this._fields.arg2InitialBuf = value
	}

	public _fields: {
		Frame: __goscript_frame.Frame | $.VarRef<__goscript_frame.Frame> | null
		checksumTypeOffset: number
		arg2StartOffset: number
		arg2EndOffset: number
		arg3StartOffset: number
		caller: $.Slice<number>
		method: $.Slice<number>
		delegate: $.Slice<number>
		key: $.Slice<number>
		_as: $.Slice<number>
		arg2Appends: $.Slice<relay.KeyVal>
		checksumType: __goscript_checksum.ChecksumType
		isArg2Fragmented: boolean
		arg2InitialBuf: relay.KeyVal[]
	}

	constructor(init?: Partial<{Frame?: __goscript_frame.Frame | $.VarRef<__goscript_frame.Frame> | null, checksumTypeOffset?: number, arg2StartOffset?: number, arg2EndOffset?: number, arg3StartOffset?: number, caller?: $.Slice<number>, method?: $.Slice<number>, delegate?: $.Slice<number>, key?: $.Slice<number>, _as?: $.Slice<number>, arg2Appends?: $.Slice<relay.KeyVal>, checksumType?: __goscript_checksum.ChecksumType, isArg2Fragmented?: boolean, arg2InitialBuf?: relay.KeyVal[]}>, __goscriptValue?: boolean) {
		this._fields = {
			Frame: init?.Frame ?? (null! as __goscript_frame.Frame | $.VarRef<__goscript_frame.Frame> | null),
			checksumTypeOffset: init?.checksumTypeOffset ?? (0 as number),
			arg2StartOffset: init?.arg2StartOffset ?? (0 as number),
			arg2EndOffset: init?.arg2EndOffset ?? (0 as number),
			arg3StartOffset: init?.arg3StartOffset ?? (0 as number),
			caller: init?.caller ?? (null! as $.Slice<number>),
			method: init?.method ?? (null! as $.Slice<number>),
			delegate: init?.delegate ?? (null! as $.Slice<number>),
			key: init?.key ?? (null! as $.Slice<number>),
			_as: init?._as ?? (null! as $.Slice<number>),
			arg2Appends: init?.arg2Appends ?? (null! as $.Slice<relay.KeyVal>),
			checksumType: init?.checksumType ?? (0 as __goscript_checksum.ChecksumType),
			isArg2Fragmented: init?.isArg2Fragmented ?? (false as boolean),
			arg2InitialBuf: init?.arg2InitialBuf !== undefined ? $.cloneArrayValue(init.arg2InitialBuf, /* @__PURE__ */ $.arrayType("relay.KeyVal", 1)) : $.arrayValue(globalThis.Array.from({ length: 1 }, () => new relay.KeyVal(undefined, true)), /* @__PURE__ */ $.arrayType("relay.KeyVal", 1))
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): lazyCallReq {
		return new lazyCallReq(this, true)
	}

	public __goscriptAssign(source: lazyCallReq): void {
		const target = this._fields
		const values = source._fields
		target.Frame = values.Frame
		target.checksumTypeOffset = values.checksumTypeOffset
		target.arg2StartOffset = values.arg2StartOffset
		target.arg2EndOffset = values.arg2EndOffset
		target.arg3StartOffset = values.arg3StartOffset
		target.caller = values.caller
		target.method = values.method
		target.delegate = values.delegate
		target.key = values.key
		target._as = values._as
		target.arg2Appends = values.arg2Appends
		target.checksumType = values.checksumType
		target.isArg2Fragmented = values.isArg2Fragmented
		target.arg2InitialBuf = $.assignFieldValue(target.arg2InitialBuf, values.arg2InitialBuf, /* @__PURE__ */ $.arrayType("relay.KeyVal", 1))
	}

	public Arg2Append(key: $.Slice<number>, val: $.Slice<number>): void {
		let f: lazyCallReq | $.VarRef<lazyCallReq> | null = this;
		const f$: lazyCallReq = f == null ? $.pointerTarget<lazyCallReq>(f) : (f as any).__isVarRef === true ? (f as any).value : (f as any).__goValue === undefined ? (f as any) : $.pointerTarget<lazyCallReq>(f);
		;(f$ as lazyCallReq).arg2Appends = $.appendOne((f$ as lazyCallReq).arg2Appends, new relay.KeyVal({Key: key, Val: val}, true))
	}

	public Arg2EndOffset(): [number, boolean] {
		const f: lazyCallReq | $.VarRef<lazyCallReq> | null = this;
		let hasMore: boolean = false
		const f$: lazyCallReq = f == null ? $.pointerTarget<lazyCallReq>(f) : (f as any).__isVarRef === true ? (f as any).value : (f as any).__goValue === undefined ? (f as any) : $.pointerTarget<lazyCallReq>(f)
		return [$.int((f$ as lazyCallReq).arg2EndOffset), (f$ as lazyCallReq).isArg2Fragmented]
	}

	public Arg2Iterator(): [arg22.KeyValIterator, $.GoError] {
		const f: lazyCallReq | $.VarRef<lazyCallReq> | null = this;
		const f$: lazyCallReq = f == null ? $.pointerTarget<lazyCallReq>(f) : (f as any).__isVarRef === true ? (f as any).value : (f as any).__goValue === undefined ? (f as any) : $.pointerTarget<lazyCallReq>(f)
		if (!bytes.Equal((f$ as lazyCallReq)._as, __goscript_get__tchanThriftValueBytes())) {
			return [new arg22.KeyValIterator(undefined, true), fmt.Errorf("%v: got %s", (__goscript_relay.errArg2ThriftOnly as any), $.interfaceValue((f$ as lazyCallReq)._as, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))))]
		}
		return arg22.NewKeyValIterator($.goSlice($.pointerValue<__goscript_frame.Frame>((f$ as lazyCallReq).Frame).Payload, (f$ as lazyCallReq).arg2StartOffset, (f$ as lazyCallReq).arg2EndOffset))
	}

	public Arg2StartOffset(): number {
		const f: lazyCallReq | $.VarRef<lazyCallReq> | null = this;
		return $.int($.pointerValue<lazyCallReq>(f).arg2StartOffset)
	}

	public Caller(): $.Slice<number> {
		const f: lazyCallReq | $.VarRef<lazyCallReq> | null = this;
		return $.pointerValue<lazyCallReq>(f).caller
	}

	public HasMoreFragments(): boolean {
		const f: lazyCallReq | $.VarRef<lazyCallReq> | null = this;
		return $.uint(($.arrayIndex($.pointerValue<__goscript_frame.Frame>($.pointerValue<lazyCallReq>(f).Frame).Payload!, 0) & 1), 8) != 0
	}

	public Method(): $.Slice<number> {
		const f: lazyCallReq | $.VarRef<lazyCallReq> | null = this;
		return $.pointerValue<lazyCallReq>(f).method
	}

	public RoutingDelegate(): $.Slice<number> {
		const f: lazyCallReq | $.VarRef<lazyCallReq> | null = this;
		return $.pointerValue<lazyCallReq>(f).delegate
	}

	public RoutingKey(): $.Slice<number> {
		const f: lazyCallReq | $.VarRef<lazyCallReq> | null = this;
		return $.pointerValue<lazyCallReq>(f).key
	}

	public Service(): $.Slice<number> {
		const f: lazyCallReq | $.VarRef<lazyCallReq> | null = this;
		const f$: lazyCallReq = f == null ? $.pointerTarget<lazyCallReq>(f) : (f as any).__isVarRef === true ? (f as any).value : (f as any).__goValue === undefined ? (f as any) : $.pointerTarget<lazyCallReq>(f)
		let l = $.arrayIndex($.pointerValue<__goscript_frame.Frame>((f$ as lazyCallReq).Frame).Payload!, 30)
		return $.goSlice($.pointerValue<__goscript_frame.Frame>((f$ as lazyCallReq).Frame).Payload, 31, 31 + $.int(l))
	}

	public SetTTL(d: time.Duration): void {
		const f: lazyCallReq | $.VarRef<lazyCallReq> | null = this;
		let ttl = $.uint($.int64Div(d, 1000000n), 32)
		$.markAsStructValue($.cloneStructValue($.pointerValue<any>(binary.BigEndian))).PutUint32($.goSlice($.pointerValue<__goscript_frame.Frame>($.pointerValue<lazyCallReq>(f).Frame).Payload, 1, 1 + 4), ttl)
	}

	public Span(): __goscript_tracing.Span {
		const f: lazyCallReq | $.VarRef<lazyCallReq> | null = this;
		return __goscript_messages.callReqSpan($.pointerValue<lazyCallReq>(f).Frame)
	}

	public TTL(): time.Duration {
		const f: lazyCallReq | $.VarRef<lazyCallReq> | null = this;
		let ttl = $.markAsStructValue($.cloneStructValue($.pointerValue<any>(binary.BigEndian))).Uint32($.goSlice($.pointerValue<__goscript_frame.Frame>($.pointerValue<lazyCallReq>(f).Frame).Payload, 1, 1 + 4))
		return $.int64Mul($.int64(ttl), 1000000n)
	}

	public arg2(): $.Slice<number> {
		const f: lazyCallReq | $.VarRef<lazyCallReq> | null = this;
		const f$: lazyCallReq = f == null ? $.pointerTarget<lazyCallReq>(f) : (f as any).__isVarRef === true ? (f as any).value : (f as any).__goValue === undefined ? (f as any) : $.pointerTarget<lazyCallReq>(f)
		return $.goSlice($.pointerValue<__goscript_frame.Frame>((f$ as lazyCallReq).Frame).Payload, (f$ as lazyCallReq).arg2StartOffset, (f$ as lazyCallReq).arg2EndOffset)
	}

	public arg3(): $.Slice<number> {
		const f: lazyCallReq | $.VarRef<lazyCallReq> | null = this;
		return $.goSlice($.pointerValue<__goscript_frame.Frame>($.pointerValue<lazyCallReq>(f).Frame).SizedPayload(), $.pointerValue<lazyCallReq>(f).arg3StartOffset, undefined)
	}

	public async ReadBody(header: any, r: any): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_frame.Frame>(this.Frame).ReadBody(header, r)
	}

	public async ReadIn(r: any): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_frame.Frame>(this.Frame).ReadIn(r)
	}

	public SizedPayload(): any {
		return $.pointerValue<__goscript_frame.Frame>(this.Frame).SizedPayload()
	}

	public async WriteOut(w: any): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_frame.Frame>(this.Frame).WriteOut(w)
	}

	public messageType(): any {
		return $.pointerValue<__goscript_frame.Frame>(this.Frame).messageType()
	}

	public read(msg: any): any {
		return $.pointerValue<__goscript_frame.Frame>(this.Frame).read(msg)
	}

	public write(msg: any): any {
		return $.pointerValue<__goscript_frame.Frame>(this.Frame).write(msg)
	}

	static __typeInfo = $.registerStructType(
		"tchannel.lazyCallReq",
		() => new lazyCallReq(),
		() => [$.methodSignature("Arg2Append", [["key", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["val", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [], true), $.methodSignature("Arg2EndOffset", [], [["_", /* @__PURE__ */ $.basicType("int")], ["hasMore", /* @__PURE__ */ $.basicType("bool")]], true), $.methodSignature("Arg2Iterator", [], ["arg2.KeyValIterator", "error"], true), $.methodSignature("Arg2StartOffset", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("Caller", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true), $.methodSignature("HasMoreFragments", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Method", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true), $.methodSignature("RoutingDelegate", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true), $.methodSignature("RoutingKey", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true), $.methodSignature("Service", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true), $.methodSignature("SetTTL", [["d", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], [], true), $.methodSignature("Span", [], ["tchannel.Span"], true), $.methodSignature("TTL", [], [/* @__PURE__ */ $.basicType("int64", "time.Duration")], true), $.methodSignature("arg2", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true), $.methodSignature("arg3", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true), $.methodSignature("ReadBody", [["header", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["r", "io.Reader"]], ["error"]), $.methodSignature("ReadIn", [["r", "io.Reader"]], ["error"]), $.methodSignature("SizedPayload", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("WriteOut", [["w", "io.Writer"]], ["error"]), $.methodSignature("messageType", [], [/* @__PURE__ */ $.basicType("uint8", "tchannel.messageType")]), $.methodSignature("read", [["msg", "tchannel.message"]], ["error"]), $.methodSignature("write", [["msg", "tchannel.message"]], ["error"])],
		lazyCallReq,
		() => [/* @__PURE__ */ $.structField("Frame", /* @__PURE__ */ $.pointerType("tchannel.Frame"), [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("checksumTypeOffset", /* @__PURE__ */ $.basicType("uint16"), [1], 8, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("arg2StartOffset", /* @__PURE__ */ $.basicType("uint16"), [2], 10, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("arg2EndOffset", /* @__PURE__ */ $.basicType("uint16"), [3], 12, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("arg3StartOffset", /* @__PURE__ */ $.basicType("uint16"), [4], 14, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("caller", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [5], 16, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("method", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [6], 40, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("delegate", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [7], 64, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("key", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [8], 88, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("as", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [9], 112, false, { key: "_as", pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("arg2Appends", /* @__PURE__ */ $.sliceType("relay.KeyVal"), [10], 136, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("checksumType", /* @__PURE__ */ $.basicType("uint8", "tchannel.ChecksumType"), [11], 160, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("isArg2Fragmented", /* @__PURE__ */ $.basicType("bool"), [12], 161, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("arg2InitialBuf", /* @__PURE__ */ $.arrayType("relay.KeyVal", 1), [13], 168, false, { pkgPath: "github.com/uber/tchannel-go" })]
	)
}

export const _flagsIndex: number = 0

export const _ttlIndex: number = 1

export const _ttlLen: number = 4

export const _spanIndex: number = 5

export const _spanLength: number = 25

export const _serviceLenIndex: number = 30

export const _serviceNameIndex: number = 31

export const _resCodeOK: number = 0

export const _resCodeIndex: number = 1

export const _errCodeIndex: number = 0

export var _callerNameKeyBytes: $.Slice<number>

export function __goscript_init__callerNameKeyBytes(): void {
	if (((_callerNameKeyBytes) as any) === undefined) {
		_callerNameKeyBytes = new Uint8Array([99, 110])
	}
}

export function __goscript_get__callerNameKeyBytes(): $.Slice<number> {
	if (((_callerNameKeyBytes) as any) === undefined) {
		__goscript_init__callerNameKeyBytes()
	}
	return _callerNameKeyBytes
}

export function __goscript_set__callerNameKeyBytes(__goscriptValue: $.Slice<number>): void {
	_callerNameKeyBytes = __goscriptValue
}

export var _routingDelegateKeyBytes: $.Slice<number>

export function __goscript_init__routingDelegateKeyBytes(): void {
	if (((_routingDelegateKeyBytes) as any) === undefined) {
		_routingDelegateKeyBytes = new Uint8Array([114, 100])
	}
}

export function __goscript_get__routingDelegateKeyBytes(): $.Slice<number> {
	if (((_routingDelegateKeyBytes) as any) === undefined) {
		__goscript_init__routingDelegateKeyBytes()
	}
	return _routingDelegateKeyBytes
}

export function __goscript_set__routingDelegateKeyBytes(__goscriptValue: $.Slice<number>): void {
	_routingDelegateKeyBytes = __goscriptValue
}

export var _routingKeyKeyBytes: $.Slice<number>

export function __goscript_init__routingKeyKeyBytes(): void {
	if (((_routingKeyKeyBytes) as any) === undefined) {
		_routingKeyKeyBytes = new Uint8Array([114, 107])
	}
}

export function __goscript_get__routingKeyKeyBytes(): $.Slice<number> {
	if (((_routingKeyKeyBytes) as any) === undefined) {
		__goscript_init__routingKeyKeyBytes()
	}
	return _routingKeyKeyBytes
}

export function __goscript_set__routingKeyKeyBytes(__goscriptValue: $.Slice<number>): void {
	_routingKeyKeyBytes = __goscriptValue
}

export var _argSchemeKeyBytes: $.Slice<number>

export function __goscript_init__argSchemeKeyBytes(): void {
	if (((_argSchemeKeyBytes) as any) === undefined) {
		_argSchemeKeyBytes = new Uint8Array([97, 115])
	}
}

export function __goscript_get__argSchemeKeyBytes(): $.Slice<number> {
	if (((_argSchemeKeyBytes) as any) === undefined) {
		__goscript_init__argSchemeKeyBytes()
	}
	return _argSchemeKeyBytes
}

export function __goscript_set__argSchemeKeyBytes(__goscriptValue: $.Slice<number>): void {
	_argSchemeKeyBytes = __goscriptValue
}

export var _tchanThriftValueBytes: $.Slice<number>

export function __goscript_init__tchanThriftValueBytes(): void {
	if (((_tchanThriftValueBytes) as any) === undefined) {
		_tchanThriftValueBytes = new Uint8Array([116, 104, 114, 105, 102, 116])
	}
}

export function __goscript_get__tchanThriftValueBytes(): $.Slice<number> {
	if (((_tchanThriftValueBytes) as any) === undefined) {
		__goscript_init__tchanThriftValueBytes()
	}
	return _tchanThriftValueBytes
}

export function __goscript_set__tchanThriftValueBytes(__goscriptValue: $.Slice<number>): void {
	_tchanThriftValueBytes = __goscriptValue
}

export function newLazyError(f: __goscript_frame.Frame | $.VarRef<__goscript_frame.Frame> | null): lazyError {
	{
		let msgType = $.pointerValue<__goscript_frame.Frame>(f).Header.messageType
		if (msgType != 255) {
			$.panic((fmt.Errorf("newLazyError called for wrong messageType: %v", $.namedValueInterfaceValue<any>(msgType, "tchannel.messageType", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())) as any))
		}
	}
	return new lazyError({Frame: f}, true)
}

export function newLazyCallRes(f: __goscript_frame.Frame | $.VarRef<__goscript_frame.Frame> | null): [lazyCallRes, $.GoError] {
	{
		let msgType = $.pointerValue<__goscript_frame.Frame>(f).Header.messageType
		if (msgType != 4) {
			$.panic((fmt.Errorf("newLazyCallRes called for wrong messageType: %v", $.namedValueInterfaceValue<any>(msgType, "tchannel.messageType", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())) as any))
		}
	}

	let rbuf: typed.ReadBuffer | $.VarRef<typed.ReadBuffer> | null = typed.NewReadBuffer((f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as __goscript_frame.Frame).SizedPayload() : __goscript_frame.Frame.prototype.SizedPayload.call(f)))
	void (rbuf !== null && (rbuf as any).__isVarRef !== true && (rbuf as any).__goValue === undefined ? ((rbuf as any) as typed.ReadBuffer).SkipBytes(1) : typed.ReadBuffer.prototype.SkipBytes.call(rbuf, 1))
	void (rbuf !== null && (rbuf as any).__isVarRef !== true && (rbuf as any).__goValue === undefined ? ((rbuf as any) as typed.ReadBuffer).SkipBytes(1) : typed.ReadBuffer.prototype.SkipBytes.call(rbuf, 1))
	void (rbuf !== null && (rbuf as any).__isVarRef !== true && (rbuf as any).__goValue === undefined ? ((rbuf as any) as typed.ReadBuffer).SkipBytes(25) : typed.ReadBuffer.prototype.SkipBytes.call(rbuf, 25))

	let _as: $.Slice<number> = null! as $.Slice<number>
	let nh = $.int((rbuf !== null && (rbuf as any).__isVarRef !== true && (rbuf as any).__goValue === undefined ? ((rbuf as any) as typed.ReadBuffer).ReadSingleByte() : typed.ReadBuffer.prototype.ReadSingleByte.call(rbuf)))
	for (let i = 0; i < nh; i++) {
		let keyLen = $.int((rbuf !== null && (rbuf as any).__isVarRef !== true && (rbuf as any).__goValue === undefined ? ((rbuf as any) as typed.ReadBuffer).ReadSingleByte() : typed.ReadBuffer.prototype.ReadSingleByte.call(rbuf)))
		let key: $.Slice<number> = (rbuf !== null && (rbuf as any).__isVarRef !== true && (rbuf as any).__goValue === undefined ? ((rbuf as any) as typed.ReadBuffer).ReadBytes(keyLen) : typed.ReadBuffer.prototype.ReadBytes.call(rbuf, keyLen))
		let valLen = $.int((rbuf !== null && (rbuf as any).__isVarRef !== true && (rbuf as any).__goValue === undefined ? ((rbuf as any) as typed.ReadBuffer).ReadSingleByte() : typed.ReadBuffer.prototype.ReadSingleByte.call(rbuf)))
		let val: $.Slice<number> = (rbuf !== null && (rbuf as any).__isVarRef !== true && (rbuf as any).__goValue === undefined ? ((rbuf as any) as typed.ReadBuffer).ReadBytes(valLen) : typed.ReadBuffer.prototype.ReadBytes.call(rbuf, valLen))

		if (bytes.Equal(key, __goscript_get__argSchemeKeyBytes())) {
			_as = val
			continue
		}
	}

	let csumtype = $.uint((rbuf !== null && (rbuf as any).__isVarRef !== true && (rbuf as any).__goValue === undefined ? ((rbuf as any) as typed.ReadBuffer).ReadSingleByte() : typed.ReadBuffer.prototype.ReadSingleByte.call(rbuf)), 8)
	void (rbuf !== null && (rbuf as any).__isVarRef !== true && (rbuf as any).__goValue === undefined ? ((rbuf as any) as typed.ReadBuffer).SkipBytes(__goscript_checksum.ChecksumType_ChecksumSize(csumtype)) : typed.ReadBuffer.prototype.SkipBytes.call(rbuf, __goscript_checksum.ChecksumType_ChecksumSize(csumtype)))

	// arg1: ignored
	let narg1 = $.int((rbuf !== null && (rbuf as any).__isVarRef !== true && (rbuf as any).__goValue === undefined ? ((rbuf as any) as typed.ReadBuffer).ReadUint16() : typed.ReadBuffer.prototype.ReadUint16.call(rbuf)))
	void (rbuf !== null && (rbuf as any).__isVarRef !== true && (rbuf as any).__goValue === undefined ? ((rbuf as any) as typed.ReadBuffer).SkipBytes(narg1) : typed.ReadBuffer.prototype.SkipBytes.call(rbuf, narg1))

	// arg2: keep track of payload
	let narg2 = $.int((rbuf !== null && (rbuf as any).__isVarRef !== true && (rbuf as any).__goValue === undefined ? ((rbuf as any) as typed.ReadBuffer).ReadUint16() : typed.ReadBuffer.prototype.ReadUint16.call(rbuf)))
	let arg2Payload: $.Slice<number> = (rbuf !== null && (rbuf as any).__isVarRef !== true && (rbuf as any).__goValue === undefined ? ((rbuf as any) as typed.ReadBuffer).ReadBytes(narg2) : typed.ReadBuffer.prototype.ReadBytes.call(rbuf, narg2))
	let arg2IsFragmented = ((rbuf !== null && (rbuf as any).__isVarRef !== true && (rbuf as any).__goValue === undefined ? ((rbuf as any) as typed.ReadBuffer).BytesRemaining() : typed.ReadBuffer.prototype.BytesRemaining.call(rbuf)) == 0) && hasMoreFragments(f)

	// arg3: ignored

	// Make sure we didn't hit any issues reading the buffer
	{
		let err = (rbuf !== null && (rbuf as any).__isVarRef !== true && (rbuf as any).__goValue === undefined ? ((rbuf as any) as typed.ReadBuffer).Err() : typed.ReadBuffer.prototype.Err.call(rbuf))
		if (err != null) {
			return [new lazyCallRes(undefined, true), fmt.Errorf("read response frame: %v", (err as any))]
		}
	}

	return [new lazyCallRes({Frame: f, _as: _as, arg2IsFragmented: arg2IsFragmented, arg2Payload: arg2Payload}, true), null]
}

export function newLazyCallReq(f: __goscript_frame.Frame | $.VarRef<__goscript_frame.Frame> | null): [lazyCallReq | $.VarRef<lazyCallReq> | null, $.GoError] {
	{
		let msgType = $.pointerValue<__goscript_frame.Frame>(f).Header.messageType
		if (msgType != 3) {
			$.panic((fmt.Errorf("newLazyCallReq called for wrong messageType: %v", $.namedValueInterfaceValue<any>(msgType, "tchannel.messageType", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())) as any))
		}
	}

	let cr: lazyCallReq | $.VarRef<lazyCallReq> | null = new lazyCallReq({Frame: f})
	let cr$: lazyCallReq = cr == null ? $.pointerTarget<lazyCallReq>(cr) : (cr as any).__isVarRef === true ? (cr as any).value : (cr as any).__goValue === undefined ? (cr as any) : $.pointerTarget<lazyCallReq>(cr);
	;(cr$ as lazyCallReq).arg2Appends = $.goSlice((cr$ as lazyCallReq).arg2InitialBuf, undefined, 0)

	let rbuf: typed.ReadBuffer | $.VarRef<typed.ReadBuffer> | null = typed.NewReadBuffer((f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as __goscript_frame.Frame).SizedPayload() : __goscript_frame.Frame.prototype.SizedPayload.call(f)))
	void (rbuf !== null && (rbuf as any).__isVarRef !== true && (rbuf as any).__goValue === undefined ? ((rbuf as any) as typed.ReadBuffer).SkipBytes(30) : typed.ReadBuffer.prototype.SkipBytes.call(rbuf, 30))

	// service~1
	let serviceLen = (rbuf !== null && (rbuf as any).__isVarRef !== true && (rbuf as any).__goValue === undefined ? ((rbuf as any) as typed.ReadBuffer).ReadSingleByte() : typed.ReadBuffer.prototype.ReadSingleByte.call(rbuf))
	void (rbuf !== null && (rbuf as any).__isVarRef !== true && (rbuf as any).__goValue === undefined ? ((rbuf as any) as typed.ReadBuffer).SkipBytes($.int(serviceLen)) : typed.ReadBuffer.prototype.SkipBytes.call(rbuf, $.int(serviceLen)))

	// nh:1 (hk~1 hv~1){nh}
	let numHeaders = $.int((rbuf !== null && (rbuf as any).__isVarRef !== true && (rbuf as any).__goValue === undefined ? ((rbuf as any) as typed.ReadBuffer).ReadSingleByte() : typed.ReadBuffer.prototype.ReadSingleByte.call(rbuf)))
	for (let i = 0; i < numHeaders; i++) {
		let keyLen = $.int((rbuf !== null && (rbuf as any).__isVarRef !== true && (rbuf as any).__goValue === undefined ? ((rbuf as any) as typed.ReadBuffer).ReadSingleByte() : typed.ReadBuffer.prototype.ReadSingleByte.call(rbuf)))
		let key: $.Slice<number> = (rbuf !== null && (rbuf as any).__isVarRef !== true && (rbuf as any).__goValue === undefined ? ((rbuf as any) as typed.ReadBuffer).ReadBytes(keyLen) : typed.ReadBuffer.prototype.ReadBytes.call(rbuf, keyLen))

		let valLen = $.int((rbuf !== null && (rbuf as any).__isVarRef !== true && (rbuf as any).__goValue === undefined ? ((rbuf as any) as typed.ReadBuffer).ReadSingleByte() : typed.ReadBuffer.prototype.ReadSingleByte.call(rbuf)))
		let val: $.Slice<number> = (rbuf !== null && (rbuf as any).__isVarRef !== true && (rbuf as any).__goValue === undefined ? ((rbuf as any) as typed.ReadBuffer).ReadBytes(valLen) : typed.ReadBuffer.prototype.ReadBytes.call(rbuf, valLen))

		if (bytes.Equal(key, __goscript_get__argSchemeKeyBytes())) {
			;(cr$ as lazyCallReq)._as = val
		} else {
			if (bytes.Equal(key, __goscript_get__callerNameKeyBytes())) {
				;(cr$ as lazyCallReq).caller = val
			} else {
				if (bytes.Equal(key, __goscript_get__routingDelegateKeyBytes())) {
					;(cr$ as lazyCallReq).delegate = val
				} else {
					if (bytes.Equal(key, __goscript_get__routingKeyKeyBytes())) {
						;(cr$ as lazyCallReq).key = val
					}
				}
			}
		}
	}

	// csumtype:1 (csum:4){0,1} arg1~2 arg2~2 arg3~2
	;(cr$ as lazyCallReq).checksumTypeOffset = $.uint((rbuf !== null && (rbuf as any).__isVarRef !== true && (rbuf as any).__goValue === undefined ? ((rbuf as any) as typed.ReadBuffer).BytesRead() : typed.ReadBuffer.prototype.BytesRead.call(rbuf)), 16);
	;(cr$ as lazyCallReq).checksumType = $.uint((rbuf !== null && (rbuf as any).__isVarRef !== true && (rbuf as any).__goValue === undefined ? ((rbuf as any) as typed.ReadBuffer).ReadSingleByte() : typed.ReadBuffer.prototype.ReadSingleByte.call(rbuf)), 8)
	void (rbuf !== null && (rbuf as any).__isVarRef !== true && (rbuf as any).__goValue === undefined ? ((rbuf as any) as typed.ReadBuffer).SkipBytes(__goscript_checksum.ChecksumType_ChecksumSize((cr$ as lazyCallReq).checksumType)) : typed.ReadBuffer.prototype.SkipBytes.call(rbuf, __goscript_checksum.ChecksumType_ChecksumSize((cr$ as lazyCallReq).checksumType)))

	// arg1~2
	let arg1Len = $.int((rbuf !== null && (rbuf as any).__isVarRef !== true && (rbuf as any).__goValue === undefined ? ((rbuf as any) as typed.ReadBuffer).ReadUint16() : typed.ReadBuffer.prototype.ReadUint16.call(rbuf)));
	;(cr$ as lazyCallReq).method = (rbuf !== null && (rbuf as any).__isVarRef !== true && (rbuf as any).__goValue === undefined ? ((rbuf as any) as typed.ReadBuffer).ReadBytes(arg1Len) : typed.ReadBuffer.prototype.ReadBytes.call(rbuf, arg1Len))

	// arg2~2
	let arg2Len = (rbuf !== null && (rbuf as any).__isVarRef !== true && (rbuf as any).__goValue === undefined ? ((rbuf as any) as typed.ReadBuffer).ReadUint16() : typed.ReadBuffer.prototype.ReadUint16.call(rbuf));
	;(cr$ as lazyCallReq).arg2StartOffset = $.uint((rbuf !== null && (rbuf as any).__isVarRef !== true && (rbuf as any).__goValue === undefined ? ((rbuf as any) as typed.ReadBuffer).BytesRead() : typed.ReadBuffer.prototype.BytesRead.call(rbuf)), 16);
	;(cr$ as lazyCallReq).arg2EndOffset = $.uint((((cr$ as lazyCallReq).arg2StartOffset + arg2Len) & 0xffff), 16)

	// arg2 is fragmented if we don't see arg3 in this frame.
	void (rbuf !== null && (rbuf as any).__isVarRef !== true && (rbuf as any).__goValue === undefined ? ((rbuf as any) as typed.ReadBuffer).SkipBytes($.int(arg2Len)) : typed.ReadBuffer.prototype.SkipBytes.call(rbuf, $.int(arg2Len)));
	;(cr$ as lazyCallReq).isArg2Fragmented = ((rbuf !== null && (rbuf as any).__isVarRef !== true && (rbuf as any).__goValue === undefined ? ((rbuf as any) as typed.ReadBuffer).BytesRemaining() : typed.ReadBuffer.prototype.BytesRemaining.call(rbuf)) == 0) && (cr !== null && (cr as any).__isVarRef !== true && (cr as any).__goValue === undefined ? ((cr as any) as lazyCallReq).HasMoreFragments() : lazyCallReq.prototype.HasMoreFragments.call(cr))

	if (!(cr$ as lazyCallReq).isArg2Fragmented) {
		// arg3~2
		void (rbuf !== null && (rbuf as any).__isVarRef !== true && (rbuf as any).__goValue === undefined ? ((rbuf as any) as typed.ReadBuffer).SkipBytes(2) : typed.ReadBuffer.prototype.SkipBytes.call(rbuf, 2));
		;(cr$ as lazyCallReq).arg3StartOffset = $.uint((rbuf !== null && (rbuf as any).__isVarRef !== true && (rbuf as any).__goValue === undefined ? ((rbuf as any) as typed.ReadBuffer).BytesRead() : typed.ReadBuffer.prototype.BytesRead.call(rbuf)), 16)
	}

	if ((rbuf !== null && (rbuf as any).__isVarRef !== true && (rbuf as any).__goValue === undefined ? ((rbuf as any) as typed.ReadBuffer).Err() : typed.ReadBuffer.prototype.Err.call(rbuf)) != null) {
		return [null, (rbuf !== null && (rbuf as any).__isVarRef !== true && (rbuf as any).__goValue === undefined ? ((rbuf as any) as typed.ReadBuffer).Err() : typed.ReadBuffer.prototype.Err.call(rbuf))]
	}

	return [cr, null]
}

export function finishesCall(f: __goscript_frame.Frame | $.VarRef<__goscript_frame.Frame> | null): boolean {
	switch ((f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as __goscript_frame.Frame).messageType() : __goscript_frame.Frame.prototype.messageType.call(f))) {
		case 255:
		case 192:
		{
			return true
			break
		}
		case 4:
		case 20:
		{
			let flags = $.arrayIndex($.pointerValue<__goscript_frame.Frame>(f).Payload!, 0)
			return $.uint((flags & 1), 8) == 0
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

export function isCallResOK(f: __goscript_frame.Frame | $.VarRef<__goscript_frame.Frame> | null): boolean {
	return $.arrayIndex($.pointerValue<__goscript_frame.Frame>(f).Payload!, 1) == 0
}

export function hasMoreFragments(f: __goscript_frame.Frame | $.VarRef<__goscript_frame.Frame> | null): boolean {
	return $.uint(($.arrayIndex($.pointerValue<__goscript_frame.Frame>(f).Payload!, 0) & 1), 8) != 0
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({String: (receiver: any, ...args: any[]) => (__goscript_messagetype_string.messageType_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.basicType("uint8", "tchannel.messageType"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])])
}
