import { Menu } from '/lib/collections/menu.js';
import { Helpers } from '../../helpers.js';

Helpers.content = function() {

   var menuName = Template.currentData()._id;
   console.log(menuName);

   var content = Menu.findOne({"name" : menuName});

   console.log(content);
   if(content){
    return content.content;
   }
}

Template.internetPage.helpers(Helpers);

Template.internetPage.rendered = function(){
   $('.collapsible').collapsible();
      $('.subcollapsible').collapsible();
   
}
