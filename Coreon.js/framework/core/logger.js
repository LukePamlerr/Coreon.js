const fs = require('fs');

class Logger {
    constructor() {
        this.logFile = 'application.log';
    }

    log(message, level = 'info') {
        const timestamp = new Date().toISOString();
        const logMessage = `${timestamp} [${level.toUpperCase()}]: ${message}\n`;
        fs.appendFileSync(this.logFile, logMessage);
        console.log(logMessage);
    }

    info(message) {
        this.log(message, 'info');
    }

    warn(message) {
        this.log(message, 'warn');
    }

    error(message) {
        this.log(message, 'error');
    }

    setLogFile(filePath) {
        this.logFile = filePath;
    }
}

module.exports = new Logger();