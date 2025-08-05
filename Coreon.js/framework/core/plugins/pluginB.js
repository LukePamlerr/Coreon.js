// This file defines another sample plugin for extending framework functionality.

class PluginB {
    constructor() {
        this.name = 'PluginB';
        this.version = '1.0.0';
    }

    init(core) {
        this.core = core;
        this.registerRoutes();
        this.setupListeners();
    }

    registerRoutes() {
        this.core.api.rest.registerRoute('GET', '/pluginB/data', this.getData.bind(this));
    }

    async getData(req, res) {
        try {
            const data = await this.fetchDataFromService();
            res.status(200).json(data);
        } catch (error) {
            this.core.errorHandler.handleError(res, error);
        }
    }

    async fetchDataFromService() {
        // Simulate fetching data from a service
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({ message: 'Data from PluginB' });
            }, 1000);
        });
    }

    setupListeners() {
        this.core.events.on('someEvent', this.handleSomeEvent.bind(this));
    }

    handleSomeEvent(data) {
        console.log(`PluginB received someEvent with data: ${data}`);
    }
}

module.exports = new PluginB();