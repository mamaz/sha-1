#!/usr/bin/env node

"use strict";

let sha1 = require("sha1");
let program = require("commander");

program.version("0.5.0")
    .arguments("<string>")
    .option("-n, --number <number>", "Limit to first n number")
    .action((string, options) => {
        let number = options.number; 
        if(number){
            let substr = sha1(string).substring(0, number);
            console.log(substr);
        }
        else 
            console.log(sha1(string));
    });

program.parse(process.argv);
