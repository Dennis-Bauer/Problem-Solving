import { describe, it, expect, test } from 'vitest'
import sameUpsideDown from './Problems/Upside-Down/solver';
import Fibonacci from './Problems/Fibonacci-Sequence/generator';

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

describe("Fibonacci-Sequence", () => {
  const f = new Fibonacci();

  it("should generate the correct fibonacci number 1 -> 0", () => {
    expect(Fibonacci.fibonacci(1)).toEqual(0);
  })

  it("should generate the correct fibonacci number 2 -> 1", () => {
    expect(Fibonacci.fibonacci(2)).toEqual(1);
  })

  it("should generate the correct fibonacci number 16 -> 610", () => {
    expect(Fibonacci.fibonacci(16)).toEqual(610);
  })

  it("should generate the correct fibonacci number 42 -> 165580141", () => {
    expect(Fibonacci.fibonacci(42)).toEqual(165580141);
  })

  it("should contain the last generated number", () => {
    f.next();
    f.next();
    f.next();

    expect(f.value).toEqual(1);
  })

  it("should contain the last generated number", () => {
    f.next(5);

    expect(f.value).toEqual(13);
  });

  it("should return the generated sequence", () => {
    expect(f.sequence).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
  });

  it("should return the generated sequence", () => {
    f.next(40);

    expect(f.sequence).toEqual([
      0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 
      55, 89, 144, 233, 377, 610, 987, 1597, 
      2584, 4181, 6765, 10946, 17711, 28657, 
      46368, 75025, 121393, 196418, 317811, 
      514229, 832040, 1346269, 2178309, 3524578, 
      5702887, 9227465, 14930352, 24157817, 
      39088169, 63245986, 102334155, 165580141, 
      267914296, 433494437, 701408733, 1134903170, 
      1836311903, 2971215073
    ]);
  });
})
