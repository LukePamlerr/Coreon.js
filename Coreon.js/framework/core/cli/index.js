// This file serves as the entry point for the command-line interface of the framework.
// It initializes the CLI and sets up command handling.

const { Command } = require('commander');
const commands = require('./commands');

const program = new Command();

program
  .version('1.0.0')
  .description('Coreon.js Command Line Interface');

commands.forEach(command => {
  program.command(command.name)
    .description(command.description)
    .action(command.action);
});

program.parse(process.argv);