import { describe, expect, test } from "@jest/globals";
import { parseIdFromUrl } from "./ParseIdServis";

describe("sum module", () => {
  test("films 1", () => {
    expect(parseIdFromUrl("http https://swapi.py4e.com/api/films/1/")).toBe(1);
  });
  test("films 7", () => {
    expect(parseIdFromUrl("http https://swapi.py4e.com/api/films/7/")).toBe(7);
  });
  test("starships 1", () => {
    expect(parseIdFromUrl("http https://swapi.py4e.com/api/starships/1/")).toBe(
      1
    );
  });
  test("planets 1", () => {
    expect(parseIdFromUrl("http https://swapi.py4e.com/api/planets/1/")).toBe(
      1
    );
  });
});
