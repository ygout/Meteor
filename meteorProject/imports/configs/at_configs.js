/*ServiceConfiguration.configurations.insert({
    service: "google",
    clientId: "609274823758-i6mdo55bkeeal3vfqjjbrrsultspg4ri.apps.googleusercontent.com",
    secret: "YwywvljaOpcXbqCbYE4lW6HX",
    loginStyle: "redirect"
});
*/

AccountsTemplates.configure({
  showForgotPasswordLink: false,
  forbidClientAccountCreation: true,
  homeRoutePath: '/intranet',
  defaultLayout: "layoutIntranet",
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