// Generated file based on response_writer.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as multierr from "@goscript/go.uber.org/multierr/index.js"

import * as transport from "@goscript/go.uber.org/yarpc/api/transport/index.js"

import * as metadata from "@goscript/google.golang.org/grpc/metadata/index.js"

import * as __goscript_headers from "./headers.gs.ts"
import "@goscript/bytes/index.js"
import "@goscript/go.uber.org/multierr/index.js"
import "@goscript/go.uber.org/yarpc/api/transport/index.js"
import "@goscript/google.golang.org/grpc/metadata/index.js"
import "./headers.gs.ts"

$.registerTypePackagePath("go.uber.org/yarpc/transport/grpc", ["grpc.responseWriter"])

export class responseWriter {
	public get buffer(): bytes.Buffer | $.VarRef<bytes.Buffer> | null {
		return this._fields.buffer
	}

	public set buffer(value: bytes.Buffer | $.VarRef<bytes.Buffer> | null) {
		this._fields.buffer = value
	}

	public get md(): metadata.MD {
		return this._fields.md
	}

	public set md(value: metadata.MD) {
		this._fields.md = value
	}

	public get headerErr(): $.GoError {
		return this._fields.headerErr
	}

	public set headerErr(value: $.GoError) {
		this._fields.headerErr = value
	}

	public get isApplicationError(): boolean {
		return this._fields.isApplicationError
	}

	public set isApplicationError(value: boolean) {
		this._fields.isApplicationError = value
	}

	public get appErrorMeta(): transport.ApplicationErrorMeta | $.VarRef<transport.ApplicationErrorMeta> | null {
		return this._fields.appErrorMeta
	}

	public set appErrorMeta(value: transport.ApplicationErrorMeta | $.VarRef<transport.ApplicationErrorMeta> | null) {
		this._fields.appErrorMeta = value
	}

	public get responseSize(): number {
		return this._fields.responseSize
	}

	public set responseSize(value: number) {
		this._fields.responseSize = value
	}

	public _fields: {
		buffer: bytes.Buffer | $.VarRef<bytes.Buffer> | null
		md: metadata.MD
		headerErr: $.GoError
		isApplicationError: boolean
		appErrorMeta: transport.ApplicationErrorMeta | $.VarRef<transport.ApplicationErrorMeta> | null
		responseSize: number
	}

	constructor(init?: Partial<{buffer?: bytes.Buffer | $.VarRef<bytes.Buffer> | null, md?: metadata.MD, headerErr?: $.GoError, isApplicationError?: boolean, appErrorMeta?: transport.ApplicationErrorMeta | $.VarRef<transport.ApplicationErrorMeta> | null, responseSize?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			buffer: init?.buffer ?? (null! as bytes.Buffer | $.VarRef<bytes.Buffer> | null),
			md: init?.md ?? (null! as metadata.MD),
			headerErr: init?.headerErr ?? (null! as $.GoError),
			isApplicationError: init?.isApplicationError ?? (false as boolean),
			appErrorMeta: init?.appErrorMeta ?? (null! as transport.ApplicationErrorMeta | $.VarRef<transport.ApplicationErrorMeta> | null),
			responseSize: init?.responseSize ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): responseWriter {
		return new responseWriter(this, true)
	}

	public __goscriptAssign(source: responseWriter): void {
		const target = this._fields
		const values = source._fields
		target.buffer = values.buffer
		target.md = values.md
		target.headerErr = $.assignFieldValue(target.headerErr, values.headerErr, "error")
		target.isApplicationError = values.isApplicationError
		target.appErrorMeta = values.appErrorMeta
		target.responseSize = values.responseSize
	}

	public AddHeaders(headers: transport.Headers): void {
		let r: responseWriter | $.VarRef<responseWriter> | null = this;
		const r$: responseWriter = r == null ? $.pointerTarget<responseWriter>(r) : (r as any).__isVarRef === true ? (r as any).value : (r as any).__goValue === undefined ? (r as any) : $.pointerTarget<responseWriter>(r)
		if ((r$ as responseWriter).md == null) {
			;(r$ as responseWriter).md = metadata.New(null)
		}
		;(r$ as responseWriter).headerErr = multierr.Combine($.arrayToSlice<$.GoError>([(r$ as responseWriter).headerErr, __goscript_headers.addApplicationHeaders((r$ as responseWriter).md, headers)]))
	}

	public AddSystemHeader(key: string, value: string): void {
		let r: responseWriter | $.VarRef<responseWriter> | null = this;
		const r$: responseWriter = r == null ? $.pointerTarget<responseWriter>(r) : (r as any).__isVarRef === true ? (r as any).value : (r as any).__goValue === undefined ? (r as any) : $.pointerTarget<responseWriter>(r)
		if ((r$ as responseWriter).md == null) {
			;(r$ as responseWriter).md = metadata.New(null)
		}
		;(r$ as responseWriter).headerErr = multierr.Combine($.arrayToSlice<$.GoError>([(r$ as responseWriter).headerErr, __goscript_headers.addToMetadata((r$ as responseWriter).md, key, value)]))
	}

	public ApplicationErrorMeta(): transport.ApplicationErrorMeta | $.VarRef<transport.ApplicationErrorMeta> | null {
		const r: responseWriter | $.VarRef<responseWriter> | null = this;
		return $.pointerValue<responseWriter>(r).appErrorMeta
	}

	public Bytes(): $.Slice<number> {
		const r: responseWriter | $.VarRef<responseWriter> | null = this;
		const r$: responseWriter = r == null ? $.pointerTarget<responseWriter>(r) : (r as any).__isVarRef === true ? (r as any).value : (r as any).__goValue === undefined ? (r as any) : $.pointerTarget<responseWriter>(r)
		if ((r$ as responseWriter).buffer == null) {
			return null
		}
		return bytes.Buffer.prototype.Bytes.call($.pointerValue<bytes.Buffer>((r$ as responseWriter).buffer))
	}

	public Close(): void {
		let r: responseWriter | $.VarRef<responseWriter> | null = this;
		$.pointerValue<responseWriter>(r).buffer = null
	}

	public IsApplicationError(): boolean {
		const r: responseWriter | $.VarRef<responseWriter> | null = this;
		return $.pointerValue<responseWriter>(r).isApplicationError
	}

	public ResponseSize(): number {
		const r: responseWriter | $.VarRef<responseWriter> | null = this;
		return $.pointerValue<responseWriter>(r).responseSize
	}

	public SetApplicationError(): void {
		let r: responseWriter | $.VarRef<responseWriter> | null = this;
		$.pointerValue<responseWriter>(r).isApplicationError = true
		void (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as responseWriter).AddSystemHeader("rpc-application-error", "error") : responseWriter.prototype.AddSystemHeader.call(r, "rpc-application-error", "error"))
	}

	public SetApplicationErrorMeta(meta: transport.ApplicationErrorMeta | $.VarRef<transport.ApplicationErrorMeta> | null): void {
		let r: responseWriter | $.VarRef<responseWriter> | null = this;
		const meta$: transport.ApplicationErrorMeta = meta == null ? $.pointerTarget<transport.ApplicationErrorMeta>(meta) : (meta as any).__isVarRef === true ? (meta as any).value : (meta as any).__goValue === undefined ? (meta as any) : $.pointerTarget<transport.ApplicationErrorMeta>(meta)
		if (meta == null) {
			return
		}

		$.pointerValue<responseWriter>(r).appErrorMeta = meta
		if (!$.stringEqual((meta$ as transport.ApplicationErrorMeta).Name, "")) {
			void (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as responseWriter).AddSystemHeader("rpc-application-error-name", (meta$ as transport.ApplicationErrorMeta).Name) : responseWriter.prototype.AddSystemHeader.call(r, "rpc-application-error-name", (meta$ as transport.ApplicationErrorMeta).Name))
		}
		if (!$.stringEqual((meta$ as transport.ApplicationErrorMeta).Details, "")) {
			void (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as responseWriter).AddSystemHeader("rpc-application-error-details", (meta$ as transport.ApplicationErrorMeta).Details) : responseWriter.prototype.AddSystemHeader.call(r, "rpc-application-error-details", (meta$ as transport.ApplicationErrorMeta).Details))
		}
	}

	public Write(p: $.Slice<number>): [number, $.GoError] {
		let r: responseWriter | $.VarRef<responseWriter> | null = this;
		const r$: responseWriter = r == null ? $.pointerTarget<responseWriter>(r) : (r as any).__isVarRef === true ? (r as any).value : (r as any).__goValue === undefined ? (r as any) : $.pointerTarget<responseWriter>(r)
		if ((r$ as responseWriter).buffer == null) {
			// Response writer bytes must not be pooled since calls to SendMsg hold on
			// to the bytes after the the function returns.
			//
			// See https://github.com/yarpc/yarpc-go/pull/1738 for details.
			;(r$ as responseWriter).buffer = bytes.NewBuffer($.makeSlice<number>(0, $.sliceLen(p), "byte"))
		}
		let [n, err] = bytes.Buffer.prototype.Write.call($.pointerValue<bytes.Buffer>((r$ as responseWriter).buffer), p);
		;(r$ as responseWriter).responseSize = (r$ as responseWriter).responseSize + (n)
		return [n, err]
	}

	static __typeInfo = $.registerStructType(
		"grpc.responseWriter",
		() => new responseWriter(),
		() => [{ name: "AddHeaders", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "AddSystemHeader", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "ApplicationErrorMeta", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("transport.ApplicationErrorMeta") }], pointerReceiver: true }, { name: "Bytes", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }], pointerReceiver: true }, { name: "Close", args: [], returns: [], pointerReceiver: true }, { name: "IsApplicationError", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("bool") }], pointerReceiver: true }, { name: "ResponseSize", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "SetApplicationError", args: [], returns: [], pointerReceiver: true }, { name: "SetApplicationErrorMeta", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "Write", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }],
		responseWriter,
		() => [{ name: "buffer", key: "buffer", type: /* @__PURE__ */ $.pointerType("bytes.Buffer") }, { name: "md", key: "md", type: "metadata.MD" }, { name: "headerErr", key: "headerErr", type: "error" }, { name: "isApplicationError", key: "isApplicationError", type: /* @__PURE__ */ $.basicType("bool") }, { name: "appErrorMeta", key: "appErrorMeta", type: /* @__PURE__ */ $.pointerType("transport.ApplicationErrorMeta") }, { name: "responseSize", key: "responseSize", type: /* @__PURE__ */ $.basicType("int") }]
	)
}

export function newResponseWriter(): responseWriter | $.VarRef<responseWriter> | null {
	return new responseWriter()
}
