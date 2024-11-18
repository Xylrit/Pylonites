import chalk from "chalk";
import _ from "lodash";

export const showUniqueArrayWithBg = (array = []) => {
  const uniqueArray = _.uniq(array);

  console.log(chalk.bgBlue.bold(uniqueArray));
};

export const arraySum = (array = []) => {
  return array.reduce((a, b) => {
    return a + b;
  });
};
