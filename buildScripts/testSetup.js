//register babel to transpile before the test run
require('babel-register')();

//disable webpack features that mocha don't understand
require.extensions['.css']=function() {};
