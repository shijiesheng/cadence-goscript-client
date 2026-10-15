// Generated file based on yaml.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as errors from "@goscript/errors/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as io from "@goscript/io/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as strings from "@goscript/strings/index.js"

import * as sync from "@goscript/sync/index.js"

import * as utf8 from "@goscript/unicode/utf8/index.js"

import * as __goscript_decode from "./decode.gs.ts"

import * as __goscript_encode from "./encode.gs.ts"

import * as __goscript_resolve from "./resolve.gs.ts"

import * as __goscript_yamlh from "./yamlh.gs.ts"
import "@goscript/errors/index.js"
import "@goscript/fmt/index.js"
import "@goscript/io/index.js"
import "@goscript/reflect/index.js"
import "@goscript/strings/index.js"
import "@goscript/sync/index.js"
import "@goscript/unicode/utf8/index.js"
import "./decode.gs.ts"
import "./encode.gs.ts"
import "./resolve.gs.ts"
import "./yamlh.gs.ts"

$.registerTypePackagePath("gopkg.in/yaml.v3", ["yaml.Unmarshaler", "yaml.obsoleteUnmarshaler", "yaml.Marshaler", "yaml.Decoder", "yaml.Encoder", "yaml.yamlError", "yaml.TypeError", "yaml.Kind", "yaml.Style", "yaml.Node", "yaml.structInfo", "yaml.fieldInfo", "yaml.IsZeroer"])

export type Unmarshaler = {
	UnmarshalYAML(value: Node | $.VarRef<Node> | null): $.GoError
}

$.registerInterfaceType(
	"yaml.Unmarshaler",
	null,
	[$.methodSignature("UnmarshalYAML", [["value", /* @__PURE__ */ $.pointerType("yaml.Node")]], ["error"])]
);

export type obsoleteUnmarshaler = {
	UnmarshalYAML(unmarshal: ((_p0: any) => $.GoError | globalThis.Promise<$.GoError>) | null): $.GoError | globalThis.Promise<$.GoError>
}

$.registerInterfaceType(
	"yaml.obsoleteUnmarshaler",
	null,
	[$.methodSignature("UnmarshalYAML", [["unmarshal", ({ kind: $.TypeKind.Function, params: [{ kind: $.TypeKind.Interface, methods: [] }], results: ["error"] } as $.FunctionTypeInfo)]], ["error"])]
);

export type Marshaler = {
	MarshalYAML(): [any, $.GoError] | globalThis.Promise<[any, $.GoError]>
}

$.registerInterfaceType(
	"yaml.Marshaler",
	null,
	[$.methodSignature("MarshalYAML", [], [{ kind: $.TypeKind.Interface, methods: [] }, "error"])]
);

export type Kind = number

export type Style = number

export type IsZeroer = {
	IsZero(): boolean
}

$.registerInterfaceType(
	"yaml.IsZeroer",
	null,
	[$.methodSignature("IsZero", [], [/* @__PURE__ */ $.basicType("bool")])]
);

export class Decoder {
	public get parser(): __goscript_decode.parser | $.VarRef<__goscript_decode.parser> | null {
		return this._fields.parser
	}

	public set parser(value: __goscript_decode.parser | $.VarRef<__goscript_decode.parser> | null) {
		this._fields.parser = value
	}

	public get knownFields(): boolean {
		return this._fields.knownFields
	}

	public set knownFields(value: boolean) {
		this._fields.knownFields = value
	}

	public _fields: {
		parser: __goscript_decode.parser | $.VarRef<__goscript_decode.parser> | null
		knownFields: boolean
	}

	constructor(init?: Partial<{parser?: __goscript_decode.parser | $.VarRef<__goscript_decode.parser> | null, knownFields?: boolean}>, __goscriptValue?: boolean) {
		this._fields = {
			parser: init?.parser ?? (null! as __goscript_decode.parser | $.VarRef<__goscript_decode.parser> | null),
			knownFields: init?.knownFields ?? (false as boolean)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Decoder {
		return new Decoder(this, true)
	}

	public __goscriptAssign(source: Decoder): void {
		const target = this._fields
		const values = source._fields
		target.parser = values.parser
		target.knownFields = values.knownFields
	}

	public async Decode(v: any): globalThis.Promise<$.GoError> {
		const dec: Decoder | $.VarRef<Decoder> | null = this;
		let err: $.VarRef<$.GoError> = $.varRef(null! as $.GoError)
		const __defer = new $.DisposableStack()
		try {
			const dec$: Decoder = dec == null ? $.pointerTarget<Decoder>(dec) : (dec as any).__isVarRef === true ? (dec as any).value : (dec as any).__goValue === undefined ? (dec as any) : $.pointerTarget<Decoder>(dec)
			let d: __goscript_decode.decoder | $.VarRef<__goscript_decode.decoder> | null = __goscript_decode.newDecoder()
			let d$: __goscript_decode.decoder = d == null ? $.pointerTarget<__goscript_decode.decoder>(d) : (d as any).__isVarRef === true ? (d as any).value : (d as any).__goValue === undefined ? (d as any) : $.pointerTarget<__goscript_decode.decoder>(d);
			;(d$ as __goscript_decode.decoder).knownFields = (dec$ as Decoder).knownFields
			const __goscriptDeferArg0 = err
			__defer.defer(() => { handleErr(__goscriptDeferArg0) })
			let node: Node | $.VarRef<Node> | null = await __goscript_decode.parser.prototype.parse.call((dec$ as Decoder).parser)
			if (node == null) {
				const __goscriptReturn0: $.GoError = io.EOF
				err.value = __goscriptReturn0
				__defer.dispose()
				return err.value
			}
			let out = $.markAsStructValue($.cloneStructValue(reflect.ValueOf(v)))
			if (($.markAsStructValue($.cloneStructValue(out)).Kind() == 22) && !$.markAsStructValue($.cloneStructValue(out)).IsNil()) {
				out = $.assignStruct(out, $.markAsStructValue($.cloneStructValue(out)).Elem())
			}
			await (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as __goscript_decode.decoder).unmarshal(node, $.markAsStructValue($.cloneStructValue(out))) : __goscript_decode.decoder.prototype.unmarshal.call(d, node, $.markAsStructValue($.cloneStructValue(out))))
			if ($.sliceLen((d$ as __goscript_decode.decoder).terrors) > 0) {
				const __goscriptReturn1: $.GoError = $.interfaceValue<$.GoError>(new TypeError({Errors: (d$ as __goscript_decode.decoder).terrors}), "*yaml.TypeError", /* @__PURE__ */ $.pointerType("yaml.TypeError"))
				err.value = __goscriptReturn1
				__defer.dispose()
				return err.value
			}
			const __goscriptReturn2: $.GoError = null
			err.value = __goscriptReturn2
			__defer.dispose()
			return err.value
			__defer.dispose()
		} catch (e) {
			__defer.disposePanic(e)
			if (!$.recovered(e)) {
				throw e
			}
		}
		return err.value
	}

	public KnownFields(enable: boolean): void {
		let dec: Decoder | $.VarRef<Decoder> | null = this;
		$.pointerValue<Decoder>(dec).knownFields = enable
	}

	static __typeInfo = $.registerStructType(
		"yaml.Decoder",
		() => new Decoder(),
		() => [$.methodSignature("Decode", [["v", { kind: $.TypeKind.Interface, methods: [] }]], [["err", "error"]], true), $.methodSignature("KnownFields", [["enable", /* @__PURE__ */ $.basicType("bool")]], [], true)],
		Decoder,
		() => [/* @__PURE__ */ $.structField("parser", /* @__PURE__ */ $.pointerType("yaml.parser"), [0], 0, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("knownFields", /* @__PURE__ */ $.basicType("bool"), [1], 8, false, { pkgPath: "gopkg.in/yaml.v3" })]
	)
}

export class Encoder {
	public get encoder(): __goscript_encode.encoder | $.VarRef<__goscript_encode.encoder> | null {
		return this._fields.encoder
	}

	public set encoder(value: __goscript_encode.encoder | $.VarRef<__goscript_encode.encoder> | null) {
		this._fields.encoder = value
	}

	public _fields: {
		encoder: __goscript_encode.encoder | $.VarRef<__goscript_encode.encoder> | null
	}

	constructor(init?: Partial<{encoder?: __goscript_encode.encoder | $.VarRef<__goscript_encode.encoder> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			encoder: init?.encoder ?? (null! as __goscript_encode.encoder | $.VarRef<__goscript_encode.encoder> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Encoder {
		return new Encoder(this, true)
	}

	public __goscriptAssign(source: Encoder): void {
		const target = this._fields
		const values = source._fields
		target.encoder = values.encoder
	}

	public async Close(): globalThis.Promise<$.GoError> {
		const e: Encoder | $.VarRef<Encoder> | null = this;
		let err: $.VarRef<$.GoError> = $.varRef(null! as $.GoError)
		const __defer = new $.DisposableStack()
		try {
			const __goscriptDeferArg3 = err
			__defer.defer(() => { handleErr(__goscriptDeferArg3) })
			await __goscript_encode.encoder.prototype.finish.call($.pointerValue<Encoder>(e).encoder)
			const __goscriptReturn5: $.GoError = null
			err.value = __goscriptReturn5
			__defer.dispose()
			return err.value
			__defer.dispose()
		} catch (e) {
			__defer.disposePanic(e)
			if (!$.recovered(e)) {
				throw e
			}
		}
		return err.value
	}

	public async Encode(v: any): globalThis.Promise<$.GoError> {
		const e: Encoder | $.VarRef<Encoder> | null = this;
		let err: $.VarRef<$.GoError> = $.varRef(null! as $.GoError)
		const __defer = new $.DisposableStack()
		try {
			const __goscriptDeferArg4 = err
			__defer.defer(() => { handleErr(__goscriptDeferArg4) })
			await __goscript_encode.encoder.prototype.marshalDoc.call($.pointerValue<Encoder>(e).encoder, "", $.markAsStructValue($.cloneStructValue(reflect.ValueOf(v))))
			const __goscriptReturn6: $.GoError = null
			err.value = __goscriptReturn6
			__defer.dispose()
			return err.value
			__defer.dispose()
		} catch (e) {
			__defer.disposePanic(e)
			if (!$.recovered(e)) {
				throw e
			}
		}
		return err.value
	}

	public SetIndent(spaces: number): void {
		let e: Encoder | $.VarRef<Encoder> | null = this;
		if (spaces < 0) {
			$.panic("yaml: cannot indent to a negative number of spaces")
		}
		$.pointerValue<__goscript_encode.encoder>($.pointerValue<Encoder>(e).encoder).indent = spaces
	}

	static __typeInfo = $.registerStructType(
		"yaml.Encoder",
		() => new Encoder(),
		() => [$.methodSignature("Close", [], [["err", "error"]], true), $.methodSignature("Encode", [["v", { kind: $.TypeKind.Interface, methods: [] }]], [["err", "error"]], true), $.methodSignature("SetIndent", [["spaces", /* @__PURE__ */ $.basicType("int")]], [], true)],
		Encoder,
		() => [/* @__PURE__ */ $.structField("encoder", /* @__PURE__ */ $.pointerType("yaml.encoder"), [0], 0, false, { pkgPath: "gopkg.in/yaml.v3" })]
	)
}

export class yamlError {
	public get err(): $.GoError {
		return this._fields.err
	}

	public set err(value: $.GoError) {
		this._fields.err = value
	}

	public _fields: {
		err: $.GoError
	}

	constructor(init?: Partial<{err?: $.GoError}>, __goscriptValue?: boolean) {
		this._fields = {
			err: init?.err ?? (null! as $.GoError)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): yamlError {
		return new yamlError(this, true)
	}

	public __goscriptAssign(source: yamlError): void {
		const target = this._fields
		const values = source._fields
		target.err = $.assignFieldValue(target.err, values.err, "error")
	}

	static __typeInfo = $.registerStructType(
		"yaml.yamlError",
		() => new yamlError(),
		() => [],
		yamlError,
		() => [/* @__PURE__ */ $.structField("err", "error", [0], 0, false, { pkgPath: "gopkg.in/yaml.v3" })]
	)
}

export class TypeError {
	public get Errors(): $.Slice<string> {
		return this._fields.Errors
	}

	public set Errors(value: $.Slice<string>) {
		this._fields.Errors = value
	}

	public _fields: {
		Errors: $.Slice<string>
	}

	constructor(init?: Partial<{Errors?: $.Slice<string>}>, __goscriptValue?: boolean) {
		this._fields = {
			Errors: init?.Errors ?? (null! as $.Slice<string>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): TypeError {
		return new TypeError(this, true)
	}

	public __goscriptAssign(source: TypeError): void {
		const target = this._fields
		const values = source._fields
		target.Errors = values.Errors
	}

	public async Error(): globalThis.Promise<string> {
		const e: TypeError | $.VarRef<TypeError> | null = this;
		return fmt.Sprintf("yaml: unmarshal errors:\n  %s", strings.Join($.pointerValue<TypeError>(e).Errors, "\n  "))
	}

	static __typeInfo = $.registerStructType(
		"yaml.TypeError",
		() => new TypeError(),
		() => [$.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")], true)],
		TypeError,
		() => [/* @__PURE__ */ $.structField("Errors", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")), [0], 0, true)]
	)
}

export class Node {
	// Kind defines whether the node is a document, a mapping, a sequence,
	// a scalar value, or an alias to another node. The specific data type of
	// scalar nodes may be obtained via the ShortTag and LongTag methods.
	public get Kind(): Kind {
		return this._fields.Kind
	}

	public set Kind(value: Kind) {
		this._fields.Kind = value
	}

	// Style allows customizing the apperance of the node in the tree.
	public get Style(): Style {
		return this._fields.Style
	}

	public set Style(value: Style) {
		this._fields.Style = value
	}

	// Tag holds the YAML tag defining the data type for the value.
	// When decoding, this field will always be set to the resolved tag,
	// even when it wasn't explicitly provided in the YAML content.
	// When encoding, if this field is unset the value type will be
	// implied from the node properties, and if it is set, it will only
	// be serialized into the representation if TaggedStyle is used or
	// the implicit tag diverges from the provided one.
	public get Tag(): string {
		return this._fields.Tag
	}

	public set Tag(value: string) {
		this._fields.Tag = value
	}

	// Value holds the unescaped and unquoted represenation of the value.
	public get Value(): string {
		return this._fields.Value
	}

	public set Value(value: string) {
		this._fields.Value = value
	}

	// Anchor holds the anchor name for this node, which allows aliases to point to it.
	public get Anchor(): string {
		return this._fields.Anchor
	}

	public set Anchor(value: string) {
		this._fields.Anchor = value
	}

	// Alias holds the node that this alias points to. Only valid when Kind is AliasNode.
	public get Alias(): Node | $.VarRef<Node> | null {
		return this._fields.Alias
	}

	public set Alias(value: Node | $.VarRef<Node> | null) {
		this._fields.Alias = value
	}

	// Content holds contained nodes for documents, mappings, and sequences.
	public get Content(): $.Slice<Node | $.VarRef<Node> | null> {
		return this._fields.Content
	}

	public set Content(value: $.Slice<Node | $.VarRef<Node> | null>) {
		this._fields.Content = value
	}

	// HeadComment holds any comments in the lines preceding the node and
	// not separated by an empty line.
	public get HeadComment(): string {
		return this._fields.HeadComment
	}

	public set HeadComment(value: string) {
		this._fields.HeadComment = value
	}

	// LineComment holds any comments at the end of the line where the node is in.
	public get LineComment(): string {
		return this._fields.LineComment
	}

	public set LineComment(value: string) {
		this._fields.LineComment = value
	}

	// FootComment holds any comments following the node and before empty lines.
	public get FootComment(): string {
		return this._fields.FootComment
	}

	public set FootComment(value: string) {
		this._fields.FootComment = value
	}

	// Line and Column hold the node position in the decoded YAML text.
	// These fields are not respected when encoding the node.
	public get Line(): number {
		return this._fields.Line
	}

	public set Line(value: number) {
		this._fields.Line = value
	}

	public get Column(): number {
		return this._fields.Column
	}

	public set Column(value: number) {
		this._fields.Column = value
	}

	public _fields: {
		Kind: Kind
		Style: Style
		Tag: string
		Value: string
		Anchor: string
		Alias: Node | $.VarRef<Node> | null
		Content: $.Slice<Node | $.VarRef<Node> | null>
		HeadComment: string
		LineComment: string
		FootComment: string
		Line: number
		Column: number
	}

	constructor(init?: Partial<{Kind?: Kind, Style?: Style, Tag?: string, Value?: string, Anchor?: string, Alias?: Node | $.VarRef<Node> | null, Content?: $.Slice<Node | $.VarRef<Node> | null>, HeadComment?: string, LineComment?: string, FootComment?: string, Line?: number, Column?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Kind: init?.Kind ?? (0 as Kind),
			Style: init?.Style ?? (0 as Style),
			Tag: init?.Tag ?? ("" as string),
			Value: init?.Value ?? ("" as string),
			Anchor: init?.Anchor ?? ("" as string),
			Alias: init?.Alias ?? (null! as Node | $.VarRef<Node> | null),
			Content: init?.Content ?? (null! as $.Slice<Node | $.VarRef<Node> | null>),
			HeadComment: init?.HeadComment ?? ("" as string),
			LineComment: init?.LineComment ?? ("" as string),
			FootComment: init?.FootComment ?? ("" as string),
			Line: init?.Line ?? (0 as number),
			Column: init?.Column ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Node {
		return new Node(this, true)
	}

	public __goscriptAssign(source: Node): void {
		const target = this._fields
		const values = source._fields
		target.Kind = values.Kind
		target.Style = values.Style
		target.Tag = values.Tag
		target.Value = values.Value
		target.Anchor = values.Anchor
		target.Alias = values.Alias
		target.Content = values.Content
		target.HeadComment = values.HeadComment
		target.LineComment = values.LineComment
		target.FootComment = values.FootComment
		target.Line = values.Line
		target.Column = values.Column
	}

	public async Decode(v: any): globalThis.Promise<$.GoError> {
		const n: Node | $.VarRef<Node> | null = this;
		let err: $.VarRef<$.GoError> = $.varRef(null! as $.GoError)
		const __defer = new $.DisposableStack()
		try {
			let d: __goscript_decode.decoder | $.VarRef<__goscript_decode.decoder> | null = __goscript_decode.newDecoder()
			let d$: __goscript_decode.decoder = d == null ? $.pointerTarget<__goscript_decode.decoder>(d) : (d as any).__isVarRef === true ? (d as any).value : (d as any).__goValue === undefined ? (d as any) : $.pointerTarget<__goscript_decode.decoder>(d)
			const __goscriptDeferArg5 = err
			__defer.defer(() => { handleErr(__goscriptDeferArg5) })
			let out = $.markAsStructValue($.cloneStructValue(reflect.ValueOf(v)))
			if (($.markAsStructValue($.cloneStructValue(out)).Kind() == 22) && !$.markAsStructValue($.cloneStructValue(out)).IsNil()) {
				out = $.assignStruct(out, $.markAsStructValue($.cloneStructValue(out)).Elem())
			}
			await (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as __goscript_decode.decoder).unmarshal(n, $.markAsStructValue($.cloneStructValue(out))) : __goscript_decode.decoder.prototype.unmarshal.call(d, n, $.markAsStructValue($.cloneStructValue(out))))
			if ($.sliceLen((d$ as __goscript_decode.decoder).terrors) > 0) {
				const __goscriptReturn7: $.GoError = $.interfaceValue<$.GoError>(new TypeError({Errors: (d$ as __goscript_decode.decoder).terrors}), "*yaml.TypeError", /* @__PURE__ */ $.pointerType("yaml.TypeError"))
				err.value = __goscriptReturn7
				__defer.dispose()
				return err.value
			}
			const __goscriptReturn8: $.GoError = null
			err.value = __goscriptReturn8
			__defer.dispose()
			return err.value
			__defer.dispose()
		} catch (e) {
			__defer.disposePanic(e)
			if (!$.recovered(e)) {
				throw e
			}
		}
		return err.value
	}

	public async Encode(v: any): globalThis.Promise<$.GoError> {
		let n: Node | $.VarRef<Node> | null = this;
		let err: $.VarRef<$.GoError> = $.varRef(null! as $.GoError)
		const __defer = new $.DisposableStack()
		try {
			const __goscriptDeferArg6 = err
			__defer.defer(() => { handleErr(__goscriptDeferArg6) })
			let e: __goscript_encode.encoder | $.VarRef<__goscript_encode.encoder> | null = __goscript_encode.newEncoder()
			__defer.defer(() => { (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as __goscript_encode.encoder).destroy() : __goscript_encode.encoder.prototype.destroy.call(e)) })
			await (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as __goscript_encode.encoder).marshalDoc("", $.markAsStructValue($.cloneStructValue(reflect.ValueOf(v)))) : __goscript_encode.encoder.prototype.marshalDoc.call(e, "", $.markAsStructValue($.cloneStructValue(reflect.ValueOf(v)))))
			await (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as __goscript_encode.encoder).finish() : __goscript_encode.encoder.prototype.finish.call(e))
			let p: __goscript_decode.parser | $.VarRef<__goscript_decode.parser> | null = __goscript_decode.newParser($.pointerValue<__goscript_encode.encoder>(e).out)
			$.pointerValue<__goscript_decode.parser>(p).textless = true
			__defer.defer(() => { (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as __goscript_decode.parser).destroy() : __goscript_decode.parser.prototype.destroy.call(p)) })
			let doc: Node | $.VarRef<Node> | null = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as __goscript_decode.parser).parse() : __goscript_decode.parser.prototype.parse.call(p))
			$.assignStruct($.pointerValue<Node>(n), $.pointerValue<Node>($.arrayIndex($.pointerValue<Node>(doc).Content!, 0)))
			const __goscriptReturn9: $.GoError = null
			err.value = __goscriptReturn9
			__defer.dispose()
			return err.value
			__defer.dispose()
		} catch (e) {
			__defer.disposePanic(e)
			if (!$.recovered(e)) {
				throw e
			}
		}
		return err.value
	}

	public IsZero(): boolean {
		const n: Node | $.VarRef<Node> | null = this;
		const n$: Node = n == null ? $.pointerTarget<Node>(n) : (n as any).__isVarRef === true ? (n as any).value : (n as any).__goValue === undefined ? (n as any) : $.pointerTarget<Node>(n)
		return ((((((((((((n$ as Node).Kind == 0) && ((n$ as Node).Style == 0)) && ($.stringEqual((n$ as Node).Tag, ""))) && ($.stringEqual((n$ as Node).Value, ""))) && ($.stringEqual((n$ as Node).Anchor, ""))) && ((n$ as Node).Alias == null)) && ((n$ as Node).Content == null)) && ($.stringEqual((n$ as Node).HeadComment, ""))) && ($.stringEqual((n$ as Node).LineComment, ""))) && ($.stringEqual((n$ as Node).FootComment, ""))) && ((n$ as Node).Line == 0)) && ((n$ as Node).Column == 0)
	}

	public async LongTag(): globalThis.Promise<string> {
		const n: Node | $.VarRef<Node> | null = this;
		return __goscript_resolve.longTag(await (n !== null && (n as any).__isVarRef !== true && (n as any).__goValue === undefined ? ((n as any) as Node).ShortTag() : Node.prototype.ShortTag.call(n)))
	}

	public SetString(s: string): void {
		let n: Node | $.VarRef<Node> | null = this;
		const n$: Node = n == null ? $.pointerTarget<Node>(n) : (n as any).__isVarRef === true ? (n as any).value : (n as any).__goValue === undefined ? (n as any) : $.pointerTarget<Node>(n);
		;(n$ as Node).Kind = 8
		if (utf8.ValidString(s)) {
			;(n$ as Node).Value = s;
			;(n$ as Node).Tag = "!!str"
		} else {
			;(n$ as Node).Value = __goscript_resolve.encodeBase64(s);
			;(n$ as Node).Tag = "!!binary"
		}
		if (strings.Contains((n$ as Node).Value, "\n")) {
			;(n$ as Node).Style = 8
		}
	}

	public async ShortTag(): globalThis.Promise<string> {
		const n: Node | $.VarRef<Node> | null = this;
		const n$: Node = n == null ? $.pointerTarget<Node>(n) : (n as any).__isVarRef === true ? (n as any).value : (n as any).__goValue === undefined ? (n as any) : $.pointerTarget<Node>(n)
		if ((n !== null && (n as any).__isVarRef !== true && (n as any).__goValue === undefined ? ((n as any) as Node).indicatedString() : Node.prototype.indicatedString.call(n))) {
			return "!!str"
		}
		if (($.stringEqual((n$ as Node).Tag, "")) || ($.stringEqual((n$ as Node).Tag, "!"))) {
			switch ((n$ as Node).Kind) {
				case 4:
				{
					return "!!map"
					break
				}
				case 2:
				{
					return "!!seq"
					break
				}
				case 16:
				{
					if ((n$ as Node).Alias != null) {
						return Node.prototype.ShortTag.call((n$ as Node).Alias)
					}
					break
				}
				case 8:
				{
					let [tag, ] = await __goscript_resolve.resolve("", (n$ as Node).Value)
					return tag
					break
				}
				case 0:
				{
					if ((n !== null && (n as any).__isVarRef !== true && (n as any).__goValue === undefined ? ((n as any) as Node).IsZero() : Node.prototype.IsZero.call(n))) {
						return "!!null"
					}
					break
				}
			}
			return ""
		}
		return __goscript_resolve.shortTag((n$ as Node).Tag)
	}

	public indicatedString(): boolean {
		const n: Node | $.VarRef<Node> | null = this;
		const n$: Node = n == null ? $.pointerTarget<Node>(n) : (n as any).__isVarRef === true ? (n as any).value : (n as any).__goValue === undefined ? (n as any) : $.pointerTarget<Node>(n)
		return ((n$ as Node).Kind == 8) && (($.stringEqual(__goscript_resolve.shortTag((n$ as Node).Tag), "!!str")) || ((($.stringEqual((n$ as Node).Tag, "")) || ($.stringEqual((n$ as Node).Tag, "!"))) && ($.uint(((n$ as Node).Style & (((4 | 2) | 8) | 16)), 32) != 0)))
	}

	static __typeInfo = $.registerStructType(
		"yaml.Node",
		() => new Node(),
		() => [$.methodSignature("Decode", [["v", { kind: $.TypeKind.Interface, methods: [] }]], [["err", "error"]], true), $.methodSignature("Encode", [["v", { kind: $.TypeKind.Interface, methods: [] }]], [["err", "error"]], true), $.methodSignature("IsZero", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("LongTag", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("SetString", [["s", /* @__PURE__ */ $.basicType("string")]], [], true), $.methodSignature("ShortTag", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("indicatedString", [], [/* @__PURE__ */ $.basicType("bool")], true)],
		Node,
		() => [/* @__PURE__ */ $.structField("Kind", /* @__PURE__ */ $.basicType("uint32", "yaml.Kind"), [0], 0, true), /* @__PURE__ */ $.structField("Style", /* @__PURE__ */ $.basicType("uint32", "yaml.Style"), [1], 4, true), /* @__PURE__ */ $.structField("Tag", /* @__PURE__ */ $.basicType("string"), [2], 8, true), /* @__PURE__ */ $.structField("Value", /* @__PURE__ */ $.basicType("string"), [3], 24, true), /* @__PURE__ */ $.structField("Anchor", /* @__PURE__ */ $.basicType("string"), [4], 40, true), /* @__PURE__ */ $.structField("Alias", /* @__PURE__ */ $.pointerType("yaml.Node"), [5], 56, true), /* @__PURE__ */ $.structField("Content", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("yaml.Node")), [6], 64, true), /* @__PURE__ */ $.structField("HeadComment", /* @__PURE__ */ $.basicType("string"), [7], 88, true), /* @__PURE__ */ $.structField("LineComment", /* @__PURE__ */ $.basicType("string"), [8], 104, true), /* @__PURE__ */ $.structField("FootComment", /* @__PURE__ */ $.basicType("string"), [9], 120, true), /* @__PURE__ */ $.structField("Line", /* @__PURE__ */ $.basicType("int"), [10], 136, true), /* @__PURE__ */ $.structField("Column", /* @__PURE__ */ $.basicType("int"), [11], 144, true)]
	)
}

export class structInfo {
	public get FieldsMap(): globalThis.Map<string, fieldInfo> | null {
		return this._fields.FieldsMap
	}

	public set FieldsMap(value: globalThis.Map<string, fieldInfo> | null) {
		this._fields.FieldsMap = value
	}

	public get FieldsList(): $.Slice<fieldInfo> {
		return this._fields.FieldsList
	}

	public set FieldsList(value: $.Slice<fieldInfo>) {
		this._fields.FieldsList = value
	}

	// InlineMap is the number of the field in the struct that
	// contains an ,inline map, or -1 if there's none.
	public get InlineMap(): number {
		return this._fields.InlineMap
	}

	public set InlineMap(value: number) {
		this._fields.InlineMap = value
	}

	// InlineUnmarshalers holds indexes to inlined fields that
	// contain unmarshaler values.
	public get InlineUnmarshalers(): $.Slice<$.Slice<number>> {
		return this._fields.InlineUnmarshalers
	}

	public set InlineUnmarshalers(value: $.Slice<$.Slice<number>>) {
		this._fields.InlineUnmarshalers = value
	}

	public _fields: {
		FieldsMap: globalThis.Map<string, fieldInfo> | null
		FieldsList: $.Slice<fieldInfo>
		InlineMap: number
		InlineUnmarshalers: $.Slice<$.Slice<number>>
	}

	constructor(init?: Partial<{FieldsMap?: globalThis.Map<string, fieldInfo> | null, FieldsList?: $.Slice<fieldInfo>, InlineMap?: number, InlineUnmarshalers?: $.Slice<$.Slice<number>>}>, __goscriptValue?: boolean) {
		this._fields = {
			FieldsMap: init?.FieldsMap ?? (null! as globalThis.Map<string, fieldInfo> | null),
			FieldsList: init?.FieldsList ?? (null! as $.Slice<fieldInfo>),
			InlineMap: init?.InlineMap ?? (0 as number),
			InlineUnmarshalers: init?.InlineUnmarshalers ?? (null! as $.Slice<$.Slice<number>>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): structInfo {
		return new structInfo(this, true)
	}

	public __goscriptAssign(source: structInfo): void {
		const target = this._fields
		const values = source._fields
		target.FieldsMap = values.FieldsMap
		target.FieldsList = values.FieldsList
		target.InlineMap = values.InlineMap
		target.InlineUnmarshalers = values.InlineUnmarshalers
	}

	static __typeInfo = $.registerStructType(
		"yaml.structInfo",
		() => new structInfo(),
		() => [],
		structInfo,
		() => [/* @__PURE__ */ $.structField("FieldsMap", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), "yaml.fieldInfo"), [0], 0, true), /* @__PURE__ */ $.structField("FieldsList", /* @__PURE__ */ $.sliceType("yaml.fieldInfo"), [1], 8, true), /* @__PURE__ */ $.structField("InlineMap", /* @__PURE__ */ $.basicType("int"), [2], 32, true), /* @__PURE__ */ $.structField("InlineUnmarshalers", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))), [3], 40, true)]
	)
}

export class fieldInfo {
	public get Key(): string {
		return this._fields.Key
	}

	public set Key(value: string) {
		this._fields.Key = value
	}

	public get Num(): number {
		return this._fields.Num
	}

	public set Num(value: number) {
		this._fields.Num = value
	}

	public get OmitEmpty(): boolean {
		return this._fields.OmitEmpty
	}

	public set OmitEmpty(value: boolean) {
		this._fields.OmitEmpty = value
	}

	public get Flow(): boolean {
		return this._fields.Flow
	}

	public set Flow(value: boolean) {
		this._fields.Flow = value
	}

	// Id holds the unique field identifier, so we can cheaply
	// check for field duplicates without maintaining an extra map.
	public get Id(): number {
		return this._fields.Id
	}

	public set Id(value: number) {
		this._fields.Id = value
	}

	// Inline holds the field index if the field is part of an inlined struct.
	public get Inline(): $.Slice<number> {
		return this._fields.Inline
	}

	public set Inline(value: $.Slice<number>) {
		this._fields.Inline = value
	}

	public _fields: {
		Key: string
		Num: number
		OmitEmpty: boolean
		Flow: boolean
		Id: number
		Inline: $.Slice<number>
	}

	constructor(init?: Partial<{Key?: string, Num?: number, OmitEmpty?: boolean, Flow?: boolean, Id?: number, Inline?: $.Slice<number>}>, __goscriptValue?: boolean) {
		this._fields = {
			Key: init?.Key ?? ("" as string),
			Num: init?.Num ?? (0 as number),
			OmitEmpty: init?.OmitEmpty ?? (false as boolean),
			Flow: init?.Flow ?? (false as boolean),
			Id: init?.Id ?? (0 as number),
			Inline: init?.Inline ?? (null! as $.Slice<number>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): fieldInfo {
		return new fieldInfo(this, true)
	}

	public __goscriptAssign(source: fieldInfo): void {
		const target = this._fields
		const values = source._fields
		target.Key = values.Key
		target.Num = values.Num
		target.OmitEmpty = values.OmitEmpty
		target.Flow = values.Flow
		target.Id = values.Id
		target.Inline = values.Inline
	}

	static __typeInfo = $.registerStructType(
		"yaml.fieldInfo",
		() => new fieldInfo(),
		() => [],
		fieldInfo,
		() => [/* @__PURE__ */ $.structField("Key", /* @__PURE__ */ $.basicType("string"), [0], 0, true), /* @__PURE__ */ $.structField("Num", /* @__PURE__ */ $.basicType("int"), [1], 16, true), /* @__PURE__ */ $.structField("OmitEmpty", /* @__PURE__ */ $.basicType("bool"), [2], 24, true), /* @__PURE__ */ $.structField("Flow", /* @__PURE__ */ $.basicType("bool"), [3], 25, true), /* @__PURE__ */ $.structField("Id", /* @__PURE__ */ $.basicType("int"), [4], 32, true), /* @__PURE__ */ $.structField("Inline", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")), [5], 40, true)]
	)
}

export const DocumentNode: Kind = 1

export const SequenceNode: Kind = 2

export const MappingNode: Kind = 4

export const ScalarNode: Kind = 8

export const AliasNode: Kind = 16

export const TaggedStyle: Style = 1

export const DoubleQuotedStyle: Style = 2

export const SingleQuotedStyle: Style = 4

export const LiteralStyle: Style = 8

export const FoldedStyle: Style = 16

export const FlowStyle: Style = 32

export async function Unmarshal(_in: $.Slice<number>, out: any): globalThis.Promise<$.GoError> {
	let err: $.GoError = null! as $.GoError
	return unmarshal(_in, out, false)
}

export function NewDecoder(r: io.Reader | null): Decoder | $.VarRef<Decoder> | null {
	return (() => { const __goscriptLiteralField0 = __goscript_decode.newParserFromReader(r); return new Decoder({parser: __goscriptLiteralField0}) })()
}

export async function unmarshal(_in: $.Slice<number>, out: any, strict: boolean): globalThis.Promise<$.GoError> {
	let err: $.VarRef<$.GoError> = $.varRef(null! as $.GoError)
	const __defer = new $.DisposableStack()
	try {
		const __goscriptDeferArg1 = err
		__defer.defer(() => { handleErr(__goscriptDeferArg1) })
		let d: __goscript_decode.decoder | $.VarRef<__goscript_decode.decoder> | null = __goscript_decode.newDecoder()
		let d$: __goscript_decode.decoder = d == null ? $.pointerTarget<__goscript_decode.decoder>(d) : (d as any).__isVarRef === true ? (d as any).value : (d as any).__goValue === undefined ? (d as any) : $.pointerTarget<__goscript_decode.decoder>(d)
		let p: __goscript_decode.parser | $.VarRef<__goscript_decode.parser> | null = __goscript_decode.newParser(_in)
		__defer.defer(() => { (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as __goscript_decode.parser).destroy() : __goscript_decode.parser.prototype.destroy.call(p)) })
		let node: Node | $.VarRef<Node> | null = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as __goscript_decode.parser).parse() : __goscript_decode.parser.prototype.parse.call(p))
		if (node != null) {
			let v = $.markAsStructValue($.cloneStructValue(reflect.ValueOf(out)))
			if (($.markAsStructValue($.cloneStructValue(v)).Kind() == 22) && !$.markAsStructValue($.cloneStructValue(v)).IsNil()) {
				v = $.assignStruct(v, $.markAsStructValue($.cloneStructValue(v)).Elem())
			}
			await (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as __goscript_decode.decoder).unmarshal(node, $.markAsStructValue($.cloneStructValue(v))) : __goscript_decode.decoder.prototype.unmarshal.call(d, node, $.markAsStructValue($.cloneStructValue(v))))
		}
		if ($.sliceLen((d$ as __goscript_decode.decoder).terrors) > 0) {
			const __goscriptReturn3: $.GoError = $.interfaceValue<$.GoError>(new TypeError({Errors: (d$ as __goscript_decode.decoder).terrors}), "*yaml.TypeError", /* @__PURE__ */ $.pointerType("yaml.TypeError"))
			err.value = __goscriptReturn3
			__defer.dispose()
			return err.value
		}
		const __goscriptReturn4: $.GoError = null
		err.value = __goscriptReturn4
		__defer.dispose()
		return err.value
		__defer.dispose()
	} catch (e) {
		__defer.disposePanic(e)
		if (!$.recovered(e)) {
			throw e
		}
	}
	return err.value
}

export async function Marshal(_in: any): globalThis.Promise<[$.Slice<number>, $.GoError]> {
	let out: $.Slice<number> = null! as $.Slice<number>
	let err: $.VarRef<$.GoError> = $.varRef(null! as $.GoError)
	const __defer = new $.DisposableStack()
	try {
		const __goscriptDeferArg2 = err
		__defer.defer(() => { handleErr(__goscriptDeferArg2) })
		let e: __goscript_encode.encoder | $.VarRef<__goscript_encode.encoder> | null = __goscript_encode.newEncoder()
		__defer.defer(() => { (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as __goscript_encode.encoder).destroy() : __goscript_encode.encoder.prototype.destroy.call(e)) })
		await (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as __goscript_encode.encoder).marshalDoc("", $.markAsStructValue($.cloneStructValue(reflect.ValueOf(_in)))) : __goscript_encode.encoder.prototype.marshalDoc.call(e, "", $.markAsStructValue($.cloneStructValue(reflect.ValueOf(_in)))))
		await (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as __goscript_encode.encoder).finish() : __goscript_encode.encoder.prototype.finish.call(e))
		out = $.pointerValue<__goscript_encode.encoder>(e).out
		__defer.dispose()
		return [out, err.value]
		__defer.dispose()
	} catch (e) {
		__defer.disposePanic(e)
		if (!$.recovered(e)) {
			throw e
		}
	}
	return [out, err.value]
}

export function NewEncoder(w: io.Writer | null): Encoder | $.VarRef<Encoder> | null {
	return (() => { const __goscriptLiteralField1 = __goscript_encode.newEncoderWithWriter(w); return new Encoder({encoder: __goscriptLiteralField1}) })()
}

export function handleErr(err: $.VarRef<$.GoError> | null): void {
	{
		let v = $.recover()
		if (v != null) {
			{
				let [e, ok] = $.typeAssertTuple<yamlError>(v, "yaml.yamlError")
				if (ok) {
					err!.value = e.err
				} else {
					$.panic(v)
				}
			}
		}
	}
}

export function fail(err: $.GoError): void {
	$.panic($.interfaceValue(new yamlError({err: err}, true), "yaml.yamlError", "yaml.yamlError"))
}

export function failf(format: string, args: $.Slice<any>): void {
	$.panic($.interfaceValue((() => { const __goscriptLiteralField2 = fmt.Errorf($.concatString("yaml: ", format), ...(args ?? [])); return new yamlError({err: __goscriptLiteralField2}, true) })(), "yaml.yamlError", "yaml.yamlError"))
}

export let structMap: globalThis.Map<reflect.Type | null, structInfo | $.VarRef<structInfo> | null> | null = $.makeMap<reflect.Type | null, structInfo | $.VarRef<structInfo> | null>()

export function __goscript_set_structMap(__goscriptValue: globalThis.Map<reflect.Type | null, structInfo | $.VarRef<structInfo> | null> | null): void {
	structMap = __goscriptValue
}

export let fieldMapMutex: $.VarRef<sync.RWMutex> = $.varRef($.markAsStructValue(new sync.RWMutex()))

export function __goscript_set_fieldMapMutex(__goscriptValue: sync.RWMutex): void {
	$.assignStruct(fieldMapMutex.value, __goscriptValue)
}

export let unmarshalerType: reflect.Type | null = null! as reflect.Type | null

export function __goscript_set_unmarshalerType(__goscriptValue: reflect.Type | null): void {
	unmarshalerType = __goscriptValue
}

function __goscriptInit0(): void {
	let v: $.VarRef<Unmarshaler | null> = $.varRef(null! as Unmarshaler | null)
	unmarshalerType = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(reflect.ValueOf($.interfaceValue(v, "*yaml.Unmarshaler", /* @__PURE__ */ $.pointerType("yaml.Unmarshaler"))))).Elem())).Type()
}

export async function getStructInfo(st: reflect.Type | null): globalThis.Promise<[structInfo | $.VarRef<structInfo> | null, $.GoError]> {
	await fieldMapMutex.value.RLock()
	let __goscriptTuple0: any = $.mapGet<reflect.Type | null, structInfo | $.VarRef<structInfo> | null, structInfo | $.VarRef<structInfo> | null>(structMap, st, null)
	let sinfo: structInfo | $.VarRef<structInfo> | null = __goscriptTuple0[0]
	let found = __goscriptTuple0[1]
	fieldMapMutex.value.RUnlock()
	if (found) {
		return [sinfo, null]
	}

	let n = (__goscriptAwait = (st !== null && (st as any).__isVarRef !== true && (st as any).__goValue === undefined ? (st as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(st)).NumField(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	let fieldsMap: globalThis.Map<string, fieldInfo> | null = $.makeMap<string, fieldInfo>()
	let fieldsList: $.Slice<fieldInfo> = $.makeSlice<fieldInfo>(0, n, undefined, () => new fieldInfo(undefined, true))
	let inlineMap = -1
	let inlineUnmarshalers: $.Slice<$.Slice<number>> = null
	for (let i = 0; i != n; i++) {
		let field = $.markAsStructValue($.cloneStructValue(((__goscriptAwait = (st !== null && (st as any).__isVarRef !== true && (st as any).__goValue === undefined ? (st as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(st)).Field(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as reflect.StructField)))
		if ((!$.stringEqual(field.PkgPath, "")) && !field.Anonymous) {
			continue
		}

		let info = new fieldInfo({Num: i}, true)

		let tag = reflect.StructTag_Get(field.Tag, "yaml")
		if (($.stringEqual(tag, "")) && (strings.Index(globalThis.String(field.Tag), ":") < 0)) {
			tag = globalThis.String(field.Tag)
		}
		if ($.stringEqual(tag, "-")) {
			continue
		}

		let inline = false
		let fields: $.Slice<string> = strings.Split(tag, ",")
		if ($.sliceLen(fields) > 1) {
			for (let __goscriptRangeTarget0 = $.goSlice(fields, 1, undefined), __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
				let flag = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as string)
				switch (flag) {
					case "omitempty":
					{
						info.OmitEmpty = true
						break
					}
					case "flow":
					{
						info.Flow = true
						break
					}
					case "inline":
					{
						inline = true
						break
					}
					default:
					{
						return [null, errors.New(await fmt.Sprintf("unsupported flag %q in tag %q of type %s", flag, tag, (st as any)))]
						break
					}
				}
			}
			tag = $.arrayIndex(fields!, 0)
		}

		if (inline) {
			switch ((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>(field.Type).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
				case reflect.Map:
				{
					if (inlineMap >= 0) {
						return [null, errors.New($.concatString("multiple ,inline maps in struct ", (__goscriptAwait = (st !== null && (st as any).__isVarRef !== true && (st as any).__goValue === undefined ? (st as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(st)).String(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)))]
					}
					if (!$.comparableEqual((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>(field.Type).Key(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), reflect.TypeOf(""))) {
						return [null, errors.New($.concatString("option ,inline needs a map with string keys in struct ", (__goscriptAwait = (st !== null && (st as any).__isVarRef !== true && (st as any).__goValue === undefined ? (st as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(st)).String(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)))]
					}
					inlineMap = info.Num
					break
				}
				case reflect.Struct:
				case reflect.Ptr:
				{
					let ftype = field.Type
					while ((__goscriptAwait = (ftype !== null && (ftype as any).__isVarRef !== true && (ftype as any).__goValue === undefined ? (ftype as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(ftype)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 22) {
						ftype = (__goscriptAwait = (ftype !== null && (ftype as any).__isVarRef !== true && (ftype as any).__goValue === undefined ? (ftype as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(ftype)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					}
					if ((__goscriptAwait = (ftype !== null && (ftype as any).__isVarRef !== true && (ftype as any).__goValue === undefined ? (ftype as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(ftype)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 25) {
						return [null, errors.New("option ,inline may only be used on a struct or map field")]
					}
					if ((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>(reflect.PtrTo($.pointerValueOrNil(ftype)!)).Implements($.pointerValueOrNil(unmarshalerType)!), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
						inlineUnmarshalers = $.appendOne(inlineUnmarshalers, $.arrayToSlice<number>([i]), $.appendZeros.nil)
					} else {
						let __goscriptTuple1: any = await getStructInfo(ftype)
						let __goscriptShadow0: structInfo | $.VarRef<structInfo> | null = __goscriptTuple1[0]
						let err = __goscriptTuple1[1]
						if (err != null) {
							return [null, err]
						}
						for (let __goscriptRangeTarget1 = $.pointerValue<structInfo>(__goscriptShadow0).InlineUnmarshalers, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
							let index = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as $.Slice<number>)
							inlineUnmarshalers = $.appendOne(inlineUnmarshalers, $.appendSlice($.arrayToSlice<number>([i]), index), $.appendZeros.nil)
						}
						for (let __goscriptRangeTarget2 = $.pointerValue<structInfo>(__goscriptShadow0).FieldsList, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow2.length; __rangeIndex++) {
							let finfo = ((__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + __rangeIndex] as fieldInfo)).clone()
							{
								let [, __goscriptShadow1] = $.mapGet<string, fieldInfo, fieldInfo>(fieldsMap, finfo.Key, new fieldInfo(undefined, true))
								if (__goscriptShadow1) {
									let msg = $.concatString(($.concatString(($.concatString("duplicated key '", finfo.Key)), "' in struct ")), (__goscriptAwait = (st !== null && (st as any).__isVarRef !== true && (st as any).__goValue === undefined ? (st as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(st)).String(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
									return [null, errors.New(msg)]
								}
							}
							if (finfo.Inline == null) {
								finfo.Inline = $.arrayToSlice<number>([i, finfo.Num])
							} else {
								finfo.Inline = $.appendSlice($.arrayToSlice<number>([i]), finfo.Inline)
							}
							finfo.Id = $.sliceLen(fieldsList)
							$.mapSet(fieldsMap, finfo.Key, (finfo).clone())
							fieldsList = $.appendOne(fieldsList, (finfo).clone())
						}
					}
					break
				}
				default:
				{
					return [null, errors.New("option ,inline may only be used on a struct or map field")]
					break
				}
			}
			continue
		}

		if (!$.stringEqual(tag, "")) {
			info.Key = tag
		} else {
			info.Key = strings.ToLower(field.Name)
		}

		{
			let __goscriptTuple2: any = $.mapGet<string, fieldInfo, fieldInfo>(fieldsMap, info.Key, new fieldInfo(undefined, true))
			found = __goscriptTuple2[1]
			if (found) {
				let msg = $.concatString(($.concatString(($.concatString("duplicated key '", info.Key)), "' in struct ")), (__goscriptAwait = (st !== null && (st as any).__isVarRef !== true && (st as any).__goValue === undefined ? (st as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(st)).String(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
				return [null, errors.New(msg)]
			}
		}

		info.Id = $.sliceLen(fieldsList)
		fieldsList = $.appendOne(fieldsList, (info).clone())
		$.mapSet(fieldsMap, info.Key, (info).clone())
	}

	sinfo = new structInfo({FieldsMap: fieldsMap, FieldsList: fieldsList, InlineMap: inlineMap, InlineUnmarshalers: inlineUnmarshalers})

	await fieldMapMutex.value.Lock()
	$.mapSet(structMap, st, sinfo)
	fieldMapMutex.value.Unlock()
	return [sinfo, null]
}

export async function isZero(v: reflect.Value): globalThis.Promise<boolean> {
	let kind = $.markAsStructValue($.cloneStructValue(v)).Kind()
	{
		let [z, ok] = $.typeAssertTuple<IsZeroer | null>($.markAsStructValue($.cloneStructValue(v)).Interface(), "yaml.IsZeroer")
		if (ok) {
			if (((kind == 22) || (kind == 20)) && $.markAsStructValue($.cloneStructValue(v)).IsNil()) {
				return true
			}
			return (z !== null && (z as any).__isVarRef !== true && (z as any).__goValue === undefined ? (z as Exclude<IsZeroer, null>) : $.pointerValue<Exclude<IsZeroer, null>>(z)).IsZero()
		}
	}
	switch (kind) {
		case reflect.String:
		{
			return $.stringLen($.markAsStructValue($.cloneStructValue(v)).String()) == 0
			break
		}
		case reflect.Interface:
		case reflect.Ptr:
		{
			return $.markAsStructValue($.cloneStructValue(v)).IsNil()
			break
		}
		case reflect.Slice:
		{
			return $.markAsStructValue($.cloneStructValue(v)).Len() == 0
			break
		}
		case reflect.Map:
		{
			return $.markAsStructValue($.cloneStructValue(v)).Len() == 0
			break
		}
		case reflect.Int:
		case reflect.Int8:
		case reflect.Int16:
		case reflect.Int32:
		case reflect.Int64:
		{
			return $.markAsStructValue($.cloneStructValue(v)).Int() == 0n
			break
		}
		case reflect.Float32:
		case reflect.Float64:
		{
			return $.markAsStructValue($.cloneStructValue(v)).Float() == 0
			break
		}
		case reflect.Uint:
		case reflect.Uint8:
		case reflect.Uint16:
		case reflect.Uint32:
		case reflect.Uint64:
		case reflect.Uintptr:
		{
			return $.markAsStructValue($.cloneStructValue(v)).Uint() == 0n
			break
		}
		case reflect.Bool:
		{
			return !$.markAsStructValue($.cloneStructValue(v)).Bool()
			break
		}
		case reflect.Struct:
		{
			let vt = $.markAsStructValue($.cloneStructValue(v)).Type()
			for (let i = $.markAsStructValue($.cloneStructValue(v)).NumField() - 1; i >= 0; i--) {
				if (!$.stringEqual(((__goscriptAwait = (vt !== null && (vt as any).__isVarRef !== true && (vt as any).__goValue === undefined ? (vt as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(vt)).Field(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as reflect.StructField).PkgPath, "")) {
					continue
				}
				if (!await isZero($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(v)).Field(i))))) {
					return false
				}
			}
			return true
			break
		}
	}
	return false
}

var __goscriptAwait: any

export { __goscriptInit0 }
