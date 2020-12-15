var assert = require('assert');
var calc = require('../calc');

describe('çalculator', function(){

    it('Should add 3 and 4 and get 7', function(){

        assert.equal(calc.add(3,4),7);
    });

    it('Should subtract 3 from 7 and get 4', function(){

        assert.equal(calc.subtractd(7,3),4);
     });

    it('Should multiply 2*2 and get 4', function(){

        assert.equal(calc.multiply(2,2),4);
    });

    it('Should divide 9 by 3 and get 3', function(){

        assert.equal(calc.multiply(9,3),3);
    });

});