# regenerate the code

```sh
go install github.com/s4wave/goscript/cmd/goscript@v0.4.5
GOTOOLCHAIN=go1.27.2 goscript compile --package <path-to-cadence-go-client> --output .
```

# run worker

```
npm run worker
```

# bugs
1. [FIXED] await inside sync function
2. workflow doesn't progress after started
