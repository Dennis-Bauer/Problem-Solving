# Is it the same upside down
Write a function that takes a string on the digits 0, 6, 9 and returns true if the number is the same upside down or false otherwise.


## Documentation

### Solution Idea
To get to a solution, the first thing I did was to clarify what happens when I turn the given number upside down. If we have a string, lets say `"123"` and we would put it upside down, the numbers would be reversed, so the string would look like that: `"321"` (Of course the numbers would be on there Head). When understanding this princaple the last task is to understand what happens to a **6** when we put it on his head, and this is really simple: It becomes a **9**. And when we do the same thing to a **9** it becomes a **6**. The string can also contain a **0**. But because a **0** is symetrical, it don't change when we put it on his head. So we just have to reverse the given string and replace every **6** with a **9** and every **9** with a **6**. The **0** don't have to change at all beacuse, they symitrcal. After that we just check if the strings are now the same. If so, the number is the same updside down. 

To get to a solution, the first thing I did was to think about what really happens when I turn a string upside down. If we take a string, for example `"123"`, and flip it on its head, the digits get reversed, so it would look like `"321"` (of course, the digits themselves are also upside down). Once you understand this principle, the only tricky part is figuring out what happens to certain digits when flipped. A **6** becomes a **9**, and a **9** becomes a **6**. The string can also contain a **0**, but since a **0** is symmetrical, it stays the same when flipped. So in the end, the task is just to reverse the string and swap every **6** with a **9** and every **9** with a **6**. The **0** doesn’t change at all because it’s symmetrical. After doing that, we just check if the transformed string is the same as the original. If it is, then the number stays the same upside down.


### Implementation