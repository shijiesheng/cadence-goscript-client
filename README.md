# regenerate the code

```sh
go install github.com/s4wave/goscript/cmd/goscript@v0.4.5
GOTOOLCHAIN=go1.27.2 goscript compile --package <path-to-cadence-go-client> --output .
```

# run worker

```
npm run worker
```

# start and wait for a workflow

```
npm run start-workflow -- [name]
```
