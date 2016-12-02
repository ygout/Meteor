import { Menu } from '/lib/collections/menu.js';

Tracker.autorun(function () {
  var menuName = Session.get('menuName');
  if(menuName === 'contact') {
    $('select').material_select();
  }
});

Template.internetPage.rendered = function(){
  $('select').material_select();
  console.log('rendered');
}

Template.internetPage.helpers({

  content: function(){
     var menuName = Template.currentData()._id;
     Session.set('menuName', menuName);
     var content = Menu.findOne({"name" : menuName});
     if (content){
       return content.content;
     }
  }
});
