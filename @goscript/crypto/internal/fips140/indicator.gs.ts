// Generated file based on indicator.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import "@goscript/unsafe/index.js"

export const indicatorUnset: number = 0

export const indicatorFalse: number = 1

export const indicatorTrue: number = 2

export function getIndicator(): number {
	return 0
}

export function setIndicator(_p0: number): void {
}

export function ResetServiceIndicator(): void {
	setIndicator(0)
}

export function ServiceIndicator(): boolean {
	return getIndicator() == 2
}

export function RecordApproved(): void {
	if (getIndicator() == 0) {
		setIndicator(2)
	}
}

export function RecordNonApproved(): void {
	setIndicator(1)
}
