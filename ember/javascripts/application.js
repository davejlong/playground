App = Ember.Application.create({
  ready: function () {
    Ember.run.next(this, function () {
      $(document).foundation();
    });
  }
});

App.Router.map(function () {
  this.resource('about');
  this.resource('posts', function () {
    this.resource('post', { path: ':post_id' });
  });
});

App.PostsRoute = Ember.Route.extend({
  model: function () {
    return posts;
  }
});

App.PostRoute = Ember.Route.extend({
  model: function (params) {
    return posts.findBy('id', params.post_id);
  }
});

App.PostController = Ember.ObjectController.extend({
  isEditing: false,
  edit: function () {
    this.set('isEditing', true);
  },
  doneEditing: function () {
    this.set('isEditing', false);
  }
});


var posts = [];
(function (posts) {
  var randomRange = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  };
  function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
  }

  for (var i=0; i<=5; i++) {
    posts.push({
      id: i.toString(),
      title: chance.sentence({words: randomRange(2, 4)}),
      author: { name: chance.name() },
      date: randomDate(new Date(2011, 0, 1), new Date()),
      excerpt: chance.sentence(),
      body: chance.paragraph()
    });
  }
}(posts));
