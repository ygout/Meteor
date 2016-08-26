import { Menu } from '/lib/collections/menu.js';

Template.internetHome.rendered = function () {
    $('.slider').slider();
    $('.collapsible').collapsible({
      accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    });

}

Template.internetHome.onCreated (function(){
  //this.subscribe("testMenu");
  // var self = this;
  // self.autorun(function(){
  //   self.subscribe("testMenu",function(){
  //
  //   });
  // });

});
