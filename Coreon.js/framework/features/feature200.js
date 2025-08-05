// This file implements the 200th advanced feature of the Coreon.js framework.
// Feature 200: Advanced Data Caching Layer

class AdvancedCache {
    constructor() {
        this.cache = new Map();
        this.ttl = 3600; // Time to live in seconds
    }

    set(key, value) {
        const expirationTime = Date.now() + this.ttl * 1000;
        this.cache.set(key, { value, expirationTime });
    }

    get(key) {
        const cachedItem = this.cache.get(key);
        if (!cachedItem) {
            return null;
        }

        if (Date.now() > cachedItem.expirationTime) {
            this.cache.delete(key);
            return null;
        }

        return cachedItem.value;
    }

    clear() {
        this.cache.clear();
    }

    delete(key) {
        this.cache.delete(key);
    }

    has(key) {
        return this.get(key) !== null;
    }
}

// Exporting the AdvancedCache class for use in other parts of the framework
module.exports = AdvancedCache;