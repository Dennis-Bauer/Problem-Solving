import { describe, it, expect, test } from 'vitest'
import sudokuSolver from "./Problems/Sudoku-Solver/solver";
import sameUpsideDown from './Problems/Upside-Down/solver';

// Test cases from Clash code (Sudoku-Solver Problem and Mini-sudoku-solver)
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

  test("should return the correct solution (Hard 9x9)", () => {
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

  test("should return the correct solution (Ultra-Hard 9x9)", () => {
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

  test("should return the correct solution (Hard 4x4)", () => {
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

  test("should return the correct solution (Ultra-Hard 4x4)", () => {
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

  test("should return the correct solution (Big Sudoku)", () => {
    expect(sudokuSolver(bigSudoku)).toEqual(bigSudokuSolution);
  })

  const wrongSudoku1 = [
    [9],
    [1, 1, 1],
  ];

  test("should return false (Wrong Input 1)", () => {
    expect(sudokuSolver(wrongSudoku1)).toBe(false);
  })

  const wrongSudoku2 = [
    [0,1,0,4],
    [0,0,2,0],
    [2,3,0,0],
    [4,0,1,0],
  ];

  test("should return false (Wrong Input 2)", () => {
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
