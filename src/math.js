// SPDX-License-Identifier: Apache-2.0
// SPDX-FileCopyrightText: 2026 SubLang International <https://sublang.ai>

/** Add two finite numbers. */
export function add(a, b) {
  if (!Number.isFinite(a) || !Number.isFinite(b)) throw new TypeError("add expects finite numbers");
  return a + b;
}
