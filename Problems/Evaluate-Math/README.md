# Evaluate Math

Given a Math-Equation, return the result. The program needs to accept brackets, addition, subtraktion, multiplication and division.

## Infos which are maybe needed

In the program and here I will call the `expression` `equation`. This isn't complete wrong, but `expression` would be better.
All the symbols in the equation are sepreated with blank spaces, expect a symbol after an opening breakit and before an close breakit.

## Documentation

### Solution Idea

The idea is really simple. I will break the equation simply in small equations and solve the small ones. By "small ones" I mean an operation with one operator and two numbers.
To solve these, I will just parse the numbers and then will do the operation given by the operator. To solve it correctly, the only thing that needs to be watched out for is the order I do it in. First the brackets, then division, multiplication, subtraction, and addition.
After that there should be one number left, which will be the solution.

---

### [Implementation](./solver.ts)

The first thing that needs to be done is to check if the given equation is correct. This can be simply tested by a regex. If this regex finds symbols, which aren't allowed, the program throws an error.

After that, the program will then change negative brackets to a multiplication operation. This means an operation like `-(1 + 1) ` gets replaced with. `-1 * (1 + 1)` This will later make it easier to calculate.

Replacing all these is simply done by having a while loop, which loops as long as there is this `-(` symbol combination in the equation. When there is such a combination, the `-` part gets simply replaced by `-1 * `. After the while loop is finished, all negative brackets are resolved.

Now the program will proceed with solving the brackets. This is done by, again, a while loop, which loops as long as there is an `(` open bracket in the equation. If there is an open bracket, the index of this bracket is saved. Now the hard part is to find the closing bracket that belongs to this opening one. This is done by looping over the equation, starting by the opening bracket. For every new open bracket, a count variable gets increased. For every closing bracket, the count variable gets decreased. When the count variable is zero on a closing bracket, the program finds the corresponding bracket and saves the index of that bracket. If it reaches the end of the equation without finding the correct bracket, it will throw an error.

Now, the program knows where the bracket section starts and ends. This "under-section," or sub-equation, will now be replaced by the solution of it. How to find the solution? The program will just call the function it's currently in with the sub-equation as input.

Now, after all brackets are resolved, the program continues with solving every division first.

There is again a while loop, which will loop as long as there is a `/` in the equation. When there is a `/` in the equation, it will get the index of the first one found and parse the number on the left and right of it. The parsing works by going from the operator to the left/right until it reaches the end or an empty space. Everything will be separated with an empty space, so this will perfectly work and will also include `.` or `-`. Now that the two numbers are found, it will do the operation and replace the whole operation with the solution.

After the division loop has ended, the multiplication loop will start. This loop works exactly the same, except it searches for a `*`.

Now, the program continues with subtraction. This now works exactly the same as before, only here the while loop works a bit different. The problem is, it can't just run as long as it finds a `-` because there can be negative numbers, which then will cause an infinite loop. This means when finding a `-`-symbol, it needs to check if it's an operator. How is it doing this? It just checks if it is surrounded by empty spaces; if yes, it's an operator. After finding the position of the next `-` operator, it works exactly the same as the others.

After that, the program will do the last operation, addition. This again works exactly the same as before.

At last, the equation should now be only one number, which will get passed to a real number. If this is not working, an error gets thrown; if the parsing worked, the number gets returned.

(I'm sorry, the explanation is really bad. I'm a bit lazy and didn't want to write it, but now I did it. I could have let AI write it, but this isn't the point, right?)

---

### Information's

This problem comes from the game [Code Trainer](https://store.steampowered.com/app/3279360/Code_Trainer/), which you can buy via steam. It's there listed as an **Expert** level, which is the hardest possible level.
