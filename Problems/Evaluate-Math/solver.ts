const WrongFormatError = "The given equation has a wrong format!";

export default function evaluateEquation(equation: string): number {
	// Format checking
	if (!equation) return 0;
	if (!/^[ \-+./*()0-9]*$/.test(equation))
		throw new Error("The given equation contains elements which are not allowed!");

	// Solving

	// Negativ Brackets
	while (/-\(/.test(equation)) {
		const i = equation.indexOf("-(");

		equation = `${equation.substring(0, i)}-1 * ${equation.substring(i + 1)}`;
	}

	// Brackets
	while (/\(/.test(equation)) {
		if (!/\)/.test(equation)) throw new Error(WrongFormatError);

		const firstIndex = equation.indexOf("(");
		const lastIndex = findCloseBracketIndex(equation, firstIndex);

		if (lastIndex < firstIndex || lastIndex < 0) throw new Error(WrongFormatError);

		equation = `${equation.substring(0, firstIndex)}${evaluateEquation(equation.substring(firstIndex + 1, lastIndex))}${lastIndex === equation.length - 1 ? "" : equation.substring(lastIndex + 1)}`;
	}

	// Multiplikation
	while (/\*/.test(equation)) {
		equation = calculateFirstSubEquationFromOperator(equation, "*");
	}

	// Division
	while (/\//.test(equation)) {
		equation = calculateFirstSubEquationFromOperator(equation, "/");
	}

	// Subtraktion
	while (/-/.test(equation)) {
		let pos = equation.indexOf("-");
		while (pos < equation.length - 2 && equation[pos + 1] !== " " && pos !== -1) {
			const newPos = equation.indexOf("-", pos + 1);

			if (newPos === pos) break;
			pos = newPos;
		}

		if (equation[pos + 1] !== " ") break;

		equation = calculateFirstSubEquationFromOperator(equation, "-", pos);
	}

	// Addition
	while (/\+/.test(equation)) {
		equation = calculateFirstSubEquationFromOperator(equation, "+");
	}

	const solution = Number(equation);

	if (Number.isNaN(solution)) throw new Error(WrongFormatError);

	return solution;
}

function calculateFirstSubEquationFromOperator(equation: string, operation: "*" | "+" | "/" | "-", index = -1) {
	const operatorPos = index === -1 ? equation.indexOf(operation) : index;
	const { first, last } = getOperationIndices(equation, operatorPos);

	return `${equation.substring(0, first)}${calculateSingle(equation.substring(first, last + 1))}${equation.substring(last + 1)}`;
}

function calculateSingle(calculation: string): number {
	const calc = calculation.trim();

	const [strA, operator, strB] = calc.split(" ");

	const a = Number(strA);
	const b = Number(strB);

	switch (operator) {
		case "*":
			return a * b;
		case "/":
			return a / b;
		case "+":
			return a + b;
		case "-":
			return a - b;
		default:
			throw new Error("Unsupported operator!");
	}
}

function getOperationIndices(equation: string, operatorPos: number): { first: number; last: number } {
	const result = { first: -1, last: -1 };

	for (let i = operatorPos - 2; i >= 0; i--) {
		if (equation[i] === " " || i === 0) {
			result.first = i === 0 ? 0 : i + 1;
			break;
		}
	}

	for (let i = operatorPos + 2; i < equation.length; i++) {
		if (equation[i] === " " || i === equation.length - 1) {
			result.last = i === equation.length - 1 ? equation.length - 1 : i - 1;
			break;
		}
	}

	return result;
}

function findCloseBracketIndex(equation: string, startIndex = 0) {
	let count = 0;
	for (let i = startIndex + 1; i < equation.length; i++) {
		if (equation[i] === ")") {
			if (count === 0) return i;
			else count--;
		} else if (equation[i] === "(") {
			count++;
		}
	}
	return -1;
}
