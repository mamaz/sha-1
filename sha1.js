#!/usr/bin/env node

"use strict";

let sha1 = require("sha1");
let program = require("commander");

program.version("0.5.0")
    .arguments("<string>")
    .action((string) => {
        console.log(sha1(string));
    });

program.parse(process.argv);
