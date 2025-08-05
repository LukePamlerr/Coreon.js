const cache = {};

const cacheMiddleware = (req, res, next) => {
    const key = req.originalUrl || req.url;

    if (cache[key]) {
        console.log(`Cache hit for ${key}`);
        return res.status(200).send(cache[key]);
    }

    console.log(`Cache miss for ${key}`);
    res.sendResponse = res.send;
    res.send = (body) => {
        cache[key] = body;
        res.sendResponse(body);
    };

    next();
};

const clearCache = (key) => {
    if (cache[key]) {
        delete cache[key];
        console.log(`Cache cleared for ${key}`);
    }
};

module.exports = {
    cacheMiddleware,
    clearCache,
};