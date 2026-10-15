// Generated file based on any.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as strings from "@goscript/strings/index.js"

import * as proto from "@goscript/github.com/gogo/protobuf/proto/index.js"

import * as __goscript_any_pb from "./any.pb.gs.ts"

import * as __goscript_protosize from "./protosize.gs.ts"
import "@goscript/fmt/index.js"
import "@goscript/reflect/index.js"
import "@goscript/strings/index.js"
import "@goscript/github.com/gogo/protobuf/proto/index.js"
import "./any.pb.gs.ts"
import "./protosize.gs.ts"

$.registerTypePackagePath("github.com/gogo/protobuf/types", ["types.DynamicAny"])

export class DynamicAny {
	public get Message(): proto.Message | null {
		return this._fields.Message
	}

	public set Message(value: proto.Message | null) {
		this._fields.Message = value
	}

	public _fields: {
		Message: proto.Message | null
	}

	constructor(init?: Partial<{Message?: proto.Message | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Message: init?.Message ?? (null! as proto.Message | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): DynamicAny {
		return new DynamicAny(this, true)
	}

	public __goscriptAssign(source: DynamicAny): void {
		const target = this._fields
		const values = source._fields
		target.Message = $.assignFieldValue(target.Message, values.Message, "proto.Message")
	}

	public ProtoMessage(): any {
		return $.pointerValue<Exclude<proto.Message | null, null>>(this.Message).ProtoMessage()
	}

	public Reset(): any {
		return $.pointerValue<Exclude<proto.Message | null, null>>(this.Message).Reset()
	}

	public async String(): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<proto.Message | null, null>>(this.Message).String()
	}

	static __typeInfo = $.registerStructType(
		"types.DynamicAny",
		() => new DynamicAny(),
		() => [{ name: "ProtoMessage", args: [], returns: [] }, { name: "Reset", args: [], returns: [] }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }] }],
		DynamicAny,
		() => [{ name: "Message", key: "Message", type: "proto.Message", anonymous: true }]
	)
}

export const googleApis: string = "type.googleapis.com/"

export function AnyMessageName(_any: __goscript_any_pb.Any | $.VarRef<__goscript_any_pb.Any> | null): [string, $.GoError] {
	const _any$: __goscript_any_pb.Any = _any == null ? $.pointerTarget<__goscript_any_pb.Any>(_any) : (_any as any).__isVarRef === true ? (_any as any).value : (_any as any).__goValue === undefined ? (_any as any) : $.pointerTarget<__goscript_any_pb.Any>(_any)
	if (_any == null) {
		return ["", fmt.Errorf("message is nil")]
	}
	let slash = strings.LastIndex((_any$ as __goscript_any_pb.Any).TypeUrl, "/")
	if (slash < 0) {
		return ["", fmt.Errorf("message type url %q is invalid", (_any$ as __goscript_any_pb.Any).TypeUrl)]
	}
	return [$.sliceStringOrBytes((_any$ as __goscript_any_pb.Any).TypeUrl, slash + 1, undefined), null]
}

export function MarshalAny(pb: proto.Message | null): [__goscript_any_pb.Any | $.VarRef<__goscript_any_pb.Any> | null, $.GoError] {
	let __goscriptTuple0: any = proto.Marshal(pb)
	let value: $.Slice<number> = __goscriptTuple0[0]
	let err = __goscriptTuple0[1]
	if (err != null) {
		return [null, err]
	}
	return [(() => { const __goscriptLiteralField0 = $.concatString("type.googleapis.com/", proto.MessageName(pb)); return new __goscript_any_pb.Any({TypeUrl: __goscriptLiteralField0, Value: value}) })(), null]
}

export async function EmptyAny(_any: __goscript_any_pb.Any | $.VarRef<__goscript_any_pb.Any> | null): globalThis.Promise<[proto.Message | null, $.GoError]> {
	let [aname, err] = AnyMessageName(_any)
	if (err != null) {
		return [null, err]
	}

	let t = proto.MessageType(aname)
	if (t == null) {
		return [null, fmt.Errorf("any: message type %q isn't linked in", aname)]
	}
	return [$.mustTypeAssert<proto.Message | null>($.markAsStructValue($.cloneStructValue(reflect.New($.pointerValueOrNil((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))!))).Interface(), "proto.Message"), null]
}

export async function UnmarshalAny(_any: __goscript_any_pb.Any | $.VarRef<__goscript_any_pb.Any> | null, pb: proto.Message | null): globalThis.Promise<$.GoError> {
	{
		let __goscriptTuple1: any = $.typeAssertTuple<DynamicAny | $.VarRef<DynamicAny> | null>(pb, /* @__PURE__ */ $.pointerType("types.DynamicAny"))
		let d: DynamicAny | $.VarRef<DynamicAny> | null = __goscriptTuple1[0]
		let ok = __goscriptTuple1[1]
		if (ok) {
			if ($.pointerValue<DynamicAny>(d).Message == null) {
				let err: $.GoError = null! as $.GoError
				let __goscriptTuple2: any = await EmptyAny(_any)
				$.pointerValue<DynamicAny>(d).Message = __goscriptTuple2[0]
				err = __goscriptTuple2[1]
				if (err != null) {
					return err
				}
			}
			return UnmarshalAny(_any, $.pointerValue<DynamicAny>(d).Message)
		}
	}

	let [aname, err] = AnyMessageName(_any)
	if (err != null) {
		return err
	}

	let mname = proto.MessageName(pb)
	if (!$.stringEqual(aname, mname)) {
		return fmt.Errorf("mismatched message type: got %q want %q", aname, mname)
	}
	return proto.Unmarshal($.pointerValue<__goscript_any_pb.Any>(_any).Value, pb)
}

export function Is(_any: __goscript_any_pb.Any | $.VarRef<__goscript_any_pb.Any> | null, pb: proto.Message | null): boolean {
	const _any$: __goscript_any_pb.Any = _any == null ? $.pointerTarget<__goscript_any_pb.Any>(_any) : (_any as any).__isVarRef === true ? (_any as any).value : (_any as any).__goValue === undefined ? (_any as any) : $.pointerTarget<__goscript_any_pb.Any>(_any)
	// The following is equivalent to AnyMessageName(any) == proto.MessageName(pb),
	// but it avoids scanning TypeUrl for the slash.
	if (_any == null) {
		return false
	}
	let name = proto.MessageName(pb)
	let prefix = $.stringLen((_any$ as __goscript_any_pb.Any).TypeUrl) - $.stringLen(name)
	return ((prefix >= 1) && ($.indexString((_any$ as __goscript_any_pb.Any).TypeUrl, prefix - 1) == 47)) && ($.stringEqual($.sliceStringOrBytes((_any$ as __goscript_any_pb.Any).TypeUrl, prefix, undefined), name))
}

var __goscriptAwait: any
