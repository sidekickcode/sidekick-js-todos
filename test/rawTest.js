"use strict";

const fs = require('fs');
const path = require('path');

var chai = require('chai');
var expect = require('chai').expect;

var todos = require('js-todos');

describe('js-todos analyser', function() {

  describe('positive tests', function () {

    before(function () {
    });

    it('finds all types of todos', function () {
      const fileWith11Todos = fs.readFileSync(path.join(__dirname, '/fixture.js'), {'encoding': 'utf-8'});
      const issues = todos(fileWith11Todos);
      expect(issues.count).to.equal(11);
    });

  });

});
