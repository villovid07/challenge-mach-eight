import { findOperators } from "./findOperators";

import { prompt } from "inquirer";

// Create a prompt module

const questions = [
  {
    type: "input",
    name: "array",
    message: "Please give me a set of numbers separated by ','",
  },
  {
    type: "input",
    name: "numberObj",
    message: "Now, give me the number to test",
  },
];

const main = () => {
  prompt(questions).then((answers) => {
    console.log(`Hi ${answers.array}!`);
    console.log(`Hi ${answers.numberObj}!`);
    const arrNumbers = answers.array.split(",").map((item: string) => Number(item));

    console.log(arrNumbers, answers.numberObj);

    const result = findOperators(arrNumbers, Number(answers.numberObj));

    if (result.length > 0) {
      console.log(`These are the pair of numbers that sum are equal to ${answers.numberObj}`);
      console.log(`----------------------------------------------------------------`);
      for (let obj of result) {
        console.log(`* ${obj.first} , ${obj.second}`);
      }
    } else {
      console.log(`There are any coincidences`);
    }
  });
};

main();

/**/
