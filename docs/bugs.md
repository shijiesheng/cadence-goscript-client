# Bug journal

## 1. `reflect: non-interface type passed to Type.Implements`

- **Symptom:** Worker crashed while decoding workflow/activity args in `isActivityContext`.
- **Cause:** `context.Context` was not registered with the runtime type registry, so `reflect.TypeOf(*context.Context).Elem()` was not an interface.
- **Fix:** `$.registerInterfaceType('context.Context', ...)` in `@goscript/context/context.ts`.

## 2. `reflect: Call using timerContext as type context.Context`

- **Symptom:** Worker started the workflow, then crashed when invoking the activity via `reflect.Value.Call`.
- **Cause:** Concrete context classes (`timerContext`, etc.) had no Go type metadata, so `TypeOf` treated them as empty structs that do not implement `context.Context`.
- **Fix:** Box returned contexts with `$.interfaceValue(..., 'context.Context', contextTypeInfo)` via `asContext()`.
