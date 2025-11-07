#!/usr/bin/node
// Script that prints a message depending on the number of arguments

const args = process.argv.slice(2); // Get all command-line arguments except node and file path

if (args.length === 0) {
  console.log("No argument");
} else if (args.length === 1) {
  console.log("Argument found");
} else {
  console.log("Arguments found");
}
