// Generated file based on outbound.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as tls from "@goscript/crypto/tls/index.js"
import "@goscript/crypto/tls/index.js"

$.registerTypePackagePath("go.uber.org/yarpc/api/transport/tls", ["tls.OutboundTLSConfigProvider"])

export type OutboundTLSConfigProvider = {
	ClientTLSConfig(spiffeIDs: $.Slice<string>): [tls.Config | $.VarRef<tls.Config> | null, $.GoError]
}

$.registerInterfaceType(
	"tls.OutboundTLSConfigProvider",
	null,
	[{ name: "ClientTLSConfig", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.pointerType("tls.Config") }, { type: "error" }] }]
);
