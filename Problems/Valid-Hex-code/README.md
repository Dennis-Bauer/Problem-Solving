# Is it a Valid Hex-Code
Write a function that determines whether a string is a valid hex code or not.

## What is a Hex-Code?

A **Hex-Code** is a code that represents a color value.  
How exactly this works is not important here—we only want to know if a given string is a valid Hex-Code.

### Structure of a Hex-Code

A valid Hex-Code must follow these rules:

1. **Start with `#`**  
   The code always begins with a `#`.

2. **Contain exactly 6 characters after `#`**  
   These characters represent the color value.

3. **Use only allowed characters**  
   Each character must be:
   - A digit from `0–9`, or  
   - A letter from `a–f` (case-insensitive, so both uppercase and lowercase are valid).  

## Documentation

### Solution Idea


------------------------------------------------------------------------

### [Implementation](./solver.ts)


------------------------------------------------------------------------

### Information's
This problem comes from the newsletter [Sloth Bytes](https://slothbytes.beehiiv.com). 
[Post](https://slothbytes.beehiiv.com/p/two-factor-codes) from August 26, 2025.