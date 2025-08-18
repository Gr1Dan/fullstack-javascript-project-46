#!/usr/bin/env node
import genDiff from "../src/index.js";
import { Command } from "commander";


const program = new Command();

program
    .option(`-V, --version`, `output the version number`)
    .option(`-f, --format [type]`, `output format`)
    .option(`-h, --help`, `displays help for command`)
    .argument('<filepath1>', 'path to file1')
    .argument('<filepath2>', 'path to file2')
    .action((file1, file2) => genDiff(file1, file2));


program.parse()