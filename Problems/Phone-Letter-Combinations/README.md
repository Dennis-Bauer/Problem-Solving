# Phone number Letter Combinations

Given a string of digits (from '2' to '9'), return all possible letter combinations that the digits could represent, using the mapping on a telephone keypad:

![keypad](https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,format=auto,onerror=redirect,quality=80/uploads/asset/file/84268104-74e5-49a9-9444-fb816b039d1e/Telephone-keypad2.svg.png?t=1759815001)

## Documentation

### Solution Idea

The idea is to have a map with keys for every possible digit (0–9). The value for each key is an array of the possible letters for that digit.
The function first takes the first digit of the given number and then gets the possible letters for that digit.
After that, it starts a loop over all possible digits and calls it itself in that loop, but only if the input still has more than one digit. When calling itself, it passes the given number without the first digit as the new input and also passes a string that contains the current letter combination (Build with the given input plus the current letter added to that).
When the input has only one digit left, the given addon and the current letter (from the possible letters loop) are combined and pushed into an array, which is then returned.

## With that it will eventually return all possible letter combination because at some point the number is only on digit long due to the removing.

### Information's

This problem comes from the newsletter [Sloth Bytes](https://slothbytes.beehiiv.com).
[Post](https://slothbytes.beehiiv.com/p/message-queues) from October 7, 2025.
