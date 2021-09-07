const logger = function (req, res, next) {
    console.log(`${req.url}: ${req.method} - ${new Date().toLocaleTimeString()}`);
    next();
  };

module.exports = logger;