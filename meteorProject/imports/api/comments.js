import { Mongo } from 'meteor/mongo'
export const Comments = new Mongo.Collection('comments');

// Comments.insert({_id: new Meteor.Collection.ObjectID(), title: 'test', content: 'test'});
