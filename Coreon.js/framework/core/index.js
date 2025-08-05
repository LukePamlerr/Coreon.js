// Coreon.js Framework Main Entry Point
// This file initializes core components and configurations for the Coreon.js framework.

import config from './config';
import logger from './logger';
import errorHandler from './errorHandler';
import { initializeDatabase } from './database';
import { setupMiddleware } from './middleware';
import { setupRoutes } from './api';
import { loadPlugins } from './plugins';
import { startCLI } from './cli';

// Initialize the framework
const initializeFramework = () => {
    // Load configuration
    logger.info('Loading configuration...');
    const appConfig = config.load();

    // Initialize database
    logger.info('Initializing database...');
    initializeDatabase(appConfig.database);

    // Setup middleware
    logger.info('Setting up middleware...');
    setupMiddleware(appConfig.middleware);

    // Setup routes
    logger.info('Setting up API routes...');
    setupRoutes(appConfig.api);

    // Load plugins
    logger.info('Loading plugins...');
    loadPlugins(appConfig.plugins);

    // Start CLI
    logger.info('Starting CLI...');
    startCLI();
};

// Error handling
process.on('uncaughtException', (err) => {
    logger.error('Uncaught Exception: ', err);
    errorHandler.handle(err);
});

// Start the framework
initializeFramework();
logger.info('Coreon.js framework initialized successfully.');