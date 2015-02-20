var CurrentlyPlayingView = Backbone.View.extend({

  tagName: 'div',

  initialize: function() {
    if (this.model) {
      this.render();
    }
  },

  setSong: function(song){
    this.model = song;
    this.render();
  },

  template: _.template('<h2>(<%= artist %>)</h2><h2><%= title %></h2>'),

  render: function(){
    console.log(this);
    console.log(this.model);
    return this.$el.html(this.template(this.model.attributes));
  }

});
