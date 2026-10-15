// Generated file based on deterministic_wrappers.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as time from "@goscript/time/index.js"

import * as internal from "@goscript/go.uber.org/cadence/internal/index.js"

import * as __goscript_context from "./context.gs.ts"
import "@goscript/time/index.js"
import "@goscript/go.uber.org/cadence/internal/index.js"
import "./context.gs.ts"

export type Channel = internal.Channel | null

export type Selector = internal.Selector | null

export type Future = internal.Future | null

export type Settable = internal.Settable | null

export type WaitGroup = internal.WaitGroup | null

export async function Await(ctx: __goscript_context.Context | null, condition: (() => boolean | globalThis.Promise<boolean>) | null): globalThis.Promise<$.GoError> {
	return internal.Await(ctx, condition)
}

export async function NewChannel(ctx: __goscript_context.Context | null): globalThis.Promise<Channel | null> {
	return internal.NewChannel(ctx)
}

export async function NewNamedChannel(ctx: __goscript_context.Context | null, name: string): globalThis.Promise<Channel | null> {
	return internal.NewNamedChannel(ctx, name)
}

export async function NewBufferedChannel(ctx: __goscript_context.Context | null, size: number): globalThis.Promise<Channel | null> {
	return internal.NewBufferedChannel(ctx, size)
}

export async function NewNamedBufferedChannel(ctx: __goscript_context.Context | null, name: string, size: number): globalThis.Promise<Channel | null> {
	return internal.NewNamedBufferedChannel(ctx, name, size)
}

export async function NewSelector(ctx: __goscript_context.Context | null): globalThis.Promise<Selector | null> {
	return internal.NewSelector(ctx)
}

export function NewNamedSelector(ctx: __goscript_context.Context | null, name: string): Selector | null {
	return internal.NewNamedSelector(ctx, name)
}

export async function NewWaitGroup(ctx: __goscript_context.Context | null): globalThis.Promise<WaitGroup | null> {
	return internal.NewWaitGroup(ctx)
}

export async function Go(ctx: __goscript_context.Context | null, f: ((ctx: __goscript_context.Context | null) => void) | null): globalThis.Promise<void> {
	await internal.Go(ctx, f)
}

export async function GoNamed(ctx: __goscript_context.Context | null, name: string, f: ((ctx: __goscript_context.Context | null) => void) | null): globalThis.Promise<void> {
	await internal.GoNamed(ctx, name, f)
}

export async function NewFuture(ctx: __goscript_context.Context | null): globalThis.Promise<[Future | null, Settable | null]> {
	return internal.NewFuture(ctx)
}

export async function Now(ctx: __goscript_context.Context | null): globalThis.Promise<time.Time> {
	return internal.Now(ctx)
}

export async function NewTimer(ctx: __goscript_context.Context | null, d: time.Duration): globalThis.Promise<Future | null> {
	return internal.NewTimer(ctx, d)
}

export async function Sleep(ctx: __goscript_context.Context | null, d: time.Duration): globalThis.Promise<$.GoError> {
	let err: $.GoError = null! as $.GoError
	return internal.Sleep(ctx, d)
}
