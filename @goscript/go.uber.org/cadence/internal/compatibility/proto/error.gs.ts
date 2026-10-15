// Generated file based on error.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as apiv1 from "@goscript/github.com/uber/cadence-idl/go/proto/api/v1/index.js"

import * as protobuf from "@goscript/go.uber.org/yarpc/encoding/protobuf/index.js"

import * as yarpcerrors from "@goscript/go.uber.org/yarpc/yarpcerrors/index.js"

import * as shared from "@goscript/go.uber.org/cadence/.gen/go/shared/index.js"
import "@goscript/github.com/uber/cadence-idl/go/proto/api/v1/index.js"
import "@goscript/go.uber.org/yarpc/encoding/protobuf/index.js"
import "@goscript/go.uber.org/yarpc/yarpcerrors/index.js"
import "@goscript/go.uber.org/cadence/.gen/go/shared/index.js"

export async function Error(err: $.GoError): globalThis.Promise<$.GoError> {
	if (err == null) {
		return protobuf.NewError(0, "", null)
	}

	{
		const __goscriptTypeSwitchValue = err
		switch (true) {
			case $.typeAssert<shared.AccessDeniedError | $.VarRef<shared.AccessDeniedError> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("shared.AccessDeniedError")).ok:
				{
					let e: shared.AccessDeniedError | $.VarRef<shared.AccessDeniedError> | null = $.typeAssert<shared.AccessDeniedError | $.VarRef<shared.AccessDeniedError> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("shared.AccessDeniedError")).value
					return protobuf.NewError(7, $.pointerValue<shared.AccessDeniedError>(e).Message, null)
				}
				break
			case $.typeAssert<shared.InternalServiceError | $.VarRef<shared.InternalServiceError> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("shared.InternalServiceError")).ok:
				{
					let e: shared.InternalServiceError | $.VarRef<shared.InternalServiceError> | null = $.typeAssert<shared.InternalServiceError | $.VarRef<shared.InternalServiceError> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("shared.InternalServiceError")).value
					return protobuf.NewError(13, $.pointerValue<shared.InternalServiceError>(e).Message, null)
				}
				break
			case $.typeAssert<shared.EntityNotExistsError | $.VarRef<shared.EntityNotExistsError> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("shared.EntityNotExistsError")).ok:
				{
					let e: shared.EntityNotExistsError | $.VarRef<shared.EntityNotExistsError> | null = $.typeAssert<shared.EntityNotExistsError | $.VarRef<shared.EntityNotExistsError> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("shared.EntityNotExistsError")).value
					return protobuf.NewError(5, $.pointerValue<shared.EntityNotExistsError>(e).Message, $.arrayToSlice<protobuf.ErrorOption>([protobuf.WithErrorDetails($.arrayToSlice<any>([$.interfaceValue((() => { const __goscriptLiteralField0 = (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as shared.EntityNotExistsError).GetCurrentCluster() : shared.EntityNotExistsError.prototype.GetCurrentCluster.call(e)); const __goscriptLiteralField1 = (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as shared.EntityNotExistsError).GetActiveCluster() : shared.EntityNotExistsError.prototype.GetActiveCluster.call(e)); return new apiv1.EntityNotExistsError({CurrentCluster: __goscriptLiteralField0, ActiveCluster: __goscriptLiteralField1}) })(), "*apiv1.EntityNotExistsError", /* @__PURE__ */ $.pointerType("apiv1.EntityNotExistsError"))]))]))
				}
				break
			case $.typeAssert<shared.WorkflowExecutionAlreadyCompletedError | $.VarRef<shared.WorkflowExecutionAlreadyCompletedError> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("shared.WorkflowExecutionAlreadyCompletedError")).ok:
				{
					let e: shared.WorkflowExecutionAlreadyCompletedError | $.VarRef<shared.WorkflowExecutionAlreadyCompletedError> | null = $.typeAssert<shared.WorkflowExecutionAlreadyCompletedError | $.VarRef<shared.WorkflowExecutionAlreadyCompletedError> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("shared.WorkflowExecutionAlreadyCompletedError")).value
					return protobuf.NewError(5, $.pointerValue<shared.WorkflowExecutionAlreadyCompletedError>(e).Message, $.arrayToSlice<protobuf.ErrorOption>([protobuf.WithErrorDetails($.arrayToSlice<any>([$.interfaceValue(new apiv1.WorkflowExecutionAlreadyCompletedError(), "*apiv1.WorkflowExecutionAlreadyCompletedError", /* @__PURE__ */ $.pointerType("apiv1.WorkflowExecutionAlreadyCompletedError"))]))]))
				}
				break
			case $.typeAssert<shared.BadRequestError | $.VarRef<shared.BadRequestError> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("shared.BadRequestError")).ok:
				{
					let e: shared.BadRequestError | $.VarRef<shared.BadRequestError> | null = $.typeAssert<shared.BadRequestError | $.VarRef<shared.BadRequestError> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("shared.BadRequestError")).value
					return protobuf.NewError(3, $.pointerValue<shared.BadRequestError>(e).Message, null)
				}
				break
			case $.typeAssert<shared.QueryFailedError | $.VarRef<shared.QueryFailedError> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("shared.QueryFailedError")).ok:
				{
					let e: shared.QueryFailedError | $.VarRef<shared.QueryFailedError> | null = $.typeAssert<shared.QueryFailedError | $.VarRef<shared.QueryFailedError> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("shared.QueryFailedError")).value
					return protobuf.NewError(3, $.pointerValue<shared.QueryFailedError>(e).Message, $.arrayToSlice<protobuf.ErrorOption>([protobuf.WithErrorDetails($.arrayToSlice<any>([$.interfaceValue(new apiv1.QueryFailedError(), "*apiv1.QueryFailedError", /* @__PURE__ */ $.pointerType("apiv1.QueryFailedError"))]))]))
				}
				break
			case $.typeAssert<shared.CancellationAlreadyRequestedError | $.VarRef<shared.CancellationAlreadyRequestedError> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("shared.CancellationAlreadyRequestedError")).ok:
				{
					let e: shared.CancellationAlreadyRequestedError | $.VarRef<shared.CancellationAlreadyRequestedError> | null = $.typeAssert<shared.CancellationAlreadyRequestedError | $.VarRef<shared.CancellationAlreadyRequestedError> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("shared.CancellationAlreadyRequestedError")).value
					return protobuf.NewError(6, $.pointerValue<shared.CancellationAlreadyRequestedError>(e).Message, $.arrayToSlice<protobuf.ErrorOption>([protobuf.WithErrorDetails($.arrayToSlice<any>([$.interfaceValue(new apiv1.CancellationAlreadyRequestedError(), "*apiv1.CancellationAlreadyRequestedError", /* @__PURE__ */ $.pointerType("apiv1.CancellationAlreadyRequestedError"))]))]))
				}
				break
			case $.typeAssert<shared.DomainAlreadyExistsError | $.VarRef<shared.DomainAlreadyExistsError> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("shared.DomainAlreadyExistsError")).ok:
				{
					let e: shared.DomainAlreadyExistsError | $.VarRef<shared.DomainAlreadyExistsError> | null = $.typeAssert<shared.DomainAlreadyExistsError | $.VarRef<shared.DomainAlreadyExistsError> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("shared.DomainAlreadyExistsError")).value
					return protobuf.NewError(6, $.pointerValue<shared.DomainAlreadyExistsError>(e).Message, $.arrayToSlice<protobuf.ErrorOption>([protobuf.WithErrorDetails($.arrayToSlice<any>([$.interfaceValue(new apiv1.DomainAlreadyExistsError(), "*apiv1.DomainAlreadyExistsError", /* @__PURE__ */ $.pointerType("apiv1.DomainAlreadyExistsError"))]))]))
				}
				break
			case $.typeAssert<shared.WorkflowExecutionAlreadyStartedError | $.VarRef<shared.WorkflowExecutionAlreadyStartedError> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("shared.WorkflowExecutionAlreadyStartedError")).ok:
				{
					let e: shared.WorkflowExecutionAlreadyStartedError | $.VarRef<shared.WorkflowExecutionAlreadyStartedError> | null = $.typeAssert<shared.WorkflowExecutionAlreadyStartedError | $.VarRef<shared.WorkflowExecutionAlreadyStartedError> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("shared.WorkflowExecutionAlreadyStartedError")).value
					return protobuf.NewError(6, (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as shared.WorkflowExecutionAlreadyStartedError).GetMessage() : shared.WorkflowExecutionAlreadyStartedError.prototype.GetMessage.call(e)), $.arrayToSlice<protobuf.ErrorOption>([protobuf.WithErrorDetails($.arrayToSlice<any>([$.interfaceValue((() => { const __goscriptLiteralField2 = (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as shared.WorkflowExecutionAlreadyStartedError).GetStartRequestId() : shared.WorkflowExecutionAlreadyStartedError.prototype.GetStartRequestId.call(e)); const __goscriptLiteralField3 = (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as shared.WorkflowExecutionAlreadyStartedError).GetRunId() : shared.WorkflowExecutionAlreadyStartedError.prototype.GetRunId.call(e)); return new apiv1.WorkflowExecutionAlreadyStartedError({StartRequestId: __goscriptLiteralField2, RunId: __goscriptLiteralField3}) })(), "*apiv1.WorkflowExecutionAlreadyStartedError", /* @__PURE__ */ $.pointerType("apiv1.WorkflowExecutionAlreadyStartedError"))]))]))
				}
				break
			case $.typeAssert<shared.ClientVersionNotSupportedError | $.VarRef<shared.ClientVersionNotSupportedError> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("shared.ClientVersionNotSupportedError")).ok:
				{
					let e: shared.ClientVersionNotSupportedError | $.VarRef<shared.ClientVersionNotSupportedError> | null = $.typeAssert<shared.ClientVersionNotSupportedError | $.VarRef<shared.ClientVersionNotSupportedError> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("shared.ClientVersionNotSupportedError")).value
					return protobuf.NewError(9, "Client version not supported", $.arrayToSlice<protobuf.ErrorOption>([protobuf.WithErrorDetails($.arrayToSlice<any>([$.interfaceValue(new apiv1.ClientVersionNotSupportedError({FeatureVersion: $.pointerValue<shared.ClientVersionNotSupportedError>(e).FeatureVersion, ClientImpl: $.pointerValue<shared.ClientVersionNotSupportedError>(e).ClientImpl, SupportedVersions: $.pointerValue<shared.ClientVersionNotSupportedError>(e).SupportedVersions}), "*apiv1.ClientVersionNotSupportedError", /* @__PURE__ */ $.pointerType("apiv1.ClientVersionNotSupportedError"))]))]))
				}
				break
			case $.typeAssert<shared.FeatureNotEnabledError | $.VarRef<shared.FeatureNotEnabledError> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("shared.FeatureNotEnabledError")).ok:
				{
					let e: shared.FeatureNotEnabledError | $.VarRef<shared.FeatureNotEnabledError> | null = $.typeAssert<shared.FeatureNotEnabledError | $.VarRef<shared.FeatureNotEnabledError> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("shared.FeatureNotEnabledError")).value
					return protobuf.NewError(9, "Feature flag not enabled", $.arrayToSlice<protobuf.ErrorOption>([protobuf.WithErrorDetails($.arrayToSlice<any>([$.interfaceValue(new apiv1.FeatureNotEnabledError({FeatureFlag: $.pointerValue<shared.FeatureNotEnabledError>(e).FeatureFlag}), "*apiv1.FeatureNotEnabledError", /* @__PURE__ */ $.pointerType("apiv1.FeatureNotEnabledError"))]))]))
				}
				break
			case $.typeAssert<shared.DomainNotActiveError | $.VarRef<shared.DomainNotActiveError> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("shared.DomainNotActiveError")).ok:
				{
					let e: shared.DomainNotActiveError | $.VarRef<shared.DomainNotActiveError> | null = $.typeAssert<shared.DomainNotActiveError | $.VarRef<shared.DomainNotActiveError> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("shared.DomainNotActiveError")).value
					return protobuf.NewError(9, $.pointerValue<shared.DomainNotActiveError>(e).Message, $.arrayToSlice<protobuf.ErrorOption>([protobuf.WithErrorDetails($.arrayToSlice<any>([$.interfaceValue(new apiv1.DomainNotActiveError({Domain: $.pointerValue<shared.DomainNotActiveError>(e).DomainName, CurrentCluster: $.pointerValue<shared.DomainNotActiveError>(e).CurrentCluster, ActiveCluster: $.pointerValue<shared.DomainNotActiveError>(e).ActiveCluster}), "*apiv1.DomainNotActiveError", /* @__PURE__ */ $.pointerType("apiv1.DomainNotActiveError"))]))]))
				}
				break
			case $.typeAssert<shared.LimitExceededError | $.VarRef<shared.LimitExceededError> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("shared.LimitExceededError")).ok:
				{
					let e: shared.LimitExceededError | $.VarRef<shared.LimitExceededError> | null = $.typeAssert<shared.LimitExceededError | $.VarRef<shared.LimitExceededError> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("shared.LimitExceededError")).value
					return protobuf.NewError(8, $.pointerValue<shared.LimitExceededError>(e).Message, $.arrayToSlice<protobuf.ErrorOption>([protobuf.WithErrorDetails($.arrayToSlice<any>([$.interfaceValue(new apiv1.LimitExceededError(), "*apiv1.LimitExceededError", /* @__PURE__ */ $.pointerType("apiv1.LimitExceededError"))]))]))
				}
				break
			case $.typeAssert<shared.ServiceBusyError | $.VarRef<shared.ServiceBusyError> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("shared.ServiceBusyError")).ok:
				{
					let e: shared.ServiceBusyError | $.VarRef<shared.ServiceBusyError> | null = $.typeAssert<shared.ServiceBusyError | $.VarRef<shared.ServiceBusyError> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("shared.ServiceBusyError")).value
					return protobuf.NewError(8, $.pointerValue<shared.ServiceBusyError>(e).Message, $.arrayToSlice<protobuf.ErrorOption>([protobuf.WithErrorDetails($.arrayToSlice<any>([$.interfaceValue(new apiv1.ServiceBusyError(), "*apiv1.ServiceBusyError", /* @__PURE__ */ $.pointerType("apiv1.ServiceBusyError"))]))]))
				}
				break
		}
	}

	return protobuf.NewError(2, (__goscriptAwait = (err !== null && (err as any).__isVarRef !== true && (err as any).__goValue === undefined ? (err as Exclude<$.GoError, null>) : $.pointerValue<Exclude<$.GoError, null>>(err)).Error(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), null)
}

var __goscriptAwait: any
