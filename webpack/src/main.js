var getDiv = require('./greeter.js');
var bijiao = require('./test.js');

document.getElementById('root').appendChild(getDiv());
document.getElementById('test').innerHTML = bijiao(7);