// Generated file based on preinit_connection.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as binary from "@goscript/encoding/binary/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as io from "@goscript/io/index.js"

import * as math from "@goscript/math/index.js"

import * as net from "@goscript/net/index.js"

import * as strconv from "@goscript/strconv/index.js"

import * as time from "@goscript/time/index.js"

import * as context from "@goscript/golang.org/x/net/context/index.js"

import * as context2 from "@goscript/context/index.js"

import * as opentracing from "@goscript/github.com/opentracing/opentracing-go/index.js"

import * as relay from "@goscript/github.com/uber/tchannel-go/relay/index.js"

import type * as arg2 from "@goscript/github.com/uber/tchannel-go/thrift/arg2/index.js"

import * as tos from "@goscript/github.com/uber/tchannel-go/tos/index.js"

import * as typed from "@goscript/github.com/uber/tchannel-go/typed/index.js"

import * as atomic from "@goscript/go.uber.org/atomic/index.js"

import * as rand from "@goscript/math/rand/index.js"

import * as sync from "@goscript/sync/index.js"

import * as syscall from "@goscript/syscall/index.js"

import type * as __goscript__arguments from "./arguments.gs.ts"

import * as __goscript_calloptions from "./calloptions.gs.ts"

import * as __goscript_channel from "./channel.gs.ts"

import type * as __goscript_channelstate_string from "./channelstate_string.gs.ts"

import * as __goscript_checksum from "./checksum.gs.ts"

import * as __goscript_connection from "./connection.gs.ts"

import * as __goscript_connection_direction from "./connection_direction.gs.ts"

import * as __goscript_connectionstate_string from "./connectionstate_string.gs.ts"

import * as __goscript_context from "./context.gs.ts"

import * as __goscript_errors from "./errors.gs.ts"

import * as __goscript_fragmenting_reader from "./fragmenting_reader.gs.ts"

import * as __goscript_fragmenting_writer from "./fragmenting_writer.gs.ts"

import * as __goscript_frame from "./frame.gs.ts"

import * as __goscript_frame_pool from "./frame_pool.gs.ts"

import * as __goscript_handlers from "./handlers.gs.ts"

import * as __goscript_health from "./health.gs.ts"

import type * as __goscript_idle_sweep from "./idle_sweep.gs.ts"

import * as __goscript_inbound from "./inbound.gs.ts"

import * as __goscript_introspection from "./introspection.gs.ts"

import * as __goscript_logger from "./logger.gs.ts"

import * as __goscript_messages from "./messages.gs.ts"

import * as __goscript_messagetype_string from "./messagetype_string.gs.ts"

import * as __goscript_mex from "./mex.gs.ts"

import * as __goscript_outbound from "./outbound.gs.ts"

import * as __goscript_peer from "./peer.gs.ts"

import * as __goscript_peer_heap from "./peer_heap.gs.ts"

import * as __goscript_peer_strategies from "./peer_strategies.gs.ts"

import * as __goscript_relay from "./relay.gs.ts"

import * as __goscript_relay_api from "./relay_api.gs.ts"

import * as __goscript_relay_messages from "./relay_messages.gs.ts"

import * as __goscript_relay_timer_pool from "./relay_timer_pool.gs.ts"

import * as __goscript_reqres from "./reqres.gs.ts"

import * as __goscript_reqresreaderstate_string from "./reqresreaderstate_string.gs.ts"

import * as __goscript_reqreswriterstate_string from "./reqreswriterstate_string.gs.ts"

import * as __goscript_retry from "./retry.gs.ts"

import * as __goscript_retryon_string from "./retryon_string.gs.ts"

import * as __goscript_root_peer_list from "./root_peer_list.gs.ts"

import * as __goscript_sockio_non_unix from "./sockio_non_unix.gs.ts"

import * as __goscript_stats from "./stats.gs.ts"

import * as __goscript_subchannel from "./subchannel.gs.ts"

import * as __goscript_systemerrcode_string from "./systemerrcode_string.gs.ts"

import * as __goscript_tracing from "./tracing.gs.ts"
import "@goscript/encoding/binary/index.js"
import "@goscript/fmt/index.js"
import "@goscript/io/index.js"
import "@goscript/math/index.js"
import "@goscript/net/index.js"
import "@goscript/strconv/index.js"
import "@goscript/time/index.js"
import "@goscript/golang.org/x/net/context/index.js"
import "@goscript/context/index.js"
import "@goscript/github.com/opentracing/opentracing-go/index.js"
import "@goscript/github.com/uber/tchannel-go/relay/index.js"
import "@goscript/github.com/uber/tchannel-go/tos/index.js"
import "@goscript/github.com/uber/tchannel-go/typed/index.js"
import "@goscript/go.uber.org/atomic/index.js"
import "@goscript/math/rand/index.js"
import "@goscript/sync/index.js"
import "@goscript/syscall/index.js"
import "./calloptions.gs.ts"
import "./channel.gs.ts"
import "./checksum.gs.ts"
import "./connection.gs.ts"
import "./connection_direction.gs.ts"
import "./connectionstate_string.gs.ts"
import "./context.gs.ts"
import "./errors.gs.ts"
import "./fragmenting_reader.gs.ts"
import "./fragmenting_writer.gs.ts"
import "./frame.gs.ts"
import "./frame_pool.gs.ts"
import "./handlers.gs.ts"
import "./health.gs.ts"
import "./inbound.gs.ts"
import "./introspection.gs.ts"
import "./logger.gs.ts"
import "./messages.gs.ts"
import "./messagetype_string.gs.ts"
import "./mex.gs.ts"
import "./outbound.gs.ts"
import "./peer.gs.ts"
import "./peer_heap.gs.ts"
import "./peer_strategies.gs.ts"
import "./relay.gs.ts"
import "./relay_api.gs.ts"
import "./relay_messages.gs.ts"
import "./relay_timer_pool.gs.ts"
import "./reqres.gs.ts"
import "./reqresreaderstate_string.gs.ts"
import "./reqreswriterstate_string.gs.ts"
import "./retry.gs.ts"
import "./retryon_string.gs.ts"
import "./root_peer_list.gs.ts"
import "./sockio_non_unix.gs.ts"
import "./stats.gs.ts"
import "./subchannel.gs.ts"
import "./systemerrcode_string.gs.ts"
import "./tracing.gs.ts"

export async function parseRemotePeer(p: __goscript_messages.initParams, remoteAddr: net.Addr | null): globalThis.Promise<[__goscript_connection.PeerInfo, __goscript_connection.peerAddressComponents, $.GoError]> {
	let remotePeer: __goscript_connection.PeerInfo = new __goscript_connection.PeerInfo(undefined, true)
	let remotePeerAddress: __goscript_connection.peerAddressComponents = new __goscript_connection.peerAddressComponents(undefined, true)
	let ok: boolean = false

	{
		let __goscriptTuple0: any = $.mapGet<string, string, string>(p, "host_port", "")
		remotePeer.HostPort = __goscriptTuple0[0]
		ok = __goscriptTuple0[1]
		if (!ok) {
			return [(remotePeer).clone(), (remotePeerAddress).clone(), fmt.Errorf("header %v is required", "host_port")]
		}
	}
	{
		let __goscriptTuple1: any = $.mapGet<string, string, string>(p, "process_name", "")
		remotePeer.ProcessName = __goscriptTuple1[0]
		ok = __goscriptTuple1[1]
		if (!ok) {
			return [(remotePeer).clone(), (remotePeerAddress).clone(), fmt.Errorf("header %v is required", "process_name")]
		}
	}

	// If the remote host:port is ephemeral, use the socket address as the
	// host:port and set IsEphemeral to true.
	if (__goscript_peer.isEphemeralHostPort(remotePeer.HostPort)) {
		remotePeer.HostPort = (__goscriptAwait = (remoteAddr !== null && (remoteAddr as any).__isVarRef !== true && (remoteAddr as any).__goValue === undefined ? (remoteAddr as Exclude<net.Addr, null>) : $.pointerValue<Exclude<net.Addr, null>>(remoteAddr)).String(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		remotePeer.IsEphemeral = true
	}

	remotePeer.Version.Language = $.mapGet<string, string, string>(p, "tchannel_language", "")[0]
	remotePeer.Version.LanguageVersion = $.mapGet<string, string, string>(p, "tchannel_language_version", "")[0]
	remotePeer.Version.TChannelVersion = $.mapGet<string, string, string>(p, "tchannel_version", "")[0]

	let address = remotePeer.HostPort
	{
		let [sHost, sPort, err] = await net.SplitHostPort(address)
		if (err == null) {
			address = sHost
			{
				let [__goscriptShadow0, __goscriptShadow1] = strconv.ParseUint(sPort, 10, 16)
				if (__goscriptShadow1 == null) {
					remotePeerAddress.port = $.uint(__goscriptShadow0, 16)
				}
			}
		}
	}
	if ($.stringEqual(address, "localhost")) {
		remotePeerAddress.ipv4 = 2130706433
	} else {
		{
			let ip: net.IP = (net.ParseIP(address) as net.IP)
			if (ip != null) {
				{
					let ip4: net.IP = (net.IP_To4(ip) as net.IP)
					if (ip4 != null) {
						remotePeerAddress.ipv4 = $.markAsStructValue($.cloneStructValue($.pointerValue<any>(binary.BigEndian))).Uint32(ip4)
					} else {
						remotePeerAddress.ipv6 = address
					}
				}
			} else {
				remotePeerAddress.hostname = address
			}
		}
	}

	return [(remotePeer).clone(), (remotePeerAddress).clone(), null]
}

export async function setInitDeadline(ctx: context.Context | null, c: net.Conn | null): globalThis.Promise<(() => void) | null> {
	let [deadline, ok] = await (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context2.Context, null>) : $.pointerValue<Exclude<context2.Context, null>>(ctx)).Deadline()
	if (!ok) {
		deadline = $.assignStruct(deadline, $.markAsStructValue($.cloneStructValue(time.Now())).Add(5000000000n))
	}

	void (__goscriptAwait = (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? (c as Exclude<net.Conn, null>) : $.pointerValue<Exclude<net.Conn, null>>(c)).SetDeadline($.markAsStructValue($.cloneStructValue(deadline))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	return $.functionValue(async (): globalThis.Promise<void> => {
		void (__goscriptAwait = (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? (c as Exclude<net.Conn, null>) : $.pointerValue<Exclude<net.Conn, null>>(c)).SetDeadline($.markAsStructValue(new time.Time())), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo))
}

export async function readError(frame: __goscript_frame.Frame | $.VarRef<__goscript_frame.Frame> | null): globalThis.Promise<$.GoError> {
	let errMsg: __goscript_messages.errorMessage | $.VarRef<__goscript_messages.errorMessage> | null = new __goscript_messages.errorMessage({id: $.pointerValue<__goscript_frame.Frame>(frame).Header.ID})
	{
		let err = __goscript_frame.Frame.prototype.read.call(frame, $.interfaceValue<__goscript_messages.message | null>(errMsg, "*tchannel.errorMessage", /* @__PURE__ */ $.pointerType("tchannel.errorMessage")))
		if (err != null) {
			return err
		}
	}

	return $.markAsStructValue($.cloneStructValue($.pointerValue<__goscript_messages.errorMessage>(errMsg))).AsSystemError()
}

export async function unsupportedProtocolVersion(got: number): globalThis.Promise<$.GoError> {
	return __goscript_errors.NewSystemError(255, "unsupported protocol version %d from peer, expected %v", $.arrayToSlice<any>([$.basicInterfaceValue(got, "uint16"), $.basicInterfaceValue(2, "int")]))
}

var __goscriptAwait: any
