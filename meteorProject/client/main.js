import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import '../imports/configs/at_configs.js';
import '../imports/configs/routes.js';
import './main.html';

T9n.setLanguage('fr_FR');

BlazeLayout.setRoot('body');
Template['override-atForm'].replaces('atForm');