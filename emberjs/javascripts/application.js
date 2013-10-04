App = Ember.Application.create({
  ready: function () {
    Ember.run.next(this, function () {
      $(document).foundation();
    });
  }
});
