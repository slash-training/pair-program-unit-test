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
    it('Should return 7.', function(){
      assert.equal(app.scrabble_score('Peter'), 7);
    });
  });
});

describe('Vowel Count', function() {
  describe('Test Cases', function() {
    it('Should return 3.', function(){
      assert.equal(app.vowel_count('Cabbage'), 3);
    });
    it('Should return 1.', function(){
      assert.equal(app.vowel_count('Car'), 1);
    });
    it('Should return 2.', function(){
      assert.equal(app.vowel_count('Peter'), 2);
    });
    it('Should return 22.', function(){
      assert.equal(app.vowel_count('I go to school with my friends every day, we are undergraduate students.'), 22);
    });
  });
});

describe('Bicycle Race', function() {
  describe('Test Cases', function() {
    it('Should return 5.', function(){
      assert.equal(app.bicycle_race(10, 1, 1), 5);
    });
    it('Should return 3.', function(){
      assert.equal(app.bicycle_race(9, 1, 2), 3);
    });
    it('Should return 6.6667.', function(){
      assert.equal(app.bicycle_race(20, 1, 2), 6.6667);
    });
    it('Should return 0.8.', function(){
      assert.equal(app.bicycle_race(20, 20, 5), 0.8);
    });
    it('Should return 0.0133.', function(){
      assert.equal(app.bicycle_race(20, 700, 800), 0.0133);
    });
  });
});