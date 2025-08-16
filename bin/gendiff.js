#!/usr/bin/env node

import { Command } from "commander";

const program = new Command();

program
    .option(`-V, --version`, `output the version number`)
    .option(`-f, --format [type]`, `output format`)
    .option(`-h, --help`, `displays help for command`);

program.parse();

const options = program.opts();

if (options.help) {
    const textHelp = `Usage: gendiff [options]

Compares two configuration files and shows a difference.

Options:
  -V, --version        output the version number
  -f, --format [type]  output format
  -h, --help           output usage information`;
    
    console.log(textHelp);
}
