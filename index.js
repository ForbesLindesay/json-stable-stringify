var stringify = typeof JSON !== 'undefined' ? JSON.stringify : require('jsonify/lib/stringify');
var core = require('./core.js');

module.exports = function (obj, opts) {
    if (!opts) opts = {};
    if (!opts.stringify) opts.stringify = stringify;
    return core(obj, opts);
};
