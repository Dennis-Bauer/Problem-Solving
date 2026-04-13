# Seven-Boom

Create a function that takes an array of numbers and for every 7 found, add one "Boom!" to your result. If no 7 is found anywhere, return "there is no 7 in the array".

## Infos which are maybe needed

If e.g there is a `77` in the array, the count of 7's needs to increase by two.

## Documentation

### Solution Idea

First, combine all numbers into a single string.  
Then count how many times the digit `"7"` appears in that string.

- If the count is `0`, return that there is no `"7"`.
- If the count is greater than `0`, return `"Boom!"` repeated as many times as the digit `"7"` appears.

---

### [Implementation](./solver.ts)

First, the array is joined into a single string using `array.join("")`.  
Then we split the string again with `split("")`, which results in an array containing every single digit.

Next, we use `reduce` to count how many times the digit `"7"` appears.  
The reducer keeps track of the current count of sevens.

If the current value is `"7"`, we increase the counter by 1.  
Otherwise, we return the counter unchanged.

Example reducer:

.reduce((count, current) => (current === "7" ? count + 1 : count), 0)

After this step, we have the total number of `"7"` digits stored in `sevenCount`.

Finally, we check the value of this counter:

- If it is `0`, we return the message that there is no `"7"`.
- If it is greater than `0`, we return `"Boom!"` repeated `sevenCount` times using:

`"Boom! ".repeat(sevenCount).trim();`

---

### Information's

This problem comes from the newsletter [Sloth Bytes](https://slothbytes.beehiiv.com).
[Post](https://slothbytes.beehiiv.com/p/how-does-google-maps-find-the-fastest-route) from February 25, 2026.
