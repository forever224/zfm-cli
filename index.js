#!/usr/bin/env node
const { program } = require("commander");
const {version} = require("./package.json")
const commands = require('./lib/commands')
const ora = require('ora')

program.version(version, '-v, -version')
commands()

program.parse(process.argv);



