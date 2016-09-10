import { Meteor } from 'meteor/meteor';
import { Menu } from '/lib/collections/menu.js';
import { Ranks } from '../lib/collections/ranks.js';
import { Menu } from '../lib/collections/menu.js';
import '../imports/configs/at_configs.js';

var fs = Npm.require('fs');

// Publication des méthodes après désactivation d'autopublish
Meteor.publish('testMenu', function() {
  return Menu.find();
});

Meteor.startup(() => {

  //Meteor.importDb();

  // code to run on server at startup
  if(!ServiceConfiguration.configurations.find().fetch().length) {
    ServiceConfiguration.configurations.insert(
      { "_id" : "ZHcLz7tAyX9sC5HYi",
      "service" : "google",
      "clientId" : "609274823758-i6mdo55bkeeal3vfqjjbrrsultspg4ri.apps.googleusercontent.com",
      "secret" : "jFJP0hLTY3m2Cx3nioNoJ3e8",
      "loginStyle" : "popup"
    });
  };

  Accounts.onCreateUser(function(options, user) {
    user.services.google.roles = [];
    var rankList = Ranks.find({email : user.services.google.email}).fetch();

    if(rankList.length) {
      rankList.forEach(function(rank) {
        user.services.google.roles.push(rank.role);
      });
    } else {
      user.services.google.roles.push('userTestRank');
    }

    return user;
  });

  Accounts.onLogin(function(log) {
    var wStream = fs.createWriteStream('../../../../../server/userConnections.log', {'flags': 'a'});
    var logData = '\nLOGIN : Connection ID : ' + log.connection.id + ' | User ID : ' + log.user._id + ' | \
Client IP : ' + log.connection.clientAddress + ' | Timestamp : ' + new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '');

    wStream.write(logData);
    wStream.end();
  });

  Accounts.onLogout(function(log) {
    var wStream = fs.createWriteStream('../../../../../server/userConnections.log', {'flags': 'a'});
    var logData = '\nLOGOUT : Connection ID : ' + log.connection.id + ' | User ID : ' + log.user._id + ' | \
Client IP : ' + log.connection.clientAddress + ' | Timestamp : ' + new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '');

    wStream.write(logData);
    wStream.end();
  });
});
