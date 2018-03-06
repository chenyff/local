var util = require("./b.js");
var c = require("./c.js");

module.exports = function(a,b){
	console.log(util.name);
	console.log(c.elip(util.name));
    return util.fillZero(a+b);
}