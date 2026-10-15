// Generated file based on net_ip_socket.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bufio from "@goscript/bufio/index.js"

import * as hex from "@goscript/encoding/hex/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as io from "@goscript/io/index.js"

import * as net from "@goscript/net/index.js"

import * as os from "@goscript/os/index.js"

import * as strconv from "@goscript/strconv/index.js"

import * as strings from "@goscript/strings/index.js"
import "@goscript/bufio/index.js"
import "@goscript/encoding/hex/index.js"
import "@goscript/fmt/index.js"
import "@goscript/io/index.js"
import "@goscript/net/index.js"
import "@goscript/os/index.js"
import "@goscript/strconv/index.js"
import "@goscript/strings/index.js"

$.registerTypePackagePath("github.com/prometheus/procfs", ["procfs.NetIPSocket", "procfs.NetIPSocketSummary", "procfs.netIPSocketLine"])

export type NetIPSocket = $.Slice<netIPSocketLine | $.VarRef<netIPSocketLine> | null>

$.registerNamedType("procfs.NetIPSocket", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("procfs.netIPSocketLine")));

export class NetIPSocketSummary {
	// TxQueueLength shows the total queue length of all parsed tx_queue lengths.
	public get TxQueueLength(): bigint {
		return this._fields.TxQueueLength
	}

	public set TxQueueLength(value: bigint) {
		this._fields.TxQueueLength = value
	}

	// RxQueueLength shows the total queue length of all parsed rx_queue lengths.
	public get RxQueueLength(): bigint {
		return this._fields.RxQueueLength
	}

	public set RxQueueLength(value: bigint) {
		this._fields.RxQueueLength = value
	}

	// UsedSockets shows the total number of parsed lines representing the
	// number of used sockets.
	public get UsedSockets(): bigint {
		return this._fields.UsedSockets
	}

	public set UsedSockets(value: bigint) {
		this._fields.UsedSockets = value
	}

	public _fields: {
		TxQueueLength: bigint
		RxQueueLength: bigint
		UsedSockets: bigint
	}

	constructor(init?: Partial<{TxQueueLength?: bigint, RxQueueLength?: bigint, UsedSockets?: bigint}>, __goscriptValue?: boolean) {
		this._fields = {
			TxQueueLength: init?.TxQueueLength ?? (0n as bigint),
			RxQueueLength: init?.RxQueueLength ?? (0n as bigint),
			UsedSockets: init?.UsedSockets ?? (0n as bigint)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): NetIPSocketSummary {
		return new NetIPSocketSummary(this, true)
	}

	public __goscriptAssign(source: NetIPSocketSummary): void {
		const target = this._fields
		const values = source._fields
		target.TxQueueLength = values.TxQueueLength
		target.RxQueueLength = values.RxQueueLength
		target.UsedSockets = values.UsedSockets
	}

	static __typeInfo = $.registerStructType(
		"procfs.NetIPSocketSummary",
		() => new NetIPSocketSummary(),
		() => [],
		NetIPSocketSummary,
		() => [/* @__PURE__ */ $.structField("TxQueueLength", /* @__PURE__ */ $.basicType("uint64"), [0], 0, true), /* @__PURE__ */ $.structField("RxQueueLength", /* @__PURE__ */ $.basicType("uint64"), [1], 8, true), /* @__PURE__ */ $.structField("UsedSockets", /* @__PURE__ */ $.basicType("uint64"), [2], 16, true)]
	)
}

export class netIPSocketLine {
	public get Sl(): bigint {
		return this._fields.Sl
	}

	public set Sl(value: bigint) {
		this._fields.Sl = value
	}

	public get LocalAddr(): net.IP {
		return this._fields.LocalAddr
	}

	public set LocalAddr(value: net.IP) {
		this._fields.LocalAddr = value
	}

	public get LocalPort(): bigint {
		return this._fields.LocalPort
	}

	public set LocalPort(value: bigint) {
		this._fields.LocalPort = value
	}

	public get RemAddr(): net.IP {
		return this._fields.RemAddr
	}

	public set RemAddr(value: net.IP) {
		this._fields.RemAddr = value
	}

	public get RemPort(): bigint {
		return this._fields.RemPort
	}

	public set RemPort(value: bigint) {
		this._fields.RemPort = value
	}

	public get St(): bigint {
		return this._fields.St
	}

	public set St(value: bigint) {
		this._fields.St = value
	}

	public get TxQueue(): bigint {
		return this._fields.TxQueue
	}

	public set TxQueue(value: bigint) {
		this._fields.TxQueue = value
	}

	public get RxQueue(): bigint {
		return this._fields.RxQueue
	}

	public set RxQueue(value: bigint) {
		this._fields.RxQueue = value
	}

	public get UID(): bigint {
		return this._fields.UID
	}

	public set UID(value: bigint) {
		this._fields.UID = value
	}

	public _fields: {
		Sl: bigint
		LocalAddr: net.IP
		LocalPort: bigint
		RemAddr: net.IP
		RemPort: bigint
		St: bigint
		TxQueue: bigint
		RxQueue: bigint
		UID: bigint
	}

	constructor(init?: Partial<{Sl?: bigint, LocalAddr?: net.IP, LocalPort?: bigint, RemAddr?: net.IP, RemPort?: bigint, St?: bigint, TxQueue?: bigint, RxQueue?: bigint, UID?: bigint}>, __goscriptValue?: boolean) {
		this._fields = {
			Sl: init?.Sl ?? (0n as bigint),
			LocalAddr: init?.LocalAddr ?? (null! as net.IP),
			LocalPort: init?.LocalPort ?? (0n as bigint),
			RemAddr: init?.RemAddr ?? (null! as net.IP),
			RemPort: init?.RemPort ?? (0n as bigint),
			St: init?.St ?? (0n as bigint),
			TxQueue: init?.TxQueue ?? (0n as bigint),
			RxQueue: init?.RxQueue ?? (0n as bigint),
			UID: init?.UID ?? (0n as bigint)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): netIPSocketLine {
		return new netIPSocketLine(this, true)
	}

	public __goscriptAssign(source: netIPSocketLine): void {
		const target = this._fields
		const values = source._fields
		target.Sl = values.Sl
		target.LocalAddr = values.LocalAddr
		target.LocalPort = values.LocalPort
		target.RemAddr = values.RemAddr
		target.RemPort = values.RemPort
		target.St = values.St
		target.TxQueue = values.TxQueue
		target.RxQueue = values.RxQueue
		target.UID = values.UID
	}

	static __typeInfo = $.registerStructType(
		"procfs.netIPSocketLine",
		() => new netIPSocketLine(),
		() => [],
		netIPSocketLine,
		() => [/* @__PURE__ */ $.structField("Sl", /* @__PURE__ */ $.basicType("uint64"), [0], 0, true), /* @__PURE__ */ $.structField("LocalAddr", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "net.IP"), [1], 8, true), /* @__PURE__ */ $.structField("LocalPort", /* @__PURE__ */ $.basicType("uint64"), [2], 32, true), /* @__PURE__ */ $.structField("RemAddr", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "net.IP"), [3], 40, true), /* @__PURE__ */ $.structField("RemPort", /* @__PURE__ */ $.basicType("uint64"), [4], 64, true), /* @__PURE__ */ $.structField("St", /* @__PURE__ */ $.basicType("uint64"), [5], 72, true), /* @__PURE__ */ $.structField("TxQueue", /* @__PURE__ */ $.basicType("uint64"), [6], 80, true), /* @__PURE__ */ $.structField("RxQueue", /* @__PURE__ */ $.basicType("uint64"), [7], 88, true), /* @__PURE__ */ $.structField("UID", /* @__PURE__ */ $.basicType("uint64"), [8], 96, true)]
	)
}

export const readLimit: number = 4294967296

export async function newNetIPSocket(file: string): globalThis.Promise<[NetIPSocket, $.GoError]> {
	await using __defer = new $.AsyncDisposableStack()
	let __goscriptTuple0: any = await os.Open(file)
	let f: os.File | $.VarRef<os.File> | null = __goscriptTuple0[0]
	let err = __goscriptTuple0[1]
	if (err != null) {
		return [(null as NetIPSocket), err]
	}
	__defer.defer(async () => { await os.File.prototype.Close.call($.pointerValue<os.File>(f)) })

	let netIPSocket: NetIPSocket = null! as NetIPSocket

	let lr = io.LimitReader($.pointerValueOrNil($.interfaceValue<io.Reader | null>(f, "*os.File", /* @__PURE__ */ $.pointerType("os.File")))!, 4294967296n)
	let s: bufio.Scanner | $.VarRef<bufio.Scanner> | null = bufio.NewScanner(lr)
	await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as bufio.Scanner).Scan() : bufio.Scanner.prototype.Scan.call(s))
	while (await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as bufio.Scanner).Scan() : bufio.Scanner.prototype.Scan.call(s))) {
		let fields: $.Slice<string> = strings.Fields((s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as bufio.Scanner).Text() : bufio.Scanner.prototype.Text.call(s)))
		let __goscriptTuple1: any = parseNetIPSocketLine(fields)
		let line: netIPSocketLine | $.VarRef<netIPSocketLine> | null = __goscriptTuple1[0]
		let __goscriptShadow0 = __goscriptTuple1[1]
		if (__goscriptShadow0 != null) {
			return [(null as NetIPSocket), __goscriptShadow0]
		}
		netIPSocket = ($.appendOne((netIPSocket as NetIPSocket), line, $.appendZeros.nil) as NetIPSocket)
	}
	{
		let __goscriptShadow1 = (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as bufio.Scanner).Err() : bufio.Scanner.prototype.Err.call(s))
		if (__goscriptShadow1 != null) {
			return [(null as NetIPSocket), __goscriptShadow1]
		}
	}
	return [(netIPSocket as NetIPSocket), null]
}

export async function newNetIPSocketSummary(file: string): globalThis.Promise<[NetIPSocketSummary | $.VarRef<NetIPSocketSummary> | null, $.GoError]> {
	await using __defer = new $.AsyncDisposableStack()
	let __goscriptTuple2: any = await os.Open(file)
	let f: os.File | $.VarRef<os.File> | null = __goscriptTuple2[0]
	let err = __goscriptTuple2[1]
	if (err != null) {
		return [null, err]
	}
	__defer.defer(async () => { await os.File.prototype.Close.call($.pointerValue<os.File>(f)) })

	let netIPSocketSummary: $.VarRef<NetIPSocketSummary> = $.varRef(new NetIPSocketSummary(undefined, true))

	let lr = io.LimitReader($.pointerValueOrNil($.interfaceValue<io.Reader | null>(f, "*os.File", /* @__PURE__ */ $.pointerType("os.File")))!, 4294967296n)
	let s: bufio.Scanner | $.VarRef<bufio.Scanner> | null = bufio.NewScanner(lr)
	await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as bufio.Scanner).Scan() : bufio.Scanner.prototype.Scan.call(s))
	while (await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as bufio.Scanner).Scan() : bufio.Scanner.prototype.Scan.call(s))) {
		let fields: $.Slice<string> = strings.Fields((s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as bufio.Scanner).Text() : bufio.Scanner.prototype.Text.call(s)))
		let __goscriptTuple3: any = parseNetIPSocketLine(fields)
		let line: netIPSocketLine | $.VarRef<netIPSocketLine> | null = __goscriptTuple3[0]
		let __goscriptShadow2 = __goscriptTuple3[1]
		let line$: netIPSocketLine = line == null ? $.pointerTarget<netIPSocketLine>(line) : (line as any).__isVarRef === true ? (line as any).value : (line as any).__goValue === undefined ? (line as any) : $.pointerTarget<netIPSocketLine>(line)
		if (__goscriptShadow2 != null) {
			return [null, __goscriptShadow2]
		}
		netIPSocketSummary.value.TxQueueLength = $.uint64Add(netIPSocketSummary.value.TxQueueLength, (line$ as netIPSocketLine).TxQueue)
		netIPSocketSummary.value.RxQueueLength = $.uint64Add(netIPSocketSummary.value.RxQueueLength, (line$ as netIPSocketLine).RxQueue)
		netIPSocketSummary.value.UsedSockets++
	}
	{
		let __goscriptShadow3 = (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as bufio.Scanner).Err() : bufio.Scanner.prototype.Err.call(s))
		if (__goscriptShadow3 != null) {
			return [null, __goscriptShadow3]
		}
	}
	return [netIPSocketSummary, null]
}

export function parseIP(hexIP: string): [net.IP, $.GoError] {
	let byteIP: $.Slice<number> = null! as $.Slice<number>
	let __goscriptTuple4: any = hex.DecodeString(hexIP)
	byteIP = __goscriptTuple4[0]
	let err = __goscriptTuple4[1]
	if (err != null) {
		return [(null as net.IP), fmt.Errorf("cannot parse address field in socket line %q", hexIP)]
	}
	switch ($.sliceLen(byteIP)) {
		case 4:
		{
			return [(new Uint8Array([$.arrayIndex(byteIP!, 3), $.arrayIndex(byteIP!, 2), $.arrayIndex(byteIP!, 1), $.arrayIndex(byteIP!, 0)]) as $.Slice<number> as net.IP), null]
			break
		}
		case 16:
		{
			let i: net.IP = (new Uint8Array([$.arrayIndex(byteIP!, 3), $.arrayIndex(byteIP!, 2), $.arrayIndex(byteIP!, 1), $.arrayIndex(byteIP!, 0), $.arrayIndex(byteIP!, 7), $.arrayIndex(byteIP!, 6), $.arrayIndex(byteIP!, 5), $.arrayIndex(byteIP!, 4), $.arrayIndex(byteIP!, 11), $.arrayIndex(byteIP!, 10), $.arrayIndex(byteIP!, 9), $.arrayIndex(byteIP!, 8), $.arrayIndex(byteIP!, 15), $.arrayIndex(byteIP!, 14), $.arrayIndex(byteIP!, 13), $.arrayIndex(byteIP!, 12)]) as $.Slice<number> as net.IP)
			return [(i as net.IP), null]
			break
		}
		default:
		{
			return [(null as net.IP), fmt.Errorf("Unable to parse IP %s", hexIP)]
			break
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export function parseNetIPSocketLine(fields: $.Slice<string>): [netIPSocketLine | $.VarRef<netIPSocketLine> | null, $.GoError] {
	let line: netIPSocketLine | $.VarRef<netIPSocketLine> | null = new netIPSocketLine()
	let line$: netIPSocketLine = line == null ? $.pointerTarget<netIPSocketLine>(line) : (line as any).__isVarRef === true ? (line as any).value : (line as any).__goValue === undefined ? (line as any) : $.pointerTarget<netIPSocketLine>(line)
	if ($.sliceLen(fields) < 8) {
		return [null, fmt.Errorf("cannot parse net socket line as it has less then 8 columns %q", strings.Join(fields, " "))]
	}
	let err: $.GoError = null! as $.GoError

	// sl
	let s: $.Slice<string> = strings.Split($.arrayIndex(fields!, 0), ":")
	if ($.sliceLen(s) != 2) {
		return [null, fmt.Errorf("cannot parse sl field in socket line %q", $.arrayIndex(fields!, 0))]
	}

	{
		let __goscriptTuple5: any = strconv.ParseUint($.arrayIndex(s!, 0), 0, 64);
		;(line$ as netIPSocketLine).Sl = __goscriptTuple5[0]
		err = __goscriptTuple5[1]
		if (err != null) {
			return [null, fmt.Errorf("cannot parse sl value in socket line: %w", (err as any))]
		}
	}
	// local_address
	let l: $.Slice<string> = strings.Split($.arrayIndex(fields!, 1), ":")
	if ($.sliceLen(l) != 2) {
		return [null, fmt.Errorf("cannot parse local_address field in socket line %q", $.arrayIndex(fields!, 1))]
	}
	{
		let __goscriptTuple6: any = parseIP($.arrayIndex(l!, 0));
		;(line$ as netIPSocketLine).LocalAddr = (__goscriptTuple6[0] as net.IP)
		err = __goscriptTuple6[1]
		if (err != null) {
			return [null, err]
		}
	}
	{
		let __goscriptTuple7: any = strconv.ParseUint($.arrayIndex(l!, 1), 16, 64);
		;(line$ as netIPSocketLine).LocalPort = __goscriptTuple7[0]
		err = __goscriptTuple7[1]
		if (err != null) {
			return [null, fmt.Errorf("cannot parse local_address port value in socket line: %w", (err as any))]
		}
	}

	// remote_address
	let r: $.Slice<string> = strings.Split($.arrayIndex(fields!, 2), ":")
	if ($.sliceLen(r) != 2) {
		return [null, fmt.Errorf("cannot parse rem_address field in socket line %q", $.arrayIndex(fields!, 1))]
	}
	{
		let __goscriptTuple8: any = parseIP($.arrayIndex(r!, 0));
		;(line$ as netIPSocketLine).RemAddr = (__goscriptTuple8[0] as net.IP)
		err = __goscriptTuple8[1]
		if (err != null) {
			return [null, err]
		}
	}
	{
		let __goscriptTuple9: any = strconv.ParseUint($.arrayIndex(r!, 1), 16, 64);
		;(line$ as netIPSocketLine).RemPort = __goscriptTuple9[0]
		err = __goscriptTuple9[1]
		if (err != null) {
			return [null, fmt.Errorf("cannot parse rem_address port value in socket line: %w", (err as any))]
		}
	}

	// st
	{
		let __goscriptTuple10: any = strconv.ParseUint($.arrayIndex(fields!, 3), 16, 64);
		;(line$ as netIPSocketLine).St = __goscriptTuple10[0]
		err = __goscriptTuple10[1]
		if (err != null) {
			return [null, fmt.Errorf("cannot parse st value in socket line: %w", (err as any))]
		}
	}

	// tx_queue and rx_queue
	let q: $.Slice<string> = strings.Split($.arrayIndex(fields!, 4), ":")
	if ($.sliceLen(q) != 2) {
		return [null, fmt.Errorf("cannot parse tx/rx queues in socket line as it has a missing colon %q", $.arrayIndex(fields!, 4))]
	}
	{
		let __goscriptTuple11: any = strconv.ParseUint($.arrayIndex(q!, 0), 16, 64);
		;(line$ as netIPSocketLine).TxQueue = __goscriptTuple11[0]
		err = __goscriptTuple11[1]
		if (err != null) {
			return [null, fmt.Errorf("cannot parse tx_queue value in socket line: %w", (err as any))]
		}
	}
	{
		let __goscriptTuple12: any = strconv.ParseUint($.arrayIndex(q!, 1), 16, 64);
		;(line$ as netIPSocketLine).RxQueue = __goscriptTuple12[0]
		err = __goscriptTuple12[1]
		if (err != null) {
			return [null, fmt.Errorf("cannot parse rx_queue value in socket line: %w", (err as any))]
		}
	}

	// uid
	{
		let __goscriptTuple13: any = strconv.ParseUint($.arrayIndex(fields!, 7), 0, 64);
		;(line$ as netIPSocketLine).UID = __goscriptTuple13[0]
		err = __goscriptTuple13[1]
		if (err != null) {
			return [null, fmt.Errorf("cannot parse uid value in socket line: %w", (err as any))]
		}
	}

	return [line, null]
}
