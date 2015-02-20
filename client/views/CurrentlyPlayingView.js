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

  template: _.template('<i>Now playing: <%= artist %> - <%= title %></i>'),

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
