import { describe, expect, it } from "@jest/globals";
import { findOperators } from "../src/findOperators";
import { Result } from "../src/interfaces/result";

describe("Test find Operators", () => {
  it("should return values!", () => {
    let expected: Result[] = [{ first: 1, second: 12 }];
    let resultado = findOperators([1, 12, 13, 1], 13);
    expect(resultado).toEqual(expected);
  });

  it("should return empty if there aren't any coincidence", () => {
    let resultado = findOperators([0, 1, 13], 12);
    expect(resultado.length).toEqual(0);
  });

  it("should return empty when there is no values!", () => {
    let resultado = findOperators([], 12);
    expect(resultado.length).toEqual(0);
  });

  it("should return empty when there is only one value!", () => {
    let resultado = findOperators([12], 12);
    expect(resultado.length).toEqual(0);
  });
});
