# Sleep Time

You're setting an alarm for the next morning and know how long you want to sleep. The job is to figure out what time you need to go to bed to get that amount of sleep.

Return the time when you should go to bed in the 24-hour-format ("HH:MM")

## Documentation

### Solution Idea

The Idea is to subtract the duration you want to sleep from the time you want to wake up. If you now don't have any negativ values, this is the solution.
If any of the values are negativ, start with the minutes. We now add the negativ minute value from 60 and have with that the minute when we need to go to bed. If we did this we also need to subtract one from the hour value.
Now we check if the hour value is negativ. If yes, we add this value to 24. These values are now our solution.

---

### [Implementation](./solver.ts)

---

### Information's

This problem comes from the newsletter [Sloth Bytes](https://slothbytes.beehiiv.com).
[Post](https://slothbytes.beehiiv.com/p/the-command-line-for-dummies) from November 5, 2025.
