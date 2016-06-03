import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  Meteor.importDb();
  // code to run on server at startup
});
