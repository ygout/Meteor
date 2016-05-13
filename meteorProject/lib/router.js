FlowRouter.route('/', {
  name: 'home',
  action: function() {
    BlazeLayout.render('layout1', {
      nav : "navigation",
      main: "home"
    });
  }
});
