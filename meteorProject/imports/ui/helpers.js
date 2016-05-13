import { Comments } from '../api/comments.js';
import { Devs } from '../api/devs.js';

Template.indexContent.helpers({
  getDevs() {
    return Devs.find();
  },

  getVotesCount() {
  	var votesCount = 0;
  	Devs.find().map(function(dev) {
  		votesCount += dev.score;
  	});
  	return votesCount;
  }
});

Template.voteContent.helpers({
  getDevs() {
    return Devs.find();
  },

  getVotesCount() {
  	var votesCount = 0;
  	Devs.find().map(function(dev) {
  		votesCount += dev.score;
  	});
  	return votesCount;
  },

  getUserVote() {
  	var user = Meteor.users.findOne({_id: Meteor.userId()});
  	if(user.profile) {
  		return user.profile.voteCount;
  	}
  }
});

Template.commentContent.helpers({
  getComment() {
    var id = FlowRouter.getParam("comId");
    return Comments.findOne(new Mongo.ObjectID(id));
  }
});

Template.voteContent.events({
	'click button.devId': function(e) {
		var dev = Devs.findOne({_id: this._id});
		var user = Meteor.users.findOne({_id: Meteor.userId()});
		if(!user.profile || !user.profile.voteTimer || user.profile.voteTimer.getTime() / 1000 > (new Date().getTime() / 1000) * 24 * 3600 || !user.profile.voteCount) {
			Meteor.users.update({_id: Meteor.userId()}, {$set: {"profile.voteTimer": new Date(), "profile.voteCount": 3}});
			user = Meteor.users.findOne({_id: Meteor.userId()});
		}
		
		if(user.profile.voteCount <= 0) {
			console.log('You already voted 3 times');
		} else {
			Devs.update({_id: this._id}, {$set: {score: dev.score+1}});
			Meteor.users.update({_id: Meteor.userId()}, {$set: {"profile.voteCount": (user.profile.voteCount - 1)}});
			console.log('fgpoiyoiutiu : ', user.profile);
		}
	}
});
