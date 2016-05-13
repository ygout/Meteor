import { Meteor } from 'meteor/meteor';
import { Test } from '../imports/api/test.js';

Meteor.startup(() => {
  // code to run on server at startup
});

Meteor.publish('getTest', function() {
	return Test.find();
})