# Find the Itinerary in Alphabetical Order

You are given a list of airline tickets, where each ticket is a pair [from, to] representing a flight from one airport to another.

Your task is to reconstruct the complete travel route in the correct order.
All trips start from airport "A".

If there are multiple possible routes, return the one that comes first in alphabetical order (when read as a single string).

## Documentation

### Solution Idea

The idea is, to have a function, which takes a start destination, a ticket array and a path as input.
Now, it searches for a ticket that starts at the start destination. If there are more, it takes the one with the lower alphabetic value.
When found a ticket, the end destination from that ticket gets added to the current path and the ticket gets removed from the ticket array. When the ticket array now still has ticket init, the function calls it self with the updated values but now starts at the end destination from the found ticket.
If no ticket was found or the ticket array is empty, the path just gets returned.

### [Implementation](./solver.ts)

---

### Information's

This problem comes from the newsletter [Sloth Bytes](https://slothbytes.beehiiv.com).
[Post](https://slothbytes.beehiiv.com/p/webhooks) from October 16, 2025.
