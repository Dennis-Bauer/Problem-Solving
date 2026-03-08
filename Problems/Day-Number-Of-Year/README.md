# Day-Number-Of-Year

You’re given a date string in the format month/day/year, based on the Gregorian calendar. Your task is to return which day of the year that date corresponds to (1–365, or 1–366 for leap years).

## Infos which are maybe needed

`January`, `March`, `May`, `July`, `August`, `October`, `December` are the months which have 31 days. `April`, `June`, `September`, `November` are the months which have 30 days. February has 28 days and in a leap year it has 29 days. Leap year is a year which divides by 4 but not 100 unless also divisible by 400.

## Documentation

### Solution Idea

The idea is to use a counter variable that counts the total number of days.

The counter starts with the number of days that have passed in the current month.  
Then, a loop iterates over every month before the current month and adds the number of days each of those months had.

After the loop finishes, the counter contains the total number of days that have passed since the beginning of the year.

---

### [Implementation](./solver.ts)

First, we check whether the given day is between 1 and 31.  
After that, we determine whether the given year is a leap year.

To do this, we check if the year is divisible by 4 but not by 100.  
If this condition is not met, we additionally check whether the year is divisible by 400.  
With these checks we can determine whether the given year is a leap year.

Next, we use a switch case to verify that the given month has a valid number of days.  
For example, if the month is January, the day must not be greater than 31.

If the date is valid, we create a day counter that starts with the given day.

Then we start a loop that runs from `month - 1` down to `1`.  
For each month, we add the number of days that month has to the counter.

This is determined as follows:

- We keep a list of months that have 30 days.
- We keep another list of months that have 31 days.
- For February, we check whether the year is a leap year.
  - If it is a leap year, we add 29 days.
  - Otherwise, we add 28 days.

At the end we return the day counter.

---

### Information's

This problem comes from the newsletter [Sloth Bytes](https://slothbytes.beehiiv.com).
[Post](https://slothbytes.beehiiv.com/p/being-wrong-is-your-job) from December 02, 2025.
