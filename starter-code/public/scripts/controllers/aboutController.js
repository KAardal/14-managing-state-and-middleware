'use strict';
var app = app || {};

(function(module) {
  const aboutController = {};

  // DONE: What is this function doing? Where is it called? Does it call any other functions, and if so, in what file(s) do those function(s) live?
  // This function selects and hides the element with the id of about.
  // It hides #about and all of its siblings, and then shows only #about.
  // It calls app.repos.requestRepos, passing in app.repoView.index as an argument.
  // It is called in routes.js.
  //
  aboutController.index = () => {
    $('#about').show().siblings().hide();
    app.repos.requestRepos(app.repoView.index);
  };

  module.aboutController = aboutController;
})(app);
