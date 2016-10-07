import { Menu } from '/lib/collections/menu.js';

Template.internetPage.helpers({

  content: function(){

     var menuName = Template.currentData()._id;
     console.log(menuName);

     var content = Menu.findOne({"name" : menuName});

     console.log(content);
     return content.content;

  },
  groupMenu: function(){
    var groupMenu = Menu.findOne({"name" : "group"});
    return Menu.find({"parentId" : groupMenu._id }).fetch();
  }


});
