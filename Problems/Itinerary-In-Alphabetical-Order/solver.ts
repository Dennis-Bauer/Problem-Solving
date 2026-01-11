interface Ticket {
	start: string;
	end: string;
}

export default function findPath(tickets: Ticket[]): string[] {
	if (tickets.length <= 0) throw new Error("It's not possible to find a path when no tickets are given!");

	const path = findTicketPath("A", tickets, ["A"]);

	if (path.length <= 1) throw new Error("No start Ticket was given (Ticket with start = 'A'");

	return path;
}

function findTicketPath(currentStation: string, remainingTickets: Ticket[], currentPath: string[]): string[] {
	let nextTicket = null;
	for (const ticket of remainingTickets) {
		if (ticket.start === currentStation) {
			if (nextTicket === null) nextTicket = ticket;
			else if (ticket.end < nextTicket.end) nextTicket = ticket;
		}
	}

	if (nextTicket === null) return currentPath;

	// Remove nextTicket from remainingTickets
	remainingTickets.splice(remainingTickets.indexOf(nextTicket), 1);

	// Add new Destation to currentPath
	currentPath.push(nextTicket.end);

	return findTicketPath(nextTicket.end, remainingTickets, currentPath);
}
