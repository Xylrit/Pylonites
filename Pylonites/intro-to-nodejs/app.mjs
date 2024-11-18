import fs from "fs";
import chalk from "chalk";

const message = "Name,Age\nAssh,32";

// fs.writeFileSync("ash.csv", message);

export const writeFile = (fileName, data) => {
  fs.writeFileSync(fileName, data + "\n Signed by: Lex");``
};
