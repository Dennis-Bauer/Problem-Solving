# Can you exit the maze

You are given a 2D matrix representing a maze, where 0 is a walkable path and 1 is a wall.
You start at the top-left corner and you have to reach the bottom-right corner.
Write a function that returns true if a path exists.
The only moves which are allowed are up, down, left and right **NOT DIAGONALLY**

## Documentation

### Solution Idea

The idea is to first check whether there is a zero in the bottom-right corner. If not, that corner can’t be reached. Then we check the top-left corner if there is no zero there, we can’t even start.

If both corners contain a zero, the algorithm can begin. It works by moving in any direction where a zero is available, as long as there is an undiscovered zero to move to. If it eventually reaches the bottom-right corner, it returns true.
If it reaches a point where no further moves are possible, it returns false.

---

### [Implementation](./solver.ts)

First, the function checks whether the maze has the correct dimensions. This means it verifies that every row in the maze has the same length. If that’s the case, the algorithm can continue.

The it checks if there is a zero in the top left and in the bottom right corner. If so, the algorithm continues to.

Then a recursive function starts at the top-left corner and calls itself in every direction where a zero is found. With each call, it passes along an additional array that contains all positions the current path has already visited.

The function only returns true if a subsequent call returns true or the current position is the bottom-left corner. It returns false if there is no direction left to move to.

With this approach, the algorithm explores every possible path until it either finds a valid route to the bottom-left corner or has walked through every reachable position.

---

### Information's

This problem comes from the newsletter [Sloth Bytes](https://slothbytes.beehiiv.com).
[Post](https://slothbytes.beehiiv.com/p/profilers) from September 23, 2025.
