/*ServiceConfiguration.configurations.insert({
    service: "google",
    clientId: "609274823758-i6mdo55bkeeal3vfqjjbrrsultspg4ri.apps.googleusercontent.com",
    secret: "YwywvljaOpcXbqCbYE4lW6HX",
    loginStyle: "redirect"
});
*/

AccountsTemplates.configure({
  showForgotPasswordLink: true,
  forbidClientAccountCreation: false,
  homeRoutePath: '/private/my-account',
  defaultLayout: "layout1",
  defaultLayoutRegions: {
    nav: 'navigation',
    footer: {}
  },
  defaultContentRegion: 'main',
  defaultTemplate: 'authContent',
  texts: {
    errors: {
      loginForbidden: "L'identification a échoué."
    }
  },

})

// génère la route /sign-in
AccountsTemplates.configureRoute('signIn', {name: 'signIn'});
// génère la route /sign-up
AccountsTemplates.configureRoute('signUp', {name: 'signUp'});
