// Generated file based on fs.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as os from "@goscript/os/index.js"

import * as filepath from "@goscript/path/filepath/index.js"

import * as fs2 from "@goscript/io/fs/index.js"
import "@goscript/fmt/index.js"
import "@goscript/os/index.js"
import "@goscript/path/filepath/index.js"
import "@goscript/io/fs/index.js"

$.registerTypePackagePath("github.com/prometheus/procfs/internal/fs", ["fs.FS"])

export type FS = string

$.registerNamedValueType(
	"fs.FS",
	{Path: (receiver: any, ...args: any[]) => (FS_Path as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Path", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))]], [/* @__PURE__ */ $.basicType("string")])]
);

$.registerNamedValueType(
	"*fs.FS",
	{Path: (receiver: any, ...args: any[]) => (FS_Path as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Path", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))]], [/* @__PURE__ */ $.basicType("string")])]
);

export const DefaultProcMountPoint: string = "/proc"

export const DefaultSysMountPoint: string = "/sys"

export const DefaultConfigfsMountPoint: string = "/sys/kernel/config"

export async function NewFS(mountPoint: string): globalThis.Promise<[FS, $.GoError]> {
	let [info, err] = await os.Stat(mountPoint)
	if (err != null) {
		return ["", fmt.Errorf("could not read %q: %w", mountPoint, (err as any))]
	}
	if (!(__goscriptAwait = (info !== null && (info as any).__isVarRef !== true && (info as any).__goValue === undefined ? (info as Exclude<fs2.FileInfo, null>) : $.pointerValue<Exclude<fs2.FileInfo, null>>(info)).IsDir(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
		return ["", fmt.Errorf("mount point %q is not a directory", mountPoint)]
	}

	return [mountPoint, null]
}

export function FS_Path(fs: FS, p: $.Slice<string>): string {
	return filepath.Join(...($.appendSlice($.arrayToSlice<string>([fs]), p) ?? []))
}

var __goscriptAwait: any
