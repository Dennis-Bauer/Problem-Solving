# Sudoku-Solver
This Problem is all about Sudoku's and how to solve them with code

## What is a Sudoku
First of all we need to understand what a **Sudoku** is. 

Sudoku is a logic puzzle played on a square grid that can come in
different sizes, like **4×4**, **9×9**, or even **16×16**.

The grid is always divided into smaller equal squares, and the challenge
is to fill all the empty spaces with symbols --- usually (And in this case) numbers --- so
that each symbol appears only once in every **row**, every **column**,
and every smaller **square**.

The exact set of symbols depends on the grid size:

-   In a **4×4** puzzle you use the numbers **1 to 4**
-   In a **9×9** puzzle the numbers **1 to 9**
-   In a **16×16** puzzle the numbers **1 to 16**
-   *and so on*

No matter the size, the idea is the same: carefully place the symbols
using logic until the whole grid is complete.

## Documentation

### Solution Idea

We are given a Sudoku with empty spaces and need to fill them. The first thought I had was: *What would the brute force solution look like?*  
Easy, just test every number combination in the empty spaces until we find the correct solution. But what does this mean?

Let’s say we have a Sudoku which looks like this:
```
1|2||0|4
4|0||2|1
-+-++-+-
2|1||4|3
3|4||1|2
```
The brute force solution would now test every possible number combination in these places until it finds the correct solution. So it would first try to put `1|1` in the missing fields. Then it would try to put `1|2`, then `1|3`, and so on until a solution is found.  
This would obviously take too much time in a bigger Sudoku, but I think we can use this brute force solution and just upgrade it a little bit.

---

#### Reducing Combinations

Instead of testing every possible combination in every empty space, we could decrease the amount of combinations by removing the ones that make no sense from the beginning.  

For example, the combination `1|1` in our example above wouldn’t make sense because there are already ones in both rows. So what the program should do is: start at an empty space, put the lowest possible number in it, and then move to the next space and do the same.  

With that, we make sure the program only tests logical sequences. This approach would solve most easy Sudokus, but on harder ones it would get stuck.

---

#### Backtracking

Let’s say the program comes to a point where the lowest possible number is bigger than the biggest number that is allowed. The program would get stuck.  

What do we do now? We go back to the previous number and try the next lowest possible number. This means we backtrack.  

Backtracking means we go one step back and try the next possible solution at this point. If there isn’t another solution, we just backtrack further to the next possible solution, and so on.

---

#### When Backtracking Fails

This solution idea is similar to brute force, because we are still testing every possible solution until we find the correct one. The difference is that we skip the numbers which aren’t possible.  

The last thing we need to think about is: *What happens when the program isn’t able to backtrack anymore?*  
This could happen when the program has backtracked all the way to the first number and still can’t test any further because it already went through every possible solution. In this case, the program is stuck.  

This only happens when the Sudoku isn’t solvable. So if this happens, we know that the Sudoku isn’t solvable.

### [Implementation](./solver.ts)

For implementing a solution we need a function. This function should take the Sudoku that should get solved as input, and it should output the solved solution.

The Sudoku is represented as a two-dimensional array, and empty spaces are represented with zeros. With that information our function should look like this:
```ts
function solve(sudoku: number[][]): number[][] | false { ... }
```

Before we start solving the Sudoku, we need to check for edge cases:

1. **Has the given array a valid Sudoku size?**  
   A valid Sudoku size is a number that has a whole number as its square root.  
   We can test that by flooring the square root of the given array length, multiplying it by itself, and checking if the same result comes out:
   ```ts
   Math.floor(Math.sqrt(sudoku.length)) ** 2 === sudoku.length
   ```
   If this is false we return `false` directly because this isn't a correct Sudoku, which means there isn't a solution for it.

2. **Does every row in the Sudoku have the same size?**  
   This is important because a Sudoku is a square, which means every Sudoku needs to have the same amount of rows, and the rows need to all have the same amount of numbers in it.  
   We test that by looping over the given array and checking if every sub-array has the same length as the given array:
   ```ts
   sudoku.forEach(line => {
     if (line.length !== sudoku.length) return false;
   });
   ```

After checking these edge cases we can start solving the Sudoku.

First of all, we need to save the size. We need to do that because this function should be able to solve every possible Sudoku in every size.
```ts
const size = sudoku.length;
```

Then we need to create an array where we save the solution. We could just use the given array, but it's bad practice to overwrite a given input, so we copy the given array.
```ts
const solution = sudoku;
```

Because the program will go from point to point in the Sudoku, we need to save the position. The variable `pos` will do that—it saves the program's position.  
Also there is the variable `line` which gets calculated from the variable `pos` every time the program goes one step further (we will see this later). The variable saves the current line in which the program is.
```ts
let pos = 0;
let line = 0;
```

The program also needs to save the new value which gets placed in an empty space. We need to save this in a variable because we will later check if a number can be placed in a certain place, and if not we just count this value up by one. Also, this will later work as an indicator for when we need to backtrack.
```ts
let newValue = 1;
```

The last variable we need is the `oldPositions` array. This array will save all positions where the program added/changed a number. This is important because with this array the program will know where to backtrack when it needs to do that. It starts with `-1` in the first place. When the program reaches this value it knows that this Sudoku isn't solvable.
```ts
let oldPositions = [-1];
```

Now the program starts a `while` loop which looks like this:
```ts
while (!(pos > (size * size) - 1)) { ... }
```
The `while` loop will run until `pos` is bigger than `size * size - 1`.  
Why is that? It's easy: the Sudoku is a square filled with fields. A square always has the same side lengths (`a * a`), so when we want to calculate the amount of fields (its area), we multiply the side by itself. We subtract one because we start at `0`.

The first thing we do in the `while` loop is to calculate the position in the line where the program currently is. We do this by calculating the remainder when dividing the overall position by the size → we use the modulo operator. This works because the size is also the number of columns the Sudoku has. When dividing by this number, the remainder is the exact position in the line.
```ts
const i = pos % size;
```

Then we also need to calculate the line. We do this with the same procedure, but this time we calculate the exact result from this division and floor it. This works for the same reason as above.
```ts
line = Math.floor(pos / size);
```

Next we first check if the current position has an empty space **or** if `newValue` is not `1`.  
We need to check this because we only want to add numbers or change numbers we added. That we only add numbers is checked with the first condition (the current position is empty, i.e. `0`), and that we only change numbers that we added is checked by the second condition.  
We will later see that `newValue` is only reset when we successfully changed/added a value. If we need to backtrack, `newValue` doesn't get reset, so it will be above `1` (and possibly above the legal limit).  
When both conditions fail (we aren’t on an empty space and the program didn’t backtrack), we just add one to the position and the program checks the next position.
```ts
if (solution[line][i] === 0 || newValue !== 1) {
  // try to place or update a value
} else {
  pos++;
}
```

If the program now wants to add a new value or change a value, we get into the `if` block. The first thing we check is if `newValue` isn’t `1`. We do that because then the program backtracked, and `1` can’t be the next possible lowest number.  
When this is true, we set the new value to the current value plus one. We can do this because in the next step the program starts searching for the next lowest possible number and starts with the current `newValue`. So the program will start at the value we set, and it will find the next lowest number.  
In addition to that we also reset the current position to zero. We do this because when the program checks which number could be placed there it uses every number on the board, so we need to remove the old number specifically because we already know that this number cannot be there.
```ts
if (newValue !== 1) newValue = solution[line][i] + 1;
solution[line][i] = 0;
```

Now we start a second loop which searches for the next lowest possible number. This `while` loop looks like this:
```ts
while (!checkIfNumberCanBePlaced(i, newValue, size, line, solution) && newValue <= size) {
  newValue++;
}
```
This loop runs as long as `checkIfNumberCanBePlaced` returns `false` **and** `newValue` is smaller than or equal to `size`.  
The first condition is the primary one here: when it returns `true` we know that we found a number which can be placed. We will see how this function works in a moment.  
The second condition is for the backtracking. The value can’t be infinitely large; it’s only allowed to be as large as `size`. So this condition makes sure this loop won’t run forever. This condition is intentionally `<= size`, so that `newValue` can become bigger than `size` after we increment it and we can then detect that we need to backtrack.

But before we dive into backtracking and everything that happens after this loop, we need to check what this function `checkIfNumberCanBePlaced` is. Like the name says, it checks if a number can be placed or not. The function looks like this:
```ts
function checkIfNumberCanBePlaced(value: number, size: number, posInLine: number, lineNumber: number, lines: number[][]): boolean {
  return checkHorizontal(value, lines[lineNumber])
    && checkVertical(posInLine, value, lines)
    && checkBox(value, size, posInLine, lineNumber, lines);
}
```
We see that this function just combines the results from three other functions. We will look at these in a moment, but first we check the inputs we have.

- `value`: the value that we want to check if it can fit where we want to place it.  
- `size`: in this program the size is variable and we don’t know it.  
- `posInLine` and `lineNumber`: these are the position we check for.  
- `lines`: this is just the current Sudoku which we check for the number.

We will now go through every function that gets called here. All these functions return `true` if the given value can be placed there and `false` if not. These functions represent the three conditions you have in a Sudoku:

1. Each number appears only once in a **horizontal** line.  
2. Each number appears only once in a **vertical** line.  
3. Each number appears only once in a **box** (a box in a Sudoku is a subsquare of size `sqrt(size) * sqrt(size)`).

The first function is `checkHorizontal`:
```ts
function checkHorizontal(num: number, line: number[]): boolean {
  return !line.some(val => val === num);
}
```
This is a really simple function. We only have two inputs, the number and the line where it should get placed. It checks if this line already has the given number. If so it returns `false`; if not, `true`.

The second function is `checkVertical`:
```ts
function checkVertical(posInLine: number, num: number, lines: number[][]): boolean {
  return !lines.some(line => line[posInLine] === num);
}
```
This is also a simple function. We have the position in the line, the number, and the lines. It checks if there is already the given number in any of these lines at `posInLine`. If so it returns `false`; if not, `true`.

The third function is `checkBox`:
```ts
function checkBox(num: number, size: number, posInLine: number, lineNumber: number, lines: number[][]): boolean {
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
```
This is the slightly more complicated function. We now need to check if the number is already in a subsquare (here: **box**). For that we need to calculate certain things:

1. **`boxSize`**: the square root of the given `size`.  
2. **Start line (vertical)**: divide `lineNumber` by `boxSize`, remove any fractional digits with `Math.floor`, then multiply the result by `boxSize`. This gives the first line index of the box.  
3. **Start position in line (horizontal)**: the same as above, but with `posInLine`.

After we calculated these numbers we loop over the subsquare and check if the given number is already there.  
We do this by starting the first loop at `startVertical` (the first line) and the second loop at `startHorizontal` (the first position in line). Both loops run until they each have iterated `boxSize` times—i.e., until they reach `startVertical + boxSize` and `startHorizontal + boxSize`.  
If we find the number, the function returns `false`. If we don’t find it and both loops end, the function returns `true`.

Alright, now we know how `checkIfNumberCanBePlaced` works. Let’s look at the remaining code.

`newValue` is now either the value that can be placed or it’s one over the legal limit (because of the `newValue <= size` condition). This is what we check now.  
If `newValue` is over the limit, we set `pos` to the newest value in our `oldPositions` array. We do this because we need to backtrack to the last changed value, and this array has the last changed value at the top position.  
If now the position is `-1`, we know we reached the start marker of this array (because `-1` is the first number that got put in), and we can return `false`.
```ts
if (newValue > size) {
  pos = oldPositions.pop() as number;
  if (pos === -1) return false;
} else {
  // place the value
}
```

When `newValue` isn’t bigger than `size`, we can add this value to the Sudoku—and we do exactly this.  
We set the value on the Sudoku to the new value, reset `newValue` to `1` (due to our backtracking logic we didn’t do this in the previous step), push this position to our `oldPositions` array, and increase position by one.
```ts
if (newValue > size) {
  // backtrack handled above
} else {
  solution[line][i] = newValue;
  newValue = 1;
  oldPositions.push(pos);
  pos++;
}
```

And when the `while` loop finishes we just return the `solution` array.

-----------

### Information's
This problem is based on the two challenges [Sudoku-Solver](https://www.codingame.com/training/medium/sudoku-solver) and [Mini-sudoku-solver](https://www.codingame.com/training/hard/mini-sudoku-solver) in [Clash Code](https://www.codingame.com).
Some test cases are from these challenges copied.