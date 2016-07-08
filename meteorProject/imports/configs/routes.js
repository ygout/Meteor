var privateRoutes = FlowRouter.group({
  prefix: '/intranet',
  name: 'intranet',
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
  name: 'internetHome',
  action: function() {
    BlazeLayout.render('layoutInternet', {
      nav: "internetNavigation",
      main: "internetHome",
      footer: "internetFooter"
    });
  }
});

FlowRouter.route('/sign-out', {
  name: 'signOut',
  action: function() {
    AccountsTemplates.logout();
  }
});

privateRoutes.route('/', {
  subscriptions: function(params, queryParams) {
  },
  name: 'intranet',
  action: function() {
    BlazeLayout.render('layoutIntranet', {
      nav: "intranetNavigation",
      main: "intranetHome",
      footer: "intranetFooter"
    });
  }
});
