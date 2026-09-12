// SPDX-License-Identifier: Apache-2.0
// SPDX-FileCopyrightText: 2026 SubLang International <https://sublang.ai>

import { test } from "node:test";
import assert from "node:assert/strict";
import { add } from "../src/math.js";

test("add sums finite numbers", () => {
  assert.equal(add(2, 3), 5);
});

test("add rejects non-finite input", () => {
  assert.throws(() => add(Infinity, 1), TypeError);
});
