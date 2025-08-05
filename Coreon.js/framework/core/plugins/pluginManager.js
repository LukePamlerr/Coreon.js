// This file manages the loading and execution of plugins within the framework.

class PluginManager {
    constructor() {
        this.plugins = [];
    }

    loadPlugin(plugin) {
        if (this.validatePlugin(plugin)) {
            this.plugins.push(plugin);
            plugin.init();
            console.log(`Plugin ${plugin.name} loaded successfully.`);
        } else {
            console.error(`Failed to load plugin: ${plugin.name}. Invalid plugin structure.`);
        }
    }

    validatePlugin(plugin) {
        return plugin && typeof plugin.init === 'function' && typeof plugin.name === 'string';
    }

    executePluginMethod(methodName, ...args) {
        this.plugins.forEach(plugin => {
            if (typeof plugin[methodName] === 'function') {
                plugin[methodName](...args);
            }
        });
    }

    getLoadedPlugins() {
        return this.plugins.map(plugin => plugin.name);
    }
}

export default new PluginManager();