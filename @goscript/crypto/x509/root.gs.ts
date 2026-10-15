// Generated file based on root.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as godebug from "@goscript/internal/godebug/index.js"

import * as fs from "@goscript/io/fs/index.js"

import * as os from "@goscript/os/index.js"

import * as filepath from "@goscript/path/filepath/index.js"

import * as runtime from "@goscript/runtime/index.js"

import * as strings from "@goscript/strings/index.js"

import * as sync from "@goscript/sync/index.js"

import "@goscript/unsafe/index.js"

import type * as crypto from "@goscript/crypto/index.js"

import * as pkix from "@goscript/crypto/x509/pkix/index.js"

import * as asn1 from "@goscript/encoding/asn1/index.js"

import type * as io from "@goscript/io/index.js"

import * as big from "@goscript/math/big/index.js"

import * as net from "@goscript/net/index.js"

import * as url from "@goscript/net/url/index.js"

import * as time from "@goscript/time/index.js"

import * as __goscript_cert_pool from "./cert_pool.gs.ts"

import * as __goscript_oid from "./oid.gs.ts"

import * as __goscript_root_unix from "./root_unix.gs.ts"

import * as __goscript_root_wasm from "./root_wasm.gs.ts"

import * as __goscript_verify from "./verify.gs.ts"

import * as __goscript_x509 from "./x509.gs.ts"

import * as __goscript_x509_string from "./x509_string.gs.ts"
import "@goscript/internal/godebug/index.js"
import "@goscript/io/fs/index.js"
import "@goscript/os/index.js"
import "@goscript/path/filepath/index.js"
import "@goscript/runtime/index.js"
import "@goscript/strings/index.js"
import "@goscript/sync/index.js"
import "@goscript/crypto/x509/pkix/index.js"
import "@goscript/encoding/asn1/index.js"
import "@goscript/math/big/index.js"
import "@goscript/net/index.js"
import "@goscript/net/url/index.js"
import "@goscript/time/index.js"
import "./cert_pool.gs.ts"
import "./oid.gs.ts"
import "./root_unix.gs.ts"
import "./root_wasm.gs.ts"
import "./verify.gs.ts"
import "./x509.gs.ts"
import "./x509_string.gs.ts"

export const certFileEnv: string = "SSL_CERT_FILE"

export const certDirEnv: string = "SSL_CERT_DIR"

export let once: $.VarRef<sync.Once> = $.varRef($.markAsStructValue(new sync.Once()))

export function __goscript_set_once(__goscriptValue: sync.Once): void {
	$.assignStruct(once.value, __goscriptValue)
}

export let systemRootsMu: $.VarRef<sync.RWMutex> = $.varRef($.markAsStructValue(new sync.RWMutex()))

export function __goscript_set_systemRootsMu(__goscriptValue: sync.RWMutex): void {
	$.assignStruct(systemRootsMu.value, __goscriptValue)
}

export let systemRoots: __goscript_cert_pool.CertPool | $.VarRef<__goscript_cert_pool.CertPool> | null = null! as __goscript_cert_pool.CertPool | $.VarRef<__goscript_cert_pool.CertPool> | null

export function __goscript_set_systemRoots(__goscriptValue: __goscript_cert_pool.CertPool | $.VarRef<__goscript_cert_pool.CertPool> | null): void {
	systemRoots = __goscriptValue
}

export let systemRootsErr: $.GoError = null! as $.GoError

export function __goscript_set_systemRootsErr(__goscriptValue: $.GoError): void {
	systemRootsErr = __goscriptValue
}

export let fallbacksSet: boolean = false

export function __goscript_set_fallbacksSet(__goscriptValue: boolean): void {
	fallbacksSet = __goscriptValue
}

export let useFallbackRoots: boolean = false

export function __goscript_set_useFallbackRoots(__goscriptValue: boolean): void {
	useFallbackRoots = __goscriptValue
}

export async function systemRootsPool(): globalThis.Promise<__goscript_cert_pool.CertPool | $.VarRef<__goscript_cert_pool.CertPool> | null> {
	using __defer = new $.DisposableStack()
	await once.value.Do(initSystemRoots)
	await systemRootsMu.value.RLock()
	const __goscriptDeferCallee0 = $.functionValue(((__receiver) => () => __receiver.RUnlock())(systemRootsMu.value), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*RWMutex).RUnlock-fm")
	__defer.defer(() => { __goscriptDeferCallee0() })
	return systemRoots
}

export async function initSystemRoots(): globalThis.Promise<void> {
	using __defer = new $.DisposableStack()
	await systemRootsMu.value.Lock()
	const __goscriptDeferCallee1 = $.functionValue(((__receiver) => () => __receiver.Unlock())(systemRootsMu.value), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*RWMutex).Unlock-fm")
	__defer.defer(() => { __goscriptDeferCallee1() })

	let fallbackRoots: __goscript_cert_pool.CertPool | $.VarRef<__goscript_cert_pool.CertPool> | null = systemRoots
	let __goscriptTuple0: any = await loadSystemRoots()
	systemRoots = __goscriptTuple0[0]
	systemRootsErr = __goscriptTuple0[1]
	if (systemRootsErr != null) {
		systemRoots = null
	}

	if (fallbackRoots == null) {
		return
	}

	let systemCertsAvail = (systemRoots != null) && (((systemRoots !== null && (systemRoots as any).__isVarRef !== true && (systemRoots as any).__goValue === undefined ? ((systemRoots as any) as __goscript_cert_pool.CertPool).len() : __goscript_cert_pool.CertPool.prototype.len.call(systemRoots)) > 0) || $.pointerValue<__goscript_cert_pool.CertPool>(systemRoots).systemPool)

	if (!useFallbackRoots && systemCertsAvail) {
		return
	}

	if (useFallbackRoots && systemCertsAvail) {
		godebug.Setting.prototype.IncNonDefault.call($.pointerValue<godebug.Setting>(x509usefallbackroots))
	}

	let __goscriptAssign0_0: __goscript_cert_pool.CertPool | $.VarRef<__goscript_cert_pool.CertPool> | null = fallbackRoots
	let __goscriptAssign0_1: $.GoError = null
	systemRoots = __goscriptAssign0_0
	systemRootsErr = __goscriptAssign0_1
}

export let x509usefallbackroots: godebug.Setting | $.VarRef<godebug.Setting> | null = godebug.New("x509usefallbackroots")

export function __goscript_set_x509usefallbackroots(__goscriptValue: godebug.Setting | $.VarRef<godebug.Setting> | null): void {
	x509usefallbackroots = __goscriptValue
}

export async function SetFallbackRoots(roots: __goscript_cert_pool.CertPool | $.VarRef<__goscript_cert_pool.CertPool> | null): globalThis.Promise<void> {
	using __defer = new $.DisposableStack()
	if (roots == null) {
		$.panic("roots must be non-nil")
	}

	await systemRootsMu.value.Lock()
	const __goscriptDeferCallee2 = $.functionValue(((__receiver) => () => __receiver.Unlock())(systemRootsMu.value), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*RWMutex).Unlock-fm")
	__defer.defer(() => { __goscriptDeferCallee2() })

	if (fallbacksSet) {
		$.panic("SetFallbackRoots has already been called")
	}
	fallbacksSet = true

	// Handle case when initSystemRoots was not yet executed.
	// We handle that specially instead of calling loadSystemRoots, to avoid
	// spending excessive amount of cpu here, since the SetFallbackRoots in most cases
	// is going to be called at program startup.
	if ((systemRoots == null) && (systemRootsErr == null)) {
		systemRoots = roots
		useFallbackRoots = $.stringEqual(godebug.Setting.prototype.Value.call($.pointerValue<godebug.Setting>(x509usefallbackroots)), "1")
		return
	}

	await once.value.Do($.functionValue((): void => {
		$.panic("unreachable")
	}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)))

	let forceFallbackRoots = $.stringEqual(godebug.Setting.prototype.Value.call($.pointerValue<godebug.Setting>(x509usefallbackroots)), "1")
	let systemCertsAvail = (systemRoots != null) && (((systemRoots !== null && (systemRoots as any).__isVarRef !== true && (systemRoots as any).__goValue === undefined ? ((systemRoots as any) as __goscript_cert_pool.CertPool).len() : __goscript_cert_pool.CertPool.prototype.len.call(systemRoots)) > 0) || $.pointerValue<__goscript_cert_pool.CertPool>(systemRoots).systemPool)

	if (!forceFallbackRoots && systemCertsAvail) {
		return
	}

	if (forceFallbackRoots && systemCertsAvail) {
		godebug.Setting.prototype.IncNonDefault.call($.pointerValue<godebug.Setting>(x509usefallbackroots))
	}

	let __goscriptAssign1_0: __goscript_cert_pool.CertPool | $.VarRef<__goscript_cert_pool.CertPool> | null = roots
	let __goscriptAssign1_1: $.GoError = null
	systemRoots = __goscriptAssign1_0
	systemRootsErr = __goscriptAssign1_1
}

export let x509sslcertoverrideplatform: godebug.Setting | $.VarRef<godebug.Setting> | null = godebug.New("x509sslcertoverrideplatform")

export function __goscript_set_x509sslcertoverrideplatform(__goscriptValue: godebug.Setting | $.VarRef<godebug.Setting> | null): void {
	x509sslcertoverrideplatform = __goscriptValue
}

export async function loadSystemRoots(): globalThis.Promise<[__goscript_cert_pool.CertPool | $.VarRef<__goscript_cert_pool.CertPool> | null, $.GoError]> {
	let certFilePath = os.Getenv("SSL_CERT_FILE")
	let certDirPath = os.Getenv("SSL_CERT_DIR")

	if ((($.stringEqual(runtime.GOOS, "windows")) || ($.stringEqual(runtime.GOOS, "darwin"))) || ($.stringEqual(runtime.GOOS, "ios"))) {
		if (($.stringEqual(certFilePath, "")) && ($.stringEqual(certDirPath, ""))) {
			return [new __goscript_cert_pool.CertPool({systemPool: true}), null]
		}
		if ($.stringEqual(godebug.Setting.prototype.Value.call($.pointerValue<godebug.Setting>(x509sslcertoverrideplatform)), "0")) {
			godebug.Setting.prototype.IncNonDefault.call($.pointerValue<godebug.Setting>(x509sslcertoverrideplatform))
			return [new __goscript_cert_pool.CertPool({systemPool: true}), null]
		}
	}

	return loadOnDiskRoots(certFilePath, certDirPath)
}

export async function loadOnDiskRoots(certFilePath: string, certDirPath: string): globalThis.Promise<[__goscript_cert_pool.CertPool | $.VarRef<__goscript_cert_pool.CertPool> | null, $.GoError]> {
	let roots: __goscript_cert_pool.CertPool | $.VarRef<__goscript_cert_pool.CertPool> | null = __goscript_cert_pool.NewCertPool()

	let files: $.Slice<string> = __goscript_root_wasm.certFiles
	if (!$.stringEqual(certFilePath, "")) {
		files = $.arrayToSlice<string>([certFilePath])
	}

	let firstErr: $.GoError = null! as $.GoError
	for (let __goscriptRangeTarget0 = files, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
		let file = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as string)
		let __goscriptTuple1: any = await os.ReadFile(file)
		let data: $.Slice<number> = __goscriptTuple1[0]
		let err = __goscriptTuple1[1]
		if (err == null) {
			await (roots !== null && (roots as any).__isVarRef !== true && (roots as any).__goValue === undefined ? ((roots as any) as __goscript_cert_pool.CertPool).AppendCertsFromPEM(data) : __goscript_cert_pool.CertPool.prototype.AppendCertsFromPEM.call(roots, data))
			break
		}
		if ((firstErr == null) && !os.IsNotExist($.pointerValueOrNil(err)!)) {
			firstErr = err
		}
	}

	let dirs: $.Slice<string> = __goscript_root_wasm.certDirectories
	if (!$.stringEqual(certDirPath, "")) {
		// OpenSSL and BoringSSL both use ":" as the SSL_CERT_DIR separator on
		// Unix-like systems, and ";" on Windows.
		// See:
		//  * https://golang.org/issue/35325
		//  * https://docs.openssl.org/4.0/man1/openssl-rehash/#environment
		dirs = filepath.SplitList(certDirPath)
	}

	for (let __goscriptRangeTarget2 = dirs, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget2), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
		let directory = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as string)
		let __goscriptTuple2: any = await readUniqueDirectoryEntries(directory)
		let fis: $.Slice<fs.DirEntry | null> = __goscriptTuple2[0]
		let err = __goscriptTuple2[1]
		if (err != null) {
			if ((firstErr == null) && !os.IsNotExist($.pointerValueOrNil(err)!)) {
				firstErr = err
			}
			continue
		}
		for (let __goscriptRangeTarget1 = fis, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow2.length; __rangeIndex++) {
			let fi = (__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + __rangeIndex] as fs.DirEntry | null)
			let __goscriptTuple3: any = await os.ReadFile(filepath.Join(directory, (__goscriptAwait = (fi !== null && (fi as any).__isVarRef !== true && (fi as any).__goValue === undefined ? (fi as Exclude<fs.DirEntry, null>) : $.pointerValue<Exclude<fs.DirEntry, null>>(fi)).Name(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)))
			let data: $.Slice<number> = __goscriptTuple3[0]
			let __goscriptShadow0 = __goscriptTuple3[1]
			if (__goscriptShadow0 == null) {
				await (roots !== null && (roots as any).__isVarRef !== true && (roots as any).__goValue === undefined ? ((roots as any) as __goscript_cert_pool.CertPool).AppendCertsFromPEM(data) : __goscript_cert_pool.CertPool.prototype.AppendCertsFromPEM.call(roots, data))
			}
		}
	}

	if (((roots !== null && (roots as any).__isVarRef !== true && (roots as any).__goValue === undefined ? ((roots as any) as __goscript_cert_pool.CertPool).len() : __goscript_cert_pool.CertPool.prototype.len.call(roots)) > 0) || (firstErr == null)) {
		return [roots, null]
	}

	return [null, firstErr]
}

export async function readUniqueDirectoryEntries(dir: string): globalThis.Promise<[$.Slice<fs.DirEntry | null>, $.GoError]> {
	let __goscriptTuple4: any = await os.ReadDir(dir)
	let files: $.Slice<os.DirEntry | null> = __goscriptTuple4[0]
	let err = __goscriptTuple4[1]
	if (err != null) {
		return [null, err]
	}
	let uniq: $.Slice<os.DirEntry | null> = $.goSlice(files, undefined, 0)
	for (let __goscriptRangeTarget3 = files, __goscriptRangeWindow3 = $.sliceRange(__goscriptRangeTarget3), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow3.length; __rangeIndex++) {
		let f = (__goscriptRangeWindow3.backing[__goscriptRangeWindow3.offset + __rangeIndex] as os.DirEntry | null)
		if (!await isSameDirSymlink(f, dir)) {
			uniq = $.appendOne(uniq, f, $.appendZeros.nil)
		}
	}
	return [uniq, null]
}

export async function isSameDirSymlink(f: fs.DirEntry | null, dir: string): globalThis.Promise<boolean> {
	if ($.uint(((__goscriptAwait = (f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? (f as Exclude<fs.DirEntry, null>) : $.pointerValue<Exclude<fs.DirEntry, null>>(f)).Type(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) & fs.ModeSymlink), 32) == 0) {
		return false
	}
	let [target, err] = await os.Readlink(filepath.Join(dir, (__goscriptAwait = (f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? (f as Exclude<fs.DirEntry, null>) : $.pointerValue<Exclude<fs.DirEntry, null>>(f)).Name(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)))
	return (err == null) && !strings.ContainsRune(target, 47)
}

var __goscriptAwait: any
