# Evaluating Simple Algebra
Given a string containing an algebraic equation, calculate and return the value of x.
You'll only be given equations for simple addition and subtraction.

## Documentation

### Solution Idea

The given equation just needs to be split into its different parts (first number, operator, second number, result). From there, the program checks where the x is and what the operator is. Then the following steps must be executed:

- If the operator is `+`, return the result minus the number that isn’t x.
- If the operator is `-` and the first number is unknown, return the result plus the other number.
- If the operator is `-` and the second number is unknown, return the result minus the other number.

------------------------------------------------------------------------

### [Implementation](./solver.ts)

The function evaluates simple algebra equations of the form:

[number or x] [operator] [number or x] = [result]

The function first validates the input to ensure that only allowed characters are used. After validation, the expression is split into its components: the first number, the operator, the second number, and the result.

The function ensures that the result is never x, because the unknown value must be on the left side of the equation. If x appears in the result position, an error is thrown.

The result value is then converted into a number so that calculations can be performed.

If the first value is x, the function checks whether the operator is + or -. For +, it subtracts the second number from the result. For -, it adds the second number to the result.

If the second value is x, the function performs similar checks. With a + operator, it subtracts the first number from the result. With a - operator, it subtracts the result from the first number.

If neither the first nor the second value is x, the function throws an error because there is no unknown value to solve.

------------------------------------------------------------------------

### Information's 
This problem comes from the newsletter [Sloth Bytes](https://slothbytes.beehiiv.com). 
[Post](https://slothbytes.beehiiv.com/p/certifications-or-projects) from September 09, 2025.