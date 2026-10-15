// Generated file based on grpclog.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as os from "@goscript/os/index.js"

import * as internal from "@goscript/google.golang.org/grpc/grpclog/internal/index.js"

import * as __goscript_loggerv2 from "./loggerv2.gs.ts"
import "@goscript/os/index.js"
import "@goscript/google.golang.org/grpc/grpclog/internal/index.js"
import "./loggerv2.gs.ts"

async function __goscriptInit0(): globalThis.Promise<void> {
	__goscript_loggerv2.SetLoggerV2(await __goscript_loggerv2.newLoggerV2())
}

export async function V(l: number): globalThis.Promise<boolean> {
	return $.pointerValue<Exclude<internal.LoggerV2, null>>(internal.LoggerV2Impl).V(l)
}

export async function Info(args: $.Slice<any>): globalThis.Promise<void> {
	void (__goscriptAwait = $.pointerValue<Exclude<internal.LoggerV2, null>>(internal.LoggerV2Impl).Info(args), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
}

export async function Infof(format: string, args: $.Slice<any>): globalThis.Promise<void> {
	void (__goscriptAwait = $.pointerValue<Exclude<internal.LoggerV2, null>>(internal.LoggerV2Impl).Infof(format, args), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
}

export async function Infoln(args: $.Slice<any>): globalThis.Promise<void> {
	void (__goscriptAwait = $.pointerValue<Exclude<internal.LoggerV2, null>>(internal.LoggerV2Impl).Infoln(args), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
}

export async function Warning(args: $.Slice<any>): globalThis.Promise<void> {
	void (__goscriptAwait = $.pointerValue<Exclude<internal.LoggerV2, null>>(internal.LoggerV2Impl).Warning(args), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
}

export async function Warningf(format: string, args: $.Slice<any>): globalThis.Promise<void> {
	void (__goscriptAwait = $.pointerValue<Exclude<internal.LoggerV2, null>>(internal.LoggerV2Impl).Warningf(format, args), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
}

export async function Warningln(args: $.Slice<any>): globalThis.Promise<void> {
	void (__goscriptAwait = $.pointerValue<Exclude<internal.LoggerV2, null>>(internal.LoggerV2Impl).Warningln(args), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
}

export async function Error(args: $.Slice<any>): globalThis.Promise<void> {
	void (__goscriptAwait = $.pointerValue<Exclude<internal.LoggerV2, null>>(internal.LoggerV2Impl).Error(args), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
}

export async function Errorf(format: string, args: $.Slice<any>): globalThis.Promise<void> {
	void (__goscriptAwait = $.pointerValue<Exclude<internal.LoggerV2, null>>(internal.LoggerV2Impl).Errorf(format, args), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
}

export async function Errorln(args: $.Slice<any>): globalThis.Promise<void> {
	void (__goscriptAwait = $.pointerValue<Exclude<internal.LoggerV2, null>>(internal.LoggerV2Impl).Errorln(args), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
}

export async function Fatal(args: $.Slice<any>): globalThis.Promise<void> {
	void (__goscriptAwait = $.pointerValue<Exclude<internal.LoggerV2, null>>(internal.LoggerV2Impl).Fatal(args), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	// Make sure fatal logs will exit.
	os.Exit(1)
}

export async function Fatalf(format: string, args: $.Slice<any>): globalThis.Promise<void> {
	void (__goscriptAwait = $.pointerValue<Exclude<internal.LoggerV2, null>>(internal.LoggerV2Impl).Fatalf(format, args), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	// Make sure fatal logs will exit.
	os.Exit(1)
}

export async function Fatalln(args: $.Slice<any>): globalThis.Promise<void> {
	void (__goscriptAwait = $.pointerValue<Exclude<internal.LoggerV2, null>>(internal.LoggerV2Impl).Fatalln(args), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	// Make sure fatal logs will exit.
	os.Exit(1)
}

export async function Print(args: $.Slice<any>): globalThis.Promise<void> {
	void (__goscriptAwait = $.pointerValue<Exclude<internal.LoggerV2, null>>(internal.LoggerV2Impl).Info(args), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
}

export async function Printf(format: string, args: $.Slice<any>): globalThis.Promise<void> {
	void (__goscriptAwait = $.pointerValue<Exclude<internal.LoggerV2, null>>(internal.LoggerV2Impl).Infof(format, args), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
}

export async function Println(args: $.Slice<any>): globalThis.Promise<void> {
	void (__goscriptAwait = $.pointerValue<Exclude<internal.LoggerV2, null>>(internal.LoggerV2Impl).Infoln(args), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
}

export async function InfoDepth(depth: number, args: $.Slice<any>): globalThis.Promise<void> {
	if (internal.DepthLoggerV2Impl != null) {
		void (__goscriptAwait = $.pointerValue<Exclude<internal.DepthLoggerV2, null>>(internal.DepthLoggerV2Impl).InfoDepth(depth, args), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	} else {
		void (__goscriptAwait = $.pointerValue<Exclude<internal.LoggerV2, null>>(internal.LoggerV2Impl).Infoln(args), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}
}

export async function WarningDepth(depth: number, args: $.Slice<any>): globalThis.Promise<void> {
	if (internal.DepthLoggerV2Impl != null) {
		void (__goscriptAwait = $.pointerValue<Exclude<internal.DepthLoggerV2, null>>(internal.DepthLoggerV2Impl).WarningDepth(depth, args), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	} else {
		void (__goscriptAwait = $.pointerValue<Exclude<internal.LoggerV2, null>>(internal.LoggerV2Impl).Warningln(args), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}
}

export async function ErrorDepth(depth: number, args: $.Slice<any>): globalThis.Promise<void> {
	if (internal.DepthLoggerV2Impl != null) {
		void (__goscriptAwait = $.pointerValue<Exclude<internal.DepthLoggerV2, null>>(internal.DepthLoggerV2Impl).ErrorDepth(depth, args), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	} else {
		void (__goscriptAwait = $.pointerValue<Exclude<internal.LoggerV2, null>>(internal.LoggerV2Impl).Errorln(args), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}
}

export async function FatalDepth(depth: number, args: $.Slice<any>): globalThis.Promise<void> {
	if (internal.DepthLoggerV2Impl != null) {
		void (__goscriptAwait = $.pointerValue<Exclude<internal.DepthLoggerV2, null>>(internal.DepthLoggerV2Impl).FatalDepth(depth, args), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	} else {
		void (__goscriptAwait = $.pointerValue<Exclude<internal.LoggerV2, null>>(internal.LoggerV2Impl).Fatalln(args), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}
	os.Exit(1)
}

var __goscriptAwait: any

export { __goscriptInit0 }
