// Generated file based on client.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/context/index.js"

import * as gomock from "@goscript/github.com/golang/mock/gomock/index.js"

import * as yarpc from "@goscript/go.uber.org/yarpc/index.js"

import * as workflowserviceclient from "@goscript/go.uber.org/cadence/.gen/go/cadence/workflowserviceclient/index.js"

import * as shared from "@goscript/go.uber.org/cadence/.gen/go/shared/index.js"
import "@goscript/context/index.js"
import "@goscript/github.com/golang/mock/gomock/index.js"
import "@goscript/go.uber.org/yarpc/index.js"
import "@goscript/go.uber.org/cadence/.gen/go/cadence/workflowserviceclient/index.js"
import "@goscript/go.uber.org/cadence/.gen/go/shared/index.js"

$.registerTypePackagePath("go.uber.org/cadence/.gen/go/cadence/workflowservicetest", ["workflowservicetest.MockClient", "workflowservicetest._MockClientRecorder"])

export class MockClient {
	public get ctrl(): gomock.Controller | $.VarRef<gomock.Controller> | null {
		return this._fields.ctrl
	}

	public set ctrl(value: gomock.Controller | $.VarRef<gomock.Controller> | null) {
		this._fields.ctrl = value
	}

	public get recorder(): _MockClientRecorder | $.VarRef<_MockClientRecorder> | null {
		return this._fields.recorder
	}

	public set recorder(value: _MockClientRecorder | $.VarRef<_MockClientRecorder> | null) {
		this._fields.recorder = value
	}

	public _fields: {
		ctrl: gomock.Controller | $.VarRef<gomock.Controller> | null
		recorder: _MockClientRecorder | $.VarRef<_MockClientRecorder> | null
	}

	constructor(init?: Partial<{ctrl?: gomock.Controller | $.VarRef<gomock.Controller> | null, recorder?: _MockClientRecorder | $.VarRef<_MockClientRecorder> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			ctrl: init?.ctrl ?? (null! as gomock.Controller | $.VarRef<gomock.Controller> | null),
			recorder: init?.recorder ?? (null! as _MockClientRecorder | $.VarRef<_MockClientRecorder> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): MockClient {
		return new MockClient(this, true)
	}

	public __goscriptAssign(source: MockClient): void {
		const target = this._fields
		const values = source._fields
		target.ctrl = values.ctrl
		target.recorder = values.recorder
	}

	public async BackfillSchedule(ctx: context.Context | null, _Request: shared.BackfillScheduleRequest | $.VarRef<shared.BackfillScheduleRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.BackfillScheduleResponse | $.VarRef<shared.BackfillScheduleResponse> | null, $.GoError]> {
		const m: MockClient | $.VarRef<MockClient> | null = this;
		let success: shared.BackfillScheduleResponse | $.VarRef<shared.BackfillScheduleResponse> | null = null! as shared.BackfillScheduleResponse | $.VarRef<shared.BackfillScheduleResponse> | null
		let err: $.GoError = null! as $.GoError

		let args: $.Slice<any> = $.arrayToSlice<any>([(ctx as any), $.interfaceValue(_Request, "*shared.BackfillScheduleRequest", /* @__PURE__ */ $.pointerType("shared.BackfillScheduleRequest"))])
		for (let __goscriptRangeTarget0 = opts, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
			let o = ((__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as yarpc.CallOption)).clone()
			args = $.appendOne(args, $.interfaceValue((o).clone(), "yarpc.CallOption", "yarpc.CallOption"), $.appendZeros.nil)
		}
		let i = 0
		let ret: $.Slice<any> = await gomock.Controller.prototype.Call.call($.pointerValue<MockClient>(m).ctrl, $.interfaceValue(m, "*workflowservicetest.MockClient", /* @__PURE__ */ $.pointerType("workflowservicetest.MockClient")), "BackfillSchedule", args)
		let __goscriptTuple0: any = $.typeAssertTuple<shared.BackfillScheduleResponse | $.VarRef<shared.BackfillScheduleResponse> | null>($.arrayIndex(ret!, i), /* @__PURE__ */ $.pointerType("shared.BackfillScheduleResponse"))
		success = __goscriptTuple0[0]
		i++
		let __goscriptTuple1: any = $.typeAssertTuple<$.GoError>($.arrayIndex(ret!, i), "error")
		err = __goscriptTuple1[0]
		return [success, err]
	}

	public async CountWorkflowExecutions(ctx: context.Context | null, _CountRequest: shared.CountWorkflowExecutionsRequest | $.VarRef<shared.CountWorkflowExecutionsRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.CountWorkflowExecutionsResponse | $.VarRef<shared.CountWorkflowExecutionsResponse> | null, $.GoError]> {
		const m: MockClient | $.VarRef<MockClient> | null = this;
		let success: shared.CountWorkflowExecutionsResponse | $.VarRef<shared.CountWorkflowExecutionsResponse> | null = null! as shared.CountWorkflowExecutionsResponse | $.VarRef<shared.CountWorkflowExecutionsResponse> | null
		let err: $.GoError = null! as $.GoError

		let args: $.Slice<any> = $.arrayToSlice<any>([(ctx as any), $.interfaceValue(_CountRequest, "*shared.CountWorkflowExecutionsRequest", /* @__PURE__ */ $.pointerType("shared.CountWorkflowExecutionsRequest"))])
		for (let __goscriptRangeTarget1 = opts, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
			let o = ((__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as yarpc.CallOption)).clone()
			args = $.appendOne(args, $.interfaceValue((o).clone(), "yarpc.CallOption", "yarpc.CallOption"), $.appendZeros.nil)
		}
		let i = 0
		let ret: $.Slice<any> = await gomock.Controller.prototype.Call.call($.pointerValue<MockClient>(m).ctrl, $.interfaceValue(m, "*workflowservicetest.MockClient", /* @__PURE__ */ $.pointerType("workflowservicetest.MockClient")), "CountWorkflowExecutions", args)
		let __goscriptTuple2: any = $.typeAssertTuple<shared.CountWorkflowExecutionsResponse | $.VarRef<shared.CountWorkflowExecutionsResponse> | null>($.arrayIndex(ret!, i), /* @__PURE__ */ $.pointerType("shared.CountWorkflowExecutionsResponse"))
		success = __goscriptTuple2[0]
		i++
		let __goscriptTuple3: any = $.typeAssertTuple<$.GoError>($.arrayIndex(ret!, i), "error")
		err = __goscriptTuple3[0]
		return [success, err]
	}

	public async CreateSchedule(ctx: context.Context | null, _Request: shared.CreateScheduleRequest | $.VarRef<shared.CreateScheduleRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.CreateScheduleResponse | $.VarRef<shared.CreateScheduleResponse> | null, $.GoError]> {
		const m: MockClient | $.VarRef<MockClient> | null = this;
		let success: shared.CreateScheduleResponse | $.VarRef<shared.CreateScheduleResponse> | null = null! as shared.CreateScheduleResponse | $.VarRef<shared.CreateScheduleResponse> | null
		let err: $.GoError = null! as $.GoError

		let args: $.Slice<any> = $.arrayToSlice<any>([(ctx as any), $.interfaceValue(_Request, "*shared.CreateScheduleRequest", /* @__PURE__ */ $.pointerType("shared.CreateScheduleRequest"))])
		for (let __goscriptRangeTarget2 = opts, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow2.length; __rangeIndex++) {
			let o = ((__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + __rangeIndex] as yarpc.CallOption)).clone()
			args = $.appendOne(args, $.interfaceValue((o).clone(), "yarpc.CallOption", "yarpc.CallOption"), $.appendZeros.nil)
		}
		let i = 0
		let ret: $.Slice<any> = await gomock.Controller.prototype.Call.call($.pointerValue<MockClient>(m).ctrl, $.interfaceValue(m, "*workflowservicetest.MockClient", /* @__PURE__ */ $.pointerType("workflowservicetest.MockClient")), "CreateSchedule", args)
		let __goscriptTuple4: any = $.typeAssertTuple<shared.CreateScheduleResponse | $.VarRef<shared.CreateScheduleResponse> | null>($.arrayIndex(ret!, i), /* @__PURE__ */ $.pointerType("shared.CreateScheduleResponse"))
		success = __goscriptTuple4[0]
		i++
		let __goscriptTuple5: any = $.typeAssertTuple<$.GoError>($.arrayIndex(ret!, i), "error")
		err = __goscriptTuple5[0]
		return [success, err]
	}

	public async DeleteDomain(ctx: context.Context | null, _DeleteRequest: shared.DeleteDomainRequest | $.VarRef<shared.DeleteDomainRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<$.GoError> {
		const m: MockClient | $.VarRef<MockClient> | null = this;
		let err: $.GoError = null! as $.GoError

		let args: $.Slice<any> = $.arrayToSlice<any>([(ctx as any), $.interfaceValue(_DeleteRequest, "*shared.DeleteDomainRequest", /* @__PURE__ */ $.pointerType("shared.DeleteDomainRequest"))])
		for (let __goscriptRangeTarget3 = opts, __goscriptRangeWindow3 = $.sliceRange(__goscriptRangeTarget3), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow3.length; __rangeIndex++) {
			let o = ((__goscriptRangeWindow3.backing[__goscriptRangeWindow3.offset + __rangeIndex] as yarpc.CallOption)).clone()
			args = $.appendOne(args, $.interfaceValue((o).clone(), "yarpc.CallOption", "yarpc.CallOption"), $.appendZeros.nil)
		}
		let i = 0
		let ret: $.Slice<any> = await gomock.Controller.prototype.Call.call($.pointerValue<MockClient>(m).ctrl, $.interfaceValue(m, "*workflowservicetest.MockClient", /* @__PURE__ */ $.pointerType("workflowservicetest.MockClient")), "DeleteDomain", args)
		let __goscriptTuple6: any = $.typeAssertTuple<$.GoError>($.arrayIndex(ret!, i), "error")
		err = __goscriptTuple6[0]
		return err
	}

	public async DeleteSchedule(ctx: context.Context | null, _Request: shared.DeleteScheduleRequest | $.VarRef<shared.DeleteScheduleRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.DeleteScheduleResponse | $.VarRef<shared.DeleteScheduleResponse> | null, $.GoError]> {
		const m: MockClient | $.VarRef<MockClient> | null = this;
		let success: shared.DeleteScheduleResponse | $.VarRef<shared.DeleteScheduleResponse> | null = null! as shared.DeleteScheduleResponse | $.VarRef<shared.DeleteScheduleResponse> | null
		let err: $.GoError = null! as $.GoError

		let args: $.Slice<any> = $.arrayToSlice<any>([(ctx as any), $.interfaceValue(_Request, "*shared.DeleteScheduleRequest", /* @__PURE__ */ $.pointerType("shared.DeleteScheduleRequest"))])
		for (let __goscriptRangeTarget4 = opts, __goscriptRangeWindow4 = $.sliceRange(__goscriptRangeTarget4), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow4.length; __rangeIndex++) {
			let o = ((__goscriptRangeWindow4.backing[__goscriptRangeWindow4.offset + __rangeIndex] as yarpc.CallOption)).clone()
			args = $.appendOne(args, $.interfaceValue((o).clone(), "yarpc.CallOption", "yarpc.CallOption"), $.appendZeros.nil)
		}
		let i = 0
		let ret: $.Slice<any> = await gomock.Controller.prototype.Call.call($.pointerValue<MockClient>(m).ctrl, $.interfaceValue(m, "*workflowservicetest.MockClient", /* @__PURE__ */ $.pointerType("workflowservicetest.MockClient")), "DeleteSchedule", args)
		let __goscriptTuple7: any = $.typeAssertTuple<shared.DeleteScheduleResponse | $.VarRef<shared.DeleteScheduleResponse> | null>($.arrayIndex(ret!, i), /* @__PURE__ */ $.pointerType("shared.DeleteScheduleResponse"))
		success = __goscriptTuple7[0]
		i++
		let __goscriptTuple8: any = $.typeAssertTuple<$.GoError>($.arrayIndex(ret!, i), "error")
		err = __goscriptTuple8[0]
		return [success, err]
	}

	public async DeprecateDomain(ctx: context.Context | null, _DeprecateRequest: shared.DeprecateDomainRequest | $.VarRef<shared.DeprecateDomainRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<$.GoError> {
		const m: MockClient | $.VarRef<MockClient> | null = this;
		let err: $.GoError = null! as $.GoError

		let args: $.Slice<any> = $.arrayToSlice<any>([(ctx as any), $.interfaceValue(_DeprecateRequest, "*shared.DeprecateDomainRequest", /* @__PURE__ */ $.pointerType("shared.DeprecateDomainRequest"))])
		for (let __goscriptRangeTarget5 = opts, __goscriptRangeWindow5 = $.sliceRange(__goscriptRangeTarget5), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow5.length; __rangeIndex++) {
			let o = ((__goscriptRangeWindow5.backing[__goscriptRangeWindow5.offset + __rangeIndex] as yarpc.CallOption)).clone()
			args = $.appendOne(args, $.interfaceValue((o).clone(), "yarpc.CallOption", "yarpc.CallOption"), $.appendZeros.nil)
		}
		let i = 0
		let ret: $.Slice<any> = await gomock.Controller.prototype.Call.call($.pointerValue<MockClient>(m).ctrl, $.interfaceValue(m, "*workflowservicetest.MockClient", /* @__PURE__ */ $.pointerType("workflowservicetest.MockClient")), "DeprecateDomain", args)
		let __goscriptTuple9: any = $.typeAssertTuple<$.GoError>($.arrayIndex(ret!, i), "error")
		err = __goscriptTuple9[0]
		return err
	}

	public async DescribeDomain(ctx: context.Context | null, _DescribeRequest: shared.DescribeDomainRequest | $.VarRef<shared.DescribeDomainRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.DescribeDomainResponse | $.VarRef<shared.DescribeDomainResponse> | null, $.GoError]> {
		const m: MockClient | $.VarRef<MockClient> | null = this;
		let success: shared.DescribeDomainResponse | $.VarRef<shared.DescribeDomainResponse> | null = null! as shared.DescribeDomainResponse | $.VarRef<shared.DescribeDomainResponse> | null
		let err: $.GoError = null! as $.GoError

		let args: $.Slice<any> = $.arrayToSlice<any>([(ctx as any), $.interfaceValue(_DescribeRequest, "*shared.DescribeDomainRequest", /* @__PURE__ */ $.pointerType("shared.DescribeDomainRequest"))])
		for (let __goscriptRangeTarget6 = opts, __goscriptRangeWindow6 = $.sliceRange(__goscriptRangeTarget6), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow6.length; __rangeIndex++) {
			let o = ((__goscriptRangeWindow6.backing[__goscriptRangeWindow6.offset + __rangeIndex] as yarpc.CallOption)).clone()
			args = $.appendOne(args, $.interfaceValue((o).clone(), "yarpc.CallOption", "yarpc.CallOption"), $.appendZeros.nil)
		}
		let i = 0
		let ret: $.Slice<any> = await gomock.Controller.prototype.Call.call($.pointerValue<MockClient>(m).ctrl, $.interfaceValue(m, "*workflowservicetest.MockClient", /* @__PURE__ */ $.pointerType("workflowservicetest.MockClient")), "DescribeDomain", args)
		let __goscriptTuple10: any = $.typeAssertTuple<shared.DescribeDomainResponse | $.VarRef<shared.DescribeDomainResponse> | null>($.arrayIndex(ret!, i), /* @__PURE__ */ $.pointerType("shared.DescribeDomainResponse"))
		success = __goscriptTuple10[0]
		i++
		let __goscriptTuple11: any = $.typeAssertTuple<$.GoError>($.arrayIndex(ret!, i), "error")
		err = __goscriptTuple11[0]
		return [success, err]
	}

	public async DescribeSchedule(ctx: context.Context | null, _Request: shared.DescribeScheduleRequest | $.VarRef<shared.DescribeScheduleRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.DescribeScheduleResponse | $.VarRef<shared.DescribeScheduleResponse> | null, $.GoError]> {
		const m: MockClient | $.VarRef<MockClient> | null = this;
		let success: shared.DescribeScheduleResponse | $.VarRef<shared.DescribeScheduleResponse> | null = null! as shared.DescribeScheduleResponse | $.VarRef<shared.DescribeScheduleResponse> | null
		let err: $.GoError = null! as $.GoError

		let args: $.Slice<any> = $.arrayToSlice<any>([(ctx as any), $.interfaceValue(_Request, "*shared.DescribeScheduleRequest", /* @__PURE__ */ $.pointerType("shared.DescribeScheduleRequest"))])
		for (let __goscriptRangeTarget7 = opts, __goscriptRangeWindow7 = $.sliceRange(__goscriptRangeTarget7), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow7.length; __rangeIndex++) {
			let o = ((__goscriptRangeWindow7.backing[__goscriptRangeWindow7.offset + __rangeIndex] as yarpc.CallOption)).clone()
			args = $.appendOne(args, $.interfaceValue((o).clone(), "yarpc.CallOption", "yarpc.CallOption"), $.appendZeros.nil)
		}
		let i = 0
		let ret: $.Slice<any> = await gomock.Controller.prototype.Call.call($.pointerValue<MockClient>(m).ctrl, $.interfaceValue(m, "*workflowservicetest.MockClient", /* @__PURE__ */ $.pointerType("workflowservicetest.MockClient")), "DescribeSchedule", args)
		let __goscriptTuple12: any = $.typeAssertTuple<shared.DescribeScheduleResponse | $.VarRef<shared.DescribeScheduleResponse> | null>($.arrayIndex(ret!, i), /* @__PURE__ */ $.pointerType("shared.DescribeScheduleResponse"))
		success = __goscriptTuple12[0]
		i++
		let __goscriptTuple13: any = $.typeAssertTuple<$.GoError>($.arrayIndex(ret!, i), "error")
		err = __goscriptTuple13[0]
		return [success, err]
	}

	public async DescribeTaskList(ctx: context.Context | null, _Request: shared.DescribeTaskListRequest | $.VarRef<shared.DescribeTaskListRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.DescribeTaskListResponse | $.VarRef<shared.DescribeTaskListResponse> | null, $.GoError]> {
		const m: MockClient | $.VarRef<MockClient> | null = this;
		let success: shared.DescribeTaskListResponse | $.VarRef<shared.DescribeTaskListResponse> | null = null! as shared.DescribeTaskListResponse | $.VarRef<shared.DescribeTaskListResponse> | null
		let err: $.GoError = null! as $.GoError

		let args: $.Slice<any> = $.arrayToSlice<any>([(ctx as any), $.interfaceValue(_Request, "*shared.DescribeTaskListRequest", /* @__PURE__ */ $.pointerType("shared.DescribeTaskListRequest"))])
		for (let __goscriptRangeTarget8 = opts, __goscriptRangeWindow8 = $.sliceRange(__goscriptRangeTarget8), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow8.length; __rangeIndex++) {
			let o = ((__goscriptRangeWindow8.backing[__goscriptRangeWindow8.offset + __rangeIndex] as yarpc.CallOption)).clone()
			args = $.appendOne(args, $.interfaceValue((o).clone(), "yarpc.CallOption", "yarpc.CallOption"), $.appendZeros.nil)
		}
		let i = 0
		let ret: $.Slice<any> = await gomock.Controller.prototype.Call.call($.pointerValue<MockClient>(m).ctrl, $.interfaceValue(m, "*workflowservicetest.MockClient", /* @__PURE__ */ $.pointerType("workflowservicetest.MockClient")), "DescribeTaskList", args)
		let __goscriptTuple14: any = $.typeAssertTuple<shared.DescribeTaskListResponse | $.VarRef<shared.DescribeTaskListResponse> | null>($.arrayIndex(ret!, i), /* @__PURE__ */ $.pointerType("shared.DescribeTaskListResponse"))
		success = __goscriptTuple14[0]
		i++
		let __goscriptTuple15: any = $.typeAssertTuple<$.GoError>($.arrayIndex(ret!, i), "error")
		err = __goscriptTuple15[0]
		return [success, err]
	}

	public async DescribeWorkflowExecution(ctx: context.Context | null, _DescribeRequest: shared.DescribeWorkflowExecutionRequest | $.VarRef<shared.DescribeWorkflowExecutionRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.DescribeWorkflowExecutionResponse | $.VarRef<shared.DescribeWorkflowExecutionResponse> | null, $.GoError]> {
		const m: MockClient | $.VarRef<MockClient> | null = this;
		let success: shared.DescribeWorkflowExecutionResponse | $.VarRef<shared.DescribeWorkflowExecutionResponse> | null = null! as shared.DescribeWorkflowExecutionResponse | $.VarRef<shared.DescribeWorkflowExecutionResponse> | null
		let err: $.GoError = null! as $.GoError

		let args: $.Slice<any> = $.arrayToSlice<any>([(ctx as any), $.interfaceValue(_DescribeRequest, "*shared.DescribeWorkflowExecutionRequest", /* @__PURE__ */ $.pointerType("shared.DescribeWorkflowExecutionRequest"))])
		for (let __goscriptRangeTarget9 = opts, __goscriptRangeWindow9 = $.sliceRange(__goscriptRangeTarget9), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow9.length; __rangeIndex++) {
			let o = ((__goscriptRangeWindow9.backing[__goscriptRangeWindow9.offset + __rangeIndex] as yarpc.CallOption)).clone()
			args = $.appendOne(args, $.interfaceValue((o).clone(), "yarpc.CallOption", "yarpc.CallOption"), $.appendZeros.nil)
		}
		let i = 0
		let ret: $.Slice<any> = await gomock.Controller.prototype.Call.call($.pointerValue<MockClient>(m).ctrl, $.interfaceValue(m, "*workflowservicetest.MockClient", /* @__PURE__ */ $.pointerType("workflowservicetest.MockClient")), "DescribeWorkflowExecution", args)
		let __goscriptTuple16: any = $.typeAssertTuple<shared.DescribeWorkflowExecutionResponse | $.VarRef<shared.DescribeWorkflowExecutionResponse> | null>($.arrayIndex(ret!, i), /* @__PURE__ */ $.pointerType("shared.DescribeWorkflowExecutionResponse"))
		success = __goscriptTuple16[0]
		i++
		let __goscriptTuple17: any = $.typeAssertTuple<$.GoError>($.arrayIndex(ret!, i), "error")
		err = __goscriptTuple17[0]
		return [success, err]
	}

	public async DiagnoseWorkflowExecution(ctx: context.Context | null, _DiagnoseRequest: shared.DiagnoseWorkflowExecutionRequest | $.VarRef<shared.DiagnoseWorkflowExecutionRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.DiagnoseWorkflowExecutionResponse | $.VarRef<shared.DiagnoseWorkflowExecutionResponse> | null, $.GoError]> {
		const m: MockClient | $.VarRef<MockClient> | null = this;
		let success: shared.DiagnoseWorkflowExecutionResponse | $.VarRef<shared.DiagnoseWorkflowExecutionResponse> | null = null! as shared.DiagnoseWorkflowExecutionResponse | $.VarRef<shared.DiagnoseWorkflowExecutionResponse> | null
		let err: $.GoError = null! as $.GoError

		let args: $.Slice<any> = $.arrayToSlice<any>([(ctx as any), $.interfaceValue(_DiagnoseRequest, "*shared.DiagnoseWorkflowExecutionRequest", /* @__PURE__ */ $.pointerType("shared.DiagnoseWorkflowExecutionRequest"))])
		for (let __goscriptRangeTarget10 = opts, __goscriptRangeWindow10 = $.sliceRange(__goscriptRangeTarget10), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow10.length; __rangeIndex++) {
			let o = ((__goscriptRangeWindow10.backing[__goscriptRangeWindow10.offset + __rangeIndex] as yarpc.CallOption)).clone()
			args = $.appendOne(args, $.interfaceValue((o).clone(), "yarpc.CallOption", "yarpc.CallOption"), $.appendZeros.nil)
		}
		let i = 0
		let ret: $.Slice<any> = await gomock.Controller.prototype.Call.call($.pointerValue<MockClient>(m).ctrl, $.interfaceValue(m, "*workflowservicetest.MockClient", /* @__PURE__ */ $.pointerType("workflowservicetest.MockClient")), "DiagnoseWorkflowExecution", args)
		let __goscriptTuple18: any = $.typeAssertTuple<shared.DiagnoseWorkflowExecutionResponse | $.VarRef<shared.DiagnoseWorkflowExecutionResponse> | null>($.arrayIndex(ret!, i), /* @__PURE__ */ $.pointerType("shared.DiagnoseWorkflowExecutionResponse"))
		success = __goscriptTuple18[0]
		i++
		let __goscriptTuple19: any = $.typeAssertTuple<$.GoError>($.arrayIndex(ret!, i), "error")
		err = __goscriptTuple19[0]
		return [success, err]
	}

	public EXPECT(): _MockClientRecorder | $.VarRef<_MockClientRecorder> | null {
		const m: MockClient | $.VarRef<MockClient> | null = this;
		return $.pointerValue<MockClient>(m).recorder
	}

	public async FailoverDomain(ctx: context.Context | null, _FailoverRequest: shared.FailoverDomainRequest | $.VarRef<shared.FailoverDomainRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.FailoverDomainResponse | $.VarRef<shared.FailoverDomainResponse> | null, $.GoError]> {
		const m: MockClient | $.VarRef<MockClient> | null = this;
		let success: shared.FailoverDomainResponse | $.VarRef<shared.FailoverDomainResponse> | null = null! as shared.FailoverDomainResponse | $.VarRef<shared.FailoverDomainResponse> | null
		let err: $.GoError = null! as $.GoError

		let args: $.Slice<any> = $.arrayToSlice<any>([(ctx as any), $.interfaceValue(_FailoverRequest, "*shared.FailoverDomainRequest", /* @__PURE__ */ $.pointerType("shared.FailoverDomainRequest"))])
		for (let __goscriptRangeTarget11 = opts, __goscriptRangeWindow11 = $.sliceRange(__goscriptRangeTarget11), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow11.length; __rangeIndex++) {
			let o = ((__goscriptRangeWindow11.backing[__goscriptRangeWindow11.offset + __rangeIndex] as yarpc.CallOption)).clone()
			args = $.appendOne(args, $.interfaceValue((o).clone(), "yarpc.CallOption", "yarpc.CallOption"), $.appendZeros.nil)
		}
		let i = 0
		let ret: $.Slice<any> = await gomock.Controller.prototype.Call.call($.pointerValue<MockClient>(m).ctrl, $.interfaceValue(m, "*workflowservicetest.MockClient", /* @__PURE__ */ $.pointerType("workflowservicetest.MockClient")), "FailoverDomain", args)
		let __goscriptTuple20: any = $.typeAssertTuple<shared.FailoverDomainResponse | $.VarRef<shared.FailoverDomainResponse> | null>($.arrayIndex(ret!, i), /* @__PURE__ */ $.pointerType("shared.FailoverDomainResponse"))
		success = __goscriptTuple20[0]
		i++
		let __goscriptTuple21: any = $.typeAssertTuple<$.GoError>($.arrayIndex(ret!, i), "error")
		err = __goscriptTuple21[0]
		return [success, err]
	}

	public async GetClusterInfo(ctx: context.Context | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.ClusterInfo | $.VarRef<shared.ClusterInfo> | null, $.GoError]> {
		const m: MockClient | $.VarRef<MockClient> | null = this;
		let success: shared.ClusterInfo | $.VarRef<shared.ClusterInfo> | null = null! as shared.ClusterInfo | $.VarRef<shared.ClusterInfo> | null
		let err: $.GoError = null! as $.GoError

		let args: $.Slice<any> = $.arrayToSlice<any>([(ctx as any)])
		for (let __goscriptRangeTarget12 = opts, __goscriptRangeWindow12 = $.sliceRange(__goscriptRangeTarget12), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow12.length; __rangeIndex++) {
			let o = ((__goscriptRangeWindow12.backing[__goscriptRangeWindow12.offset + __rangeIndex] as yarpc.CallOption)).clone()
			args = $.appendOne(args, $.interfaceValue((o).clone(), "yarpc.CallOption", "yarpc.CallOption"), $.appendZeros.nil)
		}
		let i = 0
		let ret: $.Slice<any> = await gomock.Controller.prototype.Call.call($.pointerValue<MockClient>(m).ctrl, $.interfaceValue(m, "*workflowservicetest.MockClient", /* @__PURE__ */ $.pointerType("workflowservicetest.MockClient")), "GetClusterInfo", args)
		let __goscriptTuple22: any = $.typeAssertTuple<shared.ClusterInfo | $.VarRef<shared.ClusterInfo> | null>($.arrayIndex(ret!, i), /* @__PURE__ */ $.pointerType("shared.ClusterInfo"))
		success = __goscriptTuple22[0]
		i++
		let __goscriptTuple23: any = $.typeAssertTuple<$.GoError>($.arrayIndex(ret!, i), "error")
		err = __goscriptTuple23[0]
		return [success, err]
	}

	public async GetSearchAttributes(ctx: context.Context | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.GetSearchAttributesResponse | $.VarRef<shared.GetSearchAttributesResponse> | null, $.GoError]> {
		const m: MockClient | $.VarRef<MockClient> | null = this;
		let success: shared.GetSearchAttributesResponse | $.VarRef<shared.GetSearchAttributesResponse> | null = null! as shared.GetSearchAttributesResponse | $.VarRef<shared.GetSearchAttributesResponse> | null
		let err: $.GoError = null! as $.GoError

		let args: $.Slice<any> = $.arrayToSlice<any>([(ctx as any)])
		for (let __goscriptRangeTarget13 = opts, __goscriptRangeWindow13 = $.sliceRange(__goscriptRangeTarget13), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow13.length; __rangeIndex++) {
			let o = ((__goscriptRangeWindow13.backing[__goscriptRangeWindow13.offset + __rangeIndex] as yarpc.CallOption)).clone()
			args = $.appendOne(args, $.interfaceValue((o).clone(), "yarpc.CallOption", "yarpc.CallOption"), $.appendZeros.nil)
		}
		let i = 0
		let ret: $.Slice<any> = await gomock.Controller.prototype.Call.call($.pointerValue<MockClient>(m).ctrl, $.interfaceValue(m, "*workflowservicetest.MockClient", /* @__PURE__ */ $.pointerType("workflowservicetest.MockClient")), "GetSearchAttributes", args)
		let __goscriptTuple24: any = $.typeAssertTuple<shared.GetSearchAttributesResponse | $.VarRef<shared.GetSearchAttributesResponse> | null>($.arrayIndex(ret!, i), /* @__PURE__ */ $.pointerType("shared.GetSearchAttributesResponse"))
		success = __goscriptTuple24[0]
		i++
		let __goscriptTuple25: any = $.typeAssertTuple<$.GoError>($.arrayIndex(ret!, i), "error")
		err = __goscriptTuple25[0]
		return [success, err]
	}

	public async GetTaskListsByDomain(ctx: context.Context | null, _Request: shared.GetTaskListsByDomainRequest | $.VarRef<shared.GetTaskListsByDomainRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.GetTaskListsByDomainResponse | $.VarRef<shared.GetTaskListsByDomainResponse> | null, $.GoError]> {
		const m: MockClient | $.VarRef<MockClient> | null = this;
		let success: shared.GetTaskListsByDomainResponse | $.VarRef<shared.GetTaskListsByDomainResponse> | null = null! as shared.GetTaskListsByDomainResponse | $.VarRef<shared.GetTaskListsByDomainResponse> | null
		let err: $.GoError = null! as $.GoError

		let args: $.Slice<any> = $.arrayToSlice<any>([(ctx as any), $.interfaceValue(_Request, "*shared.GetTaskListsByDomainRequest", /* @__PURE__ */ $.pointerType("shared.GetTaskListsByDomainRequest"))])
		for (let __goscriptRangeTarget14 = opts, __goscriptRangeWindow14 = $.sliceRange(__goscriptRangeTarget14), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow14.length; __rangeIndex++) {
			let o = ((__goscriptRangeWindow14.backing[__goscriptRangeWindow14.offset + __rangeIndex] as yarpc.CallOption)).clone()
			args = $.appendOne(args, $.interfaceValue((o).clone(), "yarpc.CallOption", "yarpc.CallOption"), $.appendZeros.nil)
		}
		let i = 0
		let ret: $.Slice<any> = await gomock.Controller.prototype.Call.call($.pointerValue<MockClient>(m).ctrl, $.interfaceValue(m, "*workflowservicetest.MockClient", /* @__PURE__ */ $.pointerType("workflowservicetest.MockClient")), "GetTaskListsByDomain", args)
		let __goscriptTuple26: any = $.typeAssertTuple<shared.GetTaskListsByDomainResponse | $.VarRef<shared.GetTaskListsByDomainResponse> | null>($.arrayIndex(ret!, i), /* @__PURE__ */ $.pointerType("shared.GetTaskListsByDomainResponse"))
		success = __goscriptTuple26[0]
		i++
		let __goscriptTuple27: any = $.typeAssertTuple<$.GoError>($.arrayIndex(ret!, i), "error")
		err = __goscriptTuple27[0]
		return [success, err]
	}

	public async GetWorkflowExecutionHistory(ctx: context.Context | null, _GetRequest: shared.GetWorkflowExecutionHistoryRequest | $.VarRef<shared.GetWorkflowExecutionHistoryRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.GetWorkflowExecutionHistoryResponse | $.VarRef<shared.GetWorkflowExecutionHistoryResponse> | null, $.GoError]> {
		const m: MockClient | $.VarRef<MockClient> | null = this;
		let success: shared.GetWorkflowExecutionHistoryResponse | $.VarRef<shared.GetWorkflowExecutionHistoryResponse> | null = null! as shared.GetWorkflowExecutionHistoryResponse | $.VarRef<shared.GetWorkflowExecutionHistoryResponse> | null
		let err: $.GoError = null! as $.GoError

		let args: $.Slice<any> = $.arrayToSlice<any>([(ctx as any), $.interfaceValue(_GetRequest, "*shared.GetWorkflowExecutionHistoryRequest", /* @__PURE__ */ $.pointerType("shared.GetWorkflowExecutionHistoryRequest"))])
		for (let __goscriptRangeTarget15 = opts, __goscriptRangeWindow15 = $.sliceRange(__goscriptRangeTarget15), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow15.length; __rangeIndex++) {
			let o = ((__goscriptRangeWindow15.backing[__goscriptRangeWindow15.offset + __rangeIndex] as yarpc.CallOption)).clone()
			args = $.appendOne(args, $.interfaceValue((o).clone(), "yarpc.CallOption", "yarpc.CallOption"), $.appendZeros.nil)
		}
		let i = 0
		let ret: $.Slice<any> = await gomock.Controller.prototype.Call.call($.pointerValue<MockClient>(m).ctrl, $.interfaceValue(m, "*workflowservicetest.MockClient", /* @__PURE__ */ $.pointerType("workflowservicetest.MockClient")), "GetWorkflowExecutionHistory", args)
		let __goscriptTuple28: any = $.typeAssertTuple<shared.GetWorkflowExecutionHistoryResponse | $.VarRef<shared.GetWorkflowExecutionHistoryResponse> | null>($.arrayIndex(ret!, i), /* @__PURE__ */ $.pointerType("shared.GetWorkflowExecutionHistoryResponse"))
		success = __goscriptTuple28[0]
		i++
		let __goscriptTuple29: any = $.typeAssertTuple<$.GoError>($.arrayIndex(ret!, i), "error")
		err = __goscriptTuple29[0]
		return [success, err]
	}

	public async ListArchivedWorkflowExecutions(ctx: context.Context | null, _ListRequest: shared.ListArchivedWorkflowExecutionsRequest | $.VarRef<shared.ListArchivedWorkflowExecutionsRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.ListArchivedWorkflowExecutionsResponse | $.VarRef<shared.ListArchivedWorkflowExecutionsResponse> | null, $.GoError]> {
		const m: MockClient | $.VarRef<MockClient> | null = this;
		let success: shared.ListArchivedWorkflowExecutionsResponse | $.VarRef<shared.ListArchivedWorkflowExecutionsResponse> | null = null! as shared.ListArchivedWorkflowExecutionsResponse | $.VarRef<shared.ListArchivedWorkflowExecutionsResponse> | null
		let err: $.GoError = null! as $.GoError

		let args: $.Slice<any> = $.arrayToSlice<any>([(ctx as any), $.interfaceValue(_ListRequest, "*shared.ListArchivedWorkflowExecutionsRequest", /* @__PURE__ */ $.pointerType("shared.ListArchivedWorkflowExecutionsRequest"))])
		for (let __goscriptRangeTarget16 = opts, __goscriptRangeWindow16 = $.sliceRange(__goscriptRangeTarget16), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow16.length; __rangeIndex++) {
			let o = ((__goscriptRangeWindow16.backing[__goscriptRangeWindow16.offset + __rangeIndex] as yarpc.CallOption)).clone()
			args = $.appendOne(args, $.interfaceValue((o).clone(), "yarpc.CallOption", "yarpc.CallOption"), $.appendZeros.nil)
		}
		let i = 0
		let ret: $.Slice<any> = await gomock.Controller.prototype.Call.call($.pointerValue<MockClient>(m).ctrl, $.interfaceValue(m, "*workflowservicetest.MockClient", /* @__PURE__ */ $.pointerType("workflowservicetest.MockClient")), "ListArchivedWorkflowExecutions", args)
		let __goscriptTuple30: any = $.typeAssertTuple<shared.ListArchivedWorkflowExecutionsResponse | $.VarRef<shared.ListArchivedWorkflowExecutionsResponse> | null>($.arrayIndex(ret!, i), /* @__PURE__ */ $.pointerType("shared.ListArchivedWorkflowExecutionsResponse"))
		success = __goscriptTuple30[0]
		i++
		let __goscriptTuple31: any = $.typeAssertTuple<$.GoError>($.arrayIndex(ret!, i), "error")
		err = __goscriptTuple31[0]
		return [success, err]
	}

	public async ListClosedWorkflowExecutions(ctx: context.Context | null, _ListRequest: shared.ListClosedWorkflowExecutionsRequest | $.VarRef<shared.ListClosedWorkflowExecutionsRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.ListClosedWorkflowExecutionsResponse | $.VarRef<shared.ListClosedWorkflowExecutionsResponse> | null, $.GoError]> {
		const m: MockClient | $.VarRef<MockClient> | null = this;
		let success: shared.ListClosedWorkflowExecutionsResponse | $.VarRef<shared.ListClosedWorkflowExecutionsResponse> | null = null! as shared.ListClosedWorkflowExecutionsResponse | $.VarRef<shared.ListClosedWorkflowExecutionsResponse> | null
		let err: $.GoError = null! as $.GoError

		let args: $.Slice<any> = $.arrayToSlice<any>([(ctx as any), $.interfaceValue(_ListRequest, "*shared.ListClosedWorkflowExecutionsRequest", /* @__PURE__ */ $.pointerType("shared.ListClosedWorkflowExecutionsRequest"))])
		for (let __goscriptRangeTarget17 = opts, __goscriptRangeWindow17 = $.sliceRange(__goscriptRangeTarget17), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow17.length; __rangeIndex++) {
			let o = ((__goscriptRangeWindow17.backing[__goscriptRangeWindow17.offset + __rangeIndex] as yarpc.CallOption)).clone()
			args = $.appendOne(args, $.interfaceValue((o).clone(), "yarpc.CallOption", "yarpc.CallOption"), $.appendZeros.nil)
		}
		let i = 0
		let ret: $.Slice<any> = await gomock.Controller.prototype.Call.call($.pointerValue<MockClient>(m).ctrl, $.interfaceValue(m, "*workflowservicetest.MockClient", /* @__PURE__ */ $.pointerType("workflowservicetest.MockClient")), "ListClosedWorkflowExecutions", args)
		let __goscriptTuple32: any = $.typeAssertTuple<shared.ListClosedWorkflowExecutionsResponse | $.VarRef<shared.ListClosedWorkflowExecutionsResponse> | null>($.arrayIndex(ret!, i), /* @__PURE__ */ $.pointerType("shared.ListClosedWorkflowExecutionsResponse"))
		success = __goscriptTuple32[0]
		i++
		let __goscriptTuple33: any = $.typeAssertTuple<$.GoError>($.arrayIndex(ret!, i), "error")
		err = __goscriptTuple33[0]
		return [success, err]
	}

	public async ListDomains(ctx: context.Context | null, _ListRequest: shared.ListDomainsRequest | $.VarRef<shared.ListDomainsRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.ListDomainsResponse | $.VarRef<shared.ListDomainsResponse> | null, $.GoError]> {
		const m: MockClient | $.VarRef<MockClient> | null = this;
		let success: shared.ListDomainsResponse | $.VarRef<shared.ListDomainsResponse> | null = null! as shared.ListDomainsResponse | $.VarRef<shared.ListDomainsResponse> | null
		let err: $.GoError = null! as $.GoError

		let args: $.Slice<any> = $.arrayToSlice<any>([(ctx as any), $.interfaceValue(_ListRequest, "*shared.ListDomainsRequest", /* @__PURE__ */ $.pointerType("shared.ListDomainsRequest"))])
		for (let __goscriptRangeTarget18 = opts, __goscriptRangeWindow18 = $.sliceRange(__goscriptRangeTarget18), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow18.length; __rangeIndex++) {
			let o = ((__goscriptRangeWindow18.backing[__goscriptRangeWindow18.offset + __rangeIndex] as yarpc.CallOption)).clone()
			args = $.appendOne(args, $.interfaceValue((o).clone(), "yarpc.CallOption", "yarpc.CallOption"), $.appendZeros.nil)
		}
		let i = 0
		let ret: $.Slice<any> = await gomock.Controller.prototype.Call.call($.pointerValue<MockClient>(m).ctrl, $.interfaceValue(m, "*workflowservicetest.MockClient", /* @__PURE__ */ $.pointerType("workflowservicetest.MockClient")), "ListDomains", args)
		let __goscriptTuple34: any = $.typeAssertTuple<shared.ListDomainsResponse | $.VarRef<shared.ListDomainsResponse> | null>($.arrayIndex(ret!, i), /* @__PURE__ */ $.pointerType("shared.ListDomainsResponse"))
		success = __goscriptTuple34[0]
		i++
		let __goscriptTuple35: any = $.typeAssertTuple<$.GoError>($.arrayIndex(ret!, i), "error")
		err = __goscriptTuple35[0]
		return [success, err]
	}

	public async ListFailoverHistory(ctx: context.Context | null, _ListRequest: shared.ListFailoverHistoryRequest | $.VarRef<shared.ListFailoverHistoryRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.ListFailoverHistoryResponse | $.VarRef<shared.ListFailoverHistoryResponse> | null, $.GoError]> {
		const m: MockClient | $.VarRef<MockClient> | null = this;
		let success: shared.ListFailoverHistoryResponse | $.VarRef<shared.ListFailoverHistoryResponse> | null = null! as shared.ListFailoverHistoryResponse | $.VarRef<shared.ListFailoverHistoryResponse> | null
		let err: $.GoError = null! as $.GoError

		let args: $.Slice<any> = $.arrayToSlice<any>([(ctx as any), $.interfaceValue(_ListRequest, "*shared.ListFailoverHistoryRequest", /* @__PURE__ */ $.pointerType("shared.ListFailoverHistoryRequest"))])
		for (let __goscriptRangeTarget19 = opts, __goscriptRangeWindow19 = $.sliceRange(__goscriptRangeTarget19), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow19.length; __rangeIndex++) {
			let o = ((__goscriptRangeWindow19.backing[__goscriptRangeWindow19.offset + __rangeIndex] as yarpc.CallOption)).clone()
			args = $.appendOne(args, $.interfaceValue((o).clone(), "yarpc.CallOption", "yarpc.CallOption"), $.appendZeros.nil)
		}
		let i = 0
		let ret: $.Slice<any> = await gomock.Controller.prototype.Call.call($.pointerValue<MockClient>(m).ctrl, $.interfaceValue(m, "*workflowservicetest.MockClient", /* @__PURE__ */ $.pointerType("workflowservicetest.MockClient")), "ListFailoverHistory", args)
		let __goscriptTuple36: any = $.typeAssertTuple<shared.ListFailoverHistoryResponse | $.VarRef<shared.ListFailoverHistoryResponse> | null>($.arrayIndex(ret!, i), /* @__PURE__ */ $.pointerType("shared.ListFailoverHistoryResponse"))
		success = __goscriptTuple36[0]
		i++
		let __goscriptTuple37: any = $.typeAssertTuple<$.GoError>($.arrayIndex(ret!, i), "error")
		err = __goscriptTuple37[0]
		return [success, err]
	}

	public async ListOpenWorkflowExecutions(ctx: context.Context | null, _ListRequest: shared.ListOpenWorkflowExecutionsRequest | $.VarRef<shared.ListOpenWorkflowExecutionsRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.ListOpenWorkflowExecutionsResponse | $.VarRef<shared.ListOpenWorkflowExecutionsResponse> | null, $.GoError]> {
		const m: MockClient | $.VarRef<MockClient> | null = this;
		let success: shared.ListOpenWorkflowExecutionsResponse | $.VarRef<shared.ListOpenWorkflowExecutionsResponse> | null = null! as shared.ListOpenWorkflowExecutionsResponse | $.VarRef<shared.ListOpenWorkflowExecutionsResponse> | null
		let err: $.GoError = null! as $.GoError

		let args: $.Slice<any> = $.arrayToSlice<any>([(ctx as any), $.interfaceValue(_ListRequest, "*shared.ListOpenWorkflowExecutionsRequest", /* @__PURE__ */ $.pointerType("shared.ListOpenWorkflowExecutionsRequest"))])
		for (let __goscriptRangeTarget20 = opts, __goscriptRangeWindow20 = $.sliceRange(__goscriptRangeTarget20), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow20.length; __rangeIndex++) {
			let o = ((__goscriptRangeWindow20.backing[__goscriptRangeWindow20.offset + __rangeIndex] as yarpc.CallOption)).clone()
			args = $.appendOne(args, $.interfaceValue((o).clone(), "yarpc.CallOption", "yarpc.CallOption"), $.appendZeros.nil)
		}
		let i = 0
		let ret: $.Slice<any> = await gomock.Controller.prototype.Call.call($.pointerValue<MockClient>(m).ctrl, $.interfaceValue(m, "*workflowservicetest.MockClient", /* @__PURE__ */ $.pointerType("workflowservicetest.MockClient")), "ListOpenWorkflowExecutions", args)
		let __goscriptTuple38: any = $.typeAssertTuple<shared.ListOpenWorkflowExecutionsResponse | $.VarRef<shared.ListOpenWorkflowExecutionsResponse> | null>($.arrayIndex(ret!, i), /* @__PURE__ */ $.pointerType("shared.ListOpenWorkflowExecutionsResponse"))
		success = __goscriptTuple38[0]
		i++
		let __goscriptTuple39: any = $.typeAssertTuple<$.GoError>($.arrayIndex(ret!, i), "error")
		err = __goscriptTuple39[0]
		return [success, err]
	}

	public async ListSchedules(ctx: context.Context | null, _Request: shared.ListSchedulesRequest | $.VarRef<shared.ListSchedulesRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.ListSchedulesResponse | $.VarRef<shared.ListSchedulesResponse> | null, $.GoError]> {
		const m: MockClient | $.VarRef<MockClient> | null = this;
		let success: shared.ListSchedulesResponse | $.VarRef<shared.ListSchedulesResponse> | null = null! as shared.ListSchedulesResponse | $.VarRef<shared.ListSchedulesResponse> | null
		let err: $.GoError = null! as $.GoError

		let args: $.Slice<any> = $.arrayToSlice<any>([(ctx as any), $.interfaceValue(_Request, "*shared.ListSchedulesRequest", /* @__PURE__ */ $.pointerType("shared.ListSchedulesRequest"))])
		for (let __goscriptRangeTarget21 = opts, __goscriptRangeWindow21 = $.sliceRange(__goscriptRangeTarget21), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow21.length; __rangeIndex++) {
			let o = ((__goscriptRangeWindow21.backing[__goscriptRangeWindow21.offset + __rangeIndex] as yarpc.CallOption)).clone()
			args = $.appendOne(args, $.interfaceValue((o).clone(), "yarpc.CallOption", "yarpc.CallOption"), $.appendZeros.nil)
		}
		let i = 0
		let ret: $.Slice<any> = await gomock.Controller.prototype.Call.call($.pointerValue<MockClient>(m).ctrl, $.interfaceValue(m, "*workflowservicetest.MockClient", /* @__PURE__ */ $.pointerType("workflowservicetest.MockClient")), "ListSchedules", args)
		let __goscriptTuple40: any = $.typeAssertTuple<shared.ListSchedulesResponse | $.VarRef<shared.ListSchedulesResponse> | null>($.arrayIndex(ret!, i), /* @__PURE__ */ $.pointerType("shared.ListSchedulesResponse"))
		success = __goscriptTuple40[0]
		i++
		let __goscriptTuple41: any = $.typeAssertTuple<$.GoError>($.arrayIndex(ret!, i), "error")
		err = __goscriptTuple41[0]
		return [success, err]
	}

	public async ListTaskListPartitions(ctx: context.Context | null, _Request: shared.ListTaskListPartitionsRequest | $.VarRef<shared.ListTaskListPartitionsRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.ListTaskListPartitionsResponse | $.VarRef<shared.ListTaskListPartitionsResponse> | null, $.GoError]> {
		const m: MockClient | $.VarRef<MockClient> | null = this;
		let success: shared.ListTaskListPartitionsResponse | $.VarRef<shared.ListTaskListPartitionsResponse> | null = null! as shared.ListTaskListPartitionsResponse | $.VarRef<shared.ListTaskListPartitionsResponse> | null
		let err: $.GoError = null! as $.GoError

		let args: $.Slice<any> = $.arrayToSlice<any>([(ctx as any), $.interfaceValue(_Request, "*shared.ListTaskListPartitionsRequest", /* @__PURE__ */ $.pointerType("shared.ListTaskListPartitionsRequest"))])
		for (let __goscriptRangeTarget22 = opts, __goscriptRangeWindow22 = $.sliceRange(__goscriptRangeTarget22), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow22.length; __rangeIndex++) {
			let o = ((__goscriptRangeWindow22.backing[__goscriptRangeWindow22.offset + __rangeIndex] as yarpc.CallOption)).clone()
			args = $.appendOne(args, $.interfaceValue((o).clone(), "yarpc.CallOption", "yarpc.CallOption"), $.appendZeros.nil)
		}
		let i = 0
		let ret: $.Slice<any> = await gomock.Controller.prototype.Call.call($.pointerValue<MockClient>(m).ctrl, $.interfaceValue(m, "*workflowservicetest.MockClient", /* @__PURE__ */ $.pointerType("workflowservicetest.MockClient")), "ListTaskListPartitions", args)
		let __goscriptTuple42: any = $.typeAssertTuple<shared.ListTaskListPartitionsResponse | $.VarRef<shared.ListTaskListPartitionsResponse> | null>($.arrayIndex(ret!, i), /* @__PURE__ */ $.pointerType("shared.ListTaskListPartitionsResponse"))
		success = __goscriptTuple42[0]
		i++
		let __goscriptTuple43: any = $.typeAssertTuple<$.GoError>($.arrayIndex(ret!, i), "error")
		err = __goscriptTuple43[0]
		return [success, err]
	}

	public async ListWorkflowExecutions(ctx: context.Context | null, _ListRequest: shared.ListWorkflowExecutionsRequest | $.VarRef<shared.ListWorkflowExecutionsRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.ListWorkflowExecutionsResponse | $.VarRef<shared.ListWorkflowExecutionsResponse> | null, $.GoError]> {
		const m: MockClient | $.VarRef<MockClient> | null = this;
		let success: shared.ListWorkflowExecutionsResponse | $.VarRef<shared.ListWorkflowExecutionsResponse> | null = null! as shared.ListWorkflowExecutionsResponse | $.VarRef<shared.ListWorkflowExecutionsResponse> | null
		let err: $.GoError = null! as $.GoError

		let args: $.Slice<any> = $.arrayToSlice<any>([(ctx as any), $.interfaceValue(_ListRequest, "*shared.ListWorkflowExecutionsRequest", /* @__PURE__ */ $.pointerType("shared.ListWorkflowExecutionsRequest"))])
		for (let __goscriptRangeTarget23 = opts, __goscriptRangeWindow23 = $.sliceRange(__goscriptRangeTarget23), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow23.length; __rangeIndex++) {
			let o = ((__goscriptRangeWindow23.backing[__goscriptRangeWindow23.offset + __rangeIndex] as yarpc.CallOption)).clone()
			args = $.appendOne(args, $.interfaceValue((o).clone(), "yarpc.CallOption", "yarpc.CallOption"), $.appendZeros.nil)
		}
		let i = 0
		let ret: $.Slice<any> = await gomock.Controller.prototype.Call.call($.pointerValue<MockClient>(m).ctrl, $.interfaceValue(m, "*workflowservicetest.MockClient", /* @__PURE__ */ $.pointerType("workflowservicetest.MockClient")), "ListWorkflowExecutions", args)
		let __goscriptTuple44: any = $.typeAssertTuple<shared.ListWorkflowExecutionsResponse | $.VarRef<shared.ListWorkflowExecutionsResponse> | null>($.arrayIndex(ret!, i), /* @__PURE__ */ $.pointerType("shared.ListWorkflowExecutionsResponse"))
		success = __goscriptTuple44[0]
		i++
		let __goscriptTuple45: any = $.typeAssertTuple<$.GoError>($.arrayIndex(ret!, i), "error")
		err = __goscriptTuple45[0]
		return [success, err]
	}

	public async PauseSchedule(ctx: context.Context | null, _Request: shared.PauseScheduleRequest | $.VarRef<shared.PauseScheduleRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.PauseScheduleResponse | $.VarRef<shared.PauseScheduleResponse> | null, $.GoError]> {
		const m: MockClient | $.VarRef<MockClient> | null = this;
		let success: shared.PauseScheduleResponse | $.VarRef<shared.PauseScheduleResponse> | null = null! as shared.PauseScheduleResponse | $.VarRef<shared.PauseScheduleResponse> | null
		let err: $.GoError = null! as $.GoError

		let args: $.Slice<any> = $.arrayToSlice<any>([(ctx as any), $.interfaceValue(_Request, "*shared.PauseScheduleRequest", /* @__PURE__ */ $.pointerType("shared.PauseScheduleRequest"))])
		for (let __goscriptRangeTarget24 = opts, __goscriptRangeWindow24 = $.sliceRange(__goscriptRangeTarget24), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow24.length; __rangeIndex++) {
			let o = ((__goscriptRangeWindow24.backing[__goscriptRangeWindow24.offset + __rangeIndex] as yarpc.CallOption)).clone()
			args = $.appendOne(args, $.interfaceValue((o).clone(), "yarpc.CallOption", "yarpc.CallOption"), $.appendZeros.nil)
		}
		let i = 0
		let ret: $.Slice<any> = await gomock.Controller.prototype.Call.call($.pointerValue<MockClient>(m).ctrl, $.interfaceValue(m, "*workflowservicetest.MockClient", /* @__PURE__ */ $.pointerType("workflowservicetest.MockClient")), "PauseSchedule", args)
		let __goscriptTuple46: any = $.typeAssertTuple<shared.PauseScheduleResponse | $.VarRef<shared.PauseScheduleResponse> | null>($.arrayIndex(ret!, i), /* @__PURE__ */ $.pointerType("shared.PauseScheduleResponse"))
		success = __goscriptTuple46[0]
		i++
		let __goscriptTuple47: any = $.typeAssertTuple<$.GoError>($.arrayIndex(ret!, i), "error")
		err = __goscriptTuple47[0]
		return [success, err]
	}

	public async PollForActivityTask(ctx: context.Context | null, _PollRequest: shared.PollForActivityTaskRequest | $.VarRef<shared.PollForActivityTaskRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.PollForActivityTaskResponse | $.VarRef<shared.PollForActivityTaskResponse> | null, $.GoError]> {
		const m: MockClient | $.VarRef<MockClient> | null = this;
		let success: shared.PollForActivityTaskResponse | $.VarRef<shared.PollForActivityTaskResponse> | null = null! as shared.PollForActivityTaskResponse | $.VarRef<shared.PollForActivityTaskResponse> | null
		let err: $.GoError = null! as $.GoError

		let args: $.Slice<any> = $.arrayToSlice<any>([(ctx as any), $.interfaceValue(_PollRequest, "*shared.PollForActivityTaskRequest", /* @__PURE__ */ $.pointerType("shared.PollForActivityTaskRequest"))])
		for (let __goscriptRangeTarget25 = opts, __goscriptRangeWindow25 = $.sliceRange(__goscriptRangeTarget25), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow25.length; __rangeIndex++) {
			let o = ((__goscriptRangeWindow25.backing[__goscriptRangeWindow25.offset + __rangeIndex] as yarpc.CallOption)).clone()
			args = $.appendOne(args, $.interfaceValue((o).clone(), "yarpc.CallOption", "yarpc.CallOption"), $.appendZeros.nil)
		}
		let i = 0
		let ret: $.Slice<any> = await gomock.Controller.prototype.Call.call($.pointerValue<MockClient>(m).ctrl, $.interfaceValue(m, "*workflowservicetest.MockClient", /* @__PURE__ */ $.pointerType("workflowservicetest.MockClient")), "PollForActivityTask", args)
		let __goscriptTuple48: any = $.typeAssertTuple<shared.PollForActivityTaskResponse | $.VarRef<shared.PollForActivityTaskResponse> | null>($.arrayIndex(ret!, i), /* @__PURE__ */ $.pointerType("shared.PollForActivityTaskResponse"))
		success = __goscriptTuple48[0]
		i++
		let __goscriptTuple49: any = $.typeAssertTuple<$.GoError>($.arrayIndex(ret!, i), "error")
		err = __goscriptTuple49[0]
		return [success, err]
	}

	public async PollForDecisionTask(ctx: context.Context | null, _PollRequest: shared.PollForDecisionTaskRequest | $.VarRef<shared.PollForDecisionTaskRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.PollForDecisionTaskResponse | $.VarRef<shared.PollForDecisionTaskResponse> | null, $.GoError]> {
		const m: MockClient | $.VarRef<MockClient> | null = this;
		let success: shared.PollForDecisionTaskResponse | $.VarRef<shared.PollForDecisionTaskResponse> | null = null! as shared.PollForDecisionTaskResponse | $.VarRef<shared.PollForDecisionTaskResponse> | null
		let err: $.GoError = null! as $.GoError

		let args: $.Slice<any> = $.arrayToSlice<any>([(ctx as any), $.interfaceValue(_PollRequest, "*shared.PollForDecisionTaskRequest", /* @__PURE__ */ $.pointerType("shared.PollForDecisionTaskRequest"))])
		for (let __goscriptRangeTarget26 = opts, __goscriptRangeWindow26 = $.sliceRange(__goscriptRangeTarget26), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow26.length; __rangeIndex++) {
			let o = ((__goscriptRangeWindow26.backing[__goscriptRangeWindow26.offset + __rangeIndex] as yarpc.CallOption)).clone()
			args = $.appendOne(args, $.interfaceValue((o).clone(), "yarpc.CallOption", "yarpc.CallOption"), $.appendZeros.nil)
		}
		let i = 0
		let ret: $.Slice<any> = await gomock.Controller.prototype.Call.call($.pointerValue<MockClient>(m).ctrl, $.interfaceValue(m, "*workflowservicetest.MockClient", /* @__PURE__ */ $.pointerType("workflowservicetest.MockClient")), "PollForDecisionTask", args)
		let __goscriptTuple50: any = $.typeAssertTuple<shared.PollForDecisionTaskResponse | $.VarRef<shared.PollForDecisionTaskResponse> | null>($.arrayIndex(ret!, i), /* @__PURE__ */ $.pointerType("shared.PollForDecisionTaskResponse"))
		success = __goscriptTuple50[0]
		i++
		let __goscriptTuple51: any = $.typeAssertTuple<$.GoError>($.arrayIndex(ret!, i), "error")
		err = __goscriptTuple51[0]
		return [success, err]
	}

	public async QueryWorkflow(ctx: context.Context | null, _QueryRequest: shared.QueryWorkflowRequest | $.VarRef<shared.QueryWorkflowRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.QueryWorkflowResponse | $.VarRef<shared.QueryWorkflowResponse> | null, $.GoError]> {
		const m: MockClient | $.VarRef<MockClient> | null = this;
		let success: shared.QueryWorkflowResponse | $.VarRef<shared.QueryWorkflowResponse> | null = null! as shared.QueryWorkflowResponse | $.VarRef<shared.QueryWorkflowResponse> | null
		let err: $.GoError = null! as $.GoError

		let args: $.Slice<any> = $.arrayToSlice<any>([(ctx as any), $.interfaceValue(_QueryRequest, "*shared.QueryWorkflowRequest", /* @__PURE__ */ $.pointerType("shared.QueryWorkflowRequest"))])
		for (let __goscriptRangeTarget27 = opts, __goscriptRangeWindow27 = $.sliceRange(__goscriptRangeTarget27), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow27.length; __rangeIndex++) {
			let o = ((__goscriptRangeWindow27.backing[__goscriptRangeWindow27.offset + __rangeIndex] as yarpc.CallOption)).clone()
			args = $.appendOne(args, $.interfaceValue((o).clone(), "yarpc.CallOption", "yarpc.CallOption"), $.appendZeros.nil)
		}
		let i = 0
		let ret: $.Slice<any> = await gomock.Controller.prototype.Call.call($.pointerValue<MockClient>(m).ctrl, $.interfaceValue(m, "*workflowservicetest.MockClient", /* @__PURE__ */ $.pointerType("workflowservicetest.MockClient")), "QueryWorkflow", args)
		let __goscriptTuple52: any = $.typeAssertTuple<shared.QueryWorkflowResponse | $.VarRef<shared.QueryWorkflowResponse> | null>($.arrayIndex(ret!, i), /* @__PURE__ */ $.pointerType("shared.QueryWorkflowResponse"))
		success = __goscriptTuple52[0]
		i++
		let __goscriptTuple53: any = $.typeAssertTuple<$.GoError>($.arrayIndex(ret!, i), "error")
		err = __goscriptTuple53[0]
		return [success, err]
	}

	public async RecordActivityTaskHeartbeat(ctx: context.Context | null, _HeartbeatRequest: shared.RecordActivityTaskHeartbeatRequest | $.VarRef<shared.RecordActivityTaskHeartbeatRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.RecordActivityTaskHeartbeatResponse | $.VarRef<shared.RecordActivityTaskHeartbeatResponse> | null, $.GoError]> {
		const m: MockClient | $.VarRef<MockClient> | null = this;
		let success: shared.RecordActivityTaskHeartbeatResponse | $.VarRef<shared.RecordActivityTaskHeartbeatResponse> | null = null! as shared.RecordActivityTaskHeartbeatResponse | $.VarRef<shared.RecordActivityTaskHeartbeatResponse> | null
		let err: $.GoError = null! as $.GoError

		let args: $.Slice<any> = $.arrayToSlice<any>([(ctx as any), $.interfaceValue(_HeartbeatRequest, "*shared.RecordActivityTaskHeartbeatRequest", /* @__PURE__ */ $.pointerType("shared.RecordActivityTaskHeartbeatRequest"))])
		for (let __goscriptRangeTarget28 = opts, __goscriptRangeWindow28 = $.sliceRange(__goscriptRangeTarget28), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow28.length; __rangeIndex++) {
			let o = ((__goscriptRangeWindow28.backing[__goscriptRangeWindow28.offset + __rangeIndex] as yarpc.CallOption)).clone()
			args = $.appendOne(args, $.interfaceValue((o).clone(), "yarpc.CallOption", "yarpc.CallOption"), $.appendZeros.nil)
		}
		let i = 0
		let ret: $.Slice<any> = await gomock.Controller.prototype.Call.call($.pointerValue<MockClient>(m).ctrl, $.interfaceValue(m, "*workflowservicetest.MockClient", /* @__PURE__ */ $.pointerType("workflowservicetest.MockClient")), "RecordActivityTaskHeartbeat", args)
		let __goscriptTuple54: any = $.typeAssertTuple<shared.RecordActivityTaskHeartbeatResponse | $.VarRef<shared.RecordActivityTaskHeartbeatResponse> | null>($.arrayIndex(ret!, i), /* @__PURE__ */ $.pointerType("shared.RecordActivityTaskHeartbeatResponse"))
		success = __goscriptTuple54[0]
		i++
		let __goscriptTuple55: any = $.typeAssertTuple<$.GoError>($.arrayIndex(ret!, i), "error")
		err = __goscriptTuple55[0]
		return [success, err]
	}

	public async RecordActivityTaskHeartbeatByID(ctx: context.Context | null, _HeartbeatRequest: shared.RecordActivityTaskHeartbeatByIDRequest | $.VarRef<shared.RecordActivityTaskHeartbeatByIDRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.RecordActivityTaskHeartbeatResponse | $.VarRef<shared.RecordActivityTaskHeartbeatResponse> | null, $.GoError]> {
		const m: MockClient | $.VarRef<MockClient> | null = this;
		let success: shared.RecordActivityTaskHeartbeatResponse | $.VarRef<shared.RecordActivityTaskHeartbeatResponse> | null = null! as shared.RecordActivityTaskHeartbeatResponse | $.VarRef<shared.RecordActivityTaskHeartbeatResponse> | null
		let err: $.GoError = null! as $.GoError

		let args: $.Slice<any> = $.arrayToSlice<any>([(ctx as any), $.interfaceValue(_HeartbeatRequest, "*shared.RecordActivityTaskHeartbeatByIDRequest", /* @__PURE__ */ $.pointerType("shared.RecordActivityTaskHeartbeatByIDRequest"))])
		for (let __goscriptRangeTarget29 = opts, __goscriptRangeWindow29 = $.sliceRange(__goscriptRangeTarget29), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow29.length; __rangeIndex++) {
			let o = ((__goscriptRangeWindow29.backing[__goscriptRangeWindow29.offset + __rangeIndex] as yarpc.CallOption)).clone()
			args = $.appendOne(args, $.interfaceValue((o).clone(), "yarpc.CallOption", "yarpc.CallOption"), $.appendZeros.nil)
		}
		let i = 0
		let ret: $.Slice<any> = await gomock.Controller.prototype.Call.call($.pointerValue<MockClient>(m).ctrl, $.interfaceValue(m, "*workflowservicetest.MockClient", /* @__PURE__ */ $.pointerType("workflowservicetest.MockClient")), "RecordActivityTaskHeartbeatByID", args)
		let __goscriptTuple56: any = $.typeAssertTuple<shared.RecordActivityTaskHeartbeatResponse | $.VarRef<shared.RecordActivityTaskHeartbeatResponse> | null>($.arrayIndex(ret!, i), /* @__PURE__ */ $.pointerType("shared.RecordActivityTaskHeartbeatResponse"))
		success = __goscriptTuple56[0]
		i++
		let __goscriptTuple57: any = $.typeAssertTuple<$.GoError>($.arrayIndex(ret!, i), "error")
		err = __goscriptTuple57[0]
		return [success, err]
	}

	public async RefreshWorkflowTasks(ctx: context.Context | null, _Request: shared.RefreshWorkflowTasksRequest | $.VarRef<shared.RefreshWorkflowTasksRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<$.GoError> {
		const m: MockClient | $.VarRef<MockClient> | null = this;
		let err: $.GoError = null! as $.GoError

		let args: $.Slice<any> = $.arrayToSlice<any>([(ctx as any), $.interfaceValue(_Request, "*shared.RefreshWorkflowTasksRequest", /* @__PURE__ */ $.pointerType("shared.RefreshWorkflowTasksRequest"))])
		for (let __goscriptRangeTarget30 = opts, __goscriptRangeWindow30 = $.sliceRange(__goscriptRangeTarget30), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow30.length; __rangeIndex++) {
			let o = ((__goscriptRangeWindow30.backing[__goscriptRangeWindow30.offset + __rangeIndex] as yarpc.CallOption)).clone()
			args = $.appendOne(args, $.interfaceValue((o).clone(), "yarpc.CallOption", "yarpc.CallOption"), $.appendZeros.nil)
		}
		let i = 0
		let ret: $.Slice<any> = await gomock.Controller.prototype.Call.call($.pointerValue<MockClient>(m).ctrl, $.interfaceValue(m, "*workflowservicetest.MockClient", /* @__PURE__ */ $.pointerType("workflowservicetest.MockClient")), "RefreshWorkflowTasks", args)
		let __goscriptTuple58: any = $.typeAssertTuple<$.GoError>($.arrayIndex(ret!, i), "error")
		err = __goscriptTuple58[0]
		return err
	}

	public async RegisterDomain(ctx: context.Context | null, _RegisterRequest: shared.RegisterDomainRequest | $.VarRef<shared.RegisterDomainRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<$.GoError> {
		const m: MockClient | $.VarRef<MockClient> | null = this;
		let err: $.GoError = null! as $.GoError

		let args: $.Slice<any> = $.arrayToSlice<any>([(ctx as any), $.interfaceValue(_RegisterRequest, "*shared.RegisterDomainRequest", /* @__PURE__ */ $.pointerType("shared.RegisterDomainRequest"))])
		for (let __goscriptRangeTarget31 = opts, __goscriptRangeWindow31 = $.sliceRange(__goscriptRangeTarget31), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow31.length; __rangeIndex++) {
			let o = ((__goscriptRangeWindow31.backing[__goscriptRangeWindow31.offset + __rangeIndex] as yarpc.CallOption)).clone()
			args = $.appendOne(args, $.interfaceValue((o).clone(), "yarpc.CallOption", "yarpc.CallOption"), $.appendZeros.nil)
		}
		let i = 0
		let ret: $.Slice<any> = await gomock.Controller.prototype.Call.call($.pointerValue<MockClient>(m).ctrl, $.interfaceValue(m, "*workflowservicetest.MockClient", /* @__PURE__ */ $.pointerType("workflowservicetest.MockClient")), "RegisterDomain", args)
		let __goscriptTuple59: any = $.typeAssertTuple<$.GoError>($.arrayIndex(ret!, i), "error")
		err = __goscriptTuple59[0]
		return err
	}

	public async RequestCancelWorkflowExecution(ctx: context.Context | null, _CancelRequest: shared.RequestCancelWorkflowExecutionRequest | $.VarRef<shared.RequestCancelWorkflowExecutionRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<$.GoError> {
		const m: MockClient | $.VarRef<MockClient> | null = this;
		let err: $.GoError = null! as $.GoError

		let args: $.Slice<any> = $.arrayToSlice<any>([(ctx as any), $.interfaceValue(_CancelRequest, "*shared.RequestCancelWorkflowExecutionRequest", /* @__PURE__ */ $.pointerType("shared.RequestCancelWorkflowExecutionRequest"))])
		for (let __goscriptRangeTarget32 = opts, __goscriptRangeWindow32 = $.sliceRange(__goscriptRangeTarget32), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow32.length; __rangeIndex++) {
			let o = ((__goscriptRangeWindow32.backing[__goscriptRangeWindow32.offset + __rangeIndex] as yarpc.CallOption)).clone()
			args = $.appendOne(args, $.interfaceValue((o).clone(), "yarpc.CallOption", "yarpc.CallOption"), $.appendZeros.nil)
		}
		let i = 0
		let ret: $.Slice<any> = await gomock.Controller.prototype.Call.call($.pointerValue<MockClient>(m).ctrl, $.interfaceValue(m, "*workflowservicetest.MockClient", /* @__PURE__ */ $.pointerType("workflowservicetest.MockClient")), "RequestCancelWorkflowExecution", args)
		let __goscriptTuple60: any = $.typeAssertTuple<$.GoError>($.arrayIndex(ret!, i), "error")
		err = __goscriptTuple60[0]
		return err
	}

	public async ResetStickyTaskList(ctx: context.Context | null, _ResetRequest: shared.ResetStickyTaskListRequest | $.VarRef<shared.ResetStickyTaskListRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.ResetStickyTaskListResponse | $.VarRef<shared.ResetStickyTaskListResponse> | null, $.GoError]> {
		const m: MockClient | $.VarRef<MockClient> | null = this;
		let success: shared.ResetStickyTaskListResponse | $.VarRef<shared.ResetStickyTaskListResponse> | null = null! as shared.ResetStickyTaskListResponse | $.VarRef<shared.ResetStickyTaskListResponse> | null
		let err: $.GoError = null! as $.GoError

		let args: $.Slice<any> = $.arrayToSlice<any>([(ctx as any), $.interfaceValue(_ResetRequest, "*shared.ResetStickyTaskListRequest", /* @__PURE__ */ $.pointerType("shared.ResetStickyTaskListRequest"))])
		for (let __goscriptRangeTarget33 = opts, __goscriptRangeWindow33 = $.sliceRange(__goscriptRangeTarget33), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow33.length; __rangeIndex++) {
			let o = ((__goscriptRangeWindow33.backing[__goscriptRangeWindow33.offset + __rangeIndex] as yarpc.CallOption)).clone()
			args = $.appendOne(args, $.interfaceValue((o).clone(), "yarpc.CallOption", "yarpc.CallOption"), $.appendZeros.nil)
		}
		let i = 0
		let ret: $.Slice<any> = await gomock.Controller.prototype.Call.call($.pointerValue<MockClient>(m).ctrl, $.interfaceValue(m, "*workflowservicetest.MockClient", /* @__PURE__ */ $.pointerType("workflowservicetest.MockClient")), "ResetStickyTaskList", args)
		let __goscriptTuple61: any = $.typeAssertTuple<shared.ResetStickyTaskListResponse | $.VarRef<shared.ResetStickyTaskListResponse> | null>($.arrayIndex(ret!, i), /* @__PURE__ */ $.pointerType("shared.ResetStickyTaskListResponse"))
		success = __goscriptTuple61[0]
		i++
		let __goscriptTuple62: any = $.typeAssertTuple<$.GoError>($.arrayIndex(ret!, i), "error")
		err = __goscriptTuple62[0]
		return [success, err]
	}

	public async ResetWorkflowExecution(ctx: context.Context | null, _ResetRequest: shared.ResetWorkflowExecutionRequest | $.VarRef<shared.ResetWorkflowExecutionRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.ResetWorkflowExecutionResponse | $.VarRef<shared.ResetWorkflowExecutionResponse> | null, $.GoError]> {
		const m: MockClient | $.VarRef<MockClient> | null = this;
		let success: shared.ResetWorkflowExecutionResponse | $.VarRef<shared.ResetWorkflowExecutionResponse> | null = null! as shared.ResetWorkflowExecutionResponse | $.VarRef<shared.ResetWorkflowExecutionResponse> | null
		let err: $.GoError = null! as $.GoError

		let args: $.Slice<any> = $.arrayToSlice<any>([(ctx as any), $.interfaceValue(_ResetRequest, "*shared.ResetWorkflowExecutionRequest", /* @__PURE__ */ $.pointerType("shared.ResetWorkflowExecutionRequest"))])
		for (let __goscriptRangeTarget34 = opts, __goscriptRangeWindow34 = $.sliceRange(__goscriptRangeTarget34), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow34.length; __rangeIndex++) {
			let o = ((__goscriptRangeWindow34.backing[__goscriptRangeWindow34.offset + __rangeIndex] as yarpc.CallOption)).clone()
			args = $.appendOne(args, $.interfaceValue((o).clone(), "yarpc.CallOption", "yarpc.CallOption"), $.appendZeros.nil)
		}
		let i = 0
		let ret: $.Slice<any> = await gomock.Controller.prototype.Call.call($.pointerValue<MockClient>(m).ctrl, $.interfaceValue(m, "*workflowservicetest.MockClient", /* @__PURE__ */ $.pointerType("workflowservicetest.MockClient")), "ResetWorkflowExecution", args)
		let __goscriptTuple63: any = $.typeAssertTuple<shared.ResetWorkflowExecutionResponse | $.VarRef<shared.ResetWorkflowExecutionResponse> | null>($.arrayIndex(ret!, i), /* @__PURE__ */ $.pointerType("shared.ResetWorkflowExecutionResponse"))
		success = __goscriptTuple63[0]
		i++
		let __goscriptTuple64: any = $.typeAssertTuple<$.GoError>($.arrayIndex(ret!, i), "error")
		err = __goscriptTuple64[0]
		return [success, err]
	}

	public async RespondActivityTaskCanceled(ctx: context.Context | null, _CanceledRequest: shared.RespondActivityTaskCanceledRequest | $.VarRef<shared.RespondActivityTaskCanceledRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<$.GoError> {
		const m: MockClient | $.VarRef<MockClient> | null = this;
		let err: $.GoError = null! as $.GoError

		let args: $.Slice<any> = $.arrayToSlice<any>([(ctx as any), $.interfaceValue(_CanceledRequest, "*shared.RespondActivityTaskCanceledRequest", /* @__PURE__ */ $.pointerType("shared.RespondActivityTaskCanceledRequest"))])
		for (let __goscriptRangeTarget35 = opts, __goscriptRangeWindow35 = $.sliceRange(__goscriptRangeTarget35), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow35.length; __rangeIndex++) {
			let o = ((__goscriptRangeWindow35.backing[__goscriptRangeWindow35.offset + __rangeIndex] as yarpc.CallOption)).clone()
			args = $.appendOne(args, $.interfaceValue((o).clone(), "yarpc.CallOption", "yarpc.CallOption"), $.appendZeros.nil)
		}
		let i = 0
		let ret: $.Slice<any> = await gomock.Controller.prototype.Call.call($.pointerValue<MockClient>(m).ctrl, $.interfaceValue(m, "*workflowservicetest.MockClient", /* @__PURE__ */ $.pointerType("workflowservicetest.MockClient")), "RespondActivityTaskCanceled", args)
		let __goscriptTuple65: any = $.typeAssertTuple<$.GoError>($.arrayIndex(ret!, i), "error")
		err = __goscriptTuple65[0]
		return err
	}

	public async RespondActivityTaskCanceledByID(ctx: context.Context | null, _CanceledRequest: shared.RespondActivityTaskCanceledByIDRequest | $.VarRef<shared.RespondActivityTaskCanceledByIDRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<$.GoError> {
		const m: MockClient | $.VarRef<MockClient> | null = this;
		let err: $.GoError = null! as $.GoError

		let args: $.Slice<any> = $.arrayToSlice<any>([(ctx as any), $.interfaceValue(_CanceledRequest, "*shared.RespondActivityTaskCanceledByIDRequest", /* @__PURE__ */ $.pointerType("shared.RespondActivityTaskCanceledByIDRequest"))])
		for (let __goscriptRangeTarget36 = opts, __goscriptRangeWindow36 = $.sliceRange(__goscriptRangeTarget36), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow36.length; __rangeIndex++) {
			let o = ((__goscriptRangeWindow36.backing[__goscriptRangeWindow36.offset + __rangeIndex] as yarpc.CallOption)).clone()
			args = $.appendOne(args, $.interfaceValue((o).clone(), "yarpc.CallOption", "yarpc.CallOption"), $.appendZeros.nil)
		}
		let i = 0
		let ret: $.Slice<any> = await gomock.Controller.prototype.Call.call($.pointerValue<MockClient>(m).ctrl, $.interfaceValue(m, "*workflowservicetest.MockClient", /* @__PURE__ */ $.pointerType("workflowservicetest.MockClient")), "RespondActivityTaskCanceledByID", args)
		let __goscriptTuple66: any = $.typeAssertTuple<$.GoError>($.arrayIndex(ret!, i), "error")
		err = __goscriptTuple66[0]
		return err
	}

	public async RespondActivityTaskCompleted(ctx: context.Context | null, _CompleteRequest: shared.RespondActivityTaskCompletedRequest | $.VarRef<shared.RespondActivityTaskCompletedRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<$.GoError> {
		const m: MockClient | $.VarRef<MockClient> | null = this;
		let err: $.GoError = null! as $.GoError

		let args: $.Slice<any> = $.arrayToSlice<any>([(ctx as any), $.interfaceValue(_CompleteRequest, "*shared.RespondActivityTaskCompletedRequest", /* @__PURE__ */ $.pointerType("shared.RespondActivityTaskCompletedRequest"))])
		for (let __goscriptRangeTarget37 = opts, __goscriptRangeWindow37 = $.sliceRange(__goscriptRangeTarget37), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow37.length; __rangeIndex++) {
			let o = ((__goscriptRangeWindow37.backing[__goscriptRangeWindow37.offset + __rangeIndex] as yarpc.CallOption)).clone()
			args = $.appendOne(args, $.interfaceValue((o).clone(), "yarpc.CallOption", "yarpc.CallOption"), $.appendZeros.nil)
		}
		let i = 0
		let ret: $.Slice<any> = await gomock.Controller.prototype.Call.call($.pointerValue<MockClient>(m).ctrl, $.interfaceValue(m, "*workflowservicetest.MockClient", /* @__PURE__ */ $.pointerType("workflowservicetest.MockClient")), "RespondActivityTaskCompleted", args)
		let __goscriptTuple67: any = $.typeAssertTuple<$.GoError>($.arrayIndex(ret!, i), "error")
		err = __goscriptTuple67[0]
		return err
	}

	public async RespondActivityTaskCompletedByID(ctx: context.Context | null, _CompleteRequest: shared.RespondActivityTaskCompletedByIDRequest | $.VarRef<shared.RespondActivityTaskCompletedByIDRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<$.GoError> {
		const m: MockClient | $.VarRef<MockClient> | null = this;
		let err: $.GoError = null! as $.GoError

		let args: $.Slice<any> = $.arrayToSlice<any>([(ctx as any), $.interfaceValue(_CompleteRequest, "*shared.RespondActivityTaskCompletedByIDRequest", /* @__PURE__ */ $.pointerType("shared.RespondActivityTaskCompletedByIDRequest"))])
		for (let __goscriptRangeTarget38 = opts, __goscriptRangeWindow38 = $.sliceRange(__goscriptRangeTarget38), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow38.length; __rangeIndex++) {
			let o = ((__goscriptRangeWindow38.backing[__goscriptRangeWindow38.offset + __rangeIndex] as yarpc.CallOption)).clone()
			args = $.appendOne(args, $.interfaceValue((o).clone(), "yarpc.CallOption", "yarpc.CallOption"), $.appendZeros.nil)
		}
		let i = 0
		let ret: $.Slice<any> = await gomock.Controller.prototype.Call.call($.pointerValue<MockClient>(m).ctrl, $.interfaceValue(m, "*workflowservicetest.MockClient", /* @__PURE__ */ $.pointerType("workflowservicetest.MockClient")), "RespondActivityTaskCompletedByID", args)
		let __goscriptTuple68: any = $.typeAssertTuple<$.GoError>($.arrayIndex(ret!, i), "error")
		err = __goscriptTuple68[0]
		return err
	}

	public async RespondActivityTaskFailed(ctx: context.Context | null, _FailRequest: shared.RespondActivityTaskFailedRequest | $.VarRef<shared.RespondActivityTaskFailedRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<$.GoError> {
		const m: MockClient | $.VarRef<MockClient> | null = this;
		let err: $.GoError = null! as $.GoError

		let args: $.Slice<any> = $.arrayToSlice<any>([(ctx as any), $.interfaceValue(_FailRequest, "*shared.RespondActivityTaskFailedRequest", /* @__PURE__ */ $.pointerType("shared.RespondActivityTaskFailedRequest"))])
		for (let __goscriptRangeTarget39 = opts, __goscriptRangeWindow39 = $.sliceRange(__goscriptRangeTarget39), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow39.length; __rangeIndex++) {
			let o = ((__goscriptRangeWindow39.backing[__goscriptRangeWindow39.offset + __rangeIndex] as yarpc.CallOption)).clone()
			args = $.appendOne(args, $.interfaceValue((o).clone(), "yarpc.CallOption", "yarpc.CallOption"), $.appendZeros.nil)
		}
		let i = 0
		let ret: $.Slice<any> = await gomock.Controller.prototype.Call.call($.pointerValue<MockClient>(m).ctrl, $.interfaceValue(m, "*workflowservicetest.MockClient", /* @__PURE__ */ $.pointerType("workflowservicetest.MockClient")), "RespondActivityTaskFailed", args)
		let __goscriptTuple69: any = $.typeAssertTuple<$.GoError>($.arrayIndex(ret!, i), "error")
		err = __goscriptTuple69[0]
		return err
	}

	public async RespondActivityTaskFailedByID(ctx: context.Context | null, _FailRequest: shared.RespondActivityTaskFailedByIDRequest | $.VarRef<shared.RespondActivityTaskFailedByIDRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<$.GoError> {
		const m: MockClient | $.VarRef<MockClient> | null = this;
		let err: $.GoError = null! as $.GoError

		let args: $.Slice<any> = $.arrayToSlice<any>([(ctx as any), $.interfaceValue(_FailRequest, "*shared.RespondActivityTaskFailedByIDRequest", /* @__PURE__ */ $.pointerType("shared.RespondActivityTaskFailedByIDRequest"))])
		for (let __goscriptRangeTarget40 = opts, __goscriptRangeWindow40 = $.sliceRange(__goscriptRangeTarget40), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow40.length; __rangeIndex++) {
			let o = ((__goscriptRangeWindow40.backing[__goscriptRangeWindow40.offset + __rangeIndex] as yarpc.CallOption)).clone()
			args = $.appendOne(args, $.interfaceValue((o).clone(), "yarpc.CallOption", "yarpc.CallOption"), $.appendZeros.nil)
		}
		let i = 0
		let ret: $.Slice<any> = await gomock.Controller.prototype.Call.call($.pointerValue<MockClient>(m).ctrl, $.interfaceValue(m, "*workflowservicetest.MockClient", /* @__PURE__ */ $.pointerType("workflowservicetest.MockClient")), "RespondActivityTaskFailedByID", args)
		let __goscriptTuple70: any = $.typeAssertTuple<$.GoError>($.arrayIndex(ret!, i), "error")
		err = __goscriptTuple70[0]
		return err
	}

	public async RespondDecisionTaskCompleted(ctx: context.Context | null, _CompleteRequest: shared.RespondDecisionTaskCompletedRequest | $.VarRef<shared.RespondDecisionTaskCompletedRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.RespondDecisionTaskCompletedResponse | $.VarRef<shared.RespondDecisionTaskCompletedResponse> | null, $.GoError]> {
		const m: MockClient | $.VarRef<MockClient> | null = this;
		let success: shared.RespondDecisionTaskCompletedResponse | $.VarRef<shared.RespondDecisionTaskCompletedResponse> | null = null! as shared.RespondDecisionTaskCompletedResponse | $.VarRef<shared.RespondDecisionTaskCompletedResponse> | null
		let err: $.GoError = null! as $.GoError

		let args: $.Slice<any> = $.arrayToSlice<any>([(ctx as any), $.interfaceValue(_CompleteRequest, "*shared.RespondDecisionTaskCompletedRequest", /* @__PURE__ */ $.pointerType("shared.RespondDecisionTaskCompletedRequest"))])
		for (let __goscriptRangeTarget41 = opts, __goscriptRangeWindow41 = $.sliceRange(__goscriptRangeTarget41), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow41.length; __rangeIndex++) {
			let o = ((__goscriptRangeWindow41.backing[__goscriptRangeWindow41.offset + __rangeIndex] as yarpc.CallOption)).clone()
			args = $.appendOne(args, $.interfaceValue((o).clone(), "yarpc.CallOption", "yarpc.CallOption"), $.appendZeros.nil)
		}
		let i = 0
		let ret: $.Slice<any> = await gomock.Controller.prototype.Call.call($.pointerValue<MockClient>(m).ctrl, $.interfaceValue(m, "*workflowservicetest.MockClient", /* @__PURE__ */ $.pointerType("workflowservicetest.MockClient")), "RespondDecisionTaskCompleted", args)
		let __goscriptTuple71: any = $.typeAssertTuple<shared.RespondDecisionTaskCompletedResponse | $.VarRef<shared.RespondDecisionTaskCompletedResponse> | null>($.arrayIndex(ret!, i), /* @__PURE__ */ $.pointerType("shared.RespondDecisionTaskCompletedResponse"))
		success = __goscriptTuple71[0]
		i++
		let __goscriptTuple72: any = $.typeAssertTuple<$.GoError>($.arrayIndex(ret!, i), "error")
		err = __goscriptTuple72[0]
		return [success, err]
	}

	public async RespondDecisionTaskFailed(ctx: context.Context | null, _FailedRequest: shared.RespondDecisionTaskFailedRequest | $.VarRef<shared.RespondDecisionTaskFailedRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<$.GoError> {
		const m: MockClient | $.VarRef<MockClient> | null = this;
		let err: $.GoError = null! as $.GoError

		let args: $.Slice<any> = $.arrayToSlice<any>([(ctx as any), $.interfaceValue(_FailedRequest, "*shared.RespondDecisionTaskFailedRequest", /* @__PURE__ */ $.pointerType("shared.RespondDecisionTaskFailedRequest"))])
		for (let __goscriptRangeTarget42 = opts, __goscriptRangeWindow42 = $.sliceRange(__goscriptRangeTarget42), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow42.length; __rangeIndex++) {
			let o = ((__goscriptRangeWindow42.backing[__goscriptRangeWindow42.offset + __rangeIndex] as yarpc.CallOption)).clone()
			args = $.appendOne(args, $.interfaceValue((o).clone(), "yarpc.CallOption", "yarpc.CallOption"), $.appendZeros.nil)
		}
		let i = 0
		let ret: $.Slice<any> = await gomock.Controller.prototype.Call.call($.pointerValue<MockClient>(m).ctrl, $.interfaceValue(m, "*workflowservicetest.MockClient", /* @__PURE__ */ $.pointerType("workflowservicetest.MockClient")), "RespondDecisionTaskFailed", args)
		let __goscriptTuple73: any = $.typeAssertTuple<$.GoError>($.arrayIndex(ret!, i), "error")
		err = __goscriptTuple73[0]
		return err
	}

	public async RespondQueryTaskCompleted(ctx: context.Context | null, _CompleteRequest: shared.RespondQueryTaskCompletedRequest | $.VarRef<shared.RespondQueryTaskCompletedRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<$.GoError> {
		const m: MockClient | $.VarRef<MockClient> | null = this;
		let err: $.GoError = null! as $.GoError

		let args: $.Slice<any> = $.arrayToSlice<any>([(ctx as any), $.interfaceValue(_CompleteRequest, "*shared.RespondQueryTaskCompletedRequest", /* @__PURE__ */ $.pointerType("shared.RespondQueryTaskCompletedRequest"))])
		for (let __goscriptRangeTarget43 = opts, __goscriptRangeWindow43 = $.sliceRange(__goscriptRangeTarget43), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow43.length; __rangeIndex++) {
			let o = ((__goscriptRangeWindow43.backing[__goscriptRangeWindow43.offset + __rangeIndex] as yarpc.CallOption)).clone()
			args = $.appendOne(args, $.interfaceValue((o).clone(), "yarpc.CallOption", "yarpc.CallOption"), $.appendZeros.nil)
		}
		let i = 0
		let ret: $.Slice<any> = await gomock.Controller.prototype.Call.call($.pointerValue<MockClient>(m).ctrl, $.interfaceValue(m, "*workflowservicetest.MockClient", /* @__PURE__ */ $.pointerType("workflowservicetest.MockClient")), "RespondQueryTaskCompleted", args)
		let __goscriptTuple74: any = $.typeAssertTuple<$.GoError>($.arrayIndex(ret!, i), "error")
		err = __goscriptTuple74[0]
		return err
	}

	public async RestartWorkflowExecution(ctx: context.Context | null, _RestartRequest: shared.RestartWorkflowExecutionRequest | $.VarRef<shared.RestartWorkflowExecutionRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.RestartWorkflowExecutionResponse | $.VarRef<shared.RestartWorkflowExecutionResponse> | null, $.GoError]> {
		const m: MockClient | $.VarRef<MockClient> | null = this;
		let success: shared.RestartWorkflowExecutionResponse | $.VarRef<shared.RestartWorkflowExecutionResponse> | null = null! as shared.RestartWorkflowExecutionResponse | $.VarRef<shared.RestartWorkflowExecutionResponse> | null
		let err: $.GoError = null! as $.GoError

		let args: $.Slice<any> = $.arrayToSlice<any>([(ctx as any), $.interfaceValue(_RestartRequest, "*shared.RestartWorkflowExecutionRequest", /* @__PURE__ */ $.pointerType("shared.RestartWorkflowExecutionRequest"))])
		for (let __goscriptRangeTarget44 = opts, __goscriptRangeWindow44 = $.sliceRange(__goscriptRangeTarget44), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow44.length; __rangeIndex++) {
			let o = ((__goscriptRangeWindow44.backing[__goscriptRangeWindow44.offset + __rangeIndex] as yarpc.CallOption)).clone()
			args = $.appendOne(args, $.interfaceValue((o).clone(), "yarpc.CallOption", "yarpc.CallOption"), $.appendZeros.nil)
		}
		let i = 0
		let ret: $.Slice<any> = await gomock.Controller.prototype.Call.call($.pointerValue<MockClient>(m).ctrl, $.interfaceValue(m, "*workflowservicetest.MockClient", /* @__PURE__ */ $.pointerType("workflowservicetest.MockClient")), "RestartWorkflowExecution", args)
		let __goscriptTuple75: any = $.typeAssertTuple<shared.RestartWorkflowExecutionResponse | $.VarRef<shared.RestartWorkflowExecutionResponse> | null>($.arrayIndex(ret!, i), /* @__PURE__ */ $.pointerType("shared.RestartWorkflowExecutionResponse"))
		success = __goscriptTuple75[0]
		i++
		let __goscriptTuple76: any = $.typeAssertTuple<$.GoError>($.arrayIndex(ret!, i), "error")
		err = __goscriptTuple76[0]
		return [success, err]
	}

	public async ScanWorkflowExecutions(ctx: context.Context | null, _ListRequest: shared.ListWorkflowExecutionsRequest | $.VarRef<shared.ListWorkflowExecutionsRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.ListWorkflowExecutionsResponse | $.VarRef<shared.ListWorkflowExecutionsResponse> | null, $.GoError]> {
		const m: MockClient | $.VarRef<MockClient> | null = this;
		let success: shared.ListWorkflowExecutionsResponse | $.VarRef<shared.ListWorkflowExecutionsResponse> | null = null! as shared.ListWorkflowExecutionsResponse | $.VarRef<shared.ListWorkflowExecutionsResponse> | null
		let err: $.GoError = null! as $.GoError

		let args: $.Slice<any> = $.arrayToSlice<any>([(ctx as any), $.interfaceValue(_ListRequest, "*shared.ListWorkflowExecutionsRequest", /* @__PURE__ */ $.pointerType("shared.ListWorkflowExecutionsRequest"))])
		for (let __goscriptRangeTarget45 = opts, __goscriptRangeWindow45 = $.sliceRange(__goscriptRangeTarget45), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow45.length; __rangeIndex++) {
			let o = ((__goscriptRangeWindow45.backing[__goscriptRangeWindow45.offset + __rangeIndex] as yarpc.CallOption)).clone()
			args = $.appendOne(args, $.interfaceValue((o).clone(), "yarpc.CallOption", "yarpc.CallOption"), $.appendZeros.nil)
		}
		let i = 0
		let ret: $.Slice<any> = await gomock.Controller.prototype.Call.call($.pointerValue<MockClient>(m).ctrl, $.interfaceValue(m, "*workflowservicetest.MockClient", /* @__PURE__ */ $.pointerType("workflowservicetest.MockClient")), "ScanWorkflowExecutions", args)
		let __goscriptTuple77: any = $.typeAssertTuple<shared.ListWorkflowExecutionsResponse | $.VarRef<shared.ListWorkflowExecutionsResponse> | null>($.arrayIndex(ret!, i), /* @__PURE__ */ $.pointerType("shared.ListWorkflowExecutionsResponse"))
		success = __goscriptTuple77[0]
		i++
		let __goscriptTuple78: any = $.typeAssertTuple<$.GoError>($.arrayIndex(ret!, i), "error")
		err = __goscriptTuple78[0]
		return [success, err]
	}

	public async SignalWithStartWorkflowExecution(ctx: context.Context | null, _SignalWithStartRequest: shared.SignalWithStartWorkflowExecutionRequest | $.VarRef<shared.SignalWithStartWorkflowExecutionRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.StartWorkflowExecutionResponse | $.VarRef<shared.StartWorkflowExecutionResponse> | null, $.GoError]> {
		const m: MockClient | $.VarRef<MockClient> | null = this;
		let success: shared.StartWorkflowExecutionResponse | $.VarRef<shared.StartWorkflowExecutionResponse> | null = null! as shared.StartWorkflowExecutionResponse | $.VarRef<shared.StartWorkflowExecutionResponse> | null
		let err: $.GoError = null! as $.GoError

		let args: $.Slice<any> = $.arrayToSlice<any>([(ctx as any), $.interfaceValue(_SignalWithStartRequest, "*shared.SignalWithStartWorkflowExecutionRequest", /* @__PURE__ */ $.pointerType("shared.SignalWithStartWorkflowExecutionRequest"))])
		for (let __goscriptRangeTarget46 = opts, __goscriptRangeWindow46 = $.sliceRange(__goscriptRangeTarget46), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow46.length; __rangeIndex++) {
			let o = ((__goscriptRangeWindow46.backing[__goscriptRangeWindow46.offset + __rangeIndex] as yarpc.CallOption)).clone()
			args = $.appendOne(args, $.interfaceValue((o).clone(), "yarpc.CallOption", "yarpc.CallOption"), $.appendZeros.nil)
		}
		let i = 0
		let ret: $.Slice<any> = await gomock.Controller.prototype.Call.call($.pointerValue<MockClient>(m).ctrl, $.interfaceValue(m, "*workflowservicetest.MockClient", /* @__PURE__ */ $.pointerType("workflowservicetest.MockClient")), "SignalWithStartWorkflowExecution", args)
		let __goscriptTuple79: any = $.typeAssertTuple<shared.StartWorkflowExecutionResponse | $.VarRef<shared.StartWorkflowExecutionResponse> | null>($.arrayIndex(ret!, i), /* @__PURE__ */ $.pointerType("shared.StartWorkflowExecutionResponse"))
		success = __goscriptTuple79[0]
		i++
		let __goscriptTuple80: any = $.typeAssertTuple<$.GoError>($.arrayIndex(ret!, i), "error")
		err = __goscriptTuple80[0]
		return [success, err]
	}

	public async SignalWithStartWorkflowExecutionAsync(ctx: context.Context | null, _SignalWithStartRequest: shared.SignalWithStartWorkflowExecutionAsyncRequest | $.VarRef<shared.SignalWithStartWorkflowExecutionAsyncRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.SignalWithStartWorkflowExecutionAsyncResponse | $.VarRef<shared.SignalWithStartWorkflowExecutionAsyncResponse> | null, $.GoError]> {
		const m: MockClient | $.VarRef<MockClient> | null = this;
		let success: shared.SignalWithStartWorkflowExecutionAsyncResponse | $.VarRef<shared.SignalWithStartWorkflowExecutionAsyncResponse> | null = null! as shared.SignalWithStartWorkflowExecutionAsyncResponse | $.VarRef<shared.SignalWithStartWorkflowExecutionAsyncResponse> | null
		let err: $.GoError = null! as $.GoError

		let args: $.Slice<any> = $.arrayToSlice<any>([(ctx as any), $.interfaceValue(_SignalWithStartRequest, "*shared.SignalWithStartWorkflowExecutionAsyncRequest", /* @__PURE__ */ $.pointerType("shared.SignalWithStartWorkflowExecutionAsyncRequest"))])
		for (let __goscriptRangeTarget47 = opts, __goscriptRangeWindow47 = $.sliceRange(__goscriptRangeTarget47), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow47.length; __rangeIndex++) {
			let o = ((__goscriptRangeWindow47.backing[__goscriptRangeWindow47.offset + __rangeIndex] as yarpc.CallOption)).clone()
			args = $.appendOne(args, $.interfaceValue((o).clone(), "yarpc.CallOption", "yarpc.CallOption"), $.appendZeros.nil)
		}
		let i = 0
		let ret: $.Slice<any> = await gomock.Controller.prototype.Call.call($.pointerValue<MockClient>(m).ctrl, $.interfaceValue(m, "*workflowservicetest.MockClient", /* @__PURE__ */ $.pointerType("workflowservicetest.MockClient")), "SignalWithStartWorkflowExecutionAsync", args)
		let __goscriptTuple81: any = $.typeAssertTuple<shared.SignalWithStartWorkflowExecutionAsyncResponse | $.VarRef<shared.SignalWithStartWorkflowExecutionAsyncResponse> | null>($.arrayIndex(ret!, i), /* @__PURE__ */ $.pointerType("shared.SignalWithStartWorkflowExecutionAsyncResponse"))
		success = __goscriptTuple81[0]
		i++
		let __goscriptTuple82: any = $.typeAssertTuple<$.GoError>($.arrayIndex(ret!, i), "error")
		err = __goscriptTuple82[0]
		return [success, err]
	}

	public async SignalWorkflowExecution(ctx: context.Context | null, _SignalRequest: shared.SignalWorkflowExecutionRequest | $.VarRef<shared.SignalWorkflowExecutionRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<$.GoError> {
		const m: MockClient | $.VarRef<MockClient> | null = this;
		let err: $.GoError = null! as $.GoError

		let args: $.Slice<any> = $.arrayToSlice<any>([(ctx as any), $.interfaceValue(_SignalRequest, "*shared.SignalWorkflowExecutionRequest", /* @__PURE__ */ $.pointerType("shared.SignalWorkflowExecutionRequest"))])
		for (let __goscriptRangeTarget48 = opts, __goscriptRangeWindow48 = $.sliceRange(__goscriptRangeTarget48), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow48.length; __rangeIndex++) {
			let o = ((__goscriptRangeWindow48.backing[__goscriptRangeWindow48.offset + __rangeIndex] as yarpc.CallOption)).clone()
			args = $.appendOne(args, $.interfaceValue((o).clone(), "yarpc.CallOption", "yarpc.CallOption"), $.appendZeros.nil)
		}
		let i = 0
		let ret: $.Slice<any> = await gomock.Controller.prototype.Call.call($.pointerValue<MockClient>(m).ctrl, $.interfaceValue(m, "*workflowservicetest.MockClient", /* @__PURE__ */ $.pointerType("workflowservicetest.MockClient")), "SignalWorkflowExecution", args)
		let __goscriptTuple83: any = $.typeAssertTuple<$.GoError>($.arrayIndex(ret!, i), "error")
		err = __goscriptTuple83[0]
		return err
	}

	public async StartWorkflowExecution(ctx: context.Context | null, _StartRequest: shared.StartWorkflowExecutionRequest | $.VarRef<shared.StartWorkflowExecutionRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.StartWorkflowExecutionResponse | $.VarRef<shared.StartWorkflowExecutionResponse> | null, $.GoError]> {
		const m: MockClient | $.VarRef<MockClient> | null = this;
		let success: shared.StartWorkflowExecutionResponse | $.VarRef<shared.StartWorkflowExecutionResponse> | null = null! as shared.StartWorkflowExecutionResponse | $.VarRef<shared.StartWorkflowExecutionResponse> | null
		let err: $.GoError = null! as $.GoError

		let args: $.Slice<any> = $.arrayToSlice<any>([(ctx as any), $.interfaceValue(_StartRequest, "*shared.StartWorkflowExecutionRequest", /* @__PURE__ */ $.pointerType("shared.StartWorkflowExecutionRequest"))])
		for (let __goscriptRangeTarget49 = opts, __goscriptRangeWindow49 = $.sliceRange(__goscriptRangeTarget49), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow49.length; __rangeIndex++) {
			let o = ((__goscriptRangeWindow49.backing[__goscriptRangeWindow49.offset + __rangeIndex] as yarpc.CallOption)).clone()
			args = $.appendOne(args, $.interfaceValue((o).clone(), "yarpc.CallOption", "yarpc.CallOption"), $.appendZeros.nil)
		}
		let i = 0
		let ret: $.Slice<any> = await gomock.Controller.prototype.Call.call($.pointerValue<MockClient>(m).ctrl, $.interfaceValue(m, "*workflowservicetest.MockClient", /* @__PURE__ */ $.pointerType("workflowservicetest.MockClient")), "StartWorkflowExecution", args)
		let __goscriptTuple84: any = $.typeAssertTuple<shared.StartWorkflowExecutionResponse | $.VarRef<shared.StartWorkflowExecutionResponse> | null>($.arrayIndex(ret!, i), /* @__PURE__ */ $.pointerType("shared.StartWorkflowExecutionResponse"))
		success = __goscriptTuple84[0]
		i++
		let __goscriptTuple85: any = $.typeAssertTuple<$.GoError>($.arrayIndex(ret!, i), "error")
		err = __goscriptTuple85[0]
		return [success, err]
	}

	public async StartWorkflowExecutionAsync(ctx: context.Context | null, _StartRequest: shared.StartWorkflowExecutionAsyncRequest | $.VarRef<shared.StartWorkflowExecutionAsyncRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.StartWorkflowExecutionAsyncResponse | $.VarRef<shared.StartWorkflowExecutionAsyncResponse> | null, $.GoError]> {
		const m: MockClient | $.VarRef<MockClient> | null = this;
		let success: shared.StartWorkflowExecutionAsyncResponse | $.VarRef<shared.StartWorkflowExecutionAsyncResponse> | null = null! as shared.StartWorkflowExecutionAsyncResponse | $.VarRef<shared.StartWorkflowExecutionAsyncResponse> | null
		let err: $.GoError = null! as $.GoError

		let args: $.Slice<any> = $.arrayToSlice<any>([(ctx as any), $.interfaceValue(_StartRequest, "*shared.StartWorkflowExecutionAsyncRequest", /* @__PURE__ */ $.pointerType("shared.StartWorkflowExecutionAsyncRequest"))])
		for (let __goscriptRangeTarget50 = opts, __goscriptRangeWindow50 = $.sliceRange(__goscriptRangeTarget50), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow50.length; __rangeIndex++) {
			let o = ((__goscriptRangeWindow50.backing[__goscriptRangeWindow50.offset + __rangeIndex] as yarpc.CallOption)).clone()
			args = $.appendOne(args, $.interfaceValue((o).clone(), "yarpc.CallOption", "yarpc.CallOption"), $.appendZeros.nil)
		}
		let i = 0
		let ret: $.Slice<any> = await gomock.Controller.prototype.Call.call($.pointerValue<MockClient>(m).ctrl, $.interfaceValue(m, "*workflowservicetest.MockClient", /* @__PURE__ */ $.pointerType("workflowservicetest.MockClient")), "StartWorkflowExecutionAsync", args)
		let __goscriptTuple86: any = $.typeAssertTuple<shared.StartWorkflowExecutionAsyncResponse | $.VarRef<shared.StartWorkflowExecutionAsyncResponse> | null>($.arrayIndex(ret!, i), /* @__PURE__ */ $.pointerType("shared.StartWorkflowExecutionAsyncResponse"))
		success = __goscriptTuple86[0]
		i++
		let __goscriptTuple87: any = $.typeAssertTuple<$.GoError>($.arrayIndex(ret!, i), "error")
		err = __goscriptTuple87[0]
		return [success, err]
	}

	public async TerminateWorkflowExecution(ctx: context.Context | null, _TerminateRequest: shared.TerminateWorkflowExecutionRequest | $.VarRef<shared.TerminateWorkflowExecutionRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<$.GoError> {
		const m: MockClient | $.VarRef<MockClient> | null = this;
		let err: $.GoError = null! as $.GoError

		let args: $.Slice<any> = $.arrayToSlice<any>([(ctx as any), $.interfaceValue(_TerminateRequest, "*shared.TerminateWorkflowExecutionRequest", /* @__PURE__ */ $.pointerType("shared.TerminateWorkflowExecutionRequest"))])
		for (let __goscriptRangeTarget51 = opts, __goscriptRangeWindow51 = $.sliceRange(__goscriptRangeTarget51), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow51.length; __rangeIndex++) {
			let o = ((__goscriptRangeWindow51.backing[__goscriptRangeWindow51.offset + __rangeIndex] as yarpc.CallOption)).clone()
			args = $.appendOne(args, $.interfaceValue((o).clone(), "yarpc.CallOption", "yarpc.CallOption"), $.appendZeros.nil)
		}
		let i = 0
		let ret: $.Slice<any> = await gomock.Controller.prototype.Call.call($.pointerValue<MockClient>(m).ctrl, $.interfaceValue(m, "*workflowservicetest.MockClient", /* @__PURE__ */ $.pointerType("workflowservicetest.MockClient")), "TerminateWorkflowExecution", args)
		let __goscriptTuple88: any = $.typeAssertTuple<$.GoError>($.arrayIndex(ret!, i), "error")
		err = __goscriptTuple88[0]
		return err
	}

	public async UnpauseSchedule(ctx: context.Context | null, _Request: shared.UnpauseScheduleRequest | $.VarRef<shared.UnpauseScheduleRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.UnpauseScheduleResponse | $.VarRef<shared.UnpauseScheduleResponse> | null, $.GoError]> {
		const m: MockClient | $.VarRef<MockClient> | null = this;
		let success: shared.UnpauseScheduleResponse | $.VarRef<shared.UnpauseScheduleResponse> | null = null! as shared.UnpauseScheduleResponse | $.VarRef<shared.UnpauseScheduleResponse> | null
		let err: $.GoError = null! as $.GoError

		let args: $.Slice<any> = $.arrayToSlice<any>([(ctx as any), $.interfaceValue(_Request, "*shared.UnpauseScheduleRequest", /* @__PURE__ */ $.pointerType("shared.UnpauseScheduleRequest"))])
		for (let __goscriptRangeTarget52 = opts, __goscriptRangeWindow52 = $.sliceRange(__goscriptRangeTarget52), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow52.length; __rangeIndex++) {
			let o = ((__goscriptRangeWindow52.backing[__goscriptRangeWindow52.offset + __rangeIndex] as yarpc.CallOption)).clone()
			args = $.appendOne(args, $.interfaceValue((o).clone(), "yarpc.CallOption", "yarpc.CallOption"), $.appendZeros.nil)
		}
		let i = 0
		let ret: $.Slice<any> = await gomock.Controller.prototype.Call.call($.pointerValue<MockClient>(m).ctrl, $.interfaceValue(m, "*workflowservicetest.MockClient", /* @__PURE__ */ $.pointerType("workflowservicetest.MockClient")), "UnpauseSchedule", args)
		let __goscriptTuple89: any = $.typeAssertTuple<shared.UnpauseScheduleResponse | $.VarRef<shared.UnpauseScheduleResponse> | null>($.arrayIndex(ret!, i), /* @__PURE__ */ $.pointerType("shared.UnpauseScheduleResponse"))
		success = __goscriptTuple89[0]
		i++
		let __goscriptTuple90: any = $.typeAssertTuple<$.GoError>($.arrayIndex(ret!, i), "error")
		err = __goscriptTuple90[0]
		return [success, err]
	}

	public async UpdateDomain(ctx: context.Context | null, _UpdateRequest: shared.UpdateDomainRequest | $.VarRef<shared.UpdateDomainRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.UpdateDomainResponse | $.VarRef<shared.UpdateDomainResponse> | null, $.GoError]> {
		const m: MockClient | $.VarRef<MockClient> | null = this;
		let success: shared.UpdateDomainResponse | $.VarRef<shared.UpdateDomainResponse> | null = null! as shared.UpdateDomainResponse | $.VarRef<shared.UpdateDomainResponse> | null
		let err: $.GoError = null! as $.GoError

		let args: $.Slice<any> = $.arrayToSlice<any>([(ctx as any), $.interfaceValue(_UpdateRequest, "*shared.UpdateDomainRequest", /* @__PURE__ */ $.pointerType("shared.UpdateDomainRequest"))])
		for (let __goscriptRangeTarget53 = opts, __goscriptRangeWindow53 = $.sliceRange(__goscriptRangeTarget53), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow53.length; __rangeIndex++) {
			let o = ((__goscriptRangeWindow53.backing[__goscriptRangeWindow53.offset + __rangeIndex] as yarpc.CallOption)).clone()
			args = $.appendOne(args, $.interfaceValue((o).clone(), "yarpc.CallOption", "yarpc.CallOption"), $.appendZeros.nil)
		}
		let i = 0
		let ret: $.Slice<any> = await gomock.Controller.prototype.Call.call($.pointerValue<MockClient>(m).ctrl, $.interfaceValue(m, "*workflowservicetest.MockClient", /* @__PURE__ */ $.pointerType("workflowservicetest.MockClient")), "UpdateDomain", args)
		let __goscriptTuple91: any = $.typeAssertTuple<shared.UpdateDomainResponse | $.VarRef<shared.UpdateDomainResponse> | null>($.arrayIndex(ret!, i), /* @__PURE__ */ $.pointerType("shared.UpdateDomainResponse"))
		success = __goscriptTuple91[0]
		i++
		let __goscriptTuple92: any = $.typeAssertTuple<$.GoError>($.arrayIndex(ret!, i), "error")
		err = __goscriptTuple92[0]
		return [success, err]
	}

	public async UpdateSchedule(ctx: context.Context | null, _Request: shared.UpdateScheduleRequest | $.VarRef<shared.UpdateScheduleRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.UpdateScheduleResponse | $.VarRef<shared.UpdateScheduleResponse> | null, $.GoError]> {
		const m: MockClient | $.VarRef<MockClient> | null = this;
		let success: shared.UpdateScheduleResponse | $.VarRef<shared.UpdateScheduleResponse> | null = null! as shared.UpdateScheduleResponse | $.VarRef<shared.UpdateScheduleResponse> | null
		let err: $.GoError = null! as $.GoError

		let args: $.Slice<any> = $.arrayToSlice<any>([(ctx as any), $.interfaceValue(_Request, "*shared.UpdateScheduleRequest", /* @__PURE__ */ $.pointerType("shared.UpdateScheduleRequest"))])
		for (let __goscriptRangeTarget54 = opts, __goscriptRangeWindow54 = $.sliceRange(__goscriptRangeTarget54), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow54.length; __rangeIndex++) {
			let o = ((__goscriptRangeWindow54.backing[__goscriptRangeWindow54.offset + __rangeIndex] as yarpc.CallOption)).clone()
			args = $.appendOne(args, $.interfaceValue((o).clone(), "yarpc.CallOption", "yarpc.CallOption"), $.appendZeros.nil)
		}
		let i = 0
		let ret: $.Slice<any> = await gomock.Controller.prototype.Call.call($.pointerValue<MockClient>(m).ctrl, $.interfaceValue(m, "*workflowservicetest.MockClient", /* @__PURE__ */ $.pointerType("workflowservicetest.MockClient")), "UpdateSchedule", args)
		let __goscriptTuple93: any = $.typeAssertTuple<shared.UpdateScheduleResponse | $.VarRef<shared.UpdateScheduleResponse> | null>($.arrayIndex(ret!, i), /* @__PURE__ */ $.pointerType("shared.UpdateScheduleResponse"))
		success = __goscriptTuple93[0]
		i++
		let __goscriptTuple94: any = $.typeAssertTuple<$.GoError>($.arrayIndex(ret!, i), "error")
		err = __goscriptTuple94[0]
		return [success, err]
	}

	static __typeInfo = $.registerStructType(
		"workflowservicetest.MockClient",
		() => new MockClient(),
		() => [$.methodSignature("BackfillSchedule", [["ctx", "context.Context"], ["_Request", /* @__PURE__ */ $.pointerType("shared.BackfillScheduleRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [["success", /* @__PURE__ */ $.pointerType("shared.BackfillScheduleResponse")], ["err", "error"]], true), $.methodSignature("CountWorkflowExecutions", [["ctx", "context.Context"], ["_CountRequest", /* @__PURE__ */ $.pointerType("shared.CountWorkflowExecutionsRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [["success", /* @__PURE__ */ $.pointerType("shared.CountWorkflowExecutionsResponse")], ["err", "error"]], true), $.methodSignature("CreateSchedule", [["ctx", "context.Context"], ["_Request", /* @__PURE__ */ $.pointerType("shared.CreateScheduleRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [["success", /* @__PURE__ */ $.pointerType("shared.CreateScheduleResponse")], ["err", "error"]], true), $.methodSignature("DeleteDomain", [["ctx", "context.Context"], ["_DeleteRequest", /* @__PURE__ */ $.pointerType("shared.DeleteDomainRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [["err", "error"]], true), $.methodSignature("DeleteSchedule", [["ctx", "context.Context"], ["_Request", /* @__PURE__ */ $.pointerType("shared.DeleteScheduleRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [["success", /* @__PURE__ */ $.pointerType("shared.DeleteScheduleResponse")], ["err", "error"]], true), $.methodSignature("DeprecateDomain", [["ctx", "context.Context"], ["_DeprecateRequest", /* @__PURE__ */ $.pointerType("shared.DeprecateDomainRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [["err", "error"]], true), $.methodSignature("DescribeDomain", [["ctx", "context.Context"], ["_DescribeRequest", /* @__PURE__ */ $.pointerType("shared.DescribeDomainRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [["success", /* @__PURE__ */ $.pointerType("shared.DescribeDomainResponse")], ["err", "error"]], true), $.methodSignature("DescribeSchedule", [["ctx", "context.Context"], ["_Request", /* @__PURE__ */ $.pointerType("shared.DescribeScheduleRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [["success", /* @__PURE__ */ $.pointerType("shared.DescribeScheduleResponse")], ["err", "error"]], true), $.methodSignature("DescribeTaskList", [["ctx", "context.Context"], ["_Request", /* @__PURE__ */ $.pointerType("shared.DescribeTaskListRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [["success", /* @__PURE__ */ $.pointerType("shared.DescribeTaskListResponse")], ["err", "error"]], true), $.methodSignature("DescribeWorkflowExecution", [["ctx", "context.Context"], ["_DescribeRequest", /* @__PURE__ */ $.pointerType("shared.DescribeWorkflowExecutionRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [["success", /* @__PURE__ */ $.pointerType("shared.DescribeWorkflowExecutionResponse")], ["err", "error"]], true), $.methodSignature("DiagnoseWorkflowExecution", [["ctx", "context.Context"], ["_DiagnoseRequest", /* @__PURE__ */ $.pointerType("shared.DiagnoseWorkflowExecutionRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [["success", /* @__PURE__ */ $.pointerType("shared.DiagnoseWorkflowExecutionResponse")], ["err", "error"]], true), $.methodSignature("EXPECT", [], [/* @__PURE__ */ $.pointerType("workflowservicetest._MockClientRecorder")], true), $.methodSignature("FailoverDomain", [["ctx", "context.Context"], ["_FailoverRequest", /* @__PURE__ */ $.pointerType("shared.FailoverDomainRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [["success", /* @__PURE__ */ $.pointerType("shared.FailoverDomainResponse")], ["err", "error"]], true), $.methodSignature("GetClusterInfo", [["ctx", "context.Context"], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [["success", /* @__PURE__ */ $.pointerType("shared.ClusterInfo")], ["err", "error"]], true), $.methodSignature("GetSearchAttributes", [["ctx", "context.Context"], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [["success", /* @__PURE__ */ $.pointerType("shared.GetSearchAttributesResponse")], ["err", "error"]], true), $.methodSignature("GetTaskListsByDomain", [["ctx", "context.Context"], ["_Request", /* @__PURE__ */ $.pointerType("shared.GetTaskListsByDomainRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [["success", /* @__PURE__ */ $.pointerType("shared.GetTaskListsByDomainResponse")], ["err", "error"]], true), $.methodSignature("GetWorkflowExecutionHistory", [["ctx", "context.Context"], ["_GetRequest", /* @__PURE__ */ $.pointerType("shared.GetWorkflowExecutionHistoryRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [["success", /* @__PURE__ */ $.pointerType("shared.GetWorkflowExecutionHistoryResponse")], ["err", "error"]], true), $.methodSignature("ListArchivedWorkflowExecutions", [["ctx", "context.Context"], ["_ListRequest", /* @__PURE__ */ $.pointerType("shared.ListArchivedWorkflowExecutionsRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [["success", /* @__PURE__ */ $.pointerType("shared.ListArchivedWorkflowExecutionsResponse")], ["err", "error"]], true), $.methodSignature("ListClosedWorkflowExecutions", [["ctx", "context.Context"], ["_ListRequest", /* @__PURE__ */ $.pointerType("shared.ListClosedWorkflowExecutionsRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [["success", /* @__PURE__ */ $.pointerType("shared.ListClosedWorkflowExecutionsResponse")], ["err", "error"]], true), $.methodSignature("ListDomains", [["ctx", "context.Context"], ["_ListRequest", /* @__PURE__ */ $.pointerType("shared.ListDomainsRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [["success", /* @__PURE__ */ $.pointerType("shared.ListDomainsResponse")], ["err", "error"]], true), $.methodSignature("ListFailoverHistory", [["ctx", "context.Context"], ["_ListRequest", /* @__PURE__ */ $.pointerType("shared.ListFailoverHistoryRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [["success", /* @__PURE__ */ $.pointerType("shared.ListFailoverHistoryResponse")], ["err", "error"]], true), $.methodSignature("ListOpenWorkflowExecutions", [["ctx", "context.Context"], ["_ListRequest", /* @__PURE__ */ $.pointerType("shared.ListOpenWorkflowExecutionsRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [["success", /* @__PURE__ */ $.pointerType("shared.ListOpenWorkflowExecutionsResponse")], ["err", "error"]], true), $.methodSignature("ListSchedules", [["ctx", "context.Context"], ["_Request", /* @__PURE__ */ $.pointerType("shared.ListSchedulesRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [["success", /* @__PURE__ */ $.pointerType("shared.ListSchedulesResponse")], ["err", "error"]], true), $.methodSignature("ListTaskListPartitions", [["ctx", "context.Context"], ["_Request", /* @__PURE__ */ $.pointerType("shared.ListTaskListPartitionsRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [["success", /* @__PURE__ */ $.pointerType("shared.ListTaskListPartitionsResponse")], ["err", "error"]], true), $.methodSignature("ListWorkflowExecutions", [["ctx", "context.Context"], ["_ListRequest", /* @__PURE__ */ $.pointerType("shared.ListWorkflowExecutionsRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [["success", /* @__PURE__ */ $.pointerType("shared.ListWorkflowExecutionsResponse")], ["err", "error"]], true), $.methodSignature("PauseSchedule", [["ctx", "context.Context"], ["_Request", /* @__PURE__ */ $.pointerType("shared.PauseScheduleRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [["success", /* @__PURE__ */ $.pointerType("shared.PauseScheduleResponse")], ["err", "error"]], true), $.methodSignature("PollForActivityTask", [["ctx", "context.Context"], ["_PollRequest", /* @__PURE__ */ $.pointerType("shared.PollForActivityTaskRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [["success", /* @__PURE__ */ $.pointerType("shared.PollForActivityTaskResponse")], ["err", "error"]], true), $.methodSignature("PollForDecisionTask", [["ctx", "context.Context"], ["_PollRequest", /* @__PURE__ */ $.pointerType("shared.PollForDecisionTaskRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [["success", /* @__PURE__ */ $.pointerType("shared.PollForDecisionTaskResponse")], ["err", "error"]], true), $.methodSignature("QueryWorkflow", [["ctx", "context.Context"], ["_QueryRequest", /* @__PURE__ */ $.pointerType("shared.QueryWorkflowRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [["success", /* @__PURE__ */ $.pointerType("shared.QueryWorkflowResponse")], ["err", "error"]], true), $.methodSignature("RecordActivityTaskHeartbeat", [["ctx", "context.Context"], ["_HeartbeatRequest", /* @__PURE__ */ $.pointerType("shared.RecordActivityTaskHeartbeatRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [["success", /* @__PURE__ */ $.pointerType("shared.RecordActivityTaskHeartbeatResponse")], ["err", "error"]], true), $.methodSignature("RecordActivityTaskHeartbeatByID", [["ctx", "context.Context"], ["_HeartbeatRequest", /* @__PURE__ */ $.pointerType("shared.RecordActivityTaskHeartbeatByIDRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [["success", /* @__PURE__ */ $.pointerType("shared.RecordActivityTaskHeartbeatResponse")], ["err", "error"]], true), $.methodSignature("RefreshWorkflowTasks", [["ctx", "context.Context"], ["_Request", /* @__PURE__ */ $.pointerType("shared.RefreshWorkflowTasksRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [["err", "error"]], true), $.methodSignature("RegisterDomain", [["ctx", "context.Context"], ["_RegisterRequest", /* @__PURE__ */ $.pointerType("shared.RegisterDomainRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [["err", "error"]], true), $.methodSignature("RequestCancelWorkflowExecution", [["ctx", "context.Context"], ["_CancelRequest", /* @__PURE__ */ $.pointerType("shared.RequestCancelWorkflowExecutionRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [["err", "error"]], true), $.methodSignature("ResetStickyTaskList", [["ctx", "context.Context"], ["_ResetRequest", /* @__PURE__ */ $.pointerType("shared.ResetStickyTaskListRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [["success", /* @__PURE__ */ $.pointerType("shared.ResetStickyTaskListResponse")], ["err", "error"]], true), $.methodSignature("ResetWorkflowExecution", [["ctx", "context.Context"], ["_ResetRequest", /* @__PURE__ */ $.pointerType("shared.ResetWorkflowExecutionRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [["success", /* @__PURE__ */ $.pointerType("shared.ResetWorkflowExecutionResponse")], ["err", "error"]], true), $.methodSignature("RespondActivityTaskCanceled", [["ctx", "context.Context"], ["_CanceledRequest", /* @__PURE__ */ $.pointerType("shared.RespondActivityTaskCanceledRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [["err", "error"]], true), $.methodSignature("RespondActivityTaskCanceledByID", [["ctx", "context.Context"], ["_CanceledRequest", /* @__PURE__ */ $.pointerType("shared.RespondActivityTaskCanceledByIDRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [["err", "error"]], true), $.methodSignature("RespondActivityTaskCompleted", [["ctx", "context.Context"], ["_CompleteRequest", /* @__PURE__ */ $.pointerType("shared.RespondActivityTaskCompletedRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [["err", "error"]], true), $.methodSignature("RespondActivityTaskCompletedByID", [["ctx", "context.Context"], ["_CompleteRequest", /* @__PURE__ */ $.pointerType("shared.RespondActivityTaskCompletedByIDRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [["err", "error"]], true), $.methodSignature("RespondActivityTaskFailed", [["ctx", "context.Context"], ["_FailRequest", /* @__PURE__ */ $.pointerType("shared.RespondActivityTaskFailedRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [["err", "error"]], true), $.methodSignature("RespondActivityTaskFailedByID", [["ctx", "context.Context"], ["_FailRequest", /* @__PURE__ */ $.pointerType("shared.RespondActivityTaskFailedByIDRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [["err", "error"]], true), $.methodSignature("RespondDecisionTaskCompleted", [["ctx", "context.Context"], ["_CompleteRequest", /* @__PURE__ */ $.pointerType("shared.RespondDecisionTaskCompletedRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [["success", /* @__PURE__ */ $.pointerType("shared.RespondDecisionTaskCompletedResponse")], ["err", "error"]], true), $.methodSignature("RespondDecisionTaskFailed", [["ctx", "context.Context"], ["_FailedRequest", /* @__PURE__ */ $.pointerType("shared.RespondDecisionTaskFailedRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [["err", "error"]], true), $.methodSignature("RespondQueryTaskCompleted", [["ctx", "context.Context"], ["_CompleteRequest", /* @__PURE__ */ $.pointerType("shared.RespondQueryTaskCompletedRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [["err", "error"]], true), $.methodSignature("RestartWorkflowExecution", [["ctx", "context.Context"], ["_RestartRequest", /* @__PURE__ */ $.pointerType("shared.RestartWorkflowExecutionRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [["success", /* @__PURE__ */ $.pointerType("shared.RestartWorkflowExecutionResponse")], ["err", "error"]], true), $.methodSignature("ScanWorkflowExecutions", [["ctx", "context.Context"], ["_ListRequest", /* @__PURE__ */ $.pointerType("shared.ListWorkflowExecutionsRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [["success", /* @__PURE__ */ $.pointerType("shared.ListWorkflowExecutionsResponse")], ["err", "error"]], true), $.methodSignature("SignalWithStartWorkflowExecution", [["ctx", "context.Context"], ["_SignalWithStartRequest", /* @__PURE__ */ $.pointerType("shared.SignalWithStartWorkflowExecutionRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [["success", /* @__PURE__ */ $.pointerType("shared.StartWorkflowExecutionResponse")], ["err", "error"]], true), $.methodSignature("SignalWithStartWorkflowExecutionAsync", [["ctx", "context.Context"], ["_SignalWithStartRequest", /* @__PURE__ */ $.pointerType("shared.SignalWithStartWorkflowExecutionAsyncRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [["success", /* @__PURE__ */ $.pointerType("shared.SignalWithStartWorkflowExecutionAsyncResponse")], ["err", "error"]], true), $.methodSignature("SignalWorkflowExecution", [["ctx", "context.Context"], ["_SignalRequest", /* @__PURE__ */ $.pointerType("shared.SignalWorkflowExecutionRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [["err", "error"]], true), $.methodSignature("StartWorkflowExecution", [["ctx", "context.Context"], ["_StartRequest", /* @__PURE__ */ $.pointerType("shared.StartWorkflowExecutionRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [["success", /* @__PURE__ */ $.pointerType("shared.StartWorkflowExecutionResponse")], ["err", "error"]], true), $.methodSignature("StartWorkflowExecutionAsync", [["ctx", "context.Context"], ["_StartRequest", /* @__PURE__ */ $.pointerType("shared.StartWorkflowExecutionAsyncRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [["success", /* @__PURE__ */ $.pointerType("shared.StartWorkflowExecutionAsyncResponse")], ["err", "error"]], true), $.methodSignature("TerminateWorkflowExecution", [["ctx", "context.Context"], ["_TerminateRequest", /* @__PURE__ */ $.pointerType("shared.TerminateWorkflowExecutionRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [["err", "error"]], true), $.methodSignature("UnpauseSchedule", [["ctx", "context.Context"], ["_Request", /* @__PURE__ */ $.pointerType("shared.UnpauseScheduleRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [["success", /* @__PURE__ */ $.pointerType("shared.UnpauseScheduleResponse")], ["err", "error"]], true), $.methodSignature("UpdateDomain", [["ctx", "context.Context"], ["_UpdateRequest", /* @__PURE__ */ $.pointerType("shared.UpdateDomainRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [["success", /* @__PURE__ */ $.pointerType("shared.UpdateDomainResponse")], ["err", "error"]], true), $.methodSignature("UpdateSchedule", [["ctx", "context.Context"], ["_Request", /* @__PURE__ */ $.pointerType("shared.UpdateScheduleRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [["success", /* @__PURE__ */ $.pointerType("shared.UpdateScheduleResponse")], ["err", "error"]], true)],
		MockClient,
		() => [/* @__PURE__ */ $.structField("ctrl", /* @__PURE__ */ $.pointerType("gomock.Controller"), [0], 0, false, { pkgPath: "go.uber.org/cadence/.gen/go/cadence/workflowservicetest" }), /* @__PURE__ */ $.structField("recorder", /* @__PURE__ */ $.pointerType("workflowservicetest._MockClientRecorder"), [1], 8, false, { pkgPath: "go.uber.org/cadence/.gen/go/cadence/workflowservicetest" })]
	)
}

export class _MockClientRecorder {
	public get mock(): MockClient | $.VarRef<MockClient> | null {
		return this._fields.mock
	}

	public set mock(value: MockClient | $.VarRef<MockClient> | null) {
		this._fields.mock = value
	}

	public _fields: {
		mock: MockClient | $.VarRef<MockClient> | null
	}

	constructor(init?: Partial<{mock?: MockClient | $.VarRef<MockClient> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			mock: init?.mock ?? (null! as MockClient | $.VarRef<MockClient> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): _MockClientRecorder {
		return new _MockClientRecorder(this, true)
	}

	public __goscriptAssign(source: _MockClientRecorder): void {
		const target = this._fields
		const values = source._fields
		target.mock = values.mock
	}

	public async BackfillSchedule(ctx: any, _Request: any, opts: $.Slice<any>): globalThis.Promise<gomock.Call | $.VarRef<gomock.Call> | null> {
		const mr: _MockClientRecorder | $.VarRef<_MockClientRecorder> | null = this;
		const mr$: _MockClientRecorder = mr == null ? $.pointerTarget<_MockClientRecorder>(mr) : (mr as any).__isVarRef === true ? (mr as any).value : (mr as any).__goValue === undefined ? (mr as any) : $.pointerTarget<_MockClientRecorder>(mr)
		let args: $.Slice<any> = $.appendSlice($.arrayToSlice<any>([ctx, _Request]), opts, $.appendZeros.nil)
		return gomock.Controller.prototype.RecordCall.call($.pointerValue<MockClient>((mr$ as _MockClientRecorder).mock).ctrl, $.interfaceValue((mr$ as _MockClientRecorder).mock, "*workflowservicetest.MockClient", /* @__PURE__ */ $.pointerType("workflowservicetest.MockClient")), "BackfillSchedule", args)
	}

	public async CountWorkflowExecutions(ctx: any, _CountRequest: any, opts: $.Slice<any>): globalThis.Promise<gomock.Call | $.VarRef<gomock.Call> | null> {
		const mr: _MockClientRecorder | $.VarRef<_MockClientRecorder> | null = this;
		const mr$: _MockClientRecorder = mr == null ? $.pointerTarget<_MockClientRecorder>(mr) : (mr as any).__isVarRef === true ? (mr as any).value : (mr as any).__goValue === undefined ? (mr as any) : $.pointerTarget<_MockClientRecorder>(mr)
		let args: $.Slice<any> = $.appendSlice($.arrayToSlice<any>([ctx, _CountRequest]), opts, $.appendZeros.nil)
		return gomock.Controller.prototype.RecordCall.call($.pointerValue<MockClient>((mr$ as _MockClientRecorder).mock).ctrl, $.interfaceValue((mr$ as _MockClientRecorder).mock, "*workflowservicetest.MockClient", /* @__PURE__ */ $.pointerType("workflowservicetest.MockClient")), "CountWorkflowExecutions", args)
	}

	public async CreateSchedule(ctx: any, _Request: any, opts: $.Slice<any>): globalThis.Promise<gomock.Call | $.VarRef<gomock.Call> | null> {
		const mr: _MockClientRecorder | $.VarRef<_MockClientRecorder> | null = this;
		const mr$: _MockClientRecorder = mr == null ? $.pointerTarget<_MockClientRecorder>(mr) : (mr as any).__isVarRef === true ? (mr as any).value : (mr as any).__goValue === undefined ? (mr as any) : $.pointerTarget<_MockClientRecorder>(mr)
		let args: $.Slice<any> = $.appendSlice($.arrayToSlice<any>([ctx, _Request]), opts, $.appendZeros.nil)
		return gomock.Controller.prototype.RecordCall.call($.pointerValue<MockClient>((mr$ as _MockClientRecorder).mock).ctrl, $.interfaceValue((mr$ as _MockClientRecorder).mock, "*workflowservicetest.MockClient", /* @__PURE__ */ $.pointerType("workflowservicetest.MockClient")), "CreateSchedule", args)
	}

	public async DeleteDomain(ctx: any, _DeleteRequest: any, opts: $.Slice<any>): globalThis.Promise<gomock.Call | $.VarRef<gomock.Call> | null> {
		const mr: _MockClientRecorder | $.VarRef<_MockClientRecorder> | null = this;
		const mr$: _MockClientRecorder = mr == null ? $.pointerTarget<_MockClientRecorder>(mr) : (mr as any).__isVarRef === true ? (mr as any).value : (mr as any).__goValue === undefined ? (mr as any) : $.pointerTarget<_MockClientRecorder>(mr)
		let args: $.Slice<any> = $.appendSlice($.arrayToSlice<any>([ctx, _DeleteRequest]), opts, $.appendZeros.nil)
		return gomock.Controller.prototype.RecordCall.call($.pointerValue<MockClient>((mr$ as _MockClientRecorder).mock).ctrl, $.interfaceValue((mr$ as _MockClientRecorder).mock, "*workflowservicetest.MockClient", /* @__PURE__ */ $.pointerType("workflowservicetest.MockClient")), "DeleteDomain", args)
	}

	public async DeleteSchedule(ctx: any, _Request: any, opts: $.Slice<any>): globalThis.Promise<gomock.Call | $.VarRef<gomock.Call> | null> {
		const mr: _MockClientRecorder | $.VarRef<_MockClientRecorder> | null = this;
		const mr$: _MockClientRecorder = mr == null ? $.pointerTarget<_MockClientRecorder>(mr) : (mr as any).__isVarRef === true ? (mr as any).value : (mr as any).__goValue === undefined ? (mr as any) : $.pointerTarget<_MockClientRecorder>(mr)
		let args: $.Slice<any> = $.appendSlice($.arrayToSlice<any>([ctx, _Request]), opts, $.appendZeros.nil)
		return gomock.Controller.prototype.RecordCall.call($.pointerValue<MockClient>((mr$ as _MockClientRecorder).mock).ctrl, $.interfaceValue((mr$ as _MockClientRecorder).mock, "*workflowservicetest.MockClient", /* @__PURE__ */ $.pointerType("workflowservicetest.MockClient")), "DeleteSchedule", args)
	}

	public async DeprecateDomain(ctx: any, _DeprecateRequest: any, opts: $.Slice<any>): globalThis.Promise<gomock.Call | $.VarRef<gomock.Call> | null> {
		const mr: _MockClientRecorder | $.VarRef<_MockClientRecorder> | null = this;
		const mr$: _MockClientRecorder = mr == null ? $.pointerTarget<_MockClientRecorder>(mr) : (mr as any).__isVarRef === true ? (mr as any).value : (mr as any).__goValue === undefined ? (mr as any) : $.pointerTarget<_MockClientRecorder>(mr)
		let args: $.Slice<any> = $.appendSlice($.arrayToSlice<any>([ctx, _DeprecateRequest]), opts, $.appendZeros.nil)
		return gomock.Controller.prototype.RecordCall.call($.pointerValue<MockClient>((mr$ as _MockClientRecorder).mock).ctrl, $.interfaceValue((mr$ as _MockClientRecorder).mock, "*workflowservicetest.MockClient", /* @__PURE__ */ $.pointerType("workflowservicetest.MockClient")), "DeprecateDomain", args)
	}

	public async DescribeDomain(ctx: any, _DescribeRequest: any, opts: $.Slice<any>): globalThis.Promise<gomock.Call | $.VarRef<gomock.Call> | null> {
		const mr: _MockClientRecorder | $.VarRef<_MockClientRecorder> | null = this;
		const mr$: _MockClientRecorder = mr == null ? $.pointerTarget<_MockClientRecorder>(mr) : (mr as any).__isVarRef === true ? (mr as any).value : (mr as any).__goValue === undefined ? (mr as any) : $.pointerTarget<_MockClientRecorder>(mr)
		let args: $.Slice<any> = $.appendSlice($.arrayToSlice<any>([ctx, _DescribeRequest]), opts, $.appendZeros.nil)
		return gomock.Controller.prototype.RecordCall.call($.pointerValue<MockClient>((mr$ as _MockClientRecorder).mock).ctrl, $.interfaceValue((mr$ as _MockClientRecorder).mock, "*workflowservicetest.MockClient", /* @__PURE__ */ $.pointerType("workflowservicetest.MockClient")), "DescribeDomain", args)
	}

	public async DescribeSchedule(ctx: any, _Request: any, opts: $.Slice<any>): globalThis.Promise<gomock.Call | $.VarRef<gomock.Call> | null> {
		const mr: _MockClientRecorder | $.VarRef<_MockClientRecorder> | null = this;
		const mr$: _MockClientRecorder = mr == null ? $.pointerTarget<_MockClientRecorder>(mr) : (mr as any).__isVarRef === true ? (mr as any).value : (mr as any).__goValue === undefined ? (mr as any) : $.pointerTarget<_MockClientRecorder>(mr)
		let args: $.Slice<any> = $.appendSlice($.arrayToSlice<any>([ctx, _Request]), opts, $.appendZeros.nil)
		return gomock.Controller.prototype.RecordCall.call($.pointerValue<MockClient>((mr$ as _MockClientRecorder).mock).ctrl, $.interfaceValue((mr$ as _MockClientRecorder).mock, "*workflowservicetest.MockClient", /* @__PURE__ */ $.pointerType("workflowservicetest.MockClient")), "DescribeSchedule", args)
	}

	public async DescribeTaskList(ctx: any, _Request: any, opts: $.Slice<any>): globalThis.Promise<gomock.Call | $.VarRef<gomock.Call> | null> {
		const mr: _MockClientRecorder | $.VarRef<_MockClientRecorder> | null = this;
		const mr$: _MockClientRecorder = mr == null ? $.pointerTarget<_MockClientRecorder>(mr) : (mr as any).__isVarRef === true ? (mr as any).value : (mr as any).__goValue === undefined ? (mr as any) : $.pointerTarget<_MockClientRecorder>(mr)
		let args: $.Slice<any> = $.appendSlice($.arrayToSlice<any>([ctx, _Request]), opts, $.appendZeros.nil)
		return gomock.Controller.prototype.RecordCall.call($.pointerValue<MockClient>((mr$ as _MockClientRecorder).mock).ctrl, $.interfaceValue((mr$ as _MockClientRecorder).mock, "*workflowservicetest.MockClient", /* @__PURE__ */ $.pointerType("workflowservicetest.MockClient")), "DescribeTaskList", args)
	}

	public async DescribeWorkflowExecution(ctx: any, _DescribeRequest: any, opts: $.Slice<any>): globalThis.Promise<gomock.Call | $.VarRef<gomock.Call> | null> {
		const mr: _MockClientRecorder | $.VarRef<_MockClientRecorder> | null = this;
		const mr$: _MockClientRecorder = mr == null ? $.pointerTarget<_MockClientRecorder>(mr) : (mr as any).__isVarRef === true ? (mr as any).value : (mr as any).__goValue === undefined ? (mr as any) : $.pointerTarget<_MockClientRecorder>(mr)
		let args: $.Slice<any> = $.appendSlice($.arrayToSlice<any>([ctx, _DescribeRequest]), opts, $.appendZeros.nil)
		return gomock.Controller.prototype.RecordCall.call($.pointerValue<MockClient>((mr$ as _MockClientRecorder).mock).ctrl, $.interfaceValue((mr$ as _MockClientRecorder).mock, "*workflowservicetest.MockClient", /* @__PURE__ */ $.pointerType("workflowservicetest.MockClient")), "DescribeWorkflowExecution", args)
	}

	public async DiagnoseWorkflowExecution(ctx: any, _DiagnoseRequest: any, opts: $.Slice<any>): globalThis.Promise<gomock.Call | $.VarRef<gomock.Call> | null> {
		const mr: _MockClientRecorder | $.VarRef<_MockClientRecorder> | null = this;
		const mr$: _MockClientRecorder = mr == null ? $.pointerTarget<_MockClientRecorder>(mr) : (mr as any).__isVarRef === true ? (mr as any).value : (mr as any).__goValue === undefined ? (mr as any) : $.pointerTarget<_MockClientRecorder>(mr)
		let args: $.Slice<any> = $.appendSlice($.arrayToSlice<any>([ctx, _DiagnoseRequest]), opts, $.appendZeros.nil)
		return gomock.Controller.prototype.RecordCall.call($.pointerValue<MockClient>((mr$ as _MockClientRecorder).mock).ctrl, $.interfaceValue((mr$ as _MockClientRecorder).mock, "*workflowservicetest.MockClient", /* @__PURE__ */ $.pointerType("workflowservicetest.MockClient")), "DiagnoseWorkflowExecution", args)
	}

	public async FailoverDomain(ctx: any, _FailoverRequest: any, opts: $.Slice<any>): globalThis.Promise<gomock.Call | $.VarRef<gomock.Call> | null> {
		const mr: _MockClientRecorder | $.VarRef<_MockClientRecorder> | null = this;
		const mr$: _MockClientRecorder = mr == null ? $.pointerTarget<_MockClientRecorder>(mr) : (mr as any).__isVarRef === true ? (mr as any).value : (mr as any).__goValue === undefined ? (mr as any) : $.pointerTarget<_MockClientRecorder>(mr)
		let args: $.Slice<any> = $.appendSlice($.arrayToSlice<any>([ctx, _FailoverRequest]), opts, $.appendZeros.nil)
		return gomock.Controller.prototype.RecordCall.call($.pointerValue<MockClient>((mr$ as _MockClientRecorder).mock).ctrl, $.interfaceValue((mr$ as _MockClientRecorder).mock, "*workflowservicetest.MockClient", /* @__PURE__ */ $.pointerType("workflowservicetest.MockClient")), "FailoverDomain", args)
	}

	public async GetClusterInfo(ctx: any, opts: $.Slice<any>): globalThis.Promise<gomock.Call | $.VarRef<gomock.Call> | null> {
		const mr: _MockClientRecorder | $.VarRef<_MockClientRecorder> | null = this;
		const mr$: _MockClientRecorder = mr == null ? $.pointerTarget<_MockClientRecorder>(mr) : (mr as any).__isVarRef === true ? (mr as any).value : (mr as any).__goValue === undefined ? (mr as any) : $.pointerTarget<_MockClientRecorder>(mr)
		let args: $.Slice<any> = $.appendSlice($.arrayToSlice<any>([ctx]), opts, $.appendZeros.nil)
		return gomock.Controller.prototype.RecordCall.call($.pointerValue<MockClient>((mr$ as _MockClientRecorder).mock).ctrl, $.interfaceValue((mr$ as _MockClientRecorder).mock, "*workflowservicetest.MockClient", /* @__PURE__ */ $.pointerType("workflowservicetest.MockClient")), "GetClusterInfo", args)
	}

	public async GetSearchAttributes(ctx: any, opts: $.Slice<any>): globalThis.Promise<gomock.Call | $.VarRef<gomock.Call> | null> {
		const mr: _MockClientRecorder | $.VarRef<_MockClientRecorder> | null = this;
		const mr$: _MockClientRecorder = mr == null ? $.pointerTarget<_MockClientRecorder>(mr) : (mr as any).__isVarRef === true ? (mr as any).value : (mr as any).__goValue === undefined ? (mr as any) : $.pointerTarget<_MockClientRecorder>(mr)
		let args: $.Slice<any> = $.appendSlice($.arrayToSlice<any>([ctx]), opts, $.appendZeros.nil)
		return gomock.Controller.prototype.RecordCall.call($.pointerValue<MockClient>((mr$ as _MockClientRecorder).mock).ctrl, $.interfaceValue((mr$ as _MockClientRecorder).mock, "*workflowservicetest.MockClient", /* @__PURE__ */ $.pointerType("workflowservicetest.MockClient")), "GetSearchAttributes", args)
	}

	public async GetTaskListsByDomain(ctx: any, _Request: any, opts: $.Slice<any>): globalThis.Promise<gomock.Call | $.VarRef<gomock.Call> | null> {
		const mr: _MockClientRecorder | $.VarRef<_MockClientRecorder> | null = this;
		const mr$: _MockClientRecorder = mr == null ? $.pointerTarget<_MockClientRecorder>(mr) : (mr as any).__isVarRef === true ? (mr as any).value : (mr as any).__goValue === undefined ? (mr as any) : $.pointerTarget<_MockClientRecorder>(mr)
		let args: $.Slice<any> = $.appendSlice($.arrayToSlice<any>([ctx, _Request]), opts, $.appendZeros.nil)
		return gomock.Controller.prototype.RecordCall.call($.pointerValue<MockClient>((mr$ as _MockClientRecorder).mock).ctrl, $.interfaceValue((mr$ as _MockClientRecorder).mock, "*workflowservicetest.MockClient", /* @__PURE__ */ $.pointerType("workflowservicetest.MockClient")), "GetTaskListsByDomain", args)
	}

	public async GetWorkflowExecutionHistory(ctx: any, _GetRequest: any, opts: $.Slice<any>): globalThis.Promise<gomock.Call | $.VarRef<gomock.Call> | null> {
		const mr: _MockClientRecorder | $.VarRef<_MockClientRecorder> | null = this;
		const mr$: _MockClientRecorder = mr == null ? $.pointerTarget<_MockClientRecorder>(mr) : (mr as any).__isVarRef === true ? (mr as any).value : (mr as any).__goValue === undefined ? (mr as any) : $.pointerTarget<_MockClientRecorder>(mr)
		let args: $.Slice<any> = $.appendSlice($.arrayToSlice<any>([ctx, _GetRequest]), opts, $.appendZeros.nil)
		return gomock.Controller.prototype.RecordCall.call($.pointerValue<MockClient>((mr$ as _MockClientRecorder).mock).ctrl, $.interfaceValue((mr$ as _MockClientRecorder).mock, "*workflowservicetest.MockClient", /* @__PURE__ */ $.pointerType("workflowservicetest.MockClient")), "GetWorkflowExecutionHistory", args)
	}

	public async ListArchivedWorkflowExecutions(ctx: any, _ListRequest: any, opts: $.Slice<any>): globalThis.Promise<gomock.Call | $.VarRef<gomock.Call> | null> {
		const mr: _MockClientRecorder | $.VarRef<_MockClientRecorder> | null = this;
		const mr$: _MockClientRecorder = mr == null ? $.pointerTarget<_MockClientRecorder>(mr) : (mr as any).__isVarRef === true ? (mr as any).value : (mr as any).__goValue === undefined ? (mr as any) : $.pointerTarget<_MockClientRecorder>(mr)
		let args: $.Slice<any> = $.appendSlice($.arrayToSlice<any>([ctx, _ListRequest]), opts, $.appendZeros.nil)
		return gomock.Controller.prototype.RecordCall.call($.pointerValue<MockClient>((mr$ as _MockClientRecorder).mock).ctrl, $.interfaceValue((mr$ as _MockClientRecorder).mock, "*workflowservicetest.MockClient", /* @__PURE__ */ $.pointerType("workflowservicetest.MockClient")), "ListArchivedWorkflowExecutions", args)
	}

	public async ListClosedWorkflowExecutions(ctx: any, _ListRequest: any, opts: $.Slice<any>): globalThis.Promise<gomock.Call | $.VarRef<gomock.Call> | null> {
		const mr: _MockClientRecorder | $.VarRef<_MockClientRecorder> | null = this;
		const mr$: _MockClientRecorder = mr == null ? $.pointerTarget<_MockClientRecorder>(mr) : (mr as any).__isVarRef === true ? (mr as any).value : (mr as any).__goValue === undefined ? (mr as any) : $.pointerTarget<_MockClientRecorder>(mr)
		let args: $.Slice<any> = $.appendSlice($.arrayToSlice<any>([ctx, _ListRequest]), opts, $.appendZeros.nil)
		return gomock.Controller.prototype.RecordCall.call($.pointerValue<MockClient>((mr$ as _MockClientRecorder).mock).ctrl, $.interfaceValue((mr$ as _MockClientRecorder).mock, "*workflowservicetest.MockClient", /* @__PURE__ */ $.pointerType("workflowservicetest.MockClient")), "ListClosedWorkflowExecutions", args)
	}

	public async ListDomains(ctx: any, _ListRequest: any, opts: $.Slice<any>): globalThis.Promise<gomock.Call | $.VarRef<gomock.Call> | null> {
		const mr: _MockClientRecorder | $.VarRef<_MockClientRecorder> | null = this;
		const mr$: _MockClientRecorder = mr == null ? $.pointerTarget<_MockClientRecorder>(mr) : (mr as any).__isVarRef === true ? (mr as any).value : (mr as any).__goValue === undefined ? (mr as any) : $.pointerTarget<_MockClientRecorder>(mr)
		let args: $.Slice<any> = $.appendSlice($.arrayToSlice<any>([ctx, _ListRequest]), opts, $.appendZeros.nil)
		return gomock.Controller.prototype.RecordCall.call($.pointerValue<MockClient>((mr$ as _MockClientRecorder).mock).ctrl, $.interfaceValue((mr$ as _MockClientRecorder).mock, "*workflowservicetest.MockClient", /* @__PURE__ */ $.pointerType("workflowservicetest.MockClient")), "ListDomains", args)
	}

	public async ListFailoverHistory(ctx: any, _ListRequest: any, opts: $.Slice<any>): globalThis.Promise<gomock.Call | $.VarRef<gomock.Call> | null> {
		const mr: _MockClientRecorder | $.VarRef<_MockClientRecorder> | null = this;
		const mr$: _MockClientRecorder = mr == null ? $.pointerTarget<_MockClientRecorder>(mr) : (mr as any).__isVarRef === true ? (mr as any).value : (mr as any).__goValue === undefined ? (mr as any) : $.pointerTarget<_MockClientRecorder>(mr)
		let args: $.Slice<any> = $.appendSlice($.arrayToSlice<any>([ctx, _ListRequest]), opts, $.appendZeros.nil)
		return gomock.Controller.prototype.RecordCall.call($.pointerValue<MockClient>((mr$ as _MockClientRecorder).mock).ctrl, $.interfaceValue((mr$ as _MockClientRecorder).mock, "*workflowservicetest.MockClient", /* @__PURE__ */ $.pointerType("workflowservicetest.MockClient")), "ListFailoverHistory", args)
	}

	public async ListOpenWorkflowExecutions(ctx: any, _ListRequest: any, opts: $.Slice<any>): globalThis.Promise<gomock.Call | $.VarRef<gomock.Call> | null> {
		const mr: _MockClientRecorder | $.VarRef<_MockClientRecorder> | null = this;
		const mr$: _MockClientRecorder = mr == null ? $.pointerTarget<_MockClientRecorder>(mr) : (mr as any).__isVarRef === true ? (mr as any).value : (mr as any).__goValue === undefined ? (mr as any) : $.pointerTarget<_MockClientRecorder>(mr)
		let args: $.Slice<any> = $.appendSlice($.arrayToSlice<any>([ctx, _ListRequest]), opts, $.appendZeros.nil)
		return gomock.Controller.prototype.RecordCall.call($.pointerValue<MockClient>((mr$ as _MockClientRecorder).mock).ctrl, $.interfaceValue((mr$ as _MockClientRecorder).mock, "*workflowservicetest.MockClient", /* @__PURE__ */ $.pointerType("workflowservicetest.MockClient")), "ListOpenWorkflowExecutions", args)
	}

	public async ListSchedules(ctx: any, _Request: any, opts: $.Slice<any>): globalThis.Promise<gomock.Call | $.VarRef<gomock.Call> | null> {
		const mr: _MockClientRecorder | $.VarRef<_MockClientRecorder> | null = this;
		const mr$: _MockClientRecorder = mr == null ? $.pointerTarget<_MockClientRecorder>(mr) : (mr as any).__isVarRef === true ? (mr as any).value : (mr as any).__goValue === undefined ? (mr as any) : $.pointerTarget<_MockClientRecorder>(mr)
		let args: $.Slice<any> = $.appendSlice($.arrayToSlice<any>([ctx, _Request]), opts, $.appendZeros.nil)
		return gomock.Controller.prototype.RecordCall.call($.pointerValue<MockClient>((mr$ as _MockClientRecorder).mock).ctrl, $.interfaceValue((mr$ as _MockClientRecorder).mock, "*workflowservicetest.MockClient", /* @__PURE__ */ $.pointerType("workflowservicetest.MockClient")), "ListSchedules", args)
	}

	public async ListTaskListPartitions(ctx: any, _Request: any, opts: $.Slice<any>): globalThis.Promise<gomock.Call | $.VarRef<gomock.Call> | null> {
		const mr: _MockClientRecorder | $.VarRef<_MockClientRecorder> | null = this;
		const mr$: _MockClientRecorder = mr == null ? $.pointerTarget<_MockClientRecorder>(mr) : (mr as any).__isVarRef === true ? (mr as any).value : (mr as any).__goValue === undefined ? (mr as any) : $.pointerTarget<_MockClientRecorder>(mr)
		let args: $.Slice<any> = $.appendSlice($.arrayToSlice<any>([ctx, _Request]), opts, $.appendZeros.nil)
		return gomock.Controller.prototype.RecordCall.call($.pointerValue<MockClient>((mr$ as _MockClientRecorder).mock).ctrl, $.interfaceValue((mr$ as _MockClientRecorder).mock, "*workflowservicetest.MockClient", /* @__PURE__ */ $.pointerType("workflowservicetest.MockClient")), "ListTaskListPartitions", args)
	}

	public async ListWorkflowExecutions(ctx: any, _ListRequest: any, opts: $.Slice<any>): globalThis.Promise<gomock.Call | $.VarRef<gomock.Call> | null> {
		const mr: _MockClientRecorder | $.VarRef<_MockClientRecorder> | null = this;
		const mr$: _MockClientRecorder = mr == null ? $.pointerTarget<_MockClientRecorder>(mr) : (mr as any).__isVarRef === true ? (mr as any).value : (mr as any).__goValue === undefined ? (mr as any) : $.pointerTarget<_MockClientRecorder>(mr)
		let args: $.Slice<any> = $.appendSlice($.arrayToSlice<any>([ctx, _ListRequest]), opts, $.appendZeros.nil)
		return gomock.Controller.prototype.RecordCall.call($.pointerValue<MockClient>((mr$ as _MockClientRecorder).mock).ctrl, $.interfaceValue((mr$ as _MockClientRecorder).mock, "*workflowservicetest.MockClient", /* @__PURE__ */ $.pointerType("workflowservicetest.MockClient")), "ListWorkflowExecutions", args)
	}

	public async PauseSchedule(ctx: any, _Request: any, opts: $.Slice<any>): globalThis.Promise<gomock.Call | $.VarRef<gomock.Call> | null> {
		const mr: _MockClientRecorder | $.VarRef<_MockClientRecorder> | null = this;
		const mr$: _MockClientRecorder = mr == null ? $.pointerTarget<_MockClientRecorder>(mr) : (mr as any).__isVarRef === true ? (mr as any).value : (mr as any).__goValue === undefined ? (mr as any) : $.pointerTarget<_MockClientRecorder>(mr)
		let args: $.Slice<any> = $.appendSlice($.arrayToSlice<any>([ctx, _Request]), opts, $.appendZeros.nil)
		return gomock.Controller.prototype.RecordCall.call($.pointerValue<MockClient>((mr$ as _MockClientRecorder).mock).ctrl, $.interfaceValue((mr$ as _MockClientRecorder).mock, "*workflowservicetest.MockClient", /* @__PURE__ */ $.pointerType("workflowservicetest.MockClient")), "PauseSchedule", args)
	}

	public async PollForActivityTask(ctx: any, _PollRequest: any, opts: $.Slice<any>): globalThis.Promise<gomock.Call | $.VarRef<gomock.Call> | null> {
		const mr: _MockClientRecorder | $.VarRef<_MockClientRecorder> | null = this;
		const mr$: _MockClientRecorder = mr == null ? $.pointerTarget<_MockClientRecorder>(mr) : (mr as any).__isVarRef === true ? (mr as any).value : (mr as any).__goValue === undefined ? (mr as any) : $.pointerTarget<_MockClientRecorder>(mr)
		let args: $.Slice<any> = $.appendSlice($.arrayToSlice<any>([ctx, _PollRequest]), opts, $.appendZeros.nil)
		return gomock.Controller.prototype.RecordCall.call($.pointerValue<MockClient>((mr$ as _MockClientRecorder).mock).ctrl, $.interfaceValue((mr$ as _MockClientRecorder).mock, "*workflowservicetest.MockClient", /* @__PURE__ */ $.pointerType("workflowservicetest.MockClient")), "PollForActivityTask", args)
	}

	public async PollForDecisionTask(ctx: any, _PollRequest: any, opts: $.Slice<any>): globalThis.Promise<gomock.Call | $.VarRef<gomock.Call> | null> {
		const mr: _MockClientRecorder | $.VarRef<_MockClientRecorder> | null = this;
		const mr$: _MockClientRecorder = mr == null ? $.pointerTarget<_MockClientRecorder>(mr) : (mr as any).__isVarRef === true ? (mr as any).value : (mr as any).__goValue === undefined ? (mr as any) : $.pointerTarget<_MockClientRecorder>(mr)
		let args: $.Slice<any> = $.appendSlice($.arrayToSlice<any>([ctx, _PollRequest]), opts, $.appendZeros.nil)
		return gomock.Controller.prototype.RecordCall.call($.pointerValue<MockClient>((mr$ as _MockClientRecorder).mock).ctrl, $.interfaceValue((mr$ as _MockClientRecorder).mock, "*workflowservicetest.MockClient", /* @__PURE__ */ $.pointerType("workflowservicetest.MockClient")), "PollForDecisionTask", args)
	}

	public async QueryWorkflow(ctx: any, _QueryRequest: any, opts: $.Slice<any>): globalThis.Promise<gomock.Call | $.VarRef<gomock.Call> | null> {
		const mr: _MockClientRecorder | $.VarRef<_MockClientRecorder> | null = this;
		const mr$: _MockClientRecorder = mr == null ? $.pointerTarget<_MockClientRecorder>(mr) : (mr as any).__isVarRef === true ? (mr as any).value : (mr as any).__goValue === undefined ? (mr as any) : $.pointerTarget<_MockClientRecorder>(mr)
		let args: $.Slice<any> = $.appendSlice($.arrayToSlice<any>([ctx, _QueryRequest]), opts, $.appendZeros.nil)
		return gomock.Controller.prototype.RecordCall.call($.pointerValue<MockClient>((mr$ as _MockClientRecorder).mock).ctrl, $.interfaceValue((mr$ as _MockClientRecorder).mock, "*workflowservicetest.MockClient", /* @__PURE__ */ $.pointerType("workflowservicetest.MockClient")), "QueryWorkflow", args)
	}

	public async RecordActivityTaskHeartbeat(ctx: any, _HeartbeatRequest: any, opts: $.Slice<any>): globalThis.Promise<gomock.Call | $.VarRef<gomock.Call> | null> {
		const mr: _MockClientRecorder | $.VarRef<_MockClientRecorder> | null = this;
		const mr$: _MockClientRecorder = mr == null ? $.pointerTarget<_MockClientRecorder>(mr) : (mr as any).__isVarRef === true ? (mr as any).value : (mr as any).__goValue === undefined ? (mr as any) : $.pointerTarget<_MockClientRecorder>(mr)
		let args: $.Slice<any> = $.appendSlice($.arrayToSlice<any>([ctx, _HeartbeatRequest]), opts, $.appendZeros.nil)
		return gomock.Controller.prototype.RecordCall.call($.pointerValue<MockClient>((mr$ as _MockClientRecorder).mock).ctrl, $.interfaceValue((mr$ as _MockClientRecorder).mock, "*workflowservicetest.MockClient", /* @__PURE__ */ $.pointerType("workflowservicetest.MockClient")), "RecordActivityTaskHeartbeat", args)
	}

	public async RecordActivityTaskHeartbeatByID(ctx: any, _HeartbeatRequest: any, opts: $.Slice<any>): globalThis.Promise<gomock.Call | $.VarRef<gomock.Call> | null> {
		const mr: _MockClientRecorder | $.VarRef<_MockClientRecorder> | null = this;
		const mr$: _MockClientRecorder = mr == null ? $.pointerTarget<_MockClientRecorder>(mr) : (mr as any).__isVarRef === true ? (mr as any).value : (mr as any).__goValue === undefined ? (mr as any) : $.pointerTarget<_MockClientRecorder>(mr)
		let args: $.Slice<any> = $.appendSlice($.arrayToSlice<any>([ctx, _HeartbeatRequest]), opts, $.appendZeros.nil)
		return gomock.Controller.prototype.RecordCall.call($.pointerValue<MockClient>((mr$ as _MockClientRecorder).mock).ctrl, $.interfaceValue((mr$ as _MockClientRecorder).mock, "*workflowservicetest.MockClient", /* @__PURE__ */ $.pointerType("workflowservicetest.MockClient")), "RecordActivityTaskHeartbeatByID", args)
	}

	public async RefreshWorkflowTasks(ctx: any, _Request: any, opts: $.Slice<any>): globalThis.Promise<gomock.Call | $.VarRef<gomock.Call> | null> {
		const mr: _MockClientRecorder | $.VarRef<_MockClientRecorder> | null = this;
		const mr$: _MockClientRecorder = mr == null ? $.pointerTarget<_MockClientRecorder>(mr) : (mr as any).__isVarRef === true ? (mr as any).value : (mr as any).__goValue === undefined ? (mr as any) : $.pointerTarget<_MockClientRecorder>(mr)
		let args: $.Slice<any> = $.appendSlice($.arrayToSlice<any>([ctx, _Request]), opts, $.appendZeros.nil)
		return gomock.Controller.prototype.RecordCall.call($.pointerValue<MockClient>((mr$ as _MockClientRecorder).mock).ctrl, $.interfaceValue((mr$ as _MockClientRecorder).mock, "*workflowservicetest.MockClient", /* @__PURE__ */ $.pointerType("workflowservicetest.MockClient")), "RefreshWorkflowTasks", args)
	}

	public async RegisterDomain(ctx: any, _RegisterRequest: any, opts: $.Slice<any>): globalThis.Promise<gomock.Call | $.VarRef<gomock.Call> | null> {
		const mr: _MockClientRecorder | $.VarRef<_MockClientRecorder> | null = this;
		const mr$: _MockClientRecorder = mr == null ? $.pointerTarget<_MockClientRecorder>(mr) : (mr as any).__isVarRef === true ? (mr as any).value : (mr as any).__goValue === undefined ? (mr as any) : $.pointerTarget<_MockClientRecorder>(mr)
		let args: $.Slice<any> = $.appendSlice($.arrayToSlice<any>([ctx, _RegisterRequest]), opts, $.appendZeros.nil)
		return gomock.Controller.prototype.RecordCall.call($.pointerValue<MockClient>((mr$ as _MockClientRecorder).mock).ctrl, $.interfaceValue((mr$ as _MockClientRecorder).mock, "*workflowservicetest.MockClient", /* @__PURE__ */ $.pointerType("workflowservicetest.MockClient")), "RegisterDomain", args)
	}

	public async RequestCancelWorkflowExecution(ctx: any, _CancelRequest: any, opts: $.Slice<any>): globalThis.Promise<gomock.Call | $.VarRef<gomock.Call> | null> {
		const mr: _MockClientRecorder | $.VarRef<_MockClientRecorder> | null = this;
		const mr$: _MockClientRecorder = mr == null ? $.pointerTarget<_MockClientRecorder>(mr) : (mr as any).__isVarRef === true ? (mr as any).value : (mr as any).__goValue === undefined ? (mr as any) : $.pointerTarget<_MockClientRecorder>(mr)
		let args: $.Slice<any> = $.appendSlice($.arrayToSlice<any>([ctx, _CancelRequest]), opts, $.appendZeros.nil)
		return gomock.Controller.prototype.RecordCall.call($.pointerValue<MockClient>((mr$ as _MockClientRecorder).mock).ctrl, $.interfaceValue((mr$ as _MockClientRecorder).mock, "*workflowservicetest.MockClient", /* @__PURE__ */ $.pointerType("workflowservicetest.MockClient")), "RequestCancelWorkflowExecution", args)
	}

	public async ResetStickyTaskList(ctx: any, _ResetRequest: any, opts: $.Slice<any>): globalThis.Promise<gomock.Call | $.VarRef<gomock.Call> | null> {
		const mr: _MockClientRecorder | $.VarRef<_MockClientRecorder> | null = this;
		const mr$: _MockClientRecorder = mr == null ? $.pointerTarget<_MockClientRecorder>(mr) : (mr as any).__isVarRef === true ? (mr as any).value : (mr as any).__goValue === undefined ? (mr as any) : $.pointerTarget<_MockClientRecorder>(mr)
		let args: $.Slice<any> = $.appendSlice($.arrayToSlice<any>([ctx, _ResetRequest]), opts, $.appendZeros.nil)
		return gomock.Controller.prototype.RecordCall.call($.pointerValue<MockClient>((mr$ as _MockClientRecorder).mock).ctrl, $.interfaceValue((mr$ as _MockClientRecorder).mock, "*workflowservicetest.MockClient", /* @__PURE__ */ $.pointerType("workflowservicetest.MockClient")), "ResetStickyTaskList", args)
	}

	public async ResetWorkflowExecution(ctx: any, _ResetRequest: any, opts: $.Slice<any>): globalThis.Promise<gomock.Call | $.VarRef<gomock.Call> | null> {
		const mr: _MockClientRecorder | $.VarRef<_MockClientRecorder> | null = this;
		const mr$: _MockClientRecorder = mr == null ? $.pointerTarget<_MockClientRecorder>(mr) : (mr as any).__isVarRef === true ? (mr as any).value : (mr as any).__goValue === undefined ? (mr as any) : $.pointerTarget<_MockClientRecorder>(mr)
		let args: $.Slice<any> = $.appendSlice($.arrayToSlice<any>([ctx, _ResetRequest]), opts, $.appendZeros.nil)
		return gomock.Controller.prototype.RecordCall.call($.pointerValue<MockClient>((mr$ as _MockClientRecorder).mock).ctrl, $.interfaceValue((mr$ as _MockClientRecorder).mock, "*workflowservicetest.MockClient", /* @__PURE__ */ $.pointerType("workflowservicetest.MockClient")), "ResetWorkflowExecution", args)
	}

	public async RespondActivityTaskCanceled(ctx: any, _CanceledRequest: any, opts: $.Slice<any>): globalThis.Promise<gomock.Call | $.VarRef<gomock.Call> | null> {
		const mr: _MockClientRecorder | $.VarRef<_MockClientRecorder> | null = this;
		const mr$: _MockClientRecorder = mr == null ? $.pointerTarget<_MockClientRecorder>(mr) : (mr as any).__isVarRef === true ? (mr as any).value : (mr as any).__goValue === undefined ? (mr as any) : $.pointerTarget<_MockClientRecorder>(mr)
		let args: $.Slice<any> = $.appendSlice($.arrayToSlice<any>([ctx, _CanceledRequest]), opts, $.appendZeros.nil)
		return gomock.Controller.prototype.RecordCall.call($.pointerValue<MockClient>((mr$ as _MockClientRecorder).mock).ctrl, $.interfaceValue((mr$ as _MockClientRecorder).mock, "*workflowservicetest.MockClient", /* @__PURE__ */ $.pointerType("workflowservicetest.MockClient")), "RespondActivityTaskCanceled", args)
	}

	public async RespondActivityTaskCanceledByID(ctx: any, _CanceledRequest: any, opts: $.Slice<any>): globalThis.Promise<gomock.Call | $.VarRef<gomock.Call> | null> {
		const mr: _MockClientRecorder | $.VarRef<_MockClientRecorder> | null = this;
		const mr$: _MockClientRecorder = mr == null ? $.pointerTarget<_MockClientRecorder>(mr) : (mr as any).__isVarRef === true ? (mr as any).value : (mr as any).__goValue === undefined ? (mr as any) : $.pointerTarget<_MockClientRecorder>(mr)
		let args: $.Slice<any> = $.appendSlice($.arrayToSlice<any>([ctx, _CanceledRequest]), opts, $.appendZeros.nil)
		return gomock.Controller.prototype.RecordCall.call($.pointerValue<MockClient>((mr$ as _MockClientRecorder).mock).ctrl, $.interfaceValue((mr$ as _MockClientRecorder).mock, "*workflowservicetest.MockClient", /* @__PURE__ */ $.pointerType("workflowservicetest.MockClient")), "RespondActivityTaskCanceledByID", args)
	}

	public async RespondActivityTaskCompleted(ctx: any, _CompleteRequest: any, opts: $.Slice<any>): globalThis.Promise<gomock.Call | $.VarRef<gomock.Call> | null> {
		const mr: _MockClientRecorder | $.VarRef<_MockClientRecorder> | null = this;
		const mr$: _MockClientRecorder = mr == null ? $.pointerTarget<_MockClientRecorder>(mr) : (mr as any).__isVarRef === true ? (mr as any).value : (mr as any).__goValue === undefined ? (mr as any) : $.pointerTarget<_MockClientRecorder>(mr)
		let args: $.Slice<any> = $.appendSlice($.arrayToSlice<any>([ctx, _CompleteRequest]), opts, $.appendZeros.nil)
		return gomock.Controller.prototype.RecordCall.call($.pointerValue<MockClient>((mr$ as _MockClientRecorder).mock).ctrl, $.interfaceValue((mr$ as _MockClientRecorder).mock, "*workflowservicetest.MockClient", /* @__PURE__ */ $.pointerType("workflowservicetest.MockClient")), "RespondActivityTaskCompleted", args)
	}

	public async RespondActivityTaskCompletedByID(ctx: any, _CompleteRequest: any, opts: $.Slice<any>): globalThis.Promise<gomock.Call | $.VarRef<gomock.Call> | null> {
		const mr: _MockClientRecorder | $.VarRef<_MockClientRecorder> | null = this;
		const mr$: _MockClientRecorder = mr == null ? $.pointerTarget<_MockClientRecorder>(mr) : (mr as any).__isVarRef === true ? (mr as any).value : (mr as any).__goValue === undefined ? (mr as any) : $.pointerTarget<_MockClientRecorder>(mr)
		let args: $.Slice<any> = $.appendSlice($.arrayToSlice<any>([ctx, _CompleteRequest]), opts, $.appendZeros.nil)
		return gomock.Controller.prototype.RecordCall.call($.pointerValue<MockClient>((mr$ as _MockClientRecorder).mock).ctrl, $.interfaceValue((mr$ as _MockClientRecorder).mock, "*workflowservicetest.MockClient", /* @__PURE__ */ $.pointerType("workflowservicetest.MockClient")), "RespondActivityTaskCompletedByID", args)
	}

	public async RespondActivityTaskFailed(ctx: any, _FailRequest: any, opts: $.Slice<any>): globalThis.Promise<gomock.Call | $.VarRef<gomock.Call> | null> {
		const mr: _MockClientRecorder | $.VarRef<_MockClientRecorder> | null = this;
		const mr$: _MockClientRecorder = mr == null ? $.pointerTarget<_MockClientRecorder>(mr) : (mr as any).__isVarRef === true ? (mr as any).value : (mr as any).__goValue === undefined ? (mr as any) : $.pointerTarget<_MockClientRecorder>(mr)
		let args: $.Slice<any> = $.appendSlice($.arrayToSlice<any>([ctx, _FailRequest]), opts, $.appendZeros.nil)
		return gomock.Controller.prototype.RecordCall.call($.pointerValue<MockClient>((mr$ as _MockClientRecorder).mock).ctrl, $.interfaceValue((mr$ as _MockClientRecorder).mock, "*workflowservicetest.MockClient", /* @__PURE__ */ $.pointerType("workflowservicetest.MockClient")), "RespondActivityTaskFailed", args)
	}

	public async RespondActivityTaskFailedByID(ctx: any, _FailRequest: any, opts: $.Slice<any>): globalThis.Promise<gomock.Call | $.VarRef<gomock.Call> | null> {
		const mr: _MockClientRecorder | $.VarRef<_MockClientRecorder> | null = this;
		const mr$: _MockClientRecorder = mr == null ? $.pointerTarget<_MockClientRecorder>(mr) : (mr as any).__isVarRef === true ? (mr as any).value : (mr as any).__goValue === undefined ? (mr as any) : $.pointerTarget<_MockClientRecorder>(mr)
		let args: $.Slice<any> = $.appendSlice($.arrayToSlice<any>([ctx, _FailRequest]), opts, $.appendZeros.nil)
		return gomock.Controller.prototype.RecordCall.call($.pointerValue<MockClient>((mr$ as _MockClientRecorder).mock).ctrl, $.interfaceValue((mr$ as _MockClientRecorder).mock, "*workflowservicetest.MockClient", /* @__PURE__ */ $.pointerType("workflowservicetest.MockClient")), "RespondActivityTaskFailedByID", args)
	}

	public async RespondDecisionTaskCompleted(ctx: any, _CompleteRequest: any, opts: $.Slice<any>): globalThis.Promise<gomock.Call | $.VarRef<gomock.Call> | null> {
		const mr: _MockClientRecorder | $.VarRef<_MockClientRecorder> | null = this;
		const mr$: _MockClientRecorder = mr == null ? $.pointerTarget<_MockClientRecorder>(mr) : (mr as any).__isVarRef === true ? (mr as any).value : (mr as any).__goValue === undefined ? (mr as any) : $.pointerTarget<_MockClientRecorder>(mr)
		let args: $.Slice<any> = $.appendSlice($.arrayToSlice<any>([ctx, _CompleteRequest]), opts, $.appendZeros.nil)
		return gomock.Controller.prototype.RecordCall.call($.pointerValue<MockClient>((mr$ as _MockClientRecorder).mock).ctrl, $.interfaceValue((mr$ as _MockClientRecorder).mock, "*workflowservicetest.MockClient", /* @__PURE__ */ $.pointerType("workflowservicetest.MockClient")), "RespondDecisionTaskCompleted", args)
	}

	public async RespondDecisionTaskFailed(ctx: any, _FailedRequest: any, opts: $.Slice<any>): globalThis.Promise<gomock.Call | $.VarRef<gomock.Call> | null> {
		const mr: _MockClientRecorder | $.VarRef<_MockClientRecorder> | null = this;
		const mr$: _MockClientRecorder = mr == null ? $.pointerTarget<_MockClientRecorder>(mr) : (mr as any).__isVarRef === true ? (mr as any).value : (mr as any).__goValue === undefined ? (mr as any) : $.pointerTarget<_MockClientRecorder>(mr)
		let args: $.Slice<any> = $.appendSlice($.arrayToSlice<any>([ctx, _FailedRequest]), opts, $.appendZeros.nil)
		return gomock.Controller.prototype.RecordCall.call($.pointerValue<MockClient>((mr$ as _MockClientRecorder).mock).ctrl, $.interfaceValue((mr$ as _MockClientRecorder).mock, "*workflowservicetest.MockClient", /* @__PURE__ */ $.pointerType("workflowservicetest.MockClient")), "RespondDecisionTaskFailed", args)
	}

	public async RespondQueryTaskCompleted(ctx: any, _CompleteRequest: any, opts: $.Slice<any>): globalThis.Promise<gomock.Call | $.VarRef<gomock.Call> | null> {
		const mr: _MockClientRecorder | $.VarRef<_MockClientRecorder> | null = this;
		const mr$: _MockClientRecorder = mr == null ? $.pointerTarget<_MockClientRecorder>(mr) : (mr as any).__isVarRef === true ? (mr as any).value : (mr as any).__goValue === undefined ? (mr as any) : $.pointerTarget<_MockClientRecorder>(mr)
		let args: $.Slice<any> = $.appendSlice($.arrayToSlice<any>([ctx, _CompleteRequest]), opts, $.appendZeros.nil)
		return gomock.Controller.prototype.RecordCall.call($.pointerValue<MockClient>((mr$ as _MockClientRecorder).mock).ctrl, $.interfaceValue((mr$ as _MockClientRecorder).mock, "*workflowservicetest.MockClient", /* @__PURE__ */ $.pointerType("workflowservicetest.MockClient")), "RespondQueryTaskCompleted", args)
	}

	public async RestartWorkflowExecution(ctx: any, _RestartRequest: any, opts: $.Slice<any>): globalThis.Promise<gomock.Call | $.VarRef<gomock.Call> | null> {
		const mr: _MockClientRecorder | $.VarRef<_MockClientRecorder> | null = this;
		const mr$: _MockClientRecorder = mr == null ? $.pointerTarget<_MockClientRecorder>(mr) : (mr as any).__isVarRef === true ? (mr as any).value : (mr as any).__goValue === undefined ? (mr as any) : $.pointerTarget<_MockClientRecorder>(mr)
		let args: $.Slice<any> = $.appendSlice($.arrayToSlice<any>([ctx, _RestartRequest]), opts, $.appendZeros.nil)
		return gomock.Controller.prototype.RecordCall.call($.pointerValue<MockClient>((mr$ as _MockClientRecorder).mock).ctrl, $.interfaceValue((mr$ as _MockClientRecorder).mock, "*workflowservicetest.MockClient", /* @__PURE__ */ $.pointerType("workflowservicetest.MockClient")), "RestartWorkflowExecution", args)
	}

	public async ScanWorkflowExecutions(ctx: any, _ListRequest: any, opts: $.Slice<any>): globalThis.Promise<gomock.Call | $.VarRef<gomock.Call> | null> {
		const mr: _MockClientRecorder | $.VarRef<_MockClientRecorder> | null = this;
		const mr$: _MockClientRecorder = mr == null ? $.pointerTarget<_MockClientRecorder>(mr) : (mr as any).__isVarRef === true ? (mr as any).value : (mr as any).__goValue === undefined ? (mr as any) : $.pointerTarget<_MockClientRecorder>(mr)
		let args: $.Slice<any> = $.appendSlice($.arrayToSlice<any>([ctx, _ListRequest]), opts, $.appendZeros.nil)
		return gomock.Controller.prototype.RecordCall.call($.pointerValue<MockClient>((mr$ as _MockClientRecorder).mock).ctrl, $.interfaceValue((mr$ as _MockClientRecorder).mock, "*workflowservicetest.MockClient", /* @__PURE__ */ $.pointerType("workflowservicetest.MockClient")), "ScanWorkflowExecutions", args)
	}

	public async SignalWithStartWorkflowExecution(ctx: any, _SignalWithStartRequest: any, opts: $.Slice<any>): globalThis.Promise<gomock.Call | $.VarRef<gomock.Call> | null> {
		const mr: _MockClientRecorder | $.VarRef<_MockClientRecorder> | null = this;
		const mr$: _MockClientRecorder = mr == null ? $.pointerTarget<_MockClientRecorder>(mr) : (mr as any).__isVarRef === true ? (mr as any).value : (mr as any).__goValue === undefined ? (mr as any) : $.pointerTarget<_MockClientRecorder>(mr)
		let args: $.Slice<any> = $.appendSlice($.arrayToSlice<any>([ctx, _SignalWithStartRequest]), opts, $.appendZeros.nil)
		return gomock.Controller.prototype.RecordCall.call($.pointerValue<MockClient>((mr$ as _MockClientRecorder).mock).ctrl, $.interfaceValue((mr$ as _MockClientRecorder).mock, "*workflowservicetest.MockClient", /* @__PURE__ */ $.pointerType("workflowservicetest.MockClient")), "SignalWithStartWorkflowExecution", args)
	}

	public async SignalWithStartWorkflowExecutionAsync(ctx: any, _SignalWithStartRequest: any, opts: $.Slice<any>): globalThis.Promise<gomock.Call | $.VarRef<gomock.Call> | null> {
		const mr: _MockClientRecorder | $.VarRef<_MockClientRecorder> | null = this;
		const mr$: _MockClientRecorder = mr == null ? $.pointerTarget<_MockClientRecorder>(mr) : (mr as any).__isVarRef === true ? (mr as any).value : (mr as any).__goValue === undefined ? (mr as any) : $.pointerTarget<_MockClientRecorder>(mr)
		let args: $.Slice<any> = $.appendSlice($.arrayToSlice<any>([ctx, _SignalWithStartRequest]), opts, $.appendZeros.nil)
		return gomock.Controller.prototype.RecordCall.call($.pointerValue<MockClient>((mr$ as _MockClientRecorder).mock).ctrl, $.interfaceValue((mr$ as _MockClientRecorder).mock, "*workflowservicetest.MockClient", /* @__PURE__ */ $.pointerType("workflowservicetest.MockClient")), "SignalWithStartWorkflowExecutionAsync", args)
	}

	public async SignalWorkflowExecution(ctx: any, _SignalRequest: any, opts: $.Slice<any>): globalThis.Promise<gomock.Call | $.VarRef<gomock.Call> | null> {
		const mr: _MockClientRecorder | $.VarRef<_MockClientRecorder> | null = this;
		const mr$: _MockClientRecorder = mr == null ? $.pointerTarget<_MockClientRecorder>(mr) : (mr as any).__isVarRef === true ? (mr as any).value : (mr as any).__goValue === undefined ? (mr as any) : $.pointerTarget<_MockClientRecorder>(mr)
		let args: $.Slice<any> = $.appendSlice($.arrayToSlice<any>([ctx, _SignalRequest]), opts, $.appendZeros.nil)
		return gomock.Controller.prototype.RecordCall.call($.pointerValue<MockClient>((mr$ as _MockClientRecorder).mock).ctrl, $.interfaceValue((mr$ as _MockClientRecorder).mock, "*workflowservicetest.MockClient", /* @__PURE__ */ $.pointerType("workflowservicetest.MockClient")), "SignalWorkflowExecution", args)
	}

	public async StartWorkflowExecution(ctx: any, _StartRequest: any, opts: $.Slice<any>): globalThis.Promise<gomock.Call | $.VarRef<gomock.Call> | null> {
		const mr: _MockClientRecorder | $.VarRef<_MockClientRecorder> | null = this;
		const mr$: _MockClientRecorder = mr == null ? $.pointerTarget<_MockClientRecorder>(mr) : (mr as any).__isVarRef === true ? (mr as any).value : (mr as any).__goValue === undefined ? (mr as any) : $.pointerTarget<_MockClientRecorder>(mr)
		let args: $.Slice<any> = $.appendSlice($.arrayToSlice<any>([ctx, _StartRequest]), opts, $.appendZeros.nil)
		return gomock.Controller.prototype.RecordCall.call($.pointerValue<MockClient>((mr$ as _MockClientRecorder).mock).ctrl, $.interfaceValue((mr$ as _MockClientRecorder).mock, "*workflowservicetest.MockClient", /* @__PURE__ */ $.pointerType("workflowservicetest.MockClient")), "StartWorkflowExecution", args)
	}

	public async StartWorkflowExecutionAsync(ctx: any, _StartRequest: any, opts: $.Slice<any>): globalThis.Promise<gomock.Call | $.VarRef<gomock.Call> | null> {
		const mr: _MockClientRecorder | $.VarRef<_MockClientRecorder> | null = this;
		const mr$: _MockClientRecorder = mr == null ? $.pointerTarget<_MockClientRecorder>(mr) : (mr as any).__isVarRef === true ? (mr as any).value : (mr as any).__goValue === undefined ? (mr as any) : $.pointerTarget<_MockClientRecorder>(mr)
		let args: $.Slice<any> = $.appendSlice($.arrayToSlice<any>([ctx, _StartRequest]), opts, $.appendZeros.nil)
		return gomock.Controller.prototype.RecordCall.call($.pointerValue<MockClient>((mr$ as _MockClientRecorder).mock).ctrl, $.interfaceValue((mr$ as _MockClientRecorder).mock, "*workflowservicetest.MockClient", /* @__PURE__ */ $.pointerType("workflowservicetest.MockClient")), "StartWorkflowExecutionAsync", args)
	}

	public async TerminateWorkflowExecution(ctx: any, _TerminateRequest: any, opts: $.Slice<any>): globalThis.Promise<gomock.Call | $.VarRef<gomock.Call> | null> {
		const mr: _MockClientRecorder | $.VarRef<_MockClientRecorder> | null = this;
		const mr$: _MockClientRecorder = mr == null ? $.pointerTarget<_MockClientRecorder>(mr) : (mr as any).__isVarRef === true ? (mr as any).value : (mr as any).__goValue === undefined ? (mr as any) : $.pointerTarget<_MockClientRecorder>(mr)
		let args: $.Slice<any> = $.appendSlice($.arrayToSlice<any>([ctx, _TerminateRequest]), opts, $.appendZeros.nil)
		return gomock.Controller.prototype.RecordCall.call($.pointerValue<MockClient>((mr$ as _MockClientRecorder).mock).ctrl, $.interfaceValue((mr$ as _MockClientRecorder).mock, "*workflowservicetest.MockClient", /* @__PURE__ */ $.pointerType("workflowservicetest.MockClient")), "TerminateWorkflowExecution", args)
	}

	public async UnpauseSchedule(ctx: any, _Request: any, opts: $.Slice<any>): globalThis.Promise<gomock.Call | $.VarRef<gomock.Call> | null> {
		const mr: _MockClientRecorder | $.VarRef<_MockClientRecorder> | null = this;
		const mr$: _MockClientRecorder = mr == null ? $.pointerTarget<_MockClientRecorder>(mr) : (mr as any).__isVarRef === true ? (mr as any).value : (mr as any).__goValue === undefined ? (mr as any) : $.pointerTarget<_MockClientRecorder>(mr)
		let args: $.Slice<any> = $.appendSlice($.arrayToSlice<any>([ctx, _Request]), opts, $.appendZeros.nil)
		return gomock.Controller.prototype.RecordCall.call($.pointerValue<MockClient>((mr$ as _MockClientRecorder).mock).ctrl, $.interfaceValue((mr$ as _MockClientRecorder).mock, "*workflowservicetest.MockClient", /* @__PURE__ */ $.pointerType("workflowservicetest.MockClient")), "UnpauseSchedule", args)
	}

	public async UpdateDomain(ctx: any, _UpdateRequest: any, opts: $.Slice<any>): globalThis.Promise<gomock.Call | $.VarRef<gomock.Call> | null> {
		const mr: _MockClientRecorder | $.VarRef<_MockClientRecorder> | null = this;
		const mr$: _MockClientRecorder = mr == null ? $.pointerTarget<_MockClientRecorder>(mr) : (mr as any).__isVarRef === true ? (mr as any).value : (mr as any).__goValue === undefined ? (mr as any) : $.pointerTarget<_MockClientRecorder>(mr)
		let args: $.Slice<any> = $.appendSlice($.arrayToSlice<any>([ctx, _UpdateRequest]), opts, $.appendZeros.nil)
		return gomock.Controller.prototype.RecordCall.call($.pointerValue<MockClient>((mr$ as _MockClientRecorder).mock).ctrl, $.interfaceValue((mr$ as _MockClientRecorder).mock, "*workflowservicetest.MockClient", /* @__PURE__ */ $.pointerType("workflowservicetest.MockClient")), "UpdateDomain", args)
	}

	public async UpdateSchedule(ctx: any, _Request: any, opts: $.Slice<any>): globalThis.Promise<gomock.Call | $.VarRef<gomock.Call> | null> {
		const mr: _MockClientRecorder | $.VarRef<_MockClientRecorder> | null = this;
		const mr$: _MockClientRecorder = mr == null ? $.pointerTarget<_MockClientRecorder>(mr) : (mr as any).__isVarRef === true ? (mr as any).value : (mr as any).__goValue === undefined ? (mr as any) : $.pointerTarget<_MockClientRecorder>(mr)
		let args: $.Slice<any> = $.appendSlice($.arrayToSlice<any>([ctx, _Request]), opts, $.appendZeros.nil)
		return gomock.Controller.prototype.RecordCall.call($.pointerValue<MockClient>((mr$ as _MockClientRecorder).mock).ctrl, $.interfaceValue((mr$ as _MockClientRecorder).mock, "*workflowservicetest.MockClient", /* @__PURE__ */ $.pointerType("workflowservicetest.MockClient")), "UpdateSchedule", args)
	}

	static __typeInfo = $.registerStructType(
		"workflowservicetest._MockClientRecorder",
		() => new _MockClientRecorder(),
		() => [$.methodSignature("BackfillSchedule", [["ctx", { kind: $.TypeKind.Interface, methods: [] }], ["_Request", { kind: $.TypeKind.Interface, methods: [] }], ["opts", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.pointerType("gomock.Call")], true), $.methodSignature("CountWorkflowExecutions", [["ctx", { kind: $.TypeKind.Interface, methods: [] }], ["_CountRequest", { kind: $.TypeKind.Interface, methods: [] }], ["opts", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.pointerType("gomock.Call")], true), $.methodSignature("CreateSchedule", [["ctx", { kind: $.TypeKind.Interface, methods: [] }], ["_Request", { kind: $.TypeKind.Interface, methods: [] }], ["opts", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.pointerType("gomock.Call")], true), $.methodSignature("DeleteDomain", [["ctx", { kind: $.TypeKind.Interface, methods: [] }], ["_DeleteRequest", { kind: $.TypeKind.Interface, methods: [] }], ["opts", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.pointerType("gomock.Call")], true), $.methodSignature("DeleteSchedule", [["ctx", { kind: $.TypeKind.Interface, methods: [] }], ["_Request", { kind: $.TypeKind.Interface, methods: [] }], ["opts", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.pointerType("gomock.Call")], true), $.methodSignature("DeprecateDomain", [["ctx", { kind: $.TypeKind.Interface, methods: [] }], ["_DeprecateRequest", { kind: $.TypeKind.Interface, methods: [] }], ["opts", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.pointerType("gomock.Call")], true), $.methodSignature("DescribeDomain", [["ctx", { kind: $.TypeKind.Interface, methods: [] }], ["_DescribeRequest", { kind: $.TypeKind.Interface, methods: [] }], ["opts", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.pointerType("gomock.Call")], true), $.methodSignature("DescribeSchedule", [["ctx", { kind: $.TypeKind.Interface, methods: [] }], ["_Request", { kind: $.TypeKind.Interface, methods: [] }], ["opts", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.pointerType("gomock.Call")], true), $.methodSignature("DescribeTaskList", [["ctx", { kind: $.TypeKind.Interface, methods: [] }], ["_Request", { kind: $.TypeKind.Interface, methods: [] }], ["opts", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.pointerType("gomock.Call")], true), $.methodSignature("DescribeWorkflowExecution", [["ctx", { kind: $.TypeKind.Interface, methods: [] }], ["_DescribeRequest", { kind: $.TypeKind.Interface, methods: [] }], ["opts", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.pointerType("gomock.Call")], true), $.methodSignature("DiagnoseWorkflowExecution", [["ctx", { kind: $.TypeKind.Interface, methods: [] }], ["_DiagnoseRequest", { kind: $.TypeKind.Interface, methods: [] }], ["opts", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.pointerType("gomock.Call")], true), $.methodSignature("FailoverDomain", [["ctx", { kind: $.TypeKind.Interface, methods: [] }], ["_FailoverRequest", { kind: $.TypeKind.Interface, methods: [] }], ["opts", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.pointerType("gomock.Call")], true), $.methodSignature("GetClusterInfo", [["ctx", { kind: $.TypeKind.Interface, methods: [] }], ["opts", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.pointerType("gomock.Call")], true), $.methodSignature("GetSearchAttributes", [["ctx", { kind: $.TypeKind.Interface, methods: [] }], ["opts", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.pointerType("gomock.Call")], true), $.methodSignature("GetTaskListsByDomain", [["ctx", { kind: $.TypeKind.Interface, methods: [] }], ["_Request", { kind: $.TypeKind.Interface, methods: [] }], ["opts", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.pointerType("gomock.Call")], true), $.methodSignature("GetWorkflowExecutionHistory", [["ctx", { kind: $.TypeKind.Interface, methods: [] }], ["_GetRequest", { kind: $.TypeKind.Interface, methods: [] }], ["opts", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.pointerType("gomock.Call")], true), $.methodSignature("ListArchivedWorkflowExecutions", [["ctx", { kind: $.TypeKind.Interface, methods: [] }], ["_ListRequest", { kind: $.TypeKind.Interface, methods: [] }], ["opts", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.pointerType("gomock.Call")], true), $.methodSignature("ListClosedWorkflowExecutions", [["ctx", { kind: $.TypeKind.Interface, methods: [] }], ["_ListRequest", { kind: $.TypeKind.Interface, methods: [] }], ["opts", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.pointerType("gomock.Call")], true), $.methodSignature("ListDomains", [["ctx", { kind: $.TypeKind.Interface, methods: [] }], ["_ListRequest", { kind: $.TypeKind.Interface, methods: [] }], ["opts", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.pointerType("gomock.Call")], true), $.methodSignature("ListFailoverHistory", [["ctx", { kind: $.TypeKind.Interface, methods: [] }], ["_ListRequest", { kind: $.TypeKind.Interface, methods: [] }], ["opts", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.pointerType("gomock.Call")], true), $.methodSignature("ListOpenWorkflowExecutions", [["ctx", { kind: $.TypeKind.Interface, methods: [] }], ["_ListRequest", { kind: $.TypeKind.Interface, methods: [] }], ["opts", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.pointerType("gomock.Call")], true), $.methodSignature("ListSchedules", [["ctx", { kind: $.TypeKind.Interface, methods: [] }], ["_Request", { kind: $.TypeKind.Interface, methods: [] }], ["opts", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.pointerType("gomock.Call")], true), $.methodSignature("ListTaskListPartitions", [["ctx", { kind: $.TypeKind.Interface, methods: [] }], ["_Request", { kind: $.TypeKind.Interface, methods: [] }], ["opts", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.pointerType("gomock.Call")], true), $.methodSignature("ListWorkflowExecutions", [["ctx", { kind: $.TypeKind.Interface, methods: [] }], ["_ListRequest", { kind: $.TypeKind.Interface, methods: [] }], ["opts", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.pointerType("gomock.Call")], true), $.methodSignature("PauseSchedule", [["ctx", { kind: $.TypeKind.Interface, methods: [] }], ["_Request", { kind: $.TypeKind.Interface, methods: [] }], ["opts", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.pointerType("gomock.Call")], true), $.methodSignature("PollForActivityTask", [["ctx", { kind: $.TypeKind.Interface, methods: [] }], ["_PollRequest", { kind: $.TypeKind.Interface, methods: [] }], ["opts", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.pointerType("gomock.Call")], true), $.methodSignature("PollForDecisionTask", [["ctx", { kind: $.TypeKind.Interface, methods: [] }], ["_PollRequest", { kind: $.TypeKind.Interface, methods: [] }], ["opts", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.pointerType("gomock.Call")], true), $.methodSignature("QueryWorkflow", [["ctx", { kind: $.TypeKind.Interface, methods: [] }], ["_QueryRequest", { kind: $.TypeKind.Interface, methods: [] }], ["opts", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.pointerType("gomock.Call")], true), $.methodSignature("RecordActivityTaskHeartbeat", [["ctx", { kind: $.TypeKind.Interface, methods: [] }], ["_HeartbeatRequest", { kind: $.TypeKind.Interface, methods: [] }], ["opts", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.pointerType("gomock.Call")], true), $.methodSignature("RecordActivityTaskHeartbeatByID", [["ctx", { kind: $.TypeKind.Interface, methods: [] }], ["_HeartbeatRequest", { kind: $.TypeKind.Interface, methods: [] }], ["opts", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.pointerType("gomock.Call")], true), $.methodSignature("RefreshWorkflowTasks", [["ctx", { kind: $.TypeKind.Interface, methods: [] }], ["_Request", { kind: $.TypeKind.Interface, methods: [] }], ["opts", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.pointerType("gomock.Call")], true), $.methodSignature("RegisterDomain", [["ctx", { kind: $.TypeKind.Interface, methods: [] }], ["_RegisterRequest", { kind: $.TypeKind.Interface, methods: [] }], ["opts", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.pointerType("gomock.Call")], true), $.methodSignature("RequestCancelWorkflowExecution", [["ctx", { kind: $.TypeKind.Interface, methods: [] }], ["_CancelRequest", { kind: $.TypeKind.Interface, methods: [] }], ["opts", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.pointerType("gomock.Call")], true), $.methodSignature("ResetStickyTaskList", [["ctx", { kind: $.TypeKind.Interface, methods: [] }], ["_ResetRequest", { kind: $.TypeKind.Interface, methods: [] }], ["opts", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.pointerType("gomock.Call")], true), $.methodSignature("ResetWorkflowExecution", [["ctx", { kind: $.TypeKind.Interface, methods: [] }], ["_ResetRequest", { kind: $.TypeKind.Interface, methods: [] }], ["opts", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.pointerType("gomock.Call")], true), $.methodSignature("RespondActivityTaskCanceled", [["ctx", { kind: $.TypeKind.Interface, methods: [] }], ["_CanceledRequest", { kind: $.TypeKind.Interface, methods: [] }], ["opts", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.pointerType("gomock.Call")], true), $.methodSignature("RespondActivityTaskCanceledByID", [["ctx", { kind: $.TypeKind.Interface, methods: [] }], ["_CanceledRequest", { kind: $.TypeKind.Interface, methods: [] }], ["opts", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.pointerType("gomock.Call")], true), $.methodSignature("RespondActivityTaskCompleted", [["ctx", { kind: $.TypeKind.Interface, methods: [] }], ["_CompleteRequest", { kind: $.TypeKind.Interface, methods: [] }], ["opts", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.pointerType("gomock.Call")], true), $.methodSignature("RespondActivityTaskCompletedByID", [["ctx", { kind: $.TypeKind.Interface, methods: [] }], ["_CompleteRequest", { kind: $.TypeKind.Interface, methods: [] }], ["opts", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.pointerType("gomock.Call")], true), $.methodSignature("RespondActivityTaskFailed", [["ctx", { kind: $.TypeKind.Interface, methods: [] }], ["_FailRequest", { kind: $.TypeKind.Interface, methods: [] }], ["opts", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.pointerType("gomock.Call")], true), $.methodSignature("RespondActivityTaskFailedByID", [["ctx", { kind: $.TypeKind.Interface, methods: [] }], ["_FailRequest", { kind: $.TypeKind.Interface, methods: [] }], ["opts", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.pointerType("gomock.Call")], true), $.methodSignature("RespondDecisionTaskCompleted", [["ctx", { kind: $.TypeKind.Interface, methods: [] }], ["_CompleteRequest", { kind: $.TypeKind.Interface, methods: [] }], ["opts", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.pointerType("gomock.Call")], true), $.methodSignature("RespondDecisionTaskFailed", [["ctx", { kind: $.TypeKind.Interface, methods: [] }], ["_FailedRequest", { kind: $.TypeKind.Interface, methods: [] }], ["opts", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.pointerType("gomock.Call")], true), $.methodSignature("RespondQueryTaskCompleted", [["ctx", { kind: $.TypeKind.Interface, methods: [] }], ["_CompleteRequest", { kind: $.TypeKind.Interface, methods: [] }], ["opts", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.pointerType("gomock.Call")], true), $.methodSignature("RestartWorkflowExecution", [["ctx", { kind: $.TypeKind.Interface, methods: [] }], ["_RestartRequest", { kind: $.TypeKind.Interface, methods: [] }], ["opts", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.pointerType("gomock.Call")], true), $.methodSignature("ScanWorkflowExecutions", [["ctx", { kind: $.TypeKind.Interface, methods: [] }], ["_ListRequest", { kind: $.TypeKind.Interface, methods: [] }], ["opts", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.pointerType("gomock.Call")], true), $.methodSignature("SignalWithStartWorkflowExecution", [["ctx", { kind: $.TypeKind.Interface, methods: [] }], ["_SignalWithStartRequest", { kind: $.TypeKind.Interface, methods: [] }], ["opts", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.pointerType("gomock.Call")], true), $.methodSignature("SignalWithStartWorkflowExecutionAsync", [["ctx", { kind: $.TypeKind.Interface, methods: [] }], ["_SignalWithStartRequest", { kind: $.TypeKind.Interface, methods: [] }], ["opts", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.pointerType("gomock.Call")], true), $.methodSignature("SignalWorkflowExecution", [["ctx", { kind: $.TypeKind.Interface, methods: [] }], ["_SignalRequest", { kind: $.TypeKind.Interface, methods: [] }], ["opts", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.pointerType("gomock.Call")], true), $.methodSignature("StartWorkflowExecution", [["ctx", { kind: $.TypeKind.Interface, methods: [] }], ["_StartRequest", { kind: $.TypeKind.Interface, methods: [] }], ["opts", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.pointerType("gomock.Call")], true), $.methodSignature("StartWorkflowExecutionAsync", [["ctx", { kind: $.TypeKind.Interface, methods: [] }], ["_StartRequest", { kind: $.TypeKind.Interface, methods: [] }], ["opts", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.pointerType("gomock.Call")], true), $.methodSignature("TerminateWorkflowExecution", [["ctx", { kind: $.TypeKind.Interface, methods: [] }], ["_TerminateRequest", { kind: $.TypeKind.Interface, methods: [] }], ["opts", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.pointerType("gomock.Call")], true), $.methodSignature("UnpauseSchedule", [["ctx", { kind: $.TypeKind.Interface, methods: [] }], ["_Request", { kind: $.TypeKind.Interface, methods: [] }], ["opts", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.pointerType("gomock.Call")], true), $.methodSignature("UpdateDomain", [["ctx", { kind: $.TypeKind.Interface, methods: [] }], ["_UpdateRequest", { kind: $.TypeKind.Interface, methods: [] }], ["opts", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.pointerType("gomock.Call")], true), $.methodSignature("UpdateSchedule", [["ctx", { kind: $.TypeKind.Interface, methods: [] }], ["_Request", { kind: $.TypeKind.Interface, methods: [] }], ["opts", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.pointerType("gomock.Call")], true)],
		_MockClientRecorder,
		() => [/* @__PURE__ */ $.structField("mock", /* @__PURE__ */ $.pointerType("workflowservicetest.MockClient"), [0], 0, false, { pkgPath: "go.uber.org/cadence/.gen/go/cadence/workflowservicetest" })]
	)
}

export function NewMockClient(ctrl: gomock.Controller | $.VarRef<gomock.Controller> | null): MockClient | $.VarRef<MockClient> | null {
	let mock: MockClient | $.VarRef<MockClient> | null = new MockClient({ctrl: ctrl})
	$.pointerValue<MockClient>(mock).recorder = new _MockClientRecorder({mock: mock})
	return mock
}
