'use strict';
var app = app || {};

(function(module) {
  const adminView = {
    initAdminPage : () => {
      let template = Handlebars.compile($('#author-template').text());
        // DONE: What is this function doing? Where is it called? Does it call any other functions, and if so, in what file(s) do those function(s) live?

        // This function appends an object with properties of a an author name and the amount of words that author has written to the element(s) with a class of author-stats. Then it sets the text of the .articles element with the value of app.Article.all.length, and the text of the .words element with the value of app.Article.numWordsAll().
        // This function calls app.Article.numWordsByAuthor() in article.js, and app.Article.numWordsAll() in article.js.
      app.Article.numWordsByAuthor().forEach(stat => $('.author-stats').append(template(stat)));
      app.Article.numWordsByAuthor().forEach(stat => console.log(stat));
      $('#blog-stats .articles').text(app.Article.all.length);
      $('#blog-stats .words').text(app.Article.numWordsAll());
    }
  };

  app.Article.fetchAll(adminView.initAdminPage);
  module.adminView = adminView;
})(app);
