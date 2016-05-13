import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Test } from '../imports/api/test.js';

import './main.html';

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    //Test.insert({bob: 'hello'});
    console.log('PING');
    var tralala = Test.find();
    tralala = tralala.fetch();
    console.log('PONG : ', tralala);
    tralala.forEach(function(item) {
    	console.log('ALLO : ', item);
    });

    instance.counter.set(instance.counter.get() + 1);

  },
});
