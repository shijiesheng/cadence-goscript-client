// Generated file based on expfmt.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

$.registerTypePackagePath("github.com/prometheus/common/expfmt", ["expfmt.Format"])

export type Format = string

export const TextVersion: string = "0.0.4"

export const ProtoType: string = "application/vnd.google.protobuf"

export const ProtoProtocol: string = "io.prometheus.client.MetricFamily"

export const ProtoFmt: string = "application/vnd.google.protobuf; proto=io.prometheus.client.MetricFamily;"

export const OpenMetricsType: string = "application/openmetrics-text"

export const OpenMetricsVersion: string = "0.0.1"

export const FmtUnknown: Format = "<unknown>"

export const FmtText: Format = "text/plain; version=0.0.4; charset=utf-8"

export const FmtProtoDelim: Format = "application/vnd.google.protobuf; proto=io.prometheus.client.MetricFamily; encoding=delimited"

export const FmtProtoText: Format = "application/vnd.google.protobuf; proto=io.prometheus.client.MetricFamily; encoding=text"

export const FmtProtoCompact: Format = "application/vnd.google.protobuf; proto=io.prometheus.client.MetricFamily; encoding=compact-text"

export const FmtOpenMetrics: Format = "application/openmetrics-text; version=0.0.1; charset=utf-8"

export const hdrContentType: string = "Content-Type"

export const hdrAccept: string = "Accept"
