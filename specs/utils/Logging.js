var config = require('../../config/log4jsConfig');
var Logging = function() {
    var logger = config.logger();
    this.write = function(message) {
        logger.debug(message);
    };
};

module.exports = new Logging();