Template.internetHome.rendered = function () {
    $('.slider').slider();
    $('.collapsible').collapsible({
      accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    });
}

Template.internetHome.helpers = function () {
    var contenuHtml = "<p>Test</p>";
}
