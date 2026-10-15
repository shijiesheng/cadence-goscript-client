// Generated file based on messagetype.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

$.registerTypePackagePath("github.com/apache/thrift/lib/go/thrift", ["thrift.TMessageType"])

export type TMessageType = number

export const INVALID_TMESSAGE_TYPE: TMessageType = 0

export const CALL: TMessageType = 1

export const REPLY: TMessageType = 2

export const EXCEPTION: TMessageType = 3

export const ONEWAY: TMessageType = 4
