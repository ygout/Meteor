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
    this.register('getDevs', Meteor.subscribe('getDevs'));
    //this.register('getVotesCount', Meteor.subscribe('getVotesCount'));
  },
  name: 'home',
  action: function() {
    BlazeLayout.render('layout1', {
      nav: "navigation",
      main: "indexContent"
    });
  }
});

FlowRouter.route('/vote', {
  subscriptions: function(params, queryParams) {
    this.register('getDevs', Meteor.subscribe('getDevs'));
    //this.register('getVotesCount', Meteor.subscribe('getVotesCount'));
  },
  name: 'vote',
  action: function() {
    BlazeLayout.render('layout1', {
      nav: "navigation",
      main: "voteContent"
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

privateRoutes.route('/comments', {
  name: 'comments',
  subscriptions: function(params, queryParams) {
    this.register('getComments', Meteor.subscribe('getComments'));
  },
  action: function() {
    BlazeLayout.render('layout1', {
      nav: "navigation",
      main: "commentsContent"
    });
  }
});

privateRoutes.route('/comment/:comId', {
  name: 'comment',
  subscriptions: function(params, queryParams) {
    this.register('getComment', Meteor.subscribe('getComment', params));
  },
  action: function() {
    BlazeLayout.render('layout1', {
      nav: "navigation",
      main: "commentContent"
    });
  }
});
