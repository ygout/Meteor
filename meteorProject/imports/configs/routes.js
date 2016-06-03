var privateRoutes = FlowRouter.group({
  prefix: '/private',
  name: 'private',
  triggersEnter: [AccountsTemplates.ensureSignedIn]
});

FlowRouter.notFound = {
  action: function() {
    BlazeLayout.render('layout1', {
      nav: "navigation",
      main: "notfoundContent"
    });
  }
};

FlowRouter.route('/', {
  subscriptions: function(params, queryParams) {
  },
  name: 'home',
  action: function() {
    BlazeLayout.render('layout1', {
      nav: "navigation",
      main: "indexContent"
    });
  }
});

FlowRouter.route('/sign-out', {
  name: 'signOut',
  action: function() {
    AccountsTemplates.logout();
  }
});

privateRoutes.route('/my-account', {
  name: 'myAccount',
  action: function() {
    BlazeLayout.render('layout1', {
      nav: "navigation",
      main: "accountContent"
    });
  }
});
