import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import '../imports/configs/at_configs.js';
import '../imports/configs/routes.js';
import '../imports/ui/layout.html';
import '../imports/ui/helpers.js';
import './main.html';

T9n.setLanguage('fr_FR');

BlazeLayout.setRoot('body');