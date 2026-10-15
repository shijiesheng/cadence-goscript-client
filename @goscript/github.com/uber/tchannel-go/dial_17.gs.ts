// Generated file based on dial_17.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/context/index.js"

import * as net from "@goscript/net/index.js"
import "@goscript/context/index.js"
import "@goscript/net/index.js"

export async function dialContext(ctx: context.Context | null, hostPort: string): globalThis.Promise<[net.Conn | null, $.GoError]> {
	let d = $.varRef(new net.Dialer(undefined, true))
	return d.value.DialContext(ctx, "tcp", hostPort)
}
