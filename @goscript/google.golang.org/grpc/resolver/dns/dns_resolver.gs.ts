// Generated file based on dns_resolver.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as time from "@goscript/time/index.js"

import * as dns from "@goscript/google.golang.org/grpc/internal/resolver/dns/index.js"

import * as resolver from "@goscript/google.golang.org/grpc/resolver/index.js"
import "@goscript/time/index.js"
import "@goscript/google.golang.org/grpc/internal/resolver/dns/index.js"
import "@goscript/google.golang.org/grpc/resolver/index.js"

export function SetResolvingTimeout(timeout: time.Duration): void {
	dns.__goscript_set_ResolvingTimeout(timeout)
}

export function NewBuilder(): resolver.Builder | null {
	return dns.NewBuilder()
}

export function SetMinResolutionInterval(d: time.Duration): void {
	dns.__goscript_set_MinResolutionInterval(d)
}
