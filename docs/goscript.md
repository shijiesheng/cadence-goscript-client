# How GoScript Works

[GoScript](https://github.com/s4wave/goscript) transpiles Go packages into readable TypeScript for Bun, Node.js, and browsers.

## Compilation pipeline

```text
Go packages
  -> parse and type-check with Go tooling
  -> build a semantic model
  -> lower to GoScript's intermediate representation
  -> emit TypeScript
  -> copy @goscript/builtin and package overrides
```

The semantic pass decides:

- how Go types map to TypeScript;
- which values need pointer boxes or struct copies;
- which functions can block and must become `async`;
- where calls require `await`.

Each Go package becomes `@goscript/<import-path>/`. Go files usually become `.gs.ts` files, while `index.ts` exports the package.

## Runtime support

Generated code is plain TypeScript, but JavaScript lacks several Go behaviors. The `@goscript/builtin` runtime provides channels, `select`, slices, maps, pointers, `defer`, panic/recover, type information, and Go-style value copying.

Blocking operations use Promises. Goroutines become async tasks on the JavaScript event loop. A `select` checks ready channel cases, chooses randomly when several are ready, or waits on cancellable Promises until one case commits.

Handwritten overrides implement packages whose Go implementation cannot run directly in JavaScript, including parts of `os`, `sync`, and `reflect`.

## WASM's role

Your application is **not** compiled to WASM and then converted to TypeScript. Only the browser playground builds the GoScript compiler itself as WASM:

```text
GoScript compiler -> compiler.wasm
Go source text -> compiler.wasm -> TypeScript source text
TypeScript + @goscript/builtin -> JavaScript application
```

The normal CLI is a native Go executable. Both versions use the same semantic, lowering, and TypeScript-emission pipeline. The generated application does not ship with the compiler WASM runtime.

## Basic usage

```bash
go install github.com/s4wave/goscript/cmd/goscript@latest
goscript compile --package . --output ./output
```

Configure TypeScript to resolve generated packages:

```json
{
  "compilerOptions": {
    "paths": {
      "@goscript/*": ["./output/@goscript/*"]
    }
  }
}
```

## Main limitations

- Browser/WASM compilation supports only one import-free source file; use the CLI for real packages.
- cgo and most `unsafe` operations are unsupported.
- Go `int` maps to JavaScript `number` and loses precision beyond `2^53`; `int64` and `uint64` use `bigint`.
- Host-dependent features such as processes and sockets depend on the JavaScript runtime.
- Standard-library behavior depends on transpilation coverage and available overrides.
