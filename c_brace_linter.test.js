import { expect, test } from "@jest/globals";
import cBraceLinter from "./c_brace_linter.js";
import * as dd from "./dummy_data.js";

test("Returns true for a single pair of curly braces w/ proper syntax", () => {
  expect(cBraceLinter(dd.properPair)).toBe(true);
});

test("Returns true for side-by-side pairs of curly braces w/ proper syntax", () => {
  expect(cBraceLinter(dd.multProperPair)).toBe(true);
});

test("Returns true for a nested pair of curly braces w/ proper syntax", () => {
  expect(cBraceLinter(dd.nestedProperPair)).toBe(true);
});

test("Returns false for a pair of curly braces w/ proper syntax and a pair w/o proper syntax", () => {
  expect(cBraceLinter(dd.properPairWithReversedBrckts)).toBe(false);
});

test("Returns false for a pair of curly braces w/o proper syntax", () => {
  expect(cBraceLinter(dd.reversedBrckts)).toBe(false);
});

test("Returns false because 1+ closing curly braces are missing", () => {
  expect(cBraceLinter(dd.tooFewClosingBrckts)).toBe(false);
});

test("Returns false because 1+ opening curly braces are missing", () => {
  expect(cBraceLinter(dd.tooFewOpeningBrckts)).toBe(false);
});

test("Returns true because no curly braces were found", () => {
  expect(cBraceLinter(dd.noBrckts)).toBe(true);
});

test("Returns true for a curly brace pair with proper syntax despite non-bracket characters", () => {
  expect(cBraceLinter(dd.nonBrcktChars)).toBe(true);
});

test("Returns true for a curly brace pair with proper syntax despite a broad range of non-bracket characters", () => {
  expect(cBraceLinter(dd.randCharsProperPair)).toBe(true);
});

test("Returns true when null is given as the function argument", () => {
  expect(cBraceLinter(dd.nullStr)).toBe(true);
});

test("Returns true when undefined is given as the function argument", () => {
  expect(cBraceLinter(dd.undefinedStr)).toBe(true);
});
