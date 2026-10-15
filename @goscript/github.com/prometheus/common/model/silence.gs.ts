// Generated file based on silence.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as json from "@goscript/encoding/json/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as regexp from "@goscript/regexp/index.js"

import * as time from "@goscript/time/index.js"

import * as __goscript_labels from "./labels.gs.ts"
import "@goscript/encoding/json/index.js"
import "@goscript/fmt/index.js"
import "@goscript/regexp/index.js"
import "@goscript/time/index.js"
import "./labels.gs.ts"

$.registerTypePackagePath("github.com/prometheus/common/model", ["model.Matcher", "model.plain", "model.Silence"])

export class Matcher {
	public get Name(): __goscript_labels.LabelName {
		return this._fields.Name
	}

	public set Name(value: __goscript_labels.LabelName) {
		this._fields.Name = value
	}

	public get Value(): string {
		return this._fields.Value
	}

	public set Value(value: string) {
		this._fields.Value = value
	}

	public get IsRegex(): boolean {
		return this._fields.IsRegex
	}

	public set IsRegex(value: boolean) {
		this._fields.IsRegex = value
	}

	public _fields: {
		Name: __goscript_labels.LabelName
		Value: string
		IsRegex: boolean
	}

	constructor(init?: Partial<{Name?: __goscript_labels.LabelName, Value?: string, IsRegex?: boolean}>, __goscriptValue?: boolean) {
		this._fields = {
			Name: init?.Name ?? ("" as __goscript_labels.LabelName),
			Value: init?.Value ?? ("" as string),
			IsRegex: init?.IsRegex ?? (false as boolean)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Matcher {
		return new Matcher(this, true)
	}

	public __goscriptAssign(source: Matcher): void {
		const target = this._fields
		const values = source._fields
		target.Name = values.Name
		target.Value = values.Value
		target.IsRegex = values.IsRegex
	}

	public async UnmarshalJSON(b: $.Slice<number>): globalThis.Promise<$.GoError> {
		const m: Matcher | $.VarRef<Matcher> | null = this;
		const m$: Matcher = m == null ? $.pointerTarget<Matcher>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<Matcher>(m)
		class plain {
			public get Name(): __goscript_labels.LabelName {
				return this._fields.Name
			}

			public set Name(value: __goscript_labels.LabelName) {
				this._fields.Name = value
			}

			public get Value(): string {
				return this._fields.Value
			}

			public set Value(value: string) {
				this._fields.Value = value
			}

			public get IsRegex(): boolean {
				return this._fields.IsRegex
			}

			public set IsRegex(value: boolean) {
				this._fields.IsRegex = value
			}

			public _fields: {
				Name: __goscript_labels.LabelName
				Value: string
				IsRegex: boolean
			}

			constructor(init?: Partial<{Name?: __goscript_labels.LabelName, Value?: string, IsRegex?: boolean}>, __goscriptValue?: boolean) {
				this._fields = {
					Name: init?.Name ?? ("" as __goscript_labels.LabelName),
					Value: init?.Value ?? ("" as string),
					IsRegex: init?.IsRegex ?? (false as boolean)
				}
				;(this as any)[$.structValueMarker] = __goscriptValue === true
			}

			public clone(): plain {
				return new plain(this, true)
			}

			public __goscriptAssign(source: plain): void {
				const target = this._fields
				const values = source._fields
				target.Name = values.Name
				target.Value = values.Value
				target.IsRegex = values.IsRegex
			}

			static __typeInfo = $.registerStructType(
				"model.plain",
				() => new plain(),
				() => [],
				plain,
				() => [/* @__PURE__ */ $.structField("Name", /* @__PURE__ */ $.basicType("string", "model.LabelName"), [0], 0, true, { tag: "json:\"name\"" }), /* @__PURE__ */ $.structField("Value", /* @__PURE__ */ $.basicType("string"), [1], 16, true, { tag: "json:\"value\"" }), /* @__PURE__ */ $.structField("IsRegex", /* @__PURE__ */ $.basicType("bool"), [2], 32, true, { tag: "json:\"isRegex\"" })]
			)
		}
		{
			let err = await json.Unmarshal(b, $.interfaceValue($.unsafePointerCast<plain | $.VarRef<plain> | null>(m, plain), "*model.plain", /* @__PURE__ */ $.pointerType("model.plain")))
			if (err != null) {
				return err
			}
		}

		if ($.stringLen((m$ as Matcher).Name) == 0) {
			return fmt.Errorf("label name in matcher must not be empty")
		}
		if ((m$ as Matcher).IsRegex) {
			{
				let [, err] = await regexp.Compile((m$ as Matcher).Value)
				if (err != null) {
					return err
				}
			}
		}
		return null
	}

	public async Validate(): globalThis.Promise<$.GoError> {
		const m: Matcher | $.VarRef<Matcher> | null = this;
		const m$: Matcher = m == null ? $.pointerTarget<Matcher>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<Matcher>(m)
		if (!__goscript_labels.LabelName_IsValid((m$ as Matcher).Name)) {
			return fmt.Errorf("invalid name %q", $.namedValueInterfaceValue<any>((m$ as Matcher).Name, "model.LabelName", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()))
		}
		if ((m$ as Matcher).IsRegex) {
			{
				let [, err] = await regexp.Compile((m$ as Matcher).Value)
				if (err != null) {
					return fmt.Errorf("invalid regular expression %q", (m$ as Matcher).Value)
				}
			}
		} else {
			if (!__goscript_labels.LabelValue_IsValid((m$ as Matcher).Value) || ($.stringLen((m$ as Matcher).Value) == 0)) {
				return fmt.Errorf("invalid value %q", (m$ as Matcher).Value)
			}
		}
		return null
	}

	static __typeInfo = $.registerStructType(
		"model.Matcher",
		() => new Matcher(),
		() => [$.methodSignature("UnmarshalJSON", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true), $.methodSignature("Validate", [], ["error"], true)],
		Matcher,
		() => [/* @__PURE__ */ $.structField("Name", /* @__PURE__ */ $.basicType("string", "model.LabelName"), [0], 0, true, { tag: "json:\"name\"" }), /* @__PURE__ */ $.structField("Value", /* @__PURE__ */ $.basicType("string"), [1], 16, true, { tag: "json:\"value\"" }), /* @__PURE__ */ $.structField("IsRegex", /* @__PURE__ */ $.basicType("bool"), [2], 32, true, { tag: "json:\"isRegex\"" })]
	)
}

export class Silence {
	public get ID(): bigint {
		return this._fields.ID
	}

	public set ID(value: bigint) {
		this._fields.ID = value
	}

	public get Matchers(): $.Slice<Matcher | $.VarRef<Matcher> | null> {
		return this._fields.Matchers
	}

	public set Matchers(value: $.Slice<Matcher | $.VarRef<Matcher> | null>) {
		this._fields.Matchers = value
	}

	public get StartsAt(): time.Time {
		return this._fields.StartsAt
	}

	public set StartsAt(value: time.Time) {
		this._fields.StartsAt = value
	}

	public get EndsAt(): time.Time {
		return this._fields.EndsAt
	}

	public set EndsAt(value: time.Time) {
		this._fields.EndsAt = value
	}

	public get CreatedAt(): time.Time {
		return this._fields.CreatedAt
	}

	public set CreatedAt(value: time.Time) {
		this._fields.CreatedAt = value
	}

	public get CreatedBy(): string {
		return this._fields.CreatedBy
	}

	public set CreatedBy(value: string) {
		this._fields.CreatedBy = value
	}

	public get Comment(): string {
		return this._fields.Comment
	}

	public set Comment(value: string) {
		this._fields.Comment = value
	}

	public _fields: {
		ID: bigint
		Matchers: $.Slice<Matcher | $.VarRef<Matcher> | null>
		StartsAt: time.Time
		EndsAt: time.Time
		CreatedAt: time.Time
		CreatedBy: string
		Comment: string
	}

	constructor(init?: Partial<{ID?: bigint, Matchers?: $.Slice<Matcher | $.VarRef<Matcher> | null>, StartsAt?: time.Time, EndsAt?: time.Time, CreatedAt?: time.Time, CreatedBy?: string, Comment?: string}>, __goscriptValue?: boolean) {
		this._fields = {
			ID: init?.ID ?? (0n as bigint),
			Matchers: init?.Matchers ?? (null! as $.Slice<Matcher | $.VarRef<Matcher> | null>),
			StartsAt: init?.StartsAt ? $.markAsStructValue($.cloneStructValue(init.StartsAt)) : $.markAsStructValue(new time.Time()),
			EndsAt: init?.EndsAt ? $.markAsStructValue($.cloneStructValue(init.EndsAt)) : $.markAsStructValue(new time.Time()),
			CreatedAt: init?.CreatedAt ? $.markAsStructValue($.cloneStructValue(init.CreatedAt)) : $.markAsStructValue(new time.Time()),
			CreatedBy: init?.CreatedBy ?? ("" as string),
			Comment: init?.Comment ?? ("" as string)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Silence {
		return new Silence(this, true)
	}

	public __goscriptAssign(source: Silence): void {
		const target = this._fields
		const values = source._fields
		target.ID = values.ID
		target.Matchers = values.Matchers
		$.assignStruct(target.StartsAt, values.StartsAt)
		$.assignStruct(target.EndsAt, values.EndsAt)
		$.assignStruct(target.CreatedAt, values.CreatedAt)
		target.CreatedBy = values.CreatedBy
		target.Comment = values.Comment
	}

	public async Validate(): globalThis.Promise<$.GoError> {
		const s: Silence | $.VarRef<Silence> | null = this;
		const s$: Silence = s == null ? $.pointerTarget<Silence>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<Silence>(s)
		if ($.sliceLen((s$ as Silence).Matchers) == 0) {
			return fmt.Errorf("at least one matcher required")
		}
		for (let __goscriptRangeTarget0 = (s$ as Silence).Matchers, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
			let m = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as Matcher | $.VarRef<Matcher> | null)
			{
				let err = await (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Matcher).Validate() : Matcher.prototype.Validate.call(m))
				if (err != null) {
					return fmt.Errorf("invalid matcher: %s", (err as any))
				}
			}
		}
		if ($.markAsStructValue($.cloneStructValue((s$ as Silence).StartsAt)).IsZero()) {
			return fmt.Errorf("start time missing")
		}
		if ($.markAsStructValue($.cloneStructValue((s$ as Silence).EndsAt)).IsZero()) {
			return fmt.Errorf("end time missing")
		}
		if ($.markAsStructValue($.cloneStructValue((s$ as Silence).EndsAt)).Before($.markAsStructValue($.cloneStructValue((s$ as Silence).StartsAt)))) {
			return fmt.Errorf("start time must be before end time")
		}
		if ($.stringEqual((s$ as Silence).CreatedBy, "")) {
			return fmt.Errorf("creator information missing")
		}
		if ($.stringEqual((s$ as Silence).Comment, "")) {
			return fmt.Errorf("comment missing")
		}
		if ($.markAsStructValue($.cloneStructValue((s$ as Silence).CreatedAt)).IsZero()) {
			return fmt.Errorf("creation timestamp missing")
		}
		return null
	}

	static __typeInfo = $.registerStructType(
		"model.Silence",
		() => new Silence(),
		() => [$.methodSignature("Validate", [], ["error"], true)],
		Silence,
		() => [/* @__PURE__ */ $.structField("ID", /* @__PURE__ */ $.basicType("uint64"), [0], 0, true, { tag: "json:\"id,omitempty\"" }), /* @__PURE__ */ $.structField("Matchers", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("model.Matcher")), [1], 8, true, { tag: "json:\"matchers\"" }), /* @__PURE__ */ $.structField("StartsAt", "time.Time", [2], 32, true, { tag: "json:\"startsAt\"" }), /* @__PURE__ */ $.structField("EndsAt", "time.Time", [3], 56, true, { tag: "json:\"endsAt\"" }), /* @__PURE__ */ $.structField("CreatedAt", "time.Time", [4], 80, true, { tag: "json:\"createdAt,omitempty\"" }), /* @__PURE__ */ $.structField("CreatedBy", /* @__PURE__ */ $.basicType("string"), [5], 104, true, { tag: "json:\"createdBy\"" }), /* @__PURE__ */ $.structField("Comment", /* @__PURE__ */ $.basicType("string"), [6], 120, true, { tag: "json:\"comment,omitempty\"" })]
	)
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({IsValid: (receiver: any, ...args: any[]) => (__goscript_labels.LabelName_IsValid as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.basicType("string", "model.LabelName"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("IsValid", [], [/* @__PURE__ */ $.basicType("bool")])])
}
