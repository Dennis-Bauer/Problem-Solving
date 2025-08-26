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

-----------

### Information's
This problem is based on the two challenges [Sudoku-Solver](https://www.codingame.com/training/medium/sudoku-solver) and [Mini-sudoku-solver](https://www.codingame.com/training/hard/mini-sudoku-solver) in [Clash Code](https://www.codingame.com).
Some test cases are from these challenges copied.