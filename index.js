var fs = require('fs');
var _ = require('lodash');
var ext = '.ejs';

module.exports = function(options) {
  if (!options) {
    options = {};
  };

  var loadEjsFile = function(module, filename) {
    var source = fs.readFileSync(filename, 'utf8');
    var answer = _.template(source, options);
    module._compile(answer, filename);
  };

  if (require.extensions !== undefined) {
    require.extensions[ext] = loadEjsFile;
  }
};
