FlowRouter.route('/', {
  name: 'internetHome',
  action: function() {
    BlazeLayout.render('layoutInternet', {
      nav : "internetNavigation",
      main: "internetHome"
    });
  }
});
