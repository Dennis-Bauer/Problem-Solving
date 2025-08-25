export default class Fibonacci {

  value: number = 0;
  sequence: number[] = [];

  constructor() {};

  static fibonacci(n: number): number {
    if (n <= 1) return 0;

    let temp = 0;
    let numberOne: number = 0;
    let numberTwo: number = 1;

    for (let i = 0; i < n - 2; i++) {
      temp = numberTwo;
      numberTwo = numberOne + numberTwo;
      numberOne = temp;
    }

    return numberTwo;
  }

  next(n?: number) {

  }

}