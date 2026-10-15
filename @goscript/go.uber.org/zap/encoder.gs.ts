// Generated file based on encoder.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as errors from "@goscript/errors/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as sync from "@goscript/sync/index.js"

import * as zapcore from "@goscript/go.uber.org/zap/zapcore/index.js"
import "@goscript/errors/index.js"
import "@goscript/fmt/index.js"
import "@goscript/sync/index.js"
import "@goscript/go.uber.org/zap/zapcore/index.js"

export let errNoEncoderNameSpecified: $.GoError = errors.New("no encoder name specified")

export function __goscript_set_errNoEncoderNameSpecified(__goscriptValue: $.GoError): void {
	errNoEncoderNameSpecified = __goscriptValue
}

export let _encoderNameToConstructor: globalThis.Map<string, ((_p0: zapcore.EncoderConfig) => [zapcore.Encoder | null, $.GoError] | globalThis.Promise<[zapcore.Encoder | null, $.GoError]>) | null> | null = $.makeMap<string, ((_p0: zapcore.EncoderConfig) => [zapcore.Encoder | null, $.GoError] | globalThis.Promise<[zapcore.Encoder | null, $.GoError]>) | null>([["console", $.functionValue(async (encoderConfig: zapcore.EncoderConfig): globalThis.Promise<[zapcore.Encoder | null, $.GoError]> => {
	return [await zapcore.NewConsoleEncoder((encoderConfig).clone()), null]
}, ({ kind: $.TypeKind.Function, params: ["zapcore.EncoderConfig"], results: ["zapcore.Encoder", "error"] } as $.FunctionTypeInfo))], ["json", $.functionValue(async (encoderConfig: zapcore.EncoderConfig): globalThis.Promise<[zapcore.Encoder | null, $.GoError]> => {
	return [await zapcore.NewJSONEncoder(encoderConfig), null]
}, ({ kind: $.TypeKind.Function, params: ["zapcore.EncoderConfig"], results: ["zapcore.Encoder", "error"] } as $.FunctionTypeInfo))]])

export function __goscript_set__encoderNameToConstructor(__goscriptValue: globalThis.Map<string, ((_p0: zapcore.EncoderConfig) => [zapcore.Encoder | null, $.GoError] | globalThis.Promise<[zapcore.Encoder | null, $.GoError]>) | null> | null): void {
	_encoderNameToConstructor = __goscriptValue
}

export let _encoderMutex: $.VarRef<sync.RWMutex> = $.varRef($.markAsStructValue(new sync.RWMutex()))

export function __goscript_set__encoderMutex(__goscriptValue: sync.RWMutex): void {
	$.assignStruct(_encoderMutex.value, __goscriptValue)
}

export async function RegisterEncoder(name: string, _constructor: ((_p0: zapcore.EncoderConfig) => [zapcore.Encoder | null, $.GoError] | globalThis.Promise<[zapcore.Encoder | null, $.GoError]>) | null): globalThis.Promise<$.GoError> {
	using __defer = new $.DisposableStack()
	await _encoderMutex.value.Lock()
	const __goscriptDeferCallee0 = $.functionValue(((__receiver) => () => __receiver.Unlock())(_encoderMutex.value), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*RWMutex).Unlock-fm")
	__defer.defer(() => { __goscriptDeferCallee0() })
	if ($.stringEqual(name, "")) {
		return errNoEncoderNameSpecified
	}
	{
		let [, ok] = $.mapGet<string, ((_p0: zapcore.EncoderConfig) => [zapcore.Encoder | null, $.GoError] | globalThis.Promise<[zapcore.Encoder | null, $.GoError]>) | null, ((_p0: zapcore.EncoderConfig) => [zapcore.Encoder | null, $.GoError] | globalThis.Promise<[zapcore.Encoder | null, $.GoError]>) | null>(_encoderNameToConstructor, name, null)
		if (ok) {
			return fmt.Errorf("encoder already registered for name %q", name)
		}
	}
	$.mapSet(_encoderNameToConstructor, name, _constructor)
	return null
}

export async function newEncoder(name: string, encoderConfig: zapcore.EncoderConfig): globalThis.Promise<[zapcore.Encoder | null, $.GoError]> {
	using __defer = new $.DisposableStack()
	if ((!$.stringEqual(encoderConfig.TimeKey, "")) && (encoderConfig.EncodeTime == null)) {
		return [null, errors.New("missing EncodeTime in EncoderConfig")]
	}

	await _encoderMutex.value.RLock()
	const __goscriptDeferCallee1 = $.functionValue(((__receiver) => () => __receiver.RUnlock())(_encoderMutex.value), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*RWMutex).RUnlock-fm")
	__defer.defer(() => { __goscriptDeferCallee1() })
	if ($.stringEqual(name, "")) {
		return [null, errNoEncoderNameSpecified]
	}
	let [_constructor, ok] = $.mapGet<string, ((_p0: zapcore.EncoderConfig) => [zapcore.Encoder | null, $.GoError] | globalThis.Promise<[zapcore.Encoder | null, $.GoError]>) | null, ((_p0: zapcore.EncoderConfig) => [zapcore.Encoder | null, $.GoError] | globalThis.Promise<[zapcore.Encoder | null, $.GoError]>) | null>(_encoderNameToConstructor, name, null)
	if (!ok) {
		return [null, fmt.Errorf("no encoder registered for name %q", name)]
	}
	return await _constructor!((encoderConfig).clone())
}
