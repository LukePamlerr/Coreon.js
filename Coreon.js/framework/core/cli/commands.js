// This file defines various CLI commands available for users.

const { Command } = require('commander');
const { version } = require('../../../../package.json');
const { startServer } = require('../server');
const { migrateDatabase } = require('../database/migrations');
const { seedDatabase } = require('../database/seeders');
const { runTests } = require('../tests/core.test');

const program = new Command();

program
  .version(version)
  .description('Coreon.js CLI for managing your application');

program
  .command('start')
  .description('Start the Coreon.js application server')
  .action(() => {
    startServer();
  });

program
  .command('migrate')
  .description('Run database migrations')
  .action(() => {
    migrateDatabase();
  });

program
  .command('seed')
  .description('Seed the database with initial data')
  .action(() => {
    seedDatabase();
  });

program
  .command('test')
  .description('Run unit tests for the application')
  .action(() => {
    runTests();
  });

program.parse(process.argv);