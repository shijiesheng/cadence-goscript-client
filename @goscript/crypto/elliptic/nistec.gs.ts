// Generated file based on nistec.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as nistec from "@goscript/crypto/internal/fips140/nistec/index.js"

import * as errors from "@goscript/errors/index.js"

import * as big from "@goscript/math/big/index.js"

import * as __goscript_params from "./params.gs.ts"
import "@goscript/crypto/internal/fips140/nistec/index.js"
import "@goscript/errors/index.js"
import "@goscript/math/big/index.js"
import "./params.gs.ts"

$.registerTypePackagePath("crypto/elliptic", ["elliptic.nistCurve", "elliptic.nistPoint"])

export type nistPoint = {
	Add(__typeArgs: $.GenericTypeArgs | undefined, _p0: any, _p1: any): any
	Bytes(__typeArgs: $.GenericTypeArgs | undefined): $.Slice<number>
	Double(__typeArgs: $.GenericTypeArgs | undefined, _p0: any): any
	ScalarBaseMult(__typeArgs: $.GenericTypeArgs | undefined, _p0: $.Slice<number>): [any, $.GoError]
	ScalarMult(__typeArgs: $.GenericTypeArgs | undefined, _p0: any, _p1: $.Slice<number>): [any, $.GoError]
	SetBytes(__typeArgs: $.GenericTypeArgs | undefined, _p0: $.Slice<number>): [any, $.GoError]
}

$.registerInterfaceType(
	"elliptic.nistPoint",
	null,
	[$.methodSignature("Add", [{ kind: $.TypeKind.Interface, methods: [] }, { kind: $.TypeKind.Interface, methods: [] }], [{ kind: $.TypeKind.Interface, methods: [] }]), $.methodSignature("Bytes", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("Double", [{ kind: $.TypeKind.Interface, methods: [] }], [{ kind: $.TypeKind.Interface, methods: [] }]), $.methodSignature("ScalarBaseMult", [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], [{ kind: $.TypeKind.Interface, methods: [] }, "error"]), $.methodSignature("ScalarMult", [{ kind: $.TypeKind.Interface, methods: [] }, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], [{ kind: $.TypeKind.Interface, methods: [] }, "error"]), $.methodSignature("SetBytes", [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], [{ kind: $.TypeKind.Interface, methods: [] }, "error"])]
);

export class nistCurve {
	public get newPoint(): (() => any | globalThis.Promise<any>) | null {
		return this._fields.newPoint
	}

	public set newPoint(value: (() => any | globalThis.Promise<any>) | null) {
		this._fields.newPoint = value
	}

	public get params(): __goscript_params.CurveParams | $.VarRef<__goscript_params.CurveParams> | null {
		return this._fields.params
	}

	public set params(value: __goscript_params.CurveParams | $.VarRef<__goscript_params.CurveParams> | null) {
		this._fields.params = value
	}

	public _fields: {
		newPoint: (() => any | globalThis.Promise<any>) | null
		params: __goscript_params.CurveParams | $.VarRef<__goscript_params.CurveParams> | null
	}

	constructor(init?: Partial<{newPoint?: (() => any | globalThis.Promise<any>) | null, params?: __goscript_params.CurveParams | $.VarRef<__goscript_params.CurveParams> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			newPoint: init?.newPoint ?? (null! as (() => any | globalThis.Promise<any>) | null),
			params: init?.params ?? (null! as __goscript_params.CurveParams | $.VarRef<__goscript_params.CurveParams> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): nistCurve {
		return new nistCurve(this, true)
	}

	public __goscriptAssign(source: nistCurve): void {
		const target = this._fields
		const values = source._fields
		target.newPoint = values.newPoint
		target.params = values.params
	}

	public async Add(__typeArgs: $.GenericTypeArgs | undefined, x1: big.Int | $.VarRef<big.Int> | null, y1: big.Int | $.VarRef<big.Int> | null, x2: big.Int | $.VarRef<big.Int> | null, y2: big.Int | $.VarRef<big.Int> | null): globalThis.Promise<[big.Int | $.VarRef<big.Int> | null, big.Int | $.VarRef<big.Int> | null]> {
		const curve: nistCurve | $.VarRef<nistCurve> | null = this;
		let __goscriptTuple0: any = await nistCurve.prototype.pointFromAffine.call(curve, {[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, Point: __typeArgs?.["Point"] ?? { type: { kind: $.TypeKind.Interface, methods: [$.methodSignature("Add", [{ kind: $.TypeKind.Interface, methods: [] }, { kind: $.TypeKind.Interface, methods: [] }], [{ kind: $.TypeKind.Interface, methods: [] }]), $.methodSignature("Bytes", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("Double", [{ kind: $.TypeKind.Interface, methods: [] }], [{ kind: $.TypeKind.Interface, methods: [] }]), $.methodSignature("ScalarBaseMult", [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], [{ kind: $.TypeKind.Interface, methods: [] }, "error"]), $.methodSignature("ScalarMult", [{ kind: $.TypeKind.Interface, methods: [] }, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], [{ kind: $.TypeKind.Interface, methods: [] }, "error"]), $.methodSignature("SetBytes", [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], [{ kind: $.TypeKind.Interface, methods: [] }, "error"])] }, zero: () => null }}, x1, y1)
		let p1 = (__goscriptTuple0[0] as any)
		let err = __goscriptTuple0[1]
		if (err != null) {
			$.panic("crypto/elliptic: Add was called on an invalid point")
		}
		let __goscriptTuple1: any = await nistCurve.prototype.pointFromAffine.call(curve, {[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, Point: __typeArgs?.["Point"] ?? { type: { kind: $.TypeKind.Interface, methods: [$.methodSignature("Add", [{ kind: $.TypeKind.Interface, methods: [] }, { kind: $.TypeKind.Interface, methods: [] }], [{ kind: $.TypeKind.Interface, methods: [] }]), $.methodSignature("Bytes", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("Double", [{ kind: $.TypeKind.Interface, methods: [] }], [{ kind: $.TypeKind.Interface, methods: [] }]), $.methodSignature("ScalarBaseMult", [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], [{ kind: $.TypeKind.Interface, methods: [] }, "error"]), $.methodSignature("ScalarMult", [{ kind: $.TypeKind.Interface, methods: [] }, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], [{ kind: $.TypeKind.Interface, methods: [] }, "error"]), $.methodSignature("SetBytes", [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], [{ kind: $.TypeKind.Interface, methods: [] }, "error"])] }, zero: () => null }}, x2, y2)
		let p2 = (__goscriptTuple1[0] as any)
		err = __goscriptTuple1[1]
		if (err != null) {
			$.panic("crypto/elliptic: Add was called on an invalid point")
		}
		return nistCurve.prototype.pointToAffine.call(curve, {[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, Point: __typeArgs?.["Point"] ?? { type: { kind: $.TypeKind.Interface, methods: [$.methodSignature("Add", [{ kind: $.TypeKind.Interface, methods: [] }, { kind: $.TypeKind.Interface, methods: [] }], [{ kind: $.TypeKind.Interface, methods: [] }]), $.methodSignature("Bytes", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("Double", [{ kind: $.TypeKind.Interface, methods: [] }], [{ kind: $.TypeKind.Interface, methods: [] }]), $.methodSignature("ScalarBaseMult", [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], [{ kind: $.TypeKind.Interface, methods: [] }, "error"]), $.methodSignature("ScalarMult", [{ kind: $.TypeKind.Interface, methods: [] }, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], [{ kind: $.TypeKind.Interface, methods: [] }, "error"]), $.methodSignature("SetBytes", [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], [{ kind: $.TypeKind.Interface, methods: [] }, "error"])] }, zero: () => null }}, (__goscriptAwait = $.callGenericMethod(__typeArgs, "Point", "Add", p1, $.copyElement(p1), $.copyElement(p2)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
	}

	public async Double(__typeArgs: $.GenericTypeArgs | undefined, x1: big.Int | $.VarRef<big.Int> | null, y1: big.Int | $.VarRef<big.Int> | null): globalThis.Promise<[big.Int | $.VarRef<big.Int> | null, big.Int | $.VarRef<big.Int> | null]> {
		const curve: nistCurve | $.VarRef<nistCurve> | null = this;
		let __goscriptTuple2: any = await nistCurve.prototype.pointFromAffine.call(curve, {[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, Point: __typeArgs?.["Point"] ?? { type: { kind: $.TypeKind.Interface, methods: [$.methodSignature("Add", [{ kind: $.TypeKind.Interface, methods: [] }, { kind: $.TypeKind.Interface, methods: [] }], [{ kind: $.TypeKind.Interface, methods: [] }]), $.methodSignature("Bytes", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("Double", [{ kind: $.TypeKind.Interface, methods: [] }], [{ kind: $.TypeKind.Interface, methods: [] }]), $.methodSignature("ScalarBaseMult", [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], [{ kind: $.TypeKind.Interface, methods: [] }, "error"]), $.methodSignature("ScalarMult", [{ kind: $.TypeKind.Interface, methods: [] }, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], [{ kind: $.TypeKind.Interface, methods: [] }, "error"]), $.methodSignature("SetBytes", [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], [{ kind: $.TypeKind.Interface, methods: [] }, "error"])] }, zero: () => null }}, x1, y1)
		let p = (__goscriptTuple2[0] as any)
		let err = __goscriptTuple2[1]
		if (err != null) {
			$.panic("crypto/elliptic: Double was called on an invalid point")
		}
		return nistCurve.prototype.pointToAffine.call(curve, {[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, Point: __typeArgs?.["Point"] ?? { type: { kind: $.TypeKind.Interface, methods: [$.methodSignature("Add", [{ kind: $.TypeKind.Interface, methods: [] }, { kind: $.TypeKind.Interface, methods: [] }], [{ kind: $.TypeKind.Interface, methods: [] }]), $.methodSignature("Bytes", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("Double", [{ kind: $.TypeKind.Interface, methods: [] }], [{ kind: $.TypeKind.Interface, methods: [] }]), $.methodSignature("ScalarBaseMult", [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], [{ kind: $.TypeKind.Interface, methods: [] }, "error"]), $.methodSignature("ScalarMult", [{ kind: $.TypeKind.Interface, methods: [] }, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], [{ kind: $.TypeKind.Interface, methods: [] }, "error"]), $.methodSignature("SetBytes", [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], [{ kind: $.TypeKind.Interface, methods: [] }, "error"])] }, zero: () => null }}, (__goscriptAwait = $.callGenericMethod(__typeArgs, "Point", "Double", p, $.copyElement(p)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
	}

	public async IsOnCurve(__typeArgs: $.GenericTypeArgs | undefined, x: big.Int | $.VarRef<big.Int> | null, y: big.Int | $.VarRef<big.Int> | null): globalThis.Promise<boolean> {
		const curve: nistCurve | $.VarRef<nistCurve> | null = this;
		// IsOnCurve is documented to reject (0, 0), the conventional point at
		// infinity, which however is accepted by pointFromAffine.
		if (((x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as big.Int).Sign() : big.Int.prototype.Sign.call(x)) == 0) && ((y !== null && (y as any).__isVarRef !== true && (y as any).__goValue === undefined ? ((y as any) as big.Int).Sign() : big.Int.prototype.Sign.call(y)) == 0)) {
			return false
		}
		let [, err] = await nistCurve.prototype.pointFromAffine.call(curve, {[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, Point: __typeArgs?.["Point"] ?? { type: { kind: $.TypeKind.Interface, methods: [$.methodSignature("Add", [{ kind: $.TypeKind.Interface, methods: [] }, { kind: $.TypeKind.Interface, methods: [] }], [{ kind: $.TypeKind.Interface, methods: [] }]), $.methodSignature("Bytes", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("Double", [{ kind: $.TypeKind.Interface, methods: [] }], [{ kind: $.TypeKind.Interface, methods: [] }]), $.methodSignature("ScalarBaseMult", [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], [{ kind: $.TypeKind.Interface, methods: [] }, "error"]), $.methodSignature("ScalarMult", [{ kind: $.TypeKind.Interface, methods: [] }, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], [{ kind: $.TypeKind.Interface, methods: [] }, "error"]), $.methodSignature("SetBytes", [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], [{ kind: $.TypeKind.Interface, methods: [] }, "error"])] }, zero: () => null }}, x, y)
		return err == null
	}

	public Params(__typeArgs: $.GenericTypeArgs | undefined): __goscript_params.CurveParams | $.VarRef<__goscript_params.CurveParams> | null {
		const curve: nistCurve | $.VarRef<nistCurve> | null = this;
		return $.pointerValue<nistCurve>(curve).params
	}

	public async ScalarBaseMult(__typeArgs: $.GenericTypeArgs | undefined, scalar: $.Slice<number>): globalThis.Promise<[big.Int | $.VarRef<big.Int> | null, big.Int | $.VarRef<big.Int> | null]> {
		const curve: nistCurve | $.VarRef<nistCurve> | null = this;
		scalar = await nistCurve.prototype.normalizeScalar.call(curve, {[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, Point: __typeArgs?.["Point"] ?? { type: { kind: $.TypeKind.Interface, methods: [$.methodSignature("Add", [{ kind: $.TypeKind.Interface, methods: [] }, { kind: $.TypeKind.Interface, methods: [] }], [{ kind: $.TypeKind.Interface, methods: [] }]), $.methodSignature("Bytes", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("Double", [{ kind: $.TypeKind.Interface, methods: [] }], [{ kind: $.TypeKind.Interface, methods: [] }]), $.methodSignature("ScalarBaseMult", [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], [{ kind: $.TypeKind.Interface, methods: [] }, "error"]), $.methodSignature("ScalarMult", [{ kind: $.TypeKind.Interface, methods: [] }, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], [{ kind: $.TypeKind.Interface, methods: [] }, "error"]), $.methodSignature("SetBytes", [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], [{ kind: $.TypeKind.Interface, methods: [] }, "error"])] }, zero: () => null }}, scalar)
		let __goscriptTuple3: any = await $.callGenericMethod(__typeArgs, "Point", "ScalarBaseMult", (__goscriptAwait = $.pointerValue<nistCurve>(curve).newPoint!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), scalar)
		let p = (__goscriptTuple3[0] as any)
		let err = __goscriptTuple3[1]
		if (err != null) {
			$.panic("crypto/elliptic: nistec rejected normalized scalar")
		}
		return nistCurve.prototype.pointToAffine.call(curve, {[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, Point: __typeArgs?.["Point"] ?? { type: { kind: $.TypeKind.Interface, methods: [$.methodSignature("Add", [{ kind: $.TypeKind.Interface, methods: [] }, { kind: $.TypeKind.Interface, methods: [] }], [{ kind: $.TypeKind.Interface, methods: [] }]), $.methodSignature("Bytes", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("Double", [{ kind: $.TypeKind.Interface, methods: [] }], [{ kind: $.TypeKind.Interface, methods: [] }]), $.methodSignature("ScalarBaseMult", [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], [{ kind: $.TypeKind.Interface, methods: [] }, "error"]), $.methodSignature("ScalarMult", [{ kind: $.TypeKind.Interface, methods: [] }, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], [{ kind: $.TypeKind.Interface, methods: [] }, "error"]), $.methodSignature("SetBytes", [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], [{ kind: $.TypeKind.Interface, methods: [] }, "error"])] }, zero: () => null }}, $.copyElement(p))
	}

	public async ScalarMult(__typeArgs: $.GenericTypeArgs | undefined, Bx: big.Int | $.VarRef<big.Int> | null, By: big.Int | $.VarRef<big.Int> | null, scalar: $.Slice<number>): globalThis.Promise<[big.Int | $.VarRef<big.Int> | null, big.Int | $.VarRef<big.Int> | null]> {
		const curve: nistCurve | $.VarRef<nistCurve> | null = this;
		let __goscriptTuple4: any = await nistCurve.prototype.pointFromAffine.call(curve, {[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, Point: __typeArgs?.["Point"] ?? { type: { kind: $.TypeKind.Interface, methods: [$.methodSignature("Add", [{ kind: $.TypeKind.Interface, methods: [] }, { kind: $.TypeKind.Interface, methods: [] }], [{ kind: $.TypeKind.Interface, methods: [] }]), $.methodSignature("Bytes", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("Double", [{ kind: $.TypeKind.Interface, methods: [] }], [{ kind: $.TypeKind.Interface, methods: [] }]), $.methodSignature("ScalarBaseMult", [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], [{ kind: $.TypeKind.Interface, methods: [] }, "error"]), $.methodSignature("ScalarMult", [{ kind: $.TypeKind.Interface, methods: [] }, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], [{ kind: $.TypeKind.Interface, methods: [] }, "error"]), $.methodSignature("SetBytes", [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], [{ kind: $.TypeKind.Interface, methods: [] }, "error"])] }, zero: () => null }}, Bx, By)
		let p = (__goscriptTuple4[0] as any)
		let err = __goscriptTuple4[1]
		if (err != null) {
			$.panic("crypto/elliptic: ScalarMult was called on an invalid point")
		}
		scalar = await nistCurve.prototype.normalizeScalar.call(curve, {[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, Point: __typeArgs?.["Point"] ?? { type: { kind: $.TypeKind.Interface, methods: [$.methodSignature("Add", [{ kind: $.TypeKind.Interface, methods: [] }, { kind: $.TypeKind.Interface, methods: [] }], [{ kind: $.TypeKind.Interface, methods: [] }]), $.methodSignature("Bytes", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("Double", [{ kind: $.TypeKind.Interface, methods: [] }], [{ kind: $.TypeKind.Interface, methods: [] }]), $.methodSignature("ScalarBaseMult", [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], [{ kind: $.TypeKind.Interface, methods: [] }, "error"]), $.methodSignature("ScalarMult", [{ kind: $.TypeKind.Interface, methods: [] }, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], [{ kind: $.TypeKind.Interface, methods: [] }, "error"]), $.methodSignature("SetBytes", [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], [{ kind: $.TypeKind.Interface, methods: [] }, "error"])] }, zero: () => null }}, scalar)
		let __goscriptTuple5: any = await $.callGenericMethod(__typeArgs, "Point", "ScalarMult", p, $.copyElement(p), scalar)
		p = (__goscriptTuple5[0] as any)
		err = __goscriptTuple5[1]
		if (err != null) {
			$.panic("crypto/elliptic: nistec rejected normalized scalar")
		}
		return nistCurve.prototype.pointToAffine.call(curve, {[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, Point: __typeArgs?.["Point"] ?? { type: { kind: $.TypeKind.Interface, methods: [$.methodSignature("Add", [{ kind: $.TypeKind.Interface, methods: [] }, { kind: $.TypeKind.Interface, methods: [] }], [{ kind: $.TypeKind.Interface, methods: [] }]), $.methodSignature("Bytes", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("Double", [{ kind: $.TypeKind.Interface, methods: [] }], [{ kind: $.TypeKind.Interface, methods: [] }]), $.methodSignature("ScalarBaseMult", [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], [{ kind: $.TypeKind.Interface, methods: [] }, "error"]), $.methodSignature("ScalarMult", [{ kind: $.TypeKind.Interface, methods: [] }, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], [{ kind: $.TypeKind.Interface, methods: [] }, "error"]), $.methodSignature("SetBytes", [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], [{ kind: $.TypeKind.Interface, methods: [] }, "error"])] }, zero: () => null }}, $.copyElement(p))
	}

	public async Unmarshal(__typeArgs: $.GenericTypeArgs | undefined, data: $.Slice<number>): globalThis.Promise<[big.Int | $.VarRef<big.Int> | null, big.Int | $.VarRef<big.Int> | null]> {
		const curve: nistCurve | $.VarRef<nistCurve> | null = this;
		let x: big.Int | $.VarRef<big.Int> | null = null! as big.Int | $.VarRef<big.Int> | null
		let y: big.Int | $.VarRef<big.Int> | null = null! as big.Int | $.VarRef<big.Int> | null
		const curve$: nistCurve = curve == null ? $.pointerTarget<nistCurve>(curve) : (curve as any).__isVarRef === true ? (curve as any).value : (curve as any).__goValue === undefined ? (curve as any) : $.pointerTarget<nistCurve>(curve)
		if (($.sliceLen(data) == 0) || ($.arrayIndex(data!, 0) != 4)) {
			return [null, null]
		}
		// Use SetBytes to check that data encodes a valid point.
		let [, err] = await $.callGenericMethod(__typeArgs, "Point", "SetBytes", (__goscriptAwait = (curve$ as nistCurve).newPoint!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), data)
		if (err != null) {
			return [null, null]
		}
		// We don't use pointToAffine because it involves an expensive field
		// inversion to convert from Jacobian to affine coordinates, which we
		// already have.
		let byteLen = globalThis.Math.trunc(($.pointerValue<__goscript_params.CurveParams>((curve$ as nistCurve).params).BitSize + 7) / 8)
		x = big.Int.prototype.SetBytes.call(new big.Int(), $.goSlice(data, 1, 1 + byteLen))
		y = big.Int.prototype.SetBytes.call(new big.Int(), $.goSlice(data, 1 + byteLen, undefined))
		return [x, y]
	}

	public async UnmarshalCompressed(__typeArgs: $.GenericTypeArgs | undefined, data: $.Slice<number>): globalThis.Promise<[big.Int | $.VarRef<big.Int> | null, big.Int | $.VarRef<big.Int> | null]> {
		const curve: nistCurve | $.VarRef<nistCurve> | null = this;
		let x: big.Int | $.VarRef<big.Int> | null = null! as big.Int | $.VarRef<big.Int> | null
		let y: big.Int | $.VarRef<big.Int> | null = null! as big.Int | $.VarRef<big.Int> | null
		if (($.sliceLen(data) == 0) || (($.arrayIndex(data!, 0) != 2) && ($.arrayIndex(data!, 0) != 3))) {
			return [null, null]
		}
		let __goscriptTuple6: any = await $.callGenericMethod(__typeArgs, "Point", "SetBytes", (__goscriptAwait = $.pointerValue<nistCurve>(curve).newPoint!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), data)
		let p = (__goscriptTuple6[0] as any)
		let err = __goscriptTuple6[1]
		if (err != null) {
			return [null, null]
		}
		return nistCurve.prototype.pointToAffine.call(curve, {[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, Point: __typeArgs?.["Point"] ?? { type: { kind: $.TypeKind.Interface, methods: [$.methodSignature("Add", [{ kind: $.TypeKind.Interface, methods: [] }, { kind: $.TypeKind.Interface, methods: [] }], [{ kind: $.TypeKind.Interface, methods: [] }]), $.methodSignature("Bytes", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("Double", [{ kind: $.TypeKind.Interface, methods: [] }], [{ kind: $.TypeKind.Interface, methods: [] }]), $.methodSignature("ScalarBaseMult", [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], [{ kind: $.TypeKind.Interface, methods: [] }, "error"]), $.methodSignature("ScalarMult", [{ kind: $.TypeKind.Interface, methods: [] }, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], [{ kind: $.TypeKind.Interface, methods: [] }, "error"]), $.methodSignature("SetBytes", [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], [{ kind: $.TypeKind.Interface, methods: [] }, "error"])] }, zero: () => null }}, $.copyElement(p))
	}

	public async normalizeScalar(__typeArgs: $.GenericTypeArgs | undefined, scalar: $.Slice<number>): globalThis.Promise<$.Slice<number>> {
		const curve: nistCurve | $.VarRef<nistCurve> | null = this;
		const curve$: nistCurve = curve == null ? $.pointerTarget<nistCurve>(curve) : (curve as any).__isVarRef === true ? (curve as any).value : (curve as any).__goValue === undefined ? (curve as any) : $.pointerTarget<nistCurve>(curve)
		let byteSize = globalThis.Math.trunc((big.Int.prototype.BitLen.call($.pointerValue<__goscript_params.CurveParams>((curve$ as nistCurve).params).N) + 7) / 8)
		if ($.sliceLen(scalar) == byteSize) {
			return scalar
		}
		let s: big.Int | $.VarRef<big.Int> | null = big.Int.prototype.SetBytes.call(new big.Int(), scalar)
		if ($.sliceLen(scalar) > byteSize) {
			await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as big.Int).Mod(s, $.pointerValue<__goscript_params.CurveParams>((curve$ as nistCurve).params).N) : big.Int.prototype.Mod.call(s, s, $.pointerValue<__goscript_params.CurveParams>((curve$ as nistCurve).params).N))
		}
		let out: $.Slice<number> = $.makeSlice<number>(byteSize, undefined, "byte")
		return (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as big.Int).FillBytes(out) : big.Int.prototype.FillBytes.call(s, out))
	}

	public async pointFromAffine(__typeArgs: $.GenericTypeArgs | undefined, x: big.Int | $.VarRef<big.Int> | null, y: big.Int | $.VarRef<big.Int> | null): globalThis.Promise<[any, $.GoError]> {
		const curve: nistCurve | $.VarRef<nistCurve> | null = this;
		let p: any = $.genericZero(__typeArgs, "Point", null)
		let err: $.GoError = null! as $.GoError
		const curve$: nistCurve = curve == null ? $.pointerTarget<nistCurve>(curve) : (curve as any).__isVarRef === true ? (curve as any).value : (curve as any).__goValue === undefined ? (curve as any) : $.pointerTarget<nistCurve>(curve)
		// (0, 0) is by convention the point at infinity, which can't be represented
		// in affine coordinates. See Issue 37294.
		if (((x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as big.Int).Sign() : big.Int.prototype.Sign.call(x)) == 0) && ((y !== null && (y as any).__isVarRef !== true && (y as any).__goValue === undefined ? ((y as any) as big.Int).Sign() : big.Int.prototype.Sign.call(y)) == 0)) {
			return [(__goscriptAwait = (curve$ as nistCurve).newPoint!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), null]
		}
		// Reject values that would not get correctly encoded.
		if (((x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as big.Int).Sign() : big.Int.prototype.Sign.call(x)) < 0) || ((y !== null && (y as any).__isVarRef !== true && (y as any).__goValue === undefined ? ((y as any) as big.Int).Sign() : big.Int.prototype.Sign.call(y)) < 0)) {
			return [$.copyElement(p), errors.New("negative coordinate")]
		}
		if (((x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as big.Int).BitLen() : big.Int.prototype.BitLen.call(x)) > $.pointerValue<__goscript_params.CurveParams>((curve$ as nistCurve).params).BitSize) || ((y !== null && (y as any).__isVarRef !== true && (y as any).__goValue === undefined ? ((y as any) as big.Int).BitLen() : big.Int.prototype.BitLen.call(y)) > $.pointerValue<__goscript_params.CurveParams>((curve$ as nistCurve).params).BitSize)) {
			return [$.copyElement(p), errors.New("overflowing coordinate")]
		}
		// Encode the coordinates and let SetBytes reject invalid points.
		let byteLen = globalThis.Math.trunc(($.pointerValue<__goscript_params.CurveParams>((curve$ as nistCurve).params).BitSize + 7) / 8)
		let buf: $.Slice<number> = $.makeSlice<number>(1 + (2 * byteLen), undefined, "byte")
		$.sliceElems(buf!)[$.sliceSlot(buf!, 0)] = 4
		void (x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as big.Int).FillBytes($.goSlice(buf, 1, 1 + byteLen)) : big.Int.prototype.FillBytes.call(x, $.goSlice(buf, 1, 1 + byteLen)))
		void (y !== null && (y as any).__isVarRef !== true && (y as any).__goValue === undefined ? ((y as any) as big.Int).FillBytes($.goSlice(buf, 1 + byteLen, 1 + (2 * byteLen))) : big.Int.prototype.FillBytes.call(y, $.goSlice(buf, 1 + byteLen, 1 + (2 * byteLen))))
		const __goscriptReturn5 = await $.callGenericMethod(__typeArgs, "Point", "SetBytes", (__goscriptAwait = (curve$ as nistCurve).newPoint!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), buf)
		return [(__goscriptReturn5[0] as any), __goscriptReturn5[1]]
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async pointToAffine(__typeArgs: $.GenericTypeArgs | undefined, p: any): globalThis.Promise<[big.Int | $.VarRef<big.Int> | null, big.Int | $.VarRef<big.Int> | null]> {
		const curve: nistCurve | $.VarRef<nistCurve> | null = this;
		let x: big.Int | $.VarRef<big.Int> | null = null! as big.Int | $.VarRef<big.Int> | null
		let y: big.Int | $.VarRef<big.Int> | null = null! as big.Int | $.VarRef<big.Int> | null
		let out: $.Slice<number> = ((__goscriptAwait = $.callGenericMethod(__typeArgs, "Point", "Bytes", p), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.Slice<number>)
		if (($.sliceLen(out) == 1) && ($.arrayIndex(out!, 0) == 0)) {
			// This is the encoding of the point at infinity, which the affine
			// coordinates API represents as (0, 0) by convention.
			return [new big.Int(), new big.Int()]
		}
		let byteLen = globalThis.Math.trunc(($.pointerValue<__goscript_params.CurveParams>($.pointerValue<nistCurve>(curve).params).BitSize + 7) / 8)
		x = big.Int.prototype.SetBytes.call(new big.Int(), $.goSlice(out, 1, 1 + byteLen))
		y = big.Int.prototype.SetBytes.call(new big.Int(), $.goSlice(out, 1 + byteLen, undefined))
		return [x, y]
	}

	static __typeInfo = $.registerStructType(
		"elliptic.nistCurve",
		() => new nistCurve(),
		() => [$.methodSignature("Add", [["x1", /* @__PURE__ */ $.pointerType("big.Int")], ["y1", /* @__PURE__ */ $.pointerType("big.Int")], ["x2", /* @__PURE__ */ $.pointerType("big.Int")], ["y2", /* @__PURE__ */ $.pointerType("big.Int")]], [/* @__PURE__ */ $.pointerType("big.Int"), /* @__PURE__ */ $.pointerType("big.Int")], true), $.methodSignature("Double", [["x1", /* @__PURE__ */ $.pointerType("big.Int")], ["y1", /* @__PURE__ */ $.pointerType("big.Int")]], [/* @__PURE__ */ $.pointerType("big.Int"), /* @__PURE__ */ $.pointerType("big.Int")], true), $.methodSignature("IsOnCurve", [["x", /* @__PURE__ */ $.pointerType("big.Int")], ["y", /* @__PURE__ */ $.pointerType("big.Int")]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Params", [], [/* @__PURE__ */ $.pointerType("elliptic.CurveParams")], true), $.methodSignature("ScalarBaseMult", [["scalar", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.pointerType("big.Int"), /* @__PURE__ */ $.pointerType("big.Int")], true), $.methodSignature("ScalarMult", [["Bx", /* @__PURE__ */ $.pointerType("big.Int")], ["By", /* @__PURE__ */ $.pointerType("big.Int")], ["scalar", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.pointerType("big.Int"), /* @__PURE__ */ $.pointerType("big.Int")], true), $.methodSignature("Unmarshal", [["data", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["x", /* @__PURE__ */ $.pointerType("big.Int")], ["y", /* @__PURE__ */ $.pointerType("big.Int")]], true), $.methodSignature("UnmarshalCompressed", [["data", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["x", /* @__PURE__ */ $.pointerType("big.Int")], ["y", /* @__PURE__ */ $.pointerType("big.Int")]], true), $.methodSignature("normalizeScalar", [["scalar", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true), $.methodSignature("pointFromAffine", [["x", /* @__PURE__ */ $.pointerType("big.Int")], ["y", /* @__PURE__ */ $.pointerType("big.Int")]], [["p", { kind: $.TypeKind.Interface, methods: [$.methodSignature("Add", [{ kind: $.TypeKind.Interface, methods: [] }, { kind: $.TypeKind.Interface, methods: [] }], [{ kind: $.TypeKind.Interface, methods: [] }]), $.methodSignature("Bytes", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("Double", [{ kind: $.TypeKind.Interface, methods: [] }], [{ kind: $.TypeKind.Interface, methods: [] }]), $.methodSignature("ScalarBaseMult", [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], [{ kind: $.TypeKind.Interface, methods: [] }, "error"]), $.methodSignature("ScalarMult", [{ kind: $.TypeKind.Interface, methods: [] }, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], [{ kind: $.TypeKind.Interface, methods: [] }, "error"]), $.methodSignature("SetBytes", [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], [{ kind: $.TypeKind.Interface, methods: [] }, "error"])] }], ["err", "error"]], true), $.methodSignature("pointToAffine", [["p", { kind: $.TypeKind.Interface, methods: [$.methodSignature("Add", [{ kind: $.TypeKind.Interface, methods: [] }, { kind: $.TypeKind.Interface, methods: [] }], [{ kind: $.TypeKind.Interface, methods: [] }]), $.methodSignature("Bytes", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("Double", [{ kind: $.TypeKind.Interface, methods: [] }], [{ kind: $.TypeKind.Interface, methods: [] }]), $.methodSignature("ScalarBaseMult", [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], [{ kind: $.TypeKind.Interface, methods: [] }, "error"]), $.methodSignature("ScalarMult", [{ kind: $.TypeKind.Interface, methods: [] }, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], [{ kind: $.TypeKind.Interface, methods: [] }, "error"]), $.methodSignature("SetBytes", [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], [{ kind: $.TypeKind.Interface, methods: [] }, "error"])] }]], [["x", /* @__PURE__ */ $.pointerType("big.Int")], ["y", /* @__PURE__ */ $.pointerType("big.Int")]], true)],
		nistCurve,
		() => [/* @__PURE__ */ $.structField("newPoint", ({ kind: $.TypeKind.Function, params: [], results: [{ kind: $.TypeKind.Interface, methods: [$.methodSignature("Add", [{ kind: $.TypeKind.Interface, methods: [] }, { kind: $.TypeKind.Interface, methods: [] }], [{ kind: $.TypeKind.Interface, methods: [] }]), $.methodSignature("Bytes", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("Double", [{ kind: $.TypeKind.Interface, methods: [] }], [{ kind: $.TypeKind.Interface, methods: [] }]), $.methodSignature("ScalarBaseMult", [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], [{ kind: $.TypeKind.Interface, methods: [] }, "error"]), $.methodSignature("ScalarMult", [{ kind: $.TypeKind.Interface, methods: [] }, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], [{ kind: $.TypeKind.Interface, methods: [] }, "error"]), $.methodSignature("SetBytes", [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], [{ kind: $.TypeKind.Interface, methods: [] }, "error"])] }] } as $.FunctionTypeInfo), [0], 0, false, { pkgPath: "crypto/elliptic" }), /* @__PURE__ */ $.structField("params", /* @__PURE__ */ $.pointerType("elliptic.CurveParams"), [1], 8, false, { pkgPath: "crypto/elliptic" })]
	)
}

export var p224: nistCurve | $.VarRef<nistCurve> | null

export function __goscript_init_p224(): void {
	if (((p224) as any) === undefined) {
		p224 = new nistCurve({newPoint: nistec.NewP224Point})
	}
}

export function __goscript_get_p224(): nistCurve | $.VarRef<nistCurve> | null {
	if (((p224) as any) === undefined) {
		__goscript_init_p224()
	}
	return p224
}

export function __goscript_set_p224(__goscriptValue: nistCurve | $.VarRef<nistCurve> | null): void {
	p224 = __goscriptValue
}

export async function initP224(): globalThis.Promise<void> {
	$.pointerValue<nistCurve>(__goscript_get_p224()).params = (await (async () => { const __goscriptLiteralField0 = await bigFromDecimal("26959946667150639794667015087019630673557916260026308143510066298881"); const __goscriptLiteralField1 = await bigFromDecimal("26959946667150639794667015087019625940457807714424391721682722368061"); const __goscriptLiteralField2 = await bigFromHex("b4050a850c04b3abf54132565044b0b7d7bfd8ba270b39432355ffb4"); const __goscriptLiteralField3 = await bigFromHex("b70e0cbd6bb4bf7f321390b94a03c1d356c21122343280d6115c1d21"); const __goscriptLiteralField4 = await bigFromHex("bd376388b5f723fb4c22dfe6cd4375a05a07476444d5819985007e34"); return new __goscript_params.CurveParams({Name: "P-224", BitSize: 224, P: __goscriptLiteralField0, N: __goscriptLiteralField1, B: __goscriptLiteralField2, Gx: __goscriptLiteralField3, Gy: __goscriptLiteralField4}) })())
}

export var p256: nistCurve | $.VarRef<nistCurve> | null

export function __goscript_init_p256(): void {
	if (((p256) as any) === undefined) {
		p256 = new nistCurve({newPoint: nistec.NewP256Point})
	}
}

export function __goscript_get_p256(): nistCurve | $.VarRef<nistCurve> | null {
	if (((p256) as any) === undefined) {
		__goscript_init_p256()
	}
	return p256
}

export function __goscript_set_p256(__goscriptValue: nistCurve | $.VarRef<nistCurve> | null): void {
	p256 = __goscriptValue
}

export async function initP256(): globalThis.Promise<void> {
	$.pointerValue<nistCurve>(__goscript_get_p256()).params = (await (async () => { const __goscriptLiteralField5 = await bigFromDecimal("115792089210356248762697446949407573530086143415290314195533631308867097853951"); const __goscriptLiteralField6 = await bigFromDecimal("115792089210356248762697446949407573529996955224135760342422259061068512044369"); const __goscriptLiteralField7 = await bigFromHex("5ac635d8aa3a93e7b3ebbd55769886bc651d06b0cc53b0f63bce3c3e27d2604b"); const __goscriptLiteralField8 = await bigFromHex("6b17d1f2e12c4247f8bce6e563a440f277037d812deb33a0f4a13945d898c296"); const __goscriptLiteralField9 = await bigFromHex("4fe342e2fe1a7f9b8ee7eb4a7c0f9e162bce33576b315ececbb6406837bf51f5"); return new __goscript_params.CurveParams({Name: "P-256", BitSize: 256, P: __goscriptLiteralField5, N: __goscriptLiteralField6, B: __goscriptLiteralField7, Gx: __goscriptLiteralField8, Gy: __goscriptLiteralField9}) })())
}

export var p384: nistCurve | $.VarRef<nistCurve> | null

export function __goscript_init_p384(): void {
	if (((p384) as any) === undefined) {
		p384 = new nistCurve({newPoint: nistec.NewP384Point})
	}
}

export function __goscript_get_p384(): nistCurve | $.VarRef<nistCurve> | null {
	if (((p384) as any) === undefined) {
		__goscript_init_p384()
	}
	return p384
}

export function __goscript_set_p384(__goscriptValue: nistCurve | $.VarRef<nistCurve> | null): void {
	p384 = __goscriptValue
}

export async function initP384(): globalThis.Promise<void> {
	$.pointerValue<nistCurve>(__goscript_get_p384()).params = (await (async () => { const __goscriptLiteralField10 = await bigFromDecimal($.concatString("394020061963944792122790401001436138050797392704654", "46667948293404245721771496870329047266088258938001861606973112319")); const __goscriptLiteralField11 = await bigFromDecimal($.concatString("394020061963944792122790401001436138050797392704654", "46667946905279627659399113263569398956308152294913554433653942643")); const __goscriptLiteralField12 = await bigFromHex($.concatString("b3312fa7e23ee7e4988e056be3f82d19181d9c6efe8141120314088", "f5013875ac656398d8a2ed19d2a85c8edd3ec2aef")); const __goscriptLiteralField13 = await bigFromHex($.concatString("aa87ca22be8b05378eb1c71ef320ad746e1d3b628ba79b9859f741", "e082542a385502f25dbf55296c3a545e3872760ab7")); const __goscriptLiteralField14 = await bigFromHex($.concatString("3617de4a96262c6f5d9e98bf9292dc29f8f41dbd289a147ce9da31", "13b5f0b8c00a60b1ce1d7e819d7a431d7c90ea0e5f")); return new __goscript_params.CurveParams({Name: "P-384", BitSize: 384, P: __goscriptLiteralField10, N: __goscriptLiteralField11, B: __goscriptLiteralField12, Gx: __goscriptLiteralField13, Gy: __goscriptLiteralField14}) })())
}

export var p521: nistCurve | $.VarRef<nistCurve> | null

export function __goscript_init_p521(): void {
	if (((p521) as any) === undefined) {
		p521 = new nistCurve({newPoint: nistec.NewP521Point})
	}
}

export function __goscript_get_p521(): nistCurve | $.VarRef<nistCurve> | null {
	if (((p521) as any) === undefined) {
		__goscript_init_p521()
	}
	return p521
}

export function __goscript_set_p521(__goscriptValue: nistCurve | $.VarRef<nistCurve> | null): void {
	p521 = __goscriptValue
}

export async function initP521(): globalThis.Promise<void> {
	$.pointerValue<nistCurve>(__goscript_get_p521()).params = (await (async () => { const __goscriptLiteralField15 = await bigFromDecimal($.concatString(($.concatString("68647976601306097149819007990813932172694353001433", "0540939446345918554318339765605212255964066145455497729631139148")), "0858037121987999716643812574028291115057151")); const __goscriptLiteralField16 = await bigFromDecimal($.concatString(($.concatString("68647976601306097149819007990813932172694353001433", "0540939446345918554318339765539424505774633321719753296399637136")), "3321113864768612440380340372808892707005449")); const __goscriptLiteralField17 = await bigFromHex($.concatString(($.concatString("0051953eb9618e1c9a1f929a21a0b68540eea2da725b99b315f3b8", "b489918ef109e156193951ec7e937b1652c0bd3bb1bf073573df883d2c34f1ef")), "451fd46b503f00")); const __goscriptLiteralField18 = await bigFromHex($.concatString(($.concatString("00c6858e06b70404e9cd9e3ecb662395b4429c648139053fb521f8", "28af606b4d3dbaa14b5e77efe75928fe1dc127a2ffa8de3348b3c1856a429bf9")), "7e7e31c2e5bd66")); const __goscriptLiteralField19 = await bigFromHex($.concatString(($.concatString("011839296a789a3bc0045c8a5fb42c7d1bd998f54449579b446817", "afbd17273e662c97ee72995ef42640c550b9013fad0761353c7086a272c24088")), "be94769fd16650")); return new __goscript_params.CurveParams({Name: "P-521", BitSize: 521, P: __goscriptLiteralField15, N: __goscriptLiteralField16, B: __goscriptLiteralField17, Gx: __goscriptLiteralField18, Gy: __goscriptLiteralField19}) })())
}

export async function bigFromDecimal(s: string): globalThis.Promise<big.Int | $.VarRef<big.Int> | null> {
	let __goscriptTuple7: any = await big.Int.prototype.SetString.call(new big.Int(), s, 10)
	let b: big.Int | $.VarRef<big.Int> | null = __goscriptTuple7[0]
	let ok = __goscriptTuple7[1]
	if (!ok) {
		$.panic("crypto/elliptic: internal error: invalid encoding")
	}
	return b
}

export async function bigFromHex(s: string): globalThis.Promise<big.Int | $.VarRef<big.Int> | null> {
	let __goscriptTuple8: any = await big.Int.prototype.SetString.call(new big.Int(), s, 16)
	let b: big.Int | $.VarRef<big.Int> | null = __goscriptTuple8[0]
	let ok = __goscriptTuple8[1]
	if (!ok) {
		$.panic("crypto/elliptic: internal error: invalid encoding")
	}
	return b
}

var __goscriptAwait: any
