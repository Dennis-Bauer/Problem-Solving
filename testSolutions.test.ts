import { describe, it, expect, test } from 'vitest'
import sameUpsideDown from './Problems/Upside-Down/solver';

describe("Is it the same Upside Down?", () => {
  it("should return true for '6090609' -> '6090609'", () => {
    expect(sameUpsideDown("6090609")).toBe(true);
  });

  it("should return false for '9669' -> '6996'", () => {
    expect(sameUpsideDown("9669")).toBe(false);
  });

  it("should return false for '9' -> '6'", () => {
    expect(sameUpsideDown("9")).toBe(false);
  });

  it("should return true for '0' -> '0'", () => {
    expect(sameUpsideDown("0")).toBe(true);
  });

  it("should return true for '6090609' -> '6090609'", () => {
    expect(sameUpsideDown("6090609")).toBe(true);
  });

  it("should return true for '60906096090609' -> '60906096090609'", () => {
    expect(sameUpsideDown("60906096090609")).toBe(true);
  });

  it("should return false for '966909669' -> '699606699'", () => {
    expect(sameUpsideDown("966909669")).toBe(false);
  });

  it("should return false for '96666660999999' -> '69999990666666'", () => {
    expect(sameUpsideDown("96666660999999")).toBe(false);
  });

  it("should return false for '1234560' -> 'Wrong Input'", () => {
    expect(sameUpsideDown("1234560")).toBe(false);
  });
})
