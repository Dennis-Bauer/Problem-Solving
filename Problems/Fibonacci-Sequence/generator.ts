export default class Fibonacci {

  private lastValue: number | null = null;
  private value: number | null = null;
  private sequence: number[] = [];

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

  next(n: number = 1) {

    if (this.value === null) {
      this.value = 0;

      this.sequence.push(0);
      return;
    }

    if (this.lastValue === null) {
      this.lastValue = this.value;
      this.value = 1;

      this.sequence.push(1);
      return;
    }

    for (let i = 0; i < n; i++) {
      let temp: number = this.value;
      this.value = this.value + this.lastValue!;
      this.lastValue = temp;

      this.sequence.push(this.value);
    }
  }

  getValue(): number | null {
    return this.value;
  }

  getSequence(): number[] {
    return this.sequence;
  }
}