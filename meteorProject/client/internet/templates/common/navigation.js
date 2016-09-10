import { Menu } from '/lib/collections/menu.js';

Template.internetNavigation.rendered = function(){
  $(".dropdown-button").dropdown({
      inDuration: 300,
      outDuration: 225,
      constrain_width: false, // Does not change width of dropdown to that of the activator
      hover: true, // Activate on hover
      gutter: 0, // Spacing from edge
      belowOrigin: true, // Displays dropdown below the button
      alignment: 'left' // Displays dropdown with edge aligned to the left of button
  });

  $('#search-btn').click(function(){
    $("#search-panel").show();
  });
  $('.close').click(function(){
    $("#search-panel").hide();
  });

}

Template.internetNavigation.helpers({

  menus: function(){
    console.log('test1',Menu.find().fetch());
    return Menu.find({"parentId" : {$exists:false}}).fetch();
  },
  groupMenu: function(){
    var groupMenu = Menu.findOne({"name" : "group"});
    console.log('groupMenu',Menu.find({"parentId" : groupMenu._id }).fetch());
    return Menu.find({"parentId" : groupMenu._id }).fetch();
  }


});
