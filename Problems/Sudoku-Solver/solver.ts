export default function solve(sudoku: number[][]): number[][] | false {

  /* Check for edge cases */

  // Check if the size is a valid sudoku size
  if (!(Math.floor(Math.sqrt(sudoku.length)) ** 2 === sudoku.length)) return false;
  // Check if every array has the same length
  sudoku.forEach(line => {
    if (line.length !== sudoku.length) return false;
  });


  const size = sudoku.length; // Size of the given Sudoku
  const solution = sudoku;  // Copy of the given Sudoku which will later contain the result
  let pos = 0;  // Current position where the program tries to place a number
  let line = 0; // Current Line-Position where the Program trie to place a number
  let newValue = 1; // Current Value which the Program trie to place
  let oldPositions = [-1];  // Stack of old Positions to backtrack

  while(!(pos > (size * size) - 1)) {
    const i = pos % size;
    line = Math.floor(pos / size);

    if (solution[line][i] === 0 || newValue != 1) {

        if (newValue != 1) newValue = solution[line][i] + 1;
        
        solution[line][i] = 0
        while (!checkIfNumberCanBePlaced(i, newValue, size, line, solution) && newValue <= size) {
            newValue++;
        }

        if (newValue > size) {
            pos = oldPositions.pop() as number;
            if (pos === undefined || pos === -1) return false;
        } else {
            solution[line][i] = newValue;
            newValue = 1;
            oldPositions.push(pos);
            pos++;
        }

    } else {
        pos++;
    };
  };

  return solution;
}

function checkBox(posInLine: number, num: number, size: number, lineNumber: number, lines: number[][]): boolean {
    const boxSize = Math.sqrt(size);

    const startVertical = Math.floor(lineNumber / boxSize) * boxSize;
    const startHorizontal = Math.floor(posInLine / boxSize) * boxSize;

    for (let i = startVertical; i < (startVertical + boxSize); i++) {
        for (let j = startHorizontal; j < (startHorizontal + boxSize); j++) {
            if (lines[i][j] === num) return false;
        }
    }
    return true;
}

function checkHorizontal(num: number, line: number[]): boolean {
    return !line.some(val => val === num);   
}

function checkVertical(posInLine: number, num: number, lines: number[][]): boolean {
    return !lines.some(line => line[posInLine] === num);
}

function checkIfNumberCanBePlaced(posInLine: number, value: number, size: number, lineNumber: number, lines: number[][]): boolean {
    return checkHorizontal(value, lines[lineNumber]) && checkVertical(posInLine, value, lines) && checkBox(posInLine, value, size, lineNumber, lines);
}