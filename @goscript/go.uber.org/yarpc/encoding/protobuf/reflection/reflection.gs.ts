// Generated file based on reflection.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

$.registerTypePackagePath("go.uber.org/yarpc/encoding/protobuf/reflection", ["reflection.ServerMeta"])

export class ServerMeta {
	// The fully qualified service name
	public get ServiceName(): string {
		return this._fields.ServiceName
	}

	public set ServiceName(value: string) {
		this._fields.ServiceName = value
	}

	// FileDescriptors returns an array of all compressed file descriptors for the
	// file in which the service is defined and all its transitive dependencies.
	public get FileDescriptors(): $.Slice<$.Slice<number>> {
		return this._fields.FileDescriptors
	}

	public set FileDescriptors(value: $.Slice<$.Slice<number>>) {
		this._fields.FileDescriptors = value
	}

	public _fields: {
		ServiceName: string
		FileDescriptors: $.Slice<$.Slice<number>>
	}

	constructor(init?: Partial<{ServiceName?: string, FileDescriptors?: $.Slice<$.Slice<number>>}>, __goscriptValue?: boolean) {
		this._fields = {
			ServiceName: init?.ServiceName ?? ("" as string),
			FileDescriptors: init?.FileDescriptors ?? (null! as $.Slice<$.Slice<number>>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ServerMeta {
		return new ServerMeta(this, true)
	}

	public __goscriptAssign(source: ServerMeta): void {
		const target = this._fields
		const values = source._fields
		target.ServiceName = values.ServiceName
		target.FileDescriptors = values.FileDescriptors
	}

	static __typeInfo = $.registerStructType(
		"reflection.ServerMeta",
		() => new ServerMeta(),
		() => [],
		ServerMeta,
		() => [/* @__PURE__ */ $.structField("ServiceName", /* @__PURE__ */ $.basicType("string"), [0], 0, true), /* @__PURE__ */ $.structField("FileDescriptors", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))), [1], 16, true)]
	)
}
