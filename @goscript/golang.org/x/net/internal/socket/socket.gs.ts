// Generated file based on socket.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as errors from "@goscript/errors/index.js"

import * as net from "@goscript/net/index.js"

import * as os from "@goscript/os/index.js"

import * as syscall from "@goscript/syscall/index.js"

import * as runtime from "@goscript/runtime/index.js"

import * as unsafe from "@goscript/unsafe/index.js"

import * as binary from "@goscript/encoding/binary/index.js"

import * as __goscript_cmsghdr_stub from "./cmsghdr_stub.gs.ts"

import type * as __goscript_norace from "./norace.gs.ts"

import * as __goscript_rawconn from "./rawconn.gs.ts"

import * as __goscript_rawconn_nommsg from "./rawconn_nommsg.gs.ts"

import * as __goscript_rawconn_nomsg from "./rawconn_nomsg.gs.ts"

import * as __goscript_sys from "./sys.gs.ts"

import * as __goscript_sys_stub from "./sys_stub.gs.ts"
import "@goscript/errors/index.js"
import "@goscript/net/index.js"
import "@goscript/os/index.js"
import "@goscript/syscall/index.js"
import "@goscript/runtime/index.js"
import "@goscript/unsafe/index.js"
import "@goscript/encoding/binary/index.js"
import "./cmsghdr_stub.gs.ts"
import "./rawconn.gs.ts"
import "./rawconn_nommsg.gs.ts"
import "./rawconn_nomsg.gs.ts"
import "./sys.gs.ts"
import "./sys_stub.gs.ts"

$.registerTypePackagePath("golang.org/x/net/internal/socket", ["socket.Option", "socket.ControlMessage", "socket.Message"])

export type ControlMessage = $.Slice<number>

$.registerNamedType("socket.ControlMessage", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")));

$.registerNamedValueType(
	"socket.ControlMessage",
	{Data: (receiver: any, ...args: any[]) => (ControlMessage_Data as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Marshal: (receiver: any, ...args: any[]) => (ControlMessage_Marshal as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), MarshalHeader: (receiver: any, ...args: any[]) => (ControlMessage_MarshalHeader as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Next: (receiver: any, ...args: any[]) => (ControlMessage_Next as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Parse: (receiver: any, ...args: any[]) => (ControlMessage_Parse as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), ParseHeader: (receiver: any, ...args: any[]) => (ControlMessage_ParseHeader as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Data", [["dataLen", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("Marshal", [["lvl", /* @__PURE__ */ $.basicType("int")], ["typ", /* @__PURE__ */ $.basicType("int")], ["data", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "socket.ControlMessage"), "error"]), $.methodSignature("MarshalHeader", [["lvl", /* @__PURE__ */ $.basicType("int")], ["typ", /* @__PURE__ */ $.basicType("int")], ["dataLen", /* @__PURE__ */ $.basicType("int")]], ["error"]), $.methodSignature("Next", [["dataLen", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "socket.ControlMessage")]), $.methodSignature("Parse", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "socket.ControlMessage")), "error"]), $.methodSignature("ParseHeader", [], [["lvl", /* @__PURE__ */ $.basicType("int")], ["typ", /* @__PURE__ */ $.basicType("int")], ["dataLen", /* @__PURE__ */ $.basicType("int")], ["err", "error"]])]
);

$.registerNamedValueType(
	"*socket.ControlMessage",
	{Data: (receiver: any, ...args: any[]) => (ControlMessage_Data as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Marshal: (receiver: any, ...args: any[]) => (ControlMessage_Marshal as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), MarshalHeader: (receiver: any, ...args: any[]) => (ControlMessage_MarshalHeader as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Next: (receiver: any, ...args: any[]) => (ControlMessage_Next as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Parse: (receiver: any, ...args: any[]) => (ControlMessage_Parse as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), ParseHeader: (receiver: any, ...args: any[]) => (ControlMessage_ParseHeader as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Data", [["dataLen", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("Marshal", [["lvl", /* @__PURE__ */ $.basicType("int")], ["typ", /* @__PURE__ */ $.basicType("int")], ["data", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "socket.ControlMessage"), "error"]), $.methodSignature("MarshalHeader", [["lvl", /* @__PURE__ */ $.basicType("int")], ["typ", /* @__PURE__ */ $.basicType("int")], ["dataLen", /* @__PURE__ */ $.basicType("int")]], ["error"]), $.methodSignature("Next", [["dataLen", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "socket.ControlMessage")]), $.methodSignature("Parse", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "socket.ControlMessage")), "error"]), $.methodSignature("ParseHeader", [], [["lvl", /* @__PURE__ */ $.basicType("int")], ["typ", /* @__PURE__ */ $.basicType("int")], ["dataLen", /* @__PURE__ */ $.basicType("int")], ["err", "error"]])]
);

export class Option {
	public get Level(): number {
		return this._fields.Level
	}

	public set Level(value: number) {
		this._fields.Level = value
	}

	public get Name(): number {
		return this._fields.Name
	}

	public set Name(value: number) {
		this._fields.Name = value
	}

	public get Len(): number {
		return this._fields.Len
	}

	public set Len(value: number) {
		this._fields.Len = value
	}

	public _fields: {
		Level: number
		Name: number
		Len: number
	}

	constructor(init?: Partial<{Level?: number, Name?: number, Len?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Level: init?.Level ?? (0 as number),
			Name: init?.Name ?? (0 as number),
			Len: init?.Len ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Option {
		return new Option(this, true)
	}

	public __goscriptAssign(source: Option): void {
		const target = this._fields
		const values = source._fields
		target.Level = values.Level
		target.Name = values.Name
		target.Len = values.Len
	}

	public async Get(c: __goscript_rawconn.Conn | $.VarRef<__goscript_rawconn.Conn> | null, b: $.Slice<number>): globalThis.Promise<[number, $.GoError]> {
		const o: Option | $.VarRef<Option> | null = this;
		const o$: Option = o == null ? $.pointerTarget<Option>(o) : (o as any).__isVarRef === true ? (o as any).value : (o as any).__goValue === undefined ? (o as any) : $.pointerTarget<Option>(o)
		if (((o$ as Option).Name < 1) || ((o$ as Option).Len < 1)) {
			return [0, errors.New("invalid option")]
		}
		if ($.sliceLen(b) < (o$ as Option).Len) {
			return [0, errors.New("short buffer")]
		}
		return (o !== null && (o as any).__isVarRef !== true && (o as any).__goValue === undefined ? ((o as any) as Option)["get"](c, b) : Option.prototype.get.call(o, c, b))
	}

	public async GetInt(c: __goscript_rawconn.Conn | $.VarRef<__goscript_rawconn.Conn> | null): globalThis.Promise<[number, $.GoError]> {
		const o: Option | $.VarRef<Option> | null = this;
		const o$: Option = o == null ? $.pointerTarget<Option>(o) : (o as any).__isVarRef === true ? (o as any).value : (o as any).__goValue === undefined ? (o as any) : $.pointerTarget<Option>(o)
		if (((o$ as Option).Len != 1) && ((o$ as Option).Len != 4)) {
			return [0, errors.New("invalid option")]
		}
		let b: $.Slice<number> = null! as $.Slice<number>
		let bb: Uint8Array = $.arrayValue(new Uint8Array(4))
		if ((o$ as Option).Len == 1) {
			b = $.goSlice(bb, undefined, 1)
		} else {
			b = $.goSlice(bb, undefined, 4)
		}
		let [n, err] = await (o !== null && (o as any).__isVarRef !== true && (o as any).__goValue === undefined ? ((o as any) as Option)["get"](c, b) : Option.prototype.get.call(o, c, b))
		if (err != null) {
			return [0, err]
		}
		if (n != (o$ as Option).Len) {
			return [0, errors.New("invalid option length")]
		}
		if ((o$ as Option).Len == 1) {
			return [$.int($.arrayIndex(b!, 0)), null]
		}
		return [$.int((__goscriptAwait = $.pointerValue<Exclude<binary.ByteOrder, null>>(__goscript_sys.NativeEndian).Uint32($.goSlice(b, undefined, 4)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)), null]
	}

	public async Set(c: __goscript_rawconn.Conn | $.VarRef<__goscript_rawconn.Conn> | null, b: $.Slice<number>): globalThis.Promise<$.GoError> {
		const o: Option | $.VarRef<Option> | null = this;
		const o$: Option = o == null ? $.pointerTarget<Option>(o) : (o as any).__isVarRef === true ? (o as any).value : (o as any).__goValue === undefined ? (o as any) : $.pointerTarget<Option>(o)
		if (((o$ as Option).Name < 1) || ((o$ as Option).Len < 1)) {
			return errors.New("invalid option")
		}
		if ($.sliceLen(b) < (o$ as Option).Len) {
			return errors.New("short buffer")
		}
		return (o !== null && (o as any).__isVarRef !== true && (o as any).__goValue === undefined ? ((o as any) as Option)["set"](c, b) : Option.prototype.set.call(o, c, b))
	}

	public async SetInt(c: __goscript_rawconn.Conn | $.VarRef<__goscript_rawconn.Conn> | null, v: number): globalThis.Promise<$.GoError> {
		const o: Option | $.VarRef<Option> | null = this;
		const o$: Option = o == null ? $.pointerTarget<Option>(o) : (o as any).__isVarRef === true ? (o as any).value : (o as any).__goValue === undefined ? (o as any) : $.pointerTarget<Option>(o)
		if (((o$ as Option).Len != 1) && ((o$ as Option).Len != 4)) {
			return errors.New("invalid option")
		}
		let b: $.Slice<number> = null! as $.Slice<number>
		if ((o$ as Option).Len == 1) {
			b = new Uint8Array([$.uint(v, 8)]) as $.Slice<number>
		} else {
			let bb: Uint8Array = $.arrayValue(new Uint8Array(4))
			void (__goscriptAwait = $.pointerValue<Exclude<binary.ByteOrder, null>>(__goscript_sys.NativeEndian).PutUint32($.goSlice(bb, undefined, (o$ as Option).Len), $.uint(v, 32)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			b = $.goSlice(bb, undefined, 4)
		}
		return (o !== null && (o as any).__isVarRef !== true && (o as any).__goValue === undefined ? ((o as any) as Option)["set"](c, b) : Option.prototype.set.call(o, c, b))
	}

	public async ["get"](c: __goscript_rawconn.Conn | $.VarRef<__goscript_rawconn.Conn> | null, b: $.Slice<number>): globalThis.Promise<[number, $.GoError]> {
		const o: Option | $.VarRef<Option> | null = this;
		const o$: Option = o == null ? $.pointerTarget<Option>(o) : (o as any).__isVarRef === true ? (o as any).value : (o as any).__goValue === undefined ? (o as any) : $.pointerTarget<Option>(o)
		let operr: $.GoError = null! as $.GoError
		let n: number = 0
		let fn: ((s: number) => void) | null = $.functionValue((s: number): void => {
			let __goscriptTuple0: any = __goscript_sys_stub.getsockopt(s, (o$ as Option).Level, (o$ as Option).Name, b)
			n = __goscriptTuple0[0]
			operr = __goscriptTuple0[1]
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("uintptr")], results: [] } as $.FunctionTypeInfo))
		{
			let err = (__goscriptAwait = $.pointerValue<Exclude<syscall.RawConn, null>>($.pointerValue<__goscript_rawconn.Conn>(c).c).Control(fn), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (err != null) {
				return [0, err]
			}
		}
		return [n, os.NewSyscallError("getsockopt", $.pointerValueOrNil(operr)!)]
	}

	public async ["set"](c: __goscript_rawconn.Conn | $.VarRef<__goscript_rawconn.Conn> | null, b: $.Slice<number>): globalThis.Promise<$.GoError> {
		const o: Option | $.VarRef<Option> | null = this;
		const o$: Option = o == null ? $.pointerTarget<Option>(o) : (o as any).__isVarRef === true ? (o as any).value : (o as any).__goValue === undefined ? (o as any) : $.pointerTarget<Option>(o)
		let operr: $.GoError = null! as $.GoError
		let fn: ((s: number) => void) | null = $.functionValue((s: number): void => {
			operr = __goscript_sys_stub.setsockopt(s, (o$ as Option).Level, (o$ as Option).Name, b)
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("uintptr")], results: [] } as $.FunctionTypeInfo))
		{
			let err = (__goscriptAwait = $.pointerValue<Exclude<syscall.RawConn, null>>($.pointerValue<__goscript_rawconn.Conn>(c).c).Control(fn), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (err != null) {
				return err
			}
		}
		return os.NewSyscallError("setsockopt", $.pointerValueOrNil(operr)!)
	}

	static __typeInfo = $.registerStructType(
		"socket.Option",
		() => new Option(),
		() => [$.methodSignature("Get", [["c", /* @__PURE__ */ $.pointerType("socket.Conn")], ["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("GetInt", [["c", /* @__PURE__ */ $.pointerType("socket.Conn")]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("Set", [["c", /* @__PURE__ */ $.pointerType("socket.Conn")], ["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true), $.methodSignature("SetInt", [["c", /* @__PURE__ */ $.pointerType("socket.Conn")], ["v", /* @__PURE__ */ $.basicType("int")]], ["error"], true), $.methodSignature("get", [["c", /* @__PURE__ */ $.pointerType("socket.Conn")], ["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("set", [["c", /* @__PURE__ */ $.pointerType("socket.Conn")], ["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true)],
		Option,
		() => [/* @__PURE__ */ $.structField("Level", /* @__PURE__ */ $.basicType("int"), [0], 0, true), /* @__PURE__ */ $.structField("Name", /* @__PURE__ */ $.basicType("int"), [1], 8, true), /* @__PURE__ */ $.structField("Len", /* @__PURE__ */ $.basicType("int"), [2], 16, true)]
	)
}

export class Message {
	// When writing, the Buffers field must contain at least one
	// byte to write.
	// When reading, the Buffers field will always contain a byte
	// to read.
	public get Buffers(): $.Slice<$.Slice<number>> {
		return this._fields.Buffers
	}

	public set Buffers(value: $.Slice<$.Slice<number>>) {
		this._fields.Buffers = value
	}

	// OOB contains protocol-specific control or miscellaneous
	// ancillary data known as out-of-band data.
	public get OOB(): $.Slice<number> {
		return this._fields.OOB
	}

	public set OOB(value: $.Slice<number>) {
		this._fields.OOB = value
	}

	// Addr specifies a destination address when writing.
	// It can be nil when the underlying protocol of the raw
	// connection uses connection-oriented communication.
	// After a successful read, it may contain the source address
	// on the received packet.
	public get Addr(): net.Addr | null {
		return this._fields.Addr
	}

	public set Addr(value: net.Addr | null) {
		this._fields.Addr = value
	}

	public get N(): number {
		return this._fields.N
	}

	public set N(value: number) {
		this._fields.N = value
	}

	public get NN(): number {
		return this._fields.NN
	}

	public set NN(value: number) {
		this._fields.NN = value
	}

	public get Flags(): number {
		return this._fields.Flags
	}

	public set Flags(value: number) {
		this._fields.Flags = value
	}

	public _fields: {
		Buffers: $.Slice<$.Slice<number>>
		OOB: $.Slice<number>
		Addr: net.Addr | null
		N: number
		NN: number
		Flags: number
	}

	constructor(init?: Partial<{Buffers?: $.Slice<$.Slice<number>>, OOB?: $.Slice<number>, Addr?: net.Addr | null, N?: number, NN?: number, Flags?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Buffers: init?.Buffers ?? (null! as $.Slice<$.Slice<number>>),
			OOB: init?.OOB ?? (null! as $.Slice<number>),
			Addr: init?.Addr ?? (null! as net.Addr | null),
			N: init?.N ?? (0 as number),
			NN: init?.NN ?? (0 as number),
			Flags: init?.Flags ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Message {
		return new Message(this, true)
	}

	public __goscriptAssign(source: Message): void {
		const target = this._fields
		const values = source._fields
		target.Buffers = values.Buffers
		target.OOB = values.OOB
		target.Addr = $.assignFieldValue(target.Addr, values.Addr, "net.Addr")
		target.N = values.N
		target.NN = values.NN
		target.Flags = values.Flags
	}

	public raceRead(): void {
		const m: Message | $.VarRef<Message> | null = this;
	}

	public raceWrite(): void {
		const m: Message | $.VarRef<Message> | null = this;
	}

	static __typeInfo = $.registerStructType(
		"socket.Message",
		() => new Message(),
		() => [$.methodSignature("raceRead", [], [], true), $.methodSignature("raceWrite", [], [], true)],
		Message,
		() => [/* @__PURE__ */ $.structField("Buffers", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))), [0], 0, true), /* @__PURE__ */ $.structField("OOB", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [1], 24, true), /* @__PURE__ */ $.structField("Addr", "net.Addr", [2], 48, true), /* @__PURE__ */ $.structField("N", /* @__PURE__ */ $.basicType("int"), [3], 64, true), /* @__PURE__ */ $.structField("NN", /* @__PURE__ */ $.basicType("int"), [4], 72, true), /* @__PURE__ */ $.structField("Flags", /* @__PURE__ */ $.basicType("int"), [5], 80, true)]
	)
}

export let errNotImplemented: $.GoError = errors.New($.concatString(($.concatString(($.concatString("not implemented on ", runtime.GOOS)), "/")), runtime.GOARCH))

export function __goscript_set_errNotImplemented(__goscriptValue: $.GoError): void {
	errNotImplemented = __goscriptValue
}

export function ControlMessageSpace(dataLen: number): number {
	return __goscript_cmsghdr_stub.controlMessageSpace(dataLen)
}

export function ControlMessage_Data(m: ControlMessage, dataLen: number): $.Slice<number> {
	let l = __goscript_cmsghdr_stub.controlHeaderLen()
	if (($.sliceLen((m as ControlMessage)) < l) || ($.sliceLen((m as ControlMessage)) < (l + dataLen))) {
		return null
	}
	return $.goSlice(m, l, l + dataLen)
}

export function ControlMessage_Next(m: ControlMessage, dataLen: number): ControlMessage {
	let l = ControlMessageSpace(dataLen)
	if ($.sliceLen((m as ControlMessage)) < l) {
		return (null as ControlMessage)
	}
	return ($.goSlice(m, l, undefined) as ControlMessage)
}

export function ControlMessage_MarshalHeader(m: ControlMessage, lvl: number, typ: number, dataLen: number): $.GoError {
	if ($.sliceLen((m as ControlMessage)) < __goscript_cmsghdr_stub.controlHeaderLen()) {
		return errors.New("short message")
	}
	let h: __goscript_cmsghdr_stub.cmsghdr | $.VarRef<__goscript_cmsghdr_stub.cmsghdr> | null = ($.indexRef(m!, 0) as any)
	void (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? ((h as any) as __goscript_cmsghdr_stub.cmsghdr)["set"](__goscript_cmsghdr_stub.controlMessageLen(dataLen), lvl, typ) : __goscript_cmsghdr_stub.cmsghdr.prototype.set.call(h, __goscript_cmsghdr_stub.controlMessageLen(dataLen), lvl, typ))
	return null
}

export function ControlMessage_ParseHeader(m: ControlMessage): [number, number, number, $.GoError] {
	let lvl: number = 0
	let typ: number = 0
	let dataLen: number = 0
	let err: $.GoError = null! as $.GoError
	let l = __goscript_cmsghdr_stub.controlHeaderLen()
	if ($.sliceLen((m as ControlMessage)) < l) {
		return [0, 0, 0, errors.New("short message")]
	}
	let h: __goscript_cmsghdr_stub.cmsghdr | $.VarRef<__goscript_cmsghdr_stub.cmsghdr> | null = ($.indexRef(m!, 0) as any)
	return [(h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? ((h as any) as __goscript_cmsghdr_stub.cmsghdr).lvl() : __goscript_cmsghdr_stub.cmsghdr.prototype.lvl.call(h)), (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? ((h as any) as __goscript_cmsghdr_stub.cmsghdr).typ() : __goscript_cmsghdr_stub.cmsghdr.prototype.typ.call(h)), $.int($.uint64Sub($.uint64((h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? ((h as any) as __goscript_cmsghdr_stub.cmsghdr).len() : __goscript_cmsghdr_stub.cmsghdr.prototype.len.call(h))), $.uint64(l))), null]
}

export function ControlMessage_Marshal(m: ControlMessage, lvl: number, typ: number, data: $.Slice<number>): [ControlMessage, $.GoError] {
	let l = $.sliceLen(data)
	if ($.sliceLen((m as ControlMessage)) < ControlMessageSpace(l)) {
		return [(null as ControlMessage), errors.New("short message")]
	}
	let h: __goscript_cmsghdr_stub.cmsghdr | $.VarRef<__goscript_cmsghdr_stub.cmsghdr> | null = ($.indexRef(m!, 0) as any)
	void (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? ((h as any) as __goscript_cmsghdr_stub.cmsghdr)["set"](__goscript_cmsghdr_stub.controlMessageLen(l), lvl, typ) : __goscript_cmsghdr_stub.cmsghdr.prototype.set.call(h, __goscript_cmsghdr_stub.controlMessageLen(l), lvl, typ))
	if (l > 0) {
		$.copy(ControlMessage_Data(m, l), data)
	}
	return [(ControlMessage_Next(m, l) as ControlMessage), null]
}

export function ControlMessage_Parse(m: ControlMessage): [$.Slice<ControlMessage>, $.GoError] {
	let ms: $.Slice<ControlMessage> = null! as $.Slice<ControlMessage>
	while ($.sliceLen((m as ControlMessage)) >= __goscript_cmsghdr_stub.controlHeaderLen()) {
		let h: __goscript_cmsghdr_stub.cmsghdr | $.VarRef<__goscript_cmsghdr_stub.cmsghdr> | null = ($.indexRef(m!, 0) as any)
		let l = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? ((h as any) as __goscript_cmsghdr_stub.cmsghdr).len() : __goscript_cmsghdr_stub.cmsghdr.prototype.len.call(h))
		if (l <= 0) {
			return [null, errors.New("invalid header length")]
		}
		if ($.uint64(l) < $.uint64(__goscript_cmsghdr_stub.controlHeaderLen())) {
			return [null, errors.New("invalid message length")]
		}
		if ($.uint64(l) > $.uint64($.sliceLen((m as ControlMessage)))) {
			return [null, errors.New("short buffer")]
		}
		// On message reception:
		//
		// |<- ControlMessageSpace --------------->|
		// |<- controlMessageLen ---------->|      |
		// |<- controlHeaderLen ->|         |      |
		// +---------------+------+---------+------+
		// |    Header     | PadH |  Data   | PadD |
		// +---------------+------+---------+------+
		//
		// On compatible message reception:
		//
		// | ... |<- controlMessageLen ----------->|
		// | ... |<- controlHeaderLen ->|          |
		// +-----+---------------+------+----------+
		// | ... |    Header     | PadH |   Data   |
		// +-----+---------------+------+----------+
		ms = $.appendOne(ms, (($.goSlice(m, undefined, l) as ControlMessage) as ControlMessage), $.appendZeros.nil)
		let ll = l - __goscript_cmsghdr_stub.controlHeaderLen()
		if ($.sliceLen((m as ControlMessage)) >= ControlMessageSpace(ll)) {
			m = ($.goSlice(m, ControlMessageSpace(ll), undefined) as ControlMessage)
		} else {
			m = ($.goSlice(m, __goscript_cmsghdr_stub.controlMessageLen(ll), undefined) as ControlMessage)
		}
	}
	return [ms, null]
}

export function NewControlMessage(dataLen: $.Slice<number>): ControlMessage {
	let l: number = 0
	for (let __goscriptRangeTarget0 = dataLen, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), i = 0; i < __goscriptRangeWindow0.length; i++) {
		l = l + (ControlMessageSpace(((__goscriptRangeWindow0.backing as any[])[__goscriptRangeWindow0.offset + i] as number)))
	}
	return ($.makeSlice<number>(l, undefined, "byte") as ControlMessage)
}

var __goscriptAwait: any
