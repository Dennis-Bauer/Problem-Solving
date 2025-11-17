export default function evaluatingSimpleAlgebra(task: string): number {
	if (!/^[0-9+\-=x ]+$/.test(task))
		throw Error("The given equation contains elements which are not allowed!");

	const [firstNumber, operator, secondNumber, , r] = task
		.toLowerCase()
		.split(" ");

	if (!(operator === "+" || operator === "-"))
		throw Error(
			"The given equation does not contain an valid operator ('+' and '-')!",
		);

	const result = Number(r);

	if (firstNumber === "x") {
		const sNumber = Number(secondNumber);
		if (operator === "+") return result - sNumber;
		
    return result + sNumber;
	} else if (secondNumber === "x") {
		const fNumber = Number(firstNumber);
		if (operator === "+") return result - fNumber;
	
    return fNumber - result;
	} else
		throw Error(
			"The given equation does not contain an x as the first or second number!",
		);

}
