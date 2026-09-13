// SPDX-License-Identifier: Apache-2.0
// SPDX-FileCopyrightText: 2026 SubLang International <https://sublang.ai>

/** Greet a name. */
export function greet(name) {
  if (typeof name !== "string") throw new TypeError("greet expects a string name");
  return `Hello, ${name}!`;
}
