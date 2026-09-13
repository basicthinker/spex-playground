// SPDX-License-Identifier: Apache-2.0
// SPDX-FileCopyrightText: 2026 SubLang International <https://sublang.ai>

import { test } from "node:test";
import assert from "node:assert/strict";
import { greet } from "../src/greet.js";

test("greet returns a greeting for a string name", () => {
  assert.equal(greet("Ada"), "Hello, Ada!");
  assert.equal(greet(""), "Hello, !");
  assert.equal(greet(" Ada "), "Hello,  Ada !");
});

test("greet rejects non-string names", () => {
  for (const name of [undefined, null, 42, true, 1n, Symbol("name"), {}, [], () => {}, new String("Ada")]) {
    assert.throws(() => greet(name), TypeError);
  }
});
