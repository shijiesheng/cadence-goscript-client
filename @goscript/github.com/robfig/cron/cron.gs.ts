// Generated file based on cron.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as log from "@goscript/log/index.js"

import * as runtime from "@goscript/runtime/index.js"

import * as sort from "@goscript/sort/index.js"

import * as time from "@goscript/time/index.js"

import * as __goscript_parser from "./parser.gs.ts"
import "@goscript/log/index.js"
import "@goscript/runtime/index.js"
import "@goscript/sort/index.js"
import "@goscript/time/index.js"
import "./parser.gs.ts"

$.registerTypePackagePath("github.com/robfig/cron", ["cron.Cron", "cron.Job", "cron.Schedule", "cron.Entry", "cron.byTime", "cron.FuncJob"])

export type Job = {
	Run(): void
}

$.registerInterfaceType(
	"cron.Job",
	null,
	[$.methodSignature("Run")]
);

export type Schedule = {
	Next(_p0: time.Time): time.Time
}

$.registerInterfaceType(
	"cron.Schedule",
	null,
	[$.methodSignature("Next", ["time.Time"], ["time.Time"])]
);

export type byTime = $.Slice<Entry | $.VarRef<Entry> | null>

$.registerNamedType("cron.byTime", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("cron.Entry")));

$.registerNamedValueType(
	"cron.byTime",
	{Len: (receiver: any, ...args: any[]) => (byTime_Len as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Less: (receiver: any, ...args: any[]) => (byTime_Less as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Swap: (receiver: any, ...args: any[]) => (byTime_Swap as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Less", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Swap", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]])]
);

$.registerNamedValueType(
	"*cron.byTime",
	{Len: (receiver: any, ...args: any[]) => (byTime_Len as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Less: (receiver: any, ...args: any[]) => (byTime_Less as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Swap: (receiver: any, ...args: any[]) => (byTime_Swap as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Less", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Swap", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]])]
);

export type FuncJob = (() => void) | null

$.registerNamedValueType(
	"cron.FuncJob",
	{Run: (receiver: any, ...args: any[]) => (FuncJob_Run as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Run")]
);

$.registerNamedValueType(
	"*cron.FuncJob",
	{Run: (receiver: any, ...args: any[]) => (FuncJob_Run as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Run")]
);

export class Cron {
	public get entries(): $.Slice<Entry | $.VarRef<Entry> | null> {
		return this._fields.entries
	}

	public set entries(value: $.Slice<Entry | $.VarRef<Entry> | null>) {
		this._fields.entries = value
	}

	public get stop(): $.Channel<{}> | null {
		return this._fields.stop
	}

	public set stop(value: $.Channel<{}> | null) {
		this._fields.stop = value
	}

	public get add(): $.Channel<Entry | $.VarRef<Entry> | null> | null {
		return this._fields.add
	}

	public set add(value: $.Channel<Entry | $.VarRef<Entry> | null> | null) {
		this._fields.add = value
	}

	public get snapshot(): $.Channel<$.Slice<Entry | $.VarRef<Entry> | null>> | null {
		return this._fields.snapshot
	}

	public set snapshot(value: $.Channel<$.Slice<Entry | $.VarRef<Entry> | null>> | null) {
		this._fields.snapshot = value
	}

	public get running(): boolean {
		return this._fields.running
	}

	public set running(value: boolean) {
		this._fields.running = value
	}

	public get ErrorLog(): log.Logger | $.VarRef<log.Logger> | null {
		return this._fields.ErrorLog
	}

	public set ErrorLog(value: log.Logger | $.VarRef<log.Logger> | null) {
		this._fields.ErrorLog = value
	}

	public get location(): time.Location | $.VarRef<time.Location> | null {
		return this._fields.location
	}

	public set location(value: time.Location | $.VarRef<time.Location> | null) {
		this._fields.location = value
	}

	public _fields: {
		entries: $.Slice<Entry | $.VarRef<Entry> | null>
		stop: $.Channel<{}> | null
		add: $.Channel<Entry | $.VarRef<Entry> | null> | null
		snapshot: $.Channel<$.Slice<Entry | $.VarRef<Entry> | null>> | null
		running: boolean
		ErrorLog: log.Logger | $.VarRef<log.Logger> | null
		location: time.Location | $.VarRef<time.Location> | null
	}

	constructor(init?: Partial<{entries?: $.Slice<Entry | $.VarRef<Entry> | null>, stop?: $.Channel<{}> | null, add?: $.Channel<Entry | $.VarRef<Entry> | null> | null, snapshot?: $.Channel<$.Slice<Entry | $.VarRef<Entry> | null>> | null, running?: boolean, ErrorLog?: log.Logger | $.VarRef<log.Logger> | null, location?: time.Location | $.VarRef<time.Location> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			entries: init?.entries ?? (null! as $.Slice<Entry | $.VarRef<Entry> | null>),
			stop: init?.stop ?? (null! as $.Channel<{}> | null),
			add: init?.add ?? (null! as $.Channel<Entry | $.VarRef<Entry> | null> | null),
			snapshot: init?.snapshot ?? (null! as $.Channel<$.Slice<Entry | $.VarRef<Entry> | null>> | null),
			running: init?.running ?? (false as boolean),
			ErrorLog: init?.ErrorLog ?? (null! as log.Logger | $.VarRef<log.Logger> | null),
			location: init?.location ?? (null! as time.Location | $.VarRef<time.Location> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Cron {
		return new Cron(this, true)
	}

	public __goscriptAssign(source: Cron): void {
		const target = this._fields
		const values = source._fields
		target.entries = values.entries
		target.stop = values.stop
		target.add = values.add
		target.snapshot = values.snapshot
		target.running = values.running
		target.ErrorLog = values.ErrorLog
		target.location = values.location
	}

	public async AddFunc(spec: string, cmd: (() => void) | null): globalThis.Promise<$.GoError> {
		const c: Cron | $.VarRef<Cron> | null = this;
		return Cron.prototype.AddJob.call(c, spec, $.namedValueInterfaceValue<Job | null>($.namedFunction(cmd, "cron.FuncJob", ({ kind: $.TypeKind.Function, name: "cron.FuncJob", params: [], results: [] } as $.FunctionTypeInfo)), "cron.FuncJob", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()))
	}

	public async AddJob(spec: string, cmd: Job | null): globalThis.Promise<$.GoError> {
		const c: Cron | $.VarRef<Cron> | null = this;
		let [schedule, err] = await __goscript_parser.Parse(spec)
		if (err != null) {
			return err
		}
		await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Cron).Schedule(schedule, cmd) : Cron.prototype.Schedule.call(c, schedule, cmd))
		return null
	}

	public async Entries(): globalThis.Promise<$.Slice<Entry | $.VarRef<Entry> | null>> {
		const c: Cron | $.VarRef<Cron> | null = this;
		const c$: Cron = c == null ? $.pointerTarget<Cron>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<Cron>(c)
		if ((c$ as Cron).running) {
			await $.chanSend((c$ as Cron).snapshot, null)
			let x: $.Slice<Entry | $.VarRef<Entry> | null> = await $.chanRecv((c$ as Cron).snapshot)
			return x
		}
		return (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Cron).entrySnapshot() : Cron.prototype.entrySnapshot.call(c))
	}

	public Location(): time.Location | $.VarRef<time.Location> | null {
		const c: Cron | $.VarRef<Cron> | null = this;
		return $.pointerValue<Cron>(c).location
	}

	public async Run(): globalThis.Promise<void> {
		let c: Cron | $.VarRef<Cron> | null = this;
		const c$: Cron = c == null ? $.pointerTarget<Cron>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<Cron>(c)
		if ((c$ as Cron).running) {
			return
		}
		;(c$ as Cron).running = true
		await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Cron).run() : Cron.prototype.run.call(c))
	}

	public async Schedule(schedule: Schedule | null, cmd: Job | null): globalThis.Promise<void> {
		let c: Cron | $.VarRef<Cron> | null = this;
		const c$: Cron = c == null ? $.pointerTarget<Cron>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<Cron>(c)
		let entry: Entry | $.VarRef<Entry> | null = new Entry({Schedule: schedule, Job: cmd})
		if (!(c$ as Cron).running) {
			;(c$ as Cron).entries = $.appendOne((c$ as Cron).entries, entry, $.appendZeros.nil)
			return
		}

		await $.chanSend((c$ as Cron).add, entry)
	}

	public async Start(): globalThis.Promise<void> {
		let c: Cron | $.VarRef<Cron> | null = this;
		const c$: Cron = c == null ? $.pointerTarget<Cron>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<Cron>(c)
		if ((c$ as Cron).running) {
			return
		}
		;(c$ as Cron).running = true
		const __goscriptDeferCallee0 = $.functionValue(((__receiver) => () => __receiver.run())((c$ as Cron)), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "github.com/robfig/cron.(*Cron).run-fm")
		queueMicrotask(async () => { await __goscriptDeferCallee0() })
	}

	public async Stop(): globalThis.Promise<void> {
		let c: Cron | $.VarRef<Cron> | null = this;
		const c$: Cron = c == null ? $.pointerTarget<Cron>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<Cron>(c)
		if (!(c$ as Cron).running) {
			return
		}
		await $.chanSend((c$ as Cron).stop, {});
		;(c$ as Cron).running = false
	}

	public entrySnapshot(): $.Slice<Entry | $.VarRef<Entry> | null> {
		const c: Cron | $.VarRef<Cron> | null = this;
		let entries: $.Slice<Entry | $.VarRef<Entry> | null> = $.arrayToSlice<Entry | $.VarRef<Entry> | null>([])
		for (let __goscriptRangeTarget0 = $.pointerValue<Cron>(c).entries, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
			let e = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as Entry | $.VarRef<Entry> | null)
			entries = $.appendOne(entries, new Entry({Schedule: $.pointerValue<Entry>(e).Schedule, Next: $.markAsStructValue($.cloneStructValue($.pointerValue<Entry>(e).Next)), Prev: $.markAsStructValue($.cloneStructValue($.pointerValue<Entry>(e).Prev)), Job: $.pointerValue<Entry>(e).Job}), $.appendZeros.nil)
		}
		return entries
	}

	public async logf(format: string, args: $.Slice<any>): globalThis.Promise<void> {
		const c: Cron | $.VarRef<Cron> | null = this;
		const c$: Cron = c == null ? $.pointerTarget<Cron>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<Cron>(c)
		if ((c$ as Cron).ErrorLog != null) {
			await log.Logger.prototype.Printf.call((c$ as Cron).ErrorLog, format, args)
		} else {
			await log.Printf(format, args)
		}
	}

	public now(): time.Time {
		const c: Cron | $.VarRef<Cron> | null = this;
		return $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(time.Now())).In($.pointerValue<Cron>(c).location)))
	}

	public async run(): globalThis.Promise<void> {
		let c: Cron | $.VarRef<Cron> | null = this;
		const c$: Cron = c == null ? $.pointerTarget<Cron>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<Cron>(c)
		// Figure out the next activation times for each entry.
		let now = (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Cron).now() : Cron.prototype.now.call(c))
		for (let __goscriptRangeTarget1 = (c$ as Cron).entries, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
			let entry = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as Entry | $.VarRef<Entry> | null)
			$.assignStruct($.pointerValue<Entry>(entry).Next, ((__goscriptAwait = $.pointerValue<Exclude<Schedule, null>>($.pointerValue<Entry>(entry).Schedule).Next($.markAsStructValue($.cloneStructValue(now))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as time.Time))
		}

		while (true) {
			// Determine the next entry to run.
			await sort.Sort($.pointerValueOrNil($.namedValueInterfaceValue<sort.Interface | null>(((c$ as Cron).entries as byTime), "cron.byTime", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic5()))!)

			let timer: time.Timer | $.VarRef<time.Timer> | null = null! as time.Timer | $.VarRef<time.Timer> | null
			if (($.sliceLen((c$ as Cron).entries) == 0) || $.markAsStructValue($.cloneStructValue($.pointerValue<Entry>($.arrayIndex((c$ as Cron).entries!, 0)).Next)).IsZero()) {
				// If there are no entries yet, just sleep - it still handles new entries
				// and stop requests.
				timer = time.NewTimer(360000000000000000n)
			} else {
				timer = time.NewTimer($.markAsStructValue($.cloneStructValue($.pointerValue<Entry>($.arrayIndex((c$ as Cron).entries!, 0)).Next)).Sub($.markAsStructValue($.cloneStructValue(now))))
			}

			while (true) {
				const [__goscriptSelect0HasReturn, __goscriptSelect0Value] = await $.selectStatement<any, any>([
					{
						id: 0,
						isSend: false,
						channel: $.pointerValue<time.Timer>(timer).C,
						onSelected: async (__goscriptSelect0Result) => {
							return __goscriptSelect0Result
						}
					},
					{
						id: 1,
						isSend: false,
						channel: (c$ as Cron).add,
						onSelected: async (__goscriptSelect0Result) => {
							return __goscriptSelect0Result
						}
					},
					{
						id: 2,
						isSend: false,
						channel: (c$ as Cron).snapshot,
						onSelected: async (__goscriptSelect0Result) => {
							return __goscriptSelect0Result
						}
					},
					{
						id: 3,
						isSend: false,
						channel: (c$ as Cron).stop,
						onSelected: async (__goscriptSelect0Result) => {
							return __goscriptSelect0Result
						}
					}
				], false)
				switch (__goscriptSelect0Value?.id) {
					case 0:
						{
							const __goscriptSelect0Result = __goscriptSelect0Value
							now = __goscriptSelect0Result.value
							now = $.assignStruct(now, $.markAsStructValue($.cloneStructValue(now)).In((c$ as Cron).location))
							// Run every entry whose next time was less than now
							for (let __goscriptRangeTarget2 = (c$ as Cron).entries, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow2.length; __rangeIndex++) {
								let e = (__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + __rangeIndex] as Entry | $.VarRef<Entry> | null)
								if ($.markAsStructValue($.cloneStructValue($.pointerValue<Entry>(e).Next)).After($.markAsStructValue($.cloneStructValue(now))) || $.markAsStructValue($.cloneStructValue($.pointerValue<Entry>(e).Next)).IsZero()) {
									break
								}
								const __goscriptDeferCallee1 = $.functionValue(((__receiver) => (j: Job | null) => __receiver.runWithRecovery(j))((c$ as Cron)), ({ kind: $.TypeKind.Function, params: ["cron.Job"], results: [] } as $.FunctionTypeInfo), "github.com/robfig/cron.(*Cron).runWithRecovery-fm")
								const __goscriptDeferArg0 = $.pointerValue<Entry>(e).Job
								queueMicrotask(async () => { await __goscriptDeferCallee1(__goscriptDeferArg0) })
								$.assignStruct($.pointerValue<Entry>(e).Prev, $.pointerValue<Entry>(e).Next)
								$.assignStruct($.pointerValue<Entry>(e).Next, ((__goscriptAwait = $.pointerValue<Exclude<Schedule, null>>($.pointerValue<Entry>(e).Schedule).Next($.markAsStructValue($.cloneStructValue(now))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as time.Time))
							}
							break
						}
					case 1:
						{
							const __goscriptSelect0Result = __goscriptSelect0Value
							let newEntry = __goscriptSelect0Result.value
							time.Timer.prototype.Stop.call($.pointerValue<time.Timer>(timer))
							now = $.assignStruct(now, (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Cron).now() : Cron.prototype.now.call(c)))
							$.assignStruct($.pointerValue<Entry>(newEntry).Next, ((__goscriptAwait = $.pointerValue<Exclude<Schedule, null>>($.pointerValue<Entry>(newEntry).Schedule).Next($.markAsStructValue($.cloneStructValue(now))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as time.Time));
							;(c$ as Cron).entries = $.appendOne((c$ as Cron).entries, newEntry, $.appendZeros.nil)
							break
						}
					case 2:
						{
							const __goscriptSelect0Result = __goscriptSelect0Value
							await $.chanSend((c$ as Cron).snapshot, (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Cron).entrySnapshot() : Cron.prototype.entrySnapshot.call(c)))
							continue
							break
						}
					case 3:
						{
							const __goscriptSelect0Result = __goscriptSelect0Value
							time.Timer.prototype.Stop.call($.pointerValue<time.Timer>(timer))
							return
							break
						}
				}

				break
			}
		}
	}

	public async runWithRecovery(j: Job | null): globalThis.Promise<void> {
		const c: Cron | $.VarRef<Cron> | null = this;
		const __defer = new $.AsyncDisposableStack()
		try {
			__defer.defer(async () => { await (async (): globalThis.Promise<void> => {
				{
					let r = $.recover()
					if (r != null) {
						const size: number = 65536
						let buf: $.Slice<number> = $.makeSlice<number>(65536, undefined, "byte")
						buf = $.goSlice(buf, undefined, runtime.Stack(buf, false))
						await Cron.prototype.logf.call(c, "cron: panic running job: %v\n%s", $.arrayToSlice<any>([r, $.interfaceValue(buf, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))]))
					}
				}
			})() })
			void (__goscriptAwait = (j !== null && (j as any).__isVarRef !== true && (j as any).__goValue === undefined ? (j as Exclude<Job, null>) : $.pointerValue<Exclude<Job, null>>(j)).Run(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			await __defer.dispose()
		} catch (e) {
			await __defer.disposePanic(e)
			if (!$.recovered(e)) {
				throw e
			}
		}
	}

	static __typeInfo = $.registerStructType(
		"cron.Cron",
		() => new Cron(),
		() => [$.methodSignature("AddFunc", [["spec", /* @__PURE__ */ $.basicType("string")], ["cmd", ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)]], ["error"], true), $.methodSignature("AddJob", [["spec", /* @__PURE__ */ $.basicType("string")], ["cmd", "cron.Job"]], ["error"], true), $.methodSignature("Entries", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("cron.Entry"))], true), $.methodSignature("Location", [], [/* @__PURE__ */ $.pointerType("time.Location")], true), $.methodSignature("Run", [], [], true), $.methodSignature("Schedule", [["schedule", "cron.Schedule"], ["cmd", "cron.Job"]], [], true), $.methodSignature("Start", [], [], true), $.methodSignature("Stop", [], [], true), $.methodSignature("entrySnapshot", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("cron.Entry"))], true), $.methodSignature("logf", [["format", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [], true), $.methodSignature("now", [], ["time.Time"], true), $.methodSignature("run", [], [], true), $.methodSignature("runWithRecovery", [["j", "cron.Job"]], [], true)],
		Cron,
		() => [/* @__PURE__ */ $.structField("entries", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("cron.Entry")), [0], 0, false, { pkgPath: "github.com/robfig/cron" }), /* @__PURE__ */ $.structField("stop", /* @__PURE__ */ $.channelType({ kind: $.TypeKind.Struct, methods: [], fields: [] }, "both"), [1], 24, false, { pkgPath: "github.com/robfig/cron" }), /* @__PURE__ */ $.structField("add", /* @__PURE__ */ $.channelType(/* @__PURE__ */ $.pointerType("cron.Entry"), "both"), [2], 32, false, { pkgPath: "github.com/robfig/cron" }), /* @__PURE__ */ $.structField("snapshot", /* @__PURE__ */ $.channelType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("cron.Entry")), "both"), [3], 40, false, { pkgPath: "github.com/robfig/cron" }), /* @__PURE__ */ $.structField("running", /* @__PURE__ */ $.basicType("bool"), [4], 48, false, { pkgPath: "github.com/robfig/cron" }), /* @__PURE__ */ $.structField("ErrorLog", /* @__PURE__ */ $.pointerType("log.Logger"), [5], 56, true), /* @__PURE__ */ $.structField("location", /* @__PURE__ */ $.pointerType("time.Location"), [6], 64, false, { pkgPath: "github.com/robfig/cron" })]
	)
}

export class Entry {
	// The schedule on which this job should be run.
	public get Schedule(): Schedule | null {
		return this._fields.Schedule
	}

	public set Schedule(value: Schedule | null) {
		this._fields.Schedule = value
	}

	// The next time the job will run. This is the zero time if Cron has not been
	// started or this entry's schedule is unsatisfiable
	public get Next(): time.Time {
		return this._fields.Next
	}

	public set Next(value: time.Time) {
		this._fields.Next = value
	}

	// The last time this job was run. This is the zero time if the job has never
	// been run.
	public get Prev(): time.Time {
		return this._fields.Prev
	}

	public set Prev(value: time.Time) {
		this._fields.Prev = value
	}

	// The Job to run.
	public get Job(): Job | null {
		return this._fields.Job
	}

	public set Job(value: Job | null) {
		this._fields.Job = value
	}

	public _fields: {
		Schedule: Schedule | null
		Next: time.Time
		Prev: time.Time
		Job: Job | null
	}

	constructor(init?: Partial<{Schedule?: Schedule | null, Next?: time.Time, Prev?: time.Time, Job?: Job | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Schedule: init?.Schedule ?? (null! as Schedule | null),
			Next: init?.Next ? $.markAsStructValue($.cloneStructValue(init.Next)) : $.markAsStructValue(new time.Time()),
			Prev: init?.Prev ? $.markAsStructValue($.cloneStructValue(init.Prev)) : $.markAsStructValue(new time.Time()),
			Job: init?.Job ?? (null! as Job | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Entry {
		return new Entry(this, true)
	}

	public __goscriptAssign(source: Entry): void {
		const target = this._fields
		const values = source._fields
		target.Schedule = $.assignFieldValue(target.Schedule, values.Schedule, "cron.Schedule")
		$.assignStruct(target.Next, values.Next)
		$.assignStruct(target.Prev, values.Prev)
		target.Job = $.assignFieldValue(target.Job, values.Job, "cron.Job")
	}

	static __typeInfo = $.registerStructType(
		"cron.Entry",
		() => new Entry(),
		() => [],
		Entry,
		() => [/* @__PURE__ */ $.structField("Schedule", "cron.Schedule", [0], 0, true), /* @__PURE__ */ $.structField("Next", "time.Time", [1], 16, true), /* @__PURE__ */ $.structField("Prev", "time.Time", [2], 40, true), /* @__PURE__ */ $.structField("Job", "cron.Job", [3], 64, true)]
	)
}

export function byTime_Len(s: byTime): number {
	return $.sliceLen((s as byTime))
}

export function byTime_Swap(s: byTime, i: number, j: number): void {
	let __goscriptAssign0_0: Entry | $.VarRef<Entry> | null = $.arrayIndex(s!, j)
	let __goscriptAssign0_1: Entry | $.VarRef<Entry> | null = $.arrayIndex(s!, i)
	$.sliceElems(s!)[$.sliceSlot(s!, i)] = __goscriptAssign0_0
	$.sliceElems(s!)[$.sliceSlot(s!, j)] = __goscriptAssign0_1
}

export function byTime_Less(s: byTime, i: number, j: number): boolean {
	// Two zero times should return false.
	// Otherwise, zero is "greater" than any other time.
	// (To sort it at the end of the list.)
	if ($.markAsStructValue($.cloneStructValue($.pointerValue<Entry>($.arrayIndex(s!, i)).Next)).IsZero()) {
		return false
	}
	if ($.markAsStructValue($.cloneStructValue($.pointerValue<Entry>($.arrayIndex(s!, j)).Next)).IsZero()) {
		return true
	}
	return $.markAsStructValue($.cloneStructValue($.pointerValue<Entry>($.arrayIndex(s!, i)).Next)).Before($.markAsStructValue($.cloneStructValue($.pointerValue<Entry>($.arrayIndex(s!, j)).Next)))
}

export function New(): Cron | $.VarRef<Cron> | null {
	return NewWithLocation($.markAsStructValue($.cloneStructValue(time.Now())).Location())
}

export function NewWithLocation(location: time.Location | $.VarRef<time.Location> | null): Cron | $.VarRef<Cron> | null {
	return new Cron({entries: null, add: $.makeChannel<Entry | $.VarRef<Entry> | null>(0, null! as Entry | $.VarRef<Entry> | null, "both"), stop: $.makeChannel<{}>(0, {}, "both"), snapshot: $.makeChannel<$.Slice<Entry | $.VarRef<Entry> | null>>(0, null! as $.Slice<Entry | $.VarRef<Entry> | null>, "both"), running: false, ErrorLog: null, location: location})
}

export async function FuncJob_Run(f: FuncJob | null): globalThis.Promise<void> {
	void (__goscriptAwait = f!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({Run: (receiver: any, ...args: any[]) => (FuncJob_Run as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (({ kind: $.TypeKind.Function, name: "cron.FuncJob", params: [], results: [] } as $.FunctionTypeInfo))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("Run")])
}

var __goscriptStatic3$value: any
function __goscriptStatic3(): any {
	return __goscriptStatic3$value ??= ({Len: (receiver: any, ...args: any[]) => (byTime_Len as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Less: (receiver: any, ...args: any[]) => (byTime_Less as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Swap: (receiver: any, ...args: any[]) => (byTime_Swap as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic4$value: any
function __goscriptStatic4(): any {
	return __goscriptStatic4$value ??= (/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("cron.Entry"), "cron.byTime"))
}

var __goscriptStatic5$value: any
function __goscriptStatic5(): any {
	return __goscriptStatic5$value ??= ([$.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Less", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Swap", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]])])
}

var __goscriptAwait: any
