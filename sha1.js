"use strict";

let sha1 = require("sha1");
let program = require("commander");

program.version("0.5.0")
    .command("sha1 <value>")
    .usage("<some string>")
    .action((value) => {
        console.log(sha1(value));
    });

program.parse(process.argv);
