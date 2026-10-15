// Generated file based on yamlh.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as io from "@goscript/io/index.js"
import "@goscript/fmt/index.js"
import "@goscript/io/index.js"

$.registerTypePackagePath("gopkg.in/yaml.v3", ["yaml.yaml_version_directive_t", "yaml.yaml_tag_directive_t", "yaml.yaml_encoding_t", "yaml.yaml_break_t", "yaml.yaml_error_type_t", "yaml.yaml_mark_t", "yaml.yaml_style_t", "yaml.yaml_scalar_style_t", "yaml.yaml_sequence_style_t", "yaml.yaml_mapping_style_t", "yaml.yaml_token_type_t", "yaml.yaml_token_t", "yaml.yaml_event_type_t", "yaml.yaml_event_t", "yaml.yaml_node_type_t", "yaml.yaml_node_item_t", "yaml.yaml_node_pair_t", "yaml.yaml_node_t", "yaml.yaml_document_t", "yaml.yaml_read_handler_t", "yaml.yaml_simple_key_t", "yaml.yaml_parser_state_t", "yaml.yaml_alias_data_t", "yaml.yaml_parser_t", "yaml.yaml_comment_t", "yaml.yaml_write_handler_t", "yaml.yaml_emitter_state_t", "yaml.yaml_emitter_t"])

export type yaml_encoding_t = number

export type yaml_break_t = number

export type yaml_error_type_t = number

export type yaml_style_t = number

export type yaml_scalar_style_t = number

export type yaml_sequence_style_t = number

export type yaml_mapping_style_t = number

export type yaml_token_type_t = number

$.registerNamedValueType(
	"yaml.yaml_token_type_t",
	{String: (receiver: any, ...args: any[]) => (yaml_token_type_t_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

$.registerNamedValueType(
	"*yaml.yaml_token_type_t",
	{String: (receiver: any, ...args: any[]) => (yaml_token_type_t_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

export type yaml_event_type_t = number

$.registerNamedValueType(
	"yaml.yaml_event_type_t",
	{String: (receiver: any, ...args: any[]) => (yaml_event_type_t_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

$.registerNamedValueType(
	"*yaml.yaml_event_type_t",
	{String: (receiver: any, ...args: any[]) => (yaml_event_type_t_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

export type yaml_node_type_t = number

export type yaml_node_item_t = number

export type yaml_read_handler_t = ((parser: yaml_parser_t | $.VarRef<yaml_parser_t> | null, buffer: $.Slice<number>) => [number, $.GoError] | globalThis.Promise<[number, $.GoError]>) | null

export type yaml_parser_state_t = number

$.registerNamedValueType(
	"yaml.yaml_parser_state_t",
	{String: (receiver: any, ...args: any[]) => (yaml_parser_state_t_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

$.registerNamedValueType(
	"*yaml.yaml_parser_state_t",
	{String: (receiver: any, ...args: any[]) => (yaml_parser_state_t_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

export type yaml_write_handler_t = ((emitter: yaml_emitter_t | $.VarRef<yaml_emitter_t> | null, buffer: $.Slice<number>) => $.GoError | globalThis.Promise<$.GoError>) | null

export type yaml_emitter_state_t = number

export class yaml_version_directive_t {
	public get major(): number {
		return this._fields.major
	}

	public set major(value: number) {
		this._fields.major = value
	}

	public get minor(): number {
		return this._fields.minor
	}

	public set minor(value: number) {
		this._fields.minor = value
	}

	public _fields: {
		major: number
		minor: number
	}

	constructor(init?: Partial<{major?: number, minor?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			major: init?.major ?? (0 as number),
			minor: init?.minor ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): yaml_version_directive_t {
		return new yaml_version_directive_t(this, true)
	}

	public __goscriptAssign(source: yaml_version_directive_t): void {
		const target = this._fields
		const values = source._fields
		target.major = values.major
		target.minor = values.minor
	}

	static __typeInfo = $.registerStructType(
		"yaml.yaml_version_directive_t",
		() => new yaml_version_directive_t(),
		() => [],
		yaml_version_directive_t,
		() => [/* @__PURE__ */ $.structField("major", /* @__PURE__ */ $.basicType("int8"), [0], 0, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("minor", /* @__PURE__ */ $.basicType("int8"), [1], 1, false, { pkgPath: "gopkg.in/yaml.v3" })]
	)
}

export class yaml_tag_directive_t {
	public get handle(): $.Slice<number> {
		return this._fields.handle
	}

	public set handle(value: $.Slice<number>) {
		this._fields.handle = value
	}

	public get prefix(): $.Slice<number> {
		return this._fields.prefix
	}

	public set prefix(value: $.Slice<number>) {
		this._fields.prefix = value
	}

	public _fields: {
		handle: $.Slice<number>
		prefix: $.Slice<number>
	}

	constructor(init?: Partial<{handle?: $.Slice<number>, prefix?: $.Slice<number>}>, __goscriptValue?: boolean) {
		this._fields = {
			handle: init?.handle ?? (null! as $.Slice<number>),
			prefix: init?.prefix ?? (null! as $.Slice<number>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): yaml_tag_directive_t {
		return new yaml_tag_directive_t(this, true)
	}

	public __goscriptAssign(source: yaml_tag_directive_t): void {
		const target = this._fields
		const values = source._fields
		target.handle = values.handle
		target.prefix = values.prefix
	}

	static __typeInfo = $.registerStructType(
		"yaml.yaml_tag_directive_t",
		() => new yaml_tag_directive_t(),
		() => [],
		yaml_tag_directive_t,
		() => [/* @__PURE__ */ $.structField("handle", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [0], 0, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("prefix", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [1], 24, false, { pkgPath: "gopkg.in/yaml.v3" })]
	)
}

export class yaml_mark_t {
	public get index(): number {
		return this._fields.index
	}

	public set index(value: number) {
		this._fields.index = value
	}

	public get line(): number {
		return this._fields.line
	}

	public set line(value: number) {
		this._fields.line = value
	}

	public get column(): number {
		return this._fields.column
	}

	public set column(value: number) {
		this._fields.column = value
	}

	public _fields: {
		index: number
		line: number
		column: number
	}

	constructor(init?: Partial<{index?: number, line?: number, column?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			index: init?.index ?? (0 as number),
			line: init?.line ?? (0 as number),
			column: init?.column ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): yaml_mark_t {
		return new yaml_mark_t(this, true)
	}

	public __goscriptAssign(source: yaml_mark_t): void {
		const target = this._fields
		const values = source._fields
		target.index = values.index
		target.line = values.line
		target.column = values.column
	}

	static __typeInfo = $.registerStructType(
		"yaml.yaml_mark_t",
		() => new yaml_mark_t(),
		() => [],
		yaml_mark_t,
		() => [/* @__PURE__ */ $.structField("index", /* @__PURE__ */ $.basicType("int"), [0], 0, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("line", /* @__PURE__ */ $.basicType("int"), [1], 8, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("column", /* @__PURE__ */ $.basicType("int"), [2], 16, false, { pkgPath: "gopkg.in/yaml.v3" })]
	)
}

export class yaml_token_t {
	// The token type.
	public get typ(): yaml_token_type_t {
		return this._fields.typ
	}

	public set typ(value: yaml_token_type_t) {
		this._fields.typ = value
	}

	// The start/end of the token.
	public get start_mark(): yaml_mark_t {
		return this._fields.start_mark
	}

	public set start_mark(value: yaml_mark_t) {
		this._fields.start_mark = value
	}

	// The start/end of the token.
	public get end_mark(): yaml_mark_t {
		return this._fields.end_mark
	}

	public set end_mark(value: yaml_mark_t) {
		this._fields.end_mark = value
	}

	// The stream encoding (for yaml_STREAM_START_TOKEN).
	public get encoding(): yaml_encoding_t {
		return this._fields.encoding
	}

	public set encoding(value: yaml_encoding_t) {
		this._fields.encoding = value
	}

	// The alias/anchor/scalar value or tag/tag directive handle
	// (for yaml_ALIAS_TOKEN, yaml_ANCHOR_TOKEN, yaml_SCALAR_TOKEN, yaml_TAG_TOKEN, yaml_TAG_DIRECTIVE_TOKEN).
	public get value(): $.Slice<number> {
		return this._fields.value
	}

	public set value(value: $.Slice<number>) {
		this._fields.value = value
	}

	// The tag suffix (for yaml_TAG_TOKEN).
	public get suffix(): $.Slice<number> {
		return this._fields.suffix
	}

	public set suffix(value: $.Slice<number>) {
		this._fields.suffix = value
	}

	// The tag directive prefix (for yaml_TAG_DIRECTIVE_TOKEN).
	public get prefix(): $.Slice<number> {
		return this._fields.prefix
	}

	public set prefix(value: $.Slice<number>) {
		this._fields.prefix = value
	}

	// The scalar style (for yaml_SCALAR_TOKEN).
	public get style(): yaml_scalar_style_t {
		return this._fields.style
	}

	public set style(value: yaml_scalar_style_t) {
		this._fields.style = value
	}

	// The version directive major/minor (for yaml_VERSION_DIRECTIVE_TOKEN).
	public get major(): number {
		return this._fields.major
	}

	public set major(value: number) {
		this._fields.major = value
	}

	// The version directive major/minor (for yaml_VERSION_DIRECTIVE_TOKEN).
	public get minor(): number {
		return this._fields.minor
	}

	public set minor(value: number) {
		this._fields.minor = value
	}

	public _fields: {
		typ: yaml_token_type_t
		start_mark: yaml_mark_t
		end_mark: yaml_mark_t
		encoding: yaml_encoding_t
		value: $.Slice<number>
		suffix: $.Slice<number>
		prefix: $.Slice<number>
		style: yaml_scalar_style_t
		major: number
		minor: number
	}

	constructor(init?: Partial<{typ?: yaml_token_type_t, start_mark?: yaml_mark_t, end_mark?: yaml_mark_t, encoding?: yaml_encoding_t, value?: $.Slice<number>, suffix?: $.Slice<number>, prefix?: $.Slice<number>, style?: yaml_scalar_style_t, major?: number, minor?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			typ: init?.typ ?? (0 as yaml_token_type_t),
			start_mark: init?.start_mark ? init.start_mark.clone() : new yaml_mark_t(undefined, true),
			end_mark: init?.end_mark ? init.end_mark.clone() : new yaml_mark_t(undefined, true),
			encoding: init?.encoding ?? (0 as yaml_encoding_t),
			value: init?.value ?? (null! as $.Slice<number>),
			suffix: init?.suffix ?? (null! as $.Slice<number>),
			prefix: init?.prefix ?? (null! as $.Slice<number>),
			style: init?.style ?? (0 as yaml_scalar_style_t),
			major: init?.major ?? (0 as number),
			minor: init?.minor ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): yaml_token_t {
		return new yaml_token_t(this, true)
	}

	public __goscriptAssign(source: yaml_token_t): void {
		const target = this._fields
		const values = source._fields
		target.typ = values.typ
		$.assignStruct(target.start_mark, values.start_mark)
		$.assignStruct(target.end_mark, values.end_mark)
		target.encoding = values.encoding
		target.value = values.value
		target.suffix = values.suffix
		target.prefix = values.prefix
		target.style = values.style
		target.major = values.major
		target.minor = values.minor
	}

	static __typeInfo = $.registerStructType(
		"yaml.yaml_token_t",
		() => new yaml_token_t(),
		() => [],
		yaml_token_t,
		() => [/* @__PURE__ */ $.structField("typ", /* @__PURE__ */ $.basicType("int", "yaml.yaml_token_type_t"), [0], 0, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("start_mark", "yaml.yaml_mark_t", [1], 8, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("end_mark", "yaml.yaml_mark_t", [2], 32, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("encoding", /* @__PURE__ */ $.basicType("int", "yaml.yaml_encoding_t"), [3], 56, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("value", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [4], 64, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("suffix", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [5], 88, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("prefix", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [6], 112, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("style", /* @__PURE__ */ $.basicType("int8", "yaml.yaml_scalar_style_t"), [7], 136, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("major", /* @__PURE__ */ $.basicType("int8"), [8], 137, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("minor", /* @__PURE__ */ $.basicType("int8"), [9], 138, false, { pkgPath: "gopkg.in/yaml.v3" })]
	)
}

export class yaml_event_t {
	// The event type.
	public get typ(): yaml_event_type_t {
		return this._fields.typ
	}

	public set typ(value: yaml_event_type_t) {
		this._fields.typ = value
	}

	// The start and end of the event.
	public get start_mark(): yaml_mark_t {
		return this._fields.start_mark
	}

	public set start_mark(value: yaml_mark_t) {
		this._fields.start_mark = value
	}

	// The start and end of the event.
	public get end_mark(): yaml_mark_t {
		return this._fields.end_mark
	}

	public set end_mark(value: yaml_mark_t) {
		this._fields.end_mark = value
	}

	// The document encoding (for yaml_STREAM_START_EVENT).
	public get encoding(): yaml_encoding_t {
		return this._fields.encoding
	}

	public set encoding(value: yaml_encoding_t) {
		this._fields.encoding = value
	}

	// The version directive (for yaml_DOCUMENT_START_EVENT).
	public get version_directive(): yaml_version_directive_t | $.VarRef<yaml_version_directive_t> | null {
		return this._fields.version_directive
	}

	public set version_directive(value: yaml_version_directive_t | $.VarRef<yaml_version_directive_t> | null) {
		this._fields.version_directive = value
	}

	// The list of tag directives (for yaml_DOCUMENT_START_EVENT).
	public get tag_directives(): $.Slice<yaml_tag_directive_t> {
		return this._fields.tag_directives
	}

	public set tag_directives(value: $.Slice<yaml_tag_directive_t>) {
		this._fields.tag_directives = value
	}

	// The comments
	public get head_comment(): $.Slice<number> {
		return this._fields.head_comment
	}

	public set head_comment(value: $.Slice<number>) {
		this._fields.head_comment = value
	}

	public get line_comment(): $.Slice<number> {
		return this._fields.line_comment
	}

	public set line_comment(value: $.Slice<number>) {
		this._fields.line_comment = value
	}

	public get foot_comment(): $.Slice<number> {
		return this._fields.foot_comment
	}

	public set foot_comment(value: $.Slice<number>) {
		this._fields.foot_comment = value
	}

	public get tail_comment(): $.Slice<number> {
		return this._fields.tail_comment
	}

	public set tail_comment(value: $.Slice<number>) {
		this._fields.tail_comment = value
	}

	// The anchor (for yaml_SCALAR_EVENT, yaml_SEQUENCE_START_EVENT, yaml_MAPPING_START_EVENT, yaml_ALIAS_EVENT).
	public get anchor(): $.Slice<number> {
		return this._fields.anchor
	}

	public set anchor(value: $.Slice<number>) {
		this._fields.anchor = value
	}

	// The tag (for yaml_SCALAR_EVENT, yaml_SEQUENCE_START_EVENT, yaml_MAPPING_START_EVENT).
	public get tag(): $.Slice<number> {
		return this._fields.tag
	}

	public set tag(value: $.Slice<number>) {
		this._fields.tag = value
	}

	// The scalar value (for yaml_SCALAR_EVENT).
	public get value(): $.Slice<number> {
		return this._fields.value
	}

	public set value(value: $.Slice<number>) {
		this._fields.value = value
	}

	// Is the document start/end indicator implicit, or the tag optional?
	// (for yaml_DOCUMENT_START_EVENT, yaml_DOCUMENT_END_EVENT, yaml_SEQUENCE_START_EVENT, yaml_MAPPING_START_EVENT, yaml_SCALAR_EVENT).
	public get implicit(): boolean {
		return this._fields.implicit
	}

	public set implicit(value: boolean) {
		this._fields.implicit = value
	}

	// Is the tag optional for any non-plain style? (for yaml_SCALAR_EVENT).
	public get quoted_implicit(): boolean {
		return this._fields.quoted_implicit
	}

	public set quoted_implicit(value: boolean) {
		this._fields.quoted_implicit = value
	}

	// The style (for yaml_SCALAR_EVENT, yaml_SEQUENCE_START_EVENT, yaml_MAPPING_START_EVENT).
	public get style(): yaml_style_t {
		return this._fields.style
	}

	public set style(value: yaml_style_t) {
		this._fields.style = value
	}

	public _fields: {
		typ: yaml_event_type_t
		start_mark: yaml_mark_t
		end_mark: yaml_mark_t
		encoding: yaml_encoding_t
		version_directive: yaml_version_directive_t | $.VarRef<yaml_version_directive_t> | null
		tag_directives: $.Slice<yaml_tag_directive_t>
		head_comment: $.Slice<number>
		line_comment: $.Slice<number>
		foot_comment: $.Slice<number>
		tail_comment: $.Slice<number>
		anchor: $.Slice<number>
		tag: $.Slice<number>
		value: $.Slice<number>
		implicit: boolean
		quoted_implicit: boolean
		style: yaml_style_t
	}

	constructor(init?: Partial<{typ?: yaml_event_type_t, start_mark?: yaml_mark_t, end_mark?: yaml_mark_t, encoding?: yaml_encoding_t, version_directive?: yaml_version_directive_t | $.VarRef<yaml_version_directive_t> | null, tag_directives?: $.Slice<yaml_tag_directive_t>, head_comment?: $.Slice<number>, line_comment?: $.Slice<number>, foot_comment?: $.Slice<number>, tail_comment?: $.Slice<number>, anchor?: $.Slice<number>, tag?: $.Slice<number>, value?: $.Slice<number>, implicit?: boolean, quoted_implicit?: boolean, style?: yaml_style_t}>, __goscriptValue?: boolean) {
		this._fields = {
			typ: init?.typ ?? (0 as yaml_event_type_t),
			start_mark: init?.start_mark ? init.start_mark.clone() : new yaml_mark_t(undefined, true),
			end_mark: init?.end_mark ? init.end_mark.clone() : new yaml_mark_t(undefined, true),
			encoding: init?.encoding ?? (0 as yaml_encoding_t),
			version_directive: init?.version_directive ?? (null! as yaml_version_directive_t | $.VarRef<yaml_version_directive_t> | null),
			tag_directives: init?.tag_directives ?? (null! as $.Slice<yaml_tag_directive_t>),
			head_comment: init?.head_comment ?? (null! as $.Slice<number>),
			line_comment: init?.line_comment ?? (null! as $.Slice<number>),
			foot_comment: init?.foot_comment ?? (null! as $.Slice<number>),
			tail_comment: init?.tail_comment ?? (null! as $.Slice<number>),
			anchor: init?.anchor ?? (null! as $.Slice<number>),
			tag: init?.tag ?? (null! as $.Slice<number>),
			value: init?.value ?? (null! as $.Slice<number>),
			implicit: init?.implicit ?? (false as boolean),
			quoted_implicit: init?.quoted_implicit ?? (false as boolean),
			style: init?.style ?? (0 as yaml_style_t)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): yaml_event_t {
		return new yaml_event_t(this, true)
	}

	public __goscriptAssign(source: yaml_event_t): void {
		const target = this._fields
		const values = source._fields
		target.typ = values.typ
		$.assignStruct(target.start_mark, values.start_mark)
		$.assignStruct(target.end_mark, values.end_mark)
		target.encoding = values.encoding
		target.version_directive = values.version_directive
		target.tag_directives = values.tag_directives
		target.head_comment = values.head_comment
		target.line_comment = values.line_comment
		target.foot_comment = values.foot_comment
		target.tail_comment = values.tail_comment
		target.anchor = values.anchor
		target.tag = values.tag
		target.value = values.value
		target.implicit = values.implicit
		target.quoted_implicit = values.quoted_implicit
		target.style = values.style
	}

	public mapping_style(): yaml_mapping_style_t {
		const e: yaml_event_t | $.VarRef<yaml_event_t> | null = this;
		return $.int($.pointerValue<yaml_event_t>(e).style, 8)
	}

	public scalar_style(): yaml_scalar_style_t {
		const e: yaml_event_t | $.VarRef<yaml_event_t> | null = this;
		return $.int($.pointerValue<yaml_event_t>(e).style, 8)
	}

	public sequence_style(): yaml_sequence_style_t {
		const e: yaml_event_t | $.VarRef<yaml_event_t> | null = this;
		return $.int($.pointerValue<yaml_event_t>(e).style, 8)
	}

	static __typeInfo = $.registerStructType(
		"yaml.yaml_event_t",
		() => new yaml_event_t(),
		() => [$.methodSignature("mapping_style", [], [/* @__PURE__ */ $.basicType("int8", "yaml.yaml_mapping_style_t")], true), $.methodSignature("scalar_style", [], [/* @__PURE__ */ $.basicType("int8", "yaml.yaml_scalar_style_t")], true), $.methodSignature("sequence_style", [], [/* @__PURE__ */ $.basicType("int8", "yaml.yaml_sequence_style_t")], true)],
		yaml_event_t,
		() => [/* @__PURE__ */ $.structField("typ", /* @__PURE__ */ $.basicType("int8", "yaml.yaml_event_type_t"), [0], 0, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("start_mark", "yaml.yaml_mark_t", [1], 8, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("end_mark", "yaml.yaml_mark_t", [2], 32, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("encoding", /* @__PURE__ */ $.basicType("int", "yaml.yaml_encoding_t"), [3], 56, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("version_directive", /* @__PURE__ */ $.pointerType("yaml.yaml_version_directive_t"), [4], 64, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("tag_directives", /* @__PURE__ */ $.sliceType("yaml.yaml_tag_directive_t"), [5], 72, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("head_comment", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [6], 96, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("line_comment", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [7], 120, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("foot_comment", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [8], 144, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("tail_comment", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [9], 168, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("anchor", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [10], 192, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("tag", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [11], 216, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("value", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [12], 240, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("implicit", /* @__PURE__ */ $.basicType("bool"), [13], 264, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("quoted_implicit", /* @__PURE__ */ $.basicType("bool"), [14], 265, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("style", /* @__PURE__ */ $.basicType("int8", "yaml.yaml_style_t"), [15], 266, false, { pkgPath: "gopkg.in/yaml.v3" })]
	)
}

export class yaml_node_pair_t {
	public get key(): number {
		return this._fields.key
	}

	public set key(value: number) {
		this._fields.key = value
	}

	public get value(): number {
		return this._fields.value
	}

	public set value(value: number) {
		this._fields.value = value
	}

	public _fields: {
		key: number
		value: number
	}

	constructor(init?: Partial<{key?: number, value?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			key: init?.key ?? (0 as number),
			value: init?.value ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): yaml_node_pair_t {
		return new yaml_node_pair_t(this, true)
	}

	public __goscriptAssign(source: yaml_node_pair_t): void {
		const target = this._fields
		const values = source._fields
		target.key = values.key
		target.value = values.value
	}

	static __typeInfo = $.registerStructType(
		"yaml.yaml_node_pair_t",
		() => new yaml_node_pair_t(),
		() => [],
		yaml_node_pair_t,
		() => [/* @__PURE__ */ $.structField("key", /* @__PURE__ */ $.basicType("int"), [0], 0, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("value", /* @__PURE__ */ $.basicType("int"), [1], 8, false, { pkgPath: "gopkg.in/yaml.v3" })]
	)
}

export class yaml_node_t {
	public get typ(): yaml_node_type_t {
		return this._fields.typ
	}

	public set typ(value: yaml_node_type_t) {
		this._fields.typ = value
	}

	public get tag(): $.Slice<number> {
		return this._fields.tag
	}

	public set tag(value: $.Slice<number>) {
		this._fields.tag = value
	}

	// The scalar parameters (for yaml_SCALAR_NODE).
	public get scalar(): {"value": $.Slice<number>, "length": number, "style": yaml_scalar_style_t} {
		return this._fields.scalar
	}

	public set scalar(value: {"value": $.Slice<number>, "length": number, "style": yaml_scalar_style_t}) {
		this._fields.scalar = value
	}

	// The sequence parameters (for YAML_SEQUENCE_NODE).
	public get sequence(): {"items_data": $.Slice<yaml_node_item_t>, "style": yaml_sequence_style_t} {
		return this._fields.sequence
	}

	public set sequence(value: {"items_data": $.Slice<yaml_node_item_t>, "style": yaml_sequence_style_t}) {
		this._fields.sequence = value
	}

	// The mapping parameters (for yaml_MAPPING_NODE).
	public get mapping(): {"pairs_data": $.Slice<yaml_node_pair_t>, "pairs_start": yaml_node_pair_t | $.VarRef<yaml_node_pair_t> | null, "pairs_end": yaml_node_pair_t | $.VarRef<yaml_node_pair_t> | null, "pairs_top": yaml_node_pair_t | $.VarRef<yaml_node_pair_t> | null, "style": yaml_mapping_style_t} {
		return this._fields.mapping
	}

	public set mapping(value: {"pairs_data": $.Slice<yaml_node_pair_t>, "pairs_start": yaml_node_pair_t | $.VarRef<yaml_node_pair_t> | null, "pairs_end": yaml_node_pair_t | $.VarRef<yaml_node_pair_t> | null, "pairs_top": yaml_node_pair_t | $.VarRef<yaml_node_pair_t> | null, "style": yaml_mapping_style_t}) {
		this._fields.mapping = value
	}

	public get start_mark(): yaml_mark_t {
		return this._fields.start_mark
	}

	public set start_mark(value: yaml_mark_t) {
		this._fields.start_mark = value
	}

	public get end_mark(): yaml_mark_t {
		return this._fields.end_mark
	}

	public set end_mark(value: yaml_mark_t) {
		this._fields.end_mark = value
	}

	public _fields: {
		typ: yaml_node_type_t
		tag: $.Slice<number>
		scalar: {"value": $.Slice<number>, "length": number, "style": yaml_scalar_style_t}
		sequence: {"items_data": $.Slice<yaml_node_item_t>, "style": yaml_sequence_style_t}
		mapping: {"pairs_data": $.Slice<yaml_node_pair_t>, "pairs_start": yaml_node_pair_t | $.VarRef<yaml_node_pair_t> | null, "pairs_end": yaml_node_pair_t | $.VarRef<yaml_node_pair_t> | null, "pairs_top": yaml_node_pair_t | $.VarRef<yaml_node_pair_t> | null, "style": yaml_mapping_style_t}
		start_mark: yaml_mark_t
		end_mark: yaml_mark_t
	}

	constructor(init?: Partial<{typ?: yaml_node_type_t, tag?: $.Slice<number>, scalar?: {"value": $.Slice<number>, "length": number, "style": yaml_scalar_style_t}, sequence?: {"items_data": $.Slice<yaml_node_item_t>, "style": yaml_sequence_style_t}, mapping?: {"pairs_data": $.Slice<yaml_node_pair_t>, "pairs_start": yaml_node_pair_t | $.VarRef<yaml_node_pair_t> | null, "pairs_end": yaml_node_pair_t | $.VarRef<yaml_node_pair_t> | null, "pairs_top": yaml_node_pair_t | $.VarRef<yaml_node_pair_t> | null, "style": yaml_mapping_style_t}, start_mark?: yaml_mark_t, end_mark?: yaml_mark_t}>, __goscriptValue?: boolean) {
		this._fields = {
			typ: init?.typ ?? (0 as yaml_node_type_t),
			tag: init?.tag ?? (null! as $.Slice<number>),
			scalar: init?.scalar ? $.markAsStructValue($.cloneStructValue(init.scalar)) : $.anonymousStructValue({"value": null, "length": 0, "style": 0}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("value", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [0], 0, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("length", /* @__PURE__ */ $.basicType("int"), [1], 24, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("style", /* @__PURE__ */ $.basicType("int8", "yaml.yaml_scalar_style_t"), [2], 32, false, { pkgPath: "gopkg.in/yaml.v3" })] }),
			sequence: init?.sequence ? $.markAsStructValue($.cloneStructValue(init.sequence)) : $.anonymousStructValue({"items_data": null, "style": 0}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("items_data", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int", "yaml.yaml_node_item_t")), [0], 0, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("style", /* @__PURE__ */ $.basicType("int8", "yaml.yaml_sequence_style_t"), [1], 24, false, { pkgPath: "gopkg.in/yaml.v3" })] }),
			mapping: init?.mapping ? $.markAsStructValue($.cloneStructValue(init.mapping)) : $.anonymousStructValue({"pairs_data": null, "pairs_start": null, "pairs_end": null, "pairs_top": null, "style": 0}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("pairs_data", /* @__PURE__ */ $.sliceType("yaml.yaml_node_pair_t"), [0], 0, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("pairs_start", /* @__PURE__ */ $.pointerType("yaml.yaml_node_pair_t"), [1], 24, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("pairs_end", /* @__PURE__ */ $.pointerType("yaml.yaml_node_pair_t"), [2], 32, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("pairs_top", /* @__PURE__ */ $.pointerType("yaml.yaml_node_pair_t"), [3], 40, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("style", /* @__PURE__ */ $.basicType("int8", "yaml.yaml_mapping_style_t"), [4], 48, false, { pkgPath: "gopkg.in/yaml.v3" })] }),
			start_mark: init?.start_mark ? init.start_mark.clone() : new yaml_mark_t(undefined, true),
			end_mark: init?.end_mark ? init.end_mark.clone() : new yaml_mark_t(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): yaml_node_t {
		return new yaml_node_t(this, true)
	}

	public __goscriptAssign(source: yaml_node_t): void {
		const target = this._fields
		const values = source._fields
		target.typ = values.typ
		target.tag = values.tag
		$.assignStruct(target.scalar, values.scalar)
		$.assignStruct(target.sequence, values.sequence)
		$.assignStruct(target.mapping, values.mapping)
		$.assignStruct(target.start_mark, values.start_mark)
		$.assignStruct(target.end_mark, values.end_mark)
	}

	static __typeInfo = $.registerStructType(
		"yaml.yaml_node_t",
		() => new yaml_node_t(),
		() => [],
		yaml_node_t,
		() => [/* @__PURE__ */ $.structField("typ", /* @__PURE__ */ $.basicType("int", "yaml.yaml_node_type_t"), [0], 0, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("tag", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [1], 8, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("scalar", { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("value", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [0], 0, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("length", /* @__PURE__ */ $.basicType("int"), [1], 24, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("style", /* @__PURE__ */ $.basicType("int8", "yaml.yaml_scalar_style_t"), [2], 32, false, { pkgPath: "gopkg.in/yaml.v3" })] }, [2], 32, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("sequence", { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("items_data", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int", "yaml.yaml_node_item_t")), [0], 0, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("style", /* @__PURE__ */ $.basicType("int8", "yaml.yaml_sequence_style_t"), [1], 24, false, { pkgPath: "gopkg.in/yaml.v3" })] }, [3], 72, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("mapping", { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("pairs_data", /* @__PURE__ */ $.sliceType("yaml.yaml_node_pair_t"), [0], 0, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("pairs_start", /* @__PURE__ */ $.pointerType("yaml.yaml_node_pair_t"), [1], 24, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("pairs_end", /* @__PURE__ */ $.pointerType("yaml.yaml_node_pair_t"), [2], 32, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("pairs_top", /* @__PURE__ */ $.pointerType("yaml.yaml_node_pair_t"), [3], 40, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("style", /* @__PURE__ */ $.basicType("int8", "yaml.yaml_mapping_style_t"), [4], 48, false, { pkgPath: "gopkg.in/yaml.v3" })] }, [4], 104, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("start_mark", "yaml.yaml_mark_t", [5], 160, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("end_mark", "yaml.yaml_mark_t", [6], 184, false, { pkgPath: "gopkg.in/yaml.v3" })]
	)
}

export class yaml_document_t {
	// The document nodes.
	public get nodes(): $.Slice<yaml_node_t> {
		return this._fields.nodes
	}

	public set nodes(value: $.Slice<yaml_node_t>) {
		this._fields.nodes = value
	}

	// The version directive.
	public get version_directive(): yaml_version_directive_t | $.VarRef<yaml_version_directive_t> | null {
		return this._fields.version_directive
	}

	public set version_directive(value: yaml_version_directive_t | $.VarRef<yaml_version_directive_t> | null) {
		this._fields.version_directive = value
	}

	// The list of tag directives.
	public get tag_directives_data(): $.Slice<yaml_tag_directive_t> {
		return this._fields.tag_directives_data
	}

	public set tag_directives_data(value: $.Slice<yaml_tag_directive_t>) {
		this._fields.tag_directives_data = value
	}

	public get tag_directives_start(): number {
		return this._fields.tag_directives_start
	}

	public set tag_directives_start(value: number) {
		this._fields.tag_directives_start = value
	}

	public get tag_directives_end(): number {
		return this._fields.tag_directives_end
	}

	public set tag_directives_end(value: number) {
		this._fields.tag_directives_end = value
	}

	public get start_implicit(): number {
		return this._fields.start_implicit
	}

	public set start_implicit(value: number) {
		this._fields.start_implicit = value
	}

	public get end_implicit(): number {
		return this._fields.end_implicit
	}

	public set end_implicit(value: number) {
		this._fields.end_implicit = value
	}

	// The start/end of the document.
	public get start_mark(): yaml_mark_t {
		return this._fields.start_mark
	}

	public set start_mark(value: yaml_mark_t) {
		this._fields.start_mark = value
	}

	// The start/end of the document.
	public get end_mark(): yaml_mark_t {
		return this._fields.end_mark
	}

	public set end_mark(value: yaml_mark_t) {
		this._fields.end_mark = value
	}

	public _fields: {
		nodes: $.Slice<yaml_node_t>
		version_directive: yaml_version_directive_t | $.VarRef<yaml_version_directive_t> | null
		tag_directives_data: $.Slice<yaml_tag_directive_t>
		tag_directives_start: number
		tag_directives_end: number
		start_implicit: number
		end_implicit: number
		start_mark: yaml_mark_t
		end_mark: yaml_mark_t
	}

	constructor(init?: Partial<{nodes?: $.Slice<yaml_node_t>, version_directive?: yaml_version_directive_t | $.VarRef<yaml_version_directive_t> | null, tag_directives_data?: $.Slice<yaml_tag_directive_t>, tag_directives_start?: number, tag_directives_end?: number, start_implicit?: number, end_implicit?: number, start_mark?: yaml_mark_t, end_mark?: yaml_mark_t}>, __goscriptValue?: boolean) {
		this._fields = {
			nodes: init?.nodes ?? (null! as $.Slice<yaml_node_t>),
			version_directive: init?.version_directive ?? (null! as yaml_version_directive_t | $.VarRef<yaml_version_directive_t> | null),
			tag_directives_data: init?.tag_directives_data ?? (null! as $.Slice<yaml_tag_directive_t>),
			tag_directives_start: init?.tag_directives_start ?? (0 as number),
			tag_directives_end: init?.tag_directives_end ?? (0 as number),
			start_implicit: init?.start_implicit ?? (0 as number),
			end_implicit: init?.end_implicit ?? (0 as number),
			start_mark: init?.start_mark ? init.start_mark.clone() : new yaml_mark_t(undefined, true),
			end_mark: init?.end_mark ? init.end_mark.clone() : new yaml_mark_t(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): yaml_document_t {
		return new yaml_document_t(this, true)
	}

	public __goscriptAssign(source: yaml_document_t): void {
		const target = this._fields
		const values = source._fields
		target.nodes = values.nodes
		target.version_directive = values.version_directive
		target.tag_directives_data = values.tag_directives_data
		target.tag_directives_start = values.tag_directives_start
		target.tag_directives_end = values.tag_directives_end
		target.start_implicit = values.start_implicit
		target.end_implicit = values.end_implicit
		$.assignStruct(target.start_mark, values.start_mark)
		$.assignStruct(target.end_mark, values.end_mark)
	}

	static __typeInfo = $.registerStructType(
		"yaml.yaml_document_t",
		() => new yaml_document_t(),
		() => [],
		yaml_document_t,
		() => [/* @__PURE__ */ $.structField("nodes", /* @__PURE__ */ $.sliceType("yaml.yaml_node_t"), [0], 0, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("version_directive", /* @__PURE__ */ $.pointerType("yaml.yaml_version_directive_t"), [1], 24, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("tag_directives_data", /* @__PURE__ */ $.sliceType("yaml.yaml_tag_directive_t"), [2], 32, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("tag_directives_start", /* @__PURE__ */ $.basicType("int"), [3], 56, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("tag_directives_end", /* @__PURE__ */ $.basicType("int"), [4], 64, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("start_implicit", /* @__PURE__ */ $.basicType("int"), [5], 72, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("end_implicit", /* @__PURE__ */ $.basicType("int"), [6], 80, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("start_mark", "yaml.yaml_mark_t", [7], 88, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("end_mark", "yaml.yaml_mark_t", [8], 112, false, { pkgPath: "gopkg.in/yaml.v3" })]
	)
}

export class yaml_simple_key_t {
	public get possible(): boolean {
		return this._fields.possible
	}

	public set possible(value: boolean) {
		this._fields.possible = value
	}

	public get required(): boolean {
		return this._fields.required
	}

	public set required(value: boolean) {
		this._fields.required = value
	}

	public get token_number(): number {
		return this._fields.token_number
	}

	public set token_number(value: number) {
		this._fields.token_number = value
	}

	public get mark(): yaml_mark_t {
		return this._fields.mark
	}

	public set mark(value: yaml_mark_t) {
		this._fields.mark = value
	}

	public _fields: {
		possible: boolean
		required: boolean
		token_number: number
		mark: yaml_mark_t
	}

	constructor(init?: Partial<{possible?: boolean, required?: boolean, token_number?: number, mark?: yaml_mark_t}>, __goscriptValue?: boolean) {
		this._fields = {
			possible: init?.possible ?? (false as boolean),
			required: init?.required ?? (false as boolean),
			token_number: init?.token_number ?? (0 as number),
			mark: init?.mark ? init.mark.clone() : new yaml_mark_t(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): yaml_simple_key_t {
		return new yaml_simple_key_t(this, true)
	}

	public __goscriptAssign(source: yaml_simple_key_t): void {
		const target = this._fields
		const values = source._fields
		target.possible = values.possible
		target.required = values.required
		target.token_number = values.token_number
		$.assignStruct(target.mark, values.mark)
	}

	static __typeInfo = $.registerStructType(
		"yaml.yaml_simple_key_t",
		() => new yaml_simple_key_t(),
		() => [],
		yaml_simple_key_t,
		() => [/* @__PURE__ */ $.structField("possible", /* @__PURE__ */ $.basicType("bool"), [0], 0, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("required", /* @__PURE__ */ $.basicType("bool"), [1], 1, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("token_number", /* @__PURE__ */ $.basicType("int"), [2], 8, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("mark", "yaml.yaml_mark_t", [3], 16, false, { pkgPath: "gopkg.in/yaml.v3" })]
	)
}

export class yaml_alias_data_t {
	public get anchor(): $.Slice<number> {
		return this._fields.anchor
	}

	public set anchor(value: $.Slice<number>) {
		this._fields.anchor = value
	}

	public get index(): number {
		return this._fields.index
	}

	public set index(value: number) {
		this._fields.index = value
	}

	public get mark(): yaml_mark_t {
		return this._fields.mark
	}

	public set mark(value: yaml_mark_t) {
		this._fields.mark = value
	}

	public _fields: {
		anchor: $.Slice<number>
		index: number
		mark: yaml_mark_t
	}

	constructor(init?: Partial<{anchor?: $.Slice<number>, index?: number, mark?: yaml_mark_t}>, __goscriptValue?: boolean) {
		this._fields = {
			anchor: init?.anchor ?? (null! as $.Slice<number>),
			index: init?.index ?? (0 as number),
			mark: init?.mark ? init.mark.clone() : new yaml_mark_t(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): yaml_alias_data_t {
		return new yaml_alias_data_t(this, true)
	}

	public __goscriptAssign(source: yaml_alias_data_t): void {
		const target = this._fields
		const values = source._fields
		target.anchor = values.anchor
		target.index = values.index
		$.assignStruct(target.mark, values.mark)
	}

	static __typeInfo = $.registerStructType(
		"yaml.yaml_alias_data_t",
		() => new yaml_alias_data_t(),
		() => [],
		yaml_alias_data_t,
		() => [/* @__PURE__ */ $.structField("anchor", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [0], 0, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("index", /* @__PURE__ */ $.basicType("int"), [1], 24, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("mark", "yaml.yaml_mark_t", [2], 32, false, { pkgPath: "gopkg.in/yaml.v3" })]
	)
}

export class yaml_parser_t {
	public get error(): yaml_error_type_t {
		return this._fields.error
	}

	public set error(value: yaml_error_type_t) {
		this._fields.error = value
	}

	public get problem(): string {
		return this._fields.problem
	}

	public set problem(value: string) {
		this._fields.problem = value
	}

	// The byte about which the problem occurred.
	public get problem_offset(): number {
		return this._fields.problem_offset
	}

	public set problem_offset(value: number) {
		this._fields.problem_offset = value
	}

	public get problem_value(): number {
		return this._fields.problem_value
	}

	public set problem_value(value: number) {
		this._fields.problem_value = value
	}

	public get problem_mark(): yaml_mark_t {
		return this._fields.problem_mark
	}

	public set problem_mark(value: yaml_mark_t) {
		this._fields.problem_mark = value
	}

	// The error context.
	public get context(): string {
		return this._fields.context
	}

	public set context(value: string) {
		this._fields.context = value
	}

	public get context_mark(): yaml_mark_t {
		return this._fields.context_mark
	}

	public set context_mark(value: yaml_mark_t) {
		this._fields.context_mark = value
	}

	public get read_handler(): ((parser: yaml_parser_t | $.VarRef<yaml_parser_t> | null, buffer: $.Slice<number>) => [number, $.GoError] | globalThis.Promise<[number, $.GoError]>) | null {
		return this._fields.read_handler
	}

	public set read_handler(value: ((parser: yaml_parser_t | $.VarRef<yaml_parser_t> | null, buffer: $.Slice<number>) => [number, $.GoError] | globalThis.Promise<[number, $.GoError]>) | null) {
		this._fields.read_handler = value
	}

	public get input_reader(): io.Reader | null {
		return this._fields.input_reader
	}

	public set input_reader(value: io.Reader | null) {
		this._fields.input_reader = value
	}

	public get input(): $.Slice<number> {
		return this._fields.input
	}

	public set input(value: $.Slice<number>) {
		this._fields.input = value
	}

	public get input_pos(): number {
		return this._fields.input_pos
	}

	public set input_pos(value: number) {
		this._fields.input_pos = value
	}

	public get eof(): boolean {
		return this._fields.eof
	}

	public set eof(value: boolean) {
		this._fields.eof = value
	}

	public get buffer(): $.Slice<number> {
		return this._fields.buffer
	}

	public set buffer(value: $.Slice<number>) {
		this._fields.buffer = value
	}

	public get buffer_pos(): number {
		return this._fields.buffer_pos
	}

	public set buffer_pos(value: number) {
		this._fields.buffer_pos = value
	}

	public get unread(): number {
		return this._fields.unread
	}

	public set unread(value: number) {
		this._fields.unread = value
	}

	public get newlines(): number {
		return this._fields.newlines
	}

	public set newlines(value: number) {
		this._fields.newlines = value
	}

	public get raw_buffer(): $.Slice<number> {
		return this._fields.raw_buffer
	}

	public set raw_buffer(value: $.Slice<number>) {
		this._fields.raw_buffer = value
	}

	public get raw_buffer_pos(): number {
		return this._fields.raw_buffer_pos
	}

	public set raw_buffer_pos(value: number) {
		this._fields.raw_buffer_pos = value
	}

	public get encoding(): yaml_encoding_t {
		return this._fields.encoding
	}

	public set encoding(value: yaml_encoding_t) {
		this._fields.encoding = value
	}

	public get offset(): number {
		return this._fields.offset
	}

	public set offset(value: number) {
		this._fields.offset = value
	}

	public get mark(): yaml_mark_t {
		return this._fields.mark
	}

	public set mark(value: yaml_mark_t) {
		this._fields.mark = value
	}

	public get head_comment(): $.Slice<number> {
		return this._fields.head_comment
	}

	public set head_comment(value: $.Slice<number>) {
		this._fields.head_comment = value
	}

	public get line_comment(): $.Slice<number> {
		return this._fields.line_comment
	}

	public set line_comment(value: $.Slice<number>) {
		this._fields.line_comment = value
	}

	public get foot_comment(): $.Slice<number> {
		return this._fields.foot_comment
	}

	public set foot_comment(value: $.Slice<number>) {
		this._fields.foot_comment = value
	}

	public get tail_comment(): $.Slice<number> {
		return this._fields.tail_comment
	}

	public set tail_comment(value: $.Slice<number>) {
		this._fields.tail_comment = value
	}

	public get stem_comment(): $.Slice<number> {
		return this._fields.stem_comment
	}

	public set stem_comment(value: $.Slice<number>) {
		this._fields.stem_comment = value
	}

	public get comments(): $.Slice<yaml_comment_t> {
		return this._fields.comments
	}

	public set comments(value: $.Slice<yaml_comment_t>) {
		this._fields.comments = value
	}

	public get comments_head(): number {
		return this._fields.comments_head
	}

	public set comments_head(value: number) {
		this._fields.comments_head = value
	}

	public get stream_start_produced(): boolean {
		return this._fields.stream_start_produced
	}

	public set stream_start_produced(value: boolean) {
		this._fields.stream_start_produced = value
	}

	public get stream_end_produced(): boolean {
		return this._fields.stream_end_produced
	}

	public set stream_end_produced(value: boolean) {
		this._fields.stream_end_produced = value
	}

	public get flow_level(): number {
		return this._fields.flow_level
	}

	public set flow_level(value: number) {
		this._fields.flow_level = value
	}

	public get tokens(): $.Slice<yaml_token_t> {
		return this._fields.tokens
	}

	public set tokens(value: $.Slice<yaml_token_t>) {
		this._fields.tokens = value
	}

	public get tokens_head(): number {
		return this._fields.tokens_head
	}

	public set tokens_head(value: number) {
		this._fields.tokens_head = value
	}

	public get tokens_parsed(): number {
		return this._fields.tokens_parsed
	}

	public set tokens_parsed(value: number) {
		this._fields.tokens_parsed = value
	}

	public get token_available(): boolean {
		return this._fields.token_available
	}

	public set token_available(value: boolean) {
		this._fields.token_available = value
	}

	public get indent(): number {
		return this._fields.indent
	}

	public set indent(value: number) {
		this._fields.indent = value
	}

	public get indents(): $.Slice<number> {
		return this._fields.indents
	}

	public set indents(value: $.Slice<number>) {
		this._fields.indents = value
	}

	public get simple_key_allowed(): boolean {
		return this._fields.simple_key_allowed
	}

	public set simple_key_allowed(value: boolean) {
		this._fields.simple_key_allowed = value
	}

	public get simple_keys(): $.Slice<yaml_simple_key_t> {
		return this._fields.simple_keys
	}

	public set simple_keys(value: $.Slice<yaml_simple_key_t>) {
		this._fields.simple_keys = value
	}

	public get simple_keys_by_tok(): globalThis.Map<number, number> | null {
		return this._fields.simple_keys_by_tok
	}

	public set simple_keys_by_tok(value: globalThis.Map<number, number> | null) {
		this._fields.simple_keys_by_tok = value
	}

	public get state(): yaml_parser_state_t {
		return this._fields.state
	}

	public set state(value: yaml_parser_state_t) {
		this._fields.state = value
	}

	public get states(): $.Slice<yaml_parser_state_t> {
		return this._fields.states
	}

	public set states(value: $.Slice<yaml_parser_state_t>) {
		this._fields.states = value
	}

	public get marks(): $.Slice<yaml_mark_t> {
		return this._fields.marks
	}

	public set marks(value: $.Slice<yaml_mark_t>) {
		this._fields.marks = value
	}

	public get tag_directives(): $.Slice<yaml_tag_directive_t> {
		return this._fields.tag_directives
	}

	public set tag_directives(value: $.Slice<yaml_tag_directive_t>) {
		this._fields.tag_directives = value
	}

	public get aliases(): $.Slice<yaml_alias_data_t> {
		return this._fields.aliases
	}

	public set aliases(value: $.Slice<yaml_alias_data_t>) {
		this._fields.aliases = value
	}

	public get document(): yaml_document_t | $.VarRef<yaml_document_t> | null {
		return this._fields.document
	}

	public set document(value: yaml_document_t | $.VarRef<yaml_document_t> | null) {
		this._fields.document = value
	}

	public _fields: {
		error: yaml_error_type_t
		problem: string
		problem_offset: number
		problem_value: number
		problem_mark: yaml_mark_t
		context: string
		context_mark: yaml_mark_t
		read_handler: ((parser: yaml_parser_t | $.VarRef<yaml_parser_t> | null, buffer: $.Slice<number>) => [number, $.GoError] | globalThis.Promise<[number, $.GoError]>) | null
		input_reader: io.Reader | null
		input: $.Slice<number>
		input_pos: number
		eof: boolean
		buffer: $.Slice<number>
		buffer_pos: number
		unread: number
		newlines: number
		raw_buffer: $.Slice<number>
		raw_buffer_pos: number
		encoding: yaml_encoding_t
		offset: number
		mark: yaml_mark_t
		head_comment: $.Slice<number>
		line_comment: $.Slice<number>
		foot_comment: $.Slice<number>
		tail_comment: $.Slice<number>
		stem_comment: $.Slice<number>
		comments: $.Slice<yaml_comment_t>
		comments_head: number
		stream_start_produced: boolean
		stream_end_produced: boolean
		flow_level: number
		tokens: $.Slice<yaml_token_t>
		tokens_head: number
		tokens_parsed: number
		token_available: boolean
		indent: number
		indents: $.Slice<number>
		simple_key_allowed: boolean
		simple_keys: $.Slice<yaml_simple_key_t>
		simple_keys_by_tok: globalThis.Map<number, number> | null
		state: yaml_parser_state_t
		states: $.Slice<yaml_parser_state_t>
		marks: $.Slice<yaml_mark_t>
		tag_directives: $.Slice<yaml_tag_directive_t>
		aliases: $.Slice<yaml_alias_data_t>
		document: yaml_document_t | $.VarRef<yaml_document_t> | null
	}

	constructor(init?: Partial<{error?: yaml_error_type_t, problem?: string, problem_offset?: number, problem_value?: number, problem_mark?: yaml_mark_t, context?: string, context_mark?: yaml_mark_t, read_handler?: ((parser: yaml_parser_t | $.VarRef<yaml_parser_t> | null, buffer: $.Slice<number>) => [number, $.GoError] | globalThis.Promise<[number, $.GoError]>) | null, input_reader?: io.Reader | null, input?: $.Slice<number>, input_pos?: number, eof?: boolean, buffer?: $.Slice<number>, buffer_pos?: number, unread?: number, newlines?: number, raw_buffer?: $.Slice<number>, raw_buffer_pos?: number, encoding?: yaml_encoding_t, offset?: number, mark?: yaml_mark_t, head_comment?: $.Slice<number>, line_comment?: $.Slice<number>, foot_comment?: $.Slice<number>, tail_comment?: $.Slice<number>, stem_comment?: $.Slice<number>, comments?: $.Slice<yaml_comment_t>, comments_head?: number, stream_start_produced?: boolean, stream_end_produced?: boolean, flow_level?: number, tokens?: $.Slice<yaml_token_t>, tokens_head?: number, tokens_parsed?: number, token_available?: boolean, indent?: number, indents?: $.Slice<number>, simple_key_allowed?: boolean, simple_keys?: $.Slice<yaml_simple_key_t>, simple_keys_by_tok?: globalThis.Map<number, number> | null, state?: yaml_parser_state_t, states?: $.Slice<yaml_parser_state_t>, marks?: $.Slice<yaml_mark_t>, tag_directives?: $.Slice<yaml_tag_directive_t>, aliases?: $.Slice<yaml_alias_data_t>, document?: yaml_document_t | $.VarRef<yaml_document_t> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			error: init?.error ?? (0 as yaml_error_type_t),
			problem: init?.problem ?? ("" as string),
			problem_offset: init?.problem_offset ?? (0 as number),
			problem_value: init?.problem_value ?? (0 as number),
			problem_mark: init?.problem_mark ? init.problem_mark.clone() : new yaml_mark_t(undefined, true),
			context: init?.context ?? ("" as string),
			context_mark: init?.context_mark ? init.context_mark.clone() : new yaml_mark_t(undefined, true),
			read_handler: init?.read_handler ?? (null! as ((parser: yaml_parser_t | $.VarRef<yaml_parser_t> | null, buffer: $.Slice<number>) => [number, $.GoError] | globalThis.Promise<[number, $.GoError]>) | null),
			input_reader: init?.input_reader ?? (null! as io.Reader | null),
			input: init?.input ?? (null! as $.Slice<number>),
			input_pos: init?.input_pos ?? (0 as number),
			eof: init?.eof ?? (false as boolean),
			buffer: init?.buffer ?? (null! as $.Slice<number>),
			buffer_pos: init?.buffer_pos ?? (0 as number),
			unread: init?.unread ?? (0 as number),
			newlines: init?.newlines ?? (0 as number),
			raw_buffer: init?.raw_buffer ?? (null! as $.Slice<number>),
			raw_buffer_pos: init?.raw_buffer_pos ?? (0 as number),
			encoding: init?.encoding ?? (0 as yaml_encoding_t),
			offset: init?.offset ?? (0 as number),
			mark: init?.mark ? init.mark.clone() : new yaml_mark_t(undefined, true),
			head_comment: init?.head_comment ?? (null! as $.Slice<number>),
			line_comment: init?.line_comment ?? (null! as $.Slice<number>),
			foot_comment: init?.foot_comment ?? (null! as $.Slice<number>),
			tail_comment: init?.tail_comment ?? (null! as $.Slice<number>),
			stem_comment: init?.stem_comment ?? (null! as $.Slice<number>),
			comments: init?.comments ?? (null! as $.Slice<yaml_comment_t>),
			comments_head: init?.comments_head ?? (0 as number),
			stream_start_produced: init?.stream_start_produced ?? (false as boolean),
			stream_end_produced: init?.stream_end_produced ?? (false as boolean),
			flow_level: init?.flow_level ?? (0 as number),
			tokens: init?.tokens ?? (null! as $.Slice<yaml_token_t>),
			tokens_head: init?.tokens_head ?? (0 as number),
			tokens_parsed: init?.tokens_parsed ?? (0 as number),
			token_available: init?.token_available ?? (false as boolean),
			indent: init?.indent ?? (0 as number),
			indents: init?.indents ?? (null! as $.Slice<number>),
			simple_key_allowed: init?.simple_key_allowed ?? (false as boolean),
			simple_keys: init?.simple_keys ?? (null! as $.Slice<yaml_simple_key_t>),
			simple_keys_by_tok: init?.simple_keys_by_tok ?? (null! as globalThis.Map<number, number> | null),
			state: init?.state ?? (0 as yaml_parser_state_t),
			states: init?.states ?? (null! as $.Slice<yaml_parser_state_t>),
			marks: init?.marks ?? (null! as $.Slice<yaml_mark_t>),
			tag_directives: init?.tag_directives ?? (null! as $.Slice<yaml_tag_directive_t>),
			aliases: init?.aliases ?? (null! as $.Slice<yaml_alias_data_t>),
			document: init?.document ?? (null! as yaml_document_t | $.VarRef<yaml_document_t> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): yaml_parser_t {
		return new yaml_parser_t(this, true)
	}

	public __goscriptAssign(source: yaml_parser_t): void {
		const target = this._fields
		const values = source._fields
		target.error = values.error
		target.problem = values.problem
		target.problem_offset = values.problem_offset
		target.problem_value = values.problem_value
		$.assignStruct(target.problem_mark, values.problem_mark)
		target.context = values.context
		$.assignStruct(target.context_mark, values.context_mark)
		target.read_handler = values.read_handler
		target.input_reader = $.assignFieldValue(target.input_reader, values.input_reader, "io.Reader")
		target.input = values.input
		target.input_pos = values.input_pos
		target.eof = values.eof
		target.buffer = values.buffer
		target.buffer_pos = values.buffer_pos
		target.unread = values.unread
		target.newlines = values.newlines
		target.raw_buffer = values.raw_buffer
		target.raw_buffer_pos = values.raw_buffer_pos
		target.encoding = values.encoding
		target.offset = values.offset
		$.assignStruct(target.mark, values.mark)
		target.head_comment = values.head_comment
		target.line_comment = values.line_comment
		target.foot_comment = values.foot_comment
		target.tail_comment = values.tail_comment
		target.stem_comment = values.stem_comment
		target.comments = values.comments
		target.comments_head = values.comments_head
		target.stream_start_produced = values.stream_start_produced
		target.stream_end_produced = values.stream_end_produced
		target.flow_level = values.flow_level
		target.tokens = values.tokens
		target.tokens_head = values.tokens_head
		target.tokens_parsed = values.tokens_parsed
		target.token_available = values.token_available
		target.indent = values.indent
		target.indents = values.indents
		target.simple_key_allowed = values.simple_key_allowed
		target.simple_keys = values.simple_keys
		target.simple_keys_by_tok = values.simple_keys_by_tok
		target.state = values.state
		target.states = values.states
		target.marks = values.marks
		target.tag_directives = values.tag_directives
		target.aliases = values.aliases
		target.document = values.document
	}

	static __typeInfo = $.registerStructType(
		"yaml.yaml_parser_t",
		() => new yaml_parser_t(),
		() => [],
		yaml_parser_t,
		() => [/* @__PURE__ */ $.structField("error", /* @__PURE__ */ $.basicType("int", "yaml.yaml_error_type_t"), [0], 0, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("problem", /* @__PURE__ */ $.basicType("string"), [1], 8, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("problem_offset", /* @__PURE__ */ $.basicType("int"), [2], 24, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("problem_value", /* @__PURE__ */ $.basicType("int"), [3], 32, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("problem_mark", "yaml.yaml_mark_t", [4], 40, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("context", /* @__PURE__ */ $.basicType("string"), [5], 64, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("context_mark", "yaml.yaml_mark_t", [6], 80, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("read_handler", ({ kind: $.TypeKind.Function, name: "yaml.yaml_read_handler_t", params: [/* @__PURE__ */ $.pointerType("yaml.yaml_parser_t"), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], results: [/* @__PURE__ */ $.basicType("int"), "error"] } as $.FunctionTypeInfo), [7], 104, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("input_reader", "io.Reader", [8], 112, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("input", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [9], 128, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("input_pos", /* @__PURE__ */ $.basicType("int"), [10], 152, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("eof", /* @__PURE__ */ $.basicType("bool"), [11], 160, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("buffer", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [12], 168, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("buffer_pos", /* @__PURE__ */ $.basicType("int"), [13], 192, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("unread", /* @__PURE__ */ $.basicType("int"), [14], 200, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("newlines", /* @__PURE__ */ $.basicType("int"), [15], 208, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("raw_buffer", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [16], 216, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("raw_buffer_pos", /* @__PURE__ */ $.basicType("int"), [17], 240, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("encoding", /* @__PURE__ */ $.basicType("int", "yaml.yaml_encoding_t"), [18], 248, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("offset", /* @__PURE__ */ $.basicType("int"), [19], 256, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("mark", "yaml.yaml_mark_t", [20], 264, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("head_comment", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [21], 288, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("line_comment", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [22], 312, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("foot_comment", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [23], 336, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("tail_comment", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [24], 360, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("stem_comment", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [25], 384, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("comments", /* @__PURE__ */ $.sliceType("yaml.yaml_comment_t"), [26], 408, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("comments_head", /* @__PURE__ */ $.basicType("int"), [27], 432, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("stream_start_produced", /* @__PURE__ */ $.basicType("bool"), [28], 440, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("stream_end_produced", /* @__PURE__ */ $.basicType("bool"), [29], 441, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("flow_level", /* @__PURE__ */ $.basicType("int"), [30], 448, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("tokens", /* @__PURE__ */ $.sliceType("yaml.yaml_token_t"), [31], 456, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("tokens_head", /* @__PURE__ */ $.basicType("int"), [32], 480, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("tokens_parsed", /* @__PURE__ */ $.basicType("int"), [33], 488, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("token_available", /* @__PURE__ */ $.basicType("bool"), [34], 496, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("indent", /* @__PURE__ */ $.basicType("int"), [35], 504, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("indents", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")), [36], 512, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("simple_key_allowed", /* @__PURE__ */ $.basicType("bool"), [37], 536, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("simple_keys", /* @__PURE__ */ $.sliceType("yaml.yaml_simple_key_t"), [38], 544, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("simple_keys_by_tok", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("int")), [39], 568, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("state", /* @__PURE__ */ $.basicType("int", "yaml.yaml_parser_state_t"), [40], 576, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("states", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int", "yaml.yaml_parser_state_t")), [41], 584, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("marks", /* @__PURE__ */ $.sliceType("yaml.yaml_mark_t"), [42], 608, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("tag_directives", /* @__PURE__ */ $.sliceType("yaml.yaml_tag_directive_t"), [43], 632, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("aliases", /* @__PURE__ */ $.sliceType("yaml.yaml_alias_data_t"), [44], 656, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("document", /* @__PURE__ */ $.pointerType("yaml.yaml_document_t"), [45], 680, false, { pkgPath: "gopkg.in/yaml.v3" })]
	)
}

export class yaml_comment_t {
	public get scan_mark(): yaml_mark_t {
		return this._fields.scan_mark
	}

	public set scan_mark(value: yaml_mark_t) {
		this._fields.scan_mark = value
	}

	public get token_mark(): yaml_mark_t {
		return this._fields.token_mark
	}

	public set token_mark(value: yaml_mark_t) {
		this._fields.token_mark = value
	}

	public get start_mark(): yaml_mark_t {
		return this._fields.start_mark
	}

	public set start_mark(value: yaml_mark_t) {
		this._fields.start_mark = value
	}

	public get end_mark(): yaml_mark_t {
		return this._fields.end_mark
	}

	public set end_mark(value: yaml_mark_t) {
		this._fields.end_mark = value
	}

	public get head(): $.Slice<number> {
		return this._fields.head
	}

	public set head(value: $.Slice<number>) {
		this._fields.head = value
	}

	public get line(): $.Slice<number> {
		return this._fields.line
	}

	public set line(value: $.Slice<number>) {
		this._fields.line = value
	}

	public get foot(): $.Slice<number> {
		return this._fields.foot
	}

	public set foot(value: $.Slice<number>) {
		this._fields.foot = value
	}

	public _fields: {
		scan_mark: yaml_mark_t
		token_mark: yaml_mark_t
		start_mark: yaml_mark_t
		end_mark: yaml_mark_t
		head: $.Slice<number>
		line: $.Slice<number>
		foot: $.Slice<number>
	}

	constructor(init?: Partial<{scan_mark?: yaml_mark_t, token_mark?: yaml_mark_t, start_mark?: yaml_mark_t, end_mark?: yaml_mark_t, head?: $.Slice<number>, line?: $.Slice<number>, foot?: $.Slice<number>}>, __goscriptValue?: boolean) {
		this._fields = {
			scan_mark: init?.scan_mark ? init.scan_mark.clone() : new yaml_mark_t(undefined, true),
			token_mark: init?.token_mark ? init.token_mark.clone() : new yaml_mark_t(undefined, true),
			start_mark: init?.start_mark ? init.start_mark.clone() : new yaml_mark_t(undefined, true),
			end_mark: init?.end_mark ? init.end_mark.clone() : new yaml_mark_t(undefined, true),
			head: init?.head ?? (null! as $.Slice<number>),
			line: init?.line ?? (null! as $.Slice<number>),
			foot: init?.foot ?? (null! as $.Slice<number>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): yaml_comment_t {
		return new yaml_comment_t(this, true)
	}

	public __goscriptAssign(source: yaml_comment_t): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.scan_mark, values.scan_mark)
		$.assignStruct(target.token_mark, values.token_mark)
		$.assignStruct(target.start_mark, values.start_mark)
		$.assignStruct(target.end_mark, values.end_mark)
		target.head = values.head
		target.line = values.line
		target.foot = values.foot
	}

	static __typeInfo = $.registerStructType(
		"yaml.yaml_comment_t",
		() => new yaml_comment_t(),
		() => [],
		yaml_comment_t,
		() => [/* @__PURE__ */ $.structField("scan_mark", "yaml.yaml_mark_t", [0], 0, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("token_mark", "yaml.yaml_mark_t", [1], 24, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("start_mark", "yaml.yaml_mark_t", [2], 48, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("end_mark", "yaml.yaml_mark_t", [3], 72, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("head", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [4], 96, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("line", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [5], 120, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("foot", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [6], 144, false, { pkgPath: "gopkg.in/yaml.v3" })]
	)
}

export class yaml_emitter_t {
	public get error(): yaml_error_type_t {
		return this._fields.error
	}

	public set error(value: yaml_error_type_t) {
		this._fields.error = value
	}

	public get problem(): string {
		return this._fields.problem
	}

	public set problem(value: string) {
		this._fields.problem = value
	}

	public get write_handler(): ((emitter: yaml_emitter_t | $.VarRef<yaml_emitter_t> | null, buffer: $.Slice<number>) => $.GoError | globalThis.Promise<$.GoError>) | null {
		return this._fields.write_handler
	}

	public set write_handler(value: ((emitter: yaml_emitter_t | $.VarRef<yaml_emitter_t> | null, buffer: $.Slice<number>) => $.GoError | globalThis.Promise<$.GoError>) | null) {
		this._fields.write_handler = value
	}

	public get output_buffer(): $.VarRef<$.Slice<number>> | null {
		return this._fields.output_buffer
	}

	public set output_buffer(value: $.VarRef<$.Slice<number>> | null) {
		this._fields.output_buffer = value
	}

	public get output_writer(): io.Writer | null {
		return this._fields.output_writer
	}

	public set output_writer(value: io.Writer | null) {
		this._fields.output_writer = value
	}

	public get buffer(): $.Slice<number> {
		return this._fields.buffer
	}

	public set buffer(value: $.Slice<number>) {
		this._fields.buffer = value
	}

	public get buffer_pos(): number {
		return this._fields.buffer_pos
	}

	public set buffer_pos(value: number) {
		this._fields.buffer_pos = value
	}

	public get raw_buffer(): $.Slice<number> {
		return this._fields.raw_buffer
	}

	public set raw_buffer(value: $.Slice<number>) {
		this._fields.raw_buffer = value
	}

	public get raw_buffer_pos(): number {
		return this._fields.raw_buffer_pos
	}

	public set raw_buffer_pos(value: number) {
		this._fields.raw_buffer_pos = value
	}

	public get encoding(): yaml_encoding_t {
		return this._fields.encoding
	}

	public set encoding(value: yaml_encoding_t) {
		this._fields.encoding = value
	}

	public get canonical(): boolean {
		return this._fields.canonical
	}

	public set canonical(value: boolean) {
		this._fields.canonical = value
	}

	public get best_indent(): number {
		return this._fields.best_indent
	}

	public set best_indent(value: number) {
		this._fields.best_indent = value
	}

	public get best_width(): number {
		return this._fields.best_width
	}

	public set best_width(value: number) {
		this._fields.best_width = value
	}

	public get unicode(): boolean {
		return this._fields.unicode
	}

	public set unicode(value: boolean) {
		this._fields.unicode = value
	}

	public get line_break(): yaml_break_t {
		return this._fields.line_break
	}

	public set line_break(value: yaml_break_t) {
		this._fields.line_break = value
	}

	public get state(): yaml_emitter_state_t {
		return this._fields.state
	}

	public set state(value: yaml_emitter_state_t) {
		this._fields.state = value
	}

	public get states(): $.Slice<yaml_emitter_state_t> {
		return this._fields.states
	}

	public set states(value: $.Slice<yaml_emitter_state_t>) {
		this._fields.states = value
	}

	public get events(): $.Slice<yaml_event_t> {
		return this._fields.events
	}

	public set events(value: $.Slice<yaml_event_t>) {
		this._fields.events = value
	}

	public get events_head(): number {
		return this._fields.events_head
	}

	public set events_head(value: number) {
		this._fields.events_head = value
	}

	public get indents(): $.Slice<number> {
		return this._fields.indents
	}

	public set indents(value: $.Slice<number>) {
		this._fields.indents = value
	}

	public get tag_directives(): $.Slice<yaml_tag_directive_t> {
		return this._fields.tag_directives
	}

	public set tag_directives(value: $.Slice<yaml_tag_directive_t>) {
		this._fields.tag_directives = value
	}

	public get indent(): number {
		return this._fields.indent
	}

	public set indent(value: number) {
		this._fields.indent = value
	}

	public get flow_level(): number {
		return this._fields.flow_level
	}

	public set flow_level(value: number) {
		this._fields.flow_level = value
	}

	public get root_context(): boolean {
		return this._fields.root_context
	}

	public set root_context(value: boolean) {
		this._fields.root_context = value
	}

	public get sequence_context(): boolean {
		return this._fields.sequence_context
	}

	public set sequence_context(value: boolean) {
		this._fields.sequence_context = value
	}

	public get mapping_context(): boolean {
		return this._fields.mapping_context
	}

	public set mapping_context(value: boolean) {
		this._fields.mapping_context = value
	}

	public get simple_key_context(): boolean {
		return this._fields.simple_key_context
	}

	public set simple_key_context(value: boolean) {
		this._fields.simple_key_context = value
	}

	public get line(): number {
		return this._fields.line
	}

	public set line(value: number) {
		this._fields.line = value
	}

	public get column(): number {
		return this._fields.column
	}

	public set column(value: number) {
		this._fields.column = value
	}

	public get whitespace(): boolean {
		return this._fields.whitespace
	}

	public set whitespace(value: boolean) {
		this._fields.whitespace = value
	}

	public get indention(): boolean {
		return this._fields.indention
	}

	public set indention(value: boolean) {
		this._fields.indention = value
	}

	public get open_ended(): boolean {
		return this._fields.open_ended
	}

	public set open_ended(value: boolean) {
		this._fields.open_ended = value
	}

	public get space_above(): boolean {
		return this._fields.space_above
	}

	public set space_above(value: boolean) {
		this._fields.space_above = value
	}

	public get foot_indent(): number {
		return this._fields.foot_indent
	}

	public set foot_indent(value: number) {
		this._fields.foot_indent = value
	}

	// Anchor analysis.
	public get anchor_data(): {"anchor": $.Slice<number>, "alias": boolean} {
		return this._fields.anchor_data
	}

	public set anchor_data(value: {"anchor": $.Slice<number>, "alias": boolean}) {
		this._fields.anchor_data = value
	}

	// Tag analysis.
	public get tag_data(): {"handle": $.Slice<number>, "suffix": $.Slice<number>} {
		return this._fields.tag_data
	}

	public set tag_data(value: {"handle": $.Slice<number>, "suffix": $.Slice<number>}) {
		this._fields.tag_data = value
	}

	// Scalar analysis.
	public get scalar_data(): {"value": $.Slice<number>, "multiline": boolean, "flow_plain_allowed": boolean, "block_plain_allowed": boolean, "single_quoted_allowed": boolean, "block_allowed": boolean, "style": yaml_scalar_style_t} {
		return this._fields.scalar_data
	}

	public set scalar_data(value: {"value": $.Slice<number>, "multiline": boolean, "flow_plain_allowed": boolean, "block_plain_allowed": boolean, "single_quoted_allowed": boolean, "block_allowed": boolean, "style": yaml_scalar_style_t}) {
		this._fields.scalar_data = value
	}

	// Comments
	public get head_comment(): $.Slice<number> {
		return this._fields.head_comment
	}

	public set head_comment(value: $.Slice<number>) {
		this._fields.head_comment = value
	}

	public get line_comment(): $.Slice<number> {
		return this._fields.line_comment
	}

	public set line_comment(value: $.Slice<number>) {
		this._fields.line_comment = value
	}

	public get foot_comment(): $.Slice<number> {
		return this._fields.foot_comment
	}

	public set foot_comment(value: $.Slice<number>) {
		this._fields.foot_comment = value
	}

	public get tail_comment(): $.Slice<number> {
		return this._fields.tail_comment
	}

	public set tail_comment(value: $.Slice<number>) {
		this._fields.tail_comment = value
	}

	public get key_line_comment(): $.Slice<number> {
		return this._fields.key_line_comment
	}

	public set key_line_comment(value: $.Slice<number>) {
		this._fields.key_line_comment = value
	}

	public get opened(): boolean {
		return this._fields.opened
	}

	public set opened(value: boolean) {
		this._fields.opened = value
	}

	public get closed(): boolean {
		return this._fields.closed
	}

	public set closed(value: boolean) {
		this._fields.closed = value
	}

	// The information associated with the document nodes.
	public get anchors(): $.VarRef<{"references": number, "anchor": number, "serialized": boolean}> | null {
		return this._fields.anchors
	}

	public set anchors(value: $.VarRef<{"references": number, "anchor": number, "serialized": boolean}> | null) {
		this._fields.anchors = value
	}

	public get last_anchor_id(): number {
		return this._fields.last_anchor_id
	}

	public set last_anchor_id(value: number) {
		this._fields.last_anchor_id = value
	}

	public get document(): yaml_document_t | $.VarRef<yaml_document_t> | null {
		return this._fields.document
	}

	public set document(value: yaml_document_t | $.VarRef<yaml_document_t> | null) {
		this._fields.document = value
	}

	public _fields: {
		error: yaml_error_type_t
		problem: string
		write_handler: ((emitter: yaml_emitter_t | $.VarRef<yaml_emitter_t> | null, buffer: $.Slice<number>) => $.GoError | globalThis.Promise<$.GoError>) | null
		output_buffer: $.VarRef<$.Slice<number>> | null
		output_writer: io.Writer | null
		buffer: $.Slice<number>
		buffer_pos: number
		raw_buffer: $.Slice<number>
		raw_buffer_pos: number
		encoding: yaml_encoding_t
		canonical: boolean
		best_indent: number
		best_width: number
		unicode: boolean
		line_break: yaml_break_t
		state: yaml_emitter_state_t
		states: $.Slice<yaml_emitter_state_t>
		events: $.Slice<yaml_event_t>
		events_head: number
		indents: $.Slice<number>
		tag_directives: $.Slice<yaml_tag_directive_t>
		indent: number
		flow_level: number
		root_context: boolean
		sequence_context: boolean
		mapping_context: boolean
		simple_key_context: boolean
		line: number
		column: number
		whitespace: boolean
		indention: boolean
		open_ended: boolean
		space_above: boolean
		foot_indent: number
		anchor_data: {"anchor": $.Slice<number>, "alias": boolean}
		tag_data: {"handle": $.Slice<number>, "suffix": $.Slice<number>}
		scalar_data: {"value": $.Slice<number>, "multiline": boolean, "flow_plain_allowed": boolean, "block_plain_allowed": boolean, "single_quoted_allowed": boolean, "block_allowed": boolean, "style": yaml_scalar_style_t}
		head_comment: $.Slice<number>
		line_comment: $.Slice<number>
		foot_comment: $.Slice<number>
		tail_comment: $.Slice<number>
		key_line_comment: $.Slice<number>
		opened: boolean
		closed: boolean
		anchors: $.VarRef<{"references": number, "anchor": number, "serialized": boolean}> | null
		last_anchor_id: number
		document: yaml_document_t | $.VarRef<yaml_document_t> | null
	}

	constructor(init?: Partial<{error?: yaml_error_type_t, problem?: string, write_handler?: ((emitter: yaml_emitter_t | $.VarRef<yaml_emitter_t> | null, buffer: $.Slice<number>) => $.GoError | globalThis.Promise<$.GoError>) | null, output_buffer?: $.VarRef<$.Slice<number>> | null, output_writer?: io.Writer | null, buffer?: $.Slice<number>, buffer_pos?: number, raw_buffer?: $.Slice<number>, raw_buffer_pos?: number, encoding?: yaml_encoding_t, canonical?: boolean, best_indent?: number, best_width?: number, unicode?: boolean, line_break?: yaml_break_t, state?: yaml_emitter_state_t, states?: $.Slice<yaml_emitter_state_t>, events?: $.Slice<yaml_event_t>, events_head?: number, indents?: $.Slice<number>, tag_directives?: $.Slice<yaml_tag_directive_t>, indent?: number, flow_level?: number, root_context?: boolean, sequence_context?: boolean, mapping_context?: boolean, simple_key_context?: boolean, line?: number, column?: number, whitespace?: boolean, indention?: boolean, open_ended?: boolean, space_above?: boolean, foot_indent?: number, anchor_data?: {"anchor": $.Slice<number>, "alias": boolean}, tag_data?: {"handle": $.Slice<number>, "suffix": $.Slice<number>}, scalar_data?: {"value": $.Slice<number>, "multiline": boolean, "flow_plain_allowed": boolean, "block_plain_allowed": boolean, "single_quoted_allowed": boolean, "block_allowed": boolean, "style": yaml_scalar_style_t}, head_comment?: $.Slice<number>, line_comment?: $.Slice<number>, foot_comment?: $.Slice<number>, tail_comment?: $.Slice<number>, key_line_comment?: $.Slice<number>, opened?: boolean, closed?: boolean, anchors?: $.VarRef<{"references": number, "anchor": number, "serialized": boolean}> | null, last_anchor_id?: number, document?: yaml_document_t | $.VarRef<yaml_document_t> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			error: init?.error ?? (0 as yaml_error_type_t),
			problem: init?.problem ?? ("" as string),
			write_handler: init?.write_handler ?? (null! as ((emitter: yaml_emitter_t | $.VarRef<yaml_emitter_t> | null, buffer: $.Slice<number>) => $.GoError | globalThis.Promise<$.GoError>) | null),
			output_buffer: init?.output_buffer ?? (null! as $.VarRef<$.Slice<number>> | null),
			output_writer: init?.output_writer ?? (null! as io.Writer | null),
			buffer: init?.buffer ?? (null! as $.Slice<number>),
			buffer_pos: init?.buffer_pos ?? (0 as number),
			raw_buffer: init?.raw_buffer ?? (null! as $.Slice<number>),
			raw_buffer_pos: init?.raw_buffer_pos ?? (0 as number),
			encoding: init?.encoding ?? (0 as yaml_encoding_t),
			canonical: init?.canonical ?? (false as boolean),
			best_indent: init?.best_indent ?? (0 as number),
			best_width: init?.best_width ?? (0 as number),
			unicode: init?.unicode ?? (false as boolean),
			line_break: init?.line_break ?? (0 as yaml_break_t),
			state: init?.state ?? (0 as yaml_emitter_state_t),
			states: init?.states ?? (null! as $.Slice<yaml_emitter_state_t>),
			events: init?.events ?? (null! as $.Slice<yaml_event_t>),
			events_head: init?.events_head ?? (0 as number),
			indents: init?.indents ?? (null! as $.Slice<number>),
			tag_directives: init?.tag_directives ?? (null! as $.Slice<yaml_tag_directive_t>),
			indent: init?.indent ?? (0 as number),
			flow_level: init?.flow_level ?? (0 as number),
			root_context: init?.root_context ?? (false as boolean),
			sequence_context: init?.sequence_context ?? (false as boolean),
			mapping_context: init?.mapping_context ?? (false as boolean),
			simple_key_context: init?.simple_key_context ?? (false as boolean),
			line: init?.line ?? (0 as number),
			column: init?.column ?? (0 as number),
			whitespace: init?.whitespace ?? (false as boolean),
			indention: init?.indention ?? (false as boolean),
			open_ended: init?.open_ended ?? (false as boolean),
			space_above: init?.space_above ?? (false as boolean),
			foot_indent: init?.foot_indent ?? (0 as number),
			anchor_data: init?.anchor_data ? $.markAsStructValue($.cloneStructValue(init.anchor_data)) : $.anonymousStructValue({"anchor": null, "alias": false}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("anchor", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [0], 0, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("alias", /* @__PURE__ */ $.basicType("bool"), [1], 24, false, { pkgPath: "gopkg.in/yaml.v3" })] }),
			tag_data: init?.tag_data ? $.markAsStructValue($.cloneStructValue(init.tag_data)) : $.anonymousStructValue({"handle": null, "suffix": null}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("handle", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [0], 0, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("suffix", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [1], 24, false, { pkgPath: "gopkg.in/yaml.v3" })] }),
			scalar_data: init?.scalar_data ? $.markAsStructValue($.cloneStructValue(init.scalar_data)) : $.anonymousStructValue({"value": null, "multiline": false, "flow_plain_allowed": false, "block_plain_allowed": false, "single_quoted_allowed": false, "block_allowed": false, "style": 0}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("value", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [0], 0, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("multiline", /* @__PURE__ */ $.basicType("bool"), [1], 24, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("flow_plain_allowed", /* @__PURE__ */ $.basicType("bool"), [2], 25, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("block_plain_allowed", /* @__PURE__ */ $.basicType("bool"), [3], 26, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("single_quoted_allowed", /* @__PURE__ */ $.basicType("bool"), [4], 27, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("block_allowed", /* @__PURE__ */ $.basicType("bool"), [5], 28, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("style", /* @__PURE__ */ $.basicType("int8", "yaml.yaml_scalar_style_t"), [6], 29, false, { pkgPath: "gopkg.in/yaml.v3" })] }),
			head_comment: init?.head_comment ?? (null! as $.Slice<number>),
			line_comment: init?.line_comment ?? (null! as $.Slice<number>),
			foot_comment: init?.foot_comment ?? (null! as $.Slice<number>),
			tail_comment: init?.tail_comment ?? (null! as $.Slice<number>),
			key_line_comment: init?.key_line_comment ?? (null! as $.Slice<number>),
			opened: init?.opened ?? (false as boolean),
			closed: init?.closed ?? (false as boolean),
			anchors: init?.anchors ?? (null! as $.VarRef<{"references": number, "anchor": number, "serialized": boolean}> | null),
			last_anchor_id: init?.last_anchor_id ?? (0 as number),
			document: init?.document ?? (null! as yaml_document_t | $.VarRef<yaml_document_t> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): yaml_emitter_t {
		return new yaml_emitter_t(this, true)
	}

	public __goscriptAssign(source: yaml_emitter_t): void {
		const target = this._fields
		const values = source._fields
		target.error = values.error
		target.problem = values.problem
		target.write_handler = values.write_handler
		target.output_buffer = values.output_buffer
		target.output_writer = $.assignFieldValue(target.output_writer, values.output_writer, "io.Writer")
		target.buffer = values.buffer
		target.buffer_pos = values.buffer_pos
		target.raw_buffer = values.raw_buffer
		target.raw_buffer_pos = values.raw_buffer_pos
		target.encoding = values.encoding
		target.canonical = values.canonical
		target.best_indent = values.best_indent
		target.best_width = values.best_width
		target.unicode = values.unicode
		target.line_break = values.line_break
		target.state = values.state
		target.states = values.states
		target.events = values.events
		target.events_head = values.events_head
		target.indents = values.indents
		target.tag_directives = values.tag_directives
		target.indent = values.indent
		target.flow_level = values.flow_level
		target.root_context = values.root_context
		target.sequence_context = values.sequence_context
		target.mapping_context = values.mapping_context
		target.simple_key_context = values.simple_key_context
		target.line = values.line
		target.column = values.column
		target.whitespace = values.whitespace
		target.indention = values.indention
		target.open_ended = values.open_ended
		target.space_above = values.space_above
		target.foot_indent = values.foot_indent
		$.assignStruct(target.anchor_data, values.anchor_data)
		$.assignStruct(target.tag_data, values.tag_data)
		$.assignStruct(target.scalar_data, values.scalar_data)
		target.head_comment = values.head_comment
		target.line_comment = values.line_comment
		target.foot_comment = values.foot_comment
		target.tail_comment = values.tail_comment
		target.key_line_comment = values.key_line_comment
		target.opened = values.opened
		target.closed = values.closed
		target.anchors = values.anchors
		target.last_anchor_id = values.last_anchor_id
		target.document = values.document
	}

	static __typeInfo = $.registerStructType(
		"yaml.yaml_emitter_t",
		() => new yaml_emitter_t(),
		() => [],
		yaml_emitter_t,
		() => [/* @__PURE__ */ $.structField("error", /* @__PURE__ */ $.basicType("int", "yaml.yaml_error_type_t"), [0], 0, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("problem", /* @__PURE__ */ $.basicType("string"), [1], 8, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("write_handler", ({ kind: $.TypeKind.Function, name: "yaml.yaml_write_handler_t", params: [/* @__PURE__ */ $.pointerType("yaml.yaml_emitter_t"), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], results: ["error"] } as $.FunctionTypeInfo), [2], 24, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("output_buffer", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))), [3], 32, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("output_writer", "io.Writer", [4], 40, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("buffer", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [5], 56, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("buffer_pos", /* @__PURE__ */ $.basicType("int"), [6], 80, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("raw_buffer", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [7], 88, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("raw_buffer_pos", /* @__PURE__ */ $.basicType("int"), [8], 112, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("encoding", /* @__PURE__ */ $.basicType("int", "yaml.yaml_encoding_t"), [9], 120, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("canonical", /* @__PURE__ */ $.basicType("bool"), [10], 128, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("best_indent", /* @__PURE__ */ $.basicType("int"), [11], 136, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("best_width", /* @__PURE__ */ $.basicType("int"), [12], 144, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("unicode", /* @__PURE__ */ $.basicType("bool"), [13], 152, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("line_break", /* @__PURE__ */ $.basicType("int", "yaml.yaml_break_t"), [14], 160, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("state", /* @__PURE__ */ $.basicType("int", "yaml.yaml_emitter_state_t"), [15], 168, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("states", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int", "yaml.yaml_emitter_state_t")), [16], 176, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("events", /* @__PURE__ */ $.sliceType("yaml.yaml_event_t"), [17], 200, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("events_head", /* @__PURE__ */ $.basicType("int"), [18], 224, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("indents", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")), [19], 232, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("tag_directives", /* @__PURE__ */ $.sliceType("yaml.yaml_tag_directive_t"), [20], 256, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("indent", /* @__PURE__ */ $.basicType("int"), [21], 280, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("flow_level", /* @__PURE__ */ $.basicType("int"), [22], 288, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("root_context", /* @__PURE__ */ $.basicType("bool"), [23], 296, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("sequence_context", /* @__PURE__ */ $.basicType("bool"), [24], 297, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("mapping_context", /* @__PURE__ */ $.basicType("bool"), [25], 298, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("simple_key_context", /* @__PURE__ */ $.basicType("bool"), [26], 299, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("line", /* @__PURE__ */ $.basicType("int"), [27], 304, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("column", /* @__PURE__ */ $.basicType("int"), [28], 312, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("whitespace", /* @__PURE__ */ $.basicType("bool"), [29], 320, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("indention", /* @__PURE__ */ $.basicType("bool"), [30], 321, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("open_ended", /* @__PURE__ */ $.basicType("bool"), [31], 322, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("space_above", /* @__PURE__ */ $.basicType("bool"), [32], 323, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("foot_indent", /* @__PURE__ */ $.basicType("int"), [33], 328, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("anchor_data", { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("anchor", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [0], 0, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("alias", /* @__PURE__ */ $.basicType("bool"), [1], 24, false, { pkgPath: "gopkg.in/yaml.v3" })] }, [34], 336, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("tag_data", { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("handle", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [0], 0, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("suffix", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [1], 24, false, { pkgPath: "gopkg.in/yaml.v3" })] }, [35], 368, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("scalar_data", { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("value", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [0], 0, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("multiline", /* @__PURE__ */ $.basicType("bool"), [1], 24, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("flow_plain_allowed", /* @__PURE__ */ $.basicType("bool"), [2], 25, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("block_plain_allowed", /* @__PURE__ */ $.basicType("bool"), [3], 26, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("single_quoted_allowed", /* @__PURE__ */ $.basicType("bool"), [4], 27, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("block_allowed", /* @__PURE__ */ $.basicType("bool"), [5], 28, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("style", /* @__PURE__ */ $.basicType("int8", "yaml.yaml_scalar_style_t"), [6], 29, false, { pkgPath: "gopkg.in/yaml.v3" })] }, [36], 416, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("head_comment", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [37], 448, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("line_comment", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [38], 472, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("foot_comment", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [39], 496, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("tail_comment", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [40], 520, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("key_line_comment", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [41], 544, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("opened", /* @__PURE__ */ $.basicType("bool"), [42], 568, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("closed", /* @__PURE__ */ $.basicType("bool"), [43], 569, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("anchors", /* @__PURE__ */ $.pointerType({ kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("references", /* @__PURE__ */ $.basicType("int"), [0], 0, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("anchor", /* @__PURE__ */ $.basicType("int"), [1], 8, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("serialized", /* @__PURE__ */ $.basicType("bool"), [2], 16, false, { pkgPath: "gopkg.in/yaml.v3" })] }), [44], 576, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("last_anchor_id", /* @__PURE__ */ $.basicType("int"), [45], 584, false, { pkgPath: "gopkg.in/yaml.v3" }), /* @__PURE__ */ $.structField("document", /* @__PURE__ */ $.pointerType("yaml.yaml_document_t"), [46], 592, false, { pkgPath: "gopkg.in/yaml.v3" })]
	)
}

export const yaml_ANY_ENCODING: yaml_encoding_t = 0

export const yaml_UTF8_ENCODING: yaml_encoding_t = 1

export const yaml_UTF16LE_ENCODING: yaml_encoding_t = 2

export const yaml_UTF16BE_ENCODING: yaml_encoding_t = 3

export const yaml_ANY_BREAK: yaml_break_t = 0

export const yaml_CR_BREAK: yaml_break_t = 1

export const yaml_LN_BREAK: yaml_break_t = 2

export const yaml_CRLN_BREAK: yaml_break_t = 3

export const yaml_NO_ERROR: yaml_error_type_t = 0

export const yaml_MEMORY_ERROR: yaml_error_type_t = 1

export const yaml_READER_ERROR: yaml_error_type_t = 2

export const yaml_SCANNER_ERROR: yaml_error_type_t = 3

export const yaml_PARSER_ERROR: yaml_error_type_t = 4

export const yaml_COMPOSER_ERROR: yaml_error_type_t = 5

export const yaml_WRITER_ERROR: yaml_error_type_t = 6

export const yaml_EMITTER_ERROR: yaml_error_type_t = 7

export const yaml_ANY_SCALAR_STYLE: yaml_scalar_style_t = 0

export const yaml_PLAIN_SCALAR_STYLE: yaml_scalar_style_t = 2

export const yaml_SINGLE_QUOTED_SCALAR_STYLE: yaml_scalar_style_t = 4

export const yaml_DOUBLE_QUOTED_SCALAR_STYLE: yaml_scalar_style_t = 8

export const yaml_LITERAL_SCALAR_STYLE: yaml_scalar_style_t = 16

export const yaml_FOLDED_SCALAR_STYLE: yaml_scalar_style_t = 32

export const yaml_ANY_SEQUENCE_STYLE: yaml_sequence_style_t = 0

export const yaml_BLOCK_SEQUENCE_STYLE: yaml_sequence_style_t = 1

export const yaml_FLOW_SEQUENCE_STYLE: yaml_sequence_style_t = 2

export const yaml_ANY_MAPPING_STYLE: yaml_mapping_style_t = 0

export const yaml_BLOCK_MAPPING_STYLE: yaml_mapping_style_t = 1

export const yaml_FLOW_MAPPING_STYLE: yaml_mapping_style_t = 2

export const yaml_NO_TOKEN: yaml_token_type_t = 0

export const yaml_STREAM_START_TOKEN: yaml_token_type_t = 1

export const yaml_STREAM_END_TOKEN: yaml_token_type_t = 2

export const yaml_VERSION_DIRECTIVE_TOKEN: yaml_token_type_t = 3

export const yaml_TAG_DIRECTIVE_TOKEN: yaml_token_type_t = 4

export const yaml_DOCUMENT_START_TOKEN: yaml_token_type_t = 5

export const yaml_DOCUMENT_END_TOKEN: yaml_token_type_t = 6

export const yaml_BLOCK_SEQUENCE_START_TOKEN: yaml_token_type_t = 7

export const yaml_BLOCK_MAPPING_START_TOKEN: yaml_token_type_t = 8

export const yaml_BLOCK_END_TOKEN: yaml_token_type_t = 9

export const yaml_FLOW_SEQUENCE_START_TOKEN: yaml_token_type_t = 10

export const yaml_FLOW_SEQUENCE_END_TOKEN: yaml_token_type_t = 11

export const yaml_FLOW_MAPPING_START_TOKEN: yaml_token_type_t = 12

export const yaml_FLOW_MAPPING_END_TOKEN: yaml_token_type_t = 13

export const yaml_BLOCK_ENTRY_TOKEN: yaml_token_type_t = 14

export const yaml_FLOW_ENTRY_TOKEN: yaml_token_type_t = 15

export const yaml_KEY_TOKEN: yaml_token_type_t = 16

export const yaml_VALUE_TOKEN: yaml_token_type_t = 17

export const yaml_ALIAS_TOKEN: yaml_token_type_t = 18

export const yaml_ANCHOR_TOKEN: yaml_token_type_t = 19

export const yaml_TAG_TOKEN: yaml_token_type_t = 20

export const yaml_SCALAR_TOKEN: yaml_token_type_t = 21

export const yaml_NO_EVENT: yaml_event_type_t = 0

export const yaml_STREAM_START_EVENT: yaml_event_type_t = 1

export const yaml_STREAM_END_EVENT: yaml_event_type_t = 2

export const yaml_DOCUMENT_START_EVENT: yaml_event_type_t = 3

export const yaml_DOCUMENT_END_EVENT: yaml_event_type_t = 4

export const yaml_ALIAS_EVENT: yaml_event_type_t = 5

export const yaml_SCALAR_EVENT: yaml_event_type_t = 6

export const yaml_SEQUENCE_START_EVENT: yaml_event_type_t = 7

export const yaml_SEQUENCE_END_EVENT: yaml_event_type_t = 8

export const yaml_MAPPING_START_EVENT: yaml_event_type_t = 9

export const yaml_MAPPING_END_EVENT: yaml_event_type_t = 10

export const yaml_TAIL_COMMENT_EVENT: yaml_event_type_t = 11

export const yaml_NULL_TAG: string = "tag:yaml.org,2002:null"

export const yaml_BOOL_TAG: string = "tag:yaml.org,2002:bool"

export const yaml_STR_TAG: string = "tag:yaml.org,2002:str"

export const yaml_INT_TAG: string = "tag:yaml.org,2002:int"

export const yaml_FLOAT_TAG: string = "tag:yaml.org,2002:float"

export const yaml_TIMESTAMP_TAG: string = "tag:yaml.org,2002:timestamp"

export const yaml_SEQ_TAG: string = "tag:yaml.org,2002:seq"

export const yaml_MAP_TAG: string = "tag:yaml.org,2002:map"

export const yaml_BINARY_TAG: string = "tag:yaml.org,2002:binary"

export const yaml_MERGE_TAG: string = "tag:yaml.org,2002:merge"

export const yaml_DEFAULT_SCALAR_TAG: string = "tag:yaml.org,2002:str"

export const yaml_DEFAULT_SEQUENCE_TAG: string = "tag:yaml.org,2002:seq"

export const yaml_DEFAULT_MAPPING_TAG: string = "tag:yaml.org,2002:map"

export const yaml_NO_NODE: yaml_node_type_t = 0

export const yaml_SCALAR_NODE: yaml_node_type_t = 1

export const yaml_SEQUENCE_NODE: yaml_node_type_t = 2

export const yaml_MAPPING_NODE: yaml_node_type_t = 3

export const yaml_PARSE_STREAM_START_STATE: yaml_parser_state_t = 0

export const yaml_PARSE_IMPLICIT_DOCUMENT_START_STATE: yaml_parser_state_t = 1

export const yaml_PARSE_DOCUMENT_START_STATE: yaml_parser_state_t = 2

export const yaml_PARSE_DOCUMENT_CONTENT_STATE: yaml_parser_state_t = 3

export const yaml_PARSE_DOCUMENT_END_STATE: yaml_parser_state_t = 4

export const yaml_PARSE_BLOCK_NODE_STATE: yaml_parser_state_t = 5

export const yaml_PARSE_BLOCK_NODE_OR_INDENTLESS_SEQUENCE_STATE: yaml_parser_state_t = 6

export const yaml_PARSE_FLOW_NODE_STATE: yaml_parser_state_t = 7

export const yaml_PARSE_BLOCK_SEQUENCE_FIRST_ENTRY_STATE: yaml_parser_state_t = 8

export const yaml_PARSE_BLOCK_SEQUENCE_ENTRY_STATE: yaml_parser_state_t = 9

export const yaml_PARSE_INDENTLESS_SEQUENCE_ENTRY_STATE: yaml_parser_state_t = 10

export const yaml_PARSE_BLOCK_MAPPING_FIRST_KEY_STATE: yaml_parser_state_t = 11

export const yaml_PARSE_BLOCK_MAPPING_KEY_STATE: yaml_parser_state_t = 12

export const yaml_PARSE_BLOCK_MAPPING_VALUE_STATE: yaml_parser_state_t = 13

export const yaml_PARSE_FLOW_SEQUENCE_FIRST_ENTRY_STATE: yaml_parser_state_t = 14

export const yaml_PARSE_FLOW_SEQUENCE_ENTRY_STATE: yaml_parser_state_t = 15

export const yaml_PARSE_FLOW_SEQUENCE_ENTRY_MAPPING_KEY_STATE: yaml_parser_state_t = 16

export const yaml_PARSE_FLOW_SEQUENCE_ENTRY_MAPPING_VALUE_STATE: yaml_parser_state_t = 17

export const yaml_PARSE_FLOW_SEQUENCE_ENTRY_MAPPING_END_STATE: yaml_parser_state_t = 18

export const yaml_PARSE_FLOW_MAPPING_FIRST_KEY_STATE: yaml_parser_state_t = 19

export const yaml_PARSE_FLOW_MAPPING_KEY_STATE: yaml_parser_state_t = 20

export const yaml_PARSE_FLOW_MAPPING_VALUE_STATE: yaml_parser_state_t = 21

export const yaml_PARSE_FLOW_MAPPING_EMPTY_VALUE_STATE: yaml_parser_state_t = 22

export const yaml_PARSE_END_STATE: yaml_parser_state_t = 23

export const yaml_EMIT_STREAM_START_STATE: yaml_emitter_state_t = 0

export const yaml_EMIT_FIRST_DOCUMENT_START_STATE: yaml_emitter_state_t = 1

export const yaml_EMIT_DOCUMENT_START_STATE: yaml_emitter_state_t = 2

export const yaml_EMIT_DOCUMENT_CONTENT_STATE: yaml_emitter_state_t = 3

export const yaml_EMIT_DOCUMENT_END_STATE: yaml_emitter_state_t = 4

export const yaml_EMIT_FLOW_SEQUENCE_FIRST_ITEM_STATE: yaml_emitter_state_t = 5

export const yaml_EMIT_FLOW_SEQUENCE_TRAIL_ITEM_STATE: yaml_emitter_state_t = 6

export const yaml_EMIT_FLOW_SEQUENCE_ITEM_STATE: yaml_emitter_state_t = 7

export const yaml_EMIT_FLOW_MAPPING_FIRST_KEY_STATE: yaml_emitter_state_t = 8

export const yaml_EMIT_FLOW_MAPPING_TRAIL_KEY_STATE: yaml_emitter_state_t = 9

export const yaml_EMIT_FLOW_MAPPING_KEY_STATE: yaml_emitter_state_t = 10

export const yaml_EMIT_FLOW_MAPPING_SIMPLE_VALUE_STATE: yaml_emitter_state_t = 11

export const yaml_EMIT_FLOW_MAPPING_VALUE_STATE: yaml_emitter_state_t = 12

export const yaml_EMIT_BLOCK_SEQUENCE_FIRST_ITEM_STATE: yaml_emitter_state_t = 13

export const yaml_EMIT_BLOCK_SEQUENCE_ITEM_STATE: yaml_emitter_state_t = 14

export const yaml_EMIT_BLOCK_MAPPING_FIRST_KEY_STATE: yaml_emitter_state_t = 15

export const yaml_EMIT_BLOCK_MAPPING_KEY_STATE: yaml_emitter_state_t = 16

export const yaml_EMIT_BLOCK_MAPPING_SIMPLE_VALUE_STATE: yaml_emitter_state_t = 17

export const yaml_EMIT_BLOCK_MAPPING_VALUE_STATE: yaml_emitter_state_t = 18

export const yaml_EMIT_END_STATE: yaml_emitter_state_t = 19

export function yaml_token_type_t_String(tt: yaml_token_type_t): string {
	switch (tt) {
		case 0:
		{
			return "yaml_NO_TOKEN"
			break
		}
		case 1:
		{
			return "yaml_STREAM_START_TOKEN"
			break
		}
		case 2:
		{
			return "yaml_STREAM_END_TOKEN"
			break
		}
		case 3:
		{
			return "yaml_VERSION_DIRECTIVE_TOKEN"
			break
		}
		case 4:
		{
			return "yaml_TAG_DIRECTIVE_TOKEN"
			break
		}
		case 5:
		{
			return "yaml_DOCUMENT_START_TOKEN"
			break
		}
		case 6:
		{
			return "yaml_DOCUMENT_END_TOKEN"
			break
		}
		case 7:
		{
			return "yaml_BLOCK_SEQUENCE_START_TOKEN"
			break
		}
		case 8:
		{
			return "yaml_BLOCK_MAPPING_START_TOKEN"
			break
		}
		case 9:
		{
			return "yaml_BLOCK_END_TOKEN"
			break
		}
		case 10:
		{
			return "yaml_FLOW_SEQUENCE_START_TOKEN"
			break
		}
		case 11:
		{
			return "yaml_FLOW_SEQUENCE_END_TOKEN"
			break
		}
		case 12:
		{
			return "yaml_FLOW_MAPPING_START_TOKEN"
			break
		}
		case 13:
		{
			return "yaml_FLOW_MAPPING_END_TOKEN"
			break
		}
		case 14:
		{
			return "yaml_BLOCK_ENTRY_TOKEN"
			break
		}
		case 15:
		{
			return "yaml_FLOW_ENTRY_TOKEN"
			break
		}
		case 16:
		{
			return "yaml_KEY_TOKEN"
			break
		}
		case 17:
		{
			return "yaml_VALUE_TOKEN"
			break
		}
		case 18:
		{
			return "yaml_ALIAS_TOKEN"
			break
		}
		case 19:
		{
			return "yaml_ANCHOR_TOKEN"
			break
		}
		case 20:
		{
			return "yaml_TAG_TOKEN"
			break
		}
		case 21:
		{
			return "yaml_SCALAR_TOKEN"
			break
		}
	}
	return "<unknown token>"
}

export let eventStrings: $.Slice<string> = $.arrayToSlice<string>(["none", "stream start", "stream end", "document start", "document end", "alias", "scalar", "sequence start", "sequence end", "mapping start", "mapping end", "tail comment"])

export function __goscript_set_eventStrings(__goscriptValue: $.Slice<string>): void {
	eventStrings = __goscriptValue
}

export async function yaml_event_type_t_String(e: yaml_event_type_t): globalThis.Promise<string> {
	if ((e < 0) || ($.int(e) >= $.sliceLen(eventStrings))) {
		return fmt.Sprintf("unknown event %d", $.namedValueInterfaceValue<any>(e, "yaml.yaml_event_type_t", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()))
	}
	return $.arrayIndex(eventStrings!, e)
}

export function yaml_parser_state_t_String(ps: yaml_parser_state_t): string {
	switch (ps) {
		case 0:
		{
			return "yaml_PARSE_STREAM_START_STATE"
			break
		}
		case 1:
		{
			return "yaml_PARSE_IMPLICIT_DOCUMENT_START_STATE"
			break
		}
		case 2:
		{
			return "yaml_PARSE_DOCUMENT_START_STATE"
			break
		}
		case 3:
		{
			return "yaml_PARSE_DOCUMENT_CONTENT_STATE"
			break
		}
		case 4:
		{
			return "yaml_PARSE_DOCUMENT_END_STATE"
			break
		}
		case 5:
		{
			return "yaml_PARSE_BLOCK_NODE_STATE"
			break
		}
		case 6:
		{
			return "yaml_PARSE_BLOCK_NODE_OR_INDENTLESS_SEQUENCE_STATE"
			break
		}
		case 7:
		{
			return "yaml_PARSE_FLOW_NODE_STATE"
			break
		}
		case 8:
		{
			return "yaml_PARSE_BLOCK_SEQUENCE_FIRST_ENTRY_STATE"
			break
		}
		case 9:
		{
			return "yaml_PARSE_BLOCK_SEQUENCE_ENTRY_STATE"
			break
		}
		case 10:
		{
			return "yaml_PARSE_INDENTLESS_SEQUENCE_ENTRY_STATE"
			break
		}
		case 11:
		{
			return "yaml_PARSE_BLOCK_MAPPING_FIRST_KEY_STATE"
			break
		}
		case 12:
		{
			return "yaml_PARSE_BLOCK_MAPPING_KEY_STATE"
			break
		}
		case 13:
		{
			return "yaml_PARSE_BLOCK_MAPPING_VALUE_STATE"
			break
		}
		case 14:
		{
			return "yaml_PARSE_FLOW_SEQUENCE_FIRST_ENTRY_STATE"
			break
		}
		case 15:
		{
			return "yaml_PARSE_FLOW_SEQUENCE_ENTRY_STATE"
			break
		}
		case 16:
		{
			return "yaml_PARSE_FLOW_SEQUENCE_ENTRY_MAPPING_KEY_STATE"
			break
		}
		case 17:
		{
			return "yaml_PARSE_FLOW_SEQUENCE_ENTRY_MAPPING_VALUE_STATE"
			break
		}
		case 18:
		{
			return "yaml_PARSE_FLOW_SEQUENCE_ENTRY_MAPPING_END_STATE"
			break
		}
		case 19:
		{
			return "yaml_PARSE_FLOW_MAPPING_FIRST_KEY_STATE"
			break
		}
		case 20:
		{
			return "yaml_PARSE_FLOW_MAPPING_KEY_STATE"
			break
		}
		case 21:
		{
			return "yaml_PARSE_FLOW_MAPPING_VALUE_STATE"
			break
		}
		case 22:
		{
			return "yaml_PARSE_FLOW_MAPPING_EMPTY_VALUE_STATE"
			break
		}
		case 23:
		{
			return "yaml_PARSE_END_STATE"
			break
		}
	}
	return "<unknown parser state>"
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({String: (receiver: any, ...args: any[]) => (yaml_event_type_t_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.basicType("int8", "yaml.yaml_event_type_t"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])])
}
