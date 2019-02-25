/*
 * You'll eventually be given instructions how to use this file
 * If you want to use it before then, you'll have to figure it out yourself
 */

// You don't actually want to fill *this* value in on line 9, but you'll see
// other places in this file where you'll replace the FILL_ME_IN with a
// different value.
var FILL_ME_IN = 'Fill this value in';
 
//describe('Introduction to Mocha Tests - READ ME FIRST', function() {
//  // A Mocha test is just a function!
//  // If the function throws an error when run, it fails.
//  // If it doesn't throw an error when run, it doesn't fail. 
//  // To read more about mocha, visit mochajs.org
//
//  // Once you've read and understood this section, please comment it out. 
//  // You will not be able to proceed with a failing test. 
//
//
//
//  it('Doesn\'t throw an error, so it doesn\'t fail', function() {
//    // This test doesn't really test anything at all! It will pass no matter what.
//    var even = function(num){
//      return num/2 === 0;
//    }
//    return even(10) === true;
//  });
//
//  // In tests, we want to compare the expected behavior to the actual behavior.
//  // A test should only fail if the expected behavior doesn't match the actual.
//  it('Throws an error when expected behavior does not match actual behavior', function() {
//    var even = function(num){
//      return num/2 === 0;
//    }
//
//    if(even(10) === true) {
//      throw new Error('10 should be even!');
//    }
//  });
//});

describe('Diner\'s Club', function() {
  // Be careful, tests can have bugs too...

  it('has a prefix of 38 and a length of 14', function() {
 
    if (detectNetwork('38345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  });

  it('has a prefix of 39 and a length of 14', function() {
    if (detectNetwork('39345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
 
  });
});

describe('American Express', function() {
  // It can get annoying to keep typing the if/throw, so here is a
  // helper function to throw an error if the input statement isn't true. 
  var assert = function(isTrue) {
    if(!isTrue) {
      throw new Error('Test failed');
    }
 
  };

  it('has a prefix of 34 and a length of 15', function() {
    assert(detectNetwork('343456789012345') === 'American Express');
  });

  it('has a prefix of 37 and a length of 15', function() {
    assert(detectNetwork('373456789012345') === 'American Express');
  });
});

describe('Visa', function() {
  // Chai is an entire library of helper functions for tests!
  // Chai provides an assert that acts the same as our previous assert.
  // Search the documentation to figure out how to access it. 
  //   http://chaijs.com/
  var assert = chai.assert;
 

  it('has a prefix of 4 and a length of 13', function() {
    assert(detectNetwork('4123456789012') === 'Visa');
  });

  it('has a prefix of 4 and a length of 16', function() {
    assert(detectNetwork('4123456789012345') === 'Visa');
  });

  it('has a prefix of 4 and a length of 19', function() {
    assert(detectNetwork('4123456789012345678') === 'Visa');
  });
});

describe('MasterCard', function() {
  // Chai lets you write more human-readable tests that throw helpful errors.
  // Expect syntax is one way to do this, but there are others. 
  // If you want to know more, check out the documentation. 
  //   http://chaijs.com/api/bdd/
  var expect = chai.expect;
 
  it('has a prefix of 51 and a length of 16', function() {
    expect(detectNetwork('5112345678901234')).to.equal('MasterCard');
  });

  it('has a prefix of 52 and a length of 16', function() {
    expect(detectNetwork('5212345678901234')).to.equal('MasterCard');
  });

  it('has a prefix of 53 and a length of 16', function() {
    expect(detectNetwork('5312345678901234')).to.equal('MasterCard');
  });
 

  // You can also use should instead of expect, which changes the style
  // slightly. It really doesn't matter which one you use - check out 
  // http://chaijs.com/guide/styles/ for more info, but it's important
  // to be consistent (unlike in this file, where we use BOTH expect
  // and should, but that's just for learning), so once you've gotten 
  // these tests to pass using should syntax, refactor your tests to 
  // use either expect or should, but not both. 
  //var expect = chai.expect();
  
  it('has a prefix of 54 and a length of 16', function() {
    expect(detectNetwork('5412345678901234')).to.equal('MasterCard');
  });
 
  it('has a prefix of 55 and a length of 16', function() {
    expect(detectNetwork('5512345678901234')).to.equal('MasterCard');
  })
 
});

describe('Discover', function() {
  // Tests without a function will be marked as "pending" and not run
  // Implement these tests (and others) and make them pass!
    //var should = chai.should();
    
    var expect = chai.expect;
    
  it('has a prefix of 6011 and a length of 16', function(){
      expect(detectNetwork('6011111111111111')).to.equal('Discover');
  });
  it('has a prefix of 6011 and a length of 19', function(){
      expect(detectNetwork('6011789009877890890')).to.equal('Discover');
  });
    
    
    for (var prefix = 644; prefix <= 649; prefix++) {
    (function(prefix) {
      it('has a prefix of ' + prefix + ' and a length of 16',function(){
        expect(detectNetwork(prefix + '1234567890123')).to.equal('Discover');
      });
      it('has a prefix of ' + prefix + ' and a length of 19', function(){
        expect(detectNetwork(prefix + '1234567890123456')).to.equal('Discover');
      });
    })(prefix);
  }
    
    
    it('has a prefix of 65 and a length of 16', function(){
      expect(detectNetwork('6501111111111111')).to.equal('Discover');
  });
  it('has a prefix of 65 and a length of 19', function(){
      expect(detectNetwork('6511789009877890890')).to.equal('Discover');
  });
    
});

describe('Maestro', function() {
  // Write full test coverage for the Maestro card
    
    var expect = chai.expect;
    
    //5018
    var x = '501811111111';
        for (var i = 12; i <= 19; i++){
            (function (i, x) {
                it('has a prefix of 5018 and a length of ' + i, function (){
                    expect(detectNetwork(x)).to.equal('Maestro');
            });
        })(i, x);
        x += '1';
    }
    
    
    //5020 
    var x = '502011111111';
        for (var i = 12; i <= 19; i++) {
            (function (i, x) {
                it('has a prefix of 5020 and a length of ' + i, function () {
                    expect(detectNetwork(x)).to.equal('Maestro');
            }); 
        })(i,x)
        x += '1';
  }
    //5038
    var x = '503811111111';
        for (var i = 12; i <= 19; i++) {
            (function (i, x) {
                it('has a prefix of 5038 and a length of ' + i, function () {
                    expect(detectNetwork(x)).to.equal('Maestro');
            }); 
        })(i,x)
            x += '1';
  }
    
    //6304
    var x = '630411111111';
        for (var i = 12; i <= 19; i++) {
            (function (i, x) {
                it('has a prefix of 6304 and a length of ' + i, function () {
                    expect(detectNetwork(x)).to.equal('Maestro');
            }); 
        })(i,x)
        x += '1';
  }
});

describe('China UnionPay', function() {
        var expect = chai.expect;
    
    
    for (let x = 622126; x <= 622925; x++) {
        var y = x + '1234567290';
        for (let len = 16; len <= 19; len++){
            (function (x, y, len){
                it('has a prefix of ' + x + ' and a length of ' + len,function(){
                    expect(detectNetwork(y)).to.equal('China UnionPay');
            });
        })(x, y, len)
            y += '1';
        }
    }
    
    for (let x = 624; x <= 626; x++) {
        var y = x + '1234567890123';
        for (let len = 16; len <= 19; len++){
            (function(x, y, len){
                it('has a prefix of ' + x + ' and a length of ' + len, function(){
                    expect(detectNetwork(y)).to.equal('China UnionPay');
                });
            })(x, y, len)
                y += '1';
        }
    }
    
    
    for (let x = 6282; x <= 6288; x++){
        var y = x + '123456789801';
        for (let len = 16; len <= 19; len++){
            (function (x, y, len){
                it('has a prefix of ' + x + ' and a length of ' + len, function(){
                    expect(detectNetwork(y)).to.equal('China UnionPay');
                });
            })(x, y, len)
                y += '1';
        }
    }

});

describe('Switch', function(){
   // Switch always has a prefix of 4903, 4905, 4911, 4936, 564182, 633110, 6333, or 6759 and a length of 16, 18, or 19
    
    
    var expect = chai.expect;
    
    //want to put in a for loop that iterates through a bank of prefixes rather then going through each of these prefixes individually 
    
    
    //4903
    it ('has a prefix of 4903 and a length of 16', function(){
        expect(detectNetwork('4903123412341234')).to.equal('Switch');
    });
    
    it ('has a prefix of 4903 and a length of 18', function(){
        expect(detectNetwork('490312341234123456')).to.equal('Switch');
    });
    
    it ('has a prefix of 4903 and a length of 19', function(){
        expect(detectNetwork('4903123412341234567')).to.equal('Switch');
    });
    
    //4905
    it ('has a prefix of 4905 and a length of 16', function(){
        expect(detectNetwork('4905123412341234')).to.equal('Switch');
    });
    
    it ('has a prefix of 4905 and a length of 18', function(){
        expect(detectNetwork('490512341234123456')).to.equal('Switch');
    });
    
    it ('has a prefix of 4905 and a length of 19', function(){
        expect(detectNetwork('4905123412341234567')).to.equal('Switch');
    });
    
    //4911
    it ('has a prefix of 4911 and a length of 16', function(){
        expect(detectNetwork('4911123412341234')).to.equal('Switch');
    });
    it ('has a prefix of 4911 and a length of 18', function(){
        expect(detectNetwork('491112341234123456')).to.equal('Switch');
    });
    it ('has a prefix of 4911 and a length of 19', function(){
        expect(detectNetwork('4911123412341234567')).to.equal('Switch');
    });
    
    //4936
    it ('has a prefix of 4936 and a length of 16', function(){
        expect(detectNetwork('4936123412341234')).to.equal('Switch');
    });
    it ('has a prefix of 4936 and a length of 18', function(){
        expect(detectNetwork('493612341234123456')).to.equal('Switch');
    });
    it ('has a prefix of 4936 and a length of 19', function(){
        expect(detectNetwork('4936123412341234567')).to.equal('Switch');
    });
    
    //564182
    it ('has a prefix of 564182 and a length of 16', function(){
        expect(detectNetwork('5641823412341212')).to.equal('Switch');
    });
    it ('has a prefix of 564182 and a length of 18', function(){
        expect(detectNetwork('564182341234123412')).to.equal('Switch');
    });
    it ('has a prefix of 564182 and a length of 19', function(){
        expect(detectNetwork('5641823412341234512')).to.equal('Switch');
    });
    
    //633110
    it ('has a prefix of 633110 and a length of 16', function(){
        expect(detectNetwork('6331101234567890')).to.equal('Switch');
    });
    it ('has a prefix of 633110 and a length of 18', function(){
        expect(detectNetwork('633110341234123412')).to.equal('Switch');
    });
    it ('has a prefix of 633110 and a length of 19', function(){
        expect(detectNetwork('6331103412341234121')).to.equal('Switch');
    });
    
    //6333
    it ('has a prefix of 6333 and a length of 16', function(){
        expect(detectNetwork('6333123412341234')).to.equal('Switch');
    });
    it ('has a prefix of 6333 and a length of 18', function(){
        expect(detectNetwork('633312341234123456')).to.equal('Switch');
    }); 
    it ('has a prefix of 6333 and a length of 19', function(){
        expect(detectNetwork('6333123412341234567')).to.equal('Switch');
    });
    
    //6759
    it ('has a prefix of 6759 and a length of 16', function(){
        expect(detectNetwork('6759123412341234')).to.equal('Switch');
    });
    it ('has a prefix of 6759 and a length of 18', function(){
        expect(detectNetwork('675912341234123456')).to.equal('Switch');
    }); 
    it ('has a prefix of 6759 and a length of 19', function(){
        expect(detectNetwork('6759123412341234567')).to.equal('Switch');
    });
    
});

