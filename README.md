# NPM: get-own-version

This is a small typescript library (published to npm) to get the current version from own package.json file.

## Code Example

```node
import getVersion from "get-own-version";

// get version in major.minor.patch format
const myVersion = await getVersion();
```