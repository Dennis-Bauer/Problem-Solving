# Fibonacci Sequence
Create a class which has the following functions:
- `fibonacci(n)` This function should return the calculated Fibonacci number, so that it returns the n'th number in the Sequence
- `next(n?)` This function should calculate the next Fibonacci number and than push it to the Sequence saved in an extra Array. You can call it with an number n, which repeats the progress n times 
- `value` It should contain the last value in the saved Sequence
- `sequence` It should contain the generated Sequence

## Documentation

### What is a Fibonacci Sequence
The **Fibonacci Sequence** is a series of numbers in which each number is the sum of the two preceding ones. It starts with: `0, 1, 1, 2, 3, 5, 8, 13, 21, 34, …`


Formally, it can be defined as:

- F(0) = 0  
- F(1) = 1  
- F(n) = F(n-1) + F(n-2) for n > 1  

------------------------------------------------------------------------

### Solution Idea & [Implementation](./generator.ts)

The first step is to design the `fibonacci(n)` function.  
Once we understand how this works, the other functions can be implemented in the same way.

#### Determining the n-th Value

To determine the n-th value in the Fibonacci Sequence, we start from the beginning and repeatedly calculate the next value until we reach the desired position.  

Each number in the sequence is the sum of the two preceding numbers.  
This means we only need to keep track of two values at a time:
- The **last calculated value**
- The **previous value** before that

When calculating the next number:
1. Add the last and previous values.  
2. Update the variables:
   - The new result becomes the **last value**.
   - The old last value becomes the **previous value**.

This process is repeated until we have calculated the n-th number, which we then return.

#### Applying the Same Principle to Other Functions

The same principle can be applied to the additional functions.  
Here, the `value` variable always represents the most recently calculated number in the sequence.

When `next()` is called:
1. Calculate the next number by adding the last two values.  
2. Update both variables (previous and last).  
3. Append the newly calculated value to the sequence list.  

This way, the sequence grows step by step, and each call to `next()` provides the next Fibonacci number.


------------------------------------------------------------------------


### Information's
This problem is based on the [LeetCode](https://leetcode.com)-Problems [509](https://leetcode.com/problems/fibonacci-number/) and [2648](https://leetcode.com/problems/generate-fibonacci-sequence/). 