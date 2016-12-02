import { Menu } from '/lib/collections/menu.js';

export const Helpers =
{
  menus: function() {
     var menus = Menu.find({"parentId" : {$exists:false}}).fetch();
     var result = [];
     menus.forEach(function(menu) {
      menu.children = Menu.find({"parentId" : menu._id}).fetch();
      menu.children.forEach(function(child, index){
        menu.children[index].grandChildren = Menu.find({"parentId" : child._id}).fetch();
      });
      result.push(menu);
     });
    return result;
  },
  groupMenu: function() {
    var groupMenu = Menu.findOne({"name" : "group"});
    return Menu.find({"parentId" : groupMenu._id }).fetch();
  },
  currentMenu: function() {
    return Template.currentData()._id;
  },
  equal: function(firstArg, secondArg) {
    return firstArg === secondArg;
  }
}
