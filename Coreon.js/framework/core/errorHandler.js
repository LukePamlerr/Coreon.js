module.exports = function errorHandler(err, req, res, next) {
    // Log the error details for debugging
    console.error(err.stack);

    // Set the response status code based on the error type
    const statusCode = err.statusCode || 500;
    res.status(statusCode);

    // Send a JSON response with the error message
    res.json({
        status: 'error',
        statusCode: statusCode,
        message: err.message || 'Internal Server Error',
    });
};