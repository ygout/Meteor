import { Comments } from '../api/comments.js';
import { Devs } from '../api/devs.js';

Template.voteContent.events({
	'click td.devId': function(e) {
		Devs.find({_id: new Mongo.ObjectID(this._id)});
	}
});