"use strict"

const loggerMiddleware = (req, res, next) => {
    console.log(`Logged @ ---${new Date()}`);
    console.log(`Request Method: ${req.method}`);
    next();
}

module.exports = loggerMiddleware;