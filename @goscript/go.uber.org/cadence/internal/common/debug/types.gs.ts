// Generated file based on types.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

$.registerTypePackagePath("go.uber.org/cadence/internal/common/debug", ["debug.Stopper", "debug.PollerTracker", "debug.WorkerStats", "debug.ActivityInfo", "debug.ActivityTracker", "debug.Activities", "debug.Debugger"])

export type Stopper = {
	Stop(): void
}

$.registerInterfaceType(
	"debug.Stopper",
	null,
	[$.methodSignature("Stop")]
);

export type PollerTracker = {
	Start(): Stopper | null
	Stats(): number
}

$.registerInterfaceType(
	"debug.PollerTracker",
	null,
	[$.methodSignature("Start", [], ["debug.Stopper"]), $.methodSignature("Stats", [], [/* @__PURE__ */ $.basicType("int32")])]
);

export type ActivityTracker = {
	Start(info: ActivityInfo): Stopper | null
	Stats(): Activities
}

$.registerInterfaceType(
	"debug.ActivityTracker",
	null,
	[$.methodSignature("Start", [["info", "debug.ActivityInfo"]], ["debug.Stopper"]), $.methodSignature("Stats", [], [/* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("Info", "debug.ActivityInfo", [0], 0, true), /* @__PURE__ */ $.structField("Count", /* @__PURE__ */ $.basicType("int64"), [1], 32, true)] }, "debug.Activities")])]
);

export type Activities = $.Slice<{"Info": ActivityInfo, "Count": bigint}>

$.registerNamedType("debug.Activities", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("Info", "debug.ActivityInfo", [0], 0, true), /* @__PURE__ */ $.structField("Count", /* @__PURE__ */ $.basicType("int64"), [1], 32, true)] }));

export type Debugger = {
	GetWorkerStats(): WorkerStats
}

$.registerInterfaceType(
	"debug.Debugger",
	null,
	[$.methodSignature("GetWorkerStats", [], ["debug.WorkerStats"])]
);

export class WorkerStats {
	public get PollerTracker(): PollerTracker | null {
		return this._fields.PollerTracker
	}

	public set PollerTracker(value: PollerTracker | null) {
		this._fields.PollerTracker = value
	}

	public get ActivityTracker(): ActivityTracker | null {
		return this._fields.ActivityTracker
	}

	public set ActivityTracker(value: ActivityTracker | null) {
		this._fields.ActivityTracker = value
	}

	public _fields: {
		PollerTracker: PollerTracker | null
		ActivityTracker: ActivityTracker | null
	}

	constructor(init?: Partial<{PollerTracker?: PollerTracker | null, ActivityTracker?: ActivityTracker | null}>, __goscriptValue?: boolean) {
		this._fields = {
			PollerTracker: init?.PollerTracker ?? (null! as PollerTracker | null),
			ActivityTracker: init?.ActivityTracker ?? (null! as ActivityTracker | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): WorkerStats {
		return new WorkerStats(this, true)
	}

	public __goscriptAssign(source: WorkerStats): void {
		const target = this._fields
		const values = source._fields
		target.PollerTracker = $.assignFieldValue(target.PollerTracker, values.PollerTracker, "debug.PollerTracker")
		target.ActivityTracker = $.assignFieldValue(target.ActivityTracker, values.ActivityTracker, "debug.ActivityTracker")
	}

	static __typeInfo = $.registerStructType(
		"debug.WorkerStats",
		() => new WorkerStats(),
		() => [],
		WorkerStats,
		() => [/* @__PURE__ */ $.structField("PollerTracker", "debug.PollerTracker", [0], 0, true), /* @__PURE__ */ $.structField("ActivityTracker", "debug.ActivityTracker", [1], 16, true)]
	)
}

export class ActivityInfo {
	public get TaskList(): string {
		return this._fields.TaskList
	}

	public set TaskList(value: string) {
		this._fields.TaskList = value
	}

	public get ActivityType(): string {
		return this._fields.ActivityType
	}

	public set ActivityType(value: string) {
		this._fields.ActivityType = value
	}

	public _fields: {
		TaskList: string
		ActivityType: string
	}

	constructor(init?: Partial<{TaskList?: string, ActivityType?: string}>, __goscriptValue?: boolean) {
		this._fields = {
			TaskList: init?.TaskList ?? ("" as string),
			ActivityType: init?.ActivityType ?? ("" as string)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ActivityInfo {
		return new ActivityInfo(this, true)
	}

	public __goscriptAssign(source: ActivityInfo): void {
		const target = this._fields
		const values = source._fields
		target.TaskList = values.TaskList
		target.ActivityType = values.ActivityType
	}

	static __typeInfo = $.registerStructType(
		"debug.ActivityInfo",
		() => new ActivityInfo(),
		() => [],
		ActivityInfo,
		() => [/* @__PURE__ */ $.structField("TaskList", /* @__PURE__ */ $.basicType("string"), [0], 0, true), /* @__PURE__ */ $.structField("ActivityType", /* @__PURE__ */ $.basicType("string"), [1], 16, true)]
	)
}
