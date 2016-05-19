'use strict';

var url = require('url');


var Default = require('./DefaultService');


module.exports.docTeamGET = function docTeamGET (req, res, next) {
  Default.docTeamGET(req.swagger.params, res, next);
};
