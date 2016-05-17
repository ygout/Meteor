//////////////////////////////////////////////////
//
// This file only serve to populate the database
// Just put Meteor.importDb() whenever you want to call it
//
// DO NOT USE IT FOR ANYTHING ELSE !!!
//
/////////////////////////////////////////////////

import { Mongo } from 'meteor/mongo'
const UserRanks = new Mongo.Collection('userRanks');
const Ranks = new Mongo.Collection('ranks');
const Vacant_position = new Mongo.Collection('vacant_position');
const Menu = new Mongo.Collection('menu');
const Vacations = new Mongo.Collection('vacations');
const Expense = new Mongo.Collection('expense');
const Curriculum_vitae = new Mongo.Collection('curriculum_vitae');
const News = new Mongo.Collection('news');
/*export const Collections = {
  UserRanks: UserRanks,
  Ranks: Ranks,
  Vacant_position: Vacant_position,
  Menu: Menu,
  Vacations: Vacations,
  Expense: Expense,
  Curriculum_vitae: Curriculum_vitae,
  News: News
};*/

Meteor.importDb = function() {
  Ranks.insert({name: 'userTestRank'});
  Ranks.insert({name: 'adminTestRank'});

  UserRanks.insert({email: 'userMail@test.com', role: 'userTestRank'}, function(err, user) {
    Expense.insert({user_id: new Mongo.ObjectID(user._id), name: 'testUser1ExpenseName', description: 'testUser1DescriptionName', total: 183.12, date: new Date()});
    Vacations.insert({user_id: new Mongo.ObjectID(user._id), date_start: new Date(), date_end: new Date(), type: 'testVacationType'});
    News.insert({user_id: new Mongo.ObjectID(user._id), title: 'testNewsTitle', description: 'testNewsDescription', date: new Date()});

    Vacant_position.insert({name: 'testPositionName', date: new Date(), description: 'testPositionDescription', type: 'testPositionType', category: 'testPositionCategory'}, function(err, vacant) {
      Curriculum_vitae.insert({vacantPositionId: new Mongo.ObjectID(vacant._id), userId: new Mongo.ObjectID(user._id), extension: '.pdf', gender: 'M',
      first_name: 'testCVFirstName', last_name: 'testCVLastName', address: 'testCVAddress', country : 'testCVCountry', city: 'testCVCity', zipcode: 'testCVCode',
      phone: 'testCVPhone', email: 'CVMail@test.com'})
    });
  });
  UserRanks.insert({email: 'adminMail@test.com', role: 'adminTestRank'});

  Menu.insert({name: 'testParentMenuName'}, function(err, menu) {
    Menu.insert({name: 'testChildMenuName', content: 'Child content', parentId: new Mongo.ObjectID(menu._id)});
  });
  Menu.insert({name: 'testMenuName', content: 'Basic content'});
  console.log('IMPORT FINISHED');
}
