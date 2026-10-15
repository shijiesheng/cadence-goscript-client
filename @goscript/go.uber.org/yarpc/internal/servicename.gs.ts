// Generated file based on servicename.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as errors from "@goscript/errors/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as regexp from "@goscript/regexp/index.js"

import * as multierr from "@goscript/go.uber.org/multierr/index.js"
import "@goscript/errors/index.js"
import "@goscript/fmt/index.js"
import "@goscript/regexp/index.js"
import "@goscript/go.uber.org/multierr/index.js"

export let _uuidRegexp: regexp.Regexp | $.VarRef<regexp.Regexp> | null = await regexp.MustCompile("[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}")

export function __goscript_set__uuidRegexp(__goscriptValue: regexp.Regexp | $.VarRef<regexp.Regexp> | null): void {
	_uuidRegexp = __goscriptValue
}

export async function ValidateServiceName(name: string): globalThis.Promise<$.GoError> {
	if ($.stringLen(name) < 2) {
		// Short names aren't safe to check any further.
		return errors.New("service name must be at least two characters long")
	}
	return multierr.Combine($.arrayToSlice<$.GoError>([checkHyphens(name), checkFirstCharacter(name), checkForbiddenCharacters(name), await checkUUIDs(name)]))
}

export function checkHyphens(name: string): $.GoError {
	for (let i = 1; i < $.stringLen(name); i++) {
		if (($.indexString(name, i - 1) == 45) && ($.indexString(name, i) == 45)) {
			return fmt.Errorf("service name %q contains consecutive hyphens", name)
		}
	}
	if ($.indexString(name, $.stringLen(name) - 1) == 45) {
		return fmt.Errorf("service name %q ends with a hyphen", name)
	}
	return null
}

export function checkFirstCharacter(name: string): $.GoError {
	if (($.indexString(name, 0) < 97) || ($.indexString(name, 0) > 122)) {
		return fmt.Errorf("service name %q doesn't start with a lowercase ASCII letter", name)
	}
	return null
}

export function checkForbiddenCharacters(name: string): $.GoError {
	for (let __goscriptRunes0 = $.stringRunes(name); __goscriptRunes0.next(); ) {
		const c = __goscriptRunes0.rune
		switch ((true as boolean)) {
			case (97 <= c) && (c <= 122):
			{
				continue
				break
			}
			case (48 <= c) && (c <= 57):
			{
				continue
				break
			}
			case c == 45:
			{
				continue
				break
			}
			case c == 95:
			{
				continue
				break
			}
			default:
			{
				return fmt.Errorf("service name %q contains characters other than [0-9a-z] and hyphens", name)
				break
			}
		}
	}
	return null
}

export async function checkUUIDs(name: string): globalThis.Promise<$.GoError> {
	if (await (_uuidRegexp !== null && (_uuidRegexp as any).__isVarRef !== true && (_uuidRegexp as any).__goValue === undefined ? ((_uuidRegexp as any) as regexp.Regexp).MatchString(name) : regexp.Regexp.prototype.MatchString.call(_uuidRegexp, name))) {
		return fmt.Errorf("service name %q contains a UUID", name)
	}
	return null
}
