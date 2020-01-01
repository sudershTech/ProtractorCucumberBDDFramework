var log4jsConfig = function() {
    var log4js = require('log4js');
    log4js.configure('../config/log4js.json');
    let logger = log4js.getLogger("default");

    this.logger = function() {
        return logger;
    }
};

module.exports = new log4jsConfig();