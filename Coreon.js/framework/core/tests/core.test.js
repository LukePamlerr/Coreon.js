const { describe, it, expect } = require('jest');
const core = require('../index'); // Adjust the path as necessary

describe('Coreon.js Core Functionality Tests', () => {
    it('should initialize core components correctly', () => {
        expect(core).toBeDefined();
        expect(core.config).toBeDefined();
        expect(core.logger).toBeDefined();
        expect(core.errorHandler).toBeDefined();
    });

    it('should log messages at different levels', () => {
        const logSpy = jest.spyOn(core.logger, 'log');
        core.logger.info('Info message');
        core.logger.warn('Warning message');
        core.logger.error('Error message');

        expect(logSpy).toHaveBeenCalledTimes(3);
        expect(logSpy).toHaveBeenCalledWith('Info message');
        expect(logSpy).toHaveBeenCalledWith('Warning message');
        expect(logSpy).toHaveBeenCalledWith('Error message');
    });

    it('should handle errors correctly', () => {
        const error = new Error('Test error');
        const response = core.errorHandler(error);
        expect(response).toEqual({ status: 'error', message: 'Test error' });
    });

    // Add more tests for other core functionalities as needed
});