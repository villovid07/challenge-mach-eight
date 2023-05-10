import { Result } from "./interfaces/result";

/**
 * This function allows to get all the pair of numbers which sum gives a given value
 * @param arrayNumbers Array of numbers to test
 * @param objNumber Number to get in the sum
 * @returns
 */
export function findOperators(arrayNumbers: number[], objNumber: number): Result[] {
  // find all the couple of numbers who sum the objNumber
  let couples: Result[] = [];
  let visitedIndex: number[] = [];

  for (let idx in arrayNumbers) {
    if (visitedIndex.indexOf(Number(idx)) >= 0) {
      continue;
    }

    let aux = Number(idx) + 1;
    if (aux <= arrayNumbers.length) {
      let newArray = arrayNumbers.slice(aux);
      let element = newArray.find((item) => item + arrayNumbers[idx] == objNumber);
      if (element) {
        couples = [...couples, { first: arrayNumbers[idx], second: element }];
        let orIdx = arrayNumbers.findIndex((ior) => ior == element);
        visitedIndex = [...visitedIndex, orIdx];
      }
    }
  }
  return couples;
}
