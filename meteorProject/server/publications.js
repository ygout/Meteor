Meteor.publish('Menu', function() {
  return Menu.find();
});
