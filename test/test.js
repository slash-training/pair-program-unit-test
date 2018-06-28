var assert = require('assert');
var app = require('../src/app');


describe('Number to Ordinal', function() {
  describe('Test Cases', function() {
    it('Should return 2nd.', function(){
      assert.equal(app.number_to_ordinal(2), '2nd');
    });
    it('Should return 4th.', function() {
      assert.equal(app.number_to_ordinal(4), '4th');
    });
    it('Should return 11th.', function() {
      assert.equal(app.number_to_ordinal(11), '11th');
    });
    it('Should return 12th.', function() {
      assert.equal(app.number_to_ordinal(12), '12th');
    });
    it('Should return 21st.', function() {
      assert.equal(app.number_to_ordinal(21), '21st');
    });
    it('Should return 103rd.', function() {
      assert.equal(app.number_to_ordinal(103), '103rd');
    });
    it('Should return 113th.', function() {
      assert.equal(app.number_to_ordinal(113), '113th');
    });
    it('Should return 1001st.', function() {
      assert.equal(app.number_to_ordinal(1001), '1001st');
    });
  });
});

describe('Scrabble Score', function() {
  describe('Test Cases', function() {
    it('Should return 14.', function(){
      assert.equal(app.scrabble_score('Cabbage'), 14);
    });
    it('Should return 5.', function(){
      assert.equal(app.scrabble_score('Car'), 5);
    });
    it('Should return 9.', function(){
      assert.equal(app.scrabble_score('Many'), 9);
    });
  });
});
