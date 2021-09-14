const logger = function (req, res, next) {
    console.log(`URL:${req.url} | ${req.method} | ${new Date().toLocaleTimeString()}`);
    next();
  };

module.exports = logger;