import { Mongo } from 'meteor/mongo'
export const Users = new Mongo.Collection('users');
export const Ranks = new Mongo.Collection('ranks');
export const Vacant_position = new Mongo.Collection('vacant_position');
export const Menu = new Mongo.Collection('menu');
export const Vacations = new Mongo.Collection('vacations');
export const Expense = new Mongo.Collection('expense');
export const Curriculum_vitae = new Mongo.Collection('curriculum_vitae');
export const News = new Mongo.Collection('news');
export const Expense = new Mongo.Collection('expense');

Ranks.insert({name: 'userTestRank'});
Ranks.insert({name: 'adminTestRank'});

Users.insert({email: 'userMail@test.com', role: 'userTestRank'}, function(user) {
  Expense.insert({user_id: new Mongo.objectID(user._id), name: 'testUser1ExpenseName', description: 'testUser1DescriptionName', total: 183.12, date: new Date()});
  Vacations.insert({user_id: new Mongo.objectID(user._id), date_start: new Date(), date_end: new Date(), type: 'testVacationType'});
  News.insert({user_id: new Mongo.objectID(user._id), title: 'testNewsTitle', description: 'testNewsDescription', date: new Date()});

  Vacant_position.insert({name: 'testPositionName', date: new Date(), description: 'testPositionDescription', type: 'testPositionType', category: 'testPositionCategory'}, function(vacant) {
    Curriculum_vitae.insert({vacantPositionId: new Mongo.objectID(vacant._id), userId: new Mongo.objectID(user._id), extension: '.pdf', gender: 'M',
    first_name: 'testCVFirstName', last_name: 'testCVLastName', address: 'testCVAddress', country : 'testCVCountry', city: 'testCVCity', zipcode: 'testCVCode',
    phone: 'testCVPhone', email: 'CVMail@test.com'})
  });
});
Users.insert({email: 'adminMail@test.com', role: 'adminTestRank'});

Menu.insert({name: 'testParentMenuName'}, function(menu) {
  Menu.insert({name: 'testChildMenuName', content: 'Child content', parentId: new Mongo.objectID(menu._id)});
});
Menu.insert({name: 'testMenuName', content: 'Basic content'});
