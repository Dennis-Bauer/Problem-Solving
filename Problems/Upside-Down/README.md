# Is it the same upside down
Write a function that takes a string on the digits 0, 6, 9 and returns true if the number is the same upside down or false otherwise.


## Documentation

### Solution Idea
To get to a solution, the first thing I did was to think about what really happens when I turn a string upside down. If we take a string, for example `"123"`, and flip it on its head, the digits get reversed, so it would look like `"321"` (of course, the digits themselves are also upside down). Once you understand this principle, the only tricky part is figuring out what happens to certain digits when flipped. A **6** becomes a **9**, and a **9** becomes a **6**. The string can also contain a **0**, but since a **0** is symmetrical, it stays the same when flipped. So in the end, the task is just to reverse the string and swap every **6** with a **9** and every **9** with a **6**. The **0** doesn’t change at all because it’s symmetrical. After doing that, we just check if the transformed string is the same as the original. If it is, then the number stays the same upside down.

------------------------------------------------------------------------

### [Implementation](./solver.ts)
The implementation is not very complicated due to the simplicity of the
task.

We have a function that takes a string as input and checks if it remains
the same after flipping it upside down. This function returns `true` or
`false`.

``` typescript
function sameUpsideDown(string: string): boolean {...}
```

------------------------------------------------------------------------

#### Step 1: Validate Input

To prevent any errors, we first check if the given string contains only
the digits `0`, `6`, and `9`.
We do this by splitting the string into an array of characters. Then we
loop through this array and verify that each element is included in a
predefined list of valid values (in our case `["0", "6", "9"]`).

If we find an element that is not in this list, the function immediately
returns `false`, because it is not designed to recognize any other
symbols.

``` typescript
if (string.split("").some(char => !["0","6","9"].includes(char))) return false;
```

------------------------------------------------------------------------

#### Step 2: Flip the String

Now comes the important part: flipping the string.\
We achieve this by first splitting the string into an array and then
reversing it. This simulates the effect of turning the string upside
down.

Next, we loop over the reversed array and replace every **6** with a
**9**, and every **9** with a **6**. All other symbols (in this case
only **0**) remain unchanged.

``` typescript
return string === string.split("").reverse().map(char => char === "6" ? "9" : char === "9" ? "6" : char).join("");
```

------------------------------------------------------------------------

#### Result

This allows us to determine whether a string containing only `0`, `6`,
and `9` looks the same after being flipped upside down.
