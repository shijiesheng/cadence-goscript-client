// Generated file based on process_collector_other.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as procfs from "@goscript/github.com/prometheus/procfs/index.js"

import * as io_prometheus_client from "@goscript/github.com/prometheus/client_model/go/index.js"

import * as __goscript_desc from "./desc.gs.ts"

import * as __goscript_metric from "./metric.gs.ts"

import * as __goscript_process_collector from "./process_collector.gs.ts"

import * as __goscript_value from "./value.gs.ts"
import "@goscript/github.com/prometheus/procfs/index.js"
import "@goscript/github.com/prometheus/client_model/go/index.js"
import "./desc.gs.ts"
import "./metric.gs.ts"
import "./process_collector.gs.ts"
import "./value.gs.ts"

export async function canCollectProcess(): globalThis.Promise<boolean> {
	let [, err] = await procfs.NewDefaultFS()
	return err == null
}
