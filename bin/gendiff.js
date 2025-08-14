#!/usr/bin/env node

import { Command } from "commander";

const program = new Command();
program
    .option("-V, --version", "output the version number")
    .option("-h, --help", "displays help for command")
