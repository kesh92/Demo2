'use strict';

exports.docTeamGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * country (String)
  **/
  
  
  var examples = {};
  examples['application/json'] = [ {
  "FirstName" : "aeiou",
  "Gender" : "aeiou",
  "Age" : ""
} ];
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

