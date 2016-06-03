import { Meteor } from 'meteor/meteor';
import { Comments } from '../imports/api/comments.js';
import { Devs } from '../imports/api/devs.js';
import '../imports/configs/at_configs.js';

// Publication des méthodes après désactivation d'autopublish
Meteor.publish('getComments', function() {
  return Comments.find();
});

Meteor.publish('getComment', function(params) {
  return Comments.find(new Mongo.ObjectID(params.comId));
});

Meteor.publish('getDevs', function() {
  return Devs.find({}, {sort: {votes:-1}});
});

Meteor.startup(() => {
  // code to run on server at startup
});
