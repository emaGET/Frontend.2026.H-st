import chalk from "chalk";
import { readFile } from "node:fs/promises";

const text = await readFile("input.txt", "utf8");
const words = text.split(" ");
const wordCount = words.length;

const appName = "Weather Report";

console.log(chalk.blue(`${appName} is now running.`));
console.log(chalk.green.bold("Weather forecasting completed!"));

console.log(text);

console.log(`Number of words: ${wordCount}`)