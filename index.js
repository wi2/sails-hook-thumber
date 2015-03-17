var Thumber = require('native-thumber');

module.exports = function(sails) {
  var thumber;

  return {

    /**
     * Default configuration
     *
     * We do this in a function since the configuration key for
     * the hook is itself configurable, so we can't just return
     * an object.
     */
    defaults: {
      store: 'locale',
      directory: './.tmp/uploads/',
      ifOriginal: false,
      schemas: [
        {version: 'thumb', size: '50x50', quality: 75}
      ]
    },

    /**
     * Initialize the hook
     * @param  {Function} cb Callback for when we're done initializing
     */
    initialize: function(cb) {
      thumber = new Thumber(sails.config.thumber||this.defaults);
      return cb();
    },

    /**
     * process thumber
     * @param  {object}   stream with fd, filename and size attributes
     * @param  {Function} cb     callback
     * @return a original stream
     */
    process: function(stream, cb) {
      thumber.process(stream.fd, stream.filename, stream.size, cb);
    }
  };

};
