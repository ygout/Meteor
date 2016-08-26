

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

Template.internetHome.helpers({
  menus: function(){
    //console.log(FlowRouter.current().path);
    return Menu.find().fetch();

  }

});
