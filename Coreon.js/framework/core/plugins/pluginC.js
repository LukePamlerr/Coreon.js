// This file defines yet another sample plugin for extending framework functionality.

class PluginC {
    constructor() {
        this.name = 'PluginC';
        this.version = '1.0.0';
        this.description = 'A sample plugin that adds advanced features to the Coreon.js framework.';
    }

    init(core) {
        this.core = core;
        this.registerRoutes();
        this.setupListeners();
    }

    registerRoutes() {
        this.core.api.rest.registerRoute('/pluginC/feature', 'GET', this.handleFeatureRequest.bind(this));
    }

    handleFeatureRequest(req, res) {
        // Implement the logic for handling feature requests
        res.send({ message: 'Feature from PluginC is working!' });
    }

    setupListeners() {
        this.core.events.on('someEvent', this.handleSomeEvent.bind(this));
    }

    handleSomeEvent(data) {
        // Handle some event triggered in the core
        console.log('PluginC received someEvent with data:', data);
    }
}

module.exports = new PluginC();