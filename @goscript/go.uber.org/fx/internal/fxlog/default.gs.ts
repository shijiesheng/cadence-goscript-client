// Generated file based on default.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as io from "@goscript/io/index.js"

import * as fxevent from "@goscript/go.uber.org/fx/fxevent/index.js"
import "@goscript/io/index.js"
import "@goscript/go.uber.org/fx/fxevent/index.js"

export function DefaultLogger(w: io.Writer | null): fxevent.Logger | null {
	return $.interfaceValue<fxevent.Logger | null>(new fxevent.ConsoleLogger({W: w}), "*fxevent.ConsoleLogger", /* @__PURE__ */ $.pointerType("fxevent.ConsoleLogger"))
}
