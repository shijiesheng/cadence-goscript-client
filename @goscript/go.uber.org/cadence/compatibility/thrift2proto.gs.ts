// Generated file based on thrift2proto.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as workflowserviceclient from "@goscript/go.uber.org/cadence/.gen/go/cadence/workflowserviceclient/index.js"

import * as internal from "@goscript/go.uber.org/cadence/internal/compatibility/index.js"

import * as apiv1 from "@goscript/github.com/uber/cadence-idl/go/proto/api/v1/index.js"
import "@goscript/go.uber.org/cadence/.gen/go/cadence/workflowserviceclient/index.js"
import "@goscript/go.uber.org/cadence/internal/compatibility/index.js"
import "@goscript/github.com/uber/cadence-idl/go/proto/api/v1/index.js"

$.registerTypePackagePath("go.uber.org/cadence/compatibility", ["compatibility.AdapterClients"])

export class AdapterClients {
	public get Domain(): apiv1.DomainAPIYARPCClient | null {
		return this._fields.Domain
	}

	public set Domain(value: apiv1.DomainAPIYARPCClient | null) {
		this._fields.Domain = value
	}

	public get Workflow(): apiv1.WorkflowAPIYARPCClient | null {
		return this._fields.Workflow
	}

	public set Workflow(value: apiv1.WorkflowAPIYARPCClient | null) {
		this._fields.Workflow = value
	}

	public get Worker(): apiv1.WorkerAPIYARPCClient | null {
		return this._fields.Worker
	}

	public set Worker(value: apiv1.WorkerAPIYARPCClient | null) {
		this._fields.Worker = value
	}

	public get Visibility(): apiv1.VisibilityAPIYARPCClient | null {
		return this._fields.Visibility
	}

	public set Visibility(value: apiv1.VisibilityAPIYARPCClient | null) {
		this._fields.Visibility = value
	}

	public get Schedule(): apiv1.ScheduleAPIYARPCClient | null {
		return this._fields.Schedule
	}

	public set Schedule(value: apiv1.ScheduleAPIYARPCClient | null) {
		this._fields.Schedule = value
	}

	public _fields: {
		Domain: apiv1.DomainAPIYARPCClient | null
		Workflow: apiv1.WorkflowAPIYARPCClient | null
		Worker: apiv1.WorkerAPIYARPCClient | null
		Visibility: apiv1.VisibilityAPIYARPCClient | null
		Schedule: apiv1.ScheduleAPIYARPCClient | null
	}

	constructor(init?: Partial<{Domain?: apiv1.DomainAPIYARPCClient | null, Workflow?: apiv1.WorkflowAPIYARPCClient | null, Worker?: apiv1.WorkerAPIYARPCClient | null, Visibility?: apiv1.VisibilityAPIYARPCClient | null, Schedule?: apiv1.ScheduleAPIYARPCClient | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Domain: init?.Domain ?? (null! as apiv1.DomainAPIYARPCClient | null),
			Workflow: init?.Workflow ?? (null! as apiv1.WorkflowAPIYARPCClient | null),
			Worker: init?.Worker ?? (null! as apiv1.WorkerAPIYARPCClient | null),
			Visibility: init?.Visibility ?? (null! as apiv1.VisibilityAPIYARPCClient | null),
			Schedule: init?.Schedule ?? (null! as apiv1.ScheduleAPIYARPCClient | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): AdapterClients {
		return new AdapterClients(this, true)
	}

	public __goscriptAssign(source: AdapterClients): void {
		const target = this._fields
		const values = source._fields
		target.Domain = $.assignFieldValue(target.Domain, values.Domain, "apiv1.DomainAPIYARPCClient")
		target.Workflow = $.assignFieldValue(target.Workflow, values.Workflow, "apiv1.WorkflowAPIYARPCClient")
		target.Worker = $.assignFieldValue(target.Worker, values.Worker, "apiv1.WorkerAPIYARPCClient")
		target.Visibility = $.assignFieldValue(target.Visibility, values.Visibility, "apiv1.VisibilityAPIYARPCClient")
		target.Schedule = $.assignFieldValue(target.Schedule, values.Schedule, "apiv1.ScheduleAPIYARPCClient")
	}

	static __typeInfo = $.registerStructType(
		"compatibility.AdapterClients",
		() => new AdapterClients(),
		() => [],
		AdapterClients,
		() => [{ name: "Domain", key: "Domain", type: "apiv1.DomainAPIYARPCClient" }, { name: "Workflow", key: "Workflow", type: "apiv1.WorkflowAPIYARPCClient" }, { name: "Worker", key: "Worker", type: "apiv1.WorkerAPIYARPCClient" }, { name: "Visibility", key: "Visibility", type: "apiv1.VisibilityAPIYARPCClient" }, { name: "Schedule", key: "Schedule", type: "apiv1.ScheduleAPIYARPCClient" }]
	)
}

export function NewThrift2ProtoAdapter(clients: AdapterClients): workflowserviceclient.Interface | null {
	return internal.NewThrift2ProtoAdapter(clients.Domain, clients.Workflow, clients.Worker, clients.Visibility, clients.Schedule)
}
