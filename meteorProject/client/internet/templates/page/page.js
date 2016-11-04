import { Menu } from '/lib/collections/menu.js';

/*Template.internetPage.rendered = function () {
    $('select').material_select();
}*/
//only this is executed
Template.internetPage.rendered = function(){
    $('select').material_select();
  console.log('rendered');
}

//and this is not
Template.internetPage.onRendered = function(){
  $('select').material_select();
  console.log('onRendered');
}

Template.internetPage.helpers({

  content: function(){

     var menuName = Template.currentData()._id;
     //console.log(menuName);

     var content = Menu.findOne({"name" : menuName});

     //console.log(content);
     if (content){
       return content.content;
     }


  }


});
