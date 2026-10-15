// Generated file based on mountinfo.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bufio from "@goscript/bufio/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as strconv from "@goscript/strconv/index.js"

import * as strings from "@goscript/strings/index.js"

import * as util from "@goscript/github.com/prometheus/procfs/internal/util/index.js"

import type * as io from "@goscript/io/index.js"
import "@goscript/bufio/index.js"
import "@goscript/bytes/index.js"
import "@goscript/fmt/index.js"
import "@goscript/strconv/index.js"
import "@goscript/strings/index.js"
import "@goscript/github.com/prometheus/procfs/internal/util/index.js"

$.registerTypePackagePath("github.com/prometheus/procfs", ["procfs.MountInfo"])

export class MountInfo {
	// Unique ID for the mount
	public get MountID(): number {
		return this._fields.MountID
	}

	public set MountID(value: number) {
		this._fields.MountID = value
	}

	// The ID of the parent mount
	public get ParentID(): number {
		return this._fields.ParentID
	}

	public set ParentID(value: number) {
		this._fields.ParentID = value
	}

	// The value of `st_dev` for the files on this FS
	public get MajorMinorVer(): string {
		return this._fields.MajorMinorVer
	}

	public set MajorMinorVer(value: string) {
		this._fields.MajorMinorVer = value
	}

	// The pathname of the directory in the FS that forms
	// the root for this mount
	public get Root(): string {
		return this._fields.Root
	}

	public set Root(value: string) {
		this._fields.Root = value
	}

	// The pathname of the mount point relative to the root
	public get MountPoint(): string {
		return this._fields.MountPoint
	}

	public set MountPoint(value: string) {
		this._fields.MountPoint = value
	}

	// Mount options
	public get Options(): globalThis.Map<string, string> | null {
		return this._fields.Options
	}

	public set Options(value: globalThis.Map<string, string> | null) {
		this._fields.Options = value
	}

	// Zero or more optional fields
	public get OptionalFields(): globalThis.Map<string, string> | null {
		return this._fields.OptionalFields
	}

	public set OptionalFields(value: globalThis.Map<string, string> | null) {
		this._fields.OptionalFields = value
	}

	// The Filesystem type
	public get FSType(): string {
		return this._fields.FSType
	}

	public set FSType(value: string) {
		this._fields.FSType = value
	}

	// FS specific information or "none"
	public get Source(): string {
		return this._fields.Source
	}

	public set Source(value: string) {
		this._fields.Source = value
	}

	// Superblock options
	public get SuperOptions(): globalThis.Map<string, string> | null {
		return this._fields.SuperOptions
	}

	public set SuperOptions(value: globalThis.Map<string, string> | null) {
		this._fields.SuperOptions = value
	}

	public _fields: {
		MountID: number
		ParentID: number
		MajorMinorVer: string
		Root: string
		MountPoint: string
		Options: globalThis.Map<string, string> | null
		OptionalFields: globalThis.Map<string, string> | null
		FSType: string
		Source: string
		SuperOptions: globalThis.Map<string, string> | null
	}

	constructor(init?: Partial<{MountID?: number, ParentID?: number, MajorMinorVer?: string, Root?: string, MountPoint?: string, Options?: globalThis.Map<string, string> | null, OptionalFields?: globalThis.Map<string, string> | null, FSType?: string, Source?: string, SuperOptions?: globalThis.Map<string, string> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			MountID: init?.MountID ?? (0 as number),
			ParentID: init?.ParentID ?? (0 as number),
			MajorMinorVer: init?.MajorMinorVer ?? ("" as string),
			Root: init?.Root ?? ("" as string),
			MountPoint: init?.MountPoint ?? ("" as string),
			Options: init?.Options ?? (null! as globalThis.Map<string, string> | null),
			OptionalFields: init?.OptionalFields ?? (null! as globalThis.Map<string, string> | null),
			FSType: init?.FSType ?? ("" as string),
			Source: init?.Source ?? ("" as string),
			SuperOptions: init?.SuperOptions ?? (null! as globalThis.Map<string, string> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): MountInfo {
		return new MountInfo(this, true)
	}

	public __goscriptAssign(source: MountInfo): void {
		const target = this._fields
		const values = source._fields
		target.MountID = values.MountID
		target.ParentID = values.ParentID
		target.MajorMinorVer = values.MajorMinorVer
		target.Root = values.Root
		target.MountPoint = values.MountPoint
		target.Options = values.Options
		target.OptionalFields = values.OptionalFields
		target.FSType = values.FSType
		target.Source = values.Source
		target.SuperOptions = values.SuperOptions
	}

	static __typeInfo = $.registerStructType(
		"procfs.MountInfo",
		() => new MountInfo(),
		() => [],
		MountInfo,
		() => [/* @__PURE__ */ $.structField("MountID", /* @__PURE__ */ $.basicType("int"), [0], 0, true), /* @__PURE__ */ $.structField("ParentID", /* @__PURE__ */ $.basicType("int"), [1], 8, true), /* @__PURE__ */ $.structField("MajorMinorVer", /* @__PURE__ */ $.basicType("string"), [2], 16, true), /* @__PURE__ */ $.structField("Root", /* @__PURE__ */ $.basicType("string"), [3], 32, true), /* @__PURE__ */ $.structField("MountPoint", /* @__PURE__ */ $.basicType("string"), [4], 48, true), /* @__PURE__ */ $.structField("Options", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string")), [5], 64, true), /* @__PURE__ */ $.structField("OptionalFields", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string")), [6], 72, true), /* @__PURE__ */ $.structField("FSType", /* @__PURE__ */ $.basicType("string"), [7], 80, true), /* @__PURE__ */ $.structField("Source", /* @__PURE__ */ $.basicType("string"), [8], 96, true), /* @__PURE__ */ $.structField("SuperOptions", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string")), [9], 112, true)]
	)
}

export async function parseMountInfo(info: $.Slice<number>): globalThis.Promise<[$.Slice<MountInfo | $.VarRef<MountInfo> | null>, $.GoError]> {
	let mounts: $.Slice<MountInfo | $.VarRef<MountInfo> | null> = $.arrayToSlice<MountInfo | $.VarRef<MountInfo> | null>([])
	let scanner: bufio.Scanner | $.VarRef<bufio.Scanner> | null = bufio.NewScanner($.interfaceValue<io.Reader | null>(bytes.NewReader(info), "*bytes.Reader", /* @__PURE__ */ $.pointerType("bytes.Reader")))
	while (await (scanner !== null && (scanner as any).__isVarRef !== true && (scanner as any).__goValue === undefined ? ((scanner as any) as bufio.Scanner).Scan() : bufio.Scanner.prototype.Scan.call(scanner))) {
		let mountString = (scanner !== null && (scanner as any).__isVarRef !== true && (scanner as any).__goValue === undefined ? ((scanner as any) as bufio.Scanner).Text() : bufio.Scanner.prototype.Text.call(scanner))
		let __goscriptTuple0: any = parseMountInfoString(mountString)
		let parsedMounts: MountInfo | $.VarRef<MountInfo> | null = __goscriptTuple0[0]
		let err = __goscriptTuple0[1]
		if (err != null) {
			return [null, err]
		}
		mounts = $.appendOne(mounts, parsedMounts, $.appendZeros.nil)
	}

	let err = (scanner !== null && (scanner as any).__isVarRef !== true && (scanner as any).__goValue === undefined ? ((scanner as any) as bufio.Scanner).Err() : bufio.Scanner.prototype.Err.call(scanner))
	return [mounts, err]
}

export function parseMountInfoString(mountString: string): [MountInfo | $.VarRef<MountInfo> | null, $.GoError] {
	let err: $.GoError = null! as $.GoError

	let mountInfo: $.Slice<string> = strings.Split(mountString, " ")
	let mountInfoLength = $.sliceLen(mountInfo)
	if (mountInfoLength < 10) {
		return [null, fmt.Errorf("couldn't find enough fields in mount string: %s", mountString)]
	}

	if (!$.stringEqual($.arrayIndex(mountInfo!, mountInfoLength - 4), "-")) {
		return [null, fmt.Errorf("couldn't find separator in expected field: %s", $.arrayIndex(mountInfo!, mountInfoLength - 4))]
	}

	let mount: MountInfo | $.VarRef<MountInfo> | null = (() => { const __goscriptLiteralField0 = mountOptionsParser($.arrayIndex(mountInfo!, 5)); const __goscriptLiteralField1 = mountOptionsParser($.arrayIndex(mountInfo!, mountInfoLength - 1)); return new MountInfo({MajorMinorVer: $.arrayIndex(mountInfo!, 2), Root: $.arrayIndex(mountInfo!, 3), MountPoint: $.arrayIndex(mountInfo!, 4), Options: __goscriptLiteralField0, OptionalFields: null, FSType: $.arrayIndex(mountInfo!, mountInfoLength - 3), Source: $.arrayIndex(mountInfo!, mountInfoLength - 2), SuperOptions: __goscriptLiteralField1}) })()
	let mount$: MountInfo = mount == null ? $.pointerTarget<MountInfo>(mount) : (mount as any).__isVarRef === true ? (mount as any).value : (mount as any).__goValue === undefined ? (mount as any) : $.pointerTarget<MountInfo>(mount)

	let __goscriptTuple1: any = strconv.Atoi($.arrayIndex(mountInfo!, 0));
	;(mount$ as MountInfo).MountID = __goscriptTuple1[0]
	err = __goscriptTuple1[1]
	if (err != null) {
		return [null, fmt.Errorf("failed to parse mount ID")]
	}
	let __goscriptTuple2: any = strconv.Atoi($.arrayIndex(mountInfo!, 1));
	;(mount$ as MountInfo).ParentID = __goscriptTuple2[0]
	err = __goscriptTuple2[1]
	if (err != null) {
		return [null, fmt.Errorf("failed to parse parent ID")]
	}
	// Has optional fields, which is a space separated list of values.
	// Example: shared:2 master:7
	if (!$.stringEqual($.arrayIndex(mountInfo!, 6), "")) {
		let __goscriptTuple3: any = mountOptionsParseOptionalFields($.goSlice(mountInfo, 6, mountInfoLength - 4));
		;(mount$ as MountInfo).OptionalFields = __goscriptTuple3[0]
		err = __goscriptTuple3[1]
		if (err != null) {
			return [null, err]
		}
	}
	return [mount, null]
}

export function mountOptionsIsValidField(s: string): boolean {
	switch (s) {
		case "shared":
		case "master":
		case "propagate_from":
		case "unbindable":
		{
			return true
			break
		}
	}
	return false
}

export function mountOptionsParseOptionalFields(o: $.Slice<string>): [globalThis.Map<string, string> | null, $.GoError] {
	let optionalFields: globalThis.Map<string, string> | null = $.makeMap<string, string>()
	for (let __goscriptRangeTarget0 = o, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
		let field = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as string)
		let optionSplit: $.Slice<string> = strings.SplitN(field, ":", 2)
		let value = ""
		if ($.sliceLen(optionSplit) == 2) {
			value = $.arrayIndex(optionSplit!, 1)
		}
		if (mountOptionsIsValidField($.arrayIndex(optionSplit!, 0))) {
			$.mapSet(optionalFields, $.arrayIndex(optionSplit!, 0), value)
		}
	}
	return [optionalFields, null]
}

export function mountOptionsParser(mountOptions: string): globalThis.Map<string, string> | null {
	let opts: globalThis.Map<string, string> | null = $.makeMap<string, string>()
	let options: $.Slice<string> = strings.Split(mountOptions, ",")
	for (let __goscriptRangeTarget1 = options, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
		let opt = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as string)
		let splitOption: $.Slice<string> = strings.Split(opt, "=")
		if ($.sliceLen(splitOption) < 2) {
			let key = $.arrayIndex(splitOption!, 0)
			$.mapSet(opts, key, "")
		} else {
			let key = $.arrayIndex(splitOption!, 0)
			let value = $.arrayIndex(splitOption!, 1)
			$.mapSet(opts, key, value)
		}
	}
	return opts
}

export async function GetMounts(): globalThis.Promise<[$.Slice<MountInfo | $.VarRef<MountInfo> | null>, $.GoError]> {
	let __goscriptTuple4: any = await util.ReadFileNoStat("/proc/self/mountinfo")
	let data: $.Slice<number> = __goscriptTuple4[0]
	let err = __goscriptTuple4[1]
	if (err != null) {
		return [null, err]
	}
	return parseMountInfo(data)
}

export async function GetProcMounts(pid: number): globalThis.Promise<[$.Slice<MountInfo | $.VarRef<MountInfo> | null>, $.GoError]> {
	let __goscriptTuple5: any = await util.ReadFileNoStat(await fmt.Sprintf("/proc/%d/mountinfo", $.basicInterfaceValue(pid, "int")))
	let data: $.Slice<number> = __goscriptTuple5[0]
	let err = __goscriptTuple5[1]
	if (err != null) {
		return [null, err]
	}
	return parseMountInfo(data)
}
