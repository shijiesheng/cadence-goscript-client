// Generated file based on middleware.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as middleware from "@goscript/go.uber.org/yarpc/api/middleware/index.js"

import * as inboundmiddleware from "@goscript/go.uber.org/yarpc/internal/inboundmiddleware/index.js"

import * as outboundmiddleware from "@goscript/go.uber.org/yarpc/internal/outboundmiddleware/index.js"
import "@goscript/go.uber.org/yarpc/api/middleware/index.js"
import "@goscript/go.uber.org/yarpc/internal/inboundmiddleware/index.js"
import "@goscript/go.uber.org/yarpc/internal/outboundmiddleware/index.js"

export function UnaryOutboundMiddleware(mw: $.Slice<middleware.UnaryOutbound | null>): middleware.UnaryOutbound | null {
	return outboundmiddleware.UnaryChain(mw)
}

export function UnaryInboundMiddleware(mw: $.Slice<middleware.UnaryInbound | null>): middleware.UnaryInbound | null {
	return inboundmiddleware.UnaryChain(mw)
}

export function OnewayOutboundMiddleware(mw: $.Slice<middleware.OnewayOutbound | null>): middleware.OnewayOutbound | null {
	return outboundmiddleware.OnewayChain(mw)
}

export function OnewayInboundMiddleware(mw: $.Slice<middleware.OnewayInbound | null>): middleware.OnewayInbound | null {
	return inboundmiddleware.OnewayChain(mw)
}

export function StreamOutboundMiddleware(mw: $.Slice<middleware.StreamOutbound | null>): middleware.StreamOutbound | null {
	return outboundmiddleware.StreamChain(mw)
}

export function StreamInboundMiddleware(mw: $.Slice<middleware.StreamInbound | null>): middleware.StreamInbound | null {
	return inboundmiddleware.StreamChain(mw)
}
