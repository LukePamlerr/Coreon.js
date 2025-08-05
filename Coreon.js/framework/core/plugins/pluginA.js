// This file defines a sample plugin for extending framework functionality.

class PluginA {
    constructor() {
        this.name = 'PluginA';
        this.version = '1.0.0';
        this.description = 'A sample plugin to demonstrate plugin functionality in Coreon.js';
    }

    init(core) {
        this.core = core;
        this.registerRoutes();
        this.setupListeners();
    }

    registerRoutes() {
        this.core.api.rest.registerRoute('GET', '/pluginA/data', this.getData.bind(this));
    }

    async getData(req, res) {
        try {
            const data = await this.fetchDataFromService();
            res.status(200).json(data);
        } catch (error) {
            this.core.errorHandler.handleError(error, res);
        }
    }

    async fetchDataFromService() {
        // Simulate fetching data from a service
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({ message: 'Data from PluginA' });
            }, 1000);
        });
    }

    setupListeners() {
        this.core.events.on('someEvent', this.handleSomeEvent.bind(this));
    }

    handleSomeEvent(data) {
        console.log(`PluginA received someEvent with data: ${data}`);
    }
}

module.exports = new PluginA();