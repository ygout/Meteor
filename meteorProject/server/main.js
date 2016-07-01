import { Meteor } from 'meteor/meteor';
import '../imports/configs/at_configs.js';

// Publication des méthodes après désactivation d'autopublish

Meteor.startup(() => {
  //Meteor.importDb();
  // code to run on server at startup
  ServiceConfiguration.configurations.update(
    { "service": "google" },
    {
      $set: {
        "appId": "609274823758-i6mdo55bkeeal3vfqjjbrrsultspg4ri.apps.googleusercontent.com",
        "secret": "jFJP0hLTY3m2Cx3nioNoJ3e8"
      }
    });
    Accounts.onCreateUser(user) {
      console.log('CREATE : ', user);
    }
    Accounts.onLogin(user) {
      console.log('LOGIN : ', user);
    }
});
