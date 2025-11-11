import { describe, it, expect } from 'vitest'
import quadratischPraktischGruen from './solver'

describe("Quadratisch-Praktisch-Grün", () => {

  const solutionTestOne = {
    areaGarden: 2772, 
    miniGardenPerHeight: 4, 
    miniGardenPerWidth: 6, 
    miniGarden: {
      amount: 24, 
      height: 10.50, 
      width: 11, 
      area: 115.5
    }
  }

  it("should return the correct solution for these values: 23 ppl, 42*66", () => {
    expect(quadratischPraktischGruen(23, 42, 66)).toEqual(solutionTestOne);
  });

  const solutionTestTwo = {
    areaGarden: 180, 
    miniGardenPerHeight: 5, 
    miniGardenPerWidth: 4, 
    miniGarden: {
      amount: 20, 
      height: 3, 
      width: 3, 
      area: 9
    }
  }

  it("should return the correct solution for these values: 19 ppl, 15*12", () => {
    expect(quadratischPraktischGruen(19, 15, 12)).toEqual(solutionTestTwo);
  });

  const solutionTestThree = {
    areaGarden: 4235, 
    miniGardenPerHeight: 6, 
    miniGardenPerWidth: 6, 
    miniGarden: {
      amount: 36, 
      height: 9.17, 
      width: 12.83, 
      area: 117.65
    }
  }

  it("should return the correct solution for these values: 36 ppl, 55*77", () => {
    expect(quadratischPraktischGruen(36, 55, 77)).toEqual(solutionTestThree);
  });

  const solutionTestFour = {
    areaGarden: 225, 
    miniGardenPerHeight: 11, 
    miniGardenPerWidth: 10, 
    miniGarden: {
      amount: 110, 
      height: 1.36, 
      width: 1.5, 
      area: 2.04
    }
  }

  it("should return the correct solution for these values: 101 ppl, 15*15", () => {
    expect(quadratischPraktischGruen(101, 15, 15)).toEqual(solutionTestFour);
  });

  const solutionTestFive = {
    areaGarden: 74000, 
    miniGardenPerHeight: 5, 
    miniGardenPerWidth: 264, 
    miniGarden: {
      amount: 1320, 
      height: 7.4, 
      width: 7.58, 
      area: 56.09
    }
  }

  it("should return the correct solution for these values: 1200 ppl, 37*2000", () => {
    expect(quadratischPraktischGruen(1200, 37, 2000)).toEqual(solutionTestFive);
  });

  const solutionTestSix = {
    areaGarden: 342005, 
    miniGardenPerHeight: 120, 
    miniGardenPerWidth: 308, 
    miniGarden: {
      amount: 36960, 
      height: 3.04, 
      width: 3.04, 
      area: 9.24
    }
  }

  it("should return the correct solution for these values: 35000 ppl, 365*937", () => {
    expect(quadratischPraktischGruen(35000, 365, 937)).toEqual(solutionTestSix);
  }); 

  it("should throw an error for these wrong values: -1 ppl, 5*1", () => {
    expect(() => quadratischPraktischGruen(-1, 5, 0)).toThrowError("Invalid customer input: Please enter a positive whole number greater than 0.")
  });

  it("should throw an error for these wrong values: 2.5 ppl, 5*1", () => {
    expect(() => quadratischPraktischGruen(2.5, 5, 1)).toThrowError("Invalid customer input: Please enter a positive whole number greater than 0.")
  });

  it("should throw an error for these wrong values: 1 ppl, 5*0", () => {
    expect(() => quadratischPraktischGruen(1, 5, 0)).toThrowError("Invalid garden size: Both height and width must be numbers greater than 0.")
  });

  const solutionTestEleven = {
    areaGarden: 25, 
    miniGardenPerHeight: 5, 
    miniGardenPerWidth: 1, 
    miniGarden: {
      amount: 5, 
      height: 1, 
      width: 5, 
      area: 5
    }
  }

  it("should return the correct solution for these values: 5 ppl, 5*5", () => {
    expect(quadratischPraktischGruen(5, 5, 5)).toEqual(solutionTestEleven);
  }); 
})