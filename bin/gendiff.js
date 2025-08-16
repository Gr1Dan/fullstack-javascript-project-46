#!/usr/bin/env node

import { Command } from "commander";


const program = new Command();

program
    .option(`-V, --version`, `output the version number`)
    .option(`-f, --format [type]`, `output format`)
    .option(`-h, --help`, `displays help for command`)
    .argument('<filepath1>', 'path to file1')
    .argument('<filepath2>', 'path to file2')


program.parse()