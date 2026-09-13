# spex-playground

A tiny Node project used to exercise Spex delivery playbooks end to end: an issue becomes a branch, a pull request, a green CI run, and a merge.

The `greet(name)` helper in `src/greet.js` returns `Hello, <name>!` and throws a `TypeError` if `name` is not a string.

```js
import { greet } from "./src/greet.js";

greet("Ada"); // "Hello, Ada!"
```

```sh
npm test
```
