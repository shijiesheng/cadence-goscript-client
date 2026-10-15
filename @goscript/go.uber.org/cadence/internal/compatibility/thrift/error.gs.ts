// Generated file based on error.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as errors from "@goscript/errors/index.js"

import * as apiv1 from "@goscript/github.com/uber/cadence-idl/go/proto/api/v1/index.js"

import * as protobuf from "@goscript/go.uber.org/yarpc/encoding/protobuf/index.js"

import * as yarpcerrors from "@goscript/go.uber.org/yarpc/yarpcerrors/index.js"

import * as shared from "@goscript/go.uber.org/cadence/.gen/go/shared/index.js"

import * as common from "@goscript/go.uber.org/cadence/internal/common/index.js"
import "@goscript/errors/index.js"
import "@goscript/github.com/uber/cadence-idl/go/proto/api/v1/index.js"
import "@goscript/go.uber.org/yarpc/encoding/protobuf/index.js"
import "@goscript/go.uber.org/yarpc/yarpcerrors/index.js"
import "@goscript/go.uber.org/cadence/.gen/go/shared/index.js"
import "@goscript/go.uber.org/cadence/internal/common/index.js"

export async function Error(err: $.GoError): globalThis.Promise<$.GoError> {
	let status: yarpcerrors.Status | $.VarRef<yarpcerrors.Status> | null = await yarpcerrors.FromError(err)
	if ((status == null) || ((status !== null && (status as any).__isVarRef !== true && (status as any).__goValue === undefined ? ((status as any) as yarpcerrors.Status).Code() : yarpcerrors.Status.prototype.Code.call(status)) == 0)) {
		return null
	}

	switch ((status !== null && (status as any).__isVarRef !== true && (status as any).__goValue === undefined ? ((status as any) as yarpcerrors.Status).Code() : yarpcerrors.Status.prototype.Code.call(status))) {
		case yarpcerrors.CodePermissionDenied:
		{
			return $.interfaceValue<$.GoError>((() => { const __goscriptLiteralField0 = (status !== null && (status as any).__isVarRef !== true && (status as any).__goValue === undefined ? ((status as any) as yarpcerrors.Status).Message() : yarpcerrors.Status.prototype.Message.call(status)); return new shared.AccessDeniedError({Message: __goscriptLiteralField0}) })(), "*shared.AccessDeniedError", /* @__PURE__ */ $.pointerType("shared.AccessDeniedError"))
			break
		}
		case yarpcerrors.CodeInternal:
		{
			return $.interfaceValue<$.GoError>((() => { const __goscriptLiteralField1 = (status !== null && (status as any).__isVarRef !== true && (status as any).__goValue === undefined ? ((status as any) as yarpcerrors.Status).Message() : yarpcerrors.Status.prototype.Message.call(status)); return new shared.InternalServiceError({Message: __goscriptLiteralField1}) })(), "*shared.InternalServiceError", /* @__PURE__ */ $.pointerType("shared.InternalServiceError"))
			break
		}
		case yarpcerrors.CodeNotFound:
		{
			{
				const __goscriptTypeSwitchValue = await getErrorDetails(err)
				switch (true) {
					case $.typeAssert<apiv1.EntityNotExistsError | $.VarRef<apiv1.EntityNotExistsError> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("apiv1.EntityNotExistsError")).ok:
						{
							let details: apiv1.EntityNotExistsError | $.VarRef<apiv1.EntityNotExistsError> | null = $.typeAssert<apiv1.EntityNotExistsError | $.VarRef<apiv1.EntityNotExistsError> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("apiv1.EntityNotExistsError")).value
							return $.interfaceValue<$.GoError>((() => { const __goscriptLiteralField2 = (status !== null && (status as any).__isVarRef !== true && (status as any).__goValue === undefined ? ((status as any) as yarpcerrors.Status).Message() : yarpcerrors.Status.prototype.Message.call(status)); return new shared.EntityNotExistsError({Message: __goscriptLiteralField2, CurrentCluster: $.fieldRef($.pointerValue<apiv1.EntityNotExistsError>(details)._fields, "CurrentCluster"), ActiveCluster: $.fieldRef($.pointerValue<apiv1.EntityNotExistsError>(details)._fields, "ActiveCluster")}) })(), "*shared.EntityNotExistsError", /* @__PURE__ */ $.pointerType("shared.EntityNotExistsError"))
						}
						break
					case $.typeAssert<apiv1.WorkflowExecutionAlreadyCompletedError | $.VarRef<apiv1.WorkflowExecutionAlreadyCompletedError> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("apiv1.WorkflowExecutionAlreadyCompletedError")).ok:
						{
							let details: apiv1.WorkflowExecutionAlreadyCompletedError | $.VarRef<apiv1.WorkflowExecutionAlreadyCompletedError> | null = $.typeAssert<apiv1.WorkflowExecutionAlreadyCompletedError | $.VarRef<apiv1.WorkflowExecutionAlreadyCompletedError> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("apiv1.WorkflowExecutionAlreadyCompletedError")).value
							return $.interfaceValue<$.GoError>((() => { const __goscriptLiteralField3 = (status !== null && (status as any).__isVarRef !== true && (status as any).__goValue === undefined ? ((status as any) as yarpcerrors.Status).Message() : yarpcerrors.Status.prototype.Message.call(status)); return new shared.WorkflowExecutionAlreadyCompletedError({Message: __goscriptLiteralField3}) })(), "*shared.WorkflowExecutionAlreadyCompletedError", /* @__PURE__ */ $.pointerType("shared.WorkflowExecutionAlreadyCompletedError"))
						}
						break
				}
			}
			break
		}
		case yarpcerrors.CodeInvalidArgument:
		{
			{
				const __goscriptTypeSwitchValue = await getErrorDetails(err)
				switch (true) {
					case __goscriptTypeSwitchValue == null:
						{
							return $.interfaceValue<$.GoError>((() => { const __goscriptLiteralField4 = (status !== null && (status as any).__isVarRef !== true && (status as any).__goValue === undefined ? ((status as any) as yarpcerrors.Status).Message() : yarpcerrors.Status.prototype.Message.call(status)); return new shared.BadRequestError({Message: __goscriptLiteralField4}) })(), "*shared.BadRequestError", /* @__PURE__ */ $.pointerType("shared.BadRequestError"))
						}
						break
					case $.typeAssert<apiv1.QueryFailedError | $.VarRef<apiv1.QueryFailedError> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("apiv1.QueryFailedError")).ok:
						{
							return $.interfaceValue<$.GoError>((() => { const __goscriptLiteralField5 = (status !== null && (status as any).__isVarRef !== true && (status as any).__goValue === undefined ? ((status as any) as yarpcerrors.Status).Message() : yarpcerrors.Status.prototype.Message.call(status)); return new shared.QueryFailedError({Message: __goscriptLiteralField5}) })(), "*shared.QueryFailedError", /* @__PURE__ */ $.pointerType("shared.QueryFailedError"))
						}
						break
				}
			}
			break
		}
		case yarpcerrors.CodeAlreadyExists:
		{
			{
				const __goscriptTypeSwitchValue = await getErrorDetails(err)
				switch (true) {
					case $.typeAssert<apiv1.CancellationAlreadyRequestedError | $.VarRef<apiv1.CancellationAlreadyRequestedError> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("apiv1.CancellationAlreadyRequestedError")).ok:
						{
							let details: apiv1.CancellationAlreadyRequestedError | $.VarRef<apiv1.CancellationAlreadyRequestedError> | null = $.typeAssert<apiv1.CancellationAlreadyRequestedError | $.VarRef<apiv1.CancellationAlreadyRequestedError> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("apiv1.CancellationAlreadyRequestedError")).value
							return $.interfaceValue<$.GoError>((() => { const __goscriptLiteralField6 = (status !== null && (status as any).__isVarRef !== true && (status as any).__goValue === undefined ? ((status as any) as yarpcerrors.Status).Message() : yarpcerrors.Status.prototype.Message.call(status)); return new shared.CancellationAlreadyRequestedError({Message: __goscriptLiteralField6}) })(), "*shared.CancellationAlreadyRequestedError", /* @__PURE__ */ $.pointerType("shared.CancellationAlreadyRequestedError"))
						}
						break
					case $.typeAssert<apiv1.DomainAlreadyExistsError | $.VarRef<apiv1.DomainAlreadyExistsError> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("apiv1.DomainAlreadyExistsError")).ok:
						{
							let details: apiv1.DomainAlreadyExistsError | $.VarRef<apiv1.DomainAlreadyExistsError> | null = $.typeAssert<apiv1.DomainAlreadyExistsError | $.VarRef<apiv1.DomainAlreadyExistsError> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("apiv1.DomainAlreadyExistsError")).value
							return $.interfaceValue<$.GoError>((() => { const __goscriptLiteralField7 = (status !== null && (status as any).__isVarRef !== true && (status as any).__goValue === undefined ? ((status as any) as yarpcerrors.Status).Message() : yarpcerrors.Status.prototype.Message.call(status)); return new shared.DomainAlreadyExistsError({Message: __goscriptLiteralField7}) })(), "*shared.DomainAlreadyExistsError", /* @__PURE__ */ $.pointerType("shared.DomainAlreadyExistsError"))
						}
						break
					case $.typeAssert<apiv1.WorkflowExecutionAlreadyStartedError | $.VarRef<apiv1.WorkflowExecutionAlreadyStartedError> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("apiv1.WorkflowExecutionAlreadyStartedError")).ok:
						{
							let details: apiv1.WorkflowExecutionAlreadyStartedError | $.VarRef<apiv1.WorkflowExecutionAlreadyStartedError> | null = $.typeAssert<apiv1.WorkflowExecutionAlreadyStartedError | $.VarRef<apiv1.WorkflowExecutionAlreadyStartedError> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("apiv1.WorkflowExecutionAlreadyStartedError")).value
							return $.interfaceValue<$.GoError>((() => { const __goscriptLiteralField8 = common.StringPtr((status !== null && (status as any).__isVarRef !== true && (status as any).__goValue === undefined ? ((status as any) as yarpcerrors.Status).Message() : yarpcerrors.Status.prototype.Message.call(status))); return new shared.WorkflowExecutionAlreadyStartedError({Message: __goscriptLiteralField8, StartRequestId: $.fieldRef($.pointerValue<apiv1.WorkflowExecutionAlreadyStartedError>(details)._fields, "StartRequestId"), RunId: $.fieldRef($.pointerValue<apiv1.WorkflowExecutionAlreadyStartedError>(details)._fields, "RunId")}) })(), "*shared.WorkflowExecutionAlreadyStartedError", /* @__PURE__ */ $.pointerType("shared.WorkflowExecutionAlreadyStartedError"))
						}
						break
				}
			}
			break
		}
		case yarpcerrors.CodeDataLoss:
		{
			return $.interfaceValue<$.GoError>((() => { const __goscriptLiteralField9 = (status !== null && (status as any).__isVarRef !== true && (status as any).__goValue === undefined ? ((status as any) as yarpcerrors.Status).Message() : yarpcerrors.Status.prototype.Message.call(status)); return new shared.InternalDataInconsistencyError({Message: __goscriptLiteralField9}) })(), "*shared.InternalDataInconsistencyError", /* @__PURE__ */ $.pointerType("shared.InternalDataInconsistencyError"))
			break
		}
		case yarpcerrors.CodeFailedPrecondition:
		{
			{
				const __goscriptTypeSwitchValue = await getErrorDetails(err)
				switch (true) {
					case $.typeAssert<apiv1.ClientVersionNotSupportedError | $.VarRef<apiv1.ClientVersionNotSupportedError> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("apiv1.ClientVersionNotSupportedError")).ok:
						{
							let details: apiv1.ClientVersionNotSupportedError | $.VarRef<apiv1.ClientVersionNotSupportedError> | null = $.typeAssert<apiv1.ClientVersionNotSupportedError | $.VarRef<apiv1.ClientVersionNotSupportedError> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("apiv1.ClientVersionNotSupportedError")).value
							return $.interfaceValue<$.GoError>(new shared.ClientVersionNotSupportedError({FeatureVersion: $.pointerValue<apiv1.ClientVersionNotSupportedError>(details).FeatureVersion, ClientImpl: $.pointerValue<apiv1.ClientVersionNotSupportedError>(details).ClientImpl, SupportedVersions: $.pointerValue<apiv1.ClientVersionNotSupportedError>(details).SupportedVersions}), "*shared.ClientVersionNotSupportedError", /* @__PURE__ */ $.pointerType("shared.ClientVersionNotSupportedError"))
						}
						break
					case $.typeAssert<apiv1.FeatureNotEnabledError | $.VarRef<apiv1.FeatureNotEnabledError> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("apiv1.FeatureNotEnabledError")).ok:
						{
							let details: apiv1.FeatureNotEnabledError | $.VarRef<apiv1.FeatureNotEnabledError> | null = $.typeAssert<apiv1.FeatureNotEnabledError | $.VarRef<apiv1.FeatureNotEnabledError> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("apiv1.FeatureNotEnabledError")).value
							return $.interfaceValue<$.GoError>(new shared.FeatureNotEnabledError({FeatureFlag: $.pointerValue<apiv1.FeatureNotEnabledError>(details).FeatureFlag}), "*shared.FeatureNotEnabledError", /* @__PURE__ */ $.pointerType("shared.FeatureNotEnabledError"))
						}
						break
					case $.typeAssert<apiv1.DomainNotActiveError | $.VarRef<apiv1.DomainNotActiveError> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("apiv1.DomainNotActiveError")).ok:
						{
							let details: apiv1.DomainNotActiveError | $.VarRef<apiv1.DomainNotActiveError> | null = $.typeAssert<apiv1.DomainNotActiveError | $.VarRef<apiv1.DomainNotActiveError> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("apiv1.DomainNotActiveError")).value
							return $.interfaceValue<$.GoError>((() => { const __goscriptLiteralField10 = (status !== null && (status as any).__isVarRef !== true && (status as any).__goValue === undefined ? ((status as any) as yarpcerrors.Status).Message() : yarpcerrors.Status.prototype.Message.call(status)); return new shared.DomainNotActiveError({Message: __goscriptLiteralField10, DomainName: $.pointerValue<apiv1.DomainNotActiveError>(details).Domain, CurrentCluster: $.pointerValue<apiv1.DomainNotActiveError>(details).CurrentCluster, ActiveCluster: $.pointerValue<apiv1.DomainNotActiveError>(details).ActiveCluster}) })(), "*shared.DomainNotActiveError", /* @__PURE__ */ $.pointerType("shared.DomainNotActiveError"))
						}
						break
				}
			}
			break
		}
		case yarpcerrors.CodeResourceExhausted:
		{
			{
				const __goscriptTypeSwitchValue = await getErrorDetails(err)
				switch (true) {
					case $.typeAssert<apiv1.LimitExceededError | $.VarRef<apiv1.LimitExceededError> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("apiv1.LimitExceededError")).ok:
						{
							return $.interfaceValue<$.GoError>((() => { const __goscriptLiteralField11 = (status !== null && (status as any).__isVarRef !== true && (status as any).__goValue === undefined ? ((status as any) as yarpcerrors.Status).Message() : yarpcerrors.Status.prototype.Message.call(status)); return new shared.LimitExceededError({Message: __goscriptLiteralField11}) })(), "*shared.LimitExceededError", /* @__PURE__ */ $.pointerType("shared.LimitExceededError"))
						}
						break
					case $.typeAssert<apiv1.ServiceBusyError | $.VarRef<apiv1.ServiceBusyError> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("apiv1.ServiceBusyError")).ok:
						{
							return $.interfaceValue<$.GoError>((() => { const __goscriptLiteralField12 = (status !== null && (status as any).__isVarRef !== true && (status as any).__goValue === undefined ? ((status as any) as yarpcerrors.Status).Message() : yarpcerrors.Status.prototype.Message.call(status)); return new shared.ServiceBusyError({Message: __goscriptLiteralField12}) })(), "*shared.ServiceBusyError", /* @__PURE__ */ $.pointerType("shared.ServiceBusyError"))
						}
						break
				}
			}
			break
		}
		case yarpcerrors.CodeUnknown:
		{
			return errors.New((status !== null && (status as any).__isVarRef !== true && (status as any).__goValue === undefined ? ((status as any) as yarpcerrors.Status).Message() : yarpcerrors.Status.prototype.Message.call(status)))
			break
		}
	}

	// If error does not match anything, return raw yarpc status error
	// There are some code that casts error to yarpc status to check for deadline exceeded status
	return $.interfaceValue<$.GoError>(status, "*yarpcerrors.Status", /* @__PURE__ */ $.pointerType("yarpcerrors.Status"))
}

export async function getErrorDetails(err: $.GoError): globalThis.Promise<any> {
	let details: $.Slice<any> = await protobuf.GetErrorDetails(err)
	if ($.sliceLen(details) > 0) {
		return $.arrayIndex(details!, 0)
	}
	return null
}
