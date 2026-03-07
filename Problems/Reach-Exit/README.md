# Reach Exit

Your given a 2D maze and you need to check if it is possible to reach the exit.

## Infos which are maybe needed

Each cell is one of the following symbols:

- `.` Empty space (Can walk here)
- `#` wall (Can not walk here)
- `@` start position
- `E` exit

You can only move up, left, right, down

## Documentation

### Solution Idea

Start at the given position and explore **all possible directions** from there.

For each new position:

- check whether it is the goal
- if it is not the goal, continue exploring from that position in **all possible directions**
- do **not** visit positions that have already been visited

Repeat this process until:

- the goal is found → return `true`
- there are no more positions left to explore → return `false`

---

### [Implementation](./solver.ts)

The program first validates the given input.
If the input is valid, it searches for the start position in the maze.

Once the start position is found, the program calls the `move` function with this position.
This function determines whether the end of the maze is reachable.

The `move` function works recursively:

1. It first checks whether the current position is the end position.
   - If this is the case, the function returns true.

2. If the current position is not the end, the function checks all possible directions.

3. For each direction, the program verifies that:
   - the position is inside the maze,
   - the position has not been visited yet,
   - the position is not a wall.

4. If all conditions are satisfied, the function calls itself recursively with the new position.

By doing this, the algorithm explores all reachable positions in the maze.
If one of the recursive calls reaches the end position, the function returns true.

If all possible paths have been explored and none reach the end, the function returns false.

---

### Information's

This problem comes from the newsletter [Sloth Bytes](https://slothbytes.beehiiv.com).
[Post](https://slothbytes.beehiiv.com/p/your-projects-probably-suck) from November 12, 2025.
