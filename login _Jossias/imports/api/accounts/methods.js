import { Meteor } from 'meteor/meteor';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

import { Mongo } from 'meteor/mongo';

import { Accounts } from 'meteor/accounts-base';


export const RegisterUser = new ValidatedMethod({
  name: 'accounts.registerUser',

  validate: new SimpleSchema({
    username: { type: String },
    firstName: { type: String },
    lastName: {type: String},
    birthdate: { type: Date },
    email: {type: SimpleSchema.RegEx.Email},
    password: { type: String },
  }).validator(),

  run({ username, firstName, lastName, birthdate, email, password }) {
    var newUserId = Accounts.createUser({username:username, password:password, email:email});
    Meteor.users.update(newUserId, {
      $set : {
        firstName:firstName,
        lastName:lastName,
        birthdate:birthdate,
      }});
  }


});
