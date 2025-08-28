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

This problem is straightforward because we only need to check three conditions.  
If all conditions are successful, we can return `true`.  

Steps to validate:  

1. Check if the string starts with `#`.  
2. Ensure the string length is exactly **7 characters**.  
3. Verify that every character after `#` is either:
   - A digit `0–9`, or  
   - A letter `a–f` (case-insensitive).  

If all three checks pass, the given string is a valid Hex-Code.

------------------------------------------------------------------------

### [Implementation](./solver.ts)

For the implementation, we just check for these conditions:

1. **Check if the given string is 7 characters long**  
   (1 `#` at the beginning and 6 characters after that)  
   ```ts
   string.length === 7
   ```

2. **Check if the string starts with `#`**  
   ```ts
   string.startsWith("#")
   ```

3. **Check if the string only contains letters from `a–f` and digits**  
   We use the `replaceAll` method with a [Regex](https://en.wikipedia.org/wiki/Regular_expression).  
   If we replace every digit and letter from `a–f` with nothing, and the result is only `#`,  
   then the string contained only allowed symbols.  
   ```ts
   string.replaceAll(/[a-fA-F0-9]/g, "") === "#"
   ```

---

When all these conditions are true, the string is a valid Hex-Code.  
Putting everything together:

```ts
return string.length === 7 && 
  string.startsWith("#") && 
  string.replaceAll(/[a-fA-F0-9]/g, "") === "#";
```



------------------------------------------------------------------------

### Information's
This problem comes from the newsletter [Sloth Bytes](https://slothbytes.beehiiv.com). 
[Post](https://slothbytes.beehiiv.com/p/two-factor-codes) from August 26, 2025.