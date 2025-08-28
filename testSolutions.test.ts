import { describe, it, expect, test } from 'vitest'
import sudokuSolver from "./Problems/Sudoku-Solver/solver";
import sameUpsideDown from './Problems/Upside-Down/solver';
import Fibonacci from './Problems/Fibonacci-Sequence/generator';
import isValidHexCode from './Problems/Valid-Hex-Code/solver';
import quadratischPraktischGruen from './Problems/Quadratisch-Praktisch-Grün/solver'

describe("Sudoku-Solver", () => {
  const hard9Sudoku = [
    [0,0,6,0,0,0,0,5,0],
    [0,0,3,7,0,0,0,0,0],
    [7,0,0,0,3,5,0,0,8],
    [0,0,0,0,7,0,0,1,2],
    [0,0,0,9,4,2,0,0,0],
    [6,2,0,0,8,0,0,0,0],
    [9,0,0,1,2,0,0,0,3],
    [0,0,0,0,0,3,6,0,0],
    [0,5,0,0,0,0,7,0,0],
  ];

  const hard9SudokuSolution = [
    [8,1,6,2,9,4,3,5,7],
    [5,4,3,7,1,8,2,6,9],
    [7,9,2,6,3,5,1,4,8],
    [4,3,8,5,7,6,9,1,2],
    [1,7,5,9,4,2,8,3,6],
    [6,2,9,3,8,1,4,7,5],
    [9,6,4,1,2,7,5,8,3],
    [2,8,7,4,5,3,6,9,1],
    [3,5,1,8,6,9,7,2,4],
  ]

  it("should return the correct solution (Hard 9x9)", () => {
    expect(sudokuSolver(hard9Sudoku)).toEqual(hard9SudokuSolution);
  })

  const ultraHard9Sudoku = [
    [8,0,0,0,0,0,0,0,0],
    [0,0,3,6,0,0,0,0,0],
    [0,7,0,0,9,0,2,0,0],
    [0,5,0,0,0,7,0,0,0],
    [0,0,0,0,4,5,7,0,0],
    [0,0,0,1,0,0,0,3,0],
    [0,0,1,0,0,0,0,6,8],
    [0,0,8,5,0,0,0,1,0],
    [0,9,0,0,0,0,4,0,0],
  ];

  const ultraHard9SudokuSolution = [
    [8,1,2,7,5,3,6,4,9],
    [9,4,3,6,8,2,1,7,5],
    [6,7,5,4,9,1,2,8,3],
    [1,5,4,2,3,7,8,9,6],
    [3,6,9,8,4,5,7,2,1],
    [2,8,7,1,6,9,5,3,4],
    [5,2,1,9,7,4,3,6,8],
    [4,3,8,5,2,6,9,1,7],
    [7,9,6,3,1,8,4,5,2],
  ];

  it("should return the correct solution (Ultra-Hard 9x9)", () => {
    expect(sudokuSolver(ultraHard9Sudoku)).toEqual(ultraHard9SudokuSolution);
  })

  const hard4Sudoku = [
    [0,0,0,0],
    [2,0,1,4],
    [3,0,2,1],
    [0,0,0,0],
  ];

  const hard4SudokuSolution = [
    [4,1,3,2],
    [2,3,1,4],
    [3,4,2,1],
    [1,2,4,3],
  ];

  it("should return the correct solution (Hard 4x4)", () => {
    expect(sudokuSolver(hard4Sudoku)).toEqual(hard4SudokuSolution);
  })
  
  const ultraHard4Sudoku = [
    [0,1,0,4],
    [0,0,2,0],
    [0,3,0,0],
    [4,0,1,0],
  ];

  const ultraHard4SudokuSolution = [
    [2,1,3,4],
    [3,4,2,1],
    [1,3,4,2],
    [4,2,1,3],
  ];

  it("should return the correct solution (Ultra-Hard 4x4)", () => {
    expect(sudokuSolver(ultraHard4Sudoku)).toEqual(ultraHard4SudokuSolution);
  })

  const bigSudoku = [
    [1, 8, 5, 0, 0, 0, 9, 2, 10, 11, 12, 13, 3, 0, 15, 16],
    [0, 3, 6, 7, 0, 14, 15, 16, 1, 4, 5, 8, 9, 11, 12, 13],
    [11, 12, 13, 16, 3, 1, 4, 5, 2, 9, 14, 15, 6, 7, 8, 10],
    [0, 10, 14, 0, 8, 11, 0, 13, 3, 6, 7, 16, 2, 1, 4, 5],
    [3, 16, 1, 2, 13, 8, 5, 14, 11, 7, 10, 4, 12, 9, 6, 15],
    [6, 9, 8, 11, 2, 3, 16, 15, 5, 12, 13, 1, 4, 10, 14, 7],
    [4, 7, 12, 13, 1, 0, 10, 11, 14, 0, 15, 6, 5, 2, 16, 0],
    [5, 14, 15, 10, 7, 4, 6, 12, 8, 2, 16, 9, 13, 3, 11, 1],
    [13, 6, 3, 1, 16, 0, 2, 8, 9, 14, 4, 7, 10, 15, 5, 11],
    [7, 15, 9, 14, 11, 13, 3, 10, 12, 8, 6, 5, 1, 16, 2, 4],
    [16, 2, 11, 5, 14, 6, 1, 4, 15, 13, 10, 3, 7, 8, 9, 12],
    [8, 4, 10, 12, 15, 5, 7, 9, 16, 1, 2, 0, 14, 13, 3, 6],
    [15, 1, 2, 3, 4, 16, 8, 6, 7, 10, 9, 12, 11, 5, 13, 14],
    [10, 0, 7, 8, 12, 5, 14, 3, 6, 15, 11, 2, 16, 4, 1, 9],
    [14, 11, 16, 6, 9, 10, 13, 7, 1, 4, 5, 8, 15, 12, 2, 3],
    [0, 5, 4, 9, 15, 2, 11, 7, 13, 16, 1, 14, 8, 6, 0, 3]
];

  const bigSudokuSolution = [
    [1, 8, 5, 4, 6, 7, 9, 2, 10, 11, 12, 13, 3, 14, 15, 16],
    [2, 3, 6, 7, 10, 14, 15, 16, 1, 4, 5, 8, 9, 11, 12, 13],
    [11, 12, 13, 16, 3, 1, 4, 5, 2, 9, 14, 15, 6, 7, 8, 10],
    [9, 10, 14, 15, 8, 11, 12, 13, 3, 6, 7, 16, 2, 1, 4, 5],
    [3, 16, 1, 2, 13, 8, 5, 14, 11, 7, 10, 4, 12, 9, 6, 15],
    [6, 9, 8, 11, 2, 3, 16, 15, 5, 12, 13, 1, 4, 10, 14, 7],
    [4, 7, 12, 13, 1, 9, 10, 11, 14, 3, 15, 6, 5, 2, 16, 8],
    [5, 14, 15, 10, 7, 4, 6, 12, 8, 2, 16, 9, 13, 3, 11, 1],
    [13, 6, 3, 1, 16, 12, 2, 8, 9, 14, 4, 7, 10, 15, 5, 11],
    [7, 15, 9, 14, 11, 13, 3, 10, 12, 8, 6, 5, 1, 16, 2, 4],
    [16, 2, 11, 5, 14, 6, 1, 4, 15, 13, 10, 3, 7, 8, 9, 12],
    [8, 4, 10, 12, 15, 5, 7, 9, 16, 1, 2, 11, 14, 13, 3, 6],
    [15, 1, 2, 3, 4, 16, 8, 6, 7, 10, 9, 12, 11, 5, 13, 14],
    [10, 13, 7, 8, 12, 5, 14, 3, 6, 15, 11, 2, 16, 4, 1, 9],
    [14, 11, 16, 6, 9, 10, 13, 7, 1, 4, 5, 8, 15, 12, 2, 3],
    [12, 5, 4, 9, 15, 2, 11, 7, 13, 16, 1, 14, 8, 6, 10, 3]
];

  it("should return the correct solution (Big Sudoku)", () => {
    expect(sudokuSolver(bigSudoku)).toEqual(bigSudokuSolution);
  })

  const wrongSudoku1 = [
    [9],
    [1, 1, 1],
  ];

  it("should return false (Wrong Input 1)", () => {
    expect(sudokuSolver(wrongSudoku1)).toBe(false);
  })

  const wrongSudoku2 = [
    [0,1,0,4],
    [0,0,2,0],
    [2,3,0,0],
    [4,0,1,0],
  ];

  it("should return false (Wrong Input 2)", () => {
    expect(sudokuSolver(wrongSudoku2)).toBe(false);
  })

})

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

    expect(f.getValue()).toEqual(1);
  })

  it("should contain the last generated number", () => {
    f.next(5);

    expect(f.getValue()).toEqual(13);
  });

  it("should return the generated sequence", () => {
    expect(f.getSequence()).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
  });

  it("should return the generated sequence", () => {
    f.next(40);

    expect(f.getSequence()).toEqual([
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

describe("Is it a valid Hex Code?", () => {
  it("should return true for '#CD5C5C'", () => {
    expect(isValidHexCode("#CD5C5C")).toEqual(true);
  });

  it("should return true for '#EAECEE'", () => {
    expect(isValidHexCode("#EAECEE")).toEqual(true);
  });

  it("should return true for '#eaecee'", () => {
    expect(isValidHexCode("#eaecee")).toEqual(true);
  });

  it("should return false for '#CD5C58C'", () => {
    expect(isValidHexCode("#CD5C58C")).toEqual(false);
  });

  it("should return false for '#CD5C5Z'", () => {
    expect(isValidHexCode("#CD5C5Z")).toEqual(false);
  });

  it("should return false for '#CD5C&C'", () => {
    expect(isValidHexCode("#CD5C&C")).toEqual(false);
  });

  it("should return false for 'CD5C5C'", () => {
    expect(isValidHexCode("CD5C5C")).toEqual(false);
  });

  it("should return false for 'eaecee#'", () => {
    expect(isValidHexCode("eaecee#")).toEqual(false);
  });
})

describe("Quadratisch-Praktisch-Grün", () => {

  const solutionTestOne = {
    areaGarden: 2772, 
    extraGardensPerHeight: 4, 
    extraGardensPerWidth: 6, 
    extraGarden: {
      amount: 24, 
      height: 10.50, 
      width: 11, 
      area: 115.5
    }
  }

  it("should return the correct solution for these values: 23 ppl, 42*66", () => {
    expect(quadratischPraktischGruen(23, 42, 66)).toEqual(solutionTestOne);
  });

  const solutionTestTwo = {
    areaGarden: 180, 
    extraGardensPerHeight: 5, 
    extraGardensPerWidth: 4, 
    extraGarden: {
      amount: 20, 
      height: 3, 
      width: 3, 
      area: 9
    }
  }

  it("should return the correct solution for these values: 19 ppl, 15*12", () => {
    expect(quadratischPraktischGruen(19, 15, 12)).toEqual(solutionTestTwo);
  });

  const solutionTestThree = {
    areaGarden: 4235, 
    extraGardensPerHeight: 6, 
    extraGardensPerWidth: 6, 
    extraGarden: {
      amount: 36, 
      height: 9.17, 
      width: 12.83, 
      area: 117.64
    }
  }

  it("should return the correct solution for these values: 36 ppl, 55*77", () => {
    expect(quadratischPraktischGruen(36, 55, 77)).toEqual(solutionTestThree);
  });

  const solutionTestFour = {
    areaGarden: 225, 
    extraGardensPerHeight: 11, 
    extraGardensPerWidth: 10, 
    extraGarden: {
      amount: 110, 
      height: 1.36, 
      width: 1.5, 
      area: 2.05
    }
  }

  it("should return the correct solution for these values: 101 ppl, 15*15", () => {
    expect(quadratischPraktischGruen(101, 15, 15)).toEqual(solutionTestFour);
  });

  const solutionTestFive = {
    areaGarden: 74000, 
    extraGardensPerHeight: 5, 
    extraGardensPerWidth: 264, 
    extraGarden: {
      amount: 1320, 
      height: 7.4, 
      width: 7.58, 
      area: 56.06
    }
  }

  it("should return the correct solution for these values: 1200 ppl, 37*2000", () => {
    expect(quadratischPraktischGruen(1200, 37, 2000)).toEqual(solutionTestFive);
  });

  const solutionTestSix = {
    areaGarden: 342005, 
    extraGardensPerHeight: 120, 
    extraGardensPerWidth: 308, 
    extraGarden: {
      amount: 36960, 
      height: 3.04, 
      width: 3.04, 
      area: 9.25
    }
  }

  it("should return the correct solution for these values: 35000 ppl, 365*937", () => {
    expect(quadratischPraktischGruen(3500, 365, 937)).toEqual(solutionTestSix);
  }); 

  it("should return an error for these wrong values: -1 ppl, 5*0", () => {
    expect(quadratischPraktischGruen(-1, 5, 0)).toThrowError(Error("Wrong Input"))
  });

  it("should return an error for these wrong values: 1.5 ppl, 5*1", () => {
    expect(quadratischPraktischGruen(1.5, 5, 1)).toThrowError(Error("Wrong Input"))
  });

  const solutionTestTen = {
    areaGarden: 25, 
    extraGardensPerHeight: 5, 
    extraGardensPerWidth: 1, 
    extraGarden: {
      amount: 5, 
      height: 1, 
      width: 5, 
      area: 5
    }
  }

  it("should return the correct solution for these values: 5 ppl, 5*5", () => {
    expect(quadratischPraktischGruen(5, 5, 5)).toEqual(solutionTestTen);
  }); 
})