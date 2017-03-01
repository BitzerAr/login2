import { Meteor } from 'meteor/meteor';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

import { Mongo } from 'meteor/mongo';

import { testCollection } from './TestData.js';

export const TestMethod = new ValidatedMethod({
  name: 'test.testMethod',

  validate: new SimpleSchema({
    value1: { type: String },
    value2: { type: String },
  }).validator(),

  run({ value1, value2}) {
    testCollection.insert({field1:value1, field2:value2});
  }

});
