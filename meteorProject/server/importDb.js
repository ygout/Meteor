//////////////////////////////////////////////////
//
// This file only serve to populate the database
// Just put Meteor.importDb() whenever you want to call it
//
// DO NOT USE IT FOR ANYTHING ELSE !!!
//
/////////////////////////////////////////////////

import { Mongo } from 'meteor/mongo'

import { Menu } from '../lib/collections/menu.js'
import { Expense } from '../lib/collections/expense.js'
import { News } from '../lib/collections/news.js'
import { Ranks } from '../lib/collections/ranks.js'
import { UserRanks } from '../lib/collections/userRanks.js'
import { Vacant_position } from '../lib/collections/vacantPosition.js'
import { Vacations } from '../lib/collections/vacations.js'
import { Curriculum_vitae } from '../lib/collections/curriculumVitae.js'

Meteor.importDb = function() {

  // Insert Ranks
  if (Ranks.find().count() === 0)
  {
    Ranks.insert({name: 'userTestRank'});
    Ranks.insert({name: 'adminTestRank'});
  }

  // Insert UserRanks
  UserRanks.insert({email: 'userMail@test.com', role: 'userTestRank'}, function(err, user) {
    if(err) {
      return err;
    }
    Expense.insert({user_id: new Mongo.ObjectID(user._id), name: 'testUser1ExpenseName', description: 'testUser1DescriptionName', total: 183.12, date: new Date()});
    Vacations.insert({user_id: new Mongo.ObjectID(user._id), date_start: new Date(), date_end: new Date(), type: 'testVacationType'});
    News.insert({user_id: new Mongo.ObjectID(user._id), title: 'testNewsTitle', description: 'testNewsDescription', date: new Date()});

    Vacant_position.insert({name: 'testPositionName', date: new Date(), description: 'testPositionDescription', type: 'testPositionType', category: 'testPositionCategory'}, function(err, vacant) {
      if(err) {
        return err;
      }
      Curriculum_vitae.insert({vacantPositionId: new Mongo.ObjectID(vacant._id), userId: new Mongo.ObjectID(user._id), extension: '.pdf', gender: 'M',
      first_name: 'testCVFirstName', last_name: 'testCVLastName', address: 'testCVAddress', country : 'testCVCountry', city: 'testCVCity', zipcode: 'testCVCode',
      phone: 'testCVPhone', email: 'CVMail@test.com'})
    });
  });
  UserRanks.insert({email: 'adminMail@test.com', role: 'adminTestRank'});

  // Insert Menu

  Menu.insert({name: 'Le groupe',position:'navBar'}, function(err, menu) {
    if(err) {
      return err;
    }
  Menu.insert({name: 'Présentation', content: '', parentId: new Mongo.ObjectID(menu._id)},function(err,menu) {
    if(err){
      return err;
    }
    Menu.insert({name: 'La société', content: '', parentId: new Mongo.ObjectID(menu._id)});
  });

  Menu.insert({name: 'Chiffres clés', content: '', parentId: new Mongo.ObjectID(menu._id)},function(err,menu) {
    if(err){
      return err;
    }
    Menu.insert({name: 'Détails', content: '', parentId: new Mongo.ObjectID(menu._id)});
  });
  Menu.insert({name: 'Notre expertise', content: '', parentId: new Mongo.ObjectID(menu._id)},function(err,menu) {
    if(err){
      return err;
    }
    Menu.insert({name: 'Présentation des expertises', content: '', parentId: new Mongo.ObjectID(menu._id)});
    Menu.insert({name: 'Assitance technique', content: '', parentId: new Mongo.ObjectID(menu._id)});
    Menu.insert({name: 'Formation', content: '', parentId: new Mongo.ObjectID(menu._id)});
    Menu.insert({name: 'Forfait', content: '', parentId: new Mongo.ObjectID(menu._id)});
  });
  Menu.insert({name: 'Les valeurs du groupe', content: '', parentId: new Mongo.ObjectID(menu._id)},function(err,menu) {
    if(err){
      return err;
    }
    Menu.insert({name: 'Détails', content: '', parentId: new Mongo.ObjectID(menu._id)});
  });
  Menu.insert({name: 'Présentation', content: '', parentId: new Mongo.ObjectID(menu._id)});
  Menu.insert({name: 'Présentation', content: '', parentId: new Mongo.ObjectID(menu._id)});
  });
  Menu.insert({name: 'testMenuName', content: 'Basic content'});

  console.log('IMPORT FINISHED');
}
