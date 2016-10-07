import { Menu } from '/lib/collections/menu.js';

Template.internetNavigation.rendered = function(){
  this.autorun(function(){
    var cursor = Menu.find({"parentId" : {$exists:false}});

    cursor.forEach(function(foo) {

      $(".dropdown-button").dropdown({
          inDuration: 300,
          outDuration: 225,
          constrain_width: false, // Does not change width of dropdown to that of the activator
          hover: true, // Activate on hover
          gutter: 0, // Spacing from edge
          belowOrigin: true, // Displays dropdown below the button
          alignment: 'left' // Displays dropdown with edge aligned to the left of button

          });

    });

    Tracker.afterFlush(function(){

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

    }.bind(this));
  }.bind(this));


}

Template.internetNavigation.helpers({

  menus: function(){
     var menus = Menu.find({"parentId" : {$exists:false}}).fetch();
     var result = [];
     menus.forEach(function(menu) {
      menu.children = Menu.find({"parentId" : menu._id}).fetch();
      result.push(menu);
     });
    return result;
  },
  groupMenu: function(){
    var groupMenu = Menu.findOne({"name" : "group"});
    return Menu.find({"parentId" : groupMenu._id }).fetch();
  }


});
