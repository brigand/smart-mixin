var expect = require('expect.js');
var sinon = require('sinon');

describe('mixin into objects', function(){
    describe('basic functionality', function(){
        var klass, klassFunctionCalled;
        beforeEach(function(){
            function KLass(){};
            KLass.prototype.add = function(a, b){ return a + b };

            KLass.prototype.setsCalled = function(){ klassFunctionCalled = true;  }
            klassFunctionCalled = false;

            klass = KLass;
        });
    });
});
