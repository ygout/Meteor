import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Comments } from '../imports/api/comments.js';
import { Devs } from '../imports/api/devs.js';
import '../imports/configs/at_configs.js';
import '../imports/configs/routes.js';


T9n.setLanguage('fr_FR');

import './main.html';
import '../imports/ui/layout.html';
import '../imports/ui/helpers.js';

BlazeLayout.setRoot('body');

// Meteor.subscribe('getComments');
// Meteor.subscribe('getComment');
