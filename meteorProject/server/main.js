import { Meteor } from 'meteor/meteor';
import { Menu } from '/lib/collections/menu.js';

import '../imports/configs/at_configs.js';

// Publication des méthodes après désactivation d'autopublish
Meteor.publish('testMenu', function() {
  return Menu.find();
});
Meteor.startup(() => {
  Meteor.importDb();
  // code to run on server at startup
});
